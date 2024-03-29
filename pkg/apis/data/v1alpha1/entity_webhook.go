/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"

	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

//==============================================================================
// EntityRef
//==============================================================================

// validation
var _ webhook.Validator = &Entity{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (entity Entity) ValidateCreate() error {
	return entity.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (entity Entity) ValidateUpdate(old runtime.Object) error {
	return entity.validate()
}

func (entity Entity) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.ai", Kind: "Entity"},
		entity.Name, allErrs)
}

func (entity Entity) ValidateDelete() error {
	return nil
}

// defaulting
var _ webhook.Defaulter = &Entity{}

// No defaults in this current release
func (entity *Entity) Default() {
	if entity.Spec.Description == nil {
		entity.Spec.Description = util.StrPtr("")
	}
	if entity.Spec.TenantRef == nil {
		entity.Spec.TenantRef = &v1.ObjectReference{}
	}
	entity.Spec.TenantRef.Namespace = "modela-system"
	entity.Spec.TenantRef.Name = entity.Namespace

}
