/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"strings"

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

func (fh *FeatureHistogram) AddConditions() {
	fh.Status.Conditions = make([]metav1.Condition, 1)
	fh.Status.Conditions[0] = metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionUnknown,
	}
}

func (fh *FeatureHistogram) HasFinalizer() bool {
	return util.HasFin(&fh.ObjectMeta, data.GroupName)
}
func (fh *FeatureHistogram) AddFinalizer() { util.AddFin(&fh.ObjectMeta, data.GroupName) }
func (fh *FeatureHistogram) RemoveFinalizer() {
	util.RemoveFin(&fh.ObjectMeta, data.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (fh *FeatureHistogram) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, fh.ObjectMeta.Name), nil
}

func (fh *FeatureHistogram) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", fh.ObjectMeta.Name), nil
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (fh *FeatureHistogram) LabelWithCommit(commit string, uname string, branch string) {
	fh.ObjectMeta.Labels[common.CommitLabelKey] = commit
	fh.ObjectMeta.Labels[common.UnameLabelKey] = uname
	fh.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (fh *FeatureHistogram) IsGitObj() bool {
	label, ok := fh.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (fh *FeatureHistogram) SetChanged() {
	fh.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (fh *FeatureHistogram) CreateOrUpdateCond(cond metav1.Condition) {
	i := fh.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		fh.Status.Conditions = append(fh.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := fh.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	fh.Status.Conditions[i] = current
}

func (fh FeatureHistogram) GetCondIdx(t string) int {
	for i, v := range fh.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (fh *FeatureHistogram) GetCond(t string) metav1.Condition {
	for _, v := range fh.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

///////////////////////////// Feature histogram states /////////////////////////
// Live , Expired, GenTest, ReadyToTest,Testing,Ready,Drifted
////////////////////////////////////////////////////////////////////////////////

// MarkLive
func (fh *FeatureHistogram) MarkLive() {
	fh.Spec.Live = util.BoolPtr(true)
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseLive),
	})
	fh.Status.Phase = FeatureHistogramPhaseLive
}

func (fh *FeatureHistogram) Drifted() bool {
	for _, v := range fh.Status.Columns {
		if v.Drift != nil && *v.Drift {
			return true
		}
	}
	return false
}

func (fh *FeatureHistogram) MarkDrift() {
	fh.Spec.Live = util.BoolPtr(true)
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseDrift),
	})
	fh.Status.Phase = FeatureHistogramPhaseDrift
}

func (fh FeatureHistogram) Live() bool {
	return fh.GetCond(FeatureHistogramReady).Status == metav1.ConditionFalse &&
		fh.GetCond(FeatureHistogramReady).Reason == string(FeatureHistogramPhaseLive)
}

// Mark Expired
func (fh *FeatureHistogram) MarkExpired() {
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseLive),
	})
	fh.Status.Phase = FeatureHistogramPhaseExpired
}

// MarkGenTest
func (fh *FeatureHistogram) MarkGenTest() {
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseGenTest),
	})
	fh.Status.Phase = FeatureHistogramPhaseGenTest
}

// MarkReadyToTest
func (fh *FeatureHistogram) MarkReadyToTest() {
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseReadyToTest),
	})
	fh.Status.Phase = FeatureHistogramPhaseReadyToTest
}

// MarkUnitTesting
func (fh *FeatureHistogram) MarkUnitTesting() {

	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramUnitTested,
		Status: metav1.ConditionFalse,
		Reason: string(FeatureHistogramPhaseUnitTesting),
	})
	fh.Status.Phase = FeatureHistogramPhaseUnitTesting

}

func (fh *FeatureHistogram) MarkUnitTested() {

	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramUnitTested,
		Status: metav1.ConditionTrue,
		Reason: FeatureHistogramUnitTested,
	})

}

func (fh *FeatureHistogram) MarkUnitTestFailed(msg string, stop bool) {
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:    FeatureHistogramUnitTested,
		Status:  metav1.ConditionFalse,
		Reason:  string(FeatureHistogramPhaseFailed),
		Message: "Failed to unit test." + msg,
	})
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:    FeatureHistogramReady,
		Status:  metav1.ConditionFalse,
		Reason:  string(FeatureHistogramPhaseFailed),
		Message: "Failed to unit test." + msg,
	})

	fh.Status.Phase = FeatureHistogramPhaseFailed
	fh.Status.FailureMessage = msg

}

func (fh FeatureHistogram) UnitTested() bool {
	return fh.GetCond(FeatureHistogramUnitTested).Status == metav1.ConditionTrue
}

// MarkReady

// MarkFailed

// MarkDrifted

func (fh FeatureHistogram) IsReady() bool {
	return fh.GetCond(FeatureHistogramReady).Status == metav1.ConditionTrue
}

func (fh FeatureHistogram) IsArchived() bool {
	return fh.GetCond(FeatureHistogramSaved).Status == metav1.ConditionTrue
}

func (fh FeatureHistogram) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", fh.Namespace, fh.Name)
}

func ParseFeatureHistogramYaml(content []byte) (*FeatureHistogram, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*FeatureHistogram)
	return r, nil
}

func (fh *FeatureHistogram) MarkReady() {
	// update the lab state to ready
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:   FeatureHistogramReady,
		Status: metav1.ConditionTrue,
		Reason: FeatureHistogramReady,
	})
	fh.Status.Phase = FeatureHistogramPhaseReady
}

func (fh *FeatureHistogram) MarkFailed(msg string) {
	fh.CreateOrUpdateCond(metav1.Condition{
		Type:    FeatureHistogramReady,
		Status:  metav1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Feature histogram failed." + msg,
	})
	fh.Status.Phase = FeatureHistogramPhaseFailed
	fh.Status.FailureMessage = msg
}

func (fh FeatureHistogram) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
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

func (fh FeatureHistogram) DriftAlert(tenantRef *v1.ObjectReference, notifierName *string, columns []string) *infra.Alert {
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
	live := false
	training := false
	if fh.Spec.Live != nil && *fh.Spec.Live {
		live = true
	}

	if fh.Spec.Training != nil && *fh.Spec.Training {
		training = true
	}

	// do not compute drift on training or live histogram
	return !(live || training || fh.IsReady())

}

// Check if we need to generate unit test for this feature histogram
func (fh *FeatureHistogram) ShouldGenerateUnitTest() bool {
	return fh.Spec.GenUnitTests != nil && *fh.Spec.GenUnitTests && len(fh.Spec.UnitTests.Tests) == 0
}

// Return true if we should detect drift for column
func (fh *FeatureHistogram) ShouldDetectDriftForColumn(column string) bool {
	for _, v := range fh.Status.Columns {
		if v.Name == column {
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
