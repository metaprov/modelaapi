/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	data "github.com/metaprov/modeld-api/pkg/apis/data/v1alpha1"
	"github.com/metaprov/modeld-api/pkg/util"
)

func (b *ModelAutobuilder) Default() {
	if b.Spec.DataProductName == nil {
		b.Spec.DataProductName = util.StrPtr(b.Name)
	}
	if b.Spec.DataProductVersionName == nil {
		b.Spec.DataProductVersionName = util.StrPtr("0.1.0")
	}
	if b.Spec.MaxModels == nil {
		b.Spec.MaxModels = util.Int32Ptr(10)
	}
	if b.Spec.MaxTime == nil {
		b.Spec.MaxTime = util.Int32Ptr(5) // 5 minutes
	}
	if b.Spec.TargetColumn == nil {
		b.Spec.TargetColumn = util.StrPtr("") // need to infer target column
	}
	if b.Spec.DataSourceName == nil {
		b.Spec.DataSourceName = util.StrPtr("")
	}
	if b.Spec.Trainers == nil {
		b.Spec.Trainers = util.Int32Ptr(1)
	}
	if b.Spec.DataSourceSpec == nil {
		b.Spec.DataSourceSpec = &data.DataSourceSpec{
			Schema: data.Schema{
				Columns: []data.Column{},
			},
		}
	}
	if b.Spec.SearchMethod == nil {
		sm := RandomSearch
		b.Spec.SearchMethod = &sm
	}

	if b.Spec.Objective == nil {
		o := DefaultObjective(b.Spec.Task)
		b.Spec.Objective = &o
	}

}
