/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// EntityRef
//==============================================================================

func (w DataPipeline) IsReady() bool {
	return w.GetCond(DataPipelineReady).Status == metav1.ConditionTrue
}

func (wr DataPipeline) HasFinalizer() bool {
	return util.HasFin(&wr.ObjectMeta, data.GroupName)
}
func (wr *DataPipeline) AddFinalizer()    { util.AddFin(&wr.ObjectMeta, data.GroupName) }
func (wr *DataPipeline) RemoveFinalizer() { util.RemoveFin(&wr.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (wr *DataPipeline) CreateOrUpdateCond(cond metav1.Condition) {
	i := wr.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		wr.Status.Conditions = append(wr.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := wr.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	wr.Status.Conditions[i] = current
}

func (wr DataPipeline) GetCondIdx(t string) int {
	for i, v := range wr.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (wr DataPipeline) GetCond(t string) metav1.Condition {
	for _, v := range wr.Status.Conditions {
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

func (wr DataPipeline) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datapipelines/%s", wr.Namespace, *wr.Spec.VersionName, wr.Name)
}

func (wr DataPipeline) ManifestURI() string {
	return fmt.Sprintf("%s/%s-wrangler.yaml", wr.RootURI(), wr.Name)
}

func (in *DataPipeline) MarkReady() {
	in.CreateOrUpdateCond(metav1.Condition{
		Type:   DataPipelineReady,
		Status: metav1.ConditionTrue,
		Reason: DataPipelineReady,
	})
}

func (in *DataPipeline) MarkFailed(err error) {
	in.CreateOrUpdateCond(metav1.Condition{
		Type:    DataPipelineReady,
		Status:  metav1.ConditionFalse,
		Reason:  "Failed",
		Message: err.Error(),
	})
}

func (datapipeline DataPipeline) GetStatus() interface{} {
	return datapipeline.Status
}

func (datapipeline DataPipeline) GetObservedGeneration() int64 {
	return datapipeline.Status.ObservedGeneration
}

func (datapipeline *DataPipeline) SetObservedGeneration(generation int64) {
	datapipeline.Status.ObservedGeneration = generation
}

func (datapipeline *DataPipeline) SetUpdatedAt(time *metav1.Time) {
	datapipeline.Status.UpdatedAt = time
}

func (datapipeline *DataPipeline) SetStatus(status interface{}) {
	datapipeline.Status = status.(DataPipelineStatus)
}
