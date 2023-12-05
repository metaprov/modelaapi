/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"path"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (snapshot *DatasetSnapshot) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(snapshot).
		Complete()
}

func (snapshot *DatasetSnapshot) ReportName() string {
	return "snapshot-report-" + snapshot.Name
}

func (snapshot *DatasetSnapshot) HasFinalizer() bool {
	return util.HasFin(&snapshot.ObjectMeta, data.GroupName)
}
func (snapshot *DatasetSnapshot) AddFinalizer() { util.AddFin(&snapshot.ObjectMeta, data.GroupName) }
func (snapshot *DatasetSnapshot) RemoveFinalizer() {
	util.RemoveFin(&snapshot.ObjectMeta, data.GroupName)
}

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (snapshot *DatasetSnapshot) CreateOrUpdateCondition(cond metav1.Condition) {
	i := snapshot.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		snapshot.Status.Conditions = append(snapshot.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := snapshot.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	snapshot.Status.Conditions[i] = current
}

func (snapshot *DatasetSnapshot) GetConditionIndex(t string) int {
	for i, v := range snapshot.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (snapshot *DatasetSnapshot) GetCondition(condType DatasetSnapshotConditionType) metav1.Condition {
	for _, v := range snapshot.Status.Conditions {
		if v.Type == string(condType) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(condType),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (snapshot *DatasetSnapshot) Ready() bool {
	return snapshot.GetCondition(DatasetSnapshotReady).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Prepared() bool {
	return snapshot.GetCondition(DatasetSnapshotPrepared).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) UnitTested() bool {
	return snapshot.GetCondition(DatasetSnapshotUnitTested).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Snapshotted() bool {
	return snapshot.GetCondition(DatasetSnapshotSnapshotTaken).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Profiled() bool {
	return snapshot.GetCondition(DatasetSnapshotProfiled).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Reported() bool {
	return snapshot.GetCondition(DatasetSnapshotReported).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Generated() bool {
	return snapshot.GetCondition(DatasetSnapshotGenerated).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Aborted() bool {
	return snapshot.GetCondition(DatasetSnapshotAborted).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Paused() bool {
	return snapshot.GetCondition(DatasetSnapshotPaused).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) ExternalStatusUpdated() bool {
	return snapshot.GetCondition(DatasetSnapshotExternalStatusUpdated).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) Deleted() bool {
	return !snapshot.ObjectMeta.DeletionTimestamp.IsZero()
}

func (snapshot *DatasetSnapshot) Failed() bool {
	return snapshot.Status.Phase == DatasetSnapshotPhaseFailed
}

func (snapshot *DatasetSnapshot) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/datasets/%s/datasetsnapshots/%s", snapshot.Namespace, snapshot.Spec.DatasetName, snapshot.Name)
}

func (snapshot *DatasetSnapshot) ReportURI() string {
	return fmt.Sprintf("%s/%s-report.pdf", snapshot.RootURI(), snapshot.Name)
}

func (snapshot *DatasetSnapshot) ManifestURI() string {
	return fmt.Sprintf("%s/manifest.json", snapshot.RootURI())
}

func (snapshot *DatasetSnapshot) DatasetManifestURI() string {
	return fmt.Sprintf("%s/snapshot.json", snapshot.RootURI())
}

func (snapshot *DatasetSnapshot) DataSourceManifestURI() string {
	return fmt.Sprintf("%s/datasource.json", snapshot.RootURI())
}

func (snapshot *DatasetSnapshot) ProfileURI() string {
	return fmt.Sprintf("%s/profile/dataset_profile.json", snapshot.RootURI())
}

func (snapshot *DatasetSnapshot) ReachedMaxTime(dataset *Dataset) bool {
	timeout, override := dataset.Spec.Run.Get().Timeout, snapshot.Spec.Timeout
	if timeout == nil && override == nil {
		return false
	} else if override != nil {
		timeout = override
	}
	duration := metav1.Now().Unix() - snapshot.CreationTimestamp.Unix()
	return int32(duration/60) >= *timeout
}

func ParseDatasetSnapshotYaml(content []byte) (*DatasetSnapshot, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DatasetSnapshot)
	return r, nil
}

func (snapshot *DatasetSnapshot) MarkSkewColumns() {
	for _, v := range snapshot.Status.Statistics.Features {
		if v.Skewness > 0.5 || v.Skewness < -0.5 {
			v.Skewed = true
		}
	}
}

func (snapshot *DatasetSnapshot) RefreshProgress() {
	if snapshot.Ready() || snapshot.Failed() || snapshot.Aborted() {
		snapshot.Status.Progress = 100
	} else if snapshot.Reported() {
		snapshot.Status.Progress = 80
	} else if snapshot.Profiled() {
		snapshot.Status.Progress = 60
	} else if snapshot.UnitTested() {
		snapshot.Status.Progress = 60
	} else if snapshot.Snapshotted() {
		snapshot.Status.Progress = 40
	} else if snapshot.Generated() {
		snapshot.Status.Progress = 40
	} else if snapshot.Prepared() {
		snapshot.Status.Progress = 20
	}
}

func (snapshot *DatasetSnapshot) MarkAborted() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotAborted),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotAborted),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseAborted
	snapshot.RefreshProgress()
}

/////// Preparing Condition ///////

func (snapshot *DatasetSnapshot) MarkPrepareFailed(reason string, msg string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotPrepared),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseFailed
	snapshot.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Prepare failed: %s", msg))
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}
}

func (snapshot *DatasetSnapshot) MarkPrepareSuccess() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotPrepared),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotPhasePrepared),
	})
	snapshot.Status.Phase = DatasetSnapshotPhasePrepared
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkPreparing() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotPrepared),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhasePreparing),
	})
	snapshot.Status.Phase = DatasetSnapshotPhasePreparing
	snapshot.RefreshProgress()
}

