package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type MeetingPhase string

const (
	MeetingPhasePending MeetingPhase = "Pending"
	MeetingPhaseDone    MeetingPhase = "Done"
)

// Meeting condition
type MeetingConditionType string

/// Meeting Condition
const (
	MeetingDone  MeetingConditionType = "Done"
	MeetingSaved MeetingConditionType = "Saved"
)

// MeetingCondition describes the state of the license at a certain point.
type MeetingCondition struct {
	// Type of account condition.
	Type MeetingConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=MeetingConditionType"`
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
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.namespace",description=""
// +kubebuilder:printcolumn:name="At",type="date",JSONPath=".status.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=meetings,singular=meeting,categories={infra,modela}
type Meeting struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              MeetingSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            MeetingStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// MeetingList is a list of Meetings
type MeetingList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Meeting `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// MeetingSpec defines the desired state of Meeting
type MeetingSpec struct {
	// Description of the meeting
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// Agenda of the meeting
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Agenda *string `json:"agenda,omitempty" protobuf:"bytes,2,opt,name=agenda"`
	// The modela entity that the meeting is about
	// +kubebuilder:validation:Optional
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,3,opt,name=entityRef"`
	// NotifierName is the name of the notifier used to fire the alert.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,4,opt,name=notifierName"`
	// Assigned to is the user name assigned to this task
	// +kubebuilder:validation:Optional
	Participants []string `json:"participants,omitempty" protobuf:"bytes,5,rep,name=participants"`
	// Flagged denote if the meeting is flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,6,opt,name=flagged"`
	// Reminder is the time to send a reminder
	// +kubebuilder:validation:Optional
	Reminder *metav1.Time `json:"reminder,omitempty" protobuf:"bytes,7,opt,name=reminder"`
}

// MeetingStatus is the observed state of a Meeting
type MeetingStatus struct {
	// Phase is the phase of the meeting
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase MeetingPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// The meeting notes.
	Notes string `json:"notes,omitempty" protobuf:"bytes,3,opt,name=notes"`
	// the meeting action items
	ActionItems string `json:"actionItems,omitempty" protobuf:"bytes,4,opt,name=actionItems"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []MeetingCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
