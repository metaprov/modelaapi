package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/genai"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

/////// Finalizers ///////

func (llm *LLM) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(llm).
		Complete()
}

func (llm *LLM) HasFinalizer() bool { return util.HasFin(&llm.ObjectMeta, genai.GroupName) }
func (llm *LLM) AddFinalizer()      { util.AddFin(&llm.ObjectMeta, genai.GroupName) }
func (llm *LLM) RemoveFinalizer()   { util.RemoveFin(&llm.ObjectMeta, genai.GroupName) }

/////// Conditions ///////

func (llm *LLM) CreateOrUpdateCondition(cond metav1.Condition) {
	i := llm.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		llm.Status.Conditions = append(llm.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := llm.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	llm.Status.Conditions[i] = current
}

func (llm *LLM) GetConditionIndex(t string) int {
	for i, v := range llm.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (llm *LLM) GetCondition(condType LLMConditionType) metav1.Condition {
	for _, v := range llm.Status.Conditions {
		if v.Type == string(condType) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(condType),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (llm *LLM) Deleted() bool {
	return !llm.ObjectMeta.DeletionTimestamp.IsZero()
}

func (llm *LLM) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/llms/%s", llm.Namespace, llm.Name)
}

/////// Saved Condition ///////

func (llm *LLM) Saved() bool {
	return llm.GetCondition(LLMSaved).Status == metav1.ConditionTrue
}

func (llm *LLM) MarkNotSaved() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMSaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (llm *LLM) MarkSaved() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMSaved),
		Status: metav1.ConditionTrue,
		Reason: string(LLMSaved),
	})
}

/////// Deployed Condition ///////

func (llm *LLM) Deployed() bool {
	return llm.GetCondition(LLMDeployed).Status == metav1.ConditionTrue
}

func (llm *LLM) Deploying() bool {
	return llm.GetCondition(LLMDeployed).Reason == DeployingReason
}

func (llm *LLM) MarkNotDeployed() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMDeployed),
		Status: metav1.ConditionFalse,
		Reason: DeployingReason,
	})
}

func (llm *LLM) MarkDeployed() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMDeployed),
		Status: metav1.ConditionTrue,
		Reason: string(LLMDeployed),
	})
}

func (llm *LLM) MarkDeploying() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMDeployed),
		Status: metav1.ConditionTrue,
		Reason: "Deploying",
	})
}

func (llm *LLM) MarkDeployFailed(reason string, msg string) {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(LLMDeployed),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
}

/////// Alert Methods ///////

func (llm *LLM) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("LLM %s failed with error: %v", llm.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: llm.Name,
			Namespace:    llm.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      subject,
			Level:        &level,
			Notification: notification,
			EntityRef: v1.ObjectReference{
				Kind:      "LLM",
				Name:      llm.Name,
				Namespace: llm.Namespace,
			},
			Owner: llm.Spec.Owner,
			Fields: map[string]string{
				"Start Time": llm.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	return result
}

/////// Reconciler Methods ///////

func (llm *LLM) GetStatus() proto.Message {
	return &llm.Status
}

func (llm *LLM) GetObservedGeneration() int64 {
	return llm.Status.ObservedGeneration
}

func (llm *LLM) SetObservedGeneration(generation int64) {
	llm.Status.ObservedGeneration = generation
}

func (llm *LLM) SetUpdatedAt(time *metav1.Time) {
	llm.Status.UpdatedAt = time
}

func (llm *LLM) SetStatus(status interface{}) {
	llm.Status = *status.(*LLMStatus)
}
