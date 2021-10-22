package v1alpha1

import (
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

// DeploymentCondition describes the state of a deployment at a certain point.
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

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.ownerName",description="cluster owner account"
// +kubebuilder:printcolumn:name="Nodes",type="integer",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Node Class",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Gpus",type="integer",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Gpu Class",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:printcolumn:name="Connection",type="string",JSONPath=".spec.connectionName",description="virtual bucket connections"
// +kubebuilder:resource:path=virtualclusters,singular=virtualcluster,categories={infra,modela}
//A VirtualCluster defined a running kubernetes cluster with N nodes and GPU.
//The study can create or destroy virtual clusters during training.

type VirtualCluster struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualClusterSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            VirtualClusterStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

type VirtualClusterSpec struct {
	// Description is the user provided description
	//+kubebuilder:default:=""
	//+optional
	Description *string `json:"description.omitempty" protobuf:"bytes,1,opt,name=description"`
	// Nodes is the desired number of nodes
	//+kubebuilder:default:=1
	//+kubebuilder:validation:Minimum=1
	//+kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	Nodes *int32 `json:"nodes,omitempty" protobuf:"varint,2,opt,name=nodes"`
	// +kubebuilder:validation:Optional
	// NodeClassName is the class of nodes or vm
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NodeClassName *string `json:"nodeClassName,omitempty" protobuf:"bytes,3,opt,name=nodeClassName"`
	// +kubebuilder:validation:Optional
	// Gpus is the desired number of gpus
	//+kubebuilder:default:=0
	//+kubebuilder:validation:Minimum=0
	//+kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	Gpus *int32 `json:"gpus,omitempty" protobuf:"varint,4,opt,name=gpus"`
	// +kubebuilder:validation:Optional
	// GpuClassName is the The class of gpu.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	GpuClassName *string `json:"gpuClassName,omitempty" protobuf:"bytes,5,opt,name=gpuClassName"`
	// +kubebuilder:validation:Optional
	// VolumeSize is the size of the volume that would be mounted on all the node of the cluster
	//+kubebuilder:default:=0
	//+kubebuilder:validation:Minimum=0
	//+kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	VolumeSize *int32 `json:"volumeSize,omitempty" protobuf:"varint,6,opt,name=volumeSize"`
	// +kubebuilder:validation:Optional
	// Spot indicate if we should we use spot instances.
	//+kubebuilder:default:=false
	//+optional
	Spot *bool `json:"spot,omitempty" protobuf:"varint,7,opt,name=spot"`
	// ConnectionName refer to the name of the provider connection
	// +kubebuilder:default:=""
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,8,opt,name=connectionName"`
	// Owner is the account name of the owner of this cluster
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// Specify resource limits for the virtual cluster
	// +kubebuilder:validation:Optional
	Limits *ResourceLimitSpec `json:"limits,omitempty" protobuf:"bytes,10,opt,name=limits"`
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
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []VirtualClusterCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// VirtualClusterList is a list of VirtualCluster
type VirtualClusterList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []VirtualCluster `json:"items" protobuf:"bytes,2,rep,name=items"`
}
