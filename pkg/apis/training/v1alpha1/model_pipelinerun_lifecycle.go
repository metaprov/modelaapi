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

////////////////////////////////////////////////////////////
// Data Stage Running
////////////////////////////////////////////////////////////

func (this *ModelPipelineRun) MarkDataStageRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageData
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRDataStageCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsDataStageRunning() bool {
	return this.GetCond(MPRDataStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRDataStageCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkDataStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageData

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRDataStageCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsDataStageCompleted() bool {
	return this.GetCond(MPRDataStageCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkDataStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageData
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRDataStageCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsDataStageFailed() bool {
	return this.GetCond(MPRDataStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRDataStageCompleted).Reason == string(catalog.Failed)
}

////////////////////////////////////////////////////////////
// Training Stage
////////////////////////////////////////////////////////////
func (this *ModelPipelineRun) MarkTrainingStageRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRDataStageCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsTrainingStageRunning() bool {
	return this.GetCond(MPRTrainingStageCmpleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingStageCmpleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkTrainingStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageTraining

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingStageCmpleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsTrainingStageCompleted() bool {
	return this.GetCond(MPRTrainingStageCmpleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkTrainingStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRTrainingStageCmpleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsTrainingStageFailed() bool {
	return this.GetCond(MPRTrainingStageCmpleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingStageCmpleted).Reason == string(catalog.Failed)
}

////////////////////////////////////////////////////////////
// UAT Stage
////////////////////////////////////////////////////////////
func (this *ModelPipelineRun) MarkUATStageRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUATCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsUATStageRunning() bool {
	return this.GetCond(MPRUATCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRUATCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkUATStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageUAT

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRUATCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsUatStageCompleted() bool {
	return this.GetCond(MPRUATCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkUatStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRUATCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsUATStageFailed() bool {
	return this.GetCond(MPRUATCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRUATCompleted).Reason == string(catalog.Failed)
}

////////////////////////////////////////////////////////////
// Capacity Stage
////////////////////////////////////////////////////////////
func (this *ModelPipelineRun) MarkCapacityStageRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageCapacity
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityStageCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsCapacityStageRunning() bool {
	return this.GetCond(MPRCapacityStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityStageCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkCapcityStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageUAT

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRCapacityStageCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsCapacityStageCompleted() bool {
	return this.GetCond(MPRCapacityStageCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkCapacityStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRCapacityStageCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsCapacityStageFailed() bool {
	return this.GetCond(MPRCapacityStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityStageCompleted).Reason == string(catalog.Failed)
}

////////////////////////////////////////////////////////////
// Prod Stage
////////////////////////////////////////////////////////////

func (this *ModelPipelineRun) MarkProdStageRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageProd
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRProdCompleted,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
}

func (this *ModelPipelineRun) IsProdStageRunning() bool {
	return this.GetCond(MPRProdCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRProdCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkProdStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageUAT

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRProdCompleted,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsProdStageCompleted() bool {
	return this.GetCond(MPRProdCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkProdStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageUAT
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRProdCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
}

func (this *ModelPipelineRun) IsProdStageFailed() bool {
	return this.GetCond(MPRProdCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRProdCompleted).Reason == string(catalog.Failed)
}
