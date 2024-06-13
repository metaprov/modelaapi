package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &APIKeyGroup{}

func (akg *APIKeyGroup) Default() {
	if akg.ObjectMeta.Labels == nil {
		akg.ObjectMeta.Labels = make(map[string]string)
	}

	akg.ObjectMeta.Labels[catalog.VersionLabelKey] = "1"
}

var _ webhook.Validator = &APIKeyGroup{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (akg *APIKeyGroup) ValidateCreate() error {
	return akg.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (akg *APIKeyGroup) ValidateUpdate(old runtime.Object) error {
	return akg.validate()
}

func (akg *APIKeyGroup) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, akg.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "genai.modela.ai", Kind: "APIKeyGroup"},
		akg.Name, allErrs)
}

func (akg *APIKeyGroup) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, akg.validateApiKeys(fldPath.Child("apiKeys"))...)
	return allErrs
}

func (akg *APIKeyGroup) validateApiKeys(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for i, key := range akg.Spec.APIKeys {
		if len(key.Name) == 0 {
			allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("name"), key.Name, "A name is required"))
		}
		if _, ok := nameMap[key.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(fldPath.Index(i), key))
		}
		nameMap[key.Name] = true
	}
	return allErrs
}
