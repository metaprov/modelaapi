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
// NotebookName run
//==============================================================================

// NotebookRun condition
// Condition on the dataset
type NotebookRunConditionType string

/// NotebookRun Condition
const (
	NotebookRunReady NotebookRunConditionType = "Ready"
	NotebookRunInDb  NotebookRunConditionType = "InDb"
)

// NotebookRunCondition describes the state of a notebook run.
type NotebookRunCondition struct {
	// Type of account condition.
	Type NotebookRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=NotebookRunConditionType"`
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
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=notebookruns,singular=notebookrun,shortName=nbr,categories={training,modeld,all}
// NotebookRun represent a single execution of a notebook with a specific env variables
type NotebookRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Spec   NotebookRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status NotebookRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// NotebookRunList is a list of notebook runs
type NotebookRunList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []NotebookRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// NotebookRunSpec defines the desired state of the NotebookRun resource
type NotebookRunSpec struct {
	// VersionName of the data product for this notebook
	// +optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// NotebookName of the notebook for this run
	// +optional
	NotebookName *string `json:"notebookName,omitempty" protobuf:"bytes,2,opt,name=notebookName"`
	// Values to pass to the notebook during execution
	// +optional
	Values []NotebookVarValue `json:"values,omitempty" protobuf:"bytes,3,rep,name=values"`
	// Owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
}

// NotebookRunStatus define that observed state of NotebookRun resource
type NotebookRunStatus struct {
	// The phase of the notebook
	// +optional
	Phase string `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// StartTime is the times that this prediction job started
	// +optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// CompletionTime is the time that this prediction job finished
	// +optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,3,opt,name=completionTime"`
	// Represents the latest available observations of a notebook run state.
	//+optional
	Conditions []NotebookRunCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
}

// NotebookVarValue is an assignment of value to the notebook var
type NotebookVarValue struct {
	Name  string `json:"name" protobuf:"bytes,1,opt,name=name"`
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}
