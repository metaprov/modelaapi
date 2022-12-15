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
	ModelPhaseTuning                ModelPhase = "Tuning"
	ModelPhaseTuned                 ModelPhase = "Tuned"
	ModelPhaseUnitTesting           ModelPhase = "UnitTesting"
	ModelPhaseUnitTested            ModelPhase = "UnitTested"
	ModelPhaseComputingFeedback     ModelPhase = "ComputingFeedback"
	ModelPhaseComputedFeedback      ModelPhase = "ComputedFeedback"
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
	ModelPhaseMerging               ModelPhase = "Merging" // for group forecast, merged the forecast
	ModelPhaseMerged                ModelPhase = "Merged"
	ModelPhaseUat                   ModelPhase = "UAT"
	ModelPhaseDeployed              ModelPhase = "Deployed"
	ModelPhaseReleasing             ModelPhase = "Releasing"
	ModelPhasePredicting            ModelPhase = "Predicting"
	ModelPhasePredicted             ModelPhase = "Predicted"
	ModelPhaseLive                  ModelPhase = "Live"
	ModelPhaseCanary                ModelPhase = "Canary"
	ModelPhaseShadow                ModelPhase = "Shadow"
	ModelPhaseMaintenance           ModelPhase = "Maintenance"
	ModelPhaseRetired               ModelPhase = "Retired"
	ModelPhaseTrainingDriftDetector ModelPhase = "TrainingDriftDetector"
	ModelPhaseTrainedDriftDetector  ModelPhase = "TrainedDriftDetector"
	ModelPhasePruned                ModelPhase = "Pruned"
)

// ModelConditionType specifies the current condition of a Model
type ModelConditionType string

