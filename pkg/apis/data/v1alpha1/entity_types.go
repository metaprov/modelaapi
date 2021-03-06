/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// EntityRef
//==============================================================================

// Condition on the entity
type EntityConditionType string

/// Entity Condition
const (
	EntityReady EntityConditionType = "Ready"
)

// EntityCondition describes the state of a deployment at a certain point.
type EntityCondition struct {
	// Type of account condition.
	Type EntityConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=EntityConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Entity represents a entity object
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=entities,singular=entity,categories={data,modeld}

type Entity struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              EntitySpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status EntityStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// EntitySpec contain the desired state of a Entity.
type EntitySpec struct {
	// The product version of the entity
	// +kubebuilder:default =""
	VersionName *string `json:"versionName" protobuf:"bytes,1,opt,name=versionName"`
	// Description of the entity
	// +kubebuilder:default =""
	// +optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Keys are the features that create a unique key to the entity.
	// +optional
	Keys []string `json:"keys,omitempty" protobuf:"bytes,3,rep,name=keys"`
	// Owner of this Entity
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// +kubebuilder:object:root=true
// EntityList contains a list of Entity
type EntityList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Entity `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// EntityStatus defines the observed state of Entity
type EntityStatus struct {
	//+optional
	Conditions []EntityCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
