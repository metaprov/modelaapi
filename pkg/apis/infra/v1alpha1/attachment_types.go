package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type AttachmentPhase string

const (
	AttachmentPhasePending AttachmentPhase = "Pending"
	AttachmentPhaseSending AttachmentPhase = "Sending"
	AttachmentPhaseSent    AttachmentPhase = "Sent"
	AttachmentPhaseFailed  AttachmentPhase = "Failed"
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
	// Status of the condition, one of True, False, AutoScaler.
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
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase",description=""
// +kubebuilder:printcolumn:name="Level",type="string",JSONPath=".spec.level",description=""
// +kubebuilder:printcolumn:name="Subject",type="string",JSONPath=".spec.subject",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.namespace",description=""
// +kubebuilder:printcolumn:name="Notifier",type="string",JSONPath=".spec.notifierName",description=""
// +kubebuilder:printcolumn:name="At",type="date",JSONPath=".status.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=alerts,singular=alert,categories={infra,modeld}
type Attachment struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AttachmentSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            AttachmentStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// AttachmentList is a list of Attachments
type AttachmentList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Attachment `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type AttachmentLevel string

const (
	Normal  AttachmentLevel = "normal"
	Warning AttachmentLevel = "warning "
	Error   AttachmentLevel = "error"
	Failure AttachmentLevel = "failure"
)

// AttachmentSpec defines the desired state of Attachment
type AttachmentSpec struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Subject *string `json:"subject,omitempty" protobuf:"bytes,1,opt,name=subject"`
	// Attachment Message
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Message *string `json:"message,omitempty" protobuf:"bytes,2,opt,name=message"`
	// Scopes is the list of scopes for this token.
	Level *AttachmentLevel `json:"level,omitempty" protobuf:"bytes,3,opt,name=level"`
	// The subject entity
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,4,opt,name=entityRef"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Required
	// NotifierName is the name of the notifier used to fire the alert.
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,5,opt,name=notifierName"`
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,6,opt,name=owner"`
	// The actual information about the alerts
	// +kubebuilder:validation:Optional
	Fields map[string]string `json:"fields,omitempty" protobuf:"bytes,7,opt,name=fields"`
}

// AttachmentStatus is the observed state of a Attachment
type AttachmentStatus struct {
	// Phase is the phase of the model
	// +kubebuilder:validation:Optional
	Phase AttachmentPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// The time when the alert was fired
	// +kubebuilder:validation:Optional
	At metav1.Time `json:"at" protobuf:"bytes,2,opt,name=at"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []AttachmentCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}
