package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ConnectionConditionType is the type of condition
type ConnectionConditionType string

// RegistryConnectionName Condition
const (
	ConnectionReady ConnectionConditionType = "Ready"
	ConnectionSaved ConnectionConditionType = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=connections,shortName=conn,singular=connection,categories={infra,modela}
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Provider",type="string",JSONPath=".spec.provider",description=""
// +kubebuilder:printcolumn:name="Category",type="string",JSONPath=".spec.category",description=""
// +kubebuilder:printcolumn:name="Secret",type="string",JSONPath=".spec.secretRef.name",description="",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Connection defines a connection to an external system (e.g. database, public cloud)
type Connection struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ConnectionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ConnectionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ConnectionList is a list of Connections.
type ConnectionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Connection `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ConnectionSpec defines the desired state of a Connection
type ConnectionSpec struct {
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The type of external system which the connection references
	// +kubebuilder:default:="general"
	// +kubebuilder:validation:Optional
	Category catalog.ConnectionCategory `json:"category" protobuf:"bytes,2,opt,name=category"`
	// Provider specifies the name of the provider to the external system
	// +kubebuilder:validation:Required
	// +required
	Provider catalog.ProviderName `json:"provider" protobuf:"bytes,3,opt,name=provider"`
	// SecretData contains a map of sensitive parameters relevant to the connection and their values. Modela
	// will automatically clear this map and transfer the values to Vault
	SecretData map[catalog.SecretKeyName]string `json:"secretData,omitempty" protobuf:"bytes,4,opt,name=secretData"`
	// Options contains non-sensitive options relevant to the Connection
	Options map[string]string `json:"options,omitempty" protobuf:"bytes,5,opt,name=options"`
}

// ConnectionStatus is the observed state of a Connection
type ConnectionStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
