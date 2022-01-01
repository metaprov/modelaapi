package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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

// PredictorCondition describes the state of a prediction at a certain point.
type PredictorCondition struct {
	// Type of account condition.
	Type PredictorConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictorConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Predictor represent an PredictorName API object
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
// +kubebuilder:resource:scope=Namespaced
type Predictor struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictorSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictorStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictorList represent a list of predictors
type PredictorList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Predictor `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type ProgressiveSpec struct {
	// How long in seconds does the warm up period started
	// This is used only during progressive deployment
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	Warmup *int32 `json:"warmup,omitempty" protobuf:"varint,1,opt,name=warmup"`
	// How much do we increment the warm up traffic
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	// Default : 10
	// +kubebuilder:validation:Optional
	TrafficIncrement *int32 `json:"trafficIncrement,omitempty" protobuf:"varint,2,opt,name=trafficIncrement"`
	// What metric to use when comparing the candidate to the current
	// +kubebuilder:validation:Optional
	CanaryMetrics []catalog.CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,3,rep,name=canaryMetrics"`
}

// PredictorSpec define the desired state of the predictor
type PredictorSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The product that this predictor serve.
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,3,opt,name=productRef"`
	// The serving site that hosts this predictor and the models
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,4,opt,name=servingsiteRef"`
	// A template for the predictor pod. The system will create the deployment based on this template.
	// +kubebuilder:validation:Optional
	Template *v1.PodTemplate `json:"template,omitempty" protobuf:"bytes,5,opt,name=template"`
	// Models is the list of models
	// +kubebuilder:validation:Optional
	Models []catalog.ModelDeploymentSpec `json:"models,omitempty" protobuf:"bytes,6,rep,name=models"`
	// Denotes the progressive spec
	// What metric to use when comparing the candidate to the current
	// +kubebuilder:validation:Optional
	Progressive *ProgressiveSpec `json:"progressive,omitempty" protobuf:"bytes,7,opt,name=progressive"`
	// The key in the bucket for storing all the predictor artifacts.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	ArtifactsFolder *string `json:"artifactsFolder,omitempty" protobuf:"bytes,8,opt,name=artifactsFolder"`
	// set of input channel, the predictor will watch those channels for predictions
	// +kubebuilder:validation:Optional
	// Service port specify the predictor port.
	// Default: 8080
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=8080
	Port *int32 `json:"port,omitempty" protobuf:"varint,9,opt,name=port"`
	// This is the path relative to the ingress path
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Path *string `json:"path,omitempty" protobuf:"bytes,10,opt,name=path"`
	// The access method specified how external clients will access the predictor
	// Default: ClusterPort
	// +kubebuilder:validation:Optional
	AccessType *catalog.AccessType `json:"accessType,omitempty" protobuf:"bytes,11,opt,name=accessType"`
	// Replicas defines the number of replicas when auto scaling is disabled.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=1
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,12,opt,name=replicas"`
	// AutoScaling defines the auto scaling policy
	// +kubebuilder:validation:Optional
	AutoScaling AutoScaling `json:"autoScaling,omitempty" protobuf:"bytes,13,opt,name=autoScaling"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,14,opt,name=owner"`
	// A reference to the workload class for this predictor deployment
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,15,opt,name=workloadClassName"`
	// Cache is the specification of prediction cache
	// +kubebuilder:validation:Optional
	Cache *PredictionCacheSpec `json:"cache,omitempty" protobuf:"bytes,16,opt,name=cache"`
	// Store is the specification of the online data store.
	// +kubebuilder:validation:Optional
	Store *OnlineFeaturestoreSpec `json:"store,omitempty" protobuf:"bytes,17,opt,name=store"`
	// The forward curtain receive the prediction request before the prediction.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ForewardCurtainName *string `json:"forwardCurtain,omitempty" protobuf:"bytes,18,opt,name=forewardCurtain"`
	// The backward curtain receive the curtain after the prediction.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	BackwardCurtainName *string `json:"backwardCurtain,omitempty" protobuf:"bytes,19,opt,name=backwardCurtain"`
	// Type is the type of predictor
	// +kubebuilder:default:="online"
	// +kubebuilder:validation:Optional
	Type *PredictorType `json:"type,omitempty" protobuf:"bytes,20,opt,name=type"`
	// Task is the task of the predictor
	// +kubebuilder:default:="unknown"
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,21,opt,name=task"`
	// The prediction treshold
	// +kubebuilder:validation:Optional
	PredictionTreshold *float64 `json:"predictionTreshold,omitempty" protobuf:"bytes,22,opt,name=predictionTreshold"`
	// Monitor spec specify the monitor for this predictor.
	// +kubebuilder:validation:Optional
	Monitor *MonitorSpec `json:"monitor,omitempty" protobuf:"bytes,23,opt,name=monitor"`
	// specification for dash app
	// +kubebuilder:validation:Optional
	AppSpec *AppSpec `json:"app,omitempty" protobuf:"bytes,24,opt,name=app"`
	// specify the predictor authentication
	// +kubebuilder:validation:Optional
	Auth *PredictorAuthSpec `json:"auth,omitempty" protobuf:"bytes,25,opt,name=auth"`
}

