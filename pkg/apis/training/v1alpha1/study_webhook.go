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
	"github.com/pkg/errors"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (study *Study) DefaultObjective(task catalog.MLTask) catalog.Metric {
	if task == catalog.BinaryClassification {
		return catalog.RocAuc
	}
	if task == catalog.MultiClassification {
		return catalog.F1Macro
	}
	if task == catalog.Regression {
		return catalog.RMSE
	}
	if task == catalog.Forecasting || task == catalog.PartitionForecast {
		return catalog.MAPE
	}
	return catalog.Accuracy
}

func (study *Study) DefaultBaselineEstimator(task catalog.MLTask) catalog.ClassicEstimatorName {
	if task == catalog.BinaryClassification {
		return catalog.RandomForestClassifier
	}
	if task == catalog.MultiClassification {
		return catalog.RandomForestClassifier
	}
	if task == catalog.Regression {
		return catalog.RandomForestRegressor
	}
	if task == catalog.Forecasting || task == catalog.PartitionForecast {
		return catalog.AutoARIMA
	}
	return catalog.UnknownEstimatorName
}

var _ webhook.Defaulter = &Study{}

func (study *Study) Default() {
	study.Spec.Search.Default(study.Spec.DeepCopy().Task)

	if study.Spec.Ensembles.VotingEnsemble == nil {
		study.Spec.Ensembles.VotingEnsemble = util.BoolPtr(false)
	}

	if study.Spec.Ensembles.StackingEnsemble == nil {
		study.Spec.Ensembles.StackingEnsemble = util.BoolPtr(true)
	}

	if study.Spec.Baseline.Enabled != nil && *study.Spec.Baseline.Enabled {
		if len(study.Spec.Baseline.Algorithms) == 0 {
			study.Spec.Baseline.Algorithms = append(study.Spec.Baseline.Algorithms, study.DefaultBaselineEstimator(study.Spec.Task))
		}
	}

	if study.Spec.Split.Method == nil || *study.Spec.Split.Method == catalog.DataSplitAuto {
		study.SelectSplitMethod()
	}

	study.Spec.Ensembles.StackingEnsemble = util.BoolPtr(true)

	if study.Spec.Report == nil {
		study.Spec.Report = util.BoolPtr(true)
	}

	if study.Spec.Profile == nil {
		study.Spec.Profile = util.BoolPtr(true)
	}

	// if we search preprocessor, but we do not have an estimator
	study.Status.Conditions = make([]metav1.Condition, 0)

	if study.ObjectMeta.Labels == nil {
		study.ObjectMeta.Labels = make(map[string]string)
	}

	study.ObjectMeta.Labels[catalog.DatasetLabelKey] = study.Spec.Snapshot.Dataset
	if study.Spec.LabName != nil {
		study.ObjectMeta.Labels[catalog.LabLabelKey] = *study.Spec.LabName
	}

	if study.Spec.ModelClassName != nil {
		study.ObjectMeta.Labels[catalog.ModelClassLabelKey] = *study.Spec.ModelClassName
	}
}

// validation
var _ webhook.Validator = &Study{}

func (study *Study) ValidateDelete() error {
	return nil
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (study *Study) ValidateCreate() error {
	return study.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (study *Study) ValidateUpdate(old runtime.Object) error {
	return study.validate()
}

func (study *Study) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, study.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modela.ai", Kind: "Study"},
		study.Name, allErrs)
}

func (study *Study) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (study *Study) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(study.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("Name"), study.Name, err.Error()))
	}
	return allErrs
}

func (study *Study) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateTask(fldPath.Child("Task"))...)
	return allErrs
}

// Validate task checks that the
func (study *Study) validateTask(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	// Task must be defined.
	if study.Spec.Task == "" {
		err := errors.Errorf("task must be defined")
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
		return allErrs
	}

	if study.Spec.Task == catalog.Regression && !study.Spec.Search.Objective.Metric.IsRegression() {
		err := errors.Errorf("objective %v is not a regression metric", study.Spec.Search.Objective.Metric)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if study.Spec.Task == catalog.BinaryClassification && !study.Spec.Search.Objective.Metric.IsClassification() {
		err := errors.Errorf("objective %v is not a binary classification metric", study.Spec.Search.Objective.Metric)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if study.Spec.Task == catalog.MultiClassification && !study.Spec.Search.Objective.Metric.IsMultiClass() {
		err := errors.Errorf("objective %v is not a multi classification metric", study.Spec.Search.Objective.Metric)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if study.Spec.Task == catalog.Clustering && !study.Spec.Search.Objective.Metric.IsClustering() {
		err := errors.Errorf("objective %v is not a clustering metric", study.Spec.Search.Objective.Metric)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}

	if (study.Spec.Task == catalog.Forecasting || study.Spec.Task == catalog.PartitionForecast) && !study.Spec.Search.Objective.Metric.IsForecast() {
		err := errors.Errorf("objective %v is not a forecasting metric", study.Spec.Search.Objective.Metric)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}

	return allErrs
}
