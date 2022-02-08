package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelValidationName is the name of one model monitoring validation
type ModelValidationName string

const (
	// ModelTest measure the preformance of the model against test data
	ModelTest ModelValidationName = "model-test"
	// compare the prediction count in time T to time T-1
	PredictionCountDrift ModelValidationName = "prediction-count-drift"
	// compare the prediction latency in time T to time T-1
	PredictionLatencyDrift ModelValidationName = "prediction-latency-drift"
	// Compare latency in training to latency in serving
	PredictionLatencySkew ModelValidationName = "prediction-latency-skew"
	// Compare model preformance in training to latency in serving
	ModelPrefSkew ModelValidationName = "model-pref-skew"
	// Compare model preformance in training in time T to perofrmance in training in time T-1
	ModelPrefDrift ModelValidationName = "model-pref-drift"
	// Compare column distribution in training to latency in serving
	CategoricalColumnSkew ModelValidationName = "cat-column-skew"
	// Compare column distribution in serving in time T to latency in serving in time T-1
	CategoricalColumnDrift ModelValidationName = "cat-column-drift"
	// Compare column distribution in training to latency in serving
	NumericalColumnSkew ModelValidationName = "numerical-column-skew"
	// Compare column distribution in training to latency in training time time T-1
	NumericalColumnDrift ModelValidationName = "numerical-column-drift"
	// Compare missing values in training to latency in training time time T-1
	MissingValueDrift ModelValidationName = "missing-values-drift"
	// Compare missing value in training to latency in serving
	MissingValueSkew ModelValidationName = "missing-values-skew"
	// Compare column stat in training to column stat in serving
	ColumnStatSkew ModelValidationName = "column-stat-skew"
	// Compare column stat in serving in time T to column stat in servingt in time T-1
	ColumnStatDrift ModelValidationName = "column-stat-drift"
)

type ModelValidation struct {
	// +kubebuilder:validation:Optional
	Type ModelValidationName `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelValidationName"`
	// PrevModel compare to model
	// +kubebuilder:validation:Optional
	PrevModel *string `json:"prevModel,omitempty" protobuf:"bytes,2,opt,name=prevModel"`
	// Labeled dataset used to test the model, when measuring a performance metric
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// +kubebuilder:validation:Optional
	DriftFreq catalog.Freq `json:"driftFreq,omitempty" protobuf:"bytes,4,opt,name=driftFreq"`
	// +kubebuilder:validation:Optional
	DriftInterval *int32 `json:"driftInterval,omitempty" protobuf:"varint,5,opt,name=driftInterval"`
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,6,opt,name=column"`
	// +kubebuilder:validation:Optional
	Metric *catalog.Metric `json:"metric,omitempty" protobuf:"bytes,7,opt,name=metric"`
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,8,opt,name=min"`
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,9,opt,name=max"`
	// +kubebuilder:validation:Optional
	MinPrecent *float64 `json:"minPrecent,omitempty" protobuf:"bytes,10,opt,name=minPrecent"`
	// +kubebuilder:validation:Optional
	MaxPrecent *float64 `json:"maxPrecent,omitempty" protobuf:"bytes,11,opt,name=maxPrecent"`
	// Agg is used when we measured aggregate performance, for example median or average
	Agg *catalog.Aggregate `json:"agg,omitempty" protobuf:"bytes,12,opt,name=agg"`
}

// ModelPhase is the current phase of a model
type ModelPhase string

const (
	ModelPhaseFailed      ModelPhase = "Failed"
	ModelPhasePending     ModelPhase = "Pending"
	ModelPhaseTraining    ModelPhase = "Training"
	ModelPhaseTrained     ModelPhase = "Trained"
	ModelPhaseTesting     ModelPhase = "Testing"
	ModelPhaseTested      ModelPhase = "Tested"
	ModelPhaseReporting   ModelPhase = "Reporting"
	ModelPhaseReported    ModelPhase = "Reported"
	ModelPhaseCompleted   ModelPhase = "Completed"
	ModelPhasePublishing  ModelPhase = "Publishing"
	ModelPhasePublished   ModelPhase = "Published"
	ModelPhasePackaging   ModelPhase = "Packaging"
	ModelPhasePackaged    ModelPhase = "Packaged"
	ModelPhaseProfiling   ModelPhase = "Profiling"
	ModelPhaseProfiled    ModelPhase = "Profiled"
	ModelPhaseExplaining  ModelPhase = "Explaining"
	ModelPhaseExplained   ModelPhase = "Explained"
	ModelPhaseAborted     ModelPhase = "Aborted"
	ModelPhaseForecasting ModelPhase = "Forecasting"
	ModelPhaseForecasted  ModelPhase = "Forecasted"
	ModelPhaseUat         ModelPhase = "UAT"
	ModelPhaseDeployed    ModelPhase = "Deployed"
	ModelPhaseReleasing   ModelPhase = "Releasing"
	ModelPhaseLive        ModelPhase = "Live"
	ModelPhaseMaintenance ModelPhase = "Maintenance"
	ModelPhaseRetired     ModelPhase = "Retired"
)

// ModelConditionType is a condition on a model
type ModelConditionType string

