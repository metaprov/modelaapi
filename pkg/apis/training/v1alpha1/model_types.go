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
	ModelPhaseFailed                  ModelPhase = "Failed"
	ModelPhasePending                 ModelPhase = "Pending"
	ModelPhaseTraining                ModelPhase = "Training"
	ModelPhaseTrained                 ModelPhase = "Trained"
	ModelPhaseTesting                 ModelPhase = "Testing"
	ModelPhaseTested                  ModelPhase = "Tested"
	ModelPhaseUnitTesting             ModelPhase = "UnitTesting"
	ModelPhaseUnitTested              ModelPhase = "UnitTested"
	ModelPhaseReporting               ModelPhase = "Reporting"
	ModelPhaseReported                ModelPhase = "Reported"
	ModelPhaseCompleted               ModelPhase = "Completed"
	ModelPhasePublishing              ModelPhase = "Publishing"
	ModelPhasePublished               ModelPhase = "Published"
	ModelPhasePackaging               ModelPhase = "Packaging"
	ModelPhasePackaged                ModelPhase = "Packaged"
	ModelPhaseProfiling               ModelPhase = "Profiling"
	ModelPhaseProfiled                ModelPhase = "Profiled"
	ModelPhaseExplaining              ModelPhase = "Explaining"
	ModelPhaseExplained               ModelPhase = "Explained"
	ModelPhaseAborted                 ModelPhase = "Aborted"
	ModelPhaseForecasting             ModelPhase = "Forecasting"
	ModelPhaseForecasted              ModelPhase = "Forecasted"
	ModelPhaseMerging                 ModelPhase = "Merging"
	ModelPhaseMerged                  ModelPhase = "Merged"
	ModelPhaseLive                    ModelPhase = "Live"
	ModelPhaseShadow                  ModelPhase = "Shadow"
	ModelPhaseTrainingOutlierDetector ModelPhase = "TrainingOutlierDetector"
	ModelPhaseTrainedOutlierDetector  ModelPhase = "TrainedOutlierDetector"
	ModelPhasePruned                  ModelPhase = "Pruned"
)

// ModelConditionType specifies the current condition of a Model
type ModelConditionType string

