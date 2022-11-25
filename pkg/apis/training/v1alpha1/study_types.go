package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
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
	StudyPhaseFailed             StudyPhase = "FailedConditionReason"
	StudyPhaseAborted            StudyPhase = "Aborted"
	StudyPhasePaused             StudyPhase = "Paused"
)

// StudyConditionType is the condition of a Study
type StudyConditionType string

/// Study Condition
const (
	// StudyInitialized states that the resources needed for training are allocated and ready
	StudyInitialized StudyConditionType = "Initialized"
	// StudySplit states that the training dataset has been split and is ready for use
	StudySplit StudyConditionType = "StudySplit"
	// Study Transformed states that the training dataset has been split and is ready for use
	StudyTransformed StudyConditionType = "StudyTransformed"
	// StudyFeatureEngineered states that the search for the best feature engineering pipeline is complete
	StudyFeatureEngineered StudyConditionType = "StudyFeaturesEngineered"
	// StudyBaselined states that baseline models for each algorithm have been trained
	StudyBaselined StudyConditionType = "StudyBaselined"
	// StudySearched states that the primary model search for algorithm and hyper-parameters is complete
	StudySearched StudyConditionType = "StudySearched"
	// StudyEnsembleCreated states that ensemble models were trained
	StudyEnsembleCreated StudyConditionType = "ModelsEnsembleCreated"
	// StudyTested states that the best model has been tested against training and testing datasets
	StudyTested StudyConditionType = "ModelTested"
	// StudyTested states that the best model has been tested against training and testing datasets
	StudyTuned StudyConditionType = "ModelTuned"

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
	StudyUnitTested  StudyConditionType = "UnitTested"
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

// +kubebuilder:subresource:status
// +kubebuilder:resource:path=studies,singular=study,shortName=sd,categories={training,modela}
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
	Description *string `json:"description,omitempty" protobuf:"bytes,4,opt,name=description"`
	// The reference to the Lab under which the Model resources created by the Study will be trained.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,5,opt,name=labRef"`
	// The name of the Entity resource that will be used to train models with.
	// The dataset will be split into individual training, testing, and validation datasets
	// +kubebuilder:validation:Required
	// +required
	DatasetName *string `json:"datasetName" protobuf:"bytes,6,opt,name=datasetName"`
	// The machine learning task type (i.e. regression, classification)
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task" protobuf:"bytes,7,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask" protobuf:"bytes,8,opt,name=subtask"`
	// FESearch specifies the parameters to perform a feature engineering search
	// +kubebuilder:validation:Optional
	FESearch FeatureEngineeringSearchSpec `json:"feSearch,omitempty" protobuf:"bytes,9,opt,name=feSearch"`
	// Set the imbalance dataset handling.
	// +kubebuilder:validation:Optional
	ImbalanceHandler ImbalanceHandlingSpec `json:"imbalanceHandler,omitempty" protobuf:"bytes,10,opt,name=imbalanceHandler"`
	// Baseline specifies the parameters to generate baseline (default hyper-parameters) models
	// +kubebuilder:validation:Optional
	Baseline BaselineSpec `json:"baseline,omitempty" protobuf:"bytes,11,opt,name=baseline"`
	// Search specifies the configuration to perform the model search for the best algorithm and hyper-parameters
	// +kubebuilder:validation:Optional
	Search SearchSpec `json:"search,omitempty" protobuf:"bytes,12,opt,name=search"`
	// Ensembles specifies to parameters to generate ensemble models
	// +kubebuilder:validation:Optional
	Ensembles EnsemblesSpec `json:"ensembles,omitempty" protobuf:"bytes,13,opt,name=ensembles"`
	// TrainingTemplate specifies the configuration to train and evaluate models
	// +kubebuilder:validation:Optional
	TrainingTemplate TrainingSpec `json:"trainingTemplate,omitempty" protobuf:"bytes,14,opt,name=trainingTemplate"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the Study
	// +kubebuilder:validation:Optional
	ServingTemplate ServingSpec `json:"servingTemplate,omitempty" protobuf:"bytes,15,opt,name=servingTemplate"`
	// ForecastSpec specifies the parameters required when generating a forecasting model
	// +kubebuilder:validation:Optional
	FctTemplate ForecasterSpec `json:"fctTemplate,omitempty" protobuf:"bytes,16,opt,name=fctTemplate"`
	// Schedule specifies the configuration to execute the Study at a later date
	// +kubebuilder:validation:Optional
	Schedule StudyScheduleSpec `json:"schedule,omitempty" protobuf:"bytes,17,opt,name=schedule"`
	// Interpretability specifies the parameters to create interpretability visualizations for the final model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,18,opt,name=interpretability"`
	// +kubebuilder:validation:Optional
	DriftDetector DriftModelSpec `json:"driftDetection,omitempty" protobuf:"bytes,19,opt,name=driftDetection"`
	// Aborted indicates that the execution of the Study and associated Models should be permanently stopped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,20,opt,name=aborted"`
	// Reported indicates that a report will be generated for the Study
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,21,opt,name=reported"`
	// Paused indicates that the execution of new workloads associated with the Study should be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,22,opt,name=paused"`
	// Profiled indicates that the Study will be profiled after the conclusion of it's model search
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"varint,23,opt,name=profiled"`
	// ModelPublished indicates that a Docker image will be created containing the best model produced by the Study
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelPublished *bool `json:"modelPublished,omitempty" protobuf:"varint,24,opt,name=modelPublished"`
	// ModelImagePushed indicates that if a Docker image of the best model will be pushed to a Docker image registry
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelImagePushed *bool `json:"modelImagePushed,omitempty" protobuf:"varint,25,opt,name=modelImagePushed"`
	// ModelExplained indicates if interpretability diagrams, as specified
	// by the Interpretability field, will be produced for the final model
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ModelExplained *bool `json:"modelExplained,omitempty" protobuf:"varint,26,opt,name=modelExplained"`
	// Fast indicates if Models associated with the Study should skip profiling, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,27,opt,name=fast"`
	// The data location where Study artifacts (metadata, reports, and model artifacts) generated by the Study will be stored
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,28,opt,name=location"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,29,opt,name=owner"`
	// CompilerSpec specifies the configuration to compile the best-selected model to a binary (currently unimplemented)
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,30,opt,name=compilation"`
	// Indicates if the Study is a template, in which case it will not be executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Template *bool `json:"template,omitempty" protobuf:"varint,31,opt,name=template"`
	// Indicates if the Study is flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,32,opt,name=flagged"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,33,opt,name=notification"`
	// ModelImage specifies the configuration to upload Docker images of models to an image registry
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,34,opt,name=modelImage"`
	// GarbageCollectionSpec specifies the configuration to automatically clean-up unused models
	//+kubebuilder:validation:Optional
	GC GarbageCollectionSpec `json:"gc,omitempty" protobuf:"bytes,35,opt,name=gc"`
	// The time-to-live, in seconds, for Model resources produced by the Study
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,36,opt,name=ttl"`
	// ModelVersion specifies the version assigned to all the Model resources produced by the Study
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,37,opt,name=modelVersion"`
	// The time, in seconds, after which the execution of the Study will be forcefully aborted (4 hours, by default)
	// +kubebuilder:default:= 14400
	// +kubebuilder:validation:Optional
	TimeoutInSecs *int32 `json:"timeoutInSecs,omitempty" protobuf:"varint,38,opt,name=timeoutInSecs"`
	// Not implemented. For future use. If true,generate code when the best model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CodeGenerated *bool `json:"codeGenerated,omitempty" protobuf:"varint,39,opt,name=codeGenerated"`
	// A template for models unit tests
	// +kubebuilder:validation:Optional
	UnitTestsTemplate catalog.TestSuite `json:"unitTestsTemplate,omitempty" protobuf:"bytes,40,opt,name=unitTestsTemplate"`
	// In case of a group by, those are the group locations
	// +kubebuilder:validation:Optional
	GroupLocations GroupSplitLocationsSpec `json:"groupLocations,omitempty" protobuf:"bytes,41,opt,name=groupLocations"`
	// The model class for this report if the model was created by a model class
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,42,opt,name=modelClassName"`
	// If this report was created by a model class run, this is the run name
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,43,opt,name=modelClassRunName"`
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
	ReportUri string `json:"reportUri,omitempty" protobuf:"bytes,7,opt,name=reportUri"`
	// Reference to the report object that was generated for the dataset, which exists in the same Location Product namespace
	// as the object
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,8,opt,name=reportName"`
	// The phase of the Study
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase StudyPhase `json:"phase" protobuf:"bytes,9,opt,name=phase"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,10,opt,name=observedGeneration"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,11,opt,name=trainDataset"`
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
	// OutlierDetection is the status for outlier detection
	//+kubebuilder:validation:Optional
	DriftDetection DriftDetectorStatus `json:"driftDetection,omitempty" protobuf:"bytes,31,opt,name=driftDetection"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,32,opt,name=lastUpdated"`
	// BestFE specifies the best feature engineering pipeline produced by the Study
	//+kubebuilder:validation:Optional
	BestFE *FeatureEngineeringSpec `json:"bestFE,omitempty" protobuf:"bytes,33,opt,name=bestFE"`
	// GC specifies the status of garbage collection relevant to the Study
	GC GarbageCollectionStatus `json:"gc,omitempty" protobuf:"bytes,34,opt,name=gc"`
	// Study group by
	Groupby StudyGroupByStatus `json:"groupby,omitempty" protobuf:"bytes,35,opt,name=groupby"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []StudyCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,36,rep,name=conditions"`
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
	// Best score so far in this phase. The best score is the value of the objective.
	// +kubebuilder:validation:Optional
	BestScore float64 `json:"bestScore,omitempty" protobuf:"varint,7,opt,name=bestScore"`
	// Actual number of models where no progress was made. This used to decide on early stop.
	// +kubebuilder:validation:Optional
	ModelsWithNoProgress int32 `json:"modelsWithNoProgress,omitempty" protobuf:"varint,8,opt,name=modelsWithNoProgress"`
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

type DriftDetectorStatus struct {
	// The location of the prediction outlier detection
	OutlierModelURI string `json:"outlierModelURI,omitempty" protobuf:"bytes,1,opt,name=outlierModelURI"`
}

type StudyGroupByStatus struct {
	// The locations of the datasets profile files. Each file is the group
	// +kubebuilder:validation:Optional
	StudiesURI string `json:"studiesURI,omitempty" protobuf:"bytes,1,opt,name=studiesURI"`
	// Holds the worker on going result, when a worker finish, we update the location of thier result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,2,opt,name=workerResults"`
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
	// Set a custom hyper parameter spaace.
	// Specify custom ranges per estimator.
	// +kubebuilder:validation:Optional
	Custom []AlgorithmParameterRange `json:"custom,omitempty" protobuf:"bytes,3,opt,name=custom"`
}

// Define a single custom search spec for a single alg
type AlgorithmParameterRange struct {
	// The algorithm name
	// +kubebuilder:validation:Optional
	Name catalog.ClassicEstimatorName `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Specify one or more parameters ranges. This parameters will override the default
	// ranges
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
	FSelection FeatureSelectionSpec `json:"feSelection,omitempty" protobuf:"bytes,10,opt,name=feSelection"`
	// The number of new models produced by the fe search which, if there is no improvement
	// in score, the model search will conclude
	// +kubebuilder:validation:Optional
	EarlyStop EarlyStopSpec `json:"earlyStop,omitempty" protobuf:"bytes,12,opt,name=earlyStop"`
}

// ModelClassStatus defines the observed state of a ModelClass

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
	CollectAtStudyEnd *bool `json:"collectAtModelClassEnd,omitempty" protobuf:"varint,1,opt,name=collectAtModelClassEnd"`
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
