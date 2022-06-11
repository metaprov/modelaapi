package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
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
// +kubebuilder:printcolumn:name="Port",type="integer",JSONPath=".spec.port",description=""
// +kubebuilder:printcolumn:name="Access",type="string",JSONPath=".spec.accessType",description=""
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
	CanaryMetrics []catalog.CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,3,rep,name=canaryMetrics"`
}

// PredictorSpec defines the desired state of a Predictor
type PredictorSpec struct {
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The user-provided description of the Predictor
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The reference to the DataProduct that the resource exists under
	ProductRef *v1.ObjectReference `json:"productRef" protobuf:"bytes,3,opt,name=productRef"`
	// The reference to the ServingSite resource that hosts the Predictor
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,4,opt,name=servingsiteRef"`
	// The pod template for the Predictor's proxy service. The system will create a deployment for the service
	// based on the template
	// +kubebuilder:validation:Optional
	Template *v1.PodTemplate `json:"template,omitempty" protobuf:"bytes,5,opt,name=template"`
	// The collection of model deployment specifications that define which Model resources will be deployed to the
	// Predictor service and how they will be deployed. Each model should be trained with the same type of
	// dataset and possess a unique version
	// +kubebuilder:validation:Optional
	Models []catalog.ModelDeploymentSpec `json:"models,omitempty" protobuf:"bytes,6,rep,name=models"`
	// The specification to progressively deploy models. ModelDeploymentSpec specifications within Models that have the
	// `Canary` field enabled will be progressively deployed according to the specification when they are applied to the Predictor
	// +kubebuilder:validation:Optional
	Progressive *ProgressiveSpec `json:"progressive,omitempty" protobuf:"bytes,7,opt,name=progressive"`
	// The data location where artifacts generated by the Predictor will be stored
	// +kubebuilder:validation:Optional
	ArtifactsFolder data.DataLocation `json:"artifactsFolder,omitempty" protobuf:"bytes,8,opt,name=artifactsFolder"`
	// The port number that will be exposed on the Predictor's Pods to serve prediction traffic through the GRPCInferenceService API.
	// The Kubernetes Service created by the Predictor will expose the port and forward GRPC traffic to the backend pods
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1024
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=8080
	Port *int32 `json:"port,omitempty" protobuf:"varint,9,opt,name=port"`
	// The port number that will be exposed on the external address of every node on the cluster, in the case of the
	// Predictor's access type being NodePort. Traffic from the port will be forwarded to the Predictor's backend service
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	NodePort *int32 `json:"nodePort,omitempty" protobuf:"varint,10,opt,name=nodePort"`
	// The auto-generated DNS path where the Predictor service can be accessed. If the access type is ClusterIP, it will
	// be a cluster-internal DNS name (i.e. predictor.default-serving-site.svc.cluster.local). In the case of the Ingress
	// access type, it will be determined by the FQDN of the host ServingSite (i.e. predictor.default-serving-site.modela.ai).
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Path *string `json:"path,omitempty" protobuf:"bytes,11,opt,name=path"`
	// The Kubernetes-native access method which specifies how the Kubernetes Service created by the Predictor will be exposed.
	// See https://modela.ai/docs/docs/serving/production/#access-method for a detailed description of each access type
	// (defaults to cluster-ip)
	// +kubebuilder:default:="cluster-ip"
	// +kubebuilder:validation:Optional
	AccessType *catalog.AccessType `json:"accessType,omitempty" protobuf:"bytes,12,opt,name=accessType"`
	// The number of replicas for the Kubernetes Deployment associated with the Predictor, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=1
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,13,opt,name=replicas"`
	// AutoScaling specifies the auto-scaling policy
	// +kubebuilder:validation:Optional
	AutoScaling AutoScaling `json:"autoScaling,omitempty" protobuf:"bytes,14,opt,name=autoScaling"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,15,opt,name=owner"`
	// Resources specifies the resource requirements allocated to the prediction service
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,16,opt,name=resources"`
	// Cache is the specification of prediction cache (currently unimplemented)
	// +kubebuilder:validation:Optional
	Cache *PredictionCacheSpec `json:"cache,omitempty" protobuf:"bytes,17,opt,name=cache"`
	// Store is the specification of the online data store (currently unimplemented)
	// +kubebuilder:validation:Optional
	Store *OnlineFeatureStoreSpec `json:"store,omitempty" protobuf:"bytes,18,opt,name=store"`
	// The forward curtain receives prediction requests before the prediction (currently unimplemented)
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ForwardCurtainName *string `json:"forwardCurtain,omitempty" protobuf:"bytes,19,opt,name=forwardCurtain"`
	// The backward curtain receives prediction requests after the prediction (currently unimplemented)
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	BackwardCurtainName *string `json:"backwardCurtain,omitempty" protobuf:"bytes,20,opt,name=backwardCurtain"`
	// The type of predictor (online, batch, or streaming). Online is the only supported type as of the current release
	// +kubebuilder:default:="online"
	// +kubebuilder:validation:Optional
	Type *PredictorType `json:"type,omitempty" protobuf:"bytes,21,opt,name=type"`
	// The task type of the Predictor, which should match the task type of the models being served
	// +kubebuilder:default:="unknown"
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,22,opt,name=task"`
	// The prediction threshold
	// +kubebuilder:validation:Optional
	PredictionThreshold *float64 `json:"predictionThreshold,omitempty" protobuf:"bytes,23,opt,name=predictionThreshold"`
	// Monitor spec specify the monitor for this predictor.
	// +kubebuilder:validation:Optional
	Monitor MonitorSpec `json:"monitor,omitempty" protobuf:"bytes,24,opt,name=monitor"`
	// The specification to authenticate requests to the prediction service
	// +kubebuilder:validation:Optional
	Auth PredictorAuthSpec `json:"auth,omitempty" protobuf:"bytes,25,opt,name=auth"`
	// Indicates if the prediction service should expose an additional port to serve the GRPCInferenceService API through REST.
	// The port one digit above the number specified by the Port field will be exposed to accept HTTP/1.1 traffic
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	REST *bool `json:"rest,omitempty" protobuf:"varint,26,opt,name=rest"`
	// The target feature of the model that the Predictor serves
	//+kubebuilder:validation:Optional
	TargetColumn string `json:"targetColumn,omitempty" protobuf:"bytes,27,opt,name=targetColumn"`
	// For binary classification, the name of the positive class of the target feature
	//+kubebuilder:validation:Optional
	PositiveLabel string `json:"positiveLabel,omitempty" protobuf:"bytes,28,opt,name=positiveLabel"`
	// For binary classification, the name of the negative class of the target feature
	//+kubebuilder:validation:Optional
	NegativeLabel string `json:"negativeLabel,omitempty" protobuf:"bytes,29,opt,name=negativeLabel"`
	// The dataset where this model was trained on
	// +kubebuilder:validation:Optional
	TrainingDatasetRef v1.ObjectReference `json:"trainingDatasetRef,omitempty" protobuf:"bytes,30,opt,name=trainingDatasetRef"`
}

