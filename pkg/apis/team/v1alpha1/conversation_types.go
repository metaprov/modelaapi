/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

/// BucketName conditions
type ConversationConditionType string

/// BucketName Condition
const (
	ConversationReady ConversationConditionType = "Ready"
)

type Comment struct {
	ID string `json:"id,omitempty" protobuf:"bytes,1,opt,name=id"`
	// The author of the comment
	AuthorRef *v1.ObjectReference `json:"authorRef,omitempty" protobuf:"bytes,2,opt,name=authorRef"`
	// If this comment is a reply to an id
	// +optional
	ReplyToID string `json:"replyTo,omitempty" protobuf:"bytes,3,opt,name=replyTo"`
	// The content of the comment
	Content string `json:"content,omitempty" protobuf:"bytes,4,opt,name=content"`
	// Time when the comment was posted
	PostedAt *metav1.Time `json:"postedAt,omitempty" protobuf:"bytes,5,opt,name=postedAt"`
}

// VitualBucketCondition describes the state of a virtual bucket at a certain point.
type ConversationCondition struct {
	// Type of bucket condition.
	Type ConversationConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ConversationConditionType"`
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
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=conversations,shortName=cv,singular=conversation,categories={team,modeld}
// Conversation represents a comment about any conversation
type Conversation struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ConversationSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ConversationStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// ConversationList is a list of Conversations
type ConversationList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Conversation `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ConversationSpec defines the desired state of BucketName
type ConversationSpec struct {
	// The target of the conversation
	EntityRef *v1.ObjectReference `json:"entityRef" protobuf:"bytes,1,opt,name=entityRef"`
	// Messages are the messages of the conversation.
	Messages []Comment `json:"messages" protobuf:"bytes,2,rep,name=messages"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
}

type ConversationStatus struct {
	//+optional
	Conditions []ConversationCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
