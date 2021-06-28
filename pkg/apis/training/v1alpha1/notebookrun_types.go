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
	NotebookRunCompleted NotebookRunConditionType = "Completed"
	NotebookRunSaved     NotebookRunConditionType = "Saved"
)

type NotebookRunPhase string

const (
	NotebookRunPhaseRunning   NotebookRunPhase = "NotebookRunning"
	NotebookRunPhaseCompleted NotebookRunPhase = "NotebookCompleted"
	NotebookRunPhaseFailed    NotebookRunPhase = "NoteobookFailed"
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

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Notebook",type="string",JSONPath=".spec.notebookName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=notebookruns,singular=notebookrun,shortName=nbr,categories={training,modeld,all}
// NotebookRun represent a single execution of a notebook with a specific env variables
type NotebookRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Spec   NotebookRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status NotebookRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

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
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// NotebookName of the notebook for this run
	// +kubebuilder:validation:Optional
	NotebookName *string `json:"notebookName,omitempty" protobuf:"bytes,2,opt,name=notebookName"`
	// Values to pass to the notebook during execution
	// +kubebuilder:validation:Optional
	Values []NotebookVarValue `json:"values,omitempty" protobuf:"bytes,3,rep,name=values"`
	// Owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// WorkloadClassName is the name of the workload class used to run this model. This is assigned by the study
	// +kubebuilder:default:="nano-cpu-250m-mem-256mi"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,5,opt,name=workloadClassName"`
}

// NotebookRunStatus define that observed state of NotebookRun resource
type NotebookRunStatus struct {
	// The phase of the notebook
	// +kubebuilder:validation:Optional
	Phase NotebookRunPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// StartTime is the times that this prediction job started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// EndTime is the time that this prediction job finished
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// Last error
	//+kubebuilder:validation:Optional
	LastError string `json:"lastError,omitempty" protobuf:"bytes,5,opt,name=lastError"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []NotebookRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}

// NotebookVarValue is an assignment of value to the notebook var
type NotebookVarValue struct {
	Name  string `json:"name" protobuf:"bytes,1,opt,name=name"`
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}
