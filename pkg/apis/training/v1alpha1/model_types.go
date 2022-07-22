package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase specifies the current phase of a Model
type ModelPhase string

const (
	ModelPhaseFailed                ModelPhase = "Failed"
	ModelPhasePending               ModelPhase = "Pending"
	ModelPhaseTraining              ModelPhase = "Training"
	ModelPhaseTrained               ModelPhase = "Trained"
	ModelPhaseTesting               ModelPhase = "Testing"
	ModelPhaseTested                ModelPhase = "Tested"
	ModelPhaseReporting             ModelPhase = "Reporting"
	ModelPhaseReported              ModelPhase = "Reported"
	ModelPhaseCompleted             ModelPhase = "Completed"
	ModelPhasePublishing            ModelPhase = "Publishing"
	ModelPhasePublished             ModelPhase = "Published"
	ModelPhasePackaging             ModelPhase = "Packaging"
	ModelPhasePackaged              ModelPhase = "Packaged"
	ModelPhaseProfiling             ModelPhase = "Profiling"
	ModelPhaseProfiled              ModelPhase = "Profiled"
	ModelPhaseExplaining            ModelPhase = "Explaining"
	ModelPhaseExplained             ModelPhase = "Explained"
	ModelPhaseAborted               ModelPhase = "Aborted"
	ModelPhaseForecasting           ModelPhase = "Forecasting"
	ModelPhaseForecasted            ModelPhase = "Forecasted"
	ModelPhaseUat                   ModelPhase = "UAT"
	ModelPhaseDeployed              ModelPhase = "Deployed"
	ModelPhaseReleasing             ModelPhase = "Releasing"
	ModelPhaseChampion              ModelPhase = "ModelRoleLive"
	ModelPhaseCanary                ModelPhase = "Canary"
	ModelPhaseShadow                ModelPhase = "ModelRoleShadow"
	ModelPhaseMaintenance           ModelPhase = "Maintenance"
	ModelPhaseRetired               ModelPhase = "Retired"
	ModelPhaseTrainingDriftDetector ModelPhase = "TrainingDriftDetector"
	ModelPhaseTrainedDriftDetector  ModelPhase = "TrainedDriftDetector"
	ModelPhasePruned                ModelPhase = "Pruned"
)

// ModelConditionType specifies the current condition of a Model
type ModelConditionType string

/// Model
const (
	// ModelInitialized states that the Model is populated with an algorithm and hyper-parameters
	ModelInitialized ModelConditionType = "Initialized"
	// ModelTrained states that the Model was trained on a training dataset, and validated against a validation dataset
	ModelTrained ModelConditionType = "Trained"
	// ModelTested states that the Model was trained on the training dataset, and tested against the testing dataset
	ModelTested ModelConditionType = "Tested"
	// ModelReported states that a Report for the Model was generated and uploaded to a bucket
	ModelReported ModelConditionType = "Reported"
	// ModelPackaged states that the Model was baked into a Docker image
	ModelPackaged ModelConditionType = "Packaged"
	// ModelPublished states the the Model was baked into a Docker image and published to a Docker image repository
	ModelPublished ModelConditionType = "Published"
	// ModelProfiled states that the Model was profiled
	ModelProfiled ModelConditionType = "Profiled"
	// ModelReady states that the Model is ready for deployment
	ModelReady ModelConditionType = "Ready"
	// ModelSaved states that the Model artifacts were saved to a bucket
	ModelSaved ModelConditionType = "Saved"
	// ModelArchived states that the Model artifacts were archived to a bucket
	ModelArchived ModelConditionType = "Archived"
	// ModelExplained states that SHAP values were computed for the Model and diagrams were generated with them
	ModelExplained ModelConditionType = "Explained"
	// ModelReleased states that the Model has been added to a Predictor and awaiting deployment
	ModelReleased ModelConditionType = "Released"
	// ModelAborted states that training was aborted
	ModelAborted ModelConditionType = "Aborted"
	// ModelPaused states that training was paused
	ModelPaused     ModelConditionType = "Paused"
	ModelForecasted ModelConditionType = "Forecasted"
	// ModelUat states that the Model is being used within a user acceptance test
	ModelUat ModelConditionType = "UAT"
	// ModelLive states that the Model is active and serving predictions
	ModelLive                 ModelConditionType = "Live"
	ModelStale                ModelConditionType = "Stale"
	ModelMaintenance          ModelConditionType = "Maintenance"
	ModelRetired              ModelConditionType = "Retired"
	ModelTrainedDriftDetector ModelConditionType = "TrainedDriftDetector"
	ModelPruned               ModelConditionType = "Pruned" // If the model was pruned by the optimizer
)

