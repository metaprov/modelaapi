/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"strings"

	"github.com/dustin/go-humanize"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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

func (feature *FeatureHistogram) AddConditions() {
	feature.Status.Conditions = make([]FeatureHistogramCondition, 1)
	feature.Status.Conditions[0] = FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *FeatureHistogram) HasFinalizer() bool {
	return util.HasFin(&feature.ObjectMeta, data.GroupName)
}
func (feature *FeatureHistogram) AddFinalizer() { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *FeatureHistogram) RemoveFinalizer() {
	util.RemoveFin(&feature.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (feature *FeatureHistogram) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, feature.ObjectMeta.Name), nil
}

func (feature *FeatureHistogram) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", feature.ObjectMeta.Name), nil
}

func (feature *FeatureHistogram) Age() string {
	return humanize.Time(feature.CreationTimestamp.Time)
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *FeatureHistogram) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *FeatureHistogram) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *FeatureHistogram) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *FeatureHistogram) CreateOrUpdateCond(cond FeatureHistogramCondition) {
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

func (feature *FeatureHistogram) GetCondIdx(t FeatureHistogramConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *FeatureHistogram) GetCond(t FeatureHistogramConditionType) FeatureHistogramCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeatureHistogramCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

///////////////////////////// Feature histogram states /////////////////////////
// Live , Expired, GenTest, ReadyToTest,Testing,Ready,Drifted
////////////////////////////////////////////////////////////////////////////////

// MarkLive
func (feature *FeatureHistogram) MarkLive() {
	feature.Spec.Live = util.BoolPtr(true)
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseLive),
	})
	feature.Status.Phase = FeatureHistogramPhaseLive
}

func (feature *FeatureHistogram) Drifted() bool {
	for _, v := range feature.Status.Columns {
		if *v.Drift {
			return true
		}
	}
	return false
}

func (feature *FeatureHistogram) MarkDrift() {
	feature.Spec.Live = util.BoolPtr(true)
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseDrift),
	})
	feature.Status.Phase = FeatureHistogramPhaseDrift
}

func (feature FeatureHistogram) Live() bool {
	return feature.GetCond(FeatureHistogramReady).Status == v1.ConditionFalse &&
		feature.GetCond(FeatureHistogramReady).Reason == string(FeatureHistogramPhaseLive)
}

// Mark Expired
func (feature *FeatureHistogram) MarkExpired() {
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseLive),
	})
	feature.Status.Phase = FeatureHistogramPhaseExpired
}

// MarkGenTest
func (feature *FeatureHistogram) MarkGenTest() {
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseGenTest),
	})
	feature.Status.Phase = FeatureHistogramPhaseGenTest
}

// MarkReadyToTest
func (feature *FeatureHistogram) MarkReadyToTest() {
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseReadyToTest),
	})
	feature.Status.Phase = FeatureHistogramPhaseReadyToTest
}

// MarkUnitTesting
func (fh *FeatureHistogram) MarkUnitTesting() {

	fh.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramUnitTested,
		Status: v1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseUnitTesting),
	})
	fh.Status.Phase = FeatureHistogramPhaseUnitTesting

}

func (fh *FeatureHistogram) MarkUnitTested() {

	fh.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramUnitTested,
		Status: v1.ConditionTrue,
		Reason: "UnitTesting",
	})

}

func (fh *FeatureHistogram) MarkUnitTestFailed(msg string, stop bool) {
	fh.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:    FeatureHistogramUnitTested,
		Status:  v1.ConditionFalse,
		Reason:  string(FeatureHistogramPhaseFailed),
		Message: "Failed to unit test." + msg,
	})
	fh.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:    FeatureHistogramReady,
		Status:  v1.ConditionFalse,
		Reason:  string(FeatureHistogramPhaseFailed),
		Message: "Failed to unit test." + msg,
	})

	fh.Status.Phase = FeatureHistogramPhaseFailed
	fh.Status.FailureMessage = msg

}

