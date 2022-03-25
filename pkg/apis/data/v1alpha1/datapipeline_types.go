/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */
package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition of the data pipeline
type DataPipelineConditionType string

/// DataPipeline Condition
const (
	DataPipelineReady DataPipelineConditionType = "Ready"
	DataPipelineSaved DataPipelineConditionType = "Saved"
)

// DataPipelineCondition describes the state of a wrangler at a certain point.
type DataPipelineCondition struct {
	// Type of account condition.
	Type DataPipelineConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataPipelineConditionType"`
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
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description",description=""
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule",description=""
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=datapipelines,singular=datapipeline,shortName="dpl",categories={data,modela}
// DataPipeline represents the ETL flow from the data sources to a processed dataset, ready for training.
type DataPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataPipelineSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DataPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DataPipelineList contain the list of DataPipeline
type DataPipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//DataPipelineSpec defines the desired state of a DataPipeline
type DataPipelineSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// Description of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// DatasetSelector is used to select datasets for processing in the pipeline
	// +kubebuilder:validation:Optional
	DatasetSelector map[string]string `json:"datasetSelector,omitempty" protobuf:"bytes,3,opt,name=datasetSelector"`
	// RecipeOrder defines the list of recipes and the order they need to run
	// +kubebuilder:validation:Optional
	Recipes []RecipePartSpec `json:"recipes,omitempty" protobuf:"bytes,4,rep,name=recipes"`
	// The output definition
	// +kubebuilder:validation:Optional
	Output DataOutputSpec `json:"output,omitempty" protobuf:"bytes,5,opt,name=output"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,6,opt,name=schedule"`
	// Specification for notification
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,7,opt,name=notification"`
	// Owner of this data pipeline
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
	// Resources are hardware resource req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,9,opt,name=resources"`
	// The priority of this data pipeline. The default is medium.
	// +kubebuilder:default:="medium"
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,10,opt,name=priority"`
	// Set to true to pause the cron prediction
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"bytes,11,opt,name=paused"`
	// TTL for the data product run. Set to 0 if no garbage collected is needed.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,12,opt,name=ttl"`
}

// DataPipelineStatus is the observed state of the DataPipeline object.
type DataPipelineStatus struct {
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// Last run is the last time a data pipeline run was created
	//+kubebuilder:validation:Optional
	LastRun catalog.LastRunStatus `json:"lastRun,omitempty" protobuf:"bytes,3,opt,name=lastRun"`
	// The time of the next schedule run
	//+kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,4,opt,name=nextRun"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataPipelineCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}

// DataOutputSpec is the definition of the out file.
type DataOutputSpec struct {
	// DatasetName is the name of the dataset that will be created. if nil, the system will not create the dataset.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// Location of the generated data
	// +kubebuilder:validation:Optional
	Location *DataLocation `json:"location,omitempty" protobuf:"bytes,2,opt,name=location"`
	// Format is the format of the output data
	// +kubebuilder:default:="csv"
	// +kubebuilder:validation:Optional
	Format *catalog.DatastoreType `json:"format,omitempty" protobuf:"bytes,3,opt,name=format"`
	//Action define how the new data will be created
	// +kubebuilder:default:="upsert"
	// +kubebuilder:validation:Optional
	Action *catalog.UpdateStrategy `json:"action,omitempty" protobuf:"bytes,4,opt,name=action"`
	// Create the data source table on the target, if not exist.
	// +kubebuilder:validation:Optional
	CreateTableIfNotExist *bool `json:"createTableIfNotExist,omitempty" protobuf:"varint,5,opt,name=createTableIfNotExist"`
	// Include the features in the results
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	IncludeFeatures *bool `json:"includeFeatures,omitempty" protobuf:"varint,6,opt,name=includeFeatures"`
	// Generate XAI
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	XAI *bool `json:"xai,omitempty" protobuf:"varint,7,opt,name=xai"`
	// Detect outlier in the prediction
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	DetectOutliers *bool `json:"detectOutliers,omitempty" protobuf:"varint,8,opt,name=detectOutliers"`
}

type RecipePartSpec struct {
	// RecipeName is the name of the recipe to run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	RecipeName *string `json:"recipeName,omitempty" protobuf:"bytes,1,opt,name=recipeName"`
	// Dependents is the list of recipe that need to run after this recipe.
	Dependents []string `json:"dependents,omitempty" protobuf:"bytes,2,rep,name=dependents"`
}
