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
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Public",type="boolean",JSONPath=".spec.public"
// +kubebuilder:printcolumn:name="Errors",type="integer",JSONPath=".status.totalErrorAlerts"
// +kubebuilder:printcolumn:name="Datasources",type="integer",JSONPath=".status.totalDatasources"
// +kubebuilder:printcolumn:name="Datasets",type="integer",JSONPath=".status.totalDatasets"
// +kubebuilder:printcolumn:name="Studies",type="integer",JSONPath=".status.totalStudies"
// +kubebuilder:printcolumn:name="Models",type="integer",JSONPath=".status.totalModels"
// +kubebuilder:printcolumn:name="Predictors",type="integer",JSONPath=".status.totalPredictors"
// +kubebuilder:printcolumn:name="Apps",type="integer",JSONPath=".status.totalApps"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=dataproducts,shortName=prod,singular=dataproduct,shortName="prod",categories={data,modela,all}
type DataProduct struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            DataProductStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	Private *bool `json:"private,omitempty" protobuf:"varint,4,opt,name=private"`
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
	// If true, the data product is public.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Public *bool `json:"public,omitempty" protobuf:"bytes,2,opt,name=public"`
	// The tenant that own the data product.
	// Default to default tenant.
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,3,opt,name=tenantRef"`
	// GitLocation is the github repository for all the artifacts for this product
	// +kubebuilder:validation:Optional
	GitLocation GitLocation `json:"gitLocation,omitempty" protobuf:"bytes,4,opt,name=gitLocation"`
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
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,12,opt,name=notification"`
	// DefaultResource will be used if the resources are not specified.
	// +kubebuilder:validation:Optional
	DefaultTrainingResources catalog.ResourceSpec `json:"trainingResources,omitempty" protobuf:"bytes,13,opt,name=trainingResources"`
	// DefaultResource will be used if the resources are not specified.
	// +kubebuilder:validation:Optional
	DefaultServingResources catalog.ResourceSpec `json:"servingResources,omitempty" protobuf:"bytes,14,opt,name=servingResources"`
	// Denote how many time a job is retry after failure
	// +kubebuilder:default:=3
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=10
	// +kubebuilder:validation:Optional
	RetriesOnFailure *int32 `json:"retriesOnFailure,omitempty" protobuf:"varint,15,opt,name=retriesOnFailure"`
	// KPIs is the product kpi. This is for information porpose
	//+kubebuilder:validation:Optional
	KPIs []KPI `json:"kpis,omitempty" protobuf:"bytes,16,rep,name=kpis"`
	// OnCallAccountName is the name of the account on call.
	//+kubebuilder:validation:Optional
	OnCallAccountName string `json:"onCallAccountName,omitempty" protobuf:"bytes,17,opt,name=onCallAccountName"`
	// List of documents attached to the this data product
	//+kubebuilder:validation:Optional
	Compilation catalog.CompilerSpec `json:"compilation,omitempty" protobuf:"bytes,19,opt,name=compilation"`
	// The clearance level of this data product
	// +kubebuilder:default:=unclassified
	// +kubebuilder:validation:Optional
	ClearanceLevel *catalog.SecurityClearanceLevel `json:"clearanceLevel,omitempty" protobuf:"bytes,20,opt,name=clearanceLevel"`
	// Default Priority level assigned to jobs for this data product (e.g. study, model pipeline,etc)
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:="medium"
	DefaultPriority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,21,opt,name=priority"`
	// the color assigned to the product
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Color *catalog.Color `json:"color,omitempty" protobuf:"bytes,22,opt,name=color"`
	// The Governance requirements.
	// +kubebuilder:validation:Optional
	Governance GovernanceSpec `json:"governance,omitempty" protobuf:"bytes,23,opt,name=governance"`
	// The premissions for this product
	// +kubebuilder:validation:Optional
	Premissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,24,opt,name=permissions"`
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

// Governance Spec define the governance for models in this data product.

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
