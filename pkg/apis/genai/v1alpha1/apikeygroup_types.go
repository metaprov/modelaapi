package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type APIKeyGroupConditionType string

const (
	APIKeyGroupSaved APIKeyGroupConditionType = "Saved"
)

type APIKeyGroupStorageType string

const (
	// DatabaseAPIKeyGroupStorageType stores API key metadata inside a relational database
	DatabaseAPIKeyGroupStorageType APIKeyGroupStorageType = "database"
	// VaultAPIKeyGroupStorageType stores API key metadata within the Vault cluster used by Modela
	VaultAPIKeyGroupStorageType APIKeyGroupStorageType = "vault"
)

// +k8s:openapi-gen=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=apikeygroups,singular=apikeygroup,shortName=akg,categories={genai,modela}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Last Sync",type="date",JSONPath=".status.lastSyncAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// APIKeyGroup represents a collection of physical API keys that can be used to access an LLM server
type APIKeyGroup struct {
	metav1.TypeMeta `json:",inline"`
	// +k8s:openapi-gen=false
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              APIKeyGroupSpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            APIKeyGroupStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// APIKeyGroupList contains a list of APIKeyGroups
type APIKeyGroupList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []APIKeyGroup `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type APIKeyGroupStorageSpec struct {
	// The type of storage medium. If unspecified, default to database
	Type *APIKeyGroupStorageType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The name of the connection to the storage medium, applicable if using a database.
	// If unspecified, default to the database specified by the tenant of the group
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
}

type APIKeyGroupSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The user-provided description of the LLMServer
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The configuration for the storage of API key metadata
	Storage *APIKeyGroupStorageSpec `json:"storage,omitempty" protobuf:"bytes,3,opt,name=storage"`
	// The collection of LLM servers that can be authorized through the API key group.
	// If empty, all LLM server resources (and their respective model servers) which allow the key group may be accessed
	AllowedServerNames []string `json:"allowedServerNames,omitempty" protobuf:"bytes,4,opt,name=allowedServerNames"`
	// The collection of endpoint names that can be authorized through the API key group.
	// If empty, endpoints will not be restricted by their name
	AllowedEndpointNames []string `json:"allowedEndpointNames,omitempty" protobuf:"bytes,5,opt,name=allowedEndpointNames"`
	// The collection of API keys belonging to the group
	APIKeys []APIKeySpec `json:"apiKeys,omitempty" protobuf:"bytes,6,opt,name=apiKeys"`
}

type Quota struct {
	// The maximum amount of tokens
	Tokens int64 `json:"tokens,omitempty" protobuf:"bytes,1,opt,name=tokens"`
	// The maximum amount of requests
	Requests int64 `json:"requests,omitempty" protobuf:"bytes,2,opt,name=requests"`
	// The maximum approximate cost (in USD)
	Cost float32 `json:"cost,omitempty" protobuf:"bytes,3,opt,name=cost"`
}

// APIKeyQuota defines usage limits for a single API key
type APIKeyQuota struct {
	Quota `json:",inline" protobuf:"bytes,1,opt,name=quota"`
	// The schedule at which usage will reset
	ResetSchedule *catalog.RunSchedule `json:"resetSchedule,omitempty" protobuf:"bytes,2,opt,name=resetSchedule"`
}

// APIKeySpec defines the configuration for a single API key
type APIKeySpec struct {
	// The unique name of the API key
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The collection of LLM servers that can be authorized through the API.
	// If empty, all LLM server resources (and their respective model servers) which allow the key group may be accessed
	AllowedServerNames []string `json:"allowedServerNames,omitempty" protobuf:"bytes,2,opt,name=allowedServerNames"`
	// The collection of endpoint names that can be authorized through the API key.
	// If empty, endpoints will not be restricted by their name
	AllowedEndpointNames []string `json:"allowedEndpointNames,omitempty" protobuf:"bytes,3,opt,name=allowedEndpointNames"`
	// The quota for the API key, which restricts the amount of resources it can consume in a time period
	Quota *APIKeyQuota `json:"quota,omitempty" protobuf:"bytes,4,opt,name=quota"`
}

// APIKeyMetrics contains the metrics for a single API key
type APIKeyMetrics struct {
	// The usage metrics for the current quota period
	Usage *Quota `json:"usage,omitempty" protobuf:"bytes,1,opt,name=usage"`
	// The total amount of tokens served through the key
	TotalTokens int64 `json:"totalTokens,omitempty" protobuf:"bytes,2,opt,name=totalTokens"`
	// The total amount of requests served through the key
	TotalRequests int64 `json:"totalRequests,omitempty" protobuf:"bytes,3,opt,name=totalRequests"`
	// The total cost (in USD) served through the key
	TotalCost float32 `json:"totalCost,omitempty" protobuf:"bytes,4,opt,name=totalCost"`
}

// APIKeyStatus contains the status of a single API key
type APIKeyStatus struct {
	// The unique name of the API key
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The date at which the API key was created
	CreationDate metav1.Time `json:"creationDate,omitempty" protobuf:"bytes,2,opt,name=creationDate"`
	// The date at which the API key was last used
	LastUsedDate *metav1.Time `json:"lastUsedDate,omitempty" protobuf:"bytes,3,opt,name=lastUsedDate"`
	// The date at which a physical key string was last generated for the API key
	GeneratedDate *metav1.Time `json:"generatedDate,omitempty" protobuf:"bytes,4,opt,name=generatedDate"`
	// The time at which the quota limits for the API key were reached
	QuotaExceededDate *metav1.Time `json:"quotaExceededDate,omitempty" protobuf:"bytes,5,opt,name=quotaExceededDate"`
	// The time at which the quota for the key was last reset
	QuotaResetDate *metav1.Time `json:"quotaResetDate,omitempty" protobuf:"bytes,6,opt,name=quotaResetDate"`
	// The metrics collected for the API key
	Metrics *APIKeyMetrics `json:"metrics,omitempty" protobuf:"bytes,7,opt,name=metrics"`
}

type APIKeyGroupStatus struct {
	// ObservedGeneration specifies the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// The name of the connection which metadata for the API keys associated with the group are being stored
	StorageConnectionName string `json:"storageConnectionName,omitempty" protobuf:"varint,2,opt,name=storageConnectionName"`
	// The total amount of tokens served through the group
	TotalTokens int64 `json:"totalTokens,omitempty" protobuf:"bytes,3,opt,name=totalTokens"`
	// The total amount of requests served through the group
	TotalRequests int64 `json:"totalRequests,omitempty" protobuf:"bytes,4,opt,name=totalRequests"`
	// The total cost (in USD) served through the group
	TotalCost int64 `json:"totalCost,omitempty" protobuf:"bytes,5,opt,name=totalCost"`
	// The collection of statuses for all API keys associated with the group
	APIKeys []APIKeyStatus `json:"apiKeys,omitempty" protobuf:"bytes,6,opt,name=apiKeys"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,7,opt,name=updatedAt"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}
