/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/dustin/go-humanize"
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

//==============================================================================
// EntityRef
//==============================================================================

func (feature *FeatureGroup) AddConfiditions() {
	feature.Status.Conditions = make([]FeatureGroupCondition, 1)
	feature.Status.Conditions[0] = FeatureGroupCondition{
		Type:   FeatureGroupReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *FeatureGroup) HasFinalizer() bool {
	return util.HasFin(&feature.ObjectMeta, data.GroupName)
}
func (feature *FeatureGroup) AddFinalizer() { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *FeatureGroup) RemoveFinalizer() {
	util.RemoveFin(&feature.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (feature *FeatureGroup) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, feature.ObjectMeta.Name), nil
}

func (feature *FeatureGroup) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", feature.ObjectMeta.Name), nil
}

func (feature *FeatureGroup) Age() string {
	return humanize.Time(feature.CreationTimestamp.Time)
}

///////////////////////////////////////////////
// Sync
//////////////////////////////////////////////
func (fg *FeatureGroup) MarkSynching() {
	fg.Status.Phase = FeatureGroupPhaseSyncing
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionFalse,
		Reason: "Synching",
	})
}

func (mclass *FeatureGroup) MarkSynced() {
	mclass.Status.Phase = FeatureGroupPhaseSynced
	mclass.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionTrue,
	})
}

func (mclass *FeatureGroup) MarkGeneratingOnlineDataset() {
	mclass.Status.Phase = FeatureGroupPhaseGeneratingOnlineDataset
	mclass.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionFalse,
		Reason: "GeneratingOnlineDataset",
	})
}

func (mclass *FeatureGroup) MarkGeneratedOnlineDataset() {
	mclass.Status.Phase = FeatureGroupPhaseOnlineDatasetGenerated
	mclass.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionFalse,
		Reason: "GeneratedOnlineDataset",
	})
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *FeatureGroup) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *FeatureGroup) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *FeatureGroup) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *FeatureGroup) CreateOrUpdateCond(cond FeatureGroupCondition) {
	i := feature.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		feature.Status.Conditions = append(feature.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := feature.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	feature.Status.Conditions[i] = current
}

func (feature *FeatureGroup) GetCondIdx(t FeatureGroupConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *FeatureGroup) GetCond(t FeatureGroupConditionType) FeatureGroupCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeatureGroupCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (feature *FeatureGroup) IsReady() bool {
	return feature.GetCond(FeatureGroupReady).Status == v1.ConditionTrue
}

func (feature *FeatureGroup) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeatureGroupYaml(content []byte) (*FeatureGroup, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeatureGroup)
	return r, nil
}

func (pipeline *FeatureGroup) MarkReady() {
	// update the lab state to ready
	pipeline.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupReady,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeatureGroup) MarkArchived() {
	pipeline.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSaved,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeatureGroup) Archived() bool {
	return pipeline.GetCond(FeatureGroupSaved).Status == v1.ConditionTrue
}
