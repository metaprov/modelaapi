/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/training"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
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

//==============================================================================
// RunModelJob studies from template
//==============================================================================
/*
// StudyName return a studies based on the training template
func (pipeline *ModelPipeline) NewStudy() *Study {
	study := &Study{
		ObjectMeta: *pipeline.Spec.TrainingEnv.StudyTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.TrainingEnv.StudyTemplate.Spec.DeepCopy(),
	}

	study.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	study.ObjectMeta.FileName = ""
	study.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	study.ObjectMeta.ResourceVersion = ""
	study.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	study.ObjectMeta.OwnerReferences = append(study.ObjectMeta.OwnerReferences, *ref)

	if study.ObjectMeta.Labels == nil {
		study.ObjectMeta.Labels = make(map[string]string, 1)
	}

	study.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return study
}

func (pipeline *ModelPipeline) TestingPredictor() *inference.PredictorTemplate {
	predictor := &inference.PredictorTemplate{
		ObjectMeta: *pipeline.Spec.Staging.PredictorTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.Staging.PredictorTemplate.Spec.DeepCopy(),
	}

	predictor.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	predictor.ObjectMeta.FileName = ""
	predictor.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	predictor.ObjectMeta.ResourceVersion = ""
	predictor.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	predictor.ObjectMeta.OwnerReferences = append(predictor.ObjectMeta.OwnerReferences, *ref)

	if predictor.ObjectMeta.Labels == nil {
		predictor.ObjectMeta.Labels = make(map[string]string, 1)
	}

	predictor.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return predictor
}

func (pipeline *ModelPipeline) DevPredictor() *inference.PredictorTemplate {
	predictor := &inference.PredictorTemplate{
		ObjectMeta: *pipeline.Spec.TrainingEnv.PreprocessorTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.TrainingEnv.PreprocessorTemplate.Spec.DeepCopy(),
	}

	predictor.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	predictor.ObjectMeta.FileName = ""
	predictor.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	predictor.ObjectMeta.ResourceVersion = ""
	predictor.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	predictor.ObjectMeta.OwnerReferences = append(predictor.ObjectMeta.OwnerReferences, *ref)

	if predictor.ObjectMeta.Labels == nil {
		predictor.ObjectMeta.Labels = make(map[string]string, 1)
	}

	predictor.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return predictor
}

func (pipeline *ModelPipeline) DevPrediction() *inference.PredictionTemplate {
	prediction := &inference.PredictionTemplate{
		ObjectMeta: *pipeline.Spec.TrainingEnv.PredictionTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.TrainingEnv.PredictionTemplate.Spec.DeepCopy(),
	}

	prediction.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	prediction.ObjectMeta.FileName = ""
	prediction.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	prediction.ObjectMeta.ResourceVersion = ""
	prediction.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	prediction.ObjectMeta.OwnerReferences = append(prediction.ObjectMeta.OwnerReferences, *ref)

	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string, 1)
	}

	prediction.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return prediction
}

func (pipeline *ModelPipeline) TestPrediction() *inference.PredictionTemplate {
	prediction := &inference.PredictionTemplate{
		ObjectMeta: *pipeline.Spec.Staging.PredictionTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.Staging.PredictionTemplate.Spec.DeepCopy(),
	}

	prediction.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	prediction.ObjectMeta.FileName = ""
	prediction.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	prediction.ObjectMeta.ResourceVersion = ""
	prediction.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	prediction.ObjectMeta.OwnerReferences = append(prediction.ObjectMeta.OwnerReferences, *ref)

	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string, 1)
	}

	prediction.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return prediction
}

func (pipeline *ModelPipeline) AutPredictor() *inference.PredictorTemplate {
	predictor := &inference.PredictorTemplate{
		ObjectMeta: *pipeline.Spec.AcceptanceStage.PredictorTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.AcceptanceStage.PredictorTemplate.Spec.DeepCopy(),
	}

	predictor.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	predictor.ObjectMeta.FileName = ""
	predictor.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	predictor.ObjectMeta.ResourceVersion = ""
	predictor.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	predictor.ObjectMeta.OwnerReferences = append(predictor.ObjectMeta.OwnerReferences, *ref)

	if predictor.ObjectMeta.Labels == nil {
		predictor.ObjectMeta.Labels = make(map[string]string, 1)
	}

	predictor.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return predictor
}

func (pipeline *ModelPipeline) AutPrediction() *inference.PredictionTemplate {
	prediction := &inference.PredictionTemplate{
		ObjectMeta: *pipeline.Spec.AcceptanceStage.PredictionTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.AcceptanceStage.PredictionTemplate.Spec.DeepCopy(),
	}

	prediction.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	prediction.ObjectMeta.FileName = ""
	prediction.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	prediction.ObjectMeta.ResourceVersion = ""
	prediction.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	prediction.ObjectMeta.OwnerReferences = append(prediction.ObjectMeta.OwnerReferences, *ref)

	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string, 1)
	}

	prediction.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return prediction
}

func (pipeline *ModelPipeline) ProdPredictor() *inference.PredictorTemplate {
	predictor := &inference.PredictorTemplate{
		ObjectMeta: *pipeline.Spec.ReleaseStage.PredictorTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.ReleaseStage.PredictorTemplate.Spec.DeepCopy(),
	}

	predictor.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	predictor.ObjectMeta.FileName = ""
	predictor.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	predictor.ObjectMeta.ResourceVersion = ""
	predictor.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	predictor.ObjectMeta.OwnerReferences = append(predictor.ObjectMeta.OwnerReferences, *ref)

	if predictor.ObjectMeta.Labels == nil {
		predictor.ObjectMeta.Labels = make(map[string]string, 1)
	}

	predictor.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return predictor
}

func (pipeline *ModelPipeline) ProdPrediction() *inference.PredictionTemplate {
	prediction := &inference.PredictionTemplate{
		ObjectMeta: *pipeline.Spec.ReleaseStage.PredictionTemplate.ObjectMeta.DeepCopy(),
		Spec:       *pipeline.Spec.ReleaseStage.PredictionTemplate.Spec.DeepCopy(),
	}

	prediction.ObjectMeta.GenerateName = pipeline.ObjectMeta.FileName + "-"
	prediction.ObjectMeta.FileName = ""
	prediction.ObjectMeta.Namespace = pipeline.ObjectMeta.Namespace
	prediction.ObjectMeta.ResourceVersion = ""
	prediction.ObjectMeta.UID = ""

	ref := metav1.NewControllerRef(pipeline, SchemeGroupVersion.WithKind("PipelineName"))
	prediction.ObjectMeta.OwnerReferences = append(prediction.ObjectMeta.OwnerReferences, *ref)

	if prediction.ObjectMeta.Labels == nil {
		prediction.ObjectMeta.Labels = make(map[string]string, 1)
	}

	prediction.ObjectMeta.Labels[PipelineLabelKey] = pipeline.ObjectMeta.FileName

	return prediction
}


func (pipeline *ModelPipeline) CreateOrUpdateCond(cond ModelPipelineCondition) {
	i := pipeline.GetCondIdx(cond.Type)
	now := metav1.Now()
	current := pipeline.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
		current.LastTransitionTime = &now
		pipeline.Status.Conditions[i] = current
	}
	pipeline.Status.Conditions[i] = current
}

func (pipeline *ModelPipeline) GetCondIdx(t ModelPipelineConditionType) int {
	for i, v := range pipeline.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	panic("condition not found")
}

func (pipeline *ModelPipeline) GetCond(t ModelPipelineConditionType) ModelPipelineCondition {
	for _, v := range pipeline.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	panic("condition not found")
}

func (pipeline *ModelPipeline) Folder() string {
	return fmt.Sprintf("%s/%s/%s", "pipelines", pipeline.Namespace, pipeline.FileName)
}

func ParsePipelineYaml(content []byte) (*ModelPipeline, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ModelPipeline)
	return r, nil
}

func (pipeline *ModelPipeline) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(pipeline)
}
*/

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
	return run.GetCond(PipelineReady).Status == v1.ConditionTrue
}

