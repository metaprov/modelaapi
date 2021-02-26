/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/common"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
	
)

func (wr *DataPipeline) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(wr).
		Complete()
}

// validation
var _ webhook.Validator = &DataPipeline{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (wr *DataPipeline) ValidateCreate() error {
	return wr.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (wr *DataPipeline) ValidateUpdate(old runtime.Object) error {
	return wr.validate()
}

func (wr *DataPipeline) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, wr.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, wr.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modeld.io", Kind: "DataPipeline"},
		wr.Name, allErrs)
}

func (wr *DataPipeline) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, wr.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (wr *DataPipeline) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(wr.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), wr.Name, err.Error()))
	}
	return allErrs
}

func (wr *DataPipeline) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (wr *DataPipeline) ValidateDelete() error {
	return nil
}

func (wr *DataPipeline) Default() {

}
