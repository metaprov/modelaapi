package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Github event specify repo and the events to listen in order ot fire the pipeline
type GithubEvents struct {
	// The github connections used to loginto git
	GitConnectionsName string `json:"gitConnectionName" protobuf:"bytes,1,opt,name=gitConnectionName"`
	// Repository is the name of the github repository
	Repository string `json:"repository" protobuf:"bytes,2,opt,name=repository"`
	// Branch is the name of the github branch.
	// By default the trigger listen to all branch
	Branch string `json:"branch" protobuf:"bytes,3,opt,name=branch"`
	// Blobname regex is a regular expression on the blob name that changed
	BlobNameRegex string `json:"blobNameRegex" protobuf:"bytes,4,opt,name=blobNameRegex"`
	// Events is the name of the github events.
	Events []string `json:"events" protobuf:"bytes,5,rep,name=events"`
}

type TriggerSchedule struct {
	// The start time of the schedule
	// +optional
	StartTime *metav1.Time `json:"startTime" protobuf:"bytes,1,opt,name=startTime"`
	// The start data of the schedule
	// +optional
	StartDay *metav1.Time `json:"startDay" protobuf:"bytes,2,opt,name=startDay"`
	// The end time of the schedule
	// +optional
	EndTime *metav1.Timestamp `json:"endTime" protobuf:"bytes,3,opt,name=endTime"`
	// The end day of the schedule
	// +optional
	EndDay *metav1.Time `json:"endDay" protobuf:"bytes,4,opt,name=endDay"`
	// Cron string of the schedule.
	// +optional
	Cron string `json:"cron" protobuf:"bytes,5,opt,name=cron"`
	// +optional
	// The type of schedule events.
	Type TriggerScheduleEventType `json:"type" protobuf:"bytes,6,opt,name=type"`
}

type ModelPipelineConditionType string

