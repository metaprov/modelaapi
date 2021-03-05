package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	datav1 "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	inferencev1 "github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//ModelAutobuilderPhase represent that state of the model auto builder
type ModelAutobuilderPhase string

const (
	ModelAutobuilderPhaseDataSource ModelAutobuilderPhase = "DataSource"
	ModelAutobuilderPhaseDataset    ModelAutobuilderPhase = "Dataset"
	ModelAutobuilderPhaseStudy      ModelAutobuilderPhase = "Study"
	ModelAutobuilderPhasePredictor  ModelAutobuilderPhase = "Predictor"
	ModelAutobuilderPhaseReady      ModelAutobuilderPhase = "Succeeded"
	ModelAutobuilderPhaseFailed     ModelAutobuilderPhase = "Failed"
)

// ModelAutobuilderConditionType represent that condition that a model auto builder can be in.
type ModelAutobuilderConditionType string

const (
	ModelAutobuilderReady                   ModelAutobuilderConditionType = "Ready"
	ModelAutobuilderInDb                    ModelAutobuilderConditionType = "InDb"
	ModelAutobuilderDataProductReady        ModelAutobuilderConditionType = "DataProductReady"
	ModelAutobuilderDataProductVersionReady ModelAutobuilderConditionType = "DataProductVersionReady"
	ModelAutobuilderDataSourceReady         ModelAutobuilderConditionType = "DataSourceReady"
	ModelAutobuilderDatasetReady            ModelAutobuilderConditionType = "DatasetReady"
	ModelAutobuilderStudyReady              ModelAutobuilderConditionType = "StudyReady"
	ModelAutobuilderPredictorReady          ModelAutobuilderConditionType = "PredictorReady"
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

// +genclient
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:printcolumn:name="Location Product",type="string",JSONPath=".spec.dataProductName"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.dataProductVersionName"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".status.datasetName"
// +kubebuilder:printcolumn:name="Study",type="string",JSONPath=".status.studyName"
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".status.predictorName"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:resource:path=modelautobuilders,singular=modelautobuilder,shortName=ar,categories={training,modeld,all}
// ModelAutobuilder represent an automatic run of all the phases needed to create a model
type ModelAutobuilder struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Spec   ModelAutobuilderSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status ModelAutobuilderStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
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
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:MinLength=1
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	DataProductName *string `json:"dataProductName,omitempty" protobuf:"bytes,1,opt,name=dataProductName"`
	// DataProductVersionName is a reference to data product version
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:MinLength=1
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	DataProductVersionName *string `json:"dataProductVersionName,omitempty" protobuf:"bytes,2,opt,name=dataProductVersionName"`
	// DataSourceName is the name of existing datasource, if empty the datasource parameters will be inferred from the file
	// +kubebuilder:validation:MaxLength=253
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,3,opt,name=datasourceName"`
	// DatasetName is the name of existing dataset, if empty the dataset object will be created
	// otherwise, a dataset will be created based on the file in the path section.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=253
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Path is the location of the data in the cloud
	// +kubebuilder:validation:MaxLength=256
	// +optional
	Path *string `json:"path,omitempty" protobuf:"bytes,5,opt,name=path"`
	// Task is the machine learning task (regression/classification)
	// required
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,6,opt,name=task"`
	// The task objective. this is how models will be scored.
	// If not defined this will be set to the default objective for the task
	// +optional
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,7,opt,name=objective"`
	// Target column.
	// Default: last column in the schema.
	// +kubebuilder:validation:MaxLength=128
	// +optional
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,8,opt,name=targetColumn"`
	// Max training time.
	// +kubebuilder:validation:Maximum=512
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=60
	// +optional
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,9,opt,name=maxTime"`
	// Max model
	// +kubebuilder:validation:Maximum=512
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:default:=10
	// +optional
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,10,opt,name=maxModels"`
	// Access method specify the predictor access method.
	// Default: ClusterPort
	// +kubebuilder:default:=cluster-port
	// +optional
	AccessMethod *inferencev1.AccessType `json:"accessMethod,omitempty" protobuf:"bytes,11,opt,name=accessMethod"`
	// Specify if the predictor should autoscale.
	// Default : false
	// +kubebuilder:default:=false
	// +optional
	AutoScale *bool `json:"autoScale,omitempty" protobuf:"bytes,12,opt,name=autoScale"`
	// The spec of the data source, if none, the runner will infer the schema, and will create a new schema with
	// +optional
	DataSourceSpec *datav1.DataSourceSpec `json:"dataSourceSpec,omitempty" protobuf:"bytes,13,opt,name=dataSourceSpec"`
	// Specify the number of trainers.
	// Default 1 trainer.
	// +kubebuilder:default:=1
	// +optional
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,14,opt,name=trainers"`
	// Specify the search method
	// +kubebuilder:default:="random"
	// +optional
	SearchMethod *SearchMethodName `json:"searchMethod,omitempty" protobuf:"bytes,15,opt,name=searchMethod"`
	// Set the true to abort the model auto builder
	// +kubebuilder:default:=false
	// +optional
	Aborted *bool `json:"aborted,omitempty" protobuf:"bytes,16,opt,name=aborted"`
	// The owner account name
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:default:="no-one"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,17,opt,name=owner"`
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
	Phase ModelAutobuilderPhase `json:"phase,omitempty" protobuf:"bytes,9,opt,name=phase"`
	// number of rows in the dataset
	// +optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,10,opt,name=rows"`
	// number of columns, used mainly to show the columns
	// +optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,11,opt,name=cols"`
	// file size in bytes
	// +optional
	FileSize int32 `json:"fileSize,omitempty" protobuf:"varint,12,opt,name=fileSize"`
	// Total models created for the study
	// +optional
	Models int32 `json:"models,omitempty" protobuf:"varint,13,opt,name=models"`
	// models that were successful during training
	// +optional
	TrainedModels int32 `json:"trainedModels,omitempty" protobuf:"varint,14,opt,name=trainedModels"`
	// The Best model score, so far.
	// +optional
	BestModelScore float64 `json:"bestModelScore,omitempty" protobuf:"bytes,15,opt,name=bestModelScore"`
	// The best estimator, taken from the best model
	Estimator *ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,16,opt,name=estimator"`
	// StartTime is the times that this prediction job started
	// +optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,17,opt,name=startTime"`
	// CompletionTime is the time that this prediction job finished
	// +optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,18,opt,name=completionTime"`
	//+optional
	Conditions []ModelAutobuilderCondition `json:"conditions,omitempty" protobuf:"bytes,19,rep,name=conditions"`
}
