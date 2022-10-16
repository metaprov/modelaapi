/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//==============================================================================
// Featureset
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

func (entity *Featureset) HasFinalizer() bool {
	return util.HasFin(&entity.ObjectMeta, data.GroupName)
}
func (entity *Featureset) AddFinalizer()    { util.AddFin(&entity.ObjectMeta, data.GroupName) }
func (entity *Featureset) RemoveFinalizer() { util.RemoveFin(&entity.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (entity *Featureset) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, entity.ObjectMeta.Name), nil
}

func (entity *Featureset) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", entity.ObjectMeta.Name), nil
}

func (entity *Featureset) Age() string {
	return humanize.Time(entity.CreationTimestamp.Time)
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (entity *Featureset) LabelWithCommit(commit string, uname string, branch string) {
	entity.ObjectMeta.Labels[common.CommitLabelKey] = commit
	entity.ObjectMeta.Labels[common.UnameLabelKey] = uname
	entity.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (entity *Featureset) IsGitObj() bool {
	label, ok := entity.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (entity *Featureset) SetChanged() {
	entity.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
func (entity *Featureset) CreateOrUpdateCond(cond FeaturesetCondition) {
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

func (entity *Featureset) GetCondIdx(t FeaturesetConditionType) int {
	for i, v := range entity.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (entity *Featureset) GetCond(t FeaturesetConditionType) FeaturesetCondition {
	for _, v := range entity.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeaturesetCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (entity *Featureset) IsReady() bool {
	return entity.GetCond(FeaturesetReady).Status == v1.ConditionTrue
}

func (entity *Featureset) Key() string {
	return fmt.Sprintf("%s/%s/%s", "entities", entity.Namespace, entity.Name)
}

func (fset *Featureset) MarkReady() {
	// update the lab state to ready
	fset.CreateOrUpdateCond(FeaturesetCondition{
		Type:   FeaturesetReady,
		Status: v1.ConditionTrue,
	})
}

func (fset *Featureset) MarkArchived() {
	fset.CreateOrUpdateCond(FeaturesetCondition{
		Type:   FeaturesetSaved,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *Featureset) Archived() bool {
	return pipeline.GetCond(FeaturesetSaved).Status == v1.ConditionTrue
}
