/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"path"
	ctrl "sigs.k8s.io/controller-runtime"
	"strconv"
)

func (studyrun *StudyRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(studyrun).
		Complete()
}

/////// Finalizers ///////

func (studyrun *StudyRun) HasFinalizer() bool {
	return util.HasFin(&studyrun.ObjectMeta, training.GroupName)
}
func (studyrun *StudyRun) AddFinalizer()    { util.AddFin(&studyrun.ObjectMeta, training.GroupName) }
func (studyrun *StudyRun) RemoveFinalizer() { util.RemoveFin(&studyrun.ObjectMeta, training.GroupName) }

/////// Condition Functions ///////

func (studyrun *StudyRun) CreateOrUpdateCondition(condition metav1.Condition) {
	i := studyrun.GetConditionIndex(StudyRunCondition(condition.Type))
	now := metav1.Now()
	if i == -1 { // not found
		condition.LastTransitionTime = now
		studyrun.Status.Conditions = append(studyrun.Status.Conditions, condition)
		return
	}
	// else we already have the condition, update it
	current := studyrun.Status.Conditions[i]
	current.Message = condition.Message
	current.Reason = condition.Reason
	current.LastTransitionTime = now
	if current.Status != condition.Status {
		current.Status = condition.Status
	}
	studyrun.Status.Conditions[i] = current
}

func (studyrun *StudyRun) GetConditionIndex(condition StudyRunCondition) int {
	for i, v := range studyrun.Status.Conditions {
		if v.Type == string(condition) {
			return i
		}
	}
	return -1
}

func (studyrun *StudyRun) GetCondition(condition StudyRunCondition) metav1.Condition {
	for _, v := range studyrun.Status.Conditions {
		if v.Type == string(condition) {
			return v
		}
	}
	return metav1.Condition{
		Type:    string(condition),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (studyrun *StudyRun) Splitted() bool {
	return studyrun.GetCondition(StudyRunSplit).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Ready() bool {
	return studyrun.GetCondition(StudyRunCompleted).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Transformed() bool {
	return studyrun.GetCondition(StudyRunTransformed).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Baselined() bool {
	return studyrun.GetCondition(StudyRunBaselined).Reason == ReasonFailed
}

func (studyrun *StudyRun) Searched() bool {
	return studyrun.GetCondition(StudyRunSearched).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Ensembled() bool {
	return studyrun.GetCondition(StudyRunEnsembleCreated).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Tested() bool {
	return studyrun.GetCondition(StudyRunTested).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Profiled() bool {
	return studyrun.GetCondition(StudyRunProfiled).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Promoted() bool {
	return studyrun.GetCondition(StudyRunModelPromoted).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Reported() bool {
	return studyrun.GetCondition(StudyRunReported).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Paused() bool {
	return studyrun.GetCondition(StudyRunPaused).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Aborted() bool {
	return studyrun.GetCondition(StudyRunAborted).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Partitioned() bool {
	return studyrun.GetCondition(StudyRunPartitioned).Status == metav1.ConditionTrue
}

func (studyrun *StudyRun) Deleted() bool {
	return !studyrun.ObjectMeta.DeletionTimestamp.IsZero()
}

func (studyrun *StudyRun) Phase() StudyRunPhase {
	return studyrun.Status.Phase
}

func (studyrun *StudyRun) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/studies/%s/runs/%s",
		studyrun.Namespace, studyrun.Name, strconv.Itoa(int(studyrun.Status.RunVersion)))
}

func (studyrun *StudyRun) ManifestURI() string {
	return fmt.Sprintf("%s/manifest.json", studyrun.RootURI())
}

func (studyrun *StudyRun) ReportURI() string {
	return fmt.Sprintf("%s/%s-report.pdf", studyrun.RootURI(), studyrun.Name)
}

func (studyrun *StudyRun) IsRunning() bool {
	return studyrun.GetCondition(StudyRunCompleted).Status != metav1.ConditionFalse &&
		studyrun.GetCondition(StudyRunCompleted).Reason == string(catalog.Running)
}

func (studyrun *StudyRun) Failed() bool {
	return studyrun.Status.Phase == StudyRunPhaseFailed
}

func (studyrun *StudyRun) RefreshProgress() {
	// if we completed the studyrun, or failed or aborted, put progress at 100
	if studyrun.Ready() || studyrun.Failed() || studyrun.Aborted() {
		studyrun.Status.Progress = 100
	} else if studyrun.Reported() {
		studyrun.Status.Progress = 85
	} else if studyrun.Profiled() {
		studyrun.Status.Progress = 70
	} else if studyrun.Tested() {
		studyrun.Status.Progress = 55
	} else if studyrun.Searched() {
		studyrun.Status.Progress = 40
	} else if studyrun.Baselined() {
		studyrun.Status.Progress = 25
	} else if studyrun.Splitted() {
		studyrun.Status.Progress = 10
	}
}

func (studyrun *StudyRun) ReachedMaxTime(study *Study) bool {
	if studyrun.Status.SearchStatus.StartedAt == nil {
		return false
	}
	duration := metav1.Now().Unix() - studyrun.Status.SearchStatus.StartedAt.Unix()
	return int32(duration/60) >= study.Spec.Search.MaxTime
}

func (studyrun *StudyRun) ModelsWaiting() bool {
	return studyrun.Status.TestStatus.WaitingModelsCount > 0
}

func (studyrun *StudyRun) UpdateEndTime() {
	now := metav1.Now()
	studyrun.Status.CompletedAt = &now
}

/////// Group Lifecycle ///////

func (studyrun *StudyRun) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", studyrun.RootURI(), task, workerIndex)
}

func (studyrun *StudyRun) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", studyrun.RootURI(), task)
}

func (studyrun *StudyRun) PartitionFolder(key []string) string {
	return studyrun.RootURI() + "/partitions/" + path.Join(key...)
}

func (studyrun *StudyRun) PartitionDataFolder(key []string) string {
	return studyrun.PartitionFolder(key) + "/data"
}

func (studyrun *StudyRun) PartitionTrainFile(key []string) string {
	return studyrun.PartitionFolder(key) + "/data/train.parquet"
}

func (studyrun *StudyRun) PartitionTestFile(key []string) string {
	return studyrun.PartitionFolder(key) + "/data/test.parquet"
}

func ParseStudyRunYaml(content []byte) (*StudyRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*StudyRun)
	return r, nil
}

func (studyrun *StudyRun) ReportName() string {
	return "studyrun-report-" + studyrun.ObjectMeta.Name
}

/////// Split Condition ///////

func (studyrun *StudyRun) MarkSplitting() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunSplit),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunSplit),
	})

	studyrun.Status.Phase = StudyRunPhaseSplitting
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkSplitted() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunSplit),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunSplit),
	})

	studyrun.Status.Phase = StudyRunPhaseSplit
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkSplitFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunSplit),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.UpdateEndTime()
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Split failed: %s", err))
	studyrun.RefreshProgress()
}

