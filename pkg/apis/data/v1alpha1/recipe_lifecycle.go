/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (recipe *Recipe) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(recipe).
		Complete()
}

func (recipe Recipe) HasFinalizer() bool { return util.HasFin(&recipe.ObjectMeta, data.GroupName) }
func (recipe *Recipe) AddFinalizer()     { util.AddFin(&recipe.ObjectMeta, data.GroupName) }
func (recipe *Recipe) RemoveFinalizer()  { util.RemoveFin(&recipe.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (recipe *Recipe) CreateOrUpdateCond(cond RecipeCondition) {
	i := recipe.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		recipe.Status.Conditions = append(recipe.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := recipe.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	recipe.Status.Conditions[i] = current
}

func (recipe *Recipe) GetCondIdx(t RecipeConditionType) int {
	for i, v := range recipe.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (recipe Recipe) GetCond(t RecipeConditionType) RecipeCondition {
	for _, v := range recipe.Status.Conditions {
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

func (recipe Recipe) IsReady() bool {
	return recipe.GetCond(RecipeReady).Status == v1.ConditionTrue
}

func (recipe *Recipe) Populate(name string) {

	recipe.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modela-data",
	}

	recipe.Spec = RecipeSpec{
		VersionName: util.StrPtr("iris-0.0.1"),
	}
}

func (recipe Recipe) IsInCond(ct RecipeConditionType) bool {
	current := recipe.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (recipe Recipe) PrintConditions() {
	for _, v := range recipe.Status.Conditions {
		fmt.Println(v)
	}
}

func (recipe *Recipe) MarkReady() {
	recipe.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeReady,
		Status: v1.ConditionTrue,
	})
}

func (recipe Recipe) Deleted() bool {
	return !recipe.ObjectMeta.DeletionTimestamp.IsZero()
}

func (recipe *Recipe) MarkSaved() {
	recipe.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeSaved,
		Status: v1.ConditionTrue,
	})
}

func (recipe Recipe) IsSaved() bool {
	return recipe.GetCond(RecipeSaved).Status == v1.ConditionTrue
}

func (recipe *Recipe) UpdateRunStatus(run RecipeRun) {

}
