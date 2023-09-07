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
	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
	"strconv"
)

func (study *Study) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(study).
		Complete()
}

/////// Finalizers ///////

func (study *Study) HasFinalizer() bool { return util.HasFin(&study.ObjectMeta, training.GroupName) }
func (study *Study) AddFinalizer()      { util.AddFin(&study.ObjectMeta, training.GroupName) }
func (study *Study) RemoveFinalizer()   { util.RemoveFin(&study.ObjectMeta, training.GroupName) }

/////// Condition Functions ///////

func (study *Study) CreateOrUpdateCondition(cond metav1.Condition) {
	i := study.GetConditionIndex(StudyCondition(cond.Type))
	now := metav1.Now()
	if i == -1 {
		cond.LastTransitionTime = now
		study.Status.Conditions = append(study.Status.Conditions, cond)
		return
	}

	current := study.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	study.Status.Conditions[i] = current
}

func (study *Study) GetConditionIndex(condition StudyCondition) int {
	for i, v := range study.Status.Conditions {
		if v.Type == string(condition) {
			return i
		}
	}
	return -1
}

func (study *Study) GetCondition(condition StudyCondition) metav1.Condition {
	for _, v := range study.Status.Conditions {
		if v.Type == string(condition) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(condition),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (study *Study) IsFast() bool {
	if study.Spec.Fast == nil {
		return false
	}
	return *study.Spec.Fast
}

func (study *Study) IsGroup() bool {
	return study.Spec.Task == catalog.PartitionForecast
}

func (study *Study) IsTestDataset() bool {
	if study.Spec.Split.Method == nil {
		return false
	}
	return *study.Spec.Split.Method == catalog.DataSplitMethodUseTestDataset
}

func (study *Study) Saved() bool {
	return study.GetCondition(StudySaved).Status == metav1.ConditionTrue
}

func (study *Study) IsForecast() bool {
	return study.Spec.Task == catalog.Forecasting
}

func (study *Study) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/studies/%s/versions/%s", study.Namespace, study.Name, strconv.Itoa(int(study.Status.Version)))
}

func ParseStudyYaml(content []byte) (*Study, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Study)
	return r, nil
}

func (study *Study) ReportName() string {
	return "study-report-" + study.ObjectMeta.Name

}

func (study *Study) SelectSplitMethod() {
	if study.Spec.Task == catalog.Forecasting || study.Spec.Task == catalog.PartitionForecast {
		v := catalog.DataSplitMethodTime
		study.Spec.Split.Method = &v
	}
	if study.Spec.Task == catalog.Regression {
		v := catalog.DataSplitMethodRandom
		study.Spec.Split.Method = &v
	}
	if study.Spec.Task == catalog.BinaryClassification || study.Spec.Task == catalog.MultiClassification {
		v := catalog.DataSplitMethodRandomStratified
		study.Spec.Split.Method = &v
	}

}

// use to sort the model by score
func (study *Study) AutoSplit(rows int32) {
	if rows < 1000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(10)
		study.Spec.Split.Test = util.Int32Ptr(20)
		study.Spec.Split.Train = util.Int32Ptr(80)
		study.Spec.Split.Validation = util.Int32Ptr(0)
	}
	if rows > 1000 && rows < 10000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(5)
		study.Spec.Split.Test = util.Int32Ptr(20)
		study.Spec.Split.Train = util.Int32Ptr(80)
		study.Spec.Split.Validation = util.Int32Ptr(0)
	}
	if rows >= 10000 && rows < 20000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(3)
		study.Spec.Split.Test = util.Int32Ptr(20)
		study.Spec.Split.Train = util.Int32Ptr(80)
		study.Spec.Split.Validation = util.Int32Ptr(0)
	}
	// at this point we woud use validation set
	if rows >= 20000 {
		study.Spec.TrainingTemplate.Folds = util.Int32Ptr(0)
		study.Spec.Split.Test = util.Int32Ptr(10)
		study.Spec.Split.Train = util.Int32Ptr(80)
		study.Spec.Split.Validation = util.Int32Ptr(10)
	}

	// Set the split method based on the task
	if study.Spec.Task == catalog.Regression {
		method := catalog.DataSplitMethodRandom
		study.Spec.Split.Method = &method
	}

	if study.Spec.Task == catalog.BinaryClassification {
		method := catalog.DataSplitMethodRandomStratified
		study.Spec.Split.Method = &method
	}

	if study.Spec.Task == catalog.MultiClassification {
		method := catalog.DataSplitMethodRandomStratified
		study.Spec.Split.Method = &method
	}

	if study.Spec.Task == catalog.Forecasting || study.Spec.Task == catalog.PartitionForecast {
		method := catalog.DataSplitMethodTime
		study.Spec.Split.Method = &method
	}

}

func (study *Study) Random() bool {
	return *study.Spec.Search.Sampler == RandomSearch
}

func (study *Study) Deleted() bool {
	return !study.ObjectMeta.DeletionTimestamp.IsZero()
}

/////// Saved Condition ///////

func (study *Study) MarkNotSaved() {
	study.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudySaved),
		Status: metav1.ConditionFalse,
		Reason: string(catalog.NotSaved),
	})
}

func (study *Study) MarkSaved() {
	study.CreateOrUpdateCondition(metav1.Condition{
		Type:   string(StudySaved),
		Status: metav1.ConditionTrue,
		Reason: string(StudySaved),
	})
}

/////// Reconciler Methods ///////

func (study *Study) GetStatus() proto.Message {
	return &study.Status
}

func (study *Study) GetObservedGeneration() int64 {
	return study.Status.ObservedGeneration
}

func (study *Study) SetObservedGeneration(generation int64) {
	study.Status.ObservedGeneration = generation
}

func (study *Study) SetUpdatedAt(time *metav1.Time) {
	study.Status.UpdatedAt = time
}

func (study *Study) SetStatus(status interface{}) {
	study.Status = *status.(*StudyStatus)
}
