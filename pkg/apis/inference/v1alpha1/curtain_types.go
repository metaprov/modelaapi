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

//==============================================================================
// Curtain
//==============================================================================

// Curtain condition
type CurtainConditionType string

/// Curtain Condition
const (
	// Setting up the resources to operator the curtain.
	CurtainPending CurtainConditionType = "Pending"
	// Curtain is ready to accecpt prediction request.
	CurtainReady CurtainConditionType = "Ready"
	// Curtain was shut down successfully
	CurtainSuccess CurtainConditionType = "Success"
	// Curtain has failed
	CurtainFailed CurtainConditionType = "Failed"
)

// CurtainCondition describes the state of a wizard of oz at a certain point.
type CurtainCondition struct {
	// Type of account condition.
	Type CurtainConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CurtainConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Curtain represent a Curtain API object
// +genclient
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Serving Site",type="string",JSONPath=".spec.servingsiteRef.name"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetRef.name"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=curtains,singular=curtain,categories={inference,modeld,all}
type Curtain struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CurtainSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status CurtainStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// CurtainList represent a list of Curtain resources
type CurtainList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Curtain `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// CurtainSpec define the desired state of a Curtain
type CurtainSpec struct {
	// User provided description
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// User provided description
	// +optional
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// The product of the resource
	// +optional
	ServingSiteName string `json:"servingsiteName,omitempty" protobuf:"bytes,3,opt,name=servingsiteName"`
	// The dataset that store the wizard answers
	// +optional
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// The wizards him self. This is a reference to one or more wizards objects.
	Wizards []string `json:"wizards,omitempty" protobuf:"bytes,5,opt,name=wizards"`
	// Question to ask the wizard
	// +kubebuilder:validation:MaxLength=256
	Question string `json:"question,omitempty" protobuf:"bytes,6,opt,name=question"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
}

// CurtainStatus contain the observed state of the Curtain object.
type CurtainStatus struct {
	//+optional
	Conditions []CurtainCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}

type CurtainTemplateSpec struct {
	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +optional
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CurtainSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}
