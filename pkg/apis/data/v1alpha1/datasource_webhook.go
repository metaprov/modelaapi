/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/common"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &DataSource{}

func (datasource *DataSource) Default() {

}

// validation
var _ webhook.Validator = &DataSource{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (datasource DataSource) ValidateCreate() error {
	return datasource.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (datasource DataSource) ValidateUpdate(old runtime.Object) error {
	return datasource.validate()
}

func (datasource DataSource) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, datasource.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, datasource.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.ai", Kind: "DataSource"},
		datasource.Name, allErrs)
}

func (datasource DataSource) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, datasource.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (datasource DataSource) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(datasource.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), datasource.Name, err.Error()))
	}
	return allErrs
}

func (datasource DataSource) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, datasource.Spec.InferredFrom.Validate(fldPath.Child("InferredFrom"))...)
	return allErrs
}

func (datasource DataSource) ValidateDelete() error {
	return nil
}

func (column *Column) Validate() (bool, []metav1.StatusCause) {
	return false, nil
}
