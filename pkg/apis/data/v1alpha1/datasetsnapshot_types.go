package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DatasetSnapshotPhase string

const (
	DatasetSnapshotPhasePending         DatasetSnapshotPhase = "Pending"
	DatasetSnapshotPhasePreparing       DatasetSnapshotPhase = "Preparing"
	DatasetSnapshotPhasePrepared        DatasetSnapshotPhase = "Prepared"
	DatasetSnapshotPhaseGenerating      DatasetSnapshotPhase = "Generating"
	DatasetSnapshotPhaseGenerateSuccess DatasetSnapshotPhase = "Generated"
	DatasetSnapshotPhaseIngestRunning   DatasetSnapshotPhase = "Ingesting"
	DatasetSnapshotPhaseIngestSuccess   DatasetSnapshotPhase = "Ingested"
	DatasetSnapshotPhaseGrouping        DatasetSnapshotPhase = "Grouping"
	DatasetSnapshotPhaseGrouped         DatasetSnapshotPhase = "Grouped"
	DatasetSnapshotPhaseReportRunning   DatasetSnapshotPhase = "Reporting"
	DatasetSnapshotPhaseReportSuccess   DatasetSnapshotPhase = "Reported"
	DatasetSnapshotPhaseProfileRunning  DatasetSnapshotPhase = "Profiling"
	DatasetSnapshotPhaseProfileSuccess  DatasetSnapshotPhase = "Profiled"
	DatasetSnapshotPhaseUnitTesting     DatasetSnapshotPhase = "UnitTesting"
	DatasetSnapshotPhaseSnapshotRunning DatasetSnapshotPhase = "Taking Snapshot"
	DatasetSnapshotPhaseSnapshotSuccess DatasetSnapshotPhase = "Snapshotted"
	DatasetSnapshotPhaseFailed          DatasetSnapshotPhase = "Failed"
	DatasetSnapshotPhaseAborted         DatasetSnapshotPhase = "Aborted"
	DatasetSnapshotPhaseReady           DatasetSnapshotPhase = "Ready"
)

type DatasetSnapshotConditionType string

