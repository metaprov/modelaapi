package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type RecipeRunPhase string

const (
	RecipeRunPhasePending     RecipeRunPhase = "Pending"
	RecipeRunPhaseAborted     RecipeRunPhase = "Aborted"
	RecipeRunPhaseRunning     RecipeRunPhase = "Running"
	RecipeRunPhaseUnitTesting RecipeRunPhase = "UnitTesting"
	RecipeRunPhaseSucceed     RecipeRunPhase = "Completed"
	RecipeRunPhaseFailed      RecipeRunPhase = "Failed"
)

// / RecipeName Condition
const (
	RecipeRunCompleted = "Completed"
)

// +kubebuilder:subresource:status
// +kubebuilder:resource:path=reciperuns,shortName=rcr,singular=reciperun,categories={data,modela,all}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Recipe",type="string",JSONPath=".spec.recipeName"
// +kubebuilder:printcolumn:name="StartedAt",type="date",JSONPath=".status.startTime",priority=1
// +kubebuilder:printcolumn:name="CompletedAt",type="date",JSONPath=".status.completionTime",priority=1
// RecipeRun represent one execution of the recipe.
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

// RecipeSpec defines the desired state of a dataset
type RecipeRunSpec struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The name of the recipe that execute this run
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	RecipeName *string `json:"recipeName,omitempty" protobuf:"bytes,2,opt,name=recipeName"`
	// The execution env of this recipes
	// +kubebuilder:validation:Optional
	LabRef v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,3,opt,name=labRef"`
	// The location of the data output.
	// +required.
	Location catalog.DataLocation `json:"location,omitempty" protobuf:"bytes,4,opt,name=location"`
	// Resources are hardware resource req for a recipe run.
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,5,opt,name=resources"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,6,opt,name=ttl"`
	// The model class for this data pipeline run if the dataset was created by a model class
	// +kubebuilder:validation:Optional
	ModelClassName *string `json:"modelClassName,omitempty" protobuf:"bytes,7,opt,name=modelClassName"`
	// If this report was created by a data pipeline run, this is the run name
	// +kubebuilder:validation:Optional
	ModelClassRunName *string `json:"modelClassRunName,omitempty" protobuf:"bytes,8,opt,name=modelClassRunName"`
}

// RecipeStatus defines the observed state of Recipe
type RecipeRunStatus struct {
	// Represents the end time
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,1,opt,name=completedAt"`
	// The phase of the dataset processing
	// +kubebuilder:default:="Pending"
	// +kubebuilder:validation:Optional
	Phase RecipeRunPhase `json:"phase,omitempty" protobuf:"bytes,2,opt,name=phase"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,4,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,5,opt,name=failureMessage"`
	// What triggered the run
	//+kubebuilder:validation:Optional
	TriggeredBy catalog.TriggerType `json:"triggeredBy,omitempty" protobuf:"bytes,6,opt,name=triggeredBy"`
	// Holds the location of log paths
	//+kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs,,omitempty" protobuf:"bytes,7,opt,name=logs"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,9,opt,name=updatedAt"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,11,rep,name=conditions"`
}
