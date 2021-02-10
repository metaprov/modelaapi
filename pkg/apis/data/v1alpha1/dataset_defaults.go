/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modeldapi/pkg/util"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Dataset{}

func (dataset *Dataset) Default() {

	if dataset.Spec.Owner == nil {
		dataset.Spec.Owner = util.StrPtr("")
	}

	if dataset.Spec.Description == nil {
		dataset.Spec.Description = util.StrPtr("")
	}

	// By default, we product a dataset report
	if dataset.Spec.Reported == nil {
		dataset.Spec.Reported = util.BoolPtr(true)
	}

	// By default, we label the dataset
	if dataset.Spec.Labeled == nil {
		dataset.Spec.Labeled = util.BoolPtr(true)
	}

	// by default we valid
	if dataset.Spec.Validated == nil {
		dataset.Spec.Validated = util.BoolPtr(true)
	}

	// if not row, we assume is 0
	if dataset.Spec.Origin == nil {
		dataset.Spec.Origin = &DataLocation{}
	}

	dataset.Status.Statistics.Columns = make([]ColumnStatistics, 0)

}
