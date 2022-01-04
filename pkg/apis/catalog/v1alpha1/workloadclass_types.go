package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// WorkloadClass define a template for a job.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Image",type="string",JSONPath=".spec.image"
// +kubebuilder:printcolumn:name="vCpu",type="string",JSONPath=".spec.vcpu"
// +kubebuilder:printcolumn:name="Memory",type="string",JSONPath=".spec.mem"
// +kubebuilder:printcolumn:name="Gpu",type="integer",JSONPath=".spec.gpu"
// +kubebuilder:resource:path=workloadclasses,singular=workloadclass,categories={catalog,modela,all}
type WorkloadClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              WorkloadClassSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

//WorkloadClassSpec defines the specification of  a workload class.
type WorkloadClassSpec struct {
	ResourcesTemplate *ResourceSpec `json:"resourcesTemplate,omitempty" protobuf:"bytes,1,opt,name=resourcesTemplate"`
	// List of ml frameworks supported by the data container
	Frameworks []string `json:"frameworks,omitempty" protobuf:"bytes,3,rep,name=frameworks"`
	// Libs is the list of python library supported by the data container
	Libs []Lib `json:"libs,omitempty" protobuf:"bytes,4,rep,name=libs"`
	// OS is the name of the os
	OS string `json:"os,omitempty" protobuf:"bytes,5,opt,name=os"`
	// OSVersion is the version of the os
	OSVersion string `json:"osVersion,omitempty" protobuf:"bytes,6,opt,name=osVersion"`
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
