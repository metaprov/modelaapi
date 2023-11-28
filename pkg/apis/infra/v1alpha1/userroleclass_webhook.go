/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	apierrors "k8s.io/apimachinery/pkg/api/errors"

	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Validator = &UserRoleClass{}

func (class *UserRoleClass) Default() {}

var _ webhook.Defaulter = &UserRoleClass{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (class UserRoleClass) ValidateCreate() error {
	return class.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (class UserRoleClass) ValidateUpdate(old runtime.Object) error {
	return class.validate()
}

func (class UserRoleClass) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "infra.modela.ai", Kind: "UserRoleClass"},
		class.Name, allErrs)
}

func (class UserRoleClass) ValidateDelete() error {
	return nil
}
