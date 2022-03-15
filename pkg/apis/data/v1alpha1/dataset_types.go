package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DatasetPhase string

const (
	DatasetPhasePending           DatasetPhase = "Pending"    // when generating
	DatasetPhaseGenerating        DatasetPhase = "Generating" // when generating
	DatasetPhaseGenSuccess        DatasetPhase = "GenSuccess" // when syntactic gen success
	DatasetPhaseIngestRunning     DatasetPhase = "Ingesting"
	DatasetPhaseIngestSuccess     DatasetPhase = "Ingested"
	DatasetPhaseReportRunning     DatasetPhase = "Reporting"
	DatasetPhaseReportSuccess     DatasetPhase = "Reported"
	DatasetPhaseProfileRunning    DatasetPhase = "Profiling"
	DatasetPhaseProfileSuccess    DatasetPhase = "Profiled"
	DatasetPhaseValidationRunning DatasetPhase = "Validating"
	DatasetPhaseValidationSuccess DatasetPhase = "Validated"
	DatasetPhaseSnapshotRunning   DatasetPhase = "TakingSnapshot"
	DatasetPhaseSnapshotSuccess   DatasetPhase = "Snapshotted"
	DatasetPhaseFailed            DatasetPhase = "Failed"
	DatasetPhaseAborted           DatasetPhase = "Aborted"
	DatasetPhaseReady             DatasetPhase = "Ready"
)

// Condition on the dataset
type DatasetConditionType string

/// DatasetName Condition
const (
	DatasetReported    DatasetConditionType = "Reported"
	DatasetValidated   DatasetConditionType = "Validated"
	DatasetSnapshotted DatasetConditionType = "Snapshootted"
	DatasetProfiled    DatasetConditionType = "Profiled"
	DatasetIngested    DatasetConditionType = "Ingested"
	DatasetGenerated   DatasetConditionType = "Generated"
	DatasetSaved       DatasetConditionType = "Saved"
	DatasetArchived    DatasetConditionType = "Archived"
	DatasetReady       DatasetConditionType = "Ready"
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
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// VersionName is the data product version of the dataset
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Required
	// +required
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// DataSourceName is the name of the data source which created this dataset. For example flat file
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +required
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,3,opt,name=datasourceName"`
	// User provided description
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// The display name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DisplayName *string `json:"displayName,omitempty" protobuf:"bytes,5,opt,name=displayName"`
	// If true, a dataset report should be generated for this dataset.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,7,opt,name=reported"`
	// If true, we should take a snapshot of the databases in order to create a dataset
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Snapshotted *bool `json:"snapshotted,omitempty" protobuf:"varint,8,opt,name=snapshotted"`
	// If true, we should validate the dataset
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Validated *bool `json:"validate,omitempty" protobuf:"varint,9,opt,name=validate"`
	// Labeled indicates if this dataset is labeled or not.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Labeled *bool `json:"labeled,omitempty" protobuf:"varint,10,opt,name=labeled"`
	// Syntactic indicates if we want to generate this dataset based on the data source
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Syntactic *bool `json:"syntactic,omitempty" protobuf:"varint,11,opt,name=syntactic"`
	// If syntactic is true, indicates how many rows to generate
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	SyntacticRows *int32 `json:"syntacticRows" protobuf:"varint,12,opt,name=syntacticRows"`
	// Define the data location. The operator will copy the data from this location into the live location.
	// The datafiles are initially uploaded to this location.
	// +kubebuilder:validation:Optional
	Origin DataLocation `json:"origin,omitempty" protobuf:"bytes,13,opt,name=origin"`
	// Folder of the actual data resides.
	// +kubebuilder:validation:Required
	// +required
	Location DataLocation `json:"location,omitempty" protobuf:"bytes,14,opt,name=location"`
	// Resources is the hardware resource req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,15,opt,name=resources"`
	// ActiveDeadlineSeconds is the deadline of a job for this dataset.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,16,opt,name=activeDeadlineSeconds"`
	// DatasetType is the type of dataset
	// +kubebuilder:default:="tabular"
	// +kubebuilder:validation:Optional
	Type *catalog.DatasetType `json:"type,omitempty" protobuf:"bytes,17,opt,name=type"`
	// Sample spec defines how many rows to use for analysis
	// +kubebuilder:validation:Optional
	Sample SampleSpec `json:"sample,omitempty" protobuf:"bytes,18,opt,name=sample"`
	// DatasetType is the type of dataset
	// +kubebuilder:vali dation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,19,opt,name=task"`
	// Specification for notification for events that occur during processing
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,20,opt,name=notification"`
	// Specification for the correlation spec
	// +kubebuilder:validation:Optional
	Correlation CorrelationSpec `json:"correlation,omitempty" protobuf:"bytes,21,opt,name=correlation"`
	// Indicate a fast mode. If true, skip the validation/profiling/report
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"bytes,22,opt,name=fast"`
}

// DatasetStatus defines the observed state of Dataset
type DatasetStatus struct {
	// Statistics for the dataset. The statistics contain information about each column.
	// +kubebuilder:validation:Optional
	Statistics DatasetStatistics `json:"statistics,omitempty" protobuf:"bytes,1,opt,name=statistics"`
	// The phase of the dataset processing
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase DatasetPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// Reference to the report object that was generated for the dataset
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,3,opt,name=reportName"`
	// ReportURI is the uri of dataset report
	// +kubebuilder:validation:Optional
	ReportUri string `json:"reportUri,omitempty" protobuf:"bytes,4,opt,name=reportUri"`
	// A reference to the visualization uri which were produce during processing
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,5,opt,name=profileUri"`
	// Based on the actual data, treat this dataset as imbalanced.
	//+kubebuilder:validation:Optional
	Imbalanced bool `json:"imbalanced,omitempty" protobuf:"bytes,6,opt,name=imbalanced"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,8,opt,name=observedGeneration"`
	// List of data problems, as reported by the validation process
	//+kubebuilder:validation:Optional
	ValidationResults []DataValidationResult `json:"validationResults,omitempty" protobuf:"bytes,9,rep,name=validationResults"`
	// Last time a study was done on the dataset.
	//+kubebuilder:validation:Optional
	LastStudyTime *metav1.Time `json:"lastStudyTime,omitempty" protobuf:"bytes,10,opt,name=lastStudyTime"`
	// Notification sent
	//+kubebuilder:validation:Optional
	NotificationTime *metav1.Time `json:"lastNotificationTime,omitempty" protobuf:"bytes,11,opt,name=lastNotificationTime"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,12,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,13,opt,name=failureMessage"`
	// Processing progress
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,14,opt,name=progress"`
	// Sha256 signature of the dataset file.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Hash string `json:"hash,omitempty" protobuf:"bytes,15,opt,name=hash"`
	// Holds the location of log paths
	Logs catalog.Logs `json:"logs" protobuf:"bytes,16,opt,name=logs"`
	// If this dataset is derived, the name of the dataset that this is derived from.
	// +kubebuilder:validation:Optional
	DerivedFromDataset *string `json:"derivedFromDataset,omitempty" protobuf:"bytes,17,opt,name=derivedFromDataset"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,18,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DatasetCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,19,rep,name=conditions"`
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
	// Holds the top correlation with target
	// +kubebuilder:validation:Optional
	CorrelationsWithTarget []Correlation `json:"correlationsWithTarget,omitempty" protobuf:"bytes,6,opt,name=correlationsWithTarget"`
	// Holds the top feature correlation
	// +kubebuilder:validation:Optional
	TopCorrelations []Correlation `json:"topCorrelations,omitempty" protobuf:"bytes,7,rep,name=topCorrelations"`
}

