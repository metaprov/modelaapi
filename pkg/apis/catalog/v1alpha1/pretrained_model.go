/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/apis/training"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// PretrainedModel
//==============================================================================

// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
type PretrainedModel struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PretrainedModelSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	// +optional
	Status PretrainedModelStatus `json:"status,,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// PretrainedModelList is a list of pretrained models
type PretrainedModelList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []PretrainedModel `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PrebuildModelSpec is the desired state of the pretrained model
type PretrainedModelSpec struct {
	Image string `json:"image" protobuf:"bytes,1,opt,name=image"`
}

type PretrainedModelStatus struct {
}

func (p *PretrainedModel) Default() {
	p.ObjectMeta.Finalizers = append(p.ObjectMeta.Finalizers, training.GroupName)
	p.ObjectMeta.Labels = make(map[string]string)
	p.ObjectMeta.Annotations = make(map[string]string)
}

func NewPretrainedModel(ns string, name string, image string) *PretrainedModel {
	result := &PretrainedModel{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Kind = "PretrainedModel"
	result.Default()
	result.Spec.Image = image
	return result
}
