/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/data"
	"github.com/metaprov/modeldapi/pkg/util"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (cloud *Cloud) HasFinalizer() bool {
	return util.HasFin(&cloud.ObjectMeta, data.GroupName)
}
func (cloud *Cloud) AddFinalizer()    { util.AddFin(&cloud.ObjectMeta, data.GroupName) }
func (cloud *Cloud) RemoveFinalizer() { util.RemoveFin(&cloud.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

func (cloud Cloud) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// defaulting
var _ webhook.Defaulter = &Cloud{}

func (cloud *Cloud) Default() {

}

// validation
var _ webhook.Validator = &Cloud{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (cloud *Cloud) ValidateCreate() error {
	_, e := cloud.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (cloud *Cloud) ValidateUpdate(old runtime.Object) error {
	_, e := cloud.Validate()
	return e.ToAggregate()
}

func (cloud *Cloud) ValidateDelete() error {
	return nil
}
