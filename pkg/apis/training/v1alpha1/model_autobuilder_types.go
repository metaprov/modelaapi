package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	datav1 "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//ModelAutobuilderPhase represent that state of the model auto builder
type ModelAutobuilderPhase string

const (
	ModelAutobuilderPhasePending            ModelAutobuilderPhase = "Pending"
	ModelAutobuilderPhaseDataSourceRunning  ModelAutobuilderPhase = "DataSourceRunning"
	ModelAutobuilderPhaseDataSourceReady    ModelAutobuilderPhase = "DataSourceReady"
	ModelAutobuilderPhaseDatasetRunning     ModelAutobuilderPhase = "DatasetRunning"
	ModelAutobuilderPhaseDatasetCompleted   ModelAutobuilderPhase = "DatasetCompleted"
	ModelAutobuilderPhaseStudyRunning       ModelAutobuilderPhase = "StudyRunning"
	ModelAutobuilderPhaseStudyCompleted     ModelAutobuilderPhase = "StudyCompleted"
	ModelAutobuilderPhasePredictorRunning   ModelAutobuilderPhase = "PredictorRunning"
	ModelAutobuilderPhasePredictorCompleted ModelAutobuilderPhase = "PredictorCompleted"
	ModelAutobuilderPhaseDataAppRunning     ModelAutobuilderPhase = "DataAppRunning"
	ModelAutobuilderPhaseDataAppCompleted   ModelAutobuilderPhase = "DataAppCompleted"
	ModelAutobuilderPhaseCompleted          ModelAutobuilderPhase = "Completed"
	ModelAutobuilderPhaseAborted            ModelAutobuilderPhase = "Aborted"
	ModelAutobuilderPhaseFailed             ModelAutobuilderPhase = "Failed"
)

// ModelAutobuilderConditionType represent the condition of a ModelAutobuilder
type ModelAutobuilderConditionType string

const (
	ModelAutobuilderReady                   ModelAutobuilderConditionType = "Ready"
	ModelAutobuilderDataProductReady        ModelAutobuilderConditionType = "DataProductReady"
	ModelAutobuilderDataProductVersionReady ModelAutobuilderConditionType = "DataProductVersionReady"
	ModelAutobuilderDataSourceReady         ModelAutobuilderConditionType = "DataSourceReady"
	ModelAutobuilderDatasetCompleted        ModelAutobuilderConditionType = "DatasetCompleted"
	ModelAutobuilderStudyCompleted          ModelAutobuilderConditionType = "StudyCompleted"
	ModelAutobuilderPredictorReady          ModelAutobuilderConditionType = "PredictorReady"
	ModelAutobuilderDataAppReady            ModelAutobuilderConditionType = "DataAppReady"
	ModelAutobuilderSaved                   ModelAutobuilderConditionType = "Saved"
)

