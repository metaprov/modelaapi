package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	strings "strings"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (predictionrun *PredictionRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(predictionrun).
		Complete()
}

/////// Finalizers ///////

func (predictionrun *PredictionRun) HasFinalizer() bool {
	return util.HasFin(&predictionrun.ObjectMeta, inference.GroupName)
}
func (predictionrun *PredictionRun) AddFinalizer() {
	util.AddFin(&predictionrun.ObjectMeta, inference.GroupName)
}
func (predictionrun *PredictionRun) RemoveFinalizer() {
	util.RemoveFin(&predictionrun.ObjectMeta, inference.GroupName)
}

/////// Condition Functions ///////

func (predictionrun *PredictionRun) CreateOrUpdateCondition(condition metav1.Condition) {
	i := predictionrun.GetConditionIndex(PredictionRunConditionType(condition.Type))
	now := metav1.Now()
	if i == -1 { // not found
		condition.LastTransitionTime = now
		predictionrun.Status.Conditions = append(predictionrun.Status.Conditions, condition)
		return
	}
	// else we already have the condition, update it
	current := predictionrun.Status.Conditions[i]
	current.Message = condition.Message
	current.Reason = condition.Reason
	current.LastTransitionTime = now
	if current.Status != condition.Status {
		current.Status = condition.Status
	}
	predictionrun.Status.Conditions[i] = current
}

func (predictionrun *PredictionRun) GetConditionIndex(condType PredictionRunConditionType) int {
	for i, v := range predictionrun.Status.Conditions {
		if v.Type == string(condType) {
			return i
		}
	}
	return -1
}

func (predictionrun *PredictionRun) GetCondition(condType PredictionRunConditionType) metav1.Condition {
	for _, v := range predictionrun.Status.Conditions {
		if v.Type == string(condType) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(condType),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (predictionrun *PredictionRun) Ready() bool {
	return predictionrun.GetCondition(PredictionRunReady).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) Prepared() bool {
	return predictionrun.GetCondition(PredictionRunPrepared).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) Aborted() bool {
	return predictionrun.GetCondition(PredictionRunAborted).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) Completed() bool {
	return predictionrun.GetCondition(PredictionRunCompleted).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) UnitTested() bool {
	return predictionrun.GetCondition(PredictionRunUnitTested).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) Paused() bool {
	return predictionrun.GetCondition(PredictionRunPaused).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) Failed() bool {
	return predictionrun.Status.Phase == PredictionRunPhaseFailed
}

func (predictionrun *PredictionRun) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s/predictionruns/%s", predictionrun.Namespace, predictionrun.Spec.PredictionName, predictionrun.Name)
}

func (predictionrun *PredictionRun) ExternalStatusUpdated() bool {
	return predictionrun.GetCondition(PredictionRunExternalStatusUpdated).Status == metav1.ConditionTrue
}

func (predictionrun *PredictionRun) ManifestURI() string {
	return fmt.Sprintf("%s/manifest.json", predictionrun.RootURI())
}

func (predictionrun *PredictionRun) Deleted() bool {
	return !predictionrun.ObjectMeta.DeletionTimestamp.IsZero()
}

func (predictionrun *PredictionRun) ReachedMaxTime(prediction *Prediction) bool {
	timeout, override := prediction.Spec.Run.Get().Timeout, predictionrun.Spec.Timeout
	if timeout == nil && override == nil {
		return false
	} else if override != nil {
		timeout = override
	}
	duration := metav1.Now().Unix() - predictionrun.CreationTimestamp.Unix()
	return int32(duration/60) >= *timeout
}

/////// Preparing Condition ///////

func (predictionrun *PredictionRun) MarkPrepareFailed(reason string, msg string) {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(PredictionRunPrepared),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: msg,
	})
	predictionrun.Status.Phase = PredictionRunPhaseFailed
	predictionrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Prepare failed: %s", msg))
	now := metav1.Now()
	if predictionrun.Status.CompletedAt == nil {
		predictionrun.Status.CompletedAt = &now
	}
}

func (predictionrun *PredictionRun) MarkPrepareSuccess() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunPrepared),
		Status: metav1.ConditionTrue,
		Reason: string(PredictionRunPhasePrepared),
	})
	predictionrun.Status.Phase = PredictionRunPhasePrepared
}

func (predictionrun *PredictionRun) MarkPreparing() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunPrepared),
		Status: metav1.ConditionFalse,
		Reason: string(PredictionRunPhasePreparing),
	})
	predictionrun.Status.Phase = PredictionRunPhasePreparing
}

/////// Pending Condition ///////

func (predictionrun *PredictionRun) MarkPending() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunCompleted),
		Status: metav1.ConditionFalse,
		Reason: string(PredictionRunPhasePending),
	})
	predictionrun.Status.Phase = PredictionRunPhasePending
}

/////// Unit Testing Condition ///////

func (predictionrun *PredictionRun) MarkUnitTesting() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunUnitTested),
		Status: metav1.ConditionFalse,
		Reason: string(PredictionRunPhaseUnitTesting),
	})
	predictionrun.Status.Phase = PredictionRunPhaseUnitTesting
}

