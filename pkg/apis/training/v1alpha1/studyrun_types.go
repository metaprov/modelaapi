package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// StudyRunPhase is the current phase of a Study
type StudyRunPhase string

const (
	StudyRunPhaseModelPending      StudyRunPhase = "Pending"
	StudyRunPhasePreparing         StudyRunPhase = "Preparing"
	StudyRunPhasePrepared          StudyRunPhase = "Prepared"
	StudyRunPhaseSplitting         StudyRunPhase = "Splitting"
	StudyRunPhaseSplit             StudyRunPhase = "Split"
	StudyRunPhaseTransforming      StudyRunPhase = "Transforming"
	StudyRunPhaseTransformed       StudyRunPhase = "Transformed"
	StudyRunPhaseBaseline          StudyRunPhase = "Baselining"
	StudyRunPhaseBaselined         StudyRunPhase = "Baselined"
	StudyRunPhaseSearching         StudyRunPhase = "Searching"
	StudyRunPhaseSearched          StudyRunPhase = "Searched"
	StudyRunPhaseCreatingEnsembles StudyRunPhase = "CreatingEnsembles"
	StudyRunPhaseCreatedEnsembles  StudyRunPhase = "CreatedEnsembles"
	StudyRunPhaseTesting           StudyRunPhase = "Testing"
	StudyRunPhaseTested            StudyRunPhase = "Tested"
	StudyRunPhaseUnitTesting       StudyRunPhase = "UnitTesting"
	StudyRunPhaseUnitTested        StudyRunPhase = "UnitTested"
	StudyRunPhaseReported          StudyRunPhase = "Reported"
	StudyRunPhaseReporting         StudyRunPhase = "Reporting"
	StudyRunPhaseProfiling         StudyRunPhase = "Profiling"
	StudyRunPhaseProfiled          StudyRunPhase = "Profiled"
	StudyRunPhaseCompleted         StudyRunPhase = "Completed"
	StudyRunPhaseFailed            StudyRunPhase = "Failed"
	StudyRunPhaseAborted           StudyRunPhase = "Aborted"
	StudyRunPhasePaused            StudyRunPhase = "Paused"
	StudyRunPhasePromoting         StudyRunPhase = "Promoting"
	StudyRunPhasePromoted          StudyRunPhase = "Promoted"
)

// StudyRunCondition describes the state of a Study at a certain point
type StudyRunCondition string

const (
	StudyRunPrepared              StudyRunCondition = "Prepared"
	StudyRunSplit                 StudyRunCondition = "Split"
	StudyRunTransformed           StudyRunCondition = "Transformed"
	StudyRunBaselined             StudyRunCondition = "Baselined"
	StudyRunSearched              StudyRunCondition = "Searched"
	StudyRunEnsembleCreated       StudyRunCondition = "EnsembleCreated"
	StudyRunTested                StudyRunCondition = "Tested"
	StudyRunReported              StudyRunCondition = "Reported"
	StudyRunProfiled              StudyRunCondition = "Profiled"
	StudyRunAborted               StudyRunCondition = "Aborted"
	StudyRunPaused                StudyRunCondition = "Paused"
	StudyRunCompleted             StudyRunCondition = "Completed"
	StudyRunPartitioned           StudyRunCondition = "Partitioned"
	StudyRunModelPromoted         StudyRunCondition = "ModelPromoted"
	StudyRunExternalStatusUpdated StudyRunCondition = "ExternalStatusUpdated"
)

// +kubebuilder:subresource:status
// +kubebuilder:resource:path=studyruns,singular=studyrun,shortName=sr,categories={training,modela}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Phase",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".status.runVersion",priority=1
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".spec.studyName"
// +kubebuilder:printcolumn:name="Best Score",type="number",JSONPath=".status.bestModelScore"
// +kubebuilder:printcolumn:name="Best Model",type="string",JSONPath=".status.bestModel"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// StudyRun represents the single execution of a Study
type StudyRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Spec StudyRunSpec `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status StudyRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// StudyRunSpec defines the run configuration for a Study
type StudyRunSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// DatasetName specifies the name of the Study resource which the run will use to
	// determine the parameters for the model search
	// +kubebuilder:validation:Required
	// +required
	StudyName string `json:"studyName,omitempty" protobuf:"varint,2,opt,name=studyName"`
	// Timout specifies the time in seconds for the run to be completed. If unspecified, the run
	// deadline specified by the Study will be used
	// +kubebuilder:validation:Optional
	Timeout *int64 `json:"timeout,omitempty" protobuf:"varint,3,opt,name=timeout"`
	// If true, the execution of new workloads associated with the run will be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pause *bool `json:"pause,omitempty" protobuf:"varint,4,opt,name=pause"`
	// If true, the run will be permanently aborted and all workloads created by the run will be removed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Abort *bool `json:"abort,omitempty" protobuf:"varint,5,opt,name=abort"`
	// ModelClassRunName specifies the name of the Model Class Run which created the run, if applicable
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,6,opt,name=modelClassRunName"`
}

