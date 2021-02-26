/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/util"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (pl *ModelPipeline) Default() {
	pl.Spec.Folder = util.StrPtr("modeld/live/tenants/default-tenant/dataproducts/" + pl.Namespace +
		"/dataproductversions/" +
		*pl.Spec.VersionName +
		"/pipelines/" + pl.Name)
}

// validation
var _ webhook.Validator = &ModelPipeline{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (pl *ModelPipeline) ValidateCreate() error {
	return pl.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (pl *ModelPipeline) ValidateUpdate(old runtime.Object) error {
	return pl.validate()
}

func (pl *ModelPipeline) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modeld.io", Kind: "ModelPipeline"},
		pl.Name, allErrs)
}

func (pl *ModelPipeline) ValidateDelete() error {
	return nil
}
