/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"path"
	"time"

	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//Set up the webhook with the manager.
func (study *Study) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(study).
		Complete()
}

func NewStudy(ns string, name string, dataset string) *Study {
	result := &Study{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Spec.DatasetName = &dataset
	result.Kind = "StudyName"
	result.Default()
	result.Labels = map[string]string{
		"dataset": dataset,
	}
	return result
}

func (study *Study) CanStart() bool {
	if study.Spec.Schedule.StartAt == nil {
		return true
	}
	now := metav1.Now()
	return study.Spec.Schedule.StartAt.Before(&now)
}

func (study *Study) PipelineName() string {
	return study.ObjectMeta.Labels["pipeline"]
}

func (study *Study) AddPipelineLable(pipeline string) {
	study.ObjectMeta.Labels["pipeline"] = pipeline

}

func (study *Study) ReachedMaxFETime() bool {
	if study.Status.FeatureEngineeringStartTime == nil {
		return false // not started
	}
	duration := metav1.Now().Unix() - study.Status.FeatureEngineeringStartTime.Unix()
	return int32(duration/60) >= *study.Spec.FeatureEngineeringSearch.MaxTimeSec
}

func (study *Study) ReachedMaxFEModels() bool {
	totalModels := study.Status.FeatureEngineeringModeFailed + study.Status.FeatureEngineeringModelTrained
	return *study.Spec.FeatureEngineeringSearch.MaxModels == totalModels
}

// Enabled if we reached max time
func (study *Study) ReachedMaxTime() bool {
	if study.Status.SearcStartTime == nil {
		return false // not started
	}
	duration := metav1.Now().Unix() - study.Status.SearcStartTime.Unix()
	return int32(duration/60) >= *study.Spec.Search.MaxTime
}

// Tru if there are models waiting for test
func (s *Study) ModelsWaiting() bool {
	return s.Status.TestingModelWaiting > 0
}

// Enabled if we reached max candidates

//==============================================================================
// StudyName Finilizer
//==============================================================================

func (study *Study) HasFinalizer() bool { return util.HasFin(&study.ObjectMeta, training.GroupName) }
func (study *Study) AddFinalizer()      { util.AddFin(&study.ObjectMeta, training.GroupName) }
func (study *Study) RemoveFinalizer()   { util.RemoveFin(&study.ObjectMeta, training.GroupName) }

// Merge or update condition
func (study *Study) CreateOrUpdateCond(cond StudyCondition) {
	i := study.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		study.Status.Conditions = append(study.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := study.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	study.Status.Conditions[i] = current
}

func (study *Study) GetCondIdx(t StudyConditionType) int {
	for i, v := range study.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (study *Study) GetCond(t StudyConditionType) StudyCondition {
	for _, v := range study.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return StudyCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *Study) IsReady() bool {
	return r.GetCond(StudyCompleted).Status == v1.ConditionTrue
}

func (r *Study) IsPartitioned() bool {
	return r.GetCond(StudyPartitioned).Status == v1.ConditionTrue
}

func (r *Study) IsForecast() bool {
	return *r.Spec.Task == catalog.Forecasting
}

// Compute the current phase based on the condition
func (study *Study) Phase() StudyPhase {
	return study.Status.Phase
}

func (study *Study) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/versions/%s/studies/%s", study.Namespace, *study.Spec.VersionName, study.Name)
}

func (study *Study) ManifestUri() string {
	return fmt.Sprintf("%s/%s-study.yaml", study.RootUri(), study.Name)
}

//    dataproducts/*/studies/*/study-<name>-report.pdf
func (study *Study) ReportUri() string {
	return fmt.Sprintf("%s/%s-report.pdf", study.RootUri(), study.Name)
}

// divide the model list into retained model and not retained model
//

func ParseStudyYaml(content []byte) (*Study, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Study)
	return r, nil
}

func (study *Study) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(study)
}

func (study *Study) SetStartTime() {
	now := time.Now()
	study.Status.StartTime = &metav1.Time{Time: now}
}

func (study *Study) ReportName() string {
	return "report-" + study.ObjectMeta.Name

}

func (study *Study) IsInCond(ct StudyConditionType) bool {
	current := study.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

// use to sort the model by score
func (study *Study) SetupCv(rows int32) {
	if rows < 1000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(10)
	}
	if rows > 1000 && rows < 10000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(5)
	}
	if rows >= 10000 && rows < 20000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(3)
	}
	// at this point we woud use validation set
	if rows >= 20000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(0)
	}

}

