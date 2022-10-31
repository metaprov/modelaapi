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
	ModelClassPhaseFailed                         ModelClassPhase = "Failed"
	ModelClassPhasePending                        ModelClassPhase = "Pending"
	ModelClassPhasePreparingTrainingDataset       ModelClassPhase = "PreparingTrainingDataset"
	ModelClassPhasePreparingTrainingDatasetFailed ModelClassPhase = "FailedToPrepareTrainingDataset"
	ModelClassPhaseTraining                       ModelClassPhase = "Training"
	ModelClassPhaseTrainingFailed                 ModelClassPhase = "FailedToTraining"
	ModelClassPhaseTrained                        ModelClassPhase = "Trained"
	ModelClassPhaseDeploying                      ModelClassPhase = "Deploying"
	ModelClassPhaseFailedToDeploy                 ModelClassPhase = "FailedToDeploy"
	ModelClassPhaseDeployed                       ModelClassPhase = "Deployed"
	ModelClassPhaseDrifted                        ModelClassPhase = "Drifted"
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
	ModelClassDeployed ModelClassConditionType = "Deployed"
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
	// Description of the labels file for this model class.
	// The labels file is used to build the complete training data.
	// +kubebuilder:validation:Optional
	Labels LabelsDataSpec `json:"labels,omitempty" protobuf:"bytes,6,opt,name=labels"`
	// The modelclass data spec.
	Data ModelClassDataSpec `json:"data" protobuf:"bytes,7,opt,name=data"`
	// TrainingTemplate specifies the configuration to train and evaluate models
	// +kubebuilder:validation:Optional
	Training ModelClassTrainingSpec `json:"training,omitempty" protobuf:"bytes,8,opt,name=training"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	Deployment ModelClassDeploymentSpec `json:"deployment,omitempty" protobuf:"bytes,9,opt,name=deployment"`
	// Specify when and from where to perform batch prediction
	// +kubebuilder:validation:Optional
	Prediction ModelClassPredictionSpec `json:"prediction,omitempty" protobuf:"bytes,10,opt,name=prediction"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,11,opt,name=notification"`
	// The schedule for summary report
	// +kubebuilder:validation:Optional
	ReportSchedule catalog.RunSchedule `json:"reportSchedule,omitempty" protobuf:"bytes,12,opt,name=reportSchedule"`
}

type ModelClassDataSpec struct {
	// If using the feature store (pre defined features), specify the feature groups the would
	// be used to create the training data.
	// +kubebuilder:validation:Optional
	Entities []EntityRef `json:"entities,omitempty" protobuf:"bytes,1,opt,name=entities"`
	// The data location where ModelClass artifacts (metadata, reports, and model artifacts) generated by the ModelClass will be stored
	// +kubebuilder:validation:Optional
	ArtifactLocation data.DataLocation `json:"artifactLocation,omitempty" protobuf:"bytes,2,opt,name=artifactLocation"`
	// The length of the windows used to create training data.
	// In general the training data will take into account all rows which are
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"bytes,5,opt,name=ttl"`
}

// Specification for the label information
type LabelsDataSpec struct {
	// The location or the sql of the labels file.
	// the labels file contain the training data.
	// The labels file can reside in the cloud or in a database.
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,1,opt,name=location"`
	// The schema of the labels file
	// +kubebuilder:validation:Optional
	Schema data.Schema `json:"schema,omitempty" protobuf:"bytes,2,opt,name=schema"`
	// The training file primary key. This key will be used as unique id for each row in the training dataset
	// If empty the system will set the join key as the primary key based on the schema.
	// +kubebuilder:validation:Optional
	PrimaryKey []string `json:"primaryKey,omitempty" protobuf:"bytes,3,opt,name=primaryKey"`
	// Define the column name that contains the prediction time for each row in the label data.
	// The system uses the prediction time in order to avoid data leakage.
	// I.e. the training dataset will contain only data that was known before the prediction time
	// If null, the system will set the prediction time column as the time index column in the schema.
	// +kubebuilder:validation:Optional
	PredictionTimeColumn *string `json:"predictionTimeColumn,omitempty" protobuf:"bytes,4,opt,name=predictionTimeColumn"`
	// Name of the target column
	// If null, the system will assign this column based on the schema.
	// +kubebuilder:validation:Optional
	Target *string `json:"target,omitempty" protobuf:"bytes,5,opt,name=target"`
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
	// If true, retrain on drift
	// +kubebuilder:validation:Optional
	RetrainOnDrift *bool `json:"retrainOnDrift,omitempty" protobuf:"bytes,7,opt,name=retrainOnDrift"`
}

type ModelClassDeploymentSpec struct {
	// Define the stages to test the model before release
	// +kubebuilder:validation:Optional
	Pipeline []ModelClassStageSpec `json:"pipeline,omitempty" protobuf:"bytes,1,opt,name=pipeline"`
	// The name of the predictor template
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
	// The number of replicas for the Kubernetes Deployment associated with the Predictor, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,7,opt,name=replicas"`
	// Schedule for computing drift
	// +kubebuilder:validation:Optional
	MonitoringSchedule catalog.RunSchedule `json:"monitoringSchedule,omitempty" protobuf:"bytes,9,opt,name=monitoringSchedule"`
}

type ModelClassPredictionSpec struct {
	// Prediction schedule
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,8,opt,name=schedule"`
	// The source location for data to predict
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,10,opt,name=location"`
}

// Define a test stage
type ModelClassStageSpec struct {
	// The stage name
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// the Tests to run on the stage
	// +kubebuilder:validation:Optional
	Tests catalog.TestSuite `json:"tests,omitempty" protobuf:"bytes,2,opt,name=tests"`
	// The lab to install and run the test suite
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
	TrainingStatus catalog.RunScheduleStatus `json:"trainingStatus,omitempty" protobuf:"bytes,7,opt,name=trainingStatus"`
	// Training schedule status
	//+kubebuilder:validation:Optional
	PromotionStatus PromotionStatus `json:"promotionStatus,omitempty" protobuf:"bytes,8,opt,name=promotionStatus"`
	// The lastest study name
	//+kubebuilder:validation:Optional
	LastestStudy string `json:"latestStudy,omitempty" protobuf:"bytes,9,opt,name=latestStudy"`
	// The latest best model
	//+kubebuilder:validation:Optional
	LastestModel string `json:"latestModel,omitempty" protobuf:"bytes,10,opt,name=latestModel"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []ModelClassCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,11,rep,name=conditions"`
}

type PromotionStatus struct {
	// Last promotion was done
	PromotedAt *metav1.Time `json:"promotedAt,omitempty" protobuf:"bytes,1,opt,name=promotedAt"`
	// If true the promotion was automatic
	Auto *bool `json:"auto,omitempty" protobuf:"bytes,2,opt,name=auto"`
	// for manual promotion, who approved the promotion
	ApprovedBy v1.ObjectReference `json:"approvedBy,omitempty" protobuf:"bytes,3,opt,name=approvedBy"`
}
