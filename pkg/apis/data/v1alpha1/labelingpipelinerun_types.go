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

//==============================================================================
// Label
//==============================================================================

// LabelingPipelineRunConditionType condition on the entity
type LabelingPipelineRunConditionType string

/// Label Condition
const (
	LabelingPipelineRunReady LabelingPipelineRunConditionType = "Ready"
)

// LabelingPipelineRunCondition describes the state of a deployment at a certain point.
type LabelingPipelineRunCondition struct {
	// Type of account condition.
	Type LabelingPipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=LabelConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// LabelingPipeline represent a feature set object in the feature store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=labelingpipelineruns,singular=labelingpipelinerun,categories={data,modeld}
// +kubebuilder:subresource:status
type LabelingPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabelingPipelineRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            LabelingPipelineRunStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
type LabelingPipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []LabelingPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// LabelSpec contain the desired state of a Label
type LabelingPipelineRunSpec struct {
	// The owner of the LabelingPipelineRunSpec
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the pipeline
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName" protobuf:"bytes,2,opt,name=versionName"`
	// LabelPipelineName specifies the name of LabelingPipeline
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:MinLength=1
	LabelPipelineName *string `json:"featurePipelineName" protobuf:"bytes,3,opt,name=featurePipelineName"`
	// WorkloadClassName is the name of the workload class used to run this pipeline.
	// +kubebuilder:default:="default-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,4,opt,name=workloadClassName"`
}

// LabelPipelineRunStatus defines the observed state of Label
type LabelingPipelineRunStatus struct {

	// The Start time of the run
	StartTime *metav1.Time `json:"startTime" protobuf:"bytes,1,opt,name=startTime"`
	// The End time of the run
	CompletionTime *metav1.Time `json:"completionTime" protobuf:"bytes,2,opt,name=completionTime"`
	//+optional
	Conditions []LabelingPipelineRunCondition `json:"conditions,omitempty" protobuf:"bytes,3,rep,name=conditions"`
}
