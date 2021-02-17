/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &DataPipelineRun{}

func (run *DataPipelineRun) Default() {
	if run.Spec.DataLocation.Path == "" {
		run.Spec.DataLocation.Path = "modeld/live/tenants/default-tenant/dataproducts/" + run.Namespace +
			"/dataproductversions/" +
			*run.Spec.VersionName +
			"/wranglers/" + *run.Spec.DataPipelineName + "/wranglings/" + run.Name
	}

}
