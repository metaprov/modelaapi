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

// SqlQueryPhase is the current phase of a model
type WebRequestRunPhase string

const (
	WebRequestRunPhasePending   WebRequestRunPhase = "Pending"
	WebRequestRunPhaseRunning   WebRequestRunPhase = "Running"
	WebRequestRunPhaseFailed    WebRequestRunPhase = "Failed"
	WebRequestRunPhaseAborted   WebRequestRunPhase = "Aborted"
	WebRequestRunPhaseCompleted WebRequestRunPhase = "Completed"
)

// WebRequestRunConditionType is the condition of the sqlquery
type WebRequestRunConditionType string

/// WebRequestRun Condition
const (
	WebRequestRunCompleted WebRequestRunConditionType = "Completed"
	WebRequestRunSaved     WebRequestRunConditionType = "Saved"
)

// WebRequestRunCondition describes the state of a deployment at a certain point.
type WebRequestRunCondition struct {
	// Type of account condition.
	Type WebRequestRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=WebRequestRunConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// WebRequestRun represent a single webrequest in the webrequest store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=webrequestruns,singular=webrequestrun,categories={data,modela}

// +kubebuilder:subresource:status
type WebRequestRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              WebRequestRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status WebRequestRunStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// WebRequestRunList contain a list of webrequest objects
type WebRequestRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []WebRequestRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// WebRequestRunSpec contain the desired state of a WebRequestRun
type WebRequestRunSpec struct {
	// The webrequest owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the webrequest.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the webrequest
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Type name of the column key, this column is the key column in the entity.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	URL *string `json:"text,omitempty" protobuf:"bytes,4,opt,name=query"`
	// HTTP Verb to use
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Verb *string `json:"verb,omitempty" protobuf:"bytes,5,opt,name=verb"`
	// URL Parameters
	// +kubebuilder:validation:Optional
	Parameters map[string]string `json:"parameters,omitempty" protobuf:"bytes,6,opt,name=parameters"`
	// The Http headers to use
	// +kubebuilder:validation:Optional
	Headers map[string]string `json:"headers,omitempty" protobuf:"bytes,7,opt,name=headers"`
	// The name of the connection to the data source.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,8,opt,name=connectionName"`
	// The WebRequest statement timeout
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	Timeout *int32 `json:"timeout,omitempty" protobuf:"varint,9,opt,name=timeout"`
	// If true save the query results
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Materialized *bool `json:"materialized,omitempty" protobuf:"varint,10,opt,name=materialized"`
	// If true generate a report each time the web request is executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,11,opt,name=reported"`
	// A reference to the workload class that is used for training
	// +kubebuilder:default:="default-prediction-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,12,opt,name=workloadClassName"`
}

// WebRequestRunStatus defines the observed state of WebRequestRun
type WebRequestRunStatus struct {
	// StartTime is the start time of the prediction.
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// EndTime is the end time of the prediction.
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// Phase is the current phase of the prediction
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase WebRequestRunPhase `json:"phase,omitempty" protobuf:"bytes,3,rep,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// The number of rows in the result query
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,6,opt,name=triggeredBy"`
	// The result of the HTTP execution
	// +kubebuilder:validation:Optional
	HttpResultCode int32 `json:"httpResultCode,omitempty" protobuf:"bytes,7,opt,name=httpResultCode"`
	// The location of the result
	// +kubebuilder:validation:Optional
	Location DataLocation `json:"resultLocation,omitempty" protobuf:"bytes,8,opt,name=resultLocation"`
	// The name of the report object.
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,9,rep,name=reportName"`
	// The last error that occur as a result of the execution
	// +kubebuilder:validation:Optional
	LastError string `json:"lastError,omitempty" protobuf:"bytes,10,opt,name=lastError"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,12,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []WebRequestRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,13,rep,name=conditions"`
}
