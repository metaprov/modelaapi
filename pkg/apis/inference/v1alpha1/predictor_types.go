package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// AccessType define how client reach the predictor
// +kubebuilder:validation:Enum="cluster-port";"node-port";"load-balancer";"ingress";"mesh";"none"
type AccessType string

const (
	// Use cluster port if the predictor is an internal micro service
	ClusterPortAccessType AccessType = "cluster-port"
	// Use node port if the predictor can be accessed from outside the cluster
	NodePortAccessType AccessType = "node-port"
	// Use load balancer if the predictor can be accessed from outside the cluster
	LoadBalancerAccessType AccessType = "load-balancer"
	// Use ingress if the predictor should register with an ingress.
	IngressAccessType AccessType = "ingress"
	// Use service mesh if the predictor should register with a service mesh
	MeshAccessType AccessType = "mesh"
	// Use none if the desired port is none
	NoneAccessType AccessType = "none"
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
// +kubebuilder:printcolumn:name="Serving Site",type="integer",JSONPath=".spec.servingsiteRef.name",description=""
// +kubebuilder:printcolumn:name="Port",type="integer",JSONPath=".spec.input.online.port",description=""
// +kubebuilder:printcolumn:name="Access",type="integer",JSONPath=".spec.input.online.accessType",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=predictors,singular=predictor,shortName=pdr,categories={inference,modeld}
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

// Specification for drift detection
type DriftCheckSpec struct {
	// The crdn schedule to run the drift detection
	CronExpression string `json:"cronExpr,omitempty" protobuf:"bytes,1,opt,name=cronExpr"`
	// The drift threshold.
	// +kubebuilder:validation:Optional
	Threshold *float64 `json:"threshold,omitempty" protobuf:"bytes,2,opt,name=treshold"`
	// The notifier to invoke in case of
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,3,opt,name=notifierName"`
	// Tested dataset
	TestDatasetName string `json:"testDataset,omitempty" protobuf:"bytes,4,opt,name=testDataset"`
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
	CanaryMetrics []catalog.CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,3,opt,name=canaryMetrics"`
}

// PredictorSpec define the desired state of the predictor
type PredictorSpec struct {
	// User provided description
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:default =""
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// The product that this predictor serve.
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,2,opt,name=productRef"`
	// The serving site that hosts this predictor and the models
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,3,opt,name=servingsiteRef"`
	// A template for the predictor pod. The system will create the deployment based on this template.
	// +kubebuilder:validation:Optional
	Template *v1.PodTemplate `json:"template,omitempty" protobuf:"bytes,4,opt,name=template"`
	// Models is the list of models
	// +kubebuilder:validation:Optional
	Models []catalog.ModelDeploymentSpec `json:"models,omitempty" protobuf:"bytes,5,opt,name=models"`
	// How much do we increment the warm up traffic
	// +kubebuilder:validation:Optional
	DriftCheck *DriftCheckSpec `json:"driftCheck,omitempty" protobuf:"bytes,12,opt,name=driftCheck"`
	// Denotes the progressive spec
	// What metric to use when comparing the candidate to the current
	// +kubebuilder:validation:Optional
	Progressive *ProgressiveSpec `json:"progressive,omitempty" protobuf:"bytes,13,opt,name=progressive"`
	// The key in the bucket for storing all the predictor artifacts.
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:MinLength=1
	// +kubebuilder:validation:Optional
	ArtifactsFolder *string `json:"artifactsFolder,omitempty" protobuf:"bytes,14,opt,name=artifactsFolder"`
	// set of input channel, the predictor will watch those channels for predictions
	// +kubebuilder:validation:Optional
	Input PredictionChannels `json:"input,omitempty" protobuf:"bytes,15,opt,name=input"`
	// set of output channels, the predictor will output the result on any channel that is active in the output
	// +kubebuilder:validation:Optional
	Output PredictionChannels `json:"output,omitempty" protobuf:"bytes,16,opt,name=output"`
	// Min num of replicates
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=1
	MinReplicas *int32 `json:"minReplicas,omitempty" protobuf:"varint,17,opt,name=minReplicas"`
	// Does the current model pods needs autoscaling. If yes we will use HPA.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	AutoScale *bool `json:"autoscale,omitempty" protobuf:"bytes,18,opt,name=autoscale"`
	// Max num of replicates. Used during auto scaling
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:default:=1
	MaxReplicas *int32 `json:"maxReplicas,omitempty" protobuf:"varint,19,opt,name=maxReplicas"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,20,opt,name=owner"`
	// A reference to the workload class for this predictor deployment
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,21,opt,name=workloadClassName"`
	// Cache is the specification of prediction cache
	// +kubebuilder:validation:Optional
	Cache *PredictionCacheSpec `json:"cache,omitempty" protobuf:"bytes,22,opt,name=cache"`
	// Store is the specification of the online data store.
	// +kubebuilder:validation:Optional
	Store *OnlineFeaturestoreSpec `json:"store,omitempty" protobuf:"bytes,23,opt,name=store"`
	// The forward curtain recieve the prediction request before the prediction.
	// +kubebuilder:validation:Optional
	ForewardCurtainName *string `json:"forwardCurtain,omitempty" protobuf:"bytes,24,opt,name=forewardCurtain"`
	// The backward curtain recieve the curtain after the prediction.
	// +kubebuilder:validation:Optional
	BackwardCurtainName *string `json:"backwardCurtain,omitempty" protobuf:"bytes,25,opt,name=backwardCurtain"`
	// Type is the type of predictor
	// +kubebuilder:default:="online"
	// +kubebuilder:validation:Optional
	Type *PredictorType `json:"type,omitempty" protobuf:"bytes,26,opt,name=type"`
}

// A prediction cache specify the connection information to a cache (e.g. redis) that can store the prediction.
// A cache is a key value store.
type PredictionCacheSpec struct {
	// Active indicate if the cache is active
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"bytes,1,opt,name=active"`
	// the name of the cache service
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,2,opt,name=serviceName"`
}

// A OnlineFeaturestoreSpec speficy the connection information for an online feature store for this prediction.
type OnlineFeaturestoreSpec struct {
	// Active indicate if the cache is active
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Active *bool `json:"active,omitempty" protobuf:"bytes,1,opt,name=active"`
	// the name of the cache service
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,2,opt,name=serviceName"`
}

// PredictorStatus contain the current state of the Predictor resource
type PredictorStatus struct {
	// Model one status
	// +kubebuilder:validation:Optional
	ModelStatuses []catalog.ModelDeploymentStatus `json:"modelStatus,omitempty" protobuf:"bytes,1,opt,name=modelStatus"`

	Conditions []PredictorCondition `json:"conditions,omitempty" protobuf:"bytes,2,rep,name=conditions"`
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
	// The channels
	Channels []ChannelStatus `json:"statuses,omitempty" protobuf:"bytes,8,opt,name=statuses"`
	// Prev model spec stores the prev working model, The field is used in case of a roll back
	//+kubebuilder:validation:Optional
	PrevModelSpec *catalog.ModelDeploymentSpec `json:"prevModel,omitempty" protobuf:"bytes,9,opt,name=prevModel"`
}

type PredictorHealth struct {
	TotalPredictions   int32 `json:"totalPredictions,omitempty" protobuf:"varint,1,opt,name=totalPredictions"`
	TotalRequests      int32 `json:"totalRequests,omitempty" protobuf:"varint,2,opt,name=totalRequests"`
	TotalP95Requests   int32 `json:"totalP95Requests,omitempty" protobuf:"varint,3,opt,name=totalP95Requests"`
	MedianResponseTime int32 `json:"medianResponseTime,omitempty" protobuf:"varint,4,opt,name=medianResponseTime"`
	// Last 7 days predictions
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,5,rep,name=lastDailyPredictions"`
}

// The specific of a prediction channel
type PredictionChannels struct {
	// Online is a  deployment of the predictor as a microservice.
	// +kubebuilder:validation:Optional
	Online *OnlineChannelSpec `json:"online,omitempty" protobuf:"bytes,1,opt,name=online"`
	// Table is a channel that uses RDBMS for input and output
	// +kubebuilder:validation:Optional
	Table *TableChannelSpec `json:"table,omitempty" protobuf:"bytes,2,opt,name=table"`
	// Bot is a channel that uses chats for input and output
	// +kubebuilder:validation:Optional
	Bot *BotChannelSpec `json:"bot,omitempty" protobuf:"bytes,3,opt,name=bot"`
	// Bucket is a channel where predictions are placed in a bucket folder and results are placed in another folder
	// +kubebuilder:validation:Optional
	Bucket *BucketChannelSpec `json:"bucket,omitempty" protobuf:"bytes,4,opt,name=bucket"`
	// Define a streaming channel for the predictor
	// +kubebuilder:validation:Optional
	Streaming *StreamingChannelSpec `json:"streaming,omitempty" protobuf:"bytes,5,opt,name=streaming"`
}

type OnlineChannelSpec struct {
	// Service port specify the predictor port.
	// Default: 8080
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	Port *int32 `json:"port,omitempty" protobuf:"varint,5,opt,name=port"`
	// This is the path relative to the ingress path
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:validation:MinLength=1
	// Default: /predict
	// +kubebuilder:validation:Optional
	Path *string `json:"path,omitempty" protobuf:"bytes,6,opt,name=path"`
	// The access method specified how external clients will access the predictor
	// Default: ClusterPort
	// +kubebuilder:validation:Optional
	AccessType *AccessType `json:"accessType,omitempty" protobuf:"bytes,7,opt,name=accessType"`
}

type StreamingChannelSpec struct {
	// StorageConnection name to the streaming provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// the streaming topic (input or output)
	Topic *string `json:"inputKey,omitempty" protobuf:"bytes,2,opt,name=inputKey"`
}

// A prediction table describes a dataset and a table that will be used to enter unseen data, and get prediction
type TableChannelSpec struct {
	// connection to the database provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Options, this is the datasource containing the table schema
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,2,opt,name=datasourceName"`
	// The table name. Optional
	// Default to the predictor name
	TableName *string `json:"tableName,omitempty" protobuf:"bytes,3,opt,name=tableName"`
	// In seconds, the interval.
	ScanInterval int32 `json:"scanInterval,omitempty" protobuf:"varint,4,opt,name=scanInterval"`
}

type BotChannelSpec struct {
	// the connection to the messaging provider
	// Required,
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// The name of the notifier that will be used by the prediction bot.
	// Required
	NotifierName string `json:"notifierName,omitempty" protobuf:"bytes,2,opt,name=notifierName"`
}

// Look for prediction in a bucket key.
// Request for prediction will be placed in the key.
// Result will be placed in the output bucket
type BucketChannelSpec struct {
	// the connection to the cloud provider
	// Required,
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Required,
	BucketName string `json:"databaseConnectionName,omitempty" protobuf:"bytes,2,opt,name=databaseConnectionName"`
	// The location of the input or the output
	// Required,
	Key string `json:"inputKey,omitempty" protobuf:"bytes,3,opt,name=inputKey"`
	// In seconds, the interval.
	ScanInterval int32 `json:"scanInterval,omitempty" protobuf:"varint,4,opt,name=scanInterval"`
}

type ChannelStatus struct {
	Name  string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	Error string `json:"error,omitempty" protobuf:"bytes,2,opt,name=error"`
}
