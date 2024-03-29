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

func (report *Report) Default() {
	f := Pdf
	report.Spec.Format = &f

	if report.ObjectMeta.Labels == nil {
		report.ObjectMeta.Labels = make(map[string]string)
	}
}

// validation
var _ webhook.Validator = &Report{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (report *Report) ValidateCreate() error {
	return report.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (report *Report) ValidateUpdate(old runtime.Object) error {
	return report.validate()
}

func (report *Report) validate() error {
	return nil
}

func (report *Report) validateReportName() *field.Error {
	return nil
}
