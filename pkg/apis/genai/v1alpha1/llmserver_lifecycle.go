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

func (llm *LLMServer) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(llm).
		Complete()
}

func (llm *LLMServer) HasFinalizer() bool { return util.HasFin(&llm.ObjectMeta, genai.GroupName) }
func (llm *LLMServer) AddFinalizer()      { util.AddFin(&llm.ObjectMeta, genai.GroupName) }
func (llm *LLMServer) RemoveFinalizer()   { util.RemoveFin(&llm.ObjectMeta, genai.GroupName) }

/////// Conditions ///////

func (llm *LLMServer) CreateOrUpdateCondition(cond metav1.Condition) {
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

func (llm *LLMServer) GetConditionIndex(t string) int {
	for i, v := range llm.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (llm *LLMServer) GetCondition(condType LLMServerConditionType) metav1.Condition {
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

func (llm *LLMServer) Deleted() bool {
	return !llm.ObjectMeta.DeletionTimestamp.IsZero()
}

func (llm *LLMServer) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/llms/%s", llm.Namespace, llm.Name)
}

/////// Saved Condition ///////

func (llm *LLMServer) Saved() bool {
	return llm.GetCondition(LLMServerSaved).Status == metav1.ConditionTrue
}

func (llm *LLMServer) MarkNotSaved() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMServerSaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (llm *LLMServer) MarkSaved() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMServerSaved),
		Status: metav1.ConditionTrue,
		Reason: string(LLMServerSaved),
	})
}

/////// Deployed Condition ///////

func (llm *LLMServer) Deployed() bool {
	return llm.GetCondition(LLMServerDeployed).Status == metav1.ConditionTrue
}

func (llm *LLMServer) Deploying() bool {
	return llm.GetCondition(LLMServerDeployed).Reason == DeployingReason
}

func (llm *LLMServer) MarkNotDeployed() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMServerDeployed),
		Status: metav1.ConditionFalse,
		Reason: DeployingReason,
	})
}

func (llm *LLMServer) MarkDeployed() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMServerDeployed),
		Status: metav1.ConditionTrue,
		Reason: string(LLMServerDeployed),
	})
}

func (llm *LLMServer) MarkDeploying() {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(LLMServerDeployed),
		Status: metav1.ConditionTrue,
		Reason: "Deploying",
	})
}

func (llm *LLMServer) MarkDeployFailed(reason string, msg string) {
	llm.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(LLMServerDeployed),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
}

/////// Alert Methods ///////

func (llm *LLMServer) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("LLMServer %s failed with error: %v", llm.Name, err.Error())
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
				Kind:      "LLMServer",
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

func (llm *LLMServer) GetStatus() proto.Message {
	return &llm.Status
}

func (llm *LLMServer) GetObservedGeneration() int64 {
	return llm.Status.ObservedGeneration
}

func (llm *LLMServer) SetObservedGeneration(generation int64) {
	llm.Status.ObservedGeneration = generation
}

func (llm *LLMServer) SetUpdatedAt(time *metav1.Time) {
	llm.Status.UpdatedAt = time
}

func (llm *LLMServer) SetStatus(status interface{}) {
	llm.Status = *status.(*LLMStatus)
}
