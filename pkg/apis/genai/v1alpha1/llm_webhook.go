package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &KnowledgeBase{}

func (llm *LLM) Default() {
	if llm.ObjectMeta.Labels == nil {
		llm.ObjectMeta.Labels = make(map[string]string)
	}

	llm.ObjectMeta.Labels[catalog.VersionLabelKey] = "1"
}

var _ webhook.Validator = &KnowledgeBase{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (llm *LLM) ValidateCreate() error {
	return llm.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (llm *LLM) ValidateUpdate(old runtime.Object) error {
	return llm.validate()
}

func (llm *LLM) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, llm.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "genai.modela.ai", Kind: "LLM"},
		llm.Name, allErrs)
}

func (llm *LLM) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, llm.validateModels(fldPath.Child("models"))...)
	return allErrs
}

func (llm *LLM) validateModels(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (llm *LLM) ValidateDelete() error {
	return nil
}
