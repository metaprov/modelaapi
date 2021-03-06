package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type PredictionPipelinePhase string

/// PredictionPipelinePhase
const (
	// The system is performing the prediction against the predictor
	PredictionPhaseRunning PredictionPipelinePhase = "Running"
	// The prediction was completed successfully, and the results were uploaded to the bucket,
	PredictionPhaseReady PredictionPipelinePhase = "Ready"
	// The prediction were completed successfully, and the results were uploaded to the bucket.
	PredictionPhaseFailed PredictionPipelinePhase = "Failed"
)

// PredictionPipelineConditionType is the condition type of the prediction pipeline
type PredictionPipelineConditionType string

/// PredictionTemplate Condition
const (
	PredictionReady    PredictionPipelineConditionType = "Ready"
	PredictionArchived PredictionPipelineConditionType = "Archived"
)

// PredictionPipelineCondition describes the state of PredictionTemplate
type PredictionPipelineCondition struct {
	// Type of  condition.
	Type PredictionPipelineConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictionPipelineConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// PredictionTemplate represents a prediction object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorName"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="File",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Labeled",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=predictionpipelines,singular=predictionpipeline,categories={inference,modeld}
type PredictionPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionPipelineSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictionPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictionPipelineList is a list of PredictionPipeline
type PredictionPipelineList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []PredictionPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionPipelineSpec represent the desired state of PredictionPipeline
type PredictionPipelineSpec struct {
	// PredictorName refer to the predictor which would predict the dataset of this prediction.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	PredictorName string `json:"predictorName" protobuf:"bytes,1,opt,name=predictorName"`
	// Labeled , true if this is labeled prediction request.
	// Used usally for unit testing
	Labeled bool `json:"labeled" protobuf:"bytes,2,opt,name=labeled"`
	// The objective metric used to score
	Objective *catalog.Metric `json:"objective" protobuf:"bytes,3,opt,name=objective"`
	// DatasetName is where we are using a dataset name. This can be dataset name
	// +optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Input is the DataLocation of the input if using direct input file
	Input *data.DataLocation `json:"input,omitempty" protobuf:"bytes,5,opt,name=input"`
	// Output is the key in the bucket for storing all the prediction output
	// +optional
	Output *data.DataLocation `json:"output,omitempty" protobuf:"bytes,6,opt,name=output"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
}

// PredictionPipelineStatus is the observed state of a PredictionTemplate
type PredictionPipelineStatus struct {
	// +optional
	Phase PredictionPipelinePhase `json:"phase" protobuf:"bytes,3,opt,name=phase"`
	//+optional
	Conditions []PredictionPipelineCondition `json:"conditions,omitempty" protobuf:"bytes,6,rep,name=conditions"`
}