const (
	ModelTrained                ModelConditionType = "Trained"
	ModelTested                 ModelConditionType = "Tested"
	ModelUnitTested             ModelConditionType = "UnitTested"
	ModelReported               ModelConditionType = "Reported"
	ModelPackaged               ModelConditionType = "Packaged"
	ModelProfiled               ModelConditionType = "Profiled"
	ModelReady                  ModelConditionType = "Ready"
	ModelExplained              ModelConditionType = "Explained"
	ModelAborted                ModelConditionType = "Aborted"
	ModelPaused                 ModelConditionType = "Paused"
	ModelForecasted             ModelConditionType = "Forecasted"
	ModelLive                   ModelConditionType = "Live"
	ModelShadow                 ModelConditionType = "Shadow"
	ModelOutlierDetectorTrained ModelConditionType = "OutlierDetectorTrained"
	ModelPruned                 ModelConditionType = "Pruned"
	ModelMerged                 ModelConditionType = "Merged"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=models,singular=model,shortName=md,categories={training,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="string",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Best",type="boolean",JSONPath=".status.best"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".spec.studyName"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",priority=1
// +kubebuilder:printcolumn:name="Algorithm",type="string",JSONPath=".spec.estimator.algorithmName"
// +kubebuilder:printcolumn:name="Objective",type="string",JSONPath=".spec.objective.metric"
// +kubebuilder:printcolumn:name="Validation Score",type="number",JSONPath=".status.validationScore"
// +kubebuilder:printcolumn:name="Train Score",type="number",JSONPath=".status.trainScore",priority=1
// +kubebuilder:printcolumn:name="Test Score",type="number",JSONPath=".status.testScore"
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.failureMessage",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// Model represents a machine learning model that can be trained by Modela
type Model struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The name of the Study Run which created the Model. If empty, the Model will be trained as a stand-alone model
	// +kubebuilder:validation:Required
	// +kubebuilder:validation:MaxLength=63
	// +required
	StudyRunName string `json:"studyRunName,omitempty" protobuf:"bytes,2,opt,name=studyRunName"`
	// The machine learning task type of the Model (i.e. regression, classification), derived from the parent Study
	// +kubebuilder:validation:Required
	// +required
	Task catalog.MLTask `json:"task,omitempty" protobuf:"bytes,3,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,4,opt,name=subtask"`
	// The objective metric that will be used to evaluate the performance of the model
	// +kubebuilder:validation:Required
	// +required
	Objective catalog.ObjectiveSpec `json:"objective,omitempty" protobuf:"bytes,5,opt,name=objective"`
	// FeatureEngineering specifies the preprocessing pipelines that will be applied to the model prior to training
	// +kubebuilder:validation:Optional
	FeatureEngineering FeatureEngineeringSpec `json:"featureEngineering,omitempty" protobuf:"bytes,6,opt,name=featureEngineering"`
	// Estimator defines the machine learning algorithm and hyperparameters for the Model
	// +kubebuilder:validation:Optional
	Estimator ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,7,opt,name=estimator"`
	// Ensemble specifies the configuration to create an ensemble model
	// +kubebuilder:validation:Optional
	Ensemble *EnsembleSpec `json:"ensemble,omitempty" protobuf:"bytes,8,opt,name=ensemble"`
	// Interpretability specifies the configuration to generate model interpretability visualizations
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilitySpec `json:"interpretability,omitempty" protobuf:"bytes,9,opt,name=interpretability"`
	// TrainingSpec specifies the configuration to prepare and train a model
	// +kubebuilder:validation:Optional
	Training TrainingSpec `json:"training,omitempty" protobuf:"bytes,10,opt,name=training"`
	// Forecasting specifies the configuration to generate a forecast
	// +kubebuilder:validation:Optional
	Forecasting *ForecasterSpec `json:"forecasting,omitempty" protobuf:"bytes,11,opt,name=forecasting"`
	// Approval specifies the model approval requirements (unimplemented)
	// +kubebuilder:validation:Optional
	Approval *data.ApprovalSpec `json:"approval,omitempty" protobuf:"bytes,12,opt,name=approval"`
	// UnitTests defines the test suite that will be executed on the Model succeeding training
	// +kubebuilder:validation:Optional
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,13,opt,name=unitTests"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	// +kubebuilder:validation:Optional
	Notification *catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,14,opt,name=notification"`
	// Test indicates if the model will be moved to testing. The model will be measured against all available benchmarks
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Test *bool `json:"test,omitempty" protobuf:"varint,15,opt,name=test"`
	// If true, all workloads created by the Model will be removed and the Model will no longer be reconciled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Abort *bool `json:"abort,omitempty" protobuf:"varint,16,opt,name=abort"`
	// If true, the Model's estimator and other artifacts will be packaged for use in a Predictor
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Package *bool `json:"package,omitempty" protobuf:"varint,17,opt,name=package"`
	// If true, a Report resource will be generated for the Model succeeding completion
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Report *bool `json:"report,omitempty" protobuf:"varint,18,opt,name=report"`
	// If true, the execution of new workloads associated with the Model will be paused
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Pause *bool `json:"pause,omitempty" protobuf:"varint,19,opt,name=pause"`
	// If true, a profile will be generated for the Model succeeding training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Profile *bool `json:"profile,omitempty" protobuf:"varint,20,opt,name=profile"`
	// If true, a forecast will be generated for the Model (applicable if the task type is forecasting)
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,21,opt,name=forecast"`
	// If true, Shapley values (and relevant visualizations) will be calculated for the highest-performing Model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Explain *bool `json:"explain,omitempty" protobuf:"varint,22,opt,name=explain"`
	// If true, the Model will be unit-tested against the test suite specified by UnitTests
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	UnitTest *bool `json:"unitTest,omitempty" protobuf:"varint,23,opt,name=unitTest"`
	// Fast indicates if the Model will skip profiling, unit testing, explaining, and reporting
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,24,opt,name=fast"`
	// The name of the Virtual Bucket where Study artifacts (metadata, reports, and model artifacts) generated by
	// the Study will be stored. If empty, it will default to the default Virtual Bucket of the Data Product
	// +kubebuilder:validation:Optional
	ArtifactBucketName *string `json:"artifactBucketName,omitempty" protobuf:"bytes,25,opt,name=artifactBucketName"`
	// The deadline for any Jobs associated with the Model to be completed in seconds
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	Timeout *int64 `json:"timeout,omitempty" protobuf:"varint,26,opt,name=timeout"`
	// The type of model, relevant to the Study phase which the Model was created for
	// +kubebuilder:validation:Optional
	ModelClass catalog.ModelClassType `json:"modelClass,omitempty" protobuf:"bytes,27,opt,name=modelClass"`
	// The trial ID of the Model, designated by the parent Study of the Model
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TrialID *int32 `json:"trialID,omitempty" protobuf:"varint,28,opt,name=trialID"`
	// The Model Class which created the Model, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,29,opt,name=modelClassName"`
	// The Model Class Run which created the Model, if applicable
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,30,opt,name=modelClassRunName"`
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
	BaseEstimator *ClassicalEstimatorSpec `json:"baseEstimator,omitempty" protobuf:"bytes,3,rep,name=baseEstimator"`
	// The ensemble type method
	// +kubebuilder:validation:Optional
	Type *catalog.EnsembleType `json:"type,omitempty" protobuf:"bytes,4,rep,name=type"`
}

// ModelStatus defines the observed state of a Model
type ModelStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// ModelVersion specifies the version of the model, determined by the Study Run which created it
	//+kubebuilder:validation:Optional
	ModelVersion catalog.Version `json:"modelVersion,omitempty" protobuf:"varint,2,opt,name=modelVersion"`
	// The validation score for the objective metric produced through cross validation or the validation dataset
	// +kubebuilder:validation:Optional
	ValidationScore float64 `json:"validationScore,omitempty" protobuf:"bytes,3,opt,name=validationScore"`
	// The score for the objective metric based on the training dataset
	// +kubebuilder:validation:Optional
	TrainingScore float64 `json:"trainingScore,omitempty" protobuf:"bytes,4,opt,name=trainingScore"`
	// The score for the objective metric based on the testing dataset
	// +kubebuilder:validation:Optional
	TestScore float64 `json:"testScore,omitempty" protobuf:"bytes,5,opt,name=testScore"`
	// The number of rows in the training dataset
	// +kubebuilder:validation:Optional
	TrainingRows int32 `json:"trainingRows" protobuf:"varint,6,opt,name=trainingRows"`
	// The number of rows in the testing dataset
	// +kubebuilder:validation:Optional
	TestingRows int32 `json:"testingRows" protobuf:"varint,7,opt,name=testingRows"`
	// The number of rows in the validation dataset, if applicable
	// +kubebuilder:validation:Optional
	ValidationRows int32 `json:"validationRows" protobuf:"varint,8,opt,name=validationRows"`
	// The name of the Report resource produced by the Model
	// +kubebuilder:validation:Optional
	ReportName string `json:"reportName,omitempty" protobuf:"bytes,9,opt,name=reportName"`
	// In the case of failure, the Model resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,10,opt,name=failureMessage"`
	// The progress percentage of the Model, which is derived from the Model's current phase
	// +kubebuilder:validation:Optional
	Progress int32 `json:"progress,omitempty" protobuf:"varint,11,opt,name=progress"`
	// The name of the Dataset resource which the Model was trained with
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,12,opt,name=datasetName"`
	// The name of the Study resource which the Model was trained with
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,13,opt,name=studyName"`
	// The name of the Data Source resource which the Model was trained with
	DataSourceName string `json:"dataSourceName,omitempty" protobuf:"bytes,14,opt,name=dataSourceName"`
	// The phase of the Model
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelPhase `json:"phase" protobuf:"bytes,15,opt,name=phase"`
	// Train contains the collection of measurements produced by validation on the training dataset
	// +kubebuilder:validation:Optional
	Train []catalog.Measurement `json:"train,omitempty" protobuf:"bytes,16,rep,name=train"`
	// Train contains the collection of measurements produced by validation on the testing dataset
	// +kubebuilder:validation:Optional
	Test []catalog.Measurement `json:"test,omitempty" protobuf:"bytes,17,rep,name=test"`
	// Validation contains the collection of measurements produced by cross-validation or validation on the validation dataset
	// +kubebuilder:validation:Optional
	Validation []catalog.Measurement `json:"validation,omitempty" protobuf:"bytes,18,rep,name=validation"`
	// The location of the Report produced by the Model
	// +kubebuilder:validation:Optional
	ReportLocation catalog.FileLocation `json:"reportLocation,omitempty" protobuf:"bytes,19,opt,name=reportLocation"`
	// TrainDatasetLocation specifies the location of the training dataset
	// +kubebuilder:validation:Optional
	TrainDatasetLocation catalog.FileLocation `json:"trainDatasetLocation,omitempty" protobuf:"bytes,20,opt,name=trainDatasetLocation"`
	// TestDatasetLocation specifies the location of the testing dataset
	// +kubebuilder:validation:Optional
	TestDatasetLocation catalog.FileLocation `json:"testDatasetLocation,omitempty" protobuf:"bytes,21,opt,name=testDatasetLocation"`
	// ValidationDatasetLocation specifies the location of the validation dataset
	// +kubebuilder:validation:Optional
	ValidationDatasetLocation *catalog.FileLocation `json:"validationDatasetLocation,omitempty" protobuf:"bytes,22,opt,name=validationDatasetLocation"`
	// +kubebuilder:validation:Optional
	TrainWeightsLocation catalog.FileLocation `json:"trainWeightsLocation,omitempty" protobuf:"bytes,23,opt,name=trainWeightsLocation"`
	// +kubebuilder:validation:Optional
	TestWeightsLocation catalog.FileLocation `json:"testWeightsLocation,omitempty" protobuf:"bytes,24,opt,name=testWeightsLocation"`
	// +kubebuilder:validation:Optional
	FullWeightsLocation catalog.FileLocation `json:"fullWeightsLocation,omitempty" protobuf:"bytes,25,opt,name=fullWeightsLocation"`
	// +kubebuilder:validation:Optional
	LabelEncoderLocation catalog.FileLocation `json:"labelEncoderLocation,omitempty" protobuf:"bytes,26,opt,name=labelEncoderLocation"`
	// The location of the model profile, which contains visualizations produced during the profiling phase
	// +kubebuilder:validation:Optional
	ProfileLocation catalog.FileLocation `json:"profileLocation" protobuf:"bytes,27,opt,name=profileLocation"`
	// The location of the misclassification file produced during the testing phase
	// +kubebuilder:validation:Optional
	MisclassificationLocation catalog.FileLocation `json:"misclassificationLocation" protobuf:"bytes,28,opt,name=misclassificationLocation"`
	// +kubebuilder:validation:Optional
	ForecastLocation catalog.FileLocation `json:"forecastLocation,omitempty" protobuf:"bytes,29,opt,name=forecastLocation"`
	// The location of the packaged model
	// +kubebuilder:validation:Optional
	PackageLocation catalog.FileLocation `json:"packageLocation" protobuf:"bytes,30,opt,name=packageLocation"`
	// The collection of feature importance values, determined by impurity importance. Impurity importance
	// can only be set by estimators that natively support it, such as Random Forest
	// +kubebuilder:validation:Optional
	ImpurityImportance []FeatureImportance `json:"impurityImportance,,omitempty" protobuf:"bytes,31,rep,name=impurityImportance"`
	// The collection of feature importance values, determined by permutation importance
	// +kubebuilder:validation:Optional
	PermutationImportance []FeatureImportance `json:"permutationImportance,omitempty" protobuf:"bytes,32,rep,name=permutationImportance"`
	// Runtime contains information about the workload runtime
	// +kubebuilder:validation:Optional
	Runtime RuntimeStatus `json:"runtime,omitempty" protobuf:"bytes,33,opt,name=runtime"`
	// ServingStatus contains the status of the model in the case that it was deployed to a Predictor or Data App
	// +kubebuilder:validation:Optional
	Serving ServingStatus `json:"serving,omitempty" protobuf:"bytes,34,opt,name=serving"`
	// Sha256 of the model tar file
	// +kubebuilder:validation:Optional
	TarFileHash string `json:"tarFileHash,omitempty" protobuf:"bytes,35,opt,name=tarFileHash"`
	// TrainingDataHash specifies the hashes for datasets used by the Model
	// +kubebuilder:validation:Optional
	TrainingDataHash DataHashes `json:"trainingDataHash,omitempty" protobuf:"bytes,36,opt,name=trainingDataHash"`
	// TrainingResources details the resources that were consumed by the training workload
	// +kubebuilder:validation:Optional
	TrainingResources catalog.ResourceConsumption `json:"trainingResources,omitempty" protobuf:"bytes,37,opt,name=trainingResources"`
	// TestingResources details the resources that were consumed by the testing workload
	// +kubebuilder:validation:Optional
	TestingResources catalog.ResourceConsumption `json:"testingResources,omitempty" protobuf:"bytes,38,opt,name=testingResources"`
	// Logs specifies the location of logs produced by workloads associated with the Model
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,omitempty" protobuf:"bytes,39,opt,name=logs"`
	// The Roc/Auc curve of the trained model
	// +kubebuilder:validation:Optional
	RocCurve catalog.RocAucCurve `json:"rocCurve,omitempty" protobuf:"bytes,40,opt,name=rocCurve"`
	// The Precision/Recall curve of the trained model
	// +kubebuilder:validation:Optional
	PRCurve catalog.PRCurve `json:"prCurve,omitempty" protobuf:"bytes,41,opt,name=prCurve"`
	// The confusion matrix of the train data.
	// +kubebuilder:validation:Optional
	TrainConfusionMatrix catalog.ConfusionMatrix `json:"trainConfusionMatrix,omitempty" protobuf:"bytes,42,opt,name=trainConfusionMatrix"`
	// The confusion matrix of the test data
	// +kubebuilder:validation:Optional
	TestConfusionMatrix catalog.ConfusionMatrix `json:"testConfusionMatrix,omitempty" protobuf:"bytes,43,opt,name=testConfusionMatrix"`
	// Approval specifies the current approval status for the Model
	// +kubebuilder:validation:Optional
	Approval data.ApprovalStatus `json:"approval,omitempty" protobuf:"bytes,44,opt,name=approval"`
	// Interpretability contains results produced during the explaining phase of the Model
	// +kubebuilder:validation:Optional
	Interpretability InterpretabilityStatus `json:"interpretability,omitempty" protobuf:"bytes,45,opt,name=interpretability"`
	// Images specifies the container images used to train the model
	// +kubebuilder:validation:Optional
	Images catalog.Images `json:"images,omitempty" protobuf:"bytes,46,opt,name=images"`
	// The result of running the unit tests
	// +kubebuilder:validation:Optional
	UnitTestResults catalog.TestSuiteResult `json:"unitTestResults,omitempty" protobuf:"bytes,47,opt,name=unitTestResults"`
	// The sub models uri file contain the results of running the sub model
	// +kubebuilder:validation:Optional
	GroupBy ModelGroupByStatus `json:"groupBy,omitempty" protobuf:"bytes,48,opt,name=groupBy"`
	// Usage contains the resource consumption of the model
	// +kubebuilder:validation:Optional
	Usage catalog.ResourceConsumption `json:"usage,omitempty" protobuf:"bytes,49,rep,name=usage"`
	// TrainStartTime represents the time at which the Model started training
	// +kubebuilder:validation:Optional
	TrainingStartedAt *metav1.Time `json:"trainingStartedAt,omitempty" protobuf:"bytes,50,opt,name=trainingStartedAt"`
	// TrainCompletionTime represents the time at which the Model completed training
	// +kubebuilder:validation:Optional
	TrainingCompletedAt *metav1.Time `json:"trainingCompletedAt,omitempty" protobuf:"bytes,51,opt,name=trainingCompletedAt"`
	// TestingStartedAt represents the time at which the Model started testing
	// +kubebuilder:validation:Optional
	TestingStartedAt *metav1.Time `json:"testingStartedAt,omitempty" protobuf:"bytes,52,opt,name=testingStartedAt"`
	// TestingCompletedAt represents the time at which the Model completed testing
	// +kubebuilder:validation:Optional
	TestingCompletedAt *metav1.Time `json:"testingCompletedAt,omitempty" protobuf:"bytes,53,opt,name=testingCompletedAt"`
	// CompletedAt represents the time at which the Model was marked as ready, failed, or aborted
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,54,opt,name=completedAt"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,55,opt,name=updatedAt"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,56,rep,name=conditions"`
}

