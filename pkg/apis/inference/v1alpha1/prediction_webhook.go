package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Prediction{}

func (prediction *Prediction) Default() {
	// auto generate prediction output

	// if no input bucket defined,
	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string)
	}
	prediction.ObjectMeta.Labels[catalog.TenantLabelKey] = prediction.Spec.ServingSiteRef.Namespace
	prediction.ObjectMeta.Labels[catalog.ServingSiteLabelKey] = prediction.Spec.ServingSiteRef.Name

}

// validation
var _ webhook.Validator = &Prediction{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (prediction Prediction) ValidateCreate() error {
	return prediction.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (prediction Prediction) ValidateUpdate(old runtime.Object) error {
	return prediction.validate()
}

func (prediction Prediction) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modela.ai", Kind: "BatchPrediction"},
		prediction.Name, allErrs)
}

func (prediction Prediction) ValidateDelete() error {
	return nil
}
