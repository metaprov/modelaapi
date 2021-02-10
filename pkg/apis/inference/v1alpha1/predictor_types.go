package v1alpha1

import (
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

type CanaryMetric string

const (
	// Use cluster port if the predictor is an internal micro service
	CpuCanaryMetric     CanaryMetric = "cpu"
	MemCanaryMetric     CanaryMetric = "mem"
	LatencyCanaryMetric CanaryMetric = "latency"
	CrashCanaryMetric   CanaryMetric = "crash"
)

//==============================================================================
// Predictor
//==============================================================================

// Predictor condition
type PredictorConditionType string

/// Predictor Condition
const (
	// The system is setting up the predictor
	PredictorPending PredictorConditionType = "Pending"
	// The predictor is ready to serve predictions.
	PredictorReady PredictorConditionType = "Ready"
	// Predictor was shut down successfully
	PredictorSuccess PredictorConditionType = "Success"
	// Predictor has failed
	PredictorFailed PredictorConditionType = "Failed"
	// The predictor is up, but is not serving predictions
	PredictorInactive PredictorConditionType = "Inactive"
	// Db Archived
	PredictorArchived PredictorConditionType = "Archived"
)

// PredictorCondition describes the state of a prediction at a certain point.
type PredictorCondition struct {
	// Type of account condition.
	Type PredictorConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictorConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +k8s:openapi-gen=true
// +genclient
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Port",type="integer",JSONPath=".spec.port",description=""
// +kubebuilder:printcolumn:name="Production",type="string",JSONPath=".spec.prod.modelName",description=""
// +kubebuilder:printcolumn:name="Weight",type="string",JSONPath=".spec.prod.weight",description=""
// +kubebuilder:printcolumn:name="Access",type="string",JSONPath=".spec.accessType",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=predictors,singular=predictor,categories={inference,modeld}
// PredictorName represent an PredictorName API object
type Predictor struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictorSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status PredictorStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
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
	// +optional
	Threshold *float64 `json:"threshold,omitempty" protobuf:"bytes,2,opt,name=treshold"`
	// The notifier to invoke in case of
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,3,opt,name=notifierName"`
	// Tested dataset
	TestDatasetName string `json:"testDataset,omitempty" protobuf:"bytes,7,opt,name=testDataset"`
}

// The desired state of the model.
type ModelDeploymentSpec struct {
	// The model serving the prediction
	ModelName *string `json:"modelName,omitempty" protobuf:"bytes,1,opt,name=modelName"`
	// number of replicas of the current model
	// Default: 1
	// +optional
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=0
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,2,opt,name=replicas"`
	// Does the current model pods needs autoscaling. If yes we will use HPA.
	// Default is false
	// +optional
	AutoScale *bool `json:"autoscale,omitempty" protobuf:"bytes,3,opt,name=autoscale"`
	// How much traffic to the current model
	// Default: 100.
	// +optional
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	Weight *int32 `json:"weight,omitempty" protobuf:"varint,4,opt,name=weight"`
	// Denotes if this deployment is canary. This must be false for the prod deployment.
	// Default: false
	// +optional
	Canary *bool `json:"canary,omitempty" protobuf:"bytes,5,opt,name=canary"`
	// Denotes if the model is a shadow. This must be false for the prod deployment.
	// Default: false
	// +optional
	Shadow *bool `json:"shadow,omitempty" protobuf:"bytes,6,opt,name=shadow"`
	// Filter donotes a selection on the model
	// +optional
	Filter *string `json:"filter,omitempty" protobuf:"bytes,7,opt,name=filter"`
	// If the deployment is canary, the metric define how to evaluate the canary.
	// Default: none
	// +optional
	CanaryMetrics []CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,8,opt,name=canaryMetrics"`
}

type ModelDeploymentStatus struct {
	// The model image name
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,1,opt,name=imageName"`
	// The deployment name that serves this model
	DeploymentName string `json:"deploymentName,omitempty" protobuf:"bytes,2,opt,name=deploymentName"`
	// The service name that serves this model
	ServiceName string `json:"serviceName,omitempty" protobuf:"bytes,3,opt,name=serviceName"`
	// the name of the horizonal pod autoscaler, if autoscaling is true
	HPAName string `json:"hpaName,omitempty" protobuf:"bytes,4,opt,name=hpaName"`
	// P95 latency
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,5,opt,name=current95"`
	// P95 latency
	P99 float64 `json:"p9,omitempty" protobuf:"bytes,6,opt,name=current99"`
	// Last current prediction
	LastPrediction *metav1.Time `json:"lastPrediction,omitempty" protobuf:"bytes,7,opt,name=lastPrediction"`

	DailyPredictionAvg int32 `json:"dailyPredictionAvg,omitempty" protobuf:"varint,8,opt,name=dailyPredictionAvg"`
}

type ProgressiveSpec struct {
	// How long in seconds does the warm up period started
	// This is used only during progressive deployment
	// +optional
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	Warmup *int32 `json:"warmup,omitempty" protobuf:"varint,12,opt,name=warmup"`
	// How much do we increment the warm up traffic
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	// Default : 10
	// +optional
	TrafficIncrement *int32 `json:"trafficIncrement,omitempty" protobuf:"varint,14,opt,name=trafficIncrement"`
	// What metric to use when comparing the candidate to the current
	// +optional
	CanaryMetrics []CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,13,opt,name=canaryMetrics"`
}

// PredictorSpec define the desired state of the predictor
type PredictorSpec struct {
	// The account name of the owner of this predictor
	// +optional
	OwnerName *string `json:"ownerName,omitempty" protobuf:"bytes,1,opt,name=ownerName"`
	// User provided description
	// +kubebuilder:validation:MaxLength=256
	// Default : empty
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The product that this predictor serve.
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,3,opt,name=productRef"`
	// The serving site that owns the
	// +optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,4,opt,name=servingsiteRef"`
	// Service port specify the predictor port.
	// Default: 8080
	// +optional
	Port *int32 `json:"port,omitempty" protobuf:"varint,5,opt,name=port"`
	// This is the path relative to the ingress path
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:validation:MinLength=1
	// Default: /predict
	// +optional
	Path *string `json:"path,omitempty" protobuf:"bytes,6,opt,name=path"`
	// The access method specified how external clients will access the predictor
	// Default: ClusterPort
	// +optional
	AccessType *AccessType `json:"accessType,omitempty" protobuf:"bytes,7,opt,name=accessType"`
	// A template for the predictor pod. The system will create the deployment based on this template.
	// +optional
	Template *v1.PodTemplate `json:"template,omitempty" protobuf:"bytes,8,opt,name=template"`
	// Production model deployment
	// +optional
	Models []ModelDeploymentSpec `json:"models,omitempty" protobuf:"bytes,9,opt,name=models"`
	// How much do we increment the warm up traffic
	// +optional
	DriftCheck *DriftCheckSpec `json:"driftCheck,omitempty" protobuf:"bytes,12,opt,name=driftCheck"`
	// Denotes the progressive spec
	// What metric to use when comparing the candidate to the current
	// +optional
	Progressive *ProgressiveSpec `json:"progressive,omitempty" protobuf:"bytes,13,opt,name=progressive"`
	// The key in the bucket for storing all the predictor artifacts.
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:MinLength=1
	// +optional
	ArtifactsFolder *string `json:"artifactsFolder,omitempty" protobuf:"bytes,14,opt,name=artifactsFolder"`
	// set of input channel, the predictor will watch those channels for predictions
	// +optional
	InputChannels []PredictionChannel `json:"inputChannels,omitempty" protobuf:"bytes,15,opt,name=inputChannels"`
	// set of output channels, the predictor will
	// +optional
	OutputChannels []PredictionChannel `json:"outputChannels,omitempty" protobuf:"bytes,16,opt,name=outputChannels"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,17,opt,name=owner"`
}

// PredictorStatus contain the current state of the Predictor resource
type PredictorStatus struct {
	// Model one status
	// +optional
	ModelStatuses []ModelDeploymentStatus `json:"modelStatus,omitempty" protobuf:"bytes,1,opt,name=modelStatus"`

	Conditions []PredictorCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
	// When was the last check attempt
	MonitorLastAttemptAt metav1.Timestamp `json:"monitorLastAttemptAt,omitempty" protobuf:"bytes,6,opt,name=monitorLastAttemptAt"`
	// What was the last score
	MonitorLastScore float64 `json:"monitorLastScore,omitempty" protobuf:"bytes,7,opt,name=monitorLastScore"`
	// What was the last latency
	MonitorLastLatency float64 `json:"monitorLastLatency,omitempty" protobuf:"bytes,8,opt,name=monitorLastLatency"`
	// The Health of the predictor
	Health PredictorHealth `json:"health,omitempty" protobuf:"bytes,9,opt,name=health"`
	// The channels
	Channels []ChannelStatus `json:"statuses,omitempty" protobuf:"bytes,10,opt,name=statuses"`
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
type PredictionChannel struct {
	// Define a prediction via table
	// +optional
	Table *TableChannelSpec `json:"table,omitempty" protobuf:"bytes,1,opt,name=table"`
	// Define a prediction via a bot
	// +optional
	Bot *BotChannelSpec `json:"bot,omitempty" protobuf:"bytes,2,opt,name=bot"`
	// Define a prediction via a bot
	// +optional
	Bucket *BucketChannelSpec `json:"bucket,omitempty" protobuf:"bytes,3,opt,name=bucket"`
	// Define a streaming spec for the predictor
	// +optional
	Streaming *StreamingChannelSpec `json:"streaming,omitempty" protobuf:"bytes,4,opt,name=streaming"`
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
