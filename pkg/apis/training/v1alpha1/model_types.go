package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
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
	PrevModel *string `json:"prevModel" protobuf:"bytes,2,opt,name=prevModel"`
	// Labeled dataset used to test the model, when measuring a performance metric
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName" protobuf:"bytes,3,opt,name=datasetName"`
	// +kubebuilder:validation:Optional
	DriftFreq catalog.Freq `json:"driftFreq" protobuf:"bytes,4,opt,name=driftFreq"`
	// +kubebuilder:validation:Optional
	DriftInterval *int32 `json:"driftInterval" protobuf:"bytes,5,opt,name=driftInterval"`
	// +kubebuilder:validation:Optional
	Column *string `json:"column" protobuf:"bytes,6,opt,name=column"`
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
	ModelPhasePending         ModelPhase = "Pending"
	ModelPhaseTrainRunning    ModelPhase = "TrainRunning"
	ModelPhaseTrainSuccess    ModelPhase = "TrainSuccess"
	ModelPhaseTrainFailed     ModelPhase = "TrainFailed"
	ModelPhaseTestRunning     ModelPhase = "TestRunning"
	ModelPhaseTestSuccess     ModelPhase = "TestSuccess"
	ModelPhaseTestFailed      ModelPhase = "TestFailed"
	ModelPhaseReportRunning   ModelPhase = "ReportRunning"
	ModelPhaseReportSuccess   ModelPhase = "ReportSuccess"
	ModelPhaseReportFailed    ModelPhase = "ReportFailed"
	ModelPhasePublishRunning  ModelPhase = "PublishRunning"
	ModelPhasePublishSuccess  ModelPhase = "PublishSuccess"
	ModelPhasePublishFailed   ModelPhase = "PublishFailed"
	ModelPhaseProfileRunning  ModelPhase = "ProfileRunning"
	ModelPhaseProfileSuccess  ModelPhase = "ProfileSuccess"
	ModelPhaseProfileFailed   ModelPhase = "ProfileFailed"
	ModelPhaseAborted         ModelPhase = "Aborted"
	ModelPhaseServing         ModelPhase = "Serving"
	ModelPhaseForecastRunning ModelPhase = "ForecastRunning"
	ModelPhaseForecasted      ModelPhase = "Forecasted"
	ModelPhaseFailedForecast  ModelPhase = "FailedForecast"
	ModelPhaseUat             ModelPhase = "UAT"
	ModelPhaseProd            ModelPhase = "Deployment"
	ModelPhaseStale           ModelPhase = "Stale"
	ModelPhaseMaintaince      ModelPhase = "Maintainance"
	ModelPhaseRetired         ModelPhase = "Retired"
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
	// Container Image was created and pushed to the image repository
	ModelPublished ModelConditionType = "Published"
	// Model profiled
	ModelProfiled ModelConditionType = "Profiled"
	// Execution of the model completed successful
	ModelReady ModelConditionType = "Ready"
	// The model artifact were saved to the database
	ModelSaved ModelConditionType = "Saved"
	// The model artifact were archived in the bucket.
	ModelArchived ModelConditionType = "Archived"
	// True if the model is active and serving prediction
	ModelServing ModelConditionType = "Serving"
	// Training was aborted
	ModelAborted ModelConditionType = "Aborted"
	// Training is paused
	ModelPaused ModelConditionType = "Paused"
	//
	ModelForecasted ModelConditionType = "Forecasted"
	// The model is under testing
	ModelUat ModelConditionType = "UAT"
	// The model is in production
	ModelProd ModelConditionType = "Deployment"
	// The model is stale
	ModelStale ModelConditionType = "Stale"
	// The model is in maintance
	ModelMaintaince ModelConditionType = "Maintainance"
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
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=models,singular=model,shortName=md,categories={training,modeld,all}
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
	VersionName *string `json:"versionName" protobuf:"bytes,2,opt,name=versionName"`
	// ModelVersion is a semver version of a model
	// +kubebuilder:validation:Required
	ModelVersion *string `json:"modelVersion" protobuf:"bytes,3,opt,name=modelVersion"`
	// StudyName reference the study for this model. IF empty, the model is stand alone
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	StudyName *string `json:"studyName" protobuf:"bytes,4,opt,name=studyName"`
	// DatasetName refer to the dataset object for which the study is for.
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	DatasetName *string `json:"datasetName" protobuf:"bytes,5,opt,name=datasetName"`
	// Task is the machine learning task (regression, classification).
	// The task is generated from the study task
	// +kubebuilder:validation:Required
	Task *catalog.MLTask `json:"task" protobuf:"bytes,6,opt,name=task"`
	// Objective is the metric by which the system compare models
	// Default: based on the task. classification is logloss. Regression is rmse
	// +kubebuilder:validation:Required
	Objective *catalog.Metric `json:"objective" protobuf:"bytes,7,opt,name=objective"`
	// Represent the preprocessing pipeline of the model. Provide a value if you want to customize the model.
	// Default: All preprocessing will be created automatically
	// +kubebuilder:validation:Optional
	Preprocessing *PreprocessingSpec `json:"preprocessing,omitempty" protobuf:"bytes,8,opt,name=preprocessing"`
	// Estimator is a specification of the ML algorithm and its hyper parameters.
	// +kubebuilder:validation:Optional
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,9,opt,name=estimator"`
	// Dnn is a specification of the DNN estimator specification. Not supported for this release.
	// +kubebuilder:validation:Optional
	Dnn *DeepEstimatorSpec `json:"dnn,omitempty" protobuf:"bytes,10,opt,name=dnn"`
	// Dnn is a specification of the DNN estimator specification. Not supported for this release.
	// +kubebuilder:validation:Optional
	Chatbot *ChatbotEstimatorSpec `json:"chatbot,omitempty" protobuf:"bytes,11,opt,name=chatbot"`
	// Dnn is a specification of the DNN estimator specification. Not supported for this release.
	// +kubebuilder:validation:Optional
	Transformer *TransformerEstimatorSpec `json:"transformer,omitempty" protobuf:"bytes,12,opt,name=transformer"`

	// If this is an ensemble model, specify the ensemble
	// Default: None
	// +kubebuilder:validation:Optional
	Ensemble *EnsembleSpec `json:"ensemble,omitempty" protobuf:"bytes,13,opt,name=ensemble"`
	// TrainingSpec is the desired training settings
	// +kubebuilder:validation:Optional
	Training *TrainingSpec `json:"training,omitempty" protobuf:"bytes,14,opt,name=training"`
	// Tested indicate if this model should be testedActual. Default is false.
	// The study controller will set this to true if a model is the best model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Tested *bool `json:"tested,omitempty" protobuf:"bytes,15,opt,name=tested"`
	// Aborted indicate the desire to abort the model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"bytes,16,opt,name=aborted"`
	// Published is set when we want to wrap the model in a docker container
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Published *bool `json:"published,omitempty" protobuf:"bytes,17,opt,name=published"`
	// Pushed indicate if the model image should be pushed into the remote docker registry.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pushed *bool `json:"pushed,omitempty" protobuf:"bytes,18,opt,name=pushed"`
	// Reported is set when a report should be created for this model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reported *bool `json:"reported,omitempty" protobuf:"bytes,19,opt,name=reported"`
	// Paused is set when we want to pause the training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Paused *bool `json:"paused,omitempty" protobuf:"bytes,20,opt,name=paused"`
	// Profiled is set when we want to create model profile.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"bytes,21,opt,name=profiled"`
	// Archived is true when the model should be archived
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Archived *bool `json:"archived,omitempty" protobuf:"bytes,22,opt,name=archived"`
	// Forecasted is true when the model should perform a forecast
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecasted *bool `json:"forecasted,omitempty" protobuf:"bytes,23,opt,name=forecasted"`
	// Location is the location of the model artifacts (metadata, reports and estimators).
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,24,opt,name=location"`
	// The specification for the forecasting algorithm if this is a forecast study.
	// +kubebuilder:validation:Optional
	Forecasting *ForecastingSpec `json:"forecastingSpec,omitempty" protobuf:"bytes,25,opt,name=forecastingSpec"`
	// Compilation denotes how to compile the model.
	// +kubebuilder:validation:Optional
	Compilation *catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,26,opt,name=compilation"`
	// ActiveDeadlineSeconds is the deadline of a job for this model.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,27,opt,name=activeDeadlineSeconds"`
	// ModelType is the type of model for this estimator
	// +kubebuilder:default:=classical
	// +kubebuilder:validation:Optional
	EstimatorType *ModelType `json:"estimatorType,omitempty" protobuf:"bytes,28,opt,name=estimatorType"`
}

