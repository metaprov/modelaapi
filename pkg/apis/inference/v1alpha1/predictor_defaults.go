package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Predictor{}

func (predictor *Predictor) Default() {
	// add the finalizer if we are not about to get deleted.

	if predictor.Spec.OwnerName == nil {
		predictor.Spec.OwnerName = util.StrPtr("")
	}

	if predictor.Spec.Port == nil {
		predictor.Spec.Port = util.Int32Ptr(3000)
	}

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
		defaultAccess := IngressAccessType
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
