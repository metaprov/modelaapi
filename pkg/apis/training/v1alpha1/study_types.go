package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// StudyPhase is the current phase of a Study
type StudyPhase string

const (
	StudyPhaseModelPending       StudyPhase = "Pending"
	StudyPhaseSplitting          StudyPhase = "Splitting"
	StudyPhaseSplitted           StudyPhase = "Splitted"
	StudyPhaseEngineeringFeature StudyPhase = "EngineeringFeatures"
	StudyPhaseFeatureEngineered  StudyPhase = "FeaturesEngineered"
	StudyPhaseBaeline            StudyPhase = "Baselining"
	StudyPhaseBaselined          StudyPhase = "Baselined"
	StudyPhaseSearching          StudyPhase = "Searching"
	StudyPhaseSearched           StudyPhase = "Searched"
	StudyPhaseCreatingEnsembles  StudyPhase = "CreatingEnsembles"
	StudyPhaseCreatedEnsembles   StudyPhase = "CreatedEnsembles"
	StudyPhaseTesting            StudyPhase = "Testing"
	StudyPhaseTested             StudyPhase = "Tested"
	StudyPhaseReported           StudyPhase = "Reported"
	StudyPhaseReporting          StudyPhase = "Reporting"
	StudyPhaseProfiling          StudyPhase = "Profiling"
	StudyPhaseProfiled           StudyPhase = "Profiled"
	StudyPhaseExplaining         StudyPhase = "Explaining"
	StudyPhaseExplained          StudyPhase = "Explained"
	StudyPhaseCompleted          StudyPhase = "Completed"
	StudyPhaseFailed             StudyPhase = "Failed"
	StudyPhaseAborted            StudyPhase = "Aborted"
	StudyPhasePaused             StudyPhase = "Paused"
)

// +kubebuilder:validation:Enum="random";"grid";"bayesian";"tpe";"manual";"auto";
type SamplerName string

const (
	RandomSearch     SamplerName = "random"
	GridSearch       SamplerName = "grid"
	BayesianSearch   SamplerName = "bayesian"
	TPESearch        SamplerName = "tpe"
	ManualSearch     SamplerName = "manual"
	AutoSearchMethod SamplerName = "auto"
)

// +kubebuilder:validation:Enum="none";"patient";"median";"percentile";"sh";"hyperband";"threshold";
type PrunerName string

const (
	NonePruner       PrunerName = "none"
	PatientPruner    PrunerName = "patient"
	MedianPruner     PrunerName = "median"
	PercentilePruner PrunerName = "percentile"
	SHPruner         PrunerName = "sh"
	HyperbandPruner  PrunerName = "hyperband"
	thresholdPruner  PrunerName = "threshold"
)

// StudyConditionType is the condition of a Study
type StudyConditionType string

/// Study Condition
const (
	// StudyInitialized states that the resources needed for training are allocated and ready
	StudyInitialized StudyConditionType = "Initialized"
	// StudySplitted states that the training dataset has been split and is ready for use
	StudySplitted StudyConditionType = "StudySplitted"
	// StudyFeatureEngineered states that the search for the best feature engineering pipeline is complete
	StudyFeatureEngineered StudyConditionType = "StudyFeaturesEngineered"
	// StudyBaselined states that baseline models for each algorithm have been trained
	StudyBaselined StudyConditionType = "StudyBaselined"
	// StudySearched states that the primary model search for algorithm and hyper-parameters is complete
	StudySearched StudyConditionType = "StudySearched"
	// StudyEnsambleCreated states that ensemble models were trained
	StudyEnsambleCreated StudyConditionType = "ModelsEnsembleCreated"
	// StudyTested states that the best model has been tested against training and testing datasets
	StudyTested StudyConditionType = "ModelTested"
	// StudyReported states that a Report resource has been generated for the Study
	StudyReported  StudyConditionType = "Reported"
	StudyProfiled  StudyConditionType = "Profiled"
	StudyExplained StudyConditionType = "Explained"
	StudyAborted   StudyConditionType = "Aborted"
	// StudyPaused states that the execution of the Study is paused
	StudyPaused StudyConditionType = "Paused"
	// StudySaved states that the Study has been archived in a database
	StudySaved StudyConditionType = "Saved"
	// StudyCompleted states that the Study has completed execution
	StudyCompleted   StudyConditionType = "Completed"
	StudyPartitioned StudyConditionType = "Partitioned"
	StudyArchived    StudyConditionType = "Archived"
)