type EnsembleSpec struct {
	// A list of base model to ensemble. The ensemble method is represented as the algorithm name.
	// +kubebuilder:validation:Optional
	Base []string `json:"base,omitempty" protobuf:"bytes,2,rep,name=base"`
}

// ModelStatus defines the observed state of the Model
type ModelStatus struct {
	// StartTime represents time when the model is first handled by the model controller
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`

	// TrainStartTime represents time when the model started training.
	// +kubebuilder:validation:Optional
	TrainStartTime *metav1.Time `json:"trainStartTime,omitempty" protobuf:"bytes,2,opt,name=trainStartTime"`

	// TrainCompletionTime represents time when the model ended training
	// +kubebuilder:validation:Optional
	TrainCompletionTime *metav1.Time `json:"trainCompletionTime,omitempty" protobuf:"bytes,3,opt,name=trainCompletionTime"`

	// TestStartTime represents time when the model started test on a trainer
	// It is not guaranteed to be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	TestStartTime *metav1.Time `json:"testStartTime,omitempty" protobuf:"bytes,4,opt,name=testStartTime"`

	// TestCompletionTime represents time when the model ended testing
	// be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +kubebuilder:validation:Optional
	TestCompletionTime *metav1.Time `json:"testCompletionTime,omitempty" protobuf:"bytes,5,opt,name=testCompletionTime"`

	// CompletionTime represent the time that the model is marked as ready
	// +kubebuilder:validation:Optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,6,opt,name=completionTime"`

	// CVScrore is the score using on the training set.
	// +kubebuilder:validation:Optional
	CVScore float64 `json:"cvScore,omitempty" protobuf:"bytes,7,opt,name=cvScore"`
	// TrainScore is the score on the full training set, Evaluating on the training set
	// +kubebuilder:validation:Optional
	TrainScore float64 `json:"trainScore,omitempty" protobuf:"bytes,8,opt,name=trainScore"`
	// TestScore is the score
	// +kubebuilder:validation:Optional
	TestScore float64 `json:"testScore,omitempty" protobuf:"bytes,9,opt,name=testScore"`
	// Cost is the cost of training the model
	// +kubebuilder:validation:Optional
	Cost float64 `json:"cost,omitempty" protobuf:"bytes,10,opt,name=cost"`
	// Best is true if this is the best model
	// +kubebuilder:validation:Optional
	Best bool `json:"best,omitempty" protobuf:"bytes,11,opt,name=best"`
	// TrainResult is the results of training the model (pipeline) on the full training set, and test it on the training set
	// +kubebuilder:validation:Optional
	TrainResult []catalog.Measurement `json:"trainResult,omitempty" protobuf:"bytes,12,rep,name=trainResult"`
	// TestResult is the results of training the model (pipeline) on the full training set, and test it on the test set
	// +kubebuilder:validation:Optional
	TestResult []catalog.Measurement `json:"testResult,omitempty" protobuf:"bytes,13,rep,name=testResult"`
	// Phase is the phase of the model
	// +kubebuilder:validation:Optional
	Phase ModelPhase `json:"phase" protobuf:"bytes,14,opt,name=phase"`
	// ReportName is a reference to the model report
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,15,opt,name=reportName"`
	// ManifestUri is the URI of the manifest in the product bucket.
	// +kubebuilder:validation:Optional
	ManifestUri string `json:"manifestUri,omitempty" protobuf:"bytes,16,opt,name=manifestUri"`
	// WeightsUri is the URI of the model binary file.
	// +kubebuilder:validation:Optional
	WeightsUri string `json:"weightsUri,omitempty" protobuf:"bytes,17,opt,name=weightsUri"`
	// LabelEncoderUri is the URI of the label encoder binary file, if there is one.
	// +kubebuilder:validation:Optional
	LabelEncoderUri string `json:"labelsEncoderUri,omitempty" protobuf:"bytes,18,opt,name=labelsEncoderUri"`
	// LogsUri is the URI of the log file
	// +kubebuilder:validation:Optional
	LogsUri string `json:"logsUri,omitempty" protobuf:"bytes,19,opt,name=logsUri"`
	// ProfileUri is a reference to the visualization uri which were produce during processing
	// +kubebuilder:validation:Optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,20,opt,name=profileUri"`
	// MisclassUri is a reference to the mis-classification file which were produce during processing
	// +kubebuilder:validation:Optional
	MisclassUri string `json:"misclassUri" protobuf:"bytes,21,opt,name=misclassUri"`
	// ImageName is the image name of the model
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName" protobuf:"bytes,22,opt,name=imageName"`
	// +kubebuilder:validation:Optional
	// Importance is list of feature importance based on the alg of this model, sorted by importance
	Importance []FeatureImportance `json:"importance,,omitempty" protobuf:"bytes,23,rep,name=importance"`
	// ForecastUri is the uri of the forecast
	// +kubebuilder:validation:Optional
	ForecastUri string `json:"forecastUri,omitempty" protobuf:"bytes,24,opt,name=forecastUri"`
	// Python version is the result of python vewrsion call.
	// +kubebuilder:validation:Optional
	PythonVersion string `json:"pythonVersion,omitempty" protobuf:"bytes,25,opt,name=pythonVersion"`
	// Python packages is the result of running pip freeze
	// +kubebuilder:validation:Optional
	PythonPackages map[string]string `json:"pythonPackages,omitempty" protobuf:"bytes,26,opt,name=pythonPackages"`
	// TrainDatasetLocation is the location of the train dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation data.DataLocation `json:"trainDataset,omitempty" protobuf:"bytes,27,opt,name=trainDataset"`
	// TestDatasetLocation is the location of the test dataset used to test this model
	// +kubebuilder:validation:Optional
	TestDatasetLocation data.DataLocation `json:"testDataset,omitempty" protobuf:"bytes,28,opt,name=testDataset"`
	// ValidationDatasetLocation is the location of the dataset used for validation
	// +kubebuilder:validation:Optional
	ValidationDataset data.DataLocation `json:"validationDataset,omitempty" protobuf:"bytes,29,opt,name=validationDataset"`
	//ResourceConsumed is the avg resource consumed during the training of the model
	// +kubebuilder:validation:Optional
	ResourceConsumed ResourceConsumption `json:"resourceConsumed,omitempty" protobuf:"bytes,30,opt,name=resourceConsumed"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,31,opt,name=observedGeneration"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,32,rep,name=conditions"`
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
}

