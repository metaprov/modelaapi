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

// / DataApp Condition
const (
	DataAppReady = "Ready"
)

// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:resource:path=dataapps,singular=dataapp,categories={data,modela}
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Path",type="string",JSONPath=".spec.path"
// +kubebuilder:printcolumn:name="Model",type="string",JSONPath=".spec.modelName"
// +kubebuilder:printcolumn:name="Replicas",type="string",JSONPath=".spec.replicas"
// +kubebuilder:printcolumn:name="Port",type="string",JSONPath=".spec.port"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// DataApp represents a live dashboard for a single model
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
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// ModelClassName specifies the name of the Model Class which created the Data App, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,3,opt,name=modelClassName"`
	// The user-provided description of the Data App
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// Model specifies the name of the Model resource which the Data App will create a dashboard for
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelName *string `json:"modelName,omitempty" protobuf:"bytes,5,opt,name=modelName"`
	// Access specifies the configuration for the Data App service to be exposed externally
	Access catalog.AccessSpec `json:"access,omitempty" protobuf:"bytes,6,opt,name=access"`
	// The number of replicas for the Kubernetes Serving associated with the DataApp, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,7,opt,name=replicas"`
	// Resources specifies the resource requirements allocated to the DataApp's web server
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The reference to the ServingSite resource that hosts the Predictor
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,13,opt,name=servingsiteRef"`
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
	Pages []data.PageSpec `json:"pages,omitempty" protobuf:"bytes,3,rep,name=pages"`
}

// DataAppStatus defines the observed state of DataApp
type DataAppStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// The reference to the Kubernetes Serving associated with the DataApp
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
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
