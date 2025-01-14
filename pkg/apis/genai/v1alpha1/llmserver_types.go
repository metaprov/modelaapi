package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type LLMServerConditionType string

const (
	LLMServerSaved     LLMServerConditionType = "Saved"
	LLMServerDeployed  LLMServerConditionType = "Deployed"
	LLMServerRefreshed LLMServerConditionType = "Refreshed"
)

const (
	DeployingReason = "Deploying"
)

type APIFormat string

const (
	OpenAIAPIFormat    APIFormat = "openai"
	OllamaAPIFormat    APIFormat = "ollama"
	VertexAIAPIFormat  APIFormat = "vertexai"
	AnthropicAPIFormat APIFormat = "anthropic"
)

// +kubebuilder:subresource:status
// +kubebuilder:resource:path=llmservers,singular=llmserver,shortName=llms,categories={llm,modela}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Last Sync",type="date",JSONPath=".status.lastSyncAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// LLMServer represents a deployment of a proxy server to one or more LLMs
type LLMServer struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              LLMServerSpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            LLMServerStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// LLMServerList contains a list of LLMServer objects
type LLMServerList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []LLMServer `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type LLMServerAccessSpec struct {
	// The port number that will be exposed by the Kubernetes Service to serve requests
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=8080
	Port *int32 `json:"port,omitempty" protobuf:"varint,1,opt,name=port"`
	// The port number that will be exposed on the external address of every node on the cluster, in the case of the
	// Access Type being NodePort. Traffic from the port will be forwarded to the LLM Server deployment
	// +kubebuilder:validation:Minimum=30000
	// +kubebuilder:validation:Maximum=32767
	// +kubebuilder:default:=30000
	// +kubebuilder:validation:Optional
	NodePort *int32 `json:"nodePort,omitempty" protobuf:"varint,2,opt,name=nodePort"`
	// The Kubernetes-native access method which specifies how the Kubernetes Service created by the LLM Serveraaaa will be exposed.
	// See https://modela.ai/docs/docs/serving/production/#access-method for a detailed description of each access type
	// +kubebuilder:default:="cluster-ip"
	// +kubebuilder:validation:Optional
	AccessType catalog.AccessType `json:"accessType,omitempty" protobuf:"bytes,4,opt,name=accessType"`
}

// LLMServerSpec specifies the configuration of the LLM server
type LLMServerSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The user-provided description of the LLM Server
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The name of the Serving Site under which the LLM Server proxy deployment will be created.
	// If empty, default to the Data Product's default Serving Site
	// +kubebuilder:validation:Optional
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,3,opt,name=servingSiteName"`
	// The resource requirements that will be allocated to the proxy deployment
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,4,opt,name=resources"`
	// The model endpoints served by the proxy
	Endpoints []EndpointSpec `json:"endpoints,omitempty" protobuf:"bytes,6,opt,name=endpoints"`
	// The query engines available to the models
	QueryEngines []QueryEngineSpec `json:"queryEngines,omitempty" protobuf:"bytes,7,opt,name=queryEngines"`
	// The collection of retrievers available to the query engines
	Retrievers []RetrieverSpec `json:"retrievers,omitempty" protobuf:"bytes,8,opt,name=retrievers"`
	// The specification for the LLM Server service to be exposed and accessed externally
	Access LLMServerAccessSpec `json:"access,omitempty" protobuf:"bytes,9,opt,name=access"`
	// The security configuration for the LLM Server, which determines how incoming requests are authorized.
	// If unspecified, the LLM Server will be exposed with no authorization
	Authorization *LLMServerAuthorizationSpec `json:"authorization,omitempty" protobuf:"bytes,10,opt,name=authorization"`
	// The configuration for Alerts generated by the LLM Server
	Notification *catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,11,opt,name=notification"`
}

// LLMServerAuthorizationSpec defines the configuration to authorize incoming requests to the LLMServer
type LLMServerAuthorizationSpec struct {
	// Indicates if models served by the LLMServer can be accessed without authorization (not recommended)
	Insecure *bool `json:"insecure,omitempty" protobuf:"bytes,1,opt,name=insecure"`
	// The collection of API key groups whose API keys may be used to authorize requests to models
	// served by the LLMServer. AllowedKeyGroups acts as a whitelist, only allowing API keys belonging to a group
	// within the collection to be used. If empty, all API key groups will be allowed to authorize requests to the LLMServer
	AllowedKeyGroups []string `json:"allowedKeyGroups,omitempty" protobuf:"bytes,2,opt,name=allowedKeyGroups"`
	// The collection of API key names that may be used to authenticate requests to models served by the LLMServer.
	// AllowedKeyNames acts as a whitelist, only allowing API keys with names within the collection to be used.
	// If empty, API keys will not be restricted by their names
	AllowedKeyNames []string `json:"allowedKeyNames,omitempty" protobuf:"bytes,3,opt,name=allowedKeyNames"`
}

