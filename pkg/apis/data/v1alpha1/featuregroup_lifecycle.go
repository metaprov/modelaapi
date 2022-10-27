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
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

//==============================================================================
// EntityRef
//==============================================================================

func (fg *FeatureGroup) AddConfiditions() {
	fg.Status.Conditions = make([]FeatureGroupCondition, 1)
	fg.Status.Conditions[0] = FeatureGroupCondition{
		Type:   FeatureGroupReady,
		Status: v1.ConditionUnknown,
	}
}

func (fg *FeatureGroup) HasFinalizer() bool {
	return util.HasFin(&fg.ObjectMeta, data.GroupName)
}
func (fg *FeatureGroup) AddFinalizer() { util.AddFin(&fg.ObjectMeta, data.GroupName) }
func (fg *FeatureGroup) RemoveFinalizer() {
	util.RemoveFin(&fg.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (fg *FeatureGroup) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, fg.ObjectMeta.Name), nil
}

func (fg *FeatureGroup) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", fg.ObjectMeta.Name), nil
}

func (fg *FeatureGroup) Age() string {
	return humanize.Time(fg.CreationTimestamp.Time)
}

func (fg FeatureGroup) IsDeleted() bool {
	return !fg.ObjectMeta.DeletionTimestamp.IsZero()
}

func (fg FeatureGroup) IsIngestTime() bool {
	return fg.Spec.IngestSchedule.ShouldFire(fg.Status.IngestSchedule)
}

///////////////////////////////////////////////
// Sync
//////////////////////////////////////////////
func (fg *FeatureGroup) MarkSyncing() {
	fg.Status.Phase = FeatureGroupPhaseSyncing
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionFalse,
		Reason: "Syncing",
	})
}

func (fg *FeatureGroup) MarkSynced() {
	fg.Status.Phase = FeatureGroupPhaseSynced
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if fg.Status.SyncSchedule.LastRun == nil {
		fg.Status.SyncSchedule.LastRun = &now
	}
}

func (fg *FeatureGroup) MarkSyncFailed(msg string) {
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:    FeatureGroupSynced,
		Status:  v1.ConditionFalse,
		Reason:  string(FeatureGroupSynced),
		Message: "Failed to snapshot." + msg,
	})
	fg.Status.Phase = FeatureGroupPhaseFailed
	fg.Status.SyncSchedule.FailureMessage = util.StrPtr(msg)
	now := metav1.Now()
	if fg.Status.SyncSchedule.LastRun == nil {
		fg.Status.SyncSchedule.LastRun = &now
	}

}

func (fg *FeatureGroup) MarkGeneratingOnlineDataset() {
	fg.Status.Phase = FeatureGroupPhaseGeneratingOnlineDataset
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionFalse,
		Reason: "GeneratingOnlineDataset",
	})
}

func (fg *FeatureGroup) MarkGeneratedOnlineDataset() {
	fg.Status.Phase = FeatureGroupPhaseOnlineDatasetGenerated
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSynced,
		Status: v1.ConditionFalse,
		Reason: "GeneratedOnlineDataset",
	})
}

func (fg *FeatureGroup) MarkGeneratedOnlineDatasetFailed(msg string) {
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:    FeatureGroupSynced,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to generate online dataset." + msg,
	})
	fg.Status.Phase = FeatureGroupPhaseFailed
	fg.Status.SyncSchedule.FailureMessage = util.StrPtr(msg)

}

func (fg *FeatureGroup) IsSynced() bool {
	return fg.GetCond(FeatureGroupSynced).Status == v1.ConditionTrue
}

func (fg *FeatureGroup) HasOnlineTable() bool {
	if fg.Status.SyncSchedule.StartTime == nil {
		return false
	}
	return fg.Status.OnlineTableCreated != nil && fg.Status.OnlineTableCreated.After(fg.Status.SyncSchedule.StartTime.Time)
}

func (fg *FeatureGroup) OnlineDatasetGenerated() bool {
	return fg.GetCond(FeatureGroupSynced).Status == v1.ConditionFalse &&
		fg.GetCond(FeatureGroupSynced).Reason == "GeneratedOnlineDataset"
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (fg *FeatureGroup) LabelWithCommit(commit string, uname string, branch string) {
	fg.ObjectMeta.Labels[common.CommitLabelKey] = commit
	fg.ObjectMeta.Labels[common.UnameLabelKey] = uname
	fg.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (fg *FeatureGroup) IsGitObj() bool {
	label, ok := fg.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (fg *FeatureGroup) SetChanged() {
	fg.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (fg *FeatureGroup) CreateOrUpdateCond(cond FeatureGroupCondition) {
	i := fg.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		fg.Status.Conditions = append(fg.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := fg.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	fg.Status.Conditions[i] = current
}

func (fg FeatureGroup) GetCondIdx(t FeatureGroupConditionType) int {
	for i, v := range fg.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (fg FeatureGroup) GetCond(t FeatureGroupConditionType) FeatureGroupCondition {
	for _, v := range fg.Status.Conditions {
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

func (fg FeatureGroup) IsReady() bool {
	return fg.GetCond(FeatureGroupReady).Status == v1.ConditionTrue
}

func (fg FeatureGroup) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", fg.Namespace, fg.Name)
}

func ParseFeatureGroupYaml(content []byte) (*FeatureGroup, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeatureGroup)
	return r, nil
}

func (fg *FeatureGroup) MarkReady() {
	// update the lab state to ready
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupReady,
		Status: v1.ConditionTrue,
	})
}

func (fg *FeatureGroup) MarkArchived() {
	fg.CreateOrUpdateCond(FeatureGroupCondition{
		Type:   FeatureGroupSaved,
		Status: v1.ConditionTrue,
	})
}

func (fg FeatureGroup) Archived() bool {
	return fg.GetCond(FeatureGroupSaved).Status == v1.ConditionTrue
}

func (fh FeatureGroup) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("FeatureGroup %s failed with error %v", fh.Name, err.Error())
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: fh.Name,
			Namespace:    fh.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      util.StrPtr(subject),
			Message:      util.StrPtr(err.Error()),
			Level:        &level,
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			EntityRef: v1.ObjectReference{
				Kind:      "FeatureGroup",
				Name:      fh.Name,
				Namespace: fh.Namespace,
			},
			Owner:  fh.Spec.Owner,
			Fields: map[string]string{},
		},
	}
}
