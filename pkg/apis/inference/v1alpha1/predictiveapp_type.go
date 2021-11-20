/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// PredictiveAppConditionType is the condition of the webrequest
type PredictiveAppConditionType string

/// PredictiveApp Condition
const (
	PredictiveAppReady PredictiveAppConditionType = "Ready"
	PredictiveAppSaved PredictiveAppConditionType = "Saved"
)

// PredictiveAppCondition describes the state of a deployment at a certain point.
type PredictiveAppCondition struct {
	// Type of account condition.
	Type PredictiveAppConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictiveAppConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,7,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// PredictiveApp represent a single webrequest in the webrequest store.
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=predictiveapps,singular=predictiveapp,categories={data,modela}
// +kubebuilder:subresource:status
type PredictiveApp struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictiveAppSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status PredictiveAppStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictiveAppList contain a list of webrequest objects
type PredictiveAppList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Items           []PredictiveApp `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictiveAppSpec contain the desired state of a PredictiveApp
type PredictiveAppSpec struct {
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
	// URL Parameters
	// +kubebuilder:validation:Optional
	Parameters map[string]string `json:"parameters,omitempty" protobuf:"bytes,5,opt,name=parameters"`
	// The name of the time stamp column
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,6,opt,name=connectionName"`
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
	// The workload class to use when running the app pod
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,9,opt,name=workloadClassName"`
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
}

// PredictiveAppStatus defines the observed state of PredictiveApp
type PredictiveAppStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PredictiveAppCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}
