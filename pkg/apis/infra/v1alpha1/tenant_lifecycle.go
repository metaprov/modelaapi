/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	v1 "k8s.io/api/core/v1"

	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// Finilizer
//==============================================================================

func (tenant *Tenant) HasFinalizer() bool { return util.HasFin(&tenant.ObjectMeta, infra.GroupName) }
func (tenant *Tenant) AddFinalizer()      { util.AddFin(&tenant.ObjectMeta, infra.GroupName) }
func (tenant *Tenant) RemoveFinalizer()   { util.RemoveFin(&tenant.ObjectMeta, infra.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

func (tenant Tenant) RootURI() string {
	return fmt.Sprintf("tenants/%s", tenant.Name)
}

func (tenant Tenant) ManifestURI() string {
	return fmt.Sprintf("%s/%s-tenant.yaml", tenant.RootURI(), tenant.Name)
}

func (tenant Tenant) PrefixLiveURI() string {
	return fmt.Sprintf("%s/%s-tenant.yaml", tenant.RootURI(), tenant.Name)
}

// Merge or update condition
func (tenant *Tenant) CreateOrUpdateCond(cond metav1.Condition) {
	i := tenant.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		tenant.Status.Conditions = append(tenant.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := tenant.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	tenant.Status.Conditions[i] = current
}

func (tenant Tenant) GetCondIdx(t string) int {
	for i, v := range tenant.Status.Conditions {
		if v.Type == string(t) {
			return i
		}
	}
	return -1
}

func (tenant Tenant) GetCond(t string) metav1.Condition {
	for _, v := range tenant.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (tenant Tenant) IsReady() bool {
	return tenant.GetCond(string(TenantReady)).Status == metav1.ConditionTrue
}

func (tenant Tenant) IsMetricDatabaseReady() bool {
	return tenant.GetCond(string(TenantMetricDatabaseReady)).Status == metav1.ConditionTrue
}

func (tenant Tenant) Key() string {
	return fmt.Sprintf("%s/%s/%s", "tenants", tenant.Namespace, tenant.Name)
}

func ParseTenantYaml(content []byte) (*Tenant, error) {

	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Tenant)
	return r, nil
}

// Set up the webhook with the manager.
func (r *Tenant) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

// populate an empty tenant
func (tenant *Tenant) Populate(name string) {
	tenant.ObjectMeta = metav1.ObjectMeta{
		Name:      name,
		Namespace: "modela-system",
	}

	tenant.Default()

}

func (tenant *Tenant) MarkReady() {
	tenant.CreateOrUpdateCond(metav1.Condition{
		Type:   string(TenantReady),
		Status: metav1.ConditionTrue,
		Reason: string(TenantReady),
	})
}

func (tenant *Tenant) MarkDatabaseReady() {
	tenant.CreateOrUpdateCond(metav1.Condition{
		Type:   string(TenantMetricDatabaseReady),
		Status: metav1.ConditionTrue,
		Reason: string(TenantMetricDatabaseReady),
	})
}

func (tenant Tenant) GetRolesForAccount(account *Account) []string {
	result := make([]string, 0)
	for _, v := range tenant.Spec.Permissions.Accounts {
		if v.AccountName == account.Name {
			for _, x := range v.Roles {
				result = append(result, x.Name)
			}
		}
	}
	return result
}

func (tenant Tenant) DefaultLabRef() *v1.ObjectReference {
	return &v1.ObjectReference{
		Name:      *tenant.Spec.DefaultLabName,
		Namespace: tenant.Name,
	}
}

func (tenant Tenant) DefaultServingSiteRef() *v1.ObjectReference {
	return &v1.ObjectReference{
		Name:      *tenant.Spec.DefaultServingSiteName,
		Namespace: tenant.Name,
	}
}

func (tenant Tenant) GetStatus() proto.Message {
	return &tenant.Status
}

func (tenant Tenant) GetObservedGeneration() int64 {
	return tenant.Status.ObservedGeneration
}

func (tenant *Tenant) SetObservedGeneration(generation int64) {
	tenant.Status.ObservedGeneration = generation
}

func (tenant *Tenant) SetUpdatedAt(time *metav1.Time) {
	tenant.Status.UpdatedAt = time
}

func (tenant *Tenant) SetStatus(status interface{}) {
	tenant.Status = *status.(*TenantStatus)
}
