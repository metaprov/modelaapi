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
	ConversationSaved ConversationConditionType = "Saved"
)

// Commnet represents a single comment in the conversation
type Comment struct {
	// ID is the comment ID. Used when replying to a comment.
	ID string `json:"id,omitempty" protobuf:"bytes,1,opt,name=id"`
	// AuthorRef is a reference to the author of the comment
	AuthorRef *v1.ObjectReference `json:"authorRef,omitempty" protobuf:"bytes,2,opt,name=authorRef"`
	// If this comment is a reply to an id
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ReplyToID *string `json:"replyTo,omitempty" protobuf:"bytes,3,opt,name=replyTo"`
	// Content is the content of the comment
	// +kubebuilder:default:=""
	Content *string `json:"content,omitempty" protobuf:"bytes,4,opt,name=content"`
	// PostedAt is the time when the comment was posted
	// +kubebuilder:validation:Optional
	PostedAt *metav1.Time `json:"postedAt,omitempty" protobuf:"bytes,5,opt,name=postedAt"`
	// Sent indicate if the comment was sent to the notifier.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Sent *bool `json:"sent,omitempty" protobuf:"varint,6,opt,name=sent"`
}

// ConversationCondition describes the state of the conversation
type ConversationCondition struct {
	Type   ConversationConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ConversationConditionType"`
	Status v1.ConditionStatus        `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

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

// +kubebuilder:object:root=true
// ConversationList is a list of Conversations
type ConversationList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Conversation `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ConversationSpec defines the desired state of a Conversation
type ConversationSpec struct {
	// The target of the conversation
	EntityRef *v1.ObjectReference `json:"entityRef" protobuf:"bytes,1,opt,name=entityRef"`
	// Messages are the messages of the conversation.
	Messages []Comment `json:"messages" protobuf:"bytes,2,rep,name=messages"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
	// The notifier is used for alerts about new msgs in the conversation
	// +kubebuilder:default:="default-slack-notifier"
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,4,opt,name=notifierName"`
}

//ConversationStatus is the current status of the conversation
type ConversationStatus struct {
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,1,opt,name=lastUpdated"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ConversationCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}