// ModelCondition describes the state of a Model at a certain point
type ModelCondition struct {
	// Type of Model condition
	Type ModelConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human-readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// Model represents a machine learning model that will be trained, evaluated, and deployed by Modela.
// Model resources are generated by the Modela data plane and cannot be created manually
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="string",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Best",type="boolean",JSONPath=".status.best"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName",priority=1
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".spec.studyName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",priority=1
// +kubebuilder:printcolumn:name="Algorithm",type="string",JSONPath=".spec.estimator.algorithmName"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.objective"
// +kubebuilder:printcolumn:name="CV Score",type="number",JSONPath=".status.cvScore"
// +kubebuilder:printcolumn:name="Train Score",type="number",JSONPath=".status.trainScore",priority=1
// +kubebuilder:printcolumn:name="Test Score",type="number",JSONPath=".status.testScore"
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.failureMessage",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=models,singular=model,shortName=md,categories={training,modela,all}
type Model struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelList is a list of Models
type ModelList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Model `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelSpec defines the desired state of the Model resource
type ModelSpec struct {
	// The Account which owns the the Study that created the Model
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource, derived from the parent Study
	// +kubebuilder:validation:Required
	// +kubebuilder:default:="latest"
	// +kubebuilder:validation:MaxLength=63
	// +required
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// The user-assigned version of the Model, derived from the parent Study
	// +kubebuilder:default:=""
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,4,opt,name=modelVersion"`
	// The name of the Study which created the Model. If empty, the Model will be trained as a stand-alone model
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +required
	StudyName *string `json:"studyName,omitempty" protobuf:"bytes,5,opt,name=studyName"`
	// The name of the Entity resource which the Model is being trained with
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +required
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,6,opt,name=datasetName"`
	// The machine learning task type of the Model (i.e. regression, classification), derived from the parent Study
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,7,opt,name=task"`
	// The sub task
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,8,opt,name=subtask"`
	// The objective metric that will be used to evaluate the performance of the model
	// +kubebuilder:validation:Required
	// +required
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,9,opt,name=objective"`
	// FeatureEngineering specifies the preprocessing pipelines that will be applied to the model prior to training.
	// By default, feature engineering is generated automatically by sampling different pipelines in competition
	// +kubebuilder:validation:Optional
	FeatureEngineering FeatureEngineeringSpec `json:"featureEngineering,omitempty" protobuf:"bytes,10,opt,name=featureEngineering"`
	// Estimator specifies the machine learning algorithm and hyper-parameters of the Model
	// +kubebuilder:validation:Optional
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,11,opt,name=estimator"`
	// Dnn specifies the estimator for a neural network (currently unimplemented)
	// +kubebuilder:validation:Optional
	Dnn *DeepEstimatorSpec `json:"dnn,omitempty" protobuf:"bytes,12,opt,name=dnn"`
	// Chatbot specifies the estimator for a chatbot model (currently unimplemented)
	// +kubebuilder:validation:Optional
	Chatbot *ChatbotEstimatorSpec `json:"chatbot,omitempty" protobuf:"bytes,13,opt,name=chatbot"`
	// NLPEstimator specifies the estimator for a deep NLP model (currently unimplemented)
	// +kubebuilder:validation:Optional
	NLPEstimator *NLPEstimatorSpec `json:"nplEstimator,omitempty" protobuf:"bytes,14,opt,name=nlpEstimator"`
	// Ensemble specifies the configuration to create an ensemble model
	// +kubebuilder:validation:Optional
	Ensemble EnsembleSpec `json:"ensemble,omitempty" protobuf:"bytes,15,opt,name=ensemble"`
	// TrainingSpec specifies the configuration to prepare and train a model
	// +kubebuilder:validation:Optional
	Training TrainingSpec `json:"training,omitempty" protobuf:"bytes,16,opt,name=training"`
	// ServingSpec defines the resource requirements that will be applied to a Predictor
	// that will be created if the model is set to be released
	// +kubebuilder:validation:Optional
	Serving ServingSpec `json:"serving,omitempty" protobuf:"bytes,17,opt,name=serving"`
	// Tested indicates if a workload will be instantiated to test the model. The Study resource controller
	// will automatically set this field if the Model was found to be the highest-performing
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Tested *bool `json:"tested,omitempty" protobuf:"varint,18,opt,name=tested"`
	// Aborted indicates if any workloads associated with the Model should stop execution
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,19,opt,name=aborted"`
	// Packaged indicates if the Model should be packaged into tarbell
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Packaged *bool `json:"packaged,omitempty" protobuf:"varint,20,opt,name=packaged"`
	// Published indicates that the Model should be baked into a Docker image
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Published *bool `json:"published,omitempty" protobuf:"varint,21,opt,name=published"`
	// Pushed indicates that the Model image should be pushed to a Docker image registry
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pushed *bool `json:"pushed,omitempty" protobuf:"varint,22,opt,name=pushed"`
	// Reported indicates that a Report will be generated for the Model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,23,opt,name=reported"`
	// Paused indicates that the execution of new workloads associated with the Model should be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,24,opt,name=paused"`
	// Profiled indicates that the Model will be profiled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"varint,25,opt,name=profiled"`
	// Archived indicates that the Model should be archived in long-term storage
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Archived *bool `json:"archived,omitempty" protobuf:"varint,26,opt,name=archived"`
	// Forecasted indicates that the Model should perform a forecast
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecasted *bool `json:"forecasted,omitempty" protobuf:"varint,27,opt,name=forecasted"`
	// Released indicates that the Model will be deployed within Predictor
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Released *bool `json:"released,omitempty" protobuf:"varint,28,opt,name=released"`
	// Explained indicates if a workload to compute SHAP values/diagrams should be executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Explained *bool `json:"explained,omitempty" protobuf:"varint,29,opt,name=explained"`
	// Not implemented. For future use. If true,generate code when model trained
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CodeGenerated *bool `json:"codeGenerated,omitempty" protobuf:"varint,30,opt,name=codeGenerated"`
	// Baseline indicates if the Model was produced by the baseline phase of a Study
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Baseline *bool `json:"baseline,omitempty" protobuf:"varint,31,opt,name=baseline"`
	// GenDriftDetector indicates if we should generate a drift detector model for this model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	GenDriftDetector *bool `json:"genDriftDetector,omitempty" protobuf:"varint,32,opt,name=genDriftDetector"`
	// Fast indicates if the Model should skip profiling, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,33,opt,name=fast"`
	// Indicates if the model is flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,34,opt,name=flagged"`
	// The data location where artifacts (metadata, reports, and estimators) generated by the Model will be stored
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,35,opt,name=location"`
	// Forecasting specifies the configuration to train a forecasting model
	// +kubebuilder:validation:Optional
	Forecasting *ForecastSpec `json:"forecast,omitempty" protobuf:"bytes,36,opt,name=forecast"`
	// Compilation specifies the configuration to compile a model to a binary (currently unimplemented)
	// +kubebuilder:validation:Optional
	Compilation *catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,37,opt,name=compilation"`
	// The deadline for any Jobs associated with the Model to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,38,opt,name=activeDeadlineSeconds"`
	// ModelType is the type of model for this estimator
	// +kubebuilder:default:=classical
	// +kubebuilder:validation:Optional
	EstimatorType *catalog.ModelType `json:"estimatorType,omitempty" protobuf:"bytes,39,opt,name=estimatorType"`
	// The time-to-live of the Model, after which the Model will be archived
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,40,opt,name=ttl"`
	// The model class, which is derived from the phase of the Study that the Model was created for
	// +kubebuilder:validation:Optional
	ModelClass catalog.ModelClassType `json:"modelClass,omitempty" protobuf:"bytes,41,opt,name=modelClass"`
	// The trial ID, which is incremented for each Model produced by the data plane
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TrialID *int32 `json:"trialID,omitempty" protobuf:"varint,42,opt,name=trialID"`
	// Governance specifies the model governance requirements (currently unimplemented)
	// +kubebuilder:validation:Optional
	Governance *data.GovernanceSpec `json:"governance,omitempty" protobuf:"bytes,43,opt,name=governance"`
	// Interpretability specifies the configuration to generate model interpretability visualizations
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,44,opt,name=interpretability"`
	// Interpretability specifies the configuration to generate model interpretability visualizations
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,45,opt,name=unitTests"`
}

