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

func (servingsite *ServingSite) Default() {
	if servingsite.Spec.TenantRef == nil {
		servingsite.Spec.TenantRef = &v1.ObjectReference{
			Namespace: "default-tenant",
			Name:      servingsite.Namespace,
		}
	}
	if servingsite.Spec.Description == nil {
		servingsite.Spec.Description = util.StrPtr("")
	}
	if servingsite.Spec.Ingress.FQDN == nil {
		servingsite.Spec.Ingress.FQDN = util.StrPtr(servingsite.Name + ".modela.ai")
	}
}

// validation
var _ webhook.Validator = &ServingSite{}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (servingsite ServingSite) ValidateCreate() error {
	return servingsite.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (servingsite ServingSite) ValidateUpdate(old runtime.Object) error {
	return servingsite.validate()
}

func (servingsite ServingSite) validate() error {
	return nil
}

func (servingsite ServingSite) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (servingsite ServingSite) ValidateDelete() error {
	return nil
}

func (servingsite *ServingSite) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(servingsite).
		Complete()
}
