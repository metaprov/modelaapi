/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"encoding/json"
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	"path"
	ctrl "sigs.k8s.io/controller-runtime"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (model *Model) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(model).
		Complete()
}

/////// Finalizers ///////

func (model *Model) HasFinalizer() bool { return util.HasFin(&model.ObjectMeta, training.GroupName) }
func (model *Model) AddFinalizer()      { util.AddFin(&model.ObjectMeta, training.GroupName) }
func (model *Model) RemoveFinalizer()   { util.RemoveFin(&model.ObjectMeta, training.GroupName) }

/////// Condition Functions ///////

func (model *Model) CreateOrUpdateCondition(cond metav1.Condition) {
	i := model.GetConditionIndex(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		model.Status.Conditions = append(model.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := model.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	model.Status.Conditions[i] = current
}

func (model *Model) GetConditionIndex(t string) int {
	for i, v := range model.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (model *Model) GetCondition(conditionType ModelConditionType) metav1.Condition {
	for _, v := range model.Status.Conditions {
		if v.Type == string(conditionType) {
			return v
		}
	}

	return metav1.Condition{
		Type:    string(conditionType),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (model *Model) WaitingToTrain() bool {
	if len(model.Status.Conditions) == 0 {
		return true
	}
	cond := model.GetCondition(ModelTrained)
	return cond.Status == metav1.ConditionFalse && cond.Reason == string(ModelPhasePending)
}

func (model *Model) Training() bool {
	cond := model.GetCondition(ModelTrained)
	return cond.Status == metav1.ConditionFalse && cond.Reason == string(ModelPhaseTraining)
}

func (model *Model) Trained() bool {
	return model.GetCondition(ModelTrained).Status == metav1.ConditionTrue
}

func (model *Model) Forecasted() bool {
	return model.GetCondition(ModelForecasted).Status == metav1.ConditionTrue
}

func (model *Model) Tested() bool {
	return model.GetCondition(ModelTested).Status == metav1.ConditionTrue
}

func (model *Model) UnitTested() bool {
	return model.GetCondition(ModelUnitTested).Status == metav1.ConditionTrue
}

func (model *Model) Explained() bool {
	return model.GetCondition(ModelExplained).Status == metav1.ConditionTrue
}

func (model *Model) Profiled() bool {
	return model.GetCondition(ModelProfiled).Status == metav1.ConditionTrue
}

func (model *Model) Reported() bool {
	return model.GetCondition(ModelReported).Status == metav1.ConditionTrue
}

func (model *Model) Packaged() bool {
	return model.GetCondition(ModelPackaged).Status == metav1.ConditionTrue
}

func (model *Model) TrainedOutlierDetector() bool {
	return model.GetCondition(ModelOutlierDetectorTrained).Status == metav1.ConditionTrue
}

func (model *Model) Pruned() bool {
	return model.GetCondition(ModelPruned).Status == metav1.ConditionTrue
}

func (model *Model) Paused() bool {
	return model.GetCondition(ModelPaused).Status == metav1.ConditionTrue
}

func (model *Model) Ready() bool {
	return model.GetCondition(ModelReady).Status == metav1.ConditionTrue
}

func (model *Model) Aborted() bool {
	return model.GetCondition(ModelAborted).Status == metav1.ConditionTrue
}

func (model *Model) Failed() bool {
	return model.Status.Phase == ModelPhaseFailed
}

func (model *Model) IsLive() bool {
	if model.Status.Serving.Role == nil {
		return false
	}
	return *model.Status.Serving.Role == catalog.LiveModelRole
}

func (model *Model) IsShadow() bool {
	if model.Status.Serving.Role == nil {
		return false
	}
	return *model.Status.Serving.Role == catalog.ShadowModelRole
}

func (model *Model) IsEnsemble() bool {
	if model.Spec.Ensemble == nil {
		return false
	}
	return len(model.Spec.Ensemble.Models) > 0
}

func (model *Model) ReportName() string {
	return "model-report-" + model.ObjectMeta.Name
}

func (model *Model) ReportType() ReportType {
	switch model.Spec.Task {
	case catalog.BinaryClassification:
		return BinaryClassificationModelReport
	case catalog.MultiClassification:
		return MultiClassificationModelReport
	case catalog.Regression:
		return RegressionModelReport
	case catalog.Forecasting:
		return ForecastModelReport
	case catalog.PartitionForecast:
		return PartitionTimeSeriesModelReport
	}
	return InvalidReport
}

func (model *Model) GetTestResult(metric catalog.Metric) float64 {
	for _, v := range model.Status.Test {
		if *v.Metric == metric {
			return *v.Value
		}
	}
	return 0
}

func (model *Model) Accuracy() float64 {
	return model.GetTestResult(catalog.Accuracy)
}

func (model *Model) R2() float64 {
	return model.GetTestResult(catalog.R2)
}

func (model *Model) RMSE() float64 {
	return model.GetTestResult(catalog.RMSE)
}

func (model *Model) RMSLE() float64 {
	return model.GetTestResult(catalog.RMSLE)
}

func (model *Model) MAPE() float64 {
	return model.GetTestResult(catalog.MAPE)
}

func (model *Model) Precision() float64 {
	return model.GetTestResult(catalog.PrecisionBinary)
}

func (model *Model) Recall() float64 {
	return model.GetTestResult(catalog.RecallBinary)
}

func (model *Model) F1() float64 {
	return model.GetTestResult(catalog.F1Binary)
}

func (model *Model) SetRung(v int32) {
	model.Spec.Training.SH.Rung = util.Int32Ptr(v)
	model.Labels["rung"] = util.ItoA(model.Spec.Training.SH.Rung)
}

func (model *Model) SetBracket(v int32) {
	model.Spec.Training.SH.Bracket = util.Int32Ptr(v)
	model.Labels["bracket"] = util.ItoA(model.Spec.Training.SH.Bracket)
}

func (model *Model) RefreshProgress() {
	if model.Ready() || model.Failed() || model.Aborted() || model.Pruned() {
		model.Status.Progress = 100
	} else if model.Packaged() {
		model.Status.Progress = 90
	} else if model.Reported() {
		model.Status.Progress = 80
	} else if model.Profiled() {
		model.Status.Progress = 70
	} else if model.Explained() {
		model.Status.Progress = 60
	} else if model.UnitTested() {
		model.Status.Progress = 50
	} else if model.Forecasted() {
		model.Status.Progress = 40
	} else if model.Tested() {
		model.Status.Progress = 30
	} else if model.Trained() {
		model.Status.Progress = 20
	} else if model.Training() {
		model.Status.Progress = 10
	} else if model.WaitingToTrain() {
		model.Status.Progress = 0
	}
}

func (model *Model) CompareTestingScore(other *Model) bool {
	return model.Spec.Objective.Compare(model.Status.TestScore, other.Status.TestScore)
}

/////// Class Query Functions ///////

func (model *Model) IsBaseline() bool {
	return model.Spec.ModelClass == catalog.ModelClassTypeBaseline
}

func (model *Model) IsSearch() bool {
	return model.Spec.ModelClass == catalog.ModelClassTypeSearch
}

func (model *Model) IsTest() bool {
	return model.Spec.ModelClass == catalog.ModelClassTypeTest
}

/////// Location Functions ///////

func (model *Model) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/studies/%s/studyruns/%s/models/%s",
		model.Namespace, model.Status.StudyName, model.Spec.StudyRunName, model.Name)
}

func (model *Model) ManifestURI() string {
	return fmt.Sprintf("%s/manifest.json", model.RootURI())
}

func (model *Model) WeightsURI() string {
	return fmt.Sprintf("%s/bin/model.joblib", model.RootURI())
}

func (model *Model) ExplainerURI() string {
	return fmt.Sprintf("%s/bin/explainer.joblib", model.RootURI())
}

func (model *Model) ReportURI() string {
	return fmt.Sprintf("%s/model-%s-report.pdf", model.RootURI(), model.Name)
}

func (model *Model) TarURI() string {
	return fmt.Sprintf("%s/model.tar.gz", model.RootURI())
}

func (model *Model) ForecastURI() string {
	return fmt.Sprintf("%s/forecast.csv", model.RootURI())
}

/////// Training Condition ///////

func (model *Model) MarkWaitingToTrain() {
	model.Status.Phase = ModelPhasePending
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelTrained),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhasePending),
	})
	model.RefreshProgress()
}

