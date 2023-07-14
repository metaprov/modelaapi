/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (version DataProductVersion) HasFinalizer() bool {
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
func (version *DataProductVersion) CreateOrUpdateCond(cond metav1.Condition) {
	i := version.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		version.Status.Conditions = append(version.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := version.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	version.Status.Conditions[i] = current
}

func (version DataProductVersion) GetCondIdx(t string) int {
	for i, v := range version.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (version DataProductVersion) GetCond(t string) metav1.Condition {
	for _, v := range version.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (version DataProductVersion) IsReady() bool {
	return version.GetCond(DataProductVersionReady).Status == metav1.ConditionTrue
}

func (version DataProductVersion) YamlURI() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/%s-dataproductversion.yaml", version.Namespace, version.Name, version.Name)
}

func (version DataProductVersion) MessageURI() string {
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

func (version *DataProductVersion) MarkArchived() {
	version.CreateOrUpdateCond(metav1.Condition{
		Type:   DataProductVersionSaved,
		Status: metav1.ConditionTrue,
		Reason: DataProductVersionSaved,
	})
}

func (version *DataProductVersion) MarkReady() {
	version.CreateOrUpdateCond(metav1.Condition{
		Type:   DataProductVersionReady,
		Status: metav1.ConditionTrue,
		Reason: DataProductVersionReady,
	})
}

func (version *DataProductVersion) MarkFailed(err error) {
	version.CreateOrUpdateCond(metav1.Condition{
		Type:    DataProductVersionReady,
		Status:  metav1.ConditionFalse,
		Reason:  "Failed",
		Message: err.Error(),
	})
}

func (version DataProductVersion) Archived() bool {
	return version.GetCond(DataProductVersionSaved).Status == metav1.ConditionTrue
}

func (dataproductversion DataProductVersion) GetStatus() proto.Message {
	return &dataproductversion.Status
}

func (dataproductversion DataProductVersion) GetObservedGeneration() int64 {
	return dataproductversion.Status.ObservedGeneration
}

func (dataproductversion *DataProductVersion) SetObservedGeneration(generation int64) {
	dataproductversion.Status.ObservedGeneration = generation
}

func (dataproductversion *DataProductVersion) SetUpdatedAt(time *metav1.Time) {
	dataproductversion.Status.UpdatedAt = time
}

func (dataproductversion *DataProductVersion) SetStatus(status interface{}) {
	dataproductversion.Status = *status.(*DataProductVersionStatus)
}
