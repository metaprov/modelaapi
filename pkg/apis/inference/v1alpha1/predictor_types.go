package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +kubebuilder:validation:Enum="online";"batch";"streaming"
type PredictorType string

const (
	// Use cluster port if the predictor is an internal micro service
	Online    PredictorType = "online"
	Batch     PredictorType = "batch"
	Streaming PredictorType = "streaming"
)

type AuthMethod string

const (
	ApiToken AuthMethod = "api-token"
	JwtToken AuthMethod = "jwt-token"
	None     AuthMethod = "none"
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
	// If true, automatically generate drift test to all the columns based on the column type
	// +kubebuilder:default:=1000
	// +kubebuilder:validation:Optional
	MinPredictions *int32 `json:"minPredictions,omitempty" protobuf:"varint,3,opt,name=minPredictions"`
	// Set the list of columns for drift detection, if empty, watch all the columns.
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,4,rep,name=columns"`
	// The drift threshold for drift metrics.
	// If empty will be set the modela
	DriftThresholds []data.DriftThreshold `json:"driftThresholds,omitempty" protobuf:"bytes,5,rep,name=driftThresholds"`
	// Define the tests to run against the predictor.
	UnitTestsTemplate catalog.TestSuite `json:"unitTestsTemplate,omitempty" protobuf:"bytes,6,opt,name=unitTestsTemplate"`
	// The schedule on which model monitoring computations will be performed
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,7,opt,name=schedule"`
	// Reference to a model that will be used for outlier detection. If empty, an outlier detection model.
	// Currently not in use.
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
	// The type of predictor (online, batch, or streaming). Online is the only supported type as of the current release
	// +kubebuilder:default:="online"
	// +kubebuilder:validation:Optional
	Type *PredictorType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// If Serverless is true, the Kubernetes Deployment which serves the model will not be created
	// until it starts to receive prediction traffic, and will be destroyed once the model becomes dormant
	Serverless *bool `json:"serverless,omitempty" protobuf:"varint,2,opt,name=serverless"`
	// Serving tests

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
	// Target location of the serving dataset
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,4,opt,name=location"`
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
// Prediction Cache Spec
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
	// The reference to a Connection resource to an external Redis deployment
	ConnectionRef *v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,4,opt,name=connectionRef"`
}

/////////////////////////////////////////////////////
// Auto Scaling Spec
/////////////////////////////////////////////////////

// AutoScaling defines the configuration for the automatic scaling of a service
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
type AccessSpec struct {
	// The port number that will be exposed on the Predictor's Pods to serve prediction traffic through the GRPCInferenceService API.
	// The Kubernetes Service created by the Predictor will expose the port and forward GRPC traffic to the backend pods
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1024
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=8080
	Port *int32 `json:"port,omitempty" protobuf:"varint,1,opt,name=port"`
	// The port number that will be exposed on the external address of every node on the cluster, in the case of the
	// Predictor's access type being NodePort. Traffic from the port will be forwarded to the Predictor's backend service
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	NodePort *int32 `json:"nodePort,omitempty" protobuf:"varint,2,opt,name=nodePort"`
	// The auto-generated DNS path where the Predictor service can be accessed. If the access type is ClusterIP, it will
	// be a cluster-internal DNS name (i.e. predictor.default-serving-site.svc.cluster.local). In the case of the Ingress
	// access type, it will be determined by the FQDN of the host ServingSite (i.e. predictor.default-serving-site.your-domain.ai).
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Path *string `json:"path,omitempty" protobuf:"bytes,3,opt,name=path"`
	// The Kubernetes-native access method which specifies how the Kubernetes Service created by the Predictor will be exposed.
	// See https://modela.ai/docs/docs/serving/production/#access-method for a detailed description of each access type
	// (defaults to cluster-ip)
	// +kubebuilder:default:="cluster-ip"
	// +kubebuilder:validation:Optional
	AccessType *catalog.AccessType `json:"accessType,omitempty" protobuf:"bytes,4,opt,name=accessType"`
	// Indicates if the prediction service should expose an additional port to serve the GRPCInferenceService API through REST.
	// The port one digit above the number specified by the Port field will be exposed to accept HTTP/1.1 traffic
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	REST *bool `json:"rest,omitempty" protobuf:"varint,5,opt,name=rest"`
	// Indicates
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	AuthMethod *AuthMethod `json:"authMethod,omitempty" protobuf:"bytes,6,opt,name=authMethod"`
	// ApiKeySecretRef references a Kubernetes Secret containing an API key that must be passed in prediction requests to the Predictor
	// +kubebuilder:validation:Optional
	ApiKeySecretRef *v1.SecretReference `json:"apikeySecretRef,omitempty" protobuf:"bytes,7,opt,name=apikeySecretRef"`
}

type ForwardCurtainSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The forward curtain receives prediction requests before the prediction (currently unimplemented)
	// +kubebuilder:validation:Optional
	CurtainRef *v1.ObjectReference `json:"curtainRef,omitempty" protobuf:"bytes,2,opt,name=curtainRef"`
	// Percent of request that are sent to the foreward curtain.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Percent *int32 `json:"percent,omitempty" protobuf:"bytes,3,opt,name=percent"`
}

type BackwardCurtainSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The forward curtain receives prediction requests before the prediction (currently unimplemented)
	// +kubebuilder:validation:Optional
	CurtainRef *v1.ObjectReference `json:"curtainRef,omitempty" protobuf:"bytes,2,opt,name=curtainRef"`
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

/// Predictor Condition
const (
	PredictorReady PredictorConditionType = "Ready"
	PredictorSaved PredictorConditionType = "Saved"
)

// PredictorCondition describes the state of a Predictor at a certain point
type PredictorCondition struct {
	// Type of Predictor condition
	Type PredictorConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictorConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human-readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Predictor specifies the deployment of a service to serve predictions for a Model
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Serving Site",type="string",JSONPath=".spec.servingsiteRef.name",description=""
// +kubebuilder:printcolumn:name="Port",type="integer",JSONPath=".spec.access.port",description=""
// +kubebuilder:printcolumn:name="Access",type="string",JSONPath=".spec.access.accessType",description=""
// +kubebuilder:printcolumn:name="Replicas",type="integer",JSONPath=".spec.replicas",description=""
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=predictors,singular=predictor,shortName=pdr,categories={inference,modela}
type Predictor struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictorSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictorStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// If specified, the user-provided description of the Predictor
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The reference to the DataProduct that the resource exists under
	ProductRef *v1.ObjectReference `json:"productRef" protobuf:"bytes,3,opt,name=productRef"`
	// If specified, the reference to the ServingSite resource that hosts the Predictor
	// If not specified, the predictor will be hosted on the default serving site.
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,5,opt,name=servingsiteRef"`
	// If specified, the collection of shadow models. A shadow model receives prediction request, but does
	// not serve the reply.
	// +kubebuilder:validation:Optional
	Models []catalog.ModelDeploymentSpec `json:"models,omitempty" protobuf:"bytes,7,rep,name=models"`
	// The specification to progressively deploy a new live model. ModelDeploymentSpec specifications within Models that have the
	// `Canary` field enabled will be progressively deployed according to the specification when they are applied to the Predictor
	// +kubebuilder:validation:Optional
	Progressive *ProgressiveSpec `json:"progressive,omitempty" protobuf:"bytes,8,opt,name=progressive"`
	// The data location where artifacts generated by the Predictor will be stored
	// +kubebuilder:validation:Optional
	ArtifactsFolder data.DataLocation `json:"artifactsFolder,omitempty" protobuf:"bytes,9,opt,name=artifactsFolder"`
	// Access specifies the configuration for the Predictor service to be exposed externally
	// +kubebuilder:validation:Optional
	Access AccessSpec `json:"access,omitempty" protobuf:"bytes,10,opt,name=access"`
	// The number of replicas for the Kubernetes Deployment associated with the Predictor, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,11,opt,name=replicas"`
	// AutoScaling specifies the auto-scaling policy
	// +kubebuilder:validation:Optional
	AutoScaling AutoScalingSpec `json:"autoScaling,omitempty" protobuf:"bytes,12,opt,name=autoScaling"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,13,opt,name=owner"`
	// Resources specifies the resource requirements allocated to the prediction service
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,14,opt,name=resources"`
	// Cache specifies the configuration of the prediction cache
	Cache PredictionCacheSpec `json:"cache,omitempty" protobuf:"bytes,15,opt,name=cache"`
	// Store specifies the configuration of the online data store
	Store OnlineFeatureStoreSpec `json:"store,omitempty" protobuf:"bytes,16,opt,name=store"`
	// Serving specifies the configuration for individual models to handle prediction traffic
	Serving ModelServingSpec `json:"serving,omitempty" protobuf:"bytes,17,opt,name=serving"`
	// The task type of the Predictor, which should match the task type of the models being served
	// +kubebuilder:default:="unknown"
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,18,opt,name=task"`
	// The prediction threshold
	// +kubebuilder:validation:Optional
	PredictionThreshold *float64 `json:"predictionThreshold,omitempty" protobuf:"bytes,19,opt,name=predictionThreshold"`
	// Spec for the drift detection process
	// +kubebuilder:validation:Optional
	Drift DriftDetectionSpec `json:"drift,omitempty" protobuf:"bytes,20,opt,name=drift"`
	// Spec for the ground truth process.
	// +kubebuilder:validation:Optional
	Feedback FeedbackTestSpec `json:"feedback,omitempty" protobuf:"bytes,21,opt,name=feedback"`
	// NotifierRef references a Notifier resource that will be triggered in the case that a concept or data drift is detected
	// +kubebuilder:validation:Optional
	NotifierRef *v1.ObjectReference `json:"notifierRef,omitempty" protobuf:"bytes,22,opt,name=notifierRef"`
	// Monitor spec specify the monitor for this predictor.
	// +kubebuilder:validation:Optional
	PredictionLogging PredictionLoggingSpec `json:"predictionLogging,omitempty" protobuf:"bytes,23,opt,name=predictionLogging"`
	// Forward curtain
	// +kubebuilder:validation:Optional
	ForwardCurtain ForwardCurtainSpec `json:"forwardCurtain,omitempty" protobuf:"bytes,24,opt,name=forwardCurtain"`
	// Backward curtain
	// +kubebuilder:validation:Optional
	BackwardCurtain BackwardCurtainSpec `json:"backwardCurtain,omitempty" protobuf:"bytes,25,opt,name=backwardCurtain"`
	// Fast slow is the specification of deployment of a fast - slow models.
	// +kubebuilder:validation:Optional
	FastSlow FastSlowModelSpec `json:"fastSlow,omitempty" protobuf:"bytes,26,opt,name=fastSlow"`
}

