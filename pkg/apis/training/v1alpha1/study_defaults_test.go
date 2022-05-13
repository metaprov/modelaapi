/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"testing"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	"github.com/stretchr/testify/assert"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func DefaultStudy() *Study {
	task := catalog.BinaryClassification
	return &Study{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "multi-classification-studies",
			Namespace: "lab",
		},
		Spec: StudySpec{
			VersionName: util.StrPtr("iris"),
			Task:        &task,
			DatasetName: util.StrPtr("iris"),
		},
	}

}

func Test_DefaultValues(t *testing.T) {
	study := DefaultStudy()
	study.Default()
	assert.Equal(t, *study.Spec.TrainingTemplate.Folds, int32(5))
	assert.Equal(t, *study.Spec.TrainingTemplate.Priority, int32(5))
	assert.Equal(t, *study.Spec.Search.RetainTop, int32(10))
	// assert default training
	assert.Equal(t, *study.Spec.Search.MaxCost, int32(999))
	assert.Equal(t, *study.Spec.Search.MaxTime, int32(999))
	assert.Equal(t, *study.Spec.Search.MaxModels, int32(10))

	assert.Equal(t, *study.Spec.Search.Trainers, int32(1))
	assert.Equal(t, *study.Spec.Reported, true)

}
