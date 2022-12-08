package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type ModelClassRunPhase string

const (
	ModelClassPhaseCreatingTrainingDataset ModelClassRunPhase = "CreatingTrainingDataset"
	ModelClassPhaseTraining                ModelClassRunPhase = "Training"
	ModelClassPhaseWaitingForPromotion     ModelClassRunPhase = "WaitingForPromotion" // in case of manual promotion
	ModelClassPhasePromoting               ModelClassRunPhase = "Promoting"
	ModelClassRunPhasePending              ModelClassRunPhase = "Pending"
	ModelClassRunPhaseTraining             ModelClassRunPhase = "Training"
	ModelClassRunPhaseFailed               ModelClassRunPhase = "Failed"
	ModelClassRunPhaseTrained              ModelClassRunPhase = "Trained"
	ModelClassRunPhaseAborted              ModelClassRunPhase = "Aborted"
	ModelClassRunPhaseCompleted            ModelClassRunPhase = "Completed"
)

// Pipeline run condition
type ModelClassRunConditionType string

/// ModelClassRun Condition
const (
	// Condition to check if the training dataset is ready
	ModelClassRunTrainingDatasetReady ModelClassRunConditionType = "TrainingDatasetReady"
	// Condition indicating if the current model was trained.
	ModelClassRunModelTrained ModelClassRunConditionType = "ModelTrained"
	// Condition to indicate if the current model was promoted
	ModelClassRunModelPromoted ModelClassRunConditionType = "ModelPromoted"
	// Condition to indicate that there is a model in production serving prediction
	ModelClassRunModelServing ModelClassRunConditionType = "ModelServing"

	ModelClassRunArchived ModelClassRunConditionType = "Archived"
)

// ModelClassRunCondition describes the state of a ModelClassRun at a certain point.
type ModelClassRunCondition struct {
	// Type of  condition.
	Type ModelClassRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelClassRunConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=modelclassruns,shortName=mcr,singular=modelclassrun,categories={train,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="ModelClass",type="string",JSONPath=".status.modelClassName"
// +kubebuilder:printcolumn:name="CompletedAt",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.failureMessage"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// ModelClassRun represent a execution of a model class training
type ModelClassRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelClassRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelClassRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelClassRunList represent list of pipelineruns
type ModelClassRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelClassRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelClassRunSpec is the desired state of the ModelClassRun resource
type ModelClassRunSpec struct {
	// VersionName is the data product version of the run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// Description is the user provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// DatasetName is the name of the dataset that we trained on.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Dataset *string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// ModelClassName is the name of the ModelClass for this pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,4,opt,name=modelClassName"`
	// The owner of the run.
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
	// The priority of this pipeline run. The default is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,6,opt,name=priority"`
	// Set to true to pause the model pipeline run
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,7,opt,name=paused"`
	// Set to true to abort the model pipeline run
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,8,opt,name=aborted"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,9,opt,name=ttl"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,10,opt,name=triggeredBy"`
}

// ModelClassRunStageStatus is the observed state of the ModelClassRunStage.

// ModelClassRunStatus is the observed state of the ModelClassRun resource .
type ModelClassRunStatus struct {
	// The name of the dataset that was captured by the label filter.
	//+kubebuilder:validation:Optional
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// The name of the study generated.
	//+kubebuilder:validation:Optional
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,2,opt,name=studyName"`
	// The name of the best model
	//+kubebuilder:validation:Optional
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,3,opt,name=modelName"`
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,5,opt,name=completedAt"`
	// The phase of the pipeline run
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelClassRunPhase `json:"phase" protobuf:"bytes,6,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,7,opt,name=observedGeneration"`
	// Folder for pipeline run artifacts. This is assigned by the system
	// The folder contains all the pipeline artifacts - metadata, logs
	// +kubebuilder:validation:Optional
	Folder string `json:"folder,omitempty" protobuf:"bytes,8,opt,name=evalMetrics"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,9,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,12,opt,name=updatedAt"`
	// The log file specification that determines the location of all logs produced by the object
	Logs catalog.Logs `json:"logs" protobuf:"bytes,13,opt,name=logs"`
	// Last promotion was done
	PromotedAt *metav1.Time `json:"promotedAt,omitempty" protobuf:"bytes,14,opt,name=promotedAt"`
	// If true the promotion was automatic
	Auto *bool `json:"auto,omitempty" protobuf:"varint,15,opt,name=auto"`
	// for manual promotion, who approved the promotion
	ApprovedBy v1.ObjectReference `json:"approvedBy,omitempty" protobuf:"bytes,16,opt,name=approvedBy"`
	// for manual promotion, who approved the promotion
	ModelsCount int32 `json:"modelsCount,omitempty" protobuf:"varint,17,opt,name=modelsCount"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelClassRunCondition `json:"conditions,omitempty" protobuf:"bytes,18,rep,name=conditions"`
}
