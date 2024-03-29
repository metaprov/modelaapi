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
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &DataProduct{}

// No defaults in this current release
func (product *DataProduct) Default() {
	if product.Spec.Owner == nil {
		product.Spec.Owner = util.StrPtr("")
	}

	// TODO(liam): remove
	if product.Spec.TenantRef == nil {
		product.Spec.TenantRef = &v1.ObjectReference{Namespace: "modela-system", Name: "modela"}
	}

	product.Status.Conditions = make([]metav1.Condition, 0)
}

// validation
var _ webhook.Validator = &DataProduct{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (product DataProduct) ValidateCreate() error {
	return product.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (product DataProduct) ValidateUpdate(old runtime.Object) error {
	return product.validate()
}

func (product DataProduct) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.ai", Kind: "DataProduct"},
		product.Name, allErrs)
}

func (product DataProduct) ValidateDelete() error {
	return nil
}

func (product *DataProduct) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(&DataProduct{}).
		Complete()
}
