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
var _ webhook.Validator = &FeatureGroup{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (fg FeatureGroup) ValidateCreate() error {
	return fg.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (fg FeatureGroup) ValidateUpdate(old runtime.Object) error {
	return fg.validate()
}

func (fg FeatureGroup) validate() error {
	return nil
}

func (fg FeatureGroup) ValidateDelete() error {
	return nil
}

func (fg *FeatureGroup) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(fg).
		Complete()
}

// No defaults in this current release
func (fg *FeatureGroup) Default() {}