///////////////////////////////////////////////////////////////
// Split
///////////////////////////////////////////////////////////////

func (study *Study) Splitted() bool {
	cond := study.GetCond(StudySplitted)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) MarkSplitted() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudySplitted,
		Status: v1.ConditionTrue,
	})
	// set the training location
	trainingLocation := data.DataLocation{}
	trainingLocation.BucketName = study.Spec.Location.BucketName
	trainingLocation.Path = util.StrPtr(path.Join(*study.Spec.Location.Path, "data", "training.csv"))
	study.Status.TrainDatasetLocation = trainingLocation

	// set the testing location
	testingLocation := data.DataLocation{}
	testingLocation.BucketName = study.Spec.Location.BucketName
	testingLocation.Path = util.StrPtr(path.Join(*study.Spec.Location.Path, "data", "testing.csv"))
	study.Status.TestDatasetLocation = testingLocation

	if *study.Spec.TrainingTemplate.Split.Validation > 0 {
		valLocation := data.DataLocation{}
		valLocation.BucketName = study.Spec.Location.BucketName
		valLocation.Path = util.StrPtr(path.Join(*study.Spec.Location.Path, "data", "validation.csv"))
		study.Status.ValidationDataset = valLocation
	}
	study.RefreshProgress()

}

func (study *Study) MarkSplitFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudySplitted,
		Status:  v1.ConditionFalse,
		Reason:  string(StudyPhaseFailed),
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to split." + err)
	study.RefreshProgress()
}

///////////////////////////////////////////////////////////////
// Baselines
///////////////////////////////////////////////////////////////

func (study *Study) Baselined() bool {
	cond := study.GetCond(StudyBaselined)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) MarkBaselining() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyBaselined,
		Status: v1.ConditionFalse,
		Reason: ReasonBaselining,
	})
	now := metav1.Now()
	if study.Status.BaselineStartTime == nil {
		study.Status.BaselineStartTime = &now
	}
	study.Status.Phase = StudyPhaseBaelined
	study.RefreshProgress()
}

func (study *Study) MarkBaselined() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyBaselined,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if study.Status.BaselineEndTime == nil {
		study.Status.BaselineEndTime = &now
	}
	study.Status.Phase = StudyPhaseSearched
	study.RefreshProgress()
}

func (study *Study) MarkBaselineFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudyBaselined,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to create baseline models." + err)
	study.RefreshProgress()
}

///////////////////////////////////////////////////////////////
// Searched
///////////////////////////////////////////////////////////////

func (study *Study) Searched() bool {
	cond := study.GetCond(StudySearched)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) MarkSearching() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudySearched,
		Status: v1.ConditionFalse,
		Reason: ReasonTraining,
	})
	now := metav1.Now()
	if study.Status.SearcStartTime == nil {
		study.Status.SearcStartTime = &now
	}
	study.Status.Phase = StudyPhaseSearching
	study.RefreshProgress()
}

func (study *Study) MarkSearched() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudySearched,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if study.Status.SearchEndTime == nil {
		study.Status.SearchEndTime = &now
	}
	study.Status.Phase = StudyPhaseSearched
	study.RefreshProgress()
}

func (study *Study) MarkSearchFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudySearched,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to search models." + err)
	study.RefreshProgress()
}

////////////////////////////////////////////////
// Feature engineering
////////////////////////////////////////////////

func (study *Study) FeatureEngineered() bool {
	cond := study.GetCond(StudyFeatureEngineered)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) MarkFeatureEngineering() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyFeatureEngineered,
		Status: v1.ConditionFalse,
		Reason: ReasonFeatureEngineering,
	})
	now := metav1.Now()
	study.Status.FeatureEngineeringStartTime = &now
	study.Status.Phase = StudyPhaseEngineeringFeature
}

func (study *Study) MarkFeatureEngineered() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyFeatureEngineered,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if study.Status.FeatureEngineerinEndTime == nil {
		study.Status.FeatureEngineerinEndTime = &now
	}
	study.Status.Phase = StudyPhaseFeatureEngineered
	study.RefreshProgress()
}

func (study *Study) MarkFeatureEngineeringFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudyFeatureEngineered,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to engineer features." + err)
	study.RefreshProgress()
}

