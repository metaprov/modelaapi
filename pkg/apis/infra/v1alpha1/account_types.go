package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//=======
// Account
//========
// +kubebuilder:validation:Enum="user";"group"
type AccountType string

const (
	User  AccountType = "user"
	Group AccountType = "group"
)

// AccountCondition represents the state of the account
type AccountConditionType string

/// Account Condition
const (
	AccountReady AccountConditionType = "Ready"
	AccountSaved AccountConditionType = "Saved"
)

// AccountCondition describes the state of a account at a certain point.
type AccountCondition struct {
	// Type of account condition.
	Type AccountConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=AccountConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// Account represents a single user on the system or a team that other Accounts can be grouped under
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type",description=""
// +kubebuilder:printcolumn:name="Username",type="string",JSONPath=".spec.username",description=""
// +kubebuilder:printcolumn:name="Team",type="string",JSONPath=".spec.memberOf",description=""
// +kubebuilder:printcolumn:name="Phone",type="string",JSONPath=".spec.phone",description="",priority=1
// +kubebuilder:printcolumn:name="Email",type="string",JSONPath=".spec.email",description="",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=accounts,shortName=acct,singular=account,categories={infra,modela}
type Account struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AccountSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            AccountStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
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
	// Indicates if the Account has admin permissions. Admin accounts have unrestricted access to all resources and
	// full control to modify and create other Accounts
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Admin *bool `json:"admin,omitempty" protobuf:"varint,9,opt,name=admin"`
	// Indicates if the Account is a team account
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Team *bool `json:"team,omitempty" protobuf:"varint,10,opt,name=team"`
	// MemberOf specifies the name of the team that the Account belongs to. An account can belong to one other team Account
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	MemberOf *string `json:"memberOf,omitempty" protobuf:"bytes,11,opt,name=memberOf"`
	// Indicates if an e-mail will be sent to the address specified by the Email field, that notifies the Account owner
	// about the creation of the Account
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	EmailPassword *bool `json:"emailPassword,omitempty" protobuf:"varint,12,opt,name=emailPassword"`
	// Indicates if the Account owner will be prompted to reset their password upon login
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ResetPassword *bool `json:"resetPassword,omitempty" protobuf:"varint,13,opt,name=resetPassword"`
	// The clearance level of the account. Accounts which do not have a clearance level greater than or equal to the
	// clearance level of a DataProduct will not have access to their namespace
	// +kubebuilder:default:=unclassified
	// +kubebuilder:validation:Optional
	ClearenceLevel *catalog.SecurityClearanceLevel `json:"clearenceLevel,omitempty" protobuf:"bytes,17,opt,name=clearenceLevel"`
	// The specification for the Account avatar image
	// +kubebuilder:validation:Optional
	Avatar AvatarSpec `json:"avatar,omitempty" protobuf:"bytes,18,opt,name=avatar"`
	// The collection of DataProduct names that will be displayed with priority on the tenant dashboard for the Account
	// +kubebuilder:validation:Optional
	FavoritesProducts []string `json:"favoriteProducts,omitempty" protobuf:"bytes,19,rep,name=favoriteProducts"`
}

// AccountStatus defines the actual state of the api object
type AccountStatus struct {
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,1,opt,name=lastUpdated"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// In the case of failure, the Account resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// In the case of failure, the Account resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []AccountCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}

// AvatarSpec specifies the location of an avatar for an Account
type AvatarSpec struct {
	// +kubebuilder:default:=""
	// BucketName is the name of the VirtualBucket resource that exists on the same tenant as the Account
	// +kubebuilder:validation:Optional
	BucketName *string `json:"bucketName,omitempty" protobuf:"bytes,1,opt,name=bucketName"`
	// Path specifies the path to an image file on the VirtualBucket (e.g. a PNG file)
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Path *string `json:"path,omitempty" protobuf:"bytes,2,opt,name=path"`
}
