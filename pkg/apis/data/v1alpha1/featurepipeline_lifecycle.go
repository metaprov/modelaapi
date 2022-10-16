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

func (feature *FeaturePipeline) AddConfiditions() {
	feature.Status.Conditions = make([]FeaturePipelineCondition, 1)
	feature.Status.Conditions[0] = FeaturePipelineCondition{
		Type:   FeaturePipelineReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *FeaturePipeline) HasFinalizer() bool {
	return util.HasFin(&feature.ObjectMeta, data.GroupName)
}
func (feature *FeaturePipeline) AddFinalizer() { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *FeaturePipeline) RemoveFinalizer() {
	util.RemoveFin(&feature.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (feature *FeaturePipeline) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, feature.ObjectMeta.Name), nil
}

func (feature *FeaturePipeline) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", feature.ObjectMeta.Name), nil
}

func (feature *FeaturePipeline) Age() string {
	return humanize.Time(feature.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *FeaturePipeline) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *FeaturePipeline) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *FeaturePipeline) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *FeaturePipeline) CreateOrUpdateCond(cond FeaturePipelineCondition) {
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

func (feature *FeaturePipeline) GetCondIdx(t FeaturePipelineConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *FeaturePipeline) GetCond(t FeaturePipelineConditionType) FeaturePipelineCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeaturePipelineCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (feature *FeaturePipeline) IsReady() bool {
	return feature.GetCond(FeaturePipelineReady).Status == v1.ConditionTrue
}

func (feature *FeaturePipeline) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeatureSourceYaml(content []byte) (*FeaturePipeline, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeaturePipeline)
	return r, nil
}

func (pipeline *FeaturePipeline) MarkReady() {
	// update the lab state to ready
	pipeline.CreateOrUpdateCond(FeaturePipelineCondition{
		Type:   FeaturePipelineReady,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeaturePipeline) MarkArchived() {
	pipeline.CreateOrUpdateCond(FeaturePipelineCondition{
		Type:   FeaturePipelineSaved,
		Status: v1.ConditionTrue,
	})
}

func (pipeline *FeaturePipeline) Archived() bool {
	return pipeline.GetCond(FeaturePipelineSaved).Status == v1.ConditionTrue
}
