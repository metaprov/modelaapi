package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type VirtualBucketConditionType string

/// Bucket Condition
const (
	VirtualBucketReady    VirtualBucketConditionType = "Ready"
	VirtualBucketArchived VirtualBucketConditionType = "Archived"
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

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Connection",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=virtualbuckets,shortName=vb,singular=virtualbucket,categories={infra,modeld,all}
// VirtualBucket represent a object storage location in the cloud or on-prem
type VirtualBucket struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualBucketSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            VirtualBucketStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

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
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,name=tenantRef"`
	// ConnectionName specify the api connections of this bucket cloud provider.
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:MinLength=1
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// User provided description
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Owner of the bucket
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// VirtualBucketStatus defines the actual state of a VirtualBucket
type VirtualBucketStatus struct {
	//+optional
	Conditions []VirtualBucketCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
