/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//==============================================================================
// EntityRef
//==============================================================================

import (
	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"

	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &Featureset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *Featureset) ValidateCreate() error {
	return run.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *Featureset) ValidateUpdate(old runtime.Object) error {
	return run.validate()
}

func (run *Featureset) validate() error {
	return nil
}

func (run *Featureset) ValidateDelete() error {
	return nil
}

func (run *Featureset) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(run).
		Complete()
}

// No defaults in this current release
func (run *Featureset) Default() {}
