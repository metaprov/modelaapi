package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ReportPhase is the current state of a Report
type ReportPhase string

/// Entity Condition
const (
	ReportPhasePending   ReportPhase = "Pending"
	ReportPhaseRunning   ReportPhase = "Running"
	ReportPhaseCompleted ReportPhase = "Completed"
	ReportPhaseFailed    ReportPhase = "FailedConditionReason"
)

// ReportType is the type of a Report
// +kubebuilder:validation:Enum="binary-classification-model";"forecast-model";"regression-model";"multi-classification-model";"text-classification-model";"classification-dataset";"forecast-dataset";"text-classification-dataset";"regression-dataset";"study-report";"feature-report";"invalid-report";"daily-report";"weekly-report";"monthly-report";"summary-report";"group-timeseries-dataset-report";"group-timeseries-model-report"
type ReportType string

const (
	BinaryClassificationModelReport ReportType = "binary-classification-model"
	ForecastModelReport             ReportType = "forecast-model"
	RegressionModelReport           ReportType = "regression-model"
	MultiClassificationModelReport  ReportType = "multi-classification-model"
	TextClassificationModelReport   ReportType = "text-classification-model"
	ClassificationDatasetReport     ReportType = "classification-dataset"
	ForecastDatasetReport           ReportType = "forecast-dataset"
	TextClassificationDatasetReport ReportType = "text-classification-dataset"
	RegressionDatasetReport         ReportType = "regression-dataset"
	SummaryReport                   ReportType = "summary-report"
	CustomReport                    ReportType = "custom-report"
	GroupTimeSeriesModelReport      ReportType = "group-timeseries-model-report"
	GroupTimeSeriesDatasetReport    ReportType = "group-timeseries-dataset-report"
	StudyReport                     ReportType = "study-report"
	ForecastReport                  ReportType = "forecast-report"
	FeatureReport                   ReportType = "feature-report"
	InvalidReport                   ReportType = "invalid-report"
)

// +kubebuilder:validation:Enum="pdf"
type ReportFormat string

const (
	Pdf ReportFormat = "pdf"
)

func ConvertStringToReportType(s string) ReportType {
	switch s {
	case "binary-classification-model-report":
		return BinaryClassificationModelReport
	case "classification-data-report":
		return ClassificationDatasetReport
	case "forecast-data-report":
		return ForecastDatasetReport
	case "forecast-model-report":
		return ForecastModelReport
	case "multi-classification-model-report":
		return MultiClassificationModelReport
	case "regression-data-report":
		return RegressionDatasetReport
	case "regression-model-report":
		return RegressionModelReport
	case "studies-report":
		return StudyReport
	case "text-classification-data-report":
		return TextClassificationDatasetReport
	case "text-classification-model-report":
		return TextClassificationModelReport
	}
	return InvalidReport
}

//==============================================================================
// ReportName
//==============================================================================

// ReporteConditionType
type ReportConditionType string

const (
	// The report was generated
	ReportReady ReportConditionType = "Ready"
	// If the notifier is valid, the report was sent
	ReportSent ReportConditionType = "Sent"

	ReportSaved ReportConditionType = "Saved"
)

// ReportCondition describes the state of a Report at a certain point.
type ReportCondition struct {
	// Type of Report condition
	Type ReportConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ReportConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human-readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=reports,singular=report,categories={training,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.reportType"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Report represents a PDF file containing information compiled about another resource
type Report struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ReportSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ReportStatus `json:"status,,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// ReportList contains a list of Reports
// +kubebuilder:object:root=true
type ReportList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Report `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ReportSpec specifies the desired state of a Report
type ReportSpec struct {
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:="latest"
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// EntityRef specifies the entity which the Report references. The supported entities consist of Entity, Model, and Study resources
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,2,opt,name=entityRef"`
	// The location of the flat-file containing the PDF report
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,5,opt,name=location"`
	// The type of report (e.g. classification model report, study report)
	// +kubebuilder:validation:Required
	// +required
	ReportType *ReportType `json:"reportType,omitempty" protobuf:"bytes,6,opt,name=reportType"`
	// The format of the Report. `pdf` is the only supported type as of the current release
	// +kubebuilder:default:=pdf
	// +kubebuilder:validation:Optional
	Format *ReportFormat `json:"format,omitempty" protobuf:"bytes,7,opt,name=format"`
	// The name of the Notifier resource which Alerts created by the Report will be forwarded to
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,8,opt,name=notifierName"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// Resources specifies the resource requirements that will be allocated to the report generation workload
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The deadline for any Jobs associated with the Report to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// Custom contains the specification to generate a custom report (currently unimplemented)
	// +kubebuilder:validation:Optional
	Custom CustomReportSpec `json:"custom,omitempty" protobuf:"bytes,12,opt,name=custom"`
	// The name of the CronReport resource that generated the Report
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	CronReportName *string `json:"cronReportName,omitempty" protobuf:"bytes,13,opt,name=cronReportName"`
	// The reference to the Lab namespace under which the report generation Job will be executed under.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,14,opt,name=labRef"`
	// For group forecasting, this is the key of the group
	// +kubebuilder:validation:Optional
	Key []string `json:"key,omitempty" protobuf:"bytes,15,opt,name=key"`
	// The model class for this report if the model was created by a model class
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,16,opt,name=modelClassName"`
	// If this report was created by a model class run, this is the run name
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,17,opt,name=modelClassRunName"`
}

// ReportStatus defines the observed state of a Report
type ReportStatus struct {
	// CompletedAt represents the time at which the Report was marked as completed, failed, or aborted
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,1,opt,name=completedAt"`
	// The phase of the Report
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ReportPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// The URI to the flat-file report within the VirtualBucket specified by the Report
	// +kubebuilder:validation:Optional
	URI string `json:"uri,omitempty" protobuf:"bytes,3,opt,name=uri"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// In the case of failure, the Report resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// In the case of failure, the Report resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`
	// Logs specifies the location of logs produced by workloads associated with the Report
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,7,opt,name=logs"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,8,opt,name=updatedAt"`
	// The sub models uri file contain the results of running the sub model
	// +kubebuilder:validation:Optional
	GroupBy ReportGroupByStatus `json:"groupby,omitempty" protobuf:"bytes,9,opt,name=groupby"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ReportCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
}

type CustomReportSpec struct {
	// Pages contains a collection of custom pages that will be appended to a Report
	Pages []data.PageSpec `json:"pages,omitempty" protobuf:"bytes,8,opt,name=pages"`
}

type ReportGroupByStatus struct {
	// The locations of the datasets profile files. Each file is the group
	// +kubebuilder:validation:Optional
	ReportsURI string `json:"reportsURI,omitempty" protobuf:"bytes,1,opt,name=reportsURI"`
	// Holds the worker on going result, when a worker finish, we update the location of thier result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,4,opt,name=workerResults"`
}
