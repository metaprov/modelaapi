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
type FeaturePipelineConditionType string

/// Feature Condition
const (
	FeaturePipelineReady FeaturePipelineConditionType = "Ready"
)

// DeploymentCondition describes the state of a deployment at a certain point.
type FeaturePipelineCondition struct {
	// Type of account condition.
	Type FeaturePipelineConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
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
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurepipelines,singular=featurepipeline,categories={data,modeld}
// +kubebuilder:subresource:status
type FeaturePipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeaturePipelineSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeaturePipelineStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureList contain a list of feature objects
type FeaturePipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeaturePipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureSpec contain the desired state of a Feature
type FeaturePipelineSpec struct {
	// The feature owner
	// +kubebuilder:default="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Owner string `json:"owner" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the feature.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	VersionName string `json:"versionName" protobuf:"bytes,2,opt,name=versionName"`
	// FileName specify the name of the attribute
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:MinLength=1
	Name string `json:"name" protobuf:"bytes,3,opt,name=name"`
	// Comments is a description of the feature
	// +optional
	// +kubebuilder:validation:MaxLength=512
	Description string `json:"description" protobuf:"bytes,4,opt,name=description"`
	// Aggregation
	// +optional
	Aggregation *AggregationSpec `json:"aggregation" protobuf:"bytes,5,opt,name=aggregation"`
	// Materialization
	Materialization MaterializationSpec `json:"materialization" protobuf:"bytes,6,opt,name=materialization"`
	// Feature Family name
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Family *string `json:"family" protobuf:"bytes,7,opt,name=family"`
	// Reference to the entity name
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	EntityName *string `json:"entityName" protobuf:"bytes,8,opt,name=entityName"`
}

// FeatureStatus defines the observed state of Feature
type FeaturePipelineStatus struct {
	// Store the avg cost of running this pipeline
	AverageCost float64 `json:"averageCost,omitempty" protobuf:"bytes,1,rep,name=averageCost"`
	//+optional
	Conditions []FeaturePipelineCondition `json:"conditions,omitempty" protobuf:"bytes,2,rep,name=conditions"`
}

type MaterializationSpec struct {
	// If true, update the online store
	// +optional
	Online *bool `json:"online,omitempty" protobuf:"bytes,1,opt,name=online"`
	// If true update the offline store.
	// +optional
	Offline *bool `json:"offline,omitempty" protobuf:"bytes,2,opt,name=offline"`
	// +optional
	StartDate *metav1.Time `json:"startDate,omitempty" protobuf:"bytes,3,opt,name=startDate"`
	// +optional
	ScheduleInterval *string `json:"scheduleInterval,omitempty" protobuf:"bytes,4,opt,name=scheduleInterval"`
	// +optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,5,opt,name=ttl"`
	// Number of days to store information from the past in the feature store.
	Backfill *int32 `json:"backfill,omitempty" protobuf:"varint,6,opt,name=backfill"`
}

// Define the aggregation period
type AggregationSpec struct {
	SlidePeriod  string            `json:"slidePeriod,omitempty" protobuf:"bytes,1,opt,name=slidePeriod"`
	Aggregations []FeatureAggrSpec `json:"aggregations,omitempty" protobuf:"bytes,2,rep,name=aggregations"`
}

type FeatureAggrSpec struct {
	// The column
	Column string `json:"column,omitempty" protobuf:"bytes,1,opt,name=column"`
	// The aggregation function
	Functions []string `json:"functions,omitempty" protobuf:"bytes,2,rep,name=functions"`
	// List of windows functions
	Windows []string `json:"windows,omitempty" protobuf:"bytes,3,rep,name=windows"`
}
