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

//==============================================================================
// Validate
//==============================================================================

func (image *ManagedImage) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// defaulting
var _ webhook.Defaulter = &ManagedImage{}

// validation
var _ webhook.Validator = &ManagedImage{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (image *ManagedImage) ValidateCreate() error {
	_, e := image.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (image *ManagedImage) ValidateUpdate(old runtime.Object) error {
	_, e := image.Validate()
	return e.ToAggregate()
}

func (image *ManagedImage) ValidateDelete() error {
	return nil
}
