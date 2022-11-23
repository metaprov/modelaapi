/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"encoding/json"
	"fmt"
	"github.com/dustin/go-humanize"
	"path"
	"time"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func NewHyperParameterValue() *HyperParameterValue {
	return &HyperParameterValue{}
}

func ParseHyperParametersFromJson(jsonStr string) ([]HyperParameterValue, error) {
	result := make([]HyperParameterValue, 0)
	m := make(map[string]interface{})
	err := json.Unmarshal([]byte(jsonStr), &m)
	if err != nil {
		return nil, err
	}
	for k, v := range m {
		// convert the param to string
		vStr := fmt.Sprintf("%v", v)
		e := NewHyperParameterValue()
		e.Name = k
		e.Value = vStr
		result = append(result, *e)
	}
	return result, nil
}

func HyperparamAsString(params []HyperParameterValue) string {
	if len(params) == 0 {
		return ""
	}
	result := string(params[0].Name) + "=" + fmt.Sprintf("%v", params[0].Value)
	for _, v := range params[1:] {
		result = result + "," + string(v.Name) + "=" + fmt.Sprintf("%v", params[0].Value)
	}
	return result
}

func NewModel(
	ns string,
	name string,
	bucket string,
	study string,
	schema string,
	task catalog.MLTask) *Model {
	result := &Model{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns

	result.Default()
	result.Spec.StudyName = &study
	result.Spec.Task = &task
	result.ObjectMeta.Labels = map[string]string{
		"study":      study,
		"datasource": schema,
	}
	return result
}

func (model Model) DefaultObjective() catalog.Metric {
	if *model.Spec.Task == catalog.BinaryClassification {
		return catalog.RocAuc
	}
	if *model.Spec.Task == catalog.Regression {
		return catalog.MSLE
	}
	return catalog.NoneMetric
}

func (model Model) DefaultImageName() string {
	return model.Name
}

func (model Model) IsExpired(minutes int) bool {
	now := time.Now()
	return (now.Second()-model.CreationTimestamp.Second())/60 < minutes
}

func (model Model) ReportName() string {
	return "model-report-" + model.ObjectMeta.Name
}

func (model Model) IsEnsemble() bool {
	return len(model.Spec.Ensemble.Models) > 0
}

func (model Model) ReportType() ReportType {
	switch *model.Spec.Task {
	case catalog.BinaryClassification:
		return BinaryClassificationModelReport
	case catalog.MultiClassification:
		return MultiClassificationModelReport
	case catalog.Regression:
		return RegressionModelReport
	case catalog.Forecasting:
		return ForecastModelReport
	case catalog.PartitionForecast:
		return GroupTimeSeriesModelReport
	}
	return InvalidReport
}

func (model Model) Age() string {
	return humanize.Time(model.CreationTimestamp.Time)
}

//==============================================================================
// Finalizer
//==============================================================================

func (model Model) HasFinalizer() bool {
	return util.HasFin(&model.ObjectMeta, training.GroupName)
}
func (model *Model) AddFinalizer() { util.AddFin(&model.ObjectMeta, training.GroupName) }
func (model *Model) RemoveFinalizer() {
	util.RemoveFin(&model.ObjectMeta, training.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

func (model Model) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/studies/%s/models/%s",
		model.Namespace,
		*model.Spec.VersionName,
		*model.Spec.StudyName,
		model.Name)
}

func (model Model) ManifestUri() string {
	return fmt.Sprintf("%s/%s-model.yaml", model.RootUri(), model.Name)
}

//    dataproducts/*/models/*/bin/model.joblib
func (model Model) WeightsUri() string {
	return fmt.Sprintf("%s/bin/model.joblib", model.RootUri())
}

func (model Model) ExplainModelUri() string {
	return fmt.Sprintf("%s/bin/explain-model.joblib", model.RootUri())
}

//    dataproducts/*/models/*/metadata/model.json
func (model Model) ModelJsonUri() string {
	return fmt.Sprintf("%s/metadata/model.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/study.json
func (model Model) StudyJsonUri() string {
	return fmt.Sprintf("%s/metadata/study.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/schema.json
func (model Model) SchemaJsonUri() string {
	return fmt.Sprintf("%s/metadata/schema.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/dataset.json
func (model Model) DatasetJsonUri() string {
	return fmt.Sprintf("%s/metadata/dataset.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/productversion.json
func (model Model) ProductVersionJsonUri() string {
	return fmt.Sprintf("%s/metadata/productversion.json", model.RootUri())
}

//    dataproducts/*/models/*/model-<name>-report.pdf
func (model Model) ReportUri() string {
	return fmt.Sprintf("%s/model-%s-report.pdf", model.RootUri(), model.Name)
}

func (model Model) TarUri() string {
	return fmt.Sprintf("%s/model.tar.gz", model.RootUri())
}

func (model Model) ForecastUri() string {
	return fmt.Sprintf("%s/model-%s-forecast.csv", model.RootUri(), model.Name)
}

//    dataproducts/*/models/*/Dockerfile
func (model Model) DockerfileUri() string {
	return fmt.Sprintf("%s/Dockerfile", model.RootUri())
}

func (model Model) CombinedImageName() string {
	return model.Name + ":" + "combined"
}

// return the result for a metric
func (model Model) GetTestResult(metric catalog.Metric) float64 {
	for _, v := range model.Status.Train {
		if *v.Metric == metric {
			return *v.Value
		}
	}
	return 0
}

// Merge or update condition
func (model *Model) CreateOrUpdateCond(cond ModelCondition) {
	i := model.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		model.Status.Conditions = append(model.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := model.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	model.Status.Conditions[i] = current
}

func (model *Model) GetCondIdx(t ModelConditionType) int {
	for i, v := range model.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (model *Model) GetCond(t ModelConditionType) ModelCondition {
	for _, v := range model.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ModelCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (model Model) StatusString() string {
	return string(model.Status.Phase)
}

func (model Model) Key() string {
	return fmt.Sprintf("%s/%s/%s", "models", model.Namespace, model.Name)
}

func (model Model) DepotKey() string {
	return fmt.Sprintf("%s/%s", "modela/depot/models", model.Key())
}

func (model Model) LiveKey() string {
	return fmt.Sprintf("%s/%s", "modela/live/models", model.Key())
}

func (model Model) ArchiveKey() string {
	return fmt.Sprintf("%s/%s", "modela/archive/models", model.Key())
}

func (model Model) Accuracy() float64 {
	return model.GetTestResult(catalog.Accuracy)
}

func (model Model) R2() float64 {
	return model.GetTestResult(catalog.R2)
}

func (model Model) RMSE() float64 {
	return model.GetTestResult(catalog.RMSE)
}

func (model Model) RMSLE() float64 {
	return model.GetTestResult(catalog.RMSLE)
}

func (model Model) MAPE() float64 {
	return model.GetTestResult(catalog.MAPE)
}

func (model Model) Precision() float64 {
	return model.GetTestResult(catalog.PrecisionBinary)
}

func (model Model) Recall() float64 {
	return model.GetTestResult(catalog.RecallBinary)
}

func (model Model) F1() float64 {
	return model.GetTestResult(catalog.F1Binary)
}

func (model *Model) SetRung(v int32) {
	model.Spec.Training.SH.Rung = util.Int32Ptr(v)
	model.Labels["rung"] = util.ItoA(model.Spec.Training.SH.Rung)
}

func (model *Model) SetBracket(v int32) {
	model.Spec.Training.SH.Bracket = util.Int32Ptr(v)
	model.Labels["bracket"] = util.ItoA(model.Spec.Training.SH.Bracket)
}

func ParseModelYaml(content []byte) (*Model, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Model)
	return r, nil
}

const (
	ReasonFailed                        = "Failed"
	ReasonTesting                       = "Testing"
	ReasonTuning                        = "Tuning"
	ReasonTuned                         = "Tuned"
	ReasonMerging                       = "Merging"
	ReasonMerged                        = "Merged"
	ReasonReporting                     = "Reporting"
	ReasonProfiling                     = "Profiling"
	ReasonPublishing                    = "Publishing"
	ReasonReleasing                     = "Releasing"
	ReasonPredicting                    = "Predicting"
	ReasonCreatingTrainingDataset       = "CreatingTrainingDataset"
	ReasonCreatedTrainingDataset        = "CreatedTrainingDataset"
	ReasonTrainingDatasetPending        = "TrainingDatasetPending"
	ReasonFailedToCreateTrainingDataset = "FailedToCreateTrainingDataset"
	ReasonWaitingForPromotion           = "WaitingForPromotion"
	ReasonPromoting                     = "Promoting"
	ReasonFailedToPromote               = "FailedToPromote"
	ReasonTraining                      = "Training"
	ReasonSyncing                       = "Syncing"
	ReasonGeneratingOnlineDataset       = "GeneratingOnlineDataset"
	ReasonGeneratedOnlineDataset        = "GeneratedOnlineDataset"
	ReasonDeploying                     = "Deploying"
	ReasonBaselining                    = "Baselining"
	ReasonFeatureEngineering            = "FeatureEngineering"
	ReasonCreateEnsemble                = "CreateEnsemble"
	ReasonPausing                       = "Pausing"
	ReasonWaitingToTrain                = "WaitingToTrain"
	ReasonWaitingToTest                 = "WaitingToTest"
	ReasonUnitTesting                   = "UnitTesting"
)

// ----------------- Training commands

func (model *Model) MarkWaitingToTrain() {
	now := metav1.Now()
	if model.Status.StartTime == nil {
		model.Status.StartTime = &now
	}
	model.Status.Phase = ModelPhasePending
	model.Status.Progress = 0
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrained,
		Status: v1.ConditionFalse,
		Reason: ReasonWaitingToTrain,
	})

}

func (model *Model) MarkTraining() {
	now := metav1.Now()
	if model.Status.StartTime == nil {
		model.Status.StartTime = &now
	}
	if model.Status.TrainingStartTime == nil {
		model.Status.TrainingStartTime = &now
	}
	model.Status.Phase = ModelPhaseTraining
	model.Status.Progress = 10
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrained,
		Status: v1.ConditionFalse,
		Reason: ReasonTraining,
	})

}

func (model *Model) MarkReleasing() {
	model.Status.Phase = ModelPhaseReleasing
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReleased,
		Status: v1.ConditionFalse,
		Reason: ReasonReleasing,
	})
}

func (model *Model) MarkPredicting() {
	model.Status.Phase = ModelPhasePredicting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPredicted,
		Status: v1.ConditionFalse,
		Reason: ReasonPredicting,
	})
}

func (model *Model) MarkPredicted() {
	if model.Status.PredictedAt == nil {
		now := metav1.Now()
		model.Status.PredictedAt = &now
	}
	model.Status.Phase = ModelPhasePredicted
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPredicted,
		Status: v1.ConditionTrue,
	})
}

func (model Model) IsReleasing() bool {
	return model.Status.Phase == ModelPhaseReleasing
}

func (model *Model) MarkLive(predictor string, role catalog.ModelRole) {
	if model.Status.ReleasedAt == nil {
		now := metav1.Now()
		model.Status.ReleasedAt = &now
	}
	model.Labels[catalog.PredictorLabelKey] = predictor
	model.Labels[catalog.ModelRoleLabelKey] = string(role)
	switch role {
	case catalog.ModelRoleLive:
		model.Status.Phase = ModelPhaseLive
	case catalog.ModelRoleShadow:
		model.Status.Phase = ModelPhaseShadow
	}

	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReleased,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkUndeployed() {
	model.Status.ReleasedAt = nil
	labels := make(map[string]string)
	for k, v := range model.Labels {
		if k == catalog.PredictorLabelKey || k == catalog.ModelRoleLabelKey {
			continue
		}
		labels[k] = v
	}
	model.Labels = labels
	model.Status.Phase = ModelPhaseCompleted
	model.Status.PredictorName = ""
	// Mark released as false in order to avoid creating the predictor again.
	model.Spec.Released = util.BoolPtr(false)

	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReleased,
		Status: v1.ConditionTrue,
	})
}

