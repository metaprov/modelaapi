/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"testing"

	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/stretchr/testify/assert"
)

func Test_Trained(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	metric := catalog.F1Binary
	model.MarkTrained([]Measurement{{
		Metric: &metric,
		Value:  nil,
	}})
	assert.True(t, model.Trained())
}

func Test_Training(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	assert.True(t, model.WaitingToTrain())
}

func Test_Failed_Testing(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	metric := catalog.F1Binary
	model.MarkTrained([]Measurement{{
		Metric: &metric,
		Value:  nil,
	}})
	model.Status.Best = true
	model.MarkTestingFailed("err")
	assert.True(t, model.TestingFailed())
}

func Test_Tested(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkTested()
	assert.True(t, model.Tested())
}

func Test_Reported(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkReported("test")
	assert.Equal(t, model.Status.ReportName, "test")
	assert.True(t, model.Reported())
}

func Test_Published(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkPublished("test")
	assert.True(t, model.Published())
}

func Test_Profiled(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkProfiled("url")
	assert.True(t, model.Profiled())
}

func Test_Failed(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkTestingFailed("t1")
	model.Status.Best = true
	assert.True(t, model.TestingFailed())
}

func Test_Archived(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkArchived()
	assert.True(t, model.Archived())
}

func Test_Aborted(t *testing.T) {
	model := NewModel("ns", "name", "bucket", "", "schema", catalog.BinaryClassification)
	model.MarkAborted()
	assert.True(t, model.Aborted())
}