func (fh *FeatureHistogram) UnitTested() bool {
	return fh.GetCond(FeatureHistogramUnitTested).Status == v1.ConditionTrue
}

// MarkReady

// MarkFailed

// MarkDrifted

func (feature *FeatureHistogram) IsReady() bool {
	return feature.GetCond(FeatureHistogramReady).Status == v1.ConditionTrue
}

func (feature *FeatureHistogram) IsArchived() bool {
	return feature.GetCond(FeatureHistogramSaved).Status == v1.ConditionTrue
}

func (feature *FeatureHistogram) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeatureHistogramYaml(content []byte) (*FeatureHistogram, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeatureHistogram)
	return r, nil
}

func (feature *FeatureHistogram) MarkReady() {
	// update the lab state to ready
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramReady,
		Status: v1.ConditionTrue,
	})
	feature.Status.Phase = FeatureHistogramPhaseReady
}

func (feature *FeatureHistogram) MarkArchived() {
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:   FeatureHistogramSaved,
		Status: v1.ConditionTrue,
	})
}

func (feature *FeatureHistogram) Archived() bool {
	return feature.GetCond(FeatureHistogramSaved).Status == v1.ConditionTrue
}

func (feature *FeatureHistogram) MarkFailed(msg string) {
	feature.CreateOrUpdateCond(FeatureHistogramCondition{
		Type:    FeatureHistogramReady,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Feature histogram failed." + msg,
	})
	feature.Status.Phase = FeatureHistogramPhaseFailed
	feature.Status.FailureMessage = msg
}

func (fh *FeatureHistogram) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Entity %s failed with error %v", fh.Name, err.Error())
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
				Kind:      "Entity",
				Name:      fh.Name,
				Namespace: fh.Namespace,
			},
			Owner:  fh.Spec.Owner,
			Fields: map[string]string{},
		},
	}
}

func (fh *FeatureHistogram) DriftAlert(tenantRef *v1.ObjectReference, notifierName *string, columns []string) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("drift detected")
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: fh.Name,
			Namespace:    fh.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      util.StrPtr(subject),
			Message:      util.StrPtr("drift was detected"),
			Level:        &level,
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      fh.Name,
				Namespace: fh.Namespace,
			},
			Owner: fh.Spec.Owner,
			Fields: map[string]string{
				"columns": strings.Join(columns, ","),
			},
		},
	}
}

// check if we need to expire the feature histogram
func (fh *FeatureHistogram) ShouldExpire(maxPredictions int32) bool {
	// calc total points
	return *fh.Spec.Live && fh.Status.Total >= maxPredictions && fh.Expired()
}

// check if we should compute drift, we should compute drift,
// if we have no drift parameters, and we pass the historam
func (fh *FeatureHistogram) ShouldUnitTest() bool {
	// do not compute drift on training or live histogram
	if *fh.Spec.Live || *fh.Spec.Training || fh.IsReady() {
		return false
	}
	return true
}

// Check if we need to generate unit test for this feature histogram
func (fh *FeatureHistogram) ShouldGenerateUnitTest() bool {
	return *fh.Spec.GenUnitTests && len(fh.Spec.UnitTests.Tests) == 0
}

// Return true if we should detect drift for column
func (fh *FeatureHistogram) ShouldDetectDriftForColumn(column string) bool {
	if len(fh.Spec.Columns) == 0 {
		return true // if not column defined, return true
	}
	for _, v := range fh.Spec.Columns {
		if v == column {
			return true
		}
	}
	return false
}

// Used during drift unit test generation
func (fh *FeatureHistogram) DefaultDriftThreshold(metric catalog.Metric) float64 {
	for _, th := range fh.Spec.DriftThresholds {
		if th.Metric == metric {
			return th.Value
		}
	}
	return 0.3
}

// -------------------- Unit testing

// Return true if the feature histogram is expired
func (fh *FeatureHistogram) Expired() bool {
	now := metav1.Now()
	if fh.Spec.End == nil {
		return false
	}
	return fh.Spec.End.Before(&now)
}
