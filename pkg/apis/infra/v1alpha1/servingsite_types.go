package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// ServingSite
//==============================================================================

type ServingSiteConditionType string

const (
	ServingSiteNamespaceReady ServingSiteConditionType = "NamespaceReady"
	ServingSiteRbacReady      ServingSiteConditionType = "RbacReady"
	ServingSiteIngressReady   ServingSiteConditionType = "IngressReady"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=servingsites,singular=servingsite,categories={infra,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description="owner"
// +kubebuilder:printcolumn:name="FQDN",type="string",JSONPath=".spec.ingress.fqdn",description=""
// +kubebuilder:printcolumn:name="GRPC Ingress",type="string",JSONPath=".status.grpcIngressName",description=""
// +kubebuilder:printcolumn:name="HTTP Ingress",type="string",JSONPath=".status.httpIngressName",description=""
// +kubebuilder:printcolumn:name="Predictors",type="number",JSONPath=".status.activePredictors",description=""
// +kubebuilder:printcolumn:name="Cluster",type="string",JSONPath=".spec.clusterName",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// ServingSite represents a namespace where model serving workloads are executed under
type ServingSite struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ServingSiteSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ServingSiteStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ServingSiteList is a list of ServingSite
type ServingSiteList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ServingSite `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ServingSiteSpec defines the desired state of a ServingSite
type ServingSiteSpec struct {
	// The user-provided description of the object
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,2,opt,name=owner"`
	// Limits specifies the hard resource limits that can be allocated for workloads created under the ServingSite
	// +kubebuilder:validation:Optional
	Limits ResourceLimitSpec `json:"limits,omitempty" protobuf:"bytes,3,opt,name=limits"`
	// Ingress defines the specification to create Ingress resources that can route traffic
	// to the resources which exist under the Serving Site namespace
	// +kubebuilder:validation:Optional
	Ingress IngressSpec `json:"ingress,omitempty" protobuf:"bytes,4,opt,name=ingress"`
}

type ServingSiteStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// The number of active predictor services
	ActivePredictors int32 `json:"activePredictors,omitempty" protobuf:"varint,3,opt,name=activePredictors"`
	// The number of inactive (non-deployed) predictors
	InactivePredictors int32 `json:"inactivePredictors,omitempty" protobuf:"varint,4,opt,name=inactivePredictors"`
	// The number of predictor services that have failed/errored
	TotalPredictorServiceFailed int32 `json:"totalPredictorServiceFailed,omitempty" protobuf:"varint,5,opt,name=totalPredictorServiceFailed"`
	// The number of predictors that have detected a data drift
	TotalPredictorDataDriftFailed int32 `json:"totalPredictorDataDriftFailed,omitempty" protobuf:"varint,6,opt,name=totalPredictorDataDriftFailed"`
	// The number of predictors that have detected average inaccurate results
	TotalPredictorAccuracyFailed int32 `json:"totalPredictorAccuracyFailed,omitempty" protobuf:"varint,7,opt,name=totalPredictorAccuracyFailed"`
	// The collection of predictions from the last 7 days
	DailyPredictionsCounts []int32 `json:"dailyPredictionsCounts,omitempty" protobuf:"bytes,8,rep,name=dailyPredictionsCounts"`
	// In the case of failure, the ServingSite resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
	// GrpcIngressName specifies the name of the Kubernetes Ingress resource which the Serving Site uses to define
	// external access points for resources that accept GRPC-based traffic to their services (i.e. Predictors).
	// This field is set only after one or more resources are created which use the Ingress access method.
	// If there are no Ingress rules to serve then the Ingress will be destroyed
	//+kubebuilder:validation:Optional
	GrpcIngressName *string `json:"grpcIngressName,omitempty" protobuf:"bytes,11,opt,name=grpcIngressName"`
	// HttpIngressName specifies the name of the Kubernetes Ingress resource which the Serving Site uses to define
	// external access points for resources that accept HTTP-based traffic to their services (i.e. Data Apps).
	// This field is set only after one or more resources are created which use the Ingress access method to serve HTTP traffic.
	// If there are no Ingress rules to serve then the Ingress will be destroyed
	HttpIngressName *string `json:"restIngressName,omitempty" protobuf:"bytes,12,opt,name=restIngressName"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,15,rep,name=conditions"`
}

// IngressSpec defines the configuration to for a Serving Site to create Ingress resources
type IngressSpec struct {
	// FQDN specifies the fully-qualified domain name that the Serving Site's Ingress will use as the base host for the
	// endpoint of services deployed under the Serving Site. For example, setting the FQDN as `model-serving.modela.ai`
	// will automatically serve Predictors using the REST API at `predictors.model-serving.modela.ai`
	// +kubebuilder:default:="serving.vcap.me"
	// +kubebuilder:validation:Optional
	FQDN *string `json:"fqdn,omitempty" protobuf:"bytes,1,opt,name=fqdn"`
	// Grpc indicates if the Serving Site will create an Ingress resource to serve GRPC prediction traffic.
	// All Predictor resources created under the Serving Site will receive a unique host in the Ingress
	// determined by the name of the Predictor and the FQDN of the ServingSite (i.e. my-predictor.model-serving.modela.ai)
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	GRPC *bool `json:"grpc,omitempty" protobuf:"varint,2,opt,name=grpc"`
	// HTTP indicates if the Serving Site will create an Ingress resource to serve HTTP prediction traffic.
	// All HTTP traffic will be served under a single host determined by the FQDN of the ServingSite
	// (i.e. predictors.model-serving.modela.ai). HTTP must be enabled to serve Data Apps over Ingress
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	HTTP *bool `json:"http,omitempty" protobuf:"varint,3,opt,name=http"`
	// IngressClassName is the name of the ingress class that will be applied to created Ingress resources
	// (defaults to nginx)
	// +kubebuilder:default:="nginx"
	IngressClassName *string `json:"ingressClassName,omitempty" protobuf:"bytes,4,opt,name=ingressClassName"`
	// IssuerName specifies the name of a cert-manager Issuer resource in the same namespace as the Serving Site
	// that will provide a TLS certificate to the ingress. This will be added as an annotation to the ingress.
	// +kubebuilder:validation:Optional
	IssuerName *string `json:"issuerName,omitempty" protobuf:"bytes,5,opt,name=issuerName"`
	// ClusterIssuerName specifies the name of a cert-manager ClusterIssuer resource
	// that will provide a TLS certificate to the ingress. This will be added as an annotation to the ingress.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ClusterIssuerName *string `json:"clusterIssuerName,omitempty" protobuf:"bytes,6,opt,name=clusterIssuerName"`
	// TlsSecretName specifies the name of the secret that contains the TLS certificate for the ingress.
	// If it does not exist, ClusterIssuerName or IssuerName must be specified for Cert Manager to
	// generate the serving certificate. If this field is specified, TLS will be implicitly enabled.
	// +kubebuilder:validation:Optional
	TlsSecretName string `json:"tlsSecretName,omitempty" protobuf:"bytes,7,opt,name=tlsSecretName"`
}
