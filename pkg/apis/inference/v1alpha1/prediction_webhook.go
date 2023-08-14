package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Prediction{}

func (prediction *Prediction) Default() {
	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string)
	}

	if prediction.Spec.ModelRef != nil {
		prediction.ObjectMeta.Labels[catalog.ModelLabelKey] = prediction.Spec.ModelRef.Name
	}

	if prediction.Spec.ServingSiteRef != nil {
		prediction.ObjectMeta.Labels[catalog.TenantLabelKey] = prediction.Spec.ServingSiteRef.Namespace
		prediction.ObjectMeta.Labels[catalog.ServingSiteLabelKey] = prediction.Spec.ServingSiteRef.Name
	}

	if prediction.Spec.ModelClassName != nil {
		prediction.ObjectMeta.Labels[catalog.ModelClassLabelKey] = *prediction.Spec.ModelClassName
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
	return nil
}

func (prediction *Prediction) ValidateDelete() error {
	return nil
}