/// Model
const (
	// NodePlanned means that the model is populated with an algorithm and hyper parameter
	ModelInitialized ModelConditionType = "Initialized"
	// Model was trained on the training set, and validated against the validation set.
	ModelTrained ModelConditionType = "Trained"
	// Model was trained on the training set, and testedActual against the testing set.
	ModelTested ModelConditionType = "Tested"
	// Model report was generated and uploaded to the bucket.
	ModelReported ModelConditionType = "Reported"
	// Model was baked
	ModelPackaged ModelConditionType = "Packaged"
	// Model was baked
	ModelPublished ModelConditionType = "Published"
	// Model profiled
	ModelProfiled ModelConditionType = "Profiled"
	// Execution of the model completed successful
	ModelReady ModelConditionType = "Ready"
	// The model artifact were saved to the database
	ModelSaved ModelConditionType = "Saved"
	// The model artifact were archived in the bucket.
	ModelArchived ModelConditionType = "Archived"
	// The model was explained by computing shap values
	ModelExplained ModelConditionType = "Explained"
	// True if the model is active and serving prediction
	ModelReleased ModelConditionType = "Released"
	// Training was aborted
	ModelAborted ModelConditionType = "Aborted"
	// Training is paused
	ModelPaused ModelConditionType = "Paused"
	//
	ModelForecasted ModelConditionType = "Forecasted"
	// The model is under testing
	ModelUat ModelConditionType = "UAT"
	// The model is in production
	ModelLive ModelConditionType = "Live"
	// The model is stale
	ModelStale ModelConditionType = "Stale"
	// The model is in maintance
	ModelMaintenance ModelConditionType = "Maintenance"
	// The model is in retired
	ModelRetired ModelConditionType = "Retired"
)

// ModelCondition describes the state of a model at a certain point.
type ModelCondition struct {
	// Type of account condition.
	Type ModelConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="string",JSONPath=".status.progress"
// +kubebuilder:printcolumn:name="Best",type="boolean",JSONPath=".status.best"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".spec.studyName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Algorithm",type="string",JSONPath=".spec.estimator.algorithmName"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.objective"
// +kubebuilder:printcolumn:name="CV Score",type="number",JSONPath=".status.cvScore"
// +kubebuilder:printcolumn:name="Train Score",type="number",JSONPath=".status.trainScore"
// +kubebuilder:printcolumn:name="Test Score",type="number",JSONPath=".status.testScore"
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.failureMessage"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=models,singular=model,shortName=md,categories={training,modela,all}
// Model represent a machine learning model.
// models are automatically generated by the planner and trained by the trainer.
// After training, models are packaged into a docker container and served
// by predictor.
type Model struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelList is a list of models.
type ModelList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Model `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelSpec defines the desired state of the Model resource
type ModelSpec struct {
	// Owner is the account name of the owner of this model
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// VersionName is the product version name for this model
	// +kubebuilder:validation:Required
	// +kubebuilder:default:="latest"
	// +kubebuilder:validation:MaxLength=63
	// +required
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// ModelVersion is an assigned version to the model.
	// +kubebuilder:validation:Required
	// +required
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,4,opt,name=modelVersion"`
	// StudyName reference the study for this model. IF empty, the model is stand alone
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +required
	StudyName *string `json:"studyName,omitempty" protobuf:"bytes,5,opt,name=studyName"`
	// DatasetName refer to the dataset object for which the model is for.
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +required
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,6,opt,name=datasetName"`
	// Task is the machine learning task (regression, classification).
	// The task is generated from the study task
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,7,opt,name=task"`
	// Objective is the metric by which the system compare models
	// Default: based on the task. classification is logloss. Regression is rmse
	// +kubebuilder:validation:Required
	// +required
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,8,opt,name=objective"`
	// Represent the preprocessing pipeline of the model. Provide a value if you want to customize the model.
	// Default: All preprocessing will be created automatically
	// +kubebuilder:validation:Optional
	FeatureEngineering FeatureEngineeringSpec `json:"fe,omitempty" protobuf:"bytes,9,opt,name=fe"`
	// Estimator is a specification of the ML algorithm and its hyper parameters.
	// +kubebuilder:validation:Optional
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,10,opt,name=estimator"`
	// Estimator for DNN network, not implemented in this release.
	// +kubebuilder:validation:Optional
	Dnn *DeepEstimatorSpec `json:"dnn,omitempty" protobuf:"bytes,11,opt,name=dnn"`
	// Estimator for chat bot specification. Not implemented for this release.
	// +kubebuilder:validation:Optional
	Chatbot *ChatbotEstimatorSpec `json:"chatbot,omitempty" protobuf:"bytes,12,opt,name=chatbot"`
	// Estimator for NLP model
	// +kubebuilder:validation:Optional
	NLPEstimator *NLPEstimatorSpec `json:"nplEstimator,omitempty" protobuf:"bytes,13,opt,name=nlpEstimator"`
	// If this is an ensemble model, specify the ensemble
	// Default: None
	// +kubebuilder:validation:Optional
	Ensemble EnsembleSpec `json:"ensemble,omitempty" protobuf:"bytes,14,opt,name=ensemble"`
	// TrainingSpec is the desired training settings for the model.
	// +kubebuilder:validation:Optional
	Training TrainingSpec `json:"training,omitempty" protobuf:"bytes,15,opt,name=training"`
	// Specification for serving the model
	// +kubebuilder:validation:Optional
	Serving ServingSpec `json:"serving,omitempty" protobuf:"bytes,16,opt,name=serving"`
	// Tested indicate if this model should be tested. Default is false.
	// The study controller will set this to true if a model is the best model or part of the top models
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Tested *bool `json:"tested,omitempty" protobuf:"varint,17,opt,name=tested"`
	// Aborted indicate the desire to abort the model training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,18,opt,name=aborted"`
	// Packaged the model into tar file
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Packaged *bool `json:"packaged,omitempty" protobuf:"varint,19,opt,name=packaged"`
	// Published indicate that the system should create an docker image with the model binary.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Published *bool `json:"published,omitempty" protobuf:"varint,20,opt,name=published"`
	// Pushed indicate that the system should push the docker image into the docker registry
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pushed *bool `json:"pushed,omitempty" protobuf:"varint,21,opt,name=pushed"`
	// Reported is set when a report should be created for this model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"varint,22,opt,name=reported"`
	// Paused is set when we want to pause the training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"varint,23,opt,name=paused"`
	// Set to true if you want to create model profile.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"varint,24,opt,name=profiled"`
	// Archived is true when the model should be archived
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Archived *bool `json:"archived,omitempty" protobuf:"varint,25,opt,name=archived"`
	// Forecasted is true when the model should perform a forecast
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecasted *bool `json:"forecasted,omitempty" protobuf:"varint,26,opt,name=forecasted"`
	// Indicates that the model should be released to production
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Released *bool `json:"released,omitempty" protobuf:"varint,27,opt,name=released"`
	// Set to true if this model is a benchmark model.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Benchmarked *bool `json:"benchmarked,omitempty" protobuf:"varint,28,opt,name=benchmarked"`
	// Explained indicate weather this model should be explained
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Explained *bool `json:"explained,omitempty" protobuf:"varint,29,opt,name=explained"`
	// Indicate that this model is a baseline
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Baseline *bool `json:"baseline,omitempty" protobuf:"varint,30,opt,name=baseline"`
	// Is this model flagged by the user.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,31,opt,name=flagged"`
	// Location is the location of the model artifacts (metadata, reports and estimators).
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,32,opt,name=location"`
	// The specification for the forecasting algorithm if this model is part of a forecasting
	// +kubebuilder:validation:Optional
	Forecasting *ForecastSpec `json:"forecast,omitempty" protobuf:"bytes,33,opt,name=forecast"`
	// Compilation denotes how to compile the model. Not supported in the current release.
	// +kubebuilder:validation:Optional
	Compilation *catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,34,opt,name=compilation"`
	// ActiveDeadlineSeconds is the deadline of a job for this model.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,35,opt,name=activeDeadlineSeconds"`
	// ModelType is the type of model for this estimator
	// +kubebuilder:default:=classical
	// +kubebuilder:validation:Optional
	EstimatorType *catalog.ModelType `json:"estimatorType,omitempty" protobuf:"bytes,36,opt,name=estimatorType"`
	// TTL
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,37,opt,name=ttl"`
	// Mark the model class. The model class is the origin of the model
	// +kubebuilder:validation:Optional
	ModelClass catalog.ModelClassType `json:"modelClass,omitempty" protobuf:"bytes,38,opt,name=modelClass"`
	// Set the trial ID, by the optimizer.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TrialID *int32 `json:"trialID,omitempty" protobuf:"varint,39,opt,name=trialID"`
	// The Governance requirements.
	// +kubebuilder:validation:Optional
	Governance *data.GovernanceSpec `json:"governance,omitempty" protobuf:"bytes,40,opt,name=governance"`
	// The Interpretability requirements.
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,41,opt,name=interpretability"`
}

