package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// PredictionConditionType is the condition type of the prediction pipeline
type PredictionConditionType string

const (
	PredictionSaved PredictionConditionType = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:resource:path=predictions,shortName=pred,singular=prediction,categories={inference,modela}
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".status.version"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:printcolumn:name="Last Prediction",type="date",JSONPath=".status.lastRunAt",description=""
// Prediction represents a single batch prediction on a dataset
type Prediction struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status PredictionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictionList is a list of Predictions
type PredictionList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Prediction `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionSpec represent the desired state of Prediction
type PredictionSpec struct {
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// Description contains the user-provided description of the object
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// RunSpec specifies the configuration for runs created by the Prediction
	// +kubebuilder:validation:Required
	Run catalog.RunSpec `json:"run,omitempty" protobuf:"bytes,3,opt,name=run"`
	// Schedule specifies the schedule to create new runs for the Prediction
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,4,opt,name=schedule"`
	// The reference to the Serving Site under which Jobs created by the Prediction will be executed.
	// If empty, it will default to the default Serving Site of the Data Product for the Prediction
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,5,opt,name=servingSiteRef"`
	// The reference to the Model which will be served during the batch prediction workload
	// +kubebuilder:validation:Optional
	ModelRef *v1.ObjectReference `json:"modelRef,omitempty" protobuf:"bytes,6,opt,name=modelRef"`
	// The reference to the Study Run, whose selected model will be used for the prediction.
	// When specified, StudyRunRef will take precedence over ModelRef
	// +kubebuilder:validation:Optional
	StudyRunRef *catalog.StudyRunReference `json:"studyRunRef,omitempty" protobuf:"bytes,7,opt,name=studyRunRef"`
	// Input specifies the location of the prediction dataset
	// +kubebuilder:validation:Optional
	Input data.DataInputSpec `json:"input,omitempty" protobuf:"bytes,8,opt,name=input"`
	// Output specifies the location where the prediction results will be stored
	// +kubebuilder:validation:Optional
	Output data.DataOutputSpec `json:"output,omitempty" protobuf:"bytes,9,opt,name=output"`
	// Labeled indicates if the input dataset is labeled, in which case a batch prediction workload will not be created.
	// If enabled, a workload will be created to compute the metrics of the model based
	// on the labeled dataset and run the tests specified by UnitTests
	// +kubebuilder:default:=false
	Labeled *bool `json:"labeled,omitempty" protobuf:"varint,10,opt,name=labeled"`
	// +kubebuilder:validation:Optional
	UnitTests training.ModelTestSuite `json:"unitTests,omitempty" protobuf:"bytes,11,opt,name=unitTests"`
	// Resources specifies the resource requirements allocated to the batch prediction workload
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,12,opt,name=resources"`
	// Forecast specifies the configuration to perform a forecast
	// +kubebuilder:validation:Optional
	Forecast ForecastPredictionSpec `json:"forecast,omitempty" protobuf:"bytes,13,opt,name=forecast"`
	// ModelClassName references the name of the Model Class that created the resource, if applicable
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,14,opt,name=modelClassName"`
}

// PredictionStatus is the observed state of a Prediction
type PredictionStatus struct {
	// ObservedGeneration specifies the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Active contains a collection of references to currently active runs
	// +optional
	Active catalog.RunReferenceList `json:"active,omitempty" protobuf:"bytes,2,rep,name=active"`
	// LastRunVersion contains the integer version last used to create a run
	// +kubebuilder:default:=0
	LastRunVersion catalog.Version `json:"lastRunVersion,omitempty" protobuf:"varint,4,opt,name=lastRunVersion"`
	// AvailableRunVersions contains the collection of run versions which are ready for use.
	// Each version corresponds with an existing PredictionRun resource
	//+kubebuilder:validation:Optional
	AvailableRunVersions catalog.VersionList `json:"availableRunVersions,omitempty" protobuf:"bytes,5,opt,name=availableRunVersions"`
	// LastRunAt specifies the time at which a run was last created for the Study
	//+kubebuilder:validation:Optional
	LastRunAt *metav1.Time `json:"lastRunAt,omitempty" protobuf:"bytes,6,opt,name=lastRunAt"`
	// LastFailureMessage specifies the failure message of the last run. If the last run succeeded, the field will be cleared
	//+kubebuilder:validation:Optional
	LastFailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,7,opt,name=failureMessage"`
	// Schedule specifies the status of the run schedule
	//+kubebuilder:validation:Optional
	Schedule catalog.RunScheduleStatus `json:"schedule,omitempty" protobuf:"bytes,8,opt,name=schedule"`
	// UpdatedAt specifies the last time the Study was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,9,opt,name=updatedAt"`
	// +optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,10,rep,name=conditions"`
}

// ForecastPredictionSpec specifies the details of a forecasting model
type ForecastPredictionSpec struct {
	// The hierarchy specification, which maps columns to values
	// +kubebuilder:validation:Optional
	HierarchyValues map[string]string `json:"hierarchyValues,omitempty" protobuf:"bytes,1,opt,name=hierarchyValues"`
	// The interval of the forecast
	Horizon training.WindowSpec `json:"horizon,omitempty" protobuf:"bytes,2,opt,name=horizon"`
}
