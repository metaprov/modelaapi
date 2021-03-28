package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type PipelinePhase string

const (
	PipelinePhaseRunning            PipelinePhase = "Running"
	PipelinePhaseWaitingForApproval PipelinePhase = "WaitingForApproval"
	PipelinePhaseFailed             PipelinePhase = "Failed"
	PipelinePhaseAborted            PipelinePhase = "Aborted"
	PipelinePhaseCompleted          PipelinePhase = "Completed"
)

type ModelPipelineStage string

const (
	ModelPipelineStageInitial  ModelPipelineStage = "initial"
	ModelPipelineStageData     ModelPipelineStage = "data"
	ModelPipelineStageTraining ModelPipelineStage = "training"
	ModelPipelineStageUAT      ModelPipelineStage = "uat"
	ModelPipelineStageCapacity ModelPipelineStage = "capacity"
	ModelPipelineStageRelease  ModelPipelineStage = "release"
)

// +kubebuilder:validation:Enum="data";"train";"test";"prod"
type EnvName string

const (
	DataEnvName  EnvName = "data"
	TrainEnvName EnvName = "training"
	TestEnvName  EnvName = "staging"
	ProdEnvName  EnvName = "prod"
)

// Pipeline run condition
type PipelineRunConditionType string

/// ModelPipelineRun Condition
const (
	MPRArchived               PipelineRunConditionType = "Archived"
	MPRDataStageCompleted     PipelineRunConditionType = "DataStageCompleted"
	MPRTrainingStageCmpleted  PipelineRunConditionType = "TrainingStageCompleted"
	MPRUATCompleted           PipelineRunConditionType = "UATStageCompleted"
	MPRCapacityStageCompleted PipelineRunConditionType = "CapacityStageCompleted"
	MPRModelReleased          PipelineRunConditionType = "ModelReleased"
)

// ModelPipelineRunCondition describes the state of a ModelPipelineRun at a certain point.
type ModelPipelineRunCondition struct {
	// Type of  condition.
	Type PipelineRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PipelineRunConditionType"`
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
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="ModelPipeline",type="string",JSONPath=".status.pipelineName"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".status.versionName"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelpipelineruns,shortName=pr,singular=modelpipelinerun,categories={train,modeld,all}
// ModelPipelineRun represent a execution of a pipeline
type ModelPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelPipelineRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	// +kubebuilder:validation:Optional
	Status ModelPipelineRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

func (run *ModelPipelineRun) ValidateDelete() error {
	return nil
}

// +kubebuilder:object:root=true
// ModelPipelineRunList represent list of pipelineruns
type ModelPipelineRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelPipelineRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelPipelineRunSpec is the desired state of the ModelPipelineRun resource
type ModelPipelineRunSpec struct {
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// TriggerName denote the trigger that fired this pipeline run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TriggerName *string `json:"triggerName,omitempty" protobuf:"bytes,3,opt,name=triggerName"`
	// PipelineName is the name of the pipeline specification for this pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	PipelineName *string `json:"pipelineName,omitempty" protobuf:"bytes,4,opt,name=pipelineName"`
	// The owner account name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
}

type StageStatusPhase string

const (
	StageStatusPhaseRunning   StageStatusPhase = "Running"
	StageStatusPhaseCompleted StageStatusPhase = "Completed"
	StageStatusPhaseFailed    StageStatusPhase = "Failed"
)

type ModelTestResult struct {
	// The name of the dataset
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// startTime is the test start time
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// endTime is the test end time
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// The results of running the tests
	Results []TestScore `json:"results,omitempty" protobuf:"bytes,4,opt,name=results"`
	// Error is a name of any error that occurred during the test.
	Error *string `json:"error,omitempty" protobuf:"bytes,5,opt,name=error"`
}

// ModelPipelineRunStageStatus is the observed state of the PipelineRunStage.
type ModelPipelineRunStageStatus struct {
	// Phase is the phase of the stage
	// +kubebuilder:validation:Optional
	Phase StageStatusPhase `json:"phase,omitempty" protobuf:"bytes,1,opt,name=phase"`
	// Approved indicates that the stage is approved.
	// +kubebuilder:validation:Optional
	Approved bool `json:"approved,omitempty" protobuf:"bytes,2,opt,name=approved"`
	// ApprovedBy indicates the account that approve this model.
	// +kubebuilder:validation:Optional
	ApprovedBy string `json:"approvedBy,omitempty" protobuf:"bytes,3,opt,name=approvedBy"`
	// ApprovedAt indicates the time of approval
	// +kubebuilder:validation:Optional
	ApprovedAt *metav1.Time `json:"approvedAt,omitempty" protobuf:"bytes,4,opt,name=approvedAt"`
	// Start time is the start time of the stage
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,7,opt,name=startTime"`
	// End time is the end time of the stage.
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,8,opt,name=endTime"`
	// Results is the results of running the test datasets against the new model
	// +kubebuilder:validation:Optional
	Results []ModelTestResult `json:"results,omitempty" protobuf:"bytes,9,opt,name=results"`
	// Error record error.
	Error string `json:"error,omitempty" protobuf:"bytes,10,opt,name=error"`
	// the name of the generated dataset
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,11,opt,name=datasetName"`
	// The name of the best model
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,12,opt,name=modelName"`
	// The name of the study
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,13,opt,name=studyName"`
}

// ModelPipelineRunStatus is the observed state of the ModelPipelineRun resource .
type ModelPipelineRunStatus struct {
	// The current stage of the pipeline
	Stage ModelPipelineStage `json:"stage,omitempty" protobuf:"bytes,1,opt,name=stage"`
	// The current name of the study
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,2,opt,name=studyName"`
	// data is the status for the data stage.
	DataStatus ModelPipelineRunStageStatus `json:"dataStage,omitempty" protobuf:"bytes,3,opt,name=dataStage"`
	// +kubebuilder:validation:Optional
	// dev is the status for the dev stage.
	TrainingStatus ModelPipelineRunStageStatus `json:"trainingStage,omitempty" protobuf:"bytes,4,opt,name=trainingStage"`
	// Staging is status for each qa stage.
	// +kubebuilder:validation:Optional
	UATStatus ModelPipelineRunStageStatus `json:"uatStage,omitempty" protobuf:"bytes,5,rep,name=uatStage"`
	// ReleaseStage is the status for the production stage.
	// +kubebuilder:validation:Optional
	CapacityStatus ModelPipelineRunStageStatus `json:"capacityStage,omitempty" protobuf:"bytes,6,rep,name=capacityStage"`
	// ReleaseStage is the status for the production stage.
	// +kubebuilder:validation:Optional
	ReleaseStatus ModelPipelineRunStageStatus `json:"prodStage,omitempty" protobuf:"bytes,7,rep,name=prodStage"`
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,8,opt,name=startTime"`
	// +kubebuilder:validation:Optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,9,opt,name=completionTime"`
	// The phase of the pipeline run
	// +kubebuilder:validation:Optional
	Phase PipelinePhase `json:"phase" protobuf:"bytes,10,opt,name=phase"`
	//+optional
	Conditions []ModelPipelineRunCondition `json:"conditions,omitempty" protobuf:"bytes,11,rep,name=conditions"`
	// Folder for pipeline run artifacts. This is assigned by the system
	// The folder contains all the pipeline artifacts - metadata, logs
	// +kubebuilder:validation:Optional
	Folder string `json:"folder,omitempty" protobuf:"bytes,13,opt,name=evalMetrics"`
}
