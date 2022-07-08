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
	CurtainReady CurtainConditionType = "Ready"
	CurtainSaved CurtainConditionType = "Saved"
)

// CurtainCondition describes the state of a wizard of oz at a certain point.
type CurtainCondition struct {
	// Type of account condition.
	Type CurtainConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CurtainConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Curtain represent an object which can be placed before or after predictor
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Serving Site",type="string",JSONPath=".spec.servingsiteRef.name"
// +kubebuilder:printcolumn:name="Entity",type="string",JSONPath=".spec.datasetRef.name"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=curtains,singular=curtain,categories={inference,modela,all}
type Curtain struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CurtainSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status CurtainStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

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
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// The product of the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ServingSiteName *string `json:"servingsiteName,omitempty" protobuf:"bytes,3,opt,name=servingsiteName"`
	// The dataset that store the human answers
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// The accounts of the human which can answer the prediction.
	Wizards []string `json:"wizards,omitempty" protobuf:"bytes,5,rep,name=wizards"`
	// Question to ask the human.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	Question *string `json:"question,omitempty" protobuf:"bytes,6,opt,name=question"`
	// NotifierName is used to converse with the human.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,7,opt,name=notifierName"`
	// The owner account name
	// +kubebuilder:default:='no-one'
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
}

// CurtainStatus contain the observed state of the Curtain object.
type CurtainStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []CurtainCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}

type CurtainTemplateSpec struct {
	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +kubebuilder:validation:Optional
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CurtainSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}
