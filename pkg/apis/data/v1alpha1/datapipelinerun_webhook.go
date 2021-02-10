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

// validation
var _ webhook.Validator = &DataPipelineRun{}

func (wr *DataPipelineRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(wr).
		Complete()
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *DataPipelineRun) ValidateCreate() error {
	return run.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *DataPipelineRun) ValidateUpdate(old runtime.Object) error {
	return run.validate()
}

func (run *DataPipelineRun) ValidateDelete() error {
	return nil
}

func (ffile *DataPipelineRun) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, ffile.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, ffile.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modeld.io", Kind: "TDataPipelineRun"},
		ffile.Name, allErrs)
}

func (ffile *DataPipelineRun) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, ffile.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (ffile *DataPipelineRun) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(ffile.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), ffile.Name, err.Error()))
	}
	return allErrs
}

func (ffile *DataPipelineRun) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}
