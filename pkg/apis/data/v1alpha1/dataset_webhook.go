/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Dataset{}

func (dataset *Dataset) Default() {

	// if not row, we assume is 0
	if dataset.Spec.Origin == nil {
		dataset.Spec.Origin = &DataLocation{}
	}

	// if we read from a database, we must snapshot the data. by default we do not snapshot
	if *dataset.Spec.Origin.Type == DataLocationSQLTable || *dataset.Spec.Origin.Type == DataLocationSQLView {
		dataset.Spec.Snapshotted = util.BoolPtr(true)
	}

	if dataset.ObjectMeta.Labels == nil {
		dataset.ObjectMeta.Labels = make(map[string]string)
		if dataset.Spec.DataSourceName != nil {
			dataset.ObjectMeta.Labels["source"] = *dataset.Spec.DataSourceName
		}
		if dataset.Spec.VersionName != nil {
			dataset.ObjectMeta.Labels["version"] = *dataset.Spec.VersionName
		}
		if dataset.Spec.Owner != nil {
			dataset.ObjectMeta.Labels["owner"] = *dataset.Spec.Owner
		}

	}

	dataset.Status.Statistics.Columns = make([]ColumnStatistics, 0)

}

// validation
var _ webhook.Validator = &Dataset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (dataset *Dataset) ValidateCreate() error {
	return dataset.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (dataset *Dataset) ValidateUpdate(old runtime.Object) error {
	return dataset.validate()
}

func (dataset *Dataset) validate() error {
	return nil
}

func (dataset *Dataset) ValidateDelete() error {
	return nil
}
