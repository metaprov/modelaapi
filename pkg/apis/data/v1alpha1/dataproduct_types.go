/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeld-api/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition on the dataset
type DataProductConditionType string

/// ProductRef Condition
const (
	DataProductReady                 DataProductConditionType = "Ready"
	DataProductDefaultVersionCreated DataProductConditionType = "VersionCreated"
	DataProductArchived              DataProductConditionType = "Archived"
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

// +genclient
// +genclient:noStatus
// DataProduct represent a single data product in the system
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.dataLocation.bucketName"
// +kubebuilder:printcolumn:name="Image Repo",type="string",JSONPath=".spec.imageLocation.url"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=dataproducts,shortName=dp,singular=dataproduct,categories={data,modeld,all}
type DataProduct struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataProductStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:validation:Enum="owner";"sre";"business";"ml-engineer";"data-scientist";"other"
type StakeHolderRole string

const (
	OwnerStakeHolderRole         StakeHolderRole = "owner"
	SREStakeHolderRole           StakeHolderRole = "sre"
	BusinessStakeHolderRole      StakeHolderRole = "business"
	MLEngineerStakeHolderRole    StakeHolderRole = "ml-engineer"
	DataScientistStakeHolderRole StakeHolderRole = "data-scientist"
	OtherStakeHolderRole         StakeHolderRole = "other"
)

// Represent a stack holder in the product.
// Each stake holder can hove one or more roles.
type StakeHolder struct {
	AccountName string            `json:"accountName,omitempty" protobuf:"bytes,1,opt,name=accountName"`
	Roles       []StakeHolderRole `json:"roles,omitempty" protobuf:"bytes,2,rep,name=roles"`
}

type GitLocation struct {
	// The credential to the git repo provider
	GitConnectionName string `json:"gitConnectionName,omitempty" protobuf:"bytes,2,opt,name=gitConnectionName"`
	// The url to the git repo.
	// +kubebuilder:validation:MaxLength=256
	Url string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
}

type ImageLocation struct {
	// The canonical name of the image repo.
	// The default value is docker/productname
	// +kubebuilder:validation:MaxLength=256
	// optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The connection of the docker registry provider
	// If the value is empty, the system will not push images.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// optional
	RegistryConnectionName *string `json:"registryConnectionName,omitempty" protobuf:"bytes,2,opt,name=registryConnectionName"`
}

//DataProduct defines the desired state of a data product
type DataProductSpec struct {
	// The account name of the owner of this data product
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The tenant that own the data product.
	// Default to default tenant.
	// +optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,2,opt,name=tenantRef"`
	// Stake holders refer to a list of stackholders, which have interest in the product.
	// +optional
	StakeHolders []StakeHolder `json:"stakeholders,omitempty" protobuf:"bytes,3,rep,name=stakeholders"`
	// GitLocation is the github repository for all the artifacts for this product
	// +optional
	GitLocation *GitLocation `json:"gitLocation,omitempty" protobuf:"bytes,4,opt,name=gitLocation"`
	// ImageLocation is the image repository that stores the models images for the product versions
	// Required.
	ImageLocation ImageLocation `json:"imageLocation,omitempty" protobuf:"bytes,5,opt,name=imageLocation"`
	// LabName is the Lab where models of this products are trained
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// Required.
	LabName *string `json:"labName" protobuf:"bytes,7,opt,name=labName"`
	// ServingSiteName is the serving site where predictors of this product are deployed
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// Required.
	ServingSiteName *string `json:"servingSiteName" protobuf:"bytes,8,opt,name=servingSiteName"`
	// Task denote the machine learning task of the product (classification/regression,etc.)
	// Required.
	Task catalog.MLTask `json:"task,omitempty" protobuf:"bytes,9,opt,name=task"`
	// User provided description
	// +optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,10,opt,name=description"`
	//This folder contain the root location for all the artifacts from the product.
	// +optional
	DataLocation DataLocation `json:"dataLocation,omitempty" protobuf:"bytes,11,opt,name=dataLocation"`
	// the notifier selector select the notifier for events that occur in the product life cycle.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,12,opt,name=notifierName"`
	// A reference to the workload class used when training or testing the model
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	ModelWorkloadClassName string `json:"modelWorkloadClassName,omitempty" protobuf:"bytes,13,opt,name=modelWorkloadClassName"`
	// A reference to the workload class used when running tasks on the dataset, for example profiling or reports.
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +optional
	DataWorkloadClassName string `json:"dataWorkloadClassName,omitempty" protobuf:"bytes,14,opt,name=dataWorkloadClassName"`
	// Denote how many time a job is retry after failure
	// default to 3
	// +optional
	RetriesOnFailure *int32 `json:"retriesOnFailure,omitempty" protobuf:"varint,15,opt,name=retriesOnFailure"`
}

// DataProductStatus defines the observed state of DataProduct
type DataProductStatus struct {
	// The conditions of the product.
	//+optional
	Conditions []DataProductCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// DataProductList contains a list of DataProducts
type DataProductList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataProduct `json:"items" protobuf:"bytes,2,rep,name=items"`
}
