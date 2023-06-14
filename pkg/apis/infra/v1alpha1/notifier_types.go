package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type NotifierType string

const (
	EmailNotifierType   NotifierType = "email"
	SlackNotifierType   NotifierType = "slack"
	DiscordNotifierType NotifierType = "discord"
	WebhookNotifierType NotifierType = "webhook"
)

// Notifier condition
type NotifierConditionType string

// / Notifier Condition
const (
	NotifierReady NotifierConditionType = "Ready"
	NotifierSaved NotifierConditionType = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=notifiers,singular=notifier,categories={infra,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description=""
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// The Notifier resource
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

// NotifierSpec defines the desired state of a Notifier
type NotifierSpec struct {
	// Indicates if the Notifier will send notifications
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The reference to the tenant which the object exists under
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef" protobuf:"bytes,2,opt,name=tenantRef"`
	// The user provided description of the object
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"varint,3,opt,name=description"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// Channels specifies the list of notification channels that the Notifier will forward the information from Alerts to.
	// Each channel specifies a Connection resource for an external messaging system, and a destination channel within the system
	// to forward the information from Alerts to
	// +kubebuilder:validation:Optional
	Channels []NotificationChannelSpec `json:"channels,omitempty" protobuf:"bytes,5,rep,name=channels"`
}

// NotifierStatus is the observed state of a Notifier
type NotifierStatus struct {
	// ObservedGeneration is the last generation that was reconciled by Modela
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// UpdatedAt specifies the last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// ChannelsStatus describes the status of each notification channel (per individual Connection)
	//+kubebuilder:validation:Optional
	ChannelsStatus []NotificationChannelStatus `json:"channelsStatus,omitempty" protobuf:"bytes,3,rep,name=channelsStatus"`
	//+kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}

// NotificationChannelSpec describes a single Connection to an external messaging system and a destination channel within the system
type NotificationChannelSpec struct {
	// Indicates if the channel is enabled to send forwarded Alerts
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The name of the Connection resource which exists in the same tenant as the parent Notifier
	// +kubebuilder:validation:Required
	// +kubebuilder:default:=""
	ConnectionName *string `json:"connectionName" protobuf:"bytes,2,opt,name=connectionName"`
	// Indicates if the channel will send Alerts with the `info` level
	// +kubebuilder:default:= false
	// +kubebuilder:validation:Optional
	Info *bool `json:"info,omitempty" protobuf:"varint,3,opt,name=info"`
	// Indicates if the channel will send Alerts with the `error` level
	// +kubebuilder:default:= true
	// +kubebuilder:validation:Optional
	Error *bool `json:"error,omitempty" protobuf:"varint,4,opt,name=error"`
	// The destination channel that exists in the external system that ConnectionName references.
	// For example, a Slack channel name, a Discord channel ID, or an e-mail address
	Destination string `json:"destination,omitempty" protobuf:"bytes,7,opt,name=destination"`
}

type NotificationChannelStatus struct {
	// The name of the Connection resource which exists in the same tenant as the parent Notifier
	// +kubebuilder:validation:Required
	// +kubebuilder:default:=""
	ConnectionName *string `json:"connectionName" protobuf:"bytes,2,opt,name=connectionName"`
	// The last time a message was sent on this channel
	LastMessageAt *metav1.Time `json:"lastMessageAt,omitempty" protobuf:"bytes,1,opt,name=lastMessageAt"`
	// In the case of failure, the Notifier resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,3,opt,name=failureMessage"`
}
