/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/common"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// UserRoleClass specify the RBAC premission for a specific user role.
// +kubebuilder:resource:path=userroleclasses,singular=userroleclass,categories={infra,modela,all}
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
	// The owner of the user role class
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,1,name=tenantRef"`
	// The description of the user role class.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Owner of the bucket
	// +kubebuilder:default:="admin"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,3,opt,name=owner"`
	// +kubebuilder:validation:Optional
	Rules []RuleSpec `json:"rules,omitempty" protobuf:"bytes,4,rep,name=rules"`
}

// RuleSpec define the relation between a resource and the actions on the resource.
type RuleSpec struct {
	// The name of the resource
	Resource common.KindName `json:"resource,omitempty" protobuf:"bytes,1,opt,name=resource"`
	// List of allowed actions on the resource
	Verbs []common.VerbName `json:"verbs,omitempty" protobuf:"bytes,2,rep,name=verbs"`
}

func (role *UserRoleClass) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(role)
}

func (role *UserRoleClass) Allow(
	action common.VerbName,
	resource common.KindName,
	subject string,
	ns string,
	name string) bool {
	for _, v := range role.Spec.Rules {
		if resource == v.Resource {
			for _, verb := range v.Verbs {
				if action == verb || verb == "*" {
					return true
				}
			}
		}
	}
	return false
}
