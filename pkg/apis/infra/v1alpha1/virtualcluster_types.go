package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

const (
	POOL_PREFIX = "pool"
)

type ResourceClassType string

type VirtualClusterConditionType string

/// ServingSite Condition
const (
	VirtualClusterReady VirtualClusterConditionType = "Ready"
	VirtualClusterSaved VirtualClusterConditionType = "Saved"
)

// VirtualClusterCondition describes the state of a virtual cluster at a certain point.
type VirtualClusterCondition struct {
	// Type of account condition.
	Type VirtualClusterConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=VirtualClusterConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
	// Represents the latest available observations of a serving site state.
}

// VirtualCluster defined a running kubernetes cluster with N nodes and GPU.
//The study can create or destroy virtual clusters during training.
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.ownerName",description="cluster owner account"
// +kubebuilder:printcolumn:name="Nodes",type="integer",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Node Class",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Gpus",type="integer",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Gpu Class",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Connection",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:resource:path=virtualclusters,singular=virtualcluster,categories={infra,modela}
type VirtualCluster struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualClusterSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status VirtualClusterStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

type VirtualClusterSpec struct {
	// The owner of the virtual bucket
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,name=tenantRef"`
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
	// Auto Scale specification
	// +kubebuilder:validation:Optional
	AutoScale VirtualClusterAutoScaleSpec `json:"autoScale,omitempty" protobuf:"bytes,15,opt,name=autoScale"`
}

type VirtualClusterStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// +kubebuilder:validation:Minimum=0
	//+optional
	AvailableNodes *int32 `json:"availableNodes" protobuf:"varint,2,opt,name=availableNodes"`
	// Number of available Gpus
	// +kubebuilder:validation:Minimum=0
	//+optional
	AvailableGpus *int32 `json:"availableGpus" protobuf:"varint,3,opt,name=availableGpus"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []VirtualClusterCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// VirtualClusterList is a list of VirtualCluster
type VirtualClusterList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []VirtualCluster `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type VirtualClusterAutoScaleSpec struct {
	// Is auto scaling enabled
	//+kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Min number of nodes
	//+kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Min *int32 `json:"min,omitempty" protobuf:"varint,2,opt,name=min"`
	// Max number of nodes
	//+kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Max *int32 `json:"max,omitempty" protobuf:"varint,3,opt,name=max"`
}
