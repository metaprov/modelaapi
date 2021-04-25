/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/common"
	corev1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Defaulter = &Alert{}

func (alert *Alert) Default() {

}

// validation
var _ webhook.Validator = &Alert{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (alert *Alert) ValidateCreate() error {
	return alert.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (alert *Alert) ValidateUpdate(old runtime.Object) error {
	return alert.validate()
}

func (alert *Alert) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, alert.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, alert.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modeld.io", Kind: "Alert"}, alert.Name, allErrs)
}

func (alert *Alert) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, alert.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (alert *Alert) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(alert.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), alert.Name, err.Error()))
	}
	return allErrs
}

func (alert *Alert) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (alert *Alert) ValidateDelete() error {
	return nil
}

func (alert *Alert) MarkSent() {
	alert.CreateOrUpdateCond(AlertCondition{
		Type:   AlertSent,
		Status: corev1.ConditionTrue,
	})
}
