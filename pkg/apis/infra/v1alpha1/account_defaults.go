/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
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
