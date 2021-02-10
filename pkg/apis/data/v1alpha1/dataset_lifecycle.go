/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/metaprov/modeld-api/pkg/apis/data"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (r *Dataset) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (dataset *Dataset) ReportName() string {
	return "report-" + dataset.Name
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
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasets/%s", dataset.Namespace, dataset.Spec.VersionName, dataset.Name)
}

func (dataset *Dataset) ReportUri() string {
	return fmt.Sprintf("%s/%s-report.pdf", dataset.RootUri(), dataset.Name)
}

func (dataset *Dataset) ManifestUri() string {
	return fmt.Sprintf("%s/%s-dataset.yaml", dataset.RootUri(), dataset.Name)
}

func (dataset *Dataset) ProfileUri() string {
	return fmt.Sprintf("modeld/live/tenants/default-tenant/dataproducts/%s/versions/%s/datasets/%s/profile/dataset_profile.json",
		dataset.Namespace, dataset.Spec.VersionName, dataset.Name)
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
		Namespace: "modeld-data",
	}

	dataset.Spec = DatasetSpec{
		VersionName:    "iris-0.0.1",
		DataSourceName: "iris-source",
		Labeled:        nil,
	}
}

func (dataset *Dataset) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(dataset)
}

// update the phase of the study based on its condition
func (dataset *Dataset) UpdatePhaseFromConditions() {
	if dataset.IsReady() {
		dataset.Status.Phase = DatasetPhaseReady
	} else if dataset.IsInCond(DatasetProfiled) {
		dataset.Status.Phase = DatasetPhaseProfiled
	} else if dataset.IsInCond(DatasetReported) {
		dataset.Status.Phase = DatasetPhaseReported
	} else if dataset.IsInCond(DatasetIngested) {
		dataset.Status.Phase = DatasetPhaseIngested
	}
}

func (dataset *Dataset) IsInCond(ct DatasetConditionType) bool {
	current := dataset.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (dataset *Dataset) MarkSkewColumns() {
	for _, v := range dataset.Status.Statistics.Columns {
		if v.Skewness > 0.5 || v.Skewness < -0.5 {
			v.Skew = true
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

func (dataset *Dataset) Validated() bool {
	return *dataset.Spec.Validated && dataset.GetCond(DatasetValidated).Status == v1.ConditionTrue
}

func (dataset *Dataset) Profiled() bool {
	return dataset.GetCond(DatasetProfiled).Status == v1.ConditionTrue
}

func (dataset *Dataset) Reported() bool {
	return dataset.GetCond(DatasetReported).Status == v1.ConditionTrue
}

// ----------------------------- Validation --------------------

func (dataset *Dataset) MarkValidationFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetValidated,
		Status:  v1.ConditionFalse,
		Reason:  "validation failed",
		Message: msg,
	})
	dataset.Status.Phase = DatasetPhaseError
}

func (dataset *Dataset) MarkValidated() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetValidated,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseValidated

}

func (dataset *Dataset) MarkValidating() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetValidated,
		Status: v1.ConditionFalse,
		Reason: "validating",
	})
	dataset.Status.Phase = DatasetPhaseValidating
}

// ------------------------- injest

func (dataset *Dataset) MarkInjesting() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetIngested,
		Status: v1.ConditionFalse,
		Reason: "ingesting",
	})
	dataset.Status.Phase = DatasetPhaseIngesting

}

func (dataset *Dataset) MarkIngested() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetIngested,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseIngested

}

func (dataset *Dataset) MarkIngestFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetIngested,
		Status:  v1.ConditionFalse,
		Reason:  "ingest failed",
		Message: msg,
	})
	dataset.Status.Phase = DatasetPhaseError
}

// ------------------------- report

func (dataset *Dataset) MarkReporting() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetReported,
		Status: v1.ConditionFalse,
		Reason: "reporting",
	})
	dataset.Status.Phase = DatasetPhaseReporting
}

func (dataset *Dataset) MarkReported() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetReported,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseReported
}

func (dataset *Dataset) MarkReportFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetReported,
		Status:  v1.ConditionFalse,
		Reason:  "report failed",
		Message: msg,
	})
	dataset.Status.Phase = DatasetPhaseError
}

// ----------------- profile

func (dataset *Dataset) MarkProfiling() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetProfiled,
		Status: v1.ConditionFalse,
		Reason: "profiling",
	})
	dataset.Status.Phase = DatasetPhaseProfiling
}

func (dataset *Dataset) MarkProfiled(uri string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetProfiled,
		Status: v1.ConditionTrue,
	})
	dataset.Status.ProfileUri = uri
	dataset.Status.Phase = DatasetPhaseProfiled
}

func (dataset *Dataset) MarkProfiledFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetProfiled,
		Status:  v1.ConditionFalse,
		Reason:  "profiled failed",
		Message: msg,
	})
	dataset.Status.Phase = DatasetPhaseError
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
}

// --------------------- Archive

func (dataset *Dataset) MarkArchived() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetArchived,
		Status: v1.ConditionTrue,
	})
}

func (dataset *Dataset) Archived() bool {
	return dataset.GetCond(DatasetArchived).Status == v1.ConditionTrue
}

func (dataset *Dataset) Deleted() bool {
	return !dataset.ObjectMeta.DeletionTimestamp.IsZero()
}