// StudyStatus defines the observed state of a Study
type StudyRunStatus struct {
	// ObservedGeneration is the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// ManifestLocation specifies the location of the Study manifest used during the course of the snapshot
	ManifestLocation catalog.FileLocation `json:"manifestLocation,omitempty" protobuf:"bytes,2,opt,name=manifestLocation"`
	// ManifestVersion specifies the version of the saved Study manifest
	ManifestVersion catalog.Version `json:"manifestVersion,omitempty" protobuf:"varint,3,opt,name=manifestVersion"`
	// RunVersion specifies the version of the run, which is determined when the Study manifest is saved
	RunVersion catalog.Version `json:"runVersion,omitempty" protobuf:"varint,4,opt,name=runVersion"`
	// The phase of the Study
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase StudyRunPhase `json:"phase" protobuf:"bytes,5,opt,name=phase"`
	// The number of rows in the training dataset
	// +kubebuilder:validation:Optional
	TrainingRowsCount int32 `json:"trainingRowsCount" protobuf:"varint,6,opt,name=trainingRowsCount"`
	// The number of rows in the testing dataset
	// +kubebuilder:validation:Optional
	TestingRowsCount int32 `json:"testingRowsCount" protobuf:"varint,7,opt,name=testingRowsCount"`
	// The number of rows in the validation dataset
	// +kubebuilder:validation:Optional
	ValidationRowsCount int32 `json:"validationRowsCount" protobuf:"varint,8,opt,name=validationRowsCount"`
	// The progress percentage of the Study, which is derived from the Study's current phase
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress" protobuf:"varint,9,opt,name=progress"`
	// Total models created for the study
	// +kubebuilder:validation:Optional
	ModelsCount int32 `json:"modelsCount,omitempty" protobuf:"varint,10,opt,name=modelsCount"`
	// The name of the Model resource which was determined to be the highest-performing
	// +kubebuilder:validation:Optional
	BestModel string `json:"bestModel,omitempty" protobuf:"bytes,11,opt,name=bestModel"`
	// The score of the Model resource which was determined to be the highest-performing
	// +kubebuilder:validation:Optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,12,opt,name=bestModelScore"`
	// ReportName specifies the name of the Report generated by the StudyRun
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,13,opt,name=reportName"`
	// ProfileLocation specifies the location of the profile file produced by the StudyRun
	// +kubebuilder:validation:Optional
	ProfileLocation catalog.FileLocation `json:"profileLocation" protobuf:"bytes,14,opt,name=profileLocation"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation catalog.FileLocation `json:"trainDatasetLocation,omitempty" protobuf:"bytes,15,opt,name=trainDatasetLocation"`
	// TestDatasetLocation specifies the location of the testing dataset
	// +kubebuilder:validation:Optional
	TestDatasetLocation catalog.FileLocation `json:"testDatasetLocation,omitempty" protobuf:"bytes,16,opt,name=testDatasetLocation"`
	// ValidationDatasetLocation specifies the location of the validation dataset
	// +kubebuilder:validation:Optional
	ValidationDatasetLocation *catalog.FileLocation `json:"validationDatasetLocation,omitempty" protobuf:"bytes,17,opt,name=validationDatasetLocation"`
	// OptimizerLocation specifies the location of the optimizer database relevant to the Study
	// +kubebuilder:validation:Optional
	OptimizerLocation *catalog.FileLocation `json:"optimizerLocation,omitempty" protobuf:"bytes,18,opt,name=optimizerLocation"`
	// The Kubernetes-internal ID of the last Model resource generated by the Study
	LastModelID *int64 `json:"lastModelID,omitempty" protobuf:"varint,19,opt,name=lastModelID"`
	// FailureMessage is set to a failure message in the case that an error occurred during the run
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,20,opt,name=failureMessage"`
	// GC specifies the status of garbage collection relevant to the Study
	GC GarbageCollectionStatus `json:"gc,omitempty" protobuf:"bytes,21,opt,name=gc"`
	// TrainingDataHash specifies the hashes for datasets used by the Study
	//+kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,22,opt,name=trainingDataHash"`
	// Logs specifies the location of logs produced by workloads associated with the Study
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,23,opt,name=logs"`
	// BaselineStatus contains the status of the baseline phase
	//+kubebuilder:validation:Optional
	BaselineStatus StudyRunPhaseStatus `json:"baseline,omitempty" protobuf:"bytes,24,opt,name=baseline"`
	// SearchStatus contains the status of the model search phase
	//+kubebuilder:validation:Optional
	SearchStatus StudyRunPhaseStatus `json:"search,omitempty" protobuf:"bytes,25,opt,name=search"`
	// EnsembleStatus contains the status of the ensemble phase
	//+kubebuilder:validation:Optional
	EnsembleStatus StudyRunPhaseStatus `json:"ensemble,omitempty" protobuf:"bytes,26,opt,name=ensemble"`
	// TestStatus contains the status of the testing phase
	//+kubebuilder:validation:Optional
	TestStatus StudyRunPhaseStatus `json:"test,omitempty" protobuf:"bytes,27,opt,name=test"`
	// ExplainStatus contains the status of the explaining phase
	//+kubebuilder:validation:Optional
	ExplainStatus StudyRunPhaseStatus `json:"explain,omitempty" protobuf:"bytes,28,opt,name=explain"`
	// OutlierDetection is the status for outlier detection
	//+kubebuilder:validation:Optional
	OutlierDetection OutlierDetectorStatus `json:"outlierDetection,omitempty" protobuf:"bytes,29,opt,name=outlierDetection"`
	// UpdatedAt specifies the last time the run was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,30,opt,name=updatedAt"`
	// CompletedAt represents the time at which the Study was marked as completed, failed, or aborted
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,31,opt,name=completedAt"`
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

// StudyRunList contains a list of StudyRuns
// +kubebuilder:object:root=true
type StudyRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []StudyRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// StudyRunPhaseStatus contains the statistics for a single phase of a Study
type StudyRunPhaseStatus struct {
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
	Models []ModelResult `json:"models,omitempty" patchStrategy:"merge" patchMergeKey:"name" protobuf:"bytes,2,rep,name=models"`
}

type OutlierDetectorStatus struct {
	// The location of the drift detector model
	OutlierModelLocation string `json:"outlierModelURI,omitempty" protobuf:"bytes,1,opt,name=outlierModelURI"`
}
