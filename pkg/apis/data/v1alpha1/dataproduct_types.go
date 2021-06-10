/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition on the dataset
type DataProductConditionType string

/// ProductRef Condition
const (
	DataProductReady DataProductConditionType = "Ready"
	DataProductSaved DataProductConditionType = "Saved"
)

// DeploymentCondition describes the state of a deployment at a certain point.
type DataProductCondition struct {
	// Type of condition.
	Type DataProductConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataProductConditionType"`
	// Status of the condition, one of True, False, AutoScaler.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// DataProduct represent a single data product in the system
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.dataLocation.bucketName"
// +kubebuilder:printcolumn:name="Lab",type="string",JSONPath=".spec.labName"
// +kubebuilder:printcolumn:name="Serving Site",type="string",JSONPath=".spec.servingSiteName"
// +kubebuilder:printcolumn:name="Image Repo",type="string",JSONPath=".spec.imageLocation.name"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=dataproducts,shortName=prod,singular=dataproduct,shortName="prod",categories={data,modeld,all}
type DataProduct struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DataProductStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// Represent a stack holder in the product.
// Each stake holder can hove one or more roles.
type StakeHolder struct {
	// The account name of the stake holder
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	AccountName *string `json:"accountName,omitempty" protobuf:"bytes,1,opt,name=accountName"`
	// The roles assigned to the stake holder
	Roles []catalog.RoleName `json:"roles,omitempty" protobuf:"bytes,2,rep,name=roles"`
}

type GitLocation struct {
	// GitConnectionName
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	GitConnectionName *string `json:"gitConnectionName,omitempty" protobuf:"bytes,1,opt,name=gitConnectionName"`
	// URL of the stakeholder
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	URL *string `json:"url,omitempty" protobuf:"bytes,2,opt,name=url"`
	// Branch in git repo
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	Branch *string `json:"branch,omitempty" protobuf:"bytes,3,opt,name=branch"`
	// Private is True if the repository is private.
	Private *bool `json:"private,omitempty" protobuf:"bytes,4,opt,name=private"`
}

type ImageLocation struct {
	// The canonical name of the image repo.
	// The default value is docker/productname
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	// optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The connection of the docker registry provider
	// +kubebuilder:default:=""
	// If the value is empty, the system will not push images.
	// optional
	RegistryConnectionName *string `json:"registryConnectionName,omitempty" protobuf:"bytes,2,opt,name=registryConnectionName"`
}

//DataProductSpec defines the desired state of a data product
type DataProductSpec struct {
	// The data product owner
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The tenant that own the data product.
	// Default to default tenant.
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,2,opt,name=tenantRef"`
	// Stake holders refer to a list of stackholders, which have interest in the product.
	// +kubebuilder:validation:Optional
	StakeHolders []StakeHolder `json:"stakeholders,omitempty" protobuf:"bytes,3,rep,name=stakeholders"`
	// GitLocation is the github repository for all the artifacts for this product
	// +kubebuilder:validation:Optional
	GitLocation *GitLocation `json:"gitLocation,omitempty" protobuf:"bytes,4,opt,name=gitLocation"`
	// ImageLocation is the image repository that stores the models images for the product versions
	// +kubebuilder:validation:Optional
	ImageLocation *ImageLocation `json:"imageLocation,omitempty" protobuf:"bytes,5,opt,name=imageLocation"`
	// LabName is the Lab where models of this products are trained
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName" protobuf:"bytes,7,opt,name=labName"`
	// ServingSiteName is the serving site where predictors of this product are deployed
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	ServingSiteName *string `json:"servingSiteName" protobuf:"bytes,8,opt,name=servingSiteName"`
	// Task denote the machine learning task of the product (classification/regression,etc.)
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,9,opt,name=task"`
	// User provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,10,opt,name=description"`
	//This folder contain the root location for all the artifacts from the product.
	// +kubebuilder:validation:Optional
	DataLocation DataLocation `json:"dataLocation,omitempty" protobuf:"bytes,11,opt,name=dataLocation"`
	// the notifier selector select the notifier for events that occur in the product life cycle.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,12,opt,name=notifierName"`
	// DefaultWorkloadClassName is reference to the workload class used for running product tasks.
	// +kubebuilder:default:="nano-cpu-250m-mem-256mi"
	// +kubebuilder:validation:Optional
	DefaultWorkloadClassName *string `json:"defaultWorkloadClassName,omitempty" protobuf:"bytes,13,opt,name=defaultWorkloadClassName"`
	// Denote how many time a job is retry after failure
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	RetriesOnFailure *int32 `json:"retriesOnFailure,omitempty" protobuf:"varint,14,opt,name=retriesOnFailure"`
	// KPIs is the product kpi. This is for information porpose
	//+kubebuilder:validation:Optional
	KPIs []KPI `json:"kpis,omitempty" protobuf:"bytes,15,rep,name=kpis"`
	// OnCallAccountName is the name of the account on call.
	//+kubebuilder:validation:Optional
	OnCallAccountName string `json:"onCallAccountName,omitempty" protobuf:"bytes,17,opt,name=onCallAccountName"`
	// List of documents attached to the this data product
	//+kubebuilder:validation:Optional
	Attachments []Attachment `json:"attachments,omitempty" protobuf:"bytes,18,rep,name=attachments"`
	// List of documents attached to the this data product
	//+kubebuilder:validation:Optional
	Compilation *catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,19,opt,name=compilation"`
}

// DataProductStatus defines the observed state of DataProduct
type DataProductStatus struct {
	// LastModelVersion is used to automatically associate model version with final models.
	LastModelVersion int32 `json:"lastModelVersion,omitempty" protobuf:"varint,1,opt,name=lastModelVersion"`
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,3,opt,name=lastUpdated"`
	// The conditions of the product.
	//+optional
	Conditions []DataProductCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// DataProductList contains a list of DataProducts
type DataProductList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataProduct `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type KPI struct {
	// Name is the name of the kpi
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Value is the desired value
	Value *float64 `json:"value,omitempty" protobuf:"varint,2,opt,name=value"`
}

type Attachment struct {
	// Name is the name of the attachment.
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Description is the description of the attachment
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Location is the location of the attachment
	Location DataLocation `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
}

type CompilerSpec struct {
	// Compiler is the name of the compiler
	//+kubebuilder:validation:Optional
	Compiler *catalog.CompilerName `json:"compiler,omitempty" protobuf:"bytes,1,opt,name=compiler"`
	// Targets is the list of targets
	//+kubebuilder:validation:Optional
	Targets []catalog.HardwareTarget `json:"targets,omitempty" protobuf:"bytes,2,rep,name=targets"`
}