func (model *Model) MarkTraining() {
	now := metav1.Now()
	if model.Status.TrainingStartedAt == nil {
		model.Status.TrainingStartedAt = &now
	}
	model.Status.Phase = ModelPhaseTraining
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelTrained),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseTraining),
	})
	model.RefreshProgress()
}

func (model *Model) MarkTrained() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelTrained),
		Status: metav1.ConditionTrue,
		Reason: string(ModelTrained),
	})
	if model.Status.TrainingCompletedAt == nil {
		now := metav1.Now()
		model.Status.TrainingCompletedAt = &now
	}
	model.Status.Phase = ModelPhaseTrained
	model.RefreshProgress()
}

func (model *Model) MarkTrainFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelTrained),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	if model.Status.TrainingCompletedAt == nil {
		now := metav1.Now()
		model.Status.TrainingCompletedAt = &now
	}
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
	model.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Failed to train: %s", err))
	model.RefreshProgress()
}

/////// Testing Condition ///////

func (model *Model) MarkTesting() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelTested),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseTesting),
	})
	if model.Status.TestingStartedAt == nil {
		now := metav1.Now()
		model.Status.TestingStartedAt = &now
	}
	model.Status.Phase = ModelPhaseTesting
	model.RefreshProgress()
}

func (model *Model) MarkTestingFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Failed to test: %s", err))
	model.RefreshProgress()
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}

}

