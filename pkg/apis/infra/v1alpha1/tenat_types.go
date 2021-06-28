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

type TenantType string

type TenantConditionType string

/// Tenant Condition
const (
	TenantReady TenantConditionType = "Ready"
	TenantSaved TenantConditionType = "Saved"
)

// TenantCondition describes the state of a tenant at a certain point.
type TenantCondition struct {
	// Type of tenant condition.
	Type TenantConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=TenantConditionType"`
	// Status of the condition, one of True, False, Unknown.
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
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Default Lab",type="string",JSONPath=".spec.defaultLabRef.Name",description=""
// +kubebuilder:printcolumn:name="Default Serving Site",type="string",JSONPath=".spec.defaultServingSiteRef.Name",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=tenants,singular=tenant,categories={infra,modeld}
// Tenant represents root tenant.
type Tenant struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              TenantSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            TenantStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// TenantList represent list of tenants.
type TenantList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Tenant `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// TenantSpec defines the desired state of Tenant
type TenantSpec struct {
	// the default lab for this account
	// +kubebuilder:validation:Optional
	DefaultLabRef *v1.ObjectReference `json:"defaultLabRef,omitempty" protobuf:"bytes,1,opt,name=defaultLab"`
	// the default serving site for this account
	// +kubebuilder:validation:Optional
	DefaultServingSiteRef *v1.ObjectReference `json:"defaultServingSiteRef,omitempty" protobuf:"bytes,2,opt,name=defaultServingSiteRef"`
	// Description is user provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Owner is the owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// TenantStatus defines the actual state of a Tenant
type TenantStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// +listType=map
	// +listMapKey=type
	//+kubebuilder:validation:Optional
	Conditions []TenantCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}
