/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"

	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (alert *Todo) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(alert).
		Complete()
}

//==============================================================================
// Validation
//==============================================================================

//==============================================================================
// Finalizer
//==============================================================================

func (alert *Todo) HasFinalizer() bool {
	return util.HasFin(&alert.ObjectMeta, metav1.GroupName)
}
func (alert *Todo) AddFinalizer()    { util.AddFin(&alert.ObjectMeta, metav1.GroupName) }
func (alert *Todo) RemoveFinalizer() { util.RemoveFin(&alert.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (alert *Todo) CreateOrUpdateCond(cond TodoCondition) {
	i := alert.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		alert.Status.Conditions = append(alert.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := alert.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	alert.Status.Conditions[i] = current
}

func (alert *Todo) GetCondIdx(t TodoConditionType) int {
	for i, v := range alert.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (alert *Todo) GetCond(t TodoConditionType) TodoCondition {
	for _, v := range alert.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return TodoCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (alert *Todo) IsReady() bool {
	return alert.GetCond(TodoDone).Status == v1.ConditionTrue
}

func (alert *Todo) RootURI() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", alert.Namespace, alert.Name)
}

func (alert *Todo) ManifestURI() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", alert.RootURI(), alert.Name)
}

func (alert *Todo) MarkArchived() {
	alert.CreateOrUpdateCond(TodoCondition{
		Type:   TodoSaved,
		Status: v1.ConditionTrue,
	})
}

func (todo Todo) GetStatus() proto.Message {
	return &todo.Status
}

func (todo Todo) GetObservedGeneration() int64 {
	return todo.Status.ObservedGeneration
}

func (todo Todo) SetObservedGeneration(generation int64) {
	todo.Status.ObservedGeneration = generation
}

func (todo Todo) SetUpdatedAt(time *metav1.Time) {
	todo.Status.LastUpdated = time
}

func (todo *Todo) SetStatus(status interface{}) {
	todo.Status = *status.(*TodoStatus)
}
