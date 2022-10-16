/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	team "github.com/metaprov/modelaapi/pkg/apis/team"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (pm *PostMortem) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(pm).
		Complete()
}

func (pm *PostMortem) HasFinalizer() bool {
	return util.HasFin(&pm.ObjectMeta, team.GroupName)
}
func (pm *PostMortem) AddFinalizer() { util.AddFin(&pm.ObjectMeta, team.GroupName) }
func (pm *PostMortem) RemoveFinalizer() {
	util.RemoveFin(&pm.ObjectMeta, team.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (pm *PostMortem) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/connections/%s.yaml", root, pm.ObjectMeta.Name), nil
}

func (pm *PostMortem) RootUri() string {
	return fmt.Sprintf("tenants/%s/postmortems/%s", pm.Namespace, pm.Name)
}

func (pm *PostMortem) ManifestUri() string {
	return fmt.Sprintf("%s/%s-postmortem.yaml", pm.RootUri(), pm.Name)
}

// Merge or update condition
func (pm *PostMortem) CreateOrUpdateCond(cond PostMortemCondition) {
	i := pm.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		pm.Status.Conditions = append(pm.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := pm.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	pm.Status.Conditions[i] = current
}

func (pm *PostMortem) GetCondIdx(t PostMortemConditionType) int {
	for i, v := range pm.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (pm *PostMortem) GetCond(t PostMortemConditionType) PostMortemCondition {
	for _, v := range pm.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return PostMortemCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (pm *PostMortem) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", pm.Namespace, pm.Name)
}

func (pm *PostMortem) MarkReady() {
	pm.CreateOrUpdateCond(PostMortemCondition{
		Type:   PostMortemReady,
		Status: corev1.ConditionTrue,
	})
}

func (pm *PostMortem) MarkArchived() {
	pm.CreateOrUpdateCond(PostMortemCondition{
		Type:   PostMortemSaved,
		Status: corev1.ConditionTrue,
	})
}

func (pm *PostMortem) Archived() bool {
	return pm.GetCond(PostMortemSaved).Status == corev1.ConditionTrue
}
