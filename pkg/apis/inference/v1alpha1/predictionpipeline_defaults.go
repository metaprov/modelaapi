package v1alpha1

import (
	data "github.com/metaprov/modeld-api/pkg/apis/data/v1alpha1"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &PredictionPipeline{}

func (pre *PredictionPipeline) Default() {
	// if no input bucket defined,
	if pre.Spec.Output == nil {
		pre.Spec.Output = &data.DataLocation{}
	}
	if pre.Spec.Output.BucketName == "" {
		pre.Spec.Output.BucketName = pre.Spec.Input.BucketName
	}
	if pre.Spec.Output.Path == "" { // place the output at the same location as the input
		pre.Spec.Output.Path = pre.Spec.Input.Path + ".out.json"
	}
}
