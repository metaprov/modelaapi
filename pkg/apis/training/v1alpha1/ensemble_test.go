/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"testing"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/stretchr/testify/assert"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func createModel(name string, alg string, score float64, objective catalog.Metric) *Model {
	return &Model{
		ObjectMeta: metav1.ObjectMeta{
			Name:      name,
			Namespace: "default",
		},
		Spec: ModelSpec{
			Estimator: &ClassicalEstimatorSpec{
				AlgorithmName: alg,
			},
			Objective: &objective,
		},
		Status: ModelStatus{
			CVScore: score,
		},
	}
}

func isModelInList(name string, models []Model) bool {
	for _, v := range models {
		if v.Name == name {
			return true
		}
	}
	return false
}

func Test_ensamble_check_accuracy(t *testing.T) {
	m1 := createModel("m1", "random-forest", 20, catalog.Accuracy)
	m2 := createModel("m2", "random-forest", 25, catalog.Accuracy)
	m3 := createModel("m3", "xgboost", 30, catalog.Accuracy)
	m4 := createModel("m4", "xgboost", 40, catalog.Accuracy)
	m5 := createModel("m5", "logistic-regression", 30, catalog.Accuracy)
	m6 := createModel("m6", "logistic-regression", 35, catalog.Accuracy)

	e := NewEnsemble()
	e.Add(*m1)
	assert.False(t, e.Exist())
	e.Add(*m2)
	assert.False(t, e.Exist())
	e.Add(*m3)
	assert.False(t, e.Exist())
	e.Add(*m4)
	assert.False(t, e.Exist())
	e.Add(*m5)
	assert.True(t, e.Exist())
	e.Add(*m6)
	assert.True(t, e.Exist())

	assert.True(t, isModelInList("m6", e.Models()))
	assert.True(t, isModelInList("m2", e.Models()))
	assert.True(t, isModelInList("m4", e.Models()))

}

// With rmse test we expect the opposite for scoring, since we want to minimize the score.
func Test_ensamble_check_rmse(t *testing.T) {
	m1 := createModel("m1", "random-forest", 20, catalog.RMSE)
	m2 := createModel("m2", "random-forest", 25, catalog.RMSE)
	m3 := createModel("m3", "xgboost", 30, catalog.RMSE)
	m4 := createModel("m4", "xgboost", 40, catalog.RMSE)
	m5 := createModel("m5", "logistic-regression", 30, catalog.RMSE)
	m6 := createModel("m6", "logistic-regression", 35, catalog.RMSE)

	e := NewEnsemble()
	e.Add(*m1)
	assert.False(t, e.Exist())
	e.Add(*m2)
	assert.False(t, e.Exist())
	e.Add(*m3)
	assert.False(t, e.Exist())
	e.Add(*m4)
	assert.False(t, e.Exist())
	e.Add(*m5)
	assert.True(t, e.Exist())
	e.Add(*m6)
	assert.True(t, e.Exist())

	assert.True(t, isModelInList("m1", e.Models()))
	assert.True(t, isModelInList("m3", e.Models()))
	assert.True(t, isModelInList("m5", e.Models()))

}
