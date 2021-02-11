/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"

	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &DataProduct{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (r *DataProduct) ValidateCreate() error {
	return r.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (r *DataProduct) ValidateUpdate(old runtime.Object) error {
	return r.validate()
}

func (r *DataProduct) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modeld.io", Kind: "DataProduct"},
		r.Name, allErrs)
}

func (r *DataProduct) ValidateDelete() error {
	return nil
}

func (r *DataProduct) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(&DataProduct{}).
		Complete()
}
