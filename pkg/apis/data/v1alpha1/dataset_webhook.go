/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"strings"

	"github.com/metaprov/modelaapi/pkg/util"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Dataset{}

func (dataset *Dataset) Default() {

	// if we read from a database, we must snapshot the data. by default we do not snapshot
	if *dataset.Spec.Origin.Type == DataLocationSQLTable ||
		*dataset.Spec.Origin.Type == DataLocationSQLView ||
		*dataset.Spec.Origin.Type == DataLocationWebApi ||
		*dataset.Spec.Origin.Type == DataLocationPublicDataset ||
		*dataset.Spec.Origin.Type == DataLocationDataset {
		dataset.Spec.Snapshotted = util.BoolPtr(true)
	}

	if dataset.ObjectMeta.Labels == nil {
		dataset.ObjectMeta.Labels = make(map[string]string)
	}
	if dataset.Spec.DataSourceName != nil {
		dataset.ObjectMeta.Labels[catalog.DatasourceLabelKey] = *dataset.Spec.DataSourceName
	}
	if dataset.Spec.VersionName != nil {
		dataset.ObjectMeta.Labels[catalog.DataProductVersionLabelKey] = *dataset.Spec.VersionName
	}
	if dataset.Spec.Owner != nil {
		dataset.ObjectMeta.Labels["modela.ai/owner"] = *dataset.Spec.Owner
	}
	dataset.ObjectMeta.Labels[catalog.TenantLabelKey] = dataset.Spec.LabRef.Namespace
	dataset.ObjectMeta.Labels[catalog.LabLabelKey] = dataset.Spec.LabRef.Name

	// If the live path is empty, copy it from the depot path
	if *dataset.Spec.Origin.Type == DataLocationObjectStorage {
		dataset.Spec.Location = dataset.Spec.Origin
		dataset.Spec.Location.Path = util.StrPtr(strings.Replace(*dataset.Spec.Location.Path, "/depot/", "/live/", -1))
	}

	dataset.Status.Statistics.Columns = make([]ColumnStatistics, 0)

}

// validation
var _ webhook.Validator = &Dataset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (dataset Dataset) ValidateCreate() error {
	return dataset.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (dataset Dataset) ValidateUpdate(old runtime.Object) error {
	return dataset.validate()
}

func (dataset Dataset) validate() error {
	return nil
}

func (dataset Dataset) ValidateDelete() error {
	return nil
}

func (loc DataLocation) Validate(field string) ([]metav1.StatusCause, bool) {
	// if type is object
	// if type is table
	// if type is view
	// if type is stream
	// if type is web
	return nil, true
}

func (gb GroupBySpec) Validate(field string) ([]metav1.StatusCause, bool) {
	// if type is object
	// if type is table
	// if type is view
	// if type is stream
	// if type is web
	return nil, true
}
