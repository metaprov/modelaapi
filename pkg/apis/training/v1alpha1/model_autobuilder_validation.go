/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeld-api/pkg/apis/common"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &ModelAutobuilder{}
var _ webhook.Defaulter = &ModelAutobuilder{}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (b *ModelAutobuilder) ValidateCreate() error {
	return b.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (b *ModelAutobuilder) ValidateUpdate(old runtime.Object) error {
	return b.validate()
}

func (b *ModelAutobuilder) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, b.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, b.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modeld.io", Kind: "ModelAutobuilder"},
		b.Name, allErrs)
}

func (b *ModelAutobuilder) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, b.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (b *ModelAutobuilder) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(b.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), b.Name, err.Error()))
	}
	return allErrs
}

func (b *ModelAutobuilder) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (b *ModelAutobuilder) ValidateDelete() error {
	return nil
}