type EnsembleSpec struct {
	// Names of the models that were used for the estimators.
	// +kubebuilder:validation:Optional
	Models []string `json:"models,omitempty" protobuf:"bytes,1,rep,name=models"`
	// A list of estimators to ensemble. The ensemble method is represented as the algorithm name.
	// +kubebuilder:validation:Optional
	Estimators []ClassicalEstimatorSpec `json:"estimators,omitempty" protobuf:"bytes,2,rep,name=estimators"`
	// The meta estimator (e.g. Voting classifier)
	// +kubebuilder:validation:Optional
	BaseEstimator *ClassicalEstimatorSpec `json:"base,omitempty" protobuf:"bytes,3,rep,name=base"`
	// The ensempling method type
	// +kubebuilder:validation:Optional
	Type *catalog.EnsembleType `json:"type,omitempty" protobuf:"bytes,4,rep,name=type"`
}

// ModelStatus defines the observed state of the Model
type ModelStatus struct {
	// StartTime represents time when the model is first handled by the model controller
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// TrainStartTime represents time when the model started training.
	// +kubebuilder:validation:Optional
	TrainingStartTime *metav1.Time `json:"trainingStartTime,omitempty" protobuf:"bytes,2,opt,name=trainingStartTime"`
	// TrainCompletionTime represents time when the model ended training
	// +kubebuilder:validation:Optional
	TrainingEndTime *metav1.Time `json:"trainingEndTime,omitempty" protobuf:"bytes,3,opt,name=trainingEndTime"`
	// TestingStartTime represents time when the model started test on a trainer
	// It is not guaranteed to be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	TestingStartTime *metav1.Time `json:"testingStartTime,omitempty" protobuf:"bytes,4,opt,name=testingStartTime"`
	// TestingEndTime represents time when the model ended testing
	// be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	TestingEndTime *metav1.Time `json:"testingEndTime,omitempty" protobuf:"bytes,5,opt,name=testingEndTime"`
	// CompletionTime represent the time that the model is marked as ready
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,6,opt,name=endTime"`
	// CVScrore is the score using on the training set.
	// +kubebuilder:validation:Optional
	CVScore float64 `json:"cvScore,omitempty" protobuf:"bytes,7,opt,name=cvScore"`
	// TrainingScore is the score on the full training set, Evaluating on the training set
	// +kubebuilder:validation:Optional
	TrainingScore float64 `json:"trainingScore,omitempty" protobuf:"bytes,8,opt,name=trainingScore"`
	// TestScore is the score
	// +kubebuilder:validation:Optional
	TestScore float64 `json:"testScore,omitempty" protobuf:"bytes,9,opt,name=testScore"`
	// Cost is the cost of training the model
	// +kubebuilder:validation:Optional
	Cost float64 `json:"cost,omitempty" protobuf:"bytes,10,opt,name=cost"`
	// Best is true if this is the best model
	// +kubebuilder:validation:Optional
	Best bool `json:"best,omitempty" protobuf:"varint,11,opt,name=best"`
	// CV results is the results of performing cross validation on the training set during search.
	// +kubebuilder:validation:Optional
	CV []catalog.Measurement `json:"cv,omitempty" protobuf:"bytes,12,rep,name=cv"`
	// TrainResult is the results of training the model (pipeline) on the full training set
	// +kubebuilder:validation:Optional
	Train []catalog.Measurement `json:"train,omitempty" protobuf:"bytes,13,rep,name=train"`
	// TestResult is the results of training the model (pipeline) on the full training set, and test it on the test set
	// +kubebuilder:validation:Optional
	Test []catalog.Measurement `json:"test,omitempty" protobuf:"bytes,14,rep,name=test"`
	// Phase is the phase of the model
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelPhase `json:"phase" protobuf:"bytes,15,opt,name=phase"`
	// ReportName is a reference to the model report
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,16,opt,name=reportName"`
	// ReportURI is the uri of report
	// +kubebuilder:validation:Optional
	ReportUri string `json:"reportUri,omitempty" protobuf:"bytes,17,opt,name=reportUri"`
	// ManifestUri is the URI of the manifest in the product bucket.
	// +kubebuilder:validation:Optional
	ManifestUri string `json:"manifestUri,omitempty" protobuf:"bytes,18,opt,name=manifestUri"`
	// WeightsUri is the URI of the model binary file.
	// +kubebuilder:validation:Optional
	WeightsUri string `json:"weightsUri,omitempty" protobuf:"bytes,19,opt,name=weightsUri"`
	// LabelEncoderUri is the URI of the label encoder binary file, if there is one.
	// +kubebuilder:validation:Optional
	LabelEncoderUri string `json:"labelEncoderUri,omitempty" protobuf:"bytes,20,opt,name=labelEncoderUri"`
	// LogsUri is the URI of the log file
	// +kubebuilder:validation:Optional
	LogsUri string `json:"logsUri,omitempty" protobuf:"bytes,21,opt,name=logsUri"`
	// ProfileUri is a reference to the visualization uri which were produce during processing
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,22,opt,name=profileUri"`
	// MisclassUri is a reference to the mis-classification file which were produce during processing
	// +kubebuilder:validation:Optional
	MisclassUri string `json:"misclassUri" protobuf:"bytes,23,opt,name=misclassUri"`
	// TarUri is a reference to the model tar file.
	// +kubebuilder:validation:Optional
	TarUri string `json:"tarUri" protobuf:"bytes,24,opt,name=tarUri"`
	// AppUri is a reference to the model app file
	// +kubebuilder:validation:Optional
	AppUri string `json:"appUri" protobuf:"bytes,25,opt,name=appUri"`
	// ImageName is the image name of the model
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName" protobuf:"bytes,26,opt,name=imageName"`
	// +kubebuilder:validation:Optional
	// Importance is list of feature importance based on the alg of this model, sorted by importance
	Importance []FeatureImportance `json:"importance,,omitempty" protobuf:"bytes,27,rep,name=importance"`
	// ForecastUri is the uri of the forecast
	// +kubebuilder:validation:Optional
	ForecastUri string `json:"forecastUri,omitempty" protobuf:"bytes,29,opt,name=forecastUri"`
	// Python version is the result of python version call.
	// +kubebuilder:validation:Optional
	PythonVersion string `json:"pythonVersion,omitempty" protobuf:"bytes,30,opt,name=pythonVersion"`
	// Python packages is the result of running pip freeze
	// +kubebuilder:validation:Optional
	PythonPackages map[string]string `json:"pythonPackages,omitempty" protobuf:"bytes,31,opt,name=pythonPackages"`
	// TrainDatasetLocation is the location of the train dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,32,opt,name=trainDataset"`
	// TestDatasetLocation is the location of the test dataset used to test this model
	// +kubebuilder:validation:Optional
	TestDatasetLocation data.DataLocation `json:"testDataset,omitempty" protobuf:"bytes,33,opt,name=testDataset"`
	// ValidationDatasetLocation is the location of the dataset used for validation
	// +kubebuilder:validation:Optional
	ValidationDataset data.DataLocation `json:"validationDataset,omitempty" protobuf:"bytes,34,opt,name=validationDataset"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,35,opt,name=observedGeneration"`
	//TrainingRows is the amount of rows in training
	// +kubebuilder:validation:Optional
	TrainingRows int32 `json:"trainingRows" protobuf:"varint,36,opt,name=trainingRows"`
	//TestingRows is the amount of rows in testing
	// +kubebuilder:validation:Optional
	TestingRows int32 `json:"testingRows" protobuf:"varint,37,opt,name=testingRows"`
	//Validation row contain the number of validation rows for cases that we have validation.
	// +kubebuilder:validation:Optional
	ValidationRows int32 `json:"validationRows" protobuf:"varint,38,opt,name=validationRows"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,39,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,40,opt,name=failureMessage"`
	// Model Progress in precent, the progress takes into account the different stages of the model.
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,41,opt,name=progress"`
	// Size of the model size
	// +kubebuilder:validation:Optional
	SizeInBytes int32 `json:"sizeInBytes,omitempty" protobuf:"varint,42,opt,name=sizeInBytes"`
	// Prediction Latency
	// +kubebuilder:validation:Optional
	Latency float64 `json:"latency,omitempty" protobuf:"bytes,43,opt,name=latency"`
	// The URL to the released version
	URL string `json:"url,omitempty" protobuf:"bytes,44,opt,name=url"`
	// If the model is released, this is the name of the predictor
	// +kubebuilder:validation:Optional
	PredictorName string `json:"predictorName,omitempty" protobuf:"bytes,45,opt,name=predictorName"`
	// Released at the time when the model was released
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,46,opt,name=releasedAt"`
	// Sha 256 of the model tar file
	// +kubebuilder:validation:Optional
	TarFileHash string `json:"tarfileHash,omitempty" protobuf:"bytes,47,opt,name=tarfileHash"`
	// Sha 256 of the model tar file
	// +kubebuilder:validation:Optional
	ImageHash string `json:"imageHash,omitempty" protobuf:"bytes,48,opt,name=imageHash"`
	// Sha 256 of the data sig
	// +kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,49,opt,name=trainingDataHash"`
	//ResourceConsumed during training
	// +kubebuilder:validation:Optional
	TrainingResources ResourceConsumption `json:"trainingResources,omitempty" protobuf:"bytes,50,opt,name=trainingResources"`
	//ResourceConsumed during testing
	// +kubebuilder:validation:Optional
	TestingResources ResourceConsumption `json:"testingResources,omitempty" protobuf:"bytes,51,opt,name=testingResources"`
	// The account that trained the model
	// +kubebuilder:validation:Optional
	TrainedBy string `json:"trainedBy,omitempty" protobuf:"bytes,52,opt,name=trainedBy"`
	// The team that trained this model
	// +kubebuilder:validation:Optional
	Team string `json:"team,omitempty" protobuf:"bytes,53,opt,name=team"`
	// The image used during training
	// +kubebuilder:validation:Optional
	TrainerImage string `json:"trainerImage,omitempty" protobuf:"bytes,54,opt,name=trainerImage"`
	// If the model is deployed, this points to the end point.
	// +kubebuilder:validation:Optional
	EndPoint string `json:"endpoint,omitempty" protobuf:"bytes,55,opt,name=endpoint"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,56,opt,name=logs"`
	// Roc curve
	// +kubebuilder:validation:Optional
	RocAucCurve catalog.RocAucCurve `json:"rocauccurve,omitempty" protobuf:"varint,57,opt,name=rocauccurve"`
	// PR curve
	// +kubebuilder:validation:Optional
	PRCurve catalog.PRCurve `json:"prcurve,omitempty" protobuf:"varint,58,opt,name=prcurve"`
	// Confusion matrix
	// +kubebuilder:validation:Optional
	ConfusionMatrix catalog.ConfusionMatrix `json:"confusionMatrix,omitempty" protobuf:"varint,59,opt,name=confusionMatrix"`
	// Holds the top correlation with target
	// +kubebuilder:validation:Optional
	CorrelationsWithTarget []data.Correlation `json:"correlationsWithTarget,omitempty" protobuf:"bytes,60,rep,name=correlationsWithTarget"`
	// Holds the top feature correlation
	// +kubebuilder:validation:Optional
	TopCorrelations []data.Correlation `json:"topCorrelations,omitempty" protobuf:"bytes,61,rep,name=topCorrelations"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,62,opt,name=lastUpdated"`
	// The Governance status for this model
	// +kubebuilder:validation:Optional
	Governance data.GovernanceStatus `json:"governance,omitempty" protobuf:"bytes,63,opt,name=governanceStatus"`
	// The Interpretability status for this model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilityStatus `json:"interpretability,omitempty" protobuf:"bytes,64,opt,name=Interpretability"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,65,rep,name=conditions"`
}

