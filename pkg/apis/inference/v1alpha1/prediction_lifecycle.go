package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	strings "strings"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (prediction *Prediction) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

const PipelineLabelKey = "pipeline"

//==============================================================================
// Keys
//==============================================================================

func (prediction Prediction) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction Prediction) ManifestURI() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", prediction.RootURI(), prediction.Name)
}

//==============================================================================
// Finalizer
//==============================================================================

func (prediction Prediction) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *Prediction) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *Prediction) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

func (prediction *Prediction) CreateOrUpdateCond(cond metav1.Condition) {
	i := prediction.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		prediction.Status.Conditions = append(prediction.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := prediction.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	prediction.Status.Conditions[i] = current
}

func (prediction Prediction) GetCondIdx(t string) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (prediction Prediction) GetCond(t string) metav1.Condition {
	for _, v := range prediction.Status.Conditions {
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

func (prediction Prediction) IsCompleted() bool {
	return prediction.GetCond(PredictionCompleted).Status == metav1.ConditionTrue
}

func (prediction Prediction) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *Prediction) MarkFailed(err string) {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:    PredictionCompleted,
		Status:  metav1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: err,
	})
	now := metav1.Now()
	if prediction.Status.CompletedAt == nil {
		prediction.Status.CompletedAt = &now
	}

	prediction.Status.Phase = PredictionPhaseFailed
	prediction.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Prediction failed: %s", err))
	prediction.Status.Runs.CreateRecord(0, prediction.Spec.Schedule.GetMaxRecords(), prediction.Status.FailureMessage)
}

func (prediction *Prediction) MarkPending() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionCompleted,
		Status: metav1.ConditionFalse,
		Reason: string(PredictionPhasePending),
	})
	prediction.Status.Phase = PredictionPhasePending
}

func (prediction *Prediction) MarkCreatingDataset() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionCompleted,
		Status: metav1.ConditionFalse,
		Reason: string(PredictionPhaseCreatingDataset),
	})
	prediction.Status.Phase = PredictionPhaseCreatingDataset
}

func (prediction *Prediction) MarkUnitTesting() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionCompleted,
		Status: metav1.ConditionFalse,
		Reason: string(PredictionPhaseUnitTesting),
	})
	prediction.Status.Phase = PredictionPhaseUnitTesting
}

func (prediction *Prediction) MarkUnitTested() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionUnitTested,
		Status: metav1.ConditionTrue,
		Reason: PredictionUnitTested,
	})
	prediction.Status.Phase = PredictionPhaseUnitTested
}

func (prediction *Prediction) MarkCompleted() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionCompleted,
		Status: metav1.ConditionTrue,
		Reason: PredictionCompleted,
	})
	prediction.Status.Phase = PredictionPhaseCompleted
	now := metav1.Now()
	if prediction.Status.CompletedAt == nil {
		prediction.Status.CompletedAt = &now
	}

	prediction.Status.Runs.CreateRecord(0, prediction.Spec.Schedule.GetMaxRecords(), nil)
}

func (prediction *Prediction) MarkUnitTestFailed(err string) {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:    PredictionUnitTested,
		Status:  metav1.ConditionFalse,
		Reason:  string(PredictionPhaseFailed),
		Message: err,
	})
	prediction.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Unit testing failed: %s", err))
	prediction.Status.Runs.CreateRecord(0, prediction.Spec.Schedule.GetMaxRecords(), prediction.Status.FailureMessage)
}

func (prediction *Prediction) MarkRunning() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionCompleted,
		Status: metav1.ConditionFalse,
		Reason: string(catalog.Running),
	})
	prediction.Status.Phase = PredictionPhaseRunning
}

func (prediction Prediction) Aborted() bool {
	return prediction.GetCond(PredictionAborted).Status == metav1.ConditionTrue
}

