/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/common"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &PostMortem{}

func (pm *PostMortem) Default() {

}

// validation
var _ webhook.Validator = &PostMortem{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (pm *PostMortem) ValidateCreate() error {
	return pm.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (pm *PostMortem) ValidateUpdate(old runtime.Object) error {
	return pm.validate()
}

func (pm *PostMortem) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, pm.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, pm.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}
	return nil
}

func (pm *PostMortem) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, pm.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (pm *PostMortem) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(pm.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), pm.Name, err.Error()))
	}
	return allErrs
}

func (pm *PostMortem) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (pm *PostMortem) ValidateDelete() error {
	return nil
}
