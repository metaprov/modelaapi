/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/common"
	corev1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Defaulter = &ModelaSystem{}

func (notifier *ModelaSystem) Default() {

}

// validation
var _ webhook.Validator = &ModelaSystem{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (notifier *ModelaSystem) ValidateCreate() error {
	return notifier.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (notifier *ModelaSystem) ValidateUpdate(old runtime.Object) error {
	return notifier.validate()
}

func (notifier *ModelaSystem) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, notifier.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, notifier.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.ai", Kind: "ModelaSystem"}, notifier.Name, allErrs)
}

func (notifier *ModelaSystem) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, notifier.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (notifier *ModelaSystem) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(notifier.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), notifier.Name, err.Error()))
	}
	return allErrs
}

func (notifier *ModelaSystem) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (notifier *ModelaSystem) ValidateDelete() error {
	return nil
}

func (notifier *ModelaSystem) MarkReady() {
	notifier.CreateOrUpdateCond(ModelaSystemCondition{
		Type:   ModelaSystemReady,
		Status: corev1.ConditionTrue,
	})
}