// StudyCondition describes the state of a Study at a certain point
type StudyCondition struct {
	// Type of study condition
	// +kubebuilder:validation:Optional
	Type StudyConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=StudyConditionType"`
	// Status of the condition, one of True, False, Unknown
	// +kubebuilder:validation:Optional
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	// +kubebuilder:validation:Optional
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	// +kubebuilder:validation:Optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human-readable message indicating details about the transition
	// +kubebuilder:validation:Optional
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// Study represents an automatic search for the best machine learning model for a given dataset
// +kubebuilder:subresource:status
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName",priority=1
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.search.objective"
// +kubebuilder:printcolumn:name="Score",type="number",JSONPath=".status.bestModelScore"
// +kubebuilder:printcolumn:name="Best model",type="string",JSONPath=".status.bestModel"
// +kubebuilder:printcolumn:name="Trained",type="number",JSONPath=".status.search.completed"
// +kubebuilder:printcolumn:name="Tested",type="number",JSONPath=".status.test.completed"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.lastFailure"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=studies,singular=study,shortName=sd,categories={training,modela}
type Study struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              StudySpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            StudyStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// SuccessiveHalvingOptions defines the parameters for a successive halving search
type SuccessiveHalvingOptions struct {
	// The maximum budget allocated to models during the successive halving search. For classical models, this
	// represents the number percentage (0 through 100) of data that can be allocated to the model for training
	// +kubebuilder:default:=81
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxBudget *int32 `json:"maxBudget,omitempty" protobuf:"varint,1,opt,name=maxBudget"`
	// The denominator for the fraction of models that will be promoted to the next round
	// (i.e. an EliminationRate of 3 will only promote 1/3rd models to the next round)
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	EliminationRate *int32 `json:"eliminationRate,omitempty" protobuf:"varint,2,opt,name=eliminationRate"`
	// The type of modality, based on the type of model
	// For classical models, it should be based on data percentage
	// For deep models, it should be based on epochs
	// +kubebuilder:default:=epochs
	// +kubebuilder:validation:Optional
	Modality *catalog.ModalityType `json:"modality,omitempty" protobuf:"bytes,3,opt,name=modality"`
}

// SearchSpec specifies the configuration for a distributed model search
type SearchSpec struct {
	// The hyper-parameter optimization search method
	// +kubebuilder:default:=tpe
	// +kubebuilder:validation:Optional
	Sampler *SamplerName `json:"sampler,omitempty" protobuf:"bytes,1,opt,name=sampler"`
	// Pruner specifies the configuration to run a model search using a pruner algorithm. Using a pruning
	// algorithm allows you to train a large number of candidate models with a subset of the dataset
	// +kubebuilder:validation:Optional
	Pruner PrunerSpec `json:"pruner,omitempty" protobuf:"bytes,2,opt,name=pruner"`
	// The maximum cost that can be incurred before stopping the model search (applicable for deep learning models)
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	MaxCost *int32 `json:"maxCost,omitempty" protobuf:"varint,3,opt,name=maxCost"`
	// The maximum number of time, in seconds, that the model search can run for
	// +kubebuilder:default:=30
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10000
	// +kubebuilder:validation:Optional
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,4,opt,name=maxTime"`
	// The maximum number of candidate models that will be sampled and trained
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,5,opt,name=maxModels"`
	// The minimum score of a candidate model, after which the model search will forcibly stop
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,6,opt,name=minScore"`
	// The desired number of trainers that will train candidate models in parallel. The number
	// of trainers is restricted based on the allowance provided by the active License
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=50
	// +kubebuilder:validation:Minimum=0
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,7,opt,name=trainers"`
	// The number of top candidate models that will be moved to the testing phase once the model search is complete.
	// By default, only the best model will be retained
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=5
	Test *int32 `json:"test,omitempty" protobuf:"varint,8,opt,name=test"`
	// The number of top candidate models, sorted by their objective score, that will be retained in
	// the case that garbage collection is enabled. All other models will be archived
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	RetainTop *int32 `json:"retainTop,omitempty" protobuf:"varint,9,opt,name=retainTop"`
	// The time, in minutes, for which candidate models (excluding the best model) will be
	// retained, after which they will be archived
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=2400
	RetainFor *int32 `json:"retainedFor,omitempty" protobuf:"varint,10,opt,name=retainedFor"`
	// SearchSpace specifies the algorithms available to candidate models
	// +kubebuilder:validation:Optional
	SearchSpace AlgorithmSearchSpaceSpec `json:"searchSpace,omitempty" protobuf:"bytes,11,opt,name=searchSpace"`
	// The number of new models produced by the search which, if there is no improvement
	// in score, the model search will conclude
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	EarlyStopAfter *int32 `json:"earlyStopAfter,omitempty" protobuf:"varint,12,opt,name=earlyStopAfter"`
	// The objective metric that will be measured against all models to evaluate their performance
	// +kubebuilder:validation:Optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,14,opt,name=objective"`
	// The second objective metric that will be measured and evaluated in tandem with the primary objective.
	// The optimizer will attempt to optimize both metrics
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Objective2 *catalog.Metric `json:"objective2,omitempty" protobuf:"bytes,15,opt,name=objective2"`
}

// EnsemblesSpec specifies the configuration to produce ensemble models
type EnsemblesSpec struct {
	// Indicates if ensemble models will be created
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Indicates if a voting ensemble model will be created
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	VotingEnsemble *bool `json:"votingEnsemble,omitempty" protobuf:"varint,2,opt,name=votingEnsemble"`
	// Indicates if a stacking ensemble model will be created
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	StackingEnsemble *bool `json:"stackingEnsemble,omitempty" protobuf:"varint,3,opt,name=stackingEnsemble"`
	// The number of top candidate models to include in the ensemble
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Optional
	Top *int32 `json:"top,omitempty" protobuf:"varint,4,opt,name=top"`
}

// BaselineSpec specifies the configuration to produce baseline models
type BaselineSpec struct {
	// Indicates if baseline models will be produced. Enabling baseline will create a model for each
	// algorithm in the parent Study's search space with default hyper-parameters
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Baselines contains the collection of algorithms to create models for
	// +kubebuilder:validation:Optional
	Baselines []catalog.ClassicEstimatorName `json:"baselines,omitempty" protobuf:"bytes,2,rep,name=baselines"`
	// Indicates if models will be created for all algorithms, ignoring the Baselines field
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	All *bool `json:"all,omitempty" protobuf:"varint,3,opt,name=all"`
}

// AlgorithmSearchSpaceSpec defines the algorithms available to models produced by a Study
type AlgorithmSearchSpaceSpec struct {
	// AllowList contains the collection of algorithms available to the parent Study.
	// If AllowList is empty, all algorithms will be available for training
	// +kubebuilder:validation:Optional
	AllowList []catalog.ClassicEstimatorName `json:"allowlist,omitempty" protobuf:"bytes,1,rep,name=allowlist"`
}

// StudyScheduleSpec specifies the parameters for a Study to be executed at a certain time
type StudyScheduleSpec struct {
	// Indicates if the schedule is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The time at which the Study will begin execution
	// +kubebuilder:validation:Optional
	StartAt *metav1.Time `json:"startAt,omitempty" protobuf:"bytes,2,opt,name=startAt"`
}

type PrunerSpec struct {
	// The type of pruner to use during model search
	// +kubebuilder:default:=median
	// +kubebuilder:validation:Optional
	Type *PrunerName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// Pruning is disabled until the given number of trials finish in the same study.
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	StartupTrials *int32 `json:"startupTrials,omitempty" protobuf:"varint,2,opt,name=startupTrials"`
	//  Pruning is disabled until the trial exceeds the given number of step
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	WarmupTrials *int32 `json:"warmupTrials,omitempty" protobuf:"varint,3,opt,name=warmupTrials"`
	// Minimum number of reported trials.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MinimumTrials *int32 `json:"minTrials,omitempty" protobuf:"varint,4,opt,name=minTrials"`
	// Interval in number of steps between the pruning checks
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	IntervalSteps *int32 `json:"intervalTrials,omitempty" protobuf:"varint,5,opt,name=intervalTrials"`
	// Keep specific percent of trials. Used only with percentile pruner
	// +kubebuilder:default:=25
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Optional
	Percentile *int32 `json:"percentile,omitempty" protobuf:"varint,6,opt,name=percentile"`
	// A minimum value which determines whether pruner prunes or not. Used only for threshold pruner
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Lower *int32 `json:"lower,omitempty" protobuf:"varint,7,opt,name=lower"`
	// A maximum value which determines whether pruner prunes or not. Used only for threshold pruner
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Upper *int32 `json:"upper,omitempty" protobuf:"varint,8,opt,name=upper"`
	// SHOptions is the desired options for successive halving search.
	// All other models are saved into an archive.
	// +kubebuilder:validation:Optional
	SHOptions SuccessiveHalvingOptions `json:"shOptions,omitempty" protobuf:"bytes,9,opt,name=shOptions"`
}

// StudyForecastSpec specifies the configuration to train a forecasting model
type StudyForecastSpec struct {
	// Template to use for each model
	// +kubebuilder:validation:Optional
	Template ForecastSpec `json:"template,omitempty" protobuf:"bytes,1,opt,name=template"`
	// The group hierarchy, in the case of a multi-level forecast
	// +kubebuilder:validation:Optional
	Hierarchy Hierarchy `json:"hierarchy,omitempty" protobuf:"bytes,2,opt,name=hierarchy"`
}

// FeatureEngineeringSearchSpec specifies the configuration to produce
// the best-performing feature engineering pipeline for a given dataset
type FeatureEngineeringSearchSpec struct {
	// Indicates if the feature engineering search will be performed
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The method to use when handling an imbalanced dataset
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	ImbalanceHandler *catalog.ImbalanceHandling `json:"imbalanceHandler,omitempty" protobuf:"bytes,2,opt,name=imbalancedHandler"`
	// The algorithm to use when evaluating models with different feature engineering pipelines
	// +kubebuilder:validation:Optional
	Estimator *catalog.ClassicEstimatorName `json:"estimator,omitempty" protobuf:"bytes,3,opt,name=estimator"`
	// The number of models to sample, after which the feature engineering with the highest
	// score will be used with Model resources produced by the primary model search of the parent Study
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,4,opt,name=maxModels"`
	// The deadline, in seconds, for models produced by the search to be trained
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	MaxTimeSec *int32 `json:"maxTime,omitempty" protobuf:"varint,5,opt,name=maxTime"`
	// The desired number of trainers that will train candidate models in parallel. The number
	// of trainers is restricted based on the allowance provided by the active License
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MaxTrainers *int32 `json:"maxTrainers,omitempty" protobuf:"varint,6,opt,name=maxTrainers"`
	// The number percentage (0 through 100) of the dataset to train models with
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	SamplePct *int32 `json:"samplePct,omitempty" protobuf:"varint,7,opt,name=samplePct"`
	// Indicates if models produced by the feature engineering search should be
	// automatically removed at the conclusion of the search
	// +kubebuilder:default:=true
	AutoRemove *bool `json:"autoRemove,omitempty" protobuf:"varint,8,opt,name=autoRemove"`
	// If true, if a feature engineering pipeline was previously produced for
	// the same dataset it will be used as a starting point for the search
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reuse *bool `json:"reuse,omitempty" protobuf:"varint,9,opt,name=reuse"`
	// Specification for feature selection.
	// successful study.
	// +kubebuilder:validation:Optional
	FeatureSelectionTemplate FeatureSelectionSpec `json:"featureSelectionTemplate,omitempty" protobuf:"bytes,10,opt,name=featureSelectionTemplate"`
}

// StudySpec defines the desired state of a Study and the parameters for a model search
type StudySpec struct {
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName" protobuf:"bytes,1,opt,name=versionName"`
	// The user-provided description of the Study
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The reference to the Lab under which the Model resources created by the Study will be trained.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,3,opt,name=labRef"`
	// The name of the Dataset resource which will be split into training, testing, and
	// validation datasets to be used in training
	// +kubebuilder:validation:Required
	// +required
	DatasetName *string `json:"datasetName" protobuf:"bytes,4,opt,name=datasetName"`
	// The machine learning task type of the Study (i.e. regression, classification)
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task" protobuf:"bytes,5,opt,name=task"`
	// FeatureEngineeringSearch specifies the parameters to perform a feature engineering search
	// +kubebuilder:validation:Optional
	FeatureEngineeringSearch FeatureEngineeringSearchSpec `json:"feSearch,omitempty" protobuf:"bytes,6,opt,name=feSearch"`
	// Baseline specifies the parameters to generate baseline (default hyper-parameters) models
	// +kubebuilder:validation:Optional
	Baseline BaselineSpec `json:"baseline,omitempty" protobuf:"bytes,7,opt,name=baseline"`
	// Search specifies the configuration to perform the model search for the best algorithm and hyper-parameters
	// +kubebuilder:validation:Optional
	Search SearchSpec `json:"search,omitempty" protobuf:"bytes,8,opt,name=search"`
	// Ensembles specifies to parameters to generate ensemble models
	// +kubebuilder:validation:Optional
	Ensembles EnsemblesSpec `json:"ensembles,omitempty" protobuf:"bytes,9,opt,name=ensembles"`
	// TrainingTemplate specifies the configuration to train and evaluate models
	// +kubebuilder:validation:Optional
	TrainingTemplate TrainingSpec `json:"trainingTemplate,omitempty" protobuf:"bytes,10,opt,name=trainingTemplate"`
	// ForecastSpec specifies the parameters required when generating a forecasting model
	// +kubebuilder:validation:Optional
	ForecastSpec StudyForecastSpec `json:"forecast,omitempty" protobuf:"bytes,11,opt,name=forecast"`
	// Schedule specifies the configuration to execute the Study at a later date
	// +kubebuilder:validation:Optional
	Schedule StudyScheduleSpec `json:"schedule,omitempty" protobuf:"bytes,12,opt,name=schedule"`
	// Interpretability specifies the parameters to create interpretability visualizations for the final model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,13,opt,name=interpretability"`
	// Aborted indicates that the execution of the Study and associated Models should be permanently stopped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,14,opt,name=aborted"`
	// Reported indicates that a report will be generated for the Study
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,15,opt,name=reported"`
	// Paused indicates that the execution of new workloads associated with the Study should be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,16,opt,name=paused"`
	// Profiled indicates that the Study will be profiled after the conclusion of it's model search
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"varint,17,opt,name=profiled"`
	// ModelPublished indicates that a Docker image will be created containing the best model produced by the Study
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelPublished *bool `json:"modelPublished,omitempty" protobuf:"varint,18,opt,name=modelPublished"`
	// ModelImagePushed indicates that if a Docker image of the best model will be pushed to a Docker image registry
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelImagePushed *bool `json:"modelImagePushed,omitempty" protobuf:"varint,19,opt,name=modelImagePushed"`
	// ModelExplained indicates if interpretability diagrams, as specified
	// by the Interpretability field, will be produced for the final model
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ModelExplained *bool `json:"modelExplained,omitempty" protobuf:"varint,21,opt,name=modelExplained"`
	// Fast indicates if Models associated with the Study should skip profiling, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,22,opt,name=fast"`
	// The data location where Study artifacts (metadata, reports, and model artifacts) generated by the Study will be stored
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,23,opt,name=location"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,24,opt,name=owner"`
	// CompilerSpec specifies the configuration to a compile the best model to a binary (currently unimplemented)
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,26,opt,name=compilation"`
	// Indicates if the Study is a template, in which case it will not be executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Template *bool `json:"template,omitempty" protobuf:"varint,27,opt,name=template"`
	// Indicates if the Study is flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,28,opt,name=flagged"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,29,opt,name=notification"`
	// ModelImage specifies the configuration to upload Docker images of models to an image registry
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,30,opt,name=modelImage"`
	// GarbageCollectionSpec specifies the configuration to automatically clean-up unused models
	//+kubebuilder:validation:Optional
	GC GarbageCollectionSpec `json:"gc,omitempty" protobuf:"bytes,31,opt,name=gc"`
	// The time-to-live, in seconds, for Model resources produced by the Study
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,32,opt,name=ttl"`
	// ModelVersion specifies the version assigned to all the Model resources produced by the Study
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"varint,33,opt,name=modelVersion"`
	// Overall study timeout. The study will be aborted if we reached this timeout.
	// Default : 4H
	// +kubebuilder:default:= 14400
	// +kubebuilder:validation:Optional
	TimeoutInSecs *int32 `json:"timeoutInSecs,omitempty" protobuf:"bytes,34,opt,name=timeoutInSecs"`
}

// StudyStatus defines the observed state of a Study
type StudyStatus struct {
	// Total models created for the study
	// +kubebuilder:validation:Optional
	Models int32 `json:"models,omitempty" protobuf:"varint,1,opt,name=models"`
	// StartTime represents the time at which the execution of the Study started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// EndTime represents the time at which the Study was marked as completed, failed, or aborted
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// The name of the Model resource which was determined to be the highest-performing
	// +kubebuilder:validation:Optional
	BestModel string `json:"bestModel,omitempty" protobuf:"bytes,4,opt,name=bestModel"`
	// The score of the Model resource which was determined to be the highest-performing
	// +kubebuilder:validation:Optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,5,opt,name=bestModelScore"`
	// The URI of the raw profile data produced by the Study
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,6,opt,name=profileUri"`
	// The name of the Report resource produced by the Study
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,7,opt,name=reportName"`
	// The phase of the Study
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase StudyPhase `json:"phase" protobuf:"bytes,8,opt,name=phase"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,9,opt,name=observedGeneration"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,10,opt,name=trainDataset"`
	// TestDatasetLocation specifies the location of the testing dataset
	// +kubebuilder:validation:Optional
	TestDatasetLocation data.DataLocation `json:"testDataset,omitempty" protobuf:"bytes,12,opt,name=testDataset"`
	// ValidationDataset specifies the location of the validation dataset
	// +kubebuilder:validation:Optional
	ValidationDataset data.DataLocation `json:"validationDataset,omitempty" protobuf:"bytes,13,opt,name=validationDataset"`
	// The Kubernetes-internal ID of the last Model resource generated by the Study
	LastModelID *int64 `json:"lastModelID,omitempty" protobuf:"varint,14,opt,name=lastModelID"`
	// In the case of failure, the Study resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,15,opt,name=failureReason"`
	// In the case of failure, the Study resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,16,opt,name=failureMessage"`
	// The number of rows in the training dataset
	// +kubebuilder:validation:Optional
	TrainingRows int32 `json:"trainingRows" protobuf:"varint,17,opt,name=trainingRows"`
	// The number of rows in the testing dataset
	// +kubebuilder:validation:Optional
	TestingRows int32 `json:"testingRows" protobuf:"varint,18,opt,name=testingRows"`
	// The number of rows in the validation dataset
	// +kubebuilder:validation:Optional
	ValidationRows int32 `json:"validationRows" protobuf:"varint,19,opt,name=validationRows"`
	// The progress percentage of the Study, which is derived from the Study's current phase
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress" protobuf:"varint,20,opt,name=progress"`
	// Sha 256 of the data sig
	// +kubebuilder:validation:Optional
	// TrainingDataHash specifies the hashes for datasets used by the Study
	//+kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,22,opt,name=trainingDataHash"`
	// The type of trigger which started the Study
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,23,opt,name=triggeredBy"`
	// Logs specifies the location of logs produced by workloads associated with the Study
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,24,opt,name=logs"`
	// FeatureEngineeringStatus contains the status of the feature engineering phase
	//+kubebuilder:validation:Optional
	FeatureEngineeringStatus StudyPhaseStatus `json:"featureEngineering,,omitempty" protobuf:"bytes,25,opt,name=featureEngineering"`
	// BaselineStatus contains the status of the baseline phase
	//+kubebuilder:validation:Optional
	BaselineStatus StudyPhaseStatus `json:"baseline,omitempty" protobuf:"bytes,26,opt,name=baseline"`
	// SearchStatus contains the status of the model search phase
	//+kubebuilder:validation:Optional
	SearchStatus StudyPhaseStatus `json:"search,omitempty" protobuf:"bytes,27,opt,name=search"`
	// EnsembleStatus contains the status of the ensemble phase
	//+kubebuilder:validation:Optional
	EnsembleStatus StudyPhaseStatus `json:"ensemble,omitempty" protobuf:"bytes,28,opt,name=ensemble"`
	// TestStatus contains the status of the testing phase
	//+kubebuilder:validation:Optional
	TestStatus StudyPhaseStatus `json:"test,omitempty" protobuf:"bytes,29,opt,name=test"`
	// ExplainStatus contains the status of the explaining phase
	//+kubebuilder:validation:Optional
	ExplainStatus StudyPhaseStatus `json:"explain,omitempty" protobuf:"bytes,30,opt,name=explain"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,31,opt,name=lastUpdated"`
	// BestFE specifies the best feature engineering pipeline produced by the Study
	//+kubebuilder:validation:Optional
	BestFE *FeatureEngineeringSpec `json:"bestFE,omitempty" protobuf:"bytes,32,opt,name=bestFE"`
	// GC specifies the status of garbage collection relevant to the Study
	GC GarbageCollectionStatus `json:"gc,omitempty" protobuf:"bytes,33,opt,name=gc"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []StudyCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,34,rep,name=conditions"`
}

// ModelResult contains the records of a single garbage-collected model
type ModelResult struct {
	// The name of the model
	// +kubebuilder:validation:Optional
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// The type of estimator of the model
	// +kubebuilder:validation:Optional
	Alg string `json:"alg,omitempty" protobuf:"bytes,2,opt,name=alg"`
	// The objective score of the model
	// +kubebuilder:validation:Optional
	Score float64 `json:"score,omitempty" protobuf:"bytes,3,opt,name=score"`
	// Indicates if the model experience an error whilst training
	// +kubebuilder:validation:Optional
	Error bool `json:"error,omitempty" protobuf:"varint,4,opt,name=error"`
	// The optimizer trial ID of the model
	// +kubebuilder:validation:Optional
	TrialID int32 `json:"trialID,omitempty" protobuf:"varint,5,opt,name=trialID"`
}

// StudyList contains a list of Studies
// +kubebuilder:object:root=true
type StudyList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Study `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type Level struct {
	// The name of the level - the column name
	Name *string `json:"string,omitempty" protobuf:"bytes,1,opt,name=string"`
	// The number of time periods to
	Horizon *int32 `json:"horizon,omitempty" protobuf:"varint,2,opt,name=horizon"`
	// The freq of the level
	Freq *catalog.Freq `json:"freq,omitempty" protobuf:"bytes,3,opt,name=freq"`
	// The aggregate function used to roll up the lower level
	Aggregate *catalog.Aggregate `json:"aggregate,omitempty" protobuf:"bytes,4,opt,name=aggregate"`
	// The distinct values of the column for this level
	Values []string `json:"distinc,omitempty" protobuf:"bytes,5,rep,name=distinc"`
}

type Hierarchy struct {
	// The columns in the data frame that belongs to the hierarchy. By default, all the item level column is the last one. The default aggregate function is sum.
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// The group level columns. For each group level column specify the horizon and the aggregate function
	GroupLevels []Level `json:"groupLevels,omitempty" protobuf:"bytes,2,rep,name=groupLevels"`
	// Item level column.
	ItemLevel *Level `json:"itemLevel,omitempty" protobuf:"bytes,3,opt,name=itemLevel"`
	// Optional notifier to use when the forecast is complete.
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,4,opt,name=notifierName"`
}

