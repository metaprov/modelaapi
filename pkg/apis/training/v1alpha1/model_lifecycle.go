/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"encoding/json"
	"fmt"
	"path"
	"time"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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
	result.Spec.StudyName = study
	result.Spec.Task = task
	result.ObjectMeta.Labels = map[string]string{
		"study":      study,
		"datasource": schema,
	}
	return result
}

func (model Model) DefaultObjective() catalog.ObjectiveSpec {
	result := catalog.ObjectiveSpec{}
	if model.Spec.Task == catalog.BinaryClassification {
		return catalog.ObjectiveSpec{
			Metric: catalog.RocAuc,
			Goal:   catalog.MaximizeGoalType,
		}
	}

	if model.Spec.Task == catalog.Regression {
		return catalog.ObjectiveSpec{
			Metric: catalog.RMSE,
			Goal:   catalog.MinimizeGoalType,
		}
	}

	if model.Spec.Task == catalog.Forecasting || model.Spec.Task == catalog.PartitionForecast {
		return catalog.ObjectiveSpec{
			Metric: catalog.MAPE,
			Goal:   catalog.MinimizeGoalType,
		}
	}
	return result
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
	switch model.Spec.Task {
	case catalog.BinaryClassification:
		return BinaryClassificationModelReport
	case catalog.MultiClassification:
		return MultiClassificationModelReport
	case catalog.Regression:
		return RegressionModelReport
	case catalog.Forecasting:
		return ForecastModelReport
	case catalog.PartitionForecast:
		return PartitionTimeSeriesModelReport
	}
	return InvalidReport
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

func (model Model) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/studies/%s/models/%s",
		model.Namespace,
		model.Spec.VersionName,
		model.Spec.StudyName,
		model.Name)
}

func (model Model) ManifestURI() string {
	return fmt.Sprintf("%s/%s-model.yaml", model.RootURI(), model.Name)
}

// dataproducts/*/models/*/bin/model.joblib
func (model Model) WeightsURI() string {
	return fmt.Sprintf("%s/bin/model.joblib", model.RootURI())
}

func (model Model) ExplainModelURI() string {
	return fmt.Sprintf("%s/bin/explain-model.joblib", model.RootURI())
}

// dataproducts/*/models/*/metadata/model.json
func (model Model) ModelJsonURI() string {
	return fmt.Sprintf("%s/metadata/model.json", model.RootURI())
}

// dataproducts/*/models/*/metadata/study.json
func (model Model) StudyJsonURI() string {
	return fmt.Sprintf("%s/metadata/study.json", model.RootURI())
}

// dataproducts/*/models/*/metadata/schema.json
func (model Model) SchemaJsonURI() string {
	return fmt.Sprintf("%s/metadata/schema.json", model.RootURI())
}

// dataproducts/*/models/*/metadata/dataset.json
func (model Model) DatasetJsonURI() string {
	return fmt.Sprintf("%s/metadata/dataset.json", model.RootURI())
}

// dataproducts/*/models/*/metadata/productversion.json
func (model Model) ProductVersionJsonURI() string {
	return fmt.Sprintf("%s/metadata/productversion.json", model.RootURI())
}

// dataproducts/*/models/*/model-<name>-report.pdf
func (model Model) ReportURI() string {
	return fmt.Sprintf("%s/model-%s-report.pdf", model.RootURI(), model.Name)
}

func (model Model) TarURI() string {
	return fmt.Sprintf("%s/model.tar.gz", model.RootURI())
}

func (model Model) ForecastURI() string {
	return fmt.Sprintf("%s/model-%s-forecast.csv", model.RootURI(), model.Name)
}

