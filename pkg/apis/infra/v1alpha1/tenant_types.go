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

/// Tenant Condition
const (
	TenantReady TenantConditionType = "Ready"
	TenantSaved TenantConditionType = "Saved"
)

// TenantCondition describes the state of a Tenant at a certain point
type TenantCondition struct {
	// Type of tenant condition.
	Type TenantConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=TenantConditionType"`
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
	// Permissions denotes the specification that determines which Accounts
	// can access the resources under the Tenant namespace and what actions they can perform
	// +kubebuilder:validation:Optional
	Permissions catalog.PermissionsSpec `json:"permissions,omitempty" protobuf:"bytes,5,opt,name=permissions"`
	// The default notification specification for all resources under the tenant
	// +kubebuilder:validation:Optional
	Notification catalog.NotificationSpec `json:"notification,omitempty" protobuf:"bytes,6,opt,name=notification"`
	// Set of feature stores
	// +kubebuilder:validation:Optional
	FeatureStores []FeatureStoreSpec `json:"featureStores,omitempty" protobuf:"bytes,7,opt,name=featureStores"`
}

// TenantStatus defines the actual state of a Tenant
type TenantStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// the status of the feature stores
	//+kubebuilder:validation:Optional
	FeatureStores []FeatureStoreStatus `json:"featureStores,omitempty" protobuf:"bytes,5,opt,name=featureStores"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []TenantCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}

// Specifiction for an online feature store
type FeatureStoreSpec struct {
	Online bool `json:"online,omitempty" protobuf:"bytes,1,opt,name=online"`
	// The name of the online feature store.
	//+kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,2,opt,name=name"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	ConnectionRef v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,3,opt,name=connectionRef"`
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
