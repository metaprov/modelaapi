/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (alert *Alert) SetupWebhookWithManager(mgr ctrl.Manager) error {
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

func (alert *Alert) HasFinalizer() bool {
	return util.HasFin(&alert.ObjectMeta, metav1.GroupName)
}
func (alert *Alert) AddFinalizer()    { util.AddFin(&alert.ObjectMeta, metav1.GroupName) }
func (alert *Alert) RemoveFinalizer() { util.RemoveFin(&alert.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (alert *Alert) CreateOrUpdateCond(cond metav1.Condition) {
	i := alert.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		alert.Status.Conditions = append(alert.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := alert.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	alert.Status.Conditions[i] = current
}

func (alert Alert) GetCondIdx(t string) int {
	for i, v := range alert.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (alert Alert) GetCond(t string) metav1.Condition {
	for _, v := range alert.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (alert Alert) IsReady() bool {
	return alert.GetCond(AlertSent).Status == metav1.ConditionTrue
}

func (alert Alert) RootURI() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", alert.Namespace, alert.Name)
}

func (alert Alert) ManifestURI() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", alert.RootURI(), alert.Name)
}

func ParseAlertYaml(content []byte) (*Alert, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Alert)
	return r, nil
}

func (alert *Alert) MarkFailed(err string) {
	alert.CreateOrUpdateCond(metav1.Condition{
		Type:    AlertSent,
		Status:  metav1.ConditionFalse,
		Message: err,
		Reason:  "Failed",
	})
}

func (alert *Alert) MarkSent() {
	alert.CreateOrUpdateCond(metav1.Condition{
		Type:   string(AlertSent),
		Status: metav1.ConditionTrue,
		Reason: string(AlertSent),
	})
}

func (alert Alert) GetStatus() interface{} {
	return alert.Status
}

func (alert Alert) GetObservedGeneration() int64 {
	return alert.Status.ObservedGeneration
}

func (alert *Alert) SetObservedGeneration(generation int64) {
	alert.Status.ObservedGeneration = generation
}

func (alert *Alert) SetUpdatedAt(time *metav1.Time) {
	alert.Status.UpdatedAt = time
}

func (alert *Alert) SetStatus(status interface{}) {
	alert.Status = status.(AlertStatus)
}