// EndpointSpec specifies the serving configuration for a single large language model endpoint
type EndpointSpec struct {
	// The unique name of the model
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The name of the query engine used to augment requests to the LLM Server.
	// If unspecified, no augmentation will be performed.
	QueryEngine *string `json:"queryEngine,omitempty" protobuf:"bytes,2,opt,name=queryEngine"`
	// The path suffix where the endpoint will be served.
	// If unspecified, the default suffix for the format will be used.
	// The path "/query" will be enabled by default for all endpoints
	Path *string `json:"path,omitempty" protobuf:"bytes,3,opt,name=path"`
	// The collection of path suffixes where the endpoint will be served.
	Paths []string `json:"paths,omitempty" protobuf:"bytes,4,opt,name=paths"`
	// The API format that will be required for all requests to the endpoint.
	// When unspecified, defaults to the OpenAI API format.
	Format *APIFormat `json:"format,omitempty" protobuf:"bytes,5,opt,name=format"`
	// The default language model to use for all internal and consumer-facing chat completion requests.
	// The specified model may not always be used to generate a response. The final response synthesizer
	// which generates the response may be overridden to use a different model.
	Model ModelSpec `json:"model,omitempty" protobuf:"bytes,6,opt,name=model"`
}

// EndpointMetrics contains the metrics for a single model endpoint (collected by Prometheus)
type EndpointMetrics struct {
	// 50% latency for requests served by the endpoint
	// +kubebuilder:validation:Optional
	P50 float64 `json:"p50,omitempty" protobuf:"bytes,4,opt,name=p50"`
	// 95% latency for requests served by the endpoint
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,5,opt,name=p95"`
	// 99% latency for requests served by the endpoint
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,6,opt,name=p99"`
	// The total number of requests served by the endpoint
	TotalRequests int32 `json:"totalRequests,omitempty" protobuf:"varint,8,opt,name=totalRequests"`
	// The total number of tokens served by the endpoint
	TotalTokens int32 `json:"totalTokens,omitempty" protobuf:"varint,9,opt,name=totalTokens"`
	// The total approximate cost (in USD) of tokens served by the endpoint
	TotalCost float32 `json:"totalCost,omitempty" protobuf:"varint,10,opt,name=totalCost"`
}

// EndpointStatus describes the current state of a single model served by the LLMServer proxy
type EndpointStatus struct {
	// The unique name of the model
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The details of the last failure that occurred while deploying the model
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// The metrics collected for the model
	Metrics *EndpointMetrics `json:"metrics,omitempty" protobuf:"bytes,5,opt,name=metrics"`
}

type LLMServerStatus struct {
	// ObservedGeneration specifies the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Endpoints contains the collection of statuses for each model served by the proxy server
	Endpoints []EndpointStatus `json:"endpoints,omitempty" protobuf:"bytes,2,opt,name=endpoints"`
	// Endpoint contains the URL where the proxy server is exposed. An endpoint will only be exposed
	// in the case that the server is bound to an Ingress resource
	Endpoint *string `json:"endpoint,omitempty" protobuf:"bytes,3,opt,name=endpoint"`
	// DeployedAt specifies the time that the LLM Server proxy deployment was created
	//+kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,4,opt,name=deployedAt"`
	// RefreshedAt specifies the time that the LLM Server was refreshed
	//+kubebuilder:validation:Optional
	RefreshedAt *metav1.Time `json:"refreshedAt,omitempty" protobuf:"bytes,10,opt,name=refreshedAt"`
	// The reference to the Kubernetes Deployment that manages the pods for the prediction proxy
	// +kubebuilder:validation:Optional
	DeploymentRef *v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,5,opt,name=deploymentRef"`
	// The reference to the Kubernetes Service which exposes the prediction proxy
	// +kubebuilder:validation:Optional
	ServiceRef *v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,6,opt,name=serviceRef"`
	// The details of the failure that occurred while deploying the prediction proxy
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,7,opt,name=failureMessage"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,8,opt,name=updatedAt"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,9,rep,name=conditions"`
}
