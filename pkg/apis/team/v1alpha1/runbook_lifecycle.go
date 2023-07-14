/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"

	team "github.com/metaprov/modelaapi/pkg/apis/team"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (pm *RunBook) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(pm).
		Complete()
}

//==============================================================================
//  Finalizer
//==============================================================================

func (runbook *RunBook) HasFinalizer() bool {
	return util.HasFin(&runbook.ObjectMeta, team.GroupName)
}
func (runbook *RunBook) AddFinalizer() { util.AddFin(&runbook.ObjectMeta, team.GroupName) }
func (runbook *RunBook) RemoveFinalizer() {
	util.RemoveFin(&runbook.ObjectMeta, team.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (runbook *RunBook) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/runbooks/%s-runbook.yaml", root, runbook.ObjectMeta.Name), nil
}

func (runbook *RunBook) RootURI() string {
	return fmt.Sprintf("tenants/%s/runbooks/%s", runbook.Namespace, runbook.Name)
}

func (runbook *RunBook) ManifestURI() string {
	return fmt.Sprintf("%s/%s-runbook.yaml", runbook.RootURI(), runbook.Name)
}

// Merge or update condition
func (runbook *RunBook) CreateOrUpdateCond(cond RunBookCondition) {
	i := runbook.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		runbook.Status.Conditions = append(runbook.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := runbook.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastUpdateTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	runbook.Status.Conditions[i] = current
}

func (runbook *RunBook) GetCondIdx(t RunBookConditionType) int {
	for i, v := range runbook.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (runbook *RunBook) GetCond(t RunBookConditionType) RunBookCondition {
	for _, v := range runbook.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return RunBookCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (runbook *RunBook) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", runbook.Namespace, runbook.Name)
}

func (runbook *RunBook) MarkReady() {
	runbook.CreateOrUpdateCond(RunBookCondition{
		Type:   RunBookReady,
		Status: corev1.ConditionTrue,
	})
}

func (runbook *RunBook) MarkSaved() {
	runbook.CreateOrUpdateCond(RunBookCondition{
		Type:   RunBookSaved,
		Status: corev1.ConditionTrue,
	})
}

func (runbook *RunBook) Saved() bool {
	return runbook.GetCond(RunBookSaved).Status == corev1.ConditionTrue
}

func (runbook RunBook) GetStatus() proto.Message {
	return &runbook.Status
}

func (runbook RunBook) GetObservedGeneration() int64 {
	return runbook.Status.ObservedGeneration
}

func (runbook RunBook) SetObservedGeneration(generation int64) {
	runbook.Status.ObservedGeneration = generation
}

func (runbook RunBook) SetUpdatedAt(time *metav1.Time) {
	runbook.Status.LastUpdated = time
}

func (runbook *RunBook) SetStatus(status interface{}) {
	runbook.Status = *status.(*RunBookStatus)
}