// EnsembleSpec specifies the parameters of an ensemble model
type EnsembleSpec struct {
	// The collection of models (by their name) to be used as estimators in the ensemble
	// +kubebuilder:validation:Optional
	Models []string `json:"models,omitempty" protobuf:"bytes,1,rep,name=models"`
	// The collection of estimators to be used in the ensemble, derived from Models
	// +kubebuilder:validation:Optional
	Estimators []ClassicalEstimatorSpec `json:"estimators,omitempty" protobuf:"bytes,2,rep,name=estimators"`
	// The base estimator
	// +kubebuilder:validation:Optional
	Final *ClassicalEstimatorSpec `json:"final,omitempty" protobuf:"bytes,3,rep,name=final"`
	// The ensemble type method
	// +kubebuilder:validation:Optional
	Type *catalog.EnsembleType `json:"type,omitempty" protobuf:"bytes,4,rep,name=type"`
}

// ModelStatus defines the observed state of a Model
type ModelStatus struct {
	// StartTime represents the time at which the execution of the Model started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// TrainStartTime represents the time at which the Model started training
	// +kubebuilder:validation:Optional
	TrainingStartTime *metav1.Time `json:"trainingStartTime,omitempty" protobuf:"bytes,2,opt,name=trainingStartTime"`
	// TrainCompletionTime represents the time at which the Model completed training
	// +kubebuilder:validation:Optional
	TrainingEndTime *metav1.Time `json:"trainingEndTime,omitempty" protobuf:"bytes,3,opt,name=trainingEndTime"`
	// TestingStartTime represents the time at which the Model started testing
	// +kubebuilder:validation:Optional
	TestingStartTime *metav1.Time `json:"testingStartTime,omitempty" protobuf:"bytes,4,opt,name=testingStartTime"`
	// TestingEndTime represents the time at which the Model completed testing
	// +kubebuilder:validation:Optional
	TestingEndTime *metav1.Time `json:"testingEndTime,omitempty" protobuf:"bytes,5,opt,name=testingEndTime"`
	// EndTime represents the time at which the Model was marked as ready, failed, or aborted
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,6,opt,name=endTime"`
	// The cross-validation score for the objective metric produced after training
	// +kubebuilder:validation:Optional
	CVScore float64 `json:"cvScore,omitempty" protobuf:"bytes,7,opt,name=cvScore"`
	// The score for the objective metric based on the training dataset
	// +kubebuilder:validation:Optional
	TrainingScore float64 `json:"trainingScore,omitempty" protobuf:"bytes,8,opt,name=trainingScore"`
	// The score for the objective metric based on the testing dataset
	// +kubebuilder:validation:Optional
	TestScore float64 `json:"testScore,omitempty" protobuf:"bytes,9,opt,name=testScore"`
	// Cost is the cost of training the model in the case of a deep-learning model
	// +kubebuilder:validation:Optional
	Cost float64 `json:"cost,omitempty" protobuf:"bytes,10,opt,name=cost"`
	// Best indicates if the Model was found to be the best model produced by a Study
	// +kubebuilder:validation:Optional
	Best bool `json:"best,omitempty" protobuf:"varint,11,opt,name=best"`
	// CV contains the collection of measurements produced by cross-validation
	// on the training dataset or validation on the validation dataset
	// +kubebuilder:validation:Optional
	CV []catalog.Measurement `json:"cv,omitempty" protobuf:"bytes,12,rep,name=cv"`
	// Train contains the collection of measurements produced by validation on the training dataset
	// +kubebuilder:validation:Optional
	Train []catalog.Measurement `json:"train,omitempty" protobuf:"bytes,13,rep,name=train"`
	// Train contains the collection of measurements produced by validation on the testing dataset
	// +kubebuilder:validation:Optional
	Test []catalog.Measurement `json:"test,omitempty" protobuf:"bytes,14,rep,name=test"`
	// The phase of the Model
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelPhase `json:"phase" protobuf:"bytes,15,opt,name=phase"`
	// The name of the Report resource produced by the Model
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,16,opt,name=reportName"`
	// The URI of the Report
	// +kubebuilder:validation:Optional
	ReportUri string `json:"reportUri,omitempty" protobuf:"bytes,17,opt,name=reportUri"`
	// The URI of the Model manifest
	// +kubebuilder:validation:Optional
	ManifestUri string `json:"manifestUri,omitempty" protobuf:"bytes,18,opt,name=manifestUri"`
	// The URI of the model weights binary file
	// +kubebuilder:validation:Optional
	WeightsUri string `json:"weightsUri,omitempty" protobuf:"bytes,19,opt,name=weightsUri"`
	// The URI of the label encoder binary file, if it exists
	// +kubebuilder:validation:Optional
	LabelEncoderUri string `json:"labelEncoderUri,omitempty" protobuf:"bytes,20,opt,name=labelEncoderUri"`
	// The URI of the logs file
	// +kubebuilder:validation:Optional
	LogsUri string `json:"logsUri,omitempty" protobuf:"bytes,21,opt,name=logsUri"`
	// The URI of the model profile, which contains visualizations produced during the profiling phase
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,22,opt,name=profileUri"`
	// The URI to the misclassification file produced during the testing phase
	// +kubebuilder:validation:Optional
	MisclassificationUri string `json:"misclassificationUri" protobuf:"bytes,23,opt,name=misclassificationUri"`
	// The URI to the model tarbell file
	// +kubebuilder:validation:Optional
	TarUri string `json:"tarUri" protobuf:"bytes,24,opt,name=tarUri"`
	// The URI to the model application file
	// +kubebuilder:validation:Optional
	AppUri string `json:"appUri" protobuf:"bytes,25,opt,name=appUri"`
	// The name of the Docker image produced by the Model
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName" protobuf:"bytes,26,opt,name=imageName"`
	// The collection of features and their importance, sorted by the greatest importance first
	// The collection is measured based on impuriry and uses the native measures by a tree algorithm
	// +kubebuilder:validation:Optional
	ImpurityImportance []FeatureImportance `json:"impurityImportance,,omitempty" protobuf:"bytes,27,rep,name=importance"`
	// The collection of features and their importance, sorted by the greatest importance first
	// The collection is measured using permutation importance
	// +kubebuilder:validation:Optional
	PermutationImportance []FeatureImportance `json:"permutationImportance,omitempty" protobuf:"bytes,28,rep,name=permutationImportance"`
	// The URI of the model forecast
	// +kubebuilder:validation:Optional
	ForecastUri string `json:"forecastUri,omitempty" protobuf:"bytes,29,opt,name=forecastUri"`
	// The runtime training details.
	// +kubebuilder:validation:Optional
	Runtime RuntimeStatus `json:"runtime,omitempty" protobuf:"bytes,30,opt,name=runtime"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,32,opt,name=trainDataset"`
	// TestDatasetLocation specifies the location of the testing dataset
	// +kubebuilder:validation:Optional
	TestDatasetLocation data.DataLocation `json:"testDataset,omitempty" protobuf:"bytes,33,opt,name=testDataset"`
	// ValidationDataset specifies the location of the validation dataset
	// +kubebuilder:validation:Optional
	ValidationDataset data.DataLocation `json:"validationDataset,omitempty" protobuf:"bytes,34,opt,name=validationDataset"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,35,opt,name=observedGeneration"`
	// The number of rows in the training dataset
	// +kubebuilder:validation:Optional
	TrainingRows int32 `json:"trainingRows" protobuf:"varint,36,opt,name=trainingRows"`
	// The number of rows in the testing dataset
	// +kubebuilder:validation:Optional
	TestingRows int32 `json:"testingRows" protobuf:"varint,37,opt,name=testingRows"`
	// The number of rows in the validation dataset, if applicable
	// +kubebuilder:validation:Optional
	ValidationRows int32 `json:"validationRows" protobuf:"varint,38,opt,name=validationRows"`
	// In the case of failure, the Model resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,39,opt,name=failureReason"`
	// In the case of failure, the Model resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,40,opt,name=failureMessage"`
	// The progress percentage of the Model, which is derived from the Model's current phase
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,41,opt,name=progress"`
	// The size of the model binary in bytes
	// +kubebuilder:validation:Optional
	SizeInBytes int32 `json:"sizeInBytes,omitempty" protobuf:"varint,42,opt,name=sizeInBytes"`
	// The measured prediction latency
	// +kubebuilder:validation:Optional
	Latency float64 `json:"latency,omitempty" protobuf:"bytes,43,opt,name=latency"`
	// The URL to the released model
	// +kubebuilder:validation:Optional
	URL string `json:"url,omitempty" protobuf:"bytes,44,opt,name=url"`
	// The name of the Predictor in the case that the Model has been released and deployed
	// +kubebuilder:validation:Optional
	PredictorName string `json:"predictorName,omitempty" protobuf:"bytes,45,opt,name=predictorName"`
	// The time at which the Model was set to release
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,46,opt,name=releasedAt"`
	// Sha256 of the model tar file
	// +kubebuilder:validation:Optional
	TarFileHash string `json:"tarFileHash,omitempty" protobuf:"bytes,47,opt,name=tarFileHash"`
	// Sha256 of the model image
	// +kubebuilder:validation:Optional
	ImageHash string `json:"imageHash,omitempty" protobuf:"bytes,48,opt,name=imageHash"`
	// TrainingDataHash specifies the hashes for datasets used by the Model
	// +kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,49,opt,name=trainingDataHash"`
	// TrainingResources details the resources that were consumed by the training workload
	// +kubebuilder:validation:Optional
	TrainingResources ResourceConsumption `json:"trainingResources,omitempty" protobuf:"bytes,50,opt,name=trainingResources"`
	// TestingResources details the resources that were consumed by the testing workload
	// +kubebuilder:validation:Optional
	TestingResources ResourceConsumption `json:"testingResources,omitempty" protobuf:"bytes,51,opt,name=testingResources"`
	// The Account which trained the model, derived from the parent Study
	// +kubebuilder:validation:Optional
	TrainedBy string `json:"trainedBy,omitempty" protobuf:"bytes,52,opt,name=trainedBy"`
	// The team of the Account which trained the model, derived from the parent Study
	// +kubebuilder:validation:Optional
	Team string `json:"team,omitempty" protobuf:"bytes,53,opt,name=team"`
	// The endpoint of the Model, which is set after it is deployed to a Predictor
	// +kubebuilder:validation:Optional
	EndPoint string `json:"endpoint,omitempty" protobuf:"bytes,57,opt,name=endpoint"`
	// Logs specifies the location of logs produced by workloads associated with the Model
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,58,opt,name=logs"`
	// The Roc/Auc curve of the trained model
	// +kubebuilder:validation:Optional
	RocCurve catalog.RocAucCurve `json:"rocCurve,omitempty" protobuf:"bytes,59,opt,name=rocCurve"`
	// The Precision/Recall curve of the trained model
	// +kubebuilder:validation:Optional
	PRCurve catalog.PRCurve `json:"prCurve,omitempty" protobuf:"bytes,60,opt,name=prCurve"`
	// The confusion matrix of the train data.
	// +kubebuilder:validation:Optional
	TrainConfusionMatrix catalog.ConfusionMatrix `json:"trainConfusionMatrix,omitempty" protobuf:"bytes,61,opt,name=trainConfusionMatrix"`
	// The confusion matrix of the test data
	// +kubebuilder:validation:Optional
	TestConfusionMatrix catalog.ConfusionMatrix `json:"testConfusionMatrix,omitempty" protobuf:"bytes,62,opt,name=testConfusionMatrix"`
	// The collection of correlations of the features of the training dataset and the target feature
	// +kubebuilder:validation:Optional
	CorrelationsWithTarget []data.Correlation `json:"correlationsWithTarget,omitempty" protobuf:"bytes,63,rep,name=correlationsWithTarget"`
	// The top correlations between features of the training dataset
	// +kubebuilder:validation:Optional
	TopCorrelations []data.Correlation `json:"topCorrelations,omitempty" protobuf:"bytes,64,rep,name=topCorrelations"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,65,opt,name=lastUpdated"`
	// Governance specifies the current governance status for the Model
	// +kubebuilder:validation:Optional
	Governance data.GovernanceStatus `json:"governance,omitempty" protobuf:"bytes,66,opt,name=governanceStatus"`
	// Interpretability contains results produced during the explaining phase of the Model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilityStatus `json:"interpretability,omitempty" protobuf:"bytes,67,opt,name=interpretability"`
	// Images specifies the container images used to train the model
	// +kubebuilder:validation:Optional
	Images catalog.Images `json:"images,omitempty" protobuf:"bytes,68,opt,name=images"`
	// Interpretability specifies the configuration to generate model interpretability visualizations
	// +kubebuilder:validation:Optional
	TestsResult catalog.TestSuite `json:"testsResult,omitempty" protobuf:"bytes,69,opt,name="`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,70,rep,name=conditions"`
}

