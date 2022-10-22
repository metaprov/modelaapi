package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Attachment condition
type AttachmentConditionType string

/// Attachment Condition
const (
	AttachmentSent  AttachmentConditionType = "Sent"
	AttachmentSaved AttachmentConditionType = "Saved"
)

// AttachmentCondition describes the state of the license at a certain point.
type AttachmentCondition struct {
	// Type of account condition.
	Type AttachmentConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=AttachmentConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human-readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.namespace",description=""
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.bucketName",description=""
// +kubebuilder:printcolumn:name="Path",type="string",JSONPath=".spec.path",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=attachments,singular=attachment,categories={infra,modela}
type Attachment struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AttachmentSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status AttachmentStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// AttachmentList is a list of Attachments
type AttachmentList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Attachment `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// AttachmentSpec defines the desired state of Attachment
type AttachmentSpec struct {
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Entity ref
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,3,opt,name=entityRef"`
	// +kubebuilder:default:=""
	// Bucketname is the name of the bucket
	// +kubebuilder:validation:Optional
	BucketName string `json:"bucketName" protobuf:"bytes,4,opt,name=bucketName"`
	// Path to the full data file (e.g. csv file).
	// +kubebuilder:validation:Optional
	Path string `json:"path" protobuf:"bytes,5,opt,name=path"`
	// TenantRef is the commit tenant
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,6,opt,name=tenantRef"`
}

// AttachmentStatus is the observed state of a Attachment
type AttachmentStatus struct {
	// The time when the alert was fired
	// +kubebuilder:validation:Optional
	At *metav1.Time `json:"at" protobuf:"bytes,2,opt,name=at"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []AttachmentCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
