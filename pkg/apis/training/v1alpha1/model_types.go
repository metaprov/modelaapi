package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type ModelPhase string

const (
	ModelPhaseInitilized     ModelPhase = "Initialized"
	ModelPhaseTraining       ModelPhase = "Training"
	ModelPhaseTrained        ModelPhase = "Trained"
	ModelPhaseTesting        ModelPhase = "Tested"
	ModelPhaseTested         ModelPhase = "Tested"
	ModelPhaseReporting      ModelPhase = "Reporting"
	ModelPhaseReported       ModelPhase = "Reported"
	ModelPhasePublishing     ModelPhase = "Publishing"
	ModelPhasePublished      ModelPhase = "Published"
	ModelPhaseProfiling      ModelPhase = "Profiling"
	ModelPhaseProfiled       ModelPhase = "Profiled"
	ModelPhaseReady          ModelPhase = "Ready"
	ModelPhaseFailedTraining ModelPhase = "FailedTraining"
	ModelPhaseFailedTesting  ModelPhase = "FailedTesting"
	ModelPhaseArchived       ModelPhase = "Archived"
	ModelPhaseAborted        ModelPhase = "Aborted"
	ModelPhaseServing        ModelPhase = "Serving"
	ModelPhaseForecasting    ModelPhase = "Forecasting"
	ModelPhaseForecasted     ModelPhase = "Forecasted"
	ModelPhaseFailedProfiled ModelPhase = "FailedProfiled"
	ModelPhaseFailedReported ModelPhase = "FailedReported"
	ModelPhaseFailedForecast ModelPhase = "FailedForecast"
	ModelPhaseFailedPublish  ModelPhase = "FailedPublish"
)

// Represent a value for a specific metric
type Measurement struct {
	// The metric type name (e.g. F1 / Accuracy)
	// +optional
	Metric catalog.Metric `json:"metric,omitempty" protobuf:"bytes,1,opt,name=metric"`
	// The value for this model
	// +optional
	Value float64 `json:"value,omitempty" protobuf:"bytes,2,opt,name=value"`
}

// Condition on the dataset
type ModelConditionType string

// model state

/// DatasetName Condition
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
	// The model artifact were archived in the bucket.
	ModelArchived ModelConditionType = "Archived"
	// True if the model is active and serving prediction
	ModelServing    ModelConditionType = "Serving"
	ModelAborted    ModelConditionType = "Aborted"
	ModelPaused     ModelConditionType = "Paused"
	ModelForecasted ModelConditionType = "Forecasted"
)

// DeploymentCondition describes the state of a deployment at a certain point.
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

