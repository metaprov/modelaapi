package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type ForecastPhase string

const (
	ForecastPhasePending     ForecastPhase = "Pending"
	ForecastPhaseRunning     ForecastPhase = "Running"
	ForecastPhaseFailed      ForecastPhase = "Failed"
	ForecastPhaseAborted     ForecastPhase = "Aborted"
	ForecastPhaseCompleted   ForecastPhase = "Completed"
	ForecastPhaseUnitTesting ForecastPhase = "UnitTesting"
	ForecastPhaseUnitTested  ForecastPhase = "UnitTested"
)

// ForecastConditionType is the condition type of the forecast pipeline
type ForecastConditionType string

/// ForecastTemplate Condition
const (
	ForecastCompleted  ForecastConditionType = "Completed"
	ForecastSaved      ForecastConditionType = "Saved"
	ForecastUnitTested ForecastConditionType = "UnitTested"
	ForecastArchived   ForecastConditionType = "Archived"
)

// ForecastCondition describes the state of a Forecast at a certain point
type ForecastCondition struct {
	// Type of Forecast condition
	Type ForecastConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ForecastConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human-readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Forecast represents a single batch forecast on a dataset
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorName"
// +kubebuilder:printcolumn:name="Entity",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Labeled",type="string",JSONPath=".spec.labeled"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.output.bucketName",priority=1
// +kubebuilder:printcolumn:name="Key",type="string",JSONPath=".spec.output.path",priority=1
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Rows",type="string",JSONPath=".status.rows"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=forecasts,shortName=fr,singular=forecast,categories={inference,modela}
type Forecast struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ForecastSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ForecastStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ForecastList is a list of Forecasts
type ForecastList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Forecast `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ForecastSpec represent the desired state of Forecast
type ForecastSpec struct {
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// PredictorRef is the name of the Prediction that generated this forecast
	// unlabeled input dataset. The Predictor must exist in the same DataProduct namespace as the resource
	// +kubebuilder:validation:Required
	// +required
	PredictionRef *v1.ObjectReference `json:"predictionRef,omitempty" protobuf:"bytes,2,opt,name=predictionRef"`
	// A reference to the input data source ref
	// +kubebuilder:validation:Optional
	DataSourceRef v1.ObjectReference `json:"dataSourceRef,omitempty" protobuf:"bytes,3,opt,name=dataSourceRef"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// The deadline for the batch forecast Job to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,5,opt,name=activeDeadlineSeconds"`
	// The priority of the Kubernetes Job created by the Forecast (medium, by default)
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,6,opt,name=priority"`
	// Indicates if the Forecast was aborted and should stop execution
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,7,opt,name=aborted"`
	// The time-to-live of the Forecast, after which the Forecast will be archived
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,8,opt,name=ttl"`
	// The list of line items.
	// +kubebuilder:validation:Optional
	Keys []string `json:"keys,omitempty" protobuf:"bytes,9,opt,name=keys"`
	// The reference to the ServingSite resource that
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,10,opt,name=servingsiteRef"`
}

// ForecastStatus is the observed state of a Forecast
type ForecastStatus struct {
	// StartTime denotes the time when the batch forecast Job started
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// EndTime denotes the time when the batch forecast Job completed or failed
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// The current phase of the forecast
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ForecastPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// total number of forecasts
	//+kubebuilder:validation:Optional
	Total int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=total"`
	// total number of forecasts failed
	//+kubebuilder:validation:Optional
	Failed int32 `json:"failed,omitempty" protobuf:"varint,6,opt,name=failed"`
	// the forecast results for this forecast
	//+kubebuilder:validation:Optional
	Items []ForecastItemResult `json:"items,omitempty" protobuf:"bytes,7,opt,name=items"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ForecastCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}

// The result of forecasting one item. The forecast data itself is stored on the cloud.
// The dataURI is pointing to the forecast, the profile URI
type ForecastItemResult struct {
	// The time series key
	// +kubebuilder:validation:Optional
	Key []string `json:"key,omitempty" protobuf:"bytes,1,rep,name=key"`
	// A pointer to the actual forecast
	// +kubebuilder:validation:Optional
	DataURI string `json:"dataURI,omitempty" protobuf:"bytes,2,rep,name=dataURI"`
	// A pointer to the profile URI
	// +kubebuilder:validation:Optional
	ProfileURI string `json:"profileURI,omitempty" protobuf:"bytes,3,rep,name=profileURI"`
	// Feature scores for this time series.
	// +kubebuilder:validation:Optional
	Features map[training.TSFeature]float64 `json:"features,omitempty" protobuf:"bytes,4,opt,name=features"`
	// the result of a unit test on a forecast
	// +kubebuilder:validation:Optional
	UnitTestsResult catalog.TestSuiteResult `json:"unitTestsResult,omitempty" protobuf:"bytes,5,opt,name=unitTestsResult"`
	// Mark forecast as a failure.
	// +kubebuilder:validation:Optional
	Failed *bool `json:"failed,omitempty" protobuf:"bytes,6,opt,name=failed"`
	// In case of failure, this is the failure message
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,7,opt,name=failureMsg"`
}
