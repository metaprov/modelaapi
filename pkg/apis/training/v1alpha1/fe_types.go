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

type FeatureEngineeringSpec struct {
	// Is the feature filter enbled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"onError,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// List of expression to apply to the existing feature.
	// +kubebuilder:validation:Optional
	DerivedColumns []GeneratedColumnSpec `json:"derivedColumns,omitempty" protobuf:"bytes,2,rep,name=derivedColumns"`
	// Specify custom columns. Custom Columns are specified by the user
	CustomColumns []GeneratedColumnSpec `json:"customColumns,omitempty" protobuf:"bytes,3,rep,name=customColumns"`
	// List of dataset to join to the current dataset
	// +kubebuilder:validation:Optional
	ExternalDatasets []string `json:"externalDatasets,omitempty" protobuf:"bytes,4,rep,name=externalDatasets"`
	// List of dataset to join to the current dataset
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"bytes,5,opt,name=maxModels"`
	// Max time in seconds for feature engineering process
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	MaxTimeSec *int32 `json:"maxTime,omitempty" protobuf:"bytes,6,opt,name=maxTime"`
	// Number of parallel models
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MaxTrainers *int32 `json:"maxTrainers,omitempty" protobuf:"bytes,7,opt,name=maxTrainers"`
	// The sample pct to use when evaluating the feature preformance.
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	SamplePct *int32 `json:"samplePct,omitempty" protobuf:"varint,8,opt,name=samplePct"`
	// Spec for feature selection
	FeatureSelection FeatureSelectionSpec `json:"featureSelection,omitempty" protobuf:"bytes,9,opt,name=featureSelection"`
}

type FeatureEngineeringStatus struct {
	// The recommended pipeline after feature engineering was done
	BestPipeline PreprocessingSpec `json:"bestPipeline,omitempty" protobuf:"bytes,1,opt,name=bestPipeline"`
	// The name of the first original column
	GeneratedDataset string `json:"generatedDataset,omitempty" protobuf:"bytes,2,opt,name=generatedDatasets"`
}

type GeneratedColumnSpec struct {
	// The name of the first original column
	First string `json:"first,omitempty" protobuf:"bytes,1,opt,name=first"`
	// The name of the second original column, if the expression is binary operator
	// +kubebuilder:validation:Optional
	Second string `json:"second,omitempty" protobuf:"bytes,2,opt,name=second"`
	// The name of the generated column
	// +kubebuilder:validation:Optional
	GeneratedName *string `json:"generatedName,omitempty" protobuf:"bytes,3,opt,name=generatedName"`
	// The expression to apply in order to generate the new column
	// +kubebuilder:validation:Optional
	Expression string `json:"original,omitempty" protobuf:"bytes,4,opt,name=original"`
}

// Feature selection spec defines how to select feature
type FeatureSelectionSpec struct {
	// Is the feature filter enbled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"onError,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Lowvar specify the filter to remove low variance features
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	VarianceTresholdPct *int32 `json:"lowVarTreshold,omitempty" protobuf:"varint,2,opt,name=lowVarTreshold"`
	// Remove Features with high correlations
	// +kubebuilder:default:=95
	// +kubebuilder:validation:Optional
	CorrTreshold *int32 `json:"corrTreshold,omitempty" protobuf:"varint,3,opt,name=corrTreshold"`
	// Select the Top N is the number of feature to select by importance. If 0, all the features are selected.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TopN *int32 `json:"topN,omitempty" protobuf:"varint,4,opt,name=topN"`
	// The cummulative importance of all the importance feature to include
	// +kubebuilder:default:=95
	// +kubebuilder:validation:Optional
	CumulativeImportancePrecent *int32 `json:"cumulativeImportancePrecent,omitempty" protobuf:"varint,5,opt,name=cumulativeImportancePrecent"`
	// List of feature names to consider when training , even after filtering
	// +kubebuilder:validation:Optional
	Reserved []string `json:"reserved,omitempty" protobuf:"bytes,6,rep,name=reserved"`
}
