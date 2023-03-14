package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelaSystem condition
type ModelaSystemConditionType string

// / ModelaSystem Condition
const (
	ModelaSystemReady = "Ready"
	ModelaSystemSaved = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=modelasystems,singular=modelasystem,categories={infra,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// ModelaSystem
type ModelaSystem struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelaSystemSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelaSystemStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelaSystemList is a list of ModelaSystems
type ModelaSystemList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelaSystem `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelaSystemSpec defines the desired state of a ModelaSystem
type ModelaSystemSpec struct {
	// Release describes the active version for all ManagedImages under the `modela-catalog` namespace. This release
	// version will be applied to the `tag` field of the ManagedImage specification. When changed, this will
	// force a restart of every Deployment and Job managed by Modela.
	// +kubebuilder:validation:Required
	// +required
	Release string `json:"release" protobuf:"bytes,1,opt,name=release"`

	// ImagePullPolicy indicates the ImagePullPolicy for all Jobs and Deployments managed by Modela.
	ImagePullPolicy *v1.PullPolicy `json:"imagePullPolicy" protobuf:"bytes,2,opt,name=imagePullPolicy"`

	// VaultAddress indicates the address of the Vault server Modela will use for the storage of Secrets. The Vault
	// server must be configured to authenticate all Modela service accounts at the mount path specified by VaultMountPath.
	// If empty, Modela will attempt to connect to the local Vault server installed by the Modela Operator.
	VaultAddress *string `json:"vaultAddress" protobuf:"varint,3,opt,name=vaultAddress"`

	// VaultMountPath specifies the mount path where a KVv2 secret engine is mounted
	VaultMountPath *string `json:"vaultMountPath" protobuf:"varint,4,opt,name=vaultMountPath"`
}

// ModelaSystemStatus is the observed state of a ModelaSystem
type ModelaSystemStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,2,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,3,opt,name=failureMessage"`

	//+kubebuilder:validation:Optional
	LastRelease string `json:"lastRelease" protobuf:"bytes,4,opt,name=lastRelease"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
