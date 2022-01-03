package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//============
// License
// ===========

// LicenseType is the type of license
// +kubebuilder:validation:Enum="lite";"pro";"enterprise"
type LicenseType string

const (
	Lite       LicenseType = "lite"
	Pro        LicenseType = "pro"
	Enterprise LicenseType = "enterprise"
)

type LicenseConditionType string

/// License Condition
const (
	LicenseValid LicenseConditionType = "Valid"
	LicenseSaved LicenseConditionType = "Saved"
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

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Valid\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description=""
// +kubebuilder:printcolumn:name="Secret",type="string",JSONPath=".spec.secretName",description=""
// +kubebuilder:printcolumn:name="Trial Start",type="string",JSONPath=".spec.trialStart",description=""
// +kubebuilder:printcolumn:name="Trial End",type="string",JSONPath=".spec.trialEnd",description=""
// +kubebuilder:printcolumn:name="Max Trainers",type="string",JSONPath=".spec.maxTrainers",description=""
// +kubebuilder:printcolumn:name="Max Nodes",type="string",JSONPath=".spec.maxServers",description=""
// +kubebuilder:printcolumn:name="Max Users",type="string",JSONPath=".spec.maxUsers",description=""
// +kubebuilder:printcolumn:name="Expire At",type="date",JSONPath=".status.expireAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=licenses,singular=license,categories={infra,modela}
// License is an abstraction that represent the cluster wide license
// as obtained from Modela. The license is store inside a a secret
type License struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LicenseSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            LicenseStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

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
	// +kubebuilder:validation:Optional
	// Default to default tenant.
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,opt,name=tenantRef"`
	// The secret containing the license token
	// +kubebuilder:validation:Optional
	SecretRef v1.SecretReference `json:"secretRef" protobuf:"bytes,2,opt,name=secretRef"`
	// Owner is the account owning this license
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Email *string `json:"email,omitempty" protobuf:"bytes,4,opt,name=email"`
	// TrialStart is the start date for free trial
	// +kubebuilder:validation:Optional
	TrialStart *metav1.Time `json:"trialStart,omitempty" protobuf:"bytes,5,opt,name=trialStart"`
	// TrialEnd when free trial end
	// +kubebuilder:validation:Optional
	TrialEnd *metav1.Time `json:"trialEnd,omitempty" protobuf:"bytes,6,opt,name=trialEnd"`
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxProducts *int32 `json:"maxProducts,omitempty" protobuf:"varint,7,opt,name=maxProducts"`
	// MaxTrainers is max number of trainers
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxTrainers *int32 `json:"maxTrainers,omitempty" protobuf:"varint,8,opt,name=maxTrainers"`
	// MaxServers is the max number of worker nodes
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxServers *int32 `json:"maxServers,omitempty" protobuf:"varint,9,opt,name=maxServers"`
	// MaxUsers is the max number of active accounts
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxUsers *int32 `json:"maxUsers,omitempty" protobuf:"varint,10,opt,name=maxUsers"`
	// max data planes
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxDataPlanes *int32 `json:"maxDataPlanes,omitempty" protobuf:"varint,11,opt,name=maxDataPlanes"`
	// Forcast denote if forecast feature supported
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,12,opt,name=forecast"`
	// NLP is nlp feature supported
	// +kubebuilder:validation:Optional
	NLP *bool `json:"nlp,omitempty" protobuf:"varint,13,opt,name=nlp"`
	// Is vision feature supported
	// +kubebuilder:validation:Optional
	Vision *bool `json:"vision,omitempty" protobuf:"varint,14,opt,name=vision"`
	// Is chatbot feature supported
	Chatbot *bool `json:"chatbot,omitempty" protobuf:"varint,15,opt,name=chatbot"`
	// The product name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ProductName *string `json:"productName,omitempty" protobuf:"bytes,16,opt,name=productName"`
	// The price name
	// +kubebuilder:validation:Optional
	PriceName *string `json:"priceName,omitempty" protobuf:"bytes,17,opt,name=priceName"`
	// When the license expire
	// +kubebuilder:validation:Optional
	ExpireAt *metav1.Time `json:"expireAt,omitempty" protobuf:"bytes,18,opt,name=expireAt"`
	// NotifierName is a reference to a notifier to receive the license expiration notification
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,19,opt,name=notifierName"`
}

// LicenseStatus is the observed state of a License
type LicenseStatus struct {
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,1,opt,name=lastUpdated"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []LicenseCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}
