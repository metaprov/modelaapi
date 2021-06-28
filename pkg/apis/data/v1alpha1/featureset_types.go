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

// Condition on the featureset
type FeaturesetConditionType string

/// Featureset Condition
const (
	FeaturesetReady FeaturesetConditionType = "Ready"
	FeaturesetSaved FeaturesetConditionType = "Saved"
)

// FeaturesetCondition describes the state of a deployment at a certain point.
type FeaturesetCondition struct {
	// Type of account condition.
	Type FeaturesetConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeaturesetConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Featureset represents a featureset object
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featuresets,singular=featureset,shortName=fset,categories={data,modeld}
// +kubebuilder:subresource:status
type Featureset struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeaturesetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeaturesetStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// FeaturesetSpec contain the desired state of a Featureset.
type FeaturesetSpec struct {
	// The product version of the featureset
	// +kubebuilder:default:=""
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Reference to the feature names of this featureset
	Features []string `json:"features,omitempty" protobuf:"bytes,3,rep,name=features"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// +kubebuilder:object:root=true
// FeaturesetList contains a list of Featureset
type FeaturesetList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Featureset `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeaturesetStatus defines the observed state of Featureset
type FeaturesetStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// +listType=map
	// +listMapKey=type
	//+kubebuilder:validation:Optional
	Conditions []FeaturesetCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}
