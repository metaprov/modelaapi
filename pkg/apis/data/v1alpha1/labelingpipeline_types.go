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

// Condition on the dataset
type LabelingPipelineConditionType string

/// LabelingPipeline Condition
const (
	LabelPipelineReady LabelingPipelineConditionType = "Ready"
	LabelPipelineSaved LabelingPipelineConditionType = "Saved"
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

// LabelingPipeline represents the ETL flow from the data sources to a processed dataset, ready for training.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=labelingpipelines,singular=labelingpipeline,shortName=lp,categories={data,modela}
type LabelingPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabelingPipelineSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status LabelingPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

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
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// DatasetSelector is used to select unlabeled dataset for labeling
	// +kubebuilder:validation:Optional
	DatasetSelector map[string]string `json:"datasetSelector,omitempty" protobuf:"bytes,3,opt,name=datasetSelector"`
	// The recipe for this pipeline.
	// +kubebuilder:validation:Optional
	RecipeNames []string `json:"recipeNames,omitempty" protobuf:"bytes,4,rep,name=recipeNames"`
	// The output file of the pipeline
	// +kubebuilder:validation:Optional
	OutputLabelsetName *string `json:"outputLabelset,omitempty" protobuf:"bytes,5,opt,name=outputLabelset"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,6,opt,name=schedule"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
	// Resources is the hardware resource req to run the labeling pipeline
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,8,opt,name=resources"`
	// ActiveDeadlineSeconds is the deadline setup on jobs for this labeling pipeline.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,9,opt,name=activeDeadlineSeconds"`
	// Paused request the labeling pipeline to suspend
	// +kubebuilder:default:=false
	Paused *bool `json:"paused,omitempty" protobuf:"varint,10,opt,name=paused"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,11,opt,name=ttl"`
}

// LabelingPipelineStatus is the observed state of the LabelingPipeline object.
type LabelingPipelineStatus struct {
	// Last run is the last time a data pipeline run was created
	//+kubebuilder:validation:Optional
	LastRun catalog.LastRunStatus `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// The time of the next schedule run
	//+kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,2,opt,name=nextRun"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []LabelingPipelineCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
