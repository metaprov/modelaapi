/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type FeatureHistogramPhase string

const (
	FeatureHistogramPhasePending        FeatureHistogramPhase = "Pending"        // when generating
	FeatureHistogramPhaseDetectingDrift FeatureHistogramPhase = "DetectingDrift" // when generating
	FeatureHistogramPhaseDrifted        FeatureHistogramPhase = "Drifted"        // when one or more column drifted
	FeatureHistogramPhaseReady          FeatureHistogramPhase = "Ready"          // when ready and not drift.
	FeatureHistogramPhaseFailed         FeatureHistogramPhase = "Failed"         // failed in the process.
)

// FeatureHistogramConditionType is the condition of the feature
type FeatureHistogramConditionType string

/// FeatureHistogram Condition
const (
	FeatureHistogramReady         FeatureHistogramConditionType = "Ready"
	FeatureHistogramDriftDetected FeatureHistogramConditionType = "DriftDetected"
	FeatureHistogramSaved         FeatureHistogramConditionType = "Saved"
)

// FeatureHistogramCondition describes the state of a deployment at a certain point.
type FeatureHistogramCondition struct {
	// Type of account condition.
	Type FeatureHistogramConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=FeatureHistogramConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// FeatureHistogram represent a single feature in the feature store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurehistograms,singular=featurehistogram,categories={data,modela}
// +kubebuilder:subresource:status
type FeatureHistogram struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureHistogramSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status FeatureHistogramStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// FeatureHistogramList contain a list of feature objects
type FeatureHistogramList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []FeatureHistogram `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// FeatureHistogramSpec contain the desired state of a FeatureHistogram
type FeatureHistogramSpec struct {
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
	// The list of columns to generate the histograms.
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,5,opt,name=columns"`
	// A reference to the dataset or predictor that contain the column with this histogram
	// +kubebuilder:validation:Optional
	SourceRef *v1.ObjectReference `json:"sourceRef,omitempty" protobuf:"bytes,6,opt,name=sourceRef"`
	// If true, this is a training dataset feature histogram. If false the histogram was generated during serving.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Training *bool `json:"training,omitempty" protobuf:"varint,7,opt,name=training"`
	// If true, this is a feature histogram of the target column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Target *bool `json:"target,omitempty" protobuf:"varint,8,opt,name=target"`
	// If true, this is an active feature histogram. This feature histogram is being live updated by the predictorlet
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"varint,9,opt,name=active"`
	// The start time of this feature histogram. For training dataset histogram this is set to the creation
	// time of the dataset
	Start *metav1.Time `json:"start,omitempty" protobuf:"bytes,10,opt,name=start"`
	// The end time of the feature histogram. If reached, the predictor will start a new feature histogram
	End *metav1.Time `json:"end,omitempty" protobuf:"bytes,11,opt,name=end"`
	// The histogram to compare to for data drift calc
	// +kubebuilder:validation:Optional
	BaseFeatureHistogram v1.ObjectReference `json:"baseFeatureHistogram,omitempty" protobuf:"bytes,12,opt,name=baseFeatureHistogram"`
	// Define drift tresholds. This is usually assigned from the predictor.
	// +kubebuilder:validation:Optional
	Tresholds DriftTresholdsSpec `json:"tresholds,omitempty" protobuf:"bytes,13,opt,name=tresholds"`
}

// FeatureHistogramStatus defines the observed state of FeatureHistogram
type FeatureHistogramStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The histogram values, map from column name to an histogram
	Data []ColumnHistogram `json:"data,omitempty" protobuf:"bytes,2,opt,name=data"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,3,opt,name=lastUpdated"`
	// The calculation of the drift metrics for each column in the histogram
	//+kubebuilder:validation:Optional
	Drift []ColumnDrift `json:"drift,omitempty" protobuf:"bytes,4,opt,name=drift"`
	// The log file specification that determines the location of all logs produced by the object
	Logs catalog.Logs `json:"logs" protobuf:"bytes,5,opt,name=logs"`
	// The phase of the feature histogram
	Phase FeatureHistogramPhase `json:"phase" protobuf:"bytes,6,opt,name=phase"`
	// In the case of failure, the Dataset resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,7,opt,name=failureReason"`
	// In the case of failure, the Dataset resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureHistogramCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,9,rep,name=conditions"`
}

type DriftTresholdsSpec struct {
	Tresholds []DriftTreshold `json:"tresholds" protobuf:"bytes,1,opt,name=tresholds"`
}

// Define a treshold
type DriftTreshold struct {
	// The metric type name (e.g. F1 / Accuracy)
	// +kubebuilder:validation:Required
	Metric *catalog.Metric `json:"metric" protobuf:"bytes,1,opt,name=metric"`
	// The value of the metric for quantitive observations
	// +kubebuilder:validation:Required
	// +required
	Value *float64 `json:"value" protobuf:"bytes,2,opt,name=value"`
}

// hold the drift values.
type ColumnDrift struct {
	// The name of the column
	//+kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Measure of drift for a column
	//+kubebuilder:validation:Optional
	Metrics []catalog.Measurement `json:"metrics,omitempty" protobuf:"bytes,2,opt,name=metrics"`
	// true if drift was detected for this column
	//+kubebuilder:validation:Optional
	Drift *bool `json:"drift,omitempty" protobuf:"varint,3,opt,name=drift"`
}

type ColumnHistogram struct {
	// The name of the column
	//+kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Measure of drift for a column
	//+kubebuilder:validation:Optional
	Historgram catalog.HistogramData `json:"historgram,omitempty" protobuf:"bytes,2,opt,name=histogram"`
}
