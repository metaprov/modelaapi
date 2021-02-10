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
var _ webhook.Validator = &Conversation{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (conv *Conversation) ValidateCreate() error {
	return conv.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (conv *Conversation) ValidateUpdate(old runtime.Object) error {
	return conv.validate()
}

func (conv *Conversation) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, conv.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, conv.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "team.modeld.io", Kind: "Conversation"}, conv.Name, allErrs)
}

func (conv *Conversation) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, conv.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (conv *Conversation) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(conv.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), conv.Name, err.Error()))
	}
	return allErrs
}

func (conv *Conversation) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (conv *Conversation) ValidateDelete() error {
	return nil
}