func (model *Model) MarkTested() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelTested),
		Status: metav1.ConditionTrue,
		Reason: string(ModelTested),
	})
	model.Status.Phase = ModelPhaseTested
	if model.Status.TestingCompletedAt == nil {
		now := metav1.Now()
		model.Status.TestingCompletedAt = &now
	}
	model.RefreshProgress()
}

/////// Unit Testing Condition ///////

func (model *Model) MarkUnitTesting() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelUnitTested),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseUnitTesting),
	})
	model.Status.Phase = ModelPhaseUnitTesting
	model.RefreshProgress()
}

func (model *Model) MarkUnitTested() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelUnitTested),
		Status: metav1.ConditionTrue,
		Reason: string(ModelUnitTested),
	})
	model.Status.Phase = ModelPhaseUnitTested
	model.RefreshProgress()
}

func (model *Model) MarkUnitTestFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelUnitTested),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.RefreshProgress()
}

/////// Profile Condition ///////

func (model *Model) MarkProfiling() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelProfiled),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseProfiling),
	})
	model.Status.Phase = ModelPhaseProfiling
	model.RefreshProgress()
}

func (model *Model) MarkProfiled(location catalog.FileLocation) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelProfiled),
		Status: metav1.ConditionTrue,
		Reason: string(ModelProfiled),
	})
	model.Status.Phase = ModelPhaseProfiled
	model.Status.ProfileLocation = location
	model.RefreshProgress()
}

func (model *Model) MarkProfileFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelProfiled),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.RefreshProgress()
}

/////// Prune Condition ///////

func (model *Model) MarkPruned() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelPruned),
		Status: metav1.ConditionTrue,
		Reason: string(ModelPruned),
	})
	model.Status.Phase = ModelPhasePruned
	model.RefreshProgress()
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
}

/////// Report Condition ///////

func (model *Model) MarkReporting() {
	model.Status.Phase = ModelPhaseReporting
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelReported),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseReporting),
	})
	model.RefreshProgress()
}

func (model *Model) MarkReported() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelReported),
		Status: metav1.ConditionTrue,
		Reason: string(ModelReported),
	})
	model.Status.Phase = ModelPhaseReported
	model.RefreshProgress()
}

func (model *Model) MarkReportFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelReported),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.RefreshProgress()
}

/////// Forecast Condition ///////

func (model *Model) MarkForecasted() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelForecasted),
		Status: metav1.ConditionTrue,
		Reason: string(ModelForecasted),
	})
	model.Status.Phase = ModelPhaseForecasted
	model.RefreshProgress()
}

func (model *Model) MarkForecastFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelForecasted),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Forecast failed: %s", err))
	model.RefreshProgress()
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
}

func (model *Model) MarkForecasting() {
	model.Status.Phase = ModelPhaseForecasting
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelForecasted),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseForecasting),
	})
	model.RefreshProgress()
}

/////// Merging Condition ///////

func (model *Model) MarkFailedToMerge(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelMerged),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})

	model.Status.Phase = ModelPhaseFailed
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}

	model.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Forecast merge failed: %s", err))
	model.RefreshProgress()
}

