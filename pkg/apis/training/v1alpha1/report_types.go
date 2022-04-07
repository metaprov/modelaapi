package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ReportPhase is the current state of the report
type ReportPhase string

/// Dataset Condition
const (
	ReportPhasePending   ReportPhase = "Pending"
	ReportPhaseRunning   ReportPhase = "Running"
	ReportPhaseCompleted ReportPhase = "Completed"
	ReportPhaseFailed    ReportPhase = "IsFailed"
)

// ReportType is the type of report
// +kubebuilder:validation:Enum="binary-classification-model";"forecast-model";"regression-model";"multi-classification-model";"text-classification-model";"classification-dataset";"forecast-dataset";"text-classification-dataset";"regression-dataset";"study-report";"feature-report";"invalid-report";"daily-report";"weekly-report";"monthly-report";"summary-report";
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

	StudyReport    ReportType = "study-report"
	ForecastReport ReportType = "forecast-report"
	FeatureReport  ReportType = "feature-report"
	InvalidReport  ReportType = "invalid-report"
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

// ReportCondition describes the state of a ReportName at a certain point.
type ReportCondition struct {
	// Type of condition.
	Type ReportConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ReportConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.reportType"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=reports,singular=report,categories={training,modela,all}
// ReportName represent a report object. A report is a pdf report which contain images and tables about another
// object
type Report struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ReportSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ReportStatus `json:"status,,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ReportList is a list of reports
type ReportList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Report `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ReportSpec specifies the desired state of the ReportName resource
type ReportSpec struct {
	// VersionName is the data product version name for this report.
	// +kubebuilder:default:="latest"
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// EntityRef specify the entity being report. Currently entities can be dataset,model or study
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,2,opt,name=entityRef"`
	// Location is the report location in storage.
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,4,opt,name=location"`
	// ReportType specify the report type (e.g. classification / regression)
	// +kubebuilder:validation:Required
	// +required
	ReportType *ReportType `json:"reportType,omitempty" protobuf:"bytes,5,opt,name=reportType"`
	// Format specify the report format. default is pdf
	// +kubebuilder:default:=pdf
	// +kubebuilder:validation:Optional
	Format *ReportFormat `json:"format,omitempty" protobuf:"bytes,6,opt,name=format"`
	// NotifierName is a reference to the notifier that is used to send the report
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,7,opt,name=notifierName"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
	// Resources are hardware req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,9,opt,name=resources"`
	// ActiveDeadlineSeconds is the deadline of a job for this report.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,10,opt,name=activeDeadlineSeconds"`
	// If the report is custom report, this field holds the specification
	// +kubebuilder:validation:Optional
	Custom CustomReportSpec `json:"custom,omitempty" protobuf:"bytes,11,opt,name=custom"`
	// the name of the cron report that generated this report
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	CronReportName *string `json:"cronReportName,omitempty" protobuf:"bytes,12,opt,name=cronReportName"`
	// The execution env of this report
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,13,opt,name=labRef"`
}

// ReportStatus defines the observed state of the report.
type ReportStatus struct {
	// StartTime is the start time of the report was sent for generation
	// It is not guaranteed to be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// EndTime is the time when the report ended generation and was uploaded to storage
	// be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// Phase is the phase of the report
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ReportPhase `json:"phase,omitempty" protobuf:"bytes,4,opt,name=phase"`
	// URI is the report uri in the bucket
	// +kubebuilder:validation:Optional
	URI string `json:"uri,omitempty" protobuf:"bytes,5,opt,name=uri"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,6,opt,name=observedGeneration"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,7,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`

	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,9,opt,name=logs"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,10,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ReportCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,11,rep,name=conditions"`
}

type CustomReportSpec struct {
	// The pages in the report
	Pages []data.PageSpec `json:"pages,omitempty" protobuf:"bytes,8,opt,name=pages"`
}
