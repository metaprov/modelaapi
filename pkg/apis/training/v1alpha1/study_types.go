package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
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

// StudyPhase is the current phase of a Study
type StudyPhase string

const (
	StudyPhaseModelPending       StudyPhase = "Pending"
	StudyPhaseSplitting          StudyPhase = "Splitting"
	StudyPhaseSplit              StudyPhase = "Split"
	StudyPhaseTransforming       StudyPhase = "Transforming"
	StudyPhaseTransformed        StudyPhase = "Transformed"
	StudyPhaseEngineeringFeature StudyPhase = "EngineeringFeatures"
	StudyPhaseFeatureEngineered  StudyPhase = "FeaturesEngineered"
	StudyPhaseBaseline           StudyPhase = "Baselining"
	StudyPhaseBaselined          StudyPhase = "Baselined"
	StudyPhaseSearching          StudyPhase = "Searching"
	StudyPhaseSearched           StudyPhase = "Searched"
	StudyPhaseCreatingEnsembles  StudyPhase = "CreatingEnsembles"
	StudyPhaseCreatedEnsembles   StudyPhase = "CreatedEnsembles"
	StudyPhaseTuning             StudyPhase = "Tuning"
	StudyPhaseTuned              StudyPhase = "Tuned"
	StudyPhaseTesting            StudyPhase = "Testing"
	StudyPhaseTested             StudyPhase = "Tested"
	StudyPhaseUnitTesting        StudyPhase = "UnitTesting"
	StudyPhaseUnitTested         StudyPhase = "UnitTested"
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
	StudyPhasePromoting          StudyPhase = "Promoting"
	StudyPhasePromoted           StudyPhase = "Promoted"
)

//  is the condition of a Study

// / Study Condition
const (
	StudySplit             = "StudySplit"
	StudyTransformed       = "StudyTransformed"
	StudyFeatureEngineered = "StudyFeaturesEngineered"
	StudyBaselined         = "Baselined"
	StudySearched          = "Searched"
	StudyEnsembleCreated   = "EnsembleCreated"
	StudyTested            = "Tested"
	StudyTuned             = "Tuned"
	StudyReported          = "Reported"
	StudyProfiled          = "Profiled"
	StudyExplained         = "Explained"
	StudyAborted           = "Aborted"
	StudyPaused            = "Paused"
	StudyCompleted         = "Completed"
	StudyPartitioned       = "Partitioned"
	StudyModelPromoted     = "ModelPromoted"
)

// StudyCondition describes the state of a Study at a certain point

