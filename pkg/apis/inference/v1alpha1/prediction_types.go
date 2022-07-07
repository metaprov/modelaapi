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
	PredictionArchived  PredictionConditionType = "Archived"
)

// PredictionCondition describes the state of a Prediction at a certain point
type PredictionCondition struct {
	// Type of Prediction condition
	Type PredictionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictionConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human-readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Prediction represents a single batch prediction on a dataset
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
// PredictionList is a list of Predictions
type PredictionList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Prediction `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionSpec represent the desired state of Prediction
type PredictionSpec struct {
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// PredictorName is the name of the Predictor resource that will be used to evaluate predictions for the
	// unlabeled input dataset. The Predictor must exist in the same DataProduct namespace as the resource
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Required
	// +required
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`
	// If true, measurements for the metrics specified by the `Tests` field will be computed for each prediction and
	// stored in the Prediction's status with the average result of all predictions
	// +kubebuilder:default:=false
	// Used usually for unit testing
	Labeled *bool `json:"labeled,omitempty" protobuf:"varint,3,opt,name=labeled"`
	// Indicates if the prediction is a forecast
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,4,opt,name=forecast"`
	// Input specifies the location of the input data, if not using a Dataset resource
	Input data.DataInputSpec `json:"input,omitempty" protobuf:"bytes,6,opt,name=input"`
	// Output specifies the location where the predicted dataset will be stored
	// +kubebuilder:validation:Optional
	Output data.DataOutputSpec `json:"output,omitempty" protobuf:"bytes,7,opt,name=output"`
	// Tests specifies a collection of metrics that will be computed for each prediction
	// if the Labeled field of the Prediction is enabled
	Test training.ModelTestSuite `json:"test,omitempty" protobuf:"bytes,8,rep,name=test"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// Resources specifies the resource requirements that will be allocated to the batch prediction Job
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The deadline for the batch prediction Job to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// The priority of the Kubernetes Job created by the Prediction (medium, by default)
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,12,opt,name=priority"`
	// Indicates if the Prediction was aborted and should stop execution
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,13,opt,name=aborted"`
	// The time-to-live of the Prediction, after which the Prediction will be archived
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,14,opt,name=ttl"`
	// The forecasting specification in the case that the predicted model is a hierarchical forecast
	// +kubebuilder:validation:Optional
	ForecastInfo ForecastSpec `json:"forecastInfo,omitempty" protobuf:"bytes,15,opt,name=forecastInfo"`
	// CronPredictionName specifies the name of the CronPrediction that created the Prediction, if applicable
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	CronPredictionName *string `json:"cronPredictorName,omitempty" protobuf:"bytes,16,opt,name=cronPredictorName"`
	// The reference to the ServingSite resource that hosts the Prediction
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,17,opt,name=servingsiteRef"`
}

// PredictionStatus is the observed state of a Prediction
type PredictionStatus struct {
	// StartTime denotes the time when the batch prediction Job started
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// EndTime denotes the time when the batch prediction Job completed or failed
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// The current phase of the prediction
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase PredictionPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// The collection of metrics that represent the average measurement across all predictions for each
	// metric specified by the Tests field of the Predictor
	// +kubebuilder:validation:Optional
	TestResult catalog.TestSuiteResult `json:"testResult,omitempty" protobuf:"bytes,4,opt,name=testResult"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,5,opt,name=observedGeneration"`
	// The number of rows predicted
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,6,opt,name=rows"`
	// The trigger that started the batch prediction
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,7,opt,name=triggeredBy"`
	// The location of logs produced by the batch prediction Job
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,8,opt,name=logs"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,9,opt,name=lastUpdated"`
	// In the case of failure, the Prediction resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,10,opt,name=failureReason"`
	// In the case of failure, the Prediction resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,11,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PredictionCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,12,rep,name=conditions"`
}

// ForecastSpec specifies the details of a forecasting model
type ForecastSpec struct {
	// The hierarchy specification, which maps columns to values
	// +kubebuilder:validation:Optional
	HierarchyValues map[string]string `json:"hierarchyValues,omitempty" protobuf:"bytes,1,opt,name=hierarchyValues"`
	// The interval of the forecast
	Horizon training.PeriodSpec `json:"horizon,omitempty" protobuf:"bytes,2,opt,name=horizon"`
}
