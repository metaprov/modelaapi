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

func (run *CronPrediction) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(run).
		Complete()
}

//==============================================================================
// Keys
//==============================================================================

func (run *CronPrediction) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", run.Namespace, run.Name)
}

func (run *CronPrediction) ManifestUri() string {
	return fmt.Sprintf("%s/%s-run.yaml", run.RootUri(), run.Name)
}

func (run *CronPrediction) InputKey() string {
	return run.Spec.Input.Path
}

func (run *CronPrediction) OutputKey() string {
	return run.Spec.Output.Path
}

//==============================================================================
// Validate
//==============================================================================

func (run *CronPrediction) PipelineName() string {
	return run.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (run *CronPrediction) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, inference.GroupName)
}
func (run *CronPrediction) AddFinalizer() {
	util.AddFin(&run.ObjectMeta, inference.GroupName)
}
func (run *CronPrediction) RemoveFinalizer() {
	util.RemoveFin(&run.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (run *CronPrediction) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, run.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (run *CronPrediction) CreateOrUpdateCond(cond CronPredictionCondition) {
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

func (run *CronPrediction) GetCondIdx(t CronPredictionConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *CronPrediction) GetCond(t CronPredictionConditionType) CronPredictionCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return CronPredictionCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (run *CronPrediction) IsReady() bool {
	return run.GetCond(PredictionPipelineRunReady).Status == v1.ConditionTrue
}

func (run *CronPrediction) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", run.Namespace, run.Name)
}

func ParsePredictionPipelineRunYaml(content []byte) (*CronPrediction, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*CronPrediction)
	return r, nil
}

func (run *CronPrediction) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}
func (run *CronPrediction) OpName() string {
	return run.Namespace + "-" + run.Name
}

func (run *CronPrediction) MarkArchived() {
	run.CreateOrUpdateCond(CronPredictionCondition{
		Type:   PredictionPipelineRunArchived,
		Status: v1.ConditionTrue,
	})
}

func (run *CronPrediction) Archived() bool {
	return run.GetCond(PredictionPipelineRunArchived).Status == v1.ConditionTrue
}

func (run *CronPrediction) MarkReady() {
	run.CreateOrUpdateCond(CronPredictionCondition{
		Type:   CronPredictionReady,
		Status: v1.ConditionTrue,
	})
	run.Status.Phase = PredictionPipelineRunPhaseCompleted
	now := metav1.Now()
	run.Status.CompletionTime = &now
}

func (run *CronPrediction) IsCompleted() bool {
	return run.GetCond(PredictionPipelineRunReady).Status == v1.ConditionTrue
}

func (run *CronPrediction) IsRunning() bool {
	cond := run.GetCond(PredictionPipelineRunReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseRunning)
}

func (run *CronPrediction) IsFailed() bool {
	cond := run.GetCond(PredictionPipelineRunReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseFailed)
}
