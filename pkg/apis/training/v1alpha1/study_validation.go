/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/common"
	"github.com/pkg/errors"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &Study{}

func (study *Study) ValidateDelete() error {
	return nil
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (study *Study) ValidateCreate() error {
	return study.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (study *Study) ValidateUpdate(old runtime.Object) error {
	return study.validate()
}

func (study *Study) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, study.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modeld.io", Kind: "Study"},
		study.Name, allErrs)
}

func (study *Study) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (study *Study) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(study.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), study.Name, err.Error()))
	}
	return allErrs
}

func (study *Study) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateTask(fldPath.Child("Task"))...)
	return allErrs
}

// Validate task checks that the
func (study *Study) validateTask(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	if *study.Spec.Task == catalog.Regression && !study.Spec.Objective.IsRegression() {
		err := errors.Errorf("objective %v is not a regression metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.BinaryClassification && !study.Spec.Objective.IsClassification() {
		err := errors.Errorf("objective %v is not a binary classification metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.MultiClassification && !study.Spec.Objective.IsMultiClass() {
		err := errors.Errorf("objective %v is not a multi classification metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.Clustering && !study.Spec.Objective.IsClustering() {
		err := errors.Errorf("objective %v is not a clustering metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	return allErrs
}

//==============================================================================
// StudyName Defaults
//==============================================================================
