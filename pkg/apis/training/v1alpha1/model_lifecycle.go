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

	"github.com/dustin/go-humanize"
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/training"
	"github.com/metaprov/modeldapi/pkg/util"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"

	"github.com/ghodss/yaml"
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
		"study":  study,
		"schema": schema,
	}
	return result
}

func (model *Model) DefaultObjective() catalog.Metric {
	if *model.Spec.Task == catalog.BinaryClassification {
		return catalog.RocAuc
	}
	if *model.Spec.Task == catalog.Regression {
		return catalog.MSLE
	}
	return catalog.UnknownMetric
}

func (model *Model) DefaultImageName() string {
	return model.Name
}

func (model *Model) IsExpired(minutes int) bool {
	now := time.Now()
	return (now.Second()-model.CreationTimestamp.Second())/60 < minutes
}

func (model *Model) ReportName() string {
	return "modeld-report-" + model.ObjectMeta.Name
}

func (model *Model) IsEnsemble() bool {
	return model.Spec.Estimator.AlgorithmName == string(catalog.StackingEnsemble)
}

func (model *Model) ReportType() ReportType {
	switch *model.Spec.Task {
	case catalog.BinaryClassification:
		return BinaryClassificationModelReport
	case catalog.MultiClassification:
		return MultiClassificationModelReport
	case catalog.Regression:
		return RegressionModelReport
	case catalog.Forcasting:
		return ForecastModelReport
	}
	return InvalidReport
}

func (model *Model) Age() string {
	return humanize.Time(model.CreationTimestamp.Time)
}

//==============================================================================
// Finalizer
//==============================================================================

func (model *Model) HasFinalizer() bool {
	return util.HasFin(&model.ObjectMeta, training.GroupName)
}
func (model *Model) AddFinalizer() { util.AddFin(&model.ObjectMeta, training.GroupName) }
func (model *Model) RemoveFinalizer() {
	util.RemoveFin(&model.ObjectMeta, training.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

func (model *Model) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(model)
}

func (model *Model) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/verions/%s/studies/%s/models/%s",
		model.Namespace,
		*model.Spec.VersionName,
		*model.Spec.StudyName,
		model.Name)
}

func (model *Model) ManifestUri() string {
	return fmt.Sprintf("%s/%s-model.yaml", model.RootUri(), model.Name)
}

//    dataproducts/*/models/*/bin/model.joblib
func (model *Model) WeightsUri() string {
	return fmt.Sprintf("%s/bin/model.joblib", model.RootUri())
}

