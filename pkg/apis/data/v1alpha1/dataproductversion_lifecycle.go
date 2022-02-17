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
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (version *DataProductVersion) HasFinalizer() bool {
	return util.HasFin(&version.ObjectMeta, data.GroupName)
}
func (version *DataProductVersion) AddFinalizer() { util.AddFin(&version.ObjectMeta, data.GroupName) }
func (version *DataProductVersion) RemoveFinalizer() {
	util.RemoveFin(&version.ObjectMeta, data.GroupName)
}

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (version *DataProductVersion) CreateOrUpdateCond(cond DataProductVersionCondition) {
	i := version.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		version.Status.Conditions = append(version.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := version.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	version.Status.Conditions[i] = current
}

func (version *DataProductVersion) GetCondIdx(t DataProductVersionConditionType) int {
	for i, v := range version.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (version *DataProductVersion) GetCond(t DataProductVersionConditionType) DataProductVersionCondition {
	for _, v := range version.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DataProductVersionCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (version *DataProductVersion) IsReady() bool {
	return version.GetCond(DataProductVersionReady).Status == v1.ConditionTrue
}

func (version *DataProductVersion) YamlUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/%s-dataproductversion.yaml", version.Namespace, version.Name, version.Name)
}

func (version *DataProductVersion) MessageUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/dataproductversion.json", version.Namespace, version.Name)
}

func ParseDataProductVersionYaml(content []byte) (*DataProductVersion, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DataProductVersion)
	return r, nil
}

func (version *DataProductVersion) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(version)
}

func (version *DataProductVersion) MarkArchived() {
	version.CreateOrUpdateCond(DataProductVersionCondition{
		Type:   DataProductVersionSaved,
		Status: v1.ConditionTrue,
	})
}

func (version *DataProductVersion) MarkReady() {
	version.CreateOrUpdateCond(DataProductVersionCondition{
		Type:   DataProductVersionReady,
		Status: v1.ConditionTrue,
	})
}

func (version *DataProductVersion) MarkFailed(err error) {
	version.CreateOrUpdateCond(DataProductVersionCondition{
		Type:    DataProductVersionReady,
		Status:  v1.ConditionFalse,
		Reason:  "IsFailed",
		Message: err.Error(),
	})
}

func (version *DataProductVersion) Archived() bool {
	return version.GetCond(DataProductVersionSaved).Status == v1.ConditionTrue
}
