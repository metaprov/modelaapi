/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Account{}

func (account *Account) Default() {
	ut := User
	if account.Spec.Type == nil {
		account.Spec.Type = &ut
	}
	if account.Spec.TenantRef == nil {
		account.Spec.TenantRef = &v1.ObjectReference{}
		account.Spec.TenantRef.Name = account.Namespace
		account.Spec.TenantRef.Namespace = "modela-system"
	}

}

// validation
var _ webhook.Validator = &Account{}

func (account Account) ValidateCreate() error {
	return account.validate()
}

func (account Account) ValidateUpdate(old runtime.Object) error {
	return account.validate()
}

func (account Account) validate() error {
	return nil
}

func (account Account) ValidateDelete() error {
	return nil
}