//    dataproducts/*/models/*/metadata/model.json
func (model *Model) ModelJsonUri() string {
	return fmt.Sprintf("%s/metadata/model.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/study.json
func (model *Model) StudyJsonUri() string {
	return fmt.Sprintf("%s/metadata/study.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/schema.json
func (model *Model) SchemaJsonUri() string {
	return fmt.Sprintf("%s/metadata/schema.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/dataset.json
func (model *Model) DatasetJsonUri() string {
	return fmt.Sprintf("%s/metadata/dataset.json", model.RootUri())
}

//    dataproducts/*/models/*/metadata/productversion.json
func (model *Model) ProductVersionJsonUri() string {
	return fmt.Sprintf("%s/metadata/productversion.json", model.RootUri())
}

//    dataproducts/*/models/*/model-<name>-report.pdf
func (model *Model) ReportUri() string {
	return fmt.Sprintf("%s/model-%s-report.pdf", model.RootUri(), model.Name)
}

func (model *Model) ForecastUri() string {
	return fmt.Sprintf("%s/model-%s-forecast.csv", model.RootUri(), model.Name)
}

//    dataproducts/*/models/*/Dockerfile
func (model *Model) DockerfileUri() string {
	return fmt.Sprintf("%s/Dockerfile", model.RootUri())
}

func (model *Model) CombinedImageName() string {
	return model.Name + ":" + "combined"
}

// return the result for a metric
func (model *Model) GetTestResult(metric catalog.Metric) float64 {
	for _, v := range model.Status.TrainResult {
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

func (model *Model) StatusString() string {
	return string(model.Status.Phase)
}

func (model *Model) Key() string {
	return fmt.Sprintf("%s/%s/%s", "models", model.Namespace, model.Name)
}

func (model *Model) DepotKey() string {
	return fmt.Sprintf("%s/%s", "modeld/depot/models", model.Key())
}

func (model *Model) LiveKey() string {
	return fmt.Sprintf("%s/%s", "modeld/live/models", model.Key())
}

func (model *Model) ArchiveKey() string {
	return fmt.Sprintf("%s/%s", "modeld/archive/models", model.Key())
}

func (model *Model) Accuracy() float64 {
	return model.GetTestResult(catalog.Accuracy)
}

func (model *Model) R2() float64 {
	return model.GetTestResult(catalog.R2)
}

func (model *Model) RMSE() float64 {
	return model.GetTestResult(catalog.RMSE)
}

func (model *Model) Precision() float64 {
	return model.GetTestResult(catalog.PrecisionBinary)
}

func (model *Model) Recall() float64 {
	return model.GetTestResult(catalog.RecallBinary)
}

func (model *Model) F1() float64 {
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
	ReasonFailed         = "IsFailed"
	ReasonTesting        = "Testing"
	ReasonReporting      = "Reporting"
	ReasonProfiling      = "Profiling"
	ReasonPublishing     = "Publishing"
	ReasonTraining       = "Training"
	ReasonPausing        = "Pausing"
	ReasonWaitingToTrain = "WaitingToTrain"
	ReasonWaitingToTest  = "WaitingToTest"
)

// ----------------- Training commands

func (model *Model) MarkWaitingToTrain() {
	now := metav1.Now()
	model.Status.StartTime = &now
	model.Status.Phase = ModelPhasePending
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrained,
		Status: v1.ConditionFalse,
		Reason: ReasonWaitingToTrain,
	})
}

func (model *Model) MarkTraining() {
	now := metav1.Now()
	model.Status.StartTime = &now
	model.Status.TrainingStartTime = &now
	model.Status.Phase = ModelPhaseTraining
}

func (model *Model) MarkTrained(ms []catalog.Measurement) {
	now := metav1.Now()
	model.Status.TrainingEndTime = &now
	model.Status.TrainResult = ms
	model.Status.Phase = ModelPhaseTrained
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTrained,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkFailedToTrain(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelTrained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	now := metav1.Now()
	model.Status.TrainingEndTime = &now
	// set the scores to 0, since Nan is invalid value
	model.Status.CVScore = 0 // we must put it at 0, since NaN is invalid value
	model.Status.TrainResult = make([]catalog.Measurement, 0)

}

func (model *Model) WaitingToTrain() bool {
	if len(model.Status.Conditions) == 0 {
		return true
	}
	cond := model.GetCond(ModelTrained)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonWaitingToTrain
}

func (model *Model) Training() bool {
	cond := model.GetCond(ModelTrained)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonTraining
}

func (model *Model) TrainingFailed() bool {
	cond := model.GetCond(ModelTrained)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model *Model) Trained() bool {
	return model.GetCond(ModelTrained).Status == v1.ConditionTrue
}

// ---------------- Testing command

func (model *Model) MarkWaitingToTest() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTested,
		Status: v1.ConditionFalse,
		Reason: ReasonWaitingToTest,
	})
}

func (model *Model) MarkTesting() {
	now := metav1.Now()
	model.Status.TestingStartTime = &now
	model.Status.Phase = ModelPhaseTesting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTested,
		Status: v1.ConditionFalse,
		Reason: ReasonTesting,
	})
}

func (model *Model) MarkTestingFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelTested,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
}

func (model *Model) MarkTested() {
	model.Status.Phase = ModelPhaseTested
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelTested,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	model.Status.TestingEndTime = &now
}

func (model *Model) TestingFailed() bool {
	cond := model.GetCond(ModelTested)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonFailed
}

func (model *Model) Tested() bool {
	return model.GetCond(ModelTested).Status == v1.ConditionTrue
}

func (model *Model) Testing() bool {
	cond := model.GetCond(ModelTested)
	return cond.Status == v1.ConditionFalse && cond.Reason == ReasonTesting
}

func (model *Model) WaitingToTest() bool {
	return *model.Spec.Tested && model.Status.TestingStartTime == nil
}

//-------------------- profile command

func (model *Model) MarkProfiling() {
	model.Status.Phase = ModelPhaseProfiling
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelProfiled,
		Status: v1.ConditionFalse,
		Reason: ReasonProfiling,
	})
}