func (prediction *Prediction) MarkAborted() {
	prediction.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictionAborted,
		Status: metav1.ConditionTrue,
		Reason: PredictionAborted,
	})
	prediction.Status.Phase = PredictionPhaseAborted
	prediction.Status.Runs.CreateRecord(0, prediction.Spec.Schedule.GetMaxRecords(), util.StrPtr("Run aborted"))
}

func (prediction *Prediction) ConstructDataset() (*data.Dataset, error) {
	datasettype := catalog.TabularDatasetType
	datasetrole := data.DatasetRolePrediction

	// create a training feature histogram for the dataset.
	result := &data.Dataset{
		ObjectMeta: metav1.ObjectMeta{
			Name:      prediction.Name,
			Namespace: prediction.Namespace,
			Labels: map[string]string{
				catalog.PredictionLabelKey:  prediction.Name,
				catalog.DataProductLabelKey: prediction.Namespace,
			},
		},
		Spec: data.DatasetSpec{
			Owner: prediction.Spec.Owner,
			//VersionName:              prediction.Spec.VersionName,
			Origin:                   *prediction.Spec.Input.Location,
			GenerateFeatureHistogram: util.BoolPtr(true),
			Type:                     &datasettype,
			Role:                     datasetrole,
		},
		Status: data.DatasetStatus{
			ObservedGeneration: 0,
			UpdatedAt:          nil,
		},
	}

	return result, nil

}

////////////////////////////////////////////////////////////
// Model Alerts

func (prediction Prediction) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Prediction %s completed successfully", prediction.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: prediction.Name,
			Namespace:    prediction.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Prediction",
				Name:      prediction.Name,
				Namespace: prediction.Namespace,
			},
			Notification: notification,
			Owner:        prediction.Spec.Owner,
			Fields: map[string]string{
				"Start Time": prediction.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
				"Rows":       fmt.Sprint(prediction.Status.Rows),
			},
		},
	}
	if prediction.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = prediction.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (prediction Prediction) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Prediction %s failed with error: %v", prediction.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: prediction.Name,
			Namespace:    prediction.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Prediction",
				Name:      prediction.Name,
				Namespace: prediction.Namespace,
			},
			Notification: notification,
			Owner:        prediction.Spec.Owner,
			Fields: map[string]string{
				"Start Time": prediction.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if prediction.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = prediction.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result
}

func (prediction Prediction) IsFailed() bool {
	cond := prediction.GetCond(PredictionCompleted)
	return cond.Status == metav1.ConditionFalse && cond.Reason == PredictionCompleted
}

// Return the state of the run as RunStatus
func (prediction *Prediction) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		CompletedAt:    prediction.Status.CompletedAt,
		Duration:       int32(prediction.Status.CompletedAt.Unix() - prediction.CreationTimestamp.Unix()),
		FailureMessage: prediction.Status.FailureMessage,
	}
	result.Status = string(prediction.Status.Phase)
	return result
}

func (prediction *Prediction) DriftAlert(tenantRef *v1.ObjectReference, notifierName *string, columns []string) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("drift detected")
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: prediction.Name,
			Namespace:    prediction.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Entity",
				Name:      prediction.Name,
				Namespace: prediction.Namespace,
			},
			Owner: prediction.Spec.Owner,
			Fields: map[string]string{
				"columns": strings.Join(columns, ","),
			},
		},
	}
}

func (prediction Prediction) GetStatus() proto.Message {
	return &prediction.Status
}

func (prediction Prediction) GetObservedGeneration() int64 {
	return prediction.Status.ObservedGeneration
}

func (prediction *Prediction) SetObservedGeneration(generation int64) {
	prediction.Status.ObservedGeneration = generation
}

func (prediction *Prediction) SetUpdatedAt(time *metav1.Time) {
	prediction.Status.UpdatedAt = time
}

func (prediction *Prediction) SetStatus(status interface{}) {
	prediction.Status = *status.(*PredictionStatus)
}
