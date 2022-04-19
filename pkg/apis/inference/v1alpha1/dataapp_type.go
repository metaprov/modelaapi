/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// DataAppConditionType is the condition of a DataApp
type DataAppConditionType string

/// DataApp Condition
const (
	DataAppReady DataAppConditionType = "Ready"
	DataAppSaved DataAppConditionType = "Saved"
)

// DataAppCondition describes the state of a DataApp at a certain point
type DataAppCondition struct {
	// Type of DataApp condition
	Type DataAppConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataAppConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// DataApp represents a live dashboard for a single model
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Path",type="string",JSONPath=".spec.path"
// +kubebuilder:printcolumn:name="Model",type="string",JSONPath=".spec.modelName"
// +kubebuilder:printcolumn:name="Replicas",type="string",JSONPath=".spec.replicas"
// +kubebuilder:printcolumn:name="Port",type="string",JSONPath=".spec.port"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=dataapps,singular=dataapp,categories={data,modela}
// +kubebuilder:subresource:status
type DataApp struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataAppSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataAppStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// DataAppList contains a list of DataApps
// +kubebuilder:object:root=true
type DataAppList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataApp `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// DataAppSpec defines the desired state of a DataApp
type DataAppSpec struct {
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// The user-provided description of the DataApp
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The URL where the DataApp web application can be accessed. If the access type is ClusterIP, it will
	// be a cluster-internal DNS name (i.e. data-app.default-serving-site.svc.cluster.local). In the case of the Ingress
	// access type, the URL will be given its own path based on the FQDN of the host ServingSite
	// (i.e. apps.default-serving-site.modela.ai/data-app).
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Path *string `json:"path,omitempty" protobuf:"bytes,4,opt,name=path"`
	// The name of the predictive app model. The model will be used
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelName *string `json:"modelName,omitempty" protobuf:"bytes,5,opt,name=modelName"`
	// The number of replicas for the Kubernetes Deployment associated with the DataApp, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,7,opt,name=replicas"`
	// The port number that will be exposed on the DataApp's Pods to serve the web-based dashboard application.
	// The Kubernetes Service created by the DataApp will expose the port and forward HTTP traffic to the backend pods
	// +kubebuilder:default:=3000
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	Port *int32 `json:"port,omitempty" protobuf:"varint,8,opt,name=port"`
	// The port number that will be exposed on the external address of every node on the cluster, in the case of the
	// DataApps's access type being NodePort. Traffic from the port will be served the DataApp's web application
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	NodePort *int32 `json:"nodePort,omitempty" protobuf:"varint,9,opt,name=nodePort"`
	// Resources specifies the resource requirements allocated to the DataApp's web server
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The Kubernetes-native access method which specifies how the Kubernetes Service created by the DataApp will be exposed.
	// See https://modela.ai/docs/docs/serving/production/#access-method for a detailed description of each access type
	// (defaults to cluster-ip)
	// +kubebuilder:default:="cluster-ip"
	// +kubebuilder:validation:Optional
	AccessType *catalog.AccessType `json:"accessType,omitempty" protobuf:"bytes,11,opt,name=accessType"`
	// The reference to the DataProduct that the resource exists under
	// +kubebuilder:validation:Optional
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,12,opt,name=productRef"`
	// The reference to the ServingSite resource that hosts the Predictor
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,13,opt,name=servingsiteRef"`
	// The specification to create a custom data application (currently unimplemented)
	// +kubebuilder:validation:Optional
	Custom CustomAppSpec `json:"custom" protobuf:"bytes,14,opt,name=custom"`
}

// CustomAppSpec defines the custom pages for a DataApp
type CustomAppSpec struct {
	// Indicates if custom pages are enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"owner,omitempty" protobuf:"varint,1,opt,name=owner"`
	// The app title
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Title *string `json:"title,omitempty" protobuf:"bytes,2,opt,name=title"`
	// The app pages
	// +kubebuilder:validation:Optional
	Pages []data.PageSpec `json:"pages,omitempty" protobuf:"bytes,3,opt,name=pages"`
}

// DataAppStatus defines the observed state of DataApp
type DataAppStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// The reference to the Kubernetes Deployment associated with the DataApp
	//+kubebuilder:validation:Optional
	DeploymentRef v1.ObjectReference `json:"deploymentStatus,omitempty" protobuf:"bytes,3,opt,name=deploymentStatus"`
	// The status of the Kubernetes Service associated with the DataApp
	//+kubebuilder:validation:Optional
	ServiceStatus v1.ServiceStatus `json:"serviceStatus,omitempty" protobuf:"bytes,4,opt,name=servicetStatus"`
	// In the case of failure, the DataApp resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// In the case of failure, the DataApp resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataAppCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
