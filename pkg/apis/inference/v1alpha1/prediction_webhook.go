package v1alpha1

import (
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
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
	if *prediction.Spec.Output.Location.Type == data.DataLocationObjectStorage {
		if *prediction.Spec.Output.Location.Path == "" {
			prediction.Spec.Output.Location.Path = util.StrPtr(*prediction.Spec.Input.Location.Path + ".out")
		}
	}

	// if no input bucket defined,
	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string)
	}
	prediction.ObjectMeta.Labels["modela.ai/tenant"] = prediction.Spec.ServingSiteRef.Namespace
	prediction.ObjectMeta.Labels["modela.ai/servingsite"] = prediction.Spec.ServingSiteRef.Name

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
		schema.GroupKind{Group: "inference.modela.ai", Kind: "Prediction"},
		prediction.Name, allErrs)
}

func (prediction *Prediction) ValidateDelete() error {
	return nil
}