// PredictorStatus contain the current state of the Predictor resource
type PredictorStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The collection of historical records of models deployed to the Predictor, used internally to roll-back models
	//+kubebuilder:validation:Optional
	History []ModelRecord `json:"history,omitempty" protobuf:"bytes,2,opt,name=history"`
	// The status of the shadow models
	// +kubebuilder:validation:Optional
	ModelStatus []ModelDeploymentStatus `json:"modelsStatus,omitempty" protobuf:"bytes,4,rep,name=modelsStatus"`
	// The status of the Predictorlet associated with the Predictor. The Predictorlet is a service which handles prediction traffic
	// and routes predictions to individual models based on the specification of the Predictor
	// +kubebuilder:validation:Optional
	PredictorletStatus PredictorletStatus `json:"predictorletStatus,omitempty" protobuf:"bytes,5,opt,name=predictorletStatus"`
	// The status of the prediction cache managed by the Predictor
	// +kubebuilder:validation:Optional
	CacheStatus PredictionCacheStatus `json:"cacheStatus,omitempty" protobuf:"bytes,6,opt,name=cacheStatus"`
	// The status of the online store managed by the Predictor
	// +kubebuilder:validation:Optional
	OnlineStore OnlineStoreStatus `json:"onlineStoreStatus,omitempty" protobuf:"bytes,7,opt,name=onlineStoreStatus"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,8,opt,name=lastUpdated"`
	// The end-point URL of the Predictor
	//+kubebuilder:validation:Optional
	EndPoint string `json:"endPoint,omitempty" protobuf:"bytes,9,opt,name=endPoint"`
	// In the case of failure, the Predictor resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,10,opt,name=failureReason"`
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
	Conditions []PredictorCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,16,rep,name=conditions"`
}

