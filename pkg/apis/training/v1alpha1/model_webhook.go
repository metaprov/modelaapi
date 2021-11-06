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
	if model.Spec.Training == nil {
		model.Spec.Training = &TrainingSpec{}
	}

	if model.Spec.Training.Priority == nil {
		p := catalog.PriorityLevelMedium
		model.Spec.Training.Priority = &p
	}

	if model.Spec.Objective == nil {
		o := model.DefaultObjective()
		model.Spec.Objective = &o
	}
	if model.Spec.Estimator == nil {
		model.Spec.Estimator = &ClassicalEstimatorSpec{}
	}
	if model.Spec.Preprocessing == nil {
		model.Spec.Preprocessing = &PreprocessingSpec{}
	}

	if model.Spec.Preprocessing.Text == nil {
		tfidf := catalog.TfIdf
		model.Spec.Preprocessing.Text = &TextPipelineSpec{
			Columns:   []string{},
			Encoder:   &tfidf,
			Tokenizer: util.StrPtr(""),
			StopWords: util.BoolPtr(false),
			Pos:       util.BoolPtr(false),
			Lemma:     util.BoolPtr(false),
			Stem:      util.BoolPtr(false),
			Embedding: nil,
		}
	}

	if model.Spec.Ensemble == nil {
		model.Spec.Ensemble = &EnsembleSpec{
			Base: make([]string, 0),
		}
	}

	if model.Spec.Tested == nil {
		model.Spec.Tested = util.BoolPtr(false)
	}
	if model.Spec.Aborted == nil {
		model.Spec.Aborted = util.BoolPtr(false)
	}

	if model.Spec.Packaged == nil {
		model.Spec.Packaged = util.BoolPtr(false)
	}

	if model.Spec.Published == nil {
		model.Spec.Published = util.BoolPtr(false)
	}

	if model.Spec.Pushed == nil {
		model.Spec.Pushed = util.BoolPtr(false)
	}

	if model.Spec.Reported == nil {
		model.Spec.Reported = util.BoolPtr(false)
	}

	if model.Spec.Paused == nil {
		model.Spec.Paused = util.BoolPtr(false)
	}

	if model.Spec.Profiled == nil {
		model.Spec.Profiled = util.BoolPtr(false)
	}

	if model.Spec.Archived == nil {
		model.Spec.Archived = util.BoolPtr(false)
	}

	if model.Spec.Forecasted == nil {
		model.Spec.Forecasted = util.BoolPtr(false)
	}

	// set labels
	// set study labeles
	if model.ObjectMeta.Labels == nil {
		model.ObjectMeta.Labels = make(map[string]string)
		if model.Spec.ModelVersion != nil {
			model.ObjectMeta.Labels["version"] = *model.Spec.ModelVersion
		}
		if model.Spec.StudyName != nil {
			model.ObjectMeta.Labels["study"] = *model.Spec.StudyName
		}
		if model.Spec.Estimator != nil {
			model.ObjectMeta.Labels["alg"] = model.Spec.Estimator.AlgorithmName
		}
		if model.Spec.Owner != nil {
			model.ObjectMeta.Labels["owner"] = *model.Spec.Owner
		}
		if model.Spec.DatasetName != nil {
			model.ObjectMeta.Labels["dataset"] = *model.Spec.DatasetName
		}
	}
	// update the status. this might be moved to the crd itself.
	if model.Status.Importance == nil {
		model.Status.Importance = make([]FeatureImportance, 0)
	}

}

// validation
var _ webhook.Validator = &Model{}

//Set up the webhook with the manager.
func (r *Model) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (in *Model) ValidateDelete() error {
	return in.validateDelete()
}

//==============================================================================
// Validate
//==============================================================================

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (model *Model) ValidateCreate() error {
	return model.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (model *Model) ValidateUpdate(old runtime.Object) error {
	return model.validate()
}

func (notifier *Model) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, notifier.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, notifier.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modela.ai", Kind: "dModel"},
		notifier.Name, allErrs)
}

func (dataset *Model) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, dataset.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (dataset *Model) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(dataset.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), dataset.Name, err.Error()))
	}
	return allErrs
}

func (dataset *Model) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (model *Model) validateDelete() error {
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