// ServingSpec specifies the requirements to serve a model
type ServingSpec struct {
	// Enabled indicates if automatic model serving is enabled. If false or unspecified, the Study or Model Class
	// managing the model will not create or update serving resources for the Model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// PredictorName specifies the name of a Predictor to create or update.
	// If unspecified, a live Predictor will not be created for the model
	PredictorName *string `json:"predictorName,omitempty" protobuf:"varint,2,opt,name=predictorName"`
	// Resources specifies the resources that will be allocated to the Predictor
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,3,opt,name=resources"`
	// The reference to the Serving Site under which serving resources will be created
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,6,opt,name=servingSiteRef"`
	// Dashboard indicates if a Data App will be created for the Model
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Dashboard *bool `json:"dashboard,omitempty" protobuf:"varint,8,opt,name=dashboard"`
	// Access specifies the configuration for the Predictor service to be exposed externally
	// +kubebuilder:validation:Optional
	Access catalog.PredictorAccessSpec `json:"access,omitempty" protobuf:"bytes,9,opt,name=access"`
	// Replicas specifies the number of replicas that will be created for the Predictor
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,10,opt,name=replicas"`
	// Promotion specifies the promotion policy for the Predictor
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Promotion *catalog.PromotionType `json:"promotion,omitempty" protobuf:"varint,12,opt,name=promotion"`
}

