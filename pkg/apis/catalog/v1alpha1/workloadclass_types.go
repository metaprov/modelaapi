package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// WorkloadClass define a template for a trainer.
// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:printcolumn:name="Image",type="string",JSONPath=".spec.image"
// +kubebuilder:resource:path=workloadclasses,singular=workloadclass,categories={catalog,modeld,all}
type WorkloadClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              WorkloadClassSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

//WorkloadClassSpec defines the specification of  a workload class.
type WorkloadClassSpec struct {
	// Image is the container image of the workload
	Image string `json:"image" protobuf:"bytes,1,opt,name=image"`
	// Tasks are the machine learning tasks supported by the image
	Tasks []MLTask `json:"tasks" protobuf:"bytes,2,rep,name=tasks,casttype=MLTask"`
	// Frameworks are the machine learning framework supported by the workload
	Frameworks MLFrameworkList `json:"frameworks,omitempty" protobuf:"bytes,3,opt,name=frameworks"`
	// Template is the Pod specification for new trainers from this workload class.
	Template *v1.PodTemplateSpec `json:"podTemplate,omitempty" protobuf:"bytes,4,opt,name=podTemplate"`
}

//==============================================================================
// WorkloadClassList
//==============================================================================

// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// TrainerList contains a list of Trainer
type WorkloadClassList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []WorkloadClass `json:"items" protobuf:"bytes,2,rep,name=items"`
}
