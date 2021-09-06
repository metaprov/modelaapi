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

	"github.com/dustin/go-humanize"
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (entity *Entity) HasFinalizer() bool { return util.HasFin(&entity.ObjectMeta, data.GroupName) }
func (entity *Entity) AddFinalizer()      { util.AddFin(&entity.ObjectMeta, data.GroupName) }
func (entity *Entity) RemoveFinalizer()   { util.RemoveFin(&entity.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (entity *Entity) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, entity.ObjectMeta.Name), nil
}

func (entity *Entity) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(entity)
}

func (entity *Entity) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", entity.ObjectMeta.Name), nil
}

func (entity *Entity) Age() string {
	return humanize.Time(entity.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

// Parse an data
func ParseEntity(content string) (*Entity, error) {
	this := &Entity{}
	err := yaml.Unmarshal([]byte(content), this)
	if err != nil {
		return nil, err
	}
	return this, nil
}

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
func (entity *Entity) CreateOrUpdateCond(cond EntityCondition) {
	i := entity.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		entity.Status.Conditions = append(entity.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := entity.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	entity.Status.Conditions[i] = current
}

func (entity *Entity) GetCondIdx(t EntityConditionType) int {
	for i, v := range entity.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (entity *Entity) GetCond(t EntityConditionType) EntityCondition {
	for _, v := range entity.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return EntityCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (entity *Entity) IsReady() bool {
	return entity.GetCond(EntityReady).Status == v1.ConditionTrue
}

func (entity *Entity) Key() string {
	return fmt.Sprintf("%s/%s/%s", "entities", entity.Namespace, entity.Name)
}

//Set up the webhook with the manager.
func (r *Entity) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (entity *Entity) MarkReady() {
	// update the lab state to ready
	entity.CreateOrUpdateCond(EntityCondition{
		Type:   EntityReady,
		Status: v1.ConditionTrue,
	})
}

func (entity *Entity) MarkArchived() {
	entity.CreateOrUpdateCond(EntityCondition{
		Type:   EntitySaved,
		Status: v1.ConditionTrue,
	})
}

func (entity *Entity) Archived() bool {
	return entity.GetCond(EntitySaved).Status == v1.ConditionTrue
}
