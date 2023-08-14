/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
	"strconv"
)

func (dataset *Dataset) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(dataset).
		Complete()
}

func (dataset *Dataset) HasFinalizer() bool { return util.HasFin(&dataset.ObjectMeta, data.GroupName) }
func (dataset *Dataset) AddFinalizer()      { util.AddFin(&dataset.ObjectMeta, data.GroupName) }
func (dataset *Dataset) RemoveFinalizer()   { util.RemoveFin(&dataset.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (dataset *Dataset) CreateOrUpdateCondition(cond metav1.Condition) {
	i := dataset.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		dataset.Status.Conditions = append(dataset.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := dataset.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	dataset.Status.Conditions[i] = current
}

func (dataset *Dataset) GetConditionIndex(t string) int {
	for i, v := range dataset.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (dataset *Dataset) GetCondition(condType DatasetConditionType) metav1.Condition {
	for _, v := range dataset.Status.Conditions {
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

func (dataset *Dataset) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/datasets/%s/versions/%s", dataset.Namespace, dataset.Name, strconv.Itoa(int(dataset.Status.Version)))
}

func ParseDatasetYaml(content []byte) (*Dataset, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Dataset)
	return r, nil
}

func (dataset *Dataset) Deleted() bool {
	return !dataset.ObjectMeta.DeletionTimestamp.IsZero()
}

func (dataset *Dataset) IsGroup() bool {
	return dataset.Spec.Task == catalog.PartitionForecast
}

func (dataset *Dataset) IsFeatureGroup() bool {
	return dataset.Spec.Role == DatasetRoleFeatureGroup
}

/////// Saved Condition ///////

func (dataset *Dataset) Saved() bool {
	return dataset.GetCondition(DatasetSaved).Status == metav1.ConditionTrue
}

func (dataset *Dataset) MarkNotSaved() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (dataset *Dataset) MarkSaved() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSaved),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSaved),
	})
}

/////// Reconciler Methods ///////

func (dataset *Dataset) GetStatus() proto.Message {
	return &dataset.Status
}

func (dataset *Dataset) GetObservedGeneration() int64 {
	return dataset.Status.ObservedGeneration
}

func (dataset *Dataset) SetObservedGeneration(generation int64) {
	dataset.Status.ObservedGeneration = generation
}

func (dataset *Dataset) SetUpdatedAt(time *metav1.Time) {
	dataset.Status.UpdatedAt = time
}

func (dataset *Dataset) SetStatus(status interface{}) {
	dataset.Status = *status.(*DatasetStatus)
}
