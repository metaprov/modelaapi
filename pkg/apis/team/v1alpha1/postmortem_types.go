/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//============
// BucketName
// ===========

type PostMortemConditionType string

// / Post Moretem Condition
const (
	PostMortemReady PostMortemConditionType = "Ready"
	PostMortemSaved PostMortemConditionType = "Saved"
)

// Post Morem Condition describes the state of a post mortem at a certain point.
type PostMortemCondition struct {
	// Type of bucket condition.
	Type PostMortemConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PostMortemConditionType"`
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
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=postmortems,shortName=pt,singular=postmortem,categories={team,modela,all}
// PostMortem represent a post mortem
type PostMortem struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PostMortemSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status PostMortemStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PostMortemList is a list of PostMortems
type PostMortemList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []PostMortem `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// TimeLineEvent
type TimeLineEvent struct {
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Content *string `json:"content" protobuf:"bytes,1,opt,name=content"`
	// +kubebuilder:validation:Optional
	At *metav1.Time `json:"at" protobuf:"bytes,2,opt,name=at"`
}

// Alert is an alert that was raised during the incident
type RaisedAlert struct {
	// +kubebuilder:validation:Optional
	Name *string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// +kubebuilder:validation:Optional
	At *metav1.Time `json:"at" protobuf:"bytes,2,opt,name=at"`
}

// PostMortemSpec defines the desired state of PostMorem
type PostMortemSpec struct {
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// Description of the meeting
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// The target object of the post mortem for example a predictor.
	// +kubebuilder:validation:Optional
	EntityRef *v1.ObjectReference `json:"entityRef" protobuf:"bytes,2,opt,name=entityRef"`
	// The place of the events, can be lab or serving site.
	// +kubebuilder:validation:Optional
	LocationRef *v1.ObjectReference `json:"locationRef" protobuf:"bytes,3,opt,name=locationRef"`
	// Reference to accounts that handled the post-mortem
	// +kubebuilder:validation:Optional
	HandledBy []v1.ObjectReference `json:"handledBy" protobuf:"bytes,4,rep,name=handledBy"`
	// Alerts
	// +kubebuilder:validation:Optional
	Alerts []RaisedAlert `json:"alerts" protobuf:"bytes,5,rep,name=alerts"`
	// Timeline is the list of events that happed during the events
	// +kubebuilder:validation:Optional
	TimeLine []TimeLineEvent `json:"timeline" protobuf:"bytes,6,rep,name=timeline"`
	// Root cause
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	RootCause *string `json:"rootCause" protobuf:"bytes,7,opt,name=rootCause"`
	// Summary of the post mortem
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Summary *string `json:"summary" protobuf:"bytes,8,opt,name=summary"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,9,opt,name=owner"`
	// TenantRef is the commit tenant
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,10,opt,name=tenantRef"`
	// The start time of the post mortem
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,11,opt,name=startTime"`
	// The detection time of the post mortem
	// +kubebuilder:validation:Optional
	DetectionTime *metav1.Time `json:"detectionTime,omitempty" protobuf:"bytes,12,opt,name=detectionTime"`
	// The end time of the post mortem.
	// +kubebuilder:validation:Optional
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,13,opt,name=endTime"`
	// Attach image to the post mortem.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ImageURL *string `json:"imageURL,omitempty" protobuf:"bytes,14,opt,name=imageURL"`
}

// PostMortemStatus defines the actual state of a PostMortem
type PostMortemStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PostMortemCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,3,rep,name=conditions"`
}
