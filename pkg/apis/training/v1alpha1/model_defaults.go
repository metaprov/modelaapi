/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/util"
)

func (model *Model) Default() {

	if model.Spec.OwnerName == nil {
		model.Spec.OwnerName = util.StrPtr("")
	}
	// Objective
	if model.Spec.Training == nil {
		model.Spec.Training = &TrainingSpec{}
	}

	if model.Spec.Training.Priority == nil {
		model.Spec.Training.Priority = util.Int32Ptr(int32(0)) // default prioirty is 5
	}

	if model.Spec.Aborted == nil {
		model.Spec.Aborted = util.BoolPtr(false)
	}

	if model.Spec.Published == nil {
		model.Spec.Published = util.BoolPtr(false)
	}

	if model.Spec.Reported == nil {
		model.Spec.Reported = util.BoolPtr(false)
	}

	if model.Spec.Paused == nil {
		model.Spec.Paused = util.BoolPtr(false)
	}

	if model.Spec.Profiled == nil {
		model.Spec.Profiled = util.BoolPtr(false)
	}

	if model.Spec.Training.CV == nil {
		model.Spec.Training.CV = util.BoolPtr(false)
	}

	if model.Spec.Objective == nil {
		o := model.DefaultObjective()
		model.Spec.Objective = &o
	}
	if model.Spec.Training.Priority == nil {
		model.Spec.Training.Priority = util.Int32Ptr(1)
	}
	if model.Spec.Estimator == nil {
		model.Spec.Estimator = &ClassicalEstimatorSpec{}
	}
	if model.Spec.Preprocessing == nil {
		model.Spec.Preprocessing = &PreprocessingSpec{}
	}

	if model.Spec.Preprocessing.Text == nil {
		tfidf := catalog.TfIdf
		model.Spec.Preprocessing.Text = &TextPipelineSpec{
			Columns:   []string{},
			Encoder:   &tfidf,
			Tokenizer: util.StrPtr(""),
			StopWords: util.BoolPtr(false),
			Pos:       util.BoolPtr(false),
			Lemma:     util.BoolPtr(false),
			Stem:      util.BoolPtr(false),
			Embedding: nil,
		}
	}

	if model.Spec.Ensemble == nil {
		model.Spec.Ensemble = &EnsembleSpec{
			Base: make([]string, 0),
		}
	}

	if model.Spec.Training.Folds == nil {
		model.Spec.Training.Folds = util.Int32Ptr(5)
	}

	if model.Spec.Preprocessing.Imbalanced == nil {
		model.Spec.Preprocessing.Imbalanced = util.BoolPtr(false)
	}
	if model.Spec.Tested == nil {
		model.Spec.Tested = util.BoolPtr(false)
	}
	if model.Spec.Aborted == nil {
		model.Spec.Aborted = util.BoolPtr(false)
	}
	if model.Spec.Published == nil {
		model.Spec.Published = util.BoolPtr(false)
	}
	if model.Spec.Reported == nil {
		model.Spec.Reported = util.BoolPtr(false)
	}
	if model.Spec.Paused == nil {
		model.Spec.Paused = util.BoolPtr(false)
	}
	if model.Spec.Profiled == nil {
		model.Spec.Profiled = util.BoolPtr(false)
	}
	if model.Spec.Archived == nil {
		model.Spec.Archived = util.BoolPtr(false)
	}
	if model.Spec.Published == nil {
		model.Spec.Published = util.BoolPtr(false)
	}

}
