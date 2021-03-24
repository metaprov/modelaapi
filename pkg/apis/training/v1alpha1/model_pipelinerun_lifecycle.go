/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/training"
	"github.com/metaprov/modeldapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (run *ModelPipelineRun) CreateOrUpdateCond(cond ModelPipelineRunCondition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		run.Status.Conditions = append(run.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	run.Status.Conditions[i] = current
}

func (run *ModelPipelineRun) GetCondIdx(t PipelineRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *ModelPipelineRun) GetCond(t PipelineRunConditionType) ModelPipelineRunCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	return ModelPipelineRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (run *ModelPipelineRun) IsReady() bool {
	return run.GetCond(PipelineRunReady).Status == v1.ConditionTrue
}

//==============================================================================
// Finalizer
//==============================================================================

func (run *ModelPipelineRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, training.GroupName)
}
func (run *ModelPipelineRun) AddFinalizer()    { util.AddFin(&run.ObjectMeta, training.GroupName) }
func (run *ModelPipelineRun) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, training.GroupName) }

//==============================================================================
// PIpeline stage status
//==============================================================================

func (this *ModelPipelineRunStageStatus) RecordApprove(name string) {
	this.Approved = true
	this.ApprovedBy = name
	now := metav1.Now()
	this.ApprovedAt = &now
}

func (this *ModelPipelineRunStageStatus) RecordDeny(name string) {
	this.Approved = false
	this.ApprovedBy = name
	now := metav1.Now()
	this.ApprovedAt = &now
}

func (this *ModelPipelineRunStageStatus) RecordRunning() {
	this.Phase = StageStatusPhaseRunning
	now := metav1.Now()
	this.ApprovedAt = &now
}

func (this *ModelPipelineRunStageStatus) RecordError(err error) {
	str := err.Error()
	this.Error = &str
	this.Phase = StageStatusPhaseRunning
	now := metav1.Now()
	this.ApprovedAt = &now
}

func (this *ModelPipelineRunStageStatus) RecordCompleted() {
	this.Phase = StageStatusPhaseCompleted
	now := metav1.Now()
	this.EndTime = &now
}

func (this *ModelPipelineRunStageStatus) IsCompleted() bool {
	return this.Phase == StageStatusPhaseCompleted
}

func (this *ModelPipelineRunStageStatus) RecordFailed() {
	this.Phase = StageStatusPhaseFailed
	now := metav1.Now()
	this.ApprovedAt = &now
}

func (this *ModelPipelineRunStageStatus) IsFailed() bool {
	return this.Phase == StageStatusPhaseFailed
}

func (this *ModelPipelineRun) MarkPreprocessingDataRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_PreprocessingDataRunning
}

func (this *ModelPipelineRunStageStatus) IsRunning() bool {
	return this.Phase == StageStatusPhaseRunning
}

func (this *ModelPipelineRun) MarkPreprocessingDataCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhase_PreprocessingCompleted
}

func (this *ModelPipelineRun) MarkPreprocessingDataFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Phase = PipelinePhase_PreprocessingFailed
}

func (this *ModelPipelineRun) MarkNotebookRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_NotebookRunning
}
func (this *ModelPipelineRun) MarkNotebookCompleted() {
	this.Status.Phase = PipelinePhase_NotebookReady

}
func (this *ModelPipelineRun) MarkNotebookFailed(err error) {
	this.Status.TrainingStatus.RecordError(err)
	this.Status.Phase = PipelinePhase_NotebookFailed

}
func (this *ModelPipelineRun) MarkStudyRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_StudyRunning

}
func (this *ModelPipelineRun) MarkStudyFailed(err error) {
	this.Status.TrainingStatus.RecordFailed()
	this.Status.Phase = PipelinePhase_StudyFailed

}
func (this *ModelPipelineRun) MarkStudyCompleted() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_StudyCompleted
}
func (this *ModelPipelineRun) MarkModelPublished() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_ModelPublished
}
func (this *ModelPipelineRun) MarkTrainingApproved() {
	this.Status.TrainingStatus.RecordCompleted()

}
func (this *ModelPipelineRun) MarkAcceptancePredictorRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_AcceptancePredictorRunning
}
func (this *ModelPipelineRun) MarkAcceptancePredictorCompleted() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_AcceptancePredictorCompleted
}
func (this *ModelPipelineRun) MarkAcceptancePrecitionRunRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_AcceptancePrecitionRunRunning

}
func (this *ModelPipelineRun) MarkAcceptancePrecitionRunCompleted() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_AcceptancePrecitionRunCompleted
}
func (this *ModelPipelineRun) MarkAcceptancePrecitionRunFailed(err error) {
	this.Status.TrainingStatus.RecordFailed()
	this.Status.Phase = PipelinePhase_AcceptancePrecitionRunFailed
}
func (this *ModelPipelineRun) MarkAcceptanceApproved() {
	this.Status.TrainingStatus.RecordCompleted()

}
func (this *ModelPipelineRun) MarkCapacityPredictorRunnning() {
	this.Status.CapacityStatus.RecordFailed()
	this.Status.Phase = PipelinePhase_CapacityPredictorRunning
}
func (this *ModelPipelineRun) MarkCapacityPredictorReady() {
	this.Status.CapacityStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_CapacityPredictorReady
}
func (this *ModelPipelineRun) MarkCapacityPredictionRunRunning() {
	this.Status.CapacityStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_CapacityPrecitionRunning
}
func (this *ModelPipelineRun) MarkCapacityPrecitionRunCompleted() {
	this.Status.CapacityStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_CapacityPrecitionRunCompleted
}
func (this *ModelPipelineRun) MarkCapacityPrecitionRunFailed(err error) {
	this.Status.CapacityStatus.RecordError(err)
	this.Status.Phase = PipelinePhase_CapacityPrecitionRunFailed
}
func (this *ModelPipelineRun) MarkCapacityApproved() {
	this.Status.CapacityStatus.RecordCompleted()
}
func (this *ModelPipelineRun) MarkReleaseModelDeployed() {
	this.Status.ReleaseStatus.RecordRunning()
	this.Status.Phase = PipelinePhase_ReleaseModelDeployed
}
func (this *ModelPipelineRun) MarkReleaseModelLive() {
	this.Status.ReleaseStatus.RecordCompleted()
	this.Status.Phase = PipelinePhase_ReleaseModelLive
}
