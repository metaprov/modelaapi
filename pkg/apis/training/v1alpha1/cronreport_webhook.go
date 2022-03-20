package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"

	"github.com/metaprov/modelaapi/pkg/apis/inference"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
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

func (run *CronReport) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(run).
		Complete()
}

//==============================================================================
// Keys
//==============================================================================

func (run *CronReport) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/reports/%s", run.Namespace, run.Name)
}

func (run *CronReport) ManifestUri() string {
	return fmt.Sprintf("%s/%s-run.yaml", run.RootUri(), run.Name)
}

//==============================================================================
// Validate
//==============================================================================

func (run *CronReport) PipelineName() string {
	return run.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (run *CronReport) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, inference.GroupName)
}
func (run *CronReport) AddFinalizer() {
	util.AddFin(&run.ObjectMeta, inference.GroupName)
}
func (run *CronReport) RemoveFinalizer() {
	util.RemoveFin(&run.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (run *CronReport) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/reports/%s.yaml", root, run.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (run *CronReport) CreateOrUpdateCond(cond CronReportCondition) {
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

func (run *CronReport) GetCondIdx(t CronReportConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *CronReport) GetCond(t CronReportConditionType) CronReportCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return CronReportCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (run *CronReport) IsReady() bool {
	return run.GetCond(CronReportReady).Status == v1.ConditionTrue
}

func (run *CronReport) Key() string {
	return fmt.Sprintf("dataproducts/%s/reports/%s", run.Namespace, run.Name)
}

func (run *CronReport) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}
func (run *CronReport) OpName() string {
	return run.Namespace + "-" + run.Name
}

func (run *CronReport) MarkSaved() {
	run.CreateOrUpdateCond(CronReportCondition{
		Type:   CronReportSaved,
		Status: v1.ConditionTrue,
	})
}

func (run *CronReport) IsSaved() bool {
	return run.GetCond(CronReportSaved).Status == v1.ConditionTrue
}

func (run *CronReport) MarkReady() {
	run.CreateOrUpdateCond(CronReportCondition{
		Type:   CronReportReady,
		Status: v1.ConditionTrue,
	})
}

func (run *CronReport) IsCompleted() bool {
	return run.GetCond(CronReportReady).Status == v1.ConditionTrue
}

func (run *CronReport) IsRunning() bool {
	cond := run.GetCond(CronReportReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseRunning)
}

func (run *CronReport) IsFailed() bool {
	cond := run.GetCond(CronReportReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(v1alpha1.FeaturePipelineRunPhaseFailed)
}

// defaulting
var _ webhook.Defaulter = &CronReport{}

func (pre *CronReport) Default() {

}

// validation
var _ webhook.Validator = &CronReport{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (report *CronReport) ValidateCreate() error {
	return report.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (report *CronReport) ValidateUpdate(old runtime.Object) error {
	return report.validate()
}

func (report *CronReport) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modela.ai", Kind: "Report"},
		report.Name, allErrs)
}

func (report *CronReport) ValidateDelete() error {
	return nil
}

func (in *CronReport) UpdateRunStatus(run Report) {

}