// HyperParameterValue represent a specific value of
// the learning algorithm hyper-parameter. The value is chosen
// by the planner
type HyperParameterValue struct {
	// Reference to the name of the hyper parameter.
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// Value hold the value if  the hyper paramer type is string
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}

// ClassicalEstimatorSpec is the specification for an algorithm and the actual value fof the hyper parameters
type ClassicalEstimatorSpec struct {
	// AlgorithmName is a reference to the algorithm in the catalog
	AlgorithmName string `json:"algorithmName,omitempty" protobuf:"bytes,1,opt,name=algorithmName"`
	// Parameters is a list of the algorithm hyper parameters
	Parameters []HyperParameterValue `json:"parameters,omitempty" protobuf:"bytes,2,rep,name=parameters,casttype=HyperParameterValue"`
}

//ChatbotEstimatorSpec is an spec for chat bot. This is not implemented yet
type ChatbotEstimatorSpec struct {
	// The name of the base model
	// +kubebuilder:validation:Optional
	Base *string `json:"base,omitempty" protobuf:"bytes,1,opt,name=base"`
}

//TransformerEstimatorSpec is an transformer. This is not implemented yet.
type NLPEstimatorSpec struct {
	// The name of the base model
	// +kubebuilder:validation:Optional
	Base *string `json:"base,omitempty" protobuf:"bytes,1,opt,name=base"`
}

