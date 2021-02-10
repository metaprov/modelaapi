/*
 * Copyright (c) 2020.
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

// validation
var _ webhook.Validator = &NotebookRun{}

//Set up the webhook with the manager.
func (run *NotebookRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(run).
		Complete()
}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *NotebookRun) ValidateCreate() error {
	return run.validate()
}

func (run *NotebookRun) ValidateDelete() error {
	return run.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *NotebookRun) ValidateUpdate(old runtime.Object) error {
	return run.validate()
}

func (run *NotebookRun) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modeld.io", Kind: "NotebookRun"},
		run.Name, allErrs)
}

func (run *NotebookRun) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}
