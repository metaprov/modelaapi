package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// Monitoring spec
//==============================================================================

type DriftDetectionSpec struct {
	// Indicates if model monitoring is enabled for the model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// If true, automatically generate drift test to all the columns based on the column type
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	GenDriftTests *bool `json:"genDriftTests,omitempty" protobuf:"varint,2,opt,name=genDriftTests"`
	// +kubebuilder:default:=1000
	// +kubebuilder:validation:Optional
	MinPredictions *int32 `json:"minPredictions,omitempty" protobuf:"varint,3,opt,name=minPredictions"`
	// Set the list of columns for drift detection, if empty, watch all the columns.
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,4,rep,name=columns"`
	// The drift threshold for drift metrics.
	// If empty will be set the modela
	DriftThresholds []data.DriftThreshold `json:"driftThresholds,omitempty" protobuf:"bytes,5,rep,name=driftThresholds"`
	// The schedule on which model monitoring computations will be performed
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,7,opt,name=schedule"`
	// Reference to a model that will be used for outlier detection
	// +kubebuilder:validation:Optional
	OutlierDetectionModelRef v1.ObjectReference `json:"outlierDetectionModelRef,omitempty" protobuf:"bytes,8,opt,name=outlierDetectionModelRef"`
	// how many feature histograms to keep in memory (as kubernetes objects). Histograms are garbage collected.
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	MaxHistograms *int32 `json:"maxHistograms,omitempty" protobuf:"varint,9,opt,name=maxHistograms"`
	// The duration in seconds that an histogram is updated before computing drift
	// the default is one hour
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	PeriodSeconds *int32 `json:"periodSeconds,omitempty" protobuf:"varint,10,opt,name=periodSeconds"`
}

type FeedbackTestSpec struct {
	// Indicates if model monitoring is enabled for the model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Define the tests to run against the predictor.
	// +kubebuilder:validation:Optional
	Tests catalog.TestSuite `json:"tests,omitempty" protobuf:"bytes,2,opt,name=tests"`
	// The schedule on which model monitoring computations will be performed
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
}

// ModelServingSpec specifies the configuration for models to be served by a Predictor
type ModelServingSpec struct {
	// If Serverless is true, the Kubernetes Serving which serves the model will not be created
	// until it starts to receive prediction traffic, and will be destroyed once the model becomes dormant
	Serverless *bool `json:"serverless,omitempty" protobuf:"varint,2,opt,name=serverless"`
	// +kubebuilder:validation:Optional
	UnitTestsTemplate catalog.TestSuite `json:"servingTests,omitempty" protobuf:"bytes,4,opt,name=servingTests"`
}

// PredictionLoggingSpec specifies the configuration to log incoming and outgoing prediction requests
type PredictionLoggingSpec struct {
	// Indicates if prediction logging is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The number percentage (0 through 100) of prediction requests to log
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	SamplePercent *int32 `json:"samplePercent,omitempty" protobuf:"varint,2,opt,name=samplePercent"`
	// Number of rows in the serving dataset
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,3,opt,name=rows"`
	// Backup Frequency seconds.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	BackupFreqSeconds *int32 `json:"backupFreqSeconds,omitempty" protobuf:"varint,4,opt,name=backupFreqSeconds"`
	// Reference to backup location.
	// +kubebuilder:validation:Optional
	BackupConnectionRef v1.ObjectReference `json:"backupConnectionRef,omitempty" protobuf:"bytes,5,opt,name=backupConnectionRef"`
	// Target location of the serving dataset
	// +kubebuilder:validation:Optional
	Location catalog.DataLocation `json:"location,omitempty" protobuf:"bytes,6,opt,name=location"`
}

// ProgressiveSpec defines the specification to progressively deploy a model to production
type ProgressiveSpec struct {
	// The time, in seconds, for the warm-up period
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	Warmup *int32 `json:"warmup,omitempty" protobuf:"varint,1,opt,name=warmup"`
	// The percentage of traffic to increment
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Optional
	TrafficIncrement *int32 `json:"trafficIncrement,omitempty" protobuf:"varint,2,opt,name=trafficIncrement"`
	// What metric to use when comparing the candidate model to the current model
	// +kubebuilder:validation:Optional
	CanaryMetrics []catalog.Metric `json:"canaryMetrics,omitempty" protobuf:"bytes,3,rep,name=canaryMetrics"`
}