//TransformerEstimatorSpec is an transformer. This is not implemented yet.
type TransformerEstimatorSpec struct {
}

// PreprocessingSpec of the pre processing pipeline
type PreprocessingSpec struct {
	// One or more categorical pipelines.
	// +kubebuilder:validation:Optional
	Categorical *CategoricalPipelineSpec `json:"categorical,omitempty" protobuf:"bytes,1,opt,name=categorical"`
	// Numeric specify the column transformation for numeric columns
	// +kubebuilder:validation:Optional
	Numeric *NumericPipelineSpec `json:"numeric,omitempty" protobuf:"bytes,2,opt,name=numeric"`
	// Text specify the column transformation for text columns
	// +kubebuilder:validation:Optional
	Text *TextPipelineSpec `json:"text,omitempty" protobuf:"bytes,3,opt,name=text"`
	// Image specify the pipeline for images. Not supported in this release
	// +kubebuilder:validation:Optional
	Image *ImagePipelineSpec `json:"image,omitempty" protobuf:"bytes,4,opt,name=image"`
	// Audio specify the pipeline for audio. Not supported in this release
	// +kubebuilder:validation:Optional
	Audio *AudioPipelineSpec `json:"audio,omitempty" protobuf:"bytes,5,opt,name=audio"`
	// Video specify the pipeline for video. Not supported in this release
	// +kubebuilder:validation:Optional
	Video *VideoPipelineSpec `json:"video,omitempty" protobuf:"bytes,6,opt,name=video"`
	// DataTime specify the column transformation for datetime columns
	// +kubebuilder:validation:Optional
	DataTime *DateTimePipelineSpec `json:"datatime,omitempty" protobuf:"bytes,7,opt,name=datetime"`
	// FeaturePipeline selector
	// +kubebuilder:validation:Optional
	Selector *catalog.FeatureSelector `json:"featureSelector,omitempty" protobuf:"bytes,8,opt,name=featureSelector"`
	// Dim reducer
	// +kubebuilder:validation:Optional
	Reducer *catalog.DimReducer `json:"reducer,omitempty" protobuf:"bytes,9,opt,name=reducer"`
	// Imbalance flag instruct the designer to create an imbalanced pipeline. Default is false
	// +kubebuilder:validation:Optional
	Imbalanced *bool `json:"imbalanced,omitempty" protobuf:"bytes,10,opt,name=imbalanced"`
}

