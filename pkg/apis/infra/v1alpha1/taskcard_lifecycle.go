/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (alert *TaskCard) SetupWebhookWithManager(mgr ctrl.Manager) error {
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

func (alert *TaskCard) HasFinalizer() bool {
	return util.HasFin(&alert.ObjectMeta, metav1.GroupName)
}
func (alert *TaskCard) AddFinalizer()    { util.AddFin(&alert.ObjectMeta, metav1.GroupName) }
func (alert *TaskCard) RemoveFinalizer() { util.RemoveFin(&alert.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (alert *TaskCard) CreateOrUpdateCond(cond TaskCardCondition) {
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

func (alert *TaskCard) GetCondIdx(t TaskCardConditionType) int {
	for i, v := range alert.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (alert *TaskCard) GetCond(t TaskCardConditionType) TaskCardCondition {
	for _, v := range alert.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return TaskCardCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (alert *TaskCard) IsReady() bool {
	return alert.GetCond(TaskCardSent).Status == v1.ConditionTrue
}

func (alert *TaskCard) RootUri() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", alert.Namespace, alert.Name)
}

func (alert *TaskCard) ManifestUri() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", alert.RootUri(), alert.Name)
}

func ParseTaskCardYaml(content []byte) (*TaskCard, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*TaskCard)
	return r, nil
}

func (alert *TaskCard) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(alert)
}

func (alert *TaskCard) MarkArchived() {
	alert.CreateOrUpdateCond(TaskCardCondition{
		Type:   TaskCardSaved,
		Status: v1.ConditionTrue,
	})
}