/////////////////////////////////////////////////////
// BatchPrediction Cache Spec
/////////////////////////////////////////////////////

// PredictionCacheSpec specifies the connection information of a key-value cache to store predictions
type PredictionCacheSpec struct {
	// Enabled indicates if predictions will be cached
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// InMemory indicates if predictions will be cached in the available memory of the Pod serving the model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	InMemory *bool `json:"inMemory,omitempty" protobuf:"varint,2,opt,name=inMemory"`
	// Redis indicates if predictions will be cached in an external Redis deployment
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Redis *bool `json:"redis,omitempty" protobuf:"varint,3,opt,name=redis"`
	// The reference to a ConnectionName resource to an external Redis deployment
	ConnectionRef *v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,4,opt,name=connectionRef"`
}

// AutoScalingSpec defines the configuration for the automatic scaling of a service
type AutoScalingSpec struct {
	// Indicates if automatic scaling is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The minimum number of replicas running the service
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=1
	MinReplicas *int32 `json:"minReplicas,omitempty" protobuf:"varint,2,opt,name=minReplicas"`
	// The maximum number of replicas running the service
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:default:=1
	MaxReplicas *int32 `json:"maxReplicas,omitempty" protobuf:"varint,3,opt,name=maxReplicas"`
	// The target average CPU utilization across all replicas. The HorizontalPodAutoscaler associated with the
	// service will change the number of replicas to maintain this metric
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:default:=80
	CpuAvgUtilization *int32 `json:"cpuAvgUtilization,omitempty" protobuf:"varint,4,opt,name=cpuAvgUtilization"`
	// The target average memory utilization across all replicas. The HorizontalPodAutoscaler associated with the
	// service will change the number of replicas to maintain this metric
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:default:=80
	MemAvgUtilization *int32 `json:"memAvgUtilization,omitempty" protobuf:"varint,5,opt,name=memAvgUtilization"`
}

///////////////////////////////////////////////////////////
// Online feature store spec
///////////////////////////////////////////////////////////

// OnlineFeaturestoreSpec specifies the connection information for an online feature store
type OnlineFeatureStoreSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The host name of the feature store micro service.
	// +kubebuilder:default:=""
	Hostname *string `json:"hostname,omitempty" protobuf:"bytes,2,opt,name=hostname"`
}

// AccessSpec specifies the configuration to expose a Predictor service externally

type ForwardCurtainSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The user account of the forward ref
	// +kubebuilder:validation:Optional
	AccountRef *v1.ObjectReference `json:"accountRef,omitempty" protobuf:"bytes,2,opt,name=accountRef"`
	// Percent of request that are sent to the foreward curtain.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Percent *int32 `json:"percent,omitempty" protobuf:"varint,3,opt,name=percent"`
}

type BackwardCurtainSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The forward curtain receives prediction requests before the prediction (currently unimplemented)
	// +kubebuilder:validation:Optional
	AccountRef *v1.ObjectReference `json:"accountRef,omitempty" protobuf:"bytes,2,opt,name=accountRef"`
	// For backward curtain is the confidence low
	// +kubebuilder:validation:Optional
	ConfidenceLow *float64 `json:"confidenceLow,omitempty" protobuf:"bytes,4,opt,name=confidenceLow"`
	// For backward curtain is the confidence high
	// +kubebuilder:validation:Optional
	ConfidenceHigh *float64 `json:"confidenceHigh,omitempty" protobuf:"bytes,5,opt,name=confidenceHigh"`
}

//==============================================================================
// Predictor
//==============================================================================

// Predictor condition
type PredictorConditionType string

