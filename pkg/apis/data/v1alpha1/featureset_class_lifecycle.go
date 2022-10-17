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

func (feature *FeaturesetClass) AddConfiditions() {
	feature.Status.Conditions = make([]FeaturesetClassCondition, 1)
	feature.Status.Conditions[0] = FeaturesetClassCondition{
		Type:   FeaturesetClassReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *FeaturesetClass) HasFinalizer() bool {
	return util.HasFin(&feature.ObjectMeta, data.GroupName)
}
func (feature *FeaturesetClass) AddFinalizer() { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *FeaturesetClass) RemoveFinalizer() {
	util.RemoveFin(&feature.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (feature *FeaturesetClass) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, feature.ObjectMeta.Name), nil
}

func (feature *FeaturesetClass) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", feature.ObjectMeta.Name), nil
}

func (feature *FeaturesetClass) Age() string {
	return humanize.Time(feature.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *FeaturesetClass) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *FeaturesetClass) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *FeaturesetClass) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *FeaturesetClass) CreateOrUpdateCond(cond FeaturesetClassCondition) {
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

func (feature *FeaturesetClass) GetCondIdx(t FeaturesetClassConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *FeaturesetClass) GetCond(t FeaturesetClassConditionType) FeaturesetClassCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeaturesetClassCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (feature *FeaturesetClass) IsReady() bool {
	return feature.GetCond(FeaturesetClassReady).Status == v1.ConditionTrue
}

func (feature *FeaturesetClass) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeaturesetClassYaml(content []byte) (*FeaturesetClass, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeaturesetClass)
	return r, nil
}

func (pipeline *FeaturesetClass) MarkReady() {
	// update the lab state to ready
	pipeline.CreateOrUpdateCond(FeaturesetClassCondition{
		Type:   FeaturesetClassReady,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeaturesetClass) MarkArchived() {
	pipeline.CreateOrUpdateCond(FeaturesetClassCondition{
		Type:   FeaturesetClassSaved,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeaturesetClass) Archived() bool {
	return pipeline.GetCond(FeaturesetClassSaved).Status == v1.ConditionTrue
}
