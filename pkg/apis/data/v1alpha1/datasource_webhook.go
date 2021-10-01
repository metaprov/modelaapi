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
func (ffile *DataSource) ValidateCreate() error {
	return ffile.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (ffile *DataSource) ValidateUpdate(old runtime.Object) error {
	return ffile.validate()
}

func (ffile *DataSource) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, ffile.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, ffile.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.ai", Kind: "DataSource"},
		ffile.Name, allErrs)
}

func (ffile *DataSource) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, ffile.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (ffile *DataSource) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(ffile.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), ffile.Name, err.Error()))
	}
	return allErrs
}

func (ffile *DataSource) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (ffile *DataSource) ValidateDelete() error {
	return nil
}

func (in *Column) Validate() (bool, []metav1.StatusCause) {
	return false, nil
}