// / Predictor Condition
const (
	PredictorReady = "Ready"
	PredictorSaved = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=predictors,singular=predictor,shortName=pdr,categories={inference,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Serving Site",type="string",JSONPath=".spec.servingsiteRef.name",description=""
// +kubebuilder:printcolumn:name="Port",type="integer",JSONPath=".spec.access.port",description=""
// +kubebuilder:printcolumn:name="Access",type="string",JSONPath=".spec.access.accessType",description=""
// +kubebuilder:printcolumn:name="Replicas",type="integer",JSONPath=".spec.replicas",description=""
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Predictor specifies the deployment of a service to serve predictions for a Model
type Predictor struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictorSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status PredictorStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictorList contains a list of Predictors
type PredictorList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Predictor `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictorSpec defines the desired state of a Predictor
type PredictorSpec struct {
	// If specified, the name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The model class for this pipeline. if was created to serve model class models.
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,2,opt,name=modelClassName"`
	// If specified, the user-provided description of the Predictor
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The reference to the DataProduct that the resource exists under
	ProductRef *v1.ObjectReference `json:"productRef" protobuf:"bytes,4,opt,name=productRef"`
	// If true, this predictor is a template predictor. I.e. it is used in model class
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Template *bool `json:"template" protobuf:"varint,5,opt,name=template"`
	// ServingSiteRef specifies the reference to the Serving Site that the Predictor will be hosted under
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingSiteRef" protobuf:"bytes,7,opt,name=servingSiteRef"`
	// If specified, the collection of models. There must be a least on live model
	// +kubebuilder:validation:MinItems=1
	// +kubebuilder:validation:MaxItems=16
	Models []catalog.ModelDeploymentSpec `json:"models,omitempty" protobuf:"bytes,8,rep,name=models"`
	// The specification to progressively deploy a new live model. ModelDeploymentSpec specifications within Models that have the
	// `Canary` field enabled will be progressively deployed according to the specification when they are applied to the Predictor
	// +kubebuilder:validation:Optional
	Progressive *ProgressiveSpec `json:"progressive,omitempty" protobuf:"bytes,9,opt,name=progressive"`
	// Access specifies the configuration for the Predictor service to be exposed externally
	// +kubebuilder:validation:Optional
	Access catalog.AccessSpec `json:"access,omitempty" protobuf:"bytes,11,opt,name=access"`
	// The number of replicas for the Kubernetes Serving associated with the Predictor, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,12,opt,name=replicas"`
	// AutoScaling specifies the auto-scaling policy
	// +kubebuilder:validation:Optional
	AutoScaling AutoScalingSpec `json:"autoScaling,omitempty" protobuf:"bytes,13,opt,name=autoScaling"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,14,opt,name=owner"`
	// Resources specifies the resource requirements allocated to the prediction service
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,15,opt,name=resources"`
	// Cache specifies the configuration of the prediction cache
	Cache PredictionCacheSpec `json:"cache,omitempty" protobuf:"bytes,16,opt,name=cache"`
	// Store specifies the configuration of the online data store
	Store OnlineFeatureStoreSpec `json:"store,omitempty" protobuf:"bytes,17,opt,name=store"`
	// Serving specifies the configuration for individual models to handle prediction traffic
	Serving ModelServingSpec `json:"serving,omitempty" protobuf:"bytes,18,opt,name=serving"`
	// The task type of the Predictor, which should match the task type of the models being served
	// +kubebuilder:default:="unknown"
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,19,opt,name=task"`
	// Spec for the drift detection process
	// +kubebuilder:validation:Optional
	Drift DriftDetectionSpec `json:"drift,omitempty" protobuf:"bytes,21,opt,name=drift"`
	// Feedback specifies the configuration to generate feedback datasets
	// +kubebuilder:validation:Optional
	Feedback FeedbackTestSpec `json:"feedback,omitempty" protobuf:"bytes,22,opt,name=feedback"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	// +kubebuilder:validation:Optional
	Notification *catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,23,opt,name=notification"`
	// Monitor spec specify the monitor for this predictor.
	// +kubebuilder:validation:Optional
	PredictionLogging PredictionLoggingSpec `json:"predictionLogging,omitempty" protobuf:"bytes,24,opt,name=predictionLogging"`
	// Forward curtain
	// +kubebuilder:validation:Optional
	ForwardCurtain ForwardCurtainSpec `json:"forwardCurtain,omitempty" protobuf:"bytes,25,opt,name=forwardCurtain"`
	// Backward curtain
	// +kubebuilder:validation:Optional
	BackwardCurtain BackwardCurtainSpec `json:"backwardCurtain,omitempty" protobuf:"bytes,26,opt,name=backwardCurtain"`
	// Fast slow is the specification of deployment of a fast - slow models.
	// +kubebuilder:validation:Optional
	FastSlow FastSlowModelSpec `json:"fastSlow,omitempty" protobuf:"bytes,27,opt,name=fastSlow"`
}

// PredictorStatus contain the current state of the Predictor resource
type PredictorStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The collection of historical records of models deployed to the Predictor, used internally to roll-back models.
	// When the name, role, or image of a previously deployed model is changed, it will be removed from ModelStatus
	// and appended as a record to History
	//+kubebuilder:validation:Optional
	History []ModelDeploymentRecord `json:"history,omitempty" protobuf:"bytes,2,rep,name=history"`
	// ModelStatus contains the collection of statuses for all live models
	// +kubebuilder:validation:Optional
	ModelStatus []ModelDeploymentStatus `json:"modelStatus,omitempty" protobuf:"bytes,4,rep,name=modelStatus"`
	// The status of the Predictorlet associated with the Predictor. The Predictorlet is a service which handles prediction traffic
	// and routes predictions to individual models based on the specification of the Predictor
	// +kubebuilder:validation:Optional
	PredictorletStatus PredictorletStatus `json:"predictorletStatus,omitempty" protobuf:"bytes,5,opt,name=predictorletStatus"`
	// The status of the online store managed by the Predictor
	// +kubebuilder:validation:Optional
	OnlineStore OnlineStoreStatus `json:"onlineStoreStatus,omitempty" protobuf:"bytes,7,opt,name=onlineStoreStatus"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,8,opt,name=updatedAt"`
	// In the case of failure, the Predictor resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,11,opt,name=failureMessage"`
	// The status of the load balancer, if the Predictor's access type is LoadBalancer
	//+kubebuilder:validation:Optional
	LoadBalancerStatus *v1.LoadBalancerStatus `json:"loadBalancerStatus,omitempty" protobuf:"bytes,12,opt,name=loadBalancerStatus"`
	// The last time that a prediction dataset was created
	//+kubebuilder:validation:Optional
	LastPredictionDataset v1.ObjectReference `json:"lastPredictionDataset,omitempty" protobuf:"bytes,13,opt,name=lastPredictionDataset"`
	// The results of running the serving tests
	//+kubebuilder:validation:Optional
	ServingTestResult catalog.TestSuiteResult `json:"servingTestResult,omitempty" protobuf:"bytes,14,opt,name=servingTestsResults"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,17,rep,name=conditions"`
}

