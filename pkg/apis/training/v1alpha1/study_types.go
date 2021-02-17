package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type StudyPhase string

const (
	StudyPhaseTraining     StudyPhase = "Training"
	StudyPhaseModelTesting StudyPhase = "Testing"
	StudyPhaseModelTrained StudyPhase = "Trained"
	StudyPhaseModelTested  StudyPhase = "Tested"
	StudyPhaseReporting    StudyPhase = "Reporting"
	StudyPhaseReported     StudyPhase = "Reported"
	StudyPhaseProfiling    StudyPhase = "Profiling"
	StudyPhaseProfiled     StudyPhase = "Profiled"
	StudyPhaseReady        StudyPhase = "Succeeded"
	StudyPhaseFailed       StudyPhase = "Failed"
	StudyPhaseAborted      StudyPhase = "Aborted"
	StudyPhasePaused       StudyPhase = "Paused"
)

// +kubebuilder:validation:Enum="random";"grid";"bayesian";"sh";"manual";"auto";
type SearchMethodName string

const (
	RandomSearch     SearchMethodName = "random"
	GridSearch       SearchMethodName = "grid"
	BayesianSearch   SearchMethodName = "bayesian"
	SHSearch         SearchMethodName = "sh"
	ManualSearch     SearchMethodName = "manual"
	AutoSearchMethod SearchMethodName = "auto"
)

/// StudyName Condition
// Condition on the study
type StudyConditionType string

/// Study Condition
const (
	// All the resources needed for training are allocated and ready.
	StudyInitialized StudyConditionType = "Initialized"
	// The search the best preprocessor is completed.
	StudySplitted StudyConditionType = "StudySplitted"
	// The search for the best model candidates is completed.
	// This phase consists mainly of cross validation.
	StudyModelsTrained StudyConditionType = "ModelsTrained"
	// true if we did ensamble training
	StudyEnsambleTrained StudyConditionType = "ModelsEnsembleTrained"
	// The best model canidate were tests on the full dataset.
	StudyBestModelTested StudyConditionType = "ModelTested"
	// True when we generated the reports.
	StudyReported StudyConditionType = "Reported"
	// True after we profiled the stdy
	StudyProfiled StudyConditionType = "Profiled"
	// True after we profiled the study
	StudyAborted StudyConditionType = "Aborted"
	// True after we profiled the study
	StudyPaused StudyConditionType = "Paused"
	// Study saved in database
	StudyArchived StudyConditionType = "Archived"
	// Study ready state
	StudyReady StudyConditionType = "Ready"
	// Study is partitioned based on the partition key
	StudyPartitioned StudyConditionType = "Partitioned"
)