func (predictionrun *PredictionRun) MarkUnitTested() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunUnitTested),
		Status: metav1.ConditionTrue,
		Reason: string(PredictionRunPhaseUnitTested),
	})
	predictionrun.Status.Phase = PredictionRunPhaseUnitTested
}

func (predictionrun *PredictionRun) MarkUnitTestFailed(reason string, err string) {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(PredictionRunUnitTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	predictionrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Unit testing failed: %s", err))
}

/////// Complete Condition ///////

func (predictionrun *PredictionRun) MarkCompleted() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunCompleted),
		Status: metav1.ConditionTrue,
		Reason: string(PredictionRunPhaseCompleted),
	})
	predictionrun.Status.Phase = PredictionRunPhaseCompleted
	now := metav1.Now()
	if predictionrun.Status.CompletedAt == nil {
		predictionrun.Status.CompletedAt = &now
	}
}

func (predictionrun *PredictionRun) MarkFailed(reason string, err string) {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(PredictionRunCompleted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	now := metav1.Now()
	if predictionrun.Status.CompletedAt == nil {
		predictionrun.Status.CompletedAt = &now
	}

	predictionrun.Status.Phase = PredictionRunPhaseFailed
	predictionrun.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Prediction failed: %s", err))
}

/////// Lifecycle Conditions ///////

func (predictionrun *PredictionRun) MarkRunning() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunCompleted),
		Status: metav1.ConditionFalse,
		Reason: string(PredictionRunPhaseRunning),
	})
	predictionrun.Status.Phase = PredictionRunPhaseRunning
}

func (predictionrun *PredictionRun) MarkAborted() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunAborted),
		Status: metav1.ConditionTrue,
		Reason: string(PredictionRunAborted),
	})
	predictionrun.Status.Phase = PredictionRunPhaseAborted
}

/////// External Status Updated Condition ///////

func (predictionrun *PredictionRun) MarkExternalStatusNotUpdated() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunExternalStatusUpdated),
		Status: metav1.ConditionFalse,
		Reason: "ExternalStatusStale",
	})
}

func (predictionrun *PredictionRun) MarkExternalStatusUpdated() {
	predictionrun.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(PredictionRunExternalStatusUpdated),
		Status: metav1.ConditionTrue,
		Reason: string(PredictionRunExternalStatusUpdated),
	})
}

func (predictionrun *PredictionRun) ToRunReference() catalog.RunReference {
	return catalog.RunReference{Name: predictionrun.Name, Version: predictionrun.Status.RunVersion}
}

func (predictionrun *PredictionRun) HasScheduleTrigger() bool {
	trigger, ok := predictionrun.Labels[catalog.TriggerLabelKey]
	if ok {
		return trigger == string(catalog.ScheduleTriggerType)
	}
	return false
}

/////// Alerts ///////

func (predictionrun *PredictionRun) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Prediction %s completed successfully", predictionrun.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: predictionrun.Name,
			Namespace:    predictionrun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Prediction",
				Name:      predictionrun.Name,
				Namespace: predictionrun.Namespace,
			},
			Notification: notification,
			Owner:        predictionrun.Spec.Owner,
			Fields: map[string]string{
				"Start Time": predictionrun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"Rows":       fmt.Sprint(predictionrun.Status.Rows),
			},
		},
	}
	if predictionrun.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = predictionrun.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (predictionrun *PredictionRun) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Prediction %s failed with error: %v", predictionrun.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: predictionrun.Name,
			Namespace:    predictionrun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Prediction",
				Name:      predictionrun.Name,
				Namespace: predictionrun.Namespace,
			},
			Notification: notification,
			Owner:        predictionrun.Spec.Owner,
			Fields: map[string]string{
				"Start Time": predictionrun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if predictionrun.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = predictionrun.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (predictionrun *PredictionRun) DriftAlert(notification catalog.NotificationSpec, err error, columns []string) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("drift detected")
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: predictionrun.Name,
			Namespace:    predictionrun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      predictionrun.Name,
				Namespace: predictionrun.Namespace,
			},
			Owner: predictionrun.Spec.Owner,
			Fields: map[string]string{
				"Columns": strings.Join(columns, ","),
			},
		},
	}
}

/////// Reconciler Methods ///////

func (predictionrun *PredictionRun) GetStatus() proto.Message {
	return &predictionrun.Status
}

func (predictionrun *PredictionRun) GetObservedGeneration() int64 {
	return predictionrun.Status.ObservedGeneration
}

func (predictionrun *PredictionRun) SetObservedGeneration(generation int64) {
	predictionrun.Status.ObservedGeneration = generation
}

func (predictionrun *PredictionRun) SetUpdatedAt(time *metav1.Time) {
	predictionrun.Status.UpdatedAt = time
}

func (predictionrun *PredictionRun) SetStatus(status interface{}) {
	predictionrun.Status = *status.(*PredictionRunStatus)
}