func (model Model) IsLive() bool {
	cond := model.GetCond(ModelReleased)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkTrained(ms []catalog.Measurement) {
	if model.Status.TrainingEndTime == nil {
		now := metav1.Now()
		model.Status.TrainingEndTime = &now
	}
	model.Status.Train = ms
	model.Status.Phase = ModelPhaseTrained
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrained,
		Status: v1.ConditionTrue,
	})
	model.Status.Progress = 50
}

func (model *Model) MarkFailedToTrain(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelTrained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	if model.Status.TrainingEndTime == nil {
		now := metav1.Now()
		model.Status.TrainingEndTime = &now
	}
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}
	// set the scores to 0, since Nan is invalid value
	model.Status.CVScore = 0 // we must put it at 0, since NaN is invalid value
	model.Status.Train = make([]catalog.Measurement, 0)
	model.Status.FailureMessage = util.StrPtr("Failed to train." + err)
	model.Status.Progress = 100

}

func (model Model) WaitingToTrain() bool {
	if len(model.Status.Conditions) == 0 {
		return true
	}
	cond := model.GetCond(ModelTrained)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonWaitingToTrain
}

func (model Model) Training() bool {
	cond := model.GetCond(ModelTrained)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonTraining
}

func (model Model) TrainingFailed() bool {
	if model.TestingFailed() {
		return true
	}
	cond := model.GetCond(ModelTrained)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model Model) Trained() bool {
	return model.GetCond(ModelTrained).Status == v1.ConditionTrue
}

