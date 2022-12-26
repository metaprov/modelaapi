package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelaSystem condition
type ModelaSystemConditionType string

// / ModelaSystem Condition
const (
	ModelaSystemReady = "Ready"
	ModelaSystemSaved = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=modelasystems,singular=modelasystem,categories={infra,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// ModelaSystem
type ModelaSystem struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelaSystemSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelaSystemStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active" protobuf:"varint,2,opt,name=active"`
	// +kubebuilder:validation:Optional
	// +optional
	Template *v1.PodTemplateSpec `json:"podTemplate,omitempty" protobuf:"bytes,3,opt,name=podTemplate"`
	// +kubebuilder:validation:Optional
	// +optional
	PublisherTemplate *v1.PodTemplateSpec `json:"publisherTemplate,omitempty" protobuf:"bytes,4,opt,name=publisherTemplate"`
}

// ModelaSystemStatus is the observed state of a ModelaSystem
type ModelaSystemStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,2,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,3,opt,name=failureMessage"`

	//+kubebuilder:validation:Optional
	LastRelease string `json:"lastRelease" protobuf:"bytes,4,opt,name=lastRelease"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
