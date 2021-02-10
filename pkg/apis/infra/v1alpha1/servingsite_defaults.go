/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &ServingSite{}

func (r *ServingSite) Default() {
	if r.Spec.IngressName == nil {
		r.Spec.IngressName = util.StrPtr(r.Name)
	}
	if r.Spec.TenantRef == nil {
		r.Spec.TenantRef = &v1.ObjectReference{
			Namespace: "default-tenant",
			Name:      r.Namespace,
		}
	}
	if r.Spec.Description == nil {
		r.Spec.Description = util.StrPtr("")
	}
	if r.Spec.FDQN == nil {
		r.Spec.FDQN = util.StrPtr(r.Name + ".modeld.io")
	}
}
