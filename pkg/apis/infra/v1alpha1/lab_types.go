package v1alpha1

import (
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// LabConditionType is the condition of the lab
type LabConditionType string

/// TenantRef Condition
const (
	LabReady LabConditionType = "Ready"
	LabSaved LabConditionType = "Saved"
)

// LabCondition describes the state of a Lab at a certain point
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

// Lab represents a single namespace where data analysis and model training workloads take place
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Cluster",type="string",JSONPath=".spec.clusterName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=labs,singular=lab,categories={infra,modela,all}
// +kubebuilder:subresource:status
type Lab struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            LabStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// LabSpec defines the desired state of a Lab
type LabSpec struct {
	// The user-provided description of the Lab
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// +kubebuilder:validation:Optional
	// The reference to the tenant which the object exists under
	TenantRef *corev1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,2,opt,name=tenantRef"`
	// Limits specifies the hard resource limits that can be allocated for workloads created under the Lab
	// +kubebuilder:validation:Optional
	Limits ResourceLimitSpec `json:"limits,omitempty" protobuf:"bytes,3,opt,name=limits"`
	// ClusterName is the name of a VirtualCluster that exists under the same tenant as the object. If specified, Jobs
	// assigned to the Lab will be executed inside the cluster (currently not implemented)
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	ClusterName *string `json:"clusterName,omitempty" protobuf:"bytes,4,opt,name=clusterName"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
}

// +kubebuilder:object:root=true
// LabList is the list of Labs
type LabList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Lab `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// LabStatus is the observed state of a Lab
type LabStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []LabCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}

// ResourceLimitSpec defines the resource limits for workloads created under Lab and ServingSite namespaces
type ResourceLimitSpec struct {
	// Indicates if the resource limit is enabled
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The maximum quantity of memory that can be consumed under the namespace
	// +kubebuilder:validation:Optional
	MaxMem *resource.Quantity `json:"maxMem,omitempty" protobuf:"bytes,2,opt,name=maxMem"`
	// The maximum amount of CPU that can be consumed under the namespace
	// +kubebuilder:validation:Optional
	MaxCpu *resource.Quantity `json:"maxCpu,omitempty" protobuf:"bytes,3,opt,name=maxCpu"`
	// The maximum number of pods that can be created under the namespace
	// +kubebuilder:validation:Optional
	MaxPods *int32 `json:"maxPods,omitempty" protobuf:"varint,4,opt,name=maxPods"`
	// The maximum number of persistent volume claims that can be created under the namespace
	// +kubebuilder:validation:Optional
	MaxPvc *int32 `json:"maxPvc,omitempty" protobuf:"varint,5,opt,name=maxPvc"`
	// QuotaSpec defines the resource quota specification for the namespace
	// +kubebuilder:validation:Optional
	QuotaSpec *corev1.ResourceQuotaSpec `json:"quota,omitempty" protobuf:"bytes,6,opt,name=quota"`
	// +kubebuilder:validation:Optional
	LimitRangeSpec *corev1.LimitRangeSpec `json:"limitRange,omitempty" protobuf:"bytes,7,opt,name=limitRange"`
}
