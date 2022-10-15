package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	resource "k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type VirtualBucketConditionType string

/// Bucket Condition
const (
	VirtualBucketReady VirtualBucketConditionType = "Ready"
	VirtualBucketSaved VirtualBucketConditionType = "Saved"
)

// VirtualBucketCondition describes the state of a VirtualBucket at a certain point
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

// VirtualBucket represents an abstract object storage system used to store flat-files
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description="owner"
// +kubebuilder:printcolumn:name="Connection",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=virtualbuckets,shortName=vb,singular=virtualbucket,categories={infra,modela,all}
type VirtualBucket struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualBucketSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            VirtualBucketStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// The reference to the tenant which the object exists under
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,name=tenantRef"`
	// The name of the Connection resource which exists under the same tenant as the object. The Connection
	// should represent the external location and access credentials of an object storage system
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:default:=""
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// User-provided description of the object
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// For cloud based bucket, this is the region of the bucket
	// In the case of a cloud-based Connection, Region specifies the region of the bucket
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Region *string `json:"region,omitempty" protobuf:"bytes,5,opt,name=region"`
	// If true, the bucket supports versioning, which applies to the S3 API. See
	// https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html for more information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Versioning *bool `json:"versioning,omitempty" protobuf:"varint,6,opt,name=versioning"`
	// The resource quotas of the bucket, which can restrict how much storage the bucket may use
	// +kubebuilder:validation:Optional
	Quotas BucketResourceQuotas `json:"quotas,omitempty" protobuf:"bytes,7,opt,name=quotas"`
}

type BucketResourceQuotas struct {
	// Indicates if the resource quota is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The maximum amount of storage the bucket may use
	// +kubebuilder:validation:Optional
	HardLimit *resource.Quantity `json:"hardLimit,omitempty" protobuf:"bytes,2,opt,name=hardLimit"`
}

// VirtualBucketStatus defines the observed state of a VirtualBucket
type VirtualBucketStatus struct {
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,1,opt,name=lastUpdated"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// In the case of failure, the VirtualBucket resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,4,opt,name=failureReason"`
	// In the case of failure, the VirtualBucket resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,5,opt,name=failureMessage"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []VirtualBucketCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}
