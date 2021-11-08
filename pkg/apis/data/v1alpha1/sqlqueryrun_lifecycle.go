/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (r *SqlQueryRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (r *SqlQueryRun) HasFinalizer() bool { return util.HasFin(&r.ObjectMeta, data.GroupName) }
func (r *SqlQueryRun) AddFinalizer()      { util.AddFin(&r.ObjectMeta, data.GroupName) }
func (r *SqlQueryRun) RemoveFinalizer()   { util.RemoveFin(&r.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (r *SqlQueryRun) CreateOrUpdateCond(cond SqlQueryRunCondition) {
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

func (r *SqlQueryRun) GetCondIdx(t SqlQueryRunConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *SqlQueryRun) GetCond(t SqlQueryRunConditionType) SqlQueryRunCondition {
	for _, v := range r.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return SqlQueryRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *SqlQueryRun) IsReady() bool {
	return r.GetCond(SqlQueryRunReady).Status == v1.ConditionTrue
}

func (r *SqlQueryRun) Populate(name string) {

	r.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modela-data",
	}

	r.Spec = SqlQueryRunSpec{
		VersionName: util.StrPtr("iris-0.0.1"),
	}
}

func (r *SqlQueryRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

func (r *SqlQueryRun) IsInCond(ct SqlQueryRunConditionType) bool {
	current := r.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (r *SqlQueryRun) PrintConditions() {
	for _, v := range r.Status.Conditions {
		fmt.Println(v)
	}
}

func (r *SqlQueryRun) MarkReady() {
	r.CreateOrUpdateCond(SqlQueryRunCondition{
		Type:   SqlQueryRunReady,
		Status: v1.ConditionTrue,
	})
}

func (r *SqlQueryRun) Deleted() bool {
	return !r.ObjectMeta.DeletionTimestamp.IsZero()
}

func (r *SqlQueryRun) MarkSaved() {
	r.CreateOrUpdateCond(SqlQueryRunCondition{
		Type:   SqlQueryRunSaved,
		Status: v1.ConditionTrue,
	})
}

func (r *SqlQueryRun) IsSaved() bool {
	return r.GetCond(SqlQueryRunSaved).Status == v1.ConditionTrue
}
