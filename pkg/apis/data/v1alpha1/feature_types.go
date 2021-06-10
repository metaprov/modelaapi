/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// FeatureConditionType is the condition of the feature
type FeatureConditionType string

/// Feature Condition
const (
	FeatureReady FeatureConditionType = "Ready"
	FeatureSaved FeatureConditionType = "Saved"
)

// FeatureCondition describes the state of a deployment at a certain point.
type FeatureCondition struct {
	// Type of account condition.
	Type FeatureConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Feature represent a single feature in the feature store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=features,singular=feature,categories={data,modeld}
// +kubebuilder:subresource:status
type Feature struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeatureStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureList contain a list of feature objects
type FeatureList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Feature `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureSpec contain the desired state of a Feature
type FeatureSpec struct {
	// The feature owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the feature.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the feature
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Type name of the column key, this column is the key column in the entity.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	KeyColumn *string `json:"keyColumn,omitempty" protobuf:"bytes,5,opt,name=keyColumn"`
	// The name of the time stamp column
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TimestampColumn *string `json:"timestampColumn,omitempty" protobuf:"bytes,6,opt,name=timestampColumn"`
	// The name of the feature column
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	FeatureColumn *string `json:"featureColumn,omitempty" protobuf:"bytes,7,opt,name=featureColumn"`
	// The name of the entity containing this feature
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	EntityName *string `json:"entityName,omitempty" protobuf:"bytes,8,opt,name=entityName"`
	// The name of the feature pipeline that is producing this feature
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	FeaturePipelineName *string `json:"featurePipelineName,omitempty" protobuf:"bytes,9,opt,name=featurePipelineName"`
}

// FeatureStatus defines the observed state of Feature
type FeatureStatus struct {
	// Min is the minimum value of the attribute
	Min float64 `json:"min,omitempty" protobuf:"bytes,2,opt,name=min"`
	// Max is the maximum value of the attribute
	Max float64 `json:"max,omitempty" protobuf:"bytes,3,opt,name=max"`
	// Mean is the mean value of the attribute
	Mean float64 `json:"mean,omitempty" protobuf:"bytes,4,opt,name=mean"`
	// StdDev is the standard deviation value of the attribute
	StdDev float64 `json:"stddev,omitempty" protobuf:"bytes,5,opt,name=stddev"`
	// Skewness is the standard deviation value of the attribute
	Skewness float64 `json:"skewness,omitempty" protobuf:"bytes,6,opt,name=skewness"`
	// Kurtosis is the standard deviation value of the attribute
	Kurtosis float64 `json:"kurtosis,omitempty" protobuf:"bytes,7,opt,name=kurtosis"`
	// Zeros is the numbers of zeros in the feature
	Zeros float64 `json:"zeros,omitempty" protobuf:"bytes,8,opt,name=zeros"`
	// Pct25 is the 25 precent point
	P25 float64 `json:"p25,omitempty" protobuf:"bytes,10,opt,name=p25"`
	// Pct50 is the median
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,11,opt,name=p50"`
	// Pct75 is the 75% point
	P75 float64 `json:"p75,omitempty" protobuf:"bytes,12,opt,name=p75"`
	// The number of missing values
	// +kubebuilder:validation:Minimum=0
	Missing int32 `json:"missing,omitempty" protobuf:"varint,14,opt,name=missing"`
	// The number of invalid values
	// +kubebuilder:validation:Minimum=0
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,15,opt,name=invalid"`
	// Is this the target attribute, the value is derived from the schema
	Target bool `json:"target,omitempty" protobuf:"bytes,16,opt,name=target"`
	// The feature importance
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,17,opt,name=importance"`
	//
	Distinct int32 `json:"distinc,omitempty" protobuf:"varint,18,opt,name=distinc"`
	// Should this column be ignored, as specified by the user.
	// This value is derived from the schema
	Ignored bool `json:"ignored,omitempty" protobuf:"bytes,19,opt,name=ignored"`
	// Is this column is nullable.
	// This value is derived from the schema.
	Nullable bool `json:"nullable,omitempty" protobuf:"bytes,20,opt,name=nullable"`
	// This column has high cardinality and should be ignored.
	// The value is set during the profile process.
	HighCred bool `json:"highCred,omitempty" protobuf:"bytes,21,opt,name=highCred"`
	// This column has high corrolation with another feature and should be dropped.
	// The value is set during the profile process.
	HighCorr bool `json:"highCorr,omitempty" protobuf:"bytes,22,opt,name=highCorr"`
	// Mark that this column is skewed and would require a power transform
	//If skewness is less than -1 or greater than 1, the distribution is highly skewed.
	//If skewness is between -1 and -0.5 or between 0.5 and 1, the distribution is moderately skewed.
	//If skewness is between -0.5 and 0.5, the distribution is approximately symmetric
	Skew bool `json:"skew,omitempty" protobuf:"bytes,23,opt,name=skew"`
	// Completeness is the ratio between non null to null
	Completeness float64 `json:"completeness,omitempty" protobuf:"bytes,24,opt,name=completeness"`
	// The ratio between distinc to total
	DistinctValueCount float64 `json:"distinctValueCount,omitempty" protobuf:"bytes,25,opt,name=distinctValueCount"`
	// The ratio between most freq value to total
	MostFreqValuesRatio float64 `json:"mostFreqValuesRatio,omitempty" protobuf:"bytes,26,opt,name=mostFreqValuesRatio"`
	// Used for text attributes
	IndexOfPeculiarity float64 `json:"indexOfPeculiarity,omitempty" protobuf:"bytes,27,opt,name=indexOfPeculiarity"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,28,opt,name=observedGeneration"`
	//+optional
	Conditions []FeatureCondition `json:"conditions,omitempty" protobuf:"bytes,29,rep,name=conditions"`
}
