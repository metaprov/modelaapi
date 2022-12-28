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
	// The reference to the Lab resource that will be used as a default when creating new DataProduct namespaces
	// +kubebuilder:validation:Optional
	DefaultLabRef *v1.ObjectReference `json:"defaultLabRef,omitempty" protobuf:"bytes,1,opt,name=defaultLab"`
	// The reference to the ServingSite resource that will be used as a default when creating new DataProduct namespaces
	// +kubebuilder:validation:Optional
	DefaultServingSiteRef *v1.ObjectReference `json:"defaultServingSiteRef,omitempty" protobuf:"bytes,2,opt,name=defaultServingSiteRef"`
	// The user-provided description of the Tenant
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Owner indicates the name of the Account under the Tenant which created the Tenant (i.e. the Tenant administrator)
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,4,opt,name=owner"`
	// The default bucket name for tenant artifacts
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	BucketName *string `json:"bucketName,omitempty" protobuf:"bytes,5,opt,name=bucketName"`
	// The root path to
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Path *string `json:"path,omitempty" protobuf:"bytes,6,opt,name=path"`
	// Permissions denotes the specification that determines which Accounts
	// can access the resources under the Tenant namespace and what actions they can perform
	// +kubebuilder:validation:Optional
	Permissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,7,opt,name=permissions"`
	// The default notification specification for all resources under the tenant
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,8,opt,name=notification"`
	// The connection to the online feature store for the tenant.
	// The online store serves all the feature groups for this tenant.
	// +kubebuilder:validation:Optional
	Online FeatureStoreSpec `json:"online,omitempty" protobuf:"bytes,9,opt,name=online"`
	// The connection to the offline feature store. This feature store holds the observations as well as the feature groups.
	// +kubebuilder:validation:Optional
	Offline FeatureStoreSpec `json:"offline,omitempty" protobuf:"bytes,10,opt,name=offline"`
	// The connection to the metrics store. The metrics store hold the metadata about objects in the system (e.g. models)
	// The metrics store is used for reports and general analytics.
	// +kubebuilder:validation:Optional
	Metrics FeatureStoreSpec `json:"metrics,omitempty" protobuf:"bytes,11,opt,name=metrics"`
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
	// the status of the online store
	//+kubebuilder:validation:Optional
	Online FeatureStoreStatus `json:"online,omitempty" protobuf:"bytes,5,rep,name=online"`
	// the status of the offline store
	//+kubebuilder:validation:Optional
	Offline FeatureStoreStatus `json:"offline,omitempty" protobuf:"bytes,6,rep,name=offline"`
	// the status of the metrics store
	//+kubebuilder:validation:Optional
	Metrics FeatureStoreStatus `json:"metrics,omitempty" protobuf:"bytes,7,rep,name=metrics"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}

// Specifiction for an online feature store
type FeatureStoreSpec struct {
	// The name of the online feature store.
	//+kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	ConnectionRef v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,2,opt,name=connectionRef"`
}

type FeatureStoreStatus struct {
	// Feature store name
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Last check of the feature store status
	LastCheck *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
}
