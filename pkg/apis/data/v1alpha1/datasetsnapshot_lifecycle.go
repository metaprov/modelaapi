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
	"strconv"
)

func (dataset *DatasetSnapshot) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(dataset).
		Complete()
}

func (dataset *DatasetSnapshot) ReportName() string {
	return "dataset-report-" + dataset.Name
}

func (dataset *DatasetSnapshot) HasFinalizer() bool {
	return util.HasFin(&dataset.ObjectMeta, data.GroupName)
}
func (dataset *DatasetSnapshot) AddFinalizer() { util.AddFin(&dataset.ObjectMeta, data.GroupName) }
func (dataset *DatasetSnapshot) RemoveFinalizer() {
	util.RemoveFin(&dataset.ObjectMeta, data.GroupName)
}

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (dataset *DatasetSnapshot) CreateOrUpdateCondition(cond metav1.Condition) {
	i := dataset.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		dataset.Status.Conditions = append(dataset.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := dataset.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	dataset.Status.Conditions[i] = current
}

func (dataset *DatasetSnapshot) GetConditionIndex(t string) int {
	for i, v := range dataset.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (dataset *DatasetSnapshot) GetCondition(condType DatasetSnapshotConditionType) metav1.Condition {
	for _, v := range dataset.Status.Conditions {
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

func (dataset *DatasetSnapshot) Ready() bool {
	return dataset.GetCondition(DatasetSnapshotReady).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Prepared() bool {
	return dataset.GetCondition(DatasetSnapshotPrepared).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) UnitTested() bool {
	return dataset.GetCondition(DatasetSnapshotUnitTested).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Snapshotted() bool {
	return dataset.GetCondition(DatasetSnapshotSnapshotted).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Profiled() bool {
	return dataset.GetCondition(DatasetSnapshotProfiled).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Reported() bool {
	return dataset.GetCondition(DatasetSnapshotReported).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Generated() bool {
	return dataset.GetCondition(DatasetSnapshotGenerated).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Aborted() bool {
	return dataset.GetCondition(DatasetSnapshotAborted).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) Paused() bool {
	return dataset.GetCondition(DatasetSnapshotPaused).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) ExternalStatusUpdated() bool {
	return dataset.GetCondition(DatasetSnapshotExternalStatusUpdated).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/datasets/%s/snapshots/%s",
		dataset.Namespace, dataset.Name, strconv.Itoa(int(dataset.Status.SnapshotVersion)))
}

func (dataset *DatasetSnapshot) ReportURI() string {
	return fmt.Sprintf("%s/%s-report.pdf", dataset.RootURI(), dataset.Name)
}

func (dataset *DatasetSnapshot) ManifestURI() string {
	return fmt.Sprintf("%s/manifest.json", dataset.RootURI(), dataset.Name)
}

func (dataset *DatasetSnapshot) ProfileURI() string {
	return fmt.Sprintf("%s/profile/dataset_profile.json", dataset.RootURI())
}

func ParseDatasetSnapshotYaml(content []byte) (*DatasetSnapshot, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DatasetSnapshot)
	return r, nil
}

func (dataset *DatasetSnapshot) MarkSkewColumns() {
	for _, v := range dataset.Status.Statistics.Features {
		if v.Skewness > 0.5 || v.Skewness < -0.5 {
			v.Skewed = true
		}
	}
}

func (dataset *DatasetSnapshot) RefreshProgress() {
	if dataset.Ready() || dataset.Failed() || dataset.Aborted() {
		dataset.Status.Progress = 100
	} else if dataset.Reported() {
		dataset.Status.Progress = 80
	} else if dataset.Profiled() {
		dataset.Status.Progress = 60
	} else if dataset.UnitTested() {
		dataset.Status.Progress = 60
	} else if dataset.Snapshotted() {
		dataset.Status.Progress = 40
	} else if dataset.Generated() {
		dataset.Status.Progress = 40
	} else if dataset.Prepared() {
		dataset.Status.Progress = 20
	}
}

func (dataset *DatasetSnapshot) ReachedMaxTime() bool {
	if dataset.Spec.Timeout == nil {
		return false
	}
	duration := metav1.Now().Unix() - dataset.CreationTimestamp.Unix()
	return int32(duration/60) >= int32(*dataset.Spec.Timeout)
}

func (dataset *DatasetSnapshot) MarkAborted() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotAborted),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotAborted),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseAborted
	dataset.RefreshProgress()
}

/////// Preparing Condition ///////

func (dataset *DatasetSnapshot) MarkPrepareFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotPrepared),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetSnapshotPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Prepare failed: %s", msg))
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}

}

func (dataset *DatasetSnapshot) MarkPrepareSuccess() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotPrepared),
		Status: metav1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetSnapshotPhasePrepared
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkPreparing() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotSnapshotted),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhasePreparing),
	})
	dataset.Status.Phase = DatasetSnapshotPhasePreparing
	dataset.RefreshProgress()
}

