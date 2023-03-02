/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */
package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition of the data pipeline
type DataPipelineConditionType string

// / DataPipeline Condition
const (
	DataPipelineReady = "Ready"
	DataPipelineSaved = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=datapipelines,singular=datapipeline,shortName="dpl",categories={data,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description",description=""
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule",description=""
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// DataPipeline represents the ETL flow from the data sources to a processed dataset, ready for training.
type DataPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataPipelineSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DataPipelineList contain the list of DataPipeline
type DataPipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// DataPipelineSpec defines the desired state of a DataPipeline
type DataPipelineSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The model class for this pipeline
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,2,opt,name=modelClassName"`
	// Description of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// DatasetSelector is used to select datasets for processing in the pipeline
	// +kubebuilder:validation:Optional
	DatasetSelector map[string]string `json:"datasetSelector,omitempty" protobuf:"bytes,4,opt,name=datasetSelector"`
	// RecipeOrder defines the list of recipes and the order they need to run
	// +kubebuilder:validation:Optional
	Recipes []RecipePartSpec `json:"recipes,omitempty" protobuf:"bytes,5,rep,name=recipes"`
	// The output definition
	// +kubebuilder:validation:Optional
	Output DataOutputSpec `json:"output,omitempty" protobuf:"bytes,6,opt,name=output"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,7,opt,name=schedule"`
	// Specification for notification
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,8,opt,name=notification"`
	// Owner of this data pipeline
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// Resources are hardware resource req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The priority of this data pipeline. The default is medium.
	// +kubebuilder:default:="medium"
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,11,opt,name=priority"`
	// Set to true to pause the cron prediction
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,12,opt,name=paused"`
	// TTL for the data product run. Set to 0 if no garbage collected is needed.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,13,opt,name=ttl"`
}

// DataPipelineStatus is the observed state of the DataPipeline object.
type DataPipelineStatus struct {
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// Last run is the last time a data pipeline run was created
	//+kubebuilder:validation:Optional
	Schedule catalog.RunScheduleStatus `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
	// The name of the last data pipeline count
	//+kubebuilder:validation:Optional
	LastRunName string `json:"lastRunName,omitempty" protobuf:"bytes,4,opt,name=lastRunName"`
	// The number of datapipline runs
	//+kubebuilder:validation:Optional
	RunsCount int32 `json:"runsCount,omitempty" protobuf:"bytes,5,opt,name=runsCount"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}

// DataInputSpec specifies the format and location of an input dataset
type DataInputSpec struct {
	// List of SQL statements to run before performing the prediction
	// +kubebuilder:validation:Optional
	PreSQL []string `json:"preSQL,omitempty" protobuf:"bytes,1,opt,name=preSQL"`
	// The physical location of the observation file.
	// the location can point to a database.
	// +kubebuilder:validation:Optional
	Location *DataLocation `json:"location,omitempty" protobuf:"bytes,2,opt,name=location"`
	// The file format of the input file, if applicable
	// +kubebuilder:validation:Optional
	Format FlatFileFormatSpec `json:"format,omitempty" protobuf:"bytes,3,opt,name=format"`
}

// DataOutputSpec specifies the format, features, and output location of a transformed dataset
type DataOutputSpec struct {
	// DatasetName is the name of a new Dataset resource that will be created.
	// If empty, the system will save the dataset to a file
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// The location where the dataset will be stored
	// +kubebuilder:validation:Optional
	Location *DataLocation `json:"location,omitempty" protobuf:"bytes,2,opt,name=location"`
	// The format of the dataset, applicable if the output location is a flat-file
	// +kubebuilder:default:="csv"
	// +kubebuilder:validation:Optional
	Format *FlatFileType `json:"format,omitempty" protobuf:"bytes,3,opt,name=format"`
	// The update strategy for the dataset in the case that the output location already exists (i.e a database table)
	// UpsertUpdateStrategy will insert new records and update existing ones;
	// InsertUpdateStrategy will insert new records and not update existing ones;
	// UpdateUpdateStrategy will not insert new records and only update existing ones
	// +kubebuilder:default:="upsert"
	// +kubebuilder:validation:Optional
	Action *catalog.UpdateStrategy `json:"action,omitempty" protobuf:"bytes,4,opt,name=action"`
	// If true, the database table specified by Location will be created if it does not exist
	// +kubebuilder:validation:Optional
	CreateTableIfNotExist *bool `json:"createTableIfNotExist,omitempty" protobuf:"varint,5,opt,name=createTableIfNotExist"`
	// Indicates if the features (i.e. all the columns) of the input dataset, excluding the
	// feature which was predicted on, will be included in the output dataset
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	IncludeFeatures *bool `json:"includeFeatures,omitempty" protobuf:"varint,6,opt,name=includeFeatures"`
	// If true, SHAP values for each predicted row will be included as JSON as an additional column of the dataset
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	XAI *bool `json:"xai,omitempty" protobuf:"varint,7,opt,name=xai"`
	// If true, an additional column will be added to the dataset which
	// indicates if each predicted row was detected to be an outlier
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	DetectOutliers *bool `json:"detectOutliers,omitempty" protobuf:"varint,8,opt,name=detectOutliers"`
	// List of SQL statements to run after the prediction was performed
	// +kubebuilder:validation:Optional
	PostSQL []string `json:"postSQL,omitempty" protobuf:"bytes,9,opt,name=postSQL"`
}

type RecipePartSpec struct {
	// RecipeName is the name of the recipe to run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	RecipeName *string `json:"recipeName,omitempty" protobuf:"bytes,1,opt,name=recipeName"`
	// Dependents is the list of recipe that need to run after this recipe.
	Dependents []string `json:"dependents,omitempty" protobuf:"bytes,2,rep,name=dependents"`
}
