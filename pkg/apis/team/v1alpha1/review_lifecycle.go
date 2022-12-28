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
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (review *Review) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(review).
		Complete()
}

//==============================================================================
//  Finalizer
//==============================================================================

func (conv *Review) HasFinalizer() bool {
	return util.HasFin(&conv.ObjectMeta, team.GroupName)
}
func (conv *Review) AddFinalizer() { util.AddFin(&conv.ObjectMeta, team.GroupName) }
func (conv *Review) RemoveFinalizer() {
	util.RemoveFin(&conv.ObjectMeta, team.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (conv *Review) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/connections/%s.yaml", root, conv.ObjectMeta.Name), nil
}

func (conv *Review) RootURI() string {
	return fmt.Sprintf("tenants/%s/connections/%s", conv.Namespace, conv.Name)
}

func (conv *Review) ManifestURI() string {
	return fmt.Sprintf("%s/%s-review.yaml", conv.RootURI(), conv.Name)
}

// Merge or update condition
func (conv *Review) CreateOrUpdateCond(cond ReviewCondition) {
	i := conv.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		conv.Status.Conditions = append(conv.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := conv.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	conv.Status.Conditions[i] = current
}

func (conv *Review) GetCondIdx(t ReviewConditionType) int {
	for i, v := range conv.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (conv *Review) GetCond(t ReviewConditionType) ReviewCondition {
	for _, v := range conv.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ReviewCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (conv *Review) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", conv.Namespace, conv.Name)
}

func ParseCommentYaml(content []byte) (*Review, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Review)
	return r, nil
}

func (conv *Review) MarkReady() {
	conv.CreateOrUpdateCond(ReviewCondition{
		Type:   ReviewReady,
		Status: corev1.ConditionTrue,
		Reason: string(ReviewReady),
	})
}

func (conv *Review) MarkArchived() {
	conv.CreateOrUpdateCond(ReviewCondition{
		Type:   ReviewSaved,
		Status: corev1.ConditionTrue,
	})
}

func (conv *Review) Archived() bool {
	return conv.GetCond(ReviewSaved).Status == corev1.ConditionTrue
}
