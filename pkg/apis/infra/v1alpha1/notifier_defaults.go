/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

const (
	secureEmailPort = 587
)

// validation
var _ webhook.Defaulter = &Notifier{}

func (notifier *Notifier) Default() {

}
