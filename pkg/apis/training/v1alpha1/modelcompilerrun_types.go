package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type CompilerPhase string

const (
	CompilerPhasePending   CompilerPhase = "Pending"
	CompilerPhaseAborted   CompilerPhase = "Aborted"
	CompilerPhaseTraining  CompilerPhase = "Training"
	CompilerPhaseCompleted CompilerPhase = "Completed"
	CompilerPhaseFailed    CompilerPhase = "Failed"
)

// Pipeline run condition
type ModelCompilerRunConditionType string

/// ModelCompilerRun Condition
const (
	MCRSaved     ModelCompilerRunConditionType = "Saved"
	MCRCompleted PipelineRunConditionType      = "Completed"
)

// ModelCompilerRunCondition describes the state of a ModelCompilerRun at a certain point.
type ModelCompilerRunCondition struct {
	// Type of  condition.
	Type ModelCompilerRunConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ModelCompilerRunConditionType"`
	// Status of the condition, one of True, False, Unknown.
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
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Progress",type="number",JSONPath=".status.progress",priority=1
// +kubebuilder:printcolumn:name="Model",type="string",JSONPath=".status.modelName"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".status.versionName"
// +kubebuilder:printcolumn:name="StartTime",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletionTime",type="date",JSONPath=".status.completionTime",priority=1
// +kubebuilder:printcolumn:name="Last Failure",type="string",JSONPath=".status.failureMessage"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=modelcompilerruns,shortName=mcr,singular=modelcompilerrun,categories={train,modela,all}

// ModelCompilerRun represent a single compilation of a model into a target hardware.
type ModelCompilerRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ModelCompilerRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	// +kubebuilder:validation:Optional
	Status ModelCompilerRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ModelCompilerRunList represent list of pipelineruns
type ModelCompilerRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []ModelCompilerRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ModelCompilerRunSpec is the desired state of the ModelCompilerRun resource
type ModelCompilerRunSpec struct {
	// VersionName is the data product version of the run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// Description is the user provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// DatasetName is the name of the dataset that we trained on.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ModelName *string `json:"modelName,omitempty" protobuf:"bytes,3,opt,name=modelName"`
	// The owner of the ruyn.
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// The priority of this pipeline run. The default is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,5,opt,name=priority"`
	// The compiler name
	// +kubebuilder:default:=tvm
	Compiler *catalog.CompilerName `json:"compiler,omitempty" protobuf:"bytes,6,opt,name=compiler"`
	// Set one or more targets for the compiler
	//
	Target *catalog.HardwareTarget `json:"target,omitempty" protobuf:"bytes,7,opt,name=target"`
}

// ModelCompilerRunStatus is the observed state of the ModelCompilerRun resource .
type ModelCompilerRunStatus struct {
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// +kubebuilder:validation:Optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,2,opt,name=completionTime"`
	// The phase of the pipeline run
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase CompilerPhase `json:"phase" protobuf:"bytes,3,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// Folder for pipeline run artifacts. This is assigned by the system
	// The folder contains all the pipeline artifacts - metadata, logs
	// +kubebuilder:validation:Optional
	Folder string `json:"folder,omitempty" protobuf:"bytes,5,opt,name=evalMetrics"`
	// Update in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,6,opt,name=failureReason"`
	// Update in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,7,opt,name=failureMessage"`
	// Pipeline progress Progress in percent, the progress takes into account the different stages of the pipeline
	// +kubebuilder:validation:Optional
	Progress *int32 `json:"progress" protobuf:"varint,8,opt,name=progress"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,9,opt,name=lastUpdated"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ModelCompilerRunCondition `json:"conditions,omitempty" protobuf:"bytes,10,rep,name=conditions"`
}
