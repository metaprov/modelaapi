/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"strings"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

// Set up the webhook with the manager.
func (report *Report) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(report).
		Complete()
}

// Merge or update condition
func (report *Report) CreateOrUpdateCond(cond metav1.Condition) {
	i := report.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		report.Status.Conditions = append(report.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := report.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	report.Status.Conditions[i] = current
}

func (report Report) GetCondIdx(t string) int {
	for i, v := range report.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (report Report) GetCond(t string) metav1.Condition {
	for _, v := range report.Status.Conditions {
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

func (report Report) IsReady() bool {
	return report.GetCond(ReportReady).Status == metav1.ConditionTrue
}

func NewReport(
	namespace string,
	name string,
	entity string,
	reportType ReportType,
	bucketName string) *Report {

	result := &Report{}
	result.Default()
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = namespace
	result.Spec.EntityRef.Name = entity
	result.Spec.ReportType = reportType
	result.Spec.ArtifactBucketName = util.StrPtr(bucketName)
	result.ObjectMeta.Labels = make(map[string]string)

	return result
}

func (report *Report) Label(key string, value string) {
	report.ObjectMeta.Labels[key] = value
}

//==============================================================================
// Finilizer
//==============================================================================

func (report Report) HasFinalizer() bool { return util.HasFin(&report.ObjectMeta, training.GroupName) }
func (report *Report) AddFinalizer()     { util.AddFin(&report.ObjectMeta, training.GroupName) }
func (report *Report) RemoveFinalizer()  { util.RemoveFin(&report.ObjectMeta, training.GroupName) }

//==============================================================================
// Status string
//==============================================================================

func (report Report) IsDatasetReport() bool {
	return report.Spec.ReportType == BinaryClassificationDatasetReport ||
		report.Spec.ReportType == MultiClassificationDatasetReport ||
		report.Spec.ReportType == RegressionDatasetReport ||
		report.Spec.ReportType == ForecastDatasetReport ||
		report.Spec.ReportType == PartitionTimeSeriesDatasetReport
}

func (report Report) IsStudyReport() bool {
	return report.Spec.ReportType == StudyReport
}

func (report Report) IsForecastReport() bool {
	return report.Spec.ReportType == ForecastReport
}

func (report Report) IsModelReport() bool {
	return report.Spec.ReportType == BinaryClassificationModelReport ||
		report.Spec.ReportType == ForecastModelReport ||
		report.Spec.ReportType == MultiClassificationModelReport ||
		report.Spec.ReportType == RegressionModelReport ||
		report.Spec.ReportType == PartitionTimeSeriesModelReport
}

func (report Report) RootURI() string {
	if report.Spec.ReportType == PartitionTimeSeriesDatasetReport {
		if len(report.Spec.Key) > 0 {
			return fmt.Sprintf("dataproducts/%s/datasets/%s/snapshots/%s/groups/%s/reports/%s",
				report.Namespace,
				report.Labels[catalog.DatasetLabelKey],
				report.Spec.EntityRef.Name,
				strings.Join(report.Spec.Key, "/"),
				report.Name)
		} else {
			return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasets/%s/reports/%s",
				report.Namespace,
				report.Labels[catalog.DatasetLabelKey],
				report.Spec.EntityRef.Name,
				report.Name)
		}

	}

	if report.Spec.ReportType == PartitionTimeSeriesModelReport {
		if len(report.Spec.Key) > 0 {
			return fmt.Sprintf("dataproducts/%s/studies/%s/studyruns/%s/models/%s/groups/%s/reports/%s",
				report.Namespace,
				report.Labels[catalog.StudyLabelKey],
				report.Labels[catalog.StudyRunLabelKey],
				report.Spec.EntityRef.Name,
				strings.Join(report.Spec.Key, "/"),
				report.Name)
		} else {
			return fmt.Sprintf("dataproducts/%s/studies/%s/studyruns/%s/models/%s/reports/%s",
				report.Namespace,
				report.Labels[catalog.StudyLabelKey],
				report.Labels[catalog.StudyRunLabelKey],
				report.Spec.EntityRef.Name,
				report.Name)
		}
	}

	if report.IsModelReport() {
		return fmt.Sprintf("dataproducts/%s/studies/%s/studyruns/%s/models/%s/reports/%s",
			report.Namespace,
			report.Labels[catalog.StudyLabelKey],
			report.Labels[catalog.StudyRunLabelKey],
			report.Spec.EntityRef.Name,
			report.Name)

	}
	if report.IsDatasetReport() {
		return fmt.Sprintf("dataproducts/%s/datasets/%s/snapshots/%s/reports/%s",
			report.Namespace,
			report.Labels[catalog.DatasetLabelKey],
			report.Spec.EntityRef.Name,
			report.Name)
	}

	if report.IsStudyReport() {
		return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/studies/%s", report.Namespace, report.Spec.VersionName, report.Spec.EntityRef.Name)
	}

	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/reports", report.Namespace, report.Spec.VersionName)
}

func (report Report) ManifestURI() string {
	return fmt.Sprintf("%s/%s-report.yaml", report.RootURI(), report.Name)
}

// dataproducts/*/models/*/bin/model.joblib
func (report Report) PdfURI() string {
	return fmt.Sprintf("%s/%s.pdf", report.RootURI(), report.Name)
}

func (report Report) IsGroup() bool {
	return report.Spec.ReportType == PartitionTimeSeriesDatasetReport || report.Spec.ReportType == PartitionTimeSeriesModelReport
}

func ParseReportYaml(content []byte) (*Report, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Report)
	return r, nil
}

func (report Report) ValidateDelete() error {
	return nil
}

func (report Report) IndexFileKey() string {
	return report.RootURI() + "/group_report_index.json"
}

func (report Report) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", report.RootURI(), task, workerIndex)
}

// This is the index file for task
func (report Report) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", report.RootURI(), task)
}

