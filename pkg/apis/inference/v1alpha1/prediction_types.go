package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type PredictionPhase string

const (
	PredictionPhasePending   PredictionPhase = "Pending"
	PredictionPhaseRunning   PredictionPhase = "Running"
	PredictionPhaseFailed    PredictionPhase = "Failed"
	PredictionPhaseAborted   PredictionPhase = "Aborted"
	PredictionPhaseCompleted PredictionPhase = "Completed"
)

// PredictionConditionType is the condition type of the prediction pipeline
type PredictionConditionType string

/// PredictionTemplate Condition
const (
	PredictionCompleted PredictionConditionType = "Completed"
	PredictionSaved     PredictionConditionType = "Saved"
)

// PredictionCondition describes the state of PredictionTemplate
type PredictionCondition struct {
	// Type of  condition.
	Type PredictionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictionConditionType"`
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
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorName"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Labeled",type="string",JSONPath=".spec.labeled"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.output.bucketName",priority=1
// +kubebuilder:printcolumn:name="Key",type="string",JSONPath=".spec.output.path",priority=1
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Rows",type="string",JSONPath=".status.rows"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=predictions,shortName=pred,singular=prediction,categories={inference,modela}
type Prediction struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictionList is a list of Prediction
type PredictionList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Prediction `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionSpec represent the desired state of Prediction
type PredictionSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// PredictorName refer to the predictor which would predict the dataset of this prediction.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Required
	// +required
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`
	// Labeled , true if this is labeled prediction request.
	// +kubebuilder:default:=false
	// Used usually for unit testing
	Labeled *bool `json:"labeled,omitempty" protobuf:"varint,3,opt,name=labeled"`
	// If true, this prediction is a forecast
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,4,opt,name=forecast"`
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,5,opt,name=datasetName"`
	// Input is the location of the input file if not using a dataset
	Input data.DataLocation `json:"input,omitempty" protobuf:"bytes,6,opt,name=input"`
	// Output is the location of the output file.
	// +kubebuilder:validation:Optional
	Output data.DataOutputSpec `json:"output,omitempty" protobuf:"bytes,7,opt,name=output"`
	// Tests is the list of metrics that we need to measure if we are running a labeled prediction
	Tests []catalog.Metric `json:"tests,omitempty" protobuf:"bytes,8,rep,name=tests"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// Resources is the hardware resource req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// ActiveDeadlineSeconds is the deadline of a job for this dataset.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// The priority of this prediction. The default is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,12,opt,name=priority"`
	// Aborted is set when we want to abort the prediction
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,13,opt,name=aborted"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,14,opt,name=ttl"`
	// If this is hierarchy forecast, holds the forecast details for each columns
	// +kubebuilder:validation:Optional
	ForecastInfo ForecastSpec `json:"forecastInfo,omitempty" protobuf:"varint,15,opt,name=forecastInfo"`
}

// PredictionStatus is the observed state of a PredictionTemplate
type PredictionStatus struct {
	// StartTime is the start time of the prediction.
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// EndTime is the end time of the prediction.
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// Phase is the current phase of the prediction
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase PredictionPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// Results is the results of running the prediction with a labeled dataset
	// +kubebuilder:validation:Optional
	Results []catalog.Measurement `json:"results,omitempty" protobuf:"bytes,4,rep,name=results"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,5,opt,name=observedGeneration"`
	// The number of rows in the predictions
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,6,opt,name=rows"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,7,opt,name=triggeredBy"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,8,opt,name=logs"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,9,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PredictionCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
}

// In case of forecast holds the forecast details
type ForecastSpec struct {
	// The Hierarchy spec, map from column to values
	// +kubebuilder:validation:Optional
	HierarchyValues map[string]string `json:"hierarchyValues,omitempty" protobuf:"bytes,1,opt,name=hierarchyValues"`
	// Specify the interval for this forecast, we might need to downsample or upsample
	Horizon training.PeriodSpec `json:"horizon,omitempty" protobuf:"bytes,2,opt,name=horizon"`
}
