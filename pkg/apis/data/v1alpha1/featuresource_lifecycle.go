/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//==============================================================================
// FeatureSource
//==============================================================================

import (
	"fmt"
	"github.com/dustin/go-humanize"

	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (entity *FeatureSource) HasFinalizer() bool {
	return util.HasFin(&entity.ObjectMeta, data.GroupName)
}
func (entity *FeatureSource) AddFinalizer()    { util.AddFin(&entity.ObjectMeta, data.GroupName) }
func (entity *FeatureSource) RemoveFinalizer() { util.RemoveFin(&entity.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (entity *FeatureSource) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, entity.ObjectMeta.Name), nil
}

func (entity *FeatureSource) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", entity.ObjectMeta.Name), nil
}

func (entity *FeatureSource) Age() string {
	return humanize.Time(entity.CreationTimestamp.Time)
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (entity *FeatureSource) LabelWithCommit(commit string, uname string, branch string) {
	entity.ObjectMeta.Labels[common.CommitLabelKey] = commit
	entity.ObjectMeta.Labels[common.UnameLabelKey] = uname
	entity.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (entity *FeatureSource) IsGitObj() bool {
	label, ok := entity.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (entity *FeatureSource) SetChanged() {
	entity.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
func (entity *FeatureSource) CreateOrUpdateCond(cond FeatureSourceCondition) {
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

func (entity *FeatureSource) GetCondIdx(t FeatureSourceConditionType) int {
	for i, v := range entity.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (entity *FeatureSource) GetCond(t FeatureSourceConditionType) FeatureSourceCondition {
	for _, v := range entity.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeatureSourceCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (entity *FeatureSource) IsReady() bool {
	return entity.GetCond(FeatureSourceReady).Status == v1.ConditionTrue
}

func (entity *FeatureSource) Key() string {
	return fmt.Sprintf("%s/%s/%s", "entities", entity.Namespace, entity.Name)
}

func (fset *FeatureSource) MarkReady() {
	// update the lab state to ready
	fset.CreateOrUpdateCond(FeatureSourceCondition{
		Type:   FeatureSourceReady,
		Status: v1.ConditionTrue,
	})
}

func (fset *FeatureSource) MarkArchived() {
	fset.CreateOrUpdateCond(FeatureSourceCondition{
		Type:   FeatureSourceSaved,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeatureSource) Archived() bool {
	return pipeline.GetCond(FeatureSourceSaved).Status == v1.ConditionTrue
}
