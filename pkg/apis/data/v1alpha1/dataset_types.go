package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DatasetPhase string

const (
	DatasetPhasePending         DatasetPhase = "Pending"    // when generating
	DatasetPhaseGenerating      DatasetPhase = "Generating" // when generating
	DatasetPhaseGenSuccess      DatasetPhase = "GenSuccess" // when synthetic gen success
	DatasetPhaseIngestRunning   DatasetPhase = "Ingesting"
	DatasetPhaseIngestSuccess   DatasetPhase = "Ingested"
	DatasetPhaseReportRunning   DatasetPhase = "Reporting"
	DatasetPhaseReportSuccess   DatasetPhase = "Reported"
	DatasetPhaseProfileRunning  DatasetPhase = "Profiling"
	DatasetPhaseProfileSuccess  DatasetPhase = "Profiled"
	DatasetPhaseUnitTesting     DatasetPhase = "UnitTesting"
	DatasetPhaseSnapshotRunning DatasetPhase = "TakingSnapshot"
	DatasetPhaseSnapshotSuccess DatasetPhase = "Snapshotted"
	DatasetPhaseFailed          DatasetPhase = "Failed"
	DatasetPhaseAborted         DatasetPhase = "Aborted"
	DatasetPhaseReady           DatasetPhase = "Ready"
)

// Condition on the dataset
type DatasetConditionType string

/// DatasetName Condition
const (
	DatasetReported    DatasetConditionType = "Reported"
	DatasetUnitTested  DatasetConditionType = "UnitTested"
	DatasetSnapshotted DatasetConditionType = "Snapshotted"
	DatasetProfiled    DatasetConditionType = "Profiled"
	DatasetIngested    DatasetConditionType = "Ingested"
	DatasetGenerated   DatasetConditionType = "Generated"
	DatasetSaved       DatasetConditionType = "Saved"
	DatasetArchived    DatasetConditionType = "Archived"
	DatasetReady       DatasetConditionType = "Ready"
)