/////// Transform Condition ///////

func (studyrun *StudyRun) MarkTransforming() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunTransformed),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhaseTransforming),
	})

	studyrun.Status.Phase = StudyRunPhaseTransforming
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkTransformed() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunTransformed),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunTransformed),
	})

	studyrun.Status.Phase = StudyRunPhaseTransformed
	studyrun.RefreshProgress()

}

func (studyrun *StudyRun) MarkTransformFailed(err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunTransformed),
		Status:  metav1.ConditionFalse,
		Reason:  string(StudyRunPhaseFailed),
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.UpdateEndTime()
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Transform failed: %s", err))
	studyrun.RefreshProgress()
}

/////// Baseline Condition ///////

func (studyrun *StudyRun) MarkBaselining() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunBaselined),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhaseBaseline),
	})
	now := metav1.Now()
	if studyrun.Status.BaselineStatus.StartedAt == nil {
		studyrun.Status.BaselineStatus.StartedAt = &now
	}
	studyrun.Status.Phase = StudyRunPhaseBaseline
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkBaselined() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunBaselined),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunBaselined),
	})
	now := metav1.Now()
	if studyrun.Status.BaselineStatus.CompletedAt == nil {
		studyrun.Status.BaselineStatus.CompletedAt = &now
	}
	studyrun.Status.Phase = StudyRunPhaseBaselined
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkBaselineFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunBaselined),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// GC Condition ///////

func (studyrun *StudyRun) MarkGCFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunCompleted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Garbage collection failed: %s", err))
	studyrun.UpdateEndTime()
	studyrun.RefreshProgress()
}

/////// Search Condition ///////