// ModelRecord hold the state of a model that was in production
type ModelRecord struct {
	// Model Name is the name of the model
	// +kubebuilder:validation:Optional
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,1,opt,name=modelName"`
	// Model version is the version of the model
	// +kubebuilder:validation:Optional
	ModelVersion string `json:"modelVersion,omitempty" protobuf:"bytes,2,opt,name=modelVersion"`
	// Live at is the time that the model were placed in production
	// +kubebuilder:validation:Optional
	LiveAt *metav1.Time `json:"liveAt,omitempty" protobuf:"bytes,3,opt,name=liveAt"`
	// Retried at is the time that the model was retired from production.
	// +kubebuilder:validation:Optional
	RetiredAt *metav1.Time `json:"retiredAt,omitempty" protobuf:"bytes,4,opt,name=retiredAt"`
	// Retried at is the time that the model was retired from production.
	// +kubebuilder:validation:Optional
	AvgDailyPrediction int32 `json:"avgDailyPrediction,omitempty" protobuf:"varint,5,opt,name=avgDailyPrediction"`
	// Retried at is the time that the model was retired from production.
	// +kubebuilder:validation:Optional
	AvgLatency float64 `json:"avgLatency,omitempty" protobuf:"bytes,6,opt,name=avgLatency"`
}

type ModelDeploymentStatus struct {
	// The name of the Model resource associated with the deployment
	// +kubebuilder:validation:Optional
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,1,opt,name=modelName"`
	// The version of the Model resource
	// +kubebuilder:validation:Optional
	ModelVersion string `json:"modelVersion,omitempty" protobuf:"bytes,2,opt,name=modelVersion"`
	// The image name that the deployment is currently running
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,3,opt,name=imageName"`
	// The name of the Kubernetes Deployment that manages the pods of the Model
	// +kubebuilder:validation:Optional
	DeploymentRef v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,4,opt,name=deploymentRef"`
	// The name of the Kubernetes Service which exposes the Model externally
	// +kubebuilder:validation:Optional
	ServiceRef v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,5,opt,name=serviceRef"`
	// the name of the horizonal pod autoscaler, if autoscaling is true
	// +kubebuilder:validation:Optional
	HPARef v1.ObjectReference `json:"hpaRef,omitempty" protobuf:"bytes,6,opt,name=hpaRef"`
	// 50% latency (median) for predictions served by the model
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,7,opt,name=p50"`
	// 95% latency for predictions served by the model
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,8,opt,name=p95"`
	// 99% latency for predictions served by the model
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,9,opt,name=p99"`
	// The last time a prediction was served by the Predictorlet
	// +kubebuilder:validation:Optional
	LastPredictionTime *metav1.Time `json:"lastPredictionTime,omitempty" protobuf:"bytes,10,opt,name=lastPredictionTime"`
	// +kubebuilder:validation:Optional
	DailyPredictionAvg int32 `json:"dailyPredictionAvg,omitempty" protobuf:"varint,11,opt,name=dailyPredictionAvg"`
	// LastFailure is the last failure that occured with the model
	// +kubebuilder:validation:Optional
	LastFailure string `json:"lastFailure,omitempty" protobuf:"bytes,12,opt,name=lastFailure"`
	// Phase is the current phase of the model deployment
	// +kubebuilder:validation:Optional
	Phase ModelDeploymentPhase `json:"phase,omitempty" protobuf:"bytes,13,opt,name=phase"`
	// DeployedAt is the last time that the model was deployed
	// +kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,14,opt,name=deployedAt"`
	// ReleasedAt is the time that the model was released
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,15,opt,name=releasedAt"`
	// Indicates if a data drift has been detected based on incoming prediction data
	// +kubebuilder:validation:Optional
	DataDrift bool `json:"dataDrift,omitempty" protobuf:"varint,16,opt,name=dataDrift"`
	// Indicates if a concept drift has been detected based on incoming prediction data
	// +kubebuilder:validation:Optional
	ConceptDrift bool `json:"conceptDrift,omitempty" protobuf:"varint,17,opt,name=conceptDrift"`
	// The predictions from the last 7 days
	// +kubebuilder:validation:Optional
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,18,rep,name=lastDailyPredictions"`
	// +kubebuilder:validation:Optional
	ObjectStatuses []KubernetesObjectStatus `json:"objectStatuses,omitempty" protobuf:"bytes,19,rep,name=objectStatuses"`
	// the set of validation errors
	Errors []ValidationError `json:"errors,omitempty" protobuf:"bytes,20,opt,name=errors"`
	// Ref to the last ground true dataset that this model was tested against.
	LastFeedbackDatasetRef v1.ObjectReference `json:"lastFeedbackDatasetRef,omitempty" protobuf:"bytes,21,opt,name=lastFeedbackDatasetRef"`
	// Last time that a ground true test was done.
	LastFeedbackTest *metav1.Time `json:"lastFeedbackTest,omitempty" protobuf:"bytes,22,opt,name=lastFeedbackTest"`
	// Last results of the ground truth tests.
	LastFeedbackTestResults []catalog.Measurement `json:"lastFeedbackTestResults,omitempty" protobuf:"bytes,23,opt,name=lastFeedbackTestResults"`
}

