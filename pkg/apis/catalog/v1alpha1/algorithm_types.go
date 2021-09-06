package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Algorithm define the metadata about a machine learning algorithm.
// +kubebuilder:object:root=true
// +kubebuilder:resource:scope=Namespaced
// +kubebuilder:resource:path=algorithms,singular=algorithm,shortName="alg",categories={catalog,modela,all}
// +kubebuilder:printcolumn:name="Framework",type="string",JSONPath=".spec.frameworkName",description="ML Framework name"
// +kubebuilder:printcolumn:name="Docs",type="string",JSONPath=".spec.url",description=""
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",description="ML task name"
// +kubebuilder:printcolumn:name="Age",type=date,JSONPath=`.metadata.creationTimestamp`
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
	Task MLTask `json:"task" protobuf:"bytes,4,opt,name=task,casttype=MLTask"`
	// Sparse indicate if this algorithm can deal with sparse data
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Sparse *bool `json:"sparse,omitempty" protobuf:"bytes,5,opt,name=sparse"`
	// IntegerParameters is the list of integer hyper parameter ranges.
	// +kubebuilder:validation:Optional
	IntegerParameters []IntParameter `json:"integerParameters,omitempty" protobuf:"bytes,6,rep,name=integerParameters,casttype=IntParameter"`
	// FloatParameters is the list of float hyper parameters ranges
	// +kubebuilder:validation:Optional
	FloatParameters []FloatParameter `json:"floatParameters,omitempty" protobuf:"bytes,7,rep,name=floatParameters,casttype=FloatParameter"`
	// CategoricalParameters is the list of categorical hyper parameters ranges
	// +kubebuilder:validation:Optional
	CategoricalParameters []CategoricalParameter `json:"categoricalParameters,omitempty" protobuf:"bytes,8,rep,name=categoricalParameters,casttype=CategoricalParameter"`
}

// IntParameter contain the specification of an integer hyper parameter
type IntParameter struct {
	// Name is the name of the hyper parameter
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Type is the datatype of the parameter
	// +kubebuilder:validation:Optional
	Type DataType `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// Min is the minimum value of the hyper parameter range
	// +kubebuilder:validation:Optional
	Min int32 `json:"min,omitempty" protobuf:"varint,3,opt,name=min"`
	// Max is the maximum value of the hyper parameter range
	// +kubebuilder:validation:Optional
	Max int32 `json:"max,omitempty" protobuf:"varint,4,opt,name=max"`
	// DefaultValue is the default value of the parameter
	// +kubebuilder:validation:Optional
	DefaultValue int32 `json:"defaultValue,omitempty" protobuf:"varint,6,opt,name=defaultValue"`
}

// FloatParameter contain the specification of an float hyper parameter
type FloatParameter struct {
	// Name is the name of the hyper parameter
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Min is the minimum value
	// +kubebuilder:validation:Optional
	Min float64 `json:"min,omitempty" protobuf:"bytes,3,opt,name=min"`
	// Max is the maximum value
	// +kubebuilder:validation:Optional
	Max float64 `json:"max,omitempty" protobuf:"bytes,4,opt,name=max"`
	// Default float value
	// +kubebuilder:validation:Optional
	DefaultValue float64 `json:"defaultValue,omitempty" protobuf:"bytes,5,opt,name=defaultValue"`
	// Log specify if this hyper paramer is logartimic
	// +kubebuilder:validation:Optional
	Log bool `json:"log,omitempty" protobuf:"bytes,6,opt,name=log"`
}

// CategoricalParameter contain the specification of an categorical hyper parameter
type CategoricalParameter struct {
	// Name is the name of the hyper parameter
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// DefaultValue if the default categorical value
	DefaultValue string `json:"defaultValue,omitempty" protobuf:"bytes,2,opt,name=defaultValue"`
	// Enums defines the list of values
	// +kubebuilder:validation:Optional
	Enums []string `json:"enums,omitempty" protobuf:"bytes,3,rep,name=enums"`
}