// / Model
const (
	// ModelInitialized states that the Model is populated with an algorithm and hyper-parameters
	ModelInitialized ModelConditionType = "Initialized"
	// ModelTrained states that the Model was trained on a training dataset, and validated against a validation dataset
	ModelTrained ModelConditionType = "Trained"
	// ModelTested states that the Model was tested against the test set.
	ModelTested ModelConditionType = "Tested"
	// ModelTested states that the Model was tuned,
	ModelTuned ModelConditionType = "Tuned"
	// ModelUnitTested states that the Model was unit tested
	ModelUnitTested ModelConditionType = "UnitTested"
	// ModelUnitTested states that the Model was trained on the training dataset, and tested against the testing dataset
	ModelFeedbackTested ModelConditionType = "FeedbackTested"
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
	// ModelArchived states that the Model artifacts were archived to a bucket
	ModelSaved ModelConditionType = "Saved"
	// ModelArchived states that the Model artifacts were archived to a bucket
	ModelArchived ModelConditionType = "Archived"
	// ModelExplained states that SHAP values were computed for the Model and diagrams were generated with them
	ModelExplained ModelConditionType = "Explained"
	// ModelAborted states that training was aborted
	ModelAborted ModelConditionType = "Aborted"
	// ModelPaused states that training was paused
	ModelPaused ModelConditionType = "Paused"

	ModelForecasted ModelConditionType = "Forecasted"
	// ModelLive states that the Model is active and serving predictions
	ModelLive ModelConditionType = "Live"
	// Model Shadow indicate the the model was promoted to shadow mode.
	ModelShadow ModelConditionType = "Shadow"
	// The model is in maintaince and cannot serve traffic.
	ModelMaintenance ModelConditionType = "Maintenance"

	ModelTrainedDriftDetector ModelConditionType = "TrainedDriftDetector"

	ModelPruned ModelConditionType = "Pruned" // If the model was pruned by the optimizer

	ModelMerged ModelConditionType = "Merged" // If the model was pruned by the optimizer

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

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=models,singular=model,shortName=md,categories={training,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
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
// Model represents a machine learning model that will be trained, evaluated, and deployed by Modela.
// Model resources are generated by the Modela data plane and cannot be created manually
type Model struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelList is a list of ModelsCount
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
	Objective *catalog.ObjectiveSpec `json:"objective,omitempty" protobuf:"bytes,9,opt,name=objective"`
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
	// Registered indicate if this model is registered with the model registry.
	// A registred model cannot be garbage collected, and apper in the model registry page.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Registered *bool `json:"registered,omitempty" protobuf:"varint,29,opt,name=registered"`
	// Perform a prediction at the end of the study. This is for example apply to forecasting.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Predicted *bool `json:"predict,omitempty" protobuf:"varint,30,opt,name=predict"`
	// If true perform a final search after selecting the best model. to tune only this model.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Tuned *bool `json:"tuned,omitempty" protobuf:"varint,31,opt,name=tuned"`
	// Explained indicates if a workload to compute SHAP values/diagrams should be executed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Explained *bool `json:"explained,omitempty" protobuf:"varint,32,opt,name=explained"`
	// Not implemented. For future use. If true,generate code when model trained
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CodeGenerated *bool `json:"codeGenerated,omitempty" protobuf:"varint,33,opt,name=codeGenerated"`
	// Baseline indicates if the Model was produced by the baseline phase of a Study
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Baseline *bool `json:"baseline,omitempty" protobuf:"varint,34,opt,name=baseline"`
	// GenDriftDetector indicates if we should generate a drift detector model for this model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	GenDriftDetector *bool `json:"genDriftDetector,omitempty" protobuf:"varint,35,opt,name=genDriftDetector"`
	// Fast indicates if the Model should skip profiling, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,36,opt,name=fast"`
	// Indicate if this model should be unit tested.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	UnitTested *bool `json:"unitTested,omitempty" protobuf:"varint,37,opt,name=unitTested"`
	// The reference to the lated feedback dataset
	// +kubebuilder:validation:Optional
	FeedbackDatasetRef *v1.ObjectReference `json:"feedbackDatasetRef,omitempty" protobuf:"varint,38,opt,name=feedbackDatasetRef"`
	// Indicates if the model is flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,39,opt,name=flagged"`
	// The data location where artifacts (metadata, reports, and estimators) generated by the Model will be stored
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,40,opt,name=location"`
	// Forecasting specifies the configuration to train a forecasting model
	// +kubebuilder:validation:Optional
	Forecasting *ForecasterSpec `json:"forecasting,omitempty" protobuf:"bytes,41,opt,name=forecasting"`
	// Compilation specifies the configuration to compile a model to a binary (currently unimplemented)
	// +kubebuilder:validation:Optional
	Compilation *catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,42,opt,name=compilation"`
	// The deadline for any Jobs associated with the Model to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,43,opt,name=activeDeadlineSeconds"`
	// ModelType is the type of model for this estimator
	// +kubebuilder:default:=classical
	// +kubebuilder:validation:Optional
	EstimatorType *catalog.ModelType `json:"estimatorType,omitempty" protobuf:"bytes,44,opt,name=estimatorType"`
	// The time-to-live of the Model, after which the Model will be archived
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,45,opt,name=ttl"`
	// The model class, which is derived from the phase of the Study that the Model was created for
	// +kubebuilder:validation:Optional
	ModelClass catalog.ModelClassType `json:"modelClass,omitempty" protobuf:"bytes,46,opt,name=modelClass"`
	// The trial ID, which is incremented for each Model produced by the data plane
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TrialID *int32 `json:"trialID,omitempty" protobuf:"varint,47,opt,name=trialID"`
	// Governance specifies the model governance requirements (currently unimplemented)
	// +kubebuilder:validation:Optional
	Governance *data.GovernanceSpec `json:"governance,omitempty" protobuf:"bytes,48,opt,name=governance"`
	// Interpretability specifies the configuration to generate model interpretability visualizations
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,49,opt,name=interpretability"`
	// The set of unit tests for this model.
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,50,opt,name=unitTests"`
	// The set of unit tests to test this models against the feedback.
	// +kubebuilder:validation:Optional
	FeedbackTests catalog.TestSuite `json:"feedbackTests,omitempty" protobuf:"bytes,51,opt,name=feedbackTests"`
	// The set locations in case of group forecasts
	// +kubebuilder:validation:Optional
	PartitionsLocation PartitionModelLocationsSpec `json:"partitionLocations,omitempty" protobuf:"bytes,52,opt,name=partitionLocations"`
	// The model class for this model if the model was created by a model class
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,53,opt,name=modelClassName"`
	// If this model was created by a model class run, this is the run name
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,54,opt,name=modelClassRunName"`
	// The desired role of the model
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Role *catalog.ModelRole `json:"role,omitempty" protobuf:"bytes,55,opt,name=role"`
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

// Contain the spec for a single time series.

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
	// TrainStartTime represents the time at which the Model started training
	// +kubebuilder:validation:Optional
	TrainingStartedAt *metav1.Time `json:"trainingStartedAt,omitempty" protobuf:"bytes,2,opt,name=trainingStartedAt"`
	// TrainCompletionTime represents the time at which the Model completed training
	// +kubebuilder:validation:Optional
	TrainingCompletedAt *metav1.Time `json:"trainingCompletedAt,omitempty" protobuf:"bytes,3,opt,name=trainingCompletedAt"`
	// TestingStartedAt represents the time at which the Model started testing
	// +kubebuilder:validation:Optional
	TestingStartedAt *metav1.Time `json:"testingStartedAt,omitempty" protobuf:"bytes,4,opt,name=testingStartedAt"`
	// TestingCompletedAt represents the time at which the Model completed testing
	// +kubebuilder:validation:Optional
	TestingCompletedAt *metav1.Time `json:"testingCompletedAt,omitempty" protobuf:"bytes,5,opt,name=testingCompletedAt"`
	// TuningStartedAt represents the time at which the Model started testing
	// +kubebuilder:validation:Optional
	TuningStartedAt *metav1.Time `json:"tuningStartedAt,omitempty" protobuf:"bytes,6,opt,name=tuningStartedAt"`
	// TuningCompletedAt represents the time at which the Model completed testing
	// +kubebuilder:validation:Optional
	TuningCompletedAt *metav1.Time `json:"tuningCompletedAt,omitempty" protobuf:"bytes,7,opt,name=tuningCompletedAt"`
	// CompletedAt represents the time at which the Model was marked as ready, failed, or aborted
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,8,opt,name=completedAt"`
	// The cross-validation score for the objective metric produced after training
	// +kubebuilder:validation:Optional
	CVScore float64 `json:"cvScore,omitempty" protobuf:"bytes,9,opt,name=cvScore"`
	// The score for the objective metric based on the training dataset
	// +kubebuilder:validation:Optional
	TrainingScore float64 `json:"trainingScore,omitempty" protobuf:"bytes,10,opt,name=trainingScore"`
	// The score for the objective metric based on the testing dataset
	// +kubebuilder:validation:Optional
	TestScore float64 `json:"testScore,omitempty" protobuf:"bytes,11,opt,name=testScore"`
	// Cost is the cost of training the model in the case of a deep-learning model
	// +kubebuilder:validation:Optional
	Cost float64 `json:"cost,omitempty" protobuf:"bytes,12,opt,name=cost"`
	// Best indicates if the Model was found to be the best model produced by a Study
	// +kubebuilder:validation:Optional
	Best bool `json:"best,omitempty" protobuf:"varint,13,opt,name=best"`
	// CV contains the collection of measurements produced by cross-validation
	// on the training dataset or validation on the validation dataset
	// +kubebuilder:validation:Optional
	CV []catalog.Measurement `json:"cv,omitempty" protobuf:"bytes,14,rep,name=cv"`
	// Train contains the collection of measurements produced by validation on the training dataset
	// +kubebuilder:validation:Optional
	Train []catalog.Measurement `json:"train,omitempty" protobuf:"bytes,15,rep,name=train"`
	// Train contains the collection of measurements produced by validation on the testing dataset
	// +kubebuilder:validation:Optional
	Test []catalog.Measurement `json:"test,omitempty" protobuf:"bytes,16,rep,name=test"`
	// Tune contains the collection of measurements produced by validation on the tune dataset
	// +kubebuilder:validation:Optional
	Tune []catalog.Measurement `json:"tune,omitempty" protobuf:"bytes,17,rep,name=tune"`
	// Feedback contain the collection of measurements produced by running dataset
	// +kubebuilder:validation:Optional
	Feedback []catalog.Measurement `json:"feedback,omitempty" protobuf:"bytes,18,rep,name=feedback"`
	// The last feedback dataset
	// +kubebuilder:validation:Optional
	LastFeedbackDatasetRef v1.ObjectReference `json:"lastFeedbackDatasetRef,omitempty" protobuf:"bytes,19,rep,name=lastFeedbackDatasetRef"`
	// The phase of the Model
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelPhase `json:"phase" protobuf:"bytes,20,opt,name=phase"`
	// The name of the Report resource produced by the Model
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,21,opt,name=reportName"`
	// The URI of the Report
	// +kubebuilder:validation:Optional
	ReportURI string `json:"reportURI,omitempty" protobuf:"bytes,22,opt,name=reportURI"`
	// The URI of the Model manifest
	// +kubebuilder:validation:Optional
	ManifestURI string `json:"manifestURI,omitempty" protobuf:"bytes,23,opt,name=manifestURI"`
	// The URI of the model test weights
	// +kubebuilder:validation:Optional
	TrainWeightsURI string `json:"trainWeightsURI,omitempty" protobuf:"bytes,24,opt,name=trainWeightsURI"`
	// The URI of the model test weights
	// +kubebuilder:validation:Optional
	TestWeightsURI string `json:"testWeightsURI,omitempty" protobuf:"bytes,25,opt,name=testWeightsURI"`
	// The URI of the model test weights
	// +kubebuilder:validation:Optional
	FullWeightsURI string `json:"fullWeightsURI,omitempty" protobuf:"bytes,26,opt,name=fullWeightsURI"`
	// The URI of the label encoder binary file, if it exists
	// +kubebuilder:validation:Optional
	LabelEncoderURI string `json:"labelEncoderURI,omitempty" protobuf:"bytes,27,opt,name=labelEncoderURI"`
	// The URI of the logs file
	// +kubebuilder:validation:Optional
	LogsURI string `json:"logsURI,omitempty" protobuf:"bytes,28,opt,name=logsURI"`
	// The URI of the model profile, which contains visualizations produced during the profiling phase
	// +kubebuilder:validation:Optional
	ProfileURI string `json:"profileURI" protobuf:"bytes,29,opt,name=profileURI"`
	// The URI to the misclassification file produced during the testing phase
	// +kubebuilder:validation:Optional
	MisclassificationURI string `json:"misclassificationURI" protobuf:"bytes,30,opt,name=misclassificationURI"`
	// The URI to the model tarbell file
	// +kubebuilder:validation:Optional
	TarURI string `json:"tarURI" protobuf:"bytes,31,opt,name=tarURI"`
	// The URI to the model application file
	// +kubebuilder:validation:Optional
	AppURI string `json:"appURI" protobuf:"bytes,32,opt,name=appURI"`
	// The name of the Docker image produced by the Model
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName" protobuf:"bytes,33,opt,name=imageName"`
	// The collection of features and their importance, sorted by the greatest importance first
	// The collection is measured based on impuriry and uses the native measures by a tree algorithm
	// +kubebuilder:validation:Optional
	ImpurityImportance []FeatureImportance `json:"impurityImportance,,omitempty" protobuf:"bytes,34,rep,name=impurityImportance"`
	// The collection of features and their importance, sorted by the greatest importance first
	// The collection is measured using permutation importance
	// +kubebuilder:validation:Optional
	PermutationImportance []FeatureImportance `json:"permutationImportance,omitempty" protobuf:"bytes,35,rep,name=permutationImportance"`
	// The URI of the model forecast
	// +kubebuilder:validation:Optional
	ForecastURI string `json:"forecastURI,omitempty" protobuf:"bytes,36,opt,name=forecastURI"`
	// The runtime training details.
	// +kubebuilder:validation:Optional
	Runtime RuntimeStatus `json:"runtime,omitempty" protobuf:"bytes,37,opt,name=runtime"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,38,opt,name=trainDataset"`
	// TestDatasetLocation specifies the location of the testing dataset
	// +kubebuilder:validation:Optional
	TestDatasetLocation data.DataLocation `json:"testDataset,omitempty" protobuf:"bytes,39,opt,name=testDataset"`
	// ValidationDataset specifies the location of the validation dataset
	// +kubebuilder:validation:Optional
	ValidationDataset data.DataLocation `json:"validationDataset,omitempty" protobuf:"bytes,40,opt,name=validationDataset"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,41,opt,name=observedGeneration"`
	// The number of rows in the training dataset
	// +kubebuilder:validation:Optional
	TrainingRows int32 `json:"trainingRows" protobuf:"varint,42,opt,name=trainingRows"`
	// The number of rows in the testing dataset
	// +kubebuilder:validation:Optional
	TestingRows int32 `json:"testingRows" protobuf:"varint,43,opt,name=testingRows"`
	// The number of rows in the validation dataset, if applicable
	// +kubebuilder:validation:Optional
	ValidationRows int32 `json:"validationRows" protobuf:"varint,44,opt,name=validationRows"`
	// In the case of failure, the Model resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,45,opt,name=failureReason"`
	// In the case of failure, the Model resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,46,opt,name=failureMessage"`
	// The progress percentage of the Model, which is derived from the Model's current phase
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,47,opt,name=progress"`
	// The size of the model binary in bytes
	// +kubebuilder:validation:Optional
	SizeInBytes int32 `json:"sizeInBytes,omitempty" protobuf:"varint,48,opt,name=sizeInBytes"`
	// The measured prediction latency
	// +kubebuilder:validation:Optional
	Latency float64 `json:"latency,omitempty" protobuf:"bytes,49,opt,name=latency"`
	// The URL to the released model
	// +kubebuilder:validation:Optional
	URL string `json:"url,omitempty" protobuf:"bytes,50,opt,name=url"`
	// The name of the Predictor in the case that the Model has been released and deployed
	// +kubebuilder:validation:Optional
	PredictorName string `json:"predictorName,omitempty" protobuf:"bytes,51,opt,name=predictorName"`
	// The time at which the Model was set to release
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,52,opt,name=releasedAt"`
	// The time at which the Model was set to release
	// +kubebuilder:validation:Optional
	PredictedAt *metav1.Time `json:"predictedAt,omitempty" protobuf:"bytes,53,opt,name=predictedAt"`
	// Sha256 of the model tar file
	// +kubebuilder:validation:Optional
	TarFileHash string `json:"tarFileHash,omitempty" protobuf:"bytes,54,opt,name=tarFileHash"`
	// Sha256 of the model image
	// +kubebuilder:validation:Optional
	ImageHash string `json:"imageHash,omitempty" protobuf:"bytes,55,opt,name=imageHash"`
	// TrainingDataHash specifies the hashes for datasets used by the Model
	// +kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,56,opt,name=trainingDataHash"`
	// TrainingResources details the resources that were consumed by the training workload
	// +kubebuilder:validation:Optional
	TrainingResources ResourceConsumption `json:"trainingResources,omitempty" protobuf:"bytes,57,opt,name=trainingResources"`
	// TestingResources details the resources that were consumed by the testing workload
	// +kubebuilder:validation:Optional
	TestingResources ResourceConsumption `json:"testingResources,omitempty" protobuf:"bytes,58,opt,name=testingResources"`
	// The Account which trained the model, derived from the parent Study
	// +kubebuilder:validation:Optional
	TrainedBy string `json:"trainedBy,omitempty" protobuf:"bytes,59,opt,name=trainedBy"`
	// The team of the Account which trained the model, derived from the parent Study
	// +kubebuilder:validation:Optional
	Team string `json:"team,omitempty" protobuf:"bytes,60,opt,name=team"`
	// The endpoint of the Model, which is set after it is deployed to a Predictor
	// +kubebuilder:validation:Optional
	EndPoint string `json:"endpoint,omitempty" protobuf:"bytes,61,opt,name=endpoint"`
	// Logs specifies the location of logs produced by workloads associated with the Model
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,62,opt,name=logs"`
	// The Roc/Auc curve of the trained model
	// +kubebuilder:validation:Optional
	RocCurve catalog.RocAucCurve `json:"rocCurve,omitempty" protobuf:"bytes,63,opt,name=rocCurve"`
	// The Precision/Recall curve of the trained model
	// +kubebuilder:validation:Optional
	PRCurve catalog.PRCurve `json:"prCurve,omitempty" protobuf:"bytes,64,opt,name=prCurve"`
	// The confusion matrix of the train data.
	// +kubebuilder:validation:Optional
	TrainConfusionMatrix catalog.ConfusionMatrix `json:"trainConfusionMatrix,omitempty" protobuf:"bytes,65,opt,name=trainConfusionMatrix"`
	// The confusion matrix of the test data
	// +kubebuilder:validation:Optional
	TestConfusionMatrix catalog.ConfusionMatrix `json:"testConfusionMatrix,omitempty" protobuf:"bytes,66,opt,name=testConfusionMatrix"`
	// The collection of correlations of the features of the training dataset and the target feature
	// +kubebuilder:validation:Optional
	CorrelationsWithTarget []data.Correlation `json:"correlationsWithTarget,omitempty" protobuf:"bytes,67,rep,name=correlationsWithTarget"`
	// The top correlations between features of the training dataset
	// +kubebuilder:validation:Optional
	TopCorrelations []data.Correlation `json:"topCorrelations,omitempty" protobuf:"bytes,68,rep,name=topCorrelations"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,69,opt,name=updatedAt"`
	// Governance specifies the current governance status for the Model
	// +kubebuilder:validation:Optional
	Governance data.GovernanceStatus `json:"governance,omitempty" protobuf:"bytes,70,opt,name=governance"`
	// Interpretability contains results produced during the explaining phase of the Model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilityStatus `json:"interpretability,omitempty" protobuf:"bytes,71,opt,name=interpretability"`
	// Images specifies the container images used to train the model
	// +kubebuilder:validation:Optional
	Images catalog.Images `json:"images,omitempty" protobuf:"bytes,72,opt,name=images"`
	// The result of running the unit tests
	// +kubebuilder:validation:Optional
	UnitTestsResult catalog.TestSuiteResult `json:"unitTestsResult,omitempty" protobuf:"bytes,73,opt,name=unitTestsResult"`
	// The result of running the feedback unit tests, the feedback unit tests
	// +kubebuilder:validation:Optional
	FeedbackTestsResult catalog.TestSuiteResult `json:"feedbackTestsResult,omitempty" protobuf:"bytes,74,opt,name=feedbackTestsResult"`
	// The sub models uri file contain the results of running the sub model
	// +kubebuilder:validation:Optional
	GroupBy ModelGroupByStatus `json:"groupby,omitempty" protobuf:"bytes,75,opt,name=groupby"`
	// The status of the model, when deploying via the stages
	// +kubebuilder:validation:Optional
	Stages []ModelStageStatus `json:"stages,omitempty" protobuf:"bytes,76,rep,name=stages"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,77,rep,name=conditions"`
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
	Generated []GeneratedColumnSpec `json:"generated,omitempty" protobuf:"bytes,16,rep,name=generated"`
	// Custom specifies a collection of columns to be generated. Custom columns are specified by end-users
	// +kubebuilder:validation:Optional
	Custom []GeneratedColumnSpec `json:"custom,omitempty" protobuf:"bytes,17,rep,name=custom"`
	// Indicates if all of all the columns specified by the Columns field should be dropped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Drop *bool `json:"drop,omitempty" protobuf:"varint,18,opt,name=drop"`
	// Indicates if the pipeline should not be applied and the columns should remain unchanged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Passthrough *bool `json:"passthrough,omitempty" protobuf:"varint,19,opt,name=passthrough"`
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
	VarThreshold *int32 `json:"varThreshold,omitempty" protobuf:"varint,7,opt,name=varThreshold"`
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
	// StartedAt represents the time when the model explanation phase started
	// +kubebuilder:validation:Optional
	StartedAt *metav1.Time `json:"startedAt,omitempty" protobuf:"bytes,1,opt,name=startedAt"`
	// CompletedAt represents the time when the model explanation phase ended
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,2,opt,name=completedAt"`
	// The URI for the generated explanation data
	ExplainerURI string `json:"explainerURI,omitempty" protobuf:"bytes,3,opt,name=explainerURI"`
	// The URI for the train SHAP values
	TrainShapValuesURI string `json:"trainShapValuesURI,omitempty" protobuf:"bytes,4,opt,name=trainShapValuesURI"`
	// The URI for the test SHAP values
	TestShapValuesURI string `json:"testShapValuesURI,omitempty" protobuf:"bytes,5,opt,name=testShapValuesURI"`
	// The collection of feature importances generated from the computed SHAP values
	Importance []FeatureImportance `json:"importance,omitempty" protobuf:"bytes,6,rep,name=importance"`
}

type ModelGroupByStatus struct {
	// The locations of the datasets profile files. Each file is the group
	// +kubebuilder:validation:Optional
	ModelsURI string `json:"modelsURI,omitempty" protobuf:"bytes,1,opt,name=modelsURI"`
	// The locations of the datasets profiles files.
	// +kubebuilder:validation:Optional
	ProfilesURI string `json:"profilesURI,omitempty" protobuf:"bytes,2,opt,name=profilesURI"`
	// The locations of forecasts
	// +kubebuilder:validation:Optional
	ForecastsURI string `json:"forecastsURI,omitempty" protobuf:"bytes,3,opt,name=forecastsURI"`
	// Holds the worker on going result, when a worker finish, we update the location of thier result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,4,rep,name=workerResults"`
}

type PartitionModelLocationsSpec struct {
	// The folder of group data
	// +kubebuilder:validation:Optional
	PartitionFolder *string `json:"partitionFolder,omitempty" protobuf:"bytes,1,opt,name=partitionFolder"`
	// The folder of partition data
	// +kubebuilder:validation:Optional
	PartitionProfileFolder *string `json:"partitionProfileFolder,omitempty" protobuf:"bytes,2,opt,name=partitionProfileFolder"`
	// The folder of partition data
	// +kubebuilder:validation:Optional
	PartitionReportFile *string `json:"partitionReportFile,omitempty" protobuf:"bytes,3,opt,name=partitionReportFile"`
	// The folder of partition data
	// +kubebuilder:validation:Optional
	PartitionModelFolder *string `json:"partitionModelFolder,omitempty" protobuf:"bytes,4,opt,name=partitionModelFolder"`
	// The folder of partition data
	// +kubebuilder:validation:Optional
	PartitionModelFile *string `json:"partitionModelFile,omitempty" protobuf:"bytes,5,opt,name=partitionModelFile"`
	// The folder of partition data
	// +kubebuilder:validation:Optional
	PartitionForecastFile *string `json:"partitionForecastFile,omitempty" protobuf:"bytes,6,opt,name=partitionForecastFile"`
}

type StageStatusPhase string

const (
	StageStatusPhaseRunning            StageStatusPhase = "Running"
	StageStatusPhaseTraining           StageStatusPhase = "Training"   // search and train for the best model
	StageStatusPhasePublishing         StageStatusPhase = "Publishing" // publish the model
	StageStatusPhaseUnitTests          StageStatusPhase = "UnitTesting"
	StageStatusPhaseReleasing          StageStatusPhase = "Releasing"
	StageStatusPhaseWaitingForApproval StageStatusPhase = "WaitingForApproval"
	StageStatusPhaseApproved           StageStatusPhase = "Approved"
	StageStatusPhaseDenied             StageStatusPhase = "Denied"
	StageStatusPhaseCompleted          StageStatusPhase = "Completed"
	StageStatusPhaseFailed             StageStatusPhase = "Failed"
)

type ModelStageStatus struct {
	// Phase is the phase of the stage
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase StageStatusPhase `json:"phase,omitempty" protobuf:"bytes,1,opt,name=phase"`
	// Approved indicates that the stage is approved.
	// +kubebuilder:validation:Optional
	Approved bool `json:"approved,omitempty" protobuf:"bytes,2,opt,name=approved"`
	// ApprovedBy indicates the account that approve this model.
	// +kubebuilder:validation:Optional
	ApprovedBy string `json:"approvedBy,omitempty" protobuf:"bytes,3,opt,name=approvedBy"`
	// ApprovedAt indicates the time of approval
	// +kubebuilder:validation:Optional
	ApprovedAt *metav1.Time `json:"approvedAt,omitempty" protobuf:"bytes,4,opt,name=approvedAt"`
	// Start time is the start time of the stage
	// +kubebuilder:validation:Optional
	StartedAt *metav1.Time `json:"startedAt,omitempty" protobuf:"bytes,7,opt,name=startedAt"`
	// End time is the end time of the stage.
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,8,opt,name=completedAt"`
	// Results is the results of running the test datasets against the new model
	// +kubebuilder:validation:Optional
	UnitTestsResult catalog.TestSuiteResult `json:"unitTestsResult,omitempty" protobuf:"bytes,9,opt,name=unitTestsResult"`
	// Error record error.
	//+kubebuilder:validation:Optional
	Error string `json:"error,omitempty" protobuf:"bytes,10,opt,name=error"`
}