/////// Snapshot Condition ///////

func (snapshot *DatasetSnapshot) MarkSnapshotFailed(reason string, msg string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotSnapshotTaken),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseFailed
	snapshot.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Snapshot failed: %s", msg))
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}

}

func (snapshot *DatasetSnapshot) MarkSnapshotSuccess() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotSnapshotTaken),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotPhaseSnapshotSuccess),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseSnapshotSuccess
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkTakingSnapshot() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotSnapshotTaken),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseSnapshotRunning),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseSnapshotRunning
	snapshot.RefreshProgress()
}

/////// Group Lifecycle ///////

func (snapshot *DatasetSnapshot) Grouped() bool {
	return snapshot.GetCondition(DatasetSnapshotGrouped).Status == metav1.ConditionTrue
}

func (snapshot *DatasetSnapshot) IndexFileKey() string {
	return snapshot.RootURI() + "/" + "groups.json"
}

func (snapshot *DatasetSnapshot) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", snapshot.RootURI(), task, workerIndex)
}

func (snapshot *DatasetSnapshot) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", snapshot.RootURI(), task)
}

func (snapshot *DatasetSnapshot) GroupsFolder() string {
	return snapshot.RootURI() + "/groups"
}

func (snapshot *DatasetSnapshot) GroupFolder(keys []string) string {
	return path.Join(snapshot.GroupsFolder(), path.Join(keys...))
}

func (snapshot *DatasetSnapshot) GroupDataFolder(keys []string) string {
	return snapshot.GroupFolder(keys) + "/data"
}

func (snapshot *DatasetSnapshot) GroupDataFile(keys []string) string {
	return snapshot.GroupDataFolder(keys) + "/raw.csv"
}

func (snapshot *DatasetSnapshot) GroupProfileFolder(keys []string) string {
	return snapshot.GroupFolder(keys) + "/profile"
}