// StudyCondition describes the state of a StudyName.
type StudyCondition struct {
	// Type of account condition.
	// +optional
	Type StudyConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=StudyConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	// +optional
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	// +optional
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	// +optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	// +optional
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +genclient
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.objective"
// +kubebuilder:printcolumn:name="Score",type="number",JSONPath=".status.bestModelScore"
// +kubebuilder:printcolumn:name="Best model",type="string",JSONPath=".status.bestModel"
// +kubebuilder:printcolumn:name="TotalTrainers",type="string",JSONPath=".status.totalTrainers"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:subresource:status
// +kubebuilder:object:root=true
// +kubebuilder:resource:path=studies,singular=study,shortName=sd,categories={training,modeld}
type Study struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              StudySpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            StudyStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:validation:Enum="XS";"S";"M";"L";"XL";"XXL";"XXXL";"AutoScaler";
type ResourceSize string

const (
	XS               ResourceSize = "XS"
	S                ResourceSize = "S"
	M                ResourceSize = "M"
	L                ResourceSize = "L"
	XL               ResourceSize = "XL"
	XXL              ResourceSize = "XXL"
	XXXL             ResourceSize = "XXXL"
	AutoResourceSize ResourceSize = "AutoScaler"
)

// +kubebuilder:validation:Enum="flask";"grpc";"onyx";
type PredictorFormat string

const (
	FlaskPredictor PredictorFormat = "flask"
	GrpcPredictor  PredictorFormat = "grpc"
	OnyxPredictor  PredictorFormat = "onyx"
)

// Since we are using multi modal alg , this parameter define the modality
// +kubebuilder:validation:Enum="data";"epochs";
type ModalityType string

const (
	ModalityTypeData   ModalityType = "data"
	ModalityTypeEpochs ModalityType = "epochs"
)

type SplitType string

const (
	Random         SplitType = "random"
	ParitionColumn SplitType = "partition-column"
	Group          SplitType = "group"
	Datetime       SplitType = "datatime"
	Stratified     SplitType = "stratified"
	Auto           SplitType = "auto"
)

type TrainingResourceRequest struct {
	// Gpu specify the desired gpu requirements.  will be compared
	// +optional
	Gpu ResourceSize `json:"gpu,omitempty" protobuf:"bytes,1,opt,name=gpu"`
	// Cpu specify the cpu requirements will be compared
	// +optional
	Cpu ResourceSize `json:"cpu,omitempty" protobuf:"bytes,2,opt,name=cpu"`
	// Mem define the memory resource requirements will be compared
	// +optional
	Mem ResourceSize `json:"mem,omitempty" protobuf:"bytes,3,opt,name=mem"`
}

type SuccessiveHalvingOptions struct {
	// The maximum budget allocated to each model during SH search.
	// The default max budget is 81
	// +optional
	MaxBudget *int32 `json:"maxBudget,omitempty" protobuf:"varint,6,opt,name=maxBudget"`
	// The rate of elimination during SH search, such that only 1/rate of models are promoted to the
	// next half
	// The default rate is 3
	// +optional
	EliminationRate *int32 `json:"eliminationRate,omitempty" protobuf:"varint,7,opt,name=eliminationRate"`
	// The modality type. The default modality is based on the type of models
	// For deep models - we use epocs.
	// For classical models - we use data
	// +optional
	Modality *ModalityType `json:"modality,omitempty" protobuf:"bytes,8,opt,name=modality"`
}

// Define the constraint on the training process.
type ModelSearchSpec struct {
	// Type specify the hyper parameter optimization search method.
	// The only supported value is random
	// +optional
	Type *SearchMethodName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// MaxCost specify what is the maximum cost incurred before
	// stopping model creations
	// +optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	MaxCost *int32 `json:"maxCost,omitempty" protobuf:"varint,2,opt,name=maxCost"`
	// MaxTime specify what is the maximum time allocated to a study (in minutes).
	// the cross validation stage.
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10000
	// +optional
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,3,opt,name=maxTime"`
	// Used for random search, the max models sampled.
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	// +optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,4,opt,name=maxModels"`
	// The minimum score by which the search would stop
	// +optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,5,opt,name=minScore"`
	// The desired number of trainers running during search.
	// Default: 1
	// +optional
	// +kubebuilder:validation:Maximum=50
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,6,opt,name=trainers"`
	// SHOptions is the desired options for successive halving search.
	// All other models are saved into an archive.
	// +optional
	SHOptions SuccessiveHalvingOptions `json:"shOptions,omitempty" protobuf:"bytes,7,opt,name=shOptions"`
	// Indicate the desired number of models that should be passed to the testing phase.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	// +optional
	Test *int32 `json:"test,omitempty" protobuf:"varint,8,opt,name=test"`
	// Indicate the total number of full models that would be retain in etcd.
	// All other models are garbage collected (archived).
	// models are sorted by thier objective score.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	// +optional
	RetainTop *int32 `json:"retainTop,omitempty" protobuf:"varint,9,opt,name=retainTop"`
	// RetainFor measure the time in minutes for modeld trained. Default is 60 min (1 H).
	// +optional
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=2400
	RetainFor *int32 `json:"retainedFor,omitempty" protobuf:"varint,10,opt,name=retainedFor"`
	// Define the general size of the resources needed for each trainer.
	// +optional
	Resources *TrainingResourceRequest `json:"resources,omitempty" protobuf:"bytes,11,opt,name=resources"`
	// Contain the list of algorithms that should be tested as part of the search.
	AllowList []catalog.ClassicEstimatorName `json:"allowlist,omitempty" protobuf:"bytes,12,rep,name=allowlist"`
	// If true, create a voting ensemble of the top 3 models.
	// +optional
	VotingEnsemble *bool `json:"votingEnsemble,omitempty" protobuf:"bytes,13,opt,name=votingEnsemble"`
	// If true, create a stacking ensemble of the top 3 models.
	// +optional
	StackingEnsemble *bool `json:"stackingEnsemble,omitempty" protobuf:"bytes,14,opt,name=stackingEnsemble"`
}

// StudySpec defines the desired state of the study
type StudySpec struct {
	// The version of the study
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// required
	VersionName *string `json:"versionName" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:validation:MaxLength=512
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// A reference to the lab where the trainers for this study run.
	// If no value is provided, the lab is taken from the
	// +optional
	LabRef *v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,3,opt,name=labRef"`
	// DatasetName refer to the dataset object for which the study is for.
	// Required.
	DatasetName *string `json:"datasetName" protobuf:"bytes,4,opt,name=datasetName"`
	// Task specify the machine learning task (e.g classification).
	// This must match the task of the data product.
	// Required.
	Task *catalog.MLTask `json:"task" protobuf:"bytes,5,opt,name=task"`
	// The objective defined how the study controller will compare model performance.
	// +optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,6,opt,name=objective"`
	// Defines the model search
	// +optional
	Search *ModelSearchSpec `json:"search,omitempty" protobuf:"bytes,8,opt,name=search"`
	// This is template for preprocessors for this study
	// Default: all preprocessing is set to auto.
	// +optional
	Preprocessing *PreprocessingSpec `json:"preprocessing,omitempty" protobuf:"bytes,9,opt,name=preprocessing"`
	// Training template contain the desired training parameter for the models.
	// +optional
	Training *TrainingSpec `json:"training,omitempty" protobuf:"bytes,10,opt,name=training"`
	// A reference to the workload class object from the catalog.
	// Default : scikit learn trainer.
	// +optional
	WorkloadClassRef *v1.ObjectReference `json:"trainerClassRef,omitempty" protobuf:"bytes,11,opt,name=trainerClassRef"`
	// A reference to the split.
	// +optional
	Split DataSplit `json:"split,omitempty" protobuf:"bytes,12,opt,name=split"`
	// Aborted is set when we want to abort the training
	// +optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"bytes,13,opt,name=aborted"`
	// Reported is set when we want to create model report
	// +optional
	Reported *bool `json:"reported,omitempty" protobuf:"bytes,14,opt,name=reported"`
	// Paused is set when we want to pause the training
	// +optional
	Paused *bool `json:"paused,omitempty" protobuf:"bytes,15,opt,name=paused"`
	// Profiled is set when we want to create model profile and study profile.
	// +optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"bytes,16,opt,name=profiled"`
	// Set to true if you want the system to create a docker model image, at the end of training.
	// +optional
	ModelPublished *bool `json:"modelPublished,omitempty" protobuf:"bytes,17,opt,name=modelPublished"`
	// Set to true if you want the system to push model image to remote docker registry
	// +optional
	ModelImagePushed *bool `json:"modelImagePushed,omitempty" protobuf:"bytes,18,opt,name=modelImagePushed"`
	// The location of the study artifacts
	// By default the bucket is the data product bucket.
	// +optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,19,opt,name=location"`
	// The group hierarchy
	// +optional
	Hierarchy *Hierarchy `json:"hierarchy,omitempty" protobuf:"bytes,21,opt,name=hierarchy"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,22,opt,name=owner"`
}

// StudyStatus defines the observed state of the Study
type StudyStatus struct {
	// Total models created for the study
	Models int32 `json:"models,omitempty" protobuf:"varint,1,opt,name=models"`
	// models waiting for a trainer
	WaitingToTrainModels int32 `json:"waitingToTrain,omitempty" protobuf:"varint,2,opt,name=waitingToTrain"`
	// models which are currently training or testing.
	TrainingModels int32 `json:"trainingModels,omitempty" protobuf:"varint,3,opt,name=trainingModels"`
	// models that failed during training.
	ModelsFailedTraining int32 `json:"failedTrainingModels,omitempty" protobuf:"varint,4,opt,name=failedTrainingModels"`
	// models that were successful during training
	TrainedModels int32 `json:"trainedModels,omitempty" protobuf:"varint,5,opt,name=trainedModels"`
	// models waiting testing
	WaitingToTestModels int32 `json:"waitingToTestModels,omitempty" protobuf:"varint,6,opt,name=waitingToTestModels"`
	// models in testing
	TestingModels int32 `json:"testingModels,omitempty" protobuf:"varint,7,opt,name=testingModels"`
	// models failed testing.
	ModelsFailedTesting int32 `json:"failedTestingModels,omitempty" protobuf:"varint,8,opt,name=failedTestingModels"`
	// Tested models
	TestedModels int32 `json:"testedModels,omitempty" protobuf:"varint,9,opt,name=testedModels"`
	// Total number of trainers in this study
	Trainers int32 `json:"trainers,omitempty" protobuf:"varint,10,opt,name=trainers"`
	// Free trainers
	FreeTrainers int32 `json:"freeTrainers,omitempty" protobuf:"varint,11,opt,name=freeTrainers"`
	// TotalTrainers training
	BusyTrainers int32 `json:"busyTrainers,omitempty" protobuf:"varint,12,opt,name=budyTrainers"`
	// Study start time
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,13,opt,name=startTime"`
	// Start of the training phase
	TrainingStartTime *metav1.Time `json:"trainingStartTime,omitempty" protobuf:"bytes,14,opt,name=trainingStartTime"`
	// End of the training phase.
	TrainingCompletionTime *metav1.Time `json:"trainingCompletionTime,omitempty" protobuf:"bytes,15,opt,name=trainingCompletionTime"`
	// Start of the testing phase
	TestingStartTime *metav1.Time `json:"testingStarted,omitempty" protobuf:"bytes,16,opt,name=testingStarted"`
	// Represents time when the study reached a successful complete or failure phase. It is not guaranteed to
	TestingCompletionTime *metav1.Time `json:"testingCompletionTime,omitempty" protobuf:"bytes,17,opt,name=testingCompletionTime"`
	// The study end time.
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,18,opt,name=completionTime"`
	// The Best model name.
	BestModel string `json:"bestModel,omitempty" protobuf:"bytes,20,opt,name=bestModel"`
	// The Best model score, so far.
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,21,opt,name=bestModelScore"`
	// A reference to the profile uri which were produce during processing
	ProfileUri string `json:"profileUri" protobuf:"bytes,22,opt,name=profileUri"`
	// The study report name
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,23,opt,name=reportName"`
	// The phase of the study
	Phase StudyPhase `json:"phase" protobuf:"bytes,24,opt,name=phase"`
	// This is the set of partition levels
	// Represents the latest available observations of a study state.
	Conditions []StudyCondition `json:"conditions,omitempty" protobuf:"bytes,25,rep,name=conditions"`
}

// model cv results
// +k8s:deepcopy-gen=true
type ModelResult struct {
	// +optional
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// +optional
	Alg string `json:"alg,omitempty" protobuf:"bytes,2,opt,name=alg"`
	// +optional
	Score *float64 `json:"score,omitempty" protobuf:"bytes,3,opt,name=score"`
	// +optional
	Error *bool `json:"error,omitempty" protobuf:"bytes,4,opt,name=error"`
}

//==============================================================================
// StudyList
//==============================================================================

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// StudyList is a list of Study
type StudyList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Study `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type DataSplit struct {
	// Indicate that this is an automatic split.
	// +optional
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,1,opt,name=auto"`
	// Training is a percent number (0-100) which specify how much of
	// the data will be used for training
	// +optional
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	Train *int32 `json:"train,omitempty" protobuf:"varint,2,opt,name=train"`
	// Validation is percent of dataset rows which would be used to compute the objective during
	// hyper parameter search phase.
	// Only used if we do not do cross validation.
	// default is 10% of the data, if we do not have cross validation.
	// default is 0% of the data, if we do cross validation.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=50
	// +optional
	Validation *int32 `json:"validation,omitempty" protobuf:"varint,3,opt,name=validation"`
	// Test is percent of dataset rows which would be used to compute the objective during
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=50
	// +optional
	Test *int32 `json:"test,omitempty" protobuf:"varint,4,opt,name=test"`
	// Indicate if the dataset split should be stratified.
	// +optional
	SplitPolicy SplitType `json:"splitPolicy,omitempty" protobuf:"bytes,5,opt,name=splitPolicy"`
	// The name of the column used to split
	// +optional
	SplitColumn *string `json:"splitColumn,omitempty" protobuf:"bytes,6,opt,name=splitColumn"`
	// The seed to use for the estimator
	// Default: 42
	// +optional
	Seed *float64 `json:"seed,omitempty" protobuf:"bytes,7,opt,name=seed"`
}