// ModelDeploymentRecord holds the state of a model that was previously live or shadowed
type ModelDeploymentRecord struct {
	// +kubebuilder:validation:Optional
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,1,opt,name=modelName"`
	// +kubebuilder:validation:Optional
	ModelVersion string `json:"modelVersion,omitempty" protobuf:"bytes,2,opt,name=modelVersion"`
	// The role of the previously deployed model
	ModelRole catalog.ModelRole `json:"modelRole,omitempty" protobuf:"bytes,3,opt,name=modelRole"`
	// The image name that the deployment is currently running
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,4,opt,name=imageName"`
	// +kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,5,opt,name=deployedAt"`
	// +kubebuilder:validation:Optional
	RetiredAt *metav1.Time `json:"retiredAt,omitempty" protobuf:"bytes,6,opt,name=retiredAt"`
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,7,opt,name=failureMessage"`
	// +kubebuilder:validation:Optional
	AvgDailyPrediction int32 `json:"avgDailyPrediction,omitempty" protobuf:"varint,8,opt,name=avgDailyPrediction"`
	// +kubebuilder:validation:Optional
	AvgLatency float64 `json:"avgLatency,omitempty" protobuf:"bytes,9,opt,name=avgLatency"`
}

type ModelDeploymentStatus struct {
	// The name of the Model resource associated with the deployment
	// +kubebuilder:validation:Optional
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,1,opt,name=modelName"`
	// The version of the Model resource
	// +kubebuilder:validation:Optional
	ModelVersion string `json:"modelVersion,omitempty" protobuf:"bytes,2,opt,name=modelVersion"`
	// The role of the model (live or shadow)
	ModelRole catalog.ModelRole `json:"modelRole,omitempty" protobuf:"bytes,3,opt,name=modelRole"`
	// The image name that the deployment is currently running
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,4,opt,name=imageName"`
	// The reference to the Kubernetes Deployment that manages the pods for the Model
	// +kubebuilder:validation:Optional
	DeploymentRef *v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,5,opt,name=deploymentRef"`
	// The reference to the Kubernetes Service which exposes the Model externally
	// +kubebuilder:validation:Optional
	ServiceRef *v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,6,opt,name=serviceRef"`
	// The reference to the Horizontal Pod Autoscaler, if enabled
	// +kubebuilder:validation:Optional
	HPARef *v1.ObjectReference `json:"hpaRef,omitempty" protobuf:"bytes,7,opt,name=hpaRef"`
	// FailureMessage contains the details of the last failure that occurred while deploying the Model
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,8,opt,name=failureMessage"`
	// DeployedAt specifies the time that the Model deployment was created
	// +kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,9,opt,name=deployedAt"`
	// Reference to the last ground truth dataset that the model was tested against
	// +kubebuilder:validation:Optional
	LastFeedbackDatasetRef v1.ObjectReference `json:"lastFeedbackDatasetRef,omitempty" protobuf:"bytes,10,opt,name=lastFeedbackDatasetRef"`
	// The time at which the last ground truth test was performed
	// +kubebuilder:validation:Optional
	LastFeedbackTestAt *metav1.Time `json:"lastFeedbackTestAt,omitempty" protobuf:"bytes,11,opt,name=lastFeedbackTestAt"`
	// The results of the last ground truth test performed
	// +kubebuilder:validation:Optional
	LastFeedbackTestResults []catalog.Measurement `json:"lastFeedbackTestResults,omitempty" protobuf:"bytes,12,rep,name=lastFeedbackTestResults"`
	// MetricHistory contains the historical measurements of all previously performed ground truth tests
	// +kubebuilder:validation:Optional
	MetricHistory map[catalog.Metric]MetricHistory `json:"metricHistory,omitempty" protobuf:"bytes,13,opt,name=metricsHistory"`
	// +kubebuilder:validation:Optional
	AvgDailyPrediction int32 `json:"avgDailyPrediction,omitempty" protobuf:"varint,14,opt,name=avgDailyPrediction"`
	// +kubebuilder:validation:Optional
	AvgLatency float64 `json:"avgLatency,omitempty" protobuf:"bytes,15,opt,name=avgLatency"`
	// The end-point URL of the Model, in the case that the Predictor is exposed via an HTTP Ingress
	//+kubebuilder:validation:Optional
	Endpoint *string `json:"endpoint,omitempty" protobuf:"bytes,16,opt,name=endpoint"`
}

