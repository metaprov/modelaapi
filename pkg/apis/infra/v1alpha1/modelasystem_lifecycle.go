/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (ms *ModelaSystem) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(ms).
		Complete()
}

//==============================================================================
// Validation
//==============================================================================

//==============================================================================
// Finalizer
//==============================================================================

func (ms ModelaSystem) HasFinalizer() bool {
	return util.HasFin(&ms.ObjectMeta, metav1.GroupName)
}
func (ms *ModelaSystem) AddFinalizer() { util.AddFin(&ms.ObjectMeta, metav1.GroupName) }
func (ms *ModelaSystem) RemoveFinalizer() {
	util.RemoveFin(&ms.ObjectMeta, metav1.GroupName)
}

// Merge or update condition
func (ms *ModelaSystem) CreateOrUpdateCond(cond ModelaSystemCondition) {
	i := ms.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		ms.Status.Conditions = append(ms.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := ms.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	ms.Status.Conditions[i] = current
}

func (ms ModelaSystem) GetCondIdx(t ModelaSystemConditionType) int {
	for i, v := range ms.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (ms ModelaSystem) GetCond(t ModelaSystemConditionType) ModelaSystemCondition {
	for _, v := range ms.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ModelaSystemCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (ms ModelaSystem) IsReady() bool {
	return ms.GetCond(ModelaSystemReady).Status == v1.ConditionTrue
}

func (ms ModelaSystem) RootURI() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", ms.Namespace, ms.Name)
}

func (ms ModelaSystem) ManifestURI() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", ms.RootURI(), ms.Name)
}

func ParseModelaSystemYaml(content []byte) (*ModelaSystem, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ModelaSystem)
	return r, nil
}

func (ms *ModelaSystem) MarkArchived() {
	ms.CreateOrUpdateCond(ModelaSystemCondition{
		Type:   ModelaSystemSaved,
		Status: v1.ConditionTrue,
	})
}
