package v1alpha1

/////////////////////////////
// Types concerned with feature enginerring
/////////////////////////////

type FeatureInfo struct {
	// The feature name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The reason that the feature was dropped
	// +kubebuilder:validation:Optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,2,opt,name=reason"`
	// +kubebuilder:validation:Optional
	Value float64 `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
}
