package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase specifies the current phase of a Model
type ModelClassPhase string

const (
	ModelClassPhaseFailed                  ModelClassPhase = "Failed"
	ModelClassPhaseReady                   ModelClassPhase = "Ready"
	ModelClassPhaseCreatingTrainingDataset ModelClassPhase = "CreatingTrainingDataset"
	ModelClassPhaseWaitingForPromotion     ModelClassPhase = "WaitingForPromotion" // in case of manual promotion
	ModelClassPhaseTraining                ModelClassPhase = "Training"
	ModelClassPhasePromoting               ModelClassPhase = "Promoting"
	ModelClassPhaseDrifted                 ModelClassPhase = "Drifted"
)

// ModelClassConditionType is the condition of a ModelClass
type ModelClassConditionType string

/// ModelClass Condition
const (
	// ModelClassInitialized states that the resources needed for training are allocated and ready
	ModelClassReady ModelClassConditionType = "Ready"
	// ModelClassSaved states that the ModelClass has been archived in a database
	ModelClassSaved ModelClassConditionType = "Saved"
	// State that we have created the training set
	ModelClassCreatedTrainingSet ModelClassConditionType = "CreatedTrainingSet"
	// ModelClassTrained states that the current model from the ModelClass has been trained
	ModelClassTrained ModelClassConditionType = "Trained"
	// ModelClassDeployed states that the latest model
	ModelClassDrifted ModelClassConditionType = "Drifted"
)

// ModelClassCondition describes the state of a ModelClass at a certain point
type ModelClassCondition struct {
	// Type of ModelClass condition
	// +kubebuilder:validation:Optional
	Type ModelClassConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelClassConditionType"`
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

// ModelClass represents an automatic search for the best machine learning model for a given dataset
// +kubebuilder:subresource:status
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelclasses,singular=modelclass,shortName=mc,categories={training,modela}
type ModelClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelClassSpec `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ModelClassStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// ModelClassSpec defines the desired state of a ModelClass and the parameters for a model search
type ModelClassSpec struct {
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName" protobuf:"bytes,2,opt,name=versionName"`
	// The user-provided description of the ModelClass
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The machine learning task type (i.e. regression, classification)
	// +kubebuilder:validation:Required
	// +required
	Task *catalog.MLTask `json:"task" protobuf:"bytes,4,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask" protobuf:"bytes,5,opt,name=subtask"`
	// The optimization objective. The objective is also used when promoting models
	// +kubebuilder:validation:Optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,6,opt,name=objective"`
	// If using the feature store (pre defined features), specify the feature groups the would
	// be used to create the training data.
	// +kubebuilder:validation:Optional
	Entities []EntityRef `json:"entities,omitempty" protobuf:"bytes,7,opt,name=entities"`
	// The location where ModelClass artifacts (metadata, reports, and model artifacts) will be stored
	// +kubebuilder:validation:Optional
	ArtifactLocation data.DataLocation `json:"artifactLocation,omitempty" protobuf:"bytes,8,opt,name=artifactLocation"`
	// The model class data
	// +kubebuilder:validation:Optional
	Data ModelClassDataSpec `json:"data,omitempty" protobuf:"bytes,9,opt,name=data"`
	// TrainingTemplate specifies the configuration to train and evaluate models
	// +kubebuilder:validation:Optional
	Training ModelClassTrainingSpec `json:"training,omitempty" protobuf:"bytes,10,opt,name=training"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	Serving ModelClassServingSpec `json:"serving,omitempty" protobuf:"bytes,11,opt,name=serving"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,12,opt,name=notification"`
	// The schedule for summary report
	// +kubebuilder:validation:Optional
	ReportSchedule catalog.RunSchedule `json:"reportSchedule,omitempty" protobuf:"bytes,13,opt,name=reportSchedule"`
	// Fast indicates if Dataset, Model and Study resources associated with the ModelClass should run in fast mode.
	// Running in fast mode will skip unnecessary workloads such as profiling, reporting, explaining, etc.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,14,opt,name=fast"`
}

