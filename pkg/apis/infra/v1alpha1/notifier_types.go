package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Notifier condition
type NotifierConditionType string

/// Notifier Condition
const (
	NotifierReady NotifierConditionType = "Ready"
	NotifierInDb  NotifierConditionType = "InDb"
)

// NotifierCondition describes the state of the license at a certain point.
type NotifierCondition struct {
	// Type of account condition.
	Type NotifierConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=NotifierConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +genclient
// +kubebuilder:subresource:status
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=notifiers,singular=notifier,categories={infra,modeld}
// +kubebuilder:object:root=true
type Notifier struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              NotifierSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status NotifierStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// NotifierList is a list of Notifiers
type NotifierList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Notifier `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// NotifierSpec defines the desired state of Notifier
type NotifierSpec struct {
	// The tenant that own the notifier
	// Default to default tenant.
	// +optional
	TenantRef *v1.ObjectReference `json:"tenantRef" protobuf:"bytes,1,opt,name=tenantRef"`
	// User provided description
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Address within the provider to send the notifiaction to.
	To string `json:"to,omitempty" protobuf:"bytes,4,opt,name=to"`
	// The sender address. For example, from email.
	From string `json:"from,omitempty" protobuf:"bytes,5,opt,name=from"`
	// required
	ConnectionName string `json:"connectionName" protobuf:"bytes,6,opt,name=connectionName"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
}

// NotifierStatus is the observed state of a Notifier
type NotifierStatus struct {
	//+optional
	Conditions []NotifierCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
