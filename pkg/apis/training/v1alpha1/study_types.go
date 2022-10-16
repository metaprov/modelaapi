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

// Study represents an automatic search for the best machine learning model for a given dataset
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
// +kubebuilder:resource:path=studies,singular=study,shortName=sd,categories={training,modela}
type Study struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              StudySpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            StudyStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// the Predictor created for the Model that will be selected by the Study
	// +kubebuilder:validation:Optional
	ServingTemplate ServingSpec `json:"servingTemplate,omitempty" protobuf:"bytes,13,opt,name=servingTemplate"`
	// ForecastSpec specifies the parameters required when generating a forecasting model
	// +kubebuilder:validation:Optional
	FctTemplate ForecasterSpec `json:"fctTemplate,omitempty" protobuf:"bytes,14,opt,name=fctTemplate"`
	// Schedule specifies the configuration to execute the Study at a later date
	// +kubebuilder:validation:Optional
	Schedule StudyScheduleSpec `json:"schedule,omitempty" protobuf:"bytes,15,opt,name=schedule"`
	// Interpretability specifies the parameters to create interpretability visualizations for the final model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,16,opt,name=interpretability"`
	// +kubebuilder:validation:Optional
	DriftDetector DriftModelSpec `json:"driftDetection,omitempty" protobuf:"bytes,17,opt,name=driftDetection"`
	// Aborted indicates that the execution of the Study and associated Models should be permanently stopped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,18,opt,name=aborted"`
	// Reported indicates that a report will be generated for the Study
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,19,opt,name=reported"`
	// Paused indicates that the execution of new workloads associated with the Study should be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,20,opt,name=paused"`
	// Profiled indicates that the Study will be profiled after the conclusion of it's model search
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"varint,21,opt,name=profiled"`
	// ModelPublished indicates that a Docker image will be created containing the best model produced by the Study
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelPublished *bool `json:"modelPublished,omitempty" protobuf:"varint,22,opt,name=modelPublished"`
	// ModelImagePushed indicates that if a Docker image of the best model will be pushed to a Docker image registry
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ModelImagePushed *bool `json:"modelImagePushed,omitempty" protobuf:"varint,23,opt,name=modelImagePushed"`
	// ModelExplained indicates if interpretability diagrams, as specified
	// by the Interpretability field, will be produced for the final model
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ModelExplained *bool `json:"modelExplained,omitempty" protobuf:"varint,24,opt,name=modelExplained"`
	// Fast indicates if Models associated with the Study should skip profiling, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,25,opt,name=fast"`
	// The data location where Study artifacts (metadata, reports, and model artifacts) generated by the Study will be stored
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,26,opt,name=location"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,27,opt,name=owner"`
	// CompilerSpec specifies the configuration to compile the best-selected model to a binary (currently unimplemented)
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,28,opt,name=compilation"`
	// Indicates if the Study is a template, in which case it will not be executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Template *bool `json:"template,omitempty" protobuf:"varint,29,opt,name=template"`
	// Indicates if the Study is flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,30,opt,name=flagged"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,31,opt,name=notification"`
	// ModelImage specifies the configuration to upload Docker images of models to an image registry
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,32,opt,name=modelImage"`
	// GarbageCollectionSpec specifies the configuration to automatically clean-up unused models
	//+kubebuilder:validation:Optional
	GC GarbageCollectionSpec `json:"gc,omitempty" protobuf:"bytes,33,opt,name=gc"`
	// The time-to-live, in seconds, for Model resources produced by the Study
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,34,opt,name=ttl"`
	// ModelVersion specifies the version assigned to all the Model resources produced by the Study
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,35,opt,name=modelVersion"`
	// The time, in seconds, after which the execution of the Study will be forcefully aborted (4 hours, by default)
	// +kubebuilder:default:= 14400
	// +kubebuilder:validation:Optional
	TimeoutInSecs *int32 `json:"timeoutInSecs,omitempty" protobuf:"varint,36,opt,name=timeoutInSecs"`
	// Not implemented. For future use. If true,generate code when the best model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CodeGenerated *bool `json:"codeGenerated,omitempty" protobuf:"varint,37,opt,name=codeGenerated"`
	// A template for models unit tests
	// +kubebuilder:validation:Optional
	UnitTestsTemplate catalog.TestSuite `json:"unitTestsTemplate,omitempty" protobuf:"bytes,38,opt,name=unitTestsTemplate"`
	// In case of a group by, those are the group locations
	// +kubebuilder:validation:Optional
	GroupLocations GroupSplitLocationsSpec `json:"groupLocations,omitempty" protobuf:"bytes,39,opt,name=groupLocations"`
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
	// Reference to the report object that was generated for the dataset, which exists in the same Data Product namespace
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