type ModelDeploymentPhase string

const (
	ModelDeploymentPhaseDeploying ModelDeploymentPhase = "Deploying"
	ModelDeploymentPhaseDeployed  ModelDeploymentPhase = "Deployed"
	ModelDeploymentPhaseShadowing ModelDeploymentPhase = "Shadowing"
	ModelDeploymentPhaseReleasing ModelDeploymentPhase = "Releasing"
	ModelDeploymentPhaseReleased  ModelDeploymentPhase = "Released"
	ModelDeploymentPhaseFailed    ModelDeploymentPhase = "Failed"
)

type K8sObjectStatusState string

const (
	K8sObjectStatusHealthy K8sObjectStatusState = "healthy"
	K8sObjectStatusWarning K8sObjectStatusState = "warning"
	K8sObjectStatusError   K8sObjectStatusState = "error"
	K8sObjectStatusUnknown K8sObjectStatusState = "unknown"
)

// KubernetesObjectStatus describes the location and status of a Kubernetes-native resource
type KubernetesObjectStatus struct {
	// The object reference
	// +kubebuilder:validation:Optional
	Ref *v1.ObjectReference `json:"ref,omitempty" protobuf:"bytes,1,opt,name=ref"`
	// The status of the object
	// +kubebuilder:validation:Optional
	Status K8sObjectStatusState `json:"status,omitempty" protobuf:"bytes,2,opt,name=status"`
}

// PredictorletStatus describes the current state of a prediction proxy service associated with a Predictor
type PredictorletStatus struct {
	// The image name that the Predictorlet is currently running
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,1,opt,name=imageName"`
	// The name of the Kubernetes Deployment that manages the pods of the Predictorlet
	// +kubebuilder:validation:Optional
	DeploymentRef v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,2,opt,name=deploymentRef"`
	// The name of the Kubernetes Service which exposes the Predictorlet externally
	// +kubebuilder:validation:Optional
	ServiceRef v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,3,opt,name=serviceRef"`
	// 50% latency (median) for predictions served by the Predictorlet
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,4,opt,name=p50"`
	// 95% latency for predictions served by the Predictorlet
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,5,opt,name=p95"`
	// 99% latency for predictions served by the Predictorlet
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,6,opt,name=p99"`
	// +kubebuilder:validation:Optional
	DailyPredictionAvg int32 `json:"dailyPredictionAvg,omitempty" protobuf:"varint,7,opt,name=dailyPredictionAvg"`
	// The total number of predictions served by the Predictorlet
	TotalPredictions int32 `json:"totalPredictions,omitempty" protobuf:"varint,8,opt,name=totalPredictions"`
	// The predictions from the last 7 days
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,9,rep,name=lastDailyPredictions"`
	// The last time a prediction was served by the Predictorlet
	// +kubebuilder:validation:Optional
	LastPredictionTime *metav1.Time `json:"lastPredictionTime,omitempty" protobuf:"bytes,10,opt,name=lastPredictionTime"`
	// LastFailure contains the last failure that occured with a model served by the Predictorlet
	// +kubebuilder:validation:Optional
	LastFailure string `json:"lastFailure,omitempty" protobuf:"bytes,11,opt,name=lastFailure"`
	// +kubebuilder:validation:Optional
	ObjectStatuses []KubernetesObjectStatus `json:"objectStatuses,omitempty" protobuf:"bytes,12,rep,name=objectStatuses"`
}

type PredictionCacheStatus struct {
	// LastAccessed specifies the last time the prediction cache was accessed
	LastAccessed *metav1.Time `json:"lastAccessed,omitempty" protobuf:"bytes,1,opt,name=lastAccessed"`
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

type DriftDetectionStatus struct {
	// +kubebuilder:validation:Optional

}
