/*
 * Copyright (c) 2019.
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
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Defaulter = &VirtualVolume{}

// validation
var _ webhook.Validator = &VirtualVolume{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (volume *VirtualVolume) ValidateCreate() error {
	return volume.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (volume *VirtualVolume) ValidateUpdate(old runtime.Object) error {
	return volume.validate()
}

func (notifier *VirtualVolume) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, notifier.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, notifier.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "infra.modeld.io", Kind: "VirtualVolume"},
		notifier.Name, allErrs)
}

func (dataset *VirtualVolume) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, dataset.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (dataset *VirtualVolume) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(dataset.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), dataset.Name, err.Error()))
	}
	return allErrs
}

func (dataset *VirtualVolume) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (volume *VirtualVolume) Default() {
	if !volume.HasFinalizer() {
		volume.AddFinalizer()
	}
	volume.Kind = "VirtualVolume"

}

func (volume *VirtualVolume) ValidateDelete() error {
	panic("implement me")
}
