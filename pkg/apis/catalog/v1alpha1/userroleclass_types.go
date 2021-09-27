/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	rbacv1 "k8s.io/api/rbac/v1"
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
	// +kubebuilder:validation:Optional
	Rules []rbacv1.PolicyRule `json:"rules,omitempty" protobuf:"bytes,1,rep,name=rules"`
}
