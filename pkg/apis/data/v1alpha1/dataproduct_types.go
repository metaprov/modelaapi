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

/// ProductRef Condition
const (
	DataProductReady DataProductConditionType = "Ready"
	DataProductSaved DataProductConditionType = "Saved"
)

// DataProductCondition describes the state of a DataProduct at a certain point
type DataProductCondition struct {
	// Type of condition.
	Type DataProductConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataProductConditionType"`
	// Status of the condition, one of True, False, Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=dataproducts,shortName=prod,singular=dataproduct,shortName="prod",categories={data,modela,all}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Public",type="boolean",JSONPath=".spec.public"
// +kubebuilder:printcolumn:name="Errors",type="integer",JSONPath=".status.totalErrorAlerts"
// +kubebuilder:printcolumn:name="Location Sources",type="integer",JSONPath=".status.totalDatasources",priority=1
// +kubebuilder:printcolumn:name="Datasets",type="integer",JSONPath=".status.totalDatasets",priority=1
// +kubebuilder:printcolumn:name="Studies",type="integer",JSONPath=".status.totalStudies",priority=1
// +kubebuilder:printcolumn:name="ModelsCount",type="integer",JSONPath=".status.totalModels",priority=1
// +kubebuilder:printcolumn:name="Predictors",type="integer",JSONPath=".status.totalPredictors",priority=1
// +kubebuilder:printcolumn:name="Apps",type="integer",JSONPath=".status.totalApps",priority=1
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
	// The Git Connection resource which exists in the same tenant as the parent DataProduct
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
	// The image repository Connection resource which exists in the same tenant as the parent DataProduct. If the field
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
	// Indicates if the DataProduct is public and can be accessed without permissions
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Public *bool `json:"public,omitempty" protobuf:"varint,2,opt,name=public"`
	// The reference to the Tenant which owns the DataProduct. Defaults to `default-tenant`
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,3,opt,name=tenantRef"`
	// GitLocation is the default Git location where all child resources will be tracked as YAML
	// +kubebuilder:validation:Optional
	GitLocation GitLocation `json:"gitLocation,omitempty" protobuf:"bytes,4,opt,name=gitLocation"`
	// ImageLocation is the default Docker image repository where model images produced under the DataProduct will be stored
	// +kubebuilder:validation:Optional
	ImageLocation *ImageLocation `json:"imageLocation,omitempty" protobuf:"bytes,5,opt,name=imageLocation"`
	// The name of the Lab that will be used by default with all compute-requiring child resources
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName" protobuf:"bytes,7,opt,name=labName"`
	// The name of the Serving Site which will be used by default with all Predictor resources
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	// +kubebuilder:validation:Optional
	ServingSiteName *string `json:"servingSiteName" protobuf:"bytes,8,opt,name=servingSiteName"`
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
	// The default location for all artifacts created under the DataProduct. All data-producing resources will
	// use the VirtualBucket specified by the Location by default
	// +kubebuilder:validation:Optional
	Location DataLocation `json:"location,omitempty" protobuf:"bytes,12,opt,name=location"`
	// The default notification specification for all resources under the DataProduct
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,13,opt,name=notification"`
	// The default resource allocation for model training and data workloads that takes place under the DataProduct
	// +kubebuilder:validation:Optional
	DefaultTrainingResources catalog.ResourceSpec `json:"trainingResources,omitempty" protobuf:"bytes,14,opt,name=trainingResources"`
	// The default resource allocation for model serving workloads that takes place under the DataProduct
	// +kubebuilder:validation:Optional
	DefaultServingResources catalog.ResourceSpec `json:"servingResources,omitempty" protobuf:"bytes,15,opt,name=servingResources"`
	// Specifies how many times Jobs created under the DataProduct namespace will retry after failure
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	RetriesOnFailure *int32 `json:"retriesOnFailure,omitempty" protobuf:"varint,16,opt,name=retriesOnFailure"`
	// KPIs define key performance indicators for the DataProduct (not functional as of the current release)
	//+kubebuilder:validation:Optional
	KPIs []KPI `json:"kpis,omitempty" protobuf:"bytes,17,rep,name=kpis"`
	// The name of the Account which should be responsible for events that occur under the DataProduct
	//+kubebuilder:validation:Optional
	OnCallAccountName string `json:"onCallAccountName,omitempty" protobuf:"bytes,18,opt,name=onCallAccountName"`
	// The default compilation specification for Study resources created under the DataProduct
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,19,opt,name=compilation"`
	// The clearance level required to access the DataProduct. Accounts which do not have a clearance level
	// greater than or equal to ClearanceLevel will be denied access to the DataProduct namespace
	// +kubebuilder:default:=unclassified
	// +kubebuilder:validation:Optional
	ClearanceLevel *catalog.SecurityClearanceLevel `json:"clearanceLevel,omitempty" protobuf:"bytes,20,opt,name=clearanceLevel"`
	// The default priority level assigned to Jobs created under the DataProduct namespace
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="medium"
	DefaultPriority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,21,opt,name=priority"`
	// The color assigned to the product, for visual purposes only
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Color *catalog.Color `json:"color,omitempty" protobuf:"bytes,22,opt,name=color"`
	// The Governance requirements (not functional as of the current release)
	// +kubebuilder:validation:Optional
	Governance GovernanceSpec `json:"governance,omitempty" protobuf:"bytes,23,opt,name=governance"`
	// Permissions denotes the specification that determines which Accounts
	// can access the DataProduct and what actions they can perform
	// +kubebuilder:validation:Optional
	Permissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,24,opt,name=permissions"`
	// Assign tags to data product
	// +kubebuilder:validation:Optional
	Tags []string `json:"tags,omitempty" protobuf:"bytes,25,opt,name=tags"`
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
	// In the case of failure, the DataProduct resource controller will set this field with a failure reason
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,17,opt,name=failureReason"`
	// In the case of failure, the DataProduct resource controller will set this field with a failure message
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,18,opt,name=failureMessage"`
	// The name of the DataProductVersion which currently represents the latest version of the DataProduct.
	// Newly-created resources will be instantiated with this version by default
	BaselineVersion *string `json:"baselineVersion,omitempty" protobuf:"bytes,19,opt,name=baselineVersion"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataProductCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,20,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// DataProductList contains a list of DataProducts
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

// GovernanceSpec describes the governance requirements for models produced under a DataProduct
type GovernanceSpec struct {
	// Indicates if governance is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The country whose regulations are under consideration
	// +kubebuilder:validation:Optional
	Country *string `json:"country,omitempty" protobuf:"bytes,2,opt,name=country"`
	// The account name of the IT reviewer
	// +kubebuilder:validation:Optional
	ITReviewer *string `json:"itReviewer,omitempty" protobuf:"bytes,3,opt,name=itReviewer"`
	// The account name of the compliance reviewer
	// +kubebuilder:validation:Optional
	ComplianceReviewer *string `json:"complianceReviewer,omitempty" protobuf:"bytes,4,opt,name=complianceReviewer"`
	// The account name of the business reviewer
	// +kubebuilder:validation:Optional
	BusinessReviewer *string `json:"businessReviewer,omitempty" protobuf:"bytes,5,opt,name=businessReviewer"`
	// The name of the team members account that goveren this data product.
	// +kubebuilder:validation:Optional
	Members []string `json:"members,omitempty" protobuf:"bytes,6,rep,name=members"`
}

type ApprovalType string

const (
	ApprovalTypeApproved ApprovalType = "approved"
	ApprovalTypeReject   ApprovalType = "reject"
)

type GovernanceReviewStatus struct {
	// The approval status, which can be approved or rejected
	Result ApprovalType `json:"result,omitempty" protobuf:"bytes,1,opt,name=result"`
	// The date of the approval
	ApprovedAt *metav1.Time `json:"approvedAt,omitempty" protobuf:"bytes,2,opt,name=approvedAt"`
	// Notes taken during the review
	Notes string `json:"notes,omitempty" protobuf:"bytes,3,opt,name=notes"`
}

// GovernanceStatus describes the current state of a governance review for a model
type GovernanceStatus struct {
	// The review status for IT department
	// +kubebuilder:validation:Optional
	ITReviewStatus GovernanceReviewStatus `json:"ITReviewStatus,omitempty" protobuf:"bytes,1,opt,name=ITReviewStatus"`
	// The review status for the compliance department
	// +kubebuilder:validation:Optional
	ComplianceReviewStatus GovernanceReviewStatus `json:"complianceReviewStatus,omitempty" protobuf:"bytes,2,opt,name=complianceReviewStatus"`
	// The review status for the management department
	// +kubebuilder:validation:Optional
	BusinessReviewStatus GovernanceReviewStatus `json:"businessReviewStatus,omitempty" protobuf:"bytes,3,opt,name=businessReviewStatus"`
}
