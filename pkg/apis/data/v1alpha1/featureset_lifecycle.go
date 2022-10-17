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
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// EntityRef
//==============================================================================

func (run *Featureset) AddConfiditions() {
	run.Status.Conditions = make([]FeaturesetCondition, 1)
	run.Status.Conditions[0] = FeaturesetCondition{
		Type:   FeaturesetCompleted,
		Status: v1.ConditionUnknown,
	}
}

func (run *Featureset) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, data.GroupName)
}
func (run *Featureset) AddFinalizer() { util.AddFin(&run.ObjectMeta, data.GroupName) }
func (run *Featureset) RemoveFinalizer() {
	util.RemoveFin(&run.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location

func (run *Featureset) Age() string {
	return humanize.Time(run.CreationTimestamp.Time)
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (run *Featureset) LabelWithCommit(commit string, uname string, branch string) {
	run.ObjectMeta.Labels[common.CommitLabelKey] = commit
	run.ObjectMeta.Labels[common.UnameLabelKey] = uname
	run.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (run *Featureset) IsGitObj() bool {
	label, ok := run.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (run *Featureset) SetChanged() {
	run.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (run *Featureset) CreateOrUpdateCond(cond FeaturesetCondition) {
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

func (run *Featureset) GetCondIdx(t FeaturesetConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *Featureset) GetCond(t FeaturesetConditionType) FeaturesetCondition {
	for _, v := range run.Status.Conditions {
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

func (run *Featureset) IsCompleted() bool {
	return run.GetCond(FeaturesetCompleted).Status == v1.ConditionTrue
}

func (run *Featureset) IsRunning() bool {
	cond := run.GetCond(FeaturesetCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(FeaturesetPhaseRunning)
}

func (run *Featureset) IsFailed() bool {
	cond := run.GetCond(FeaturesetCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(FeaturesetPhaseFailed)
}

func (run *Featureset) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", run.Namespace, run.Name)
}

func (run *Featureset) MarkReady() {
	// update the lab state to ready
	run.CreateOrUpdateCond(FeaturesetCondition{
		Type:   FeaturesetCompleted,
		Status: v1.ConditionTrue,
	})

}

func (run *Featureset) MarkRunning() {
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.StartTime = &now
	}
	run.Status.Phase = FeaturesetPhaseRunning
	run.CreateOrUpdateCond(FeaturesetCondition{
		Type:   FeaturesetCompleted,
		Status: v1.ConditionFalse,
		Reason: string(FeaturesetPhaseRunning),
	})
}

func (run *Featureset) MarkComplete() {
	run.Status.Phase = FeaturesetPhaseCompleted
	run.CreateOrUpdateCond(FeaturesetCondition{
		Type:   FeaturesetCompleted,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
}

func (run *Featureset) MarkFailed(err error) {
	run.Status.Phase = FeaturesetPhaseFailed
	run.CreateOrUpdateCond(FeaturesetCondition{
		Type:    FeaturesetCompleted,
		Status:  v1.ConditionTrue,
		Reason:  string(FeaturesetPhaseFailed),
		Message: err.Error(),
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
	run.Status.FailureMessage = util.StrPtr(err.Error())

}

// Return the state of the run as RunStatus
func (run *Featureset) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: run.Status.EndTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	result.Status = string(run.Status.Phase)
	return result

}