// Holds the information about the execution environment.
type RuntimeStatus struct {
	// The Python version of the data plane used during training
	// +kubebuilder:validation:Optional
	PythonVersion string `json:"pythonVersion,omitempty" protobuf:"bytes,1,opt,name=pythonVersion"`

	// The python command line
	// +kubebuilder:validation:Optional
	PythonCMD string `json:"pythonCmd,omitempty" protobuf:"bytes,2,opt,name=pythonCmd"`

	// The OS
	// +kubebuilder:validation:Optional
	OS string `json:"os,omitempty" protobuf:"bytes,3,opt,name=os"`

	// The Python packages used during training (which is the result of running pip freeze)
	// +kubebuilder:validation:Optional
	PythonPackages map[string]string `json:"pythonPackages,omitempty" protobuf:"bytes,4,opt,name=pythonPackages"`
}

// HyperParameterValue represent an individual hyper-parameter of a machine earning algorithm
type HyperParameterValue struct {
	// The name of the hyper-parameter
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// The value of the hyper-parameter
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}

// ClassicalEstimatorSpec is the specification for an algorithm and the actual value fof the hyper parameters
type ClassicalEstimatorSpec struct {
	// AlgorithmName is a reference to the algorithm in the catalog
	AlgorithmName string `json:"algorithmName,omitempty" protobuf:"bytes,1,opt,name=algorithmName"`
	// Parameters is a list of the algorithm hyper parameters
	Parameters []HyperParameterValue `json:"parameters,omitempty" protobuf:"bytes,2,rep,name=parameters,casttype=HyperParameterValue"`
}

