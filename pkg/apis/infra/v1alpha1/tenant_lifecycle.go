/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

/////// Finalizers ///////

func (tenant *Tenant) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(tenant).
		Complete()
}

func (tenant *Tenant) HasFinalizer() bool { return util.HasFin(&tenant.ObjectMeta, infra.GroupName) }
func (tenant *Tenant) AddFinalizer()      { util.AddFin(&tenant.ObjectMeta, infra.GroupName) }
func (tenant *Tenant) RemoveFinalizer()   { util.RemoveFin(&tenant.ObjectMeta, infra.GroupName) }

/////// Conditions ///////

func (tenant *Tenant) Deleted() bool {
	return !tenant.ObjectMeta.DeletionTimestamp.IsZero()
}

func (tenant *Tenant) RootURI() string {
	return fmt.Sprintf("tenants/%s", tenant.Name)
}

func (tenant *Tenant) CreateOrUpdateCondition(condition metav1.Condition) {
	i := tenant.GetConditionIndex(condition.Type)
	now := metav1.Now()
	if i == -1 { // not found
		condition.LastTransitionTime = now
		tenant.Status.Conditions = append(tenant.Status.Conditions, condition)
		return
	}
	// else we already have the condition, update it
	current := tenant.Status.Conditions[i]
	current.Message = condition.Message
	current.Reason = condition.Reason
	current.LastTransitionTime = now
	if current.Status != condition.Status {
		current.Status = condition.Status
	}
	tenant.Status.Conditions[i] = current
}

func (tenant *Tenant) GetConditionIndex(t string) int {
	for i, v := range tenant.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (tenant *Tenant) GetCondition(cond TenantConditionType) metav1.Condition {
	for _, v := range tenant.Status.Conditions {
		if v.Type == string(cond) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(cond),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

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

/////// Ready Condition ///////

func (tenant *Tenant) Ready() bool {
	return tenant.GetCondition(TenantReady).Status == metav1.ConditionTrue
}

func (tenant *Tenant) MarkReady() {
	tenant.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(TenantReady),
		Status: metav1.ConditionTrue,
		Reason: string(TenantReady),
	})
}

func (tenant *Tenant) MarkReadyFailed(reason string, err string) {
	tenant.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(TenantReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// Metric Database Ready Condition ///////

func (tenant *Tenant) MetricDatabaseReady() bool {
	return tenant.GetCondition(TenantMetricDatabaseReady).Status == metav1.ConditionTrue
}

func (tenant *Tenant) MarkMetricDatabaseReady() {
	tenant.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(TenantMetricDatabaseReady),
		Status: metav1.ConditionTrue,
		Reason: string(TenantMetricDatabaseReady),
	})
}

func (tenant *Tenant) MarkMetricDatabaseFailed(reason string, err string) {
	tenant.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(TenantMetricDatabaseReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// Permissions ///////

func (tenant *Tenant) GetRolesForAccount(account *Account) []string {
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

/////// Reconciler Methods ///////

func (tenant *Tenant) GetStatus() proto.Message {
	return &tenant.Status
}

func (tenant *Tenant) GetObservedGeneration() int64 {
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
