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
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

func (pl *ModelPipeline) Default() {

}

func (run *ModelPipelineRun) ValidateDelete() error {
	return nil
}

// validation
var _ webhook.Validator = &ModelPipeline{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (pl *ModelPipeline) ValidateCreate() error {
	return pl.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (pl *ModelPipeline) ValidateUpdate(old runtime.Object) error {
	return pl.validate()
}

func (pl *ModelPipeline) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "training.modeld.io", Kind: "ModelPipeline"},
		pl.Name, allErrs)
}

func (pl *ModelPipeline) ValidateDelete() error {
	return nil
}

// PipelinePhase_PreprocessingDataRunning        PipelinePhase = "PreprocessingDataRunning"

// PipelinePhase_PreprocessingCompleted          PipelinePhase = "PreprocessingDataCompleted"
// PipelinePhase_PreprocessingFailed             PipelinePhase = "PreprocessingDataFailed"
// PipelinePhase_NotebookRunning                 PipelinePhase = "NotebookRunning"
// PipelinePhase_NotebookReady                   PipelinePhase = "NotebookCompleted"
// PipelinePhase_NotebookFailed                  PipelinePhase = "NotebookFailed"
// PipelinePhase_StudyRunning                    PipelinePhase = "StudyRunning"
// PipelinePhase_StudyFailed                     PipelinePhase = "StudyFailed"
// PipelinePhase_StudyCompleted                  PipelinePhase = "StudyCompleted"
// PipelinePhase_ModelPublished                  PipelinePhase = "ModelPublished"
// PipelinePhase_TrainingApproved                PipelinePhase = "TrainingApproved"
// PipelinePhase_AcceptancePredictorRunning      PipelinePhase = "AcceptancePredictorRunning"
// PipelinePhase_AcceptancePredictorCompleted    PipelinePhase = "AcceptancePredictorCompleted"
// PipelinePhase_AcceptancePrecitionRunRunning   PipelinePhase = "AcceptancePrecitionRunRunning"
// PipelinePhase_AcceptancePrecitionRunCompleted PipelinePhase = "AcceptancePrecitionRunCompleted"
// PipelinePhase_AcceptancePrecitionRunFailed    PipelinePhase = "AcceptancePrecitionRunFailed"
// PipelinePhase_AcceptanceApproved              PipelinePhase = "AcceptanceApproved"
// PipelinePhase_CapacityPredictorRunning        PipelinePhase = "CapacityPredictorRunnning"
// PipelinePhase_CapacityPredictorReady          PipelinePhase = "CapacityPredictorReady"
// PipelinePhase_CapacityPrecitionRunning        PipelinePhase = "CapacityPredictionRunRunning"
// PipelinePhase_CapacityPrecitionRunCompleted   PipelinePhase = "CapacityPrecitionRunCompleted"
// PipelinePhase_CapacityPrecitionRunFailed      PipelinePhase = "CapacityPrecitionRunFailed"
// PipelinePhase_CapcityApproved                 PipelinePhase = "CapcityApproved"
// PipelinePhase_ReleaseModelDeployed            PipelinePhase = "ReleaseModelDeployed"
// PipelinePhase_ReleaseModelLive                PipelinePhase = "ReleaseModelLive"
