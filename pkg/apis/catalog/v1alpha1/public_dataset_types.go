/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// PublicDataset represent the metadata about a public dataset
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Image",type="string",JSONPath=".spec.image"
// +kubebuilder:resource:path=publicdatasets,singular=publicdataset,categories={catalog,modeld,all}
type PublicDataset struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PublicDatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

type PublicDatasetSpec struct {
	Url string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Dataset description
	Description *string `json:"decription,omitempty" protobuf:"bytes,2,opt,name=decription"`
	// Task is the machine learning task of the public dataset
	Task *MLTask `json:"task" protobuf:"bytes,3,rep,name=task"`
	// The open ml id of the dataset
	// +kubebuilder:validation:Optional
	OpenMLID *string `json:"openmlID,omitempty" protobuf:"bytes,4,rep,name=openmlID"`
	// The URL to the actual data file or folder
	DataUrl *string `json:"dataUrl,omitempty" protobuf:"bytes,5,opt,name=dataUrl"`
	// Dataset citation
	Citation *string `json:"citation,omitempty" protobuf:"bytes,6,opt,name=citation"`
	// Number of rows in the dataset
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,7,opt,name=rows"`
	// Number of columns in the dataset
	Columns *int32 `json:"columns,omitempty" protobuf:"varint,8,opt,name=columns"`
	// The size of the dataset in bytes
	FileSize *int32 `json:"fileSize,omitempty" protobuf:"varint,9,opt,name=fileSize"`
	// The target column name
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,10,opt,name=targetColumn"`
	// indicates w
	Imbalanced *bool `json:"imbalanced,omitempty" protobuf:"bytes,11,opt,name=imbalanced"`
}

//==============================================================================
// PublicDatasetClassList
//==============================================================================

// +kubebuilder:object:root=true
// PublicDatasetList contains a list of PublicDataset
type PublicDatasetList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []PublicDataset `json:"items" protobuf:"bytes,2,rep,name=items"`
}
