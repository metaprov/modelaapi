/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */
package v1alpha1

// DataEnv is a joiner of data into the system in batch mode.
// DataEnv can enter the system from different places (one of them is the user).
// The datajoiner knows how to create datasets.

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DataPipelineRunPhase string

const (
	DataPipelineRunPhaseTraining DataPipelineRunPhase = "Running"
	DataPipelineRunPhaseReady    DataPipelineRunPhase = "Succeeded"
	DataPipelineRunPhaseFailed   DataPipelineRunPhase = "Failed"
	DataPipelineRunPhaseAborted  DataPipelineRunPhase = "Aborted"
	DataPipelineRunPhasePaused   DataPipelineRunPhase = "Paused"
)

// Condition on the dataset
type DataPipelineRunConditionType string

/// DataPipelineRun Condition
const (
	DataPipelineRunRecipesCreated DataPipelineRunConditionType = "RecipesCreated"
	DataPipelineRunAborted        DataPipelineRunConditionType = "Aborted"
	DataPipelineRunPaused         DataPipelineRunConditionType = "Paused"
	DataPipelineRunCompleted      DataPipelineRunConditionType = "Completed"
	DataPipelineRunFailed         DataPipelineRunConditionType = "Failed"
)

// DataPipelineRunCondition describes the state of a data processor run at a certain point.
type DataPipelineRunCondition struct {
	// Type of account condition.
	Type DataPipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataPipelineRunConditionType"`
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
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=datapipelineruns,singular=datapipelinerun,categories={data,modeld,all}
// DataPipelineRun represent the joiner of dataset into the system
type DataPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataPipelineRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataPipelineRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// DataPipelineList contains a list of DataPipeline
type DataPipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//DataPipelineRunSpec defines the desired state of a schema
type DataPipelineRunSpec struct {
	// The product of the rejoiner
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +optional
	Description string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The data product
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	DataPipelineName string `json:"datapipelineName,omitempty" protobuf:"bytes,3,opt,name=datapipelineName"`
	// The location of data artifacts that are generated during the run
	DataLocation DataLocation `json:"dataLocation,omitempty" protobuf:"bytes,4,opt,name=dataLocation"`
	// The owner account name
	// +kubebuilder:default="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
}

// DataPipelineRunStatus defines the observed state of DataPipelineRun
type DataPipelineRunStatus struct {
	// Pointers to the done datasets
	Inputs []string `json:"inputs" protobuf:"bytes,1,rep,name=inputs"`
	// the resulting dataset from the flow
	Output string `json:"output" protobuf:"bytes,2,opt,name=output"`
	// the phase of the run
	Phase string `json:"phase" protobuf:"bytes,3,opt,name=phase"`
	// StartTime is the times that this data pipeline started
	// +optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,4,opt,name=startTime"`
	// CompletionTime is the time that this pipeline finishes
	// +optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,5,opt,name=completionTime"`
	//+optional
	Conditions []DataPipelineRunCondition `json:"conditions,omitempty" protobuf:"bytes,6,rep,name=conditions"`
}
