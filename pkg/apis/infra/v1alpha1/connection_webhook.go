/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/pkg/errors"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Validator = &Connection{}

func (connection *Connection) SetupWebhookWithManager(_ ctrl.Manager) error {
	return errors.New("Connection must implement a custom webhook")
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
		schema.GroupKind{Group: "infra.modela.ai", Kind: "Connection"},
		connection.Name, allErrs)
}

func (connection *Connection) validateConnectionSpec() field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}
