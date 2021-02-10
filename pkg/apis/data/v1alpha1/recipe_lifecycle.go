/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/metaprov/modeld-api/pkg/apis/data"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (r *Recipe) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (r *Recipe) HasFinalizer() bool { return util.HasFin(&r.ObjectMeta, data.GroupName) }
func (r *Recipe) AddFinalizer()      { util.AddFin(&r.ObjectMeta, data.GroupName) }
func (r *Recipe) RemoveFinalizer()   { util.RemoveFin(&r.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (r *Recipe) CreateOrUpdateCond(cond RecipeCondition) {
	i := r.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		r.Status.Conditions = append(r.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := r.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	r.Status.Conditions[i] = current
}

func (r *Recipe) GetCondIdx(t RecipeConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *Recipe) GetCond(t RecipeConditionType) RecipeCondition {
	for _, v := range r.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return RecipeCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *Recipe) IsReady() bool {
	return r.GetCond(RecipeReady).Status == v1.ConditionTrue
}

func (r *Recipe) Populate(name string) {

	r.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modeld-data",
	}

	r.Spec = RecipeSpec{
		VersionName: "iris-0.0.1",
	}
}

func (r *Recipe) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

func (r *Recipe) IsInCond(ct RecipeConditionType) bool {
	current := r.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (r *Recipe) PrintConditions() {
	for _, v := range r.Status.Conditions {
		fmt.Println(v)
	}
}

func (r *Recipe) MarkReady() {
	r.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeReady,
		Status: v1.ConditionTrue,
	})
}

func (r *Recipe) Deleted() bool {
	return !r.ObjectMeta.DeletionTimestamp.IsZero()
}
