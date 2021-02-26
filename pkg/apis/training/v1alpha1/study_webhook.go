/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/common"
	"github.com/metaprov/modeldapi/pkg/util"
	"github.com/pkg/errors"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
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
	return catalog.UnknownMetric
}

var _ webhook.Defaulter = &Study{}

func (study *Study) Default() {

	// set default to cv

	if study.Spec.Reported == nil {
		study.Spec.Reported = util.BoolPtr(true)
	}

	if study.Spec.Aborted == nil {
		study.Spec.Aborted = util.BoolPtr(false)
	}

	if study.Spec.Paused == nil {
		study.Spec.Paused = util.BoolPtr(false)
	}

	if study.Spec.Profiled == nil {
		study.Spec.Profiled = util.BoolPtr(true)
	}

	if study.Spec.Training == nil {
		study.Spec.Training = &TrainingSpec{}
	}
	if study.Spec.Training.Folds == nil {
		study.Spec.Training.Folds = util.Int32Ptr(5)
	}
	if study.Spec.Training.CvType == nil {
		cvtype := catalog.CvTypeKFoldCV
		study.Spec.Training.CvType = &cvtype
	}

	if study.Spec.Search == nil {
		study.Spec.Search = &ModelSearchSpec{}
	}
	if study.Spec.Search.MaxCost == nil {
		study.Spec.Search.MaxCost = util.Int32Ptr(999)
	}
	if study.Spec.Search.MaxTime == nil {
		study.Spec.Search.MaxTime = util.Int32Ptr(999)
	}
	if study.Spec.Search.MaxModels == nil {
		study.Spec.Search.MaxModels = util.Int32Ptr(10)
	}
	if study.Spec.Search.MinScore == nil {
		study.Spec.Search.MinScore = util.FloatPtr(100)
	}

	if study.Spec.Training.Priority == nil {
		study.Spec.Training.Priority = util.Int32Ptr(5)
	}

	if study.Spec.Search.RetainTop == nil {
		study.Spec.Search.RetainTop = util.Int32Ptr(10)
	}

	if study.Spec.Search.RetainFor == nil {
		study.Spec.Search.RetainFor = util.Int32Ptr(60) // retain for 60 minutes.
	}

	if study.Spec.Search.Type == nil {
		v := RandomSearch
		study.Spec.Search.Type = &v
	}

	if study.Spec.Search.Resources == nil {
		study.Spec.Search.Resources = &TrainingResourceRequest{
			Gpu: M,
			Cpu: M,
			Mem: M,
		}
	}

	if study.Spec.Search.Trainers == nil {
		study.Spec.Search.Trainers = util.Int32Ptr(1)
	}

	if study.Spec.Search.Test == nil {
		study.Spec.Search.Test = util.Int32Ptr(1)
	}

	if study.Spec.Search.RetainTop == nil {
		study.Spec.Search.RetainTop = util.Int32Ptr(10)
	}

	if study.Spec.Search.RetainFor == nil {
		study.Spec.Search.RetainFor = util.Int32Ptr(24 * 60)
	}

	if study.Spec.Training.CheckpointInterval == nil {
		study.Spec.Training.CheckpointInterval = util.Int32Ptr(0)
	}

	if study.Spec.Preprocessing == nil {
		study.Spec.Preprocessing = &PreprocessingSpec{}
	}
	if study.Spec.Preprocessing.Categorical == nil {
		study.Spec.Preprocessing.Categorical = &CategoricalPipelineSpec{}
	}

	if study.Spec.Preprocessing.Categorical.Encoder == nil {
		auto := catalog.AutoEncoder
		study.Spec.Preprocessing.Categorical.Encoder = &auto
	}
	if study.Spec.Preprocessing.Categorical.Imputer == nil {
		auto := catalog.AutoImputer
		study.Spec.Preprocessing.Categorical.Imputer = &auto

	}
	if study.Spec.Preprocessing.Numeric.Scaler == nil {
		auto := catalog.AutoScaler
		study.Spec.Preprocessing.Numeric.Scaler = &auto
	}
	if study.Spec.Preprocessing.Numeric.Imputer == nil {
		auto := catalog.AutoImputer
		study.Spec.Preprocessing.Numeric.Imputer = &auto
	}
	if study.Spec.Preprocessing.Text == nil {
		study.Spec.Preprocessing.Text = &TextPipelineSpec{}
	}
	if study.Spec.Preprocessing.Selector == nil {
		none := catalog.NoneFeatureSelector
		study.Spec.Preprocessing.Selector = &none
	}
	if study.Spec.Preprocessing.Reducer == nil {
		none := catalog.NoneReducer
		study.Spec.Preprocessing.Reducer = &none
	}

	if study.Spec.Objective == nil {
		o := DefaultObjective(*study.Spec.Task)
		study.Spec.Objective = &o
	}

	if study.Spec.Search.VotingEnsemble == nil {
		study.Spec.Search.VotingEnsemble = util.BoolPtr(false)
	}

	if study.Spec.Search.StackingEnsemble == nil {
		study.Spec.Search.StackingEnsemble = util.BoolPtr(true)
	}
	study.Spec.Search.StackingEnsemble = util.BoolPtr(true)

	if study.Spec.Training.Forecast == nil && *study.Spec.Task == catalog.Forcasting {
		study.Spec.Training.Forecast = &ForecastingSpec{
			Horizon:                nil,
			TimeColumn:             nil,
			TargetColumn:           nil,
			DateTimeFormat:         nil,
			Dimensions:             nil,
			Repressors:             nil,
			FreqSpec:               &FreqSpec{},
			ConfidenceInterval:     nil,
			CountryForHoliday:      nil,
			DimensionValues:        nil,
			Backtest:               nil,
			ForecastConnectionName: nil,
			Forecast:               nil,
		}
	}

	if study.Spec.WorkloadClassRef == nil {
		study.Spec.WorkloadClassRef = &v1.ObjectReference{
			Name:      "classical-trainer",
			Namespace: "modeld-catalog",
		}
	}

	if study.Spec.Search.SHOptions.MaxBudget == nil {
		study.Spec.Search.SHOptions.MaxBudget = util.Int32Ptr(81)
	}

	if study.Spec.Search.SHOptions.EliminationRate == nil {
		study.Spec.Search.SHOptions.EliminationRate = util.Int32Ptr(3)
	}

	if study.Spec.Training.CheckpointInterval == nil {
		study.Spec.Training.CheckpointInterval = util.Int32Ptr(0)
	}

	if study.Spec.Training == nil {
		study.Spec.Training = &TrainingSpec{}
	}

	if study.Spec.Training.EarlyStop == nil {
		study.Spec.Training.EarlyStop = util.BoolPtr(false)
	}

	if study.Spec.Preprocessing.Imbalanced == nil {
		study.Spec.Preprocessing.Imbalanced = util.BoolPtr(false)
	}

	if study.Spec.ModelPublished == nil {
		study.Spec.ModelPublished = util.BoolPtr(false)
	}

	if study.Spec.ModelImagePushed == nil {
		study.Spec.ModelImagePushed = util.BoolPtr(false)
	}

	// assign the train/test split
	if study.Spec.Split.Train == nil {
		study.Spec.Split.Train = util.Int32Ptr(80)
	}

	if study.Spec.Split.Test == nil {
		study.Spec.Split.Test = util.Int32Ptr(20)
	}

	if study.Spec.Split.Validation == nil {
		study.Spec.Split.Validation = util.Int32Ptr(0)
	}

	if study.Spec.Split.Seed == nil {
		study.Spec.Split.Seed = util.Float64Ptr(42)
	}

	// if we search preprocessor, but we do not have an estimator
	study.Status.Conditions = make([]StudyCondition, 0)

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
		schema.GroupKind{Group: "training.modeld.io", Kind: "Study"},
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
		allErrs = append(allErrs, field.Invalid(fldPath.Child("FileName"), study.Name, err.Error()))
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
	if *study.Spec.Task == catalog.Regression && !study.Spec.Objective.IsRegression() {
		err := errors.Errorf("objective %v is not a regression metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.BinaryClassification && !study.Spec.Objective.IsClassification() {
		err := errors.Errorf("objective %v is not a binary classification metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.MultiClassification && !study.Spec.Objective.IsMultiClass() {
		err := errors.Errorf("objective %v is not a multi classification metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	if *study.Spec.Task == catalog.Clustering && !study.Spec.Objective.IsClustering() {
		err := errors.Errorf("objective %v is not a clustering metric", *study.Spec.Objective)
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			study.Spec.Task,
			err.Error()))
	}
	return allErrs
}

//==============================================================================
// StudyName Defaults
//==============================================================================
