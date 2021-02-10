package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/apis/inference"
	"github.com/metaprov/modeldapi/pkg/util"
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

func (prediction *PredictionPipelineRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

//==============================================================================
// Keys
//==============================================================================

func (prediction *PredictionPipelineRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *PredictionPipelineRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", prediction.RootUri(), prediction.Name)
}

func (prediction *PredictionPipelineRun) InputKey() string {
	return prediction.Spec.Input.Path
}

func (prediction *PredictionPipelineRun) OutputKey() string {
	return prediction.Spec.Output.Path
}

//==============================================================================
// Validate
//==============================================================================

func (prediction *PredictionPipelineRun) PipelineName() string {
	return prediction.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (prediction *PredictionPipelineRun) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *PredictionPipelineRun) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *PredictionPipelineRun) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (prediction *PredictionPipelineRun) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, prediction.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (prediction *PredictionPipelineRun) CreateOrUpdateCond(cond PredictionPipelineRunCondition) {
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

func (prediction *PredictionPipelineRun) GetCondIdx(t PredictionPipelineRunConditionType) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (prediction *PredictionPipelineRun) GetCond(t PredictionPipelineRunConditionType) PredictionPipelineRunCondition {
	for _, v := range prediction.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return PredictionPipelineRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (prediction *PredictionPipelineRun) IsReady() bool {
	return prediction.GetCond(PredictionPipelineRunReady).Status == v1.ConditionTrue
}

func (prediction *PredictionPipelineRun) StatusString() string {
	return string(prediction.Status.Phase)
}

func (prediction *PredictionPipelineRun) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func ParsePredictionPipelineRunYaml(content []byte) (*PredictionPipelineRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*PredictionPipelineRun)
	return r, nil
}

func (prediction *PredictionPipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(prediction)
}

func (prediction *PredictionPipelineRun) MarkFailed(msg string) {
	prediction.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:    PredictionPipelineRunReady,
		Status:  v1.ConditionFalse,
		Reason:  "prediction failed",
		Message: msg,
	})
	prediction.Status.Phase = PredictionPipelineRunPhaseFailed
}

func (prediction *PredictionPipelineRun) MarkDone() {
	prediction.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:   PredictionPipelineRunReady,
		Status: v1.ConditionTrue,
	})
	prediction.Status.Phase = PredictionPipelineRunPhaseReady

}

func (prediction *PredictionPipelineRun) MarkRunning() {
	prediction.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Status: v1.ConditionFalse,
		Reason: "prediction running",
	})
	prediction.Status.Phase = PredictionPipelineRunPhaseRunning
}

func (prediction *PredictionPipelineRun) OpName() string {
	return prediction.Namespace + "-" + prediction.Name
}

func (version *PredictionPipelineRun) MarkArchived() {
	version.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:   PredictionPipelineRunArchived,
		Status: v1.ConditionTrue,
	})
}

func (version *PredictionPipelineRun) Archived() bool {
	return version.GetCond(PredictionPipelineRunArchived).Status == v1.ConditionTrue
}
