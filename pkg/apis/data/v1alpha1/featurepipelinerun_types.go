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
// FeatureRef
//==============================================================================

// Feature condition
// Condition on the entity
type FeaturePipelineRunConditionType string

/// Feature Condition
const (
	FeaturePipelineRunReady FeaturePipelineRunConditionType = "Ready"
)

// DeploymentCondition describes the state of a deployment at a certain point.
type FeaturePipelineRunCondition struct {
	// Type of account condition.
	Type FeaturePipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +genclient
// +genclient:noStatus

// FeaturePipeline represent a feature set object in the feature store.
// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurepipelineruns,singular=featurepipelinerun,categories={data,modeld}
// +kubebuilder:subresource:status
type FeaturePipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeaturePipelineRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeaturePipelineRunStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureList contain a list of feature objects
type FeaturePipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeaturePipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureSpec contain the desired state of a Feature
type FeaturePipelineRunSpec struct {
	// The feature owner
	// +kubebuilder:default="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Owner string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the feature.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// FileName specify the name of the attribute
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:MinLength=1
	FeaturePipelineName string `json:"featurePipelineName,omitempty" protobuf:"bytes,3,opt,name=featurePipelineName"`
}

// FeatureStatus defines the observed state of Feature
type FeaturePipelineRunStatus struct {
	// The Start time of the run
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// The End time of the run
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,2,opt,name=completionTime"`
	//+optional
	Conditions []FeaturePipelineRunCondition `json:"conditions,omitempty" protobuf:"bytes,3,rep,name=conditions"`
}