// ---------------- Testing command

func (model *Model) MarkWaitingToTest() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTested,
		Status: v1.ConditionFalse,
		Reason: ReasonWaitingToTest,
	})
	model.Status.Phase = ModelPhasePending
}

func (model *Model) MarkTesting() {
	if model.Status.TestingStartTime == nil {
		now := metav1.Now()
		model.Status.TestingStartTime = &now
	}
	model.Status.Phase = ModelPhaseTesting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTested,
		Status: v1.ConditionFalse,
		Reason: ReasonTesting,
	})
	model.Status.Progress = 70
}

func (model *Model) MarkTestingFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelTested,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to test." + err)
	model.Status.Progress = 100
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}

}

func (model *Model) MarkTested() {
	model.Status.Phase = ModelPhaseTested
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTested,
		Status: v1.ConditionTrue,
	})
	if model.Status.TestingEndTime == nil {
		now := metav1.Now()
		model.Status.TestingEndTime = &now
	}
	model.Status.Progress = 80
}

////// Test

func (model Model) TestingFailed() bool {
	cond := model.GetCond(ModelTested)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model Model) Tested() bool {
	return model.GetCond(ModelTested).Status == v1.ConditionTrue
}

func (model Model) Testing() bool {
	cond := model.GetCond(ModelTested)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonTesting
}