func (studyrun *StudyRun) MarkSearching() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunSearched),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhaseSearching),
	})
	now := metav1.Now()
	if studyrun.Status.SearchStatus.StartedAt == nil {
		studyrun.Status.SearchStatus.StartedAt = &now
	}
	studyrun.Status.Phase = StudyRunPhaseSearching
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkSearched() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunSearched),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunSearched),
	})
	now := metav1.Now()
	if studyrun.Status.SearchStatus.CompletedAt == nil {
		studyrun.Status.SearchStatus.CompletedAt = &now
	}
	studyrun.Status.Phase = StudyRunPhaseSearched
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkSearchFailed(reason, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunSearched),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Model search failed: %s", err))
	studyrun.UpdateEndTime()
	studyrun.RefreshProgress()
}

/////// Ensemble Condition ///////

func (studyrun *StudyRun) MarkEnsembling() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunEnsembleCreated),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhaseCreatingEnsembles),
	})
	now := metav1.Now()
	if studyrun.Status.EnsembleStatus.StartedAt == nil {
		studyrun.Status.EnsembleStatus.StartedAt = &now
	}
	studyrun.Status.Phase = StudyRunPhaseCreatingEnsembles
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkEnsembled() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunEnsembleCreated),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunEnsembleCreated),
	})
	now := metav1.Now()
	if studyrun.Status.EnsembleStatus.CompletedAt == nil {
		studyrun.Status.EnsembleStatus.CompletedAt = &now
	}
	studyrun.Status.Phase = StudyRunPhaseCreatedEnsembles
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkEnsembleFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunEnsembleCreated),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	now := metav1.Now()
	if studyrun.Status.EnsembleStatus.CompletedAt == nil {
		studyrun.Status.EnsembleStatus.CompletedAt = &now
	}

	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Ensemble phase failed: %s", err))
	studyrun.UpdateEndTime()
	studyrun.RefreshProgress()
}

/////// Test Condition ///////

func (studyrun *StudyRun) MarkTesting() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunTested),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhaseTesting),
	})
	now := metav1.Now()
	studyrun.Status.TestStatus.StartedAt = &now
	studyrun.Status.Phase = StudyRunPhaseTesting
}

func (studyrun *StudyRun) MarkTested() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunTested),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunTested),
	})
	now := metav1.Now()
	studyrun.Status.TestStatus.CompletedAt = &now
	studyrun.Status.Phase = StudyRunPhaseTested
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkTestingFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.UpdateEndTime()
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Testing phase failed: %s", err))
	studyrun.RefreshProgress()
}

/////// Profile Condition ///////

func (studyrun *StudyRun) MarkProfiling() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunProfiled),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhaseProfiling),
	})
	studyrun.Status.Phase = StudyRunPhaseProfiling
}

func (studyrun *StudyRun) MarkProfiled(location catalog.FileLocation) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunProfiled),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunProfiled),
	})
	studyrun.RefreshProgress()
	studyrun.Status.ProfileLocation = location
	studyrun.Status.Phase = StudyRunPhaseProfiled
}

func (studyrun *StudyRun) MarkProfileFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunProfiled),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// Promotion Condition ///////

func (studyrun *StudyRun) MarkPromoting() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunModelPromoted),
		Status: metav1.ConditionFalse,
		Reason: string(StudyRunPhasePromoted),
	})
	studyrun.Status.Phase = StudyRunPhasePromoting

}

func (studyrun *StudyRun) MarkPromoted() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunModelPromoted),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunModelPromoted),
	})
	studyrun.Status.Phase = StudyRunPhasePromoted
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkPromotionFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunModelPromoted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// Report Condition ///////

func (studyrun *StudyRun) MarkReporting() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunReported),
		Status: metav1.ConditionFalse,
		Reason: ReasonReporting,
	})
	studyrun.Status.Phase = StudyRunPhaseReporting

}

func (studyrun *StudyRun) MarkReported() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunReported),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunReported),
	})
	studyrun.Status.Phase = StudyRunPhaseReported
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkReportFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunReported),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// Partition Condition ///////

func (studyrun *StudyRun) MarkPartitionFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunPartitioned),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Partition phase failed: %s", err))
	now := metav1.Now()
	studyrun.Status.CompletedAt = &now
	studyrun.RefreshProgress()
}

/////// Lifecycle Conditions ///////

