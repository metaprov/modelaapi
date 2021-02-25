/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */
package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition on the dataset
type DataPipelineConditionType string

/// DataPipeline Condition
const (
	DataPipelineReady DataPipelineConditionType = "Ready"
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

// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=datapipelines,singular=datapipeline,categories={data,modeld}
// DataPipeline represents the ETL flow from the data sources to a processed dataset, ready for training.
type DataPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataPipelineSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DataPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// DataPipelineList contain the list of DataPipeline
type DataPipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//DataPipelineSpec defines the desired state of a DataPipeline
type DataPipelineSpec struct {
	// Dataproduct version
	// +kubebuilder:default =""
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:default =""
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The datasets objects which are used for this pipeline. Each datafile can be from a bucket
	InputDatasets []string `json:"inputDatesets,omitempty" protobuf:"bytes,3,rep,name=inputDatasets"`
	// The recipe for this pipeline.
	RecipeNames []string `json:"recipeNames,omitempty" protobuf:"bytes,4,rep,name=recipeNames"`
	// +kubebuilder:default =""
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// The output file of the pipeline
	OutputDatasetName *string `json:"outputDataset,omitempty" protobuf:"bytes,5,opt,name=outputDataset"`
	// A cron field to schedule the data pipeline.
	// +kubebuilder:default =""
	Schedule *string `json:"schedule,omitempty" protobuf:"bytes,6,opt,name=schedule"`
	// The owner account name
	// +kubebuilder:default="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
}

// DataPipelineStatus is the observed state of the DataPipeline object.
type DataPipelineStatus struct {
	//+optional
	Conditions []DataPipelineCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
