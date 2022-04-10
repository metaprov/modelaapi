package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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

// LicenseCondition describes the state of the license at a certain point
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

// License represents the license key and limitations of a cluster-wide license obtained from Modela.ai
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Valid\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description=""
// +kubebuilder:printcolumn:name="Secret",type="string",JSONPath=".spec.secretRef.name",description=""
// +kubebuilder:printcolumn:name="Trial Start",type="string",JSONPath=".spec.trialStart",description=""
// +kubebuilder:printcolumn:name="Trial End",type="string",JSONPath=".spec.trialEnd",description=""
// +kubebuilder:printcolumn:name="Max Trainers",type="string",JSONPath=".spec.maxTrainers",description="",priority=1
// +kubebuilder:printcolumn:name="Max Nodes",type="string",JSONPath=".spec.maxServers",description="",priority=1
// +kubebuilder:printcolumn:name="Max Users",type="string",JSONPath=".spec.maxUsers",description="",priority=1
// +kubebuilder:printcolumn:name="Expire At",type="date",JSONPath=".spec.expireAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=licenses,singular=license,categories={infra,modela}
type License struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LicenseSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            LicenseStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// LicenseList is a list of Licenses
type LicenseList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []License `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// LicenseSpec defines the details of a License. The contents of the specification are derived from
// the actual license key, and changing the specification has no effect on the limitations of the license
type LicenseSpec struct {
	// The reference to the secret containing the license token
	// +kubebuilder:validation:Optional
	SecretRef v1.SecretReference `json:"secretRef" protobuf:"bytes,2,opt,name=secretRef"`
	// The e-mail address of the Modela.ai account which owns the license
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Email *string `json:"email,omitempty" protobuf:"bytes,4,opt,name=email"`
	// TrialStart is the start date for of the free trial period, if active
	// +kubebuilder:validation:Optional
	TrialStart *metav1.Time `json:"trialStart,omitempty" protobuf:"bytes,5,opt,name=trialStart"`
	// TrialEnd specifies when the free trial expires, if active
	// +kubebuilder:validation:Optional
	TrialEnd *metav1.Time `json:"trialEnd,omitempty" protobuf:"bytes,6,opt,name=trialEnd"`
	// MaxProducts specifies the maximum number of DataProduct across the cluster
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxProducts *int32 `json:"maxProducts,omitempty" protobuf:"varint,7,opt,name=maxProducts"`
	// MaxTrainers specifies the maximum number of parallel trainers that can be active at once
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxTrainers *int32 `json:"maxTrainers,omitempty" protobuf:"varint,8,opt,name=maxTrainers"`
	// MaxServers specifies the maximum number of Kubernetes nodes that may be utilized at once
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxServers *int32 `json:"maxServers,omitempty" protobuf:"varint,9,opt,name=maxServers"`
	// MaxUsers specifies the maximum number of Accounts that can be created across all tenants
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxUsers *int32 `json:"maxUsers,omitempty" protobuf:"varint,10,opt,name=maxUsers"`
	// MaxDataPlanes specifies the maximum number of data plane replicas that may exist at once
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxDataPlanes *int32 `json:"maxDataPlanes,omitempty" protobuf:"varint,11,opt,name=maxDataPlanes"`
	// Forecast indicates if Modela can generate forecasting models
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,12,opt,name=forecast"`
	// NLP indicates if natural language processing models are supported
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	NLP *bool `json:"nlp,omitempty" protobuf:"varint,13,opt,name=nlp"`
	// Vision indicates if computer vision models are supported
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Vision *bool `json:"vision,omitempty" protobuf:"varint,14,opt,name=vision"`
	// Chatbot indicates if chatbot models are supported
	// +kubebuilder:default:=false
	Chatbot *bool `json:"chatbot,omitempty" protobuf:"varint,15,opt,name=chatbot"`
	// The name of the license product, internal to Modela.ai
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ProductName *string `json:"productName,omitempty" protobuf:"bytes,16,opt,name=productName"`
	// The name of the license price, internal to Modela.ai
	// +kubebuilder:validation:Optional
	PriceName *string `json:"priceName,omitempty" protobuf:"bytes,17,opt,name=priceName"`
	// The date at which the license expires
	// +kubebuilder:validation:Optional
	ExpireAt *metav1.Time `json:"expireAt,omitempty" protobuf:"bytes,18,opt,name=expireAt"`
	// The reference to a Notifier resource that receives Alerts for license expiration
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,19,opt,name=notifierName"`
}

// LicenseStatus is the observed state of a License
type LicenseStatus struct {
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,1,opt,name=lastUpdated"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// In the case of failure, the License resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// In the case of failure, the License resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []LicenseCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
