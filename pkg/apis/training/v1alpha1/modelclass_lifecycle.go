/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/dustin/go-humanize"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	ctrl "sigs.k8s.io/controller-runtime"

	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (mclass ModelClass) IsMarkedForDeletion() bool {
	return mclass.DeletionTimestamp != nil
}

//Set up the webhook with the manager.
func (mclass *ModelClass) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(mclass).
		Complete()
}

//==============================================================================
// Validate
//==============================================================================

func (mclass ModelClass) JobName() string {
	return fmt.Sprintf("mclass-%s", mclass.Name)
}

func (mclass ModelClass) Age() string {
	return humanize.Time(mclass.CreationTimestamp.Time)
}

//==============================================================================
// Finializer
//==============================================================================

func (mclass ModelClass) HasFinalizer() bool {
	return util.HasFin(&mclass.ObjectMeta, training.GroupName)
}
func (mclass *ModelClass) AddFinalizer()    { util.AddFin(&mclass.ObjectMeta, training.GroupName) }
func (mclass *ModelClass) RemoveFinalizer() { util.RemoveFin(&mclass.ObjectMeta, training.GroupName) }

// Merge or update condition
func (mclass *ModelClass) CreateOrUpdateCond(cond ModelClassCondition) {
	i := mclass.GetCondIdx(cond.Type)
	now := metav1.Now()
	current := mclass.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
		current.LastTransitionTime = &now
		mclass.Status.Conditions[i] = current
	}
	mclass.Status.Conditions[i] = current
}

func (mclass ModelClass) GetCondIdx(t ModelClassConditionType) int {
	for i, v := range mclass.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (mclass ModelClass) GetCond(t ModelClassConditionType) ModelClassCondition {
	for _, v := range mclass.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ModelClassCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (mclass ModelClass) IsReady() bool {
	return mclass.GetCond(ModelClassReady).Status == corev1.ConditionTrue
}

func (mclass ModelClass) Key() string {
	return fmt.Sprintf("%s/%s/%s", "ters", mclass.Namespace, mclass.Name)
}

func ParseModelClassYaml(content []byte) (*ModelClass, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ModelClass)
	return r, nil
}

func (mclass *ModelClass) MarkArchived() {
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassSaved,
		Status: corev1.ConditionTrue,
	})

}

func (mclass ModelClass) IsFailed() bool {
	cond := mclass.GetCond(ModelClassReady)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(ModelClassReady)
}

///////////////////////////////////////////////
// Training
//////////////////////////////////////////////
func (mclass *ModelClass) MarkCreatingTrainingSet() {
	mclass.Status.Phase = ModelClassPhaseTraining
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrained,
		Status: v1.ConditionFalse,
		Reason: ReasonTraining,
	})
}

func (mclass *ModelClass) MarkCreatedTrainingSet() {
	mclass.Status.Phase = ModelClassPhaseTrained
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrained,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClass) MarkCreatingTrainingSetFailed(err string) {
	mclass.Status.Phase = ModelClassPhaseTrainingFailed
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:    ModelClassTrained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonTraining,
		Message: err,
	})
}

///////////////////////////////////////////////
// Training
//////////////////////////////////////////////
func (mclass *ModelClass) MarkTraining() {
	mclass.Status.Phase = ModelClassPhaseTraining
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrained,
		Status: v1.ConditionFalse,
		Reason: ReasonTraining,
	})
}

func (mclass *ModelClass) MarkTrained() {
	mclass.Status.Phase = ModelClassPhaseTrained
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrained,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClass) MarkTrainingFailed(err string) {
	mclass.Status.Phase = ModelClassPhaseTrainingFailed
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:    ModelClassTrained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonTraining,
		Message: err,
	})
}

///////////////////////////////////////////////
// Deploying
//////////////////////////////////////////////
func (mclass *ModelClass) MarkDeploying() {
	mclass.Status.Phase = ModelClassPhaseDeploying
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassDeployed,
		Status: v1.ConditionFalse,
		Reason: ReasonDeploying,
	})
}

func (mclass *ModelClass) MarkDeployed() {
	mclass.Status.Phase = ModelClassPhaseDeployed
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassDeployed,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClass) MarkDeploymentFailed(err string) {
	mclass.Status.Phase = ModelClassPhaseFailedToDeploy
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:    ModelClassDeployed,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

///////////////////////////////////////////////
// Drifted
//////////////////////////////////////////////
func (mclass *ModelClass) MarkDrifted() {
	mclass.Status.Phase = ModelClassPhaseDrifted
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassDrifted,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClass) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("model class %s completed successfully", mclass.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: mclass.Name,
			Namespace:    mclass.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelClass",
				Name:      mclass.Name,
				Namespace: mclass.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        mclass.Spec.Owner,
			Fields: map[string]string{
				"Start Time": mclass.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if mclass.Status.TrainingStatus.LastRun != nil {
		result.Spec.Fields["Completion Time"] = mclass.Status.TrainingStatus.LastRun.Format("01/2/2006 15:04:05")
	}
	return result
}

func (mclass *ModelClass) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Model Class %s failed with error %v", mclass.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: mclass.Name,
			Namespace:    mclass.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "ModelClass",
				Name:      mclass.Name,
				Namespace: mclass.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        mclass.Spec.Owner,
			Fields: map[string]string{
				"Start Time": mclass.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if mclass.Status.TrainingStatus.LastRun != nil {
		result.Spec.Fields["Completion Time"] = mclass.Status.TrainingStatus.LastRun.Format("01/2/2006 15:04:05")
	}

	return result
}
