/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Dataset{}

func (dataset *Dataset) Default() {
	if dataset.ObjectMeta.Labels == nil {
		dataset.ObjectMeta.Labels = make(map[string]string)
	}

	if dataset.Spec.DataSourceName != "" {
		dataset.ObjectMeta.Labels[catalog.DatasourceLabelKey] = dataset.Spec.DataSourceName
	}

	if dataset.Spec.Owner != nil {
		dataset.ObjectMeta.Labels[catalog.OwnerLabelKey] = *dataset.Spec.Owner
	}

	if dataset.Spec.ModelClassName != nil {
		dataset.ObjectMeta.Labels[catalog.ModelClassLabelKey] = *dataset.Spec.ModelClassName
	}

	dataset.ObjectMeta.Labels[catalog.VersionLabelKey] = "1"
}

// validation
var _ webhook.Validator = &Dataset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (dataset *Dataset) ValidateCreate() error {
	return dataset.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (dataset *Dataset) ValidateUpdate(old runtime.Object) error {
	return dataset.validate()
}

func (dataset *Dataset) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, dataset.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.ai", Kind: "Dataset"},
		dataset.Name, allErrs)
}

func (dataset *Dataset) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, dataset.validateLocation(fldPath.Child("location"))...)
	return allErrs
}

func (dataset *Dataset) validateLocation(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (dataset *Dataset) ValidateDelete() error {
	return nil
}

func (dataset *Dataset) Validate(field string) ([]metav1.StatusCause, bool) {
	return nil, true
}
