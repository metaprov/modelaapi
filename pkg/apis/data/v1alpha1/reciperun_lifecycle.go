/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

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
func (reciperun *RecipeRun) CreateOrUpdateCond(cond RecipeCondition) {
	i := reciperun.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		reciperun.Status.Conditions = append(reciperun.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := reciperun.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	reciperun.Status.Conditions[i] = current
}

func (reciperun RecipeRun) GetCondIdx(t RecipeConditionType) int {
	for i, v := range reciperun.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (reciperun RecipeRun) GetCond(t RecipeConditionType) RecipeCondition {
	for _, v := range reciperun.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return RecipeCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (reciperun RecipeRun) IsReady() bool {
	return reciperun.GetCond(RecipeReady).Status == v1.ConditionTrue
}

func (reciperun RecipeRun) StatusString() string {
	return string(reciperun.Status.Phase)
}

func (reciperun RecipeRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/reciperuns/%s", reciperun.Namespace, *reciperun.Spec.VersionName, reciperun.Name)
}

func (reciperun RecipeRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-reciperun.yaml", reciperun.RootUri(), reciperun.Name)
}

func (reciperun RecipeRun) IsInCond(ct RecipeConditionType) bool {
	current := reciperun.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (reciperun RecipeRun) PrintConditions() {
	for _, v := range reciperun.Status.Conditions {
		fmt.Println(v)
	}
}

func (reciperun *RecipeRun) MarkCompleted() {
	reciperun.Status.Phase = RecipeRunPhaseSucceed
	reciperun.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeReady,
		Status: v1.ConditionTrue,
	})
	now := metav1.Now()
	if reciperun.Status.EndTime == nil {
		reciperun.Status.EndTime = &now
	}
}

func (reciperun *RecipeRun) MarkSaved() {
	reciperun.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeSaved,
		Status: v1.ConditionTrue,
	})
}

func (reciperun *RecipeRun) MarkFailed(error string) {
	reciperun.Status.Phase = RecipeRunPhaseFailed
	reciperun.CreateOrUpdateCond(RecipeCondition{
		Type:    RecipeReady,
		Status:  v1.ConditionFalse,
		Reason:  error,
		Message: error,
	})
	now := metav1.Now()
	if reciperun.Status.EndTime == nil {
		reciperun.Status.EndTime = &now
	}
	reciperun.Status.FailureMessage = util.StrPtr(error)
}

func (reciperun *RecipeRun) MarkRunning() {
	now := metav1.Now()
	reciperun.Status.StartTime = &now
	reciperun.Status.Phase = RecipeRunPhaseRunning
	reciperun.CreateOrUpdateCond(RecipeCondition{
		Type:    RecipeReady,
		Status:  v1.ConditionFalse,
		Message: string(RecipeRunPhaseRunning),
	})
}

func (reciperun *RecipeRun) Deleted() bool {
	return !reciperun.ObjectMeta.DeletionTimestamp.IsZero()
}

func (reciperun *RecipeRun) IsRunning() bool {
	cond := reciperun.GetCond(RecipeRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(RecipeRunPhaseRunning)
}

func (reciperun *RecipeRun) IsFailed() bool {
	cond := reciperun.GetCond(RecipeRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(RecipeRunPhaseFailed)
}

func (reciperun *RecipeRun) IsSaved() bool {
	cond := reciperun.GetCond(RecipeRunSaved)
	return cond.Status == v1.ConditionTrue
}

// Generate a dataset completion alert
func (reciperun RecipeRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Recipe reciperun %s completed successfully", reciperun.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: reciperun.Name,
			Namespace:    reciperun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "RecipeRun",
				Name:      reciperun.Name,
				Namespace: reciperun.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Fields: map[string]string{
				"Start Time": reciperun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if reciperun.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = reciperun.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (reciperun RecipeRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Recipe reciperun %s failed with error %v", reciperun.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: reciperun.Name,
			Namespace:    reciperun.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "RecipeRun",
				Name:      reciperun.Name,
				Namespace: reciperun.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Fields: map[string]string{
				"Start Time": reciperun.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if reciperun.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = reciperun.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

// Return the state of the run as RunStatus
func (reciperun RecipeRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: reciperun.Status.EndTime,
		Duration:       int32(reciperun.Status.EndTime.Unix() - reciperun.Status.StartTime.Unix()),
		FailureReason:  reciperun.Status.FailureReason,
		FailureMessage: reciperun.Status.FailureMessage,
	}
	result.Status = string(reciperun.Status.Phase)
	return result

}
