/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Connection{}

// No defaults for the current configuration
func (connection *Connection) Default() {
	if connection.Spec.TenantRef == nil {
		connection.Spec.TenantRef = &corev1.ObjectReference{
			Namespace: "modela-system",
			Name:      "modela",
		}
	}
	if connection.Spec.Category == nil {
		general := catalog.GeneralConnectionCategory
		connection.Spec.Category = &general
	}

}

// validation
var _ webhook.Validator = &Connection{}

func (connection *Connection) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(connection).
		Complete()
}

func (connection Connection) ValidateCreate() error {
	return connection.validate()
}

func (connection Connection) ValidateUpdate(old runtime.Object) error {
	return connection.validate()
}

func (connection Connection) ValidateDelete() error {
	return nil
}

func (connection Connection) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "infra.modela.ai", Kind: "StorageConnection"},
		connection.Name, allErrs)
}

func (connection *Connection) validateConnectionSpec() field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}
