/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//Set up the webhook with the manager.
func (pl *ModelPipeline) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(pl).
		Complete()
}

const PipelineLabelKey = "pipeline"

const (
	DEFAULT_MIN_SCORE float64 = 0.8
)

// Compare the current
func (pl *ModelPipeline) PredictorName() string { return "predictor-" + pl.Name }
func (pl *ModelPipeline) PredictionName() string {
	return "prediction-" + pl.Name
}

//==============================================================================
// Finalizer
//==============================================================================

func (pl *ModelPipeline) HasFinalizer() bool {
	return util.HasFin(&pl.ObjectMeta, training.GroupName)
}
func (pl *ModelPipeline) AddFinalizer()    { util.AddFin(&pl.ObjectMeta, training.GroupName) }
func (pl *ModelPipeline) RemoveFinalizer() { util.RemoveFin(&pl.ObjectMeta, training.GroupName) }

// Merge or update condition
func (pl *ModelPipeline) CreateOrUpdateCond(cond ModelPipelineCondition) {
	i := pl.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		pl.Status.Conditions = append(pl.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := pl.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	pl.Status.Conditions[i] = current
}

func (pl *ModelPipeline) GetCondIdx(t ModelPipelineConditionType) int {
	for i, v := range pl.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (pl *ModelPipeline) GetCond(t ModelPipelineConditionType) ModelPipelineCondition {
	for _, v := range pl.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ModelPipelineCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (run *ModelPipeline) IsReady() bool {
	return run.GetCond(ModelPipelineReady).Status == v1.ConditionTrue
}

func ParsePipelineYaml(content []byte) (*ModelPipeline, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ModelPipeline)
	return r, nil
}

func (pl *ModelPipeline) HasTrainingStage() bool {
	return pl.Spec.Training.StudyTemplateName != nil
}

func (pl *ModelPipeline) HasDataStage() bool {
	return pl.Spec.Data != nil && pl.Spec.Data.DataPipelineName != nil && *pl.Spec.Data.DataPipelineName != ""
}

func (pl *ModelPipeline) HasTrainingNotebook() bool {
	return pl.Spec.Training.NotebookName != nil && *pl.Spec.Training.NotebookName != ""
}

func (pl *ModelPipeline) HasTrainingStudy() bool {
	return pl.Spec.Training.StudyTemplateName != nil && *pl.Spec.Training.StudyTemplateName != ""
}

func (pl *ModelPipeline) MarkReady() {
	pl.CreateOrUpdateCond(ModelPipelineCondition{
		Type:   ModelPipelineReady,
		Status: v1.ConditionTrue,
	})
}

func (pl *ModelPipeline) MarkArchived() {
	pl.CreateOrUpdateCond(ModelPipelineCondition{
		Type:   ModelPipelineSaved,
		Status: v1.ConditionTrue,
	})
}

func (pl *ModelPipeline) Archived() bool {
	return pl.GetCond(ModelPipelineSaved).Status == v1.ConditionTrue
}
