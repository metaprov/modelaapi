/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &ServingSite{}

func (r *ServingSite) Default() {
	if r.Spec.Ingress.IngressName == nil {
		r.Spec.Ingress.IngressName = util.StrPtr(r.Name)
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
	if r.Spec.FQDN == nil {
		r.Spec.FQDN = util.StrPtr(r.Name + ".modela.ai")
	}
}

// validation
var _ webhook.Validator = &ServingSite{}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (r *ServingSite) ValidateCreate() error {
	return r.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (r *ServingSite) ValidateUpdate(old runtime.Object) error {
	return r.validate()
}

func (r *ServingSite) validate() error {
	return nil

}

func (r *ServingSite) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (r *ServingSite) ValidateDelete() error {
	return nil
}

func (r *ServingSite) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}
