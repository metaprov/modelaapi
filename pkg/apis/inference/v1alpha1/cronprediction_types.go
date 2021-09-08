package v1alpha1

import (
	v1 "k8s.io/api/core/v1"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// PredictionTemplate Condition
type CronPredictionConditionType string

/// PredictionTemplate Condition
const (
	CronPredictionReady CronPredictionConditionType = "Ready"
	CronPredictionSaved CronPredictionConditionType = "Saved"
)

// PredictionCondition describes the state of PredictionTemplate
type CronPredictionCondition struct {
	// Type of  condition.
	Type CronPredictionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CronPredictionConditionType"`
	// Status of the condition, one of True, False, Unknown.
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
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.template.spec.predictorName"
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule"
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=cronpredictions,shortName=cpred,singular=cronprediction,categories={inference,modela}
// CronPrediction represents a single run of the Prediction Pipeline
type CronPrediction struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CronPredictionSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            CronPredictionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// CronPredictionList is a list of CronPrediction
type CronPredictionList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []CronPrediction `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type PredictionTemplate struct {
	Spec PredictionSpec `json:"spec" protobuf:"bytes,1,opt,name=spec"`
}

// CronPredictionSpec represent the desired state of CronPrediction
type CronPredictionSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,2,opt,name=owner"`
	// Schedule is the cron schedule
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule *string `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
	// Template refer to the prediction template
	Template PredictionTemplate `json:"template" protobuf:"bytes,4,opt,name=template"`
	// The priority of this data pipeline. The defualt is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,5,opt,name=priority"`
	// Set to true to pause the cron prediction
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"bytes,6,opt,name=paused"`
}

// CronPredictionStatus is the observed state of a PredictionTemplate
type CronPredictionStatus struct {
	// Last run is the last time a run was created
	//+kubebuilder:validation:Optional
	LastRun *metav1.Time `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []CronPredictionCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,4,rep,name=conditions"`
}
