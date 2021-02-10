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

// validation
var _ webhook.Validator = &VirtualBucket{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (bucket *VirtualBucket) ValidateCreate() error {
	return bucket.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (bucket *VirtualBucket) ValidateUpdate(old runtime.Object) error {
	return bucket.validate()
}

func (bucket *VirtualBucket) validate() error {
	return nil
}

func (bucket *VirtualBucket) ValidateDelete() error {
	return nil
}
