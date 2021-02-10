package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type RecipeRunPhase string

const (
	RecipeRunPhasePending   RecipeRunPhase = "Pending"
	RecipeRunPhaseRunning   RecipeRunPhase = "Running"
	RecipeRunPhaseCompleted RecipeRunPhase = "Completed"
	RecipeRunPhaseError     RecipeRunPhase = "Err"
)

// Condition on the dataset
type RecipeRunConditionType string

/// RecipeName Condition
const (
	RecipeRunCompleted RecipeConditionType = "Completed"
)

// RecipeRunCondition describes the state of a dataset at a certain point.
type RecipeRunCondition struct {
	Type RecipeConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=RecipeConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	// +optional
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	// +optional
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	// +optional
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +genclient
// +genclient:noStatus

// +kubebuilder:object:root=true
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=reciperuns,shortName=rr,singular=reciperun,categories={data,modeld,all}
// Recipe run represent one execution of the recipe.
// Execution is perfomed by creating a kuberentes job.
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
	VersionName string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The name of the recipe that execute this run
	// +required.
	RecipeName string `json:"recipeName,omitempty" protobuf:"bytes,2,opt,name=recipeName"`
	// The execution env of this recipes
	// +optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,3,opt,name=labName"`
	// The location of the data output.
	// +required.
	Output DataLocation `json:"output,omitempty" protobuf:"bytes,4,opt,name=output"`
}

// RecipeStatus defines the observed state of Recipe
type RecipeRunStatus struct {
	// Represents the start time
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// Represents the end time
	// +optional
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,2,opt,name=completionTime"`
	// The phase of the dataset processing
	// +optional
	Phase RecipeRunPhase `json:"phase,omitempty" protobuf:"bytes,3,opt,name=phase"`
	// Represents the latest available observations of a dataset state.
	//+optional
	Conditions []RecipeCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
}
