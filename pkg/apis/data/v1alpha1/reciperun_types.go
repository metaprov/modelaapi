package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type RecipeRunPhase string

const (
	RecipeRunPhaseRunning RecipeRunPhase = "Running"
	RecipeRunPhaseSucceed RecipeRunPhase = "IsCompleted"
	RecipeRunPhaseFailed  RecipeRunPhase = "IsFailed"
)

// Condition on the dataset
type RecipeRunConditionType string

/// RecipeName Condition
const (
	RecipeRunCompleted RecipeConditionType = "Completed"
	RecipeRunSaved     RecipeConditionType = "Saved"
)

// RecipeRunCondition describes the state of a dataset at a certain point.
type RecipeRunCondition struct {
	Type RecipeConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=RecipeConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	// +kubebuilder:validation:Optional
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	// +kubebuilder:validation:Optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	// +kubebuilder:validation:Optional
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=reciperuns,shortName=rr,singular=reciperun,categories={data,modeld,all}
// Recipe run represent one execution of the recipe.
// Execution is performed by creating a Kubernetes job.
type RecipeRun struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              RecipeRunSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status RecipeRunStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// RecipeRunList contains a list of Recipes
type RecipeRunList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []RecipeRun `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//RecipeSpec defines the desired state of a dataset
type RecipeRunSpec struct {
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The name of the recipe that execute this run
	// +required.
	RecipeName *string `json:"recipeName,omitempty" protobuf:"bytes,2,opt,name=recipeName"`
	// The execution env of this recipes
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,3,opt,name=labName"`
	// The location of the data output.
	// +required.
	Output DataLocation `json:"output,omitempty" protobuf:"bytes,4,opt,name=output"`
	// WorkloadClassName is the name of the workload used to execute this recipe run,
	// The value is set from the Recipe definition.
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,5,opt,name=workloadClassName"`
}

// RecipeStatus defines the observed state of Recipe
type RecipeRunStatus struct {
	// Represents the start time
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// Represents the end time
	// +kubebuilder:validation:Optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,2,opt,name=completionTime"`
	// The phase of the dataset processing
	// +kubebuilder:validation:Optional
	Phase RecipeRunPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,4,opt,name=observedGeneration"`
	// Represents the latest available observations of a dataset state.
	//+optional
	Conditions []RecipeCondition `json:"conditions,omitempty" protobuf:"bytes,5,rep,name=conditions"`
}
