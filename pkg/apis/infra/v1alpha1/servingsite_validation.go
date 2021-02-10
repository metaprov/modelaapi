/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"

	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &ServingSite{}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (r *ServingSite) ValidateCreate() error {
	return r.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (r *ServingSite) ValidateUpdate(old runtime.Object) error {
	return r.validate()
}

func (r *ServingSite) validate() error {
	return nil

}

func (r *ServingSite) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (r *ServingSite) ValidateDelete() error {
	return nil
}

func (r *ServingSite) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}
