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

// DataAppConditionType is the condition of the webrequest
type DataAppConditionType string

/// DataApp Condition
const (
	DataAppReady DataAppConditionType = "Ready"
	DataAppSaved DataAppConditionType = "Saved"
)

// DataAppCondition describes the state of a deployment at a certain point.
type DataAppCondition struct {
	// Type of account condition.
	Type DataAppConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataAppConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// DataApp represent a dashboard for business users to use a single model.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
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

// +kubebuilder:object:root=true
// DataAppList contain a list of webrequest objects
type DataAppList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataApp `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// DataAppSpec contain the desired state of a DataApp
type DataAppSpec struct {
	// The webrequest owner
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="no-one"
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The product version for the webrequest.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Comments is a description of the webrequest
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The path of the predictive path
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Path *string `json:"path,omitempty" protobuf:"bytes,4,opt,name=path"`
	// The name of the predictive app model. The model will be used
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelName *string `json:"modelName,omitempty" protobuf:"bytes,5,opt,name=modelName"`
	// Number of replicates
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,7,opt,name=replicas"`
	// The port for the app
	// +kubebuilder:default:=3000
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	Port *int32 `json:"port,omitempty" protobuf:"varint,8,opt,name=port"`
	// Resource define the hardware resources req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,9,opt,name=resources"`
	// The access method specified how external clients will access the predictor
	// Default: ClusterPort
	// +kubebuilder:default:="cluster-port"
	// +kubebuilder:validation:Optional
	AccessType *catalog.AccessType `json:"accessType,omitempty" protobuf:"bytes,10,opt,name=accessType"`
	// The product that this predictor serve.
	// +kubebuilder:validation:Optional
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,11,opt,name=productRef"`
	// The serving site that hosts this predictor and the models
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,12,opt,name=servingsiteRef"`
	// Custom application
	// +kubebuilder:validation:Optional
	Custom CustomAppSpec `json:"custom" protobuf:"bytes,13,opt,name=custom"`
}

// Define the custom pages on the app
type CustomAppSpec struct {
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The app title
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Title *string `json:"owner,omitempty" protobuf:"bytes,2,opt,name=title"`
	// The app pages
	// +kubebuilder:validation:Optional
	Pages []data.PageSpec `json:"pages,omitempty" protobuf:"bytes,3,opt,name=pages"`
}

// DataAppStatus defines the observed state of DataApp
type DataAppStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataAppCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}
