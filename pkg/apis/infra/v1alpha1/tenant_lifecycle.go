/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
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

func (tenant *Tenant) RootUri() string {
	return fmt.Sprintf("tenants/%s", tenant.Name)
}

func (tenant *Tenant) ManifestUri() string {
	return fmt.Sprintf("%s/%s-tenant.yaml", tenant.RootUri(), tenant.Name)
}

// Merge or update condition
func (tenant *Tenant) CreateOrUpdateCond(cond TenantCondition) {
	i := tenant.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		tenant.Status.Conditions = append(tenant.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := tenant.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	tenant.Status.Conditions[i] = current
}

func (tenant *Tenant) GetCondIdx(t TenantConditionType) int {
	for i, v := range tenant.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (tenant *Tenant) GetCond(t TenantConditionType) TenantCondition {
	for _, v := range tenant.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return TenantCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (tenant *Tenant) IsReady() bool {
	return tenant.GetCond(TenantReady).Status == v1.ConditionTrue
}

func (tenant *Tenant) Key() string {
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

//Set up the webhook with the manager.
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
	tenant.Spec = TenantSpec{
		DefaultLabRef:         nil,
		DefaultServingSiteRef: nil,
	}
	tenant.Default()

}

func (tenant *Tenant) MarkReady() {
	tenant.CreateOrUpdateCond(TenantCondition{
		Type:   TenantReady,
		Status: v1.ConditionTrue,
	})
}

func (tenant *Tenant) MarkArchived() {
	tenant.CreateOrUpdateCond(TenantCondition{
		Type:   TenantSaved,
		Status: v1.ConditionTrue,
	})
}

func (tenant *Tenant) Archived() bool {
	return tenant.GetCond(TenantSaved).Status == v1.ConditionTrue
}

func (tenant *Tenant) GetRolesForAccount(account *Account) []string {
	result := make([]string, 0)
	for _, v := range tenant.Spec.Permissions.Stakeholders {
		if v.AccountName == account.Name {
			for _, x := range v.Roles {
				result = append(result, x.Name)
			}
		}
	}
	return result
}
