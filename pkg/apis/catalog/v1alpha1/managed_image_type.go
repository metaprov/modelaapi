/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/catalog"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// ManagedImageRole
//==============================================================================

// +kubebuilder:validation:Enum="cloud-proxy";"trainer";"predictor";"dashboard";"workload";"prediction-router";"dataplane";"publisher";"system"
type ManagedImageRole string

const (
	CloudProxyImageRole       ManagedImageRole = "cloud-proxy"
	TrainerImageRole          ManagedImageRole = "trainer"
	PredictorImageRole        ManagedImageRole = "predictor"
	DashboardImageRole        ManagedImageRole = "dashboard"
	WorkloadImageRole         ManagedImageRole = "workload"
	DataplaneImageRole        ManagedImageRole = "dataplane"
	PublisherImageRole        ManagedImageRole = "publisher"
	SystemImageRole           ManagedImageRole = "system"
	PredictionRouterImageRole ManagedImageRole = "prediction-router"
	BatchPredictionImageRole  ManagedImageRole = "batch-prediction"
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
	// +kubebuilder:validation:Optional
	Description *string `json:"description,optional" protobuf:"bytes,1,opt,name=description"`
	// The image registry, by default use docker.io
	// +kubebuilder:default ="docker.io"
	// +kubebuilder:validation:Optional
	Registry *string `json:"registry,optional" protobuf:"bytes,2,opt,name=registry"`
	// The image repository. This is a required field
	// +kubebuilder:validation:Required
	Repository string `json:"repository,optional" protobuf:"bytes,3,opt,name=repository"`
	// The image tag. by default this is latest
	// +kubebuilder:default ="latest"
	// +kubebuilder:validation:Optional
	Tag *string `json:"tag,optional" protobuf:"bytes,4,opt,name=tag"`
	// The environment variables to use when the image start
	// +kubebuilder:validation:Optional
	Env []v1.EnvVar `json:"env,optional" protobuf:"bytes,5,rep,name=env"`
	// Is this a gpu image
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Gpu *bool `json:"gpu,optional" protobuf:"varint,6,opt,name=gpu"`
	// If true this is an active image that should be used for new training.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,optional" protobuf:"varint,7,opt,name=active"`
	// Preload the image to the cluster.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Preload *bool `json:"preload,optional" protobuf:"varint,8,opt,name=preload"`
	// Preload the image to the cluster.
	// +kubebuilder:validation:Optional
	ConnectionRef *v1.ObjectReference `json:"connectionRef,optional" protobuf:"bytes,9,opt,name=connectionRef"`
	// The base image for this image.
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Base *string `json:"base,optional" protobuf:"bytes,10,opt,name=base"`
	// The base image for this image.
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Role *ManagedImageRole `json:"role,optional" protobuf:"bytes,11,opt,name=role"`
	// The organization maintaining this image
	// +kubebuilder:default ="metaprov"
	// +kubebuilder:validation:Optional
	// Who maintain this image.
	MaintainedBy *string `json:"maintainedBy,optional" protobuf:"bytes,12,opt,name=mantainedBy"`
	// The Image home page in the registry
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	URI *string `json:"uri,optional" protobuf:"bytes,13,opt,name=uri"`
	// List of ml frameworks supported by the data container
	// +kubebuilder:validation:Optional
	Frameworks []string `json:"frameworks,omitempty" protobuf:"bytes,14,rep,name=frameworks"`
	// Libs is the list of python library supported by the data container
	// +kubebuilder:validation:Optional
	Libs []Lib `json:"libs,omitempty" protobuf:"bytes,15,rep,name=libs"`
	// OS is the name of the os
	// +kubebuilder:validation:Optional
	OS string `json:"os,omitempty" protobuf:"bytes,16,opt,name=os"`
	// OSVersion is the version of the os
	// +kubebuilder:validation:Optional
	OSVersion string `json:"osVersion,omitempty" protobuf:"bytes,17,opt,name=osVersion"`
	// If true this is an active image that should be used for new training.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Private *bool `json:"private,optional" protobuf:"varint,18,opt,name=private"`
}

func (p *ManagedImage) Default() {
	p.ObjectMeta.Finalizers = append(p.ObjectMeta.Finalizers, catalog.GroupName)
	p.ObjectMeta.Labels = make(map[string]string)
	p.ObjectMeta.Annotations = make(map[string]string)
}

func (p *ManagedImage) URL() string {
	if *p.Spec.Registry != "" {
		return fmt.Sprintf("%s/%s:%s", *p.Spec.Registry, p.Spec.Repository, *p.Spec.Tag)
	}
	return fmt.Sprintf("%s:%s", p.Spec.Repository, *p.Spec.Tag)
}

func NewManagedImage(ns string, name string, image string) *ManagedImage {
	result := &ManagedImage{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Kind = "ManagedImage"
	result.Default()
	return result
}