func (model Model) WaitingToTest() bool {
	return *model.Spec.Tested && model.Status.TestingStartTime == nil
}

// -------------------- Unit testing

func (model *Model) MarkUnitTesting() {
	model.Status.Phase = ModelPhaseUnitTesting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelUnitTested,
		Status: v1.ConditionFalse,
		Reason: ReasonTesting,
	})
	model.Status.Progress = 75
}

func (model *Model) MarkUnitTested() {
	model.Status.Phase = ModelPhaseUnitTested
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelUnitTested,
		Status: v1.ConditionTrue,
		Reason: ReasonTesting,
	})
	model.Status.Progress = 80
}

func (model *Model) MarkUnitTestFailed(msg string, stop bool) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelUnitTested,
		Status:  v1.ConditionFalse,
		Reason:  string(ModelPhaseFailed),
		Message: "Failed to unit test." + msg,
	})
	if stop {
		model.Status.Phase = ModelPhaseFailed
		model.Status.FailureMessage = util.StrPtr(msg)
		model.Status.Progress = 100
		now := metav1.Now()
		if model.Status.EndTime == nil {
			model.Status.EndTime = &now
		}
	}
}

func (model Model) UnitTested() bool {
	return model.GetCond(ModelUnitTested).Status == v1.ConditionTrue
}

