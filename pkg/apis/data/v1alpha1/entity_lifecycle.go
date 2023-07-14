/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//==============================================================================
// EntityRef
//==============================================================================

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (entity Entity) HasFinalizer() bool { return util.HasFin(&entity.ObjectMeta, data.GroupName) }
func (entity *Entity) AddFinalizer()     { util.AddFin(&entity.ObjectMeta, data.GroupName) }
func (entity *Entity) RemoveFinalizer()  { util.RemoveFin(&entity.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (entity Entity) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, entity.ObjectMeta.Name), nil
}

func (entity Entity) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", entity.ObjectMeta.Name), nil
}

//==============================================================================
// Factory method
//==============================================================================

//==============================================================================
// Assign commit and id
//==============================================================================

func (entity *Entity) LabelWithCommit(commit string, uname string, branch string) {
	entity.ObjectMeta.Labels[common.CommitLabelKey] = commit
	entity.ObjectMeta.Labels[common.UnameLabelKey] = uname
	entity.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (entity *Entity) IsGitObj() bool {
	label, ok := entity.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (entity *Entity) SetChanged() {
	entity.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
func (entity *Entity) CreateOrUpdateCond(cond metav1.Condition) {
	i := entity.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		entity.Status.Conditions = append(entity.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := entity.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	entity.Status.Conditions[i] = current
}

func (entity *Entity) GetCondIdx(t string) int {
	for i, v := range entity.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (entity *Entity) GetCond(t string) metav1.Condition {
	for _, v := range entity.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (entity Entity) IsReady() bool {
	return entity.GetCond(EntityReady).Status == metav1.ConditionTrue
}

func (entity Entity) Key() string {
	return fmt.Sprintf("%s/%s/%s", "entities", entity.Namespace, entity.Name)
}

// Set up the webhook with the manager.
func (entity *Entity) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(entity).
		Complete()
}

func (entity *Entity) MarkReady() {
	// update the lab state to ready
	entity.CreateOrUpdateCond(metav1.Condition{
		Type:   EntityReady,
		Status: metav1.ConditionTrue,
		Reason: EntityReady,
	})
}

func (entity Entity) GetStatus() proto.Message {
	return &entity.Status
}

func (entity Entity) GetObservedGeneration() int64 {
	return entity.Status.ObservedGeneration
}

func (entity Entity) SetObservedGeneration(generation int64) {
	entity.Status.ObservedGeneration = generation
}

func (entity Entity) SetUpdatedAt(time *metav1.Time) {
	entity.Status.UpdatedAt = time
}

func (entity *Entity) SetStatus(status interface{}) {
	entity.Status = *status.(*EntityStatus)
}
