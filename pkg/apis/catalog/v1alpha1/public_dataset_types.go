/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// PublicDataset
//==============================================================================

// PublicDataset represent the metadata about a public dataset
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Image",type="string",JSONPath=".spec.image"
// +kubebuilder:resource:path=publicdatasets,singular=publicdataset,categories={catalog,modeld,all}
type PublicDataset struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PublicDatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

type PublicDatasetSpec struct {
	Url string `json:"url" protobuf:"bytes,1,opt,name=image"`
	// Task is the machine learning task of the public dataset
	Task         MLTask `json:"task" protobuf:"bytes,2,rep,name=task,casttype=MLTask"`
	ID           string `json:"id" protobuf:"bytes,3,rep,name=id"`
	ExternalName string `json:"externalName" protobuf:"bytes,4,opt,name=externalName"`
	DataUrl      string `json:"dataUrl" protobuf:"bytes,5,opt,name=dataUrl"`
}

//==============================================================================
// PublicDatasetClassList
//==============================================================================

// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// PublicDatasetList contains a list of PublicDataset
type PublicDatasetList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []PublicDataset `json:"items" protobuf:"bytes,2,rep,name=items"`
}
