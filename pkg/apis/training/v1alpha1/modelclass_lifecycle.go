/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/dustin/go-humanize"
	ctrl "sigs.k8s.io/controller-runtime"

	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (run *ModelClass) IsMarkedForDeletion() bool {
	return run.DeletionTimestamp != nil
}

//Set up the webhook with the manager.
func (mc *ModelClass) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(mc).
		Complete()
}

//==============================================================================
// Validate
//==============================================================================

func (run *ModelClass) JobName() string {
	return fmt.Sprintf("run-%s", run.Name)
}

func (run *ModelClass) Age() string {
	return humanize.Time(run.CreationTimestamp.Time)
}

//==============================================================================
// Finializer
//==============================================================================

func (run *ModelClass) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, training.GroupName)
}
func (run *ModelClass) AddFinalizer()    { util.AddFin(&run.ObjectMeta, training.GroupName) }
func (run *ModelClass) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, training.GroupName) }

// Merge or update condition
func (run *ModelClass) CreateOrUpdateCond(cond ModelClassCondition) {
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

func (run *ModelClass) GetCondIdx(t ModelClassConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *ModelClass) GetCond(t ModelClassConditionType) ModelClassCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ModelClassCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (run *ModelClass) IsReady() bool {
	return run.GetCond(ModelClassReady).Status == corev1.ConditionTrue
}

func (run *ModelClass) Key() string {
	return fmt.Sprintf("%s/%s/%s", "ters", run.Namespace, run.Name)
}

func ParseModelClassYaml(content []byte) (*ModelClass, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ModelClass)
	return r, nil
}

func (r *ModelClass) MarkArchived() {
	r.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassSaved,
		Status: corev1.ConditionTrue,
	})

}

func (in *ModelClass) IsFailed() bool {
	cond := in.GetCond(ModelClassReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(ModelClassReady)
}
