/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +genclient
// +kubebuilder:object:root=true
// +kubebuilder:resource:path=publicdatasets,singular=publicdataset,categories={catalog,modela,all}
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",description="ML task name"
// +kubebuilder:printcolumn:name="URL",type="string",JSONPath=".spec.url",description="",priority=1
// +kubebuilder:printcolumn:name="Rows",type="number",JSONPath=".spec.rows",description=""
// +kubebuilder:printcolumn:name="Columns",type="number",JSONPath=".spec.columns",description=""
// +kubebuilder:printcolumn:name="Target",type="string",JSONPath=".spec.targetColumn",description=""
// +kubebuilder:printcolumn:name="Imbalanced",type="string",JSONPath=".spec.imbalanced",description="",priority=1
// +kubebuilder:printcolumn:name="Age",type=date,JSONPath=`.metadata.creationTimestamp`
// PublicDataset represent the metadata about a public dataset
type PublicDataset struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PublicDatasetSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

type PublicDatasetSpec struct {
	Url string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Entity description
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Task is the machine learning task of the public dataset
	Task *MLTask `json:"task" protobuf:"bytes,3,opt,name=task"`
	// The open ml id of the dataset
	// +kubebuilder:validation:Optional
	// +kubebuilder:default =""
	OpenMLID *string `json:"openMLID,omitempty" protobuf:"bytes,4,opt,name=openMLID"`
	// The URL to the actual data file or folder
	// +kubebuilder:validation:Optional
	// +kubebuilder:default =""
	DataUrl *string `json:"dataUrl,omitempty" protobuf:"bytes,5,opt,name=dataUrl"`
	// Entity citation
	// +kubebuilder:validation:Optional
	// +kubebuilder:default =""
	Citation *string `json:"citation,omitempty" protobuf:"bytes,6,opt,name=citation"`
	// Number of rows in the dataset
	// +kubebuilder:validation:Optional
	// +kubebuilder:default := 0
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,7,opt,name=rows"`
	// Number of columns in the dataset
	// +kubebuilder:validation:Optional
	// +kubebuilder:default := 0
	Columns *int32 `json:"columns,omitempty" protobuf:"varint,8,opt,name=columns"`
	// +kubebuilder:validation:Optional
	// The size of the dataset in bytes
	// +kubebuilder:default := 0
	FileSize *int32 `json:"fileSize,omitempty" protobuf:"varint,9,opt,name=fileSize"`
	// The target column name
	// +kubebuilder:default =""
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,10,opt,name=targetColumn"`
	// The target column name
	// +kubebuilder:default =""
	Industry *string `json:"industry,omitempty" protobuf:"bytes,11,opt,name=industry"`
	// +kubebuilder:default = false
	Imbalanced *bool `json:"imbalanced,omitempty" protobuf:"varint,12,opt,name=imbalanced"`
	// URI of the datasource CR for this public dataset
	// +kubebuilder:default =""
	DatasourceCR *string `json:"datasourceCR,omitempty" protobuf:"bytes,13,opt,name=datasourceCR"`
	// URI of the dataset CR for this public dataset
	// +kubebuilder:default =""
	DatasetCR *string `json:"datasetCR,omitempty" protobuf:"bytes,14,opt,name=datasetCR"`
	// URI of the study CR for this public dataset
	// +kubebuilder:default =""
	StudyCR *string `json:"studyCR,omitempty" protobuf:"bytes,15,opt,name=studyCR"`
	// URI of the data product CR
	// +kubebuilder:default =""
	DataProductCR *string `json:"dataProductCR,omitempty" protobuf:"bytes,16,opt,name=dataProductCR"`
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
