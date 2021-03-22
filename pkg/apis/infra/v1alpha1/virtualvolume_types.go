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

/// VirtualVolume conditions
type VirtualVolumeConditionType string

/// VirtualVolume Condition
const (
	VirtualVolumeReady    VirtualVolumeConditionType = "Ready"
	VirtualVolumeArchived VirtualVolumeConditionType = "Archived"
)

type VirtualVolumeCondition struct {
	// Type of account condition.
	Type VirtualVolumeConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=VirtualVolumeConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="StorageConnection",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=virtualvolumes,shortName=vol,singular=virtualvolume,categories={infra,modeld,all}
// VirtualVolume represent a volume api object
type VirtualVolume struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualVolumeSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	// +kubebuilder:validation:Optional
	Status VirtualVolumeStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// VirtualVolumeList is a list of mdvolumes
type VirtualVolumeList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []VirtualVolume `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// VirtualVolumeSpec define the desired state of the mdvolume.
type VirtualVolumeSpec struct {
	// The Lab that own the git repository
	// Default to the default volume.
	TenantRef *v1.ObjectReference `json:"tenantRef" protobuf:"bytes,1,name=tenantRef"`
	//  specify the api connections of this mdvolume cloud provider.
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// User provided description
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

type VirtualVolumeStatus struct {
	//+optional
	Conditions []VirtualVolumeCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