// dataproducts/*/models/*/Dockerfile
func (model Model) DockerfileURI() string {
	return fmt.Sprintf("%s/Dockerfile", model.RootURI())
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
func (model *Model) CreateOrUpdateCond(cond metav1.Condition) {
	i := model.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		model.Status.Conditions = append(model.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := model.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	model.Status.Conditions[i] = current
}

func (model *Model) GetCondIdx(t string) int {
	for i, v := range model.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (model *Model) GetCond(t string) metav1.Condition {
	for _, v := range model.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
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
	model.Status.Phase = ModelPhasePending
	model.Status.Progress = 0
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTrained,
		Status: metav1.ConditionFalse,
		Reason: ReasonWaitingToTrain,
	})

}

func (model *Model) MarkTraining() {
	now := metav1.Now()
	if model.Status.TrainingStartedAt == nil {
		model.Status.TrainingStartedAt = &now
	}
	model.Status.Phase = ModelPhaseTraining
	model.Status.Progress = 10
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTrained,
		Status: metav1.ConditionFalse,
		Reason: ReasonTraining,
	})

}

func (model *Model) MarkReleasing() {
	model.Status.Phase = ModelPhaseReleasing
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelLive,
		Status: metav1.ConditionFalse,
		Reason: ReasonReleasing,
	})
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelShadow,
		Status: metav1.ConditionFalse,
		Reason: ReasonReleasing,
	})
}

func (model Model) IsReleasing() bool {
	return model.Status.Phase == ModelPhaseReleasing
}

func (model *Model) MarkRole(predictor string, role catalog.ModelRole) {
	if model.Status.ReleasedAt == nil {
		now := metav1.Now()
		model.Status.ReleasedAt = &now
	}
	model.Spec.Role = &role
	model.Labels[catalog.PredictorLabelKey] = predictor
	model.Labels[catalog.ModelRoleLabelKey] = string(role)
	switch role {
	case catalog.LiveModelRole:
		model.Status.Phase = ModelPhaseLive
		model.CreateOrUpdateCond(metav1.Condition{
			Type:   ModelLive,
			Status: metav1.ConditionTrue,
			Reason: ModelLive,
		})
		model.CreateOrUpdateCond(metav1.Condition{
			Type:   ModelShadow,
			Status: metav1.ConditionFalse,
			Reason: ModelShadow,
		})
	case catalog.ShadowModelRole:
		model.Status.Phase = ModelPhaseShadow
		model.CreateOrUpdateCond(metav1.Condition{
			Type:   ModelLive,
			Status: metav1.ConditionFalse,
			Reason: ModelLive,
		})
		model.CreateOrUpdateCond(metav1.Condition{
			Type:   ModelShadow,
			Status: metav1.ConditionTrue,
			Reason: ModelShadow,
		})

	case catalog.NoneModelRole:
		model.Status.Phase = ModelPhaseCompleted
		model.CreateOrUpdateCond(metav1.Condition{
			Type:   ModelLive,
			Status: metav1.ConditionFalse,
			Reason: ModelLive,
		})
		model.CreateOrUpdateCond(metav1.Condition{
			Type:   ModelShadow,
			Status: metav1.ConditionFalse,
			Reason: ModelShadow,
		})
	}

}

func (model *Model) Demote() {
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
	// Mark released as false in order to avoid creating the predictor again.
	noneRole := catalog.NoneModelRole
	model.Spec.Role = &noneRole

	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelLive,
		Status: metav1.ConditionFalse,
		Reason: ModelLive,
	})
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelShadow,
		Status: metav1.ConditionFalse,
		Reason: ModelShadow,
	})
}

func (model Model) IsLive() bool {
	return *model.Spec.Role == catalog.LiveModelRole
}

func (model Model) IsShadow() bool {
	return *model.Spec.Role == catalog.ShadowModelRole
}

func (model *Model) MarkTrained(ms []catalog.Measurement) {
	if model.Status.TrainingCompletedAt == nil {
		now := metav1.Now()
		model.Status.TrainingCompletedAt = &now
	}
	model.Status.Train = ms
	model.Status.Phase = ModelPhaseTrained
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTrained,
		Status: metav1.ConditionTrue,
		Reason: ModelTrained,
	})
	model.Status.Progress = 50
}

