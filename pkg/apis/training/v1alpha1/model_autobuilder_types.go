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
	ModelAutobuilderPhaseCompleted          ModelAutobuilderPhase = "Completed"
	ModelAutobuilderPhaseAborted            ModelAutobuilderPhase = "Aborted"
	ModelAutobuilderPhaseFailed             ModelAutobuilderPhase = "Failed"
)

// ModelAutobuilderConditionType represent that condition that a model auto builder can be in.
type ModelAutobuilderConditionType string

const (
	ModelAutobuilderReady                   ModelAutobuilderConditionType = "Ready"
	ModelAutobuilderDataProductReady        ModelAutobuilderConditionType = "DataProductReady"
	ModelAutobuilderDataProductVersionReady ModelAutobuilderConditionType = "DataProductVersionReady"
	ModelAutobuilderDataSourceReady         ModelAutobuilderConditionType = "DataSourceReady"
	ModelAutobuilderDatasetCompleted        ModelAutobuilderConditionType = "DatasetCompleted"
	ModelAutobuilderStudyCompleted          ModelAutobuilderConditionType = "StudyCompleted"
	ModelAutobuilderPredictorReady          ModelAutobuilderConditionType = "PredictorReady"
	ModelAutobuilderSaved                   ModelAutobuilderConditionType = "Saved"
)

// ModelAutobuilderCondition describes the state of a pipeline at a certain point.
type ModelAutobuilderCondition struct {
	// Type of account condition.
	Type ModelAutobuilderConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelAutobuilderConditionType"`
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
// +kubebuilder:printcolumn:name="Location Product",type="string",JSONPath=".spec.dataProductName"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.dataProductVersionName"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".status.datasetName"
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

// +kubebuilder:object:root=true
// ModelAutobuilderList represent a list of ModelAutoBuilders
type ModelAutobuilderList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelAutobuilder `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelAutobuilderSpec define the desired state of the ModelAutobuilder resource.
type ModelAutobuilderSpec struct {
	// DataProductName is the name of the data product
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DataProductName *string `json:"dataProductName,omitempty" protobuf:"bytes,1,opt,name=dataProductName"`
	// DataProductVersionName is a reference to data product version
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DataProductVersionName *string `json:"dataProductVersionName,omitempty" protobuf:"bytes,2,opt,name=dataProductVersionName"`
	// DataSourceName is the name of existing datasource, if empty the datasource parameters will be inferred from the file
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,3,opt,name=datasourceName"`
	// DatasetName is the name of existing dataset, if empty the dataset object will be created
	// otherwise, a dataset will be created based on the file in the path section.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=253
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Location is the location of the data in the cloud
	// +kubebuilder:validation:Optional
	Location *data.DataLocation `json:"location,omitempty" protobuf:"bytes,5,opt,name=location"`
	// Task is the machine learning task (regression/classification)
	// required
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,6,opt,name=task"`
	// The task objective. this is how models will be scored.
	// If not defined this will be set to the default objective for the task
	// +kubebuilder:validation:Optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,7,opt,name=objective"`
	// Target column.
	// Default: last column in the schema.
	// +kubebuilder:validation:MaxLength=128
	// +kubebuilder:validation:Optional
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,8,opt,name=targetColumn"`
	// Max training time.
	// +kubebuilder:validation:Maximum=512
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=60
	// +kubebuilder:validation:Optional
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,9,opt,name=maxTime"`
	// Max model
	// +kubebuilder:validation:Maximum=512
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=10
	// +kubebuilder:validation:Optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,10,opt,name=maxModels"`
	// Access method specify the predictor access method.
	// Default: ClusterPort
	// +kubebuilder:default:=cluster-port
	// +kubebuilder:validation:Optional
	AccessMethod *catalog.AccessType `json:"accessMethod,omitempty" protobuf:"bytes,11,opt,name=accessMethod"`
	// Specify if the predictor should autoscale.
	// Default : false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	AutoScale *bool `json:"autoScale,omitempty" protobuf:"varint,12,opt,name=autoScale"`
	// The spec of the data source, if none, the runner will infer the schema, and will create a new schema with
	// +kubebuilder:validation:Optional
	DataSourceSpec *datav1.DataSourceSpec `json:"dataSourceSpec,omitempty" protobuf:"bytes,13,opt,name=dataSourceSpec"`
	// Specify the number of trainers.
	// Default 1 trainer.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,14,opt,name=trainers"`
	// Specify the search method
	// +kubebuilder:default:="random"
	// +kubebuilder:validation:Optional
	Sampler *SamplerName `json:"sampler,omitempty" protobuf:"bytes,15,opt,name=sampler"`
	// Set the true to abort the model auto builder
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"varint,16,opt,name=aborted"`
	// The owner account name
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,17,opt,name=owner"`
	// WorkloadClassName is the name of the workload class used to run this pipeline.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,18,opt,name=resources"`
	// LabRef is a reference to the lab where the trainers for this study run.
	// If no value is provided, the lab is taken from the
	// +kubebuilder:validation:Optional
	LabRef *v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,19,opt,name=labRef"`
}

// ModelAutobuilderStatus define the observed state of the pipeline
type ModelAutobuilderStatus struct {
	// the generate flat file name
	FlatFileName string `json:"flatFileName,omitempty" protobuf:"bytes,1,opt,name=flatFileName"`
	// the generated schema name (if generated)
	DataSourceName string `json:"dataSourceName,omitempty" protobuf:"bytes,2,opt,name=dataSourceName"`
	// the generated dataset name (if generated)
	DatasetName string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// the generate study name
	StudyName string `json:"studyName,omitempty" protobuf:"bytes,4,opt,name=studyName"`
	// The selected model name.
	BestModelName string `json:"bestModelName,omitempty" protobuf:"bytes,6,opt,name=bestModelName"`
	// the generated predictor name
	PredictorName string `json:"predictorName,omitempty" protobuf:"bytes,7,opt,name=predictorName"`
	// the name of the image repository
	ImageRepoName string `json:"imageRepoName,omitempty" protobuf:"bytes,8,opt,name=imageRepoName"`
	// The phase of the auto ml run
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase ModelAutobuilderPhase `json:"phase,omitempty" protobuf:"bytes,9,opt,name=phase"`
	// number of rows in the dataset
	// +kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,10,opt,name=rows"`
	// number of columns, used mainly to show the columns
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,11,opt,name=cols"`
	// file size in bytes
	// +kubebuilder:validation:Optional
	FileSize int32 `json:"fileSize,omitempty" protobuf:"varint,12,opt,name=fileSize"`
	// Total models created for the study
	// +kubebuilder:validation:Optional
	Models int32 `json:"models,omitempty" protobuf:"varint,13,opt,name=models"`
	// models that were successful during training
	// +kubebuilder:validation:Optional
	TrainedModels int32 `json:"trainedModels,omitempty" protobuf:"varint,14,opt,name=trainedModels"`
	// The Best model score, so far.
	// +kubebuilder:validation:Optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,15,opt,name=bestModelScore"`
	// The best estimator, taken from the best model
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,16,opt,name=estimator"`
	// StartTime is the times that this prediction job started
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,17,opt,name=startTime"`
	// CompletionTime is the time that this prediction job finished
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,18,opt,name=endTime"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,19,opt,name=observedGeneration"`
	// Last error
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	LastError string `json:"lastError,omitempty" protobuf:"bytes,20,opt,name=lastError"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,21,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelAutobuilderCondition `json:"conditions,omitempty" protobuf:"bytes,22,rep,name=conditions"`
}
