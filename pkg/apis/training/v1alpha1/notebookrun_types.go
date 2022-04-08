/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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
	NotebookRunPhasePending   NotebookRunPhase = "Pending"
	NotebookRunPhaseAborted   NotebookRunPhase = "Aborted"
	NotebookRunPhaseRunning   NotebookRunPhase = "Running"
	NotebookRunPhaseCompleted NotebookRunPhase = "Completed"
	NotebookRunPhaseFailed    NotebookRunPhase = "Failed"
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
// +kubebuilder:resource:path=notebookruns,singular=notebookrun,shortName=nbr,categories={training,modela,all}
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
	// Resources are hardware req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,5,opt,name=resources"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,6,opt,name=ttl"`
	// LabRef is a reference to the lab where the trainers for this study run.
	// If no value is provided, the lab is taken from the
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,7,opt,name=labRef"`
}

// NotebookRunStatus define that observed state of NotebookRun resource
type NotebookRunStatus struct {
	// The phase of the notebook
	// +kubebuilder:default:="Pending"
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
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,7,opt,name=triggeredBy"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,8,opt,name=logs"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,9,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []NotebookRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
}

// NotebookVarValue is an assignment of value to the notebook var
type NotebookVarValue struct {
	Name  string `json:"name" protobuf:"bytes,1,opt,name=name"`
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}
