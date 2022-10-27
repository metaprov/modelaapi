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
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"k8s.io/klog/v2"
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
	if task == catalog.Forecasting || task == catalog.GroupForecast {
		return catalog.MAPE
	}
	return catalog.Accuracy
}

func (mclass *ModelClass) DefaultFESearchEstimator(task catalog.MLTask) catalog.ClassicEstimatorName {
	if task == catalog.BinaryClassification {
		return catalog.DecisionTreeClassifier
	}
	if task == catalog.MultiClassification {
		return catalog.DecisionTreeClassifier
	}
	if task == catalog.Regression {
		return catalog.DecisionTreeRegressor
	}
	if task == catalog.Forecasting || task == catalog.GroupForecast {
		return catalog.AutoARIMA
	}
	return catalog.UnknownEstimatorName
}

func (mclass *ModelClass) DefaultBaselineEstimator(task catalog.MLTask) catalog.ClassicEstimatorName {
	if task == catalog.BinaryClassification {
		return catalog.RandomForestClassifier
	}
	if task == catalog.MultiClassification {
		return catalog.RandomForestClassifier
	}
	if task == catalog.Regression {
		return catalog.RandomForestRegressor
	}
	if task == catalog.Forecasting || task == catalog.GroupForecast {
		return catalog.AutoARIMA
	}
	return catalog.UnknownEstimatorName
}

var _ webhook.Defaulter = &ModelClass{}

func (mclass *ModelClass) Default() {

	mclass.ObjectMeta.Labels[catalog.TenantLabelKey] = mclass.Spec.Training.LabRef.Namespace
	mclass.ObjectMeta.Labels[catalog.LabLabelKey] = mclass.Spec.Training.LabRef.Name
	mclass.ObjectMeta.Labels[catalog.DataProductLabelKey] = *mclass.Spec.VersionName

}

// validation
var _ webhook.Validator = &ModelClass{}

func (mclass ModelClass) ValidateDelete() error {
	return nil
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (mclass ModelClass) ValidateCreate() error {
	return mclass.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (mclass ModelClass) ValidateUpdate(old runtime.Object) error {
	return mclass.validate()
}

func (mclass ModelClass) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, mclass.validateMeta(field.NewPath("metadata"))...)
	allErrs = append(allErrs, mclass.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modela.ai", Kind: "ModelClass"},
		mclass.Name, allErrs)
}

func (mclass *ModelClass) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, mclass.validateName(fldPath.Child("name"))...)
	return allErrs
}

func (mclass ModelClass) validateName(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	err := common.ValidateResourceName(mclass.Name)
	if err != nil {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("Name"), mclass.Name, err.Error()))
	}
	return allErrs
}

func (mclass ModelClass) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, mclass.validateTask(fldPath.Child("Task"))...)
	allErrs = append(allErrs, mclass.validateDataset(fldPath.Child("Entity"))...)
	return allErrs
}

// Validate task checks that the
func (mclass ModelClass) validateDataset(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	// Task must be defined.

	return allErrs
}

// Validate task checks that the
func (mclass ModelClass) validateTask(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	// Task must be defined.
	if mclass.Spec.Task == nil {
		err := errors.Errorf("task must be defined")
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			mclass.Spec.Task,
			err.Error()))
		return allErrs
	}

	return allErrs
}

//==============================================================================
// Defaults
//==============================================================================

func (svo *SuccessiveHalvingOptions) Default() {

}

func (ms *SearchSpec) Default(task *catalog.MLTask) {
	name := TPESearch
	if ms.Sampler == nil {
		ms.Sampler = &name
	}
	ms.Pruner = PrunerSpec{}

	// set default pruner.

	if ms.Pruner.Type == nil {
		if *ms.Sampler == TPESearch {
			v := HyperbandPruner
			ms.Pruner.Type = &v
		}
		if *ms.Sampler == RandomSearch {
			v := MedianPruner
			ms.Pruner.Type = &v
		}

	}
	pspec := ms.Pruner
	klog.InfoS("v", "pspec", *pspec.Type, "sampler", *ms.Sampler)
	switch *pspec.Type {
	case MedianPruner: // set default median pruner
		if pspec.Median == nil {
			klog.InfoS("set default pruner", "update median pruner")
			pspec.Median = &MedianPrunerOptions{
				// Pruning is disabled until the given number of trials finish in the same study.
				StartupTrials: util.Int32Ptr(5),
				WarmupSteps:   util.Int32Ptr(0),
				IntervalSteps: util.Int32Ptr(1),
				MinTrials:     util.Int32Ptr(1),
			}
		}
	case PercentilePruner:
		if pspec.Percentile == nil {

			pspec.Percentile = &PercentilePrunerOptions{
				Percentile:    util.Int32Ptr(25),
				StartupTrials: util.Int32Ptr(5),
				WarmupSteps:   util.Int32Ptr(0),
				IntervalSteps: util.Int32Ptr(1),
				MinTrials:     util.Int32Ptr(1),
			}
		}
	case SuccessiveHalvingPruner:

		if pspec.Successive == nil {
			pspec.Successive = &SuccessiveHalvingOptions{
				MinResources:         util.Int32Ptr(1),
				ReductionFactor:      util.Int32Ptr(4),
				MinEarlyStoppingRate: util.Int32Ptr(0),
				BootstrapCount:       util.Int32Ptr(0),
			}
		}
	case HyperbandPruner:
		klog.InfoS("v", "update hyperband pruner")
		if pspec.Hyperband == nil {
			pspec.Hyperband = &HyperbandOptions{
				MinResources:    util.Int32Ptr(1),
				MaxResources:    util.Int32Ptr(1),
				ReductionFactor: util.Int32Ptr(3),
				BootstrapCount:  util.Int32Ptr(0),
			}
		}
	case ThresholdPruner:
		klog.InfoS("v", "update threshold pruner")
		if pspec.Threshold == nil {
			pspec.Threshold = &ThresholdPrunerOptions{
				Lower:         util.Float64Ptr(0),
				Upper:         util.Float64Ptr(0),
				WarmupSteps:   util.Int32Ptr(0),
				IntervalSteps: util.Int32Ptr(1),
			}
		}

	}

	if ms.MaxCost == nil {
		ms.MaxCost = util.Int32Ptr(100)
	}
	if ms.MaxTime == nil {
		ms.MaxTime = util.Int32Ptr(30)
	}
	if ms.MaxModels == nil {
		ms.MaxModels = util.Int32Ptr(10)
	}
	if ms.MinBestScore == nil {
		ms.MinBestScore = util.Float64Ptr(9999999)
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
