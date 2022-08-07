/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/klog/v2"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (r *Dataset) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (dataset *Dataset) ReportName() string {
	return "dataset-report-" + dataset.Name
}

func (dataset *Dataset) HasFinalizer() bool { return util.HasFin(&dataset.ObjectMeta, data.GroupName) }
func (dataset *Dataset) AddFinalizer()      { util.AddFin(&dataset.ObjectMeta, data.GroupName) }
func (dataset *Dataset) RemoveFinalizer()   { util.RemoveFin(&dataset.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (dataset *Dataset) CreateOrUpdateCond(cond DatasetCondition) {
	i := dataset.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		dataset.Status.Conditions = append(dataset.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := dataset.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	dataset.Status.Conditions[i] = current
}

func (dataset *Dataset) GetCondIdx(t DatasetConditionType) int {
	for i, v := range dataset.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (dataset *Dataset) GetCond(t DatasetConditionType) DatasetCondition {
	for _, v := range dataset.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DatasetCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (dataset *Dataset) IsReady() bool {
	return dataset.GetCond(DatasetReady).Status == v1.ConditionTrue
}

func (dataset *Dataset) StatusString() string {
	return string(dataset.Status.Phase)
}

func (dataset *Dataset) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasets/%s", dataset.Namespace, *dataset.Spec.VersionName, dataset.Name)
}

func (dataset *Dataset) ReportUri() string {
	return fmt.Sprintf("%s/%s-report.pdf", dataset.RootUri(), dataset.Name)
}

func (dataset *Dataset) ManifestUri() string {
	return fmt.Sprintf("%s/%s-dataset.yaml", dataset.RootUri(), dataset.Name)
}

func (dataset *Dataset) ProfileUri() string {
	return fmt.Sprintf("modela/live/tenants/default-tenant/dataproducts/%s/dataproductversions/%s/datasets/%s/profile/dataset_profile.json",
		dataset.Namespace, *dataset.Spec.VersionName, dataset.Name)
}

func ParseDatasetYaml(content []byte) (*Dataset, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Dataset)
	return r, nil
}

func (dataset *Dataset) Populate(name string) {

	dataset.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modela-data",
	}

	dataset.Spec = DatasetSpec{
		VersionName:    util.StrPtr("iris-0.0.1"),
		DataSourceName: util.StrPtr("iris-source"),
	}
}

// update the phase of the study based on its condition
func (dataset *Dataset) UpdatePhaseFromConditions() {
	if dataset.IsReady() {
		dataset.Status.Phase = DatasetPhaseReady
	} else if dataset.IsInCond(DatasetProfiled) {
		dataset.Status.Phase = DatasetPhaseProfileSuccess
	} else if dataset.IsInCond(DatasetReported) {
		dataset.Status.Phase = DatasetPhaseReportSuccess
	} else if dataset.IsInCond(DatasetIngested) {
		dataset.Status.Phase = DatasetPhaseIngestSuccess
	}
}

func (dataset *Dataset) IsInCond(ct DatasetConditionType) bool {
	current := dataset.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (dataset *Dataset) MarkSkewColumns() {
	for _, v := range dataset.Status.Statistics.Columns {
		if v.Skewness > 0.5 || v.Skewness < -0.5 {
			v.Skewed = true
		}
	}

}

func (dataset *Dataset) PrintConditions() {
	for _, v := range dataset.Status.Conditions {
		fmt.Println(v)
	}
}

func (dataset *Dataset) Ingested() bool {
	return dataset.GetCond(DatasetIngested).Status == v1.ConditionTrue
}

func (dataset *Dataset) UnitTested() bool {
	return *dataset.Spec.UnitTested && dataset.GetCond(DatasetUnitTested).Status == v1.ConditionTrue
}

func (dataset *Dataset) Snapshotted() bool {
	return *dataset.Spec.Snapshotted && dataset.GetCond(DatasetSnapshotted).Status == v1.ConditionTrue
}

func (dataset *Dataset) Profiled() bool {
	return dataset.GetCond(DatasetProfiled).Status == v1.ConditionTrue
}

func (dataset *Dataset) Reported() bool {
	return dataset.GetCond(DatasetReported).Status == v1.ConditionTrue
}

func (dataset *Dataset) Generated() bool {
	return dataset.GetCond(DatasetGenerated).Status == v1.ConditionTrue
}

//------------------------------ Snapshot

func (dataset *Dataset) MarkSnapshotFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetSnapshotted,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to snapshot." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}

}

func (dataset *Dataset) MarkSnapshotSuccess() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetSnapshotted,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseSnapshotSuccess
	dataset.Status.Progress = 20

}

func (dataset *Dataset) MarkTakingSnapshot() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetSnapshotted,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseSnapshotRunning),
	})
	dataset.Status.Phase = DatasetPhaseSnapshotRunning
	dataset.Status.Progress = 10
}

