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
type LabelingPipelineConditionType string

/// LabelingPipeline Condition
const (
	LabelPipelineReady LabelingPipelineConditionType = "Ready"
)

// LabelingPipelineCondition describes the state of a wrangler at a certain point.
type LabelingPipelineCondition struct {
	// Type of account condition.
	Type LabelingPipelineConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=LabelingPipelineConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=labelingpipelines,singular=labelingpipeline,categories={data,modeld}
// LabelingPipeline represents the ETL flow from the data sources to a processed dataset, ready for training.
type LabelingPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabelingPipelineSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status LabelingPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// LabelingPipelineList contain the list of LabelingPipeline
type LabelingPipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []LabelingPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//LabelingPipelineSpec defines the desired state of a LabelingPipeline
type LabelingPipelineSpec struct {
	// The product of the rejoiner
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:default =""
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The datasets objects which are used for this pipeline. Each datafile can be from a bucket
	// +optional
	InputLabelsets []string `json:"inputDatesets,omitempty" protobuf:"bytes,3,rep,name=inputLabelsets"`
	// The recipe for this pipeline.
	// +optional
	RecipeNames []string `json:"recipeNames,omitempty" protobuf:"bytes,4,rep,name=recipeNames"`
	// The output file of the pipeline
	// +optional
	OutputLabelsetName *string `json:"outputLabelset,omitempty" protobuf:"bytes,5,opt,name=outputLabelset"`
	// A cron field to schedule the data pipeline.
	Schedule *string `json:"schedule,omitempty" protobuf:"bytes,6,opt,name=schedule"`
	// The owner account name
	// +kubebuilder:default="no-one"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
}

// LabelingPipelineStatus is the observed state of the LabelingPipeline object.
type LabelingPipelineStatus struct {
	//+optional
	Conditions []LabelingPipelineCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
