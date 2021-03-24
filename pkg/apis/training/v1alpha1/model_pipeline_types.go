package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type ModelPipelineConditionType string

const (
	ModelPipelineReady    ModelPipelineConditionType = "Ready"
	ModelPipelineArchived ModelPipelineConditionType = "Archived"
)

// ModelPipelineCondition describes the state of a pipeline at a certain point.
type ModelPipelineCondition struct {
	// Type of account condition.
	Type ModelPipelineConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelPipelineConditionType"`
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
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelpipelines,singular=modelpipeline,shortName=pipe,categories={training,modeld,all}
// ModelPipeline represent a CI/CD machine learning pipeline definition
type ModelPipeline struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelPipelineSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelPipelineList represent list of pipelines
type ModelPipelineList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelPipelineSpec define the desired state of the ModelPipeline resource.
type ModelPipelineSpec struct {
	// The product version of the resource
	// +kubebuilder:default ="latest"
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// Servingsite name is the default serving site for each stage.
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	DefaultServingSiteName *string `json:"defaultServingSiteName,omitempty" protobuf:"bytes,2,opt,name=defaultServingSiteName"`
	// User provided description
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Datastage build new dataset from the data sources.
	// +kubebuilder:validation:Optional
	DataStage *DataStageSpec `json:"dataStage,omitempty" protobuf:"bytes,5,opt,name=dataStage"`
	// TrainingSpec stage
	// +kubebuilder:validation:Optional
	TrainingStage *TrainingStageSpec `json:"trainingStage,omitempty" protobuf:"bytes,6,opt,name=trainingStage"`
	// Acceptance stage is used for further testing
	// +kubebuilder:validation:Optional
	AcceptanceStage *AcceptanceStageSpec `json:"acceptanceStage,omitempty" protobuf:"bytes,7,opt,name=acceptanceStage"`
	// Capacity stage for capacity
	// +kubebuilder:validation:Optional
	CapacityStage *CapacityStageSpec `json:"capacityStage,omitempty" protobuf:"bytes,8,opt,name=capacityStage"`
	// ReleaseStage stage define how to place the model into production.
	// +kubebuilder:validation:Optional
	ReleaseStage *ReleaseStageSpec `json:"releaseStage,omitempty" protobuf:"bytes,9,opt,name=releaseStage"`
	// Folder for the pipeline and pipeline run artifacts.
	// The folder contains all the study artifacts - metadata, reports, profile,models
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"folder,omitempty" protobuf:"bytes,10,opt,name=folder"`
	// Trigger is definition of the pipeline trigger
	// +kubebuilder:validation:Optional
	Trigger *PipelineTrigger `json:"trigger,omitempty" protobuf:"bytes,11,opt,name=trigger"`
	// The owner account name
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,12,opt,name=owner"`
	// ApproverAccountName is the name of the approver
	// +kubebuilder:validation:Optional
	ApproverAccountName *string `json:"approverAccountName,omitempty" protobuf:"bytes,13,opt,name=approverAccountName"`
}

type PipelineTrigger struct {
	// Spec for a schedule in case that the trigger
	// +kubebuilder:validation:Optional
	Schedule *catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,1,opt,name=schedule"`
	// Definition of git hub events
	// +kubebuilder:validation:Optional
	GithubEvents *catalog.GithubEvents `json:"githubEvents,omitempty" protobuf:"bytes,2,opt,name=githubEvents"`
}

// pipline trigger condition
// Condition on the dataset
type PipelineTriggerConditionType string

/// ModelPipelineTrigger Condition
const (
	PipelineTriggerReady      PipelineTriggerConditionType = "Ready"
	PipelineTriggerInArchived PipelineTriggerConditionType = "Archived"
	PipelineTriggerCreating   PipelineTriggerConditionType = "Progressing"
	PipelineTriggerFailure    PipelineTriggerConditionType = "PipelineTriggerFailure"
)

//DataStageSpec is the desired state of the data preprocesing step of the pipeline.
//Data preprocessing will be done via
type DataStageSpec struct {
	// +kubebuilder:validation:Optional
	DataPipelineName string `json:"dataPipelineName,omitempty" protobuf:"bytes,1,opt,name=dataPipelineName"`
}

// TrainingStageSpec is the desired state of the training step of the pipeline
type TrainingStageSpec struct {
	// NotebookName template specify the notebook
	// +kubebuilder:default =""
	NotebookName *string `json:"notebookName,omitempty" protobuf:"bytes,1,opt,name=notebookName"`
	// LabName is the name of the lab used for training
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,2,opt,name=labName"`
	// StudyName is the name of the template
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	StudyName *string `json:"studyName,omitempty" protobuf:"bytes,3,opt,name=studyName"`

	// Min test score needed to move to another stage
	// +kubebuilder:validation:Optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,4,opt,name=minScore"`

	// Auto defines if we move from stage to stage automatically.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,5,opt,name=auto"`
}

//AcceptanceStageSpec is the desired step of the acceptance stage of the pipeline
type AcceptanceStageSpec struct {
	// The serving site for the testing
	// +kubebuilder:default =""
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`

	// PredictionPipelineName is the name
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	PredictionPipelineName *string `json:"predictionPipelineName,omitempty" protobuf:"bytes,2,opt,name=predictionPipelineName"`

	// PredictorName is the the name of the test predictor
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,3,opt,name=predictorName"`

	// Min score
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,4,opt,name=minScore"`

	// Auto defines if we move to the next stage without human intervation
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,5,opt,name=auto"`
}

// CapacityStageSpec is the desired state of the capcity testing.
type CapacityStageSpec struct {
	// ServingSiteName is the serving site for the testing during the capacity stage
	// +kubebuilder:default =""
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`

	// PredictorName is the the name of the test predictor
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`

	// PredictionPipelineName is the name of the prediction pipeline used to score the predictor
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	PredictionPipelineName *string `json:"predictionPipelineName,omitempty" protobuf:"bytes,3,opt,name=predictionPipelineName"`

	// Min score
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,4,opt,name=minScore"`

	// Auto defines if we move from stage to stage automatically.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,5,opt,name=auto"`
}

//ReleaseStageSpec is the predictor name that would host the model
type ReleaseStageSpec struct {
	// ServingSiteName is the serving site for the release
	// +kubebuilder:default =""
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`

	// PredictorName he release predictor. The predictor will be created if it does not exist.
	// +kubebuilder:validation:Optional
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`

	// Weight is the weight of the model.
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	Weight *float64 `json:"weight,omitempty" protobuf:"bytes,3,opt,name=weight"`

	// Auto defines if we move from stage to stage automatically.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,4,opt,name=auto"`
}

// ModelPipelineStatus define the observed state of the pipeline
type ModelPipelineStatus struct {
	//+optional
	Conditions []ModelPipelineCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
