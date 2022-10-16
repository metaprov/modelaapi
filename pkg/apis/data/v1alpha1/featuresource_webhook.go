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
var _ webhook.Validator = &FeatureSource{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (feature *FeatureSource) ValidateCreate() error {
	return feature.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (feature *FeatureSource) ValidateUpdate(old runtime.Object) error {
	return feature.validate()
}

func (feature *FeatureSource) validate() error {
	return nil
}

func (r *FeatureSource) ValidateDelete() error {
	return nil
}

func (in *FeatureSource) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(in).
		Complete()
}

// No defaults in this current release
func (feature *FeatureSource) Default() {}