func (studyrun *StudyRun) MarkAborted() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunAborted),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunAborted),
	})
	studyrun.Status.Phase = StudyRunPhaseAborted
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkAbortFailed(err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunAborted),
		Status:  metav1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Abort failed: %s", err))
	studyrun.RefreshProgress()
	now := metav1.Now()
	studyrun.Status.CompletedAt = &now
}

func (studyrun *StudyRun) MarkReady() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunCompleted),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunCompleted),
	})
	studyrun.Status.Phase = StudyRunPhaseCompleted
	studyrun.RefreshProgress()
	now := metav1.Now()
	studyrun.Status.CompletedAt = &now
}

func (studyrun *StudyRun) MarkReadyFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunCompleted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})

	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Mark ready failed: %s", err))
	studyrun.UpdateEndTime()
	studyrun.RefreshProgress()
}

func (studyrun *StudyRun) MarkResumed() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunPaused),
		Status: metav1.ConditionFalse,
		Reason: "Resumed",
	})
}

func (studyrun *StudyRun) MarkPaused() {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudyRunPaused),
		Status: metav1.ConditionTrue,
		Reason: string(StudyRunPaused),
	})
	studyrun.Status.Phase = StudyRunPhasePaused
}

func (studyrun *StudyRun) MarkPauseFailed(reason string, err string) {
	studyrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(StudyRunPaused),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	studyrun.Status.Phase = StudyRunPhaseFailed
	studyrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Pause failed: %s", err))
	studyrun.RefreshProgress()
	now := metav1.Now()
	studyrun.Status.CompletedAt = &now
}

func (studyrun *StudyRun) CreateReport(bucketName string) *Report {
	// RunModelJob the studies report
	report := NewReport(
		studyrun.ObjectMeta.Namespace,
		studyrun.ReportName(),
		studyrun.ObjectMeta.Name,
		StudyReport,
		bucketName)

	report.Label(catalog.StudyRunLabelKey, studyrun.Name)
	report.Label(catalog.StudyLabelKey, studyrun.Spec.StudyName)
	report.Spec.EntityRef = v1.ObjectReference{
		Namespace: studyrun.Namespace,
		Name:      studyrun.Name,
	}
	return report
}

func (studyrun *StudyRun) ReachedMaxModels(study *Study) bool {
	return studyrun.Status.SearchStatus.FailedModelsCount+
		studyrun.Status.SearchStatus.CompletedModelsCount+
		studyrun.Status.SearchStatus.WaitingModelsCount >= study.Spec.Search.MaxModels
}

/////// Alerts ///////

func (studyrun *StudyRun) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Study run %s completed successfully", studyrun.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: studyrun.Name,
			Namespace:    studyrun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "StudyRun",
				Name:      studyrun.Name,
				Namespace: studyrun.Namespace,
			},
			Notification: notification,
			Owner:        studyrun.Spec.Owner,
			Fields: map[string]string{
				"Start Time": studyrun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"Best Score": strconv.Itoa(int(studyrun.Status.BestModelScore)),
			},
		},
	}

	if studyrun.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = studyrun.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (studyrun *StudyRun) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Study run %s failed with error: %v", studyrun.Name, err.Error())

	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: studyrun.Name,
			Namespace:    studyrun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "StudyRun",
				Name:      studyrun.Name,
				Namespace: studyrun.Namespace,
			},
			Notification: notification,
			Owner:        studyrun.Spec.Owner,
			Fields: map[string]string{
				"Start Time": studyrun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if studyrun.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = studyrun.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (studyrun *StudyRun) PromotionAlert(model Model) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Model %s is waiting for manual promotion", model.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: studyrun.Name,
			Namespace:    studyrun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			Owner: model.Spec.Owner,
			Fields: map[string]string{
				"Study Run": studyrun.Name,
				"Model":     model.Name,
			},
		},
	}

	return result
}

/////// Reconciler Methods ///////

func (studyrun *StudyRun) GetStatus() proto.Message {
	return &studyrun.Status
}

func (studyrun *StudyRun) GetObservedGeneration() int64 {
	return studyrun.Status.ObservedGeneration
}

func (studyrun *StudyRun) SetObservedGeneration(generation int64) {
	studyrun.Status.ObservedGeneration = generation
}

func (studyrun *StudyRun) SetUpdatedAt(time *metav1.Time) {
	studyrun.Status.UpdatedAt = time
}

func (studyrun *StudyRun) SetStatus(status interface{}) {
	studyrun.Status = *status.(*StudyRunStatus)
}
