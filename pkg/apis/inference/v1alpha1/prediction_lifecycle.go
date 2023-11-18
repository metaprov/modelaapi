package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (prediction *Prediction) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

/////// Finalizers ///////

func (prediction *Prediction) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *Prediction) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *Prediction) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

/////// Condition Functions ///////

func (prediction *Prediction) CreateOrUpdateCondition(condition metav1.Condition) {
	i := prediction.GetConditionIndex(PredictionConditionType(condition.Type))
	now := metav1.Now()
	if i == -1 { // not found
		condition.LastTransitionTime = now
		prediction.Status.Conditions = append(prediction.Status.Conditions, condition)
		return
	}
	// else we already have the condition, update it
	current := prediction.Status.Conditions[i]
	current.Message = condition.Message
	current.Reason = condition.Reason
	current.LastTransitionTime = now
	if current.Status != condition.Status {
		current.Status = condition.Status
	}
	prediction.Status.Conditions[i] = current
}

func (prediction *Prediction) GetConditionIndex(conditionType PredictionConditionType) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == string(conditionType) {
			return i
		}
	}
	return -1
}

func (prediction *Prediction) GetCondition(conditionType PredictionConditionType) metav1.Condition {
	for _, v := range prediction.Status.Conditions {
		if v.Type == string(conditionType) {
			return v
		}
	}

	return metav1.Condition{
		Type:    string(conditionType),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (prediction Prediction) Saved() bool {
	return prediction.GetCondition(PredictionSaved).Status == metav1.ConditionTrue
}

func (prediction *Prediction) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *Prediction) ManifestURI() string {
	return fmt.Sprintf("%s/manifest.json", prediction.RootURI())
}

func (prediction *Prediction) Deleted() bool {
	return !prediction.ObjectMeta.DeletionTimestamp.IsZero()
}

/////// Saved Condition ///////

func (prediction *Prediction) MarkNotSaved() {
	prediction.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionSaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (prediction *Prediction) MarkSaved() {
	prediction.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionSaved),
		Status: metav1.ConditionTrue,
		Reason: string(PredictionSaved),
	})
}

/////// Reconciler Methods ///////

func (prediction *Prediction) GetStatus() proto.Message {
	return &prediction.Status
}

func (prediction *Prediction) GetObservedGeneration() int64 {
	return prediction.Status.ObservedGeneration
}

func (prediction *Prediction) SetObservedGeneration(generation int64) {
	prediction.Status.ObservedGeneration = generation
}

func (prediction *Prediction) SetUpdatedAt(time *metav1.Time) {
	prediction.Status.UpdatedAt = time
}

func (prediction *Prediction) SetStatus(status interface{}) {
	prediction.Status = *status.(*PredictionStatus)
}
