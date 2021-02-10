/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import "github.com/metaprov/modeldapi/pkg/util"

func (pl *ModelPipeline) Default() {
	pl.Spec.Folder = util.StrPtr("modeld/live/tenants/default-tenant/dataproducts/" + pl.Namespace +
		"/dataproductversions/" +
		pl.Spec.VersionName +
		"/pipelines/" + pl.Name)
}
