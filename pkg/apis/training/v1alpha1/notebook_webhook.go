/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (notebook *Notebook) Default() {

}

// validation
var _ webhook.Validator = &Notebook{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (notebook *Notebook) ValidateCreate() error {
	return notebook.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (notebook *Notebook) ValidateUpdate(old runtime.Object) error {
	return notebook.validate()
}

func (notebook *Notebook) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modeld.io", Kind: "Notebook"},
		notebook.Name, allErrs)
}

func (notebook *Notebook) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (notebook *Notebook) ValidateDelete() error {
	panic("implement me")
}
