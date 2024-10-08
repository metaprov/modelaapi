/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"

	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (run *ModelClassRun) CreateOrUpdateCond(cond metav1.Condition) {
	i := run.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		run.Status.Conditions = append(run.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := run.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	run.Status.Conditions[i] = current
}

func (run *ModelClassRun) GetCondIdx(t string) int {
	for i, v := range run.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (run *ModelClassRun) GetCond(t string) metav1.Condition {
	for _, v := range run.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
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

var (
	ReasonCreatingTrainingDataset = "CreatingTrainingDataset"
	ReasonWaitingForPromotion     = "WaitingForPromotion"
)

func (mclass *ModelClassRun) StartTrainingProcess() {
	mclass.Status.Phase = ModelClassRunPhasePending
}

func (mclass *ModelClassRun) MarkCreatingTrainingDataset(dataset string) {
	mclass.Status.Phase = ModelClassRunPhaseTraining
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunTrainingDatasetReady,
		Status: metav1.ConditionFalse,
		Reason: ReasonCreatingTrainingDataset,
	})
	mclass.Status.DatasetName = dataset
}

func (mclass *ModelClassRun) MarkCreatedTrainingSet() {
	mclass.Status.Phase = ModelClassRunPhaseTraining
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunTrainingDatasetReady,
		Status: metav1.ConditionTrue,
		Reason: ModelClassRunTrainingDatasetReady,
	})
}

func (mclass *ModelClassRun) MarkCreatingTrainingSetFailed(reason string, err string) {
	mclass.Status.Phase = ModelClassRunPhaseFailed
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelClassRunTrainingDatasetReady,
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	mclass.Status.FailureMessage = &err
}

// ///////////////////////////////////////////////////
// Mark Training
// ////////////////////////////////////////////////////
func (mclass *ModelClassRun) MarkTraining(study string) {
	mclass.Status.Phase = ModelClassRunPhaseTraining
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunModelTrained,
		Status: metav1.ConditionFalse,
		Reason: string(ModelClassRunPhaseTraining),
	})
	mclass.Status.StudyName = study
}

func (mclass *ModelClassRun) MarkModelTrained(model string) {
	mclass.Status.Phase = ModelClassRunPhaseTrained
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunModelTrained,
		Status: metav1.ConditionTrue,
		Reason: ModelClassRunModelTrained,
	})
	mclass.Status.ModelName = model
}

func (mclass *ModelClassRun) MarkTrainingFailed(reason string, err string) {
	mclass.Status.Phase = ModelClassRunPhaseFailed
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelClassRunModelTrained,
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

func (mclass *ModelClassRun) MarkTrained() {
	mclass.Status.Phase = ModelClassRunPhaseTrained
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunModelTrained,
		Status: metav1.ConditionTrue,
		Reason: ModelClassRunModelTrained,
	})
}

func (mclass *ModelClassRun) IsTrained() bool {
	cond := mclass.GetCond(ModelClassRunModelTrained)
	return cond.Status == metav1.ConditionTrue
}

////////////////////////////////////////////
// Promotion
////////////////////////////////////////////

func (mclass *ModelClassRun) MarkWaitingForPromotion() {
	mclass.Status.Phase = ModelClassPhaseWaitingForPromotion
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunModelPromoted,
		Status: metav1.ConditionFalse,
		Reason: ReasonWaitingForPromotion,
	})
}

func (mclass *ModelClassRun) IsPromoted() bool {
	cond := mclass.GetCond(ModelClassRunModelPromoted)
	return cond.Status == metav1.ConditionTrue
}

func (mclass *ModelClassRun) MarkPromoted() {
	mclass.Status.Phase = ModelClassRunPhaseCompleted
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunModelPromoted,
		Status: metav1.ConditionTrue,
		Reason: ModelClassRunModelPromoted,
	})
}

func (mclass *ModelClassRun) MarkFailToPromote(reason string, err error) {
	mclass.Status.Phase = ModelClassRunPhaseFailed
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelClassRunModelPromoted,
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err.Error(),
	})
}

func (this *ModelClassRun) MarkSaved() {
	this.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassRunArchived,
		Status: metav1.ConditionTrue,
		Reason: ModelClassRunArchived,
	})
}

func (this *ModelClassRun) IsSaved() bool {
	cond := this.GetCond(ModelClassRunArchived)
	return cond.Status == metav1.ConditionTrue
}

func (this *ModelClassRun) IsAborted() bool {
	return this.Spec.Aborted != nil && *this.Spec.Aborted
}

func (this *ModelClassRun) Abort() {
	this.Spec.Aborted = util.BoolPtr(true)
}

func (this *ModelClassRun) IsPaused() bool {
	return this.Spec.Paused != nil && *this.Spec.Paused
}

func (this *ModelClassRun) Pause() {
	this.Spec.Paused = util.BoolPtr(true)
}

func (run *ModelClassRun) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Model Class Run %s failed with error: %v", run.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject:      subject,
			Level:        &level,
			Notification: notification,
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
	if run.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = run.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (run *ModelClassRun) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Entity %s completed successfully ", run.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelClassRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			Notification: notification,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if run.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = run.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (mclass *ModelClass) PromotionAlert(tenantRef *v1.ObjectReference, notifierName *string, model Model) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Model %s is waiting for manual promotion", model.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: mclass.Name,
			Namespace:    mclass.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			Owner: model.Spec.Owner,
			Fields: map[string]string{
				"Model Class Namespace": mclass.Namespace,
				"ModelClass":            mclass.Name,
				"Model":                 model.Namespace,
			},
		},
	}

	return result
}
