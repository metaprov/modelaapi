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
// FeatureSetRef
//==============================================================================

// Condition on the featureSource
type FeatureSourceConditionType string

/// FeatureSource Condition
const (
	FeatureSourceReady FeatureSourceConditionType = "Ready"
	FeatureSourceSaved FeatureSourceConditionType = "Saved"
)

// FeatureSourceCondition describes the state of a deployment at a certain point.
type FeatureSourceCondition struct {
	// Type of account condition.
	Type FeatureSourceConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureSourceConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// FeatureSource represents a featureSource object
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featuresources,singular=featuresource,shortName=fset,categories={data,modela}
// +kubebuilder:subresource:status
type FeatureSource struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureSourceSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeatureSourceStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// FeatureSourceSpec contain the desired state of a FeatureSource.
type FeatureSourceSpec struct {
	// The product version of the featureSource
	// +kubebuilder:default:=""
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// The entity
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	EntityName *string `json:"entityName,omitempty" protobuf:"bytes,5,opt,name=entityName"`
	// Datasource ref define the metadata for the features in this
	// resource which the DataProductVersion describes the version of
	// +kubebuilder:validation:Optional
	DatasourceRef v1.ObjectReference `json:"datasourceRef,omitempty" protobuf:"bytes,6,opt,name=datasourceRef"`
	// Features to include in this set
	// +kubebuilder:validation:Optional
	Include []string `json:"include,omitempty" protobuf:"bytes,7,rep,name=include"`
	// Features to exclude from the data source.
	// +kubebuilder:validation:Optional
	Exclude []string `json:"exclude,omitempty" protobuf:"bytes,8,rep,name=exclude"`
}

// +kubebuilder:object:root=true
// FeatureSourceList contains a list of FeatureSource
type FeatureSourceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeatureSource `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureSourceStatus defines the observed state of FeatureSource
type FeatureSourceStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureSourceCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}
