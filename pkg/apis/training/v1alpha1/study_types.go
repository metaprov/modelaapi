package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// StudyPhase is the current phase of the study
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

// +kubebuilder:validation:Enum="quick";"linear-only";"tree";"default-hp";"none";
type AlgorithmFilterName string

const (
	// only logistic regression and xgboost
	AlgorithmFilterNameQuick AlgorithmFilterName = "quick"
	// Select only from linear algorithms
	AlgorithmFilterNameLinearOnly AlgorithmFilterName = "linear-only"
	// Select only tree based algorithms
	AlgorithmFilterNameTreeOnly AlgorithmFilterName = "tree"
	// sample from all algorithms , use default hyper parameters
	AlgorithmFilterNameDefaultParameters AlgorithmFilterName = "default-hp"
	// optimal
	AlgorithmFilterNameNone AlgorithmFilterName = "none"
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

// StudyConditionType is the condition on the study
type StudyConditionType string

/// Study Condition
const (
	// All the resources needed for training are allocated and ready.
	StudyInitialized StudyConditionType = "Initialized"
	// The search the best preprocessor is completed.
	StudySplitted StudyConditionType = "StudySplitted"
	// The search the best preprocessor is completed.
	StudyFeatureEngineered StudyConditionType = "StudyFeaturesEngineered"
	// The search the best preprocessor is completed.
	StudyBaselined StudyConditionType = "StudyBaselined"
	// The search for the best model candidates is completed.
	StudySearched StudyConditionType = "StudySearched"
	// true if we did ensamble training
	StudyEnsambleCreated StudyConditionType = "ModelsEnsembleCreated"
	// The best model candidate was tested on the full dataset.
	StudyTested StudyConditionType = "ModelTested"
	// True when we generated the reports.
	StudyReported StudyConditionType = "Reported"
	// True after we profiled the study
	StudyProfiled StudyConditionType = "Profiled"
	// True after we profiled the study
	StudyExplained StudyConditionType = "Explained"
	// True after we profiled the study
	StudyAborted StudyConditionType = "Aborted"
	// True after we profiled the study
	StudyPaused StudyConditionType = "Paused"
	// Study saved in database
	StudySaved StudyConditionType = "Saved"
	// Study ready state
	StudyCompleted StudyConditionType = "Completed"
	// Study is partitioned based on the partition key
	StudyPartitioned StudyConditionType = "Partitioned"

	StudyArchived StudyConditionType = "Archived"
)

// StudyCondition describes the state of a StudyName.
type StudyCondition struct {
	// Type of study condition.
	// +kubebuilder:validation:Optional
	Type StudyConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=StudyConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	// +kubebuilder:validation:Optional
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	// +kubebuilder:validation:Optional
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	// +kubebuilder:validation:Optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	// +kubebuilder:validation:Optional
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:subresource:status
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress"
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

// Study represent a search for the best machine learning model using automl.
type Study struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              StudySpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            StudyStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

//SuccessiveHalvingOptions define the parameters for the successive halving algorithm
type SuccessiveHalvingOptions struct {
	// The maximum budget allocated to each model during SH search.
	// The default max budget is 81
	// +kubebuilder:default:=81
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxBudget *int32 `json:"maxBudget,omitempty" protobuf:"varint,1,opt,name=maxBudget"`
	// The rate of elimination during SH search, such that only 1/rate of models are promoted to the
	// next half
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	EliminationRate *int32 `json:"eliminationRate,omitempty" protobuf:"varint,2,opt,name=eliminationRate"`
	// The modality type. The default modality is based on the type of models
	// For deep models - we use epochs.
	// For classical models - we use data
	// +kubebuilder:default:=epochs
	// +kubebuilder:validation:Optional
	Modality *catalog.ModalityType `json:"modality,omitempty" protobuf:"bytes,3,opt,name=modality"`
}

// ModelSearchSpec the constraint on the training process.
// The values are assigned to the model from the study.
type SearchSpec struct {
	// Type specify the hyper parameter optimization search method.
	// The only supported value is random
	// +kubebuilder:default:=random
	// +kubebuilder:validation:Optional
	Sampler *SamplerName `json:"sampler,omitempty" protobuf:"bytes,1,opt,name=sampler"`
	// The pruner to use during model search.
	// +kubebuilder:validation:Optional
	Pruner PrunerSpec `json:"pruner,omitempty" protobuf:"bytes,2,opt,name=pruner"`
	// MaxCost specify what is the maximum cost incurred before
	// stopping model creations
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	MaxCost *int32 `json:"maxCost,omitempty" protobuf:"varint,3,opt,name=maxCost"`
	// MaxTime specify what is the maximum time allocated to a study (in minutes).
	// the cross validation stage.
	// +kubebuilder:default:=30
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10000
	// +kubebuilder:validation:Optional
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,4,opt,name=maxTime"`
	// Used for random search, the max models sampled.
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,5,opt,name=maxModels"`
	// The minimum score by which the search would stop
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MinScore *float64 `json:"minScore,omitempty" protobuf:"bytes,6,opt,name=minScore"`
	// The desired number of trainers running during search.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=50
	// +kubebuilder:validation:Minimum=0
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,7,opt,name=trainers"`
	// Test indicate the desired number of models that should be passed to the testing phase.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=5
	Test *int32 `json:"test,omitempty" protobuf:"varint,8,opt,name=test"`
	// Indicate the total number of full models that would be retain in etcd.
	// All other models are garbage collected (archived).
	// models are sorted by their objective score.
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	RetainTop *int32 `json:"retainTop,omitempty" protobuf:"varint,9,opt,name=retainTop"`
	// RetainFor measure the time in minutes for modela trained. Default is 60 min (1 H).
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=2400
	RetainFor *int32 `json:"retainedFor,omitempty" protobuf:"varint,10,opt,name=retainedFor"`
	// Define the algorithm search space.
	// +kubebuilder:validation:Optional
	SearchSpace AlgorithmSearchSpaceSpec `json:"searchSpace,omitempty" protobuf:"bytes,11,opt,name=searchSpace"`
	// If larget than 0, stop the search if no change in best score occur. By default we do not early stop.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	EarlyStopAfter *int32 `json:"earlyStopAfter,omitempty" protobuf:"varint,12,opt,name=earlyStopAfter"`
	// If true, keep only the top model from an algorithm
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	KeepOnlyTopModel *bool `json:"keepOnlyTopModel,omitempty" protobuf:"varint,13,opt,name=keepOnlyTopModel"`
	// Objective is the objective defined how the study controller will compare model performance.
	// +kubebuilder:validation:Optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,14,opt,name=objective"`
	// Objective2 is the second objective to consider during optimization.
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Objective2 *catalog.Metric `json:"objective2,omitempty" protobuf:"bytes,15,opt,name=objective2"`
}

// Define the ensemble spec
type EnsemblesSpec struct {
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// VotingEnsample - If true, create a voting ensemble of the top 3 models.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	VotingEnsemble *bool `json:"votingEnsemble,omitempty" protobuf:"varint,2,opt,name=votingEnsemble"`
	// StackingEnsemble If true, create a stacking ensemble of the top 3 models.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	StackingEnsemble *bool `json:"stackingEnsemble,omitempty" protobuf:"varint,3,opt,name=stackingEnsemble"`
	// how many models to use for ensemble.
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Optional
	Top *int32 `json:"top,omitempty" protobuf:"varint,4,opt,name=top"`
}

// Define the baseline phase spec
type BaselineSpec struct {
	// Set to true for baseline
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
	// Baselines holds the name of the base line algorithms to try
	// +kubebuilder:validation:Optional
	Baselines []catalog.ClassicEstimatorName `json:"baselines,omitempty" protobuf:"bytes,2,rep,name=baselines"`
	// Indicate the all alg for the task
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	All *bool `json:"all,omitempty" protobuf:"bytes,3,opt,name=all"`
}

type AlgorithmSearchSpaceSpec struct {
	// AllowList contain the list of algorithms that should be tested as part of the search.
	// Use this to filter specific algorithm
	// +kubebuilder:validation:Optional
	AllowList []catalog.ClassicEstimatorName `json:"allowlist,omitempty" protobuf:"bytes,1,rep,name=allowlist"`
	// set a general filter on the allowed algorithm
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	AlgorithmFilter *AlgorithmFilterName `json:"filter,omitempty" protobuf:"bytes,2,opt,name=filter"`
}

// Study Schedule is used for cases where the study is scheduled to start at future date time.
type StudyScheduleSpec struct {
	// Indicate the all models should be tests
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Set the start time, by default this is set to the start time of the study
	// +kubebuilder:validation:Optional
	StartAt *metav1.Time `json:"startAt,omitempty" protobuf:"bytes,2,opt,name=startAt"`
}

type PrunerSpec struct {
	// The pruner to use during model search.
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

type StudyForecastSpec struct {
	// Template to use for each model
	// +kubebuilder:validation:Optional
	Template ForecastSpec `json:"template,omitempty" protobuf:"bytes,1,opt,name=template"`
	// for multi level forecast
	// The group hierarchy
	// +kubebuilder:validation:Optional
	Hierarchy Hierarchy `json:"hierarchy,omitempty" protobuf:"bytes,2,opt,name=hierarchy"`
}

// Define the specification for the best feature engineering pipeline
type FeatureEngineeringSearchSpec struct {
	// If false, the study will not search for feature engineering.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The imbalanced handler algorithm
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	ImbalanceHandler *catalog.ImbalanceHandling `json:"imbalanceHandler,omitempty" protobuf:"bytes,2,opt,name=imbalancedHandler"`
	// Estimator is the algorithm to use when tunning the feature engineering pipeline
	// +kubebuilder:validation:Optional
	Estimator *catalog.ClassicEstimatorName `json:"estimator,omitempty" protobuf:"bytes,3,opt,name=estimator"`
	// Max models to create during the search for the best feature engineering.
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,4,opt,name=maxModels"`
	// Max time in seconds for the best feature engineering pipeline
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	MaxTimeSec *int32 `json:"maxTime,omitempty" protobuf:"varint,5,opt,name=maxTime"`
	// Number of parallel models
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	MaxTrainers *int32 `json:"maxTrainers,omitempty" protobuf:"varint,6,opt,name=maxTrainers"`
	// How much to sample from the dataset when performing the feature engineering search
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	SamplePct *int32 `json:"samplePct,omitempty" protobuf:"varint,7,opt,name=samplePct"`
	// If true, remove all the models that were used for feature engineering, once the search is over.
	// +kubebuilder:default:=true
	// the feature engineering is done.
	AutoRemove *bool `json:"autoRemove,omitempty" protobuf:"varint,8,opt,name=autoRemove"`
	// If true, the system will try to reuse the best feature engineering pipeline from the last
	// successful study.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reuse *bool `json:"reuse,omitempty" protobuf:"bytes,9,opt,name=reuse"`
	// Specification for feature selection.
	// successful study.
	// +kubebuilder:validation:Optional
	FeatureSelectionTemplate FeatureSelectionSpec `json:"featureSelectionTemplate,omitempty" protobuf:"bytes,10,opt,name=featureSelectionTemplate"`
}

// StudySpec defines the desired state of the study
type StudySpec struct {
	// VersionName is the data product version of the study
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName" protobuf:"bytes,1,opt,name=versionName"`
	// Description is user provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The lab where the model should be trained
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,3,opt,name=labRef"`
	// DatasetName refer to the dataset object for which the study is for.
	// +kubebuilder:validation:Required
	// +required
	DatasetName *string `json:"datasetName" protobuf:"bytes,4,opt,name=datasetName"`
	// Task specify the machine learning task (e.g classification).
	// This must match the task of the data product.
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task" protobuf:"bytes,5,opt,name=task"`
	// Specification for feature engineereing
	// Default: all preprocessing is set to auto.
	// +kubebuilder:validation:Optional
	FeatureEngineeringSearch FeatureEngineeringSearchSpec `json:"feSearch,omitempty" protobuf:"bytes,6,opt,name=feSearch"`
	// Specification for the baseline phase
	// +kubebuilder:validation:Optional
	Baseline BaselineSpec `json:"baseline,omitempty" protobuf:"bytes,7,opt,name=baseline"`
	// Search defines the model search
	// +kubebuilder:validation:Optional
	Search SearchSpec `json:"search,omitempty" protobuf:"bytes,8,opt,name=search"`
	// Search defines the model search
	// +kubebuilder:validation:Optional
	Ensembles EnsemblesSpec `json:"ensembles,omitempty" protobuf:"bytes,9,opt,name=ensembles"`
	// Training template contain the desired training parameter for the models.
	// +kubebuilder:validation:Optional
	TrainingTemplate TrainingSpec `json:"trainingTemplate,omitempty" protobuf:"bytes,10,opt,name=trainingTemplate"`
	// Forecast template
	// +kubebuilder:validation:Optional
	ForecastSpec StudyForecastSpec `json:"forecast,omitempty" protobuf:"bytes,11,opt,name=forecast"`
	// Define when the schedule start
	// +kubebuilder:validation:Optional
	Schedule StudyScheduleSpec `json:"schedule,omitempty" protobuf:"bytes,12,opt,name=schedule"`
	// Define interpretability
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,13,opt,name=interpretability"`
	// Aborted is set when we want to abort the training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,14,opt,name=aborted"`
	// Reported is set when we want to create model report
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,15,opt,name=reported"`
	// Paused is set when we want to pause the training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,16,opt,name=paused"`
	// Profiled is set when we want to create model profile and study profile.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"varint,17,opt,name=profiled"`
	// Set to true if you want the system to create a docker model image, at the end of training.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelPublished *bool `json:"modelPublished,omitempty" protobuf:"varint,18,opt,name=modelPublished"`
	// Set to true if you want the system to push model image to remote docker registry
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelImagePushed *bool `json:"modelImagePushed,omitempty" protobuf:"varint,19,opt,name=modelImagePushed"`
	// Set to true if you want the system to push model image to remote docker registry
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ModelBenchmarked *bool `json:"modelBenchmarked,omitempty" protobuf:"varint,20,opt,name=modelBenchmarked"`
	// Set to true if you want the system to create model explentation for the final models
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ModelExplained *bool `json:"modelExplained,omitempty" protobuf:"varint,21,opt,name=modelExplained"`
	// The location of the study artifacts
	// By default the bucket is the data product bucket.
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,22,opt,name=location"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,23,opt,name=owner"`
	// ActiveDeadlineSeconds is the deadline of a job for this study.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,24,opt,name=activeDeadlineSeconds"`
	// This is the compiler spec for models. This spec will act as a template for the models created by the study
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,25,opt,name=compilation"`
	// Set to true if this study is a template
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Template *bool `json:"template,omitempty" protobuf:"varint,26,opt,name=template"`
	// Is this model flagged
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,27,opt,name=flagged"`
	// Notification specification.
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,28,opt,name=notification"`
	// Model Image specification.
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,29,opt,name=modelImage"`
	// Garbage Collection Spec
	//+kubebuilder:validation:Optional
	GC GarbageCollectionSpec `json:"gc,omitempty" protobuf:"bytes,30,opt,name=gc"`
	// TTL for models.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,31,opt,name=ttl"`
}

// StudyStatus defines the observed state of the Study
type StudyStatus struct {
	// Total models created for the study
	// +kubebuilder:validation:Optional
	Models int32 `json:"models,omitempty" protobuf:"varint,1,opt,name=models"`
	// Study start time
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// The study end time.
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// The Best model name.
	// +kubebuilder:validation:Optional
	BestModel string `json:"bestModel,omitempty" protobuf:"bytes,4,opt,name=bestModel"`
	// The Best model score, so far.
	// +kubebuilder:validation:Optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,5,opt,name=bestModelScore"`
	// A reference to the profile uri which were produce during processing
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,6,opt,name=profileUri"`
	// The study report name
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,7,opt,name=reportName"`
	// The phase of the study
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase StudyPhase `json:"phase" protobuf:"bytes,8,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,9,opt,name=observedGeneration"`
	// TrainDatasetLocation is the location of the train dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,10,opt,name=trainDataset"`
	// TestDatasetLocation is the location of the test dataset used to test this model
	// +kubebuilder:validation:Optional
	TestDatasetLocation data.DataLocation `json:"testDataset,omitempty" protobuf:"bytes,12,opt,name=testDataset"`
	// ValidationDatasetLocation is the location of the dataset used for validation
	// +kubebuilder:validation:Optional
	ValidationDataset data.DataLocation `json:"validationDataset,omitempty" protobuf:"bytes,13,opt,name=validationDataset"`
	// the last model id generated for this study
	LastModelID *int64 `json:"lastModelID,omitempty" protobuf:"varint,14,opt,name=lastModelID"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,15,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,16,opt,name=failureMessage"`
	//TrainingRows is the amount of rows in training
	// +kubebuilder:validation:Optional
	TrainingRows int32 `json:"trainingRows" protobuf:"varint,17,opt,name=trainingRows"`
	//TestingRows is the amount of rows in testing
	// +kubebuilder:validation:Optional
	TestingRows int32 `json:"testingRows" protobuf:"varint,18,opt,name=testingRows"`
	//Validation row contain the number of validation rows for cases that we have validation.
	// +kubebuilder:validation:Optional
	ValidationRows int32 `json:"validationRows" protobuf:"varint,19,opt,name=validationRows"`
	// Study Progress in percent, the progress takes into account the different stages of the study.
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress" protobuf:"varint,20,opt,name=progress"`
	// define a baseline model that will be the baseline for the search. If not none, the base line is the first model
	// to be evaluated.
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	BaselineModel catalog.ClassicEstimatorName `json:"baselineModel,omitempty" protobuf:"bytes,21,opt,name=baselineModel"`
	// Sha 256 of the data sig
	// +kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,22,opt,name=trainingDataHash"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,23,opt,name=triggeredBy"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,24,opt,name=logs"`
	// Holds the result of the feature engineering process
	//+kubebuilder:validation:Optional
	FeatureEngineeringStatus StudyPhaseStatus `json:"featureEngineering,,omitempty" protobuf:"bytes,25,opt,name=featureEngineering"`
	// Holds the result of the baseline phase training
	//+kubebuilder:validation:Optional
	BaselineStatus StudyPhaseStatus `json:"baseline,omitempty" protobuf:"bytes,26,opt,name=baseline"`
	// Holds the result of the search phase training
	//+kubebuilder:validation:Optional
	SearchStatus StudyPhaseStatus `json:"search,omitempty" protobuf:"bytes,27,opt,name=search"`
	// Holds the result of the ensemble phase
	//+kubebuilder:validation:Optional
	EnsembleStatus StudyPhaseStatus `json:"ensemble,omitempty" protobuf:"bytes,28,opt,name=ensemble"`
	// Holds the result of the test phase
	//+kubebuilder:validation:Optional
	TestStatus StudyPhaseStatus `json:"test,omitempty" protobuf:"bytes,29,opt,name=test"`
	// Hold the result of running model interpretability
	//+kubebuilder:validation:Optional
	ExplainStatus StudyPhaseStatus `json:"explain,omitempty" protobuf:"bytes,30,opt,name=explain"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,31,opt,name=lastUpdated"`
	// The best feature engineering
	//+kubebuilder:validation:Optional
	BestFE *FeatureEngineeringSpec `json:"bestFE,omitempty" protobuf:"bytes,32,opt,name=bestFE"`
	// GC algorithm
	GC GarbageCollectionStatus `json:"gc,omitempty" protobuf:"bytes,33,opt,name=gc"`
	// This is the set of partition levels
	// Represents the latest available observations of a study state.
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []StudyCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,34,rep,name=conditions"`
}

// model cv results
type ModelResult struct {
	// +kubebuilder:validation:Optional
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// +kubebuilder:validation:Optional
	Alg string `json:"alg,omitempty" protobuf:"bytes,2,opt,name=alg"`
	// +kubebuilder:validation:Optional
	Score float64 `json:"score,omitempty" protobuf:"bytes,3,opt,name=score"`
	// +kubebuilder:validation:Optional
	Error bool `json:"error,omitempty" protobuf:"varint,4,opt,name=error"`
	// +kubebuilder:validation:Optional
	TrialID int32 `json:"trialID,omitempty" protobuf:"varint,5,opt,name=trialID"`
}

//==============================================================================
// StudyList
//==============================================================================

// +kubebuilder:object:root=true
// StudyList is a list of Study
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

// A definition for a single forecast
// A single forecast knows its forecast key and the index to its level
type ForecastObj struct {
	Key        string `json:"key,omitempty" protobuf:"bytes,1,opt,name=key"`
	LevelIndex int32  `json:"levelIndex,omitempty" protobuf:"varint,2,opt,name=levelIndex"`
}

// Model Image spec define the desired state of the container image of the best model
// If enabled, the system will create a docker image and push it to a docker registry
type ModelImageSpec struct {
	// Is the release to
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	Exist *bool `json:"exist,omitempty" protobuf:"varint,1,opt,name=exist"`
	// Full image name to use
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ImageName *string `json:"imageName,omitempty" protobuf:"bytes,2,opt,name=imageName"`
	// The name of the connection object, the name must be provided in order to push the image.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	RegistryConnection *string `json:"registryConnectionName,omitempty" protobuf:"bytes,3,opt,name=registryConnectionName"`
}

type StudyPhaseStatus struct {
	// Start of the training phase
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// End of the phase.
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// models waiting for processing
	// +kubebuilder:validation:Optional
	Waiting int32 `json:"waiting,omitempty" protobuf:"varint,3,opt,name=waiting"`
	// models in training
	// +kubebuilder:validation:Optional
	Running int32 `json:"running,omitempty" protobuf:"varint,4,opt,name=running"`
	// models that failed
	// +kubebuilder:validation:Optional
	Failed int32 `json:"failed,omitempty" protobuf:"varint,5,opt,name=failed"`
	// models trained
	// +kubebuilder:validation:Optional
	Completed int32 `json:"completed,omitempty" protobuf:"varint,6,opt,name=completed"`
}

type SegmentSpec struct {
	// The dataset column name
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

// Garbage collection
type GarbageCollectionSpec struct {
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=true
	CollectAtStudyEnd *bool `json:"collectAtStudyEnd,omitempty" protobuf:"varint,1,opt,name=collectAtStudyEnd"`
	// +kubebuilder:validation:Optional
	KeepOnlyBestModelPerAlgorithm *bool `json:"keepOnlyBestModelPerAlgorithm,omitempty" protobuf:"varint,2,opt,name=keepOnlyBestModelPerAlgorithm"`
}

type GarbageCollectionStatus struct {
	// +kubebuilder:validation:Optional
	Collected int32 `json:"collected,omitempty" protobuf:"varint,1,opt,name=collected"`
	// List of models, collected.
	// +kubebuilder:validation:Optional
	Models []ModelResult `json:"models,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,opt,name=models"`
}
