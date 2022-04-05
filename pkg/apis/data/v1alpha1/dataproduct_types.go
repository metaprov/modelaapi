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

// DataProduct represents a single DataProduct namespace, which contains all non-infrastructure resources. Additionally,
// it specifies default parameters for resources to be created under the namespace, such as workload class and storage location
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Public",type="boolean",JSONPath=".spec.public"
// +kubebuilder:printcolumn:name="Errors",type="integer",JSONPath=".status.totalErrorAlerts"
// +kubebuilder:printcolumn:name="Data Sources",type="integer",JSONPath=".status.totalDatasources",priority=1
// +kubebuilder:printcolumn:name="Datasets",type="integer",JSONPath=".status.totalDatasets",priority=1
// +kubebuilder:printcolumn:name="Studies",type="integer",JSONPath=".status.totalStudies",priority=1
// +kubebuilder:printcolumn:name="Models",type="integer",JSONPath=".status.totalModels",priority=1
// +kubebuilder:printcolumn:name="Predictors",type="integer",JSONPath=".status.totalPredictors",priority=1
// +kubebuilder:printcolumn:name="Apps",type="integer",JSONPath=".status.totalApps",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=dataproducts,shortName=prod,singular=dataproduct,shortName="prod",categories={data,modela,all}
type DataProduct struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DataProductStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// Task denote the machine learning task of the product (classification/regression,etc.)
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,9,opt,name=task"`
	// User-provided description of the object
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,10,opt,name=description"`
	// The default location for all artifacts created under the DataProduct. All data-producing resources will
	// use the VirtualBucket specified by the DataLocation by default
	// +kubebuilder:validation:Optional
	DataLocation DataLocation `json:"dataLocation,omitempty" protobuf:"bytes,11,opt,name=dataLocation"`
	// The default notification specification for all resources under the DataProduct
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,12,opt,name=notification"`
	// The default resource allocation for model training which takes place under the DataProduct
	// +kubebuilder:validation:Optional
	DefaultTrainingResources catalog.ResourceSpec `json:"trainingResources,omitempty" protobuf:"bytes,13,opt,name=trainingResources"`
	// The default resource allocation for model serving which takes place under the DataProduct
	// +kubebuilder:validation:Optional
	DefaultServingResources catalog.ResourceSpec `json:"servingResources,omitempty" protobuf:"bytes,14,opt,name=servingResources"`
	// Denote how many times Jobs created under the DataProduct namespace will retry after failure
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	RetriesOnFailure *int32 `json:"retriesOnFailure,omitempty" protobuf:"varint,15,opt,name=retriesOnFailure"`
	// KPIs define key performance indicators for the DataProduct (not functional as of the current release)
	//+kubebuilder:validation:Optional
	KPIs []KPI `json:"kpis,omitempty" protobuf:"bytes,16,rep,name=kpis"`
	// The name of the Account which should be on-call for events that occur under the DataProduct
	//+kubebuilder:validation:Optional
	OnCallAccountName string `json:"onCallAccountName,omitempty" protobuf:"bytes,17,opt,name=onCallAccountName"`
	// The default compilation specification for Study resources created under the DataProduct
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,19,opt,name=compilation"`
	// The clearance level required to access the DataProduct
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
	// The permission specification which determines which Accounts can access the DataProduct and what actions they can perform
	// +kubebuilder:validation:Optional
	Permissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,24,opt,name=permissions"`
}

