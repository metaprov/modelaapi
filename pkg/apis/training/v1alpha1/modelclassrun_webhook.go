/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (run *ModelClassRun) Default() {
	run.Status.Folder = "modela/live/tenants/default-tenant/dataproducts/" + run.Namespace +
		"/dataproductversions/" +
		*run.Spec.VersionName +
		"/modelclasses/" + *run.Spec.ModelClassName + "/modelclassruns/" + run.Name

	if run.ObjectMeta.Labels == nil {
		run.ObjectMeta.Labels = make(map[string]string)
	}
	if run.Spec.VersionName != nil {
		run.ObjectMeta.Labels[catalog.DataProductVersionLabelKey] = *run.Spec.VersionName
	}

}

// validation
var _ webhook.Validator = &ModelClassRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *ModelClassRun) ValidateCreate() error {
	return run.validateBucket()
}

func (run *ModelClassRun) ValidateDelete() error {
	return nil
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *ModelClassRun) ValidateUpdate(old runtime.Object) error {
	return run.validateBucket()
}

func (run *ModelClassRun) validateBucket() error {
	var allErrs field.ErrorList
	if err := run.validatePipelineRunName(); err != nil {
		allErrs = append(allErrs, err)
	}
	if err := run.validatePipelineRunSpec(); err != nil {
		allErrs = append(allErrs, err)
	}
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modela.ai", Kind: "ModelClassRun"},
		run.Name, allErrs)
}

func (run *ModelClassRun) validatePipelineRunSpec() *field.Error {
	// The field helpers from the kubernetes API machinery help us return nicely
	// structured validation errors.
	return nil
}

func (run *ModelClassRun) validatePipelineRunName() *field.Error {
	return nil
}

func (run *ModelClassRun) StatusString() string {
	return string(run.Status.Phase)
}

// Set up the webhook with the manager.
func (pl *ModelClassRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(pl).
		Complete()
}
