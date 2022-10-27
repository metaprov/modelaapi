/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &License{}

func (license *License) Default() {
	if license.Spec.TrialStart == nil {
		t := metav1.Now()
		license.Spec.TrialStart = &t
	}
	if license.Spec.TrialEnd == nil {
		t := license.Spec.TrialStart.AddDate(0, 0, 21)
		license.Spec.TrialEnd = &metav1.Time{Time: t}
	}

}

// validation
var _ webhook.Validator = &License{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (license License) ValidateCreate() error {
	return license.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (license License) ValidateUpdate(old runtime.Object) error {
	return license.validate()
}

func (license License) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}
	return nil
}

func (license License) ValidateDelete() error {
	return nil
}
