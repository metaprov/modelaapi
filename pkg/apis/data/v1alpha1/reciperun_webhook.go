/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &RecipeRun{}

func (reciperun *RecipeRun) Default() {
	if reciperun.ObjectMeta.Labels == nil {
		reciperun.ObjectMeta.Labels = make(map[string]string)
	}
	if reciperun.Spec.RecipeName != nil {
		reciperun.ObjectMeta.Labels[catalog.RecipeLabelKey] = *reciperun.Spec.RecipeName
	}
	if reciperun.Spec.VersionName != nil {
		reciperun.ObjectMeta.Labels[catalog.DataProductVersionLabelKey] = *reciperun.Spec.VersionName
	}
	reciperun.ObjectMeta.Labels[catalog.TenantLabelKey] = reciperun.Spec.LabRef.Namespace
	reciperun.ObjectMeta.Labels[catalog.LabLabelKey] = reciperun.Spec.LabRef.Name
}

// validation
var _ webhook.Validator = &RecipeRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (reciperun *RecipeRun) ValidateCreate() error {
	return reciperun.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (reciperun *RecipeRun) ValidateUpdate(old runtime.Object) error {
	return reciperun.validate()
}

func (reciperun *RecipeRun) validate() error {
	return nil
}

func (reciperun *RecipeRun) ValidateDelete() error {
	return nil
}
