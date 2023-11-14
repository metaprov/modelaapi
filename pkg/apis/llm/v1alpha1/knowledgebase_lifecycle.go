package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

/////// Finalizers ///////

func (kb *KnowledgeBase) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(kb).
		Complete()
}

func (kb *KnowledgeBase) HasFinalizer() bool { return util.HasFin(&kb.ObjectMeta, data.GroupName) }
func (kb *KnowledgeBase) AddFinalizer()      { util.AddFin(&kb.ObjectMeta, data.GroupName) }
func (kb *KnowledgeBase) RemoveFinalizer()   { util.RemoveFin(&kb.ObjectMeta, data.GroupName) }

/////// Conditions ///////

func (kb *KnowledgeBase) CreateOrUpdateCondition(cond metav1.Condition) {
	i := kb.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		kb.Status.Conditions = append(kb.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := kb.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	kb.Status.Conditions[i] = current
}

func (kb *KnowledgeBase) GetConditionIndex(t string) int {
	for i, v := range kb.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (kb *KnowledgeBase) GetCondition(condType KnowledgeBaseConditionType) metav1.Condition {
	for _, v := range kb.Status.Conditions {
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

func (kb *KnowledgeBase) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/knowledgebases/%s", kb.Namespace, kb.Name)
}

/////// Saved Condition ///////

func (kb *KnowledgeBase) Saved() bool {
	return kb.GetCondition(KnowledgeBaseSaved).Status == metav1.ConditionTrue
}

func (kb *KnowledgeBase) MarkNotSaved() {
	kb.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(KnowledgeBaseSaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (kb *KnowledgeBase) MarkSaved() {
	kb.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(KnowledgeBaseSaved),
		Status: metav1.ConditionTrue,
		Reason: string(KnowledgeBaseSaved),
	})
}

/////// Refreshed Condition ///////

func (kb *KnowledgeBase) Refreshed() bool {
	return kb.GetCondition(KnowledgeBaseRefreshed).Status == metav1.ConditionTrue
}

func (kb *KnowledgeBase) MarkNotRefreshed() {
	kb.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(KnowledgeBaseRefreshed),
		Status: metav1.ConditionFalse,
		Reason: "Refreshing",
	})
}

func (kb *KnowledgeBase) MarkRefreshed() {
	kb.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(KnowledgeBaseRefreshed),
		Status: metav1.ConditionTrue,
		Reason: string(KnowledgeBaseRefreshed),
	})
}

/////// Reconciler Methods ///////

func (kb *KnowledgeBase) GetStatus() proto.Message {
	return &kb.Status
}

func (kb *KnowledgeBase) GetObservedGeneration() int64 {
	return kb.Status.ObservedGeneration
}

func (kb *KnowledgeBase) SetObservedGeneration(generation int64) {
	kb.Status.ObservedGeneration = generation
}

func (kb *KnowledgeBase) SetUpdatedAt(time *metav1.Time) {
	kb.Status.UpdatedAt = time
}

func (kb *KnowledgeBase) SetStatus(status interface{}) {
	kb.Status = *status.(*KnowledgeBaseStatus)
}
