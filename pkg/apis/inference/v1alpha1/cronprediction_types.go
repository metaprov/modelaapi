package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// PredictionTemplate Condition
type CronPredictionConditionType string

/// PredictionTemplate Condition
const (
	CronPredictionReady    CronPredictionConditionType = "Ready"
	CronPredictionArchived CronPredictionConditionType = "Archived"
)

// PredictionCondition describes the state of PredictionTemplate
type CronPredictionCondition struct {
	// Type of  condition.
	Type CronPredictionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CronPredictionConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorName"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="File",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Labeled",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=cronpredictions,singular=cronprediction,categories={inference,modeld}
// CronPrediction represents a single run of the Prediction Pipeline
type CronPrediction struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CronPredictionSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            CronPredictionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// CronPredictionList is a list of CronPrediction
type CronPredictionList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []CronPrediction `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type PredictionTemplate struct {
	Spec PredictionSpec `json:"spec" protobuf:"bytes,1,opt,name=spec"`
}

// CronPredictionSpec represent the desired state of CronPrediction
type CronPredictionSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The owner account name
	// +kubebuilder:default ="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,2,opt,name=owner"`
	// Schedule is the cron schedule
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
	// Template refer to the prediction template
	Template PredictionTemplate `json:"template" protobuf:"bytes,4,opt,name=template"`
}

// CronPredictionStatus is the observed state of a PredictionTemplate
type CronPredictionStatus struct {
	//+optional
	Conditions []CronPredictionCondition `json:"conditions,omitempty" protobuf:"bytes,6,rep,name=conditions"`
}
