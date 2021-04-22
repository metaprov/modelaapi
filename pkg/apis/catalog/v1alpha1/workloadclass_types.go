package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// WorkloadClass define a template for a job.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Image",type="string",JSONPath=".spec.image"
// +kubebuilder:printcolumn:name="vCpu",type="string",JSONPath=".spec.vcpu"
// +kubebuilder:printcolumn:name="Memory",type="string",JSONPath=".spec.mem"
// +kubebuilder:printcolumn:name="Gpu",type="integer",JSONPath=".spec.gpu"
// +kubebuilder:resource:path=workloadclasses,singular=workloadclass,categories={catalog,modeld,all}
type WorkloadClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              WorkloadClassSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

//WorkloadClassSpec defines the specification of  a workload class.
type WorkloadClassSpec struct {
	// DataImage is the container image used to data tasks
	// +kubebuilder:validation:Required
	DataImage string `json:"dataImage" protobuf:"bytes,1,opt,name=dataImage"`
	// ControlImage is the container image used for control
	// +kubebuilder:validation:Required
	ControlImage string `json:"controlImage" protobuf:"bytes,2,opt,name=controlImage"`
	// TrainerImage is the image used for training models
	// +kubebuilder:validation:Required
	TrainerImage string `json:"trainerImage" protobuf:"bytes,3,opt,name=trainerImage"`
	// PublisherImage is the image used for publishing models
	// +kubebuilder:validation:Required
	PublisherImage string `json:"publisherImage" protobuf:"bytes,4,opt,name=publisherImage"`
	// Vcpu is the number of cpu
	// +kubebuilder:validation:Optional
	Vcpu *float32 `json:"vcpu" protobuf:"bytes,5,opt,name=vcpu"`
	// Memory is the amount of memory offered by thie template
	// +kubebuilder:validation:Optional
	Mem *resource.Quantity `json:"mem" protobuf:"bytes,6,opt,name=mem"`
	// Number of gpus of this workload
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Gpu *int32 `json:"gpu" protobuf:"varint,7,opt,name=gpu"`
	// Template is the Pod specification for new trainers from this workload class.
	// +kubebuilder:validation:Required
	Template *v1.PodTemplateSpec `json:"podTemplate,omitempty" protobuf:"bytes,8,opt,name=podTemplate"`
	// List of ml frameworks supported by the data container
	Frameworks []string `json:"frameworks,omitempty" protobuf:"bytes,9,opt,name=frameworks"`
	// Libs is the list of python library supported by the data container
	Libs []Lib `json:"libs,omitempty" protobuf:"bytes,10,opt,name=libs"`
	// OS is the name of the os
	OS string `json:"os,omitempty" protobuf:"bytes,11,opt,name=os"`
	// OSVersion is the version of the os
	OSVersion string `json:"osVersion,omitempty" protobuf:"bytes,12,opt,name=osVersion"`
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
