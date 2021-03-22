package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type AccountRoleBinding struct {
	// Entity is the name of the entity, can be a product name,lab name or serving site name
	Entity string `json:"entity,omitempty" protobuf:"bytes,1,opt,name=entity"`
	// The role in relation to the entity.
	Role catalog.RoleName `json:"role,omitempty" protobuf:"bytes,2,opt,name=role"`
}

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
	AccountReady    AccountConditionType = "Ready"
	AccountArchived AccountConditionType = "Archived"
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

// Account represents a user or team in the system
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Username",type="string",JSONPath=".spec.userName",description=""
// +kubebuilder:printcolumn:name="Phone",type="string",JSONPath=".spec.phone",description=""
// +kubebuilder:printcolumn:name="Email",type="string",JSONPath=".spec.email",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=accounts,shortName=act,singular=account,categories={infra,modeld}
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

// AccountSpec defines the desired state of Account
type AccountSpec struct {
	// TenantRef is the account tenant
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,opt,name=tenantRef"`
	// GroupName is a reference to the group account
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	GroupName *string `json:"groupName,omitempty" protobuf:"bytes,2,opt,name=groupName"`
	// Type is the type of account - user, group. default is user
	// +kubebuilder:default:=user
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	Type *AccountType `json:"type,omitempty" protobuf:"bytes,3,opt,name=type,casttype=AccountType"`
	// UserName specifies the name of the account
	// +kubebuilder:validation:MinLength=4
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Required
	UserName *string `json:"userName,omitempty" protobuf:"bytes,4,opt,name=username"`
	// First FileName is the user first name
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=64
	FirstName *string `json:"firstName,omitempty" protobuf:"bytes,5,opt,name=firstName"`
	// LastName is the user last name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Optional
	LastName *string `json:"lastName,omitempty" protobuf:"bytes,6,opt,name=lastName"`
	// Email specify the email of the user
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Required
	Email *string `json:"email,omitempty" protobuf:"bytes,7,opt,name=email"`
	// Phone specify the phone of the user
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:MaxLength=64
	Phone *string `json:"phone,omitempty" protobuf:"bytes,8,opt,name=phone"`
	// User is admin. Admin have full control on other accounts.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	Admin *bool `json:"admin,omitempty" protobuf:"bytes,9,opt,name=admin"`
	// Email account creation event to user (using the user email)
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	EmailPassword *bool `json:"emailPassword,omitempty" protobuf:"bytes,10,opt,name=emailPassword"`
	// User need to reset password upon login
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ResetPassword *bool `json:"resetPassword,omitempty" protobuf:"bytes,11,opt,name=resetPassword"`
	// ProductBinding is the premission that the user have for each product
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	ProductBindings []AccountRoleBinding `json:"productBindings,omitempty" protobuf:"bytes,12,rep,name=productBindings"`
	// LabBinding is the RBAC roles that the user have within each lab
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	LabBindings []AccountRoleBinding `json:"labBindings,omitempty" protobuf:"bytes,13,rep,name=labBindings"`
	// SiteBindings is the RBAC roles that the user have within each serving site.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Optional
	SiteBindings []AccountRoleBinding `json:"siteBindings,omitempty" protobuf:"bytes,14,rep,name=siteBindings"`
}

// AccountStatus defines the actual state of the api object
type AccountStatus struct {
	// Represents the latest available observations of a account state.
	//+optional
	Conditions []AccountCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
