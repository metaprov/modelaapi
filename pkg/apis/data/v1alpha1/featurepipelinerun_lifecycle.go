/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// EntityRef
//==============================================================================

func (run *FeaturePipelineRun) AddConfiditions() {
	run.Status.Conditions = make([]FeaturePipelineRunCondition, 1)
	run.Status.Conditions[0] = FeaturePipelineRunCondition{
		Type:   FeaturePipelineRunCompleted,
		Status: v1.ConditionUnknown,
	}
}

func (run *FeaturePipelineRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, data.GroupName)
}
func (run *FeaturePipelineRun) AddFinalizer() { util.AddFin(&run.ObjectMeta, data.GroupName) }
func (run *FeaturePipelineRun) RemoveFinalizer() {
	util.RemoveFin(&run.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location

func (run *FeaturePipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
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

func (run *FeaturePipelineRun) LabelWithCommit(commit string, uname string, branch string) {
	run.ObjectMeta.Labels[common.CommitLabelKey] = commit
	run.ObjectMeta.Labels[common.UnameLabelKey] = uname
	run.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (run *FeaturePipelineRun) IsGitObj() bool {
	label, ok := run.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (run *FeaturePipelineRun) SetChanged() {
	run.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (run *FeaturePipelineRun) CreateOrUpdateCond(cond FeaturePipelineRunCondition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		run.Status.Conditions = append(run.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	run.Status.Conditions[i] = current
}

func (run *FeaturePipelineRun) GetCondIdx(t FeaturePipelineRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *FeaturePipelineRun) GetCond(t FeaturePipelineRunConditionType) FeaturePipelineRunCondition {
	for _, v := range run.Status.Conditions {
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

func (run *FeaturePipelineRun) IsCompleted() bool {
	return run.GetCond(FeaturePipelineRunCompleted).Status == v1.ConditionTrue
}

func (run *FeaturePipelineRun) IsRunning() bool {
	cond := run.GetCond(FeaturePipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(FeaturePipelineRunPhaseRunning)
}

func (run *FeaturePipelineRun) IsFailed() bool {
	cond := run.GetCond(FeaturePipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(FeaturePipelineRunPhaseFailed)
}

func (run *FeaturePipelineRun) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", run.Namespace, run.Name)
}

func (run *FeaturePipelineRun) MarkReady() {
	// update the lab state to ready
	run.CreateOrUpdateCond(FeaturePipelineRunCondition{
		Type:   FeaturePipelineRunCompleted,
		Status: v1.ConditionTrue,
	})

}

func (run *FeaturePipelineRun) MarkRunning() {
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.StartTime = &now
	}
	run.Status.Phase = FeaturePipelineRunPhaseRunning
	run.CreateOrUpdateCond(FeaturePipelineRunCondition{
		Type:   FeaturePipelineRunCompleted,
		Status: v1.ConditionFalse,
		Reason: string(FeaturePipelineRunPhaseRunning),
	})
}

func (run *FeaturePipelineRun) MarkComplete() {
	run.Status.Phase = FeaturePipelineRunPhaseCompleted
	run.CreateOrUpdateCond(FeaturePipelineRunCondition{
		Type:   FeaturePipelineRunCompleted,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
}

func (run *FeaturePipelineRun) MarkFailed(err error) {
	run.Status.Phase = FeaturePipelineRunPhaseFailed
	run.CreateOrUpdateCond(FeaturePipelineRunCondition{
		Type:    FeaturePipelineRunCompleted,
		Status:  v1.ConditionTrue,
		Reason:  string(FeaturePipelineRunPhaseFailed),
		Message: err.Error(),
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
	run.Status.FailureMessage = util.StrPtr(err.Error())

}

// Return the state of the run as RunStatus
func (run *FeaturePipelineRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		At:             run.Status.StartTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	if run.IsFailed() {
		result.Outcome = catalog.RunOutcomeError
	} else {
		result.Outcome = catalog.RunOutcomeSuccess
	}
	return result

}