// ForecastObj holds the definition of a single forecast
type ForecastObj struct {
	Key        string `json:"key,omitempty" protobuf:"bytes,1,opt,name=key"`
	LevelIndex int32  `json:"levelIndex,omitempty" protobuf:"varint,2,opt,name=levelIndex"`
}

// ModelImageSpec specifies the destination of Docker images produced by a Study
type ModelImageSpec struct {
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	Exist *bool `json:"exist,omitempty" protobuf:"varint,1,opt,name=exist"`
	// The full name of the image to upload to
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ImageName *string `json:"imageName,omitempty" protobuf:"bytes,2,opt,name=imageName"`
	// The name of the Connection resource to an external Docker image registry
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	RegistryConnection *string `json:"registryConnectionName,omitempty" protobuf:"bytes,3,opt,name=registryConnectionName"`
}

// StudyPhaseStatus contains the statistics for a single phase of a Study
type StudyPhaseStatus struct {
	// The time at which the phase started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// The time at which the phase concluded
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// The number of models pending training
	// +kubebuilder:validation:Optional
	Waiting int32 `json:"waiting,omitempty" protobuf:"varint,3,opt,name=waiting"`
	// The number of models currently being trained
	// +kubebuilder:validation:Optional
	Running int32 `json:"running,omitempty" protobuf:"varint,4,opt,name=running"`
	// The number of models that experienced an error whilst training
	// +kubebuilder:validation:Optional
	Failed int32 `json:"failed,omitempty" protobuf:"varint,5,opt,name=failed"`
	// The number of models that have been successfully trained
	// +kubebuilder:validation:Optional
	Completed int32 `json:"completed,omitempty" protobuf:"varint,6,opt,name=completed"`
}

