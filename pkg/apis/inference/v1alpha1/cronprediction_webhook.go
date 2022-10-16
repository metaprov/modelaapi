package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"

	"github.com/metaprov/modelaapi/pkg/apis/inference"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
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
	return run.GetCond(CronPredictionReady).Status == v1.ConditionTrue
}

func (run *CronPrediction) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", run.Namespace, run.Name)
}

func (run *CronPrediction) OpName() string {
	return run.Namespace + "-" + run.Name
}

func (run *CronPrediction) MarkSaved() {
	run.CreateOrUpdateCond(CronPredictionCondition{
		Type:   CronPredictionSaved,
		Status: v1.ConditionTrue,
	})
}

func (run *CronPrediction) IsSaved() bool {
	return run.GetCond(CronPredictionSaved).Status == v1.ConditionTrue
}

func (run *CronPrediction) MarkReady() {
	run.CreateOrUpdateCond(CronPredictionCondition{
		Type:   CronPredictionReady,
		Status: v1.ConditionTrue,
	})
}

func (run *CronPrediction) IsCompleted() bool {
	return run.GetCond(CronPredictionReady).Status == v1.ConditionTrue
}

func (run *CronPrediction) IsRunning() bool {
	cond := run.GetCond(CronPredictionReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseRunning)
}

func (run *CronPrediction) IsFailed() bool {
	cond := run.GetCond(CronPredictionReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseFailed)
}

// defaulting
var _ webhook.Defaulter = &CronPrediction{}

func (pre *CronPrediction) Default() {

}

// validation
var _ webhook.Validator = &CronPrediction{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (prediction *CronPrediction) ValidateCreate() error {
	return prediction.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (prediction *CronPrediction) ValidateUpdate(old runtime.Object) error {
	return prediction.validate()
}

func (prediction *CronPrediction) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modela.ai", Kind: "Prediction"},
		prediction.Name, allErrs)
}

func (prediction *CronPrediction) ValidateDelete() error {
	return nil
}

func (prediction *CronPrediction) UpdateRunStatus(run Prediction) {

}
