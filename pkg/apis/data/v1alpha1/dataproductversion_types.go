/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition on the dataset
type DataProductVersionConditionType string

/// DataProductVersion Condition
const (
	DataProductVersionReady DataProductVersionConditionType = "Ready"
	DataProductVersionSaved DataProductVersionConditionType = "Saved"
)

// DataProductVersionCondition describes the state of a DataProductVersion at a certain point
type DataProductVersionCondition struct {
	// Type of condition.
	Type DataProductVersionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataProductVersionConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=dataproductversions,shortName=dpv,singular=dataproductversion,categories={data,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Product",type="string",JSONPath=".spec.productRef.name",description=""
// +kubebuilder:printcolumn:name="Base",type="boolean",JSONPath=".spec.baseline",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// DataProductVersion represents a single version of a DataProduct, which should increment versions in response to changes in data
type DataProductVersion struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductVersionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataProductVersionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DataProductVersionList contains a list of DataProductVersion
type DataProductVersionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataProductVersion `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// DataProductVersionSpec defines the desired state of a DataProductVersion
type DataProductVersionSpec struct {
	// ProductRef contains the object reference to the DataProduct
	// resource which the DataProductVersion describes the version of
	// +kubebuilder:validation:Optional
	ProductRef v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,1,opt,name=productRef"`
	// User-provided description of the object
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The name of the version which preceded the current version
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	PrevVersionName *string `json:"prevVersionName,omitempty" protobuf:"bytes,3,opt,name=prevVersionName"`
	// Indicates if the version is a baseline, and if so will cause Modela to garbage collect the resources from previous versions
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Baseline *bool `json:"baseline,omitempty" protobuf:"varint,4,opt,name=baseline"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
}

// DataProductVersionStatus defines the observed state of a DataProductVersion
type DataProductVersionStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// In the case of failure, the Dataset resource controller will set this field with a failure reason
	// Borrowed from cluster api controller
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// In the case of failure, the Dataset resource controller will set this field with a failure message
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataProductVersionCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