const (
	DatasetSnapshotPrepared    DatasetSnapshotConditionType = "Prepared"
	DatasetSnapshotReported    DatasetSnapshotConditionType = "Reported"
	DatasetSnapshotUnitTested  DatasetSnapshotConditionType = "UnitTested"
	DatasetSnapshotSnapshotted DatasetSnapshotConditionType = "Snapshotted"
	DatasetSnapshotProfiled    DatasetSnapshotConditionType = "Profiled"
	DatasetSnapshotIngested    DatasetSnapshotConditionType = "Ingested"
	DatasetSnapshotGrouped     DatasetSnapshotConditionType = "Grouped"
	DatasetSnapshotGenerated   DatasetSnapshotConditionType = "Generated"
	DatasetSnapshotReady       DatasetSnapshotConditionType = "Ready"
	DatasetSnapshotPaused      DatasetSnapshotConditionType = "Paused"
	DatasetSnapshotAborted     DatasetSnapshotConditionType = "Aborted"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=datasetsnapshots,shortName=dss,singular=datasetsnapshot,categories={data,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Phase",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="integer",JSONPath=".spec.runVersion"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Rows",type="integer",JSONPath=".status.statistics.rows"
// +kubebuilder:printcolumn:name="Columns",type="integer",JSONPath=".status.statistics.columns"
// +kubebuilder:printcolumn:name="Size",type="integer",JSONPath=".status.statistics.sizeInBytes"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// DatasetSnapshot represents an ephemeral snapshot of a Dataset
type DatasetSnapshot struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DatasetSnapshotSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DatasetSnapshotStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DatasetList contains a list of Datasets
type DatasetSnapshotList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DatasetSnapshot `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// DatasetSnapshotSpec defines the run configuration for a Dataset
type DatasetSnapshotSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// DatasetName specifies the name of the Dataset resource which the snapshot will use to
	// determine the location, format, and post-processing options for the dataset
	// +kubebuilder:validation:Required
	// +required
	DatasetName string `json:"datasetName,omitempty" protobuf:"varint,2,opt,name=datasetName"`
	// Timout specifies the time in seconds for the run to be completed. If unspecified, the run
	// deadline specified by the Dataset will be used
	// +kubebuilder:validation:Optional
	Timeout *int64 `json:"timeout,omitempty" protobuf:"varint,3,opt,name=timeout"`
	// If true, the execution of new workloads associated with the run will be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pause *bool `json:"pause,omitempty" protobuf:"varint,4,opt,name=pause"`
	// If true, the run will be permanently aborted and all workloads created by the run will be removed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Abort *bool `json:"abort,omitempty" protobuf:"varint,5,opt,name=abort"`
	// ModelClassRunName specifies the name of the Model Class Run which created the run, if applicable
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,6,opt,name=modelClassRunName"`
}

// DatasetSnapshotStatus specifies the observed state of a DatasetSnapshot
type DatasetSnapshotStatus struct {
	// ObservedGeneration is the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// ManifestLocation specifies the location of the dataset manifest used during the course of the snapshot
	ManifestLocation catalog.FileLocation `json:"manifestLocation,omitempty" protobuf:"bytes,2,opt,name=manifestLocation"`
	// ManifestVersion specifies the version of the saved dataset manifest
	ManifestVersion catalog.Version `json:"manifestVersion,omitempty" protobuf:"varint,3,opt,name=manifestVersion"`
	// SnapshotVersion specifies the version of the snapshot, which is determined when the Dataset manifest is saved
	SnapshotVersion catalog.Version `json:"snapshotVersion,omitempty" protobuf:"varint,4,opt,name=snapshotVersion"`
	// DatasetStatistics contains statistics for each column of the dataset generated during the dataset profile
	// +kubebuilder:validation:Optional
	Statistics DatasetStatistics `json:"statistics,omitempty" protobuf:"bytes,5,opt,name=statistics"`
	// Phase defines the current phase of the run relative to its progress
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase DatasetSnapshotPhase `json:"phase,omitempty" protobuf:"bytes,6,opt,name=phase"`
	// ReportName specifies the name of the Report created by the run
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,7,opt,name=reportName"`
	// DataLocation contains the location of the dataset snapshot
	// +kubebuilder:validation:Optional
	DataLocation catalog.FileLocation `json:"dataLocation,omitempty" protobuf:"bytes,8,opt,name=dataLocation"`
	// ReportLocation contains the location of the report file generated by the run's Report resource
	// +kubebuilder:validation:Optional
	ReportLocation catalog.FileLocation `json:"reportLocation,omitempty" protobuf:"bytes,9,opt,name=reportLocation"`
	// ProfileLocation contains the location for the raw profile data
	// +kubebuilder:validation:Optional
	ProfileLocation catalog.FileLocation `json:"profileLocation" protobuf:"bytes,10,opt,name=profileLocation"`
	// AnomaliesLocation contains the location of the anomaly file, containing a list of rows
	// which were determined as anomalies by an isolation forest algorithm
	// +kubebuilder:validation:Optional
	AnomaliesLocation catalog.FileLocation `json:"anomaliesLocation" protobuf:"bytes,11,opt,name=anomaliesLocation"`
	// Imbalanced indicates if the classes in the dataset were detected as imbalanced
	// +kubebuilder:validation:Optional
	Imbalanced bool `json:"imbalanced,omitempty" protobuf:"varint,12,opt,name=imbalanced"`
	// UnitTestResults contains the results of the unit test phase
	//+kubebuilder:validation:Optional
	UnitTestResults catalog.TestSuiteResult `json:"unitTestResults,omitempty" protobuf:"bytes,13,opt,name=unitTestResults"`
	// FailureMessage is set to a failure message in the case that an error occurred during the run
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,14,opt,name=failureMessage"`
	// Progress defines the current numerical progress of the run, from 0 to 100
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,15,opt,name=progress"`
	// Logs contains the location of all logs produced by run workloads
	Logs catalog.Logs `json:"logs" protobuf:"bytes,16,opt,name=logs"`
	// +kubebuilder:validation:Optional
	Hash string `json:"hash,omitempty" protobuf:"bytes,17,opt,name=hash"`
	// UpdatedAt specifies the last time the run was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,18,opt,name=updatedAt"`
	// CompletedAt specifies the time at which the run completed or failed
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,19,opt,name=completedAt"`
	// LastStudyAt specifies the last time the run was used to create a Study
	//+kubebuilder:validation:Optional
	LastStudyAt *metav1.Time `json:"lastStudyAt,omitempty" protobuf:"bytes,20,opt,name=lastStudyAt"`
	// Images contains the container images used by the run
	// +kubebuilder:validation:Optional
	Images catalog.Images `json:"images,omitempty" protobuf:"bytes,21,opt,name=images"`
	// FeatureHistogramRef references the feature histogram generated by the snapshot
	// +kubebuilder:validation:Optional
	FeatureHistogramRef v1.ObjectReference `json:"featureHistogramRef,omitempty" protobuf:"bytes,22,opt,name=featureHistogramRef"`
	// GroupBy contains the index files for datasets produced through group-by operations
	// +kubebuilder:validation:Optional
	GroupBy DatasetGroupByStatus `json:"groupBy,omitempty" protobuf:"bytes,23,opt,name=groupBy"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,24,rep,name=conditions"`
}

// Correlation records the correlation between two features in a Dataset
type Correlation struct {
	// The name of the feature on the X axis
	X string `json:"x" protobuf:"bytes,1,opt,name=x"`
	// The name of the feature on the Y axis
	Y string `json:"y" protobuf:"bytes,2,opt,name=y"`
	// The correlation value
	Value float64 `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
	// How the value was calculated
	Method string `json:"method,omitempty" protobuf:"bytes,4,opt,name=method"`
}

// DatasetStatistics contains statistics about the Dataset and every feature in the dataset
type DatasetStatistics struct {
	// Columns contains the collection of statistics for each feature
	// +kubebuilder:validation:Optional
	Features []FeatureStatistics `json:"features,omitempty" protobuf:"bytes,1,rep,name=features"`
	// Rows specifies the number of rows observed in the dataset
	// +kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,3,opt,name=rows"`
	// Columns specifies the number of columns observed from the data
	// +kubebuilder:validation:Optional
	Columns int32 `json:"columns,omitempty" protobuf:"varint,4,opt,name=columns"`
	// SizeInBytes specifies the size of the data in bytes
	// +kubebuilder:validation:Optional
	SizeInBytes int32 `json:"sizeInBytes,omitempty" protobuf:"varint,5,opt,name=sizeInBytes"`
	// The top correlations between all features and the target feature
	// +kubebuilder:validation:Optional
	CorrelationsWithTarget []Correlation `json:"correlationsWithTarget,omitempty" protobuf:"bytes,6,rep,name=correlationsWithTarget"`
	// The top correlations between features computed per the CorrelationSpec of the dataset
	// +kubebuilder:validation:Optional
	TopCorrelations []Correlation `json:"topCorrelations,omitempty" protobuf:"bytes,7,rep,name=topCorrelations"`
}

// FeatureStatistics contains statistical parameters for a single feature from a dataset
type FeatureStatistics struct {
	// The name of the feature
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The data type of the feature
	// +kubebuilder:validation:Optional
	DataType catalog.DataType `json:"datatype,omitempty" protobuf:"bytes,2,opt,name=datatype"`
	// Amount of rows which contain a value for the feature
	// +kubebuilder:validation:Optional
	Count float64 `json:"count,omitempty" protobuf:"bytes,3,opt,name=count"`
	// Amount of unique values present in the feature
	// +kubebuilder:validation:Optional
	Distinct int32 `json:"distinct,omitempty" protobuf:"varint,4,opt,name=distinct"`
	// Amount of missing values present in the feature
	// +kubebuilder:validation:Optional
	Missing int32 `json:"missing,omitempty" protobuf:"varint,5,opt,name=missing"`
	// Percentage of missing values in the feature
	// +kubebuilder:validation:Optional
	PercentMissing float64 `json:"percentMissing,omitempty" protobuf:"bytes,6,opt,name=percentMissing"`
	// The mean of all values in the feature
	// +kubebuilder:validation:Optional
	Mean float64 `json:"mean,omitempty" protobuf:"bytes,7,opt,name=mean"`
	// The standard deviation of the feature values
	// +kubebuilder:validation:Optional
	StdDev float64 `json:"stddev,omitempty" protobuf:"bytes,8,opt,name=stddev"`
	// The variability of the feature values
	// +kubebuilder:validation:Optional
	Variance float64 `json:"variance,omitempty" protobuf:"bytes,9,opt,name=variance"`
	// The minimum value of all values in the feature
	// +kubebuilder:validation:Optional
	Min float64 `json:"min,omitempty" protobuf:"bytes,10,opt,name=min"`
	// The maximum value of all values in the feature
	// +kubebuilder:validation:Optional
	Max float64 `json:"max,omitempty" protobuf:"bytes,11,opt,name=max"`
	// The computed kurtosis, which measures the peakness of the distribution of values in the feature
	// +kubebuilder:validation:Optional
	Kurtosis float64 `json:"kurtosis,omitempty" protobuf:"bytes,12,opt,name=kurtosis"`
	// The computed skewness, which measures the asymmetry of the distribution of values in the feature
	// +kubebuilder:validation:Optional
	Skewness float64 `json:"skewness,omitempty" protobuf:"bytes,13,opt,name=skewness"`
	// Sum contains the sum of all values in the column
	// +kubebuilder:validation:Optional
	Sum int64 `json:"sum,omitempty" protobuf:"bytes,14,opt,name=sum"`
	// Mad contains the mean absolute deviation of the feature
	// +kubebuilder:validation:Optional
	Mad float64 `json:"mad,omitempty" protobuf:"bytes,15,opt,name=mad"`
	// The 25% point of all the values of the feature order
	// +kubebuilder:validation:Optional
	P25 float64 `json:"p25,omitempty" protobuf:"bytes,16,opt,name=p25"`
	// The 50% point of all the values of the feature in order, also known as the median
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,17,opt,name=p50"`
	// The 75% point of all the values of the feature in order
	// +kubebuilder:validation:Optional
	P75 float64 `json:"p75,omitempty" protobuf:"bytes,18,opt,name=p75"`
	// The interquartile range of the feature values
	// +kubebuilder:validation:Optional
	IQR float64 `json:"iqr,omitempty" protobuf:"bytes,19,opt,name=iqr"`
	// The mode value of the feature, also known as the most frequent value
	// +kubebuilder:validation:Optional
	Mode string `json:"mode,omitempty" protobuf:"bytes,20,opt,name=mode"`
	// The number of zero values in the feature
	// +kubebuilder:validation:Optional
	Zeros float64 `json:"zeros,omitempty" protobuf:"bytes,21,opt,name=zeros"`
	// The number of invalid values in the feature
	// +kubebuilder:validation:Optional
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,22,opt,name=invalid"`
	// The feature importance of the feature
	// +kubebuilder:validation:Optional
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,23,opt,name=importance"`
	// Indicates if the feature is the target attribute for a Study
	// +kubebuilder:validation:Optional
	Target bool `json:"target,omitempty" protobuf:"varint,24,opt,name=target"`
	// Indicates if the column should be ignored
	// +kubebuilder:validation:Optional
	Ignore bool `json:"ignore,omitempty" protobuf:"varint,25,opt,name=ignore"`
	// Indicates if the feature may contain null values
	// +kubebuilder:validation:Optional
	Nullable bool `json:"nullable,omitempty" protobuf:"varint,26,opt,name=nullable"`
	// Indicates if the feature has high cardinality and should use the high cardinality encoder during feature engineering
	// +kubebuilder:validation:Optional
	HighCardinality bool `json:"highCardinality,omitempty" protobuf:"varint,27,opt,name=highCardinality"`
	// Indicates if the feature has high correlation with another feature, and that it should be dropped
	// +kubebuilder:validation:Optional
	HighCorrWithOtherFeatures bool `json:"highCorrWithOtherFeatures,omitempty" protobuf:"varint,28,opt,name=highCorrWithOtherFeatures"`
	// Indicate that the feature has low correlation with the target feature, and that it should be dropped
	// +kubebuilder:validation:Optional
	LowCorrWithTarget bool `json:"lowCorrWithTarget,omitempty" protobuf:"varint,29,opt,name=lowCorrWithTarget"`
	// Indicates if the feature has a high percentage of missing values, and that it should be dropped
	// +kubebuilder:validation:Optional
	HighMissingPct bool `json:"highMissingPct,omitempty" protobuf:"varint,30,opt,name=highMissingPct"`
	// Marks that the feature is skewed and would require a power transform
	// +kubebuilder:validation:Optional
	Skewed bool `json:"skewed,omitempty" protobuf:"varint,31,opt,name=skewed"`
	// +kubebuilder:validation:Optional
	Constant bool `json:"constant,omitempty" protobuf:"varint,33,opt,name=constant"`
	// Indicates if the feature is a duplicate of another feature
	// +kubebuilder:validation:Optional
	Duplicate bool `json:"duplicate,omitempty" protobuf:"varint,34,opt,name=duplicate"`
	// Indicates if the feature is reserved and must be included in model training
	// +kubebuilder:validation:Optional
	Reserved bool `json:"reserved,omitempty" protobuf:"varint,35,opt,name=reserved"`
	// The ratio between non-null and null values in the feature
	// +kubebuilder:validation:Optional
	Completeness float64 `json:"completeness,omitempty" protobuf:"bytes,37,opt,name=completeness"`
	// The ratio between unique values and non-unique values in the feature
	// +kubebuilder:validation:Optional
	DistinctValueCount float64 `json:"distinctValueCount,omitempty" protobuf:"bytes,38,opt,name=distinctValueCount"`
	// The ratio between most the most frequent value to the number of total values in the feature
	// +kubebuilder:validation:Optional
	MostFreqValuesRatio float64 `json:"mostFreqValuesRatio,omitempty" protobuf:"bytes,39,opt,name=mostFreqValuesRatio"`
	// Histogram data representing the distribution of the values in the column
	// +kubebuilder:validation:Optional
	Histogram catalog.HistogramData `json:"histogram,omitempty" protobuf:"bytes,41,opt,name=histogram"`
	// The correlation to the target feature of the dataset
	// +kubebuilder:validation:Optional
	CorrToTarget float64 `json:"corrToTarget,omitempty" protobuf:"bytes,42,opt,name=corrToTarget"`
	// The index of the column in the dataset
	Index int32 `json:"index,omitempty" protobuf:"bytes,43,opt,name=index"`
	// Statistics relevant to outliers
	Outliers OutlierStatistics `json:"outliers,omitempty" protobuf:"bytes,44,opt,name=outliers"`
}

type OutlierStatistics struct {
	// The number of outliers below baseline
	Lower int32 `json:"lower,omitempty" protobuf:"varint,1,opt,name=lower"`
	// The number of outliers above baseline
	Upper int32 `json:"upper,omitempty" protobuf:"varint,2,opt,name=upper"`
	// Percentage of rows detected as outliers
	Percent float32 `json:"percent,omitempty" protobuf:"bytes,3,opt,name=percent"`
}

// Represent the status of a groupby
type DatasetGroupByStatus struct {
	// The locations of the datasets files. Each file is the group
	// +kubebuilder:validation:Optional
	DatasetsURI string `json:"datasetsURI,omitempty" protobuf:"bytes,1,opt,name=datasetsURI"`
	// The locations of the datasets files.
	// +kubebuilder:validation:Optional
	ProfilesURI string `json:"profilesURI,omitempty" protobuf:"bytes,2,opt,name=profilesURI"`
	// The locations of the report file. One report for each key
	// +kubebuilder:validation:Optional
	ReportsURI string `json:"reportsURI,omitempty" protobuf:"bytes,3,opt,name=reportsURI"`
	// The locations of the report file. One report for each key
	// +kubebuilder:validation:Optional
	UnitTestsURI string `json:"unitTestsURI,omitempty" protobuf:"bytes,4,opt,name=unitTestsURI"`
	// The locations of the time series feature files. The file contain a line for each feature
	// +kubebuilder:validation:Optional
	FeaturesURI string `json:"featuresURI,omitempty" protobuf:"bytes,5,opt,name=featuresURI"`
	// Holds the worker on going result, when a worker finish, we update the location of thier result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,6,rep,name=workerResults"`
}