// Specification for the label information
type ModelClassDataSpec struct {
	// The location of the observation file or table.
	// The observations are the source for training (observations which have a value for the target
	// columns) or for prediction (observations with no targets).
	// +kubebuilder:validation:Optional
	Observations data.DataLocation `json:"observations,omitempty" protobuf:"bytes,1,opt,name=observations"`
	// The location of the prediction history file. The prediction history contain all the predictions for
	// an observation done by multiple models.
	// +kubebuilder:validation:Optional
	PredictionHistory data.DataLocation `json:"predictionHistory,omitempty" protobuf:"bytes,2,opt,name=predictionHistory"`
	// The location of the predictions table. The predictions table contains all the latest predictions.
	// +kubebuilder:validation:Optional
	Predictions data.DataLocation `json:"predictions,omitempty" protobuf:"bytes,3,opt,name=predictions"`
	// The schema of the observation file. The schema is used as the basis for training and serving.
	// +kubebuilder:validation:Optional
	Schema data.Schema `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// In case where the feature group data is stored as flat file. the flat file format
	// define how to read the file.
	// +kubebuilder:validation:Optional
	FlatFile *data.FlatFileFormatSpec `json:"flatfile,omitempty" protobuf:"bytes,5,opt,name=flatfile"`
	// The primary key for the observation row
	// If empty the system will set the join key as the primary key based on the schema.
	// +kubebuilder:validation:Optional
	PrimaryKey []string `json:"primaryKey,omitempty" protobuf:"bytes,6,opt,name=primaryKey"`
	// Define the column name that contains the prediction time for each row in the label data.
	// The system uses the prediction time in order to avoid data leakage.
	// I.e. the training dataset will contain only data that was known before the prediction time
	// If null, the system will set the prediction time column as the time index column in the schema.
	// +kubebuilder:validation:Optional
	PredictionTimeColumn *string `json:"predictionTimeColumn,omitempty" protobuf:"bytes,7,opt,name=predictionTimeColumn"`
	// Name of the target column
	// If null, the system will assign this column based on the schema.
	// +kubebuilder:validation:Optional
	Target *string `json:"target,omitempty" protobuf:"bytes,8,opt,name=target"`
	// Tests to run on the training data before training. This assurs data quality is being met.
	// +kubebuilder:validation:Optional
	Tests catalog.TestSuite `json:"tests,omitempty" protobuf:"bytes,9,opt,name=tests"`
}

// Specification for model training.
type ModelClassTrainingSpec struct {
	// The reference to the Lab under which the Model for the class will be trained
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,1,opt,name=labRef"`
	// Define a reference to a study template. The study template will be the basis for training models
	// From this model class.
	// +kubebuilder:validation:Optional
	StudyTemplateName string `json:"studyTemplateName,omitempty" protobuf:"bytes,2,opt,name=studyTemplateName"`
	// A template for models unit tests
	// +kubebuilder:validation:Optional
	ModelUnitTests catalog.TestSuite `json:"modelUnitTests,omitempty" protobuf:"bytes,3,opt,name=modelUnitTests"`
	// Training schedule
	// +kubebuilder:validation:Optional
	TrainingSchedule catalog.RunSchedule `json:"trainingSchedule,omitempty" protobuf:"bytes,4,opt,name=trainingSchedule"`
	// ModelImage specifies the configuration to upload Docker images of models to an image registry
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,5,opt,name=modelImage"`
	// Promotion defines the way to promote models
	//+kubebuilder:validation:Optional
	PromotionPolicy catalog.PromotionType `json:"promotionPolicy,omitempty" protobuf:"bytes,6,opt,name=promotionPolicy"`
	// If true, retrain the model. Once the model is retrained, we set the flag to false.
	// +kubebuilder:validation:Optional
	Retrain *bool `json:"retrain,omitempty" protobuf:"varint,7,opt,name=retrain"`
	// Define custom search space for this model class.
	// The search space defines which algorithm to include or execlude
	// If not defined, we would use the search space in the model template.
	// +kubebuilder:validation:Optional
	SearchSpace *AlgorithmSearchSpaceSpec `json:"searchSpace,omitempty" protobuf:"bytes,8,opt,name=searchSpace"`
	// Training resources
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,9,opt,name=resources"`
}

type ModelClassServingSpec struct {
	// Define the stages to test the model before release
	// +kubebuilder:validation:Optional
	Pipeline []PipelineStageSpec `json:"pipeline,omitempty" protobuf:"bytes,1,opt,name=pipeline"`
	// The name of the predictor template to use when
	// +kubebuilder:validation:Optional
	PredictorTemplateName *string `json:"predictorTemplateName,omitempty" protobuf:"bytes,2,opt,name=predictorTemplateName"`
	// The reference to the serving site, where online predictor will be served.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,3,opt,name=servingSiteRef"`
	// Create an online predictor, if the model is used only for batch prediction, set this option to false.
	// +kubebuilder:validation:Optional
	Online *bool `json:"online,omitempty" protobuf:"varint,4,opt,name=online"`
	// Setup a dashboard for the predictor.
	// +kubebuilder:validation:Optional
	Dashboard *bool `json:"dashboard,omitempty" protobuf:"varint,5,opt,name=dashboard"`
	// Access specifies the configuration for the Predictor service to be exposed externally
	// +kubebuilder:validation:Optional
	Access catalog.AccessSpec `json:"access,omitempty" protobuf:"bytes,6,opt,name=access"`
	// The number of replicas for the Kubernetes Serving associated with the Predictor, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,7,opt,name=replicas"`
	// Schedule for computing drift
	// +kubebuilder:validation:Optional
	MonitoringSchedule catalog.RunSchedule `json:"monitoringSchedule,omitempty" protobuf:"bytes,8,opt,name=monitoringSchedule"`
	// BatchPrediction schedule
	// +kubebuilder:validation:Optional
	BatchPredictionSchedule catalog.RunSchedule `json:"batchPredictionSchedule,omitempty" protobuf:"bytes,9,opt,name=batchPredictionSchedule"`
	// The serving resources for batch or online prediction
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,10,opt,name=resources"`
	// The name of the live model
	// +kubebuilder:validation:Optional
	Live *string `json:"live,omitempty" protobuf:"bytes,11,opt,name=live"`
	// The name of shadow models
	// +kubebuilder:validation:Optional
	Shadows []string `json:"shadows,omitempty" protobuf:"bytes,12,rep,name=shadows"`
}

