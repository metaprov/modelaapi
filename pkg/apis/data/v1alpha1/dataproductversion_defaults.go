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
var _ webhook.Defaulter = &DataProductVersion{}

// No defaults in this current release
func (dp *DataProductVersion) Default() {

	if dp.Spec.Description == nil {
		dp.Spec.Description = util.StrPtr("")
	}
	if dp.Spec.PrevVersionName == nil {
		dp.Spec.PrevVersionName = util.StrPtr("")
	}
	if dp.Spec.Baseline == nil {
		dp.Spec.Baseline = util.BoolPtr(true)
	}

}