// PredictorletStatus describes the current state of a prediction proxy service associated with a Predictor
type PredictorletStatus struct {
	// The reference to the Kubernetes Deployment that manages the pods for the prediction proxy
	// +kubebuilder:validation:Optional
	DeploymentRef *v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,1,opt,name=deploymentRef"`
	// The reference to the Kubernetes Service which exposes the Predictor externally
	// +kubebuilder:validation:Optional
	ServiceRef *v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,2,opt,name=serviceRef"`
	// DeployedAt specifies the time that the Predictorlet deployment was created
	//+kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,3,opt,name=deployedAt"`
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,4,opt,name=p50"`
	// 95% latency for predictions served by the Predictorlet
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,5,opt,name=p95"`
	// 99% latency for predictions served by the Predictorlet
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,6,opt,name=p99"`
	// +kubebuilder:validation:Optional
	AvgDailyPrediction int32 `json:"avgDailyPrediction,omitempty" protobuf:"varint,7,opt,name=avgDailyPrediction"`
	// The total number of predictions served by the Predictorlet
	TotalPredictions int32 `json:"totalPredictions,omitempty" protobuf:"varint,8,opt,name=totalPredictions"`
	// The last time a prediction was served by the Predictorlet
	// +kubebuilder:validation:Optional
	LastPredictionTime *metav1.Time `json:"lastPredictionTime,omitempty" protobuf:"bytes,9,opt,name=lastPredictionTime"`
	// FailureMessage contains the details of the last failure that occurred while deploying the Predictorlet
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
}

