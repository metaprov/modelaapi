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

type FeatureGroupPhase string

const (
	FeatureGroupPhaseGeneratingOnlineDataset FeatureGroupPhase = "GeneratingOnlineDataset"
	FeatureGroupPhaseOnlineDatasetGenerated  FeatureGroupPhase = "GeneratedOnlineDataset"
	FeatureGroupPhaseSyncing                 FeatureGroupPhase = "Syncing"
	FeatureGroupPhaseSynced                  FeatureGroupPhase = "Synced"
	FeatureGroupPhaseIngesting               FeatureGroupPhase = "Ingesting"
	FeatureGroupPhaseIngested                FeatureGroupPhase = "Ingested"
	FeatureGroupPhaseFailed                  FeatureGroupPhase = "Failed"
)

//==============================================================================
// FeatureRef
//==============================================================================

// FeatureGroupConditionType
type FeatureGroupConditionType string

const (
	FeatureGroupReady    FeatureGroupConditionType = "Ready"
	FeatureGroupSaved    FeatureGroupConditionType = "Saved"
	FeatureGroupSynced   FeatureGroupConditionType = "Sync"
	FeatureGroupIngested FeatureGroupConditionType = "Ingested"
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
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Description of the feature group.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// How this group is ingested
	// +kubebuilder:default:="batch"
	// +kubebuilder:validation:Optional
	IngestType *catalog.FeatureStoreIngestType `json:"ingestType,omitempty" protobuf:"bytes,4,opt,name=ingestType"`
	// A feature group must be part of an entity.
	EntityName string `json:"entityName,omitempty" protobuf:"bytes,5,opt,name=entityName"`
	// Tags for this feature groups
	// +kubebuilder:validation:Optional
	Tags []string `json:"tags,omitempty" protobuf:"bytes,6,opt,name=tags"`
	// Schedule for running ingesting the data from the feature.
	// On virtual features (e.g. where the data already reside in a table)
	// The ingest will just perform feature profile, and run the feature group unit tests.
	// +kubebuilder:validation:Optional
	IngestSchedule catalog.RunSchedule `json:"ingestSchedule,omitempty" protobuf:"bytes,8,opt,name=ingestSchedule"`
	// Schedule to sync the feature group into the online store.
	// +kubebuilder:validation:Optional
	SyncSchedule catalog.RunSchedule `json:"syncSchedule,omitempty" protobuf:"bytes,9,opt,name=syncSchedule"`
	// The name of the data source which contain the schema for this entity
	// +kubebuilder:validation:Optional
	Schema Schema `json:"schema,omitempty" protobuf:"bytes,10,opt,name=schema"`
	// Unit test to run on data from this feature group upon ingrest.
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,11,opt,name=unitTests"`
	// Specify the data for this feature group
	// This can be a table,  a view or a file on S3.
	// +kubebuilder:validation:Optional
	Data DataLocation `json:"data,omitempty" protobuf:"bytes,12,opt,name=data"`
	// the time column index. Might be null, if the fg does not have time column.
	// +kubebuilder:validation:Optional
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,13,opt,name=timeColumn"`
	// Materialization
	// +kubebuilder:validation:Optional
	Materialization MaterializationSpec `json:"materialization,omitempty" protobuf:"bytes,14,opt,name=materialization"`
}

// FeatureStatus defines the observed state of Feature
type FeatureGroupStatus struct {
	Phase FeatureGroupPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`
	// The current number of rows in the feature group.
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// Set the sync schedule between offline store and online store.
	//+kubebuilder:validation:Optional
	SyncSchedule catalog.RunScheduleStatus `json:"syncSchedule,omitempty" protobuf:"bytes,6,opt,name=syncSchedule"`
	// the ingest schedule status
	//+kubebuilder:validation:Optional
	IngestSchedule catalog.RunScheduleStatus `json:"ingestSchedule,omitempty" protobuf:"bytes,7,opt,name=ingestSchedule"`
	// Holds the last online table location. set the null when running the sync process
	//+kubebuilder:validation:Optional
	OnlineTable DataLocation `json:"onlineTable,omitempty" protobuf:"bytes,8,opt,name=onelineTable"`
	// The last time an online table was created
	//+kubebuilder:validation:Optional
	OnlineTableCreated *metav1.Time `json:"onlineTableCreated,omitempty" protobuf:"bytes,9,opt,name=onelineTableCreated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureGroupCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
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
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:default:=0
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,4,opt,name=ttl"`
	// Number of days to store information from the past in the feature store.
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=21
	// +kubebuilder:validation:Minimum=0
	Backfill *int32 `json:"backfill,omitempty" protobuf:"varint,5,opt,name=backfill"`
}
