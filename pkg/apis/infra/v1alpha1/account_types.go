package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// =======
// Account
// ========
// +kubebuilder:validation:Enum="user";"group"
type AccountType string

const (
	User  AccountType = "user"
	Group AccountType = "group"
)

// AccountCondition represents the state of the account
type AccountConditionType string

// / Account Condition
const (
	AccountReady AccountConditionType = "Ready"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=accounts,shortName=acct,singular=account,categories={infra,modela}
// +kubebuilder:subresource:status
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type",description=""
// +kubebuilder:printcolumn:name="Username",type="string",JSONPath=".spec.username",description=""
// +kubebuilder:printcolumn:name="Team",type="string",JSONPath=".spec.memberOf",description=""
// +kubebuilder:printcolumn:name="Phone",type="string",JSONPath=".spec.phone",description="",priority=1
// +kubebuilder:printcolumn:name="Email",type="string",JSONPath=".spec.email",description="",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Account represents a single user on the system or a team that other Accounts can be grouped under
type Account struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AccountSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status AccountStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// AccountList represent list of accounts.
type AccountList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Account `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// AccountSpec defines the desired state of an Account
type AccountSpec struct {
	// The reference to the tenant which the object exists under
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,opt,name=tenantRef"`
	// The type of Account, which can be a user or a group
	// +kubebuilder:default:=user
	// +kubebuilder:validation:Optional
	Type *AccountType `json:"type,omitempty" protobuf:"bytes,3,opt,name=type,casttype=AccountType"`
	// The username of the account, which can be used to log into Modela
	// +kubebuilder:validation:MinLength=4
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Required
	// +required
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// The first name of the person using the Account
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=64
	FirstName *string `json:"firstName,omitempty" protobuf:"bytes,5,opt,name=firstName"`
	// The last name of the person using the Account
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Optional
	LastName *string `json:"lastName,omitempty" protobuf:"bytes,6,opt,name=lastName"`
	// The e-mail address of the person using the Account
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Required
	// +required
	Email *string `json:"email,omitempty" protobuf:"bytes,7,opt,name=email"`
	// The phone number of the person using the Account
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=64
	Phone *string `json:"phone,omitempty" protobuf:"bytes,8,opt,name=phone"`
	// Indicates if the Account has admin permissions. Admin accounts have unrestricted access
	// to all resources and full control to modify and create other Accounts
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Admin *bool `json:"admin,omitempty" protobuf:"varint,9,opt,name=admin"`
	// MemberOf specifies the name of the team that the Account belongs to.
	// The Account will assume all the permissions of the parent Account
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	MemberOf *string `json:"memberOf,omitempty" protobuf:"bytes,11,opt,name=memberOf"`
	// Indicates if the Account will be prompted to reset their password upon login
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ResetPassword *bool `json:"resetPassword,omitempty" protobuf:"varint,13,opt,name=resetPassword"`
	// Avatar specifies the location of the Account's avatar image
	// +kubebuilder:validation:Optional
	Avatar *catalog.FileLocation `json:"avatar,omitempty" protobuf:"bytes,18,opt,name=avatar"`
	// The collection of DataProduct names that will be displayed with priority on the tenant dashboard for the Account
	// +kubebuilder:validation:Optional
	FavoriteProducts []string `json:"favoriteProducts,omitempty" protobuf:"bytes,19,rep,name=favoriteProducts"`
}

// AccountStatus defines the actual state of the api object
type AccountStatus struct {
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,1,opt,name=updatedAt"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// In the case of failure, the Account resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// In the case of failure, the Account resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// Total models owned by this user
	//+kubebuilder:validation:Optional
	ModelsCount int32 `json:"modelsCount,omitempty" protobuf:"bytes,5,opt,name=modelsCount"`
	// Total model classes owned by this user
	//+kubebuilder:validation:Optional
	ModelClassesCount int32 `json:"modelClassessCount,omitempty" protobuf:"bytes,6,opt,name=modelClassesCount"`
	// Total number of feature groups that this user is owner of.
	//+kubebuilder:validation:Optional
	PredictorsCounts int32 `json:"predictorsCount,omitempty" protobuf:"bytes,7,opt,name=predictorsCount"`
	// Total number of feature groups that this user is responsible for.
	//+kubebuilder:validation:Optional
	FeatureGroupsCount int32 `json:"featureGroupsCount,omitempty" protobuf:"bytes,8,opt,name=featureGroupsCount"`
	// Total number of feature groups that this user is responsible for.
	//+kubebuilder:validation:Optional
	DatasetsCount int32 `json:"datasetsCount,omitempty" protobuf:"bytes,9,opt,name=datasetsCount"`
	// If the Account is a group account, the total number of Accounts that exist under the group
	//+kubebuilder:validation:Optional
	MembersCount int32 `json:"membersCount,omitempty" protobuf:"bytes,10,opt,name=membersCount"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,11,rep,name=conditions"`
}
