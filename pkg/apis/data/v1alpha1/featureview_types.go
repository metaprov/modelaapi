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

//==============================================================================
// FeatureRef
//==============================================================================

// FeatureViewConditionType
type FeatureViewConditionType string

const (
	FeatureViewReady FeatureViewConditionType = "Ready"
	FeatureViewSaved FeatureViewConditionType = "Saved"
)

// FeatureViewCondition describes the state of a deployment at a certain point.
type FeatureViewCondition struct {
	// Type of account condition.
	Type FeatureViewConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// FeatureView represent the processing of feature in the store.
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule",description=""
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featureviewes,singular=featureview,shortName="fsc",categories={data,modela}
// +kubebuilder:subresource:status
type FeatureView struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureViewSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            FeatureViewStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureList contain a list of feature objects
type FeatureViewList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeatureView `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureViewSpec contain the desired state of a FeatureView
type FeatureViewSpec struct {
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
	// +kubebuilder:validation:Optional
	FeatureSetRef v1.ObjectReference `json:"featureSetRef,omitempty" protobuf:"bytes,7,opt,name=featureSetRef"`
	// Resources is the hardware resource req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,9,opt,name=resources"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,10,opt,name=schedule"`
	// ActiveDeadlineSeconds is the deadline setup on jobs for this labeling pipeline.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// Set to true to pause the data pipeline
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,12,opt,name=paused"`
	// A template for models unit tests
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,13,opt,name=unitTests"`
	// Ingest the features into the online store
	// +kubebuilder:validation:Optional
	Online *bool `json:"online,omitempty" protobuf:"varint,14,opt,name=online"`
	// Ingest the features into the offline store
	// +kubebuilder:validation:Optional
	Offline *bool `json:"offline,omitempty" protobuf:"varint,15,opt,name=offline"`
	// Features to include in this set
	// +kubebuilder:validation:Optional
	Include []string `json:"include,omitempty" protobuf:"bytes,16,rep,name=include"`
	// Features to exclude from the data source.
	// +kubebuilder:validation:Optional
	Exclude []string `json:"exclude,omitempty" protobuf:"bytes,17,rep,name=exclude"`
	// Features to exclude from the data source.
	// +kubebuilder:validation:Optional
	Entities []string `json:"entities,omitempty" protobuf:"bytes,18,rep,name=entities"`
	// +kubebuilder:validation:Optional
	IngestType *catalog.FeatureStoreIngestType `json:"ingestType,omitempty" protobuf:"bytes,19,rep,name=ingestType"`
}

// FeatureStatus defines the observed state of Feature
type FeatureViewStatus struct {
	// Last run is the last time a data pipeline run was created
	//+kubebuilder:validation:Optional
	LastRun catalog.LastRunStatus `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// The time of the next schedule run
	//+kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,2,opt,name=nextRun"`
	// Store the avg cost of running this pipeline
	AverageCost float64 `json:"averageCost,omitempty" protobuf:"bytes,3,opt,name=averageCost"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,5,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureViewCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
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
