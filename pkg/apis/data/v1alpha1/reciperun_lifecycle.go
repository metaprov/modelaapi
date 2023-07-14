/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (reciperun *RecipeRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(reciperun).
		Complete()
}

func (reciperun RecipeRun) ReportName() string {
	return "reciperun-report-" + reciperun.Name
}

func (reciperun RecipeRun) HasFinalizer() bool {
	return util.HasFin(&reciperun.ObjectMeta, data.GroupName)
}
func (reciperun *RecipeRun) AddFinalizer()    { util.AddFin(&reciperun.ObjectMeta, data.GroupName) }
func (reciperun *RecipeRun) RemoveFinalizer() { util.RemoveFin(&reciperun.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (reciperun *RecipeRun) CreateOrUpdateCond(cond metav1.Condition) {
	i := reciperun.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		reciperun.Status.Conditions = append(reciperun.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := reciperun.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	reciperun.Status.Conditions[i] = current
}

func (reciperun RecipeRun) GetCondIdx(t string) int {
	for i, v := range reciperun.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (reciperun RecipeRun) GetCond(t string) metav1.Condition {
	for _, v := range reciperun.Status.Conditions {
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

func (reciperun RecipeRun) IsReady() bool {
	return reciperun.GetCond(RecipeReady).Status == metav1.ConditionTrue
}

func (reciperun RecipeRun) StatusString() string {
	return string(reciperun.Status.Phase)
}

func (reciperun RecipeRun) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/reciperuns/%s", reciperun.Namespace, *reciperun.Spec.VersionName, reciperun.Name)
}

func (reciperun RecipeRun) ManifestURI() string {
	return fmt.Sprintf("%s/%s-reciperun.yaml", reciperun.RootURI(), reciperun.Name)
}

func (reciperun RecipeRun) IsInCond(ct string) bool {
	current := reciperun.GetCond(ct)
	return current.Status == metav1.ConditionTrue
}

func (reciperun RecipeRun) PrintConditions() {
	for _, v := range reciperun.Status.Conditions {
		fmt.Println(v)
	}
}

func (reciperun *RecipeRun) MarkCompleted() {
	reciperun.Status.Phase = RecipeRunPhaseSucceed
	reciperun.CreateOrUpdateCond(metav1.Condition{
		Type:   RecipeReady,
		Status: metav1.ConditionTrue,
		Reason: RecipeReady,
	})
	now := metav1.Now()
	if reciperun.Status.CompletedAt == nil {
		reciperun.Status.CompletedAt = &now
	}
}

func (reciperun *RecipeRun) MarkFailed(error string) {
	reciperun.Status.Phase = RecipeRunPhaseFailed
	reciperun.CreateOrUpdateCond(metav1.Condition{
		Type:    RecipeReady,
		Status:  metav1.ConditionFalse,
		Reason:  error,
		Message: error,
	})
	now := metav1.Now()
	if reciperun.Status.CompletedAt == nil {
		reciperun.Status.CompletedAt = &now
	}
	reciperun.Status.FailureMessage = util.StrPtr(error)
}

func (reciperun *RecipeRun) MarkRunning() {
	reciperun.Status.Phase = RecipeRunPhaseRunning
	reciperun.CreateOrUpdateCond(metav1.Condition{
		Type:    RecipeReady,
		Status:  metav1.ConditionFalse,
		Message: string(RecipeRunPhaseRunning),
	})
}

func (reciperun *RecipeRun) Deleted() bool {
	return !reciperun.ObjectMeta.DeletionTimestamp.IsZero()
}

func (reciperun *RecipeRun) IsRunning() bool {
	cond := reciperun.GetCond(RecipeRunCompleted)
	return cond.Status == metav1.ConditionFalse && cond.Reason == string(RecipeRunPhaseRunning)
}

func (reciperun *RecipeRun) IsFailed() bool {
	cond := reciperun.GetCond(RecipeRunCompleted)
	return cond.Status == metav1.ConditionFalse && cond.Reason == string(RecipeRunPhaseFailed)
}

// Generate a dataset completion alert
func (reciperun RecipeRun) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Recipe reciperun %s completed successfully", reciperun.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: reciperun.Name,
			Namespace:    reciperun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "RecipeRun",
				Name:      reciperun.Name,
				Namespace: reciperun.Namespace,
			},
			Notification: notification,
			Fields: map[string]string{
				"Start Time": reciperun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if reciperun.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = reciperun.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (reciperun RecipeRun) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Recipe %s failed with error: %v", reciperun.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: reciperun.Name,
			Namespace:    reciperun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "RecipeRun",
				Name:      reciperun.Name,
				Namespace: reciperun.Namespace,
			},
			Notification: notification,
			Fields: map[string]string{
				"Start Time": reciperun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if reciperun.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = reciperun.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

// Return the state of the run as RunStatus
func (reciperun RecipeRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletedAt:    reciperun.Status.CompletedAt,
		Duration:       int32(reciperun.Status.CompletedAt.Unix() - reciperun.CreationTimestamp.Unix()),
		FailureReason:  reciperun.Status.FailureReason,
		FailureMessage: reciperun.Status.FailureMessage,
	}
	result.Status = string(reciperun.Status.Phase)
	return result

}

func (reciperun RecipeRun) GetStatus() proto.Message {
	return &reciperun.Status
}

func (reciperun RecipeRun) GetObservedGeneration() int64 {
	return reciperun.Status.ObservedGeneration
}

func (reciperun *RecipeRun) SetObservedGeneration(generation int64) {
	reciperun.Status.ObservedGeneration = generation
}

func (reciperun *RecipeRun) SetUpdatedAt(time *metav1.Time) {
	reciperun.Status.UpdatedAt = time
}

func (reciperun *RecipeRun) SetStatus(status interface{}) {
	reciperun.Status = *status.(*RecipeRunStatus)
}
