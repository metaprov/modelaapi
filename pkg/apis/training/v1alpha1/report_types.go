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
	ReportPhaseCreating ReportPhase = "Pending"
	ReportPhaseReady    ReportPhase = "Ready"
	ReportPhaseFailed   ReportPhase = "Failed"
)

// ReportImageName denote the name of a report image
type ReportImageName string

const (
	RocImage                         ReportImageName = "roc.png"
	FreqForCategoricalAttributeImage ReportImageName = "freq_for_categorical_attribute_image.png"
	DistForNumericalAttributeImage   ReportImageName = "dist_for_numerical_attribute_image.png"
	ConfusionMatrixImage             ReportImageName = "confusion_matrix.png"
	CorrelationImage                 ReportImageName = "correlation.png"
	FeatureImportanceImage           ReportImageName = "feature_importance.png"
)

type ReportTableName string

const (
	SampleTableName               ReportTableName = "sample_table"
	ShapeTableName                ReportTableName = "shape_table"
	OverviewTableName             ReportTableName = "overview_table"
	ColumnTableName               ReportTableName = "columns_table"
	MissingValuesTableName        ReportTableName = "missing_values_table"
	RFETableName                  ReportTableName = "rfe_table"
	ClassificationReportTableName ReportTableName = "classification_report_table"
	AlgorithmTableName            ReportTableName = "algorithm_table"
	EvaluationTableName           ReportTableName = "evaluation_table"
	BootstrapTableName            ReportTableName = "bootstrap_table"
	TrainingTableName             ReportTableName = "training_table"
)

// ReportType is the type of report
// +kubebuilder:validation:Enum="binary-classification-model";"forecast-model";"regression-model";"multi-classification-model";"text-classification-model";"classification-dataset";"forecast-dataset";"text-classification-dataset";"regression-dataset";"study-report";"feature-report";"invalid-report"
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
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.reportType"
// +kubebuilder:printcolumn:name="Uri",type="string",JSONPath=".status.uri"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
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
	ReportType *ReportType `json:"reportType,omitempty" protobuf:"bytes,5,opt,name=reportType"`
	// Format specify the report format. default is pdf
	// +kubebuilder:default:=pdf
	// +kubebuilder:validation:Optional
	Format *ReportFormat `json:"format,omitempty" protobuf:"bytes,6,opt,name=format"`
	// NotifierRef is areference to the notifier that is used to send the report
	// +kubebuilder:validation:Optional
	NotifierRef *string `json:"description,omitempty" protobuf:"bytes,7,opt,name=description"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
}

// ReportStatus defines the observed state of the report.
type ReportStatus struct {
	// StartTime is the start time of the report was sent for generation
	// It is not guaranteed to be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// CompletionTime is the time when the report ended generation and was uploaded to storage
	// be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,3,opt,name=completionTime"`
	// Phase is the phase of the report
	// +kubebuilder:validation:Optional
	Phase ReportPhase `json:"phase,omitempty" protobuf:"bytes,4,opt,name=phase"`
	// URI is the report uri in the bucket
	// +kubebuilder:validation:Optional
	URI string `json:"uri,omitempty" protobuf:"bytes,5,opt,name=uri"`
	//+optional
	Conditions []ReportCondition `json:"conditions,omitempty" protobuf:"bytes,6,rep,name=conditions"`
}
