/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
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

func (dataset *Dataset) Validated() bool {
	return *dataset.Spec.Validated && dataset.GetCond(DatasetValidated).Status == v1.ConditionTrue
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

// ----------------------------- Validation --------------------

func (dataset *Dataset) MarkValidationFailed(msg string) {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:    DatasetValidated,
		Status:  v1.ConditionFalse,
		Reason:  string(DatasetPhaseFailed),
		Message: "Failed to validate." + msg,
	})
	dataset.Status.Phase = DatasetPhaseFailed
	dataset.Status.FailureMessage = util.StrPtr(msg)
	dataset.Status.Progress = 100
}

func (dataset *Dataset) MarkValidated() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetValidated,
		Status: v1.ConditionTrue,
	})
	dataset.Status.Phase = DatasetPhaseValidationSuccess
	dataset.Status.Progress = 40

}

func (dataset *Dataset) MarkValidating() {
	dataset.CreateOrUpdateCond(DatasetCondition{
		Type:   DatasetValidated,
		Status: v1.ConditionFalse,
		Reason: string(DatasetPhaseValidationRunning),
	})
	dataset.Status.Phase = DatasetPhaseValidationRunning
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

// Generate a dataset completion alert
func (dataset *Dataset) CompletionAlert(tenantRef *v1.ObjectReference, notifierName string) *infra.Alert {
	level := infra.Info
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: dataset.Name,
			Namespace:    dataset.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("Dataset Completed"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Name:      dataset.Name,
				Namespace: dataset.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: &notifierName,
			Owner: dataset.Spec.Owner,
			Fields: map[string]string{
				"rows":      util.ItoA(&dataset.Status.Statistics.Rows),
				"columns":   util.ItoA(&dataset.Status.Statistics.Cols),
				"size":      util.ItoA(&dataset.Status.Statistics.FileSize),
				"starttime": dataset.ObjectMeta.CreationTimestamp.Format("Mon Jan 2 15:04:05 MST 2006"),
			},
		},
	}
}

func (dataset *Dataset) ErrorAlert(tenantRef *v1.ObjectReference, notifierName string,err error) *infra.Alert {
	level := infra.Error
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: dataset.Name,
			Namespace:    dataset.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("Dataset processing error"),
			Message: util.StrPtr(err.Error()),
			Level:   &level,
			TenantRef:    tenantRef,
			NotifierName: &notifierName,
			EntityRef: v1.ObjectReference{
				Name:      dataset.Name,
				Namespace: dataset.Namespace,
			},
			Owner: dataset.Spec.Owner,
			Fields: map[string]string{
				"rows":      util.ItoA(&dataset.Status.Statistics.Rows),
				"columns":   util.ItoA(&dataset.Status.Statistics.Cols),
				"size":      util.ItoA(&dataset.Status.Statistics.FileSize),
				"starttime": dataset.ObjectMeta.CreationTimestamp.Format("Mon Jan 2 15:04:05 MST 2006"),
			},
		},
	}
}
