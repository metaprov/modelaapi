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
var _ webhook.Validator = &FeatureHistogram{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (fh FeatureHistogram) ValidateCreate() error {
	return fh.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (fh FeatureHistogram) ValidateUpdate(old runtime.Object) error {
	return fh.validate()
}

func (fh FeatureHistogram) validate() error {
	return nil
}

func (fh FeatureHistogram) ValidateDelete() error {
	return nil
}

func (fh *FeatureHistogram) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(fh).
		Complete()
}

// No defaults in this current release
func (fh *FeatureHistogram) Default() {}