// -------------------- Feedback

func (model *Model) MarkFeedbackTesting() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelFeedbackTested,
		Status: v1.ConditionFalse,
		Reason: ReasonTesting,
	})
}

func (model *Model) MarkFeedbackTested() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelFeedbackTested,
		Status: v1.ConditionTrue,
		Reason: ReasonTesting,
	})

}

func (model *Model) MarkFeedbackTestFailed(msg string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelFeedbackTested,
		Status:  v1.ConditionFalse,
		Reason:  string(ModelPhaseFailed),
		Message: "Failed to test feedback." + msg,
	})
}

func (model Model) FeedbackTested() bool {
	return model.GetCond(ModelFeedbackTested).Status == v1.ConditionTrue
}

//-------------------- profile command

func (model *Model) MarkProfiling() {
	model.Status.Phase = ModelPhaseProfiling
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelProfiled,
		Status: v1.ConditionFalse,
		Reason: ReasonProfiling,
	})
	model.Status.Progress = 85
}

func (model *Model) MarkProfiled(uri string) {
	model.Status.Phase = ModelPhaseProfiled
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelProfiled,
		Status: v1.ConditionTrue,
	})
	model.Status.ProfileUri = uri
	model.Status.Progress = 90
}

func (model *Model) MarkProfiledFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelProfiled,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

func (model Model) Profiled() bool {
	cond := model.GetCond(ModelProfiled)
	return cond.Status == v1.ConditionTrue || cond.Reason == ReasonFailed
}

// ----------------------- Pruned

func (model *Model) MarkPruned(uri string) {
	model.Status.Phase = ModelPhasePruned
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPruned,
		Status: v1.ConditionTrue,
	})
	model.Status.Progress = 100
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}
}

func (model Model) Pruned() bool {
	cond := model.GetCond(ModelPruned)
	return cond.Status == v1.ConditionTrue
}

// --------------- Reporting
func (model *Model) MarkReporting() {
	model.Status.Phase = ModelPhaseReporting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReported,
		Status: v1.ConditionFalse,
		Reason: string(ModelPhaseReporting),
	})
	model.Status.Progress = 95

}

func (model *Model) MarkReported(name string) {
	model.Status.Phase = ModelPhaseReported
	model.Status.ReportName = name
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReported,
		Status: v1.ConditionTrue,
	})
	model.Status.Progress = 96
}

func (model *Model) MarkReportFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelReported,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

func (model Model) Reported() bool {
	cond := model.GetCond(ModelReported)
	return cond.Status == v1.ConditionTrue || cond.Reason == ReasonFailed
}

// ------------------ Forecast

// Answer true if the model has been forecasted
func (model Model) Forecasted() bool {
	cond := model.GetCond(ModelForecasted)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkForecasted() {
	model.Status.Phase = ModelPhaseForecasted
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelForecasted,
		Status: v1.ConditionTrue,
	})
	model.Status.Progress = 100
}

func (model *Model) MarkForecastFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelForecasted,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to forecast." + err)
	model.Status.Progress = 100
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}
	model.Status.FailureMessage = util.StrPtr(err)

}

func (model *Model) MarkForecasting() {
	model.Status.Phase = ModelPhaseForecasting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelForecasted,
		Status: v1.ConditionFalse,
		Reason: "Forecasting",
	})
	model.Status.Progress = 50
}

// =========================================
// Packaging
// =========================================

func (model *Model) MarkPackaging() {
	model.Status.Phase = ModelPhasePackaging
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPackaged,
		Status: v1.ConditionFalse,
		Reason: "Packaging",
	})

}

func (model Model) Packaged() bool {
	cond := model.GetCond(ModelPackaged)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkPackaged(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhasePackaged
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPackaged,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkPackgedFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelPackaged,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to package." + err)
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}

}

// =========================================
// Explaining
// =========================================

