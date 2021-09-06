package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Predictor{}

func (predictor *Predictor) Default() {
	// add the finalizer if we are not about to get deleted.

	if predictor.Spec.ProductRef == nil {
		predictor.Spec.ProductRef = &v1.ObjectReference{
			Namespace: "default-tenant",
			Name:      predictor.Namespace,
		}
	}

	if predictor.Spec.Path == nil {
		predictor.Spec.Path = util.StrPtr("/predict")
	}

	if predictor.Spec.AccessType == nil {
		defaultAccess := catalog.IngressAccessType
		predictor.Spec.AccessType = &defaultAccess
	}

	if predictor.Spec.Progressive == nil {
		predictor.Spec.Progressive = &ProgressiveSpec{
			Warmup:           util.Int32Ptr(15),
			TrafficIncrement: util.Int32Ptr(10),
			CanaryMetrics:    nil,
		}
	}

}

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
	//	schema.GroupKind{Group: "inference.modela.ai", Kind: "Predictor"},
	//	predictor.FileName, allErrs)
	return nil
}

func (predictor *Predictor) ValidateDelete() error {
	return nil
}
