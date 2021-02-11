package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//============
// BucketName
// ===========

type VirtualBucketConditionType string

/// Bucket Condition
const (
	VirtualBucketReady VirtualBucketConditionType = "Ready"
	VirtualBucketInDb  VirtualBucketConditionType = "InDb"
)

// VitualBucketCondition describes the state of a virtual bucket at a certain point.
type VirtualBucketCondition struct {
	// Type of bucket condition.
	Type VirtualBucketConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=VirtualBucketConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +genclient
// +kubebuilder:object:root=true
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="StorageConnection",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=virtualbuckets,shortName=vb,singular=virtualbucket,categories={infra,modeld,all}
// VirtualBucket represent a bucket api object
type VirtualBucket struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualBucketSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status VirtualBucketStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// VirtualBucketList is a list of VirtualBucket
type VirtualBucketList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []VirtualBucket `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// VirtualBucketSpec defines the desired state of Bucket
type VirtualBucketSpec struct {
	// The owner of the virtual bucket
	// +optional
	TenantRef *v1.ObjectReference `json:"tenantRef" protobuf:"bytes,1,name=tenantRef"`
	// ConnectionName specify the api connections of this bucket cloud provider.
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:MinLength=1
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// User provided description
	// +optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Owner of the bucket
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// VirtualBucketStatus defines the actual state of a VirtualBucket
type VirtualBucketStatus struct {
	//+optional
	Conditions []VirtualBucketCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