func (snapshot *DatasetSnapshot) GroupReportFile(keys []string) string {
	return snapshot.GroupFolder(keys) + "/" + snapshot.ReportName() + ".pdf"
}

func (snapshot *DatasetSnapshot) GroupForecastFile(keys []string) string {
	return snapshot.GroupFolder(keys) + "/forecasts/forecast.csv"
}

/////// Group Condition ///////

func (snapshot *DatasetSnapshot) MarkGroupFailed(reason string, msg string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotGrouped),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseFailed
	snapshot.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Group by failed: %s", msg))
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}

}

func (snapshot *DatasetSnapshot) MarkGroupSuccess() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGrouped),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotGrouped),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseGrouped
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkGrouping() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGrouped),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseGrouping),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseGrouping
	snapshot.RefreshProgress()
}

/////// Unit Test Condition ///////

func (snapshot *DatasetSnapshot) MarkUnitTestFailed(reason string, msg string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotUnitTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})

	snapshot.Status.Phase = DatasetSnapshotPhaseFailed
	snapshot.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Unit test failed: %s", msg))
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}
}

func (snapshot *DatasetSnapshot) MarkUnitTested() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotUnitTested),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotUnitTested),
	})
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkUnitTesting() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotUnitTested),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseUnitTesting),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseUnitTesting
	snapshot.RefreshProgress()
}

/////// Generating Condition ///////

func (snapshot *DatasetSnapshot) MarkGenerating() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGenerated),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseGenerating),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseGenerating
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkGenerated() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGenerated),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotGenerated),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseGenerateSuccess
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkGeneratedFailed(reason string, msg string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotGenerated),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseFailed
	snapshot.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Generation failed: %s", msg))
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}
}

/////// Reporting Condition ///////

func (snapshot *DatasetSnapshot) MarkReporting() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotReported),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseReportRunning),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseReportRunning
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkReported() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotReported),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotReported),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseReportSuccess
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkReportFailed(reason string, msg string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotReported),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
}

/////// Profile Condition ///////

func (snapshot *DatasetSnapshot) MarkProfiling() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotProfiled),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseProfileRunning),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseProfileRunning
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkProfiled(profileLocation catalog.FileLocation) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotProfiled),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotProfiled),
	})
	snapshot.Status.ProfileLocation = profileLocation
	snapshot.Status.Phase = DatasetSnapshotPhaseProfileSuccess
	snapshot.RefreshProgress()
}

func (snapshot *DatasetSnapshot) MarkProfileFailed(reason string, err string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotProfiled),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

func (r *Dataset) OpName() string {
	return r.Namespace + "-" + r.Name
}

/////// Ready Condition ///////

func (snapshot *DatasetSnapshot) MarkReady() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotReady),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotReady),
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseReady
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}
}

func (snapshot *DatasetSnapshot) MarkReadyFailed(reason string, err string) {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	snapshot.Status.Phase = DatasetSnapshotPhaseFailed
	snapshot.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Mark ready failed: %s", err))
	snapshot.RefreshProgress()
	now := metav1.Now()
	if snapshot.Status.CompletedAt == nil {
		snapshot.Status.CompletedAt = &now
	}
}

/////// External Status Updated Condition ///////

func (snapshot *DatasetSnapshot) MarkExternalStatusNotUpdated() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotExternalStatusUpdated),
		Status: metav1.ConditionFalse,
		Reason: "ExternalStatusStale",
	})
}

func (snapshot *DatasetSnapshot) MarkExternalStatusUpdated() {
	snapshot.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotExternalStatusUpdated),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotExternalStatusUpdated),
	})
}

