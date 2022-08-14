package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (forecast *Forecast) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(forecast).
		Complete()
}

//==============================================================================
// Keys
//==============================================================================

func (forecast *Forecast) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/forecasts/%s", forecast.Namespace, forecast.Name)
}

func (forecast *Forecast) ManifestUri() string {
	return fmt.Sprintf("%s/%s-forecast.yaml", forecast.RootUri(), forecast.Name)
}

//==============================================================================
// Validate
//==============================================================================

func (forecast *Forecast) PipelineName() string {
	return forecast.ObjectMeta.Labels[PipelineLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (forecast *Forecast) HasFinalizer() bool {
	return util.HasFin(&forecast.ObjectMeta, inference.GroupName)
}
func (forecast *Forecast) AddFinalizer() {
	util.AddFin(&forecast.ObjectMeta, inference.GroupName)
}
func (forecast *Forecast) RemoveFinalizer() {
	util.RemoveFin(&forecast.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (forecast *Forecast) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/forecasts/%s.yaml", root, forecast.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (forecast *Forecast) CreateOrUpdateCond(cond ForecastCondition) {
	i := forecast.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		forecast.Status.Conditions = append(forecast.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := forecast.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	forecast.Status.Conditions[i] = current
}

func (forecast *Forecast) GetCondIdx(t ForecastConditionType) int {
	for i, v := range forecast.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (forecast *Forecast) GetCond(t ForecastConditionType) ForecastCondition {
	for _, v := range forecast.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ForecastCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (forecast *Forecast) IsCompleted() bool {
	return forecast.GetCond(ForecastCompleted).Status == v1.ConditionTrue
}

func (forecast *Forecast) Key() string {
	return fmt.Sprintf("dataproducts/%s/forecasts/%s", forecast.Namespace, forecast.Name)
}

func ParseForecastYaml(content []byte) (*Forecast, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Forecast)
	return r, nil
}

func (forecast *Forecast) MarkFailed(msg string) {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:    ForecastCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: msg,
	})
	now := metav1.Now()
	if forecast.Status.EndTime == nil {
		forecast.Status.EndTime = &now
	}
}

// Mark Expired
func (forecast *Forecast) MarkPending() {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:   ForecastCompleted,
		Status: v1.ConditionFalse,
		Reason: string(ForecastPhasePending),
	})
	forecast.Status.Phase = ForecastPhasePending
}

func (forecast *Forecast) MarkUnitTesting() {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:   ForecastCompleted,
		Status: v1.ConditionFalse,
		Reason: string(ForecastPhaseUnitTesting),
	})
	forecast.Status.Phase = ForecastPhaseUnitTesting
}

func (forecast *Forecast) MarkUnitTested() {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:   ForecastUnitTested,
		Status: v1.ConditionTrue,
	})
	forecast.Status.Phase = ForecastPhaseUnitTested
}

func (forecast *Forecast) MarkCompleted() {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:   ForecastCompleted,
		Status: v1.ConditionTrue,
	})
	forecast.Status.Phase = ForecastPhaseCompleted
	now := metav1.Now()
	if forecast.Status.EndTime == nil {
		forecast.Status.EndTime = &now
	}
}

func (forecast *Forecast) MarkUnitTestFailed(msg string) {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:    ForecastUnitTested,
		Status:  v1.ConditionFalse,
		Reason:  string(ForecastPhaseFailed),
		Message: "Failed to validate." + msg,
	})

}

func (forecast *Forecast) MarkArchived() {
	forecast.CreateOrUpdateCond(ForecastCondition{
		Type:   ForecastArchived,
		Status: v1.ConditionTrue,
	})
}

func (forecast *Forecast) OpName() string {
	return forecast.Namespace + "-" + forecast.Name
}

func (version *Forecast) MarkSaved() {
	version.CreateOrUpdateCond(ForecastCondition{
		Type:   ForecastSaved,
		Status: v1.ConditionTrue,
	})
}

func (version *Forecast) IsSaved() bool {
	return version.GetCond(ForecastSaved).Status == v1.ConditionTrue
}

func (run *Forecast) MarkRunning() {
	run.CreateOrUpdateCond(ForecastCondition{
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
	run.Status.Phase = ForecastPhaseRunning
}

////////////////////////////////////////////////////////////
// Model Alerts

func (forecast *Forecast) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	subject := fmt.Sprintf("Forecast %s completed successfully", forecast.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: forecast.Name,
			Namespace:    forecast.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Forecast",
				Name:      forecast.Name,
				Namespace: forecast.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        forecast.Spec.Owner,
			Fields: map[string]string{
				"Start Time": forecast.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if forecast.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = forecast.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (forecast *Forecast) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	subject := fmt.Sprintf("Forecast %s failed with error %v", forecast.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: forecast.Name,
			Namespace:    forecast.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr(subject),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Forecast",
				Name:      forecast.Name,
				Namespace: forecast.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        forecast.Spec.Owner,
			Fields: map[string]string{
				"Start Time": forecast.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if forecast.Status.EndTime != nil {
		result.Spec.Fields["Completion Time"] = forecast.Status.EndTime.Format("01/2/2006 15:04:05")
	}
	return result
}

func (in *Forecast) IsFailed() bool {
	cond := in.GetCond(ForecastCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(ForecastCompleted)
}

// Return the state of the run as RunStatus
func (run *Forecast) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletionTime: run.Status.EndTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
	}
	result.Status = string(run.Status.Phase)
	return result

}
