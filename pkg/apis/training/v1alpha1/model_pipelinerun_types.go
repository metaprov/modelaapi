package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type PipelinePhase string

const (
	PipelinePhasePending            PipelinePhase = "Pending"
	PipelinePhaseTraining           PipelinePhase = "Training"
	PipelinePhasePublishing         PipelinePhase = "Publishing"
	PipelinePhaseSmokeTest          PipelinePhase = "SmokeTest"
	PipelinePhasePredictorSetup     PipelinePhase = "PredictorSetup"
	PipelinePhaseTesting            PipelinePhase = "Testing"
	PipelinePhaseWaitingForApproval PipelinePhase = "WaitingForApproval"
	PipelinePhaseApproved           PipelinePhase = "Approved"
	PipelinePhaseRunning            PipelinePhase = "Running"
	PipelinePhaseFailed             PipelinePhase = "Failed"
	PipelinePhaseAborted            PipelinePhase = "Aborted"
	PipelinePhaseMonitoring         PipelinePhase = "Monitoring"
	PipelinePhaseNeedRetraining     PipelinePhase = "NeedRetraining"
)

type ModelPipelineStage string

const (
	ModelPipelineStageInitial    ModelPipelineStage = "initial"
	ModelPipelineStageData       ModelPipelineStage = "data"
	ModelPipelineStageTraining   ModelPipelineStage = "training"
	ModelPipelineStageUAT        ModelPipelineStage = "uat"
	ModelPipelineStageCapacity   ModelPipelineStage = "capacity"
	ModelPipelineStageProd       ModelPipelineStage = "prod"
	ModelPipelineStageMonitoring ModelPipelineStage = "monitoring"
	ModelPipelineStageLabeling   ModelPipelineStage = "labeling"
)

// +kubebuilder:validation:Enum="data";"train";"uat";"capacity";"deployment";"release"
type StageName string

const (
	DataStage       StageName = "data"
	TrainStage      StageName = "training"
	UatStage        StageName = "uat"
	CapacityStage   StageName = "capacity"
	DeploymentStage StageName = "deployment"
	ReleaseStage    StageName = "release"
	MonitoringStage StageName = "monitoring"
	LabelingStage   StageName = "labeling"
)

// Pipeline run condition
type PipelineRunConditionType string

/// ModelPipelineRun Condition
const (
	MPRSaved                  PipelineRunConditionType = "Saved"
	MPRDataStageCompleted     PipelineRunConditionType = "DataStageCompleted"
	MPRTrainingStageCompleted PipelineRunConditionType = "TrainingStageCompleted"
	MPRUATCompleted           PipelineRunConditionType = "UATStageCompleted"
	MPRCapacityStageCompleted PipelineRunConditionType = "CapacityStageCompleted"
	MPRModelDeployed          PipelineRunConditionType = "ModelDeployed"
	MPRModelReleased          PipelineRunConditionType = "ModelReleased"
	MPRModelMonitored         PipelineRunConditionType = "Monitored"
	MPRRetrained              PipelineRunConditionType = "Retrained"
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
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Pipeline",type="string",JSONPath=".status.pipelineName"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".status.versionName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.failureMessage"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelpipelineruns,shortName=mpr,singular=modelpipelinerun,categories={train,modela,all}
// ModelPipelineRun represent a execution of a pipeline
type ModelPipelineRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelPipelineRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	// +kubebuilder:validation:Optional
	Status ModelPipelineRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// PipelineName is the name of the ModelPipeline for this pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	PipelineName *string `json:"pipelineName,omitempty" protobuf:"bytes,4,opt,name=pipelineName"`
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
}

type StageStatusPhase string

const (
	StageStatusPhaseRunning            StageStatusPhase = "Running"
	StageStatusPhaseTraining           StageStatusPhase = "Training"   // search and train for the best model
	StageStatusPhasePublishing         StageStatusPhase = "Publishing" // publish the model
	StageStatusPhaseUnitTests          StageStatusPhase = "UnitTesting"
	StageStatusPhaseReleasing          StageStatusPhase = "Releasing"
	StageStatusPhaseWaitingForApproval StageStatusPhase = "WaitingForApproval"
	StageStatusPhaseApproved           StageStatusPhase = "Approved"
	StageStatusPhaseDenied             StageStatusPhase = "Denied"
	StageStatusPhaseCompleted          StageStatusPhase = "Completed"
	StageStatusPhaseFailed             StageStatusPhase = "Failed"
)

