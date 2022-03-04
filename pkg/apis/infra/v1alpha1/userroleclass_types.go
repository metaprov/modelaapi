/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/common"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
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
	Resource common.KindName `json:"resource,omitempty" protobuf:"bytes,1,opt,name=resource"`
	// List of allowed actions on the resource
	Actions []common.VerbName `json:"actions,omitempty" protobuf:"bytes,2,rep,name=actions"`
}

func (role *UserRoleClass) Allow(
	action common.VerbName,
	resource common.KindName,
	subject string,
	ns string,
	name string) {
	for _, v := range role.Spec.Permissions {
		if resource == v.Resource {
			for _, a := range v.Actions {
				if action == a {
					return true
				}
			}
		}
	}
	return false
}
