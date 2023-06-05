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

func (notifier *Notifier) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(notifier).
		Complete()
}

//==============================================================================
// Validation
//==============================================================================

//==============================================================================
// Finalizer
//==============================================================================

func (notifier Notifier) HasFinalizer() bool {
	return util.HasFin(&notifier.ObjectMeta, metav1.GroupName)
}
func (notifier *Notifier) AddFinalizer()    { util.AddFin(&notifier.ObjectMeta, metav1.GroupName) }
func (notifier *Notifier) RemoveFinalizer() { util.RemoveFin(&notifier.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (notifier *Notifier) CreateOrUpdateCond(cond metav1.Condition) {
	i := notifier.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		notifier.Status.Conditions = append(notifier.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := notifier.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	notifier.Status.Conditions[i] = current
}

func (notifier Notifier) GetCondIdx(t string) int {
	for i, v := range notifier.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (notifier Notifier) GetCond(t string) metav1.Condition {
	for _, v := range notifier.Status.Conditions {
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

func (notifier Notifier) IsReady() bool {
	return notifier.GetCond(string(NotifierReady)).Status == metav1.ConditionTrue
}

func (notifier Notifier) RootURI() string {
	return fmt.Sprintf("tenant/%s/notifiers/%s", notifier.Namespace, notifier.Name)
}

func (notifier Notifier) ManifestURI() string {
	return fmt.Sprintf("%s/%s-notifier.yaml", notifier.RootURI(), notifier.Name)
}

func ParseNotifierYaml(content []byte) (*Notifier, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Notifier)
	return r, nil
}

func (notifier *Notifier) MarkReady() {
	notifier.CreateOrUpdateCond(metav1.Condition{
		Type:   string(NotifierReady),
		Status: metav1.ConditionTrue,
		Reason: string(NotifierReady),
	})
}

func (notifier Notifier) GetStatus() interface{} {
	return notifier.Status
}

func (notifier Notifier) GetObservedGeneration() int64 {
	return notifier.Status.ObservedGeneration
}

func (notifier *Notifier) SetObservedGeneration(generation int64) {
	notifier.Status.ObservedGeneration = generation
}

func (notifier *Notifier) SetUpdatedAt(time *metav1.Time) {
	notifier.Status.UpdatedAt = time
}

func (notifier *Notifier) SetStatus(status interface{}) {
	notifier.Status = status.(NotifierStatus)
}