// A prediction cache specify the connection information to a cache (e.g. redis) that can store the prediction.
// A cache is a key value store.
type PredictionCacheSpec struct {
	// Active indicate if the cache is active
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"varint,1,opt,name=active"`
	// the name of the cache service
	// +kubebuilder:default:=""
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,2,opt,name=serviceName"`
}

// AutoScaling defines the configuration for auto scaling
type AutoScaling struct {
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Min num of replicates
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=1
	MinReplicas *int32 `json:"minReplicas,omitempty" protobuf:"varint,2,opt,name=minReplicas"`
	// Max num of replicates. Used during auto scaling
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:default:=1
	MaxReplicas *int32 `json:"maxReplicas,omitempty" protobuf:"varint,3,opt,name=maxReplicas"`
	// Used with the horizontal auto builder
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:default:=80
	CpuAvgUtilization *int32 `json:"cpuAvgUtilization,omitempty" protobuf:"varint,4,opt,name=cpuAvgUtilization"`
	// Used with the horizontal auto builder
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:default:=80
	MemAvgUtilization *int32 `json:"memAvgUtilization,omitempty" protobuf:"varint,5,opt,name=memAvgUtilization"`
}

// A OnlineFeaturestoreSpec speficy the connection information for an online feature store for this prediction.
type OnlineFeaturestoreSpec struct {
	// Active indicate if the cache is active
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"varint,1,opt,name=active"`
	// the name of the cache service
	// +kubebuilder:default:=""
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,2,opt,name=serviceName"`
}

