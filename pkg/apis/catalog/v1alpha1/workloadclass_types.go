package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// TrainerRef
//==============================================================================
// +genclient
// +genclient:noStatus

// Trainer class define a template for a trainer.
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

type WorkloadClassSpec struct {
	Image      string          `json:"image" protobuf:"bytes,1,opt,name=image"`
	Tasks      []MLTask        `json:"tasks" protobuf:"bytes,2,rep,name=tasks,casttype=MLTask"`
	Frameworks MLFrameworkList `json:"frameworks,omitempty" protobuf:"bytes,3,opt,name=frameworks"`
	// The Pod specification for new trainers from this workload class.
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
