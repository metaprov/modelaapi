package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Alert condition

const (
	AlertSent  = "Sent"
	AlertSaved = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=alerts,singular=alert,categories={infra,modela}
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase",description=""
// +kubebuilder:printcolumn:name="Level",type="string",JSONPath=".spec.level",description=""
// +kubebuilder:printcolumn:name="Subject",type="string",JSONPath=".spec.subject",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.namespace",description="",priority=1
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.name",description="",priority=1
// +kubebuilder:printcolumn:name="Notifier",type="string",JSONPath=".spec.notifierName",description="",priority=1
// +kubebuilder:printcolumn:name="FiredAt",type="date",JSONPath=".status.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Alert represents temporal information about an event that occurred with a Modela custom resource
type Alert struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AlertSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status AlertStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// AlertList is a list of Alerts
// +kubebuilder:object:root=true
type AlertList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Alert `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type AlertLevel string

const (
	InfoAlertLevel  AlertLevel = "normal"
	ErrorAlertLevel AlertLevel = "error"
)

type AlertSpec struct {
	// Subject details the primary message of the Alert
	// +kubebuilder:default:=""
	Subject string `json:"subject,omitempty" protobuf:"bytes,1,opt,name=subject"`
	// Level specifies the significance of the Alert, which can be normal, warning, or error
	// +kubebuilder:default:="normal"
	Level *AlertLevel `json:"level,omitempty" protobuf:"bytes,2,opt,name=level"`
	// EntityRef references the custom resource relevant to the Alert
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,3,opt,name=entityRef"`
	// Owner references the name of the Account which owns the Alert
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// Fields defines additional key-value information about the event
	// +kubebuilder:validation:Optional
	Fields map[string]string `json:"fields,omitempty" protobuf:"bytes,5,opt,name=fields"`
	// URL specifies a link relevant to the subject
	// +kubebuilder:validation:Optional
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
	// Image specifies the link to an image relevant to the subject
	// +kubebuilder:validation:Optional
	Image *string `json:"image,omitempty" protobuf:"bytes,7,opt,name=image"`
	// Notification defines to configuration to forward the Alert to an external Notifier
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,8,opt,name=notification"`
}

// AlertStatus is the observed state of an Alert
type AlertStatus struct {
	// The time when the Alert was fired
	// +kubebuilder:validation:Optional
	FiredAt *metav1.Time `json:"firedAt" protobuf:"bytes,2,opt,name=firedAt"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,4,opt,name=updatedAt"`
	// In the case of failure, the Alert resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,5,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}
