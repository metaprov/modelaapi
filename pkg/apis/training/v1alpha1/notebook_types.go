/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ===================================================
// NotebookName
// ===================================================

// NotebookName condition
type NotebookConditionType string

/// NotebookName Condition
const (
	NotebookPublished NotebookConditionType = "Published"
	NotebookIngested  NotebookConditionType = "Ingested"
	NotebookReady     NotebookConditionType = "Ready"
	NotebookInDb      NotebookConditionType = "InDb"
)

// NotebookCondition describes the state of a notebook at a certain point.
type NotebookCondition struct {
	// Type of account condition.
	Type NotebookConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=NotebookConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +genclient
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=notebooks,singular=notebook,shortName=nb,categories={training,modeld,all}
// NotebookName represent a notebook
type Notebook struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              NotebookSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            NotebookStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// NotebookList represent list of notebooks
type NotebookList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Notebook `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// NotebookSpec is the desired state of the notebook resource.
type NotebookSpec struct {
	// The product of the resource
	// +optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +optional
	// +kubebuilder:validation:MinLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// SchemaName relate a notebook to a schema.
	// The schema object will be accessible from the notebook
	// +optional
	SchemaRef *v1.ObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,3,opt,name=schemaRef"`
	// A reference to the container image repository for this notebook.
	ImageRepoRef *v1.ObjectReference `json:"imageRepoRef,omitempty" protobuf:"bytes,4,opt,name=imageRepoRef"`
	// python req file
	// +optional
	Requirements *string `json:"requirements,omitempty" protobuf:"bytes,5,opt,name=requirements"`
	// list of deb package
	// +optional
	DebPackages *string `json:"debPackages,omitempty" protobuf:"bytes,6,opt,name=debPackages"`
	// vars to pass to the notebook
	// +optional
	Vars []string `json:"vars,omitempty" protobuf:"bytes,7,rep,name=vars"`
	// The location of the notebook
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,8,rep,name=location"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
}

// NotebookStatus is the observed state of the notebook resource
type NotebookStatus struct {
	// Image is the name of the image after publication
	// +optional
	Image string `json:"image,omitempty" protobuf:"bytes,1,opt,name=image"`
	// The URI of the notebook in the bucket.
	// +optional
	Uri string `json:"uri,omitempty" protobuf:"bytes,2,opt,name=uri"`
	// Represents the latest available observations of a notebook state.
	//+optional
	Conditions []NotebookCondition `json:"conditions,omitempty" protobuf:"bytes,3,rep,name=conditions"`
}
