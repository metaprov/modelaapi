/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/util"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (model *Model) Default() {

	if model.Spec.Owner == nil {
		model.Spec.Owner = util.StrPtr("")
	}
	// Objective

	if model.Spec.Training.Priority == nil {
		p := catalog.PriorityLevelMedium
		model.Spec.Training.Priority = &p
	}

	if model.Spec.Objective.Metric == "" {
		model.Spec.Objective = model.DefaultObjective()
	}

	if model.ObjectMeta.Labels == nil {
		model.ObjectMeta.Labels = make(map[string]string)
	}

	if model.Spec.ModelVersion != nil {
		model.ObjectMeta.Labels["modela.ai/modelversion"] = *model.Spec.ModelVersion
	}

	model.ObjectMeta.Labels[catalog.StudyLabelKey] = model.Spec.StudyName
	model.ObjectMeta.Labels[catalog.AlgorithmLabelKey] = model.Spec.Estimator.AlgorithmName

	if model.Spec.Owner != nil {
		model.ObjectMeta.Labels[catalog.OwnerKindLabelKey] = *model.Spec.Owner
	}

	if model.Spec.DatasetName != nil {
		model.ObjectMeta.Labels[catalog.DatasetLabelKey] = *model.Spec.DatasetName
	}

	if model.Spec.ModelClassName != nil {
		model.ObjectMeta.Labels[catalog.ModelClassLabelKey] = *model.Spec.ModelClassName
	}

	if model.Spec.ModelClassRunName != nil {
		model.ObjectMeta.Labels[catalog.ModelClassRunLabelKey] = *model.Spec.ModelClassRunName
	}

	// update the status. this might be moved to the crd itself.
	if model.Status.ImpurityImportance == nil {
		model.Status.ImpurityImportance = make([]FeatureImportance, 0)
	}

	if model.Status.PermutationImportance == nil {
		model.Status.PermutationImportance = make([]FeatureImportance, 0)
	}

}

// validation
var _ webhook.Validator = &Model{}

// Set up the webhook with the manager.
func (model *Model) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(model).
		Complete()
}

func (model Model) ValidateDelete() error {
	return model.validateDelete()
}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (model Model) ValidateCreate() error {
	return model.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (model Model) ValidateUpdate(old runtime.Object) error {
	return model.validate()
}

func (model Model) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, model.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, model.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modela.ai", Kind: "Model"},
		model.Name, allErrs)
}

func (model Model) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, model.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (model Model) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(model.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), model.Name, err.Error()))
	}
	return allErrs
}

func (model Model) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (model Model) validateDelete() error {
	var allErrors field.ErrorList

	path := field.NewPath("")

	if model.IsLive() {
		err := field.Invalid(path.Child("rpc"), model, "can't delete serving model")
		allErrors = append(allErrors, err)
	}

	if len(allErrors) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{}, model.Name, allErrors)
}
