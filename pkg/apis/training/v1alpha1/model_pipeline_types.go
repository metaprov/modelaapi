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
	Data *DataStageSpec `json:"data,omitempty" protobuf:"bytes,5,opt,name=data"`
	// TrainingSpec stage
	// +kubebuilder:validation:Optional
	Training *TrainingStageSpec `json:"training,omitempty" protobuf:"bytes,6,opt,name=training"`
	// Acceptance stage is used for further testing
	// +kubebuilder:validation:Optional
	UAT *UATStageSpec `json:"uat,omitempty" protobuf:"bytes,7,opt,name=uat"`
	// Capacity stage for capacity
	// +kubebuilder:validation:Optional
	Capacity *CapacityStageSpec `json:"capacity,omitempty" protobuf:"bytes,8,opt,name=capacity"`
	// ReleaseStage stage define how to place the model into production.
	// +kubebuilder:validation:Optional
	Prod *ProdStageSpec `json:"prod,omitempty" protobuf:"bytes,9,opt,name=prod"`
	// Folder for the pipeline and pipeline run artifacts.
	// The folder contains all the study artifacts - metadata, reports, profile,models
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,10,opt,name=location"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,11,opt,name=schedule"`
	// The owner of the run, set to the owner of the pipeline
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,12,opt,name=owner"`
	// ApproverAccountName is the name of the approver
	// +kubebuilder:validation:Optional
	ApproverAccountName *string `json:"approverAccountName,omitempty" protobuf:"bytes,13,opt,name=approverAccountName"`
	// NotifierName is the name of the notifier to use in case of pipeline failure
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,14,opt,name=notifierName"`
	// BaselineModelName is the name of the model which is used to compare with this pipeline results.
	// +kubebuilder:validation:Optional
	BaselineModelName *string `json:"baselineModelName,omitempty" protobuf:"bytes,15,opt,name=baselineModelName"`
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
	// The name of the dataset. If the data pipeline run creates the dataset
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// +kubebuilder:validation:Optional
	DataPipelineName string `json:"dataPipelineName,omitempty" protobuf:"bytes,2,opt,name=datapipelineName"`
}

// TrainingStageSpec is the desired state of the training step of the pipeline
type TrainingStageSpec struct {
	// NotebookName template specify the notebook
	// +kubebuilder:default =""
	NotebookName *string `json:"notebookName,omitempty" protobuf:"bytes,1,opt,name=notebookName"`
	// LabName is the name of the lab used for training. If empty the system will use the default lab
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,2,opt,name=labName"`
	// StudyName is the name of a study template. The study will train models on the dataset from the data stage
	// +kubebuilder:default =""
	// +kubebuilder:validation:Optional
	StudyName *string `json:"studyName,omitempty" protobuf:"bytes,3,opt,name=studyName"`

	// MinScore is the score needed to move to another stage. The min score is composed of a metric and a score.
	// +kubebuilder:validation:Optional
	MinScore TestScore `json:"minScore,omitempty" protobuf:"bytes,4,opt,name=minScore"`

	// ManualApproval dentoes if we need manual apporval before advancing to further stages in the pipeline
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ManualApproval *bool `json:"manualApproval,omitempty" protobuf:"bytes,5,opt,name=manualApproval"`
}

//UATStageSpec is the specification of the user acceptance test.
type UATStageSpec struct {
	// The serving site for the testing
	// +kubebuilder:default =""
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`

	// Tests is the specification of tests to run
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Tests []ModelTestSpec `json:"tests,omitempty" protobuf:"bytes,2,opt,name=tests"`

	// Auto defines if we move to the next stage without human intervation
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,3,opt,name=auto"`
	// A reference to the workload class that is used for running the prediction
	// +kubebuilder:default:="default-prediction-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,4,opt,name=workloadClassName"`
}

// CapacityStageSpec is the desired state of the capcity testing.
type CapacityStageSpec struct {
	// ServingSiteName is the serving site for the testing during the capacity stage
	// +kubebuilder:default =""
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`

	// Tests is the specification of tests to run in this stage
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Tests []ModelTestSpec `json:"tests,omitempty" protobuf:"bytes,2,opt,name=tests"`

	// ManualApproval dentoes if we need manual apporval before advancing to further stages in the pipeline
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ManualApproval *bool `json:"manualApproval,omitempty" protobuf:"bytes,5,opt,name=manualApproval"`
	// A reference to the workload class that is used for running the prediction
	// +kubebuilder:default:="default-prediction-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,4,opt,name=workloadClassName"`
}

//ProdStageSpec is the predictor name that would host the model
type ProdStageSpec struct {
	// ServingSiteName is the serving site for the release
	// +kubebuilder:default =""
	ServingSiteName *string `json:"servingSiteName,omitempty" protobuf:"bytes,1,opt,name=servingSiteName"`
	// PredictorName he release predictor. The predictor will be created if it does not exist.
	// +kubebuilder:validation:Optional
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`
	// Weight is the weight of the model.
	// +kubebuilder:validation:Optional
	Template *catalog.ModelDeploymentSpec `json:"template,omitempty" protobuf:"bytes,3,opt,name=template"`
	// ManualApproval dentoes if we need manual approval before advancing from deployed to released
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ManualApproval *bool `json:"manualApproval,omitempty" protobuf:"bytes,4,opt,name=manualApproval"`
	// Tests is the List of tests to run against the deployed model before moving production traffic to the model
	Tests []ModelTestSpec `json:"tests,omitempty" protobuf:"bytes,2,opt,name=tests"`
}

// ModelPipelineStatus define the observed state of the pipeline
type ModelPipelineStatus struct {
	//+optional
	Conditions []ModelPipelineCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}

type ModelTestSpec struct {
	// Name of the dataset used for testing
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// Minimum scores required to pass the tests
	MinScores []TestScore `json:"minScores,omitempty" protobuf:"bytes,2,opt,name=minScores"`
	// Max time in seconds
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,3,opt,name=maxTime"`
}

type TestScore struct {
	// Metric is the name of the metric
	Metric catalog.Metric `json:"metric,omitempty" protobuf:"bytes,1,opt,name=metric"`
	// The score needed.
	Score *float64 `json:"score,omitempty" protobuf:"bytes,2,opt,name=score"`
}