func (pl *ModelPipeline) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(pl)
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
	return pl.Spec.TrainingStage != nil && pl.Spec.TrainingStage.StudyName != nil && *pl.Spec.TrainingStage.StudyName != ""

}

func (pl *ModelPipeline) HasProdStage() bool {
	return pl.Spec.ReleaseStage != nil && pl.Spec.ReleaseStage.PredictorName != nil && *pl.Spec.ReleaseStage.PredictorName != ""
}

func (pl *ModelPipeline) HasAcceptanceStage() bool {
	return pl.Spec.AcceptanceStage != nil && pl.Spec.AcceptanceStage.PredictionPipelineName != nil
}

func (pl *ModelPipeline) HasTrainingNotebook() bool {
	return pl.Spec.TrainingStage != nil && pl.Spec.TrainingStage.NotebookName != nil && *pl.Spec.TrainingStage.NotebookName != ""
}

func (pl *ModelPipeline) HasTrainingStudy() bool {
	return pl.Spec.TrainingStage != nil && pl.Spec.TrainingStage.StudyName != nil && *pl.Spec.TrainingStage.StudyName != ""
}

func (pl *ModelPipeline) HasCapacityStage() bool {
	return pl.Spec.CapacityStage != nil && pl.Spec.CapacityStage.TestDatasetName != nil && *pl.Spec.CapacityStage.TestDatasetName != ""
}
