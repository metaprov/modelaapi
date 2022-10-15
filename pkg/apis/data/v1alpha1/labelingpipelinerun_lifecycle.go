/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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

func (lpr *LabelingPipelineRun) AddConfiditions() {
	lpr.Status.Conditions = make([]LabelingPipelineRunCondition, 1)
	lpr.Status.Conditions[0] = LabelingPipelineRunCondition{
		Type:   LabelingPipelineRunCompleted,
		Status: v1.ConditionUnknown,
	}
}

func (lpr *LabelingPipelineRun) HasFinalizer() bool {
	return util.HasFin(&lpr.ObjectMeta, data.GroupName)
}
func (lpr *LabelingPipelineRun) AddFinalizer() { util.AddFin(&lpr.ObjectMeta, data.GroupName) }
func (lpr *LabelingPipelineRun) RemoveFinalizer() {
	util.RemoveFin(&lpr.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location

func (lpr *LabelingPipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(lpr)
}

func (lpr *LabelingPipelineRun) Age() string {
	return humanize.Time(lpr.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

// Parse an data
func ParseLabelPipelineRun(content string, user string, commit string) (*LabelingPipelineRun, error) {
	this := &LabelingPipelineRun{}
	err := yaml.Unmarshal([]byte(content), this)
	if err != nil {
		return nil, err
	}
	return this, nil
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (lpr *LabelingPipelineRun) LabelWithCommit(commit string, uname string, branch string) {
	lpr.ObjectMeta.Labels[common.CommitLabelKey] = commit
	lpr.ObjectMeta.Labels[common.UnameLabelKey] = uname
	lpr.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (lpr *LabelingPipelineRun) IsGitObj() bool {
	label, ok := lpr.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (lpr *LabelingPipelineRun) SetChanged() {
	lpr.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (lpr *LabelingPipelineRun) CreateOrUpdateCond(cond LabelingPipelineRunCondition) {
	i := lpr.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		lpr.Status.Conditions = append(lpr.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := lpr.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	lpr.Status.Conditions[i] = current
}

func (lpr *LabelingPipelineRun) GetCondIdx(t LabelingPipelineRunConditionType) int {
	for i, v := range lpr.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (lpr *LabelingPipelineRun) GetCond(t LabelingPipelineRunConditionType) LabelingPipelineRunCondition {
	for _, v := range lpr.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return LabelingPipelineRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (lpr *LabelingPipelineRun) IsReady() bool {
	return lpr.GetCond(LabelingPipelineRunCompleted).Status == v1.ConditionTrue
}

func (lpr *LabelingPipelineRun) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", lpr.Namespace, lpr.Name)
}

func ParseLabelPipelineRunYaml(content []byte) (*LabelingPipelineRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*LabelingPipelineRun)
	return r, nil
}

func (run *LabelingPipelineRun) MarkRunning() {
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.StartTime = &now
	}
	run.Status.Phase = LabelingPipelineRunPhaseRunning
	run.CreateOrUpdateCond(LabelingPipelineRunCondition{
		Type:   LabelingPipelineRunCompleted,
		Status: v1.ConditionFalse,
		Reason: string(LabelingPipelineRunPhaseRunning),
	})
}

func (run *LabelingPipelineRun) MarkComplete() {
	run.Status.Phase = LabelingPipelineRunPhaseCompleted
	run.CreateOrUpdateCond(LabelingPipelineRunCondition{
		Type:   LabelingPipelineRunCompleted,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
}

func (run *LabelingPipelineRun) MarkFailed(err error) {
	run.Status.Phase = LabelingPipelineRunPhaseFailed
	run.CreateOrUpdateCond(LabelingPipelineRunCondition{
		Type:    LabelingPipelineRunCompleted,
		Status:  v1.ConditionTrue,
		Reason:  string(LabelingPipelineRunPhaseFailed),
		Message: err.Error(),
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
	run.Status.FailureMessage = util.StrPtr(err.Error())
}

func (in *LabelingPipelineRun) IsFailed() bool {
	cond := in.GetCond(LabelingPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(LabelingPipelineRunPhaseFailed)
}

// Return the state of the run as RunStatus
func (run *LabelingPipelineRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: run.Status.EndTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	result.Status = string(run.Status.Phase)
	return result

}