// ----------------------------- Unit Tests --------------------

func (dataset *Dataset) MarkUnitTestFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetUnitTested,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to validate." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}
}

func (dataset *Dataset) MarkUnitTested() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetUnitTested,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Progress = 40

}

func (dataset *Dataset) MarkUnitTesting() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetUnitTested,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseUnitTesting),
	})
	dataset.Status.Phase = DatasetPhaseUnitTesting
	dataset.Status.Progress = 10
}

// ------------------------- injest

func (dataset *Dataset) MarkIngesting() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetIngested,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseIngestRunning),
	})
	dataset.Status.Phase = DatasetPhaseIngestRunning
	dataset.Status.Progress = 50

}

func (dataset *Dataset) MarkIngested() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetIngested,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseIngestSuccess
	dataset.Status.Progress = 60

}

func (dataset *Dataset) MarkIngestFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetIngested,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to ingest." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}
}

// -------------------- generating

func (dataset *Dataset) MarkGenerting() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetGenerated,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseGenerating),
	})
	dataset.Status.Phase = DatasetPhaseGenerating
	dataset.Status.Progress = 60

}

func (dataset *Dataset) MarkGenerated() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetGenerated,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseGenSuccess
	dataset.Status.Progress = 70

}

func (dataset *Dataset) MarkGeneratedFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetGenerated,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to generate dataset." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}
}

// ------------------------- report

func (dataset *Dataset) MarkReporting() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetReported,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseReportRunning),
	})
	dataset.Status.Phase = DatasetPhaseReportRunning
	dataset.Status.Progress = 80
}

func (dataset *Dataset) MarkReported() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetReported,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseReportSuccess
	dataset.Status.Progress = 90
}

func (dataset *Dataset) MarkReportFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetReported,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to report." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}
}

// ----------------- profile

func (dataset *Dataset) MarkProfiling() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetProfiled,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseProfileRunning),
	})
	dataset.Status.Phase = DatasetPhaseProfileRunning
	dataset.Status.Progress = 70
}

func (dataset *Dataset) MarkProfiled(uri string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetProfiled,
		Status: v1.ConditionTrue,
	})
	dataset.Status.ProfileUri = uri
	dataset.Status.Phase = DatasetPhaseProfileSuccess
	dataset.Status.Progress = 80
}

func (dataset *Dataset) MarkProfiledFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetProfiled,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to profiled." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}
}

func (r *Dataset) OpName() string {
	return r.Namespace + "-" + r.Name

}

func (dataset *Dataset) MarkReady() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetReady,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseReady
	dataset.Status.Progress = 100
	now := metav1.Now()
	if dataset.Status.EndTime == nil {
		dataset.Status.EndTime = &now
	}
}

// --------------------- Archive

func (dataset *Dataset) MarkArchived() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetArchived,
		Status: v1.ConditionTrue,
	})
}

func (dataset *Dataset) MarkSaved() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetSaved,
		Status: v1.ConditionTrue,
	})
}

func (dataset *Dataset) Archived() bool {
	return dataset.GetCond(DatasetArchived).Status == v1.ConditionTrue
}

func (dataset *Dataset) Saved() bool {
	return dataset.GetCond(DatasetSaved).Status == v1.ConditionTrue
}

func (dataset *Dataset) Deleted() bool {
	return !dataset.ObjectMeta.DeletionTimestamp.IsZero()
}

func (dataset *Dataset) IsFailed() bool {
	return dataset.Status.Phase == DatasetPhaseFailed
}