//==============================================================================
// PublishedModelRef Configuration
//==============================================================================
// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".spec.studyName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Algorithm",type="string",JSONPath=".spec.estimator.algorithmName"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.objective"
// +kubebuilder:printcolumn:name="CV Score",type="number",JSONPath=".status.cvScore"
// +kubebuilder:printcolumn:name="Train Score",type="number",JSONPath=".status.trainScore"
// +kubebuilder:printcolumn:name="Test Score",type="number",JSONPath=".status.testScore"
// +kubebuilder:printcolumn:name="Best",type="boolean",JSONPath=".status.best"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=models,singular=model,shortName=md,categories={training,modeld,all}
// Model represent a machine learning model.
// models are automatically generated by the planner and trained by the trainer.
// After training, models are packaged into a docker container and served
// by predictor.
type Model struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// The account name of the owner of this model
	// +optional
	OwnerName *string `json:"ownerName,omitempty" protobuf:"bytes,1,opt,name=ownerName"`
	// ServingSiteName is a reference to the product version of this model. This value is based on the study product version
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// Required
	VersionName string `json:"versionName" protobuf:"bytes,2,opt,name=versionName"`
	// StudyName ref reference the study for this model. IF empty, the model is stand alone
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// Required
	StudyName string `json:"studyName" protobuf:"bytes,3,opt,name=studyName"`
	// DatasetName refer to the dataset object for which the study is for.
	// Required.
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Task is the machine learning task (regression, classification).
	// The task is generated from the study task
	// This is a required field.
	// Required
	Task catalog.MLTask `json:"task" protobuf:"bytes,5,opt,name=task"`
	// Objective is the metric by which the system compare models
	// Default: based on the task. classification is logloss. Regression is rmse
	// +optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,6,opt,name=objective"`
	// Represent the preprocessing pipeline of the model. Provide a value if you want to customize the model.
	// Default: All preprocessing will be created automatically
	// +optional
	Preprocessing *PreprocessingSpec `json:"preprocessing,omitempty" protobuf:"bytes,7,opt,name=preprocessing"`
	// Specification of the ML algorithm and its hyper parameters.
	// +optional
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,8,opt,name=estimator"`
	// DeepNet estimator specification. Not supported for this release.
	// +optional
	Dnn *DeepEstimatorSpec `json:"dnn,omitempty" protobuf:"bytes,9,opt,name=dnn"`
	// If this is an ensemble model, specify the ensemble
	// Default: None
	// +optional
	Ensemble *EnsembleSpec `json:"ensemble,omitempty" protobuf:"bytes,10,opt,name=ensemble"`
	// TrainingSpec is the desired training settings
	// +optional
	Training *TrainingSpec `json:"training,omitempty" protobuf:"bytes,11,opt,name=training"`
	// Tested indicate if this model should be testedActual. Default is false.
	// The study controller will set this to true if a model is the best model
	// +optional
	Tested *bool `json:"tested,omitempty" protobuf:"bytes,12,opt,name=tested"`
	// Aborted indicate the desire to abort the model
	// +optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"bytes,13,opt,name=aborted"`
	// Published is set when we want to wrap the model in a docker container
	// +optional
	Published *bool `json:"published,omitempty" protobuf:"bytes,14,opt,name=published"`
	// Pushed indicate if the model image should be pushed into the remote docker registry.
	// +optional
	Pushed *bool `json:"pushed,omitempty" protobuf:"bytes,15,opt,name=pushed"`
	// Reported is set when a report should be created for this model
	// +optional
	Reported *bool `json:"reported,omitempty" protobuf:"bytes,16,opt,name=reported"`
	// Paused is set when we want to pause the training
	// +optional
	Paused *bool `json:"paused,omitempty" protobuf:"bytes,17,opt,name=paused"`
	// Profiled is set when we want to create model profile.
	// +optional
	Profiled *bool `json:"profiled,omitempty" protobuf:"bytes,18,opt,name=profiled"`
	// Set when the model should be archived
	// +optional
	Archived *bool `json:"archived,omitempty" protobuf:"bytes,19,opt,name=archived"`
	// Set the true when the model should perform a forecast
	// +optional
	Forecasted *bool `json:"forecasted,omitempty" protobuf:"bytes,20,opt,name=forecasted"`
	// The location of the model artifacts (metadata, reports and estimators).
	// +optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,21,opt,name=location"`
	// The specification for the forecasting algorithm if this is a forecast study.
	// +optional
	Forecasting *ForecastingSpec `json:"forecastingSpec,omitempty" protobuf:"bytes,22,opt,name=forecastingSpec"`
	// The owner account name
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,23,opt,name=owner"`
}

type EnsembleSpec struct {
	// A list of base model to ensemble. The ensemble method is represented as the algorithm name.
	// +optional
	Base []string `json:"base,omitempty" protobuf:"bytes,2,opt,name=base"`
}

