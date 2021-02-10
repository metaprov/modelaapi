/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeld-api/pkg/util"
	v1 "k8s.io/api/core/v1"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &DataProduct{}

// No defaults in this current release
func (r *DataProduct) Default() {
	if r.Spec.Owner == nil {
		r.Spec.Owner = util.StrPtr("")
	}

	if r.Spec.TenantRef == nil {
		r.Spec.TenantRef = &v1.ObjectReference{Namespace: "modeld-system", Name: "default-tenant"}
	}

	// set the default folder, if non was given
	if r.Spec.DataLocation.Path == "" {
		r.Spec.DataLocation.Path = "modeld/live/tenants/" + r.Spec.TenantRef.Name + "/dataproducts/" + r.Name
	}

	r.Status.Conditions = make([]DataProductCondition, 0)
	if r.Spec.GitLocation == nil {
		r.Spec.GitLocation = &GitLocation{}
	}
	if r.Spec.ImageLocation.Name == nil {
		r.Spec.ImageLocation.Name = util.StrPtr(r.Name)
		r.Spec.ImageLocation.RegistryConnectionName = util.StrPtr("")
	}
}
