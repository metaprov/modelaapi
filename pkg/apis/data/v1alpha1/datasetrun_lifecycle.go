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

func (dataset *DatasetRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(dataset).
		Complete()
}

func (dataset *DatasetRun) ReportName() string {
	return "dataset-report-" + dataset.Name
}

func (dataset *DatasetRun) HasFinalizer() bool {
	return util.HasFin(&dataset.ObjectMeta, data.GroupName)
}
func (dataset *DatasetRun) AddFinalizer()    { util.AddFin(&dataset.ObjectMeta, data.GroupName) }
func (dataset *DatasetRun) RemoveFinalizer() { util.RemoveFin(&dataset.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (dataset *DatasetRun) CreateOrUpdateCondition(cond metav1.Condition) {
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

func (dataset *DatasetRun) GetConditionIndex(t string) int {
	for i, v := range dataset.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (dataset *DatasetRun) GetCondition(condType DatasetRunConditionType) metav1.Condition {
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

func (dataset *DatasetRun) IsReady() bool {
	return dataset.GetCondition(DatasetRunReady).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) StatusString() string {
	return string(dataset.Status.Phase)
}

func (dataset *DatasetRun) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/datasets/%s/%s/runs/%s",
		dataset.Namespace, dataset.Name, strconv.Itoa(int(dataset.Spec.DatasetVersion)), strconv.Itoa(int(dataset.Spec.RunVersion)))
}

func (dataset *DatasetRun) ReportURI() string {
	return fmt.Sprintf("%s/%s-report.pdf", dataset.RootURI(), dataset.Name)
}

func (dataset *DatasetRun) ManifestURI() string {
	return fmt.Sprintf("%s/%s-dataset.yaml", dataset.RootURI(), dataset.Name)
}

func (dataset *DatasetRun) ProfileURI() string {
	return fmt.Sprintf("%s/profile/dataset_profile.json", dataset.RootURI())
}

func ParseDatasetRunYaml(content []byte) (*DatasetRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DatasetRun)
	return r, nil
}

func (dataset *DatasetRun) MarkSkewColumns() {
	for _, v := range dataset.Status.Statistics.Features {
		if v.Skewness > 0.5 || v.Skewness < -0.5 {
			v.Skewed = true
		}
	}
}

func (dataset *DatasetRun) Ingested() bool {
	return dataset.GetCondition(DatasetRunIngested).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) UnitTested() bool {
	return dataset.GetCondition(DatasetRunUnitTested).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) Snapshotted() bool {
	return dataset.GetCondition(DatasetRunSnapshotted).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) Profiled() bool {
	return dataset.GetCondition(DatasetRunProfiled).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) Reported() bool {
	return dataset.GetCondition(DatasetRunReported).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) Generated() bool {
	return dataset.GetCondition(DatasetRunGenerated).Status == metav1.ConditionTrue
}

/////// Snapshot Condition ///////

func (dataset *DatasetRun) MarkSnapshotFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunSnapshotted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetRunPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Snapshot failed: %s", msg))
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}

}

func (dataset *DatasetRun) MarkSnapshotSuccess() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunSnapshotted),
		Status: metav1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetRunPhaseSnapshotSuccess
	dataset.Status.Progress = 10

}

func (dataset *DatasetRun) MarkTakingSnapshot() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunSnapshotted),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetRunPhaseSnapshotRunning),
	})
	dataset.Status.Phase = DatasetRunPhaseSnapshotRunning
	dataset.Status.Progress = 0
}

/////// Group Lifecycle ///////

func (dataset *DatasetRun) Grouped() bool {
	return dataset.GetCondition(DatasetRunGrouped).Status == metav1.ConditionTrue
}

func (dataset *DatasetRun) IndexFileKey() string {
	return dataset.RootURI() + "/" + "groups.json"
}

func (dataset *DatasetRun) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", dataset.RootURI(), task, workerIndex)
}

func (dataset *DatasetRun) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", dataset.RootURI(), task)
}

func (dataset *DatasetRun) GroupsFolder() string {
	return dataset.RootURI() + "/groups"
}

func (dataset *DatasetRun) GroupFolder(keys []string) string {
	return path.Join(dataset.GroupsFolder(), path.Join(keys...))
}

func (dataset *DatasetRun) GroupDataFolder(keys []string) string {
	return dataset.GroupFolder(keys) + "/data"
}

func (dataset *DatasetRun) GroupDataFile(keys []string) string {
	return dataset.GroupDataFolder(keys) + "/raw.csv"
}

func (dataset *DatasetRun) GroupProfileFolder(keys []string) string {
	return dataset.GroupFolder(keys) + "/profile"
}

func (dataset *DatasetRun) GroupReportFile(keys []string) string {
	return dataset.GroupFolder(keys) + "/" + dataset.ReportName() + ".pdf"
}

func (dataset *DatasetRun) GroupForecastFile(keys []string) string {
	return dataset.GroupFolder(keys) + "/forecasts/forecast.csv"
}

/////// Group Condition ///////

func (dataset *DatasetRun) MarkGroupFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunGrouped),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetRunPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Group by failed: %s", msg))
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}

}

