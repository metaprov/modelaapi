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

func (feature *FeatureView) AddConfiditions() {
	feature.Status.Conditions = make([]FeatureViewCondition, 1)
	feature.Status.Conditions[0] = FeatureViewCondition{
		Type:   FeatureViewReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *FeatureView) HasFinalizer() bool {
	return util.HasFin(&feature.ObjectMeta, data.GroupName)
}
func (feature *FeatureView) AddFinalizer() { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *FeatureView) RemoveFinalizer() {
	util.RemoveFin(&feature.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (feature *FeatureView) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, feature.ObjectMeta.Name), nil
}

func (feature *FeatureView) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", feature.ObjectMeta.Name), nil
}

func (feature *FeatureView) Age() string {
	return humanize.Time(feature.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *FeatureView) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *FeatureView) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *FeatureView) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *FeatureView) CreateOrUpdateCond(cond FeatureViewCondition) {
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

func (feature *FeatureView) GetCondIdx(t FeatureViewConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *FeatureView) GetCond(t FeatureViewConditionType) FeatureViewCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeatureViewCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (feature *FeatureView) IsReady() bool {
	return feature.GetCond(FeatureViewReady).Status == v1.ConditionTrue
}

func (feature *FeatureView) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeatureViewYaml(content []byte) (*FeatureView, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeatureView)
	return r, nil
}

func (pipeline *FeatureView) MarkReady() {
	// update the lab state to ready
	pipeline.CreateOrUpdateCond(FeatureViewCondition{
		Type:   FeatureViewReady,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeatureView) MarkArchived() {
	pipeline.CreateOrUpdateCond(FeatureViewCondition{
		Type:   FeatureViewSaved,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeatureView) Archived() bool {
	return pipeline.GetCond(FeatureViewSaved).Status == v1.ConditionTrue
}