// RuntimeStatus contains information about the execution environment of the Model
type RuntimeStatus struct {
	// The Python version of the model trainer
	// +kubebuilder:validation:Optional
	PythonVersion string `json:"pythonVersion,omitempty" protobuf:"bytes,1,opt,name=pythonVersion"`
	// The OS of the trainer container
	// +kubebuilder:validation:Optional
	OS string `json:"os,omitempty" protobuf:"bytes,3,opt,name=os"`
	// The Python packages used during training (produced by pip freeze)
	// +kubebuilder:validation:Optional
	PythonPackages map[string]string `json:"pythonPackages,omitempty" protobuf:"bytes,4,opt,name=pythonPackages"`
}

// HyperParameterValue represent an individual hyperparameter for a machine learning algorithm
type HyperParameterValue struct {
	// The name of the hyperparameter
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// The value of the hyperparameter
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}

// ClassicalEstimatorSpec defines the specification for the Model's algorithm
type ClassicalEstimatorSpec struct {
	// AlgorithmName references the name of an estimator
	AlgorithmName string `json:"algorithmName,omitempty" protobuf:"bytes,1,opt,name=algorithmName"`
	// Parameters is a list of hyperparameters for the algorithm
	Parameters []HyperParameterValue `json:"parameters,omitempty" protobuf:"bytes,2,rep,name=parameters,casttype=HyperParameterValue"`
}

