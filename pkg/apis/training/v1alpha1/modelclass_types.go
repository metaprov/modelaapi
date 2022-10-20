package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelClassConditionType is the condition of a ModelClass
type ModelClassConditionType string

/// ModelClass Condition
const (
	// ModelClassInitialized states that the resources needed for training are allocated and ready
	ModelClassReady ModelClassConditionType = "Ready"
	// ModelClassSaved states that the ModelClass has been archived in a database
	ModelClassSaved ModelClassConditionType = "Saved"
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
	Spec              ModelClassSpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            ModelClassStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// The modelclass data spec.
	Data ModelClassDataSpec `json:"data" protobuf:"bytes,6,opt,name=data"`
	// TrainingTemplate specifies the configuration to train and evaluate models
	// +kubebuilder:validation:Optional
	Training ModelClassTrainingSpec `json:"training,omitempty" protobuf:"bytes,7,opt,name=training"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	Deployment ModelClassDeploymentSpec `json:"deployment,omitempty" protobuf:"bytes,8,opt,name=deployment"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	Monitoring ModelClassMonitoringSpec `json:"monitoring,omitempty" protobuf:"bytes,9,opt,name=monitoring"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	Labeling ModelClassMonitoringSpec `json:"labeling,omitempty" protobuf:"bytes,10,opt,name=labeling"`
	// ServingTemplate specifies the model format and resource requirements that will be applied to
	// the Predictor created for the Model that will be selected by the ModelClass
	// +kubebuilder:validation:Optional
	Retraining ModelClassRetrainingSpec `json:"retraining,omitempty" protobuf:"bytes,11,opt,name=retraining"`
	// The notification specification that determines which notifiers will receive Alerts generated by the object
	//+kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,12,opt,name=notification"`
	// The schedule for summary report
	// +kubebuilder:validation:Optional
	Report catalog.RunSchedule `json:"report,omitempty" protobuf:"bytes,13,opt,name=report"`
	// If models are trained on data created from a point in time view.
	// +kubebuilder:validation:Optional
	FeatureServiceSpec `json:"trainingData,omitempty" protobuf:"bytes,14,opt,name=trainingData"`
}

type ModelClassDataSpec struct {
	// The data location where ModelClass artifacts (metadata, reports, and model artifacts) generated by the ModelClass will be stored
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,1,opt,name=location"`
}

// Specification for model training.
type ModelClassTrainingSpec struct {
	// The reference to the Lab under which the Model for the class will be trained
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,1,opt,name=labRef"`
	// Template for study
	// +kubebuilder:validation:Optional
	Study StudySpec `json:"study,omitempty" protobuf:"bytes,2,opt,name=study"`
	// A template for models unit tests
	// +kubebuilder:validation:Optional
	ModelUnitTests catalog.TestSuite `json:"modelUnitTests,omitempty" protobuf:"bytes,3,opt,name=modelUnitTests"`
	// Training schedule
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,4,opt,name=schedule"`
	// ModelImage specifies the configuration to upload Docker images of models to an image registry
	//+kubebuilder:validation:Optional
	ModelImage ModelImageSpec `json:"modelImage,omitempty" protobuf:"bytes,5,opt,name=modelImage"`

	// Promotion defines the way to promote models
	//+kubebuilder:validation:Optional
	Promotion catalog.PromotionType `json:"promotion,omitempty" protobuf:"bytes,6,opt,name=promotion"`
}

type ModelClassDeploymentSpec struct {
	// Define the stages to test the model before release
	// +kubebuilder:validation:Optional
	Pipeline []ModelClassStageSpec `json:"pipeline,omitempty" protobuf:"bytes,1,opt,name=pipeline"`
	// The reference to the serving site, where online predictor will be served.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	ServingSiteRef v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,2,opt,name=servingSiteRef"`
	// Create an online predictor, if the model is used only for batch prediction, set this option to false.
	// +kubebuilder:validation:Optional
	Online *bool `json:"online,omitempty" protobuf:"varint,3,opt,name=online"`
	// Setup a dashboard for the predictor.
	// +kubebuilder:validation:Optional
	Dashboard *bool `json:"dashboard,omitempty" protobuf:"varint,4,opt,name=dashboard"`
	// Access specifies the configuration for the Predictor service to be exposed externally
	// +kubebuilder:validation:Optional
	Access catalog.AccessSpec `json:"access,omitempty" protobuf:"bytes,5,opt,name=access"`
	// The number of replicas for the Kubernetes Deployment associated with the Predictor, which will instantiate multiple
	// copies of the service in the case that automatic scaling is disabled
	// +kubebuilder:validation:Optional
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,6,opt,name=replicas"`
	// Prediction schedule
	// +kubebuilder:validation:Optional
	PredictionSchedule catalog.RunSchedule `json:"predictionSchedule,omitempty" protobuf:"bytes,7,opt,name=predictionSchedule"`
}

// Define a test stage
type ModelClassStageSpec struct {
	// The stage name
	Name string `json:"drift,omitempty" protobuf:"bytes,1,opt,name=drift"`
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

type ModelClassRetrainingSpec struct {
	// If true , retrain the model if drift was detected
	// +kubebuilder:validation:Optional
	Drift *bool `json:"drift,omitempty" protobuf:"bytes,1,opt,name=drift"`
	// The schedule for model retraining
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,2,opt,name=schedule"`
}

type ModelClassMonitoringSpec struct {
	// If true , retrain the model if drift was detected
	// +kubebuilder:validation:Optional
	Drift *bool `json:"drift,omitempty" protobuf:"bytes,1,opt,name=drift"`
	// The schedule for model retraining
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,2,opt,name=schedule"`
}

type ModelClassLabelingSpec struct {
	// The schedule for model retraining
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,1,opt,name=schedule"`
}

type FeatureServiceSpec struct {
	// +kubebuilder:validation:Optional
	Views []FeatureViewRef `json:"views,omitempty" protobuf:"bytes,1,opt,name=views"`
}

type FeatureViewRef struct {
	// The name of the view
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Feature to include from the view
	// +kubebuilder:validation:Optional
	Include []string `json:"include,omitempty" protobuf:"bytes,2,opt,name=include"`
	// Feature to exclude from the view
	// +kubebuilder:validation:Optional
	Exclude []string `json:"exclude,omitempty" protobuf:"bytes,3,opt,name=exclude"`
}

// ModelClassList contains a list of Studies
// +kubebuilder:object:root= true
type ModelClassList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ModelClass `json:"items" protobuf:"bytes,2,rep,name=items"`
}
