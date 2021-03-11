/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/util"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Recipe{}

func (r *Recipe) Default() {

	if r.Spec.Owner == nil {
		r.Spec.Owner = util.StrPtr("")
	}

	if r.Spec.Description == nil {
		r.Spec.Description = util.StrPtr("")
	}

}

// validation
var _ webhook.Validator = &Recipe{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (recipe *Recipe) ValidateCreate() error {
	return recipe.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (recipe *Recipe) ValidateUpdate(old runtime.Object) error {
	return recipe.validate()
}

func (recipe *Recipe) validate() error {
	return nil
}

func (recipe *Recipe) ValidateDelete() error {
	return nil
}