/////// Snapshot Condition ///////

func (dataset *DatasetSnapshot) MarkSnapshotFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotSnapshotted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetSnapshotPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Snapshot failed: %s", msg))
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}

}

func (dataset *DatasetSnapshot) MarkSnapshotSuccess() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotSnapshotted),
		Status: metav1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetSnapshotPhaseSnapshotSuccess
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkTakingSnapshot() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotSnapshotted),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseSnapshotRunning),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseSnapshotRunning
	dataset.RefreshProgress()
}

/////// Group Lifecycle ///////

func (dataset *DatasetSnapshot) Grouped() bool {
	return dataset.GetCondition(DatasetSnapshotGrouped).Status == metav1.ConditionTrue
}

func (dataset *DatasetSnapshot) IndexFileKey() string {
	return dataset.RootURI() + "/" + "groups.json"
}

func (dataset *DatasetSnapshot) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", dataset.RootURI(), task, workerIndex)
}

func (dataset *DatasetSnapshot) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", dataset.RootURI(), task)
}

func (dataset *DatasetSnapshot) GroupsFolder() string {
	return dataset.RootURI() + "/groups"
}

func (dataset *DatasetSnapshot) GroupFolder(keys []string) string {
	return path.Join(dataset.GroupsFolder(), path.Join(keys...))
}

func (dataset *DatasetSnapshot) GroupDataFolder(keys []string) string {
	return dataset.GroupFolder(keys) + "/data"
}

func (dataset *DatasetSnapshot) GroupDataFile(keys []string) string {
	return dataset.GroupDataFolder(keys) + "/raw.csv"
}

func (dataset *DatasetSnapshot) GroupProfileFolder(keys []string) string {
	return dataset.GroupFolder(keys) + "/profile"
}

func (dataset *DatasetSnapshot) GroupReportFile(keys []string) string {
	return dataset.GroupFolder(keys) + "/" + dataset.ReportName() + ".pdf"
}

func (dataset *DatasetSnapshot) GroupForecastFile(keys []string) string {
	return dataset.GroupFolder(keys) + "/forecasts/forecast.csv"
}

/////// Group Condition ///////

func (dataset *DatasetSnapshot) MarkGroupFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotGrouped),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetSnapshotPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Group by failed: %s", msg))
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}

}

func (dataset *DatasetSnapshot) MarkGroupSuccess() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGrouped),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotGrouped),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseGrouped
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkGrouping() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGrouped),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseGrouping),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseGrouping
	dataset.RefreshProgress()
}

/////// Unit Test Condition ///////

func (dataset *DatasetSnapshot) MarkUnitTestFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotUnitTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})

	dataset.Status.Phase = DatasetSnapshotPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Unit test failed: %s", msg))
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

func (dataset *DatasetSnapshot) MarkUnitTested() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotUnitTested),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotUnitTested),
	})
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkUnitTesting() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotUnitTested),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseUnitTesting),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseUnitTesting
	dataset.RefreshProgress()
}

/////// Generating Condition ///////

func (dataset *DatasetSnapshot) MarkGenerating() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGenerated),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseGenerating),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseGenerating
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkGenerated() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotGenerated),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotGenerated),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseGenerateSuccess
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkGeneratedFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotGenerated),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetSnapshotPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Generation failed: %s", msg))
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

/////// Reporting Condition ///////

func (dataset *DatasetSnapshot) MarkReporting() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotReported),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseReportRunning),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseReportRunning
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkReported() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotReported),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotReported),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseReportSuccess
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkReportFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotReported),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
}

/////// Profile Condition ///////

func (dataset *DatasetSnapshot) MarkProfiling() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotProfiled),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotPhaseProfileRunning),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseProfileRunning
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkProfiled(profileLocation catalog.FileLocation) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotProfiled),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotProfiled),
	})
	dataset.Status.ProfileLocation = profileLocation
	dataset.Status.Phase = DatasetSnapshotPhaseProfileSuccess
	dataset.RefreshProgress()
}

func (dataset *DatasetSnapshot) MarkProfileFailed(reason string, err string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
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

func (dataset *DatasetSnapshot) MarkReady() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotReady),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetSnapshotReady),
	})
	dataset.Status.Phase = DatasetSnapshotPhaseReady
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

