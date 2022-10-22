package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ApiToken condition
type ApiTokenConditionType string

/// ApiToken Condition
const (
	ApiTokenReady ApiTokenConditionType = "Ready"
	ApiTokenSaved ApiTokenConditionType = "Saved"
)

// ApiTokenCondition describes the state of the license at a certain point.
type ApiTokenCondition struct {
	// Type of account condition.
	Type ApiTokenConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ApiTokenConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human-readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=apitokens,singular=apitoken,categories={infra,modela}
type ApiToken struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ApiTokenSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ApiTokenStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ApiTokenList is a list of ApiTokens
type ApiTokenList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ApiToken `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ApiTokenSpec defines the desired state of ApiToken
type ApiTokenSpec struct {
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// Scopes is the list of scopes for this token.
	Scopes []Scope `json:"scopes,omitempty" protobuf:"bytes,2,rep,name=scopes"`
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
}

// ApiTokenStatus is the observed state of a ApiToken
type ApiTokenStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ApiTokenCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}

type Scope struct {
	// +kubebuilder:validation:Optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// +kubebuilder:validation:Optional
	Actions []ScopeVerb `json:"actions,omitempty" protobuf:"bytes,2,rep,name=actions"`
}

type ScopeVerb string

const (
	ScopeVerbRead  ScopeVerb = "read"
	ScopeVerbWrite ScopeVerb = "write"
	ScopeVerbList  ScopeVerb = "list"
)
