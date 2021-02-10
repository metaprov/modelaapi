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

// validation
var _ webhook.Validator = &Dataset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (dataset *Dataset) ValidateCreate() error {
	return dataset.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (dataset *Dataset) ValidateUpdate(old runtime.Object) error {
	return dataset.validate()
}

func (dataset *Dataset) validate() error {
	return nil
}

func (dataset *Dataset) ValidateDelete() error {
	return nil
}
