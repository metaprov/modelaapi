/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
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
		r.Spec.TenantRef = &v1.ObjectReference{Namespace: "modela-system", Name: "default-tenant"}
	}

	// set the default folder, if non was given
	if *r.Spec.DataLocation.Path == "" {
		r.Spec.DataLocation.Path = util.StrPtr("modela/live/tenants/" + r.Spec.TenantRef.Name + "/dataproducts/" + r.Name)
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

// validation
var _ webhook.Validator = &DataProduct{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (r *DataProduct) ValidateCreate() error {
	return r.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (r *DataProduct) ValidateUpdate(old runtime.Object) error {
	return r.validate()
}

func (r *DataProduct) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.io", Kind: "DataProduct"},
		r.Name, allErrs)
}

func (r *DataProduct) ValidateDelete() error {
	return nil
}

func (r *DataProduct) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(&DataProduct{}).
		Complete()
}
