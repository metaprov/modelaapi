package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Todo condition
type TodoConditionType string

// / Todo Condition
const (
	TodoDone  TodoConditionType = "Done"
	TodoSaved TodoConditionType = "Saved"
)

// TodoCondition describes the state of the license at a certain point.
type TodoCondition struct {
	// Type of account condition.
	Type TodoConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=TodoConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase",description=""
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description",description=""
// +kubebuilder:printcolumn:name="Entity Namespace",type="string",JSONPath=".spec.entityRef.namespace",description=""
// +kubebuilder:printcolumn:name="Entity Name",type="string",JSONPath=".spec.entityRef.name",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=todos,singular=todo,categories={team,modela}
type Todo struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              TodoSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status TodoStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// TodoList is a list of Todos
type TodoList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Todo `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// TodoSpec defines the desired state of Todo
type TodoSpec struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// +kubebuilder:validation:Optional
	Tasks []TaskSpec `json:"task,omitempty" protobuf:"bytes,2,rep,name=tasks"`
	// The modela entity that the task refer to.
	// +kubebuilder:validation:Optional
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,3,opt,name=entityRef"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Required
	// NotifierName is the name of the notifier used to fire the alert.
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,4,opt,name=notifierName"`
	// Flagged donate that task was flagged
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Flagged *bool `json:"flagged,omitempty" protobuf:"varint,5,opt,name=flagged"`
	// TenantRef is the todo tenant
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,6,opt,name=tenantRef"`
}

// TodoStatus is the observed state of a Todo
type TodoStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []TodoCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}

type TaskSpec struct {
	ID *string `json:"id,omitempty" protobuf:"bytes,1,opt,name=id"`
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Content *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Assigned to is the user name assigned to this task
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	AssignedTo *string `json:"assignedTo,omitempty" protobuf:"bytes,3,opt,name=assignedTo"`
	// Flagged donete that task was flagged
	DueDate *metav1.Time `json:"dueDate,omitempty" protobuf:"bytes,4,opt,name=dueDate"`
	// Reminder is the time to send a reminder
	Reminder *metav1.Time `json:"reminder,omitempty" protobuf:"bytes,5,opt,name=reminder"`
	// If this task is a subtask, this is the name of the subtask
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ParentTask *string `json:"parentTask,omitempty" protobuf:"bytes,6,opt,name=parentTask"`
}
