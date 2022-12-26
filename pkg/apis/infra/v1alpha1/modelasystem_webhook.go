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

// validation
var _ webhook.Defaulter = &ModelaSystem{}

func (ms *ModelaSystem) Default() {

}

// validation
var _ webhook.Validator = &ModelaSystem{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (ms ModelaSystem) ValidateCreate() error {
	return ms.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (ms ModelaSystem) ValidateUpdate(old runtime.Object) error {
	return ms.validate()
}

func (ms *ModelaSystem) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, ms.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, ms.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.ai", Kind: "ModelaSystem"}, ms.Name, allErrs)
}

func (ms ModelaSystem) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, ms.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (ms ModelaSystem) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(ms.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), ms.Name, err.Error()))
	}
	return allErrs
}

func (ms ModelaSystem) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (ms ModelaSystem) ValidateDelete() error {
	return nil
}