// DatasetCondition describes the state of a dataset at a certain point
type DatasetCondition struct {
	Type DatasetConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DatasetConditionType"`
	// Status of the condition, one of True, False, Unknown
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

// Dataset represents a chunk of data that has been analyzed and stored inside a managed bucket
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Data Source",type="string",JSONPath=".spec.datasourceName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type"
// +kubebuilder:printcolumn:name="Rows",type="integer",JSONPath=".status.statistics.rows"
// +kubebuilder:printcolumn:name="Columns",type="integer",JSONPath=".status.statistics.cols"
// +kubebuilder:printcolumn:name="Size",type="integer",JSONPath=".status.statistics.fileSize"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=datasets,shortName=dset,singular=dataset,categories={data,modela,all}
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

// DatasetSpec defines the desired state of the Dataset
type DatasetSpec struct {
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Required
	// +required
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// The reference to the Data Source resource which exists in the same Data Product namespace as the object.
	// The Data Source must represent the columns and the task type of the Dataset. The validation rules associated with
	// the Data Source will be validated against the raw data of the Dataset once it is created
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +required
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,3,opt,name=datasourceName"`
	// User-provided description of the object
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// User-provided display name of the object
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DisplayName *string `json:"displayName,omitempty" protobuf:"bytes,5,opt,name=displayName"`
	// The dataset role
	// +kubebuilder:default:="training"
	// +kubebuilder:validation:Optional
	Role *DatasetRole `json:"role,omitempty" protobuf:"bytes,6,opt,name=role"`
	// Indicates if a PDF report containing the Dataset's profile should be generated
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,7,opt,name=reported"`
	// Indicates if the resource controller has created a snapshot of the data in the case that it is being read
	// directly from a database, and must be converted to a flat-file type such as a CSV as a result
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Snapshotted *bool `json:"snapshotted,omitempty" protobuf:"varint,8,opt,name=snapshotted"`
	// Indicates if the Dataset should be checked against the validation rules of its Data Source
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	UnitTested *bool `json:"unitTested,omitempty" protobuf:"varint,9,opt,name=unitTested"`
	// Indicates if synthetic data should be generated (currently unimplemented)
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Synthetic *bool `json:"synthetic,omitempty" protobuf:"varint,11,opt,name=synthetic"`
	// If `Synthetic` is set to true, SyntheticRows indicates how many rows of synthetic data should be generated
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	SyntheticRows *int32 `json:"syntheticRows,omitempty" protobuf:"varint,12,opt,name=syntheticRows"`
	// Origin is the location of the data file or database query which holds the raw data of the Dataset. When the Dataset is
	// created, the resource controller will retrieve the data from the location, validate it against its Data Source
	// if applicable, and store it inside the `live` section of the Virtual Bucket resource specified by the location
	// +kubebuilder:validation:Optional
	Origin DataLocation `json:"origin,omitempty" protobuf:"bytes,13,opt,name=origin"`
	// Location is the final location of the data which was copied from the `Origin` location during the ingestion phase.
	// This field is set by the Dataset resource controller and should not be changed by any end-users
	// +kubebuilder:validation:Required
	// +required
	Location DataLocation `json:"location,omitempty" protobuf:"bytes,14,opt,name=location"`
	// Resources specifies the resource requirements which the Dataset will request when creating Jobs to analyze the data
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,15,opt,name=resources"`
	// The deadline in seconds for all Jobs created by the Dataset
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,16,opt,name=activeDeadlineSeconds"`
	// The type of dataset which was uploaded. `tabular` is the only supported type as of the current release
	// +kubebuilder:default:="tabular"
	// +kubebuilder:validation:Optional
	Type *catalog.DatasetType `json:"type,omitempty" protobuf:"bytes,17,opt,name=type"`
	// The specification for how the data should be sampled, if applicable. Sampling may improve dataset and model creation
	// time in the case of very large datasets that are being rapidly prototyped and iterated on
	// +kubebuilder:validation:Optional
	Sample SampleSpec `json:"sample,omitempty" protobuf:"bytes,18,opt,name=sample"`
	// If the dataset is syntactic, this is the syntactic spec
	Syntactic SyntacticSpec `json:"syntactic,omitempty" protobuf:"bytes,19,opt,name=syntactic"`
	// The machine learning task relevant to the Dataset. This field *must* be the same as the Data Source of the object
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,20,opt,name=task"`
	// The machine learning sub task relevant to the Dataset. This field *must* be the same as the Data Source of the object
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,21,opt,name=subtask"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,22,opt,name=notification"`
	// The specification for how to find the correlations of the Dataset's features during the profiling phase.
	// Based on the specification, the data plane will compute the correlation between each feature and will store the highest-scoring
	// +kubebuilder:validation:Optional
	Correlation CorrelationSpec `json:"correlation,omitempty" protobuf:"bytes,23,opt,name=correlation"`
	// Indicates if the Dataset should be quickly processed.
	// If enabled, the validation, profiling, and reporting phases will be skipped.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,24,opt,name=fast"`
	// The reference to the Lab under which Jobs created by the Dataset will be executed
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,25,opt,name=labRef"`
	// For dataset that contain feedback information, this is reference to the serving dataset
	// +kubebuilder:validation:Optional
	ServingDatasetRef v1.ObjectReference `json:"servingDatasetRef,omitempty" protobuf:"bytes,26,opt,name=servingDatasetRef"`
	// Used for prediction dataset, contain a reference to the predictor resource that created this dataset
	// +kubebuilder:validation:Optional
	PredictorRef v1.ObjectReference `json:"predictorRef,omitempty" protobuf:"bytes,27,opt,name=predictorRef"`
	// If true generate feature histogram object from this dataset columns.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	GenerateFeatureHistogram *bool `json:"generateFeatureHistogram,omitempty" protobuf:"varint,28,opt,name=generateFeatureHistogram"`
	// The specification for tests for a new dataset
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,29,opt,name=unitTests"`
}

// DatasetStatus defines the observed state of a Dataset object
type DatasetStatus struct {
	// Statistics for each column of the Dataset, which are generated during the profiling phase.
	// +kubebuilder:validation:Optional
	Statistics DatasetStatistics `json:"statistics,omitempty" protobuf:"bytes,1,opt,name=statistics"`
	// The current phase of the Dataset progress
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase DatasetPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// Reference to the report object that was generated for the dataset, which exists in the same Data Product namespace
	// as the object
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,3,opt,name=reportName"`
	// The location of report generated during the reporting phase. This field is intended for internal use
	// +kubebuilder:validation:Optional
	ReportUri string `json:"reportUri,omitempty" protobuf:"bytes,4,opt,name=reportUri"`
	// The location of raw profile data. This field is intended for internal use
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,5,opt,name=profileUri"`
	// Whether or not the data was detected as imbalanced
	//+kubebuilder:validation:Optional
	Imbalanced bool `json:"imbalanced,omitempty" protobuf:"bytes,6,opt,name=imbalanced"`
	// The location of anomaly file. The file contain the list of rows that were marked as anomaly by an isolation forest.
	// algorithm
	// +kubebuilder:validation:Optional
	AnomaliesUri string `json:"anomaliesUri" protobuf:"bytes,7,opt,name=anomaliesUri"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,8,opt,name=observedGeneration"`
	// List of validation results which are generated for every validation rule associated with the Dataset's Data Source
	//+kubebuilder:validation:Optional
	UnitTestResults catalog.TestSuiteResult `json:"unitTestResults,omitempty" protobuf:"bytes,9,opt,name=unitTestResults"`
	// Last time the Dataset was used with a Study
	//+kubebuilder:validation:Optional
	LastStudyTime *metav1.Time `json:"lastStudyTime,omitempty" protobuf:"bytes,10,opt,name=lastStudyTime"`
	// In the case of failure, the Dataset resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,12,opt,name=failureReason"`
	// In the case of failure, the Dataset resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,13,opt,name=failureMessage"`
	// The current progress of the Dataset, with a maximum of 100, that is associated with the current phase
	//+kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,14,opt,name=progress"`
	// Sha256 signature of the raw data. Intended for internal use
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Hash string `json:"hash,omitempty" protobuf:"bytes,15,opt,name=hash"`
	// The log file specification that determines the location of all logs produced by the object
	Logs catalog.Logs `json:"logs" protobuf:"bytes,16,opt,name=logs"`
	// If the dataset is derived, the name of the Dataset that the object is derived from
	// +kubebuilder:validation:Optional
	DerivedFromDataset *string `json:"derivedFromDataset,omitempty" protobuf:"bytes,17,opt,name=derivedFromDataset"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,18,opt,name=lastUpdated"`
	// The Docker images used during the analysis of the Dataset
	// +kubebuilder:validation:Optional
	Images catalog.Images `json:"images,omitempty" protobuf:"bytes,19,opt,name=images"`
	// The time that the system started processing the Dataset, usually after the creation of the object
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,20,opt,name=startTime"`
	// The time that the Dataset finished processing, either due to completion or failure
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,21,opt,name=endTime"`
	// The generated training feature histogram, Empty if no feature histogram generated
	// +kubebuilder:validation:Optional
	FeatureHistogramRef v1.ObjectReference `json:"featureHistogramRef,omitempty" protobuf:"bytes,22,opt,name=featureHistogramRef"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DatasetCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,24,rep,name=conditions"`
}

// DatasetStatistics contains statistics about the Dataset's overall data, as well as every feature of the data. The
// data structure is populated with information during the `Profiling` phase of the parent Dataset.
type DatasetStatistics struct {
	// Columns contains the collection of statistics for each feature
	// +kubebuilder:validation:Optional
	Columns []ColumnStatistics `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// Number of rows observed from the data
	// +kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,3,opt,name=rows"`
	// Number of columns observed from the data
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,4,opt,name=cols"`
	// The file size of the data in bytes
	// +kubebuilder:validation:Optional
	FileSize int32 `json:"fileSize,omitempty" protobuf:"varint,5,opt,name=fileSize"`
	// The top correlations between all features and the target feature
	// +kubebuilder:validation:Optional
	CorrelationsWithTarget []Correlation `json:"correlationsWithTarget,omitempty" protobuf:"bytes,6,rep,name=correlationsWithTarget"`
	// The top correlations between features, computed per the CorrelationSpec of the parent Dataset
	// +kubebuilder:validation:Optional
	TopCorrelations []Correlation `json:"topCorrelations,omitempty" protobuf:"bytes,7,rep,name=topCorrelations"`
}

// ColumnStatistics contains statistical parameters for a single feature from a dataset
type ColumnStatistics struct {
	// The name of the column
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The data type of the column
	// +kubebuilder:validation:Optional
	DataType catalog.DataType `json:"datatype,omitempty" protobuf:"bytes,2,opt,name=datatype"`
	// Amount of rows which contain a value for the feature
	// +kubebuilder:validation:Optional
	Count float64 `json:"count,omitempty" protobuf:"bytes,3,opt,name=count"`
	// Amount of unique values present in the column
	// +kubebuilder:validation:Optional
	Distinct int32 `json:"distinct,omitempty" protobuf:"varint,4,opt,name=distinct"`
	// Amount of missing values present in the column
	// +kubebuilder:validation:Optional
	Missing int32 `json:"missing,omitempty" protobuf:"varint,5,opt,name=missing"`
	// Percentage of missing values in the column
	// +kubebuilder:validation:Optional
	PercentMissing float64 `json:"percentMissing,omitempty" protobuf:"bytes,6,opt,name=percentMissing"`
	// The mean of all values in the column, if the column data type is a number
	// +kubebuilder:validation:Optional
	Mean float64 `json:"mean,omitempty" protobuf:"bytes,7,opt,name=mean"`
	// The standard deviation of the columns values
	// +kubebuilder:validation:Optional
	StdDev float64 `json:"stddev,omitempty" protobuf:"bytes,8,opt,name=stddev"`
	// The variability of the columns values from the columns mean
	// +kubebuilder:validation:Optional
	Variance float64 `json:"variance,omitempty" protobuf:"bytes,9,opt,name=variance"`
	// The minimum value of all values in the column
	// +kubebuilder:validation:Optional
	Min float64 `json:"min,omitempty" protobuf:"bytes,10,opt,name=min"`
	// The maximum value of all values in the column
	// +kubebuilder:validation:Optional
	Max float64 `json:"max,omitempty" protobuf:"bytes,11,opt,name=max"`
	// The computed kurtosis, which measures the peakedness of the distribution of values in the column
	// +kubebuilder:validation:Optional
	Kurtosis float64 `json:"kurtosis,omitempty" protobuf:"bytes,12,opt,name=kurtosis"`
	// The computed skewness, which measures the asymmetry of the distribution of values in the column
	// +kubebuilder:validation:Optional
	Skewness float64 `json:"skewness,omitempty" protobuf:"bytes,13,opt,name=skewness"`
	// Skewness is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	Sum float64 `json:"sum,omitempty" protobuf:"bytes,14,opt,name=sum"`
	// The sum of all values in the column
	// +kubebuilder:validation:Optional
	Mad float64 `json:"mad,omitempty" protobuf:"bytes,15,opt,name=mad"`
	// The 25% point of all the values of the column in order
	// +kubebuilder:validation:Optional
	P25 float64 `json:"p25,omitempty" protobuf:"bytes,16,opt,name=p25"`
	// The 50% point of all the values of the column in order, also known as the median
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,17,opt,name=p50"`
	// The 75% point of all the values of the column in order
	// +kubebuilder:validation:Optional
	P75 float64 `json:"p75,omitempty" protobuf:"bytes,18,opt,name=p75"`
	// The interquartile range of the columns values
	// +kubebuilder:validation:Optional
	IQR float64 `json:"iqr,omitempty" protobuf:"bytes,19,opt,name=iqr"`
	// The mode value of the column, also known as the most frequent value
	// +kubebuilder:validation:Optional
	Mode string `json:"mode,omitempty" protobuf:"bytes,20,opt,name=mode"`
	// The number of zero values in the column
	// +kubebuilder:validation:Optional
	Zeros float64 `json:"zeros,omitempty" protobuf:"bytes,21,opt,name=zeros"`
	// The number of invalid values in the column
	// +kubebuilder:validation:Optional
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,22,opt,name=invalid"`
	// The feature importance of the column
	// +kubebuilder:validation:Optional
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,23,opt,name=importance"`
	// Indicates if the feature is the target attribute for a Study, as specified by the Dataset's DataSource
	// +kubebuilder:validation:Optional
	Target bool `json:"target,omitempty" protobuf:"varint,24,opt,name=target"`
	// Indicates if the column should be ignored, as specified by the Dataset's DataSource
	// +kubebuilder:validation:Optional
	Ignore bool `json:"ignore,omitempty" protobuf:"varint,25,opt,name=ignore"`
	// Indicates if the column may contain null values, as specified by the Dataset's DataSource
	// +kubebuilder:validation:Optional
	Nullable bool `json:"nullable,omitempty" protobuf:"varint,26,opt,name=nullable"`
	// Indicates if the column has high cardinality and should use the high cardinality encoder during feature engineering
	// +kubebuilder:validation:Optional
	HighCardinality bool `json:"highCardinality,omitempty" protobuf:"varint,27,opt,name=highCardinality"`
	// Indicates if the column has high correlation with another feature, and that it should be dropped
	// +kubebuilder:validation:Optional
	HighCorrWithOtherFeatures bool `json:"highCorrWithOtherFeatures,omitempty" protobuf:"varint,28,opt,name=highCorrWithOtherFeatures"`
	// Indicate that the feature has low correlation with the target feature, and that it should be dropped
	// +kubebuilder:validation:Optional
	LowCorrWithTarget bool `json:"lowCorrWithTarget,omitempty" protobuf:"varint,29,opt,name=lowCorrWithTarget"`
	// Indicates if the column has a high percentage of missing values, and that it should be dropped
	// +kubebuilder:validation:Optional
	HighMissingPct bool `json:"highMissingPct,omitempty" protobuf:"varint,30,opt,name=highMissingPct"`
	// Marks that the column is skewed and would require a power transform.
	//
	// If skewness is less than -1 or greater than 1, the distribution is highly skewed.
	// If skewness is between -1 and -0.5 or between 0.5 and 1, the distribution is moderately skewed.
	// If skewness is between -0.5 and 0.5, the distribution is approximately symmetric
	// +kubebuilder:validation:Optional
	Skewed bool `json:"skewed,omitempty" protobuf:"varint,31,opt,name=skewed"`
	// Indicates if the column is an ID column, such as a primary key
	// +kubebuilder:validation:Optional
	Id bool `json:"id,omitempty" protobuf:"varint,32,opt,name=id"`
	// +kubebuilder:validation:Optional
	Constant bool `json:"constant,omitempty" protobuf:"varint,33,opt,name=constant"`
	// Indicates if the column is a duplicate of another column
	// +kubebuilder:validation:Optional
	Duplicate bool `json:"duplicate,omitempty" protobuf:"varint,34,opt,name=duplicate"`
	// Indicates if the column is reserved and must be a feature included in model training
	// +kubebuilder:validation:Optional
	Reserved bool `json:"reserved,omitempty" protobuf:"varint,35,opt,name=reserved"`
	// The ratio between non-null and null values in the column
	// +kubebuilder:validation:Optional
	Completeness float64 `json:"completeness,omitempty" protobuf:"bytes,37,opt,name=completeness"`
	// The ratio between unique values and non-unique values in the column
	// +kubebuilder:validation:Optional
	DistinctValueCount float64 `json:"distinctValueCount,omitempty" protobuf:"bytes,38,opt,name=distinctValueCount"`
	// The ratio between most the most frequent value to the number of total values in the column
	// +kubebuilder:validation:Optional
	MostFreqValuesRatio float64 `json:"mostFreqValuesRatio,omitempty" protobuf:"bytes,39,opt,name=mostFreqValuesRatio"`
	// Used for text attributes
	// +kubebuilder:validation:Optional
	IndexOfPeculiarity float64 `json:"indexOfPeculiarity,omitempty" protobuf:"bytes,40,opt,name=indexOfPeculiarity"`
	// Histogram data representing the distribution of the values in the column
	// +kubebuilder:validation:Optional
	Histogram catalog.HistogramData `json:"histogram,omitempty" protobuf:"bytes,41,opt,name=histogram"`
	// Correlation to the target feature
	// +kubebuilder:validation:Optional
	CorrToTarget float64 `json:"corrToTarget,omitempty" protobuf:"bytes,42,opt,name=corrToTarget"`
	// The column index in the dataset
	Index int32 `json:"index,omitempty" protobuf:"bytes,43,opt,name=index"`
	// Outlier statistics.
	Outliers OutlierStat `json:"outliers,omitempty" protobuf:"bytes,44,opt,name=outliers"`
}

type OutlierStat struct {
	// The number of outliers below baseline
	Lower int32 `json:"lower,omitempty" protobuf:"varint,1,opt,name=lower"`
	// The number of outliers above baseline
	Upper int32 `json:"upper,omitempty" protobuf:"varint,2,opt,name=upper"`
	// Percentage of rows detected as outliers
	Percent float32 `json:"percent,omitempty" protobuf:"bytes,3,opt,name=percent"`
}

// DatasetTemplate is used to generate new datasets
type DatasetTemplate struct {
	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +kubebuilder:validation:Optional
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

// +kubebuilder:validation:Enum="object";"table";"view";"stream";"web";"public-dataset";"dataset"
type DataLocationType string

const (
	DataLocationObjectStorage DataLocationType = "object"
	DataLocationSQLTable      DataLocationType = "table"
	DataLocationSQLView       DataLocationType = "view"
	DataLocationStream        DataLocationType = "stream"
	DataLocationWebApi        DataLocationType = "web"
	DataLocationPublicDataset DataLocationType = "public-dataset" // The data reside in a public dataset
	DataLocationDataset       DataLocationType = "dataset"        // The data reside inside another dataset

)

// +kubebuilder:validation:Enum="unlabled";"serving";"feedback";"training";
type DatasetRole string

const (
	DatasetRoleUnlabeled DatasetRole = "unlabeled" // Unlabeled dataset
	DatasetRoleServing   DatasetRole = "serving"   // Dataset contain serving data.
	DatasetRoleFeedback  DatasetRole = "feedback"  // feedback dataset which was labeled
	DatasetRoleTraining  DatasetRole = "training"  // Regular Labeled dataset

)

// DataLocation describes the external location of data that will be accessed by Modela, and additional
// information on how to query the data if the location is a non flat-file source.
type DataLocation struct {
	// The type of location where the data resides, which can either be an object inside an object storage system (i.e. Minio), a SQL location
	// like a table or a view, a data stream (i.e. Kafka, currently unsupported), or a web location (currently unsupported)
	// +kubebuilder:default:="object"
	// +kubebuilder:validation:Optional
	Type *DataLocationType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// In the case of the type of location being a database, ConnectionName specifies the name of the Connection resource
	// that exists in the same tenant as the resource specifying the DataLocation. Modela will attempt to connect
	// to the database using the credentials specified in the Connection, and will execute the query specified by the SQL field
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// In the case of the location type being an object storage system, BucketName is the name of the VirtualBucket resource
	// that exists in the same tenant as the resource specifying the DataLocation. Modela will connect to the external
	// object storage system, and will access the file from the path specified by the Path field
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	BucketName *string `json:"bucketName,omitempty" protobuf:"bytes,3,opt,name=bucketName"`
	// The path to a flat-file inside an object storage system. When using the Modela API to upload files (through the
	// FileService API), Modela will upload the data to a predetermined path based on the Tenant, DataProduct,
	// DataProductVersion, and resource type of the resource in relation to the file being uploaded.
	// The path does not need to adhere to this format; you can give the path to a file inside a bucket not managed by Modela
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Path *string `json:"path,omitempty" protobuf:"bytes,4,opt,name=path"`
	// The name of a table inside a database, if applicable
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Table *string `json:"table,omitempty" protobuf:"bytes,5,opt,name=table"`
	// The name of a database inside the database system specified by the ConnectionName field
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Database *string `json:"database,omitempty" protobuf:"bytes,6,opt,name=database"`
	// The SQL statement which will be executed to query data from the table specified by Table
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Sql *string `json:"sql,omitempty" protobuf:"bytes,7,opt,name=sql"`
	// The name of the streaming topic (currently unsupported)
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Topic *string `json:"topic,omitempty" protobuf:"bytes,8,opt,name=topic"`
	// In the case of the location type being WebApi, URL specifies the external location (HTTP or Git) that will be queried
	// and then stored as flat-file by the resource which specifies the DataLocation
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	URL *string `json:"url,omitempty" protobuf:"bytes,9,opt,name=url"`
	// In the case of the location type being Dataset or PublicDataset, ResourceRef references another resource that
	// containing data that will be used as a data source
	// +kubebuilder:validation:Optional
	ResourceRef *v1.ObjectReference `json:"resourceRef,omitempty" protobuf:"bytes,10,opt,name=resourceRef"`
}

// Correlation records the correlation between two features in a Dataset
type Correlation struct {
	// The first feature name
	Feature1 string `json:"feature1" protobuf:"bytes,1,opt,name=feature1"`
	// The second feature name
	Feature2 string `json:"feature2" protobuf:"bytes,2,opt,name=feature2"`
	// The correlation value
	Value float64 `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
	// How the value was calculated
	Method string `json:"method,omitempty" protobuf:"bytes,4,opt,name=method"`
}

// CorrelationSpec specifies how the correlations between features in a Dataset should be computed
type CorrelationSpec struct {
	// The minimum value of a computed correlation to be stored as a result
	// +kubebuilder:default:=50
	// +kubebuilder:validation:Optional
	Cutoff *float64 `json:"cutoff,omitempty" protobuf:"bytes,1,opt,name=cutoff"`
	// The method to be used when computing correlations
	// +kubebuilder:default:="pearson"
	// +kubebuilder:validation:Optional
	Method *string `json:"method,omitempty" protobuf:"bytes,2,opt,name=method"`
	// The number of top correlations to be included in the correlation results
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	Top *int32 `json:"top,omitempty" protobuf:"varint,3,opt,name=top"`
}

type SyntacticSpec struct {
	// Enabled syntatic data
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The number of top correlations to be included in the correlation results
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,2,opt,name=rows"`
}
