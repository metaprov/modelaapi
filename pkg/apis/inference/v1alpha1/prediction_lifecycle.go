package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
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

func (prediction *Prediction) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

const PipelineLabelKey = "pipeline"

//==============================================================================
// Keys
//==============================================================================

func (prediction *Prediction) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *Prediction) ManifestUri() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", prediction.RootUri(), prediction.Name)
}

func (prediction *Prediction) InputKey() string {
	return prediction.Spec.Input.Path
}

func (prediction *Prediction) OutputKey() string {
	return prediction.Spec.Output.Path
}

//==============================================================================
// Validate
//==============================================================================

func (prediction *Prediction) PipelineName() string {
	return prediction.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (prediction *Prediction) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *Prediction) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *Prediction) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (prediction *Prediction) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, prediction.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (prediction *Prediction) CreateOrUpdateCond(cond PredictionCondition) {
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

func (prediction *Prediction) GetCondIdx(t PredictionConditionType) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (prediction *Prediction) GetCond(t PredictionConditionType) PredictionCondition {
	for _, v := range prediction.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return PredictionCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (prediction *Prediction) IsCompleted() bool {
	return prediction.GetCond(PredictionCompleted).Status == v1.ConditionTrue
}

func (prediction *Prediction) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func ParsePredictionYaml(content []byte) (*Prediction, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Prediction)
	return r, nil
}

func (prediction *Prediction) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(prediction)
}

func (prediction *Prediction) MarkFailed(msg string) {
	prediction.CreateOrUpdateCond(PredictionCondition{
		Type:    PredictionCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: msg,
	})
}

func (prediction *Prediction) MarkCompleted() {
	prediction.CreateOrUpdateCond(PredictionCondition{
		Type:   PredictionCompleted,
		Status: v1.ConditionTrue,
	})
	prediction.Status.Phase = PredictionPhaseCompleted
	now := metav1.Now()
	if prediction.Status.EndTime == nil {
		prediction.Status.EndTime = &now
	}
}

func (prediction *Prediction) OpName() string {
	return prediction.Namespace + "-" + prediction.Name
}

func (version *Prediction) MarkSaved() {
	version.CreateOrUpdateCond(PredictionCondition{
		Type:   PredictionSaved,
		Status: v1.ConditionTrue,
	})
}

func (version *Prediction) IsSaved() bool {
	return version.GetCond(PredictionSaved).Status == v1.ConditionTrue
}

func (run *Prediction) MarkRunning() {
	run.CreateOrUpdateCond(PredictionCondition{
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
	run.Status.Phase = PredictionPhaseRunning
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.EndTime = &now
	}
}