// FeatureEngineeringSpec specifies the feature engineering to be performed on the training data
type FeatureEngineeringSpec struct {
	// Pipelines contains the collection of feature engineering pipelines that
	// will be applied to the dataset prior to model training
	// +kubebuilder:validation:Optional
	Pipelines []FeatureEngineeringPipeline `json:"pipelines,omitempty" protobuf:"bytes,1,rep,name=pipelines"`
	// Imbalance specifies the method which will be used to handle an imbalanced dataset
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imbalance *catalog.ImbalanceHandling `json:"imbalance,omitempty" protobuf:"bytes,2,opt,name=imbalance"`
}

// FeatureEngineeringPipeline represents a single pipeline to transform a dataset
type FeatureEngineeringPipeline struct {
	// Name specifies the unique name of the pipeline
	// +kubebuilder:validation:Required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// DataType specifies the data type of the pipeline, which corresponds to the
	// data type of all features in the pipeline
	// +kubebuilder:validation:Required
	DataType catalog.DataType `json:"dataType,omitempty" protobuf:"bytes,2,opt,name=dataType"`
	// Features contains the collection of features which the pipeline will be applied to
	// +kubebuilder:validation:Optional
	Features []string `json:"features,omitempty" protobuf:"bytes,3,rep,name=features"`
	// Imputation specifies the imputation method to use when handling missing values
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Imputation *catalog.Imputation `json:"imputation,omitempty" protobuf:"bytes,4,opt,name=imputation"`
	// Encoding specifies the encoding method to use for categorical features
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Encoding *catalog.CategoricalEncoding `json:"encoding,omitempty" protobuf:"bytes,5,opt,name=encoding"`
	// Scaling specifies the scaling method to use for numerical features
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Scaling *catalog.Scaling `json:"scaling,omitempty" protobuf:"bytes,6,opt,name=scaling"`
	// Discretisation specifies the discretisation method to convert numerical features to discrete variables
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Discretisation *catalog.Discretisation `json:"discretisation,omitempty" protobuf:"bytes,7,opt,name=discretisation"`
	// VariableTransformation specifies the transformation method to use for numerical feature
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	VariableTransformation *catalog.VariableTransformation `json:"variableTransformation,omitempty" protobuf:"bytes,8,opt,name=variableTransformation"`
	// OutlierHandling specifies the method to use when handling outliers
	// +kubebuilder:default:=none
	// Apply only to numeric data types.
	OutlierHandling *catalog.OutlierHandling `json:"outlierHandling,omitempty" protobuf:"bytes,9,opt,name=outlierHandling"`
	// DatetimeTransformation specifies the method to use when handling the date-time data type
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	DatetimeTransformation *catalog.DatetimeTransformation `json:"datetimeTransformation,omitempty" protobuf:"bytes,10,opt,name=datetimeTransformation"`
	// Text defines the configuration for the pipeline to handle text features
	// +kubebuilder:validation:Optional
	Text *TextPipelineSpec `json:"text,omitempty" protobuf:"bytes,11,opt,name=text"`
	// Drop indicates if all of all the features for the pipeline will be dropped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Drop *bool `json:"drop,omitempty" protobuf:"varint,12,opt,name=drop"`
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

// TrainingSpec specifies the configuration of a model training workload
type TrainingSpec struct {
	// The name of the Lab under which the model training Job will be created
	LabName *string `json:"labName,omitempty" protobuf:"bytes,1,opt,name=labName"`
	// The priority of the Kubernetes Job created by the Model (medium, by default)
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="medium"
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,2,opt,name=priority"`
	// The type of cross-validation to use, in the case that a validation dataset is not enabled
	// +kubebuilder:default:=kfold
	// +kubebuilder:validation:Optional
	CvType *catalog.CvType `json:"cvType,omitempty" protobuf:"bytes,3,opt,name=cvType"`
	// The number of folds to use during cross-validation. If set to 0, cross-validation will be disabled
	// +kubebuilder:default:=5
	// +kubebuilder:validation:Optional
	Folds *int32 `json:"folds,omitempty" protobuf:"varint,5,opt,name=folds"`
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
	// Indicates if feature importance for the model will be computed as part of training. Some algorithms
	// (e.g. Random Forest) have built in support for feature importance
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	FeatureImportance *bool `json:"featureImportance,omitempty" protobuf:"varint,15,opt,name=featureImportance"`
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
	// The maximum time, in seconds, that Jobs associated with the Model can run for before being forcefully cancelled
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	Timeout *int32 `json:"timeout,omitempty" protobuf:"varint,20,opt,name=timeout"`
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
	Location catalog.DataLocation `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
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
	// The location of the generated explanation data
	// +kubebuilder:validation:Optional
	ExplainerLocation catalog.FileLocation `json:"explainerLocation,omitempty" protobuf:"bytes,3,opt,name=explainerLocation"`
	// The location of the train SHAP values
	// +kubebuilder:validation:Optional
	TrainShapValuesLocation catalog.FileLocation `json:"trainShapValuesLocation,omitempty" protobuf:"bytes,4,opt,name=trainShapValuesLocation"`
	// The location of the test SHAP values
	// +kubebuilder:validation:Optional
	TestShapValuesLocation catalog.FileLocation `json:"testShapValuesLocation,omitempty" protobuf:"bytes,5,opt,name=testShapValuesLocation"`
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
	// Holds the worker on-going result, when a worker finish, we update the location of their result files
	// +kubebuilder:validation:Optional
	WorkerResults []catalog.WorkerRunResult `json:"workerResults,omitempty" protobuf:"bytes,4,rep,name=workerResults"`
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

type ServingStatus struct {
	// The name of the Predictor hosting this model
	// +kubebuilder:validation:Optional
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`
	// The name of the Data App hosting the model
	// +kubebuilder:validation:Optional
	DataAppName *string `json:"dataAppName,omitempty" protobuf:"bytes,3,opt,name=dataAppName"`
	// The endpoint of the model served by a Predictor
	// +kubebuilder:validation:Optional
	PredictorEndpoint *string `json:"predictorEndpoint,omitempty" protobuf:"bytes,4,opt,name=predictorEndpoint"`
	// The endpoint of the model served by a Data App
	// +kubebuilder:validation:Optional
	DashboardEndpoint *string `json:"dashboardEndpoint,omitempty" protobuf:"bytes,5,opt,name=dashboardEndpoint"`
	// Role indicates the role of the model deployed after it is deployed within a Predictor
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Role *catalog.ModelRole `json:"role,omitempty" protobuf:"bytes,6,opt,name=role"`
}