// ChatbotEstimatorSpec specifies the configuration for a chatbot model
type ChatbotEstimatorSpec struct {
	// The name of the base model
	// +kubebuilder:validation:Optional
	Base *string `json:"base,omitempty" protobuf:"bytes,1,opt,name=base"`
}

// NLPEstimatorSpec specifies the configuration for an NLP model
type NLPEstimatorSpec struct {
	// The name of the base model
	// +kubebuilder:validation:Optional
	Base *string `json:"base,omitempty" protobuf:"bytes,1,opt,name=base"`
}

// FeatureEngineeringSpec specifies the feature engineering and preprocessing to be performed on a dataset
type FeatureEngineeringSpec struct {
	// Pipelines contains the collection of feature engineering pipelines that
	// will be applied to a dataset prior to model training
	// +kubebuilder:validation:Optional
	Pipelines []FeatureEngineeringPipeline `json:"pipelines,omitempty" protobuf:"bytes,1,rep,name=pipelines"`
	// The method which will be used to handle an imbalanced dataset
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imbalance *catalog.ImbalanceHandling `json:"imbalance,omitempty" protobuf:"bytes,2,opt,name=imbalance"`
	// FeatureSelection specifies the configuration to perform
	// feature selection on a dataset prior to model training
	// +kubebuilder:validation:Optional
	FeatureSelection FeatureSelectionSpec `json:"selection,omitempty" protobuf:"bytes,3,opt,name=selection"`
}

// FeatureEngineeringPipeline represent a single pipeline to transform a dataset
type FeatureEngineeringPipeline struct {
	// The name of the pipeline
	// +kubebuilder:validation:Required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The type of data which the pipeline applies to
	// +kubebuilder:validation:Required
	// +required
	DataType catalog.DataType `json:"datatype,omitempty" protobuf:"bytes,2,opt,name=datatype"`
	// The collection of columns which the pipeline applies to. Each column in the dataset with the
	// data type of the pipeline should be added to the collection of columns
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,3,rep,name=columns"`
	// The imputation method to use, which fills in missing values within the columns
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Imputation *catalog.Imputation `json:"imputation,omitempty" protobuf:"bytes,4,opt,name=imputation"`
	// The encoding method to use for categorical data types
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Encoding *catalog.CategoricalEncoding `json:"encoding,omitempty" protobuf:"bytes,5,opt,name=encoding"`
	// The scaling method to use for numerical data types
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Scaling *catalog.Scaling `json:"scaling,omitempty" protobuf:"bytes,6,opt,name=scaling"`
	// The discretisation method, which converts numerical data types to discrete variables
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Discretisation *catalog.Discretisation `json:"discretisation,omitempty" protobuf:"bytes,7,opt,name=discretisation"`
	// The transformation method to use for numerical data types
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	VariableTransformation *catalog.VariableTransformation `json:"variableTransformation,omitempty" protobuf:"bytes,8,opt,name=variableTransformation"`
	// The method to use when handling outliers
	// +kubebuilder:default:=none
	// Apply only to numeric data types.
	OutlierHandling *catalog.OutlierHandling `json:"outlierHandling,omitempty" protobuf:"bytes,9,opt,name=outlierHandling"`
	// The method to use when handling the date-time data type
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	DatetimeTransformation *catalog.DatetimeTransformation `json:"datetimeTransformation,omitempty" protobuf:"bytes,10,opt,name=datetimeTransformation"`
	// Text specifies the pipeline to handle raw text
	// +kubebuilder:validation:Optional
	Text *TextPipelineSpec `json:"text,omitempty" protobuf:"bytes,11,opt,name=text"`
	// Image specifies the pipeline to handle image data (currently unsupported)
	// +kubebuilder:validation:Optional
	Image *ImagePipelineSpec `json:"image,omitempty" protobuf:"bytes,12,opt,name=image"`
	// Audio specifies the pipeline to handle audio data (currently unsupported)
	// +kubebuilder:validation:Optional
	Audio *AudioPipelineSpec `json:"audio,omitempty" protobuf:"bytes,13,opt,name=audio"`
	// Video specifies the pipeline to handle video data (currently unsupported)
	// +kubebuilder:validation:Optional
	Video *VideoPipelineSpec `json:"video,omitempty" protobuf:"bytes,14,opt,name=video"`
	// Generated specifies a collection of columns to be generated
	// +kubebuilder:validation:Optional
	Genereted []GeneratedColumnSpec `json:"generated,omitempty" protobuf:"bytes,15,rep,name=generated"`
	// Custom specifies a collection of columns to be generated. Custom columns are specified by end-users
	Custom []GeneratedColumnSpec `json:"custom,omitempty" protobuf:"bytes,16,rep,name=custom"`
	// Indicates if all of all the columns specified by the Columns field should be dropped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Drop *bool `json:"drop,omitempty" protobuf:"varint,17,opt,name=drop"`
	// Indicates if the pipeline should not be applied and the columns should remain unchanged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Passthrough *bool `json:"passthrough,omitempty" protobuf:"varint,18,opt,name=passthrough"`
}