func (model *Model) MarkMerged() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelMerged),
		Status: metav1.ConditionTrue,
		Reason: string(ModelForecasted),
	})
	model.Status.Phase = ModelPhaseMerged
	model.RefreshProgress()
}

func (model *Model) MarkMerging() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelMerged),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseMerging),
	})
	model.Status.Phase = ModelPhaseMerging
	model.RefreshProgress()
}

/////// Packaging Condition ///////

func (model *Model) MarkPackaging() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelPackaged),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhasePackaging),
	})
	model.Status.Phase = ModelPhasePackaging
	model.RefreshProgress()
}

func (model *Model) MarkPackaged() {
	model.Status.Phase = ModelPhasePackaged
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelPackaged),
		Status: metav1.ConditionTrue,
		Reason: string(ModelPackaged),
	})
	model.RefreshProgress()
}

func (model *Model) MarkPackageFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelPackaged),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Packaging failed: %s", err))
	if model.Status.CompletedAt == nil {
		now := metav1.Now()
		model.Status.CompletedAt = &now
	}
	model.RefreshProgress()
}

/////// Explaining Condition ///////

func (model *Model) MarkExplaining() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelExplained),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseExplaining),
	})
	model.Status.Phase = ModelPhaseExplaining
	model.RefreshProgress()
}

func (model *Model) MarkExplained() {
	model.Status.Phase = ModelPhaseExplained
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelExplained),
		Status: metav1.ConditionTrue,
		Reason: string(ModelExplained),
	})
	model.RefreshProgress()
}

func (model *Model) MarkExplainFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelExplained),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.RefreshProgress()
}

/////// Outlier Detector Training Condition ///////

func (model *Model) MarkTrainingOutlierDetector() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelOutlierDetectorTrained),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPhaseTrainedOutlierDetector),
	})
	model.Status.Phase = ModelPhaseTrainingOutlierDetector
}

func (model *Model) MarkOutlierDetectorTrained(location catalog.FileLocation) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelOutlierDetectorTrained),
		Status: metav1.ConditionTrue,
		Reason: string(ModelOutlierDetectorTrained),
	})
	model.Status.Phase = ModelPhaseTrainedOutlierDetector
}

func (model *Model) MarkTrainOutlierDetectorFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelOutlierDetectorTrained),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
}

/////// Lifecycle Conditions ///////

func (model *Model) MarkResumed() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelPaused),
		Status: metav1.ConditionFalse,
		Reason: string(ModelPaused),
	})
}

func (model *Model) MarkAborted() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelAborted),
		Status: metav1.ConditionTrue,
		Reason: string(ModelAborted),
	})
	model.Status.Phase = ModelPhaseAborted
	now := metav1.Now()
	if model.Status.CompletedAt == nil {
		model.Status.CompletedAt = &now
	}
	model.RefreshProgress()
}

func (model *Model) MarkReady() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelReady),
		Status: metav1.ConditionTrue,
		Reason: string(ModelReady),
	})
	now := metav1.Now()
	model.Status.CompletedAt = &now
	model.Status.Phase = ModelPhaseCompleted
	model.RefreshProgress()
}

func (model *Model) MarkReadyFailed(reason string, err string) {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:    string(ModelReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: err,
	})
	model.Status.Phase = ModelPhaseFailed
	model.Status.FailureMessage = util.StrPtr(fmt.Sprintf("Mark ready failed: %s", err))
	model.Status.Progress = 100
	now := metav1.Now()
	if model.Status.CompletedAt == nil {
		model.Status.CompletedAt = &now
	}
}

func (model *Model) MarkPaused() {
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelPaused),
		Status: metav1.ConditionTrue,
		Reason: string(ModelPaused),
	})
	model.RefreshProgress()
}

/////// Role Conditions ///////