//////////////////////////////////////////////////////
// --------------- Test
//////////////////////////////////////////////////////

func (study *Study) ModelTested() bool {
	cond := study.GetCond(StudyTested)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) MarkTesting() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyTested,
		Status: v1.ConditionFalse,
		Reason: ReasonTesting,
	})
	now := metav1.Now()
	study.Status.TestingStartTime = &now
	study.Status.Phase = StudyPhaseTesting
}

func (study *Study) MarkTested() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyTested,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	study.Status.TestingEndTime = &now
	study.Status.Phase = StudyPhaseTested
	study.RefreshProgress()
}

func (study *Study) MarkTestingFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudyTested,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to test model." + err)
	study.RefreshProgress()
}

func (study *Study) Tested() bool {
	return study.GetCond(StudyTested).Status == v1.ConditionTrue
}

///////////////////////////////////////////////////////
// --------------- Profile
///////////////////////////////////////////////////////

func (study *Study) Profiled() bool {
	return *study.Spec.Profiled && study.GetCond(StudyProfiled).Status == v1.ConditionTrue
}

func (study *Study) MarkProfiling() {
	study.Status.Phase = StudyPhaseProfiling
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyProfiled,
		Status: v1.ConditionFalse,
		Reason: ReasonProfiling,
	})
}

func (study *Study) MarkProfileFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudyProfiled,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to profile." + err)
	study.RefreshProgress()
}

///////////////////////////////////////////////////////////
// --------------- Report
///////////////////////////////////////////////////////////

func (study *Study) MarkReporting() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyReported,
		Status: v1.ConditionFalse,
		Reason: ReasonReporting,
	})
	study.Status.Phase = StudyPhaseReporting

}

func (study *Study) Reported() bool {
	return study.GetCond(StudyReported).Status == v1.ConditionTrue
}

func (study *Study) MarkReported(name string) {
	study.Status.ReportName = name
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyReported,
		Status: v1.ConditionTrue,
	})
	study.Status.Phase = StudyPhaseReported
	study.RefreshProgress()
}

// ------------------- Paused
func (study *Study) Paused() bool {
	cond := study.GetCond(StudyPaused)
	return cond.Status == v1.ConditionTrue
}

// ------------------- Abort

func (study *Study) Aborted() bool {
	cond := study.GetCond(StudyAborted)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) MarkAborted() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyAborted,
		Status: v1.ConditionTrue,
	})
	study.Status.Phase = StudyPhaseAborted
	study.RefreshProgress()
}

func (study *Study) MarkPartitioned() bool {
	cond := study.GetCond(StudyPartitioned)
	return cond.Status == v1.ConditionTrue
}

func (study *Study) EnsembleTrained() bool {
	return study.GetCond(StudyEnsambleCreated).Status == v1.ConditionTrue
}

func (study *Study) Ready() bool {
	return study.GetCond(StudyCompleted).Status == v1.ConditionTrue
}

func (study *Study) MarkSaved() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudySaved,
		Status: v1.ConditionTrue,
	})
	study.RefreshProgress()
}

func (study *Study) Saved() bool {
	return study.GetCond(StudySaved).Status == v1.ConditionTrue
}

func (study *Study) PrintConditions() {
	for _, v := range study.Status.Conditions {
		fmt.Println(v)
	}
}

func (study *Study) MarkResumed() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyPaused,
		Status: v1.ConditionUnknown,
	})

}

func (study *Study) MarkReady() {
	now := metav1.Now()
	study.Status.EndTime = &now
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyCompleted,
		Status: v1.ConditionTrue,
	})
	study.Status.Phase = StudyPhaseCompleted
	study.RefreshProgress()
}

func (study *Study) MarkEnsembleTrained() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyEnsambleCreated,
		Status: v1.ConditionTrue,
	})
}

func (study *Study) MarkPaused() {
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyPaused,
		Status: v1.ConditionTrue,
	})
	study.Status.Phase = StudyPhasePaused
}

//////////////////////// Profile

func (study *Study) MarkProfiled(url string) {
	study.Status.Phase = StudyPhaseProfiled
	study.Status.ProfileUri = url
	// update the condition
	study.CreateOrUpdateCond(StudyCondition{
		Type:   StudyProfiled,
		Status: v1.ConditionTrue,
	})
	study.RefreshProgress()

}

// This is the operation name for the study.
func (study *Study) OpName() string {
	return study.Namespace + "-" + study.Name
}

