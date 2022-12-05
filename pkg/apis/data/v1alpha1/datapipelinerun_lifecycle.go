/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (run DataPipelineRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, data.GroupName)
}
func (run *DataPipelineRun) AddFinalizer()    { util.AddFin(&run.ObjectMeta, data.GroupName) }
func (run *DataPipelineRun) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (run *DataPipelineRun) CreateOrUpdateCond(cond DataPipelineRunCondition) {
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

func (run DataPipelineRun) GetCondIdx(t DataPipelineRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run DataPipelineRun) GetCond(t DataPipelineRunConditionType) DataPipelineRunCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DataPipelineRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (w DataPipelineRun) IsReady() bool {
	return w.GetCond(DataPipelineRunCompleted).Status == v1.ConditionTrue
}

func (w DataPipelineRun) IsSaved() bool {
	return w.GetCond(DataPipelineRunSaved).Status == v1.ConditionTrue
}

func (run DataPipelineRun) StatusString() string {
	return string(run.Status.Phase)
}

func (run DataPipelineRun) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/wranglings/%s", run.Namespace, *run.Spec.VersionName, run.Name)
}

func (run DataPipelineRun) ManifestURI() string {
	return fmt.Sprintf("%s/%s-wrangling.yaml", run.RootURI(), run.Name)
}

func (in DataPipelineRun) Paused() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhasePaused)
}

func (in DataPipelineRun) Aborted() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhaseAborted)
}

func (in DataPipelineRun) IsCompleted() bool {
	return in.GetCond(DataPipelineRunCompleted).Status == v1.ConditionTrue
}

func (in DataPipelineRun) IsRunning() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhaseRunning)
}

func (in DataPipelineRun) IsFailed() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhaseFailed)
}

func (r *DataPipelineRun) MarkRunning() {
	now := metav1.Now()
	if r.Status.StartedAt == nil {
		r.Status.StartedAt = &now
	}
	r.Status.Phase = DataPipelineRunPhaseRunning
	r.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunCompleted,
		Status: v1.ConditionFalse,
		Reason: string(DataPipelineRunPhaseRunning),
	})
	r.Status.Progress = util.Int32Ptr(10)

}

func (in *DataPipelineRun) MarkComplete() {
	in.Status.Phase = DataPipelineRunPhaseCompleted
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunCompleted,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if in.Status.CompletedAt == nil {
		in.Status.CompletedAt = &now
	}
	in.Status.Progress = util.Int32Ptr(100)
}

func (in *DataPipelineRun) MarkFailed(err error) {
	in.Status.Phase = DataPipelineRunPhaseFailed
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:    DataPipelineRunCompleted,
		Status:  v1.ConditionTrue,
		Reason:  string(DataPipelineRunPhaseFailed),
		Message: err.Error(),
	})
	now := metav1.Now()
	if in.Status.CompletedAt == nil {
		in.Status.CompletedAt = &now
	}
	in.Status.Progress = util.Int32Ptr(100)
	in.Status.FailureMessage = util.StrPtr(err.Error())
}

func (in *DataPipelineRun) MarkAborted(err error) {
	in.Status.Phase = DataPipelineRunPhaseAborted
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunConditionType(DataPipelineRunPhaseAborted),
		Status: v1.ConditionTrue,
		Reason: string(DataPipelineRunPhaseAborted),
	})
	now := metav1.Now()
	if in.Status.CompletedAt == nil {
		in.Status.CompletedAt = &now
	}
	in.Status.Progress = util.Int32Ptr(100)
	in.Status.FailureMessage = util.StrPtr(err.Error())
}

func (in *DataPipelineRun) MarkSaved() {
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunSaved,
		Status: v1.ConditionTrue,
	})
}

// Generate a dataset completion alert
func (run DataPipelineRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Location pipeline run %s completed successfully", run.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "DataPipelineRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = run.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (run DataPipelineRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Location pipeline run %s failed with error %v", run.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      util.StrPtr(subject),
			Level:        &level,
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			EntityRef: v1.ObjectReference{
				Kind:      "DataPipelineRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			Owner: run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = run.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

// Return the state of the run as RunStatus
func (run DataPipelineRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletedAt:    run.Status.CompletedAt,
		Duration:       int32(run.Status.CompletedAt.Unix() - run.Status.StartedAt.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	result.Status = string(run.Status.Phase)
	return result

}