func (model *Model) MarkRole(predictor string, role catalog.ModelRole) {
	model.Status.Serving.Role = &role
	model.Labels[catalog.PredictorLabelKey] = predictor
	model.Labels[catalog.ModelRoleLabelKey] = string(role)
	switch role {
	case catalog.LiveModelRole:
		model.Status.Phase = ModelPhaseLive
		model.CreateOrUpdateCondition(metav1.Condition{
			Type:   string(ModelLive),
			Status: metav1.ConditionTrue,
			Reason: string(ModelLive),
		})
		model.CreateOrUpdateCondition(metav1.Condition{
			Type:   string(ModelShadow),
			Status: metav1.ConditionFalse,
			Reason: string(ModelShadow),
		})
	case catalog.ShadowModelRole:
		model.Status.Phase = ModelPhaseShadow
		model.CreateOrUpdateCondition(metav1.Condition{
			Type:   string(ModelLive),
			Status: metav1.ConditionFalse,
			Reason: string(ModelLive),
		})
		model.CreateOrUpdateCondition(metav1.Condition{
			Type:   string(ModelShadow),
			Status: metav1.ConditionTrue,
			Reason: string(ModelShadow),
		})

	case catalog.NoneModelRole:
		model.Status.Phase = ModelPhaseCompleted
		model.CreateOrUpdateCondition(metav1.Condition{
			Type:   string(ModelLive),
			Status: metav1.ConditionFalse,
			Reason: string(ModelLive),
		})
		model.CreateOrUpdateCondition(metav1.Condition{
			Type:   string(ModelShadow),
			Status: metav1.ConditionFalse,
			Reason: string(ModelShadow),
		})
	}

}

func (model *Model) Demote() {
	labels := make(map[string]string)
	for k, v := range model.Labels {
		if k == catalog.PredictorLabelKey || k == catalog.ModelRoleLabelKey {
			continue
		}
		labels[k] = v
	}
	model.Labels = labels
	model.Status.Phase = ModelPhaseCompleted
	noneRole := catalog.NoneModelRole
	model.Status.Serving.Role = &noneRole

	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelLive),
		Status: metav1.ConditionFalse,
		Reason: string(ModelLive),
	})
	model.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(ModelShadow),
		Status: metav1.ConditionFalse,
		Reason: string(ModelShadow),
	})
}

func (model *Model) InitializeFromStudy(run *StudyRun, study *Study) {
	model.Namespace = study.Namespace
	model.Spec.Training = *study.Spec.TrainingTemplate.DeepCopy()
	model.Spec.StudyRunName = run.Name
	model.Spec.ModelClassName = study.Spec.ModelClassName
	model.Spec.ModelClassRunName = run.Spec.ModelClassRunName
	model.Spec.ArtifactBucketName = study.Spec.ArtifactBucketName
	model.Spec.Task = study.Spec.Task
	model.Spec.Forecasting = study.Spec.ForecastTemplate.DeepCopy()
	model.Spec.Objective = study.Spec.Search.Objective
	model.Spec.Notification = study.Spec.Notification
	if study.ObjectMeta.Labels != nil {
		model.ObjectMeta.Labels = study.ObjectMeta.Labels
	}
	model.ObjectMeta.Labels[catalog.StudyLabelKey] = study.Name
	model.ObjectMeta.Labels[catalog.StudyRunLabelKey] = run.Name
	model.Spec.Training.LabName = study.Spec.LabName
	model.Spec.Fast = study.Spec.Fast
}

func (model *Model) OpName() string {
	return model.Namespace + "-" + model.Name
}

func (model *Model) IsGroup() bool {
	return model.Spec.Task == catalog.PartitionForecast
}

func (m *ModelList) ToPointerList() []*Model {
	var list []*Model
	for _, model := range m.Items {
		list = append(list, &model)
	}
	return list
}

func NewHyperParameterValue() *HyperParameterValue {
	return &HyperParameterValue{}
}

func ParseHyperParametersFromJson(jsonStr string) ([]HyperParameterValue, error) {
	result := make([]HyperParameterValue, 0)
	m := make(map[string]interface{})
	err := json.Unmarshal([]byte(jsonStr), &m)
	if err != nil {
		return nil, err
	}
	for k, v := range m {
		// convert the param to string
		vStr := fmt.Sprintf("%v", v)
		e := NewHyperParameterValue()
		e.Name = k
		e.Value = vStr
		result = append(result, *e)
	}
	return result, nil
}

