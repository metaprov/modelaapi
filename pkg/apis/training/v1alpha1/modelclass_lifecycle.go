/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	ctrl "sigs.k8s.io/controller-runtime"

	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (mclass ModelClass) IsMarkedForDeletion() bool {
	return mclass.DeletionTimestamp != nil
}

// Set up the webhook with the manager.
func (mclass *ModelClass) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(mclass).
		Complete()
}

func (mclass *ModelClass) PredictorName() string {
	return "mc-predictor-" + mclass.Name
}

func (mclass *ModelClass) DataAppName() string {
	return "mc-dataapp-" + mclass.Name
}

//==============================================================================
// Validate
//==============================================================================

func (mclass ModelClass) JobName() string {
	return fmt.Sprintf("mclass-%s", mclass.Name)
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
func (mclass *ModelClass) CreateOrUpdateCond(cond metav1.Condition) {
	i := mclass.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		mclass.Status.Conditions = append(mclass.Status.Conditions, cond)
		return
	}
	current := mclass.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
		current.LastTransitionTime = now
		mclass.Status.Conditions[i] = current
	}
	mclass.Status.Conditions[i] = current
}

func (mclass ModelClass) GetCondIdx(t string) int {
	for i, v := range mclass.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (mclass ModelClass) GetCond(t string) metav1.Condition {
	for _, v := range mclass.Status.Conditions {
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

func (mclass ModelClass) IsReady() bool {
	cond := mclass.GetCond(ModelClassReady)
	return cond.Status == metav1.ConditionTrue
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
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassSaved,
		Status: metav1.ConditionTrue,
	})
}

func (mclass ModelClass) IsFailed() bool {
	cond := mclass.GetCond(ModelClassReady)
	return cond.Status == metav1.ConditionFalse
}

// FiredAt the start of training, mark the training dataset as pending

// /////////////////////////////////////////////
// Drifted
// ////////////////////////////////////////////
func (mclass *ModelClass) MarkDrifted() {
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:   ModelClassModelDrifted,
		Status: metav1.ConditionTrue,
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
	if mclass.Status.TrainingScheduleStatus.LastRunAt != nil {
		result.Spec.Fields["Completion Time"] = mclass.Status.TrainingScheduleStatus.LastRunAt.Format("01/2/2006 15:04:05")
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
	if mclass.Status.TrainingScheduleStatus.LastRunAt != nil {
		result.Spec.Fields["Completion Time"] = mclass.Status.TrainingScheduleStatus.LastRunAt.Format("01/2/2006 15:04:05")
	}

	return result
}

func (mclass *ModelClass) MarkFailed(err string) {
	mclass.CreateOrUpdateCond(metav1.Condition{
		Type:    ModelClassReady,
		Status:  metav1.ConditionFalse,
		Message: err,
	})
	mclass.Status.FailureMessage = util.StrPtr(err)
}
