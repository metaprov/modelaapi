/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

//==============================================================================
// Validate
//==============================================================================

func (framework *MLFramework) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// defaulting
var _ webhook.Defaulter = &MLFramework{}

func (framework *MLFramework) Default() {

}

// validation
var _ webhook.Validator = &MLFramework{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (framework *MLFramework) ValidateCreate() error {
	_, e := framework.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (framework *MLFramework) ValidateUpdate(old runtime.Object) error {
	_, e := framework.Validate()
	return e.ToAggregate()
}

func (framework *MLFramework) ValidateDelete() error {
	return nil
}
