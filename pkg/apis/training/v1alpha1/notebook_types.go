/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ===================================================
// NotebookName
// ===================================================

// Notebook condition
type NotebookConditionType string

/// Notebook Condition
const (
	NotebookPublished NotebookConditionType = "Published"
	NotebookIngested  NotebookConditionType = "Ingested"
	NotebookReady     NotebookConditionType = "Ready"
	NotebookSaved     NotebookConditionType = "Saved"
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

// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=notebooks,singular=notebook,shortName=nb,categories={training,modela,all}
// Notebook represent a notebook object which specify a single notebook execution
type Notebook struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              NotebookSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            NotebookStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// NotebookList represent list of notebooks
type NotebookList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Notebook `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// NotebookSpec is the desired state of the notebook resource.
type NotebookSpec struct {
	// The version of the notebook
	// +kubebuilder:default:="latest"
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// SchemaName relate a notebook to a schema.
	// The schema object will be accessible from the notebook
	// +kubebuilder:validation:Optional
	SchemaRef *v1.ObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,3,opt,name=schemaRef"`
	// A reference to the container image repository for this notebook.
	// +kubebuilder:default:=""
	ImageName *string `json:"imageName,omitempty" protobuf:"bytes,4,opt,name=imageName"`
	// Requirements python file
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Requirements *string `json:"requirements,omitempty" protobuf:"bytes,5,opt,name=requirements"`
	// DebPackages is a list of deb package to install
	// +kubebuilder:validation:Optional
	DebPackages *string `json:"debPackages,omitempty" protobuf:"bytes,6,opt,name=debPackages"`
	// vars to pass to the notebook
	// +kubebuilder:validation:Optional
	Vars []string `json:"vars,omitempty" protobuf:"bytes,7,rep,name=vars"`
	// Location is the location of the notebook file
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,8,opt,name=location"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// Resource are the hardware req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// ActiveDeadlineSeconds is the deadline of a job for this notebook.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,12,opt,name=schedule"`
	// The priority of this notebook run. The default is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,13,opt,name=priority"`
	// Set to true to pause the notebook
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,14,opt,name=paused"`
}

// NotebookStatus is the observed state of the notebook resource
type NotebookStatus struct {
	// Image is the name of the image after publication
	// +kubebuilder:validation:Optional
	Image string `json:"image,omitempty" protobuf:"bytes,1,opt,name=image"`
	// The URI of the notebook in the bucket.
	// +kubebuilder:validation:Optional
	URI string `json:"uri,omitempty" protobuf:"bytes,2,opt,name=uri"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// Last run is the last time a data pipeline run was created
	//+kubebuilder:validation:Optional
	LastRun catalog.LastRunStatus `json:"lastRun,omitempty" protobuf:"bytes,4,opt,name=lastRun"`
	// The time of the next schedule run
	//+kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,5,opt,name=nextRun"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,6,opt,name=lastUpdated"`

	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,7,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []NotebookCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,9,rep,name=conditions"`
}