func (dataset *DatasetRun) MarkGroupSuccess() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunGrouped),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetRunGrouped),
	})
	dataset.Status.Phase = DatasetRunPhaseGrouped
	dataset.Status.Progress = 30

}

func (dataset *DatasetRun) MarkGrouping() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunGrouped),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetRunPhaseGrouping),
	})
	dataset.Status.Phase = DatasetRunPhaseGrouping
	dataset.Status.Progress = 20
}

/////// Unit Test Condition ///////

func (dataset *DatasetRun) MarkUnitTestFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunUnitTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})

	dataset.Status.Phase = DatasetRunPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Unit test failed: %s", msg))
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

func (dataset *DatasetRun) MarkUnitTested() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunUnitTested),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetRunUnitTested),
	})
	dataset.Status.Progress = 90

}

func (dataset *DatasetRun) MarkUnitTesting() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunUnitTested),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetRunPhaseUnitTesting),
	})
	dataset.Status.Phase = DatasetRunPhaseUnitTesting
	dataset.Status.Progress = 80
}

/////// Generating Condition ///////

func (dataset *DatasetRun) MarkGenerating() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunGenerated),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetRunPhaseGenerating),
	})
	dataset.Status.Phase = DatasetRunPhaseGenerating
	dataset.Status.Progress = 40

}

func (dataset *DatasetRun) MarkGenerated() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunGenerated),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetRunGenerated),
	})
	dataset.Status.Phase = DatasetRunPhaseGenerateSuccess
	dataset.Status.Progress = 50

}

func (dataset *DatasetRun) MarkGeneratedFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunGenerated),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	dataset.Status.Phase = DatasetRunPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Generation failed: %s", msg))
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

/////// Reporting Condition ///////

func (dataset *DatasetRun) MarkReporting() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunReported),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetRunPhaseReportRunning),
	})
	dataset.Status.Phase = DatasetRunPhaseReportRunning
	dataset.Status.Progress = 80
}

func (dataset *DatasetRun) MarkReported() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunReported),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetRunReported),
	})
	dataset.Status.Phase = DatasetRunPhaseReportSuccess
	dataset.Status.Progress = 90
}

func (dataset *DatasetRun) MarkReportFailed(reason string, msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunReported),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
}

/////// Profile Condition ///////

func (dataset *DatasetRun) MarkProfiling() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunProfiled),
		Status: metav1.ConditionFalse,
		Reason: string(DatasetRunPhaseProfileRunning),
	})
	dataset.Status.Phase = DatasetRunPhaseProfileRunning
	dataset.Status.Progress = 60
}

func (dataset *DatasetRun) MarkProfiled(profileLocation catalog.FileLocation) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunProfiled),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetRunProfiled),
	})
	dataset.Status.ProfileLocation = profileLocation
	dataset.Status.Phase = DatasetRunPhaseProfileSuccess
	dataset.Status.Progress = 70
}

func (dataset *DatasetRun) MarkProfiledFailed(msg string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunProfiled),
		Status:  metav1.ConditionFalse,
		Reason:  string(DatasetRunPhaseFailed),
		Message: msg,
	})
}

func (r *Dataset) OpName() string {
	return r.Namespace + "-" + r.Name
}

/////// Ready Condition ///////

func (dataset *DatasetRun) MarkReady() {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DatasetRunReady),
		Status: metav1.ConditionTrue,
		Reason: string(DatasetRunReady),
	})
	dataset.Status.Phase = DatasetRunPhaseReady
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

func (dataset *DatasetRun) MarkReadyFailed(reason string, err string) {
	dataset.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DatasetRunReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	dataset.Status.Phase = DatasetRunPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Mark ready failed: %s", err))
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.CompletedAt == nil {
		dataset.Status.CompletedAt = &now
	}
}

func (dataset *DatasetRun) Deleted() bool {
	return !dataset.ObjectMeta.DeletionTimestamp.IsZero()
}

func (dataset *DatasetRun) IsFailed() bool {
	return dataset.Status.Phase == DatasetRunPhaseFailed
}

func (dataset *DatasetRun) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Dataset run %s completed successfully", dataset.Name)
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

func (dataset *DatasetRun) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Dataset %s failed with error: %v", dataset.Name, err.Error())
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

func (dataset *DatasetRun) ConstructFeatureHistogram() (*FeatureHistogram, error) {
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
func (dataset *DatasetRun) DriftColumnNames() []string {
	result := make([]string, 0)
	for _, v := range dataset.Status.Statistics.Features {
		if !v.Target {
			result = append(result, v.Name)
		}

	}
	return result
}

// Search for a column stat, based on name
func (dataset *DatasetRun) GetColumn(name string) (*FeatureStatistics, error) {
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

func (dataset *DatasetRun) GetStatus() proto.Message {
	return &dataset.Status
}

func (dataset *DatasetRun) GetObservedGeneration() int64 {
	return dataset.Status.ObservedGeneration
}

func (dataset *DatasetRun) SetObservedGeneration(generation int64) {
	dataset.Status.ObservedGeneration = generation
}

func (dataset *DatasetRun) SetUpdatedAt(time *metav1.Time) {
	dataset.Status.UpdatedAt = time
}

func (dataset *DatasetRun) SetStatus(status interface{}) {
	dataset.Status = *status.(*DatasetRunStatus)
}