type FeatureEngineeringSpec struct {
	// List of processing pipelines
	// +kubebuilder:validation:Optional
	Pipelines []FeatureEngineeringPipeline `json:"pipelines,omitempty" protobuf:"bytes,1,rep,name=pipelines"`
	// Define how to handle imbalance
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imbalance *catalog.ImbalanceHandling `json:"imbalance,omitempty" protobuf:"bytes,2,opt,name=imbalance"`
	// Spec for feature selection
	// +kubebuilder:validation:Optional
	FeatureSelection FeatureSelectionSpec `json:"selection,omitempty" protobuf:"bytes,3,opt,name=selection"`
}

// FeatureEngineeringPipeline represent a single pipeline for data transformation.
// The pipeline includes the column names and the data type.
type FeatureEngineeringPipeline struct {
	// The name of this feature engineering pipeline
	// +kubebuilder:validation:Required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The Data type for the feature engineering.
	// +kubebuilder:validation:Required
	// +required
	DataType catalog.DataType `json:"datatype,omitempty" protobuf:"bytes,2,opt,name=datatype"`
	// Columns is the name of the columns from the original file.
	// All the columns must be from the same type
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,3,rep,name=columns"`
	// imputer
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Imputation *catalog.Imputation `json:"imputation,omitempty" protobuf:"bytes,4,opt,name=imputation"`
	// Encoder. Apply only to categorical variables
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Encoding *catalog.CategoricalEncoding `json:"encoding,omitempty" protobuf:"bytes,5,opt,name=encoding"`
	// Numeric var scaler, valid only if the
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Scaling *catalog.Scaling `json:"scaling,omitempty" protobuf:"bytes,6,opt,name=scaling"`
	// Convert numerical datatypes to categories. Valid only if the number data types.
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Discretisation *catalog.Discretisation `json:"discretisation,omitempty" protobuf:"bytes,7,opt,name=discretisation"`
	// For numerical data type.
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	VariableTransformation *catalog.VariableTransformation `json:"variableTransformation,omitempty" protobuf:"bytes,8,opt,name=variableTransformation"`
	// Specify how to handle outliers.
	// +kubebuilder:default:=none
	// Apply only to numeric datatypes.
	OutlierHandling *catalog.OutlierHandling `json:"outlierHandling,omitempty" protobuf:"bytes,9,opt,name=outlierHandling"`
	// Specify how For datetime data type,
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	DatetimeTransformation *catalog.DatatimeTransformation `json:"datetimeTransformation,omitempty" protobuf:"bytes,10,opt,name=datetimeTransformation"`
	// Text specify the column transformation for text columns
	// +kubebuilder:validation:Optional
	Text *TextPipelineSpec `json:"text,omitempty" protobuf:"bytes,11,opt,name=text"`
	// Image specify the pipeline for images. Not supported in this release
	// +kubebuilder:validation:Optional
	Image *ImagePipelineSpec `json:"image,omitempty" protobuf:"bytes,12,opt,name=image"`
	// Audio specify the pipeline for audio. Not supported in this release
	// +kubebuilder:validation:Optional
	Audio *AudioPipelineSpec `json:"audio,omitempty" protobuf:"bytes,13,opt,name=audio"`
	// Video specify the pipeline for video. Not supported in this release
	// +kubebuilder:validation:Optional
	Video *VideoPipelineSpec `json:"video,omitempty" protobuf:"bytes,14,opt,name=video"`
	// Spec to generate one or more columns from existing columns in this pipeline
	// +kubebuilder:validation:Optional
	Genereted []GeneratedColumnSpec `json:"generated,omitempty" protobuf:"bytes,15,rep,name=generated"`
	// Specify custom columns. Custom Columns are specified by the user
	Custom []GeneratedColumnSpec `json:"custom,omitempty" protobuf:"bytes,16,rep,name=custom"`
	// If dropped, all the columns in this pipeline will be dropped.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Drop *bool `json:"drop,omitempty" protobuf:"varint,17,opt,name=drop"`
	// If true, all the features in this pipeline will passtrough, without processing.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Passtrough *bool `json:"passtrough,omitempty" protobuf:"varint,18,opt,name=passtrough"`
}

