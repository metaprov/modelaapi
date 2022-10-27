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
var _ webhook.Defaulter = &Lab{}

func (lab *Lab) Default() {

}

// validation
var _ webhook.Validator = &Lab{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (lab Lab) ValidateCreate() error {
	return lab.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (lab Lab) ValidateUpdate(old runtime.Object) error {
	return lab.validate()
}

func (lab Lab) validate() error {
	return nil
}

func (lab Lab) ValidateDelete() error {
	return nil
}
