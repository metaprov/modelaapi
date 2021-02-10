/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/dustin/go-humanize"
	"github.com/metaprov/modeld-api/pkg/apis/common"
	"github.com/metaprov/modeld-api/pkg/apis/data"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

//==============================================================================
// EntityRef
//==============================================================================

func (feature *FeaturePipelineRun) AddConfiditions() {
	feature.Status.Conditions = make([]FeaturePipelineRunCondition, 1)
	feature.Status.Conditions[0] = FeaturePipelineRunCondition{
		Type:   FeaturePipelineRunReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *FeaturePipelineRun) HasFinalizer() bool {
	return util.HasFin(&feature.ObjectMeta, data.GroupName)
}
func (feature *FeaturePipelineRun) AddFinalizer() { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *FeaturePipelineRun) RemoveFinalizer() {
	util.RemoveFin(&feature.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location

func (feature *FeaturePipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(feature)
}

func (run *FeaturePipelineRun) Age() string {
	return humanize.Time(run.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

// Parse an data
func ParseFeaturePipelineRun(content string, user string, commit string) (*FeaturePipelineRun, error) {
	this := &FeaturePipelineRun{}
	err := yaml.Unmarshal([]byte(content), this)
	if err != nil {
		return nil, err
	}
	return this, nil
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *FeaturePipelineRun) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *FeaturePipelineRun) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *FeaturePipelineRun) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *FeaturePipelineRun) CreateOrUpdateCond(cond FeaturePipelineRunCondition) {
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

func (feature *FeaturePipelineRun) GetCondIdx(t FeaturePipelineRunConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *FeaturePipelineRun) GetCond(t FeaturePipelineRunConditionType) FeaturePipelineRunCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeaturePipelineRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (feature *FeaturePipelineRun) IsReady() bool {
	return feature.GetCond(FeaturePipelineRunReady).Status == v1.ConditionTrue
}

func (feature *FeaturePipelineRun) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeaturePipelineRunYaml(content []byte) (*FeaturePipelineRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeaturePipelineRun)
	return r, nil
}

func (feautreset *FeaturePipelineRun) MarkReady() {
	// update the lab state to ready
	feautreset.CreateOrUpdateCond(FeaturePipelineRunCondition{
		Type:   FeaturePipelineRunReady,
		Status: v1.ConditionTrue,
	})

}