type FeatureImportance struct {
	Feature string `json:"feature,omitempty" protobuf:"bytes,1,opt,name=feature"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	Importance float64 `json:"importance,omitempty" protobuf:"bytes,2,opt,name=importance"`
}

type SuccessiveHalvingSpec struct {
	// The budget is used in multi fidelity search.
	// This is the percent of fidelity of the model. The meaning is based on the model configuration.
	// For example fidelity is number of epochs in sgd alg
	// Or can be percent of the data in non sgd algorithm.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Budget *int32 `json:"budget,omitempty" protobuf:"varint,1,opt,name=budget"`
	// The bracket of the model when running multi fidelity search.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Bracket *int32 `json:"bracket,omitempty" protobuf:"varint,2,opt,name=bracket"`
	// The rung of the model
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Rung *int32 `json:"rung,omitempty" protobuf:"varint,3,opt,name=rung"`
	// The configuration id allocated to this model in rung 0
	// +kubebuilder:validation:Optional
	ConfID *int32 `json:"confID,omitempty" protobuf:"varint,4,opt,name=confID"`
	// The modality type. The default modality is based on the type of models
	// For deep models - we use epocs.
	// For classical models - we use data
	// +kubebuilder:validation:Optional
	Modality *catalog.ModalityType `json:"modality,omitempty" protobuf:"bytes,26,opt,name=modality"`
}

type DataSplitSpec struct {
	// Define the split type.
	Method catalog.DataSplitMethod `json:"method,omitempty" protobuf:"bytes,1,opt,name=method"`
	// Training is a percent number (0-100) which specify how much of
	// the data will be used for training
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=80
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=100
	Train *int32 `json:"train,omitempty" protobuf:"varint,2,opt,name=train"`
	// Validation is percent of dataset rows which would be used to compute the objective during
	// hyper parameter search phase.
	// Only used if we do not do cross validation.
	// default is 10% of the data, if we do not have cross validation.
	// default is 0% of the data, if we do cross validation.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Maximum=50
	// +kubebuilder:validation:Optional
	Validation *int32 `json:"validation,omitempty" protobuf:"varint,3,opt,name=validation"`
	// Test is percent of dataset rows which would be used to compute the objective during
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:default:=20
	// +kubebuilder:validation:Optional
	Test *int32 `json:"test,omitempty" protobuf:"varint,4,opt,name=test"`
	// The name of the column used to split
	// +kubebuilder:validation:Optional
	SplitColumn *string `json:"splitColumn,omitempty" protobuf:"bytes,5,opt,name=splitColumn"`
	// Apply the segments first
	// +kubebuilder:validation:Optional
	Segments []SegmentSpec `json:"segments,omitempty" protobuf:"bytes,6,rep,name=segments"`
}

// TrainingSpec is the specification of the training process
type TrainingSpec struct {
	// Priority specify the priority of the model in the training queue.
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="medium"
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,1,opt,name=priority"`
	// The  type of cross validation.
	// if we have a validation set, we do not do cv.
	// +kubebuilder:default:=kfold
	// +kubebuilder:validation:Optional
	CvType *catalog.CvType `json:"cvtype,omitempty" protobuf:"bytes,2,opt,name=cvtype"`
	// If true, this is a cross validation using folds. If False, use the validation set.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	CV *bool `json:"cv,omitempty" protobuf:"varint,16,opt,name=cV"`
	// The number of folds during cross validation.
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	Folds *int32 `json:"folds,omitempty" protobuf:"varint,4,opt,name=folds"`
	// Data Split define how to split the data into test and train.
	// +kubebuilder:validation:Optional
	Split DataSplitSpec `json:"split,omitempty" protobuf:"bytes,5,opt,name=split"`
	// Evaluation metrics are the scores
	// +kubebuilder:validation:Optional
	EvalMetrics []catalog.Metric `json:"evalMetrics,omitempty" protobuf:"bytes,6,rep,name=evalMetrics"`
	// Early stopping, stop the training after X models with no improvement.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	EarlyStop *bool `json:"earlyStop,omitempty" protobuf:"varint,7,opt,name=earlyStop"`
	// Add snapshot interval for long training time in minutes.
	// This is used to checkpoint training model.
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=0
	CheckpointInterval *int32 `json:"checkpointInterval,omitempty" protobuf:"varint,8,opt,name=checkpointInterval"`
	// Successive halving represent the configuration for the model training, when running
	// the SuccessiveHalvingSpec model search algorithm
	// The metrics are evaluated using the final model, both on the training set
	// and on the test set
	// +kubebuilder:validation:Optional
	SH *SuccessiveHalvingSpec `json:"sh,omitempty" protobuf:"bytes,9,opt,name=sh"`
	// Used as the random state for an estimator if needed (for example, in RandomForestClassifier)
	// +kubebuilder:default:=42
	// +kubebuilder:validation:Optional
	Seed *float64 `json:"seed,omitempty" protobuf:"bytes,10,opt,name=seed"`
	// Resource define the hardware resources req.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,11,opt,name=resources"`
	// Gpu indicate that training should be done on a gpu.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Gpu *bool `json:"gpu,omitempty" protobuf:"varint,12,opt,name=gpu"`
	// Dist indicate the training should be be distributed
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Distributed *bool `json:"distributed,omitempty" protobuf:"varint,13,opt,name=distributed"`
	// In case of dist node, how many nodes to use.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	NodeCount *int32 `json:"nodeCount,omitempty" protobuf:"varint,14,opt,name=nodeCount"`
	// Set the precent of dataset to use during training. This is usually assigned
	// by the optimizer.
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	SamplePct *int32 `json:"samplePct,omitempty" protobuf:"bytes,15,opt,name=samplePct"`
}