type Level struct {
	// The name of the level - the column name
	Name string `json:"string,omitempty" protobuf:"bytes,1,opt,name=string"`
	// The number of time periods to
	Horizon int32 `json:"horizon,omitempty" protobuf:"varint,2,opt,name=horizon"`
	// The freq of the level
	Freq catalog.Freq `json:"freq,omitempty" protobuf:"bytes,3,opt,name=freq"`
	// The aggregate function used to roll up the lower level
	Aggregate catalog.Aggregate `json:"aggregate,omitempty" protobuf:"bytes,4,opt,name=aggregate"`
	// The distinct values of the column for this level
	Values []string `json:"distinc,omitempty" protobuf:"bytes,5,opt,name=distinc"`
}

type Hierarchy struct {
	// The columns in the data frame that belongs to the hierarchy. By default, all the item level column is the last one. The default aggregate function is sum.
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// The group level columns. For each group level column specify the horizon and the aggregate function
	GroupLevels []Level `json:"groupLevels,omitempty" protobuf:"bytes,2,rep,name=groupLevels"`
	// Item level column.
	ItemLevel Level `json:"itemLevel,omitempty" protobuf:"bytes,3,opt,name=itemLevel"`
	// Optional notifier to use when the forecast is complete.
	// +optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,4,opt,name=notifierName"`
}

// A definition for a single forecast
// A single forecast knows its forecast key and the index to its level
type ForecastObj struct {
	Key        string `json:"key,omitempty" protobuf:"bytes,1,opt,name=key"`
	LevelIndex int32  `json:"levelIndex,omitempty" protobuf:"varint,2,opt,name=levelIndex"`
}
