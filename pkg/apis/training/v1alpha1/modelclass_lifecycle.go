/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/dustin/go-humanize"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		mclass.Status.Conditions = append(mclass.Status.Conditions, cond)
		return
	}
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
	return mclass.Status.Phase == ModelClassPhaseReady
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
	return mclass.Status.Phase == ModelClassPhaseFailed
}

///////////////////////////////////////////////
// Training Life cycle
//////////////////////////////////////////////

func (mclass *ModelClass) StudyName() string {
	return "study-" + mclass.Name
}

// At the start of training, mark the training dataset as pending
func (mclass *ModelClass) StartTrainingProcess() {
	mclass.Status.Phase = ModelClassPhasePending
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrainingDatasetReady,
		Status: v1.ConditionFalse,
		Reason: ReasonTrainingDatasetPending,
	})
	mclass.Status.Version = mclass.Status.Version + 1
	mclass.Status.Dataset = ""
	mclass.Status.Study = ""
	mclass.Status.CandidateModel = ""
	mclass.Status.TrainingScheduleStatus.Start()
}

func (mclass *ModelClass) MarkCreatingTrainingDatasetSet(dataset string) {
	mclass.Status.Phase = ModelClassPhaseCreatingTrainingDataset
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrainingDatasetReady,
		Status: v1.ConditionFalse,
		Reason: ReasonCreatingTrainingDataset,
	})
	mclass.Status.Dataset = dataset
}

// when
func (mclass *ModelClass) MarkCreatedTrainingSet() {
	mclass.Status.Phase = ModelClassPhaseReady
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassTrainingDatasetReady,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClass) MarkCreatingTrainingSetFailed(err string) {
	mclass.Status.Phase = ModelClassPhaseFailed
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:    ModelClassTrainingDatasetReady,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailedToCreateTrainingDataset,
		Message: err,
	})
}

/////////////////////////////////////////////////////
// Mark Training
//////////////////////////////////////////////////////
func (mclass *ModelClass) MarkTraining(study string) {
	mclass.Status.Phase = ModelClassPhaseTraining
	if mclass.Status.Phase != ModelClassPhaseTraining {
		mclass.Status.Phase = ModelClassPhaseTraining
		mclass.CreateOrUpdateCond(ModelClassCondition{
			Type:   ModelClassModelTrained,
			Status: v1.ConditionFalse,
			Reason: ReasonTraining,
		})
		now := metav1.Now()
		mclass.Status.TrainingScheduleStatus.LastRun = &now
	}
	mclass.Status.Study = study
}

func (mclass *ModelClass) MarkModelReady(model string) {
	mclass.Status.Phase = ModelClassPhaseReady
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassModelTrained,
		Status: v1.ConditionTrue,
	})
	mclass.Status.CandidateModel = model
	// If we do not promote, we can set the schedule to next cycle
	if mclass.Spec.Training.PromotionPolicy == catalog.NonePromotion {
		nextRun := mclass.Spec.Training.TrainingSchedule.NextRun()
		mclass.Status.TrainingScheduleStatus.End()
		mclass.Status.TrainingScheduleStatus.SetNext(*nextRun)
	}
}

func (mclass *ModelClass) MarkTrainingFailed(err string) {
	mclass.Status.Phase = ModelClassPhaseFailed
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:    ModelClassModelTrained,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailed,
		Message: err,
	})
}

func (mclass *ModelClass) MarkTrained() {
	mclass.Status.Phase = ModelClassPhaseReady
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassModelTrained,
		Status: v1.ConditionTrue,
	})
}

func (mclass *ModelClass) IsTrained() bool {
	cond := mclass.GetCond(ModelClassModelTrained)
	return cond.Status == v1.ConditionTrue
}

////////////////////////////////////////////
// Promotion
////////////////////////////////////////////

func (mclass *ModelClass) MarkWaitingForPromotion() {
	mclass.Status.Phase = ModelClassPhaseWaitingForPromotion
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassModelPromoted,
		Status: v1.ConditionFalse,
		Reason: ReasonWaitingForPromotion,
	})
}

func (mclass *ModelClass) IsPromoted() bool {
	cond := mclass.GetCond(ModelClassModelPromoted)
	return cond.Status == v1.ConditionTrue
}

func (mclass *ModelClass) MarkPromoted() {
	mclass.Status.Phase = ModelClassPhaseReady
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassModelPromoted,
		Status: v1.ConditionTrue,
	})
	// promote the version
	mclass.Spec.Version = mclass.Status.Version
	nextRun := mclass.Spec.Training.TrainingSchedule.NextRun()
	mclass.Status.TrainingScheduleStatus.End()
	mclass.Status.TrainingScheduleStatus.SetNext(*nextRun)

}

func (mclass *ModelClass) MarkFailToPromote(err error) {
	mclass.Status.Phase = ModelClassPhaseFailed
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:    ModelClassModelPromoted,
		Status:  v1.ConditionFalse,
		Reason:  ReasonFailedToPromote,
		Message: err.Error(),
	})
}

///////////////////////////////////////////////
// Drifted
//////////////////////////////////////////////
func (mclass *ModelClass) MarkDrifted() {
	mclass.Status.Phase = ModelClassPhaseDrifted
	mclass.CreateOrUpdateCond(ModelClassCondition{
		Type:   ModelClassModelDrifted,
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
	if mclass.Status.TrainingScheduleStatus.LastRun != nil {
		result.Spec.Fields["Completion Time"] = mclass.Status.TrainingScheduleStatus.LastRun.Format("01/2/2006 15:04:05")
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
	if mclass.Status.TrainingScheduleStatus.LastRun != nil {
		result.Spec.Fields["Completion Time"] = mclass.Status.TrainingScheduleStatus.LastRun.Format("01/2/2006 15:04:05")
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
