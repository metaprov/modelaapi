package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type CommitPhase string

const (
	CommitPhasePending CommitPhase = "Pending"
	CommitPhaseSending CommitPhase = "Sending"
	CommitPhaseSent    CommitPhase = "Sent"
)

// Commit condition
type CommitConditionType string

/// Commit Condition
const (
	CommitSent  CommitConditionType = "Sent"
	CommitSaved CommitConditionType = "Saved"
)

// CommitCondition describes the state of the license at a certain point.
type CommitCondition struct {
	// Type of account condition.
	Type CommitConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CommitConditionType"`
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
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.Name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.Namespace",description=""
// +kubebuilder:printcolumn:name="At",type="date",JSONPath=".status.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=commits,singular=commit,categories={infra,modela}
// +kubebuilder:resource:scope=Cluster
type Commit struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CommitSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            CommitStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// CommitList is a list of Commits
type CommitList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Commit `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// CommitSpec defines the desired state of Commit
type CommitSpec struct {
	// User provided commit message
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Message *string `json:"message,omitempty" protobuf:"bytes,1,opt,name=message"`
	// The subject entity
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,2,opt,name=entityRef"`
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
}

// CommitStatus is the observed state of a Commit
type CommitStatus struct {
	// Phase is the phase of the model
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase CommitPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// The time when the commit was completed
	// +kubebuilder:validation:Optional
	At metav1.Time `json:"at" protobuf:"bytes,2,opt,name=at"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []CommitCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
