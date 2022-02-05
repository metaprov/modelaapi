/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/catalog"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// MLFramework define the metadata about a machine learning framework
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="URL",type="string",JSONPath=".spec.url"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.version"
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description"
// +kubebuilder:resource:path=managedimages,singular=managedimage,categories={catalog,modela,all}
type ManagedImage struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ManagedImageSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

// +kubebuilder:object:root=true
// ManagedImageList is a list of pretrained models
type ManagedImageList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ManagedImage `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ManagedImageSpec is the desired state of the pretrained model
type ManagedImageSpec struct {
	// Image is the docker image of the pretrained model
	Image string `json:"image" protobuf:"bytes,1,opt,name=image"`
}

func (p *ManagedImage) Default() {
	p.ObjectMeta.Finalizers = append(p.ObjectMeta.Finalizers, catalog.GroupName)
	p.ObjectMeta.Labels = make(map[string]string)
	p.ObjectMeta.Annotations = make(map[string]string)
}

func NewManagedImage(ns string, name string, image string) *ManagedImage {
	result := &ManagedImage{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Kind = "ManagedImage"
	result.Default()
	result.Spec.Image = image
	return result
}
