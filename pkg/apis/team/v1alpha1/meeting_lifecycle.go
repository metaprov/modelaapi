/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (alert *Meeting) SetupWebhookWithManager(mgr ctrl.Manager) error {
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

func (alert *Meeting) HasFinalizer() bool {
	return util.HasFin(&alert.ObjectMeta, metav1.GroupName)
}
func (alert *Meeting) AddFinalizer()    { util.AddFin(&alert.ObjectMeta, metav1.GroupName) }
func (alert *Meeting) RemoveFinalizer() { util.RemoveFin(&alert.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (alert *Meeting) CreateOrUpdateCond(cond MeetingCondition) {
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

func (alert *Meeting) GetCondIdx(t MeetingConditionType) int {
	for i, v := range alert.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (alert *Meeting) GetCond(t MeetingConditionType) MeetingCondition {
	for _, v := range alert.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return MeetingCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (alert *Meeting) IsReady() bool {
	return alert.GetCond(MeetingDone).Status == v1.ConditionTrue
}

func (alert *Meeting) RootUri() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", alert.Namespace, alert.Name)
}

func (alert *Meeting) ManifestUri() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", alert.RootUri(), alert.Name)
}

func (alert *Meeting) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(alert)
}

func (alert *Meeting) MarkArchived() {
	alert.CreateOrUpdateCond(MeetingCondition{
		Type:   MeetingSaved,
		Status: v1.ConditionTrue,
	})
}