func (model *Model) MarkProfiled(uri string) {
	model.Status.Phase = ModelPhaseProfiled
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelProfiled,
		Status: v1.ConditionTrue,
	})
	model.Status.ProfileUri = uri
}

func (model *Model) MarkProfiledFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelProfiled,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
}

func (model *Model) Profiled() bool {
	cond := model.GetCond(ModelProfiled)
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

}

func (model *Model) MarkReported(name string) {
	model.Status.Phase = ModelPhaseReported
	model.Status.ReportName = name
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReported,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkReportFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelReported,
		Status:  v1.ConditionFalse,
		Reason:  string(ModelPhaseFailed),
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
}

func (model *Model) Reported() bool {
	return model.Status.ReportName != ""
}

// ------------------ Forecast

// Answer true if the model has been forecasted
func (model *Model) Forecasted() bool {
	cond := model.GetCond(ModelForecasted)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkForecasted() {
	model.Status.Phase = ModelPhaseForecasted
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelForecasted,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) MarkForecastFailed(err string) {
	model.CreateOrUpdateCond(ModelCondition{
		Type:    ModelForecasted,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
}

func (model *Model) MarkForecasting() {
	model.Status.Phase = ModelPhaseForecasting
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelForecasted,
		Status: v1.ConditionFalse,
		Reason: "Forecasting",
	})
}

// ---------------------- publish

func (model *Model) MarkPublishing() {
	model.Status.Phase = ModelPhasePublishing
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelPublished,
		Status: v1.ConditionFalse,
		Reason: ReasonPublishing,
	})

}

func (model *Model) Published() bool {
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
}

func (model *Model) Aborted() bool {
	cond := model.GetCond(ModelAborted)
	return cond.Status == v1.ConditionTrue

}

// -------------------- Serving

func (model *Model) MarkServing() {
	model.Status.Phase = ModelPhaseReleased
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelReleased,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) Serving() bool {
	cond := model.GetCond(ModelReleased)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) Failed() bool {
	return model.Status.Phase == ModelPhaseFailed
}

// -------------------- Maintaince

func (model *Model) MarkMaintain() {
	model.Status.Phase = ModelPhaseMaintenance
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelMaintaince,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) Maintain() bool {
	cond := model.GetCond(ModelMaintaince)
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
}

func (model *Model) IsReady() bool {
	cond := model.GetCond(ModelReady)
	return cond.Status == v1.ConditionTrue
}

/////////////////////// Paused

func (model *Model) Paused() bool {
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

func (model *Model) IsSaved() bool {
	cond := model.GetCond(ModelSaved)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) MarkArchived() {
	model.CreateOrUpdateCond(ModelCondition{
		Type:   ModelArchived,
		Status: v1.ConditionTrue,
	})
}

func (model *Model) IsArchived() bool {
	cond := model.GetCond(ModelArchived)
	return cond.Status == v1.ConditionTrue
}

func (model *Model) InitModelFromStudy(study *Study) {
	model.Namespace = study.Namespace
	*model.Spec.Training = *study.Spec.Training.DeepCopy()
	model.Spec.StudyName = &study.Name
	model.Spec.ModelVersion = util.StrPtr(fmt.Sprintf("v%d-%d", *study.Spec.ID, *model.Spec.ID))
	model.Spec.VersionName = study.Spec.VersionName
	model.Spec.DatasetName = study.Spec.DatasetName
	model.Spec.Task = study.Spec.Task
	model.Spec.Objective = study.Spec.Objective
	model.ObjectMeta.Labels = study.ObjectMeta.Labels
	model.ObjectMeta.Labels["study"] = study.Name
	model.Spec.Pushed = study.Spec.ModelImagePushed
	model.Spec.Published = study.Spec.ModelPublished
	model.Spec.Location = &data.DataLocation{
		BucketName: study.Spec.Location.BucketName,
		Path:       path.Join(study.Spec.Location.Path, "models", model.Name),
	}
	model.Status.TrainDatasetLocation = study.Status.TrainDatasetLocation
	model.Status.TestDatasetLocation = study.Status.TestDatasetLocation
	model.Status.ValidationDataset = study.Status.ValidationDataset

}

func (model *Model) Done() bool {
	if *model.Spec.Tested {
		return model.Tested() || model.TestingFailed()
	}
	return model.Trained() || model.TrainingFailed()
}

func (model *Model) OpName() string {
	return model.Namespace + "-" + model.Name
}