// Specification for serving this model
type ServingSpec struct {
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,1,opt,name=resources"`
}

// TextPipelineSpec is the specification for preprocessing of text columns
type TextPipelineSpec struct {
	// The text encoder (e.g. tfidf)
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Encoder *catalog.TextEncoding `json:"encoder,omitempty" protobuf:"bytes,1,opt,name=encoder"`
	// Text tokenizer
	// +kubebuilder:validation:Optional
	Tokenizer *string `json:"tokenizer,omitempty" protobuf:"bytes,2,opt,name=tokenizer"`
	// If true, the controller will Add stop word handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	StopWords *bool `json:"stopwords,omitempty" protobuf:"varint,3,opt,name=stopwords"`
	// If true, the controller will Add part of speech handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Pos *bool `json:"pos,omitempty" protobuf:"varint,4,opt,name=pos"`
	// If true, the controller will Add lemma handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Lemma *bool `json:"lemma,omitempty" protobuf:"varint,5,opt,name=lemma"`
	// If true, the controller will Add stemmer handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Stem *bool `json:"stem,omitempty" protobuf:"varint,6,opt,name=stem"`
	// If true, the controller will Add word embedding handling to the text pipeline.
	// +kubebuilder:validation:Optional
	Embedding *string `json:"embedding,omitempty" protobuf:"bytes,7,opt,name=embedding"`
	// Use SVD
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Svd *bool `json:"svd,omitempty" protobuf:"varint,8,opt,name=svd"`
	// Max SVD Components to use
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MaxSvdComponents *int32 `json:"maxSvdComponents,omitempty" protobuf:"varint,9,opt,name=maxSvdComponents"`
}

// ImagePipelineSpec is the specification for preprocessing image data
type ImagePipelineSpec struct {
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.ImageFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,1,opt,name=featurizer"`
}

// VideoPipelineSpec is the specification for preprocessing video data
type VideoPipelineSpec struct {
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.VideoFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,1,opt,name=featurizer"`
}

// AudioPipelineSpec is the specification for preprocessing audio data
type AudioPipelineSpec struct {
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.AudioFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,1,opt,name=featurizer"`
}

// Represent the feature consumption.
type ResourceConsumption struct {
	Cpu float64 `json:"cpu,omitempty" protobuf:"bytes,1,opt,name=cpu"`
	Mem float64 `json:"mem,omitempty" protobuf:"bytes,2,opt,name=mem"`
	Gpu float64 `json:"gpu,omitempty" protobuf:"bytes,3,opt,name=gpu"`
}