// FeatureImportance records the computed importance of a single feature
type FeatureImportance struct {
	// The name of the feature
	Feature string `json:"feature,omitempty" protobuf:"bytes,1,opt,name=feature"`
	// The importance of the feature
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,2,opt,name=importance"`
}

// SuccessiveHalvingSpec records the position of a single model in a successive halving search
type SuccessiveHalvingSpec struct {
	// The budget to be used in a multi-fidelity search, for example the number of epochs
	// or the percentage of data to train the model with
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Budget *int32 `json:"budget,omitempty" protobuf:"varint,1,opt,name=budget"`
	// The bracket of the model
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Bracket *int32 `json:"bracket,omitempty" protobuf:"varint,2,opt,name=bracket"`
	// The rung of the model
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Rung *int32 `json:"rung,omitempty" protobuf:"varint,3,opt,name=rung"`
	// The configuration ID allocated to the model
	// +kubebuilder:validation:Optional
	ConfID *int32 `json:"confID,omitempty" protobuf:"varint,4,opt,name=confID"`
	// The type of modality, based on the type of model
	// For classical models, it should be based on data percentage
	// For deep models, it should be based on epochs
	// +kubebuilder:validation:Optional
	Modality *catalog.ModalityType `json:"modality,omitempty" protobuf:"bytes,26,opt,name=modality"`
}

// DataSplitSpec specifies the configuration to split a dataset into training and testing datasets
type DataSplitSpec struct {
	// The type of split method
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Method *catalog.DataSplitMethod `json:"method,omitempty" protobuf:"bytes,1,opt,name=method"`
	// The number percentage (0 through 100) of rows that will be allocated to the training dataset
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=80
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	Train *int32 `json:"train,omitempty" protobuf:"varint,2,opt,name=train"`
	// The number percentage (0 through 100) of rows that will be allocated to the validation dataset.
	// If Validation is set to 0 the model will default to use cross-validation
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Maximum=50
	// +kubebuilder:validation:Optional
	Validation *int32 `json:"validation,omitempty" protobuf:"varint,3,opt,name=validation"`
	// The number percentage (0 through 100) of rows that will be allocated to the training dataset
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:default:=20
	// +kubebuilder:validation:Optional
	Test *int32 `json:"test,omitempty" protobuf:"varint,4,opt,name=test"`
	// The name of the column containing a binary value that indicates if the row should be split.
	// The split type must use split-column in order for SplitColumn to have an effect
	// +kubebuilder:validation:Optional
	SplitColumn *string `json:"splitColumn,omitempty" protobuf:"bytes,5,opt,name=splitColumn"`
	// The collection of segments
	// +kubebuilder:validation:Optional
	Segments []SegmentSpec `json:"segments,omitempty" protobuf:"bytes,6,rep,name=segments"`
	// The name of the Entity resource which will be used as the training dataset
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TrainDatasetName *string `json:"trainDataset,omitempty" protobuf:"bytes,7,rep,name=trainDataset"`
	// The name of the Entity resource which will be used as the testing dataset, applicable
	// if the split type uses test-dataset. If enabled, the training dataset will not be split and used as-is
	// If empty, we will not use test dataset
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TestDatasetName *string `json:"testDataset,omitempty" protobuf:"bytes,8,rep,name=testDataset"`
	// The name of the Entity resource which will be used as the validation dataset, applicable
	// if the split type uses test-dataset. If enabled, the training dataset will not be split and used as-is
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ValidationDatasetName *string `json:"validationDataset,omitempty" protobuf:"bytes,9,rep,name=validationDataset"`
}