func (model *Model) MarkFailedToTrain(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelTrained,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	if model.Status.TrainingCompletedAt == nil {
		now := metav1.Now()
		model.Status.TrainingCompletedAt = &now
	}
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
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
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonWaitingToTrain
}

func (model Model) Training() bool {
	cond := model.GetCond(ModelTrained)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonTraining
}

func (model Model) TrainingFailed() bool {
	if model.TestingFailed() {
		return true
	}
	cond := model.GetCond(ModelTrained)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model Model) Trained() bool {
	return model.GetCond(ModelTrained).Status == metav1.ConditionTrue
}

// ---------------- Testing command

func (model *Model) MarkWaitingToTest() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTested,
		Status: metav1.ConditionFalse,
		Reason: ReasonWaitingToTest,
	})
	model.Status.Phase = ModelPhasePending
}

func (model *Model) MarkTesting() {
	if model.Status.TestingStartedAt == nil {
		now := metav1.Now()
		model.Status.TestingStartedAt = &now
	}
	model.Status.Phase = ModelPhaseTesting
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTested,
		Status: metav1.ConditionFalse,
		Reason: ReasonTesting,
	})
	model.Status.Progress = 70
}

func (model *Model) MarkTestingFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelTested,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to test." + err)
	model.Status.Progress = 100
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}

}

func (model *Model) MarkTested() {
	model.Status.Phase = ModelPhaseTested
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTested,
		Status: metav1.ConditionTrue,
		Reason: ModelTested,
	})
	if model.Status.TestingCompletedAt == nil {
		now := metav1.Now()
		model.Status.TestingCompletedAt = &now
	}
	model.Status.Progress = 80
}

////// Test

func (model Model) TestingFailed() bool {
	cond := model.GetCond(ModelTested)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model Model) Tested() bool {
	return model.GetCond(ModelTested).Status == metav1.ConditionTrue
}

func (model Model) Testing() bool {
	cond := model.GetCond(ModelTested)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonTesting
}

func (model Model) WaitingToTest() bool {
	return *model.Spec.Tested && model.Status.TestingStartedAt == nil
}

// -------------------- Unit testing

func (model *Model) MarkUnitTesting() {
	model.Status.Phase = ModelPhaseUnitTesting
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelUnitTested,
		Status: metav1.ConditionFalse,
		Reason: ReasonTesting,
	})
	model.Status.Progress = 75
}

func (model *Model) MarkUnitTested() {
	model.Status.Phase = ModelPhaseUnitTested
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelUnitTested,
		Status: metav1.ConditionTrue,
		Reason: ReasonTesting,
	})
	model.Status.Progress = 80
}

func (model *Model) MarkUnitTestFailed(msg string, stop bool) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelUnitTested,
		Status:  metav1.ConditionFalse,
		Reason:  string(ModelPhaseFailed),
		Message: "Failed to unit test." + msg,
	})
	if stop {
		model.Status.Phase = ModelPhaseFailed
		model.Status.FailureMessage = util.StrPtr(msg)
		model.Status.Progress = 100
		now := metav1.Now()
		if model.Status.CompletedAt == nil {
			model.Status.CompletedAt = &now
		}
	}
}

func (model Model) UnitTested() bool {
	return model.GetCond(ModelUnitTested).Status == metav1.ConditionTrue
}

// -------------------- Feedback

func (model *Model) MarkFeedbackTesting() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelFeedbackTested,
		Status: metav1.ConditionFalse,
		Reason: ReasonTesting,
	})
}

func (model *Model) MarkFeedbackTested() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelFeedbackTested,
		Status: metav1.ConditionTrue,
		Reason: ReasonTesting,
	})

}

func (model *Model) MarkFeedbackTestFailed(msg string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelFeedbackTested,
		Status:  metav1.ConditionFalse,
		Reason:  string(ModelPhaseFailed),
		Message: "Failed to test feedback." + msg,
	})
}

