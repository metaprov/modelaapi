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

// FeaturePipelineConditionType
type FeaturePipelineConditionType string

const (
	FeaturePipelineReady FeaturePipelineConditionType = "Ready"
	FeaturePipelineSaved FeaturePipelineConditionType = "Saved"
)

// FeaturePipelineCondition describes the state of a deployment at a certain point.
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

// FeaturePipeline represent the processing of feature in the store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule",description=""
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurepipelines,singular=featurepipeline,shortName="fp",categories={data,modeld}
// +kubebuilder:subresource:status
type FeaturePipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeaturePipelineSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            FeaturePipelineStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureList contain a list of feature objects
type FeaturePipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeaturePipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeaturePipelineSpec contain the desired state of a FeaturePipeline
type FeaturePipelineSpec struct {
	// Owner is the owner of the feature pipeline
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// DatasetSelector is used to select datasets to process the features from.
	// +kubebuilder:validation:Optional
	DatasetSelector map[string]string `json:"datasetSelector,omitempty" protobuf:"bytes,2,opt,name=datasetSelector"`
	// Version name is the the product version for the feature.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,3,opt,name=versionName"`
	// Description of the feature pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// Aggregation is the aggregation spec
	// +kubebuilder:validation:Optional
	Aggregation *AggregationSpec `json:"aggregation,omitempty" protobuf:"bytes,5,opt,name=aggregation"`
	// Materialization
	Materialization *MaterializationSpec `json:"materialization,omitempty" protobuf:"bytes,6,opt,name=materialization"`
	// Family is the feature family
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Family *string `json:"family,omitempty" protobuf:"bytes,7,opt,name=family"`
	// Reference to the entity name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	EntityName *string `json:"entityName,omitempty" protobuf:"bytes,8,opt,name=entityName"`
	// A reference to the workload class that is used for running the workload class
	// +kubebuilder:default:="nano-cpu-250m-mem-256mi"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,9,opt,name=workloadClassName"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule *string `json:"schedule,omitempty" protobuf:"bytes,10,opt,name=schedule"`
	// ActiveDeadlineSeconds is the deadline setup on jobs for this labeling pipeline.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// Set to true to pause the data pipeline
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"bytes,12,opt,name=paused"`
}

// FeatureStatus defines the observed state of Feature
type FeaturePipelineStatus struct {
	// Last run is the last time a run was created
	//+kubebuilder:validation:Optional
	LastRun *metav1.Time `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// Store the avg cost of running this pipeline
	AverageCost float64 `json:"averageCost,omitempty" protobuf:"bytes,2,rep,name=averageCost"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeaturePipelineCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}

type MaterializationSpec struct {
	// If true, update the online store
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Online *bool `json:"online,omitempty" protobuf:"varint,1,opt,name=online"`
	// If true update the offline store.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Offline *bool `json:"offline,omitempty" protobuf:"varint,2,opt,name=offline"`
	// +kubebuilder:validation:Optional
	StartDate *metav1.Time `json:"startDate,omitempty" protobuf:"bytes,3,opt,name=startDate"`
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	ScheduleInterval *string `json:"scheduleInterval,omitempty" protobuf:"bytes,4,opt,name=scheduleInterval"`
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:default:=0
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,5,opt,name=ttl"`
	// Number of days to store information from the past in the feature store.
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=21
	// +kubebuilder:validation:Minimum=0
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