// PredictionCacheSpec specifies the connection information of a key-value cache to store predictions
type PredictionCacheSpec struct {
	// Active indicate if the cache is active
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"varint,1,opt,name=active"`
	// the name of the cache service
	// +kubebuilder:default:=""
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,2,opt,name=serviceName"`
}

// AutoScaling defines the configuration for the automatic scaling of a service
type AutoScaling struct {
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

// OnlineFeaturestoreSpec specifies the connection information for an online feature store
type OnlineFeatureStoreSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"varint,1,opt,name=active"`
	// +kubebuilder:default:=""
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,2,opt,name=serviceName"`
}

// PredictorStatus contain the current state of the Predictor resource
type PredictorStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The collection of historical records of models deployed to the Predictor, used internally to roll-back models
	//+kubebuilder:validation:Optional
	History []ModelRecord `json:"history,omitempty" protobuf:"bytes,2,opt,name=history"`
	// The collection of statuses for each model deployed with the Predictor
	// +kubebuilder:validation:Optional
	ModelStatuses []ModelDeploymentStatus `json:"models,omitempty" protobuf:"bytes,3,rep,name=models"`
	// The predictor let status
	PredictorletStatus PredictorletStatus `json:"predictorlet,omitempty" protobuf:"bytes,4,rep,name=predictorlet"`
	// The status of the cache
	CacheStatus PredictionCacheStatus `json:"cache,omitempty" protobuf:"bytes,5,rep,name=cache"`
	// The status of the online store
	OnlineStore OnlineStoreStatus `json:"onlineStore,omitempty" protobuf:"bytes,6,rep,name=onlineStore"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,7,opt,name=lastUpdated"`
	// The end-point URL of the Predictor
	//+kubebuilder:validation:Optional
	EndPoint string `json:"endPoint,omitempty" protobuf:"bytes,8,opt,name=endPoint"`
	// In the case of failure, the Predictor resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,9,opt,name=failureReason"`
	// In the case of failure, the Predictor resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
	// The status of the load balancer, if the Predictor's access type is LoadBalancer
	//+kubebuilder:validation:Optional
	LoadBalancerStatus *v1.LoadBalancerStatus `json:"loadBalancerStatus,omitempty" protobuf:"bytes,11,opt,name=loadBalancerStatus"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PredictorCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,12,rep,name=conditions"`
}