func (model *Model) MarkExplaining() {
	model.Status.Phase = ModelPhaseExplaining
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelExplained,
		Status: v1.ConditionFalse,
		Reason: "Explaining",
	})

}

func (model Model) Explained() bool {
	cond := model.GetCond(ModelExplained)
	return cond.Status == v1.ConditionTrue || cond.Reason == ReasonFailed
}

func (model *Model) MarkExplained(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhaseExplained
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelExplained,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkExplainedFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelExplained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

// ---------------------- publishing

func (model *Model) MarkPublishing() {
	model.Status.Phase = ModelPhasePublishing
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPublished,
		Status: v1.ConditionFalse,
		Reason: ReasonPublishing,
	})

}

func (model Model) Published() bool {
	cond := model.GetCond(ModelPublished)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkPublished(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhasePublished
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPublished,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkPublishFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelPublished,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to publish." + err)
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}

}

// --------------------- Train DriftStatus detector
func (model *Model) MarkTrainingDriftDetector() {
	model.Status.Phase = ModelPhaseTrainingDriftDetector
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrainedDriftDetector,
		Status: v1.ConditionFalse,
		Reason: ReasonPublishing,
	})

}

func (model Model) TrainedDriftDetector() bool {
	cond := model.GetCond(ModelTrainedDriftDetector)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkTrainedDriftDetector(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhaseTrainedDriftDetector
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrainedDriftDetector,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkTrainedDriftDetectorFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelTrainedDriftDetector,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to train drift detector." + err)
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}

}

func (model *Model) MarkReleaseFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelConditionType(ModelReleased),
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	now := metav1.Now()
	model.Status.TrainingEndTime = &now
	model.Status.EndTime = &now
	model.Status.FailureMessage = util.StrPtr("Failed to release." + err)
	model.Status.Progress = 100

}

// -------------- Resume

func (model *Model) MarkResumed() {

	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPaused,
		Status: v1.ConditionFalse,
		Reason: "",
	})
}

// -------------------- Abort

func (model *Model) MarkAborted() {
	model.Status.Phase = ModelPhaseAborted
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelAborted,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if model.Status.EndTime == nil {
		model.Status.EndTime = &now
	}
}

func (model Model) Aborted() bool {
	cond := model.GetCond(ModelAborted)
	return cond.Status == v1.ConditionTrue

}

func (model Model) Failed() bool {
	return model.Status.Phase == ModelPhaseFailed || model.TrainingFailed() || model.TestingFailed()
}

// -------------------- Maintaince

func (model *Model) MarkMaintain() {
	model.Status.Phase = ModelPhaseMaintenance
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelMaintenance,
		Status: v1.ConditionTrue,
	})
}

func (model Model) Maintain() bool {
	cond := model.GetCond(ModelMaintenance)
	return cond.Status == v1.ConditionTrue
}

// ------------------ Ready

func (model *Model) MarkReady() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReady,
		Status: v1.ConditionTrue,
	})
	// mark the time
	now := metav1.Now()
	model.Status.EndTime = &now
	model.Status.Phase = ModelPhaseCompleted
	model.Status.Progress = 100
}

func (model Model) IsReady() bool {
	cond := model.GetCond(ModelReady)
	return cond.Status == v1.ConditionTrue
}

/////////////////////// Paused

func (model Model) Paused() bool {
	cond := model.GetCond(ModelPaused)
	return *model.Spec.Paused && (cond.Status == v1.ConditionFalse && cond.Reason == ReasonPausing) || cond.Status == v1.ConditionTrue
}

func (model *Model) MarkPaused() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPaused,
		Status: v1.ConditionTrue,
	})
}

/////////////////////////////// Archive

func (model *Model) MarkSaved() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelSaved,
		Status: v1.ConditionTrue,
	})
}

func (model Model) IsSaved() bool {
	cond := model.GetCond(ModelSaved)
	return cond.Status == v1.ConditionTrue
}

func (model Model) IsPredicted() bool {
	cond := model.GetCond(ModelPredicted)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkArchived() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelArchived,
		Status: v1.ConditionTrue,
	})
}