func (model Model) FeedbackTested() bool {
	return model.GetCond(ModelFeedbackTested).Status == metav1.ConditionTrue
}

//-------------------- profile command

func (model *Model) MarkProfiling() {
	model.Status.Phase = ModelPhaseProfiling
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelProfiled,
		Status: metav1.ConditionFalse,
		Reason: ReasonProfiling,
	})
	model.Status.Progress = 85
}

func (model *Model) MarkProfiled(uri string) {
	model.Status.Phase = ModelPhaseProfiled
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelProfiled,
		Status: metav1.ConditionTrue,
		Reason: ModelProfiled,
	})
	model.Status.ProfileURI = uri
	model.Status.Progress = 90
}

func (model *Model) MarkProfiledFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelProfiled,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

func (model Model) Profiled() bool {
	cond := model.GetCond(ModelProfiled)
	return cond.Status == metav1.ConditionTrue || cond.Reason == ReasonFailed
}

// ----------------------- Pruned

func (model *Model) MarkPruned(uri string) {
	model.Status.Phase = ModelPhasePruned
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPruned,
		Status: metav1.ConditionTrue,
		Reason: ModelPruned,
	})
	model.Status.Progress = 100
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
}

func (model Model) Pruned() bool {
	cond := model.GetCond(ModelPruned)
	return cond.Status == metav1.ConditionTrue
}

// --------------- Reporting
func (model *Model) MarkReporting() {
	model.Status.Phase = ModelPhaseReporting
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelReported,
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseReporting),
	})
	model.Status.Progress = 95

}

func (model *Model) MarkReported(name string) {
	model.Status.Phase = ModelPhaseReported
	model.Status.ReportName = name
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelReported,
		Status: metav1.ConditionTrue,
		Reason: ModelReported,
	})
	model.Status.Progress = 96
}

func (model *Model) MarkReportFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelReported,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

func (model Model) Reported() bool {
	cond := model.GetCond(ModelReported)
	return cond.Status == metav1.ConditionTrue || cond.Reason == ReasonFailed
}

// ------------------ Forecast

// Answer true if the model has been forecasted
func (model Model) Forecasted() bool {
	cond := model.GetCond(ModelForecasted)
	return cond.Status == metav1.ConditionTrue
}

func (model *Model) MarkForecasted() {
	model.Status.Phase = ModelPhaseForecasted
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelForecasted,
		Status: metav1.ConditionTrue,
		Reason: ModelForecasted,
	})
	model.Status.Progress = 100
}

func (model *Model) MarkForecastFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelForecasted,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to forecast." + err)
	model.Status.Progress = 100
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
	model.Status.FailureMessage = util.StrPtr(err)

}

func (model *Model) MarkForecasting() {
	model.Status.Phase = ModelPhaseForecasting
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelForecasted,
		Status: metav1.ConditionFalse,
		Reason: "Forecasting",
	})
	model.Status.Progress = 50
}

// =========================================
// Packaging
// =========================================

func (model *Model) MarkPackaging() {
	model.Status.Phase = ModelPhasePackaging
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPackaged,
		Status: metav1.ConditionFalse,
		Reason: "Packaging",
	})

}

func (model Model) Packaged() bool {
	cond := model.GetCond(ModelPackaged)
	return cond.Status == metav1.ConditionTrue
}

func (model *Model) MarkPackaged(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhasePackaged
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPackaged,
		Status: metav1.ConditionTrue,
		Reason: ModelPackaged,
	})
}

func (model *Model) MarkPackgedFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelPackaged,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to package." + err)
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}

}

// =========================================
// Explaining
// =========================================

func (model *Model) MarkExplaining() {
	model.Status.Phase = ModelPhaseExplaining
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelExplained,
		Status: metav1.ConditionFalse,
		Reason: "Explaining",
	})

}

func (model Model) Explained() bool {
	cond := model.GetCond(ModelExplained)
	return cond.Status == metav1.ConditionTrue || cond.Reason == ReasonFailed
}

