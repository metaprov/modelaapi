package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &Predictor{}

func (predictor *Predictor) ValidateCreate() error {
	return predictor.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (predictor *Predictor) ValidateUpdate(old runtime.Object) error {
	return predictor.validate()
}

func (predictor *Predictor) validate() error {
	//var allErrs field.ErrorList

	//return apierrors.NewInvalid(
	//	schema.GroupKind{Group: "inference.modeld.io", Kind: "Predictor"},
	//	predictor.FileName, allErrs)
	return nil
}

func (predictor *Predictor) ValidateDelete() error {
	return nil
}