func (snapshot *DatasetSnapshot) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Dataset snapshot %s completed successfully", snapshot.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: snapshot.Name,
			Namespace:    snapshot.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      subject,
			Level:        &level,
			Notification: notification,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      snapshot.Name,
				Namespace: snapshot.Namespace,
			},
			Owner: snapshot.Spec.Owner,
			Fields: map[string]string{
				"Rows":       util.ItoA(&snapshot.Status.Statistics.Rows),
				"Columns":    util.ItoA(&snapshot.Status.Statistics.Columns),
				"Size":       util.ItoA(&snapshot.Status.Statistics.SizeInBytes),
				"Start Time": snapshot.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if snapshot.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = snapshot.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (snapshot *DatasetSnapshot) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Dataset snapshot %s failed with error: %v", snapshot.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: snapshot.Name,
			Namespace:    snapshot.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      subject,
			Level:        &level,
			Notification: notification,
			EntityRef: v1.ObjectReference{
				Kind:      "DatasetSnapshot",
				Name:      snapshot.Name,
				Namespace: snapshot.Namespace,
			},
			Owner: snapshot.Spec.Owner,
			Fields: map[string]string{
				"Rows":       util.ItoA(&snapshot.Status.Statistics.Rows),
				"Columns":    util.ItoA(&snapshot.Status.Statistics.Columns),
				"Size":       util.ItoA(&snapshot.Status.Statistics.SizeInBytes),
				"Start Time": snapshot.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if snapshot.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = snapshot.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (snapshot *DatasetSnapshot) ConstructFeatureHistogram() (*FeatureHistogram, error) {
	// get the columns that we need to track drift for
	columns := snapshot.DriftColumnNames()

	// create the actual column histogram for the status.
	histograms := make([]ColumnHistogram, 0)
	// iterate over all the columns and build the feature histograms
	for _, c := range columns {
		column, err := snapshot.GetColumn(c)
		if err != nil {
			return nil, err
		}
		each := ColumnHistogram{
			Name:      c,
			Histogram: column.Histogram,
		}
		histograms = append(histograms, each)
	}

	// create a training feature histogram for the snapshot.
	result := &FeatureHistogram{
		ObjectMeta: metav1.ObjectMeta{
			Name:      snapshot.Name,
			Namespace: snapshot.Namespace,
		},
		Spec: FeatureHistogramSpec{
			Owner:       snapshot.Spec.Owner,
			Description: util.StrPtr(""),
			Columns:     columns,
			SourceRef: &v1.ObjectReference{
				Namespace: snapshot.Namespace,
				Name:      snapshot.Name,
			},
			Training: util.BoolPtr(true),
			Live:     util.BoolPtr(false),
			BaseRef:  v1.ObjectReference{},
		},
		Status: FeatureHistogramStatus{
			ObservedGeneration: 0,
			Columns:            histograms,
			UpdatedAt:          nil,
			Logs:               catalog.Logs{},
			Phase:              FeatureHistogramPhaseReady,
		},
	}

	return result, nil

}

// return the list of drift. Currently return the drift columns
func (snapshot *DatasetSnapshot) DriftColumnNames() []string {
	result := make([]string, 0)
	for _, v := range snapshot.Status.Statistics.Features {
		if !v.Target {
			result = append(result, v.Name)
		}

	}
	return result
}

// Search for a column stat, based on name
func (snapshot *DatasetSnapshot) GetColumn(name string) (*FeatureStatistics, error) {
	for _, v := range snapshot.Status.Statistics.Features {
		if v.Name == name {
			return &v, nil
		}
	}
	return nil, fmt.Errorf("column not found %s", name)

}

func (feature FeatureStatistics) GenDriftTestCase(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	// small data
	if rowCount < 1000 && feature.DataType == catalog.DataTypeNumber {
		return feature.SmallNumericTest(thresholds, rowCount)
	}
	if rowCount < 1000 && feature.DataType == catalog.DataTypeCategorical {
		return feature.SmallCatTest(thresholds, rowCount)
	}
	if rowCount < 1000 && feature.DataType == catalog.DataTypeBoolean {
		return feature.SmallBoolTest(thresholds, rowCount)
	}
	if rowCount >= 1000 && feature.DataType == catalog.DataTypeNumber {
		return feature.BigNumericTest(thresholds, rowCount)
	}
	if rowCount >= 1000 && feature.DataType == catalog.DataTypeCategorical {
		return feature.BigCatTest(thresholds, rowCount)
	}
	if rowCount >= 1000 && feature.DataType == catalog.DataTypeBoolean {
		return feature.BigBoolTest(thresholds, rowCount)
	}

	return &catalog.DataTestCase{}

	// large data
}

func (feature FeatureStatistics) findThreshold(thresholds []DriftThreshold, metric catalog.Metric) float64 {
	for _, v := range thresholds {
		if v.Metric == metric {
			return v.Value
		}
	}
	return 0.3
}

func (feature FeatureStatistics) SmallNumericTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftTwoSampleKSTestLessThan
	threshold := feature.findThreshold(thresholds, catalog.TwoSampleKSTest)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + feature.Name,
		AssertThat:    assertion,
		Column:        &feature.Name,
		Type:          t,
		Metric:        catalog.TwoSampleKSTest,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}

}

