package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// WorkloadClass define a template for a job.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Age",type=date,JSONPath=`.metadata.creationTimestamp`
// +kubebuilder:resource:path=workloadclasses,singular=workloadclass,categories={catalog,modela,all}
type WorkloadClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              WorkloadClassSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

//WorkloadClassSpec defines the specification of  a workload class.
type WorkloadClassSpec struct {
	ResourcesTemplate *ResourceSpec `json:"resourcesTemplate,omitempty" protobuf:"bytes,1,opt,name=resourcesTemplate"`
	// Reference to the managed image
	CpuImage v1.LocalObjectReference `json:"cpuImage,omitempty" protobuf:"bytes,2,opt,name=cpuImage"`
	// Reference to the managed image
	GpuImage v1.LocalObjectReference `json:"gpuImage,omitempty" protobuf:"bytes,3,opt,name=gpuImage"`
}

//==============================================================================
// WorkloadClassList
//==============================================================================

// +kubebuilder:object:root=true
// TrainerList contains a list of Trainer
type WorkloadClassList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []WorkloadClass `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type Lib struct {
	Name    string `json:"name,omitempty" protobuf:"bytes,1,opt,name=frameworks"`
	Version string `json:"version,omitempty" protobuf:"bytes,2,opt,name=version"`
}
