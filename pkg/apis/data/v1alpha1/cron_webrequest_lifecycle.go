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

func (r *CronWebRequest) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (r *CronWebRequest) HasFinalizer() bool { return util.HasFin(&r.ObjectMeta, data.GroupName) }
func (r *CronWebRequest) AddFinalizer()      { util.AddFin(&r.ObjectMeta, data.GroupName) }
func (r *CronWebRequest) RemoveFinalizer()   { util.RemoveFin(&r.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (r *CronWebRequest) CreateOrUpdateCond(cond CronWebRequestCondition) {
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

func (r *CronWebRequest) GetCondIdx(t CronWebRequestConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *CronWebRequest) GetCond(t CronWebRequestConditionType) CronWebRequestCondition {
	for _, v := range r.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return CronWebRequestCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *CronWebRequest) IsReady() bool {
	return r.GetCond(CronWebRequestReady).Status == v1.ConditionTrue
}

func (r *CronWebRequest) Populate(name string) {

	r.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modela-data",
	}

	r.Spec = CronWebRequestSpec{
		VersionName: util.StrPtr("iris-0.0.1"),
	}
}

func (r *CronWebRequest) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

func (r *CronWebRequest) IsInCond(ct CronWebRequestConditionType) bool {
	current := r.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (r *CronWebRequest) PrintConditions() {
	for _, v := range r.Status.Conditions {
		fmt.Println(v)
	}
}

func (r *CronWebRequest) MarkReady() {
	r.CreateOrUpdateCond(CronWebRequestCondition{
		Type:   CronWebRequestReady,
		Status: v1.ConditionTrue,
	})
}

func (r *CronWebRequest) Deleted() bool {
	return !r.ObjectMeta.DeletionTimestamp.IsZero()
}

func (r *CronWebRequest) MarkSaved() {
	r.CreateOrUpdateCond(CronWebRequestCondition{
		Type:   CronWebRequestSaved,
		Status: v1.ConditionTrue,
	})
}

func (r *CronWebRequest) IsSaved() bool {
	return r.GetCond(CronWebRequestSaved).Status == v1.ConditionTrue
}
