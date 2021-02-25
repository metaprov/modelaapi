/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
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

}

// validation
var _ webhook.Validator = &Account{}

func (account *Account) ValidateCreate() error {
	return account.validate()
}

func (account *Account) ValidateUpdate(old runtime.Object) error {
	return account.validate()
}

func (account *Account) validate() error {
	return nil
}

func (account *Account) ValidateDelete() error {
	return nil
}
