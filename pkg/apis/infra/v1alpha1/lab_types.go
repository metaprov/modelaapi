package v1alpha1

import (
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//=======
// TenantRef
// =====

// Condition
/// BucketName conditions
type LabConditionType string

/// TenantRef Condition
const (
	LabReady LabConditionType = "Ready"
	LabInDb  LabConditionType = "InDb"
)

// LabCondition describes the state of a lab at a certain point.
type LabCondition struct {
	// Type of account condition.
	Type LabConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=LabConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status corev1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +genclient
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Git SecretRepo",type="string",JSONPath=".spec.gitrepoName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=labs,singular=lab,categories={infra,modeld,all}
// +kubebuilder:subresource:status
type Lab struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status LabStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// LabSpec defines the desired state of a TenantRef
type LabSpec struct {
	// User provided description
	// Default to empty.
	// +optional
	// +kubebuilder:validation:MaxLength=256
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// Reference to the tenant owning this lab
	// Default to default tenant.
	TenantRef *corev1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,2,opt,name=tenantRef"`
	// Resource Quota
	// +optional
	QuotaSpec *corev1.ResourceQuotaSpec `json:"quotaSpec,omitempty" protobuf:"bytes,3,opt,name=quotaSpec"`
	// +optional
	LimitRangeSpec *corev1.LimitRangeSpec `json:"limitRangeSpec,omitempty" protobuf:"bytes,4,opt,name=limitRangeSpec"`
	// Optional cluster name, in case that the lab is not on the working cluster
	ClusterName *string `json:"clusterName,omitempty" protobuf:"bytes,5,opt,name=clusterName"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,6,opt,name=owner"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// LabList is a list of labs
type LabList struct {
	metav1.TypeMeta `json:",inline"`

	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +optional
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Lab `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// LabStatus is the observed state of a Lab
type LabStatus struct {
	// +optional
	Conditions []LabCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
