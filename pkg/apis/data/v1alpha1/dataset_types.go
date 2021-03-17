package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DatasetPhase string

const (
	DatasetPhaseUnkown     DatasetPhase = "AutoScaler"
	DatasetPhaseIngesting  DatasetPhase = "Ingesting"
	DatasetPhaseIngested   DatasetPhase = "Ingested"
	DatasetPhaseReporting  DatasetPhase = "Reporting"
	DatasetPhaseReported   DatasetPhase = "Reported"
	DatasetPhaseProfiling  DatasetPhase = "Profiling"
	DatasetPhaseProfiled   DatasetPhase = "Profiled"
	DatasetPhaseValidating DatasetPhase = "Validating"
	DatasetPhaseValidated  DatasetPhase = "Validated"
	DatasetPhaseArchiving  DatasetPhase = "Archiving"
	DatasetPhaseArchived   DatasetPhase = "Archived"

	DatasetPhaseReady DatasetPhase = "Ready"
	DatasetPhaseError DatasetPhase = "Err"
)

// Condition on the dataset
type DatasetConditionType string

/// DatasetName Condition
const (
	DatasetReported  DatasetConditionType = "Reported"
	DatasetValidated DatasetConditionType = "Validated"
	DatasetProfiled  DatasetConditionType = "Profiled"
	DatasetIngested  DatasetConditionType = "Ingested"
	DatasetArchived  DatasetConditionType = "Archived"
	DatasetReady     DatasetConditionType = "Ready"
)

// DatasetCondition describes the state of a dataset at a certain point.
type DatasetCondition struct {
	Type DatasetConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DatasetConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	// +kubebuilder:validation:Optional
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	// +kubebuilder:validation:Optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	// +kubebuilder:validation:Optional
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Data Source",type="string",JSONPath=".spec.datasourceName"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Rows",type="integer",JSONPath=".status.statistics.rows"
// +kubebuilder:printcolumn:name="Columns",type="integer",JSONPath=".status.statistics.cols"
// +kubebuilder:printcolumn:name="Size",type="integer",JSONPath=".status.statistics.fileSize"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=datasets,shortName=ds,singular=dataset,categories={data,modeld,all}
// Dataset represents a single batch of data
type Dataset struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DatasetStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DatasetList contains a list of Datasets
type DatasetList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Dataset `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//DatasetSpec defines the desired state of a dataset
type DatasetSpec struct {
	// The account name of the owner of this dataset
	// +kubebuilder:default ="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// VersionName is the data product version of the dataset
	// +kubebuilder:validation:MaxLength=63
	// required.
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// DataSourceName is the name of the data source which created this dataset. For example flat file
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,3,opt,name=datasourceName"`
	// User provided description
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// If true, a dataset report should be generated for this dataset.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"report,omitempty" protobuf:"bytes,7,opt,name=report"`
	// If true, we should validate the dataset
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Validated *bool `json:"validate,omitempty" protobuf:"bytes,8,opt,name=validate"`
	// Labeled indicates if this dataset is labeled or not.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Labeled *bool `json:"labeled" protobuf:"bytes,10,opt,name=labeled"`
	// Define the data location. The operator will copy the data from this location into the live location.
	// The datafiles are initially uploaded to this location.
	// +kubebuilder:validation:Optional
	Origin *DataLocation `json:"origin,omitempty" protobuf:"bytes,12,opt,name=origin"`
	// Folder of the actual data resides.
	// +required.
	Location *DataLocation `json:"location,omitempty" protobuf:"bytes,13,opt,name=location"`
}

// DatasetStatus defines the observed state of Dataset
type DatasetStatus struct {
	// Statistics for the dataset. The statistics contain information about each column.
	// +kubebuilder:validation:Optional
	Statistics DatasetStatistics `json:"statistics,omitempty" protobuf:"bytes,1,opt,name=statistics"`
	// The phase of the dataset processing
	// +kubebuilder:validation:Optional
	Phase DatasetPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// Reference to the report object that was generated for the dataset
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,3,opt,name=reportName"`
	// A reference to the visualization uri which were produce during processing
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,4,opt,name=profileUri"`
	// Based on the actual data, treat this dataset as imbalanced.
	Imbalanced bool `json:"imbalanced,omitempty" protobuf:"bytes,5,opt,name=imbalanced"`
	// Sha256 sig of the files
	Sigs Signatures `json:"sigs,omitempty" protobuf:"bytes,6,opt,name=sigs"`
	// Represents the latest available observations of a dataset state.
	//+optional
	Conditions []DatasetCondition `json:"conditions,omitempty" protobuf:"bytes,7,rep,name=conditions"`
}

