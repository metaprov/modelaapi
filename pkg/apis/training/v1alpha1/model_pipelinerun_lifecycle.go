/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
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

func (run *ModelPipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
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
	this.Status.Progress = util.Int32Ptr(10)
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
	this.Status.Progress = util.Int32Ptr(15)
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
	this.Status.Progress = util.Int32Ptr(100)
	this.Status.FailureMessage = util.StrPtr(err.Error())
	now := metav1.Now()
	this.Status.EndTime = &now
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
	this.Status.Progress = util.Int32Ptr(20)
}

func (this *ModelPipelineRun) IsTrainingStageRunning() bool {
	return this.GetCond(MPRTrainingStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingStageCompleted).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkTrainingStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageTraining

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRTrainingStageCompleted,
		Status: v1.ConditionTrue,
	})
	this.Status.Progress = util.Int32Ptr(50)
}

func (this *ModelPipelineRun) IsTrainingStageCompleted() bool {
	return this.GetCond(MPRTrainingStageCompleted).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkTrainingStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageTraining
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRTrainingStageCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
	this.Status.Progress = util.Int32Ptr(100)
	this.Status.FailureMessage = util.StrPtr(err.Error())
	now := metav1.Now()
	this.Status.EndTime = &now
}

func (this *ModelPipelineRun) IsTrainingStageFailed() bool {
	return this.GetCond(MPRTrainingStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRTrainingStageCompleted).Reason == string(catalog.Failed)
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
	this.Status.Progress = util.Int32Ptr(55)
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
	this.Status.Progress = util.Int32Ptr(70)
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
	this.Status.Progress = util.Int32Ptr(100)
	this.Status.FailureMessage = util.StrPtr(err.Error())
	now := metav1.Now()
	this.Status.EndTime = &now
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
	this.Status.Progress = util.Int32Ptr(75)
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
	this.Status.Progress = util.Int32Ptr(80)
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
	this.Status.Progress = util.Int32Ptr(100)
	this.Status.FailureMessage = util.StrPtr(err.Error())
	now := metav1.Now()
	this.Status.EndTime = &now
}

func (this *ModelPipelineRun) IsCapacityStageFailed() bool {
	return this.GetCond(MPRCapacityStageCompleted).Status == v1.ConditionFalse &&
		this.GetCond(MPRCapacityStageCompleted).Reason == string(catalog.Failed)
}

////////////////////////////////////////////////////////////
// Deployment Stage
////////////////////////////////////////////////////////////

func (this *ModelPipelineRun) MarkProdStageRunning() {
	this.Status.DataStatus.RecordRunning()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageProd
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRModelReleased,
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
	this.Status.Progress = util.Int32Ptr(80)
}

func (this *ModelPipelineRun) IsProdStageRunning() bool {
	return this.GetCond(MPRModelReleased).Status == v1.ConditionFalse &&
		this.GetCond(MPRModelReleased).Reason == string(catalog.Running)
}

func (this *ModelPipelineRun) MarkProdStageCompleted() {
	this.Status.DataStatus.RecordCompleted()
	this.Status.Phase = PipelinePhaseRunning
	this.Status.Stage = ModelPipelineStageProd

	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRModelReleased,
		Status: v1.ConditionTrue,
	})
	this.Status.Progress = util.Int32Ptr(100)
}

func (this *ModelPipelineRun) IsProdStageCompleted() bool {
	return this.GetCond(MPRModelReleased).Status == v1.ConditionTrue
}

func (this *ModelPipelineRun) MarkProdStageFailed(err error) {
	this.Status.DataStatus.RecordError(err)
	this.Status.Stage = ModelPipelineStageProd
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:    MPRModelReleased,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err.Error(),
	})
	this.Status.Progress = util.Int32Ptr(100)
	this.Status.FailureMessage = util.StrPtr(err.Error())
	now := metav1.Now()
	this.Status.EndTime = &now
}

func (this *ModelPipelineRun) IsProdStageFailed() bool {
	return this.GetCond(MPRModelReleased).Status == v1.ConditionFalse &&
		this.GetCond(MPRModelReleased).Reason == string(catalog.Failed)
}

func (this *ModelPipelineRun) MarkSaved() {
	this.CreateOrUpdateCond(ModelPipelineRunCondition{
		Type:   MPRSaved,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelPipelineRun) IsSaved() bool {
	cond := this.GetCond(MPRSaved)
	return cond.Status == v1.ConditionTrue
}

func (in *ModelPipelineRun) IsFailed() bool {
	return in.IsCapacityStageFailed() || in.IsDataStageFailed() || in.IsProdStageFailed()
}

// Return the state of the run as RunStatus
func (run *ModelPipelineRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: run.Status.EndTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	result.Status = string(run.Status.Phase)
	return result

}

func (run *ModelPipelineRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("ModelPipelineRun %s failed with error %v", run.Name, err.Error())
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      util.StrPtr(subject),
			Message:      util.StrPtr(err.Error()),
			Level:        &level,
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelPipelineRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			Owner: run.Spec.Owner,
			Fields: map[string]string{
				"Start Time":      run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"Completion Time": run.Status.EndTime.Format("01/2/2006 15:04:05"),
			},
		},
	}
}

func (run *ModelPipelineRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Dataset %s completed successfully ", run.Name)
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelPipelineRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time":      run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"Completion Time": run.Status.EndTime.Format("01/2/2006 15:04:05"),
			},
		},
	}
}
