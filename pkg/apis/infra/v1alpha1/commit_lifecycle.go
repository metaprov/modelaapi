/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (commit *Commit) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(commit).
		Complete()
}

//==============================================================================
// Validation
//==============================================================================

//==============================================================================
// Finalizer
//==============================================================================

func (commit *Commit) HasFinalizer() bool {
	return util.HasFin(&commit.ObjectMeta, metav1.GroupName)
}
func (commit *Commit) AddFinalizer()    { util.AddFin(&commit.ObjectMeta, metav1.GroupName) }
func (commit *Commit) RemoveFinalizer() { util.RemoveFin(&commit.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (commit *Commit) CreateOrUpdateCond(cond CommitCondition) {
	i := commit.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		commit.Status.Conditions = append(commit.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := commit.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	commit.Status.Conditions[i] = current
}

func (commit *Commit) GetCondIdx(t CommitConditionType) int {
	for i, v := range commit.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (commit *Commit) GetCond(t CommitConditionType) CommitCondition {
	for _, v := range commit.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return CommitCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (commit *Commit) IsReady() bool {
	return commit.GetCond(CommitSent).Status == v1.ConditionTrue
}

func (commit *Commit) RootUri() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", commit.Namespace, commit.Name)
}

func (commit *Commit) ManifestUri() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", commit.RootUri(), commit.Name)
}

func ParseCommitYaml(content []byte) (*Commit, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Commit)
	return r, nil
}

func (commit *Commit) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(commit)
}

func (commit *Commit) MarkArchived() {
	commit.CreateOrUpdateCond(CommitCondition{
		Type:   CommitSaved,
		Status: v1.ConditionTrue,
	})
}
