/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

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

//==============================================================================
// EntityRef
//==============================================================================

func (feature *Feature) AddConfiditions() {
	feature.Status.Conditions = make([]FeatureCondition, 1)
	feature.Status.Conditions[0] = FeatureCondition{
		Type:   FeatureReady,
		Status: v1.ConditionUnknown,
	}
}

func (feature *Feature) HasFinalizer() bool { return util.HasFin(&feature.ObjectMeta, data.GroupName) }
func (feature *Feature) AddFinalizer()      { util.AddFin(&feature.ObjectMeta, data.GroupName) }
func (feature *Feature) RemoveFinalizer()   { util.RemoveFin(&feature.ObjectMeta, data.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (feature *Feature) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/schemas/%s.yaml", root, feature.ObjectMeta.Name), nil
}

func (feature *Feature) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(feature)
}

func (feature *Feature) RepEntry() (string, error) {
	return fmt.Sprintf("schemas/%s.yaml", feature.ObjectMeta.Name), nil
}

func (feature *Feature) Age() string {
	return humanize.Time(feature.CreationTimestamp.Time)
}

//==============================================================================
// Factory method
//==============================================================================

// Parse an data
func ParseFeature(content string, user string, commit string) (*Feature, error) {
	this := &Feature{}
	err := yaml.Unmarshal([]byte(content), this)
	if err != nil {
		return nil, err
	}
	return this, nil
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (feature *Feature) LabelWithCommit(commit string, uname string, branch string) {
	feature.ObjectMeta.Labels[common.CommitLabelKey] = commit
	feature.ObjectMeta.Labels[common.UnameLabelKey] = uname
	feature.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (feature *Feature) IsGitObj() bool {
	label, ok := feature.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

func (feature *Feature) SetChanged() {
	feature.ObjectMeta.Labels[common.ChangedLabelKey] = "true"

}

// Merge or update condition
// Merge or update condition
func (feature *Feature) CreateOrUpdateCond(cond FeatureCondition) {
	i := feature.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		feature.Status.Conditions = append(feature.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := feature.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	feature.Status.Conditions[i] = current
}

func (feature *Feature) GetCondIdx(t FeatureConditionType) int {
	for i, v := range feature.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (feature *Feature) GetCond(t FeatureConditionType) FeatureCondition {
	for _, v := range feature.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return FeatureCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (feature *Feature) IsReady() bool {
	return feature.GetCond(FeatureReady).Status == v1.ConditionTrue
}

func (feature *Feature) Key() string {
	return fmt.Sprintf("%s/%s/%s", "features", feature.Namespace, feature.Name)
}

func ParseFeatureYaml(content []byte) (*Feature, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Feature)
	return r, nil
}

func (feature *Feature) MarkReady() {
	// update the lab state to ready
	feature.CreateOrUpdateCond(FeatureCondition{
		Type:   FeatureReady,
		Status: v1.ConditionTrue,
	})

}