// Generate a dataset completion alert
func (dataset *Dataset) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Entity %s completed successfully ", dataset.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: dataset.Name,
			Namespace:    dataset.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      dataset.Name,
				Namespace: dataset.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        dataset.Spec.Owner,
			Fields: map[string]string{
				"Rows":       util.ItoA(&dataset.Status.Statistics.Rows),
				"Columns":    util.ItoA(&dataset.Status.Statistics.Cols),
				"Size":       util.ItoA(&dataset.Status.Statistics.FileSize),
				"Start Time": dataset.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if dataset.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = dataset.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (dataset *Dataset) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Entity %s failed with error %v", dataset.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: dataset.Name,
			Namespace:    dataset.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      util.StrPtr(subject),
			Message:      util.StrPtr(err.Error()),
			Level:        &level,
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      dataset.Name,
				Namespace: dataset.Namespace,
			},
			Owner: dataset.Spec.Owner,
			Fields: map[string]string{
				"Rows":       util.ItoA(&dataset.Status.Statistics.Rows),
				"Columns":    util.ItoA(&dataset.Status.Statistics.Cols),
				"Size":       util.ItoA(&dataset.Status.Statistics.FileSize),
				"Start Time": dataset.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if dataset.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = dataset.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (dataset *Dataset) ConstuctFeatureHistogram() (*FeatureHistogram, error) {
	// get the columns that we need to track drift for
	columns := dataset.DriftColumnNames()

	// create the actual column histogram for the status.
	histograms := make([]ColumnHistogram, 0)
	// iterate over all the columns and build the feature histograms
	for _, c := range columns {
		column, err := dataset.GetColumn(c)
		if err != nil {
			klog.ErrorS(err, "cannot find dataset feature", "column", c)
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
			VersionName: dataset.Spec.VersionName,
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
			LastUpdated:        nil,
			Logs:               catalog.Logs{},
			Phase:              "",
		},
	}

	return result, nil

}

// return the list of drift. Currently return the drift columns
func (dataset *Dataset) DriftColumnNames() []string {
	result := make([]string, 0)
	for _, v := range dataset.Status.Statistics.Columns {
		result = append(result, v.Name)
	}
	return result
}

// Search for a column stat, based on name
func (dataset *Dataset) GetColumn(name string) (*ColumnStatistics, error) {
	for _, v := range dataset.Status.Statistics.Columns {
		if v.Name == name {
			return &v, nil
		}
	}
	return nil, fmt.Errorf("column not found %s", name)

}

// Based on the column type generate the drift test case
func (col *ColumnStatistics) GenDriftTestCase(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	// small data
	if rowCount < 1000 && col.DataType == catalog.DataTypeNumber {
		return col.SmallNumericTest(thresholds, rowCount)
	}
	if rowCount < 1000 && col.DataType == catalog.DataTypeCategorical {
		return col.SmallCatTest(thresholds, rowCount)
	}
	if rowCount < 1000 && col.DataType == catalog.DataTypeBoolean {
		return col.SmallBoolTest(thresholds, rowCount)
	}
	if rowCount >= 1000 && col.DataType == catalog.DataTypeNumber {
		return col.BigNumericTest(thresholds, rowCount)
	}
	if rowCount >= 1000 && col.DataType == catalog.DataTypeCategorical {
		return col.BigCatTest(thresholds, rowCount)
	}
	if rowCount >= 1000 && col.DataType == catalog.DataTypeBoolean {
		return col.BigBoolTest(thresholds, rowCount)
	}

	return &catalog.DataTestCase{}

	// large data
}

func (col *ColumnStatistics) findThreshold(thresholds []DriftThreshold, metric catalog.Metric) float64 {
	for _, v := range thresholds {
		if v.Metric == metric {
			return v.Value
		}
	}
	return 0.3
}

func (col *ColumnStatistics) SmallNumericTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftTwoSampleKSTestLessThan
	threshold := col.findThreshold(thresholds, catalog.TwoSampleKSTest)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + col.Name,
		AssertThat:    assertion,
		Column:        &col.Name,
		Type:          t,
		Metric:        catalog.TwoSampleKSTest,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}

}

func (col *ColumnStatistics) SmallCatTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftChiSquaredLessThan
	threshold := col.findThreshold(thresholds, catalog.ChiSqrTest)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + col.Name,
		AssertThat:    assertion,
		Column:        &col.Name,
		Type:          t,
		Metric:        catalog.ChiSqrTest,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (col *ColumnStatistics) SmallBoolTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftProportionDiffTestLessThan
	threshold := col.findThreshold(thresholds, catalog.ProportionDifference)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + col.Name,
		AssertThat:    assertion,
		Column:        &col.Name,
		Type:          t,
		Metric:        catalog.ProportionDifference,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (col *ColumnStatistics) BigNumericTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftWassersteinDistanceLessThan
	threshold := col.findThreshold(thresholds, catalog.WassersteinDistance)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + col.Name,
		AssertThat:    assertion,
		Column:        &col.Name,
		Type:          t,
		Metric:        catalog.WassersteinDistance,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (col *ColumnStatistics) BigCatTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftJSDivergenceLessThan
	threshold := col.findThreshold(thresholds, catalog.JSDivergence)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + col.Name,
		AssertThat:    assertion,
		Column:        &col.Name,
		Type:          t,
		Metric:        catalog.JSDivergence,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}

func (col *ColumnStatistics) BigBoolTest(thresholds []DriftThreshold, rowCount int32) *catalog.DataTestCase {
	assertion := ModelDriftJSDivergenceLessThan
	threshold := col.findThreshold(thresholds, catalog.JSDivergence)
	t := catalog.DataTestTypeDataDrift
	return &catalog.DataTestCase{
		Enabled:       util.BoolPtr(true),
		Name:          string(assertion) + "/" + col.Name,
		AssertThat:    assertion,
		Column:        &col.Name,
		Type:          t,
		Metric:        catalog.JSDivergence,
		ExpectedValue: util.Float64Ptr(threshold),
		Generated:     util.BoolPtr(true),
	}
}
