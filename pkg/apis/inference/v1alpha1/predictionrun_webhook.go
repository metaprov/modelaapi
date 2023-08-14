package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &PredictionRun{}

func (predictionrun *PredictionRun) Default() {
	if predictionrun.ObjectMeta.Labels == nil {
		predictionrun.ObjectMeta.Labels = make(map[string]string)
	}

	predictionrun.ObjectMeta.Labels[catalog.PredictionLabelKey] = predictionrun.Spec.PredictionName

	if predictionrun.Spec.Owner != nil {
		predictionrun.ObjectMeta.Labels[catalog.OwnerLabelKey] = *predictionrun.Spec.Owner
	}
}

// validation
var _ webhook.Validator = &PredictionRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (predictionrun *PredictionRun) ValidateCreate() error {
	return predictionrun.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (predictionrun *PredictionRun) ValidateUpdate(old runtime.Object) error {
	return predictionrun.validate()
}

func (predictionrun *PredictionRun) validate() error {
	return nil
}

func (predictionrun *PredictionRun) ValidateDelete() error {
	return nil
}
