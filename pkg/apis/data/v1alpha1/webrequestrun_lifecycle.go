package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (prediction *WebRequestRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

const WebQueryLabelKey = "sqlquery"

//==============================================================================
// Keys
//==============================================================================

func (prediction *WebRequestRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *WebRequestRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", prediction.RootUri(), prediction.Name)
}

//==============================================================================
// Validate
//==============================================================================

func (prediction *WebRequestRun) WebQueryName() string {
	return prediction.ObjectMeta.Labels[WebQueryLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (prediction *WebRequestRun) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *WebRequestRun) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *WebRequestRun) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (prediction *WebRequestRun) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, prediction.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (prediction *WebRequestRun) CreateOrUpdateCond(cond WebRequestRunCondition) {
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

func (prediction *WebRequestRun) GetCondIdx(t WebRequestRunConditionType) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (prediction *WebRequestRun) GetCond(t WebRequestRunConditionType) WebRequestRunCondition {
	for _, v := range prediction.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return WebRequestRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (prediction *WebRequestRun) IsCompleted() bool {
	return prediction.GetCond(WebRequestRunCompleted).Status == v1.ConditionTrue
}

func (prediction *WebRequestRun) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func ParseWebRequestRunYaml(content []byte) (*WebRequestRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*WebRequestRun)
	return r, nil
}

func (prediction *WebRequestRun) MarkFailed(msg string) {
	prediction.CreateOrUpdateCond(WebRequestRunCondition{
		Type:    WebRequestRunCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: msg,
	})
	now := metav1.Now()
	if prediction.Status.EndTime == nil {
		prediction.Status.EndTime = &now
	}
	prediction.Status.FailureMessage = util.StrPtr(msg)
}

func (prediction *WebRequestRun) MarkCompleted() {
	prediction.CreateOrUpdateCond(WebRequestRunCondition{
		Type:   WebRequestRunCompleted,
		Status: v1.ConditionTrue,
	})
	prediction.Status.Phase = WebRequestRunPhaseCompleted
	now := metav1.Now()
	if prediction.Status.EndTime == nil {
		prediction.Status.EndTime = &now
	}
}

func (prediction *WebRequestRun) OpName() string {
	return prediction.Namespace + "-" + prediction.Name
}

func (version *WebRequestRun) MarkSaved() {
	version.CreateOrUpdateCond(WebRequestRunCondition{
		Type:   WebRequestRunSaved,
		Status: v1.ConditionTrue,
	})
}

func (version *WebRequestRun) IsSaved() bool {
	return version.GetCond(WebRequestRunSaved).Status == v1.ConditionTrue
}

func (run *WebRequestRun) MarkRunning() {
	run.CreateOrUpdateCond(WebRequestRunCondition{
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
	run.Status.Phase = WebRequestRunPhaseRunning
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.StartTime = &now
	}
}

// Generate a dataset completion alert
func (run *WebRequestRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Web request run %s completed successfully", run.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "WebRequestRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = run.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (run *WebRequestRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Web request run %s failed with error %v", run.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "WebRequestRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = run.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (in *WebRequestRun) IsFailed() bool {
	cond := in.GetCond(WebRequestRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(WebRequestRunCompleted)
}

// Return the state of the run as RunStatus
func (run *WebRequestRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: run.Status.EndTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	result.Status = string(run.Status.Phase)
	return result

}
