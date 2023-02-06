/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	"github.com/pkg/errors"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
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
	var allErrs field.ErrorList
	allErrs = append(allErrs, servingsite.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "infra.modela.ai", Kind: "ServingSite"},
		servingsite.Name, allErrs)
}

func (servingsite ServingSite) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, servingsite.validateIngress(fldPath.Child("Ingress"))...)
	return allErrs
}

func (servingsite ServingSite) validateIngress(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	if servingsite.Spec.Ingress.ClusterIssuerName != nil && servingsite.Spec.Ingress.IssuerName != nil {
		err := errors.Errorf("Cluster-issuer and issuer resources cannot be both set on a Serving Site")
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			nil,
			err.Error()))
	}

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
