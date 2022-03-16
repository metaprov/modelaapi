/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
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

func (w *DataPipelineRun) IsSaved() bool {
	return w.GetCond(DataPipelineRunSaved).Status == v1.ConditionTrue
}

func (run *DataPipelineRun) StatusString() string {
	return string(run.Status.Phase)
}

func (run *DataPipelineRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/wranglings/%s", run.Namespace, *run.Spec.VersionName, run.Name)
}

func (run *DataPipelineRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-wrangling.yaml", run.RootUri(), run.Name)
}

func (in *DataPipelineRun) Paused() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhasePaused)
}

func (in *DataPipelineRun) Aborted() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhaseAborted)
}

func (in *DataPipelineRun) IsCompleted() bool {
	return in.GetCond(DataPipelineRunCompleted).Status == v1.ConditionTrue
}

func (in *DataPipelineRun) IsRunning() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhaseRunning)
}

func (in *DataPipelineRun) IsFailed() bool {
	cond := in.GetCond(DataPipelineRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(DataPipelineRunPhaseFailed)
}

func (r *DataPipelineRun) MarkRunning() {
	now := metav1.Now()
	if r.Status.StartTime == nil {
		r.Status.StartTime = &now
	}
	r.Status.Phase = DataPipelineRunPhaseRunning
	r.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunCompleted,
		Status: v1.ConditionFalse,
		Reason: string(DataPipelineRunPhaseRunning),
	})
	r.Status.Progress = util.Int32Ptr(10)

}

func (in *DataPipelineRun) MarkComplete() {
	in.Status.Phase = DataPipelineRunPhaseCompleted
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunCompleted,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if in.Status.EndTime == nil {
		in.Status.EndTime = &now
	}
	in.Status.Progress = util.Int32Ptr(100)
}

func (in *DataPipelineRun) MarkFailed(err error) {
	in.Status.Phase = DataPipelineRunPhaseFailed
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:    DataPipelineRunCompleted,
		Status:  v1.ConditionTrue,
		Reason:  string(DataPipelineRunPhaseFailed),
		Message: err.Error(),
	})
	now := metav1.Now()
	if in.Status.EndTime == nil {
		in.Status.EndTime = &now
	}
	in.Status.Progress = util.Int32Ptr(100)
	in.Status.FailureMessage = util.StrPtr(err.Error())

}

func (run *DataPipelineRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(run)
}

func (in *DataPipelineRun) MarkSaved() {
	in.CreateOrUpdateCond(DataPipelineRunCondition{
		Type:   DataPipelineRunSaved,
		Status: v1.ConditionTrue,
	})
}

// Generate a dataset completion alert
func (run *DataPipelineRun) CompletionAlert() *infra.Alert {
	level := infra.Info
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("Web Request Completed"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			Owner: run.Spec.Owner,
			Fields: map[string]string{
				"starttime": run.ObjectMeta.CreationTimestamp.Format("Mon Jan 2 15:04:05 MST 2006"),
			},
		},
	}
}

func (run *DataPipelineRun) ErrorAlert(err error) *infra.Alert {
	level := infra.Error
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("Web Request Run Error"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			Owner: run.Spec.Owner,
			Fields: map[string]string{
				"starttime": run.ObjectMeta.CreationTimestamp.Format("Mon Jan 2 15:04:05 MST 2006"),
			},
		},
	}
}
