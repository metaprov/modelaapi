package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

const (
	POOL_PREFIX = "pool"
)

type ResourceClassType string

//==============================================================================
// VirtualCluster
//==============================================================================

/// ServingSiteName site condition
type VirtualClusterConditionType string

/// ServingSite Condition
const (
	VirtualClusterReady VirtualClusterConditionType = "Ready"
	VirtualClusterInDb  VirtualClusterConditionType = "InDb"
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

// +genclient
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=virtualclusters,singular=virtualcluster,categories={infra,modeld}
//A VirtualCluster defined a running kubernetes cluster with N nodes and GPU.
//The study can create or destroy virtual clusters during training.

type VirtualCluster struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              VirtualClusterSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status VirtualClusterStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

type VirtualClusterSpec struct {
	//+kubebuilder:default=""
	//+optional
	Description *string `json:"description" protobuf:"bytes,1,opt,name=description"`
	// The desired number of nodes
	//+kubebuilder:default=1
	//+kubebuilder:validation:Minimum=1
	//+kubebuilder:validation:Maximum=10
	// +optional
	Nodes *int32 `json:"nodes,omitempty" protobuf:"varint,2,opt,name=nodes"`
	// The class of nodes or vm
	// +optional
	NodeClassName *string `json:"nodeClassName,omitempty" protobuf:"bytes,3,opt,name=nodeClassName"`
	// The desired number of gpus
	//+kubebuilder:default=0
	//+kubebuilder:validation:Minimum=0
	//+kubebuilder:validation:Maximum=10
	// +optional
	Gpus *int32 `json:"gpus,omitempty" protobuf:"varint,4,opt,name=gpus"`
	// The class of gpu.
	// +optional
	GpuClassName *string `json:"gpuClassName,omitempty" protobuf:"bytes,5,opt,name=gpuClassName"`
	// Volume, if needed. The volume is monuted on all nodes.
	//+kubebuilder:default=0
	//+kubebuilder:validation:Minimum=0
	//+kubebuilder:validation:Maximum=10
	// +optional
	VolumeSize *int32 `json:"volumeSize,omitempty" protobuf:"varint,6,opt,name=volumeSize"`
	// Should we use spot instances.
	//+kubebuilder:default=false
	//+optional
	Spot *bool `json:"spot,omitempty" protobuf:"bytes,7,opt,name=spot"`
	// Name of the provider connection
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,8,opt,name=connectionName"`
	// the account name of the owner of this cluster
	//+kubebuilder:default=""
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
}

type VirtualClusterStatus struct {
	//+optional
	AvailableNodes *int32 `json:"availableNodes" protobuf:"varint,1,opt,name=availableNodes"`
	// Number of available Gpus
	//+optional
	AvailableGpus *int32 `json:"availableGpus" protobuf:"varint,2,opt,name=availableGpus"`
	//+optional
	Conditions []VirtualClusterCondition `json:"conditions,omitempty" protobuf:"bytes,3,rep,name=conditions"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// VirtualClusterList is a list of VirtualCluster
type VirtualClusterList struct {
	metav1.TypeMeta `json:",inline"`

	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +optional
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []VirtualCluster `json:"items" protobuf:"bytes,2,rep,name=items"`
}
