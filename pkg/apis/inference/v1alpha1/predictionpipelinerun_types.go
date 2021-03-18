package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// PredictionTemplate
//==============================================================================

type PredictionPipelineRunPhase string

/// PredictionTemplate Phases
const (
	// The system is performing the prediction against the predictor
	PredictionPipelineRunPhaseRunning PredictionPipelineRunPhase = "Running"
	// The prediction was completed successfully, and the results were uploaded to the bucket,
	PredictionPipelineRunPhaseReady PredictionPipelineRunPhase = "Ready"
	// The prediction were completed successfully, and the results were uploaded to the bucket.
	PredictionPipelineRunPhaseFailed PredictionPipelineRunPhase = "Failed"
)

// PredictionTemplate Condition
type PredictionPipelineRunConditionType string

/// PredictionTemplate Condition
const (
	PredictionPipelineRunReady    PredictionPipelineRunConditionType = "Ready"
	PredictionPipelineRunArchived PredictionPipelineRunConditionType = "Archived"
)

// PredictionPipelineCondition describes the state of PredictionTemplate
type PredictionPipelineRunCondition struct {
	// Type of  condition.
	Type PredictionPipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictionPipelineRunConditionType"`
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
// +kubebuilder:resource:path=predictionpipelineruns,singular=predictionpipelinerun,categories={inference,modeld}
// PredictionPipelineRun represents a single run of the Prediction Pipeline
type PredictionPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionPipelineRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictionPipelineRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictionPipelineRunList is a list of PredictionPipelineRun
type PredictionPipelineRunList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []PredictionPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionPipelineRunSpec represent the desired state of PredictionPipelineRun
type PredictionPipelineRunSpec struct {
	// PredictorName refer to the predictor which would predict the dataset of this prediction.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	PredictorName string `json:"predictorName" protobuf:"bytes,1,opt,name=predictorName"`
	// Labeled , true if this is labeled prediction request.
	// Used usually for unit testing
	Labeled bool `json:"labeled" protobuf:"bytes,2,opt,name=labeled"`
	// Objective is the objective metric used to score
	Objective *catalog.Metric `json:"objective" protobuf:"bytes,3,opt,name=objective"`
	// DatasetName is where we are using a dataset name. This can be dataset name
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Input is of the input if using direct input file
	Input *data.DataLocation `json:"input,omitempty" protobuf:"bytes,5,opt,name=input"`
	// Output is the key in the bucket for storing all the prediction output
	// +kubebuilder:validation:Optional
	Output *data.DataLocation `json:"output,omitempty" protobuf:"bytes,6,opt,name=output"`
	// Owner of the run
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
	// WorkloadClassName A reference to the workload class this is used to run this notebook
	// +kubebuilder:default:="default-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,8,opt,name=workloadClassName"`
}

// PredictionPipelineRunStatus is the observed state of a PredictionTemplate
type PredictionPipelineRunStatus struct {
	// PredictionPipelineRun score based on the objective.
	// +kubebuilder:validation:Optional
	Score float64 `json:"score,omitempty" protobuf:"bytes,2,opt,name=score"`
	// The phase of the prediction
	// +kubebuilder:validation:Optional
	Phase PredictionPipelineRunPhase `json:"phase" protobuf:"bytes,3,opt,name=phase"`
	// StartTime is the times that this prediction job started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,4,opt,name=startTime"`
	// CompletionTime is the time that this prediction job finished
	// +kubebuilder:validation:Optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,5,opt,name=completionTime"`
	//+optional
	Conditions []PredictionPipelineRunCondition `json:"conditions,omitempty" protobuf:"bytes,6,rep,name=conditions"`
}