// +kubebuilder:subresource:status
// +kubebuilder:resource:path=studies,singular=study,shortName=sd,categories={training,modela}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName",priority=1
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.search.objective.metric"
// +kubebuilder:printcolumn:name="Score",type="number",JSONPath=".status.bestModelScore"
// +kubebuilder:printcolumn:name="Best model",type="string",JSONPath=".status.bestModel"
// +kubebuilder:printcolumn:name="Trained",type="number",JSONPath=".status.search.completed"
// +kubebuilder:printcolumn:name="Tested",type="number",JSONPath=".status.test.completed"
// +kubebuilder:printcolumn:name="StartedAt",type="date",JSONPath=".status.startAt",priority=1
// +kubebuilder:printcolumn:name="CompletedAt",type="date",JSONPath=".status.completedAt",priority=1
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.lastFailure"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// Study represents an automatic search for the best machine learning model for a given dataset
type Study struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              StudySpec `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status StudyStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// StudySpec defines the desired state of a Study and the parameters for a model search
type StudySpec struct {
	// VersionName references the name of a Data Product Version that describes the version of the resource
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName string `json:"versionName" protobuf:"bytes,1,opt,name=versionName"`
	// The user-provided description of the Study
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The reference to the Lab under which the Model resources created by the Study will be trained.
	// If unspecified, the default Lab from the parent Data Product will be used
	// +kubebuilder:validation:Optional
	LabRef *v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,3,opt,name=labRef"`
	// The name of the Dataset resource that will be used to train models.
	// The dataset will be split into individual training, testing, and validation datasets
	// +kubebuilder:validation:Required
	// +required
	DatasetName *string `json:"datasetName" protobuf:"bytes,4,opt,name=datasetName"`
	// The machine learning task type (i.e. regression, classification)
	// +kubebuilder:validation:Required
	// +required
	Task catalog.MLTask `json:"task" protobuf:"bytes,5,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask" protobuf:"bytes,6,opt,name=subtask"`
	// FeatureEngineering specifies the feature engineering pipeline for models created by the Study
	// +kubebuilder:validation:Optional
	FeatureEngineering FeatureEngineeringSpec `json:"featureEngineering,omitempty" protobuf:"bytes,7,opt,name=featureEngineering"`
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
	// ForecastSpec specifies the parameters required when generating a forecasting model
	// +kubebuilder:validation:Optional
	ForecastTemplate ForecasterSpec `json:"forecastTemplate,omitempty" protobuf:"bytes,13,opt,name=forecastTemplate"`
	// Schedule specifies the configuration to execute the Study at a later date
	// +kubebuilder:validation:Optional
	Schedule StudyScheduleSpec `json:"schedule,omitempty" protobuf:"bytes,14,opt,name=schedule"`
	// Interpretability specifies the parameters to create interpretability visualizations for the final model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,15,opt,name=interpretability"`
	// +kubebuilder:validation:Optional
	OutlierModel OutlierModelSpec `json:"outlierModel,omitempty" protobuf:"bytes,16,opt,name=outlierModel"`
	// If true, the execution of the Study and associated Models will be
	// permanently stopped, and all workloads related to the Study will be removed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Abort *bool `json:"abort,omitempty" protobuf:"varint,17,opt,name=abort"`
	// If true, a report will be generated for the Study
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Report *bool `json:"report,omitempty" protobuf:"varint,18,opt,name=report"`
	// If true, the execution of new workloads associated with the Study will be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pause *bool `json:"pause,omitempty" protobuf:"varint,19,opt,name=pause"`
	// If true, the Study will be profiled after the conclusion of it's model search
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Profile *bool `json:"profile,omitempty" protobuf:"varint,20,opt,name=profile"`
	// If true, Shapley values (and relevant visualizations) will be calculated for the highest-performing Model
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Explain *bool `json:"explain,omitempty" protobuf:"varint,21,opt,name=explain"`
	// Fast indicates if Models associated with the Study should skip profiling, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,22,opt,name=fast"`
	// The name of the Virtual Bucket where Study artifacts (metadata, reports, and model artifacts) generated by
	// the Study will be stored. If empty, it will default to the default Virtual Bucket of the Data Product
	// +kubebuilder:validation:Optional
	ArtifactBucketName *string `json:"artifactBucketName,omitempty" protobuf:"bytes,23,opt,name=artifactBucketName"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,24,opt,name=owner"`
	// Indicates if the Study is a template, in which case it will not be executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Template *bool `json:"template,omitempty" protobuf:"varint,25,opt,name=template"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification *catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,26,opt,name=notification"`
	// GarbageCollectionSpec specifies the configuration to automatically clean-up unused models
	//+kubebuilder:validation:Optional
	GC *GarbageCollectionSpec `json:"gc,omitempty" protobuf:"bytes,27,opt,name=gc"`
	// ModelVersion specifies the version assigned to all the Model resources produced by the Study
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,28,opt,name=modelVersion"`
	// The time, in seconds, after which the execution of the Study will be forcefully aborted (4 hours, by default)
	// +kubebuilder:default:=14400
	// +kubebuilder:validation:Optional
	Timeout *int32 `json:"timeout,omitempty" protobuf:"varint,29,opt,name=timeout"`
	// UnitTestsTemplate defines the test suite that will be executed on the model produced by the Study
	// +kubebuilder:validation:Optional
	UnitTestsTemplate catalog.TestSuite `json:"unitTestsTemplate,omitempty" protobuf:"bytes,30,opt,name=unitTestsTemplate"`
	// In case of a group by, those are the group locations
	// +kubebuilder:validation:Optional
	GroupLocations GroupSplitLocationsSpec `json:"groupLocations,omitempty" protobuf:"bytes,31,opt,name=groupLocations"`
	// The Model Class which created the Study, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,32,opt,name=modelClassName"`
	// The Model Class Run which created the Study, if applicable
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,33,opt,name=modelClassRunName"`
	// Define the serving policy once the best model is created.
	// by default there is no serving policy
	// +kubebuilder:validation:Optional
	Serving ServingSpec `json:"serving,omitempty" protobuf:"bytes,34,opt,name=serving"`
}