// Hold the statistical parameters about a single attribute
type ColumnStatistics struct {
	// FileName is the name of the column
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// DataType is the name of the column
	// +kubebuilder:validation:Optional
	DataType catalog.DataType `json:"datatype,omitempty" protobuf:"bytes,2,opt,name=datatype"`
	// Number of rows
	// +kubebuilder:validation:Optional
	Count float64 `json:"count,omitempty" protobuf:"bytes,3,opt,name=count"`
	// Count of unique values.
	// +kubebuilder:validation:Optional
	Distinct int32 `json:"distinct,omitempty" protobuf:"varint,4,opt,name=distinct"`
	// The number of missing values
	// +kubebuilder:validation:Optional
	Missing int32 `json:"missing,omitempty" protobuf:"varint,5,opt,name=missing"`
	// Percent missing
	// +kubebuilder:validation:Optional
	PercentMissing float64 `json:"percentMissing,omitempty" protobuf:"bytes,6,opt,name=percentMissing"`
	// Mean is the mean value of the attribute
	// +kubebuilder:validation:Optional
	Mean float64 `json:"mean,omitempty" protobuf:"bytes,7,opt,name=mean"`
	// StdDev is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	StdDev float64 `json:"stddev,omitempty" protobuf:"bytes,8,opt,name=stddev"`
	// Variance
	// +kubebuilder:validation:Optional
	Variance float64 `json:"variance,omitempty" protobuf:"bytes,9,opt,name=variance"`
	// Min is the minimum value of the attribute
	// +kubebuilder:validation:Optional
	Min float64 `json:"min,omitempty" protobuf:"bytes,10,opt,name=min"`
	// Max is the maximum value of the attribute
	// +kubebuilder:validation:Optional
	Max float64 `json:"max,omitempty" protobuf:"bytes,11,opt,name=max"`
	// Kurtosis is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	Kurtosis float64 `json:"kurtosis,omitempty" protobuf:"bytes,12,opt,name=kurtosis"`
	// Skewness is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	Skewness float64 `json:"skewness,omitempty" protobuf:"bytes,13,opt,name=skewness"`
	// Skewness is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	Sum float64 `json:"sum,omitempty" protobuf:"bytes,14,opt,name=sum"`
	// Skewness is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	Mad float64 `json:"mad,omitempty" protobuf:"bytes,15,opt,name=mad"`
	// Pct25 is the 25 percent point
	// +kubebuilder:validation:Optional
	P25 float64 `json:"p25,omitempty" protobuf:"bytes,16,opt,name=p25"`
	// Pct50 is the median
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,17,opt,name=p50"`
	// Pct75 is the 75% point
	// +kubebuilder:validation:Optional
	P75 float64 `json:"p75,omitempty" protobuf:"bytes,18,opt,name=p75"`
	// Skewness is the standard deviation value of the attribute
	// +kubebuilder:validation:Optional
	IQR float64 `json:"iqr,omitempty" protobuf:"bytes,19,opt,name=iqr"`
	// Mode for categorical values, is the most common value
	// +kubebuilder:validation:Optional
	Mode string `json:"mode,omitempty" protobuf:"bytes,20,opt,name=mode"`
	// Zeros is the numbers of zeros in the feature
	// +kubebuilder:validation:Optional
	Zeros float64 `json:"zeros,omitempty" protobuf:"bytes,21,opt,name=zeros"`
	// The number of invalid values
	// +kubebuilder:validation:Optional
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,22,opt,name=invalid"`
	// The feature importance
	// +kubebuilder:validation:Optional
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,23,opt,name=importance"`
	// Is this the target attribute, the value is derived from the data source
	// +kubebuilder:validation:Optional
	Target bool `json:"target,omitempty" protobuf:"bytes,24,opt,name=target"`
	// Should this column be ignored, as specified by the user
	// This value is derived from the datasource
	// +kubebuilder:validation:Optional
	Ignore bool `json:"ignore,omitempty" protobuf:"varint,25,opt,name=ignore"`
	// Is this column is nullable.
	// This value is derived from the schema.
	// +kubebuilder:validation:Optional
	Nullable bool `json:"nullable,omitempty" protobuf:"varint,26,opt,name=nullable"`
	// This column has high cardinality and should use high cred encoder
	// The value is set during the profile process.
	// +kubebuilder:validation:Optional
	HighCardinality bool `json:"highCardinality,omitempty" protobuf:"varint,27,opt,name=highCardinality"`
	// This column has high correlation with another feature and should be dropped.
	// The value is set during the profile process.
	// +kubebuilder:validation:Optional
	HighCorrWithOtherFeatures bool `json:"highCorrWithOtherFeatures,omitempty" protobuf:"varint,28,opt,name=highCorrWithOtherFeatures"`
	// Indicate that this feature is not corrolated with target and should be dropped
	// +kubebuilder:validation:Optional
	LowCorrWithTarget bool `json:"lowCorrWithTarget,omitempty" protobuf:"varint,29,opt,name=lowCorrWithTarget"`
	// This column has high amount of missing pct, and should be removed from consideration.
	// The value is set during the profile process.
	// +kubebuilder:validation:Optional
	HighMissingPct bool `json:"highMissingPct,omitempty" protobuf:"varint,30,opt,name=highMissingPct"`
	// Mark that this column is skewed and would require a power transform
	//If skewness is less than -1 or greater than 1, the distribution is highly skewed.
	//If skewness is between -1 and -0.5 or between 0.5 and 1, the distribution is moderately skewed.
	//If skewness is between -0.5 and 0.5, the distribution is approximately symmetric
	// +kubebuilder:validation:Optional
	Skewed bool `json:"skewed,omitempty" protobuf:"varint,31,opt,name=skewed"`
	// This is updated from the data source. If true, the column is an id column
	// +kubebuilder:validation:Optional
	Id bool `json:"id,omitempty" protobuf:"varint,32,opt,name=id"`
	// This column has high correlation with another feature and should be dropped.
	// The value is set during the profile process.
	// +kubebuilder:validation:Optional
	Constant bool `json:"constant,omitempty" protobuf:"varint,33,opt,name=constant"`
	// This column is duplicate of other column
	// The value is set during the profile process.
	// +kubebuilder:validation:Optional
	Duplicate bool `json:"duplicate,omitempty" protobuf:"varint,34,opt,name=duplicate"`
	// The column is reserved and must be part of the features set for the task.
	// The value is derived from the data source.
	// +kubebuilder:validation:Optional
	Reserved bool `json:"reserved,omitempty" protobuf:"varint,35,opt,name=reserved"`
	// Outliers count
	// +kubebuilder:validation:Optional
	Outliers int32 `json:"outliers,omitempty" protobuf:"varint,36,opt,name=outliers"`
	// Completeness is the ratio between non null to null
	// +kubebuilder:validation:Optional
	Completeness float64 `json:"completeness,omitempty" protobuf:"bytes,37,opt,name=completeness"`
	// The ratio between distinct count to total count
	// +kubebuilder:validation:Optional
	DistinctValueCount float64 `json:"distinctValueCount,omitempty" protobuf:"bytes,38,opt,name=distinctValueCount"`
	// The ratio between most freq value to total
	// +kubebuilder:validation:Optional
	MostFreqValuesRatio float64 `json:"mostFreqValuesRatio,omitempty" protobuf:"bytes,39,opt,name=mostFreqValuesRatio"`
	// Used for text attributes
	// +kubebuilder:validation:Optional
	IndexOfPeculiarity float64 `json:"indexOfPeculiarity,omitempty" protobuf:"bytes,40,opt,name=indexOfPeculiarity"`
	// The column histogram
	// +kubebuilder:validation:Optional
	Histogram catalog.HistogramData `json:"histogram,omitempty" protobuf:"bytes,41,opt,name=histogram"`
	// Correlation to target
	// +kubebuilder:validation:Optional
	CorrToTarget float64 `json:"corrToTarget,omitempty" protobuf:"bytes,42,opt,name=corrToTarget"`
}

