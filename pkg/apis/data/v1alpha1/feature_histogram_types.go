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
	// Status of the condition, one of True, False, Unknown
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
// +kubebuilder:printcolumn:name="Missing",type="number",JSONPath=".status.missing"
// +kubebuilder:printcolumn:name="Invalid",type="number",JSONPath=".status.invalid"
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
	// A reference to the dataset that contain the column with this histogram
	// +kubebuilder:validation:Optional
	Dataset *v1.ObjectReference `json:"dataset,omitempty" protobuf:"bytes,6,opt,name=dataset"`
	// The histogram to comapre to for data drift calc
	// +kubebuilder:validation:Optional
	BaseFeatureHistogram v1.ObjectReference `json:"baseFeatureHistogram,omitempty" protobuf:"bytes,7,opt,name=baseFeatureHistogram"`
}

// FeatureHistogramStatus defines the observed state of FeatureHistogram
type FeatureHistogramStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The histogram values
	Data catalog.HistogramData `json:"data,omitempty" protobuf:"bytes,2,opt,name=data"`
	// The number of missing values
	// +kubebuilder:validation:Minimum=0
	Missing int32 `json:"missing,omitempty" protobuf:"varint,3,opt,name=missing"`
	// The number of invalid values
	// +kubebuilder:validation:Minimum=0
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,4,opt,name=invalid"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,5,opt,name=lastUpdated"`
	// The calculation of the drift metrics for this histogram against the reference feature histogram
	//+kubebuilder:validation:Optional
	Drift []catalog.Measurement `json:"drift,omitempty" protobuf:"bytes,6,opt,name=drift"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureHistogramCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