type FeatureImportance struct {
	Feature    string  `json:"feature,omitempty" protobuf:"bytes,1,opt,name=feature"`
	Importance float32 `json:"importance,omitempty" protobuf:"bytes,2,opt,name=importance"`
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
	Modality *ModalityType `json:"modality,omitempty" protobuf:"bytes,26,opt,name=modality"`
}

// TrainingSpec is the specification of the training process
type TrainingSpec struct {
	// Priority specify the priority of the model in the training queue.
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	Priority *int32 `json:"priority,omitempty" protobuf:"varint,2,opt,name=priority"`
	// The  type of cross validation.
	// if we have a validation set, we do not do cv.
	// +kubebuilder:default:=kfold
	// +kubebuilder:validation:Optional
	CvType *catalog.CvType `json:"cvtype,omitempty" protobuf:"bytes,3,opt,name=cvtype"`
	// If true, this is a cross validation using folds. If False, use the validation set.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	CV *bool `json:"cv,omitempty" protobuf:"bytes,4,opt,name=cv"`
	// The number of folds during cross validation.
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	Folds *int32 `json:"folds,omitempty" protobuf:"varint,6,opt,name=folds"`
	// Retry attempt is the number of training retry for this model,
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	Retry *int32 `json:"retry,omitempty" protobuf:"varint,7,rep,name=retry"`
	// Evaluation metrics are the scores
	// +kubebuilder:validation:Optional
	EvalMetrics []catalog.Metric `json:"evalMetrics,omitempty" protobuf:"bytes,8,opt,name=evalMetrics"`
	// Early stopping, stop the training after X models with no improvement.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	EarlyStop *bool `json:"earlyStop,omitempty" protobuf:"bytes,9,opt,name=earlyStop"`
	// Add snapshot interval for long training time in minutes.
	// This is used to checkpoint training model.
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Minimum=0
	CheckpointInterval *int32 `json:"checkpointInterval,omitempty" protobuf:"varint,10,opt,name=checkpointInterval"`
	// Define the forecast period for time series studies. This is only used in time series models.
	// Default: Empty
	// +kubebuilder:validation:Optional
	Forecast *ForecastingSpec `json:"forecast,omitempty" protobuf:"bytes,11,opt,name=forecast"`
	// Successive halving represent the configuration for the model training, when running
	// the SuccessiveHalvingSpec model search algorithm
	// The metrics are evaluated using the final model, both on the training set
	// and on the test set
	// +kubebuilder:validation:Optional
	SH *SuccessiveHalvingSpec `json:"sh,omitempty" protobuf:"bytes,12,opt,name=sh"`
	// Used as the random state for an estimator if needed (for example, in RandomForestClassifier)
	// +kubebuilder:default:=42
	// +kubebuilder:validation:Optional
	Seed *float64 `json:"seed,omitempty" protobuf:"bytes,13,opt,name=seed"`
	// WorkloadClassName is the name of the workload class used to run this model. This is assigned by the study
	// +kubebuilder:default:="nano-cpu-250m-mem-256mi"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,14,opt,name=workloadClassName"`
}