type OnlineStoreStatus struct {
	// LastAccessed specifies the last time the online store was accessed
	LastAccessed *metav1.Time `json:"lastAccessed,omitempty" protobuf:"bytes,1,opt,name=lastAccessed"`
}

type ValidationError struct {
	// The name of the column
	Column string `json:"column,omitempty" protobuf:"bytes,1,opt,name=column"`
	// The metric from the rule
	Metric catalog.Metric `json:"metric,omitempty" protobuf:"bytes,2,opt,name=metric"`
	// Expected min
	Min float64 `json:"min,omitempty" protobuf:"bytes,3,opt,name=min"`
	// Expected max
	Max float64 `json:"max,omitempty" protobuf:"bytes,4,opt,name=max"`
	// Actual value
	Actual float64 `json:"actual,omitempty" protobuf:"bytes,5,opt,name=actual"`
}

// Fast slow model mode, use two models as the live.
// All request are send first to the fast model.
type FastSlowModelSpec struct {
	// Indicates if model monitoring is enabled for the model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Reference to the fast model
	FastModelRef v1.ObjectReference `json:"fastModelRef,omitempty" protobuf:"bytes,2,opt,name=fastModelRef"`
	// Reference to the slow model
	SlowModelRef v1.ObjectReference `json:"slowModelRef,omitempty" protobuf:"bytes,3,opt,name=slowModelRef"`
	// The low range of confidence.
	// +kubebuilder:default:=40
	// +kubebuilder:validation:Optional
	ProbaLowPct *int32 `json:"probaLowPct,omitempty" protobuf:"varint,4,opt,name=probaLowPct"`
	// The high range of confidence , Must be higher than probalow
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Optional
	ProbaHighPct *int32 `json:"probaHighPct,omitempty" protobuf:"varint,5,opt,name=probaHighPct"`
}

type ForecastSpec struct {
	// The list of forecast runs. Runs are indexed by key
	// +kubebuilder:validation:Optional
	Runs map[string]ForecastRun `json:"runs,omitempty" protobuf:"bytes,9,rep,name=runs"`
}

type ForecastRun struct {
	// +kubebuilder:validation:Optional
	Key string `json:"key,omitempty" protobuf:"bytes,1,opt,name=key"`
	// +kubebuilder:validation:Optional
	ModelLocation string `json:"modelLocation,omitempty" protobuf:"bytes,2,rep,name=modelLocation"`
	// the prediction horizon
	// +kubebuilder:validation:Optional
	Horizon training.WindowSpec `json:"horizon,omitempty" protobuf:"bytes,3,opt,name=horizon"`
}

// Hold the Last X measurments of a metric
type MetricHistory struct {
	// The Metric Name
	// +kubebuilder:validation:Optional
	Metric catalog.Metric `json:"metric,omitempty" protobuf:"bytes,1,rep,name=metric"`
	// History
	// +kubebuilder:validation:Optional
	History []float64 `json:"history,omitempty" protobuf:"bytes,2,rep,name=history"`
}
