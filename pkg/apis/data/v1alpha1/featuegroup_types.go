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

// FeatureGroupConditionType
type FeatureGroupConditionType string

const (
	FeatureGroupReady FeatureGroupConditionType = "Ready"
	FeatureGroupSaved FeatureGroupConditionType = "Saved"
)

// FeatureGroupCondition describes the state of a deployment at a certain point.
type FeatureGroupCondition struct {
	// Type of account condition.
	Type FeatureGroupConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// FeatureGroup represent a group of features
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule",description=""
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featuregroupes,singular=featuregroup,shortName="fsc",categories={data,modela}
// +kubebuilder:subresource:status
type FeatureGroup struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureGroupSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeatureGroupStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureList contain a list of feature objects
type FeatureGroupList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeatureGroup `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureGroupSpec contain the desired state of a FeatureGroup
type FeatureGroupSpec struct {
	// Owner is the owner of the feature group.
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// Version name is the product version for the feature group.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,3,opt,name=versionName"`
	// Description of the feature group.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// How this group is ingested
	// +kubebuilder:default:="batch"
	// +kubebuilder:validation:Optional
	IngestType *catalog.FeatureStoreIngestType `json:"ingestType,omitempty" protobuf:"bytes,5,opt,name=ingestType"`
	// The name of the entity that this group is part of.
	// A feature group must be part of an entity.
	EntityName string `json:"entityName,omitempty" protobuf:"bytes,6,opt,name=entityName"`
	// The features in the group.
	// +kubebuilder:validation:Optional
	Features []string `json:"features,omitempty" protobuf:"bytes,7,rep,name=features"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,10,opt,name=schedule"`
	// The name of the data source which contain the schema for this entity
	// +kubebuilder:validation:Optional
	DatasourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,11,rep,name=datasourceName"`
	// The name of the data source which contain the schema for this entity
	// +kubebuilder:validation:Optional
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,12,rep,name=timeColumn"`
	// Unit test to run on features from the feature group.
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,15,opt,name=unitTests"`
	// Ingest the feature group into the online store
	// +kubebuilder:validation:Optional
	Online *bool `json:"online,omitempty" protobuf:"varint,16,opt,name=online"`
	// Specify the data source for this feature group
	// +kubebuilder:validation:Optional
	Data DataLocation `json:"data,omitempty" protobuf:"bytes,17,opt,name=data"`
}

// FeatureStatus defines the observed state of Feature
type FeatureGroupStatus struct {
	// Last run is the last time the feature group run
	//+kubebuilder:validation:Optional
	LastProfile catalog.LastRunStatus `json:"lastProfile,omitempty" protobuf:"bytes,1,opt,name=lastProfile"`
	// The time of the next schedule run
	//+kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,2,opt,name=nextRun"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`
	// The current number of rows in the feature group.
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"bytes,5,opt,name=rows"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureGroupCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
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
