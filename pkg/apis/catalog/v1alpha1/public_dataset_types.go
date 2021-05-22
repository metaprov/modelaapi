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
// +kubebuilder:resource:scope=Namespaced
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",description="ML task name"
// +kubebuilder:printcolumn:name="URL",type="string",JSONPath=".spec.url",description=""
// +kubebuilder:printcolumn:name="Rows",type="number",JSONPath=".spec.rows",description=""
// +kubebuilder:printcolumn:name="Columns",type="number",JSONPath=".spec.columns",description=""
// +kubebuilder:printcolumn:name="Target Column",type="string",JSONPath=".spec.targetColumn",description=""
// +kubebuilder:printcolumn:name="Imbalanced",type="string",JSONPath=".spec.imbalanced",description=""
// +kubebuilder:printcolumn:name="Age",type=date,JSONPath=`.metadata.creationTimestamp`
// +kubebuilder:resource:path=publicdatasets,singular=publicdataset,shortName="alg",categories={catalog,modeld,all}
type PublicDataset struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PublicDatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

type PublicDatasetSpec struct {
	Url string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Dataset description
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
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
	// URI of the datasource CR for this public dataset
	DatasourceCR *string `json:"datasourceCR,omitempty" protobuf:"bytes,12,opt,name=datasourceCR"`
	// URI of the dataset CR for this public dataset
	DatasetCR *string `json:"datasetCR,omitempty" protobuf:"bytes,13,opt,name=datasetCR"`
	// URI of the study CR for this public dataset
	StudyCR *string `json:"studyCR,omitempty" protobuf:"bytes,14,opt,name=studyCR"`
	// URI of the data product CR
	DataProductCR *string `json:"dataProductCR,omitempty" protobuf:"bytes,15,opt,name=dataProductCR"`
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
