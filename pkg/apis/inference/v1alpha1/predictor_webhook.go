package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
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

	if predictor.Spec.Access.Path == nil {
		predictor.Spec.Access.Path = util.StrPtr("/predict")
	}

	if predictor.Spec.Access.AccessType == nil {
		defaultAccess := catalog.IngressAccessType
		predictor.Spec.Access.AccessType = &defaultAccess
	}

	if predictor.Spec.Progressive == nil {
		predictor.Spec.Progressive = &ProgressiveSpec{
			Warmup:           util.Int32Ptr(15),
			TrafficIncrement: util.Int32Ptr(10),
			CanaryMetrics:    nil,
		}
	}

	if predictor.ObjectMeta.Labels == nil {
		predictor.ObjectMeta.Labels = make(map[string]string)
	}
	predictor.ObjectMeta.Labels[catalog.TenantLabelKey] = predictor.Spec.ServingSiteRef.Namespace
	predictor.ObjectMeta.Labels[catalog.ServingSiteLabelKey] = predictor.Spec.ServingSiteRef.Name

	// set the default threshold if non exist.
	if len(predictor.Spec.Drift.DriftThresholds) == 0 {
		predictor.Spec.Drift.DriftThresholds = []data.DriftThreshold{
			{
				Metric: catalog.PSI,
				Value:  0.3,
			},
			{
				Metric: catalog.WassersteinDistanceTest,
				Value:  0.3,
			},
			{
				Metric: catalog.KLDivergence,
				Value:  0.3,
			},
			{
				Metric: catalog.JSDistance,
				Value:  0.3,
			},
			{
				Metric: catalog.KSTest,
				Value:  0.3,
			},
			{
				Metric: catalog.ChiSqrTest,
				Value:  0.3,
			},
			{
				Metric: catalog.ProportionDifferenceTest,
				Value:  0.3,
			},
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