func (model Model) IsArchived() bool {
	cond := model.GetCond(ModelArchived)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) InitModelFromStudy(study *Study) {
	model.Namespace = study.Namespace
	model.Spec.Training = *study.Spec.TrainingTemplate.DeepCopy()
	model.Spec.StudyName = &study.Name
	model.Spec.VersionName = study.Spec.VersionName
	model.Spec.DatasetName = study.Spec.DatasetName
	model.Spec.ModelClassName = study.Spec.ModelClassName
	model.Spec.Task = study.Spec.Task
	model.Spec.Forecasting = study.Spec.FctTemplate.DeepCopy()
	model.Spec.Objective = study.Spec.Search.Objective
	model.ObjectMeta.Labels = study.ObjectMeta.Labels
	model.ObjectMeta.Labels[catalog.StudyLabelKey] = study.Name
	model.Spec.Pushed = study.Spec.ModelImagePushed
	model.Spec.Published = study.Spec.ModelPublished
	model.Spec.Training.LabRef = study.Spec.LabRef
	model.Spec.Location = &data.DataLocation{
		BucketName: study.Spec.Location.BucketName,
		Path:       util.StrPtr(path.Join(*study.Spec.Location.Path, "models", model.Name)),
	}
	model.Spec.Fast = util.BoolPtr(*study.Spec.Fast)
	model.Spec.ModelVersion = study.Spec.ModelVersion
	model.Status.TrainDatasetLocation = study.Status.TrainDatasetLocation
	model.Status.TestDatasetLocation = study.Status.TestDatasetLocation
	model.Status.ValidationDataset = study.Status.ValidationDataset
	model.Status.TrainingDataHash.TestingHash = study.Status.TrainingDataHash.TestingHash
	model.Status.TrainingDataHash.TrainingHash = study.Status.TrainingDataHash.TrainingHash
	model.Status.TrainingDataHash.ValidationHash = study.Status.TrainingDataHash.TrainingHash

}

func (model Model) Done() bool {
	if *model.Spec.Tested {
		return model.Tested() || model.TestingFailed()
	}
	return model.Trained() || model.TrainingFailed()
}

func (model Model) OpName() string {
	return model.Namespace + "-" + model.Name
}

func (model Model) IsGroup() bool {
	return *model.Spec.Task == catalog.PartitionForecast
}

////////////////////////////////
// Class Query
////////////////////////////////

func (model Model) IsFE() bool {
	return model.Spec.ModelClass == catalog.ModelStudyPhaseClassTypeFE
}

func (model Model) IsBaseline() bool {
	return model.Spec.ModelClass == catalog.ModelStudyPhaseClassTypeBaseline
}

func (model Model) IsSearch() bool {
	return model.Spec.ModelClass == catalog.ModelStudyPhaseClassTypeSearch
}

func (model Model) IsTest() bool {
	return model.Spec.ModelClass == catalog.ModelStudyPhaseClassTypeTest
}

////////////////////////////////////////////////////////////
// Model Alerts

func (model Model) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Model %s completed successfully", model.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: model.Name,
			Namespace:    model.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        model.Spec.Owner,
			Fields: map[string]string{
				"Entity":     *model.Spec.DatasetName,
				"Study":      *model.Spec.StudyName,
				"Task":       string(*model.Spec.Task),
				"Objective":  string(*model.Spec.Objective),
				"Algorithm":  model.Spec.Estimator.AlgorithmName,
				"Phase":      string(model.Status.Phase),
				"Score":      util.FtoA(&model.Status.CVScore),
				"Start Time": model.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if model.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = model.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result

}

func (model Model) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Model %s failed with error %v", model.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: model.Name,
			Namespace:    model.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        model.Spec.Owner,
			Fields: map[string]string{
				"Entity":     *model.Spec.DatasetName,
				"Study":      *model.Spec.StudyName,
				"Task":       string(*model.Spec.Task),
				"Objective":  string(*model.Spec.Objective),
				"Algorithm":  model.Spec.Estimator.AlgorithmName,
				"Phase":      string(model.Status.Phase),
				"Score":      util.FtoA(&model.Status.CVScore),
				"Start Time": model.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if model.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = model.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

// =================== Tun

func (model *Model) MarkTuned(ms []catalog.Measurement) {
	if model.Status.TuningEndTime == nil {
		now := metav1.Now()
		model.Status.TuningEndTime = &now
	}
	model.Status.Tune = ms
	model.Status.Phase = ModelPhaseTuned
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTuned,
		Status: v1.ConditionTrue,
	})
	model.Status.Progress = 50
}

