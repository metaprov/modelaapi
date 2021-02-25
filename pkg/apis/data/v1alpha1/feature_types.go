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
type FeatureConditionType string

/// Feature Condition
const (
	FeatureReady FeatureConditionType = "Ready"
)

// DeploymentCondition describes the state of a deployment at a certain point.
type FeatureCondition struct {
	// Type of account condition.
	Type FeatureConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
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

// Feature represent a feature object in the feature store.
// +kubebuilder:object:root=true
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=features,singular=feature,categories={data,modeld}
// +kubebuilder:subresource:status
type Feature struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeatureStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// FeatureList contain a list of feature objects
type FeatureList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Feature `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureSpec contain the desired state of a Feature
type FeatureSpec struct {
	// The feature owner
	// +kubebuilder:default="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the feature.
	// +kubebuilder:default =""
	// +optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the feature
	// +optional
	// +kubebuilder:default =""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// FileName specify the name of the attribute
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:MinLength=1
	Name *string `json:"name,omitempty" protobuf:"bytes,4,opt,name=name"`
	// Type name of the column key, this column is the key column in the entity.
	// +optional
	KeyColumn *string `json:"keyColumn,omitempty" protobuf:"bytes,5,opt,name=keyColumn"`
	// The name of the time stamp column
	// +optional
	TimestampColumn *string `json:"timestampColumn,omitempty" protobuf:"bytes,6,opt,name=timestampColumn"`
	// The name of the feature column
	// +optional
	FeatureColumn *string `json:"featureColumn,omitempty" protobuf:"bytes,7,opt,name=featureColumn"`
	// The name of the entity containing this feature
	// +optional
	EntityName *string `json:"entityName,omitempty" protobuf:"bytes,8,opt,name=entityName"`
	// The name of the feature pipeline that is producing this feature
	// +optional
	FeaturePipelineName *string `json:"featurePipelineName,omitempty" protobuf:"bytes,9,opt,name=featurePipelineName"`
}

// FeatureStatus defines the observed state of Feature
type FeatureStatus struct {
	// Sha256 contains the signature of
	// +optional
	Sha256 string `json:"sha256" protobuf:"bytes,2,opt,name=sha256"`
	// FileName is the name of the attribute
	// +optional
	Name string `json:"name" protobuf:"bytes,3,opt,name=name"`
	// Min is the minimum value of the attribute
	// +optional
	Min *float64 `json:"min" protobuf:"bytes,4,opt,name=min"`
	// Max is the maximum value of the attribute
	// +optional
	Max *float64 `json:"max" protobuf:"bytes,5,opt,name=max"`
	// Mean is the mean value of the attribute
	// +optional
	Mean *float64 `json:"mean" protobuf:"bytes,6,opt,name=mean"`
	// Zeros is the numbers of zeros in the feature
	// +optional
	Zeros *int32 `json:"zeros" protobuf:"varint,7,opt,name=zeros"`
	// Nulls is the numbers of zeros in the feature
	// +optional
	Nulls *int32 `json:"nulls" protobuf:"varint,8,opt,name=nulls"`
	// P01 is the numbers of values in the first precent
	// +optional
	P01 *float64 `json:"p01" protobuf:"bytes,9,opt,name=p01"`
	// P99 is the numbers of values
	// +optional
	P99 *float64 `json:"p99" protobuf:"bytes,10,opt,name=p99"`
	// StdDev is the standard deviation value of the attribute
	// +optional
	StdDev *float64 `json:"stddev" protobuf:"bytes,11,opt,name=stddev"`

	//+optional
	Conditions []FeatureCondition `json:"conditions,omitempty" protobuf:"bytes,13,rep,name=conditions"`
}
