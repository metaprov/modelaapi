package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +kubebuilder:validation:Enum="unlabled";"serving";"feedback";"training";"prediction";"featuregroup";
type DatasetRole string

const (
	DatasetRoleUnlabeled    DatasetRole = "unlabeled"    // Unlabeled dataset
	DatasetRoleFeatureGroup DatasetRole = "featuregroup" // Unlabeled dataset
	DatasetRoleServing      DatasetRole = "serving"      // Dataset contain serving data.
	DatasetRoleFeedback     DatasetRole = "feedback"     // feedback dataset which was labeled
	DatasetRoleTraining     DatasetRole = "training"     // Regular Labeled dataset
	DatasetRolePrediction   DatasetRole = "prediction"   // Regular Labeled dataset
)

type DatasetConditionType string

const (
	DatasetSaved DatasetConditionType = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=datasets,shortName=ds,singular=dataset,categories={data,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".status.version"
// +kubebuilder:printcolumn:name="Data Source",type="string",JSONPath=".spec.dataSourceName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:printcolumn:name="Last Snapshot",type="date",JSONPath=".status.lastSnapshotAt",description=""
// Dataset represents the specification for a dataset to be processed from an external data source
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

// DatasetSpec defines the desired parameters for a Dataset
type DatasetSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// DataSourceName specifies the name of the Data Source which Dataset runs will use as a schema for incoming data
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +required
	DataSourceName string `json:"dataSourceName,omitempty" protobuf:"bytes,2,opt,name=dataSourceName"`
	// Description contains the user-provided description of the object
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// RunSpec specifies the configuration for the execution of snapshots created by the Dataset
	// +kubebuilder:validation:Required
	Run catalog.RunSpec `json:"run,omitempty" protobuf:"bytes,4,opt,name=run"`
	// The name of the Virtual Bucket where artifacts generated by the Dataset will be stored.
	// If empty, default to the Data Product's default artifact bucket
	// +kubebuilder:validation:Optional
	ArtifactBucketName *string `json:"artifactBucketName,omitempty" protobuf:"bytes,5,opt,name=artifactBucketName"`
	// The name of the Lab under which Jobs created by the Dataset will be executed.
	// If empty, default to the Data Product's default Lab
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,6,opt,name=labName"`
	// Role specifies the role of the dataset (training, feedback, etc.)
	// +kubebuilder:default:="training"
	// +kubebuilder:validation:Optional
	Role DatasetRole `json:"role,omitempty" protobuf:"bytes,7,opt,name=role"`
	// The machine learning task relevant to the Dataset. This field must be the same as the task specified by the Data Source
	// +kubebuilder:validation:Optional
	Task catalog.MLTask `json:"task,omitempty" protobuf:"bytes,8,opt,name=task"`
	// The machine learning sub-task relevant to the Dataset. This field must be the same as the subtask specified by the Data Source
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,9,opt,name=subtask"`
	// The type of dataset which was uploaded. Tabular is the only supported type as of the current release
	// +kubebuilder:default:="tabular"
	// +kubebuilder:validation:Optional
	Type *catalog.DatasetType `json:"type,omitempty" protobuf:"bytes,10,opt,name=type"`
	// Origin is the location of the data file or database query which holds the raw data of the Dataset. When the Dataset is
	// created, a workload will be created to snapshot the location and store it in the bucket specified by ArtifactBucketName
	// +kubebuilder:validation:Optional
	Origin catalog.DataLocation `json:"origin,omitempty" protobuf:"bytes,11,opt,name=origin"`
	// Resources specifies the resource requirements that will be allocated for the Dataset
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,12,opt,name=resources"`
	// UnitTests specifies the unit tests that will be run against ingested datasets
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,13,opt,name=unitTests"`
	// Indicates if a PDF report containing the Dataset profile should be generated
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Report *bool `json:"report,omitempty" protobuf:"varint,14,opt,name=report"`
	// Indicates if the Dataset should be checked against the validation rules of its Data Source
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	UnitTest *bool `json:"unitTest,omitempty" protobuf:"varint,15,opt,name=unitTest"`
	// Indicates if a Feature Histogram will be generated from the dataset's columns. A feature histogram
	// may only be generated if the dataset profile succeeded
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	GenerateFeatureHistogram *bool `json:"generateFeatureHistogram,omitempty" protobuf:"varint,16,opt,name=generateFeatureHistogram"`
	// Indicates if the Dataset should be quickly processed. If enabled, the validation, profiling, and reporting will be skipped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,17,opt,name=fast"`
	// Sample specifies the configuration to sample the dataset's data
	// +kubebuilder:validation:Optional
	Sample *SampleSpec `json:"sample,omitempty" protobuf:"bytes,18,opt,name=sample"`
	// Synthetic specifies to configuration to augment the dataset with synthetic data
	// +kubebuilder:validation:Optional
	Synthetic *SyntheticSpec `json:"synthetic,omitempty" protobuf:"bytes,19,opt,name=synthetic "`
	// The specification for how to find the correlations of the Dataset's features during the profiling phase.
	// Based on the specification, the data plane will compute the correlation between each feature and will store the highest-scoring
	// +kubebuilder:validation:Optional
	Correlation *CorrelationSpec `json:"correlation,omitempty" protobuf:"bytes,20,opt,name=correlation"`
	// GroupBy specifies the configuration to partition the dataset by groups
	// By default, this dataset is assigned
	GroupBy *GroupBySpec `json:"groupBy,omitempty" protobuf:"bytes,24,opt,name=groupBy"`
	// Key contains the collection of group keys, in the case that the dataset represents hierarchical time-series data.
	// The keys will be used to perform a group by
	// +kubebuilder:validation:Optional
	Key []string `json:"key,omitempty" protobuf:"bytes,26,rep,name=key"`
	// ModelClassName specifies the name of the Model Class which created the Dataset, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,28,opt,name=modelClassName"`
	// FeatureGroupName specifies the name of the Feature Group that will be used to create the Dataset, if applicable
	// +kubebuilder:validation:Optional
	FeatureGroupName *string `json:"featureGroupName,omitempty" protobuf:"bytes,29,opt,name=featureGroupName"`
	// Notification specifies the configuration for Alerts generated by the resource
	//+kubebuilder:validation:Optional
	Notification *catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,30,opt,name=notification"`
}

// DatasetStatus defines the observed state of a Dataset object
type DatasetStatus struct {
	// ObservedGeneration specifies the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Active contains a collection of references to currently active snapshots
	// +optional
	Active catalog.RunReferenceList `json:"active,omitempty" protobuf:"bytes,2,rep,name=active"`
	// LastSnapshotVersion contains the integer version last used to create a snapshot
	// +kubebuilder:default:=0
	LastSnapshotVersion catalog.Version `json:"lastSnapshotVersion" protobuf:"varint,4,opt,name=lastSnapshotVersion"`
	// AvailableSnapshots contains the collection of snapshot references which are ready for use.
	// Each version corresponds with an existing DatasetSnapshot resource
	AvailableSnapshots catalog.RunReferenceList `json:"availableSnapshots,omitempty" protobuf:"bytes,5,opt,name=availableSnapshots"`
	// LastSnapshotAt specifies the time at which a snapshot was last created for the Dataset
	//+kubebuilder:validation:Optional
	LastSnapshotAt *metav1.Time `json:"lastSnapshotAt,omitempty" protobuf:"bytes,6,opt,name=lastSnapshotAt"`
	// LastFailureMessage specifies the failure message of the last snapshot. If the last snapshot succeeded, the field will be cleared
	//+kubebuilder:validation:Optional
	LastFailureMessage *string `json:"lastFailureMessage,omitempty" protobuf:"bytes,7,opt,name=lastFailureMessage"`
	// UpdatedAt specifies the last time the Dataset was changed
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,8,opt,name=updatedAt"`
	// Schedule specifies the status of the run schedule
	//+kubebuilder:validation:Optional
	Schedule catalog.RunScheduleStatus `json:"schedule,omitempty" protobuf:"bytes,9,opt,name=schedule"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
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

type SyntheticSpec struct {
	// Indicates if the generation of synthetic data is enabled
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The number of top correlations to be included in the correlation results
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,2,opt,name=rows"`
}

// GroupBySpec defines the configuration to split the dataset by groups
type GroupBySpec struct {
	// Enabled the group by, if not enabled, the dataset is treated as defined in the data source.
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// For group forecasting, this is the key of the group
	// If not specify this will be the key from the data source.
	// +kubebuilder:validation:Optional
	GroupBy []string `json:"groupBy,omitempty" protobuf:"bytes,2,rep,name=groupBy"`
	// The time series frequency, if not specify they freq will be the base freq from the data source.
	// +kubebuilder:default:="day"
	// +kubebuilder:validation:Optional
	Frequency *catalog.Frequency `json:"frequency,omitempty" protobuf:"bytes,3,opt,name=frequency"`
	// The interval to forecast at this level. If not specify the interval will be the base interval
	// the data source
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Interval *int32 `json:"interval,omitempty" protobuf:"varint,4,opt,name=interval"`
	// Aggregation function. Define how to aggregate
	// By default this is the aggregation function from the data source.
	// +kubebuilder:default:="sum"
	// +kubebuilder:validation:Optional
	Aggregate catalog.Aggregate `json:"aggregate,omitempty" protobuf:"bytes,5,opt,name=aggregate"`
}

type GroupDatasetLocationStatus struct {
	// The root folder of all the groups
	GroupsRoot *string `json:"groupsRoot,omitempty" protobuf:"bytes,1,opt,name=groupsRoot"`
	// The root of the group folders and files
	// +kubebuilder:validation:Optional
	GroupRoot *string `json:"groupRoot,omitempty" protobuf:"bytes,2,opt,name=groupRoot"`
	// The folder of group data
	// +kubebuilder:validation:Optional
	GroupDataFolder *string `json:"groupDataFolder,omitempty" protobuf:"bytes,3,opt,name=groupDataFolder"`
	// +kubebuilder:validation:Optional
	GroupDataIndex *string `json:"groupDataFile,omitempty" protobuf:"bytes,4,opt,name=groupDataFile"`
	// +kubebuilder:validation:Optional
	GroupProfileFolder *string `json:"groupProfileFolder,omitempty" protobuf:"bytes,5,opt,name=groupProfileFolder"`
	// +kubebuilder:validation:Optional
	GroupReportIndex *string `json:"groupReportFile,omitempty" protobuf:"bytes,6,opt,name=groupReportFile"`
	// +kubebuilder:validation:Optional
	GroupFeaturesFile *string `json:"groupFeaturesFile,omitempty" protobuf:"bytes,7,opt,name=groupFeaturesFile"`
}
