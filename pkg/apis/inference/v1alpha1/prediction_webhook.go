package v1alpha1

import (
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Prediction{}

func (pre *Prediction) Default() {
	// if no input bucket defined,

	if pre.Spec.Output == nil {
		pre.Spec.Output = &data.DataOutputSpec{}
		pre.Spec.Output.Location = &data.DataLocation{}
	}

	if pre.Spec.Output == nil {
		pre.Spec.Output = &data.DataOutputSpec{}
		pre.Spec.Output.Location = &data.DataLocation{}
	}

}

// validation
var _ webhook.Validator = &Prediction{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (prediction *Prediction) ValidateCreate() error {
	return prediction.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (prediction *Prediction) ValidateUpdate(old runtime.Object) error {
	return prediction.validate()
}

func (prediction *Prediction) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modela.io", Kind: "Prediction"},
		prediction.Name, allErrs)
}

func (prediction *Prediction) ValidateDelete() error {
	return nil
}
