package v1alpha1

import (
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
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
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime"
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.endTime"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=reports,singular=report,categories={training,modeld,all}
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
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,4,opt,name=location"`
	// ReportType specify the report type (e.g. classification / regression)
	// +kubebuilder:validation:Required
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
	// WorkloadClassName is the name of the workload class used to run this report
	// +kubebuilder:default:="nano-cpu-250m-mem-256mi"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,9,opt,name=workloadClassName"`
	// ActiveDeadlineSeconds is the deadline of a job for this report.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,10,opt,name=activeDeadlineSeconds"`
	// If the report is custom report, this field holds the specification
	// +kubebuilder:validation:Optional
	Custom *CustomReportSpec `json:"custom,omitempty" protobuf:"varint,11,opt,name=custom"`
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
	// Last error
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	LastError string `json:"lastError,omitempty" protobuf:"bytes,7,opt,name=lastError"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ReportCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}

// Container for custom reports.
type CustomReportSpec struct {
	Values        []CustomReportValue     `json:"values,omitempty" protobuf:"bytes,1,rep,name=values"`
	Tables        []CustomReportTable     `json:"tables,omitempty" protobuf:"bytes,2,rep,name=tables"`
	LineCharts    []CustomReportLineChart `json:"lineCharts,omitempty" protobuf:"bytes,3,rep,name=lineCharts"`
	BarCharts     []CustomReportBarChart  `json:"barCharts,omitempty" protobuf:"bytes,4,rep,name=barCharts"`
	HistCharts    []CustomReportHistogram `json:"histCharts,omitempty" protobuf:"bytes,5,rep,name=histCharts"`
	ScatterCharts []CustomReportHistogram `json:"histCharts,omitempty" protobuf:"bytes,6,rep,name=scatterCharts"`
}

type CustomReportValue struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// Column is the name of the column
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,2,opt,name=column"`
	// Row is the row number
	// +kubebuilder:validation:Optional
	Row *int32 `json:"row,omitempty" protobuf:"varint,3,opt,name=row"`
	// Scalar the a const value
	// +kubebuilder:validation:Optional
	Scalar *string `json:"scalar,omitempty" protobuf:"bytes,4,opt,name=scalar"`
}

type CustomReportTable struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// List of table columns, if empty use call the columns
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
	// one or more filters
	// +kubebuilder:validation:Optional
	Filters []string `json:"filters,omitempty" protobuf:"bytes,3,rep,name=filters"`
	// Groupby columns
	// +kubebuilder:validation:Optional
	GroupBy []string `json:"groupby,omitempty" protobuf:"bytes,4,rep,name=groupby"`
	// Row is the row number
	// +kubebuilder:validation:Optional
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// Show index column
	// +kubebuilder:validation:Optional
	ShowIndex *bool `json:"showIndex,omitempty" protobuf:"varint,6,opt,name=showIndex"`
	// Show borther
	// +kubebuilder:validation:Optional
	Border *bool `json:"border,omitempty" protobuf:"varint,7,opt,name=border"`
}

type CustomReportLineChart struct {
	// Dataset is the name of the dataset
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// Y column
	// +kubebuilder:validation:Optional
	Y *string `json:"y,omitempty" protobuf:"bytes,3,opt,name=y"`
	// Show borther
	// +kubebuilder:validation:Optional
	Legend *bool `json:"legend,omitempty" protobuf:"varint,4,opt,name=legend"`
}

// Bar Chart
type CustomReportBarChart struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// Y column
	// +kubebuilder:validation:Optional
	Y *string `json:"y,omitempty" protobuf:"bytes,3,opt,name=y"`
	// Show borther
	// +kubebuilder:validation:Optional
	Legend *bool `json:"legend,omitempty" protobuf:"varint,4,opt,name=legend"`
	// Show borther
	// +kubebuilder:validation:Optional
	Sort *bool `json:"sort,omitempty" protobuf:"varint,5,opt,name=sort"`
}

// Histogram chart Chart

type CustomReportHistogram struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// Show borther
	// +kubebuilder:validation:Optional
	Bins *int32 `json:"bins,omitempty" protobuf:"varint,3,opt,name=bins"`
}

type CustomReportScatterPlot struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// name of the Y axis columns
	// +kubebuilder:validation:Optional
	Y *string `json:"y,omitempty" protobuf:"bytes,3,opt,name=y"`
}

type FormatSpec struct {
}
