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
var _ webhook.Defaulter = &ApiToken{}

func (token *ApiToken) Default() {

}

// validation
var _ webhook.Validator = &ApiToken{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (token ApiToken) ValidateCreate() error {
	return token.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (token ApiToken) ValidateUpdate(old runtime.Object) error {
	return token.validate()
}

func (token ApiToken) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, token.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, token.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.ai", Kind: "ApiToken"}, token.Name, allErrs)
}

func (token ApiToken) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, token.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (token ApiToken) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(token.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), token.Name, err.Error()))
	}
	return allErrs
}

func (token ApiToken) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (token ApiToken) ValidateDelete() error {
	return nil
}

func (token *ApiToken) MarkReady() {
	token.CreateOrUpdateCond(ApiTokenCondition{
		Type:   ApiTokenReady,
		Status: corev1.ConditionTrue,
	})
}
