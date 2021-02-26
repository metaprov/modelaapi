/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

func (pr *ModelPipelineRun) Default() {
	pr.Status.Folder = "modeld/live/tenants/default-tenant/dataproducts/" + pr.Namespace +
		"/dataproductversions/" +
		*pr.Spec.VersionName +
		"/pipelines/" + *pr.Spec.PipelineName + "/pipelineruns/" + pr.Name
}