// DatasetStatistics contains statistics about attributes and correltation between attributes
type DatasetStatistics struct {
	// Columns contain the collection of statistics for each attribute
	// +kubebuilder:validation:Optional
	Columns []ColumnStatistics `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// number of rows in the dataset
	// +kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,3,opt,name=rows"`
	// number of columns, used mainly to show the columns in the kubectl
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,4,opt,name=cols"`
	// file size in bytes
	// +kubebuilder:validation:Optional
	FileSize int32 `json:"fileSize,omitempty" protobuf:"varint,5,opt,name=fileSize"`
}

// Hold the statistical parameters about a single attribute
type ColumnStatistics struct {
	// FileName is the name of the column
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Min is the minimum value of the attribute
	Min float64 `json:"min,omitempty" protobuf:"bytes,2,opt,name=min"`
	// Max is the maximum value of the attribute
	Max float64 `json:"max,omitempty" protobuf:"bytes,3,opt,name=max"`
	// Mean is the mean value of the attribute
	Mean float64 `json:"mean,omitempty" protobuf:"bytes,4,opt,name=mean"`
	// StdDev is the standard deviation value of the attribute
	StdDev float64 `json:"stddev,omitempty" protobuf:"bytes,5,opt,name=stddev"`
	// Skewness is the standard deviation value of the attribute
	Skewness float64 `json:"skewness,omitempty" protobuf:"bytes,6,opt,name=skewness"`
	// Kurtosis is the standard deviation value of the attribute
	Kurtosis float64 `json:"kurtosis,omitempty" protobuf:"bytes,7,opt,name=kurtosis"`
	// Zeros is the numbers of zeros in the feature
	Zeros float64 `json:"zeros,omitempty" protobuf:"bytes,8,opt,name=zeros"`
	// Pct25 is the 25 precent point
	P25 float64 `json:"p25,omitempty" protobuf:"bytes,10,opt,name=p25"`
	// Pct50 is the median
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,11,opt,name=p50"`
	// Pct75 is the 75% point
	P75 float64 `json:"p75,omitempty" protobuf:"bytes,12,opt,name=p75"`
	// The number of missing values
	Missing int32 `json:"missing,omitempty" protobuf:"varint,14,opt,name=missing"`
	// The number of invalid values
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,15,opt,name=invalid"`
	// Is this the target attribute, the value is derived from the schema
	Target bool `json:"target,omitempty" protobuf:"bytes,16,opt,name=target"`
	// The feature importance
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,17,opt,name=importance"`
	//
	Distinct int32 `json:"distinc,omitempty" protobuf:"varint,18,opt,name=distinc"`
	// Should this column be ignored, as specified by the user.
	// This value is derived from the schema
	Ignored bool `json:"ignored,omitempty" protobuf:"varint,19,opt,name=ignored"`
	// Is this column is nullable.
	// This value is derived from the schema.
	Nullable bool `json:"nullable,omitempty" protobuf:"varint,20,opt,name=nullable"`
	// This column has high cardinality and should be ignored.
	// The value is set during the profile process.
	HighCred bool `json:"highCred,omitempty" protobuf:"varint,21,opt,name=highCred"`
	// This column has high corrolation with another feature and should be dropped.
	// The value is set during the profile process.
	HighCorr bool `json:"highCorr,omitempty" protobuf:"varint,22,opt,name=highCorr"`
	// Mark that this column is skewed and would require a power transform
	//If skewness is less than -1 or greater than 1, the distribution is highly skewed.
	//If skewness is between -1 and -0.5 or between 0.5 and 1, the distribution is moderately skewed.
	//If skewness is between -0.5 and 0.5, the distribution is approximately symmetric
	Skew bool `json:"skew,omitempty" protobuf:"varint,23,opt,name=skew"`
}

// DatasetTemplate is  used to generate new datasets
type DatasetTemplate struct {
	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +kubebuilder:validation:Optional
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

// data reference contain pointers to the actual data objects
type DataLocation struct {
	BucketName string `json:"bucketName" protobuf:"bytes,1,opt,name=bucketName"`
	// Path to the full data file (e.g. csv file).
	// +required
	Path string `json:"path" protobuf:"bytes,2,opt,name=path"`
}

// Signatures contains the sha256 signatures of the datasets
type Signatures struct {
	// Data to the full data file (e.g. csv file).
	// +required
	Data string `json:"data" protobuf:"bytes,2,opt,name=data"`
	// The location of the labels file (If exist)
	// +kubebuilder:validation:Optional
	Labels string `json:"labels" protobuf:"bytes,3,opt,name=labels"`
	// path to the training set
	Train string `json:"train" protobuf:"bytes,4,opt,name=train"`
	// the location of the training data, if different from the data.
	Test string `json:"test" protobuf:"bytes,5,opt,name=test"`
	// Pointer to the validation
	Validation string `json:"validation" protobuf:"bytes,6,opt,name=validation"`
}