// MonitorSpec defines the specification to monitor a model in production
type MonitorSpec struct {
	// If true monitoring is enabled.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// How many rows to sample from the live data for
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	SamplePercent *int32 `json:"samplePercent,omitempty" protobuf:"varint,2,opt,name=samplePercent"`
	// Schedule for running the monitor
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
	// NotifierName is the name of notifier to alert in case of
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,4,opt,name=notifierName"`
	// List of model validation
	// +kubebuilder:validation:Optional
	Validations []training.ModelValidation `json:"validations,omitempty" protobuf:"bytes,5,opt,name=validations"`
	// Log requests (incoming traffic)
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	LogRequests *bool `json:"logRequests,omitempty" protobuf:"varint,6,opt,name=logRequests"`
	// Log outgoing traffic
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	LogResponses *bool `json:"logResponses,omitempty" protobuf:"varint,7,opt,name=logResponses"`
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

type PredictorAuthSpec struct {
	// Indicates if authentication is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
}

type ModelDeploymentStatus struct {
	// The model image name
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,1,opt,name=imageName"`
	// The deployment name that serves this model
	// +kubebuilder:validation:Optional
	DeploymentRef v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,2,opt,name=deploymentRef"`
	// The service name that serves this model
	// +kubebuilder:validation:Optional
	ServiceRef v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,3,opt,name=serviceRef"`
	// the name of the horizonal pod autoscaler, if autoscaling is true
	// +kubebuilder:validation:Optional
	HPAName string `json:"hpaName,omitempty" protobuf:"bytes,4,opt,name=hpaName"`
	// P50 latency
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,5,opt,name=p50"`
	// P95 latency
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,6,opt,name=p95"`
	// P99 is the 99% latency of the model
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,7,opt,name=p99"`
	// Last prediction time is the time of the last prediction
	// +kubebuilder:validation:Optional
	LastPredictionTime *metav1.Time `json:"lastPredictionTime,omitempty" protobuf:"bytes,8,opt,name=lastPredictionTime"`
	// +kubebuilder:validation:Optional
	DailyPredictionAvg int32 `json:"dailyPredictionAvg,omitempty" protobuf:"varint,9,opt,name=dailyPredictionAvg"`
	// LastFailure is the last failure that occur with the model
	// +kubebuilder:validation:Optional
	LastFailure string `json:"lastFailure,omitempty" protobuf:"bytes,10,opt,name=lastFailure"`
	// Phase is the current phase of this model deployment
	// +kubebuilder:validation:Optional
	Phase ModelDeploymentPhase `json:"phase,omitempty" protobuf:"bytes,11,opt,name=phase"`
	// DeployedAt is the last time that this model was deployed
	// +kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,12,opt,name=deployedAt"`
	// ReleasedAt is the time that this model was released
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,13,opt,name=releasedAt"`
	// Indicates if a data drift has been detected based on incoming prediction data
	// +kubebuilder:validation:Optional
	DataDrift bool `json:"dataDrift,omitempty" protobuf:"varint,14,opt,name=dataDrift"`
	// Indicates if a concept drift has been detected based on incoming prediction data
	// +kubebuilder:validation:Optional
	ConceptDrift bool `json:"conceptDrift,omitempty" protobuf:"varint,15,opt,name=conceptDrift"`
	// The predictions from the last 7 days
	// +kubebuilder:validation:Optional
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,16,rep,name=lastDailyPredictions"`
	// +kubebuilder:validation:Optional
	ObjectStatuses []KubernetesObjectStatus `json:"objectStatuses,omitempty" protobuf:"bytes,17,rep,name=objectStatuses"`
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

type KubernetesObjectStatus struct {
	// The object reference
	// +kubebuilder:validation:Optional
	Ref *v1.ObjectReference `json:"ref,omitempty" protobuf:"bytes,1,opt,name=ref"`
	// The status of the object
	// +kubebuilder:validation:Optional
	Status K8sObjectStatusState `json:"status,omitempty" protobuf:"bytes,5,opt,name=status"`
}

type PredictorletStatus struct {
	// The prediction let image name
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,1,opt,name=imageName"`
	// The deployment name that serves this model
	// +kubebuilder:validation:Optional
	DeploymentRef v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,2,opt,name=deploymentRef"`
	// The service name that serves this model
	// +kubebuilder:validation:Optional
	ServiceRef v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,3,opt,name=serviceRef"`
	// P50 latency
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,4,opt,name=p50"`
	// P95 latency
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,5,opt,name=current95"`
	// P99 is the 99% latency of the model
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,6,opt,name=current99"`
	// +kubebuilder:validation:Optional
	DailyPredictionAvg int32 `json:"dailyPredictionAvg,omitempty" protobuf:"varint,7,opt,name=dailyPredictionAvg"`
	// The total number of predictions served by the Predictor
	TotalPredictions int32 `json:"totalPredictions,omitempty" protobuf:"varint,8,opt,name=totalPredictions"`
	// The predictions from the last 7 days
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,9,rep,name=lastDailyPredictions"`
	// Last prediction time is the time of the last prediction
	// +kubebuilder:validation:Optional
	LastPredictionTime *metav1.Time `json:"lastPredictionTime,omitempty" protobuf:"bytes,10,opt,name=lastPredictionTime"`
	// LastFailure is the last faiure that occur with the model
	// +kubebuilder:validation:Optional
	LastFailure string `json:"lastFailure,omitempty" protobuf:"bytes,11,opt,name=lastFailure"`
	// Phase is the current phase of this model deployment
	// +kubebuilder:validation:Optional
	Phase ModelDeploymentPhase `json:"phase,omitempty" protobuf:"bytes,12,opt,name=phase"`
	// DeployedAt is the last time that this model was deployed
	// +kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,13,opt,name=deployedAt"`
	// ReleasedAt is the time that this model was released
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,14,opt,name=releasedAt"`
	// The dataset where this model was trained on
	// +kubebuilder:validation:Optional
	TrainingDatasetName string `json:"trainingDatasetName,omitempty" protobuf:"bytes,15,opt,name=trainingDatasetName"`
	// +kubebuilder:validation:Optional
	ObjectStatuses []KubernetesObjectStatus `json:"objectStatuses,omitempty" protobuf:"bytes,17,rep,name=objectStatuses"`
}

type MonitorStatus struct {
	// The last time when model monitoring was computed
	MonitorLastAttemptAt *metav1.Time `json:"monitorLastAttemptAt,omitempty" protobuf:"bytes,1,opt,name=monitorLastAttemptAt"`
	// The score from the last time model monitoring was computed
	MonitorLastScore float64 `json:"monitorLastScore,omitempty" protobuf:"bytes,2,opt,name=monitorLastScore"`
	// The model latency from the last time model monitoring was computed
	MonitorLastLatency float64 `json:"monitorLastLatency,omitempty" protobuf:"bytes,3,opt,name=monitorLastLatency"`
}

type PredictionCacheStatus struct {
	// The last time when model monitoring was computed
	LastAccessed *metav1.Time `json:"lastAccessed,omitempty" protobuf:"bytes,1,opt,name=LastAccessed"`
}

type OnlineStoreStatus struct {
	// The last time when model monitoring was computed
	LastAccessed *metav1.Time `json:"lastAccessed,omitempty" protobuf:"bytes,1,opt,name=LastAccessed"`
}
