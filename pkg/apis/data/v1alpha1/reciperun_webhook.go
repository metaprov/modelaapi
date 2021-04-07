/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &RecipeRun{}

func (r *RecipeRun) Default() {

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
