package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +kubebuilder:validation:Enum="scikit-learn";"tensorflow";"pytorch";"catcoost";"lightgbm";
// FrameworkName is the name of the machine learning framework
type FrameworkName string

const (
	ScikitLearn FrameworkName = "scikit-learn"
	TensorFlow  FrameworkName = "tensorflow"
	PyTorch     FrameworkName = "pytorch"
	Cataboost   FrameworkName = "catcoost"
	LightGbm    FrameworkName = "lightgbm"
)

// MLFramework define the metadata about a machine learning framework
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="URL",type="string",JSONPath=".spec.url"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.version"
// +kubebuilder:resource:path=mlframeworks,singular=mlframework,categories={catalog,modela,all}
type MLFramework struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              MLFrameworkSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

// +kubebuilder:object:root=true
// MLFrameworkList contains a list of MLFramework
type MLFrameworkList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []MLFramework `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// MLFramework is the spec for a specific version of machine learning framework (e.g. tensorflow)
type MLFrameworkSpec struct {
	// URL for the home page of the mlframework
	// +kubebuilder:validation:Optional
	URL string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Comments of the framework
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The current version of the mlframework
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Version *string `json:"version,omitempty" protobuf:"bytes,3,opt,name=version"`
	// Lang is the framework lang
	// +kubebuilder:validation:Optional
	Lang *string `json:"lang,omitempty" protobuf:"bytes,4,opt,name=lang"`
}
