/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &License{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (license *License) ValidateCreate() error {
	return license.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (license *License) ValidateUpdate(old runtime.Object) error {
	return license.validate()
}

func (dataset *License) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}
	return nil
}

func (m *License) ValidateDelete() error {
	return nil
}