const (
	PipelineReady ModelPipelineConditionType = "Ready"
	PipelineInDb  ModelPipelineConditionType = "InDb"
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

// +genclient
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelpipelines,singular=modelpipeline,shortName=pipe,categories={training,modeld,all}
// ModelPipeline represent a CI/CD machine learning pipeline definition
type ModelPipeline struct {
	metav1.TypeMeta `json:",inline"`
	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +optional
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	// Spec is the desired state of the ModelPipeline.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	// +optional
	Spec ModelPipelineSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`

	// Status is the observed state of the ModelPipeline.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	// +optional
	Status ModelPipelineStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

func (pl *ModelPipeline) HasTrainingStage() bool {
	return pl.Spec.TrainingStage != nil && pl.Spec.TrainingStage.StudyName != nil && *pl.Spec.TrainingStage.StudyName != ""

}

func (pl *ModelPipeline) HasProdStage() bool {
	return pl.Spec.ReleaseStage != nil && pl.Spec.ReleaseStage.PredictorName != nil && *pl.Spec.ReleaseStage.PredictorName != ""
}

func (pl *ModelPipeline) HasAcceptanceStage() bool {
	return pl.Spec.AcceptanceStage != nil && pl.Spec.AcceptanceStage.TestDatasetName != nil &&
		*pl.Spec.AcceptanceStage.TestDatasetName != ""
}

func (pl *ModelPipeline) HasTrainingNotebook() bool {
	return pl.Spec.TrainingStage != nil && pl.Spec.TrainingStage.NotebookName != nil && *pl.Spec.TrainingStage.NotebookName != ""
}

func (pl *ModelPipeline) HasTrainingStudy() bool {
	return pl.Spec.TrainingStage != nil && pl.Spec.TrainingStage.StudyName != nil && *pl.Spec.TrainingStage.StudyName != ""
}

func (pl *ModelPipeline) HasCapacityStage() bool {
	return pl.Spec.CapacityStage != nil && pl.Spec.CapacityStage.TestDatasetName != nil && *pl.Spec.CapacityStage.TestDatasetName != ""
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// ModelPipelineList represent list of pipelines
type ModelPipelineList struct {
	metav1.TypeMeta `json:",inline"`

	// Standard object's metadata.
	// More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	// +optional
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ModelPipeline `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelPipelineSpec define the desired state of the ModelPipeline resource.
type ModelPipelineSpec struct {
	// The product version of the resource
	// +optional
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// Servingsite name is the default serving site for each stage.
	// +optional
	DefaultServingSiteName *string `json:"defaultServingSiteName,omitempty" protobuf:"bytes,2,opt,name=defaultServingSiteName"`
	// User provided description
	// +optional
	Description string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Min score to move from stage to stage.
	// Default is 0
	// +optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,4,opt,name=minScore"`
	// Datastage build new dataset from the data sources.
	// +optional
	DataStage *DataStageSpec `json:"dataStage,omitempty" protobuf:"bytes,5,opt,name=dataStage"`
	// TrainingSpec stage
	// +optional
	TrainingStage *TrainingStageSpec `json:"trainingStage,omitempty" protobuf:"bytes,6,opt,name=trainingStage"`
	// Acceptance stage is used for further testing
	// +optional
	AcceptanceStage *AcceptanceStageSpec `json:"acceptanceStage,omitempty" protobuf:"bytes,7,opt,name=acceptanceStage"`
	// Capacity stage for capacity
	// +optional
	CapacityStage *CapacityStageSpec `json:"capacityStage,omitempty" protobuf:"bytes,8,opt,name=capacityStage"`
	// ReleaseStage stage define how to place the model into production.
	// +optional
	ReleaseStage *ReleaseStageSpec `json:"releaseStage,omitempty" protobuf:"bytes,9,opt,name=releaseStage"`
	// Folder for the pipeline and pipeline run artifacts.
	// The folder contains all the study artifacts - metadata, reports, profile,models
	// +optional
	Folder *string `json:"folder,omitempty" protobuf:"bytes,10,opt,name=folder"`
	// Trigger
	Trigger *PipelineTrigger `json:"trigger,omitempty" protobuf:"bytes,11,opt,name=trigger"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,12,opt,name=owner"`
}

type PipelineTrigger struct {
	// Spec for a schedule in case that the trigger
	// +optional
	Schedule *TriggerSchedule `json:"schedule,omitempty" protobuf:"bytes,1,opt,name=schedule"`
	// Definition of git hub events
	// +optional
	GithubEvents *GithubEvents `json:"githubEvents,omitempty" protobuf:"bytes,2,opt,name=githubEvents"`
	// Template is a template of the pipeline that will be created when the
	// trigger fire.
	// +optional
}

type TriggerType string

const (
	TriggerTypeOnDemand        TriggerType = "on-demand"
	TriggerTypeSchedule        TriggerType = "on-schedule"
	TriggerTypeNewData         TriggerType = "on-new-data"
	TriggerTypeGithubEvent     TriggerType = "on-github-event"
	TriggerTypeConceptDrift    TriggerType = "on-concept-drift"
	TriggerTypePrefDegragation TriggerType = "on-pref-degradation"
)

//==============================================================================
// PipelineName TriggerName
//==============================================================================
// +kubebuilder:validation:Enum="now";"once";"hourly";"daily";"weekly";"monthly";"yearly";"cron"
type TriggerScheduleEventType string

const (
	TriggerScheduleEventTypeNow     TriggerScheduleEventType = "now"
	TriggerScheduleEventTypeOnce    TriggerScheduleEventType = "once"
	TriggerScheduleEventTypeHourly  TriggerScheduleEventType = "hourly"
	TriggerScheduleEventTypeDaily   TriggerScheduleEventType = "daily"
	TriggerScheduleEventTypeWeekly  TriggerScheduleEventType = "weekly"
	TriggerScheduleEventTypeMonthly TriggerScheduleEventType = "monthly"
	TriggerScheduleEventTypeYearly  TriggerScheduleEventType = "yearly"
	TriggerScheduleEventTypeCron    TriggerScheduleEventType = "cron"
)

// pipline trigger condition
// Condition on the dataset
type PipelineTriggerConditionType string

/// ModelPipelineTrigger Condition
const (
	PipelineTriggerReady    PipelineTriggerConditionType = "Ready"
	PipelineTriggerInDb     PipelineTriggerConditionType = "InDb"
	PipelineTriggerCreating PipelineTriggerConditionType = "Progressing"
	PipelineTriggerFailure  PipelineTriggerConditionType = "PipelineTriggerFailure"
)

type DataStageSpec struct {
	// +optional
	DataPipelineName string `json:"wranglerName,omitempty" protobuf:"bytes,1,opt,name=wranglerName"`
}

// A specification of a the training stage.
type TrainingStageSpec struct {
	// NotebookName template specify the notebook
	NotebookName *string `json:"notebookName,omitempty" protobuf:"bytes,1,opt,name=notebookName"`
	// LabName is the name of the lab used for training
	// +optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,2,opt,name=labName"`
	// Study FileName is a name of a study which will be cloned for this stage.
	// +optional
	StudyName *string `json:"studyName,omitempty" protobuf:"bytes,3,opt,name=studyName"`
	// Auto defines if we move from stage to stage automatically.
	// +optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,4,opt,name=auto"`
}

//AcceptanceStageSpec is used to verify the new model.
type AcceptanceStageSpec struct {
	// The serving site for the testing
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`
	// The name of predictor which will be the base for this stage
	// +optional
	TestDatasetName *string `json:"testDatasetName,omitempty" protobuf:"bytes,2,opt,name=testDatasetName"`
	// Auto defines if we move from stage to stage automatically.
	// +optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,3,opt,name=auto"`
}

type CapacityStageSpec struct {
	// The serving site for the testing
	// The default is to use the pipeline serving site.
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`
	// The name of dataset used to test the model at this stage.
	// +optional
	TestDatasetName *string `json:"testDatasetName,omitempty" protobuf:"bytes,2,opt,name=testDatasetName"`
	// Gate defines if we move from stage to stage automatically.
	// +optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,3,opt,name=auto"`
}

type ReleaseStageSpec struct {
	// +optional
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,1,opt,name=predictorName"`
}

/*
type DataPipelineTemplateSpec struct {
	// +optional
	Spec data.DataPipelineSpec `json:"spec" protobuf:"bytes,1,opt,name=spec"`
}

*/

// ModelPipelineStatus define the observed state of the pipeline
type ModelPipelineStatus struct {
	//+optional
	Conditions []ModelPipelineCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
