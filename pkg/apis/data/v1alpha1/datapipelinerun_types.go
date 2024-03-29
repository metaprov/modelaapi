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

type DataPipelineRunPhase string

const (
	DataPipelineRunPhasePending   DataPipelineRunPhase = "Pending"
	DataPipelineRunPhaseRunning   DataPipelineRunPhase = "Running"
	DataPipelineRunPhaseCompleted DataPipelineRunPhase = "Completed"
	DataPipelineRunPhaseFailed    DataPipelineRunPhase = "Failed"
	DataPipelineRunPhaseAborted   DataPipelineRunPhase = "Aborted"
	DataPipelineRunPhasePaused    DataPipelineRunPhase = "Paused"
)

// Condition on the dataset
type DataPipelineRunConditionType string

// / DataPipelineRun Condition
const (
	DataPipelineRunCompleted = "Completed"
	DataPipelineRunSaved     = "Saved"
)

// DataPipelineRunCondition describes the state of a data processor run at a certain point.
type DataPipelineRunCondition struct {
	// Type of account condition.
	Type DataPipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataPipelineRunConditionType"`
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
// +kubebuilder:resource:path=datapipelineruns,singular=datapipelinerun,shortName="dpr",categories={data,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="string",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Pipeline",type="string",JSONPath=".spec.datapipelineName"
// +kubebuilder:printcolumn:name="StartedAt",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletedAt",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Failure",type="string",JSONPath=".metadata.failureMessage"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// DataPipelineRun represent one execution of the data pipeline
type DataPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataPipelineRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataPipelineRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DataPipelineRunList contains a list of DataPipelineRun
type DataPipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// DataPipelineRunSpec defines the desired state of a schema
type DataPipelineRunSpec struct {
	// The data product version of the run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The data product
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DataPipelineName *string `json:"datapipelineName,omitempty" protobuf:"bytes,2,opt,name=datapipelineName"`
	// The owner of the run, set to the owner of the pipeline
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// Specify the resources for the data pipeline run
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,5,opt,name=resources"`
	// The priority of this data pipeline. The default is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,6,opt,name=priority"`
	// Set to true to pause the pipeline run
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,7,opt,name=paused"`
	// Set to true to abort the  pipeline run
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,8,opt,name=aborted"`
	// The Lab where the data pipeline run.
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,9,opt,name=labRef"`
	// The model class for this data pipeline run if the dataset was created by a model class
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,10,opt,name=modelClassName"`
	// If this report was created by a data pipeline run, this is the run name
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,11,opt,name=modelClassRunName"`
}

// DataPipelineRunStatus defines the observed state of DataPipelineRun
type DataPipelineRunStatus struct {
	// RecipeRuns is the names of the recipe runs that occur during running of the pipeline.
	//+kubebuilder:validation:Optional
	RecipeRuns []string `json:"recipeRuns" protobuf:"bytes,1,rep,name=recipeRuns"`
	// the resulting dataset from the flow
	//+kubebuilder:validation:Optional
	Output catalog.DataLocation `json:"output" protobuf:"bytes,2,opt,name=output"`
	// the phase of the run
	// +kubebuilder:default:="Pending"
	//+kubebuilder:validation:Optional
	Phase DataPipelineRunPhase `json:"phase" protobuf:"bytes,3,opt,name=phase"`
	// CompletedAt is the end time of the pipeline
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,5,opt,name=completedAt"`
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,6,opt,name=observedGeneration"`

	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,7,opt,name=failureReason"`

	// UpdateUpdateStrategy in case of terminal failure message
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`

	// Pipeline progress Progress in percent, the progress takes into account the different stages of the pipeline
	// +kubebuilder:validation:Optional
	Progress *int32 `json:"progress" protobuf:"varint,9,opt,name=progress"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,10,opt,name=logs"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,11,opt,name=updatedAt"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,12,rep,name=conditions"`
}
