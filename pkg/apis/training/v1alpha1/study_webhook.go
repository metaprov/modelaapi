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

func DefaultObjective(task catalog.MLTask) catalog.Metric {
	if task == catalog.BinaryClassification {
		return catalog.RocAuc
	}
	if task == catalog.MultiClassification {
		return catalog.F1Macro
	}
	if task == catalog.Regression {
		return catalog.RMSE
	}
	if task == catalog.Forecasting {
		return catalog.MAPE
	}
	return catalog.Accuracy
}

func (study *Study) DefaultFESearchEstimator(task catalog.MLTask) catalog.ClassicEstimatorName {
	if task == catalog.BinaryClassification {
		return catalog.DecisionTreeClassifier
	}
	if task == catalog.MultiClassification {
		return catalog.DecisionTreeClassifier
	}
	if task == catalog.Regression {
		return catalog.DecisionTreeRegressor
	}
	if task == catalog.Forecasting {
		return catalog.AutoARIMA
	}
	return catalog.UnknownEstimatorName
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
	if task == catalog.Forecasting {
		return catalog.AutoARIMA
	}
	return catalog.UnknownEstimatorName
}

var _ webhook.Defaulter = &Study{}

func (study *Study) Default() {

	if study.Spec.FeatureEngineeringSearch.Estimator == nil || string(*study.Spec.FeatureEngineeringSearch.Estimator) == "" {
		estimator := study.DefaultFESearchEstimator(*study.Spec.Task)
		study.Spec.FeatureEngineeringSearch.Estimator = &estimator
	}
	// set default

	if study.Spec.TrainingTemplate.CheckpointInterval == nil {
		study.Spec.TrainingTemplate.CheckpointInterval = util.Int32Ptr(0)
	}

	study.Spec.Search.Default(study.Spec.DeepCopy().Task)

	if study.Spec.Ensembles.VotingEnsemble == nil {
		study.Spec.Ensembles.VotingEnsemble = util.BoolPtr(false)
	}

	if study.Spec.Ensembles.StackingEnsemble == nil {
		study.Spec.Ensembles.StackingEnsemble = util.BoolPtr(true)
	}

	if *study.Spec.Baseline.Enabled {
		if len(study.Spec.Baseline.Baselines) == 0 {
			study.Spec.Baseline.Baselines = append(study.Spec.Baseline.Baselines, study.DefaultBaselineEstimator(*study.Spec.Task))
		}
	}

	study.Spec.Ensembles.StackingEnsemble = util.BoolPtr(true)

	if study.Spec.Schedule.StartAt == nil {
		now := metav1.Now()
		study.Spec.Schedule.StartAt = &now
	}

	if study.Spec.Search.Pruner.SHOptions.MaxBudget == nil {
		study.Spec.Search.Pruner.SHOptions.MaxBudget = util.Int32Ptr(81)
	}

	if study.Spec.Search.Pruner.SHOptions.EliminationRate == nil {
		study.Spec.Search.Pruner.SHOptions.EliminationRate = util.Int32Ptr(3)
	}

	if study.Spec.Aborted == nil {
		study.Spec.Aborted = util.BoolPtr(false)
	}

	if study.Spec.Reported == nil {
		study.Spec.Reported = util.BoolPtr(true)
	}

	//if study.Spec.Paused == nil {
	//	study.Spec.Paused = util.BoolPtr(false)
	//}

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
		if study.Spec.Owner != nil {
			study.ObjectMeta.Labels["owner"] = *study.Spec.Owner
		}
		if study.Spec.DatasetName != nil {
			study.ObjectMeta.Labels["dataset"] = *study.Spec.DatasetName
		}
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
	allErrs = append(allErrs, study.validateDataset(fldPath.Child("Dataset"))...)
	return allErrs
}

// Validate task checks that the
func (study *Study) validateDataset(fldPath *field.Path) field.ErrorList {
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
func (study *Study) validateTask(fldPath *field.Path) field.ErrorList {
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

	if *study.Spec.Task == catalog.Forecasting && !study.Spec.Search.Objective.IsForecast() {
		err := errors.Errorf("objective %v is not a forecasting metric", *study.Spec.Search.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}

	return allErrs
}

//==============================================================================
// Defaults
//==============================================================================

func (svo *SuccessiveHalvingOptions) Default() {
	svo.MaxBudget = util.Int32Ptr(8)
	svo.EliminationRate = util.Int32Ptr(3)
}

func (ms *SearchSpec) Default(task *catalog.MLTask) {
	name := RandomSearch
	if ms.Sampler == nil {
		ms.Sampler = &name
	}
	ms.Pruner = PrunerSpec{}
	ms.Pruner.Default()
	if ms.MaxCost == nil {
		ms.MaxCost = util.Int32Ptr(100)
	}
	if ms.MaxTime == nil {
		ms.MaxTime = util.Int32Ptr(30)
	}
	if ms.MaxModels == nil {
		ms.MaxModels = util.Int32Ptr(10)
	}
	if ms.MinScore == nil {
		ms.MinScore = util.Float64Ptr(0)
	}
	if ms.Trainers == nil {
		ms.Trainers = util.Int32Ptr(1)
	}
	if ms.Test == nil {
		ms.Test = util.Int32Ptr(1)
	}
	if ms.RetainTop == nil {
		ms.RetainTop = util.Int32Ptr(10)
	}
	if ms.RetainFor == nil {
		ms.RetainFor = util.Int32Ptr(60)
	}

	if ms.Objective == nil {
		o := DefaultObjective(*task)
		ms.Objective = &o
	}

}

func (pspec *PrunerSpec) Default() {
	name := MedianPruner
	if pspec.Type == nil {
		pspec.Type = &name
	}
	if pspec.StartupTrials == nil {
		pspec.StartupTrials = util.Int32Ptr(5)
	}
	if pspec.WarmupTrials == nil {
		pspec.WarmupTrials = util.Int32Ptr(0)
	}
	if pspec.MinimumTrials == nil {
		pspec.MinimumTrials = util.Int32Ptr(1)
	}
	if pspec.IntervalSteps == nil {
		pspec.IntervalSteps = util.Int32Ptr(1)
	}
	if pspec.Percentile == nil {
		pspec.Percentile = util.Int32Ptr(25)
	}
}
