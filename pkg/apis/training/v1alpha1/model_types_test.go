package v1alpha1

import (
	"testing"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func OneModel() Model {
	task := catalog.BinaryClassification
	return Model{
		TypeMeta: metav1.TypeMeta{
			Kind:       "Model",
			APIVersion: "v1alpha1",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:      "iris-model",
			Namespace: "lab1",
		},
		Spec: ModelSpec{
			VersionName: util.StrPtr(""),
			StudyName:   util.StrPtr(""),
			Task:        &task,
			Objective:   nil,
			Estimator:   nil,
			Dnn:         nil,
		},
	}
}

func TestModelConditions(t *testing.T) {
	model := OneModel()
	model.Default()

	cond := ModelCondition{
		Type:   ModelTrained,
		Status: v1.ConditionUnknown,
	}

	idx := model.GetConditionIndex(ModelTrained)
	util.Assert(t, idx == -1, "not found")

	model.CreateOrUpdateCondition(cond)
	util.Assert(t, len(model.Status.Conditions) == 1, "expect 1 conditions")

	after := model.GetCondition(ModelTrained)
	util.Assert(t, !after.LastTransitionTime.IsZero(), "expect valid time")

	// do an update
}
