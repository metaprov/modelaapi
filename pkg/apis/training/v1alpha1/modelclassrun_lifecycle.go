/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (run *ModelClassRun) CreateOrUpdateCond(cond ModelClassRunCondition) {
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

func (run *ModelClassRun) GetCondIdx(t ModelClassRunConditionType) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *ModelClassRun) GetCond(t ModelClassRunConditionType) ModelClassRunCondition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	return ModelClassRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

//==============================================================================
// Finalizer
//==============================================================================

func (run *ModelClassRun) HasFinalizer() bool {
	return util.HasFin(&run.ObjectMeta, training.GroupName)
}
func (run *ModelClassRun) AddFinalizer()    { util.AddFin(&run.ObjectMeta, training.GroupName) }
func (run *ModelClassRun) RemoveFinalizer() { util.RemoveFin(&run.ObjectMeta, training.GroupName) }

//==============================================================================
// PIpeline stage status
//==============================================================================

func (mclass *ModelClassRun) StartTrainingProcess() {
	mclass.Status.Phase = ModelClassRunPhasePending
}

func (mclass *ModelClassRun) MarkCreatingTrainingDatasetSet(dataset string) {
	mclass.Status.Phase = ModelClassRunPhaseTraining
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunTrainingDatasetReady,
		Status: v1.ConditionFalse,
		Reason: ReasonCreatingTrainingDataset,
	})
	mclass.Status.DatasetName = dataset
}

// when
func (mclass *ModelClassRun) MarkCreatedTrainingSet() {
	mclass.Status.Phase = ModelClassRunPhaseTraining
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunTrainingDatasetReady,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClassRun) MarkCreatingTrainingSetFailed(err string) {
	mclass.Status.Phase = ModelClassRunPhaseFailed
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:    ModelClassRunTrainingDatasetReady,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailedToCreateTrainingDataset,
		Message: err,
	})
	mclass.Status.FailureMessage = &err
}

/////////////////////////////////////////////////////
// Mark Training
//////////////////////////////////////////////////////
func (mclass *ModelClassRun) MarkTraining(study string) {
	mclass.Status.Phase = ModelClassRunPhaseTraining
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunModelTrained,
		Status: v1.ConditionFalse,
		Reason: ReasonTraining,
	})
	mclass.Status.StudyName = study
}

func (mclass *ModelClassRun) MarkModelTrained(model string) {
	mclass.Status.Phase = ModelClassRunPhaseTrained
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunModelTrained,
		Status: v1.ConditionTrue,
	})
	mclass.Status.ModelName = model
	// If we do not promote, we can set the schedule to next cycle
	//if mclass.Spec.Training.PromotionPolicy == catalog.NonePromotion {
	//	nextRun := mclass.Spec.Training.TrainingSchedule.NextRun()
	//	mclass.Status.TrainingScheduleStatus.End()
	//	mclass.Status.TrainingScheduleStatus.SetNext(*nextRun)
	//}
}

func (mclass *ModelClassRun) MarkTrainingFailed(err string) {
	mclass.Status.Phase = ModelClassRunPhaseFailed
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:    ModelClassRunModelTrained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

func (mclass *ModelClassRun) MarkTrained() {
	mclass.Status.Phase = ModelClassRunPhaseTrained
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunModelTrained,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClassRun) IsTrained() bool {
	cond := mclass.GetCond(ModelClassRunModelTrained)
	return cond.Status == v1.ConditionTrue
}

////////////////////////////////////////////
// Promotion
////////////////////////////////////////////

func (mclass *ModelClassRun) MarkWaitingForPromotion() {
	mclass.Status.Phase = ModelClassPhaseWaitingForPromotion
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunModelPromoted,
		Status: v1.ConditionFalse,
		Reason: ReasonWaitingForPromotion,
	})
}

func (mclass *ModelClassRun) IsPromoted() bool {
	cond := mclass.GetCond(ModelClassRunModelPromoted)
	return cond.Status == v1.ConditionTrue
}

func (mclass *ModelClassRun) MarkPromoted() {
	mclass.Status.Phase = ModelClassRunPhaseCompleted
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunModelPromoted,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClassRun) MarkFailToPromote(err error) {
	mclass.Status.Phase = ModelClassRunPhaseFailed
	mclass.CreateOrUpdateCond(ModelClassRunCondition{
		Type:    ModelClassRunModelPromoted,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailedToPromote,
		Message: err.Error(),
	})
}

func (this *ModelClassRun) MarkSaved() {
	this.CreateOrUpdateCond(ModelClassRunCondition{
		Type:   ModelClassRunArchived,
		Status: v1.ConditionTrue,
	})
}

func (this *ModelClassRun) IsSaved() bool {
	cond := this.GetCond(ModelClassRunArchived)
	return cond.Status == v1.ConditionTrue
}

func (run *ModelClassRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("ModelClassRun %s failed with error %v", run.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      util.StrPtr(subject),
			Message:      util.StrPtr(err.Error()),
			Level:        &level,
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelClassRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			Owner: run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = run.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (run *ModelClassRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Entity %s completed successfully ", run.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelClassRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = run.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (mclass *ModelClass) PromotionAlert(tenantRef *v1.ObjectReference, notifierName *string, model Model) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Model %s is waiting for manual promotion", model.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: mclass.Name,
			Namespace:    mclass.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        model.Spec.Owner,
			Fields: map[string]string{
				"Model Class Namespace": mclass.Namespace,
				"ModelClass":            mclass.Name,
				"Model":                 model.Namespace,
			},
		},
	}

	return result
}
