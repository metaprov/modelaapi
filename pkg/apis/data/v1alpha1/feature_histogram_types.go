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

const (
	ModelDriftTwoSampleKSTestLessThan     catalog.AssertionType = "model-two-sample-ks-test-less-than"
	ModelDriftChiSquaredLessThan          catalog.AssertionType = "model-chi-squared-test-less-than"
	ModelDriftProportionDiffTestLessThan  catalog.AssertionType = "model-proportion-difference-test-less-than"
	ModelDriftWassersteinDistanceLessThan catalog.AssertionType = "model-wasserstein-distance-less-than"
	ModelDriftJSDistanceLessThan          catalog.AssertionType = "model-js-distance-less"
	ModelDriftPSILessThan                 catalog.AssertionType = "model-psi-less-than"
	ModelDriftKLDivergenceLessThan        catalog.AssertionType = "model-kl-divergence-less-than"
)

type FeatureHistogramPhase string

const (
	FeatureHistogramPhasePending     FeatureHistogramPhase = "Pending"     // when generating
	FeatureHistogramPhaseUnitTesting FeatureHistogramPhase = "UnitTesting" // when generating
	FeatureHistogramPhaseUnitTested  FeatureHistogramPhase = "UnitTested"  // when one or more column drifted
	FeatureHistogramPhaseReady       FeatureHistogramPhase = "Ready"       // when ready and not drift.
	FeatureHistogramPhaseFailed      FeatureHistogramPhase = "Failed"      // failed in the process.
)

// FeatureHistogramConditionType is the condition of the feature
type FeatureHistogramConditionType string

/// FeatureHistogram Condition
const (
	FeatureHistogramReady         FeatureHistogramConditionType = "Ready"
	FeatureHistogramUnitTested    FeatureHistogramConditionType = "UnitTested"
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
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Live",type="boolean",JSONPath=".spec.live"
// +kubebuilder:printcolumn:name="Start",type="date",JSONPath=".spec.start"
// +kubebuilder:printcolumn:name="End",type="date",JSONPath=".spec.end"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=featurehistograms,shortName=fh,singular=featurehistogram,categories={data,modela}
type FeatureHistogram struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              FeatureHistogramSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            FeatureHistogramStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	Columns []string `json:"columns,omitempty" protobuf:"bytes,5,rep,name=columns"`
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
	Live *bool `json:"live,omitempty" protobuf:"varint,9,opt,name=live"`
	// The start time of this feature histogram. For training dataset histogram this is set to the creation
	// time of the dataset
	// +kubebuilder:validation:Optional
	Start *metav1.Time `json:"start,omitempty" protobuf:"bytes,10,opt,name=start"`
	// The end time of the feature histogram. If reached, the predictor will start a new feature histogram
	// +kubebuilder:validation:Optional
	End *metav1.Time `json:"end,omitempty" protobuf:"bytes,11,opt,name=end"`
	// The histogram to compare to for data drift calc
	// +kubebuilder:validation:Optional
	BaseFeatureHistogram v1.ObjectReference `json:"baseFeatureHistogram,omitempty" protobuf:"bytes,12,opt,name=baseFeatureHistogram"`
	// Define drift thresholds. This is usually assigned from the predictor.
	// +kubebuilder:validation:Optional
	DriftThresholds []DriftThreshold `json:"driftThresholds" protobuf:"bytes,13,rep,name=driftThresholds"`
	// How much time in seconds, we should sync the im memory histograms to etcd
	// Default is one minute.
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Optional
	SyncIntervalSec *int32 `json:"SyncIntervalSec,omitempty" protobuf:"varint,14,opt,name=SyncIntervalSec"`
	// Test suite for this histogram.
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,15,opt,name=unitTests"`
	// If true, generate the unit tests
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	GenUnitTests *bool `json:"genUnitTests,omitempty" protobuf:"varint,16,opt,name=genUnitTests"`
}

// FeatureHistogramStatus defines the observed state of FeatureHistogram
type FeatureHistogramStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The histogram values, map from column name to an histogram
	// +kubebuilder:validation:Optional
	Columns []ColumnHistogram `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,3,opt,name=lastUpdated"`
	// The log file specification that determines the location of all logs produced by the object
	// +kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs" protobuf:"bytes,5,opt,name=logs"`
	// The phase of the feature histogram
	// +kubebuilder:validation:Optional
	Phase FeatureHistogramPhase `json:"phase" protobuf:"bytes,6,opt,name=phase"`
	// In the case of failure, the Dataset resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,7,opt,name=failureReason"`
	// In the case of failure, the Dataset resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`
	// Test suite for this histogram.
	//+kubebuilder:validation:Optional
	UnitTestsResult catalog.TestSuiteResult `json:"unitTestsResult,omitempty" protobuf:"bytes,9,opt,name=unitTestsResult"`
	// Total prediction recorded by this feature histograms
	//+kubebuilder:validation:Optional
	Total int32 `json:"total,omitempty" protobuf:"varint,10,opt,name=total"`
	// Errors predictions
	//+kubebuilder:validation:Optional
	Errors int32 `json:"errors,omitempty" protobuf:"varint,11,opt,name=errors"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []FeatureHistogramCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,12,rep,name=conditions"`
}

// Define a threshold
type DriftThreshold struct {
	// The metric type name (e.g. F1 / Accuracy)
	// +kubebuilder:validation:Required
	Metric catalog.Metric `json:"metric" protobuf:"bytes,1,opt,name=metric"`
	// The value of the metric for quantitive observations
	// +kubebuilder:validation:Required
	// +required
	Value float64 `json:"value" protobuf:"bytes,2,opt,name=value"`
}

type ColumnHistogram struct {
	// The name of the column
	//+kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Measure of drift for a column
	//+kubebuilder:validation:Optional
	Histogram catalog.HistogramData `json:"histogram,omitempty" protobuf:"bytes,2,opt,name=histogram"`
	// Measure of drift for this column
	//+kubebuilder:validation:Optional
	Metrics []catalog.Measurement `json:"metrics,omitempty" protobuf:"bytes,3,rep,name=metrics"`
	// true if drift was detected for this column
	//+kubebuilder:validation:Optional
	Drift *bool `json:"drift,omitempty" protobuf:"varint,4,opt,name=drift"`
}
