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
	PredictionPhasePending         PredictionPhase = "Pending"
	PredictionPhaseCreatingDataset PredictionPhase = "CreatingDataset"
	PredictionPhaseRunning         PredictionPhase = "Running"
	PredictionPhaseFailed          PredictionPhase = "Failed"
	PredictionPhaseAborted         PredictionPhase = "Aborted"
	PredictionPhaseCompleted       PredictionPhase = "Completed"
	PredictionPhaseUnitTesting     PredictionPhase = "UnitTesting"
	PredictionPhaseUnitTested      PredictionPhase = "UnitTested"
)

// PredictionConditionType is the condition type of the prediction pipeline
type PredictionConditionType string

// / PredictionTemplate Condition
const (
	PredictionCompleted  = "Completed"
	PredictionUnitTested = "UnitTested"
	PredictionAborted    = "Aborted"
)

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:resource:path=predictions,shortName=pred,singular=prediction,categories={inference,modela}
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorRef.Name"
// +kubebuilder:printcolumn:name="BucketName",type="string",JSONPath=".spec.output.bucketName",priority=1
// +kubebuilder:printcolumn:name="Key",type="string",JSONPath=".spec.output.path",priority=1
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Rows",type="string",JSONPath=".status.rows"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// Prediction represents a single batch prediction on a dataset
type Prediction struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status PredictionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,2,opt,name=owner"`
	// Input specifies the location of the prediction dataset
	// +kubebuilder:validation:Optional
	Input data.DataInputSpec `json:"input,omitempty" protobuf:"bytes,3,opt,name=input"`
	// Output specifies the location where the prediction results will be stored
	// +kubebuilder:validation:Optional
	Output data.DataOutputSpec `json:"output,omitempty" protobuf:"bytes,4,opt,name=output"`
	// The reference to the Serving Site under which Jobs created by the Prediction will be executed.
	// If empty, it will default to the default Serving Site of the Data Product for the Prediction
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,5,opt,name=servingSiteRef"`
	// The reference to the Model which will be served during the batch prediction workload
	// +kubebuilder:validation:Optional
	ModelRef *v1.ObjectReference `json:"modelRef,omitempty" protobuf:"bytes,6,opt,name=modelRef"`
	// If true, a feedback dataset is created containing the prediction data and results
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CreateDataset *bool `json:"createDataset,omitempty" protobuf:"varint,7,opt,name=createDataset"`
	// Labeled indicates if the input dataset is labeled, in which case a batch prediction workload will not be created.
	// If enabled, a workload will be created to compute the metrics of the model based
	// on the labeled dataset and run the tests specified by UnitTests
	// +kubebuilder:default:=false
	Labeled *bool `json:"labeled,omitempty" protobuf:"varint,8,opt,name=labeled"`
	// +kubebuilder:validation:Optional
	UnitTests training.ModelTestSuite `json:"unitTests,omitempty" protobuf:"bytes,9,opt,name=unitTests"`
	// Resources specifies the resource requirements allocated to the batch prediction workload
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The deadline for any Jobs associated with the Prediction to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,11,opt,name=activeDeadlineSeconds"`
	// Schedule specifies the schedule for the Prediction to be executed
	// +kubebuilder:validation:Optional
	Schedule catalog.CronSchedule `json:"schedule,omitempty" protobuf:"varint,12,opt,name=schedule"`
	// If true, all workloads created by the Prediction will be removed and the Prediction will no longer be reconciled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Abort *bool `json:"abort,omitempty" protobuf:"varint,13,opt,name=abort"`
	// The forecasting specification in the case that the predicted model is a hierarchical forecast
	// +kubebuilder:validation:Optional
	ForecastSpec ForecastPredictionSpec `json:"forecastSpec,omitempty" protobuf:"bytes,14,opt,name=forecastSpec"`
	// +kubebuilder:validation:Optional
	PartitionLocation PartitionPredictionLocationsSpec `json:"partitionLocation,omitempty" protobuf:"bytes,15,opt,name=partitionLocation"`
	// ModelClassName references the name of the Model Class that created the resource, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,16,opt,name=modelClassName"`
}

// PredictionStatus is the observed state of a Prediction
type PredictionStatus struct {
	// CompletedAt denotes the time when the batch prediction Job completed or failed
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,1,opt,name=completedAt"`
	// The current phase of the prediction
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase PredictionPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// +kubebuilder:validation:Optional
	UnitTestsResult catalog.TestSuiteResult `json:"unitTestsResult,omitempty" protobuf:"bytes,3,opt,name=unitTestsResult"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// The number of rows predicted
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// The location of logs produced by the batch prediction Job
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,7,opt,name=logs"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,8,opt,name=updatedAt"`
	// In the case of failure, the Prediction resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
	// The reference to the Dataset that was generated
	//+kubebuilder:validation:Optional
	DatasetRef v1.ObjectReference `json:"datasetRef,omitempty" protobuf:"bytes,11,opt,name=datasetRef"`
	// Forecast contains the forecast results for the prediction
	//+kubebuilder:validation:Optional
	Forecast ForecastStatus `json:"forecast,omitempty" protobuf:"bytes,14,opt,name=forecast"`
	// +kubebuilder:validation:Optional
	Usage catalog.ResourceConsumption `json:"usage,omitempty" protobuf:"bytes,15,rep,name=usage"`
	// +kubebuilder:validation:Optional
	Runs catalog.RunStatusOld `json:"runs,omitempty" protobuf:"bytes,16,rep,name=runs"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,17,rep,name=conditions"`
}

// ForecastPredictionSpec specifies the details of a forecasting model
type ForecastPredictionSpec struct {
	// The hierarchy specification, which maps columns to values
	// +kubebuilder:validation:Optional
	HierarchyValues map[string]string `json:"hierarchyValues,omitempty" protobuf:"bytes,1,opt,name=hierarchyValues"`
	// The interval of the forecast
	Horizon training.WindowSpec `json:"horizon,omitempty" protobuf:"bytes,2,opt,name=horizon"`
}

// The result of forecasting one item. The forecast data itself is stored on the cloud.
// The dataURI is pointing to the forecast, the profile URI
type ForecastStatus struct {
	// The URI of all the porfiles
	// +kubebuilder:validation:Optional
	ProfileURI string `json:"profileURI,omitempty" protobuf:"bytes,1,opt,name=profileURI"`
	// A pointer to the actual forecast
	// +kubebuilder:validation:Optional
	ReportURI string `json:"reportURI,omitempty" protobuf:"bytes,2,rep,name=reportURI"`
	// A pointer to the file containing the metadata about the forecasts
	// +kubebuilder:validation:Optional
	ForecastURI string `json:"forecastURI,omitempty" protobuf:"bytes,3,rep,name=forecastURI"`
	// Mark forecast as a failure.
	// +kubebuilder:validation:Optional
	Failed *bool `json:"failed,omitempty" protobuf:"varint,4,opt,name=failed"`
	// In case of failure, this is the failure message
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,5,opt,name=failureMsg"`
	// Holds the worker on going result, when a worker finish, we update the location of thier result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,6,opt,name=workerResults"`
}

type PartitionPredictionLocationsSpec struct {
	// The folder of group data
	// +kubebuilder:validation:Optional
	GroupForecastFile *string `json:"groupForecastFile,omitempty" protobuf:"bytes,2,opt,name=groupForecastFile"`
}
