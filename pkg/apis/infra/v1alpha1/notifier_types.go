package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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

/// Notifier Condition
const (
	NotifierReady NotifierConditionType = "Ready"
	NotifierSaved NotifierConditionType = "Saved"
)

// NotifierCondition describes the state of the license at a certain point.
type NotifierCondition struct {
	// Type of account condition.
	Type NotifierConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=NotifierConditionType"`
	// Status of the condition, one of True, False, Unknown.
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
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description=""
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=notifiers,singular=notifier,categories={infra,modela}
type Notifier struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              NotifierSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            NotifierStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// Is this notifier can send notification
	// +kubebuilder:default:= true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The tenant that own the notifier
	// Default to default tenant.
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef" protobuf:"varint,2,opt,name=tenantRef"`
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"varint,3,opt,name=description"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// Specify the notifier channels
	// +kubebuilder:validation:Optional
	Channels []NotificationChannelSpec `json:"channels,omitempty" protobuf:"bytes,5,opt,name=channels"`
}

// NotifierStatus is the observed state of a Notifier
type NotifierStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// The last channel status
	ChannelsStatus []NotificationChannelStatus `json:"channelsStatus,omitempty" protobuf:"bytes,3,opt,name=channelsStatus"`
	//+kubebuilder:validation:Optional
	Conditions []NotifierCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}

// Define the a specific notification channel
type NotificationChannelSpec struct {
	// Is this notifier can send notification
	// +kubebuilder:default:= true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// +kubebuilder:validation:Required
	// +kubebuilder:default:=""
	ConnectionName *string `json:"connectionName" protobuf:"bytes,2,opt,name=connectionName"`
	// Send info messages via this channel
	// +kubebuilder:default:= false
	// +kubebuilder:validation:Optional
	Info *bool `json:"info,omitempty" protobuf:"varint,3,opt,name=info"`
	// Send error messages via this channel
	// +kubebuilder:default:= true
	// +kubebuilder:validation:Optional
	Error *bool `json:"error,omitempty" protobuf:"varint,4,opt,name=error"`
	// This channel start time.
	// +kubebuilder:validation:Optional
	From *metav1.Time `json:"from,omitempty" protobuf:"bytes,5,opt,name=from"`
	// This channel end time.
	// +kubebuilder:validation:Optional
	To *metav1.Time `json:"to,omitempty" protobuf:"bytes,6,opt,name=to"`
	// The notification destination. Can be an email if using smtp connection
	// or a slack channel.
	Destination string `json:"destination,omitempty" protobuf:"bytes,7,opt,name=destination"`
}

type NotificationChannelStatus struct {
	// The last time a message was sent on this channel
	LastMessage *metav1.Time `json:"lastMessage,omitempty" protobuf:"bytes,1,opt,name=lastMessage"`
	// In case of notification failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,2,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,3,opt,name=failureMessage"`
}
