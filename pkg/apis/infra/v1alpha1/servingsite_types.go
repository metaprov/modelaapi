package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// ServingSite
//==============================================================================

/// ServingSiteConditionType site condition
type ServingSiteConditionType string

/// ServingSite Condition
const (
	ServingSiteReady ServingSiteConditionType = "Ready"
	ServingSiteSaved ServingSiteConditionType = "Saved"
)

// ServingSiteCondition describes the state of a servingsite at a certain point.
type ServingSiteCondition struct {
	// Type of  condition.
	Type ServingSiteConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ServingSiteConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// ServingSite represents a namespace where model serving workloads are executed under
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description="owner"
// +kubebuilder:printcolumn:name="FQDN",type="string",JSONPath=".spec.ingress.fqdn",description=""
// +kubebuilder:printcolumn:name="GRPC Ingress",type="string",JSONPath=".status.grpcIngressName",description=""
// +kubebuilder:printcolumn:name="REST Ingress",type="string",JSONPath=".status.restIngressName",description=""
// +kubebuilder:printcolumn:name="Predictors",type="number",JSONPath=".status.activePredictors",description=""
// +kubebuilder:printcolumn:name="Cluster",type="string",JSONPath=".spec.clusterName",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=servingsites,singular=servingsite,categories={infra,modela}
type ServingSite struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ServingSiteSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ServingSiteStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// The reference to the tenant which the object exists under
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,2,opt,name=tenantRef"`
	// Limits specifies the hard resource limits that can be allocated for workloads created under the ServingSite
	// +kubebuilder:validation:Optional
	Limits ResourceLimitSpec `json:"limits,omitempty" protobuf:"bytes,3,opt,name=limits"`
	// Ingress defines the specification to create Ingress resources that can route traffic
	// to the resources which exist under the ServingSite's namespace
	// +kubebuilder:validation:Optional
	Ingress IngressSpec `json:"ingress,omitempty" protobuf:"bytes,4,opt,name=ingress"`
	// ClusterName is the name of a VirtualCluster that exists under the same tenant as the object. If specified, workloads
	// executed under the ServingSite will be executed inside the cluster (currently not implemented)
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ClusterName *string `json:"clusterName,omitempty" protobuf:"bytes,6,opt,name=clusterName"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
}

type ServingSiteStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
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
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,8,rep,name=lastDailyPredictions"`
	// In the case of failure, the ServingSite resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,9,opt,name=failureReason"`
	// In the case of failure, the ServingSite resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
	// GrpcIngressName specifies the name of the Kubernetes Ingress resource which the ServingSite uses to define
	// external access points for resources that accept GRPC-based traffic to their services (i.e. Predictors).
	// This field is set only after one or more resources are created which use the Ingress access method.
	// If there are no Ingress rules to serve then the Ingress will be destroyed
	//+kubebuilder:validation:Optional
	GrpcIngressName string `json:"grpcIngressName,omitempty" protobuf:"bytes,11,opt,name=grpcIngressName"`
	// RestIngressName specifies the name of the Kubernetes Ingress resource which the ServingSite uses to define
	// external access points for resources that accept HTTP-based traffic to their services (i.e. DataApps).
	// This field is set only after one or more resources are created which use the Ingress access method to serve REST traffic.
	// If there are no Ingress rules to serve then the Ingress will be destroyed
	RestIngressName string `json:"restIngressName,omitempty" protobuf:"bytes,12,opt,name=restIngressName"`
	// Store the status of the grpc ingress
	GrpcIngressReady bool `json:"grpcIngressReady,omitempty" protobuf:"bytes,13,varint,name=grpcIngressReady"`
	// Status of rest ingress.
	RestIngressReady bool `json:"restIngressReady,omitempty" protobuf:"bytes,14,varint,name=restIngressReady"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ServingSiteCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,15,rep,name=conditions"`
}

// IngressSpec defines the configuration to for a ServingSite to create Ingress resources
type IngressSpec struct {
	// FQDN specifies the fully-qualified domain name that the ServingSite's Ingress will use as the base host for the
	// endpoint of services deployed under the ServingSite. For example, setting the FQDN as `model-serving.modela.ai`
	// will automatically serve Predictors using the REST API at `predictors.model-serving.modela.ai`
	// +kubebuilder:default:="serving.vcap.me"
	// +kubebuilder:validation:Optional
	FQDN *string `json:"fqdn,omitempty" protobuf:"bytes,1,opt,name=fqdn"`
	// Grpc indicates if the ServingSite will create an Ingress resource to serve GRPC prediction traffic.
	// All Predictor resources created under the ServingSite will receive a unique host in the Ingress
	// determined by the name of the Predictor and the FQDN of the ServingSite (i.e. my-predictor.model-serving.modela.ai)
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	GRPC *bool `json:"grpc,omitempty" protobuf:"varint,2,opt,name=grpc"`
	// Rest indicates if the ServingSite will create an Ingress resource to serve REST prediction traffic.
	// All REST traffic will be served under a single host determined by the FQDN of the ServingSite
	// (i.e. predictors.model-serving.modela.ai). RestIngress must be enabled to serve DataApps over Ingress
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	REST *bool `json:"rest,omitempty" protobuf:"varint,3,opt,name=rest"`
	// IngressClassName is the name of the ingress class that will be applied to created Ingress resources
	// (defaults to nginx)
	// +kubebuilder:default:="nginx"
	IngressClassName *string `json:"ingressClassName,omitempty" protobuf:"bytes,4,opt,name=ingressClassName"`
	// ClusterIssuerName is a cert manager resource that provide TLS certificate to the ingress.
	// +kubebuilder:default:=""
	ClusterIssuerName *string `json:"clusterIssuerName,omitempty" protobuf:"bytes,5,opt,name=clusterIssuerName"`
}
