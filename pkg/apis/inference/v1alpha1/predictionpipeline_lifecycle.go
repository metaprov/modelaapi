package v1alpha1

import (
	"fmt"
	"github.com/metaprov/modeld-api/pkg/apis/inference"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (prediction *PredictionPipeline) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

const PipelineLabelKey = "pipeline"

//==============================================================================
// Keys
//==============================================================================

func (prediction *PredictionPipeline) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *PredictionPipeline) ManifestUri() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", prediction.RootUri(), prediction.Name)
}

func (prediction *PredictionPipeline) InputKey() string {
	return prediction.Spec.Input.Path
}

func (prediction *PredictionPipeline) OutputKey() string {
	return prediction.Spec.Output.Path
}

//==============================================================================
// Validate
//==============================================================================

func (prediction *PredictionPipeline) PipelineName() string {
	return prediction.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (prediction *PredictionPipeline) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *PredictionPipeline) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *PredictionPipeline) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (prediction *PredictionPipeline) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, prediction.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (prediction *PredictionPipeline) CreateOrUpdateCond(cond PredictionPipelineCondition) {
	i := prediction.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		prediction.Status.Conditions = append(prediction.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := prediction.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	prediction.Status.Conditions[i] = current
}

func (prediction *PredictionPipeline) GetCondIdx(t PredictionPipelineConditionType) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (prediction *PredictionPipeline) GetCond(t PredictionPipelineConditionType) PredictionPipelineCondition {
	for _, v := range prediction.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return PredictionPipelineCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (prediction *PredictionPipeline) IsReady() bool {
	return prediction.GetCond(PredictionReady).Status == v1.ConditionTrue
}

func (prediction *PredictionPipeline) StatusString() string {
	return string(prediction.Status.Phase)
}

func (prediction *PredictionPipeline) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func ParsePredictionYaml(content []byte) (*PredictionPipeline, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*PredictionPipeline)
	return r, nil
}

func (prediction *PredictionPipeline) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(prediction)
}

func (prediction *PredictionPipeline) MarkFailed(msg string) {
	prediction.CreateOrUpdateCond(PredictionPipelineCondition{
		Type:    PredictionReady,
		Status:  v1.ConditionFalse,
		Reason:  "prediction failed",
		Message: msg,
	})
	prediction.Status.Phase = PredictionPhaseFailed
}

func (prediction *PredictionPipeline) MarkDone() {
	prediction.CreateOrUpdateCond(PredictionPipelineCondition{
		Type:   PredictionReady,
		Status: v1.ConditionTrue,
	})
	prediction.Status.Phase = PredictionPhaseReady

}

func (prediction *PredictionPipeline) MarkRunning() {
	prediction.CreateOrUpdateCond(PredictionPipelineCondition{
		Status: v1.ConditionFalse,
		Reason: "prediction running",
	})
	prediction.Status.Phase = PredictionPhaseRunning
}

func (prediction *PredictionPipeline) OpName() string {
	return prediction.Namespace + "-" + prediction.Name
}

func (version *PredictionPipeline) MarkArchived() {
	version.CreateOrUpdateCond(PredictionPipelineCondition{
		Type:   PredictionArchived,
		Status: v1.ConditionTrue,
	})
}

func (version *PredictionPipeline) Archived() bool {
	return version.GetCond(PredictionArchived).Status == v1.ConditionTrue
}
