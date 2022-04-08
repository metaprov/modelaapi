/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/util"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (b *ModelAutobuilder) Default() {
	if b.Spec.DataProductName == nil {
		b.Spec.DataProductName = util.StrPtr(b.Name)
	}
	if b.Spec.DataProductVersionName == nil {
		b.Spec.DataProductVersionName = util.StrPtr("0.1.0")
	}
	if b.Spec.MaxModels == nil {
		b.Spec.MaxModels = util.Int32Ptr(10)
	}
	if b.Spec.MaxTime == nil {
		b.Spec.MaxTime = util.Int32Ptr(5) // 5 minutes
	}
	if b.Spec.TargetColumn == nil {
		b.Spec.TargetColumn = util.StrPtr("") // need to infer target column
	}
	if b.Spec.DataSourceName == nil {
		b.Spec.DataSourceName = util.StrPtr("")
	}
	if b.Spec.Trainers == nil {
		b.Spec.Trainers = util.Int32Ptr(1)
	}
	if b.Spec.Sampler == nil {
		sm := RandomSearch
		b.Spec.Sampler = &sm
	}

	if b.Spec.Objective == nil {
		o := DefaultObjective(*b.Spec.Task)
		b.Spec.Objective = &o
	}

	if b.ObjectMeta.Labels == nil {
		b.ObjectMeta.Labels = make(map[string]string)
	}
	if b.Spec.DataProductVersionName != nil {
		b.ObjectMeta.Labels["modela.ai/version"] = *b.Spec.DataProductVersionName
	}
	b.ObjectMeta.Labels["modela.ai/tenant"] = b.Spec.LabRef.Namespace
	b.ObjectMeta.Labels["modela.ai/lab"] = b.Spec.LabRef.Name
	b.ObjectMeta.Labels["modela.ai/servingsite"] = b.Spec.ServingSiteRef.Name

}

// validation
var _ webhook.Validator = &ModelAutobuilder{}
var _ webhook.Defaulter = &ModelAutobuilder{}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (b *ModelAutobuilder) ValidateCreate() error {
	return b.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (b *ModelAutobuilder) ValidateUpdate(old runtime.Object) error {
	return b.validate()
}

func (b *ModelAutobuilder) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, b.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, b.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modela.ai", Kind: "ModelAutobuilder"},
		b.Name, allErrs)
}

func (b *ModelAutobuilder) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, b.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (b *ModelAutobuilder) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(b.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), b.Name, err.Error()))
	}
	return allErrs
}

func (b *ModelAutobuilder) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (b *ModelAutobuilder) ValidateDelete() error {
	return nil
}
