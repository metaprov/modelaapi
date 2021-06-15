/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	"github.com/metaprov/modeldapi/pkg/apis/common"
	"github.com/metaprov/modeldapi/pkg/apis/data"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// EntityRef
//==============================================================================

func (lp *LabelingPipeline) AddConfiditions() {
	lp.Status.Conditions = make([]LabelingPipelineCondition, 1)
	lp.Status.Conditions[0] = LabelingPipelineCondition{
		Type:   LabelPipelineReady,
		Status: v1.ConditionUnknown,
	}
}

func (lp *LabelingPipeline) HasFinalizer() bool {
	return util.HasFin(&lp.ObjectMeta, data.GroupName)
}
func (lp *LabelingPipeline) AddFinalizer()    { util.AddFin(&lp.ObjectMeta, data.GroupName) }
func (lp *LabelingPipeline) RemoveFinalizer() { util.RemoveFin(&lp.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (lp *LabelingPipeline) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, lp.ObjectMeta.Name), nil
}

func (lp *LabelingPipeline) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(lp)
}

func (lp *LabelingPipeline) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", lp.ObjectMeta.Name), nil
}

func (lp *LabelingPipeline) Age() string {
	return humanize.Time(lp.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

// Parse an data
func ParseLabelPipeline(content string, user string, commit string) (*LabelingPipeline, error) {
	this := &LabelingPipeline{}
	err := yaml.Unmarshal([]byte(content), this)
	if err != nil {
		return nil, err
	}
	return this, nil
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (lp *LabelingPipeline) LabelWithCommit(commit string, uname string, branch string) {
	lp.ObjectMeta.Labels[common.CommitLabelKey] = commit
	lp.ObjectMeta.Labels[common.UnameLabelKey] = uname
	lp.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (lp *LabelingPipeline) IsGitObj() bool {
	label, ok := lp.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (lp *LabelingPipeline) SetChanged() {
	lp.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (lp *LabelingPipeline) CreateOrUpdateCond(cond LabelingPipelineCondition) {
	i := lp.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		lp.Status.Conditions = append(lp.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := lp.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	lp.Status.Conditions[i] = current
}

func (lp *LabelingPipeline) GetCondIdx(t LabelingPipelineConditionType) int {
	for i, v := range lp.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (lp *LabelingPipeline) GetCond(t LabelingPipelineConditionType) LabelingPipelineCondition {
	for _, v := range lp.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return LabelingPipelineCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (lp *LabelingPipeline) IsReady() bool {
	return lp.GetCond(LabelPipelineReady).Status == v1.ConditionTrue
}

func (lp *LabelingPipeline) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", lp.Namespace, lp.Name)
}

func (lp *LabelingPipeline) MarkReady() {
	// update the lab state to ready
	lp.CreateOrUpdateCond(LabelingPipelineCondition{
		Type:   LabelPipelineReady,
		Status: v1.ConditionTrue,
	})
}

func (lp *LabelingPipeline) MarkArchived() {
	lp.CreateOrUpdateCond(LabelingPipelineCondition{
		Type:   LabelPipelineSaved,
		Status: v1.ConditionTrue,
	})
}

func (lp *LabelingPipeline) Archived() bool {
	return lp.GetCond(LabelPipelineSaved).Status == v1.ConditionTrue
}
