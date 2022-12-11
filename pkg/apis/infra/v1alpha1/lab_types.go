package v1alpha1

import (
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// LabConditionType is the condition of the lab
type LabConditionType string

// / TenantRef Condition
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

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=labs,singular=lab,categories={infra,modela,all}
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Cluster",type="string",JSONPath=".spec.clusterName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// Lab represents a single namespace where data analysis and model training workloads take place
type Lab struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LabSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status LabStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	ExternalCluster *VirtualClusterSpec `json:"externalCluster,omitempty" protobuf:"bytes,4,opt,name=externalCluster"`
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
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
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

type VirtualClusterSpec struct {
	// Indicates if the lab should run on its own virtual cluster.
	// Currently not supported
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Description is the user provided description
	//+kubebuilder:default:=""
	//+optional
	Description *string `json:"description.omitempty" protobuf:"bytes,2,opt,name=description"`
	// Nodes is the desired number of nodes
	//+kubebuilder:default:=1
	//+kubebuilder:validation:Minimum=1
	//+kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	Nodes *int32 `json:"nodes,omitempty" protobuf:"varint,3,opt,name=nodes"`
	// +kubebuilder:validation:Optional
	// NodeClassName is the class of nodes or vm
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NodeClassName *string `json:"nodeClassName,omitempty" protobuf:"bytes,4,opt,name=nodeClassName"`
	// +kubebuilder:validation:Optional
	// Gpus is the desired number of gpus
	//+kubebuilder:default:=0
	//+kubebuilder:validation:Minimum=0
	//+kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	Gpus *int32 `json:"gpus,omitempty" protobuf:"varint,5,opt,name=gpus"`
	// +kubebuilder:validation:Optional
	// GpuClassName is the The class of gpu.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	GpuClassName *string `json:"gpuClassName,omitempty" protobuf:"bytes,6,opt,name=gpuClassName"`
	// +kubebuilder:validation:Optional
	// VolumeSize is the size of the volume that would be mounted on all the node of the cluster
	//+kubebuilder:default:=0
	//+kubebuilder:validation:Minimum=0
	//+kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	VolumeSize *int32 `json:"volumeSize,omitempty" protobuf:"varint,7,opt,name=volumeSize"`
	// +kubebuilder:validation:Optional
	// Spot indicate if we should we use spot instances.
	//+kubebuilder:default:=false
	//+optional
	Spot *bool `json:"spot,omitempty" protobuf:"varint,8,opt,name=spot"`
	// ConnectionName refer to the name of the provider connection
	// +kubebuilder:default:=""
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,9,opt,name=connectionName"`
	// Owner is the account name of the owner of this cluster
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,10,opt,name=owner"`
	// Specify resource limits for the virtual cluster
	// +kubebuilder:validation:Optional
	Limits *ResourceLimitSpec `json:"limits,omitempty" protobuf:"bytes,11,opt,name=limits"`
	// The cloud region, if this cluster is created in a public cloud
	// +kubebuilder:validation:Optional
	Region *string `json:"region,omitempty" protobuf:"bytes,12,opt,name=region"`
	// The cloud AZ, if this cluster is created in a public cloud
	// +kubebuilder:validation:Optional
	Az *string `json:"az,omitempty" protobuf:"bytes,13,opt,name=az"`
	// The cluster kubernetes version
	// +kubebuilder:validation:Optional
	KubernetesVersion *string `json:"kubernetesVersion,omitempty" protobuf:"bytes,14,opt,name=kubernetesVersion"`
	// Set to true, for auto scaling cluster
	// +kubebuilder:validation:Optional
	AutoScale *bool `json:"autoscale,omitempty" protobuf:"varint,15,opt,name=autoscale"`
	// Minimum number of nodes for auto scaling
	// +kubebuilder:validation:Optional
	MinNodes *int32 `json:"minNodes,omitempty" protobuf:"varint,16,opt,name=minNodes"`
	// Maximum number of nodes for auto scaling
	// +kubebuilder:validation:Optional
	MaxNodes *int32 `json:"maxNodes,omitempty" protobuf:"varint,17,opt,name=maxNodes"`
}