type SegmentSpec struct {
	// The name of the column
	// +kubebuilder:validation:Required
	// +required
	ColumnName *string `json:"columnName,omitempty" protobuf:"bytes,1,opt,name=columnName"`
	// The segment operation
	// +kubebuilder:validation:Required
	// +required
	OP *catalog.Op `json:"op,omitempty" protobuf:"bytes,2,opt,name=op"`
	// The value operation
	// +kubebuilder:validation:Required
	// +required
	Value *string `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
}

// GarbageCollectionSpec specifies the configuration to garbage-collect unused Model resources
type GarbageCollectionSpec struct {
	// Indicates if all models of the Study, excluding the highest-performing model, will be archived
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=true
	CollectAtStudyEnd *bool `json:"collectAtStudyEnd,omitempty" protobuf:"varint,1,opt,name=collectAtStudyEnd"`
	// Indicates if multiple models with the same algorithm are produced by the Study, the
	// model with the lowest score will be garbage-collected
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	KeepOnlyBestModelPerAlgorithm *bool `json:"keepOnlyBestModelPerAlgorithm,omitempty" protobuf:"varint,2,opt,name=keepOnlyBestModelPerAlgorithm"`
}

// GarbageCollectionStatus contains the records for garbage-collected models
type GarbageCollectionStatus struct {
	// The number of models that were collected, equal to len(Models)
	// +kubebuilder:validation:Optional
	Collected int32 `json:"collected,omitempty" protobuf:"varint,1,opt,name=collected"`
	// The collection of models that were archived
	// +kubebuilder:validation:Optional
	Models []ModelResult `json:"models,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,opt,name=models"`
}
