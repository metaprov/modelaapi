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

func (pr *ModelPipelineRun) Default() {
	pr.Status.Folder = "modeld/live/tenants/default-tenant/dataproducts/" + pr.Namespace +
		"/dataproductversions/" +
		*pr.Spec.VersionName +
		"/pipelines/" + *pr.Spec.PipelineName + "/pipelineruns/" + pr.Name
}

// validation
var _ webhook.Validator = &ModelPipelineRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *ModelPipelineRun) ValidateCreate() error {
	return run.validateBucket()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *ModelPipelineRun) ValidateUpdate(old runtime.Object) error {
	return run.validateBucket()
}

func (run *ModelPipelineRun) validateBucket() error {
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
		schema.GroupKind{Group: "infra.modeld.io", Kind: "ModelPipelineRun"},
		run.Name, allErrs)
}

func (run *ModelPipelineRun) validatePipelineRunSpec() *field.Error {
	// The field helpers from the kubernetes API machinery help us return nicely
	// structured validation errors.
	return nil
}

func (run *ModelPipelineRun) validatePipelineRunName() *field.Error {
	return nil
}

func (run *ModelPipelineRun) StatusString() string {
	return run.Status.Phase
}

//Set up the webhook with the manager.
func (pl *ModelPipelineRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(pl).
		Complete()
}