func (model *Model) MarkExplained(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhaseExplained
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelExplained,
		Status: metav1.ConditionTrue,
		Reason: ModelExplained,
	})
}

func (model *Model) MarkExplainedFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelExplained,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

// ---------------------- publishing

func (model *Model) MarkPublishing() {
	model.Status.Phase = ModelPhasePublishing
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPublished,
		Status: metav1.ConditionFalse,
		Reason: ReasonPublishing,
	})

}

func (model Model) Published() bool {
	cond := model.GetCond(ModelPublished)
	return cond.Status == metav1.ConditionTrue
}

func (model *Model) MarkPublished(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhasePublished
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPublished,
		Status: metav1.ConditionTrue,
		Reason: ModelPublished,
	})
}

func (model *Model) MarkPublishFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelPublished,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to publish." + err)
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}

}

// --------------------- Train DriftStatus detector
func (model *Model) MarkTrainingDriftDetector() {
	model.Status.Phase = ModelPhaseTrainingDriftDetector
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTrainedDriftDetector,
		Status: metav1.ConditionFalse,
		Reason: ReasonPublishing,
	})

}

func (model Model) TrainedDriftDetector() bool {
	cond := model.GetCond(ModelTrainedDriftDetector)
	return cond.Status == metav1.ConditionTrue
}

func (model *Model) MarkTrainedDriftDetector(image string) {
	model.Status.ImageName = image
	model.Status.Phase = ModelPhaseTrainedDriftDetector
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTrainedDriftDetector,
		Status: metav1.ConditionTrue,
		Reason: ModelTrainedDriftDetector,
	})
}

func (model *Model) MarkTrainedDriftDetectorFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelTrainedDriftDetector,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr("Failed to train drift detector." + err)
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}

}

func (model *Model) MarkReleaseFailed(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelLive,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	now := metav1.Now()
	model.Status.TrainingCompletedAt = &now
	model.Status.CompletedAt = &now
	model.Status.FailureMessage = util.StrPtr("Failed to release." + err)
	model.Status.Progress = 100

}

// -------------- Resume

func (model *Model) MarkResumed() {

	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPaused,
		Status: metav1.ConditionFalse,
		Reason: ModelPaused,
	})
}

// -------------------- Abort

func (model *Model) MarkAborted() {
	model.Status.Phase = ModelPhaseAborted
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelAborted,
		Status: metav1.ConditionTrue,
		Reason: ModelAborted,
	})
	now := metav1.Now()
	if model.Status.CompletedAt == nil {
		model.Status.CompletedAt = &now
	}
}

func (model Model) Aborted() bool {
	cond := model.GetCond(ModelAborted)
	return cond.Status == metav1.ConditionTrue

}

func (model Model) Failed() bool {
	return model.Status.Phase == ModelPhaseFailed || model.TrainingFailed() || model.TestingFailed()
}

// -------------------- Maintaince

func (model *Model) MarkMaintain() {
	model.Status.Phase = ModelPhaseMaintenance
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelMaintenance,
		Status: metav1.ConditionTrue,
		Reason: ModelMaintenance,
	})
}

func (model Model) Maintain() bool {
	cond := model.GetCond(ModelMaintenance)
	return cond.Status == metav1.ConditionTrue
}

// ------------------ Ready

func (model *Model) MarkReady() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelReady,
		Status: metav1.ConditionTrue,
		Reason: ModelReady,
	})
	// mark the time
	now := metav1.Now()
	model.Status.CompletedAt = &now
	model.Status.Phase = ModelPhaseCompleted
	model.Status.Progress = 100
}

func (model Model) IsReady() bool {
	cond := model.GetCond(ModelReady)
	return cond.Status == metav1.ConditionTrue
}

/////////////////////// Paused

func (model Model) Paused() bool {
	cond := model.GetCond(ModelPaused)
	return *model.Spec.Paused && (cond.Status == metav1.ConditionFalse && cond.Reason == ReasonPausing) || cond.Status == metav1.ConditionTrue
}