// TrainingSpec specifies the configuration of a model training workload
type TrainingSpec struct {
	// The reference to the Lab under which the model training Job will be created
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,1,opt,name=labRef"`
	// The priority of the Kubernetes Job created by the Model (medium, by default)
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="medium"
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,2,opt,name=priority"`
	// The type of cross-validation to use, in the case that a validation dataset is not enabled
	// +kubebuilder:default:=kfold
	// +kubebuilder:validation:Optional
	CvType *catalog.CvType `json:"cvtype,omitempty" protobuf:"bytes,3,opt,name=cvtype"`
	// Indicates if cross-validation should be used to score models
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	CV *bool `json:"cv,omitempty" protobuf:"varint,4,opt,name=cV"`
	// The number of folds to use during cross-validation
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	Folds *int32 `json:"folds,omitempty" protobuf:"varint,5,opt,name=folds"`
	// Split specifies the configuration to generate training, testing, and validation datasets
	// +kubebuilder:validation:Optional
	Split DataSplitSpec `json:"split,omitempty" protobuf:"bytes,6,opt,name=split"`
	// EvalMetrics specifies the collection of metrics that will be evaluated after model training is complete
	// +kubebuilder:validation:Optional
	EvalMetrics []catalog.Metric `json:"evalMetrics,omitempty" protobuf:"bytes,7,rep,name=evalMetrics"`
	// SuccessiveHalving specifies the configuration for a Study to execute a model search using successive halving
	// +kubebuilder:validation:Optional
	SH *SuccessiveHalvingSpec `json:"sh,omitempty" protobuf:"bytes,10,opt,name=sh"`
	// The random state used for the model's estimator, if applicable (for example, in RandomForestClassifier)
	// +kubebuilder:default:=42
	// +kubebuilder:validation:Optional
	Seed *float64 `json:"seed,omitempty" protobuf:"bytes,11,opt,name=seed"`
	// Resources specifies the resource requirements allocated to the model training workload
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,12,opt,name=resources"`
	// Indicates if a GPU will be allocated for model training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Gpu *bool `json:"gpu,omitempty" protobuf:"varint,13,opt,name=gpu"`
	// Indicates if model training will be distributed across multiple nodes (currently unimplemented)
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Distributed *bool `json:"distributed,omitempty" protobuf:"varint,14,opt,name=distributed"`
	// Indicates if feature importance for the model will be computed as part of training. Some algorithms
	// (e.g. Random Forest) have built in support for feature importance
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	FeatureImportance *bool `json:"featureImportance,omitempty" protobuf:"varint,15,opt,name=featureImportance"`
	// The number of nodes to use, in the case of distributed training
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	NodeCount *int32 `json:"nodeCount,omitempty" protobuf:"varint,16,opt,name=nodeCount"`
	// The number percentage (0 through 100) of rows to be used during training
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	SamplePct *int32 `json:"samplePct,omitempty" protobuf:"varint,17,opt,name=samplePct"`
	// Checkpoint specifies the location to store model checkpoints
	// +kubebuilder:validation:Optional
	Checkpoint CheckpointSpec `json:"checkpoint,omitempty" protobuf:"bytes,18,opt,name=checkpoint"`
	// The maximum log level for logs produced by Jobs associated with the Model
	// +kubebuilder:default:=info
	// +kubebuilder:validation:Optional
	LogLevel *catalog.LogLevel `json:"logLevel,omitempty" protobuf:"bytes,19,opt,name=logLevel"`
	// The maximum time, in seconds, that Jobs associated with the Model can run for before being forcefully cancelled.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	TimeoutInSecs *int32 `json:"timeoutInSecs,omitempty" protobuf:"varint,20,opt,name=timeoutInSecs"`
}

// CheckpointSpec specifies where to store model checkpoints
type CheckpointSpec struct {
	// Indicates if checkpointing is enabled.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,rep,name=enabled"`
	// The interval, in minutes, at which a snapshot of a partially trained model will be saved.
	// Applicable to models with long training times for resiliency if training is suddenly stopped
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=0
	CheckpointInterval *int32 `json:"checkpointInterval,omitempty" protobuf:"varint,2,opt,name=checkpointInterval"`
	// The location of the model checkpoint
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
}

// ServingSpec specifies the requirements to serve a model
type ServingSpec struct {
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,1,opt,name=resources"`
	// +kubebuilder:default:="cloudpickle"
	// +kubebuilder:validation:Optional
	Format *catalog.ModelServingFormat `json:"format,omitempty" protobuf:"bytes,2,opt,name=format"`
}

// TextPipelineSpec represents a single pipeline for transforming text data
type TextPipelineSpec struct {
	// The text encoder (e.g. TFIDF)
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Encoder *catalog.TextEncoding `json:"encoder,omitempty" protobuf:"bytes,1,opt,name=encoder"`
	// The text tokenizer character
	// +kubebuilder:validation:Optional
	Tokenizer *string `json:"tokenizer,omitempty" protobuf:"bytes,2,opt,name=tokenizer"`
	// Indicates if the pipeline will add stop word handling
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	StopWords *bool `json:"stopwords,omitempty" protobuf:"varint,3,opt,name=stopwords"`
	// Indicates if the pipeline will add part-of-speech handling
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Pos *bool `json:"pos,omitempty" protobuf:"varint,4,opt,name=pos"`
	// Indicates if the pipeline will implement lemmatization
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Lemma *bool `json:"lemma,omitempty" protobuf:"varint,5,opt,name=lemma"`
	// Indicates if the pipeline will implement word stemming
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Stem *bool `json:"stem,omitempty" protobuf:"varint,6,opt,name=stem"`
	// Indicates if the pipeline will generate a word embedding
	// +kubebuilder:validation:Optional
	Embedding *string `json:"embedding,omitempty" protobuf:"bytes,7,opt,name=embedding"`
	// Indicates if the pipeline will add singular value decomposition
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Svd *bool `json:"svd,omitempty" protobuf:"varint,8,opt,name=svd"`
	// The maximum number of SVD components to use, if applicable
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MaxSvdComponents *int32 `json:"maxSvdComponents,omitempty" protobuf:"varint,9,opt,name=maxSvdComponents"`
}

// ImagePipelineSpec represents a single pipeline for preprocessing image data
type ImagePipelineSpec struct {
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.ImageFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,1,opt,name=featurizer"`
}

// VideoPipelineSpec represents a single pipeline for preprocessing video data
type VideoPipelineSpec struct {
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.VideoFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,1,opt,name=featurizer"`
}

// AudioPipelineSpec represents a single pipeline for preprocessing audio data
type AudioPipelineSpec struct {
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.AudioFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,1,opt,name=featurizer"`
}

// ResourceConsumption represents the total resources consumed by a workload
type ResourceConsumption struct {
	Cpu float64 `json:"cpu,omitempty" protobuf:"bytes,1,opt,name=cpu"`
	Mem float64 `json:"mem,omitempty" protobuf:"bytes,2,opt,name=mem"`
	Gpu float64 `json:"gpu,omitempty" protobuf:"bytes,3,opt,name=gpu"`
}

