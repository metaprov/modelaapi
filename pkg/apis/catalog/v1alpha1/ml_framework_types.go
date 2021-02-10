package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// Algorithm Library
//==============================================================================
// +kubebuilder:validation:Enum="scikit-learn";"tensorflow";"pytorch";"catcoost";"lightgbm";
type FrameworkName string

const (
	ScikitLearn FrameworkName = "scikit-learn"
	TensorFlow  FrameworkName = "tensorflow"
	PyTorch     FrameworkName = "pytorch"
	Cataboost   FrameworkName = "catcoost"
	LightGbm    FrameworkName = "lightgbm"
)

// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Name",type="string",JSONPath=".spec.url"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.version"
// +kubebuilder:resource:path=mlframeworks,singular=mlframework,categories={catalog,modeld,all}
type MLFramework struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              MLFrameworkSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status MLFrameworkStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// MLFrameworkList contains a list of MLFramework
type MLFrameworkList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []MLFramework `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// MLFramework is the spec for a specific version of machine learning framework (e.g. tensorflow)
type MLFrameworkSpec struct {
	// Url for the home page of the mlframework
	Url string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Comments of the framework
	// +Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The current version of the mlframework
	Version string `json:"version,omitempty" protobuf:"bytes,3,opt,name=version"`
}

// MLFrameworkStatus defines the observed state of Datacenter.
type MLFrameworkStatus struct {
}
