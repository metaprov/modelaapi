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

/// RunBook conditions
type RunBookConditionType string

/// RunBookReady Condition
const (
	RunBookReady RunBookConditionType = "Ready"
)

// RunBookCondition describes the state of a RunBook at a certain point.
type RunBookCondition struct {
	// Type of condition.
	Type RunBookConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=RunBookConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// The last time this condition was updated.
	LastUpdateTime metav1.Time `json:"lastUpdateTime,omitempty" protobuf:"bytes,3,opt,name=lastUpdateTime"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=runbooks,shortName=rb,singular=runbook,categories={data,modeld}
// RunBook represent a list of instructions for a specific operation
type RunBook struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              RunBookSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            RunBookStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// RunBookList is a list of RunBooks
type RunBookList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []RunBook `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// RunBookSpec defines the desired state of RunBook
type RunBookSpec struct {
	// The target object of run book
	// +kubebuilder:validation:Optional
	EntityRef *v1.ObjectReference `json:"entityRef" protobuf:"bytes,1,opt,name=entityRef"`
	// The author of the comment
	AuthorRef *v1.ObjectReference `json:"authorRef,omitempty" protobuf:"bytes,2,opt,name=authorRef"`
	// The owner account name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
}

// RunBookStatus defines the actual state of a RunBook
type RunBookStatus struct {
	//+optional
	Conditions []RunBookCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
