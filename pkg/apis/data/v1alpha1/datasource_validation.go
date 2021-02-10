package v1alpha1

import (
	"github.com/metaprov/modeld-api/pkg/apis/common"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

//==============================================================================
// EntityRef
//==============================================================================

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
		schema.GroupKind{Group: "data.modeld.io", Kind: "DataSource"},
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
