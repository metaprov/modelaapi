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

// CronApiCallConditionType is the condition of the sqlquery
type CronApiCallConditionType string

/// CronApiCall Condition
const (
	CronApiCallReady CronApiCallConditionType = "Ready"
	CronApiCallSaved CronApiCallConditionType = "Saved"
)

// CronApiCallCondition describes the state of a deployment at a certain point.
type CronApiCallCondition struct {
	// Type of account condition.
	Type CronApiCallConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CronApiCallConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// CronApiCall represent a single sqlquery in the sqlquery store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=sqlqueries,singular=sqlquery,categories={data,modela}
// +kubebuilder:subresource:status
type CronApiCall struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CronApiCallSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status CronApiCallStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// CronApiCallList contain a list of sqlquery objects
type CronApiCallList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []CronApiCall `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// CronApiCallSpec contain the desired state of a CronApiCall
type CronApiCallSpec struct {
	// The sqlquery owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the sqlquery.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// The sql template to create.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Template SqlQuerySpec `json:"template,omitempty" protobuf:"bytes,3,opt,name=template"`
	// Schedule for running the sql query
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,4,opt,name=schedule"`
}

// CronApiCallStatus defines the observed state of CronApiCall
type CronApiCallStatus struct {
	// Last Time the query run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	LastRun *metav1.Time `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []CronApiCallCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}
