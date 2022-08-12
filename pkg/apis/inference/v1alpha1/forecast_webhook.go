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
var _ webhook.Defaulter = &Forecast{}

func (forecast *Forecast) Default() {
	// auto generate forecast output

	// if no input bucket defined,
	if forecast.ObjectMeta.Labels == nil {
		forecast.ObjectMeta.Labels = make(map[string]string)
	}
	forecast.ObjectMeta.Labels[catalog.TenantLabelKey] = forecast.Spec.ServingSiteRef.Namespace
	forecast.ObjectMeta.Labels[catalog.ServingSiteLabelKey] = forecast.Spec.ServingSiteRef.Name

}

// validation
var _ webhook.Validator = &Forecast{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (forecast *Forecast) ValidateCreate() error {
	return forecast.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (forecast *Forecast) ValidateUpdate(old runtime.Object) error {
	return forecast.validate()
}

func (forecast *Forecast) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modela.ai", Kind: "Forecast"},
		forecast.Name, allErrs)
}

func (forecast *Forecast) ValidateDelete() error {
	return nil
}
