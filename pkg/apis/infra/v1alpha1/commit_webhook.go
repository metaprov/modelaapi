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
var _ webhook.Defaulter = &Commit{}

func (commit *Commit) Default() {

}

// validation
var _ webhook.Validator = &Commit{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (commit *Commit) ValidateCreate() error {
	return commit.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (commit *Commit) ValidateUpdate(old runtime.Object) error {
	return commit.validate()
}

func (commit *Commit) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, commit.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, commit.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.io", Kind: "Commit"}, commit.Name, allErrs)
}

func (commit *Commit) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, commit.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (commit *Commit) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(commit.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), commit.Name, err.Error()))
	}
	return allErrs
}

func (commit *Commit) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	//Smtp.To   []string
	//Smtp.Origin string
	//Smtp.Host string
	//Smtp.Port int32

	//Slack.WebHook

	return allErrs
}

func (commit *Commit) ValidateDelete() error {
	return nil
}

func (commit *Commit) MarkSent() {
	commit.CreateOrUpdateCond(CommitCondition{
		Type:   CommitSent,
		Status: corev1.ConditionTrue,
	})
}
