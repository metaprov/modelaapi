package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ReportPhase is the current state of a Report
type ReportPhase string

// / Entity Condition
const (
	ReportPhasePending   ReportPhase = "Pending"
	ReportPhaseRunning   ReportPhase = "Running"
	ReportPhaseCompleted ReportPhase = "Completed"
	ReportPhaseFailed    ReportPhase = "Failed"
)

type ReportType string

const (
	BinaryClassificationModelReport   ReportType = "binary-classification-model"
	ForecastModelReport               ReportType = "forecast-model"
	RegressionModelReport             ReportType = "regression-model"
	MultiClassificationModelReport    ReportType = "multi-classification-model"
	PartitionTimeSeriesModelReport    ReportType = "partition-timeseries-model-report"
	BinaryClassificationDatasetReport ReportType = "binary-classification-dataset"
	MultiClassificationDatasetReport  ReportType = "multi-classification-dataset"
	ForecastDatasetReport             ReportType = "forecast-dataset"
	RegressionDatasetReport           ReportType = "regression-dataset"
	PartitionTimeSeriesDatasetReport  ReportType = "partition-timeseries-dataset-report"
	StudyReport                       ReportType = "study-report"
	ForecastReport                    ReportType = "forecast-report"
	SummaryReport                     ReportType = "summary-report"
	InvalidReport                     ReportType = "invalid-report"
)

// +kubebuilder:validation:Enum="pdf"
type ReportFormat string

const (
	Pdf ReportFormat = "pdf"
)

//==============================================================================
// ReportName
//==============================================================================

const (
	// The report was generated
	ReportReady = "Ready"
	ReportSaved = "Saved"
)

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
	// VersionName references the name of a Data Product Version that describes the version of the resource
	// +kubebuilder:default:="latest"
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// EntityRef specifies the entity which the Report references. The supported entities consist of Dataset, Model, and Study resources
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,2,opt,name=entityRef"`
	// The type of report (e.g. classification model report, study report)
	// +kubebuilder:validation:Required
	// +required
	ReportType ReportType `json:"reportType,omitempty" protobuf:"bytes,3,opt,name=reportType"`
	// The format of the Report. `pdf` is the only supported type as of the current release
	// +kubebuilder:default:=pdf
	// +kubebuilder:validation:Optional
	Format *ReportFormat `json:"format,omitempty" protobuf:"bytes,4,opt,name=format"`
	// The name of the Notifier resource which Alerts created by the Report will be forwarded to
	// +kubebuilder:validation:Optional
	Notification *catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,5,opt,name=notification"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,6,opt,name=owner"`
	// Resources specifies the resource requirements that will be allocated for the Report
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,7,opt,name=resources"`
	// The deadline for any Jobs associated with the Report to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	Timeout *int64 `json:"timeout,omitempty" protobuf:"varint,8,opt,name=timeout"`
	// The reference to the Lab namespace under which the report generation Job will be executed under.
	// If unspecified, the default Lab for the Data Product of the Report will be used
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,9,opt,name=labName"`
	// For group forecasting, this is the key of the group
	// +kubebuilder:validation:Optional
	Key []string `json:"key,omitempty" protobuf:"bytes,10,rep,name=key"`
	// The name of the Virtual Bucket where report artifacts will be stored.
	// If empty, it will default to the default Virtual Bucket for the Data Product of the Report
	// +kubebuilder:validation:Optional
	ArtifactBucketName *string `json:"artifactBucketName,omitempty" protobuf:"bytes,11,opt,name=artifactBucketName"`
	// ModelClassName specifies the name of the Model Class which created the Dataset, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,12,opt,name=modelClassName"`
	// ModelClassRunName specifies the name of the Model Class Run which created the Dataset, if applicable
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,13,opt,name=modelClassRunName"`
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
	// The location of the report file, set after the Report is finished generating
	// +kubebuilder:validation:Optional
	Location catalog.FileLocation `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
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
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
}

type CustomReportSpec struct {
	// Pages contains a collection of custom pages that will be appended to a Report
	Pages []data.PageSpec `json:"pages,omitempty" protobuf:"bytes,8,rep,name=pages"`
}

type ReportGroupByStatus struct {
	// The locations of the datasets profile files. Each file is the group
	// +kubebuilder:validation:Optional
	ReportsURI string `json:"reportsURI,omitempty" protobuf:"bytes,1,opt,name=reportsURI"`
	// Holds the worker on going result, when a worker finish, we update the location of thier result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,4,rep,name=workerResults"`
}
