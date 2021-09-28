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
	RunBookSaved RunBookConditionType = "Saved"
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
// +kubebuilder:resource:path=runbooks,shortName=rb,singular=runbook,categories={data,modela}
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
	// Description of the run book
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// The target object of run book
	// +kubebuilder:validation:Optional
	EntityRef *v1.ObjectReference `json:"entityRef" protobuf:"bytes,2,opt,name=entityRef"`
	// The author of the run book
	AuthorRef *v1.ObjectReference `json:"authorRef,omitempty" protobuf:"bytes,3,opt,name=authorRef"`
	// The checklist
	// +kubebuilder:validation:Optional
	CheckList []CheckListItem `json:"checklist,omitempty" protobuf:"bytes,4,opt,name=checklist"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
}

// RunBookStatus defines the actual state of a RunBook
type RunBookStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []RunBookCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}

type CheckListItem struct {
	// Instruction is the instruction to follow
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Instruction *string `json:"instruction,omitempty" protobuf:"bytes,1,opt,name=instruction"`
	// Enabled indicate weather this item is enabled
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,2,opt,name=enabled"`
	// Condition is the condition to tune this checklist item
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Location *string `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
	// Condition is the condition to use this checklist item
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Condition *string `json:"condition,omitempty" protobuf:"bytes,4,opt,name=condition"`
	// Attachment is a link to the documentation for this checklist item
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Attachment *string `json:"attachment,omitempty" protobuf:"bytes,5,opt,name=attachment"`
}
