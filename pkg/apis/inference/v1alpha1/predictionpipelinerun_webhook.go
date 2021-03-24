package v1alpha1

import (
	"fmt"
	"github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"

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

func (run *PredictionPipelineRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(run).
		Complete()
}

//==============================================================================
// Keys
//==============================================================================

func (run *PredictionPipelineRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", run.Namespace, run.Name)
}

func (run *PredictionPipelineRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-run.yaml", run.RootUri(), run.Name)
}

func (run *PredictionPipelineRun) InputKey() string {
	return run.Spec.Input.Path
}

func (run *PredictionPipelineRun) OutputKey() string {
	return run.Spec.Output.Path
}

//==============================================================================
// Validate
//==============================================================================

func (run *PredictionPipelineRun) PipelineName() string {
	return run.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (run *PredictionPipelineRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, inference.GroupName)
}
func (run *PredictionPipelineRun) AddFinalizer() {
	util.AddFin(&run.ObjectMeta, inference.GroupName)
}
func (run *PredictionPipelineRun) RemoveFinalizer() {
	util.RemoveFin(&run.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (run *PredictionPipelineRun) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, run.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (run *PredictionPipelineRun) CreateOrUpdateCond(cond PredictionPipelineRunCondition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		run.Status.Conditions = append(run.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	run.Status.Conditions[i] = current
}

func (run *PredictionPipelineRun) GetCondIdx(t PredictionPipelineRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *PredictionPipelineRun) GetCond(t PredictionPipelineRunConditionType) PredictionPipelineRunCondition {
	for _, v := range run.Status.Conditions {
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

func (run *PredictionPipelineRun) IsReady() bool {
	return run.GetCond(PredictionPipelineRunReady).Status == v1.ConditionTrue
}

func (run *PredictionPipelineRun) StatusString() string {
	return string(run.Status.Phase)
}

func (run *PredictionPipelineRun) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", run.Namespace, run.Name)
}

func ParsePredictionPipelineRunYaml(content []byte) (*PredictionPipelineRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*PredictionPipelineRun)
	return r, nil
}

func (run *PredictionPipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}

func (run *PredictionPipelineRun) MarkFailed(msg string) {
	run.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:    PredictionPipelineRunReady,
		Status:  v1.ConditionFalse,
		Reason:  string(PredictionPipelineRunPhaseFailed),
		Message: msg,
	})
	run.Status.Phase = PredictionPipelineRunPhaseFailed
	now := metav1.Now()
	run.Status.CompletionTime = &now

}

func (run *PredictionPipelineRun) MarkDone() {
	run.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:   PredictionPipelineRunReady,
		Status: v1.ConditionTrue,
		Reason: string(PredictionPipelineRunPhaseCompleted),
	})
	run.Status.Phase = PredictionPipelineRunPhaseCompleted

}

func (run *PredictionPipelineRun) MarkRunning() {
	run.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Status: v1.ConditionFalse,
		Reason: string(PredictionPipelineRunPhaseRunning),
	})
	run.Status.Phase = PredictionPipelineRunPhaseRunning
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.CompletionTime = &now
	}
}

func (run *PredictionPipelineRun) OpName() string {
	return run.Namespace + "-" + run.Name
}

func (run *PredictionPipelineRun) MarkArchived() {
	run.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:   PredictionPipelineRunArchived,
		Status: v1.ConditionTrue,
	})
}

func (run *PredictionPipelineRun) Archived() bool {
	return run.GetCond(PredictionPipelineRunArchived).Status == v1.ConditionTrue
}

func (run *PredictionPipelineRun) MarkComplete() {
	run.CreateOrUpdateCond(PredictionPipelineRunCondition{
		Type:   PredictionPipelineRunReady,
		Status: v1.ConditionTrue,
	})
	run.Status.Phase = PredictionPipelineRunPhaseCompleted
	now := metav1.Now()
	run.Status.CompletionTime = &now
}

func (run *PredictionPipelineRun) IsCompleted() bool {
	return run.GetCond(PredictionPipelineRunReady).Status == v1.ConditionTrue
}

func (run *PredictionPipelineRun) IsRunning() bool {
	cond := run.GetCond(PredictionPipelineRunReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseRunning)
}

func (run *PredictionPipelineRun) IsFailed() bool {
	cond := run.GetCond(PredictionPipelineRunReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseFailed)
}