// StudyStatus defines the observed state of a Study
type StudyStatus struct {
	// Total models created for the study
	// +kubebuilder:validation:Optional
	ModelsCount int32 `json:"modelsCount,omitempty" protobuf:"varint,1,opt,name=modelsCount"`
	// CompletedAt represents the time at which the Study was marked as completed, failed, or aborted
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,2,opt,name=completedAt"`
	// The name of the Model resource which was determined to be the highest-performing
	// +kubebuilder:validation:Optional
	BestModel string `json:"bestModel,omitempty" protobuf:"bytes,3,opt,name=bestModel"`
	// The score of the Model resource which was determined to be the highest-performing
	// +kubebuilder:validation:Optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,4,opt,name=bestModelScore"`
	// The URI of the raw profile data produced by the Study
	// +kubebuilder:validation:Optional
	ProfileLocation catalog.FileLocation `json:"profileLocation" protobuf:"bytes,5,opt,name=profileLocation"`
	// The name of the Report resource produced by the Study
	// +kubebuilder:validation:Optional
	ReportLocation catalog.FileLocation `json:"reportLocation,omitempty" protobuf:"bytes,6,opt,name=reportLocation"`
	// Reference to the report object that was generated for the dataset, which exists in the same Location Product namespace
	// as the object
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,7,opt,name=reportName"`
	// The phase of the Study
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase StudyPhase `json:"phase" protobuf:"bytes,8,opt,name=phase"`
	// ObservedGeneration is the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,9,opt,name=observedGeneration"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation catalog.FileLocation `json:"trainDatasetLocation,omitempty" protobuf:"bytes,10,opt,name=trainDatasetLocation"`
	// TestDatasetLocation specifies the location of the testing dataset
	// +kubebuilder:validation:Optional
	TestDatasetLocation catalog.FileLocation `json:"testDatasetLocation,omitempty" protobuf:"bytes,11,opt,name=testDatasetLocation"`
	// ValidationDatasetLocation specifies the location of the validation dataset
	// +kubebuilder:validation:Optional
	ValidationDatasetLocation *catalog.FileLocation `json:"validationDatasetLocation,omitempty" protobuf:"bytes,12,opt,name=validationDatasetLocation"`
	// OptimizerLocation specifies the location of the Optuna optimizer relevant to the Study
	// +kubebuilder:validation:Optional
	OptimizerLocation *catalog.FileLocation `json:"optimizerLocation,omitempty" protobuf:"bytes,13,opt,name=optimizerLocation"`
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
	TrainingRowsCount int32 `json:"trainingRowsCount" protobuf:"varint,17,opt,name=trainingRowsCount"`
	// The number of rows in the testing dataset
	// +kubebuilder:validation:Optional
	TestingRowsCount int32 `json:"testingRowsCount" protobuf:"varint,18,opt,name=testingRowsCount"`
	// The number of rows in the validation dataset
	// +kubebuilder:validation:Optional
	ValidationRowsCount int32 `json:"validationRowsCount" protobuf:"varint,19,opt,name=validationRowsCount"`
	// The progress percentage of the Study, which is derived from the Study's current phase
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress" protobuf:"varint,20,opt,name=progress"`
	// TrainingDataHash specifies the hashes for datasets used by the Study
	//+kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,21,opt,name=trainingDataHash"`
	// The type of trigger which started the Study
	// +kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,22,opt,name=triggeredBy"`
	// Logs specifies the location of logs produced by workloads associated with the Study
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,23,opt,name=logs"`
	// BaselineStatus contains the status of the baseline phase
	//+kubebuilder:validation:Optional
	BaselineStatus StudyPhaseStatus `json:"baseline,omitempty" protobuf:"bytes,24,opt,name=baseline"`
	// SearchStatus contains the status of the model search phase
	//+kubebuilder:validation:Optional
	SearchStatus StudyPhaseStatus `json:"search,omitempty" protobuf:"bytes,25,opt,name=search"`
	// EnsembleStatus contains the status of the ensemble phase
	//+kubebuilder:validation:Optional
	EnsembleStatus StudyPhaseStatus `json:"ensemble,omitempty" protobuf:"bytes,26,opt,name=ensemble"`
	// TestStatus contains the status of the testing phase
	//+kubebuilder:validation:Optional
	TestStatus StudyPhaseStatus `json:"test,omitempty" protobuf:"bytes,27,opt,name=test"`
	// ExplainStatus contains the status of the explaining phase
	//+kubebuilder:validation:Optional
	ExplainStatus StudyPhaseStatus `json:"explain,omitempty" protobuf:"bytes,28,opt,name=explain"`
	// OutlierDetection is the status for outlier detection
	//+kubebuilder:validation:Optional
	DriftDetection DriftDetectorStatus `json:"driftDetection,omitempty" protobuf:"bytes,29,opt,name=driftDetection"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,30,opt,name=updatedAt"`
	// GC specifies the status of garbage collection relevant to the Study
	GC GarbageCollectionStatus `json:"gc,omitempty" protobuf:"bytes,31,opt,name=gc"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,32,rep,name=conditions"`
}

