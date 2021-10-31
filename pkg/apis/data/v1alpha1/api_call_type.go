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

// ApiCallConditionType is the condition of the apicall
type ApiCallConditionType string

/// ApiCall Condition
const (
	ApiCallReady ApiCallConditionType = "Ready"
	ApiCallSaved ApiCallConditionType = "Saved"
)

// ApiCallCondition describes the state of a deployment at a certain point.
type ApiCallCondition struct {
	// Type of account condition.
	Type ApiCallConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ApiCallConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// ApiCall represent a single apicall in the apicall store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=apicalls,singular=apicall,categories={data,modela}
// +kubebuilder:subresource:status
type ApiCall struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ApiCallSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ApiCallStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ApiCallList contain a list of apicall objects
type ApiCallList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ApiCall `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ApiCallSpec contain the desired state of a ApiCall
type ApiCallSpec struct {
	// The apicall owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the apicall.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the apicall
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Type name of the column key, this column is the key column in the entity.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	URL *string `json:"text,omitempty" protobuf:"bytes,4,opt,name=query"`
	// URL Parameters
	// +kubebuilder:validation:Optional
	Parameters map[string]string `json:"parameters,omitempty" protobuf:"bytes,5,opt,name=parameters"`
	// The name of the time stamp column
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,6,opt,name=connectionName"`
}

// ApiCallStatus defines the observed state of ApiCall
type ApiCallStatus struct {
	// Last Time the query run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	LastRun *metav1.Time `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ApiCallCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}
