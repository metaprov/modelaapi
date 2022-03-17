/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
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

func (run *NotebookRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}

func (r *NotebookRun) MarkCompleted() {
	r.Status.Phase = NotebookRunPhaseCompleted
	r.CreateOrUpdateCond(NotebookRunCondition{
		Type:   NotebookRunCompleted,
		Status: corev1.ConditionTrue,
	})
	now := metav1.Now()
	if r.Status.EndTime != nil {
		r.Status.EndTime = &now
	}

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
	now := metav1.Now()
	if r.Status.EndTime != nil {
		r.Status.EndTime = &now
	}

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
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("Notebook Run Completed"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"starttime": run.ObjectMeta.CreationTimestamp.Format("Mon Jan 2 15:04:05 MST 2006"),
			},
		},
	}
}

func (run *NotebookRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("Notebook Run Error"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"starttime": run.ObjectMeta.CreationTimestamp.Format("Mon Jan 2 15:04:05 MST 2006"),
			},
		},
	}
}
