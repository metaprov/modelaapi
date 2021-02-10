/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	"github.com/metaprov/modeldapi/pkg/apis/training"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (run *NotebookRun) VarsToMap() map[string]string {
	result := make(map[string]string)
	for _, v := range run.Spec.Values {
		result[v.Name] = v.Value
	}
	return result
}

func (run *NotebookRun) IsMarkedForDeletion() bool {
	return run.DeletionTimestamp != nil
}

//==============================================================================
// Validate
//==============================================================================

func (run *NotebookRun) JobName() string {
	return fmt.Sprintf("run-%s", run.Name)
}

func (run *NotebookRun) Age() string {
	return humanize.Time(run.CreationTimestamp.Time)
}

//==============================================================================
// Finializer
//==============================================================================

func (run *NotebookRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, training.GroupName)
}
func (run *NotebookRun) AddFinalizer()    { util.AddFin(&run.ObjectMeta, training.GroupName) }
func (run *NotebookRun) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, training.GroupName) }

//==============================================================================
// Keys
//==============================================================================

func (run *NotebookRun) RootFolderKey() string {
	return fmt.Sprintf("modeld/notebooks/%s/runs/%s", run.Spec.NotebookName, run.ObjectMeta.Name)
}

//khai/labs/l1/studies/<s1>/models/<m1>/estimator.bin
func (run *NotebookRun) EstimatorBinFileKey() string {
	return fmt.Sprintf("%s/estimator.bin", run.RootFolderKey())
}

func (run *NotebookRun) ModelBinFileKey() string {
	return fmt.Sprintf("%s/model.bin", run.RootFolderKey())
}

func (run *NotebookRun) StudyBinFileKey() string {
	return fmt.Sprintf("%s/study.bin", run.RootFolderKey())
}

func (run *NotebookRun) SchemaBinFileKey() string {
	return fmt.Sprintf("%s/schema.bin", run.RootFolderKey())
}

// Merge or update condition
func (run *NotebookRun) CreateOrUpdateCond(cond NotebookRunCondition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
		current.LastTransitionTime = &now
		run.Status.Conditions[i] = current
	}
	run.Status.Conditions[i] = current
}

func (run *NotebookRun) GetCondIdx(t NotebookRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	panic("condition not found")
}

func (run *NotebookRun) GetCond(t NotebookRunConditionType) NotebookRunCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	panic("condition not found")
}

func (run *NotebookRun) StatusString() string {
	return run.Status.Phase
}

func (run *NotebookRun) IsReady() bool {
	return run.GetCond(NotebookRunReady).Status == corev1.ConditionTrue
}

func (run *NotebookRun) Key() string {
	return fmt.Sprintf("%s/%s/%s", "ters", run.Namespace, run.Name)
}

func ParseNotebookRunYaml(content []byte) (*NotebookRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*NotebookRun)
	return r, nil
}

func (run *NotebookRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}
