/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/dustin/go-humanize"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (run *NotebookRun) VarsToMap() map[string]string {
	result := make(map[string]string)
	for _, v := range run.Spec.Values {
		result[v.Name] = v.Value
	}
	return result
}

func (run *NotebookRun) IsMarkedForDeletion() bool {
	return run.DeletionTimestamp != nil
}

//==============================================================================
// Validate
//==============================================================================

func (run *NotebookRun) JobName() string {
	return fmt.Sprintf("run-%s", run.Name)
}

func (run *NotebookRun) Age() string {
	return humanize.Time(run.CreationTimestamp.Time)
}

//==============================================================================
// Finializer
//==============================================================================

func (run *NotebookRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, training.GroupName)
}
func (run *NotebookRun) AddFinalizer()    { util.AddFin(&run.ObjectMeta, training.GroupName) }
func (run *NotebookRun) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, training.GroupName) }

//==============================================================================
// Keys
//==============================================================================

func (run *NotebookRun) RootFolderKey() string {
	return fmt.Sprintf("modela/notebooks/%s/runs/%s", *run.Spec.NotebookName, run.ObjectMeta.Name)
}

//khai/labs/l1/studies/<s1>/models/<m1>/estimator.bin
func (run *NotebookRun) EstimatorBinFileKey() string {
	return fmt.Sprintf("%s/estimator.bin", run.RootFolderKey())
}

func (run *NotebookRun) ModelBinFileKey() string {
	return fmt.Sprintf("%s/model.bin", run.RootFolderKey())
}

func (run *NotebookRun) StudyBinFileKey() string {
	return fmt.Sprintf("%s/study.bin", run.RootFolderKey())
}

func (run *NotebookRun) SchemaBinFileKey() string {
	return fmt.Sprintf("%s/schema.bin", run.RootFolderKey())
}

// Merge or update condition
func (run *NotebookRun) CreateOrUpdateCond(cond NotebookRunCondition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
		current.LastTransitionTime = &now
		run.Status.Conditions[i] = current
	}
	run.Status.Conditions[i] = current
}

func (run *NotebookRun) GetCondIdx(t NotebookRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *NotebookRun) GetCond(t NotebookRunConditionType) NotebookRunCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return NotebookRunCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (run *NotebookRun) StatusString() string {
	return string(run.Status.Phase)
}

func (run *NotebookRun) IsReady() bool {
	return run.GetCond(NotebookRunCompleted).Status == corev1.ConditionTrue
}

func (run *NotebookRun) Key() string {
	return fmt.Sprintf("%s/%s/%s", "ters", run.Namespace, run.Name)
}

func ParseNotebookRunYaml(content []byte) (*NotebookRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*NotebookRun)
	return r, nil
}

func (r *NotebookRun) MarkCompleted() {
	r.Status.Phase = NotebookRunPhaseCompleted
	r.CreateOrUpdateCond(NotebookRunCondition{
		Type:   NotebookRunCompleted,
		Status: corev1.ConditionTrue,
	})
	now := metav1.Now()
	r.Status.EndTime = &now

}

func (r *NotebookRun) MarkArchived() {
	r.CreateOrUpdateCond(NotebookRunCondition{
		Type:   NotebookRunSaved,
		Status: corev1.ConditionTrue,
	})

}

func (r *NotebookRun) MarkFailed(error string) {
	r.Status.Phase = NotebookRunPhaseFailed
	r.CreateOrUpdateCond(NotebookRunCondition{
		Type:    NotebookRunCompleted,
		Status:  corev1.ConditionFalse,
		Reason:  error,
		Message: error,
	})
	r.Status.FailureMessage = util.StrPtr(error)
	now := metav1.Now()
	r.Status.EndTime = &now

}

func (r *NotebookRun) MarkRunning() {
	now := metav1.Now()
	if r.Status.StartTime != nil {
		r.Status.StartTime = &now
	}
	r.Status.Phase = NotebookRunPhaseRunning
	r.CreateOrUpdateCond(NotebookRunCondition{
		Type:    NotebookRunCompleted,
		Status:  corev1.ConditionFalse,
		Message: string(NotebookRunPhaseRunning),
	})
}

////////////////////////////////////////////////////////////
// NotebookRun Alerts

func (run *NotebookRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Notebook run %s completed successfully", run.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "NotebookRun",
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
	if run.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = run.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (run *NotebookRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Notebook run %s failed with error %v", run.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "NotebookRun",
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
	if run.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = run.Status.EndTime.Format("01/2/2006 15:04:05")
	}

	return result
}

func (in *NotebookRun) IsFailed() bool {
	cond := in.GetCond(NotebookRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(NotebookRunCompleted)
}

// Return the state of the run as RunStatus
func (run *NotebookRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: run.Status.EndTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	result.Status = string(run.Status.Phase)
	return result

}
