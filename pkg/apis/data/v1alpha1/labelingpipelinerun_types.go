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

type LabelingPipelineRunPhase string

const (
	LabelingPipelineRunPhasePending   LabelingPipelineRunPhase = "Pending"
	LabelingPipelineRunPhaseRunning   LabelingPipelineRunPhase = "Running"
	LabelingPipelineRunPhaseCompleted LabelingPipelineRunPhase = "Completed"
	LabelingPipelineRunPhaseFailed    LabelingPipelineRunPhase = "Failed"
)

//==============================================================================
// Label
//==============================================================================

// LabelingPipelineRunConditionType condition on the entity
type LabelingPipelineRunConditionType string

/// Label Condition
const (
	LabelingPipelineRunCompleted LabelingPipelineRunConditionType = "Completed"
	LabelingPipelineRunSaved     LabelingPipelineRunConditionType = "Saved"
)

// LabelingPipelineRunCondition describes the state of a deployment at a certain point.
type LabelingPipelineRunCondition struct {
	// Type of account condition.
	Type LabelingPipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=LabelConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// LabelingPipeline represent a feature set object in the feature store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Pipeline",type="string",JSONPath=".spec.labelPipelineName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=labelingpipelineruns,singular=labelingpipelinerun,shortName=lpr,categories={data,modela}
// +kubebuilder:resource:scope=Namespaced
// +kubebuilder:subresource:status
type LabelingPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabelingPipelineRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            LabelingPipelineRunStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
type LabelingPipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []LabelingPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// LabelSpec contain the desired state of a Label
type LabelingPipelineRunSpec struct {
	// The owner of the LabelingPipelineRunSpec
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the pipeline
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName" protobuf:"bytes,2,opt,name=versionName"`
	// LabelPipelineName specifies the name of LabelingPipeline
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:default:=""
	LabelPipelineName *string `json:"labelPipelineName" protobuf:"bytes,3,opt,name=labelPipelineName"`
	// WorkloadClassName is the name of the workload class used to run this pipeline.
	// +kubebuilder:default:="default-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,4,opt,name=workloadClassName"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,5,opt,name=ttl"`
}

// LabelPipelineRunStatus defines the observed state of Label
type LabelingPipelineRunStatus struct {
	// The phase of the labeling pipeline run
	// +kubebuilder:default:="Pending"
	Phase LabelingPipelineRunPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// The Start time of the run
	StartTime *metav1.Time `json:"startTime" protobuf:"bytes,2,opt,name=startTime"`
	// The End time of the run
	EndTime *metav1.Time `json:"endTime" protobuf:"bytes,3,opt,name=endTime"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,5,opt,name=triggeredBy"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,6,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []LabelingPipelineRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