func (dataset *DatasetSnapshot) MarkReadyFailed(reason string, err string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetSnapshotReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	dataset.Status.Phase = DatasetSnapshotPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Mark ready failed: %s", err))
	dataset.RefreshProgress()
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

/////// External Status Updated Condition ///////

func (dataset *DatasetSnapshot) MarkExternalStatusNotUpdated() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotExternalStatusUpdated),
		Status: metav1.ConditionFalse,
		Reason: "ExternalStatusStale",
	})
}

func (dataset *DatasetSnapshot) MarkExternalStatusUpdated() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetSnapshotExternalStatusUpdated),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetSnapshotExternalStatusUpdated),
	})
}

func (dataset *DatasetSnapshot) Deleted() bool {
	return !dataset.ObjectMeta.DeletionTimestamp.IsZero()
}

func (dataset *DatasetSnapshot) Failed() bool {
	return dataset.Status.Phase == DatasetSnapshotPhaseFailed
}

func (dataset *DatasetSnapshot) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Dataset snapshot %s completed successfully", dataset.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: dataset.Name,
			Namespace:    dataset.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      subject,
			Level:        &level,
			Notification: notification,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      dataset.Name,
				Namespace: dataset.Namespace,
			},
			Owner: dataset.Spec.Owner,
			Fields: map[string]string{
				"Rows":       util.ItoA(&dataset.Status.Statistics.Rows),
				"Columns":    util.ItoA(&dataset.Status.Statistics.Columns),
				"Size":       util.ItoA(&dataset.Status.Statistics.SizeInBytes),
				"Start Time": dataset.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if dataset.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = dataset.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (dataset *DatasetSnapshot) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Dataset snapshot %s failed with error: %v", dataset.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: dataset.Name,
			Namespace:    dataset.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      subject,
			Level:        &level,
			Notification: notification,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      dataset.Name,
				Namespace: dataset.Namespace,
			},
			Owner: dataset.Spec.Owner,
			Fields: map[string]string{
				"Rows":       util.ItoA(&dataset.Status.Statistics.Rows),
				"Columns":    util.ItoA(&dataset.Status.Statistics.Columns),
				"Size":       util.ItoA(&dataset.Status.Statistics.SizeInBytes),
				"Start Time": dataset.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if dataset.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = dataset.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (dataset *DatasetSnapshot) ConstructFeatureHistogram() (*FeatureHistogram, error) {
	// get the columns that we need to track drift for
	columns := dataset.DriftColumnNames()

	// create the actual column histogram for the status.
	histograms := make([]ColumnHistogram, 0)
	// iterate over all the columns and build the feature histograms
	for _, c := range columns {
		column, err := dataset.GetColumn(c)
		if err != nil {
			return nil, err
		}
		each := ColumnHistogram{
			Name:      c,
			Histogram: column.Histogram,
		}
		histograms = append(histograms, each)
	}

	// create a training feature histogram for the dataset.
	result := &FeatureHistogram{
		ObjectMeta: metav1.ObjectMeta{
			Name:      dataset.Name,
			Namespace: dataset.Namespace,
		},
		Spec: FeatureHistogramSpec{
			Owner:       dataset.Spec.Owner,
			Description: util.StrPtr(""),
			Columns:     columns,
			SourceRef: &v1.ObjectReference{
				Namespace: dataset.Namespace,
				Name:      dataset.Name,
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
func (dataset *DatasetSnapshot) DriftColumnNames() []string {
	result := make([]string, 0)
	for _, v := range dataset.Status.Statistics.Features {
		if !v.Target {
			result = append(result, v.Name)
		}

	}
	return result
}

// Search for a column stat, based on name
func (dataset *DatasetSnapshot) GetColumn(name string) (*FeatureStatistics, error) {
	for _, v := range dataset.Status.Statistics.Features {
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

func (dataset *DatasetSnapshot) ToRunReference() catalog.RunReference {
	return catalog.RunReference{Name: dataset.Name, Version: dataset.Status.SnapshotVersion}
}

func (dataset *DatasetSnapshot) HasScheduleTrigger() bool {
	trigger, ok := dataset.Labels[catalog.TriggerLabelKey]
	if ok {
		return trigger == string(catalog.ScheduleTriggerType)
	}
	return false
}

func (dataset *DatasetSnapshot) GetStatus() proto.Message {
	return &dataset.Status
}

func (dataset *DatasetSnapshot) GetObservedGeneration() int64 {
	return dataset.Status.ObservedGeneration
}

func (dataset *DatasetSnapshot) SetObservedGeneration(generation int64) {
	dataset.Status.ObservedGeneration = generation
}

func (dataset *DatasetSnapshot) SetUpdatedAt(time *metav1.Time) {
	dataset.Status.UpdatedAt = time
}

func (dataset *DatasetSnapshot) SetStatus(status interface{}) {
	dataset.Status = *status.(*DatasetSnapshotStatus)
}
