package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type AlertPhase string

const (
	AlertPhasePending AlertPhase = "Pending"
	AlertPhaseSending AlertPhase = "Sending"
	AlertPhaseSent    AlertPhase = "Sent"
)

// Alert condition
type AlertConditionType string

/// Alert Condition
const (
	AlertSent  AlertConditionType = "Sent"
	AlertSaved AlertConditionType = "Saved"
)

// AlertCondition describes the state of the license at a certain point.
type AlertCondition struct {
	// Type of account condition.
	Type AlertConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=AlertConditionType"`
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
// +kubebuilder:printcolumn:name="Level",type="string",JSONPath=".spec.level",description=""
// +kubebuilder:printcolumn:name="Subject",type="string",JSONPath=".spec.subject",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.Name",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.Namespace",description=""
// +kubebuilder:printcolumn:name="At",type="date",JSONPath=".status.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=alerts,singular=alert,categories={infra,modeld}
type Alert struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AlertSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            AlertStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// AlertList is a list of Alerts
type AlertList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Alert `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type AlertLevel string

const (
	Normal  AlertLevel = "normal"
	Warning AlertLevel = "warning "
	Error   AlertLevel = "error"
	Failure AlertLevel = "failure"
)

// AlertSpec defines the desired state of Alert
type AlertSpec struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Subject *string `json:"subject,omitempty" protobuf:"bytes,1,opt,name=subject"`
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Message *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Scopes is the list of scopes for this token.
	Level *AlertLevel `json:"level,omitempty" protobuf:"bytes,3,opt,name=level"`
	// The subject entity
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,4,opt,name=entityRef"`
	// +kubebuilder:default:=""
	// NotifierName is the name of the notifier used to fire the alert.
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,5,opt,name=notifierName"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,6,opt,name=owner"`
}

// AlertStatus is the observed state of a Alert
type AlertStatus struct {
	// Phase is the phase of the model
	// +kubebuilder:validation:Optional
	Phase AlertPhase `json:"phase" protobuf:"bytes,1,opt,name=phase"`
	// The time when the alert was fired
	// +kubebuilder:validation:Optional
	At metav1.Time `json:"at" protobuf:"bytes,2,opt,name=at"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	//+optional
	Conditions []AlertCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
}
