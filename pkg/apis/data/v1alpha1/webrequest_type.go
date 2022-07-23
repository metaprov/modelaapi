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

// WebRequestConditionType is the condition of the sqlquery
type WebRequestConditionType string

/// WebRequest Condition
const (
	WebRequestReady WebRequestConditionType = "Ready"
	WebRequestSaved WebRequestConditionType = "Saved"
)

// WebRequestCondition describes the state of a deployment at a certain point.
type WebRequestCondition struct {
	// Type of account condition.
	Type WebRequestConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=WebRequestConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// WebRequest represent a single sqlquery in the sqlquery store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=webrequests,singular=webrequest,categories={data,modela}
// +kubebuilder:subresource:status
type WebRequest struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              WebRequestSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status WebRequestStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// WebRequestList contain a list of sqlquery objects
type WebRequestList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []WebRequest `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// WebRequestSpec contain the desired state of a WebRequest
type WebRequestSpec struct {
	// The sqlquery owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the sqlquery.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Description of the cron api call
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The sql template to create.
	// +kubebuilder:validation:Optional
	Template WebRequestRunSpec `json:"template,omitempty" protobuf:"bytes,4,opt,name=template"`
	// Schedule for running the sql query
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,5,opt,name=schedule"`
}

// WebRequestStatus defines the observed state of WebRequest
type WebRequestStatus struct {
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,1,opt,name=lastUpdated"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	//+kubebuilder:validation:Optional
	LastRun catalog.LastRunStatus `json:"lastRun,omitempty" protobuf:"bytes,3,opt,name=lastRun"`
	// The time of the next schedule run
	//+kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,4,opt,name=nextRun"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []WebRequestCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