// DatasetTemplate is  used to generate new datasets
type DatasetTemplate struct {
	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +kubebuilder:validation:Optional
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

type DataLocationType string

const (
	DataLocationObjectStorage DataLocationType = "object"
	DataLocationSQLTable      DataLocationType = "table"
	DataLocationSQLView       DataLocationType = "view"
	DataLocationStream        DataLocationType = "stream" // if the data reside in a stream
	DataLocationWebApi        DataLocationType = "web"    // if the data reside in a stream
)

// data reference contain pointers to the actual data objects
type DataLocation struct {
	// +kubebuilder:default:="object"
	// data location type is the type of the data location
	// +kubebuilder:validation:Optional
	Type *DataLocationType `json:"type" protobuf:"bytes,1,opt,name=type"`
	// ConnectionName is the name of the connection to access the database
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName" protobuf:"bytes,2,opt,name=connectionName"`
	// +kubebuilder:default:=""
	// Bucketname is the name of the bucket
	// +kubebuilder:validation:Optional
	BucketName *string `json:"bucketName" protobuf:"bytes,3,opt,name=bucketName"`
	// Path to the full data file (e.g. csv file).
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Path *string `json:"path" protobuf:"bytes,4,opt,name=path"`
	// Sql or table or topic name.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Table *string `json:"table" protobuf:"bytes,5,opt,name=table"`
	// Database , the database.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Database *string `json:"database" protobuf:"bytes,6,opt,name=database"`
	// SQL statement, in case we choose the view type
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Sql *string `json:"sql" protobuf:"bytes,7,opt,name=sql"`
	// Topic is the name of the topic in case of streaming
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Topic *string `json:"topic" protobuf:"bytes,8,opt,name=topic"`
}

type DataValidationResult struct {
	Type   string `json:"type" protobuf:"bytes,1,opt,name=type"`
	Column string `json:"column" protobuf:"bytes,2,opt,name=column"`
	Error  string `json:"error" protobuf:"bytes,3,opt,name=error"`
	Passed bool   `json:"passed" protobuf:"varint,4,opt,name=passed"`
}

// Feature corr is used to record a correlation between two features.
type Correlation struct {
	// The first feature name
	Feature1 string `json:"feature1" protobuf:"bytes,1,opt,name=feature1"`
	// The second feature name
	Feature2 string `json:"feature2" protobuf:"bytes,2,opt,name=feature2"`
	// The corr value
	Value float64 `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
	// How the value was calculated
	Method string `json:"method,omitempty" protobuf:"bytes,4,opt,name=method"`
}

// Specify how the correlation should be computed
type CorrelationSpec struct {
	// Specify the minimum value of the corr
	// +kubebuilder:default:=50
	// +kubebuilder:validation:Optional
	Cutoff *float64 `json:"cutoff,omitempty" protobuf:"bytes,1,opt,name=cutoff"`
	// Specify the method to use when computing the correlation.
	// +kubebuilder:default:="pearson"
	// +kubebuilder:validation:Optional
	Method *string `json:"method,omitempty" protobuf:"bytes,2,opt,name=method"`
	// Specify the top number of correlation to include in the status.
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	Top *int32 `json:"top,omitempty" protobuf:"varint,3,opt,name=top"`
}