// PredictorStatus contain the current state of the Predictor resource
type PredictorStatus struct {
	// Model one status
	// +kubebuilder:validation:Optional
	ModelStatuses []catalog.ModelDeploymentStatus `json:"modelStatus,omitempty" protobuf:"bytes,1,rep,name=modelStatus"`
	// When was the last check attempt
	MonitorLastAttemptAt metav1.Timestamp `json:"monitorLastAttemptAt,omitempty" protobuf:"bytes,3,opt,name=monitorLastAttemptAt"`
	// What was the last score
	MonitorLastScore float64 `json:"monitorLastScore,omitempty" protobuf:"bytes,4,opt,name=monitorLastScore"`
	// What was the last latency
	MonitorLastLatency float64 `json:"monitorLastLatency,omitempty" protobuf:"bytes,5,opt,name=monitorLastLatency"`
	// The Health of the predictor
	Health PredictorHealth `json:"health,omitempty" protobuf:"bytes,6,opt,name=health"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,7,opt,name=observedGeneration"`
	// Prev model spec stores the prev working model, The field is used in case of a roll back
	//+kubebuilder:validation:Optional
	History []ModelRecord `json:"history,omitempty" protobuf:"bytes,9,opt,name=history"`
	// Monitor status holds the status of the last monitor action.
	//+kubebuilder:validation:Optional
	MonitorStatus MonitorStatus `json:"monitorStatus,omitempty" protobuf:"bytes,10,opt,name=monitorStatus"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,11,opt,name=lastUpdated"`
	// The target column
	//+kubebuilder:validation:Optional
	TargetColumn string `json:"targetColumn,omitempty" protobuf:"bytes,12,opt,name=targetColumn"`
	// For binary classification, the name of the positive class
	//+kubebuilder:validation:Optional
	PositiveLabel string `json:"positiveLabel,omitempty" protobuf:"bytes,13,opt,name=positiveLabel"`
	// For binary classification, the name of the negative class
	//+kubebuilder:validation:Optional
	NegativeLabel string `json:"negativeLabel,omitempty" protobuf:"bytes,14,opt,name=negativeLabel"`
	// The predictor app status
	//+kubebuilder:validation:Optional
	AppStatus AppStatus `json:"appStatus,omitempty" protobuf:"bytes,15,opt,name=appStatus"`
	// the end point url of the predictor
	//+kubebuilder:validation:Optional
	EndPoint string `json:"endPoint,omitempty" protobuf:"bytes,16,opt,name=endPoint"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PredictorCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,17,rep,name=conditions"`
}

type PredictorHealth struct {
	// True if there is system is a problem with the service
	Service bool `json:"service,omitempty" protobuf:"varint,1,opt,name=service"`
	// True if there is a data drift
	DataDrift bool `json:"dataDrift,omitempty" protobuf:"varint,2,opt,name=dataDrift"`
	// True if there is a concept drift
	ConceptDrift bool `json:"conceptDrift,omitempty" protobuf:"varint,3,opt,name=conceptDrift"`
	// Total prediction for this predictor
	TotalPredictions int32 `json:"totalPredictions,omitempty" protobuf:"varint,4,opt,name=totalPredictions"`
	// Daily Avg
	DailyAvg int32 `json:"avg,omitempty" protobuf:"varint,5,opt,name="`
	// P95 response time
	P95ResponseTime int32 `json:"totalP95Requests,omitempty" protobuf:"varint,6,opt,name=totalP95Requests"`
	// Median response time
	MedianResponseTime int32 `json:"medianResponseTime,omitempty" protobuf:"varint,7,opt,name=medianResponseTime"`
	// Last 7 days predictions
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,8,rep,name=lastDailyPredictions"`
}

// Specify the model monitor.
type MonitorSpec struct {
	// If true monitoring is enabled.
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// How many rows to sample from the live data for
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	SamplePrecent *int32 `json:"samplePrecent,omitempty" protobuf:"varint,2,opt,name=samplePrecent"`
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

type MonitorStatus struct {
	// Last Prediction time
	LastPrediction *metav1.Time `json:"lastPrediction,omitempty" protobuf:"bytes,1,opt,name=lastPrediction"`
	// Validation results contains the latest result
	ValidationResult []training.ModelValidationResult `json:"validationResults,omitempty" protobuf:"bytes,2,opt,name=validationResults"`
}

// Model Record hold the state of a model that was in production. This support roll back of a model.
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
	AvgDailyPrediction int32 `json:"avgDailyPrediction,omitempty" protobuf:"bytes,5,opt,name=avgDailyPrediction"`
	// Retried at is the time that the model was retired from production.
	// +kubebuilder:validation:Optional
	AvgLatency float64 `json:"avgLatency,omitempty" protobuf:"bytes,6,opt,name=avgLatency"`
}

// Dash App specification, the app is created based on the model schema.
type AppSpec struct {
	// Retried at is the time that the model was retired from production.
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`

	// App port. default port is 8080.
	// +kubebuilder:default:=8080
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
}

type AppStatus struct {
	//
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
}

type PredictorAuthSpec struct {
	// If true auth is enabled.
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
}
