package v1alpha1

import (
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type LabConditionType string

const (
	LabNamespaceReady LabConditionType = "NamespaceReady"
	LabRbacReady      LabConditionType = "RbacReady"
	LabVolumeReady    LabConditionType = "VolumeReady"
)

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

type NFSVolumeSpec struct {
	// server is the hostname or IP address of the NFS server.
	// More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	Server string `json:"server" protobuf:"bytes,1,opt,name=server"`
	// path that is exported by the NFS server.
	// More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	Path string `json:"path" protobuf:"bytes,2,opt,name=path"`
}

// VolumeStorageSpec defines the specification for a persistent volume claim
type VolumeStorageSpec struct {
	// The name of an existing volume claim. When unspecified, a volume claim will be created.
	// The volume claim must exist in the same namespace as the Lab. Properties from the
	// specification (i.e. storage quantity) will not be applied to an existing claim
	VolumeClaimName *string `json:"volumeClaimName,omitempty" protobuf:"bytes,1,opt,name=volumeClaimName"`
	// The name of an existing volume. A volume claim will be created that binds to the volume
	VolumeName *string `json:"volumeName,omitempty" protobuf:"bytes,2,opt,name=volumeName"`
	// The name of the storage class belonging to the volume claim
	StorageClassName *string `json:"storageClassName,omitempty" protobuf:"bytes,3,opt,name=storageClassName"`
	// The size of the volume, in bytes, which the volume claim will request. When unspecified, default to 1Gi
	Storage *resource.Quantity `json:"storage,omitempty" protobuf:"bytes,4,opt,name=storage"`
	// NFS defines the specification to create a volume that binds to an NFS server.
	// Defining an NFS volume will allow multiple workloads to consume the volume simultaneously
	NFS *NFSVolumeSpec `json:"nfs,omitempty" protobuf:"bytes,5,opt,name=nfs"`
}

// LabSpec defines the desired state of a Lab
type LabSpec struct {
	// The user-provided description of the Lab
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
	// Limits specifies the hard resource limits that can be allocated for workloads created under the Lab
	// +kubebuilder:validation:Optional
	Limits ResourceLimitSpec `json:"limits,omitempty" protobuf:"bytes,3,opt,name=limits"`
	// PackageStorage defines the specification for a persistent volume used to store Python packages.
	// Some workloads, like LLM document ingestion, or recipes, may require external Python packages.
	// When unspecified, persistence will not be enabled for packages
	PackageStorage *VolumeStorageSpec `json:"packageStorage,omitempty" protobuf:"bytes,4,opt,name=packageStorage"`
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

	// The name of the Persistent Volume Claim belonging to the Lab
	//+kubebuilder:validation:Optional
	VolumeClaimName *string `json:"volumeClaimName,omitempty" protobuf:"varint,2,opt,name=volumeClaimName"`

	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,3,opt,name=updatedAt"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}

// ResourceLimitSpec defines the resource limits for workloads created under Lab and Serving Site namespaces
type ResourceLimitSpec struct {
	// Indicates if the resource limit is enabled
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// QuotaSpec defines the resource quota specification for the namespace
	// +kubebuilder:validation:Optional
	QuotaSpec *corev1.ResourceQuotaSpec `json:"quota,omitempty" protobuf:"bytes,2,opt,name=quota"`
	// +kubebuilder:validation:Optional
	LimitRangeSpec *corev1.LimitRangeSpec `json:"limitRange,omitempty" protobuf:"bytes,3,opt,name=limitRange"`
}
