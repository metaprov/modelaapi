package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type PredictionRunPhase string

const (
	PredictionRunPhasePending     PredictionRunPhase = "Pending"
	PredictionRunPhasePreparing   PredictionRunPhase = "Preparing"
	PredictionRunPhasePrepared    PredictionRunPhase = "Prepared"
	PredictionRunPhaseRunning     PredictionRunPhase = "Running"
	PredictionRunPhaseFailed      PredictionRunPhase = "Failed"
	PredictionRunPhaseAborted     PredictionRunPhase = "Aborted"
	PredictionRunPhaseCompleted   PredictionRunPhase = "Completed"
	PredictionRunPhaseUnitTesting PredictionRunPhase = "UnitTesting"
	PredictionRunPhaseUnitTested  PredictionRunPhase = "UnitTested"
)

// PredictionRunConditionType specifies the current condition of a PredictionRun
type PredictionRunConditionType string

const (
	PredictionRunPrepared              PredictionRunConditionType = "Prepared"
	PredictionRunCompleted             PredictionRunConditionType = "Completed"
	PredictionRunUnitTested            PredictionRunConditionType = "UnitTested"
	PredictionRunAborted               PredictionRunConditionType = "Aborted"
	PredictionRunReady                 PredictionRunConditionType = "Ready"
	PredictionRunPaused                PredictionRunConditionType = "Paused"
	PredictionRunExternalStatusUpdated PredictionRunConditionType = "ExternalStatusUpdated"
)

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:resource:path=predictionruns,shortName=prs,singular=predictionrun,categories={inference,modela}
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Rows",type="string",JSONPath=".status.rows"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// PredictionRun represents a single batch prediction on a dataset
type PredictionRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionRunSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictionRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictionRunList is a list of PredictionRuns
type PredictionRunList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []PredictionRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionRunSpec defines the run configuration for a Prediction
type PredictionRunSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// PredictionName specifies the name of the Prediction resource which the snapshot will use to
	// determine the model, observation location, and post-processing options of the batch prediction
	// +kubebuilder:validation:Required
	// +required
	PredictionName string `json:"datasetName,omitempty" protobuf:"varint,2,opt,name=datasetName"`
	// Model specifies an optional model override to use for the run
	// +kubebuilder:validation:Optional
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,3,opt,name=model"`
	// Timout specifies the time in seconds for the run to be completed. If unspecified, default to the deadline of the Prediction
	// +kubebuilder:validation:Optional
	Timeout *int32 `json:"timeout,omitempty" protobuf:"varint,4,opt,name=timeout"`
	// If true, the execution of new workloads associated with the run will be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pause *bool `json:"pause,omitempty" protobuf:"varint,5,opt,name=pause"`
	// If true, the run will be permanently aborted and all workloads created by the run will be removed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Abort *bool `json:"abort,omitempty" protobuf:"varint,6,opt,name=abort"`
}

// PredictionRunStatus is the observed state of a PredictionRun
type PredictionRunStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// PredictionManifestLocation specifies the location of the Prediction manifest used during the course of the run
	PredictionManifestLocation catalog.ManifestLocation `json:"predictionManifestLocation,omitempty" protobuf:"bytes,2,opt,name=predictionManifestLocation"`
	// RunVersion specifies the version of the run, which is determined when the Prediction manifest is saved
	RunVersion catalog.Version `json:"runVersion,omitempty" protobuf:"varint,4,opt,name=runVersion"`
	// Rows specifies the number of rows predicted
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// The current phase of the prediction
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase PredictionRunPhase `json:"phase,omitempty" protobuf:"bytes,6,opt,name=phase"`
	// UnitTestResults contains the results of the unit test phase
	// +kubebuilder:validation:Optional
	UnitTestResults catalog.TestSuiteResult `json:"unitTestResults,omitempty" protobuf:"bytes,7,opt,name=unitTestResults"`
	// FailureMessage is set to a failure message in the case that an error occurred during the run
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`
	// Logs contains the location of all logs produced by run workloads
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,9,opt,name=logs"`
	// Forecast specifies the forecast status for the run
	//+kubebuilder:validation:Optional
	Forecast ForecastStatus `json:"forecast,omitempty" protobuf:"bytes,10,opt,name=forecast"`
	// +kubebuilder:validation:Optional
	Usage catalog.ResourceConsumption `json:"usage,omitempty" protobuf:"bytes,11,rep,name=usage"`
	// +kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,12,opt,name=updatedAt"`
	// CompletedAt specifies the time at which the run completed or failed
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,13,opt,name=completedAt"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,14,rep,name=conditions"`
}

// ForecastStatus specifies the status and metadata for a forecast
type ForecastStatus struct {
	// A pointer to the file containing metadata about forecast profiles
	// +kubebuilder:validation:Optional
	ProfileLocation string `json:"profileURI,omitempty" protobuf:"bytes,1,opt,name=profileURI"`
	// A pointer to the file containing metadata about forecast reports
	// +kubebuilder:validation:Optional
	ReportLocation string `json:"reportURI,omitempty" protobuf:"bytes,2,rep,name=reportURI"`
	// A pointer to the file containing the metadata about the forecasts
	// +kubebuilder:validation:Optional
	ForecastLocation catalog.FileLocation `json:"forecastLocation,omitempty" protobuf:"bytes,3,rep,name=forecastLocation"`
	// WorkerResults contains the collection of statuses for ongoing and completed forecast workers
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,6,opt,name=workerResults"`
}