// ModelStatus defines the observed state of the Model
type ModelStatus struct {
	// Represents time when the model is first handled by the model controller
	// +optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`

	// Represents time when the model started training.
	// +optional
	TrainStartTime *metav1.Time `json:"trainStartTime,omitempty" protobuf:"bytes,2,opt,name=trainStartTime"`

	// Represents time when the model ended training
	// +optional
	TrainCompletionTime *metav1.Time `json:"trainCompletionTime,omitempty" protobuf:"bytes,3,opt,name=trainCompletionTime"`
	// Represents time when the model started test on a trainer
	// It is not guaranteed to be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +optional
	TestStartTime *metav1.Time `json:"testStartTime,omitempty" protobuf:"bytes,4,opt,name=testStartTime"`
	// Represents time when the model ended testing
	// be set in happens-before order across separate operations.
	// It is represented in RFC3339 form and is in UTC.
	// +optional
	TestCompletionTime *metav1.Time `json:"testCompletionTime,omitempty" protobuf:"bytes,5,opt,name=testCompletionTime"`
	// Represent the time that the model is marked as ready
	// +optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,6,opt,name=completionTime"`
	// Cross validation score using on the training set.
	// +optional
	CVScore float64 `json:"cvScore,omitempty" protobuf:"bytes,7,opt,name=cvScore"`
	// TrainingSpec on the full training set, Evaluating on the training set
	// +optional
	TrainScore float64 `json:"trainScore,omitempty" protobuf:"bytes,8,opt,name=trainScore"`
	// TrainingSpec on the full training set, Evaluating on the test set
	// +optional
	TestScore float64 `json:"testScore,omitempty" protobuf:"bytes,9,opt,name=testScore"`
	// The cost of the model
	// +optional
	Cost float64 `json:"cost,omitempty" protobuf:"bytes,10,opt,name=cost"`
	// True if this is the best model
	// +optional
	Best bool `json:"best,omitempty" protobuf:"bytes,11,opt,name=best"`
	// results of training the model (pipeline) on the full training set, and test it on the training set
	// +optional
	TrainResult []Measurement `json:"trainResult,omitempty" protobuf:"bytes,12,rep,name=trainResult"`
	// results of training the model (pipeline) on the full training set, and test it on the test set
	// +optional
	TestResult []Measurement `json:"testResult,omitempty" protobuf:"bytes,13,rep,name=testResult"`
	// The phase of the model
	// +optional
	Phase ModelPhase `json:"phase" protobuf:"bytes,14,opt,name=phase"`
	// Reference to the model report
	// +optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,15,opt,name=reportName"`
	// The URI of the manifest in the product bucket.
	// +optional
	ManifestUri string `json:"manifestUri,omitempty" protobuf:"bytes,16,opt,name=manifestUri"`
	// The URI of the model binary file.
	// +optional
	WeightsUri string `json:"weightsUri,omitempty" protobuf:"bytes,17,opt,name=weightsUri"`
	// The URI of the label encoder binary file, if there is one.
	// +optional
	LabelEncoderUri string `json:"labelsEncoderUri,omitempty" protobuf:"bytes,18,opt,name=labelsEncoderUri"`
	// The URI of the log file
	// +optional
	LogsUri string `json:"logsUri,omitempty" protobuf:"bytes,19,opt,name=logsUri"`
	// A reference to the visualization uri which were produce during processing
	// +optional
	ProfileUri string `json:"profileUri" protobuf:"bytes,20,opt,name=profileUri"`
	// A reference to the mis-classification file which were produce during processing
	MisclassUri string `json:"misclassUri" protobuf:"bytes,21,opt,name=misclassUri"`
	// The image name of the model
	ImageName string `json:"imageName" protobuf:"bytes,22,opt,name=imageName"`
	// The forecast URI
	// +optional
	ForecastUri string `json:"forecastUri,omitempty" protobuf:"bytes,23,opt,name=forecastUri"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,24,rep,name=conditions"`
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

type ClassicalEstimatorSpec struct {
	// A reference to the algorithm in the catalog
	AlgorithmName string `json:"algorithmName,omitempty" protobuf:"bytes,1,opt,name=algorithmName"`
	// The algorithm hyper parameters
	Parameters []HyperParameterValue `json:"parameters,omitempty" protobuf:"bytes,2,rep,name=parameters,casttype=HyperParameterValue"`
}

// Specification of the pre processing pipeline
type PreprocessingSpec struct {
	// One or more categorical pipelines.
	Categorical CategoricalPipelineSpec `json:"categorical,omitempty" protobuf:"bytes,1,opt,name=categorical"`
	// Specify the column transformation for numeric columns
	// +optional
	Numeric NumericPipelineSpec `json:"numeric,omitempty" protobuf:"bytes,2,opt,name=numeric"`
	// Specify the column transformation for text columns
	// +optional
	Text *TextPipelineSpec `json:"text,omitempty" protobuf:"bytes,3,opt,name=text"`
	// Specify the pipeline for images. Not supported in this release
	// +optional
	Image *ImagePipelineSpec `json:"image,omitempty" protobuf:"bytes,4,opt,name=image"`
	// Specify the pipeline for audio. Not supported in this release
	// +optional
	Audio *AudioPipelineSpec `json:"audio,omitempty" protobuf:"bytes,5,opt,name=audio"`
	// Specify the pipeline for video. Not supported in this release
	// +optional
	Video *VideoPipelineSpec `json:"video,omitempty" protobuf:"bytes,6,opt,name=video"`
	// Specify the column transformation for datetime columns
	// +optional
	DataTime *DateTimePipelineSpec `json:"datatime,omitempty" protobuf:"bytes,7,opt,name=datetime"`
	// FeaturePipeline selector
	// +optional
	Selector *catalog.FeatureSelector `json:"featureSelector,omitempty" protobuf:"bytes,8,opt,name=featureSelector"`
	// Dim reducer
	// +optional
	Reducer *catalog.DimReducer `json:"reducer,omitempty" protobuf:"bytes,9,opt,name=reducer"`
	// Imbalance flag instruct the designer to create an imbalanced pipeline. Default is false
	// +optional
	Imbalanced *bool `json:"imbalanced,omitempty" protobuf:"bytes,10,opt,name=imbalanced"`
}

type SuccessiveHalvingSpec struct {
	// The budget is used in multi fidelity search.
	// This is the percent of fidelity of the model. The meaning is based on the model configuration.
	// For example fidelity is number of epochs in sgd alg
	// Or can be percent of the data in non sgd algorithm.
	// +optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Budget *int32 `json:"budget,omitempty" protobuf:"varint,1,opt,name=budget"`
	// The bracket of the model when running multi fidelity search.
	// +optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Bracket *int32 `json:"bracket,omitempty" protobuf:"varint,2,opt,name=bracket"`
	// The rung of the model
	// +optional
	// +kubebuilder:validation:Maximum=128
	// +kubebuilder:validation:Minimum=0
	Rung *int32 `json:"rung,omitempty" protobuf:"varint,3,opt,name=rung"`
	// The configuration id allocated to this model in rung 0
	// +optional
	ConfID *int32 `json:"confID,omitempty" protobuf:"varint,4,opt,name=confID"`
	// The modality type. The default modality is based on the type of models
	// For deep models - we use epocs.
	// For classical models - we use data
	// +optional
	Modality *ModalityType `json:"modality,omitempty" protobuf:"bytes,26,opt,name=modality"`
}

// Specification of the training process
type TrainingSpec struct {
	// Priority specify the priority of the model in the training queue.
	// The priority is defined in the model study.
	// Default: 5
	// +optional
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Minimum=1
	Priority *int32 `json:"priority,omitempty" protobuf:"varint,2,opt,name=priority"`
	// The  type of cross validation.
	// if we have a validation set, we do not do cv.
	// +optional
	CvType *catalog.CvType `json:"cvtype,omitempty" protobuf:"bytes,3,opt,name=cvtype"`
	// If true, this is a cross validation using folds. If False, use the validation set.
	// Default: True
	// +optional
	CV *bool `json:"cv,omitempty" protobuf:"bytes,4,opt,name=cv"`
	// The number of folds during cross validation.
	// +optional
	Folds *int32 `json:"folds,omitempty" protobuf:"varint,6,opt,name=folds"`
	// Retry attempt is the number of training retry for this model,
	// Default is 5
	// +optional
	Retry *int32 `json:"retry,omitempty" protobuf:"varint,7,rep,name=retry"`
	// Evaluation metrics are the scores
	// +optional
	EvalMetrics []catalog.Metric `json:"evalMetrics,omitempty" protobuf:"bytes,8,opt,name=evalMetrics"`
	// Early stopping, stop the training after X models with no improvement.
	// Default: False
	// +optional
	EarlyStop *bool `json:"earlyStop,omitempty" protobuf:"bytes,9,opt,name=earlyStop"`
	// Add snapshot interval for long training time in minutes.
	// This is used to checkpoint training model.
	// +optional
	// +kubebuilder:validation:Minimum=0
	CheckpointInterval *int32 `json:"checkpointInterval,omitempty" protobuf:"varint,10,opt,name=checkpointInterval"`
	// Define the forecast period for time series studies. This is only used in time series models.
	// Default: Empty
	// +optional
	Forecast *ForecastingSpec `json:"forecast,omitempty" protobuf:"bytes,11,opt,name=forecast"`
	// Successive halving represent the configuration for the model training, when running
	// the SuccessiveHalvingSpec model search algorithm
	// The metrics are evaluated using the final model, both on the training set
	// and on the test set
	// +optional
	SH *SuccessiveHalvingSpec `json:"sh,omitempty" protobuf:"bytes,12,opt,name=sh"`
	// Used as the random state for an estimator if needed (for example, in RandomForestClassifier)
	// Default: 42
	// +optional
	Seed *float64 `json:"seed,omitempty" protobuf:"bytes,13,opt,name=seed"`
}

type CategoricalPipelineSpec struct {
	// The columns for this pipeline. Use * to denotes all the columns.
	// Must have at least on value.
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// Categorical varaible imputer
	//+optional
	Imputer *catalog.Imputator `json:"imputer,omitempty" protobuf:"bytes,2,opt,name=imputer"`
	// CatEncoder
	//+optional
	Encoder *catalog.CatEncoder `json:"encoder,omitempty" protobuf:"bytes,3,opt,name=encoder"`
}

type NumericPipelineSpec struct {
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// Numerical var imputer
	// +optional
	Imputer *catalog.Imputator `json:"imputer,omitempty" protobuf:"bytes,2,opt,name=imputer"`
	// Numeric var scaler
	// +optional
	Scaler *catalog.Scaler `json:"scaler,omitempty" protobuf:"bytes,3,opt,name=scaler"`
}

type TextPipelineSpec struct {
	// The list of test columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// The text encoder (e.g. tfidf)
	// +optional
	Encoder *catalog.TextTransformer `json:"encoder,omitempty" protobuf:"bytes,2,opt,name=encoder"`
	// Text tokenizer
	// +optional
	Tokenizer *string `json:"tokenizer,omitempty" protobuf:"bytes,3,opt,name=tokenizer"`
	// If true, the controller will Add stop word handling to the text pipeline.
	// +optional
	StopWords *bool `json:"stopwords,omitempty" protobuf:"bytes,4,opt,name=stopwords"`
	// If true, the controller will Add part of speech handling to the text pipeline.
	// +optional
	Pos *bool `json:"pos,omitempty" protobuf:"bytes,5,opt,name=pos"`
	// If true, the controller will Add lemma handling to the text pipeline.
	// +optional
	Lemma *bool `json:"lemma,omitempty" protobuf:"bytes,6,opt,name=lemma"`
	// If true, the controller will Add stemmer handling to the text pipeline.
	// +optional
	Stem *bool `json:"stem,omitempty" protobuf:"bytes,7,opt,name=stem"`
	// If true, the controller will Add word embedding handling to the text pipeline.
	// +optional
	Embedding *string `json:"embedding,omitempty" protobuf:"bytes,8,opt,name=embedding"`
}

type DateTimePipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// The date time imputer.
	// +optional
	Imputer *catalog.Imputator `json:"imputer,omitempty" protobuf:"bytes,2,opt,name=imputer"`
	// If
	// +optional
	Expand *bool `json:"expand,omitempty" protobuf:"bytes,3,opt,name=expand"`
}

type ImagePipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// The date time imputer.
	// +optional
	Featurizer *catalog.ImageFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,2,opt,name=featurizer"`
}

type VideoPipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// The date time imputer.
	// +optional
	Featurizer *catalog.VideoFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,2,opt,name=featurizer"`
}

type AudioPipelineSpec struct {
	// Name of the datetime columns
	Columns []string `json:"columns,omitempty" protobuf:"bytes,1,opt,name=columns"`
	// The date time imputer.
	// +optional
	Featurizer *catalog.AudioFeaturizer `json:"featurizer,omitempty" protobuf:"bytes,2,opt,name=featurizer"`
}

type ForecastingSpec struct {
	// The name of the time column
	// Required.
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,1,opt,name=timeColumn"`
	// The name of the column holding the value.
	// By default this is the target column from the dataset.
	// +optional
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,2,opt,name=targetColumn"`
	// The format of the datetime column. Used default
	// +optional
	DateTimeFormat *string `json:"datetimeFormat,omitempty" protobuf:"bytes,3,opt,name=datetimeFormat"`
	// The list of the dimension columns. If non, the system will treat the whole time series as one.
	// +optional
	Dimensions []string `json:"dimensions,omitempty" protobuf:"bytes,4,opt,name=dimensions"`
	// List of other columns to take into consideration
	// Default None
	//+optional
	Repressors []string `json:"repressors,omitempty" protobuf:"bytes,5,opt,name=repressors"`
	// Required, the freq of the time series (daily,weekly)
	FreqSpec *FreqSpec `json:"freqSpec,omitempty" protobuf:"bytes,6,opt,name=freqSpec"`
	// number of data points to predict in the future.
	// Required.
	Horizon *int32 `json:"horizon,omitempty" protobuf:"varint,7,opt,name=horizon"`
	// The confidence levels for the forecast, each level must be between 1-100.
	//+optional
	ConfidenceInterval *int32 `json:"confidenceIntervals,omitempty" protobuf:"varint,8,opt,name=confidenceInterval"`
	// Set an holiday schedule for a country.
	//+optional
	CountryForHoliday *catalog.HolidayCountry `json:"countryForHoliday,omitempty" protobuf:"bytes,9,opt,name=countryForHoliday"`
	// a set of value for each partition key
	// +optional
	DimensionValues []DimensionValue `json:"dimensionValues,omitempty" protobuf:"bytes,10,opt,name=dimensionValues"`
	// The backtest specification, the system supports back testing with expanding windows.
	Backtest *BacktestSpec `json:"backtest,omitempty" protobuf:"bytes,11,opt,name=backtest"`
	// The name of the connection for a database the result of the forecast
	// If null, the system will insert the forecast in the database.
	// +optional
	ForecastConnectionName *string `json:"forecastConnectionName,omitempty" protobuf:"bytes,12,opt,name=forecastConnectionName"`
	// Specify if we should generate a forecast using the model
	// If true, the system will perform a forecast and update the forecast connection.
	// Default it true
	// +optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"bytes,13,opt,name=forecast"`
}

// Specify the frequency specification.
type FreqSpec struct {
	// Default to 1.
	// optional
	Interval *int32 `json:"interval,omitempty" protobuf:"varint,1,opt,name=interval"`
	// required
	Units catalog.Freq `json:"unit,omitempty" protobuf:"bytes,2,opt,name=unit"`
}

// Specify the back test
type BacktestSpec struct {
	// The initial number of data points, default to 80% of rows.
	// +optional
	Initial *int32 `json:"initial,omitempty" protobuf:"varint,1,opt,name=initial"`
	// The number of backtesting windows. Default to 3. can be from 1 to 5.
	// +optional
	Windows *int32 `json:"windows,omitempty" protobuf:"varint,2,opt,name=windows"`
}

// Partition key values are used for the partition
type DimensionValue struct {
	// Key is the partition key
	Key string `json:"key" protobuf:"bytes,1,opt,name=key"`
	// Value if the partition value
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}
