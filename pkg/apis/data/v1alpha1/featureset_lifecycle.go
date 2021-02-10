/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//==============================================================================
// Featureset
//==============================================================================

import (
	"fmt"
	"github.com/dustin/go-humanize"
	"github.com/metaprov/modeld-api/pkg/apis/common"
	"github.com/metaprov/modeld-api/pkg/apis/data"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (entity *Featureset) HasFinalizer() bool {
	return util.HasFin(&entity.ObjectMeta, data.GroupName)
}
func (entity *Featureset) AddFinalizer()    { util.AddFin(&entity.ObjectMeta, data.GroupName) }
func (entity *Featureset) RemoveFinalizer() { util.RemoveFin(&entity.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (entity *Featureset) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, entity.ObjectMeta.Name), nil
}

func (entity *Featureset) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(entity)
}

func (entity *Featureset) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", entity.ObjectMeta.Name), nil
}

func (entity *Featureset) Age() string {
	return humanize.Time(entity.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

// Parse an data
func ParseFeatureSet(content string, user string, commit string) (*Featureset, error) {
	this := &Featureset{}
	err := yaml.Unmarshal([]byte(content), this)
	if err != nil {
		return nil, err
	}
	return this, nil
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (entity *Featureset) LabelWithCommit(commit string, uname string, branch string) {
	entity.ObjectMeta.Labels[common.CommitLabelKey] = commit
	entity.ObjectMeta.Labels[common.UnameLabelKey] = uname
	entity.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (entity *Featureset) IsGitObj() bool {
	label, ok := entity.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (entity *Featureset) SetChanged() {
	entity.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
func (entity *Featureset) CreateOrUpdateCond(cond FeaturesetCondition) {
	i := entity.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		entity.Status.Conditions = append(entity.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := entity.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	entity.Status.Conditions[i] = current
}

func (entity *Featureset) GetCondIdx(t FeaturesetConditionType) int {
	for i, v := range entity.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (entity *Featureset) GetCond(t FeaturesetConditionType) FeaturesetCondition {
	for _, v := range entity.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeaturesetCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (entity *Featureset) IsReady() bool {
	return entity.GetCond(FeaturesetReady).Status == v1.ConditionTrue
}

func (entity *Featureset) Key() string {
	return fmt.Sprintf("%s/%s/%s", "entities", entity.Namespace, entity.Name)
}

func ParseFeatureSetYaml(content []byte) (*Featureset, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Featureset)
	return r, nil
}

func (entity *Featureset) MarkReady() {
	// update the lab state to ready
	entity.CreateOrUpdateCond(FeaturesetCondition{
		Type:   FeaturesetReady,
		Status: v1.ConditionTrue,
	})

}
