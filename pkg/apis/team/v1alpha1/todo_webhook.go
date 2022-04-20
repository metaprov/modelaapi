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
var _ webhook.Defaulter = &Todo{}

func (alert *Todo) Default() {

}

// validation
var _ webhook.Validator = &Todo{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (alert *Todo) ValidateCreate() error {
	return alert.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (alert *Todo) ValidateUpdate(old runtime.Object) error {
	return alert.validate()
}

func (alert *Todo) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, alert.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, alert.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.ai", Kind: "Todo"}, alert.Name, allErrs)
}

func (alert *Todo) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, alert.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (alert *Todo) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(alert.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), alert.Name, err.Error()))
	}
	return allErrs
}

func (alert *Todo) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (alert *Todo) ValidateDelete() error {
	return nil
}

func (task *Todo) MarkDone() {
	task.CreateOrUpdateCond(TodoCondition{
		Type:   TodoDone,
		Status: corev1.ConditionTrue,
	})
}
