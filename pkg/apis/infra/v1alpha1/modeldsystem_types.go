package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModeldSystem condition
type ModeldSystemConditionType string

/// ModeldSystem Condition
const (
	ModeldSystemReady ModeldSystemConditionType = "Ready"
	ModeldSystemSaved ModeldSystemConditionType = "Saved"
)

// ModeldSystemCondition describes the state of the license at a certain point.
type ModeldSystemCondition struct {
	// Type of account condition.
	Type ModeldSystemConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModeldSystemConditionType"`
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
// +kubebuilder:printcolumn:name="Level",type="string",JSONPath=".spec.level",description=""
// +kubebuilder:printcolumn:name="Subject",type="string",JSONPath=".spec.subject",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.Name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.Namespace",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=modeldsystems,singular=modeldsystem,categories={infra,modeld}
type ModeldSystem struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModeldSystemSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ModeldSystemStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModeldSystemList is a list of ModeldSystems
type ModeldSystemList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModeldSystem `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModeldSystemSpec defines the desired state of ModeldSystem
type ModeldSystemSpec struct {
}

// ModeldSystemStatus is the observed state of a ModeldSystem
type ModeldSystemStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// +listType=map
	// +listMapKey=type
	//+kubebuilder:validation:Optional
	Conditions []ModeldSystemCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}