func (model *Model) MarkFailedToTune(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelTuned,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	if model.Status.TuningEndTime == nil {
		now := metav1.Now()
		model.Status.TuningEndTime = &now
	}
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}
	// set the scores to 0, since Nan is invalid value
	model.Status.CVScore = 0 // we must put it at 0, since NaN is invalid value
	model.Status.Tune = make([]catalog.Measurement, 0)
	model.Status.FailureMessage = util.StrPtr("Failed to tune." + err)
	model.Status.Progress = 100

}

//////// Tuning

func (model *Model) Tuning() bool {
	cond := model.GetCond(ModelTuned)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonTuned
}

func (model *Model) TuningFailed() bool {
	if model.TuningFailed() {
		return true
	}
	cond := model.GetCond(ModelTuned)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model *Model) Tuned() bool {
	return model.GetCond(ModelTuned).Status == v1.ConditionTrue
}

func (model *Model) MarkMerged() {
	if model.Status.TuningEndTime == nil {
		now := metav1.Now()
		model.Status.TuningEndTime = &now
	}
	model.Status.Phase = ModelPhaseMerged
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelMerged,
		Status: v1.ConditionTrue,
	})
	model.Status.Progress = 50
}

func (model *Model) MarkFailedToMerge(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelMerged,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseMerged
	if model.Status.TuningEndTime == nil {
		now := metav1.Now()
		model.Status.TuningEndTime = &now
	}
	if model.Status.EndTime == nil {
		now := metav1.Now()
		model.Status.EndTime = &now
	}
	// set the scores to 0, since Nan is invalid value
	model.Status.CVScore = 0 // we must put it at 0, since NaN is invalid value
	model.Status.FailureMessage = util.StrPtr("Failed to merge." + err)
	model.Status.Progress = 100

}

func (model *Model) MarkMerging() {

	model.Status.Phase = ModelPhaseMerging
	model.Status.Progress = 10
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelMerged,
		Status: v1.ConditionFalse,
		Reason: ReasonMerging,
	})

}

func (model *Model) Merging() bool {
	cond := model.GetCond(ModelMerged)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonTuned
}

func (model *Model) MerginingFailed() bool {
	if model.TuningFailed() {
		return true
	}
	cond := model.GetCond(ModelMerged)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model *Model) Merged() bool {
	return model.GetCond(ModelMerged).Status == v1.ConditionTrue
}

////////////////////////////
// Index file paths

func (model *Model) IndexFileKey() string {
	return model.RootUri() + "/groups.json"
}

func (model *Model) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", model.RootUri(), task, workerIndex)
}

// This is the index file for task
func (model *Model) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", model.RootUri(), task)
}

////////////////////////////
// Group folders

func (model *Model) GroupFolder() string {
	return model.RootUri() + "/groups/" + path.Join(model.Spec.Forecasting.Key...)
}

func (model *Model) GroupModelFolder() string {
	return model.GroupFolder() + "/bin/model"
}

func (model *Model) GroupModelFile() string {
	return model.GroupFolder() + "/bin/model.zip"
}

func (model *Model) GroupModelProfileFolder() string {
	return model.GroupFolder() + "/profile"
}

func (model *Model) GroupModelReportFile() string {
	return model.GroupFolder() + "/" + model.Name + ".pdf"
}

func (model *Model) GroupModelForecastFile() string {
	return model.GroupFolder() + "/forecasts/forecast.csv"
}

// Compre this model to other model based on the objective.
func (model *Model) CompareTestingScore(other *Model) bool {
	return model.Spec.Objective.Compare(model.Status.TestScore, other.Status.TestScore)
}
