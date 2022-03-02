/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type ResourceName string

const (
	// infra resources
	AccountResourceName    string = "account"
	AlertResourceName      string = "alert"
	AttachmentResourceName string = "attachment"
	CommitResourceName     string = "commit"
	ConnectionResourceName string = "connection"
	LabResourceName        string = "lab"
	LicenseResourceName    string = "license"
	ModelaSystemeName      string = "modelasystem"
	NotifierName           string = "notifier"
	ServingSiteName        string = "servingsite"
	TenantName             string = "tenant"
	VirtualBucketName      string = "virtualbucket"
	VirtualClusterName     string = "virtualcluster"
	VirtualVolumeName      string = "virtualvolume"

	// data resources
	DataPipelineResourceName        string = "datapipeline"
	DataPipelineRunResourceName     string = "datapipelinerun"
	DataProductResourceName         string = "dataproduct"
	DataProductVersionResourceName  string = "dataproductversion"
	DatasetResourceName             string = "dataset"
	DatasourceResourceName          string = "datasource"
	EntityResourceName              string = "entity"
	FeatureHistogramResourceName    string = "featurehistogram"
	FeatureResourceName             string = "feature"
	FeaturePipelineResourceName     string = "featurepipeline"
	FeaturePipelineRunResourceName  string = "featurepipelinerun"
	FeaturesetResourceName          string = "featureset"
	LabelingPipelineResourceName    string = "labelingpipeline"
	LabelingPipelineRunResourceName string = "labelingpipelinerun"
	RecipeResourceName              string = "recipe"
	RecipeRunResourceName           string = "reciperun"
	ReportResourceName              string = "report"
	SqlQueryResourceName            string = "sqlquery"
	SqlQueryRunResourceName         string = "sqlqueryrun"
	WebRequestResourceName          string = "webrequest"
	WebRequestRunResourceName       string = "webrequestrun"

	// Team
	MeetingResourceName    string = "meeting"
	PostmortemResourceName string = "postmortem"
	ReviewResourceName     string = "review"
	RunbookResourceName    string = "runbook"
	TodoResourceName       string = "todo"

	// Training
	CronReportResourceName       string = "cronreport"
	ModelAutoBuilderResourceName string = "modelautobuilder"
	ModelPipelineResourceName    string = "modelpipeline"
	ModelPipelineRunResourceName string = "modelpipelinerun"
	ModelResourceName            string = "model"
	ModelCompilerRunName         string = "modelcompilerrun"
	NotebookName                 string = "notebook"
	NotebookRunName              string = "notebookrun"
	ReportName                   string = "report"
	StudyName                    string = "study"

	// Inference
	CronPredictionResourceName string = "cronprediction"
	CurtainResourceName        string = "curtain"
	DataAppResourceName        string = "dataapp"
	PredictionResourceName     string = "prediction"
	PredictorResourceName      string = "predictor"
)

type ActionName string

const (
	CreateActionName ActionName = "create"
	DeleteActionName ActionName = "delete"
	GetActionName    ActionName = "get"
	UpdateActionName ActionName = "update"
	ListActionName   ActionName = "list"
	RunActionName    ActionName = "run"
	AllActionName    ActionName = "*"
)

// +kubebuilder:validation:Enum="administrator";"business-stakeholder";"data-scientist";"data-engineer";"ml-engineer";"sre"
// RoleName is the type of role a user can have
type RoleName string

const (
	Administrator       RoleName = "administrator"
	BusinessStakeholder RoleName = "business-stakeholder"
	DataScientist       RoleName = "data-scientist"
	DataEngineer        RoleName = "data-engineer"
	MLEngineer          RoleName = "ml-engineer"
	SRE                 RoleName = "sre"
)

// UserRoleClass specify the RBAC premission for a specific user role.
// +kubebuilder:resource:path=userroleclasses,singular=userroleclass,categories={catalog,modela,all}
// +kubebuilder:object:root=true
type UserRoleClass struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              UserRoleClassSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
}

// +kubebuilder:object:root=true
// UserRoleClassList contains a list of UserRoleClass
type UserRoleClassList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []UserRoleClass `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// UserRoleClassSpec is the spec for UserRoleClass
type UserRoleClassSpec struct {
	Description string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// +kubebuilder:validation:Optional
	Permissions []PermissionSpec `json:"rules,omitempty" protobuf:"bytes,2,rep,name=rules"`
}

type PermissionSpec struct {
	// The name of the resource
	Resource ResourceName `json:"resource,omitempty" protobuf:"bytes,1,opt,name=resource"`
	// List of allowed actions on the resource
	Actions []ActionName `json:"actions,omitempty" protobuf:"bytes,2,rep,name=actions"`
}