// List compiler spec
type DataHashes struct {
	// Training
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TrainingHash string `json:"trainingHash,omitempty" protobuf:"bytes,1,opt,name=trainHash"`
	// Testing hash is a sha 256 of the testing data.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TestingHash string `json:"testingHash,omitempty" protobuf:"bytes,2,opt,name=testingHash"`
	// Pointer to the validation
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ValidationHash string `json:"validationHash,omitempty" protobuf:"bytes,3,opt,name=validationHash"`
}

type FeatureEngineeringSearchStatus struct {
	// The recommended pipeline after feature engineering was done
	Best FeatureEngineeringSpec `json:"best,omitempty" protobuf:"bytes,1,opt,name=best"`
}

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

// Feature selection spec defines how to select feature
type FeatureSelectionSpec struct {
	// Enable the feature selection.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,rep,name=enabled"`
	// Precent of data to sample while preforming the feature engineering search
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	SamplePct *int32 `json:"samplePct,omitempty" protobuf:"varint,2,rep,name=samplePct"`
	// If true, sample embedding methods as part of candidate algorithms for feature selection
	// Example of embedded method are tree based selection
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Embedding *bool `json:"embedding,omitempty" protobuf:"varint,3,rep,name=embedding"`
	// If true, sample filter methods. Filter method are based on statistical tests.
	// For example, chi square and anova tests.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Filter *bool `json:"filter,omitempty" protobuf:"varint,4,rep,name=filter"`
	// If true, sample wrapper methods,
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Wrapper *bool `json:"wrapper,omitempty" protobuf:"varint,5,rep,name=wrapper"`
	// the Feature selection pipeline.
	// Steps are applied in the order of the pipeline
	Pipeline []catalog.FeatureSelection `json:"pipeline,omitempty" protobuf:"varint,6,rep,name=pipeline"`
	// Lowvar specify the filter to remove low variance features
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	VarianceTresholdPct *int32 `json:"varianceTresholdPct,omitempty" protobuf:"varint,7,opt,name=varianceTresholdPct"`
	// Remove Features with high correlations
	// +kubebuilder:default:=95
	// +kubebuilder:validation:Optional
	CorrTreshold *int32 `json:"corrTreshold,omitempty" protobuf:"varint,8,opt,name=corrTreshold"`
	// Select the Top N is the number of feature to select by importance. If 0, all the features are selected.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TopN *int32 `json:"topN,omitempty" protobuf:"varint,9,opt,name=topN"`
	// The cummulative importance of all the importance feature to include
	// +kubebuilder:default:=95
	// +kubebuilder:validation:Optional
	CumulativeImportancePrecent *int32 `json:"cumulativeImportancePrecent,omitempty" protobuf:"varint,10,opt,name=cumulativeImportancePrecent"`
	// List of feature names to consider when training , even after filtering
	// +kubebuilder:validation:Optional
	Reserved []string `json:"reserved,omitempty" protobuf:"bytes,11,rep,name=reserved"`
}

type InterpretabilitySpec struct {
	// If true generate ice plots for each feature.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	ICE *bool `json:"ice,omitempty" protobuf:"varint,1,opt,name=ice"`
	// Define one or more feature pairs. The system will generate ice scatter diagram for each pair.
	ICEPairs []FeaturePair `json:"icepairs,omitempty" protobuf:"bytes,2,rep,name=icepairs"`
	// If true generate lime plot
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Lime *bool `json:"lime,omitempty" protobuf:"varint,3,opt,name=lime"`
	// Set the shap type. Set to none for not shap value. This is set automatically by the system based on the model type.
	// Due to high compute time, currently only two types are supported : linear and tree.
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Shap *catalog.ShapType `json:"shap,omitempty" protobuf:"bytes,4,opt,name=shap"`
	// Generate scatter shap diagram for each pair.
	// +kubebuilder:validation:Optional
	ShapPairs []FeaturePair `json:"shappairs,omitempty" protobuf:"varint,5,rep,name=shappairs"`
	// If true generate counter factual
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CounterFactual *bool `json:"counterfactual,omitempty" protobuf:"varint,6,opt,name=counterfactual"`
	// If true generate anchor explentation.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Anchor *bool `json:"anchor,omitempty" protobuf:"varint,7,opt,name=anchor"`
}

type FeaturePair struct {
	// The name of feature A
	X string `json:"x,omitempty" protobuf:"bytes,1,opt,name=x"`
	Y string `json:"y,omitempty" protobuf:"bytes,2,opt,name=y"`
}

type InterpretabilityStatus struct {
	// StartTime represents time when the model interpretability started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"trainingStartTime,omitempty" protobuf:"bytes,1,opt,name=trainingStartTime"`
	// EndTime represents time when the model interpretability ended
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"trainingEndTime,omitempty" protobuf:"bytes,2,opt,name=trainingEndTime"`

	// The URI for the explainer
	ExplainerURI string `json:"explainerURI,omitempty" protobuf:"bytes,3,opt,name=explainerURI"`

	// The location of the train shap value uri
	TrainShapValuesURI string `json:"trainShapValuesURI,omitempty" protobuf:"bytes,4,opt,name=trainShapValuesURI"`

	// The location of the test shap value uri
	TestShapValuesURI string `json:"testShapValuesURI,omitempty" protobuf:"bytes,5,opt,name=testShapValuesURI"`

	// Shap based feature importance
	Importance []FeatureImportance `json:"importance,omitempty" protobuf:"bytes,6,rep,name=importance"`
}