// CategoricalPipelineSpec is the specification for processing categorical columns
type CategoricalPipelineSpec struct {
	// The columns for this pipeline. Use * to denotes all the columns.
	// Must have at least on value.
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// Categorical varaible imputer
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imputer *catalog.Imputator `json:"imputer,omitempty" protobuf:"bytes,2,opt,name=imputer"`
	// CatEncoder
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Encoder *catalog.CatEncoder `json:"encoder,omitempty" protobuf:"bytes,3,opt,name=encoder"`
}

// NumericPipelineSpec is the specification for preprocessing numerical columns
type NumericPipelineSpec struct {
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// Numerical var imputer
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imputer *catalog.Imputator `json:"imputer,omitempty" protobuf:"bytes,2,opt,name=imputer"`
	// Numeric var scaler
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Scaler *catalog.Scaler `json:"scaler,omitempty" protobuf:"bytes,3,opt,name=scaler"`
}

// TextPipelineSpec is the specification for preprocessing of text columns
type TextPipelineSpec struct {
	// The list of test columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// The text encoder (e.g. tfidf)
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Encoder *catalog.TextTransformer `json:"encoder,omitempty" protobuf:"bytes,2,opt,name=encoder"`
	// Text tokenizer
	// +kubebuilder:validation:Optional
	Tokenizer *string `json:"tokenizer,omitempty" protobuf:"bytes,3,opt,name=tokenizer"`
	// If true, the controller will Add stop word handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	StopWords *bool `json:"stopwords,omitempty" protobuf:"bytes,4,opt,name=stopwords"`
	// If true, the controller will Add part of speech handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Pos *bool `json:"pos,omitempty" protobuf:"bytes,5,opt,name=pos"`
	// If true, the controller will Add lemma handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Lemma *bool `json:"lemma,omitempty" protobuf:"bytes,6,opt,name=lemma"`
	// If true, the controller will Add stemmer handling to the text pipeline.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Stem *bool `json:"stem,omitempty" protobuf:"bytes,7,opt,name=stem"`
	// If true, the controller will Add word embedding handling to the text pipeline.
	// +kubebuilder:validation:Optional
	Embedding *string `json:"embedding,omitempty" protobuf:"bytes,8,opt,name=embedding"`
}

