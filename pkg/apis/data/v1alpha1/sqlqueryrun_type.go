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

// SqlQueryRunConditionType is the condition of the sqlquery
type SqlQueryRunConditionType string

/// SqlQueryRun Condition
const (
	SqlQueryRunReady SqlQueryRunConditionType = "Ready"
	SqlQueryRunSaved SqlQueryRunConditionType = "Saved"
)

// SqlQueryRunCondition describes the state of a deployment at a certain point.
type SqlQueryRunCondition struct {
	// Type of account condition.
	Type SqlQueryRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=SqlQueryRunConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// SqlQueryRun represent a single sqlquery in the sqlquery store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=sqlqueryruns,singular=sqlqueryrun,categories={data,modela}
// +kubebuilder:subresource:status
type SqlQueryRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              SqlQueryRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status SqlQueryRunStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// SqlQueryRunList contain a list of sqlquery objects
type SqlQueryRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []SqlQueryRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// SqlQueryRunSpec contain the desired state of a SqlQueryRun
type SqlQueryRunSpec struct {
	// The sqlquery owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the sqlquery.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the sqlquery
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Type name of the column key, this column is the key column in the entity.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Query *string `json:"text,omitempty" protobuf:"bytes,4,opt,name=query"`
	// The name of the connection to the SQL data source
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,5,opt,name=connectionName"`
	// The SQL statement timeout
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	Timeout *int32 `json:"timeout,omitempty" protobuf:"varint,6,opt,name=timeout"`
}

// SqlQueryRunStatus defines the observed state of SqlQueryRun
type SqlQueryRunStatus struct {
	// Start time for the query
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	StartedAt *metav1.Time `json:"startedAt,omitempty" protobuf:"bytes,1,opt,name=startedAt"`
	// End time for the query
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,2,opt,name=completedAt"`
	// The location of the result
	ResultLocation DataLocation `json:"resultLocation,omitempty" protobuf:"bytes,3,opt,name=resultLocation"`
	// The last error that occur as a result of the execution
	LastError string `json:"lastError,omitempty" protobuf:"bytes,4,opt,name=lastError"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []SqlQueryRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