func (model *Model) DefaultObjective() catalog.ObjectiveSpec {
	result := catalog.ObjectiveSpec{}
	if model.Spec.Task == catalog.BinaryClassification {
		return catalog.ObjectiveSpec{
			Metric: catalog.RocAuc,
			Goal:   catalog.MaximizeGoalType,
		}
	}

	if model.Spec.Task == catalog.Regression {
		return catalog.ObjectiveSpec{
			Metric: catalog.RMSE,
			Goal:   catalog.MinimizeGoalType,
		}
	}

	if model.Spec.Task == catalog.Forecasting || model.Spec.Task == catalog.PartitionForecast {
		return catalog.ObjectiveSpec{
			Metric: catalog.MAPE,
			Goal:   catalog.MinimizeGoalType,
		}
	}
	return result
}

////////////////////////////////////////////////////////////
// Model Alerts
////////////////////////////////////////////////////////////

func (model *Model) CompletionAlert(notification catalog.NotificationSpec) *infra.Alert {
	level := infra.InfoAlertLevel
	subject := fmt.Sprintf("Model %s completed successfully", model.Name)
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: model.Name,
			Namespace:    model.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			Notification: notification,
			Owner:        model.Spec.Owner,
			Fields: map[string]string{
				"Study":      "TODO",
				"Study Run":  model.Spec.StudyRunName,
				"Task":       string(model.Spec.Task),
				"Objective":  string(model.Spec.Objective.Metric),
				"Algorithm":  model.Spec.Estimator.AlgorithmName,
				"Phase":      string(model.Status.Phase),
				"Score":      util.FtoA(&model.Status.ValidationScore),
				"Start Time": model.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}
	if model.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = model.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}
	return result

}

func (model *Model) ErrorAlert(notification catalog.NotificationSpec, err error) *infra.Alert {
	level := infra.ErrorAlertLevel
	subject := fmt.Sprintf("Model %s failed with error: %v", model.Name, err.Error())
	result := &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: model.Name,
			Namespace:    model.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: subject,
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "Model",
				Name:      model.Name,
				Namespace: model.Namespace,
			},
			Notification: notification,
			Owner:        model.Spec.Owner,
			Fields: map[string]string{
				"Entity":     model.Status.DatasetName,
				"Study":      "TODO",
				"Study Run":  model.Spec.StudyRunName,
				"Task":       string(model.Spec.Task),
				"Objective":  string(model.Spec.Objective.Metric),
				"Algorithm":  model.Spec.Estimator.AlgorithmName,
				"Phase":      string(model.Status.Phase),
				"Score":      util.FtoA(&model.Status.ValidationScore),
				"Start Time": model.ObjectMeta.CreationTimestamp.Format("01/2/2006 15:04:05"),
			},
		},
	}

	if model.Status.CompletedAt != nil {
		result.Spec.Fields["Completion Time"] = model.Status.CompletedAt.Format("01/2/2006 15:04:05")
	}

	return result
}

/////// Group Lifecycle ///////

func (model *Model) IndexFileKey() string {
	return model.RootURI() + "/groups.json"
}

func (model *Model) WorkerIndexFileKey(workerIndex int, task string) string {
	return fmt.Sprintf("%s/%s_%d.json", model.RootURI(), task, workerIndex)
}

func (model *Model) TaskIndexFileKey(task string) string {
	return fmt.Sprintf("%s/%s.json", model.RootURI(), task)
}

func (model *Model) PartitionFolder() string {
	return model.RootURI() + "/partitions/" + path.Join(model.Spec.Forecasting.Key...)
}

func (model *Model) PartitionModelFolder() string {
	return model.PartitionFolder() + "/bin/model"
}

func (model *Model) PartitionModelFile() string {
	return model.PartitionFolder() + "/bin/model.zip"
}

func (model *Model) PartitionModelProfileFolder() string {
	return model.PartitionFolder() + "/profile"
}

func (model *Model) PartitionModelReportFile() string {
	return model.PartitionFolder() + "/" + model.Name + ".pdf"
}

func (model *Model) PartitionModelForecastFile() string {
	return model.PartitionFolder() + "/forecasts/forecast.csv"
}

/////// Reconciler Methods ///////

func (model *Model) GetStatus() proto.Message {
	return &model.Status
}

func (model *Model) GetObservedGeneration() int64 {
	return model.Status.ObservedGeneration
}

func (model *Model) SetObservedGeneration(generation int64) {
	model.Status.ObservedGeneration = generation
}

func (model *Model) SetUpdatedAt(time *metav1.Time) {
	model.Status.UpdatedAt = time
}

func (model *Model) SetStatus(status interface{}) {
	model.Status = *status.(*ModelStatus)
}
