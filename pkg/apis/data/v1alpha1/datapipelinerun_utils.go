/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeld-api/pkg/apis/data"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (run *DataPipelineRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, data.GroupName)
}
func (run *DataPipelineRun) AddFinalizer()    { util.AddFin(&run.ObjectMeta, data.GroupName) }
func (run *DataPipelineRun) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (run *DataPipelineRun) CreateOrUpdateCond(cond DataPipelineRunCondition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		run.Status.Conditions = append(run.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	run.Status.Conditions[i] = current
}

func (run *DataPipelineRun) GetCondIdx(t DataPipelineRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *DataPipelineRun) GetCond(t DataPipelineRunConditionType) DataPipelineRunCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DataPipelineRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (w *DataPipelineRun) IsReady() bool {
	return w.GetCond(DataPipelineRunCompleted).Status == v1.ConditionTrue
}

func (run *DataPipelineRun) StatusString() string {
	return run.Status.Phase
}

func (run *DataPipelineRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/versions/%s/wranglings/%s", run.Namespace, run.Spec.VersionName, run.Name)
}

func (run *DataPipelineRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-wrangling.yaml", run.RootUri(), run.Name)
}

func ParseDataPipelineRunYaml(content []byte) (*DataPipelineRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DataPipelineRun)
	return r, nil
}

func (in *DataPipelineRun) Paused() bool {
	return in.GetCond(DataPipelineRunPaused).Status == v1.ConditionTrue
}

func (in *DataPipelineRun) Aborted() bool {
	return in.GetCond(DataPipelineRunAborted).Status == v1.ConditionTrue
}

func (in *DataPipelineRun) Completed() bool {
	return in.GetCond(DataPipelineRunCompleted).Status == v1.ConditionTrue
}

func (in *DataPipelineRun) Running() bool {
	return in.GetCond(DataPipelineRunCompleted).Status == v1.ConditionFalse
}

func (in *DataPipelineRun) Failed() bool {
	return in.GetCond(DataPipelineRunFailed).Status == v1.ConditionFalse
}

func (r *DataPipelineRun) MarkRunning() {
	now := metav1.Now()
	r.Status.StartTime = &now
	r.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:    DataPipelineRunCompleted,
		Status:  v1.ConditionFalse,
		Message: "running",
	})
}

func (in *DataPipelineRun) MarkComplete() {
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunCompleted,
		Status: v1.ConditionTrue,
	})
}

func (run *DataPipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}
