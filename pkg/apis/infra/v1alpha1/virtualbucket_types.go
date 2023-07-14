package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type VirtualBucketConditionType string

const (
	VirtualBucketReady = "Ready"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=virtualbuckets,shortName=vb,singular=virtualbucket,categories={infra,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description="owner"
// +kubebuilder:printcolumn:name="ConnectionName",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// VirtualBucket represents an abstract object storage system used to store flat-files
type VirtualBucket struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualBucketSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status VirtualBucketStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// VirtualBucketList is a list of VirtualBuckets
// +kubebuilder:object:root=true
type VirtualBucketList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []VirtualBucket `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// VirtualBucketSpec defines the desired state of VirtualBucket
type VirtualBucketSpec struct {
	// The name of the Connection resource which exists under the same tenant as the object. The Connection
	// should represent the external location and access credentials of an object storage system
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:default:=""
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// User-provided description of the object
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// VirtualBucketStatus defines the observed state of a VirtualBucket
type VirtualBucketStatus struct {
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,1,opt,name=updatedAt"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// In the case of failure, the VirtualBucket resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,5,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}
