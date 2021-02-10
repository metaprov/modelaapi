/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"

	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &DataProductVersion{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (version *DataProductVersion) ValidateCreate() error {
	return version.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (version *DataProductVersion) ValidateUpdate(old runtime.Object) error {
	return version.validate()
}

func (version *DataProductVersion) validate() error {
	return nil
}

func (version *DataProductVersion) ValidateDelete() error {
	return nil
}

func (version *DataProductVersion) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(&DataProductVersion{}).
		Complete()
}
