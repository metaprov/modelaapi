/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/data"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	rbacv1 "k8s.io/api/rbac/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (r *DataProduct) HasFinalizer() bool {
	return util.HasFin(&r.ObjectMeta, data.GroupName)
}
func (r *DataProduct) AddFinalizer() { util.AddFin(&r.ObjectMeta, data.GroupName) }
func (r *DataProduct) RemoveFinalizer() {
	util.RemoveFin(&r.ObjectMeta, data.GroupName)
}

func (r *DataProduct) CreateNamespace() *v1.Namespace {
	namespace := &v1.Namespace{}
	namespace.ObjectMeta.Name = r.ObjectMeta.Name
	return namespace
}

func (r *DataProduct) IsClassification() bool {
	return *r.Spec.Task == catalog.BinaryClassification || *r.Spec.Task == catalog.MultiClassification
}

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (r *DataProduct) CreateOrUpdateCond(cond DataProductCondition) {
	i := r.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		r.Status.Conditions = append(r.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := r.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	r.Status.Conditions[i] = current
}

func (r *DataProduct) GetCondIdx(t DataProductConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *DataProduct) GetCond(t DataProductConditionType) DataProductCondition {
	for _, v := range r.Status.Conditions {
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

func (r *DataProduct) IsReady() bool {
	return r.GetCond(DataProductReady).Status == v1.ConditionTrue
}

func (r *DataProduct) YamlUri() string {
	return fmt.Sprintf("tenants/%s/dataproducts/%s/%s-dataproduct.yaml", r.Namespace, r.Name, r.Name)
}

func (r *DataProduct) PrefixLiveUri(uri string) string {
	return fmt.Sprintf("modeld/live/tenants/%s/%s", r.Namespace, uri)
}

func (r *DataProduct) PrefixDepotUri(uri string) string {
	return fmt.Sprintf("modeld/depot/tenants/%s/%s", r.Namespace, uri)
}

func (r *DataProduct) PrefixArchiveUri(uri string) string {
	return fmt.Sprintf("modeld/archive/tenants/%s/%s", r.Namespace, uri)
}

func ParseDataProductYaml(content []byte) (*DataProduct, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DataProduct)
	return r, nil
}

func (r *DataProduct) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

// DataEnv product roles
func (r *DataProduct) ProductAdmin() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "r-admin",
			Namespace: r.Name,
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
func (r *DataProduct) DataScientist() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "data-scientist",
			Namespace: r.Name,
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
func (r *DataProduct) DataEngineer() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "data-engineer",
			Namespace: r.Name,
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
func (r *DataProduct) DataLabler() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "data-label",
			Namespace: r.Name,
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
func (r *DataProduct) PredictionConsumer() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "prediction-consumer",
			Namespace: r.Name,
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
func (r *DataProduct) ReportConsumer() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "report-consumer",
			Namespace: r.Name,
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

func (version *DataProduct) MarkSaved() {
	version.CreateOrUpdateCond(DataProductCondition{
		Type:   DataProductSaved,
		Status: v1.ConditionTrue,
	})
}

func (p *DataProduct) IsSaved() bool {
	return p.GetCond(DataProductSaved).Status == v1.ConditionTrue
}

func (p *DataProduct) MarkFailed(err error) {
	p.CreateOrUpdateCond(DataProductCondition{
		Type:    DataProductReady,
		Status:  v1.ConditionFalse,
		Reason:  "IsFailed",
		Message: err.Error(),
	})
}