func (model *Model) MarkPaused() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelPaused,
		Status: metav1.ConditionTrue,
		Reason: ModelPaused,
	})
}

/////////////////////////////// Archive

func (model *Model) MarkSaved() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelSaved,
		Status: metav1.ConditionTrue,
		Reason: ModelSaved,
	})
}

func (model Model) IsSaved() bool {
	cond := model.GetCond(ModelSaved)
	return cond.Status == metav1.ConditionTrue
}

func (model *Model) MarkArchived() {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelArchived,
		Status: metav1.ConditionTrue,
		Reason: ModelArchived,
	})
}

func (model Model) IsArchived() bool {
	cond := model.GetCond(ModelArchived)
	return cond.Status == metav1.ConditionTrue
}

func (model *Model) InitModelFromStudy(study *Study) {
	model.Namespace = study.Namespace
	model.Spec.Training = *study.Spec.TrainingTemplate.DeepCopy()
	model.Spec.StudyName = study.Name
	model.Spec.VersionName = study.Spec.VersionName
	model.Spec.DatasetName = study.Spec.DatasetName
	model.Spec.ModelClassName = study.Spec.ModelClassName
	model.Spec.ModelClassRunName = study.Spec.ModelClassRunName
	model.Spec.Task = study.Spec.Task
	model.Spec.Forecasting = study.Spec.FctTemplate.DeepCopy()
	model.Spec.Objective = study.Spec.Search.Objective
	model.ObjectMeta.Labels = study.ObjectMeta.Labels
	model.ObjectMeta.Labels[catalog.StudyLabelKey] = study.Name
	model.Spec.Pushed = study.Spec.ModelImagePushed
	model.Spec.Published = study.Spec.ModelPublished
	model.Spec.Training.LabRef = study.Spec.LabRef
	model.Spec.Fast = util.BoolPtr(*study.Spec.Fast)
	model.Spec.ModelVersion = study.Spec.ModelVersion
	model.Status.TrainDatasetLocation = study.Status.TrainDatasetLocation
	model.Status.TestDatasetLocation = study.Status.TestDatasetLocation
	model.Status.ValidationDataset = study.Status.ValidationDatasetLocation
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
	return model.Spec.Task == catalog.PartitionForecast
}

////////////////////////////////
// Class Query
////////////////////////////////

func (model Model) IsFE() bool {
	return model.Spec.ModelClass == catalog.FEModelStudyPhaseClassType
}

func (model Model) IsBaseline() bool {
	return model.Spec.ModelClass == catalog.BaselineModelStudyPhaseClassType
}

func (model Model) IsSearch() bool {
	return model.Spec.ModelClass == catalog.ModelStudyPhaseClassTypeSearch
}

func (model Model) IsTest() bool {
	return model.Spec.ModelClass == catalog.ModelStudyPhaseClassTypeTest
}

////////////////////////////////////////////////////////////
// Model Alerts
////////////////////////////////////////////////////////////

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
				"Study":      model.Spec.StudyName,
				"Task":       string(model.Spec.Task),
				"Objective":  string(model.Spec.Objective.Metric),
				"Algorithm":  model.Spec.Estimator.AlgorithmName,
				"Phase":      string(model.Status.Phase),
				"Score":      util.FtoA(&model.Status.CVScore),
				"Start Time": model.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if model.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = model.Status.CompletedAt.Format("01/2/2006 15:04:05")
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
				"Study":      model.Spec.StudyName,
				"Task":       string(model.Spec.Task),
				"Objective":  string(model.Spec.Objective.Metric),
				"Algorithm":  model.Spec.Estimator.AlgorithmName,
				"Phase":      string(model.Status.Phase),
				"Score":      util.FtoA(&model.Status.CVScore),
				"Start Time": model.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}

	if model.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = model.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}

	return result
}

// =================== Tun

