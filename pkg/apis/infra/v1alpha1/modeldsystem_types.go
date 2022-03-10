package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelaSystem condition
type ModelaSystemConditionType string

/// ModelaSystem Condition
const (
	ModelaSystemReady ModelaSystemConditionType = "Ready"
	ModelaSystemSaved ModelaSystemConditionType = "Saved"
)

// ModelaSystemCondition describes the state of the license at a certain point.
type ModelaSystemCondition struct {
	// Type of account condition.
	Type ModelaSystemConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelaSystemConditionType"`
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
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=modelasystems,singular=modelasystem,categories={infra,modela}
type ModelaSystem struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelaSystemSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelaSystemStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelaSystemList is a list of ModelaSystems
type ModelaSystemList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelaSystem `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelaSystemSpec defines the desired state of ModelaSystem
type ModelaSystemSpec struct {
	// The current software version of modela
	// +kubebuilder:validation:Required
	// +required
	Release string `json:"release" protobuf:"bytes,1,opt,name=release"`
	// Set the release to active
	// +kubebuilder:validation:Optional
	Active *bool `json:"active" protobuf:"bytes,2,opt,name=active"`
	// +kubebuilder:validation:Optional
	// +optional
	Template *v1.PodTemplateSpec `json:"podTemplate,omitempty" protobuf:"bytes,3,opt,name=podTemplate"`
	// +kubebuilder:validation:Optional
	// +optional
	PublisherTemplate *v1.PodTemplateSpec `json:"publisherTemplate,omitempty" protobuf:"bytes,4,opt,name=publisherTemplate"`
}

// ModelaSystemStatus is the observed state of a ModelaSystem
type ModelaSystemStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,2,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,3,opt,name=failureMessage"`

	//+kubebuilder:validation:Optional
	LastRelease string `json:"lastRelease" protobuf:"bytes,4,opt,name=lastRelease"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelaSystemCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
