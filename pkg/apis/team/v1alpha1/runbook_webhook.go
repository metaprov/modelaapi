/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/common"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &RunBook{}

func (runbook *RunBook) Default() {

}

// validation
var _ webhook.Validator = &RunBook{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (runbook *RunBook) ValidateCreate() error {
	return runbook.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (runbook *RunBook) ValidateUpdate(old runtime.Object) error {
	return runbook.validate()
}

func (runbook *RunBook) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, runbook.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, runbook.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "team.modela.io", Kind: "RunBook"}, runbook.Name, allErrs)
}

func (runbook *RunBook) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, runbook.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (runbook *RunBook) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(runbook.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), runbook.Name, err.Error()))
	}
	return allErrs
}

func (runbook *RunBook) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (runbook *RunBook) ValidateDelete() error {
	return nil
}