func (report *Report) MarkPending() {
	report.Status.Phase = ReportPhasePending
}

func (report *Report) MarkRunning() {
	report.Status.Phase = ReportPhaseRunning
	report.CreateOrUpdateCond(metav1.Condition{
		Type:   ReportReady,
		Status: metav1.ConditionFalse,
		Reason: string(ReportPhaseRunning),
	})
}

func (report *Report) MarkReportFailed(err string) {
	report.CreateOrUpdateCond(metav1.Condition{
		Type:    ReportReady,
		Status:  metav1.ConditionFalse,
		Reason:  string(ReportPhaseFailed),
		Message: err,
	})
	report.Status.Phase = ReportPhaseFailed
	now := metav1.Now()
	report.Status.CompletedAt = &now
	report.Status.FailureMessage = util.StrPtr(err)

}

func (report *Report) MarkReportReady(location catalog.FileLocation) {
	report.Status.Phase = ReportPhaseCompleted
	report.CreateOrUpdateCond(metav1.Condition{
		Type:   ReportReady,
		Status: metav1.ConditionTrue,
		Reason: ReportReady,
	})

	report.Status.Location = location
	now := metav1.Now()
	report.Status.CompletedAt = &now

}

////////////////////////////////////////////////////////////
// Model Alerts

func (report Report) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Report %s completed successfully", report.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: report.Name,
			Namespace:    report.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Report",
				Name:      report.Name,
				Namespace: report.Namespace,
			},
			Notification: notification,
			Owner:        report.Spec.Owner,
			Fields: map[string]string{
				"Start Time": report.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"BucketName": report.Status.Location.BucketName,
				"URL":        report.Status.Location.Path,
			},
		},
	}
	if report.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = report.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}

	return result
}

func (report Report) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Report %s failed with error: %v", report.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: report.Name,
			Namespace:    report.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Report",
				Name:      report.Name,
				Namespace: report.Namespace,
			},
			Notification: notification,
			Owner:        report.Spec.Owner,
			Fields: map[string]string{
				"Start Time": report.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"Type":       string(report.Spec.ReportType),
			},
		},
	}
	if report.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = report.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (report Report) IsFailed() bool {
	cond := report.GetCond(ReportReady)
	return cond.Status == metav1.ConditionFalse && cond.Reason == string(ReportPhaseFailed)
}

// Return the state of the run as RunStatus
func (report Report) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletedAt:    report.Status.CompletedAt,
		Duration:       int32(report.Status.CompletedAt.Unix() - report.CreationTimestamp.Unix()),
		FailureReason:  report.Status.FailureReason,
		FailureMessage: report.Status.FailureMessage,
	}
	result.Status = string(report.Status.Phase)
	return result
}

func ConvertTaskToDatasetReportType(name catalog.MLTask) ReportType {
	switch name {
	case catalog.BinaryClassification:
		return BinaryClassificationDatasetReport
	case catalog.MultiClassification:
		return MultiClassificationDatasetReport
	case catalog.Regression:
		return RegressionDatasetReport
	case catalog.Forecasting:
		return ForecastDatasetReport
	case catalog.PartitionForecast:
		return PartitionTimeSeriesDatasetReport
	default:
		return InvalidReport
	}
}

func ConvertTaskToModelReportType(name catalog.MLTask) ReportType {
	switch name {
	case catalog.BinaryClassification:
		return BinaryClassificationModelReport
	case catalog.MultiClassification:
		return MultiClassificationModelReport
	case catalog.Regression:
		return RegressionModelReport
	case catalog.Forecasting:
		return ForecastModelReport
	case catalog.PartitionForecast:
		return PartitionTimeSeriesModelReport
	default:
		return InvalidReport
	}
}

func (report Report) GetStatus() proto.Message {
	return &report.Status
}

func (report Report) GetObservedGeneration() int64 {
	return report.Status.ObservedGeneration
}

func (report *Report) SetObservedGeneration(generation int64) {
	report.Status.ObservedGeneration = generation
}

func (report *Report) SetUpdatedAt(time *metav1.Time) {
	report.Status.UpdatedAt = time
}

func (report *Report) SetStatus(status interface{}) {
	report.Status = *status.(*ReportStatus)
}
