package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/genai"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

/////// Finalizers ///////

func (akg *APIKeyGroup) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(akg).
		Complete()
}

func (akg *APIKeyGroup) HasFinalizer() bool { return util.HasFin(&akg.ObjectMeta, genai.GroupName) }
func (akg *APIKeyGroup) AddFinalizer()      { util.AddFin(&akg.ObjectMeta, genai.GroupName) }
func (akg *APIKeyGroup) RemoveFinalizer()   { util.RemoveFin(&akg.ObjectMeta, genai.GroupName) }

/////// Conditions ///////

func (akg *APIKeyGroup) CreateOrUpdateCondition(cond metav1.Condition) {
	i := akg.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		akg.Status.Conditions = append(akg.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := akg.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	akg.Status.Conditions[i] = current
}

func (akg *APIKeyGroup) GetConditionIndex(t string) int {
	for i, v := range akg.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (akg *APIKeyGroup) GetCondition(condType APIKeyGroupConditionType) metav1.Condition {
	for _, v := range akg.Status.Conditions {
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

func (akg *APIKeyGroup) Deleted() bool {
	return !akg.ObjectMeta.DeletionTimestamp.IsZero()
}

func (akg *APIKeyGroup) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/apikeygroups/%s", akg.Namespace, akg.Name)
}

/////// Saved Condition ///////

func (akg *APIKeyGroup) Saved() bool {
	return akg.GetCondition(APIKeyGroupSaved).Status == metav1.ConditionTrue
}

func (akg *APIKeyGroup) MarkNotSaved() {
	akg.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(APIKeyGroupSaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (akg *APIKeyGroup) MarkSaved() {
	akg.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(APIKeyGroupSaved),
		Status: metav1.ConditionTrue,
		Reason: string(APIKeyGroupSaved),
	})
}

/////// Reconciler Methods ///////

func (akg *APIKeyGroup) GetStatus() proto.Message {
	return &akg.Status
}

func (akg *APIKeyGroup) GetObservedGeneration() int64 {
	return akg.Status.ObservedGeneration
}

func (akg *APIKeyGroup) SetObservedGeneration(generation int64) {
	akg.Status.ObservedGeneration = generation
}

func (akg *APIKeyGroup) SetUpdatedAt(time *metav1.Time) {
	akg.Status.UpdatedAt = time
}

func (akg *APIKeyGroup) SetStatus(status interface{}) {
	akg.Status = *status.(*APIKeyGroupStatus)
}
