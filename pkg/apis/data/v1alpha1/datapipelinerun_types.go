/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */
package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type DataPipelineRunPhase string

const (
	DataPipelineRunPhaseRunning   DataPipelineRunPhase = "Running"
	DataPipelineRunPhaseCompleted DataPipelineRunPhase = "Completed"
	DataPipelineRunPhaseFailed    DataPipelineRunPhase = "Failed"
	DataPipelineRunPhaseAborted   DataPipelineRunPhase = "Aborted"
	DataPipelineRunPhasePaused    DataPipelineRunPhase = "Paused"
)

// Condition on the dataset
type DataPipelineRunConditionType string

/// DataPipelineRun Condition
const (
	DataPipelineRunCompleted DataPipelineRunConditionType = "Completed"
	DataPipelineRunSaved     DataPipelineRunConditionType = "Saved"
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
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Pipeline",type="string",JSONPath=".spec.datapipelineName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=datapipelineruns,singular=datapipelinerun,shortName="dpr",categories={data,modeld,all}
// DataPipelineRun represent one execution of the data pipeline
type DataPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataPipelineRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DataPipelineRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// DataPipelineRunList contains a list of DataPipelineRun
type DataPipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//DataPipelineRunSpec defines the desired state of a schema
type DataPipelineRunSpec struct {
	// The data product version of the run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The data product
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DataPipelineName *string `json:"datapipelineName,omitempty" protobuf:"bytes,2,opt,name=datapipelineName"`
	// The location of data artifacts that are generated during the run
	// +kubebuilder:validation:Optional
	DataLocation *DataLocation `json:"dataLocation,omitempty" protobuf:"bytes,3,opt,name=dataLocation"`
	// The owner of the run, set to the owner of the pipeline
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// WorkloadClassName is the name of the workload class used to run this pip0eline. This is assigned by the datapipelineeun
	// +kubebuilder:default:="nano-cpu-250m-mem-256mi"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,5,opt,name=workloadClassName"`
	// The priority of this data pipeline. The defualt is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,6,opt,name=priority"`
}

// DataPipelineRunStatus defines the observed state of DataPipelineRun
type DataPipelineRunStatus struct {
	// RecipeRuns is the names of the recipe runs that occur during running of the pipeline.
	//+kubebuilder:validation:Optional
	RecipeRuns []string `json:"recipeRuns" protobuf:"bytes,1,rep,name=recipeRuns"`
	// the resulting dataset from the flow
	//+kubebuilder:validation:Optional
	Output DataLocation `json:"output" protobuf:"bytes,2,opt,name=output"`
	// the phase of the run
	//+kubebuilder:validation:Optional
	Phase DataPipelineRunPhase `json:"phase" protobuf:"bytes,3,opt,name=phase"`
	// StartTime is the start time of the pipeline
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,4,opt,name=startTime"`
	// CompletionTime is the end time of the pipeline
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,5,opt,name=endTime"`
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,6,opt,name=observedGeneration"`
	// Last error
	//+kubebuilder:validation:Optional
	LastError string `json:"lastError,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,opt,name=lastError"`
	// +listType=map
	// +listMapKey=type
	//+kubebuilder:validation:Optional
	Conditions []DataPipelineRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}
