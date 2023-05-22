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

type TenantType string

type TenantConditionType string

// / Tenant Condition
const (
	TenantReady               TenantConditionType = "Ready"
	TenantMetricDatabaseReady TenantConditionType = "MetricDatabaseReady"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=tenants,singular=tenant,categories={infra,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Default Lab",type="string",JSONPath=".spec.defaultLabRef.Name",description=""
// +kubebuilder:printcolumn:name="Default Serving Site",type="string",JSONPath=".spec.defaultServingSiteRef.Name",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Tenant represents a root namespace for tenant-level resources and child DataProduct namespaces
type Tenant struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              TenantSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status TenantStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// TenantList represent a list of Tenants
// +kubebuilder:object:root=true
type TenantList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []Tenant `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// TenantSpec defines the desired state of a Tenant
type TenantSpec struct {
	// DefaultLabName specifies a Lab resource that will be used as a default for all resources that
	// do not specify a Lab or have a Data Product which specifies a default Lab
	// +kubebuilder:validation:Optional
	DefaultLabName *string `json:"defaultLabName,omitempty" protobuf:"bytes,1,opt,name=defaultLabName"`
	// DefaultServingSiteName specifies a Serving Site resource that will be used as a default for all resources that
	// do not specify a Serving Site or have a Data Product which specifies a default Serving Site
	// +kubebuilder:validation:Optional
	DefaultServingSiteName *string `json:"defaultServingSiteName,omitempty" protobuf:"bytes,2,opt,name=defaultServingSiteName"`
	// DefaultBucketName specifies a Virtual Bucket resource that will be used as a default for all resources that
	// do not specify a Virtual Bucket or have a Data Product which specifies a default Virtual Bucket
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DefaultBucketName *string `json:"defaultBucketName,omitempty" protobuf:"bytes,3,opt,name=defaultBucketName"`
	// Permissions defines the set of permissions applied to each Account when accessing resources within the Tenant
	// +kubebuilder:validation:Optional
	Permissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,4,opt,name=permissions"`
	// The default notification specification for all resources under the tenant
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,5,opt,name=notification"`
	// OnlineStore references a Connection resource to an external database that the Modela online store microservice
	// will use as an online store. The online store service must be installed through the Modela Operator
	// +kubebuilder:validation:Optional
	OnlineStoreConnectionRef *v1.ObjectReference `json:"onlineStoreConnection,omitempty" protobuf:"bytes,6,opt,name=onlineStoreConnection"`
	// MetricStore references a Connection resource to an external database that will act as the metric store for the Tenant.
	// The metric store stores metadata about resources that perform workloads (i.e. datasets, models, studies, etc.)
	// +kubebuilder:validation:Optional
	MetricStoreConnectionRef *v1.ObjectReference `json:"metricStoreConnection,omitempty" protobuf:"bytes,7,opt,name=metricStoreConnection"`
}

// TenantStatus defines the actual state of a Tenant
type TenantStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