// ModelPipelineRunStageStatus is the observed state of the PipelineRunStage.
type ModelPipelineRunStageStatus struct {
	// Phase is the phase of the stage
	// +kubebuilder:default:="Pending"
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
	Result StageTestResult `json:"testResult,omitempty" protobuf:"bytes,9,rep,name=testResult"`
	// Error record error.
	//+kubebuilder:validation:Optional
	Error string `json:"error,omitempty" protobuf:"bytes,10,opt,name=error"`
}

// ModelPipelineRunStatus is the observed state of the ModelPipelineRun resource .
type ModelPipelineRunStatus struct {
	// The current stage of the pipeline
	//+kubebuilder:validation:Optional
	Stage ModelPipelineStage `json:"stage,omitempty" protobuf:"bytes,1,opt,name=stage"`
	// The name of the dataset that was captured by the label filter.
	//+kubebuilder:validation:Optional
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,2,opt,name=datasetName"`
	// The name of the study generated.
	//+kubebuilder:validation:Optional
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,3,opt,name=studyName"`
	// The name of the best model
	//+kubebuilder:validation:Optional
	ModelName string `json:"modelName,omitempty" protobuf:"bytes,4,opt,name=modelName"`
	// DataStatus is the status of the data stage
	// data is the status for the data stage.
	//+kubebuilder:validation:Optional
	DataStatus ModelPipelineRunStageStatus `json:"dataStatus,omitempty" protobuf:"bytes,5,opt,name=dataStatus"`
	// TrainingStatus is the status for the training stage
	// +kubebuilder:validation:Optional
	TrainingStatus ModelPipelineRunStageStatus `json:"trainingStatus,omitempty" protobuf:"bytes,6,opt,name=trainingStatus"`
	// UATStatus is the status of the uat stage
	//+kubebuilder:validation:Optional
	UATStatus ModelPipelineRunStageStatus `json:"uatStatus,omitempty" protobuf:"bytes,7,opt,name=uatStatus"`
	// CapacityStatus is the status for the capacity stage.
	//+kubebuilder:validation:Optional
	CapacityStatus ModelPipelineRunStageStatus `json:"capacityStatus,omitempty" protobuf:"bytes,8,opt,name=capacityStatus"`
	// DeploymentStatus is the status for the prod stage
	//+kubebuilder:validation:Optional
	DeploymentStatus ModelPipelineRunStageStatus `json:"deploymentStatus,omitempty" protobuf:"bytes,9,opt,name=deploymentStatus"`
	// DeploymentStatus is the status for the prod stage
	//+kubebuilder:validation:Optional
	ReleaseStatus ModelPipelineRunStageStatus `json:"releaseStatus,omitempty" protobuf:"bytes,10,opt,name=releaseStatus"`
	// Monitoring status is the status of the monitor phase.
	//+kubebuilder:validation:Optional
	MonitoringStatus ModelPipelineRunStageStatus `json:"monitoringStatus,omitempty" protobuf:"bytes,11,opt,name=monitoringStatus"`
	// Labeling status if the status of the labeling process
	//+kubebuilder:validation:Optional
	LabelingStatus ModelPipelineRunStageStatus `json:"labelingStatus,omitempty" protobuf:"bytes,12,opt,name=labelingStatus"`
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,13,opt,name=startTime"`
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,14,opt,name=endTime"`
	// The phase of the pipeline run
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase PipelinePhase `json:"phase" protobuf:"bytes,15,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,16,opt,name=observedGeneration"`
	// Folder for pipeline run artifacts. This is assigned by the system
	// The folder contains all the pipeline artifacts - metadata, logs
	// +kubebuilder:validation:Optional
	Folder string `json:"folder,omitempty" protobuf:"bytes,17,opt,name=evalMetrics"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,18,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,19,opt,name=failureMessage"`
	// Pipeline progress Progress in percent, the progress takes into account the different stages of the pipeline
	// +kubebuilder:validation:Optional
	Progress *int32 `json:"progress" protobuf:"varint,20,opt,name=progress"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,21,opt,name=triggeredBy"`

	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,22,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelPipelineRunCondition `json:"conditions,omitempty" protobuf:"bytes,23,rep,name=conditions"`
}