// ModelAutobuilderCondition describes the state of a ModelAutobuilder at a certain point
type ModelAutobuilderCondition struct {
	// Type of ModelAutobuilder condition
	Type ModelAutobuilderConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelAutobuilderConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human-readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// ModelAutobuilder represents an automated pipeline to train and deploy a model based on a given dataset
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Data Product",type="string",JSONPath=".spec.dataProductName"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.dataProductVersionName"
// +kubebuilder:printcolumn:name="Entity",type="string",JSONPath=".status.datasetName"
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".status.studyName"
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".status.predictorName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelautobuilders,singular=modelautobuilder,shortName=ar,categories={training,modela,all}
// ModelAutobuilder represent an automatic run of all the phases needed to create a model
type ModelAutobuilder struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Spec   ModelAutobuilderSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status ModelAutobuilderStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// ModelAutobuilderList contains a list of ModelAutoBuilders
// +kubebuilder:object:root=true
type ModelAutobuilderList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelAutobuilder `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelAutobuilderSpec define the desired state of a ModelAutobuilder
type ModelAutobuilderSpec struct {
	// The name of the DataProduct namespace that the resource exists under
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DataProductName *string `json:"dataProductName,omitempty" protobuf:"bytes,1,opt,name=dataProductName"`
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DataProductVersionName *string `json:"dataProductVersionName,omitempty" protobuf:"bytes,2,opt,name=dataProductVersionName"`
	// DataSourceName is the name of an existing DataSource resource which will be used as the schema for the ModelAutoBuilder's Entity.
	// If empty, a DataSource will be automatically created based on the data specified by the Location field
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,3,opt,name=datasourceName"`
	// The name of an existing Entity resource, or the name of the Entity resource that will be created
	// based on the data specified by the Location field, which will be used to train models
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=253
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// The location for data that will be saved in a Entity resource to train models with
	// +kubebuilder:validation:Optional
	Location data.DataLocation `json:"location,omitempty" protobuf:"bytes,5,opt,name=location"`
	// The machine learning task type relevant to the dataset (i.e. regression, classification)
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,6,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,7,opt,name=subtask"`
	// The objective metric that will be measured against trained models to evaluate their performance
	// +kubebuilder:validation:Optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,8,opt,name=objective"`
	// The name of the column within the dataset that contains the label(s) to be predicted
	// +kubebuilder:validation:MaxLength=128
	// +kubebuilder:validation:Optional
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,9,opt,name=targetColumn"`
	// The deadline for models to complete training, in seconds
	// +kubebuilder:validation:Maximum=36000
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,10,opt,name=maxTime"`
	// The number of candidate models that will be sampled and trained
	// +kubebuilder:validation:Maximum=512
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,11,opt,name=maxModels"`
	// The Kubernetes-native access method which specifies how the Predictor created by the ModelAutobuilder will be exposed.
	// See https://modela.ai/docs/docs/serving/production/#access-method for a detailed description of each access type
	// +kubebuilder:default:=cluster-ip
	// +kubebuilder:validation:Optional
	AccessMethod *catalog.AccessType `json:"accessMethod,omitempty" protobuf:"bytes,12,opt,name=accessMethod"`
	// Indicates if the Predictor created by the ModelAutobuilder will automatically scale to traffic
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	AutoScale *bool `json:"autoScale,omitempty" protobuf:"varint,13,opt,name=autoScale"`
	// Indicates if feature engineering will be performed prior to the primary model search
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	FeatureEngineering *bool `json:"featureEngineering,omitempty" protobuf:"varint,14,opt,name=featureEngineering"`
	// Indicates if feature selection will be performed prior to the primary model search
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	FeatureSelection *bool `json:"featureSelection,omitempty" protobuf:"varint,15,opt,name=featureSelection"`
	// Indicates if the ModelAutobuilder will create a DataApp resource to serve the highest-performing model that was trained
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	DataApp *bool `json:"dataapp,omitempty" protobuf:"varint,16,opt,name=dataapp"`
	// DataSourceSpec specifies the full specification of the DataSource resource that will be created by the ModelAutobuilder.
	// If empty, the ModelAutobuilder will attempt to infer the schema of the data specified by the Location field
	// +kubebuilder:validation:Optional
	DataSourceSpec datav1.DataSourceSpec `json:"dataSourceSpec,omitempty" protobuf:"bytes,17,opt,name=dataSourceSpec"`
	// The desired number of trainers that will train candidate models in parallel. The number
	// of trainers is restricted based on the allowance provided by the active License
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,18,opt,name=trainers"`
	// The hyper-parameter optimization search method
	// +kubebuilder:default:="random"
	// +kubebuilder:validation:Optional
	Sampler *SamplerName `json:"sampler,omitempty" protobuf:"bytes,19,opt,name=sampler"`
	// Aborted indicates that the execution of the ModelAutobuilder and any associated workloads should be permanently stopped
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,20,opt,name=aborted"`
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,21,opt,name=owner"`
	// Resources specifies the resource requirements that will be allocated to dataset and model training Jobs
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,22,opt,name=resources"`
	// The reference to the Lab under which Entity and Study resources created by the ModelAutobuilder will be trained.
	// If unspecified, the default Lab from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	LabRef *v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,23,opt,name=labRef"`
	// The reference to the ServingSite where the Predictor created by the ModelAutobuilder will be hosted.
	// If unspecified, the default ServingSite from the parent DataProduct will be used
	// +kubebuilder:validation:Optional
	ServingSiteRef *v1.ObjectReference `json:"servingSiteRef,omitempty" protobuf:"bytes,24,opt,name=servingSiteRef"`
	// The type of dataset which was uploaded. `tabular` is the only supported type as of the current release
	// +kubebuilder:validation:Optional
	DatasetType catalog.DatasetType `json:"datasetType,omitempty" protobuf:"bytes,25,opt,name=datasetType"`
	// Fast indicates if Entity and Study resources associated with the ModelAutobuilder should run in fast mode.
	// Running in fast mode will skip unnecessary workloads such as profiling, reporting, explaining, etc.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fast *bool `json:"fast,omitempty" protobuf:"varint,26,opt,name=fast"`
}

