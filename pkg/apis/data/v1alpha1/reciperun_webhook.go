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

func (run *RecipeRun) Default() {
	if run.ObjectMeta.Labels == nil {
		run.ObjectMeta.Labels = make(map[string]string)
	}
	if run.Spec.RecipeName != nil {
		run.ObjectMeta.Labels[catalog.RecipeLabelKey] = *run.Spec.RecipeName
	}
	if run.Spec.VersionName != nil {
		run.ObjectMeta.Labels[catalog.DataProductVersionLabelKey] = *run.Spec.VersionName
	}
	run.ObjectMeta.Labels[catalog.TenantLabelKey] = run.Spec.LabRef.Namespace
	run.ObjectMeta.Labels[catalog.LabLabelKey] = run.Spec.LabRef.Name
}

// validation
var _ webhook.Validator = &RecipeRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (recipe *RecipeRun) ValidateCreate() error {
	return recipe.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (recipe *RecipeRun) ValidateUpdate(old runtime.Object) error {
	return recipe.validate()
}

func (recipe *RecipeRun) validate() error {
	return nil
}

func (recipe *RecipeRun) ValidateDelete() error {
	return nil
}
