/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	rbacv1 "k8s.io/api/rbac/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (product DataProduct) HasFinalizer() bool {
	return util.HasFin(&product.ObjectMeta, data.GroupName)
}
func (product *DataProduct) AddFinalizer() { util.AddFin(&product.ObjectMeta, data.GroupName) }
func (product *DataProduct) RemoveFinalizer() {
	util.RemoveFin(&product.ObjectMeta, data.GroupName)
}

func (product DataProduct) CreateNamespace() *v1.Namespace {
	namespace := &v1.Namespace{}
	namespace.ObjectMeta.Name = product.ObjectMeta.Name
	return namespace
}

func (product DataProduct) IsClassification() bool {
	return *product.Spec.Task == catalog.BinaryClassification || *product.Spec.Task == catalog.MultiClassification
}

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (product *DataProduct) CreateOrUpdateCondition(cond metav1.Condition) {
	i := product.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		product.Status.Conditions = append(product.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := product.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	product.Status.Conditions[i] = current
}

func (product DataProduct) GetConditionIndex(t string) int {
	for i, v := range product.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (product DataProduct) GetCondition(t DataProductConditionType) metav1.Condition {
	for _, v := range product.Status.Conditions {
		if v.Type == string(t) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(t),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (product DataProduct) NamespaceReady() bool {
	return product.GetCondition(DataProductNamespaceReady).Status == metav1.ConditionTrue
}

func (product DataProduct) YamlURI() string {
	return fmt.Sprintf("tenants/%s/dataproducts/%s/%s-dataproduct.yaml", product.Namespace, product.Name, product.Name)
}

func (product DataProduct) PrefixLiveURI(uri string) string {
	return fmt.Sprintf("modela/live/tenants/%s/%s", product.Namespace, uri)
}

func (product DataProduct) PrefixDepotURI(uri string) string {
	return fmt.Sprintf("modela/depot/tenants/%s/%s", product.Namespace, uri)
}

func (product DataProduct) PrefixArchiveURI(uri string) string {
	return fmt.Sprintf("modela/archive/tenants/%s/%s", product.Namespace, uri)
}

func (dataproduct *DataProduct) MarkRbacNotReady(reason string, message string) {
	dataproduct.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DataProductRbacReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (dataproduct *DataProduct) MarkNamespaceNotReady(reason string, message string) {
	dataproduct.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(DataProductNamespaceReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (dataproduct *DataProduct) MarkRbacReady() {
	dataproduct.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DataProductRbacReady),
		Status: metav1.ConditionTrue,
		Reason: string(DataProductRbacReady),
	})
}

func (dataproduct *DataProduct) MarkNamespaceReady() {
	dataproduct.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(DataProductNamespaceReady),
		Status: metav1.ConditionTrue,
		Reason: string(DataProductNamespaceReady),
	})
}

func (product *DataProduct) GetRolesForAccount(account *infra.Account) []string {
	result := make([]string, 0)
	for _, v := range product.Spec.Permissions.Accounts {
		if v.AccountName == account.Name {
			for _, x := range v.Roles {
				result = append(result, x.Name)
			}
		}
	}
	return result
}

func (product DataProduct) DataProductRole() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.DataProductJobRunnerRole,
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{"create"},
				APIGroups:       []string{"inference.modela.ai", "data.modela.ai", "training.modela.ai"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (product DataProduct) DataProductRoleBinding() *rbacv1.RoleBinding {
	return &rbacv1.RoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.DataProductJobRunnerRoleBinding,
			Namespace: product.Name,
		},
		Subjects: []rbacv1.Subject{
			{
				Kind:      "ServiceAccount",
				APIGroup:  "",
				Name:      catalog.DataProductJobRunnerSa,
				Namespace: product.Name,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "Role",
			Name:     catalog.DataProductJobRunnerRole,
		},
	}
}

func (product DataProduct) DataProductServiceAccount() *v1.ServiceAccount {
	return &v1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.DataProductJobRunnerSa,
			Namespace: product.Name,
		},
	}
}

func (dataproduct DataProduct) GetStatus() proto.Message {
	return &dataproduct.Status
}

func (dataproduct DataProduct) GetObservedGeneration() int64 {
	return dataproduct.Status.ObservedGeneration
}

func (dataproduct *DataProduct) SetObservedGeneration(generation int64) {
	dataproduct.Status.ObservedGeneration = generation
}

func (dataproduct *DataProduct) SetUpdatedAt(time *metav1.Time) {
	dataproduct.Status.UpdatedAt = time
}

func (dataproduct *DataProduct) SetStatus(status interface{}) {
	dataproduct.Status = *status.(*DataProductStatus)
}