// ModelAutobuilderStatus define the observed state of a ModelAutobuilder
type ModelAutobuilderStatus struct {
	// The name of the flat-file generated for the associated Entity
	FlatFileName string `json:"flatFileName,omitempty" protobuf:"bytes,1,opt,name=flatFileName"`
	// The name of the DataSource associated with resource
	DataSourceName string `json:"dataSourceName,omitempty" protobuf:"bytes,2,opt,name=dataSourceName"`
	// The name of the Entity associated with the resource
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// The name of the Study associated with the resource
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,4,opt,name=studyName"`
	// The name of the highest-performing Model resource produced as a result of the associated Study resource
	BestModelName string `json:"bestModelName,omitempty" protobuf:"bytes,6,opt,name=bestModelName"`
	// The name of the Predictor associated with the resource
	PredictorName string `json:"predictorName,omitempty" protobuf:"bytes,7,opt,name=predictorName"`
	// The name of the DataApp associated with the resource
	DataAppName   string `json:"dataappName,omitempty" protobuf:"bytes,8,opt,name=dataappName"`
	ImageRepoName string `json:"imageRepoName,omitempty" protobuf:"bytes,9,opt,name=imageRepoName"`
	// The phase of the ModelAutobuilder
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelAutobuilderPhase `json:"phase,omitempty" protobuf:"bytes,10,opt,name=phase"`
	// The number of rows observed in the Entity associated with the resource
	// +kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,11,opt,name=rows"`
	// The number of columns observed in the Entity associated with the resource
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,12,opt,name=cols"`
	// The size of the raw data in the Entity associated with the resource
	// +kubebuilder:validation:Optional
	FileSize int32 `json:"fileSize,omitempty" protobuf:"varint,13,opt,name=fileSize"`
	// The number of total Model resources created by the associated Study resource
	// +kubebuilder:validation:Optional
	Models int32 `json:"models,omitempty" protobuf:"varint,14,opt,name=models"`
	// The number of successfully trained Model resources created by the associated Study resource
	// +kubebuilder:validation:Optional
	TrainedModels int32 `json:"trainedModels,omitempty" protobuf:"varint,15,opt,name=trainedModels"`
	// The highest score out of all Models created by the associated Study resource
	// +kubebuilder:validation:Optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,16,opt,name=bestModelScore"`
	// The estimator specification for the highest-performing Model resource
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,17,opt,name=estimator"`
	// StartTime represents the time at which the execution of the ModelAutobuilder started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,18,opt,name=startTime"`
	// EndTime represents the time at which the ModelAutobuilder was marked as completed, failed, or aborted
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,19,opt,name=endTime"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,21,opt,name=observedGeneration"`
	// In the case of failure, the ModelAutobuilder resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,22,opt,name=failureReason"`
	// In the case of failure, the ModelAutobuilder resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,23,opt,name=failureMessage"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,24,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelAutobuilderCondition `json:"conditions,omitempty" protobuf:"bytes,25,rep,name=conditions"`
}