// Define a test stage
type PipelineStageSpec struct {
	// The stage name
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// the Tests to run on the stage
	// +kubebuilder:validation:Optional
	Tests catalog.TestSuite `json:"tests,omitempty" protobuf:"bytes,2,opt,name=tests"`
	// The serving site ref
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,3,opt,name=servingSiteRef"`
	// The resources to use when running tests at this stage
	// +kubebuilder:validation:Optional
	Resources *catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,4,opt,name=resources"`
}

type EntityRef struct {
	// The name of the entity
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Feature to exclude from the link
	// +kubebuilder:validation:Optional
	Exclude []string `json:"exclude,omitempty" protobuf:"bytes,2,opt,name=exclude"`
}

// ModelClassList contains a list of Studies
// +kubebuilder:object:root= true
type ModelClassList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ModelClass `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type ModelClassStatus struct {
	Phase ModelClassPhase `json:"phase,omitempty" protobuf:"varint,1,opt,name=phase"`
	// Total models created for the ModelClass
	// +kubebuilder:validation:Optional
	Models int32 `json:"models,omitempty" protobuf:"varint,2,opt,name=models"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,4,opt,name=lastUpdated"`
	// BestFE specifies the best feature engineering pipeline produced by the ModelClass
	//+kubebuilder:validation:Optional
	BestFE *FeatureEngineeringSpec `json:"bestFE,omitempty" protobuf:"bytes,5,opt,name=bestFE"`
	// Store the location of the last training set
	//+kubebuilder:validation:Optional
	LastTrainingSet data.DataLocation `json:"lastOnlineTrainingSet,omitempty" protobuf:"bytes,6,opt,name=lastOnlineTrainingSet"`
	// Training schedule status
	//+kubebuilder:validation:Optional
	TrainingScheduleStatus catalog.RunScheduleStatus `json:"trainingScheduleStatus,omitempty" protobuf:"bytes,7,opt,name=trainingScheduleStatus"`
	// Batch Prediction schedule
	//+kubebuilder:validation:Optional
	PredictionScheduleStatus catalog.RunScheduleStatus `json:"predictionScheduleStatus,omitempty" protobuf:"bytes,8,opt,name=predictionSceduleStatus"`
	// Batch Prediction schedule
	//+kubebuilder:validation:Optional
	MonitoringScheduleStatus catalog.RunScheduleStatus `json:"monitoringScheduleStatus,omitempty" protobuf:"bytes,9,opt,name=monitoringSceduleStatus"`
	// Batch Prediction schedule
	//+kubebuilder:validation:Optional
	ReportScheduleStatus catalog.RunScheduleStatus `json:"reportScheduleStatus,omitempty" protobuf:"bytes,10,opt,name=reportSceduleStatus"`
	// Training schedule status
	//+kubebuilder:validation:Optional
	PromotionStatus PromotionStatus `json:"promotionStatus,omitempty" protobuf:"bytes,11,opt,name=promotionStatus"`
	// Holds the latest dataset used during training.
	//+kubebuilder:validation:Optional
	LastestDataset string `json:"latestDataset,omitempty" protobuf:"bytes,12,opt,name=latestDataset"`
	// The lastest study name
	//+kubebuilder:validation:Optional
	LastestStudy string `json:"latestStudy,omitempty" protobuf:"bytes,13,opt,name=latestStudy"`
	// The latest best model
	//+kubebuilder:validation:Optional
	LastestModel string `json:"latestModel,omitempty" protobuf:"bytes,14,opt,name=latestModel"`
	// List of the last 5 retired models
	RetiredModels []string `json:"retired,omitempty" protobuf:"bytes,15,opt,name=retired"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelClassCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,16,rep,name=conditions"`
}

type PromotionStatus struct {
	// Last promotion was done
	PromotedAt *metav1.Time `json:"promotedAt,omitempty" protobuf:"bytes,1,opt,name=promotedAt"`
	// If true the promotion was automatic
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,2,opt,name=auto"`
	// for manual promotion, who approved the promotion
	ApprovedBy v1.ObjectReference `json:"approvedBy,omitempty" protobuf:"bytes,3,opt,name=approvedBy"`
}