//DateTimePipelineSpec is the specification for preprocessing datetime features
type DateTimePipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Imputer *catalog.Imputator `json:"imputer,omitempty" protobuf:"bytes,2,opt,name=imputer"`
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Expand *bool `json:"expand,omitempty" protobuf:"bytes,3,opt,name=expand"`
}

// ImagePipelineSpec is the specification for preprocessing image data
type ImagePipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.ImageFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,2,opt,name=featurizer"`
}

// VideoPipelineSpec is the specification for preprocessing video data
type VideoPipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.VideoFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,2,opt,name=featurizer"`
}

// AudioPipelineSpec is the specification for preprocessing audio data
type AudioPipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,rep,name=columns"`
	// The date time imputer.
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Featurizer *catalog.AudioFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,2,opt,name=featurizer"`
}

// PreformanceStatus containt the avg resource consumption
type ResourceConsumption struct {
	Cpu int32 `json:"cpu,omitempty" protobuf:"varint,1,opt,name=cpu"`
	Mem int32 `json:"mem,omitempty" protobuf:"varint,2,opt,name=mem"`
	Gpu int32 `json:"gpu,omitempty" protobuf:"varint,3,opt,name=gpu"`
}

// ForecastingSpec
type ForecastingSpec struct {
	// The name of the time column
	// +kubebuilder:validation:Required
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,1,opt,name=timeColumn"`
	// The name of the column holding the value.
	// By default this is the target column from the dataset.
	// +kubebuilder:validation:Optional
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,2,opt,name=targetColumn"`
	// The format of the datetime column. Used default
	// +kubebuilder:validation:Optional
	DateTimeFormat *string `json:"datetimeFormat,omitempty" protobuf:"bytes,3,opt,name=datetimeFormat"`
	// The list of the dimension columns. If non, the system will treat the whole time series as one.
	// +kubebuilder:validation:Optional
	Dimensions []string `json:"dimensions,omitempty" protobuf:"bytes,4,rep,name=dimensions"`
	// List of other columns to take into consideration
	// Default None
	// +kubebuilder:validation:Optional
	Repressors []string `json:"repressors,omitempty" protobuf:"bytes,5,rep,name=repressors"`
	// Required, the freq of the time series (daily,weekly)
	// +kubebuilder:validation:Optional
	FreqSpec *FreqSpec `json:"freqSpec,omitempty" protobuf:"bytes,6,opt,name=freqSpec"`
	// Horizon is the number of data points to predict in the future.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Horizon *int32 `json:"horizon,omitempty" protobuf:"varint,7,opt,name=horizon"`
	// The confidence levels for the forecast, each level must be between 1-100.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	ConfidenceInterval *int32 `json:"confidenceIntervals,omitempty" protobuf:"varint,8,opt,name=confidenceInterval"`
	// Set an holiday schedule for a country.
	//+optional
	CountryForHoliday *catalog.HolidayCountry `json:"countryForHoliday,omitempty" protobuf:"bytes,9,opt,name=countryForHoliday"`
	// a set of value for each partition key
	// +kubebuilder:validation:Optional
	DimensionValues []DimensionValue `json:"dimensionValues,omitempty" protobuf:"bytes,10,rep,name=dimensionValues"`
	// The backtest specification, the system supports back testing with expanding windows.
	// +kubebuilder:validation:Optional
	Backtest *BacktestSpec `json:"backtest,omitempty" protobuf:"bytes,11,opt,name=backtest"`
	// The name of the connection for a database the result of the forecast
	// If null, the system will insert the forecast in the database.
	// +kubebuilder:validation:Optional
	ForecastConnectionName *string `json:"forecastConnectionName,omitempty" protobuf:"bytes,12,opt,name=forecastConnectionName"`
	// Specify if we should generate a forecast using the model
	// If true, the system will perform a forecast and update the forecast connection.
	// Default it true
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"bytes,13,opt,name=forecast"`
}

// FreqSpec specify the frequency specification.
type FreqSpec struct {
	// Default to 1.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Interval *int32 `json:"interval,omitempty" protobuf:"varint,1,opt,name=interval"`
	// required
	Units *catalog.Freq `json:"unit,omitempty" protobuf:"bytes,2,opt,name=unit"`
}

// BacktestSpec specify the back test
type BacktestSpec struct {
	// The initial number of data points, default to 80% of rows.
	// +kubebuilder:default:=80
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Initial *int32 `json:"initial,omitempty" protobuf:"varint,1,opt,name=initial"`
	// The number of backtesting windows. Default to 3. can be from 1 to 5.
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Windows *int32 `json:"windows,omitempty" protobuf:"varint,2,opt,name=windows"`
}

// DimensionValue specify the partition key values are used for the partition
type DimensionValue struct {
	// Key is the partition key
	Key *string `json:"key,omitempty" protobuf:"bytes,1,opt,name=key"`
	// Value if the partition value
	Value *string `json:"value,omitempty" protobuf:"bytes,2,opt,name=value"`
}

// List compiler spec

// ModelType enamurate the model type
// +kubebuilder:validation:Enum="classical";"dnn";"transformer";"chatbot";"rl";
type ModelType string

const (
	ModelTypeClassical   ModelType = "classical"
	ModelTypeDNN         ModelType = "dnn"
	ModelTypeTransformer ModelType = "transformer"
	ModelTypeChatbot     ModelType = "chatbot"
	ModelTypeRL          ModelType = "rl"
)
