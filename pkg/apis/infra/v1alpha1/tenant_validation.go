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
var _ webhook.Validator = &Tenant{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (tenant *Tenant) ValidateCreate() error {
	return tenant.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (tenant *Tenant) ValidateUpdate(old runtime.Object) error {
	return tenant.validate()
}

func (tenant *Tenant) validate() error {
	return nil
}
func (tenant *Tenant) ValidateDelete() error {
	return nil
}
