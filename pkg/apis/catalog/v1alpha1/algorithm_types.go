package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +genclient
// +kubebuilder:object:root=true
// +kubebuilder:resource:path=algorithms,singular=algorithm,shortName="alg",categories={catalog,modela,all}
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Framework",type="string",JSONPath=".spec.frameworkName",description="ML Framework name"
// +kubebuilder:printcolumn:name="Docs",type="string",JSONPath=".spec.url",description=""
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",description="ML task name"
// +kubebuilder:printcolumn:name="Age",type=date,JSONPath=`.metadata.creationTimestamp`
// Algorithm define the metadata about a machine learning algorithm.
type Algorithm struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AlgorithmSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

// +kubebuilder:object:root=true
// AlgorithmList contains a list of Algorithm
type AlgorithmList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Algorithm `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//AlgorithmSpec describes the attributes of an machine learning algorithm
type AlgorithmSpec struct {
	// FrameworkName is a reference to library
	// +kubebuilder:validation:Required
	// +required
	FrameworkName string `json:"frameworkName,omitempty" protobuf:"bytes,1,opt,name=frameworkName"`
	// Description is the description of the algorithm
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// URL is a url to the html page describing the algorithm
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	URL *string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
	// Task is the machine learning task (binary classification / regression)
	// +kubebuilder:validation:Optional
	Tasks []MLTask `json:"tasks" protobuf:"bytes,4,opt,name=tasks"`
	// Sparse indicate if this algorithm can deal with sparse data
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Sparse *bool `json:"sparse,omitempty" protobuf:"varint,5,opt,name=sparse"`
	// IntegerParameters is the list of integer hyper parameter ranges.
	// +kubebuilder:validation:Optional
	Ranges []ParameterRange `json:"ranges,omitempty" protobuf:"bytes,6,rep,name=ranges"`
}

// Parameter range indicate a single hyper parameter range
type ParameterRange struct {
	// Name is the name of the hyper parameter
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Type is the datatype of the parameter
	// +kubebuilder:validation:Optional
	Type HyperParameterDataType `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// Low is the minimum value of the hyperparameter range
	// +kubebuilder:validation:Optional
	Low *float64 `json:"low,omitempty" protobuf:"bytes,3,opt,name=low"`
	// High is the maximum value of the hyper parameter range
	// +kubebuilder:validation:Optional
	High *float64 `json:"high,omitempty" protobuf:"bytes,4,opt,name=high"`
	// Step for discrete variable.
	// +kubebuilder:validation:Optional
	Step *int32 `json:"step,omitempty" protobuf:"varint,5,opt,name=step"`
	// If the scale is logaritimic
	// +kubebuilder:validation:Optional
	Log *bool `json:"log,omitempty" protobuf:"varint,6,opt,name=log"`
	// Set of choices for categorical variable
	// +kubebuilder:validation:Optional
	Choices []string `json:"choices,omitempty" protobuf:"bytes,7,rep,name=choices"`
	// DefaultValue is the default value of the parameter
	// +kubebuilder:validation:Optional
	DefaultValue *float64 `json:"defaultValue,omitempty" protobuf:"varint,8,opt,name=defaultValue"`
	// Default Choice for categorical variable.
	//+kubebuilder:validation:Optional
	DefaultChoice *string `json:"defaultChoice,omitempty" protobuf:"varint,9,opt,name=defaultChoice"`
	// If true this parameter is condition on another parameter value
	//+kubebuilder:validation:Optional
	Conditional *bool `json:"conditional,omitempty" protobuf:"varint,10,opt,name=conditional"`
	// Parent parameter name
	//+kubebuilder:validation:Optional
	Parent *string `json:"parent,omitempty" protobuf:"bytes,11,opt,name=parent"`
	// The parent value in order for this parameter to be active.
	//+kubebuilder:validation:Optional
	ParentValueCat *string `json:"parentValueCat,omitempty" protobuf:"bytes,12,opt,name=parentValueCat"`
	// The parent value in order for this parameter to be active.
	//+kubebuilder:validation:Optional
	ParentValueInteger *int32 `json:"parentValueInteger,omitempty" protobuf:"varint,13,opt,name=parentValueInteger"`
	// The parent value in order for this parameter to be active.
	//+kubebuilder:validation:Optional
	ParentValueFloat *float64 `json:"parentValueFloat,omitempty" protobuf:"bytes,14,opt,name=parentValueFloat"`
}