func (feature FeatureStatistics) SmallCatTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftChiSquaredLessThan
	threshold := feature.findThreshold(thresholds, catalog.ChiSqrTest)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + feature.Name,
		AssertThat:    assertion,
		Column:        &feature.Name,
		Type:          t,
		Metric:        catalog.ChiSqrTest,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (feature FeatureStatistics) SmallBoolTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftProportionDiffTestLessThan
	threshold := feature.findThreshold(thresholds, catalog.ProportionDifference)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + feature.Name,
		AssertThat:    assertion,
		Column:        &feature.Name,
		Type:          t,
		Metric:        catalog.ProportionDifference,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (feature FeatureStatistics) BigNumericTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftWassersteinDistanceLessThan
	threshold := feature.findThreshold(thresholds, catalog.WassersteinDistance)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + feature.Name,
		AssertThat:    assertion,
		Column:        &feature.Name,
		Type:          t,
		Metric:        catalog.WassersteinDistance,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (feature FeatureStatistics) BigCatTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftJSDivergenceLessThan
	threshold := feature.findThreshold(thresholds, catalog.JSDivergence)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + feature.Name,
		AssertThat:    assertion,
		Column:        &feature.Name,
		Type:          t,
		Metric:        catalog.JSDivergence,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (feature FeatureStatistics) BigBoolTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftJSDivergenceLessThan
	threshold := feature.findThreshold(thresholds, catalog.JSDivergence)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + feature.Name,
		AssertThat:    assertion,
		Column:        &feature.Name,
		Type:          t,
		Metric:        catalog.JSDivergence,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (snapshot *DatasetSnapshot) ToRunReference() catalog.RunReference {
	return catalog.RunReference{Name: snapshot.Name, Version: snapshot.Status.SnapshotVersion}
}

func (snapshot *DatasetSnapshot) HasScheduleTrigger() bool {
	trigger, ok := snapshot.Labels[catalog.TriggerLabelKey]
	if ok {
		return trigger == string(catalog.ScheduleTriggerType)
	}
	return false
}

/////// Reconciler Methods ///////

func (snapshot *DatasetSnapshot) GetStatus() proto.Message {
	return &snapshot.Status
}

func (snapshot *DatasetSnapshot) GetObservedGeneration() int64 {
	return snapshot.Status.ObservedGeneration
}

func (snapshot *DatasetSnapshot) SetObservedGeneration(generation int64) {
	snapshot.Status.ObservedGeneration = generation
}

func (snapshot *DatasetSnapshot) SetUpdatedAt(time *metav1.Time) {
	snapshot.Status.UpdatedAt = time
}

func (snapshot *DatasetSnapshot) SetStatus(status interface{}) {
	snapshot.Status = *status.(*DatasetSnapshotStatus)
}
