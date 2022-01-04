package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelaSystem condition
type ModelaSystemConditionType string

/// ModelaSystem Condition
const (
	ModelaSystemReady ModelaSystemConditionType = "Ready"
	ModelaSystemSaved ModelaSystemConditionType = "Saved"
)

// ModelaSystemCondition describes the state of the license at a certain point.
type ModelaSystemCondition struct {
	// Type of account condition.
	Type ModelaSystemConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelaSystemConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=modelasystems,singular=modelasystem,categories={infra,modela}
type ModelaSystem struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelaSystemSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelaSystemStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelaSystemList is a list of ModelaSystems
type ModelaSystemList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelaSystem `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelaSystemSpec defines the desired state of ModelaSystem
type ModelaSystemSpec struct {
	// The current software version of modela
	// +kubebuilder:validation:Required
	// +required
	Release string `json:"dataImage" protobuf:"bytes,1,opt,name=dataImage"`
	// Set the release to active
	// +kubebuilder:validation:Optional
	Active *bool `json:"active" protobuf:"bytes,2,opt,name=active"`
	// DataImage is the container image used to data tasks
	// +kubebuilder:validation:Required
	// +required
	Images SystemImagesSpec `json:"images" protobuf:"bytes,3,opt,name=images"`
}

type SystemImagesSpec struct {
	ApiGatewayImage string `json:"apiGatewayImage" protobuf:"bytes,1,opt,name=apiGatewayImage"`
	// ControlPlaneImage is the image of the main control plane. the control plane contain all the modela operators
	// +kubebuilder:validation:Required
	// +required
	ControlPlaneImage string `json:"controlPlaneImage" protobuf:"bytes,2,opt,name=controlPlaneImage"`

	// Data dock image contain the data ingest service
	// +kubebuilder:validation:Required
	// +required
	DataDockImage string `json:"datadockImage" protobuf:"bytes,3,opt,name=datadockImage"`

	// Frontend image is the image of the frontend web user interface
	// +kubebuilder:validation:Required
	// +required
	FrontendImage string `json:"frontendImage" protobuf:"bytes,4,opt,name=frontendImage"`

	// Publisher image defines the image of the publisher. The publisher service is used
	// the package models to tar file or publish them as docker containers.
	// +kubebuilder:validation:Required
	// +required
	PublisherImage string `json:"publisherImage" protobuf:"bytes,5,opt,name=publisherImage"`

	// TrainerImage is the container image of the trainer service. The trainer is used
	// to train and test models
	// +kubebuilder:validation:Required
	// +required
	TrainerImage string `json:"trainerImage" protobuf:"bytes,6,opt,name=trainerImage"`

	// BatchPredictorImage is used when running batch prediction.
	// +kubebuilder:validation:Required
	// +required
	BatchPredictorImage string `json:"batchPredictorImage" protobuf:"bytes,7,opt,name=batchPredictorImage"`

	// TrainerImage is the container image used for control
	// +kubebuilder:validation:Required
	// +required
	ApiProxyImage string `json:"apiproxyImage" protobuf:"bytes,8,opt,name=apiproxyImage"`

	// TrainerImage is the container image used for control
	// +kubebuilder:validation:Required
	// +required
	DataPlaneImage string `json:"dataplaneImage" protobuf:"bytes,9,opt,name=dataplaneImage"`

	// TrainerImage is the container image used for control
	// +kubebuilder:validation:Required
	// +required
	CloudProxyImage string `json:"cloudproxyImage" protobuf:"bytes,10,opt,name=cloudproxyImage"`

	// Database proxy image is a service the translate from kubernetes objects to
	// data base tables.
	// +kubebuilder:validation:Required
	// +required
	DatabaseProxyImage string `json:"databaseProxyImage" protobuf:"bytes,11,opt,name=databaseProxyImage"`

	// Prediction router image.
	// +kubebuilder:validation:Required
	// +required
	PredictionRouterImage string `json:"predictionRouterImage" protobuf:"bytes,12,opt,name=predictionRouterImage"`

	// The image for the modela system controller.
	// +kubebuilder:validation:Required
	// +required
	ModelaSystemImage string `json:"modelaSystemImage" protobuf:"bytes,13,opt,name=modelaSystemImage"`

	// The image used for the prediction server.
	// +kubebuilder:validation:Required
	// +required
	ModelaPredictionServerImage string `json:"modelaPredictionServerImage" protobuf:"bytes,14,opt,name=modelaPredictionServerImage"`

	// The image for the data app dashboard.
	// +kubebuilder:validation:Required
	// +required
	ModelaDashboardServerImage string `json:"modelaDashboardServerImage" protobuf:"bytes,15,opt,name=modelaDashboardServerImage"`
}

// ModelaSystemStatus is the observed state of a ModelaSystem
type ModelaSystemStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelaSystemCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=conditions"`
}
