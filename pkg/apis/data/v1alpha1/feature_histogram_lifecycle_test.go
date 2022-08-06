/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"testing"

	"github.com/metaprov/modelaapi/pkg/util"
	"github.com/stretchr/testify/assert"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// EntityRef
//==============================================================================

func TestLive_ToExpired(t *testing.T) {
	histogram := &FeatureHistogram{}
	now := metav1.Now()
	now_minus_4 := metav1.Time{now.AddDate(0, 0, -4)}
	now_minus_2 := metav1.Time{now.AddDate(0, 0, -2)}
	now_plus_200 := metav1.Time{now.AddDate(0, 0, 200)}
	histogram.Spec.Start = &now_minus_4
	histogram.Spec.End = &now_minus_2
	assert.True(t, histogram.Expired())
	histogram.Spec.End = &now_plus_200
	assert.False(t, histogram.Expired())

}

func TestMarkLive(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkLive()
	assert.True(t, histogram.Live())
	assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseLive)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}

func TestMarkExpired(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkExpired()
	assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseExpired)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}

func TestMarkGenTest(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkGenTest()
	assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}

func TestMarkReadyToTest(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkReadyToTest()
	assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseReadyToTest)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}

func TestMarkUnitTesting(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkUnitTesting()
	assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseUnitTesting)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}

func TestMarkReady(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkReady()
	assert.Equal(t, FeatureHistogramPhaseReady, histogram.Status.Phase)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}

func TestDrifted(t *testing.T) {
	histogram := &FeatureHistogram{Status: FeatureHistogramStatus{}}
	assert.False(t, histogram.Drifted())
	column := ColumnHistogram{}
	column.Drift = util.BoolPtr(true)
	histogram.Status.Columns = make([]ColumnHistogram, 0)
	histogram.Status.Columns = append(histogram.Status.Columns, column)
	assert.True(t, histogram.Drifted())
}

func TestMarkDrift(t *testing.T) {
	histogram := &FeatureHistogram{}
	histogram.MarkDrift()
	assert.Equal(t, FeatureHistogramPhaseDrift, histogram.Status.Phase)
	//assert.Equal(t, histogram.Status.Phase, FeatureHistogramPhaseGenTest)
}
