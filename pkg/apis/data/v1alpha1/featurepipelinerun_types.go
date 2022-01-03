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

type FeautrePipelineRunPhase string

const (
	FeaturePipelineRunPhasePending   FeautrePipelineRunPhase = "Pending"
	FeaturePipelineRunPhaseRunning   FeautrePipelineRunPhase = "Running"
	FeaturePipelineRunPhaseCompleted FeautrePipelineRunPhase = "Completed"
	FeaturePipelineRunPhaseAborted   FeautrePipelineRunPhase = "Aborted"
	FeaturePipelineRunPhaseFailed    FeautrePipelineRunPhase = "Failed"
)

// FeaturePipelineRunConditionType
type FeaturePipelineRunConditionType string

/// Feature Condition
const (
	FeaturePipelineRunCompleted FeaturePipelineRunConditionType = "Completed"
	FeaturePipelineRunSaved     FeaturePipelineRunConditionType = "Saved"
)

// FeaturePipelineRunCondition describes the state of a deployment at a certain point.
type FeaturePipelineRunCondition struct {
	// Type of account condition.
	Type FeaturePipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// FeaturePipeline represent a feature set object in the feature store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Pipeline",type="string",JSONPath=".spec.pipelineName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurepipelineruns,shortName=fpr,singular=featurepipelinerun,categories={data,modela}
// +kubebuilder:subresource:status
type FeaturePipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeaturePipelineRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeaturePipelineRunStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// FeaturePipelineRunList contain a list of FeaturePipelineRun objects
// +kubebuilder:object:root=true
type FeaturePipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeaturePipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureSpec contain the desired state of a Feature
type FeaturePipelineRunSpec struct {
	// The feature owner
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the feature.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// FileName specify the name of the attribute
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=64
	FeaturePipelineName *string `json:"featurePipelineName,omitempty" protobuf:"bytes,3,opt,name=featurePipelineName"`
	// A reference to the workload class that is used for running the workload class. this is setup based on the feature pipeline
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,4,opt,name=resources"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,5,opt,name=ttl"`
}

// FeatureStatus defines the observed state of Feature
type FeaturePipelineRunStatus struct {
	// The Start time of the run
	//+option
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// The End time of the run
	//+option
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// The phase of the dataset processing
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase FeautrePipelineRunPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,5,opt,name=triggeredBy"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,6,opt,name=logs"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,7,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeaturePipelineRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}