// DataHashes contains the hashes for datasets used during model training
type DataHashes struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TrainingHash string `json:"trainingHash,omitempty" protobuf:"bytes,1,opt,name=trainHash"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TestingHash string `json:"testingHash,omitempty" protobuf:"bytes,2,opt,name=testingHash"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ValidationHash string `json:"validationHash,omitempty" protobuf:"bytes,3,opt,name=validationHash"`
}

type FeatureEngineeringSearchStatus struct {
	// The recommended pipeline after feature engineering was done
	Best FeatureEngineeringSpec `json:"best,omitempty" protobuf:"bytes,1,opt,name=best"`
}

// GeneratedColumnSpec describes a column to be generated and applied to a dataset
type GeneratedColumnSpec struct {
	// The name of the generated column
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The resulting data type
	DataType catalog.DataType `json:"datatype,omitempty" protobuf:"bytes,2,opt,name=datatype"`
	// The name of the first original column
	First string `json:"first,omitempty" protobuf:"bytes,3,opt,name=first"`
	// The name of the second original column, if the expression is binary operator
	// +kubebuilder:validation:Optional
	Second string `json:"second,omitempty" protobuf:"bytes,4,opt,name=second"`
	// The expression to apply in order to generate the new column
	// +kubebuilder:validation:Optional
	Expression string `json:"original,omitempty" protobuf:"bytes,5,opt,name=original"`
}

// FeatureSelectionSpec specifies the configuration to run feature selection on a dataset
type FeatureSelectionSpec struct {
	// Indicates if feature selection is enabled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,rep,name=enabled"`
	// Indicates if embedded methods will be tested as part of the candidate algorithms (e.g. tree-based selection)
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Embedding *bool `json:"embedding,omitempty" protobuf:"varint,3,rep,name=embedding"`
	// Indicates if filter methods will be tested as part of the candidate algorithms (e.g. chi-square or anova tests)
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Filter *bool `json:"filter,omitempty" protobuf:"varint,4,rep,name=filter"`
	// Indicates if wrapper methods will be tested as part of the candidate algorithms
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Wrapper *bool `json:"wrapper,omitempty" protobuf:"varint,5,rep,name=wrapper"`
	// The collection of feature selection methods that will be applied in order to the dataset
	Pipeline []catalog.FeatureSelection `json:"pipeline,omitempty" protobuf:"bytes,6,rep,name=pipeline"`
	// The threshold as a percentage to remove low variance features
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	VarianceThresholdPct *int32 `json:"varianceThresholdPct,omitempty" protobuf:"varint,7,opt,name=varianceThresholdPct"`
	// The threshold to remove features with high correlations
	// +kubebuilder:default:=95
	// +kubebuilder:validation:Optional
	CorrThreshold *int32 `json:"corrThreshold,omitempty" protobuf:"varint,8,opt,name=corrThreshold"`
	// The number of features that will be selected based on importance. If TopN is 0, all features will be selected
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MaxFeatures *int32 `json:"maxFeatures,omitempty" protobuf:"varint,9,opt,name=maxFeatures"`
	// Percent of features to keep
	// +kubebuilder:default:=20
	// +kubebuilder:validation:Optional
	Percentile *int32 `json:"percentile,omitempty" protobuf:"varint,10,opt,name=percentile"`
	// List of features that are reserved and will always be included in the final feature selection
	// +kubebuilder:validation:Optional
	Reserved []string `json:"reserved,omitempty" protobuf:"bytes,12,rep,name=reserved"`
}

// InterpretabilitySpec specifies the configuration to generate interpretability data and diagrams
type InterpretabilitySpec struct {
	// Indicates if ICE (individual condition expectation) plots will be generated
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ICE *bool `json:"ice,omitempty" protobuf:"varint,1,opt,name=ice"`
	// The collection of feature pairs to generate ICE scatter diagrams for each
	ICEPairs []FeaturePair `json:"icepairs,omitempty" protobuf:"bytes,2,rep,name=icepairs"`
	// Indicates if LIME (local interpretable model-agnostic explanations) diagrams will be generated
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Lime *bool `json:"lime,omitempty" protobuf:"varint,3,opt,name=lime"`
	// The type of SHAP values to be generated. Linear and tree values are the
	// only recommended types due to the high compute times of other methods
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Shap *catalog.ShapType `json:"shap,omitempty" protobuf:"bytes,4,opt,name=shap"`
	// The collection of feature pairs to generate SHAP scatter diagrams for each
	// +kubebuilder:validation:Optional
	ShapPairs []FeaturePair `json:"shappairs,omitempty" protobuf:"bytes,5,rep,name=shappairs"`
	// Indicates if counter-factual diagrams will be generated
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CounterFactual *bool `json:"counterfactual,omitempty" protobuf:"varint,6,opt,name=counterfactual"`
	// Indicates if anchor explanation diagrams will be generated
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Anchor *bool `json:"anchor,omitempty" protobuf:"varint,7,opt,name=anchor"`
}

type FeaturePair struct {
	X string `json:"x,omitempty" protobuf:"bytes,1,opt,name=x"`
	Y string `json:"y,omitempty" protobuf:"bytes,2,opt,name=y"`
}

// InterpretabilityStatus represents the state of the explanation phase of a Model
type InterpretabilityStatus struct {
	// StartTime represents the time when the model explanation phase started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"trainingStartTime,omitempty" protobuf:"bytes,1,opt,name=trainingStartTime"`
	// EndTime represents the time when the model explanation phase ended
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"trainingEndTime,omitempty" protobuf:"bytes,2,opt,name=trainingEndTime"`
	// The URI for the generated explanation data
	ExplainerURI string `json:"explainerURI,omitempty" protobuf:"bytes,3,opt,name=explainerURI"`
	// The URI for the train SHAP values
	TrainShapValuesURI string `json:"trainShapValuesURI,omitempty" protobuf:"bytes,4,opt,name=trainShapValuesURI"`
	// The URI for the test SHAP values
	TestShapValuesURI string `json:"testShapValuesURI,omitempty" protobuf:"bytes,5,opt,name=testShapValuesURI"`
	// The collection of feature importances generated from the computed SHAP values
	Importance []FeatureImportance `json:"importance,omitempty" protobuf:"bytes,6,rep,name=importance"`
}
