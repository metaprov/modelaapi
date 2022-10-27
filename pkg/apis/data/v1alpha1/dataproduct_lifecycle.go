/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

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
func (product *DataProduct) CreateOrUpdateCond(cond DataProductCondition) {
	i := product.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		product.Status.Conditions = append(product.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := product.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	product.Status.Conditions[i] = current
}

func (product DataProduct) GetCondIdx(t DataProductConditionType) int {
	for i, v := range product.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (product DataProduct) GetCond(t DataProductConditionType) DataProductCondition {
	for _, v := range product.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DataProductCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (product DataProduct) IsReady() bool {
	return product.GetCond(DataProductReady).Status == v1.ConditionTrue
}

func (product DataProduct) YamlUri() string {
	return fmt.Sprintf("tenants/%s/dataproducts/%s/%s-dataproduct.yaml", product.Namespace, product.Name, product.Name)
}

func (product DataProduct) PrefixLiveUri(uri string) string {
	return fmt.Sprintf("modela/live/tenants/%s/%s", product.Namespace, uri)
}

func (product DataProduct) PrefixDepotUri(uri string) string {
	return fmt.Sprintf("modela/depot/tenants/%s/%s", product.Namespace, uri)
}

func (product DataProduct) PrefixArchiveUri(uri string) string {
	return fmt.Sprintf("modela/archive/tenants/%s/%s", product.Namespace, uri)
}

// DataEnv product roles
func (product DataProduct) ProductAdmin() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "product-admin",
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// DataScientist role
func (product DataProduct) DataScientist() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "data-scientist",
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// DataEngineer role
func (product DataProduct) DataEngineer() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "data-engineer",
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// Labeler role
func (product DataProduct) DataLabler() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "data-label",
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}

}

// PredictionConsumer role
func (product DataProduct) PredictionConsumer() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "prediction-consumer",
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}

}

// ReportsConsumer role
func (product DataProduct) ReportConsumer() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "report-consumer",
			Namespace: product.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (product *DataProduct) MarkSaved() {
	product.CreateOrUpdateCond(DataProductCondition{
		Type:   DataProductSaved,
		Status: v1.ConditionTrue,
	})
}

func (product *DataProduct) IsSaved() bool {
	return product.GetCond(DataProductSaved).Status == v1.ConditionTrue
}

func (product *DataProduct) MarkFailed(err error) {
	product.CreateOrUpdateCond(DataProductCondition{
		Type:    DataProductReady,
		Status:  v1.ConditionFalse,
		Reason:  "Failed",
		Message: err.Error(),
	})
}

func (product *DataProduct) MarkReady() {
	product.CreateOrUpdateCond(DataProductCondition{
		Type:   DataProductReady,
		Status: v1.ConditionTrue,
	})
}

func (product *DataProduct) GetRolesForAccount(account *infra.Account) []string {
	result := make([]string, 0)
	for _, v := range product.Spec.Permissions.Stakeholders {
		if v.AccountName == account.Name {
			for _, x := range v.Roles {
				result = append(result, x.Name)
			}
		}
	}
	return result
}

func (product *DataProduct) UpdateBaselineVersion(versions DataProductVersionList) {
	for _, v := range versions.Items {
		if *v.Spec.Baseline {
			product.Status.BaselineVersion = &v.Name
		}
	}
}
