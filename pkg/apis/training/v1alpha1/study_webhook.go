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
	return catalog.UnknownMetric
}

var _ webhook.Defaulter = &Study{}

func (study *Study) Default() {

	// set default to cv
	if study.Spec.Training == nil {
		study.Spec.Training = &TrainingSpec{}
	}

	if study.Spec.Training.CheckpointInterval == nil {
		study.Spec.Training.CheckpointInterval = util.Int32Ptr(0)
	}

	if study.Spec.Preprocessing == nil {
		study.Spec.Preprocessing = &PreprocessingSpec{}
		study.Spec.Preprocessing.Numeric = &NumericPipelineSpec{}
		study.Spec.Preprocessing.Categorical = &CategoricalPipelineSpec{}
		study.Spec.Preprocessing.Text = &TextPipelineSpec{}
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
	if study.Spec.Preprocessing.FeatureEngineering == nil {
		none := catalog.NoneFeatureEngineering
		study.Spec.Preprocessing.FeatureEngineering = &none
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

	if study.Spec.Search == nil {
		study.Spec.Search = &ModelSearchSpec{}
	}

	if study.Spec.Search.Pruner.SHOptions == nil {
		study.Spec.Search.Pruner.SHOptions = &SuccessiveHalvingOptions{}
	}

	if study.Spec.Search.StartAt == nil {
		now := metav1.Now()
		study.Spec.Search.StartAt = &now
	}

	if study.Spec.Search.Pruner.SHOptions.MaxBudget == nil {
		study.Spec.Search.Pruner.SHOptions.MaxBudget = util.Int32Ptr(81)
	}

	if study.Spec.Search.Pruner.SHOptions.EliminationRate == nil {
		study.Spec.Search.Pruner.SHOptions.EliminationRate = util.Int32Ptr(3)
	}

	if study.Spec.Training == nil {
		cvtype := catalog.CvTypeStratified
		study.Spec.Training = &TrainingSpec{
			Priority:           util.Int32Ptr(5),
			CvType:             &cvtype,
			CV:                 util.BoolPtr(true),
			Folds:              util.Int32Ptr(5),
			Retry:              util.Int32Ptr(5),
			EarlyStop:          util.BoolPtr(false),
			CheckpointInterval: util.Int32Ptr(10),
			Seed:               util.Float64Ptr(42),
		}
	}

	if study.Spec.Split == nil {
		splitPolicy := Stratified
		study.Spec.Split = &DataSplit{
			Auto:        util.BoolPtr(true),
			Train:       util.Int32Ptr(80),
			Validation:  util.Int32Ptr(0),
			Test:        util.Int32Ptr(20),
			SplitPolicy: &splitPolicy,
			Seed:        util.Float64Ptr(42),
		}

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
