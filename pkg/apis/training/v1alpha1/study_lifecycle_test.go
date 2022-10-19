/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"testing"
	"time"

	"github.com/metaprov/modelaapi/pkg/util"
	"github.com/stretchr/testify/assert"
)

func TestTimeConstraints_Ended(t *testing.T) {
	// Arrange
	study := DefaultStudy()
	study.SetStartTime() // set the start time to now.
	// Act
	study.Spec.Search.MaxTime = util.Int32Ptr(0) // do for one minutes
	time.Sleep(1 * time.Second)

	ended := study.ReachedMaxTime()

	// Assert
	if !ended {
		t.Fatalf("MaxTimeOrModelReached failed. Expected: true")
	}
}

func TestTimeConstraints_NotEnded(t *testing.T) {
	// Arrange
	study := DefaultStudy()
	study.SetStartTime() // set the start time to now.
	// Act
	study.Spec.Search.MaxTime = util.Int32Ptr(10) // do for 10 mined
	time.Sleep(1 * time.Second)

	ended := study.ReachedMaxTime()

	// Assert
	if ended {
		t.Fatalf("MaxTimeOrModelReached failed. Expected: false Actual: <%v>", ended)
	}

}

func TestMaxModel_Ended(t *testing.T) {
	// Arrange
	study := DefaultStudy()
	study.SetStartTime() // set the start time to now.
	// Act
	study.Spec.Search.MaxTime = util.Int32Ptr(0) // do for one minutes
	time.Sleep(1 * time.Second)

	ended := study.ReachedMaxTime()

	// Assert
	if !ended {
		t.Fatalf("MaxTimeOrModelReached failed. Expected: true")
	}
}

func TestTrainTestValidation_CV_Less_Than_1000_(t *testing.T) {

	study := Study{}
	study.Default()

	assert.Equal(t, *&study.Spec.TrainingTemplate.Split.Train, int32(80))
	assert.Equal(t, *study.Spec.TrainingTemplate.Split.Test, int32(20))
	assert.Equal(t, *study.Spec.TrainingTemplate.Split.Validation, int32(0))

	study.AutoSplit(200)

	assert.Equal(t, *study.Spec.TrainingTemplate.Folds, int32(10))

}

func TestTrainTestValidation_CV_Less_Than_10000_(t *testing.T) {

	study := Study{}
	study.Default()
	study.AutoSplit(1200)

	assert.Equal(t, *study.Spec.TrainingTemplate.Folds, int32(5))
}

func TestTrainTestValidation_CV_Less_Than_20000_(t *testing.T) {

	study := Study{}
	study.Default()
	study.AutoSplit(1200)

	assert.Equal(t, *study.Spec.TrainingTemplate.Folds, int32(5))
}

func TestTrainTestValidation_CV_More_Than_20000_(t *testing.T) {
	study := Study{}
	study.Default()
	study.AutoSplit(20010)

	assert.Equal(t, *study.Spec.TrainingTemplate.Folds, int32(0))

}

func Test_MarkModelTrained(t *testing.T) {
	study := NewStudy("ns", "name", "")
	study.MarkSearched()
	assert.True(t, study.Searched())
}

func Test_MarkEnsembleTrained(t *testing.T) {
	study := NewStudy("ns", "name", "")
	study.MarkEnsembleTrained()
	assert.True(t, study.EnsembleTrained())
}

func Test_MarkModelTested(t *testing.T) {
	study := NewStudy("ns", "name", "")
	study.MarkTested()
	assert.True(t, study.ModelTested())
}

func Test_MarkModelReported(t *testing.T) {
	study := NewStudy("ns", "name", "")
	study.MarkReported("")
	assert.True(t, study.Reported())
}

func Test_MarkModelProfiled(t *testing.T) {
	study := NewStudy("ns", "name", "")
	study.MarkProfiled("url")
	assert.True(t, study.Profiled())
}

func Test_MarkModelAborted(t *testing.T) {
	study := NewStudy("ns", "name", "")
	study.MarkAborted()
	assert.True(t, study.Aborted())
}
