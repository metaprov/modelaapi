/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//Set up the webhook with the manager.
func (report *Report) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(report).
		Complete()
}

// Merge or update condition
func (report *Report) CreateOrUpdateCond(cond ReportCondition) {
	i := report.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		report.Status.Conditions = append(report.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := report.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	report.Status.Conditions[i] = current
}

func (report *Report) GetCondIdx(t ReportConditionType) int {
	for i, v := range report.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (report *Report) GetCond(t ReportConditionType) ReportCondition {
	for _, v := range report.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ReportCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *Report) IsReady() bool {
	return r.GetCond(ReportReady).Status == v1.ConditionTrue
}

func NewReport(
	ns string,
	name string,
	entity string,
	key string,
	reportType ReportType,
	bucketName string) *Report {
	result := &Report{}
	result.Default()
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Spec.Location = data.DataLocation{
		Path:       util.StrPtr(key),
		BucketName: util.StrPtr(bucketName)}
	result.Spec.EntityRef.Name = entity
	result.Spec.ReportType = &reportType
	result.ObjectMeta.Labels = make(map[string]string)

	return result
}

func (report *Report) Label(key string, value string) {
	report.ObjectMeta.Labels[key] = value
}

//==============================================================================
// Finilizer
//==============================================================================

func (report *Report) HasFinalizer() bool { return util.HasFin(&report.ObjectMeta, training.GroupName) }
func (report *Report) AddFinalizer()      { util.AddFin(&report.ObjectMeta, training.GroupName) }
func (report *Report) RemoveFinalizer()   { util.RemoveFin(&report.ObjectMeta, training.GroupName) }

//==============================================================================
// Status string
//==============================================================================

func (report *Report) IsDatasetReport() bool {
	return *report.Spec.ReportType == ClassificationDatasetReport ||
		*report.Spec.ReportType == RegressionDatasetReport ||
		*report.Spec.ReportType == TextClassificationDatasetReport ||
		*report.Spec.ReportType == ForecastDatasetReport
}

func (report *Report) IsStudyReport() bool {
	return *report.Spec.ReportType == StudyReport
}

func (report *Report) IsForecastReport() bool {
	return *report.Spec.ReportType == ForecastReport
}

func (report *Report) IsModelReport() bool {
	// Binary classification report
	return *report.Spec.ReportType == BinaryClassificationModelReport ||
		*report.Spec.ReportType == ForecastModelReport ||
		*report.Spec.ReportType == MultiClassificationModelReport ||
		*report.Spec.ReportType == TextClassificationModelReport ||
		*report.Spec.ReportType == RegressionModelReport
}

func (report *Report) Age() string {
	return humanize.Time(report.CreationTimestamp.Time)
}

func (report *Report) RootUri() string {
	if report.IsModelReport() {
		return fmt.Sprintf("dataproducts/%s/versions/%s/studies/%s/models/%s",
			report.Namespace,
			*report.Spec.VersionName,
			report.Labels["study"],
			report.Spec.EntityRef.Name)

	}
	if report.IsDatasetReport() {
		return fmt.Sprintf("dataproducts/%s/versions/%s/datasets/%s",
			report.Namespace,
			*report.Spec.VersionName,
			report.Spec.EntityRef.Name)
	}
	if report.IsStudyReport() {
		return fmt.Sprintf("dataproducts/%s/versions/%s/studies/%s", report.Namespace, *report.Spec.VersionName, report.Spec.EntityRef.Name)
	}

	return fmt.Sprintf("dataproducts/%s/versions/%s/reports", report.Namespace, *report.Spec.VersionName)
}

func (report *Report) ManifestUri() string {
	return fmt.Sprintf("%s/%s-report.yaml", report.RootUri(), report.Name)
}

//    dataproducts/*/models/*/bin/model.joblib
func (report *Report) PdfUri() string {
	return fmt.Sprintf("%s/%s.pdf", report.RootUri(), report.Name)
}

func ParseReportYaml(content []byte) (*Report, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Report)
	return r, nil
}

func (report *Report) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(report)
}

func (report *Report) ValidateDelete() error {
	return nil
}

func (report *Report) MarkRunning() {
	report.Status.Phase = ReportPhaseRunning
	report.CreateOrUpdateCond(ReportCondition{
		Type:   ReportReady,
		Status: v1.ConditionFalse,
		Reason: string(ReportPhaseRunning),
	})
}

func (report *Report) MarkSaved() {
	report.CreateOrUpdateCond(ReportCondition{
		Type:   ReportSaved,
		Status: v1.ConditionTrue,
	})
}

func (report *Report) IsSaved() bool {
	cond := report.GetCond(ReportSaved)
	return cond.Status == v1.ConditionTrue
}

func (report *Report) MarkReportFailed(err string) {
	report.CreateOrUpdateCond(ReportCondition{
		Type:    ReportReady,
		Status:  v1.ConditionFalse,
		Reason:  string(ReportPhaseFailed),
		Message: err,
	})
	report.Status.Phase = ReportPhaseFailed
}

func (report *Report) MarkReportReady(product *data.DataProduct) {
	report.Status.Phase = ReportPhaseCompleted
	report.CreateOrUpdateCond(ReportCondition{
		Type:   ReportReady,
		Status: v1.ConditionTrue,
	})

	liveUri := product.PrefixLiveUri(report.PdfUri())
	report.Status.URI = liveUri

}
