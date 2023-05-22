/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition on the dataset
type DataProductConditionType string

// / ProductRef Condition
const (
	DataProductReady = "Ready"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=dataproducts,shortName=prod,singular=dataproduct,shortName="prod",categories={data,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Public",type="boolean",JSONPath=".spec.public"
// +kubebuilder:printcolumn:name="Errors",type="integer",JSONPath=".status.errorAlertsCount"
// +kubebuilder:printcolumn:name="Data Sources",type="integer",JSONPath=".status.datasourcesCount",priority=1
// +kubebuilder:printcolumn:name="Datasets",type="integer",JSONPath=".status.datasetsCount",priority=1
// +kubebuilder:printcolumn:name="Studies",type="integer",JSONPath=".status.studiesCount",priority=1
// +kubebuilder:printcolumn:name="ModelsCount",type="integer",JSONPath=".status.modelsCount",priority=1
// +kubebuilder:printcolumn:name="Predictors",type="integer",JSONPath=".status.predictorsCount",priority=1
// +kubebuilder:printcolumn:name="Apps",type="integer",JSONPath=".status.appsCount",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// DataProduct represents a single DataProduct namespace, which contains all non-infrastructure resources. Additionally,
// it specifies default parameters for resources to be created under the namespace, such as workload class and storage location
type DataProduct struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataProductStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// GitLocation specifies the Git location where Modela will track resources as YAML
type GitLocation struct {
	// The Git ConnectionName resource which exists in the same tenant as the parent DataProduct
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	GitConnectionName *string `json:"gitConnectionName,omitempty" protobuf:"bytes,1,opt,name=gitConnectionName"`
	// The URL to the destination Git repository
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	URL *string `json:"url,omitempty" protobuf:"bytes,2,opt,name=url"`
	// The branch inside the Git repository
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	Branch *string `json:"branch,omitempty" protobuf:"bytes,3,opt,name=branch"`
	// Indicates if the repository is private
	// +kubebuilder:default:=true
	Private *bool `json:"private,omitempty" protobuf:"varint,4,opt,name=private"`
}

// ImageLocation specifies the destination for all model images produced under a DataProduct
type ImageLocation struct {
	// The canonical name of the image repository. If not set, it will default to docker/{dataproduct_name}
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=256
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The image repository ConnectionName resource which exists in the same tenant as the parent DataProduct. If the field
	// is not set, Modela will ignore the image location and not push images
	// +kubebuilder:default:=""
	RegistryConnectionName *string `json:"registryConnectionName,omitempty" protobuf:"bytes,2,opt,name=registryConnectionName"`
}

// DataProductSpec defines the desired state of the DataProduct
type DataProductSpec struct {
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// Public indicates if the Data Product can be accessed without any permissions.
	// If enabled, all resources and verbs will be accessible
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Public *bool `json:"public,omitempty" protobuf:"varint,2,opt,name=public"`
	// The reference to the Tenant of the Data Product (which must equal the namespace of the Data Product)
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,3,opt,name=tenantRef"`
	// GitLocation specifies the location of a Git repository where resources under the Data Product will be saved as YAML
	// +kubebuilder:validation:Optional
	GitLocation GitLocation `json:"gitLocation,omitempty" protobuf:"bytes,4,opt,name=gitLocation"`
	// ImageLocation specifies the default Docker image repository where images produced under the Data Product will be stored
	// +kubebuilder:validation:Optional
	ImageLocation *ImageLocation `json:"imageLocation,omitempty" protobuf:"bytes,5,opt,name=imageLocation"`
	// The name of the Lab that will be used by default with all compute-requiring child resources
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	DefaultLabName *string `json:"defaultLabName" protobuf:"bytes,6,opt,name=defaultLabName"`
	// The name of the Serving Site which will be used by default with all Predictor resources
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DefaultServingSiteName *string `json:"defaultServingSiteName" protobuf:"bytes,7,opt,name=defaultServingSiteName"`
	// The name of the Virtual Bucket that resources under the Data Product will use by default
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	DefaultBucketName *string `json:"defaultBucketName,omitempty" protobuf:"bytes,8,opt,name=defaultBucketName"`
	// Task specifies the default machine learning task of the product (classification, regression, etc.)
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,9,opt,name=task"`
	// Subtask specifies the default subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,10,opt,name=subtask"`
	// User-provided description of the object
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,11,opt,name=description"`
	// The default notification specification for all resources under the DataProduct
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,12,opt,name=notification"`
	// The default resource allocation for model training and data workloads that takes place under the DataProduct
	// +kubebuilder:validation:Optional
	DefaultTrainingResources catalog.ResourceSpec `json:"trainingResources,omitempty" protobuf:"bytes,13,opt,name=trainingResources"`
	// The default resource allocation for model serving workloads that takes place under the DataProduct
	// +kubebuilder:validation:Optional
	DefaultServingResources catalog.ResourceSpec `json:"servingResources,omitempty" protobuf:"bytes,14,opt,name=servingResources"`
	// RetriesOnFailure defines the backoff limit for Jobs created by resources under the Data Product.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	RetriesOnFailure *int32 `json:"retriesOnFailure,omitempty" protobuf:"varint,15,opt,name=retriesOnFailure"`
	// The default priority level assigned to Jobs created by resources under the Data Product
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="medium"
	DefaultPriority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,16,opt,name=priority"`
	// The implementation-specific color assigned to the Data Product, for visual purposes only
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Color *catalog.Color `json:"color,omitempty" protobuf:"bytes,17,opt,name=color"`
	// Approval specifies the default model approval requirements
	// +kubebuilder:validation:Optional
	Approval *ApprovalSpec `json:"approval,omitempty" protobuf:"bytes,18,opt,name=approval"`
	// Permissions defines the set of permissions applied to each Account when accessing resources within the Data Product
	// +kubebuilder:validation:Optional
	Permissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,19,opt,name=permissions"`
	// Tags contain user-defined tags associated with the Data Product
	// +kubebuilder:validation:Optional
	Tags []string `json:"tags,omitempty" protobuf:"bytes,20,opt,name=tags"`
}

// DataProductStatus defines the observed state of DataProduct
type DataProductStatus struct {
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// The number of DataSource resources that exist under the namespace
	//+kubebuilder:validation:Optional
	DatasourcesCount int32 `json:"datasourcesCount,omitempty" protobuf:"varint,3,opt,name=datasourcesCount"`
	// The number of Dataset resources that exist under the namespace
	//+kubebuilder:validation:Optional
	DatasetsCount int32 `json:"datasetsCount,omitempty" protobuf:"varint,4,opt,name=datasetsCount"`
	// The number of DataPipeline resources that exist under the namespace
	//+kubebuilder:validation:Optional
	DataPipelinesCount int32 `json:"dataPipelineCount,omitempty" protobuf:"varint,5,opt,name=dataPipelineCount"`
	// The number of DataPipelineRun resources that exist under the namespace
	//+kubebuilder:validation:Optional
	DataPipelineRunsCount int32 `json:"dataPipelineRunsCount,omitempty" protobuf:"varint,6,opt,name=totalDataPipelineRuns"`
	// The number of Study resources that exist under the namespace
	//+kubebuilder:validation:Optional
	StudiesCount int32 `json:"studiesCount,omitempty" protobuf:"varint,7,opt,name=studiesCount"`
	// The number of Model resources that exist under the namespace
	//+kubebuilder:validation:Optional
	ModelsCount int32 `json:"modelsCount,omitempty" protobuf:"varint,8,opt,name=modelsCount"`
	// The number of Predictor resources that exist under the namespace
	//+kubebuilder:validation:Optional
	PredictorsCount int32 `json:"predictorsCount,omitempty" protobuf:"varint,11,opt,name=predictorsCount"`
	// The number of DataApp resources that exist under the namespace
	//+kubebuilder:validation:Optional
	DataAppsCount int32 `json:"dataAppsCount,omitempty" protobuf:"varint,13,opt,name=dataAppsCount"`
	// The number of BatchPrediction resources that exist under the namespace
	//+kubebuilder:validation:Optional
	PredictionsCount int32 `json:"predictionsCount,omitempty" protobuf:"varint,14,opt,name=predictionsCount"`
	// The number of informative alerts produced under the namespace
	//+kubebuilder:validation:Optional
	InfoAlertsCount int32 `json:"infoAlertsCount,omitempty" protobuf:"varint,15,opt,name=infoAlertsCount"`
	// The number of error alerts produced under the namespace
	//+kubebuilder:validation:Optional
	ErrorsAlertsCount int32 `json:"errorAlertsCount,omitempty" protobuf:"varint,16,opt,name=errorAlertsCount"`
	// Count the number of model classes
	//+kubebuilder:validation:Optional
	ModelClassesCount int32 `json:"modelClassesCount,omitempty" protobuf:"varint,17,opt,name=modelClassesCount"`
	// In the case of failure, the DataProduct resource controller will set this field with a failure reason
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,18,opt,name=failureReason"`
	// In the case of failure, the DataProduct resource controller will set this field with a failure message
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,19,opt,name=failureMessage"`
	// The name of the DataProductVersion which currently represents the latest version of the DataProduct.
	// Newly-created resources will be instantiated with this version by default
	BaselineVersion *string `json:"baselineVersion,omitempty" protobuf:"bytes,20,opt,name=baselineVersion"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,21,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// DataProductList contains a list of Data Products
type DataProductList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataProduct `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// KPI specifies a key performance indicator for a DataProduct. Currently not implemented.
type KPI struct {
	// The name of the KPI
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The value of the KPI
	Value *float64 `json:"value,omitempty" protobuf:"bytes,2,opt,name=value"`
}

type DecisionType string

const (
	DecisionTypeUnanimous ApprovalType = "unanimous"
	DecisionTypeMajority  ApprovalType = "majority"
	DecisionTypeOneOrMore ApprovalType = "one-or-more"
)

// ApprovalSpec describes the approval requirements for a Model
type ApprovalSpec struct {
	// Enabled indicates if model approval is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// DecisionType specifies the requirements for the model to be approved in the case of there being multiple reviewers
	// +kubebuilder:validation:Optional
	DecisionType *DecisionType `json:"decisionType,omitempty" protobuf:"varint,2,opt,name=decisionType"`
	// Reviewers contains the name of Accounts that will be required to approve models for promotion
	// +kubebuilder:validation:Optional
	Reviewers []string `json:"members,omitempty" protobuf:"bytes,3,rep,name=members"`
}

type ApprovalType string

const (
	ApprovalTypeApproved    ApprovalType = "approved"
	ApprovalTypeReject      ApprovalType = "rejected"
	ApprovalTypeUnconfirmed ApprovalType = "unconfirmed"
)

type ApprovalReviewStatus struct {
	// Reviewer specifies the name of the Account which is responsible for this review
	Reviewer string `json:"reviewer,omitempty" protobuf:"bytes,1,opt,name=reviewer"`
	// The approval status, which can be approved, rejected, or unconfirmed
	Result ApprovalType `json:"result,omitempty" protobuf:"bytes,2,opt,name=result"`
	// The date at which the review took place. If empty, the review is still unconfirmed
	ApprovedAt *metav1.Time `json:"approvedAt,omitempty" protobuf:"bytes,3,opt,name=approvedAt"`
	// The notes for the review, created by the reviewer at the time of the decision
	Notes string `json:"notes,omitempty" protobuf:"bytes,4,opt,name=notes"`
}

// ApprovalStatus describes the current state of a Model's approval review
type ApprovalStatus struct {
	// Status defines the overall approval status of the Model
	Status ApprovalType `json:"status,omitempty" protobuf:"bytes,1,opt,name=status"`
	// Reviews contains an ApprovalReviewStatus for each reviewer specified by the ApprovalSpec for the Model
	Reviews []ApprovalReviewStatus `json:"reviews,omitempty" protobuf:"bytes,2,opt,name=reviews"`
}