// DataProductStatus defines the observed state of DataProduct
type DataProductStatus struct {
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// Stats

	//+kubebuilder:validation:Optional
	TotalDatasources int32 `json:"totalDatasources,omitempty" protobuf:"bytes,3,opt,name=totalDatasources"`

	//+kubebuilder:validation:Optional
	TotalDatasets int32 `json:"totalDatasets,omitempty" protobuf:"bytes,4,opt,name=totalDatasets"`

	//+kubebuilder:validation:Optional
	TotalDataPipelines int32 `json:"totalDataPipelines,omitempty" protobuf:"bytes,5,opt,name=totalDataPipelines"`

	//+kubebuilder:validation:Optional
	TotalDataPipelineRuns int32 `json:"totalDataPipelineRuns,omitempty" protobuf:"bytes,6,opt,name=totalDataPipelineRuns"`

	//+kubebuilder:validation:Optional
	TotalStudies int32 `json:"totalStudies,omitempty" protobuf:"bytes,7,opt,name=totalStudies"`

	//+kubebuilder:validation:Optional
	TotalModels int32 `json:"totalModels,omitempty" protobuf:"bytes,8,opt,name=totalModels"`

	//+kubebuilder:validation:Optional
	TotalModelPipelines int32 `json:"totalModelPipelines,omitempty" protobuf:"bytes,9,opt,name=totalModelPipelines"`

	//+kubebuilder:validation:Optional
	TotalModelPipelineRuns int32 `json:"totalModelPipelineRuns,omitempty" protobuf:"bytes,10,opt,name=totalModelPipelineRuns"`

	//+kubebuilder:validation:Optional
	TotalPredictors int32 `json:"totalPredictors,omitempty" protobuf:"bytes,11,opt,name=totalPredictors"`

	//+kubebuilder:validation:Optional
	TotalBuilders int32 `json:"totalBuilders,omitempty" protobuf:"bytes,12,opt,name=totalBuilders"`

	//+kubebuilder:validation:Optional
	TotalApps int32 `json:"totalApps,omitempty" protobuf:"bytes,13,opt,name=totalApps"`

	//+kubebuilder:validation:Optional
	TotalPredictions int32 `json:"totalPredictions,omitempty" protobuf:"bytes,14,opt,name=totalPredictions"`

	//+kubebuilder:validation:Optional
	TotalInfoAlerts int32 `json:"totalInfoAlerts,omitempty" protobuf:"bytes,15,opt,name=totalInfoAlerts"`

	//+kubebuilder:validation:Optional
	TotalErrorsAlerts int32 `json:"totalErrorAlerts,omitempty" protobuf:"bytes,16,opt,name=totalErrorAlerts"`

	// Update in case of terminal failure
	// Borrowed from cluster api controller
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,17,opt,name=failureReason"`

	// Update in case of terminal failure message
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,18,opt,name=failureMessage"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataProductCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,19,rep,name=conditions"`
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

// GovernanceSpec define the governance for models produced in a DataProduct
type GovernanceSpec struct {
	// Enabled specify if the sample is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The model country
	// +kubebuilder:validation:Optional
	Country *string `json:"country,omitempty" protobuf:"bytes,2,opt,name=country"`
	// The account name of the IT reviewer
	// +kubebuilder:validation:Optional
	ITReviewer *string `json:"itReviewer,omitempty" protobuf:"bytes,3,opt,name=itReviewer"`
	// The account name of the compliance reviewer.
	// +kubebuilder:validation:Optional
	ComplianceReviewer *string `json:"complianceReviewer,omitempty" protobuf:"bytes,4,opt,name=complianceReviewer"`
	// The account name of the business reviewer
	// +kubebuilder:validation:Optional
	BusinessReviewer *string `json:"businessReviewer,omitempty" protobuf:"bytes,5,opt,name=businessReviewer"`
}

type ApprovalType string

const (
	ApprovalTypeApproved ApprovalType = "approved"
	ApprovalTypeReject   ApprovalType = "reject"
)

type GovernanceReviewStatus struct {
	// The approval status
	Result ApprovalType `json:"result,omitempty" protobuf:"bytes,1,opt,name=result"`
	// The date of approval
	ApprovalDate *metav1.Time `json:"approvalDate,omitempty" protobuf:"bytes,2,opt,name=approvalDate"`
	// Notes during the review.
	Notes string `json:"notes,omitempty" protobuf:"bytes,3,opt,name=notes"`
}

type GovernanceStatus struct {
	// The review status for IT department
	// +kubebuilder:validation:Optional
	ITReviewStatus GovernanceReviewStatus `json:"ITReviewStatus,omitempty" protobuf:"bytes,1,opt,name=ITReviewStatus"`
	// The review status for IT department
	// +kubebuilder:validation:Optional
	ComplianceReviewStatus GovernanceReviewStatus `json:"complianceReviewStatus,omitempty" protobuf:"bytes,2,opt,name=complianceReviewStatus"`
	// The business review status
	// +kubebuilder:validation:Optional
	BusinessReviewStatus GovernanceReviewStatus `json:"businessReviewStatus,omitempty" protobuf:"bytes,3,opt,name=businessReviewStatus"`
}