// ModelResult contains the records of a single garbage-collected model
type ModelResult struct {
	// The name of the model
	// +kubebuilder:validation:Optional
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// The type of estimator of the model
	// +kubebuilder:validation:Optional
	Algorithm string `json:"algorithm,omitempty" protobuf:"bytes,2,opt,name=algorithm"`
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

// StudyPhaseStatus contains the statistics for a single phase of a Study
type StudyPhaseStatus struct {
	// The time at which the phase started
	// +kubebuilder:validation:Optional
	StartedAt *metav1.Time `json:"startedAt,omitempty" protobuf:"bytes,1,opt,name=startedAt"`
	// The time at which the phase concluded
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,2,opt,name=completedAt"`
	// The number of models pending training
	// +kubebuilder:validation:Optional
	WaitingModelsCount int32 `json:"waitingModelsCount,omitempty" protobuf:"varint,3,opt,name=waitingModelsCount"`
	// The number of models currently being trained
	// +kubebuilder:validation:Optional
	RunningModelsCount int32 `json:"runningModelsCount,omitempty" protobuf:"varint,4,opt,name=runningModelsCount"`
	// The number of models that experienced an error whilst training
	// +kubebuilder:validation:Optional
	FailedModelsCount int32 `json:"failedModelsCount,omitempty" protobuf:"varint,5,opt,name=failedModelsCount"`
	// The number of models that have been successfully trained
	// +kubebuilder:validation:Optional
	CompletedModelsCount int32 `json:"completedModelsCount,omitempty" protobuf:"varint,6,opt,name=completedModelsCount"`
	// Best score so far in this phase. The best score is the value of the objective.
	// +kubebuilder:validation:Optional
	BestScore float64 `json:"bestScore,omitempty" protobuf:"varint,7,opt,name=bestScore"`
	// Actual number of models where no progress was made. This used to decide on early stop.
	// +kubebuilder:validation:Optional
	ModelsWithNoProgress int32 `json:"modelsWithNoProgress,omitempty" protobuf:"varint,8,opt,name=modelsWithNoProgress"`
}

// GarbageCollectionStatus contains the records for garbage-collected models
type GarbageCollectionStatus struct {
	// The number of models that were collected, equal to the length of Models
	// +kubebuilder:validation:Optional
	CollectedModelsCount int32 `json:"collectedModelsCount,omitempty" protobuf:"varint,1,opt,name=collectedModelsCount"`
	// The collection of models that were deleted
	// +kubebuilder:validation:Optional
	Models []ModelResult `json:"models,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,2,rep,name=models"`
}

type DriftDetectorStatus struct {
	// The location of the drift detector model
	OutlierModelLocation string `json:"outlierModelURI,omitempty" protobuf:"bytes,1,opt,name=outlierModelURI"`
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
	Pruner *PrunerSpec `json:"pruner,omitempty" protobuf:"bytes,2,opt,name=pruner"`
	// The maximum number of minutes, that the model search can run for
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=10000
	// +kubebuilder:validation:Optional
	MaxTime int32 `json:"maxTime,omitempty" protobuf:"varint,4,opt,name=maxTime"`
	// The maximum number of candidate models that will be sampled and trained
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=1000
	// +kubebuilder:validation:Optional
	MaxModels int32 `json:"maxModels,omitempty" protobuf:"varint,5,opt,name=maxModels"`
	// The maximum value for the primary objective needed to finish the search, after which the
	// search will automatically conclude if it is reached
	// +kubebuilder:default:=9999999999
	// +kubebuilder:validation:Optional
	MaxScore *float64 `json:"maxScore,omitempty" protobuf:"bytes,6,opt,name=maxScore"`
	// The desired number of trainers that will train candidate models in parallel. The number
	// of trainers is restricted based on the allowance provided by the active License
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=50
	// +kubebuilder:validation:Minimum=0
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,7,opt,name=trainers"`
	// The number of top candidate models that will be moved to the testing phase once the model search is complete.
	// If unspecified, only the best model will be retained
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=5
	Test *int32 `json:"test,omitempty" protobuf:"varint,8,opt,name=test"`
	// The number of top candidate models, sorted by their objective score, that will be retained in
	// the case that garbage collection is enabled. If this number is less than Test, then RetainTop will
	// be ignored and the value of Test will be used instead
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	RetainTop *int32 `json:"retainTop,omitempty" protobuf:"varint,9,opt,name=retainTop"`
	// The time, in minutes, for which candidate models (excluding the best model) will be
	// retained, after which they will be archived
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=2400
	// +kubebuilder:validation:Optional
	RetainFor *int32 `json:"retainedFor,omitempty" protobuf:"varint,10,opt,name=retainedFor"`
	// SearchSpace specifies the algorithms available to candidate models
	// +kubebuilder:validation:Optional
	SearchSpace AlgorithmSearchSpaceSpec `json:"searchSpace,omitempty" protobuf:"bytes,11,opt,name=searchSpace"`
	// EarlyStop specifies the configuration for early stopping
	// +kubebuilder:validation:Optional
	EarlyStop *EarlyStopSpec `json:"earlyStop,omitempty" protobuf:"bytes,12,opt,name=earlyStop"`
	// The objective metric that will be measured against all models to evaluate their performance
	// +kubebuilder:validation:Optional
	Objective catalog.ObjectiveSpec `json:"objective,omitempty" protobuf:"bytes,13,opt,name=objective"`
	// The second objective metric that will be measured and evaluated in tandem with the primary objective.
	// The model search optimizer will attempt to optimize both metrics
	// +kubebuilder:validation:Optional
	SecondaryObjective *catalog.ObjectiveSpec `json:"secondaryObjective,omitempty" protobuf:"bytes,14,opt,name=secondaryObjective"`
	// +kubebuilder:default:="maximize"
	// +kubebuilder:validation:Optional
	Goal catalog.GoalType `json:"goal,omitempty" protobuf:"bytes,15,opt,name=goal"`
}

// EarlyStopSpec specifies the configuration to automatically abort a model search
// when improvements in the objective metric are not being produced
type EarlyStopSpec struct {
	// Enabled indicates if early stopping is enabled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The number of models to train before model objective metrics will begin to be checked for early stopping.
	// If unspecified, Modela will ignore the first 10 models by default
	// +kubebuilder:default:=20
	// +kubebuilder:validation:Optional
	Initial *int32 `json:"initial,omitempty" protobuf:"varint,2,opt,name=initial"`
	// The number of models with no improvement in score that are required to abort the model search.
	// If unspecified, Modela will abort the search after 20 models by default
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	ModelsWithNoProgress *int32 `json:"modelsWithNoProgress,omitempty" protobuf:"varint,3,opt,name=modelsWithNoProgress"`
}

// OutlierModelSpec specifies the configuration to train an outlier model
type OutlierModelSpec struct {
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

// BaselineSpec specifies the configuration for the baseline phase of a Study
type BaselineSpec struct {
	// Indicates if baseline (default hyper-parameters) models will be trained
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Algorithms contains a list of estimators that will be trained
	// +kubebuilder:validation:Optional
	Algorithms []catalog.ClassicEstimatorName `json:"baselines,omitempty" protobuf:"bytes,2,rep,name=baselines"`
	// All indicates if a baseline model will be created for every estimator
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	All *bool `json:"all,omitempty" protobuf:"varint,3,opt,name=all"`
}

// AlgorithmSearchSpaceSpec defines the algorithms available to models produced by a Study
type AlgorithmSearchSpaceSpec struct {
	// Which algorithm to include
	// If empty, all algorithms will be available for training
	// +kubebuilder:validation:Optional
	Include []catalog.ClassicEstimatorName `json:"include,omitempty" protobuf:"bytes,1,rep,name=include"`
	// Which algorithm to exclude
	// If empty, all algorithms will be available for training
	// +kubebuilder:validation:Optional
	Exclude []catalog.ClassicEstimatorName `json:"exclude,omitempty" protobuf:"bytes,2,rep,name=exclude"`
	// Custom specifies custom hyperparameter ranges for specific algorithms
	// +kubebuilder:validation:Optional
	Custom []AlgorithmParameterRange `json:"custom,omitempty" protobuf:"bytes,3,rep,name=custom"`
}

// AlgorithmParameterRange defines a custom hyperparameter range for a single algorithm
type AlgorithmParameterRange struct {
	// The algorithm name
	// +kubebuilder:validation:Optional
	Name catalog.ClassicEstimatorName `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Specify one or more parameters ranges. This parameters will override the default
	// +kubebuilder:validation:Optional
	Ranges []catalog.ParameterRange `json:"ranges,omitempty" protobuf:"bytes,2,rep,name=ranges"`
}

// StudyScheduleSpec specifies the parameters for a Study to be executed at a certain time
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

// GarbageCollectionSpec specifies the configuration to garbage-collect unused Model resources
type GarbageCollectionSpec struct {
	// Enabled indicates if garbage collection is enabled, in which case all models will be deleted at the end of the
	// Study excluding an amount of the top highest-performing models defined by the SearchSpec of the Study
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=true
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// If true, the best models per algorithm will be prevented from deletion
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	KeepBestModelPerAlgorithm *bool `json:"keepBestModelPerAlgorithm,omitempty" protobuf:"varint,2,opt,name=keepBestModelPerAlgorithm"`
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	KeepPrunedModels *bool `json:"keepPrunedModels,omitempty" protobuf:"varint,3,opt,name=keepPrunedModels"`
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
