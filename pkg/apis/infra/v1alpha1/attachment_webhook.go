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
var _ webhook.Defaulter = &Attachment{}

func (attachment *Attachment) Default() {

}

// validation
var _ webhook.Validator = &Attachment{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (attachment *Attachment) ValidateCreate() error {
	return attachment.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (attachment *Attachment) ValidateUpdate(old runtime.Object) error {
	return attachment.validate()
}

func (attachment *Attachment) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, attachment.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, attachment.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.ai", Kind: "Attachment"}, attachment.Name, allErrs)
}

func (attachment *Attachment) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, attachment.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (attachment *Attachment) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(attachment.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), attachment.Name, err.Error()))
	}
	return allErrs
}

func (attachment *Attachment) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (attachment *Attachment) ValidateDelete() error {
	return nil
}
