package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//============
// License
// ===========

// The type if license
// +kubebuilder:validation:Enum="lite";"pro";"enterprise"
type LicenseType string

const (
	Lite       LicenseType = "lite"
	Pro        LicenseType = "pro"
	Enterprise LicenseType = "enterprise"
)

// License condition
type LicenseConditionType string

/// License Condition
const (
	LicenseReady LicenseConditionType = "Ready"
)

// LicenseCondition describes the state of the license at a certain point.
type LicenseCondition struct {
	// Type of condition.
	Type LicenseConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=LicenseConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +genclient
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type",description=""
// +kubebuilder:printcolumn:name="Expire At",type="date",JSONPath=".status.expireAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=licenses,singular=license,categories={infra,modeld}
// License is an abstraction that represent the cluster wide license
// as obtained from Modeld. The license is store inside a a secret
type License struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LicenseSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status LicenseStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// LicenseList is a list of License
type LicenseList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []License `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// LicenseSpec defines the desired state of License
type LicenseSpec struct {
	// Reference to the tenant owning this license
	// Default to default tenant.
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,opt,name=tenantRef"`
	// The secret containing the license token
	// Required.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// +optional
	SecretName string `json:"secretName" protobuf:"bytes,2,opt,name=secretName"`

	// +optional
	Owner string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
	// +optional
	Email string `json:"email,omitempty" protobuf:"bytes,4,opt,name=email"`
	// Start date for free trial
	// +optional
	TrialStart *metav1.Time `json:"trialStart,omitempty" protobuf:"bytes,5,opt,name=trialStart"`
	// when free trial end
	// +optional
	TrialEnd *metav1.Time `json:"trialEnd,omitempty" protobuf:"bytes,6,opt,name=trialEnd"`

	// +optional
	MaxProducts int32 `json:"maxProducts,omitempty" protobuf:"varint,7,opt,name=maxProducts"`

	// max number of trainers
	// +optional
	MaxTrainers int32 `json:"maxTrainers,omitempty" protobuf:"varint,8,opt,name=maxTrainers"`

	// the max number of servers.
	// +optional
	MaxServers int32 `json:"maxServers,omitempty" protobuf:"varint,9,opt,name=maxServers"`

	// max users
	// +optional
	MaxUsers int32 `json:"maxUsers,omitempty" protobuf:"varint,10,opt,name=maxUsers"`

	// max data planes
	// +optional
	MaxDataPlanes int32 `json:"maxDataPlanes,omitempty" protobuf:"varint,11,opt,name=maxDataPlanes"`

	// Is forecast feature supported
	// +optional
	Forecast bool `json:"forecast,omitempty" protobuf:"bytes,12,opt,name=forecast"`

	// Is nlp feature supported
	// +optional
	Nlp bool `json:"nlp,omitempty" protobuf:"bytes,13,opt,name=nlp"`

	// Is vision feature supported
	// +optional
	Vision bool `json:"vision,omitempty" protobuf:"bytes,14,opt,name=vision"`

	// The product name
	// +optional
	ProductName string `json:"productName,omitempty" protobuf:"bytes,15,opt,name=productName"`

	// The price name
	// +optional
	PriceName string `json:"priceName,omitempty" protobuf:"bytes,16,opt,name=priceName"`
	// When the license expire
	ExpireAt *metav1.Time `json:"expireAt,omitempty" protobuf:"bytes,17,opt,name=expireAt"`
	// a notifier to receive the license expiration notification
	// +optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,18,opt,name=notifierName"`
}

// LicenseStatus is the observed state of a License
type LicenseStatus struct {
	// Represents the latest available observations of a license state.
	//+optional
	Conditions []LicenseCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
