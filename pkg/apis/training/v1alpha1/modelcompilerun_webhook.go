/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (pr *ModelCompilerRun) Default() {
	pr.Status.Folder = "modeld/live/tenants/default-tenant/dataproducts/" + pr.Namespace +
		"/dataproductversions/" +
		*pr.Spec.VersionName +
		"/modelcompilerruns/" + *pr.Spec.ModelName + "/modelcompilerruns/" + pr.Name
}

// validation
var _ webhook.Validator = &ModelCompilerRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *ModelCompilerRun) ValidateCreate() error {
	return run.validateBucket()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *ModelCompilerRun) ValidateUpdate(old runtime.Object) error {
	return run.validateBucket()
}

func (run *ModelCompilerRun) validateBucket() error {
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
		schema.GroupKind{Group: "training.modeld.io", Kind: "ModelCompilerRun"},
		run.Name, allErrs)
}

func (run *ModelCompilerRun) validatePipelineRunSpec() *field.Error {
	// The field helpers from the kubernetes API machinery help us return nicely
	// structured validation errors.
	return nil
}

func (run *ModelCompilerRun) validatePipelineRunName() *field.Error {
	return nil
}

func (run *ModelCompilerRun) StatusString() string {
	return string(run.Status.Phase)
}

//Set up the webhook with the manager.
func (pl *ModelCompilerRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(pl).
		Complete()
}

func (pl *ModelCompilerRun) ValidateDelete() error {
	return nil
}
