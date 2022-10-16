package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelClassPhase is the current phase of a ModelClass
type ModelClassPhase string

const (
	ModelClassPhaseModelPending ModelClassPhase = "Pending"
	ModelClassPhaseSplitting    ModelClassPhase = "Ready"
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

// +kubebuilder:validation:Enum="patient-pruner";"median-pruner";"percentile-pruner";"successive-halving-pruner";"hyperband-pruner";"threshold-pruner"
type PrunerName string

const (
	NonePruner              PrunerName = "none"
	PatientPruner           PrunerName = "patient-pruner"
	MedianPruner            PrunerName = "median-pruner"
	PercentilePruner        PrunerName = "percentile-pruner"
	SuccessiveHalvingPruner PrunerName = "successive-halving-pruner"
	HyperbandPruner         PrunerName = "hyperband-pruner"
	ThresholdPruner         PrunerName = "threshold-pruner"
)

// ModelClassConditionType is the condition of a ModelClass
type ModelClassConditionType string

/// ModelClass Condition
const (
	// ModelClassInitialized states that the resources needed for training are allocated and ready
	ModelClassInitialized ModelClassConditionType = "Initialized"
	// ModelClassSplit states that the training dataset has been split and is ready for use
	ModelClassSplit ModelClassConditionType = "ModelClassSplit"
	// ModelClass Transformed states that the training dataset has been split and is ready for use
	ModelClassTransformed ModelClassConditionType = "ModelClassTransformed"
	// ModelClassFeatureEngineered states that the search for the best feature engineering pipeline is complete
	ModelClassFeatureEngineered ModelClassConditionType = "ModelClassFeaturesEngineered"
	// ModelClassBaselined states that baseline models for each algorithm have been trained
	ModelClassBaselined ModelClassConditionType = "ModelClassBaselined"
	// ModelClassSearched states that the primary model search for algorithm and hyper-parameters is complete
	ModelClassSearched ModelClassConditionType = "ModelClassSearched"
	// ModelClassEnsembleCreated states that ensemble models were trained
	ModelClassEnsembleCreated ModelClassConditionType = "ModelsEnsembleCreated"
	// ModelClassTested states that the best model has been tested against training and testing datasets
	ModelClassTested ModelClassConditionType = "ModelTested"
	// ModelClassTested states that the best model has been tested against training and testing datasets
	ModelClassTuned ModelClassConditionType = "ModelTuned"

	// ModelClassReported states that a Report resource has been generated for the ModelClass
	ModelClassReported  ModelClassConditionType = "Reported"
	ModelClassProfiled  ModelClassConditionType = "Profiled"
	ModelClassExplained ModelClassConditionType = "Explained"
	ModelClassAborted   ModelClassConditionType = "Aborted"
	// ModelClassPaused states that the execution of the ModelClass is paused
	ModelClassPaused ModelClassConditionType = "Paused"
	// ModelClassSaved states that the ModelClass has been archived in a database
	ModelClassSaved ModelClassConditionType = "Saved"
	// ModelClassCompleted states that the ModelClass has completed execution
	ModelClassCompleted   ModelClassConditionType = "Completed"
	ModelClassPartitioned ModelClassConditionType = "Partitioned"
	ModelClassArchived    ModelClassConditionType = "Archived"
	ModelClassUnitTested  ModelClassConditionType = "UnitTested"
)

// ModelClassCondition describes the state of a ModelClass at a certain point
type ModelClassCondition struct {
	// Type of ModelClass condition
	// +kubebuilder:validation:Optional
	Type ModelClassConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelClassConditionType"`
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

// ModelClass represents an automatic search for the best machine learning model for a given dataset
// +kubebuilder:subresource:status
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName",priority=1
// +kubebuilder:printcolumn:name="Entity",type="string",JSONPath=".spec.datasetName"
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
// +kubebuilder:resource:path=studies,singular=ModelClass,shortName=sd,categories={training,modela}
type ModelClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelClassSpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelClassStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// SearchSpec specifies the configuration for a distributed model search
type SearchSpec struct {
	// The hyper-parameter optimization search method
	// +kubebuilder:default:=tpe
	// +kubebuilder:validation:Optional
	Sampler *SamplerName `json:"sampler,omitempty" protobuf:"bytes,1,opt,name=sampler"`
	// Pruner specifies the configuration to run a model search using a pruning algorithm. Using a pruning
	// algorithm allows you to train a large number of candidate models with a subset of the dataset
	// +kubebuilder:validation:Optional
	Pruner PrunerSpec `json:"pruner,omitempty" protobuf:"bytes,2,opt,name=pruner"`
	// The maximum cost that can be incurred before stopping the model search (applicable for deep learning models)
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	MaxCost *int32 `json:"maxCost,omitempty" protobuf:"varint,3,opt,name=maxCost"`
	// The maximum number of minutes, that the model search can run for
	// +kubebuilder:default:=60
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
	// The minimum best score needed to finish the search. The system will finish the search when the minimum is reached.
	// Note that this number can be negative for a regression.
	// +kubebuilder:default:=9999999999
	// +kubebuilder:validation:Optional
	MinBestScore *float64 `json:"minBestScore,omitempty" protobuf:"bytes,6,opt,name=minBestScore"`
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
	// +kubebuilder:validation:Optional
	EarlyStop EarlyStopSpec `json:"earlyStop,omitempty" protobuf:"bytes,12,opt,name=earlyStop"`
	// The objective metric that will be measured against all models to evaluate their performance
	// +kubebuilder:validation:Optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,14,opt,name=objective"`
	// The second objective metric that will be measured and evaluated in tandem with the primary objective.
	// The model search optimizer will attempt to optimize both metrics
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Objective2 *catalog.Metric `json:"objective2,omitempty" protobuf:"bytes,15,opt,name=objective2"`
	// Tune best model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Tune *bool `json:"tune,omitempty" protobuf:"varint,16,opt,name=tune"`
}

// EarlyStopSpec specifies the configuration to automatically abort a model search
// if further improvements in model performance cannot be produced
type EarlyStopSpec struct {
	// Indicates if early stopping is enabled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The number of models to train before model objective metrics will begin to be checked for early stopping
	// +kubebuilder:default:=20
	// +kubebuilder:validation:Optional
	Initial *int32 `json:"initial,omitempty" protobuf:"varint,2,opt,name=initial"`
	// The number of models with no improvement in score that are required to abort the model search
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	MinModelsWithNoProgress *int32 `json:"minModelsWithNoProgress,omitempty" protobuf:"varint,3,opt,name=minModelsWithNoProgress"`
}

// The spec for generating a density model for this ModelClass.
type DriftModelSpec struct {
	// Indicates if density models should be created.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The density model alg.
	// +kubebuilder:default:="isolation-forest"
	// +kubebuilder:validation:Optional
	OutlierAlgorithm catalog.OutlierAlgorithmName `json:"outlierAlgorithm,omitempty" protobuf:"bytes,2,opt,name=outlierAlgorithm"`
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
	// algorithm in the parent ModelClass's search space with default hyper-parameters
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Baselines contains the collection of algorithms that models will be created with
	// +kubebuilder:validation:Optional
	Baselines []catalog.ClassicEstimatorName `json:"baselines,omitempty" protobuf:"bytes,2,rep,name=baselines"`
	// Indicates if models will be created for every algorithm
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	All *bool `json:"all,omitempty" protobuf:"varint,3,opt,name=all"`
}

// AlgorithmSearchSpaceSpec defines the algorithms available to models produced by a ModelClass
type AlgorithmSearchSpaceSpec struct {
	// AllowList contains the collection of algorithms available to the ModelClass specifying the AlgorithmSearchSpaceSpec.
	// If empty, all algorithms will be available for training
	// +kubebuilder:validation:Optional
	AllowList []catalog.ClassicEstimatorName `json:"allowlist,omitempty" protobuf:"bytes,1,rep,name=allowlist"`
}

// ModelClassScheduleSpec specifies the parameters for a ModelClass to be executed at a certain time
type StudyScheduleSpec struct {
	// Indicates if the schedule is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The time at which the ModelClass will begin execution
	// +kubebuilder:validation:Optional
	StartAt *metav1.Time `json:"startAt,omitempty" protobuf:"bytes,2,opt,name=startAt"`
}

type PrunerSpec struct {
	// The type of pruner to use during model search
	// +kubebuilder:default:=median-pruner
	// +kubebuilder:validation:Optional
	Type *PrunerName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Median *MedianPrunerOptions `json:"median,omitempty" protobuf:"bytes,2,opt,name=median"`
	// +kubebuilder:validation:Optional
	Percentile *PercentilePrunerOptions `json:"percentile,omitempty" protobuf:"bytes,3,opt,name=percentile"`
	// +kubebuilder:validation:Optional
	Successive *SuccessiveHalvingOptions `json:"successiveHalving,omitempty" protobuf:"bytes,4,opt,name=successiveHalving"`
	// +kubebuilder:validation:Optional
	Hyperband *HyperbandOptions `json:"hyperband,omitempty" protobuf:"bytes,5,opt,name=hyperband"`
	// +kubebuilder:validation:Optional
	Threshold *ThresholdPrunerOptions `json:"threshold,omitempty" protobuf:"bytes,6,opt,name=threshold"`
}

type MedianPrunerOptions struct {
	// Pruning is disabled until the given number of trials finish in the same ModelClass.
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	StartupTrials *int32 `json:"startupTrials,omitempty" protobuf:"varint,1,opt,name=startupTrials"`
	//  Pruning is disabled until the trial exceeds the given number of step
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	WarmupSteps *int32 `json:"warmupSteps,omitempty" protobuf:"varint,2,opt,name=warmupSteps"`
	// Interval in number of steps between the pruning checks
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	IntervalSteps *int32 `json:"intervalSteps,omitempty" protobuf:"varint,3,opt,name=intervalSteps"`
	// Minimum number of reported trials.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MinTrials *int32 `json:"minTrials,omitempty" protobuf:"varint,4,opt,name=minTrials"`
}

type PercentilePrunerOptions struct {
	// Percentile which must be between 0 and 100 inclusive
	// +kubebuilder:default:=25
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Optional
	Percentile *int32 `json:"percentile,omitempty" protobuf:"varint,1,opt,name=percentile"`
	// Pruning is disabled until the given number of trials finish in the same ModelClass.
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	StartupTrials *int32 `json:"startupTrials,omitempty" protobuf:"varint,2,opt,name=startupTrials"`
	//  Pruning is disabled until the trial exceeds the given number of step
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	WarmupSteps *int32 `json:"warmupSteps,omitempty" protobuf:"varint,3,opt,name=warmupSteps"`
	// Interval in number of steps between the pruning checks
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	IntervalSteps *int32 `json:"intervalTrials,omitempty" protobuf:"varint,4,opt,name=intervalTrials"`
	// Minimum number of reported trials.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MinTrials *int32 `json:"minTrials,omitempty" protobuf:"varint,5,opt,name=minTrials"`
}

type SuccessiveHalvingOptions struct {
	// Minimum number of reported trials.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MinResources *int32 `json:"minResources,omitempty" protobuf:"varint,1,opt,name=minResources"`
	// A parameter for specifying reduction factor of promotable trials
	// +kubebuilder:default:=4
	// +kubebuilder:validation:Optional
	ReductionFactor *int32 `json:"reductionFactor,omitempty" protobuf:"varint,2,opt,name=reductionFactor"`
	// A parameter for specifying the minimum early-stopping rate
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MinEarlyStoppingRate *int32 `json:"minEarlyStoppingRate,omitempty" protobuf:"varint,3,opt,name=minEarlyStoppingRate"`
	// Minimum number of trials that need to complete a rung before any trial is considered for promotion into the next rung.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	BootstrapCount *int32 `json:"bootstrapCount,omitempty" protobuf:"varint,4,opt,name=bootstrapCount"`
}

type HyperbandOptions struct {
	// A parameter for specifying the minimum resource allocated to a trial noted as 𝑟 in the paper
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MinResources *int32 `json:"minResources,omitempty" protobuf:"varint,1,opt,name=minResources"`
	// A parameter for specifying the maximum resource allocated to a trial
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MaxResources *int32 `json:"maxResources,omitempty" protobuf:"varint,2,opt,name=maxResources"`
	// A parameter for specifying reduction factor of promotable trials
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Optional
	ReductionFactor *int32 `json:"reductionFactor,omitempty" protobuf:"varint,3,opt,name=reductionFactor"`
	// Parameter specifying the number of trials required in a rung before any trial can be promoted
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	BootstrapCount *int32 `json:"bootstrapCount,omitempty" protobuf:"varint,4,opt,name=bootstrapCount"`
}

type ThresholdPrunerOptions struct {
	// A minimum value which determines whether pruner prunes or not. If an intermediate value is smaller than lower, it prunes.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Lower *float64 `json:"lower,omitempty" protobuf:"bytes,1,opt,name=lower"`
	// A maximum value which determines whether pruner prunes or not. If an intermediate value is larger than upper, it prunes.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Upper *float64 `json:"upper,omitempty" protobuf:"bytes,2,opt,name=upper"`
	//  Pruning is disabled until the trial exceeds the given number of step
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	WarmupSteps *int32 `json:"warmupSteps,omitempty" protobuf:"varint,3,opt,name=warmupSteps"`
	// Interval in number of steps between the pruning checks
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	IntervalSteps *int32 `json:"intervalSteps,omitempty" protobuf:"varint,4,opt,name=intervalSteps"`
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
	// score will be used with Model resources produced by the primary model search of the parent ModelClass
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
	// successful ModelClass.
	// +kubebuilder:validation:Optional
	FeatureSelectionTemplate FeatureSelectionSpec `json:"featureSelectionTemplate,omitempty" protobuf:"bytes,10,opt,name=featureSelectionTemplate"`
	// The number of new models produced by the fe search which, if there is no improvement
	// in score, the model search will conclude
	// +kubebuilder:validation:Optional
	EarlyStop EarlyStopSpec `json:"earlyStop,omitempty" protobuf:"bytes,12,opt,name=earlyStop"`
}

// ModelClassSpec defines the desired state of a ModelClass and the parameters for a model search
type ModelClassSpec struct {
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName" protobuf:"bytes,1,opt,name=versionName"`
	// The user-provided description of the ModelClass
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The reference to the Lab under which the Model resources created by the ModelClass will be trained.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,3,opt,name=labRef"`
	// The name of the Entity resource that will be used to train models with.
	// The dataset will be split into individual training, testing, and validation datasets
	// +kubebuilder:validation:Required
	// +required
	DatasetName *string `json:"datasetName" protobuf:"bytes,4,opt,name=datasetName"`
	// The machine learning task type (i.e. regression, classification)
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task" protobuf:"bytes,5,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask" protobuf:"bytes,6,opt,name=subtask"`
	// FeatureEngineeringSearch specifies the parameters to perform a feature engineering search
	// +kubebuilder:validation:Optional
	FeatureEngineeringSearch FeatureEngineeringSearchSpec `json:"feSearch,omitempty" protobuf:"bytes,7,opt,name=feSearch"`
	// Set the imbalance dataset handling.
	// +kubebuilder:validation:Optional
	ImbalanceHandler ImbalanceHandlingSpec `json:"imbalanceHandler,omitempty" protobuf:"bytes,8,opt,name=imbalanceHandler"`
	// Baseline specifies the parameters to generate baseline (default hyper-parameters) models
	// +kubebuilder:validation:Optional
	Baseline BaselineSpec `json:"baseline,omitempty" protobuf:"bytes,9,opt,name=baseline"`
	// Search specifies the configuration to perform the model search for the best algorithm and hyper-parameters
	// +kubebuilder:validation:Optional
	Search SearchSpec `json:"search,omitempty" protobuf:"bytes,10,opt,name=search"`
	// Ensembles specifies to parameters to generate ensemble models
	// +kubebuilder:validation:Optional
	Ensembles EnsemblesSpec `json:"ensembles,omitempty" protobuf:"bytes,11,opt,name=ensembles"`
	// TrainingTemplate specifies the configuration to train and evaluate models
	// +kubebuilder:validation:Optional
	TrainingTemplate TrainingSpec `json:"trainingTemplate,omitempty" protobuf:"bytes,12,opt,name=trainingTemplate"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	ServingTemplate ServingSpec `json:"servingTemplate,omitempty" protobuf:"bytes,13,opt,name=servingTemplate"`
	// ForecastSpec specifies the parameters required when generating a forecasting model
	// +kubebuilder:validation:Optional
	FctTemplate ForecasterSpec `json:"fctTemplate,omitempty" protobuf:"bytes,14,opt,name=fctTemplate"`
	// Schedule specifies the configuration to execute the ModelClass at a later date
	// +kubebuilder:validation:Optional
	Schedule StudyScheduleSpec `json:"schedule,omitempty" protobuf:"bytes,15,opt,name=schedule"`
	// Interpretability specifies the parameters to create interpretability visualizations for the final model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,16,opt,name=interpretability"`
	// +kubebuilder:validation:Optional
	DriftDetector DriftModelSpec `json:"driftDetection,omitempty" protobuf:"bytes,17,opt,name=driftDetection"`
	// The data location where ModelClass artifacts (metadata, reports, and model artifacts) generated by the ModelClass will be stored
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,26,opt,name=location"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,27,opt,name=owner"`
	// CompilerSpec specifies the configuration to compile the best-selected model to a binary (currently unimplemented)
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,28,opt,name=compilation"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,31,opt,name=notification"`
	// ModelImage specifies the configuration to upload Docker images of models to an image registry
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,32,opt,name=modelImage"`
	// GarbageCollectionSpec specifies the configuration to automatically clean-up unused models
	//+kubebuilder:validation:Optional
	GC GarbageCollectionSpec `json:"gc,omitempty" protobuf:"bytes,33,opt,name=gc"`
	// The time-to-live, in seconds, for Model resources produced by the ModelClass
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,34,opt,name=ttl"`
	// A template for models unit tests
	// +kubebuilder:validation:Optional
	UnitTestsTemplate catalog.TestSuite `json:"unitTestsTemplate,omitempty" protobuf:"bytes,38,opt,name=unitTestsTemplate"`
	// In case of a group by, those are the group locations
	// +kubebuilder:validation:Optional
	GroupLocations GroupSplitLocationsSpec `json:"groupLocations,omitempty" protobuf:"bytes,39,opt,name=groupLocations"`
}

// ModelClassStatus defines the observed state of a ModelClass
type ModelClassStatus struct {
	// Total models created for the ModelClass
	// +kubebuilder:validation:Optional
	Models int32 `json:"models,omitempty" protobuf:"varint,1,opt,name=models"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,10,opt,name=observedGeneration"`
	// The Kubernetes-internal ID of the last Model resource generated by the ModelClass
	LastModelID *int64 `json:"lastModelID,omitempty" protobuf:"varint,14,opt,name=lastModelID"`
	// In the case of failure, the ModelClass resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,15,opt,name=failureReason"`
	// In the case of failure, the ModelClass resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,16,opt,name=failureMessage"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,32,opt,name=lastUpdated"`
	// BestFE specifies the best feature engineering pipeline produced by the ModelClass
	//+kubebuilder:validation:Optional
	BestFE *FeatureEngineeringSpec `json:"bestFE,omitempty" protobuf:"bytes,33,opt,name=bestFE"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelClassCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,36,rep,name=conditions"`
}

// ModelClassList contains a list of Studies
// +kubebuilder:object:root=true
type ModelClassList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ModelClass `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type Level struct {
	// The level name, must be unique
	Name string `json:"name,omitempty" protobuf:"bytes,1,rep,name=name"`
	// The key for the levels
	Index []string `json:"index,omitempty" protobuf:"bytes,2,rep,name=index"`
	// The forecast horizon
	Horizon *int32 `json:"horizon,omitempty" protobuf:"varint,3,opt,name=horizon"`
	// The freq of the level
	Freq *catalog.Freq `json:"freq,omitempty" protobuf:"bytes,4,opt,name=freq"`
	// The aggregate function used to roll up the lower level
	Aggregate *catalog.Aggregate `json:"aggregate,omitempty" protobuf:"bytes,5,opt,name=aggregate"`
}

// ModelImageSpec specifies the destination of Docker images produced by a ModelClass
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

// GarbageCollectionSpec specifies the configuration to garbage-collect unused Model resources
type GarbageCollectionSpec struct {
	// Indicates if all models of the ModelClass, excluding the highest-performing model, will be archived
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=true
	CollectAtModelClassEnd *bool `json:"collectAtModelClassEnd,omitempty" protobuf:"varint,1,opt,name=collectAtModelClassEnd"`
	// Indicates if multiple models with the same algorithm are produced by the ModelClass, the
	// model with the lowest score will be garbage-collected
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	KeepOnlyBestModelPerAlgorithm *bool `json:"keepOnlyBestModelPerAlgorithm,omitempty" protobuf:"varint,2,opt,name=keepOnlyBestModelPerAlgorithm"`
	// Indicates if we should keep pruned models
	// model with the lowest score will be garbage-collected
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	KeepPrunedModel *bool `json:"keepPrunedModels,omitempty" protobuf:"varint,3,opt,name=keepPrunedModels"`
}

// ImbalanceHandlingSpec specifies the configuration to process an imbalanced dataset
type ImbalanceHandlingSpec struct {
	// Indicates if imbalance handling is enabled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The technique that will be used to handle the imbalanced dataset
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imbalance *catalog.ImbalanceHandling `json:"imbalance,omitempty" protobuf:"bytes,2,opt,name=imbalance"`
}

type GroupSplitLocationsSpec struct {
	// The folder of group data
	// +kubebuilder:validation:Optional
	GroupTrainingFile *string `json:"groupTrainingDataFile,omitempty" protobuf:"bytes,1,opt,name=groupTrainingDataFile"`
	// The folder of group data
	// +kubebuilder:validation:Optional
	GroupTestingFile *string `json:"groupTestingDataFile,omitempty" protobuf:"bytes,2,opt,name=groupTestingDataFile"`
}