func (model *Model) MarkTuned(ms []catalog.Measurement) {
	if model.Status.TuningCompletedAt == nil {
		now := metav1.Now()
		model.Status.TuningCompletedAt = &now
	}
	model.Status.Tune = ms
	model.Status.Phase = ModelPhaseTuned
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelTuned,
		Status: metav1.ConditionTrue,
		Reason: ModelTuned,
	})
	model.Status.Progress = 50
}

func (model *Model) MarkFailedToTune(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelTuned,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	if model.Status.TuningCompletedAt == nil {
		now := metav1.Now()
		model.Status.TuningCompletedAt = &now
	}
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
	// set the scores to 0, since Nan is invalid value
	model.Status.CVScore = 0 // we must put it at 0, since NaN is invalid value
	model.Status.Tune = make([]catalog.Measurement, 0)
	model.Status.FailureMessage = util.StrPtr("Failed to tune." + err)
	model.Status.Progress = 100

}

//////// Tuning

func (model Model) Tuning() bool {
	cond := model.GetCond(ModelTuned)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonTuned
}

func (model Model) TuningFailed() bool {
	if model.TuningFailed() {
		return true
	}
	cond := model.GetCond(ModelTuned)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model Model) Tuned() bool {
	return model.GetCond(ModelTuned).Status == metav1.ConditionTrue
}

func (model *Model) MarkMerged() {
	if model.Status.TuningCompletedAt == nil {
		now := metav1.Now()
		model.Status.TuningCompletedAt = &now
	}
	model.Status.Phase = ModelPhaseMerged
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelMerged,
		Status: metav1.ConditionTrue,
		Reason: ModelMerged,
	})
	model.Status.Progress = 50
}

func (model *Model) MarkFailedToMerge(err string) {
	model.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelMerged,
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseMerged
	if model.Status.TuningCompletedAt == nil {
		now := metav1.Now()
		model.Status.TuningCompletedAt = &now
	}
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
	// set the scores to 0, since Nan is invalid value
	model.Status.CVScore = 0 // we must put it at 0, since NaN is invalid value
	model.Status.FailureMessage = util.StrPtr("Failed to merge." + err)
	model.Status.Progress = 100

}

func (model *Model) MarkMerging() {

	model.Status.Phase = ModelPhaseMerging
	model.Status.Progress = 10
	model.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelMerged,
		Status: metav1.ConditionFalse,
		Reason: ReasonMerging,
	})

}

func (model *Model) Merging() bool {
	cond := model.GetCond(ModelMerged)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonTuned
}

func (model *Model) MerginingFailed() bool {
	if model.TuningFailed() {
		return true
	}
	cond := model.GetCond(ModelMerged)
	return cond.Status == metav1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model Model) Merged() bool {
	return model.GetCond(ModelMerged).Status == metav1.ConditionTrue
}

////////////////////////////
// Index file paths

func (model Model) IndexFileKey() string {
	return model.RootURI() + "/groups.json"
}

func (model Model) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", model.RootURI(), task, workerIndex)
}

// This is the index file for task
func (model Model) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", model.RootURI(), task)
}

////////////////////////////
// Group folders

func (model Model) PartitionFolder() string {
	return model.RootURI() + "/partitions/" + path.Join(model.Spec.Forecasting.Key...)
}

func (model Model) PartitionModelFolder() string {
	return model.PartitionFolder() + "/bin/model"
}

func (model Model) PartitionModelFile() string {
	return model.PartitionFolder() + "/bin/model.zip"
}

func (model Model) PartitionModelProfileFolder() string {
	return model.PartitionFolder() + "/profile"
}

func (model Model) PartitionModelReportFile() string {
	return model.PartitionFolder() + "/" + model.Name + ".pdf"
}

func (model Model) PartitionModelForecastFile() string {
	return model.PartitionFolder() + "/forecasts/forecast.csv"
}

// Compre this model to other model based on the objective.
func (model Model) CompareTestingScore(other *Model) bool {
	return model.Spec.Objective.Compare(model.Status.TestScore, other.Status.TestScore)
}
