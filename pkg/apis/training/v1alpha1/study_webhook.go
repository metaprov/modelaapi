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

func (study Study) DefaultObjective(task catalog.MLTask) catalog.Metric {
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

func (study Study) DefaultFESearchEstimator(task catalog.MLTask) catalog.ClassicEstimatorName {
	if task == catalog.BinaryClassification {
		return catalog.DecisionTreeClassifier
	}
	if task == catalog.MultiClassification {
		return catalog.DecisionTreeClassifier
	}
	if task == catalog.Regression {
		return catalog.DecisionTreeRegressor
	}
	if task == catalog.Forecasting || task == catalog.PartitionForecast {
		return catalog.AutoARIMA
	}
	return catalog.UnknownEstimatorName
}

func (study Study) DefaultBaselineEstimator(task catalog.MLTask) catalog.ClassicEstimatorName {
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

	if study.Spec.FESearch.Estimator == nil || string(*study.Spec.FESearch.Estimator) == "" {
		estimator := study.DefaultFESearchEstimator(*study.Spec.Task)
		study.Spec.FESearch.Estimator = &estimator
	}

	study.Spec.Search.Default(study.Spec.DeepCopy().Task)

	if study.Spec.Ensembles.VotingEnsemble == nil {
		study.Spec.Ensembles.VotingEnsemble = util.BoolPtr(false)
	}

	if study.Spec.Ensembles.StackingEnsemble == nil {
		study.Spec.Ensembles.StackingEnsemble = util.BoolPtr(true)
	}

	if study.Spec.Baseline.Enabled != nil && *study.Spec.Baseline.Enabled {
		if len(study.Spec.Baseline.Baselines) == 0 {
			study.Spec.Baseline.Baselines = append(study.Spec.Baseline.Baselines, study.DefaultBaselineEstimator(*study.Spec.Task))
		}
	}

	if study.Spec.TrainingTemplate.Split.Method == nil || *study.Spec.TrainingTemplate.Split.Method == catalog.DataSplitAuto {
		study.SelectSplitMethod()
	}

	study.Spec.Ensembles.StackingEnsemble = util.BoolPtr(true)

	if study.Spec.Schedule.StartAt == nil {
		now := metav1.Now()
		study.Spec.Schedule.StartAt = &now
	}

	if study.Spec.Aborted == nil {
		study.Spec.Aborted = util.BoolPtr(false)
	}

	if study.Spec.Reported == nil {
		study.Spec.Reported = util.BoolPtr(true)
	}

	if study.Spec.Profiled == nil {
		study.Spec.Profiled = util.BoolPtr(true)
	}

	if study.Spec.ModelPublished == nil {
		study.Spec.ModelPublished = util.BoolPtr(false)
	}

	// if we search preprocessor, but we do not have an estimator
	study.Status.Conditions = make([]StudyCondition, 0)

	if study.ObjectMeta.Labels == nil {
		study.ObjectMeta.Labels = make(map[string]string)
	}
	if study.Spec.Owner != nil {
		study.ObjectMeta.Labels["modela.ai/owner"] = *study.Spec.Owner
	}
	if study.Spec.DatasetName != nil {
		study.ObjectMeta.Labels["modela.ai/dataset"] = *study.Spec.DatasetName
	}
	study.ObjectMeta.Labels[catalog.TenantLabelKey] = study.Spec.LabRef.Namespace
	study.ObjectMeta.Labels[catalog.LabLabelKey] = study.Spec.LabRef.Name
	study.ObjectMeta.Labels[catalog.DataProductLabelKey] = *study.Spec.VersionName

}

// validation
var _ webhook.Validator = &Study{}

func (study Study) ValidateDelete() error {
	return nil
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (study Study) ValidateCreate() error {
	return study.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (study Study) ValidateUpdate(old runtime.Object) error {
	return study.validate()
}

func (study Study) validate() error {
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

func (study Study) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (study Study) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(study.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("Name"), study.Name, err.Error()))
	}
	return allErrs
}

func (study Study) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, study.validateTask(fldPath.Child("Task"))...)
	allErrs = append(allErrs, study.validateDataset(fldPath.Child("Entity"))...)
	return allErrs
}

// Validate task checks that the
func (study Study) validateDataset(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	// Task must be defined.
	if study.Spec.DatasetName == nil {
		err := errors.Errorf("dataset name must be defined")
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
		return allErrs
	}
	return allErrs
}

// Validate task checks that the
func (study Study) validateTask(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	// Task must be defined.
	if study.Spec.Task == nil {
		err := errors.Errorf("task must be defined")
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
		return allErrs
	}

	if *study.Spec.Task == catalog.Regression && !study.Spec.Search.Objective.IsRegression() {
		err := errors.Errorf("objective %v is not a regression metric", *study.Spec.Search.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.BinaryClassification && !study.Spec.Search.Objective.IsClassification() {
		err := errors.Errorf("objective %v is not a binary classification metric", *study.Spec.Search.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.MultiClassification && !study.Spec.Search.Objective.IsMultiClass() {
		err := errors.Errorf("objective %v is not a multi classification metric", *study.Spec.Search.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.Clustering && !study.Spec.Search.Objective.IsClustering() {
		err := errors.Errorf("objective %v is not a clustering metric", *study.Spec.Search.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}

	if *study.Spec.Task == catalog.Forecasting || *study.Spec.Task == catalog.PartitionForecast && !study.Spec.Search.Objective.IsForecast() {
		err := errors.Errorf("objective %v is not a forecasting metric", *study.Spec.Search.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}

	return allErrs
}
