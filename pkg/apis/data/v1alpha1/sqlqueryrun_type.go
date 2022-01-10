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
type SqlQueryRunPhase string

const (
	SqlQueryRunPhasePending   SqlQueryRunPhase = "Pending"
	SqlQueryRunPhaseRunning   SqlQueryRunPhase = "Running"
	SqlQueryRunPhaseFailed    SqlQueryRunPhase = "Failed"
	SqlQueryRunPhaseAborted   SqlQueryRunPhase = "Aborted"
	SqlQueryRunPhaseCompleted SqlQueryRunPhase = "Completed"
)

// SqlQueryRunConditionType is the condition of the sqlquery
type SqlQueryRunConditionType string

/// SqlQueryRun Condition
const (
	SqlQueryRunCompleted SqlQueryRunConditionType = "Completed"
	SqlQueryRunSaved     SqlQueryRunConditionType = "Saved"
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
	// Database
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Database *string `json:"databaser,omitempty" protobuf:"bytes,4,opt,name=database"`
	// If true this table
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Table *bool `json:"sql,omitempty" protobuf:"varint,5,opt,name=table"`
	// Type name of the column key, this column is the key column in the entity.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	SqlOrTable *string `json:"sqlOrTable,omitempty" protobuf:"bytes,6,opt,name=sqlOrTable"`
	// The name of the connection to the SQL data source
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,7,opt,name=connectionName"`
	// Resources is the hardware resource req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,8,opt,name=resources"`
	// ActiveDeadlineSeconds is the deadline of a job for this dataset.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,9,opt,name=activeDeadlineSeconds"`
	// The priority of this prediction. The default is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,10,opt,name=priority"`
	// Aborted is set when we want to abort the prediction
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,11,opt,name=aborted"`
	// If true save the query results
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Materialized *bool `json:"materialized,omitempty" protobuf:"varint,12,opt,name=materialized"`
	// If true generate a report each time the web request is executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,13,opt,name=reported"`
}

// SqlQueryRunStatus defines the observed state of SqlQueryRun
type SqlQueryRunStatus struct {
	// StartTime is the start time of the prediction.
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// EndTime is the end time of the prediction.
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// Phase is the current phase of the prediction
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase SqlQueryRunPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// The number of rows in the result query
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,6,opt,name=triggeredBy"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,7,opt,name=logs"`
	// List of data problems, as reported by the validation process
	//+kubebuilder:validation:Optional
	ValidationResults []DataValidationResult `json:"validationResults,omitempty" protobuf:"bytes,8,rep,name=validationResults"`
	// The location of the materialized view
	//+kubebuilder:validation:Optional
	Location DataLocation `json:"location,omitempty" protobuf:"bytes,9,opt,name=location"`
	// The name of the report object.
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,10,opt,name=reportName"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,11,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []SqlQueryRunCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,12,rep,name=conditions"`
}
