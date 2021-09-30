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

// FeatureHistogramConditionType is the condition of the feature
type FeatureHistogramConditionType string

/// FeatureHistogram Condition
const (
	FeatureHistogramReady FeatureHistogramConditionType = "Ready"
	FeatureHistogramSaved FeatureHistogramConditionType = "Saved"
)

// FeatureHistogramCondition describes the state of a deployment at a certain point.
type FeatureHistogramCondition struct {
	// Type of account condition.
	Type FeatureHistogramConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureHistogramConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// FeatureHistogram represent a single feature in the feature store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Column",type="string",JSONPath=".spec.column"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.dataset"
// +kubebuilder:printcolumn:name="Bins",type="number",JSONPath=".spec.bins"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurehistograms,singular=featurehistogram,categories={data,modela}
// +kubebuilder:subresource:status
type FeatureHistogram struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureHistogramSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeatureHistogramStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureHistogramList contain a list of feature objects
type FeatureHistogramList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeatureHistogram `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureHistogramSpec contain the desired state of a FeatureHistogram
type FeatureHistogramSpec struct {
	// The feature owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the feature.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the feature
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Type name of the column key, this column is the key column in the entity.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,5,opt,name=column"`
	// The name of the dataset
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,6,opt,name=datasetName"`
	// Bins is the number of bins in the histogram
	Bins *int32 `json:"bins,omitempty" protobuf:"bytes,7,opt,name=bins"`
	// TTL for the data product run. Set to 0 if no garbage collected is needed.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,12,opt,name=ttl"`
}

// FeatureHistogramStatus defines the observed state of FeatureHistogram
type FeatureHistogramStatus struct {
	Values []float64 `json:"values,omitempty" protobuf:"bytes,1,opt,name=values"`
	// The number of missing values
	// +kubebuilder:validation:Minimum=0
	Missing int32 `json:"missing,omitempty" protobuf:"varint,2,opt,name=missing"`
	// The number of invalid values
	// +kubebuilder:validation:Minimum=0
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,3,opt,name=invalid"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureHistogramCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}