func (study *Study) Random() bool {
	return *study.Spec.Search.Sampler == RandomSearch
}

func (study *Study) Deleted() bool {
	return !study.ObjectMeta.DeletionTimestamp.IsZero()
}

func (study *Study) CreateReport(key string, bucketName string) *Report {
	// RunModelJob the studies report
	report := NewReport(
		study.ObjectMeta.Namespace,
		study.ReportName(),
		study.ObjectMeta.Name,
		key,
		StudyReport,
		bucketName)

	report.Label("study", study.Name)
	report.Spec.VersionName = study.Spec.VersionName
	report.Spec.EntityRef = v1.ObjectReference{
		Namespace: study.Namespace,
		Name:      study.Name,
	}
	return report
}

// Answer true if the cv period ended.
func (study *Study) MaxTimeOrModelReached() bool {

	if study.Status.StartTime == nil {
		return false
	} else {
		now := time.Now()
		diff := now.Sub(study.Status.StartTime.Time)
		timeOver := diff.Minutes() > float64(*study.Spec.Search.MaxTime)

		// compare the model. We take the ensemble into consideration
		modelOver := (study.Status.SearchingModeTrained + study.Status.SearchingModeFailed) >= *study.Spec.Search.MaxModels

		return timeOver || modelOver
	}
}

func (study *Study) MarkReportFailed(err string) {
	study.CreateOrUpdateCond(StudyCondition{
		Type:    StudyReported,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	study.Status.Phase = StudyPhaseFailed
	study.Status.LastError = util.StrPtr("Failed to report." + err)
	study.RefreshProgress()
}

func (study *Study) ReachedMaxModels() bool {
	return study.Status.SearchingModeFailed+
		study.Status.SearchingModeTrained+
		study.Status.SearchingModelWaiting >= *study.Spec.Search.MaxModels
}

// Set the train/test validation based on the number of rows
func (study *Study) SetTrainTest(rows int32) {

	if rows <= 20000 {
		study.Spec.TrainingTemplate.Split.Train = util.Int32Ptr(80)
		study.Spec.TrainingTemplate.Split.Test = util.Int32Ptr(20)
		study.Spec.TrainingTemplate.Split.Validation = util.Int32Ptr(0)
	}

	if rows > 20000 {
		study.Spec.TrainingTemplate.Split.Train = util.Int32Ptr(80)
		study.Spec.TrainingTemplate.Split.Test = util.Int32Ptr(10)
		study.Spec.TrainingTemplate.Split.Validation = util.Int32Ptr(10)
	}

}

// based on the levels in the study, create all the paths
func (study *Study) CreatePartitionsPaths() []string {
	return make([]string, 0)
}

// Ask the hirerchy to return forecast keys
func (h Hierarchy) Explode() []ForecastObj {
	// merge the group and the levels
	levels := make([]Level, 0)
	for _, v := range h.GroupLevels {
		levels = append(levels, v)
	}
	levels = append(levels, *h.ItemLevel)
	result := make([]ForecastObj, 0)
	// for each level explode all the items in the level

	for i, _ := range levels {
		keysAtLevel := make([][]string, i+1)
		// create the keys on each level up to the parent
		for j := 0; j <= i; j++ {
			keysAtLevel[j] = levels[j].Values
		}
		combs := util.AllCombs(keysAtLevel)
		for _, combination := range combs {
			result = append(result, ForecastObj{
				Key:        combination,
				LevelIndex: int32(i),
			})
		}
	}
	return result
}

func (study *Study) IsRunning() bool {
	return study.GetCond(StudyCompleted).Status != v1.ConditionFalse &&
		study.GetCond(StudyCompleted).Reason == string(catalog.Running)
}

func (study *Study) IsFailed() bool {
	return study.Status.Phase == StudyPhaseFailed
}

func (study *Study) RefreshProgress() {
	// if we completed the study, or failed or aborted, put progress at 100
	if study.IsReady() || study.IsFailed() || study.Aborted() {
		study.Status.Progress = 100
	} else if study.Reported() {
		study.Status.Progress = 95
	} else if study.Profiled() {
		study.Status.Progress = 90
	} else if study.Tested() {
		study.Status.Progress = 80
	} else if study.Searched() {
		study.Status.Progress = 50
	} else if study.Splitted() {
		study.Status.Progress = 10
	}
}
