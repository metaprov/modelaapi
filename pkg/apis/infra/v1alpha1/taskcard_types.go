package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type TaskCardPhase string

const (
	TaskCardPhasePending TaskCardPhase = "Pending"
	TaskCardPhaseDone    TaskCardPhase = "Done"
)

// TaskCard condition
type TaskCardConditionType string

/// TaskCard Condition
const (
	TaskCardDone  TaskCardConditionType = "Done"
	TaskCardSaved TaskCardConditionType = "Saved"
)

// TaskCardCondition describes the state of the license at a certain point.
type TaskCardCondition struct {
	// Type of account condition.
	Type TaskCardConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=TaskCardConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase",description=""
// +kubebuilder:printcolumn:name="Subject",type="string",JSONPath=".spec.subject",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.namespace",description=""
// +kubebuilder:printcolumn:name="Notifier",type="string",JSONPath=".spec.notifierName",description=""
// +kubebuilder:printcolumn:name="At",type="date",JSONPath=".status.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=taskcards,singular=taskcard,categories={infra,modeld}
type TaskCard struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              TaskCardSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            TaskCardStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// TaskCardList is a list of TaskCards
type TaskCardList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []TaskCard `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// TaskCardSpec defines the desired state of TaskCard
type TaskCardSpec struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Task *string `json:"task,omitempty" protobuf:"bytes,1,opt,name=task"`
	// The modeld entity that the task refer to.
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,2,opt,name=entityRef"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Required
	// NotifierName is the name of the notifier used to fire the alert.
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,3,opt,name=notifierName"`
	// Assigned to is the user name assigned to this task
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	AssignedTo *string `json:"assignedTo,omitempty" protobuf:"bytes,4,opt,name=assignedTo"`
	// Flagged donete that task was flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"bytes,5,opt,name=flagged"`
	// Reminder is the time to send a reminder
	Reminder *metav1.Time `json:"reminder,omitempty" protobuf:"bytes,6,opt,name=reminder"`
	// Flagged donete that task was flagged
	DueDate *metav1.Time `json:"dueDate,omitempty" protobuf:"bytes,7,opt,name=dueDate"`
}

// TaskCardStatus is the observed state of a TaskCard
type TaskCardStatus struct {
	// Phase is the phase of the model
	// +kubebuilder:validation:Optional
	Phase TaskCardPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	//+optional
	Conditions []TaskCardCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
}
