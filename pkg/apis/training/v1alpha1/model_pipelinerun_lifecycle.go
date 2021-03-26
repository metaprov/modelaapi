/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
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
	this.Error = err.Error()
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

func (this *ModelPipelineRunStageStatus) IsRunning() bool {
	return this.Phase == StageStatusPhaseRunning
}

func (this *ModelPipelineRun) MarkPreprocessingDataRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageData
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRDataPipelineCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsPreprocessingDataRunning() bool {
	return this.GetCond(MPRDataPipelineCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRDataPipelineCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkPreprocessingDataCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageData

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRDataPipelineCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsPreprocessingDataCompleted() bool {
	return this.GetCond(MPRDataPipelineCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkPreprocessingDataFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageData
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRDataPipelineCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsPreprocessingDataFailed() bool {
	return this.GetCond(MPRCapacityPredictionCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityPredictionCompleted).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkTrainingNotebookRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRDataPipelineCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsTrainingNotebookRunning() bool {
	return this.GetCond(MPRTrainingNotebookCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingNotebookCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkTrainingNotebookCompleted() {
	this.Status.TrainingStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingNotebookCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsTrainingNotebookCompleted() bool {
	return this.GetCond(MPRTrainingNotebookCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkTrainingNotebookFailed(err error) {
	this.Status.TrainingStatus.RecordFailed()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRTrainingNotebookCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsTrainingNotebookFailed() bool {
	return this.GetCond(MPRTrainingNotebookCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingNotebookCompleted).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkStudyRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingStudyCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsStudyRunning() bool {
	return this.GetCond(MPRTrainingStudyCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingStudyCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkStudyFailed(err error) {
	this.Status.TrainingStatus.RecordFailed()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingStudyCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsStudyFailed() bool {
	return this.GetCond(MPRTrainingStudyCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingStudyCompleted).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkStudyCompleted() {
	this.Status.TrainingStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingStudyCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsStudyCompleted() bool {
	return this.GetCond(MPRTrainingStudyCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkModelPublished() {
	this.Status.TrainingStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingModelPublished,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsModelPublished() bool {
	return this.GetCond(MPRTrainingModelPublished).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkTrainingApproved() {
	this.Status.TrainingStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingApproved,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsTrainingApproved() bool {
	return this.GetCond(MPRTrainingModelPublished).Status == v1.ConditionTrue
}

// Acceptance Stage
func (this *ModelPipelineRun) MarkUATPredictorRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUatPredictorReady,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsUATPredictorRunning() bool {
	return this.GetCond(MPRUatPredictorReady).Status == v1.ConditionFalse &&
		this.GetCond(MPRUatPredictorReady).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkUATPredictorReady() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUatPredictorReady,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsUATPredictorReady() bool {
	return this.GetCond(MPRUatPredictorReady).Status == v1.ConditionFalse &&
		this.GetCond(MPRUatPredictorReady).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkUATPredictionRunRunning() {
	this.Status.UATStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUatPredictionCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsUATPredictionRunRunning() bool {
	return this.GetCond(MPRUatPredictorReady).Status == v1.ConditionFalse &&
		this.GetCond(MPRUatPredictorReady).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkUATPredictionRunCompleted() {
	this.Status.UATStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUatPredictionCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsUATPredictionRunCompleted() bool {
	return this.GetCond(MPRUatPredictionCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkUATPredictionRunFailed(err error) {
	this.Status.UATStatus.RecordFailed()
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRUatPredictionCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsUATPredictionRunFailed() bool {
	return this.GetCond(MPRUatPredictorReady).Status == v1.ConditionFalse &&
		this.GetCond(MPRUatPredictionCompleted).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkUATApproved() {
	this.Status.TrainingStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUatApproved,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsUATApproved() bool {
	return this.GetCond(MPRUatPredictorReady).Status == v1.ConditionTrue
}

// Capacity
func (this *ModelPipelineRun) MarkCapacityPredictorRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityPredictorReady,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) MarkCapacityPredictorCompleted() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityPredictorReady,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsPredictorCompleted() bool {
	return this.GetCond(MPRCapacityPredictorReady).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkCapacityPredictionRunRunning() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityPredictionCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsCapacityPredictionRunRunning() bool {
	return this.GetCond(MPRCapacityPredictionCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityPredictionCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkCapacityPredictionRunCompleted() {
	this.Status.TrainingStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityPredictionCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsCapacityPredictionRunCompleted() bool {
	return this.GetCond(MPRCapacityPredictionCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkCapacityPredictionRunFailed(err error) {
	this.Status.TrainingStatus.RecordFailed()
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRCapacityPredictionCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsCapacityPredictionFailed() bool {
	return this.GetCond(MPRCapacityPredictionCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityPredictionCompleted).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkCapacityApproved() {
	this.Status.TrainingStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityApproved,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsCapacityApproved() bool {
	return this.GetCond(MPRCapacityPredictionCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityPredictionCompleted).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkReleasePredictorReady() {
	this.Status.ReleaseStatus.RecordRunning()
	this.Status.Stage = ModelPipelineStageRelease
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRReleasePredictorReady,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsReleasePredictorReady() bool {
	return this.GetCond(MPRReleasePredictorReady).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkReleaseApproved() {
	this.Status.ReleaseStatus.RecordCompleted()
	this.Status.Stage = ModelPipelineStageRelease
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRReleaseApproved,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsReleaseApproved() bool {
	return this.GetCond(MPRReleaseApproved).Status == v1.ConditionTrue
}
