/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/pkg/errors"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
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
		dataset.ObjectMeta.Labels[catalog.OwnerKindLabelKey] = *dataset.Spec.Owner
	}
	if dataset.Spec.ModelClassName != nil {
		dataset.ObjectMeta.Labels[catalog.ModelClassLabelKey] = *dataset.Spec.ModelClassName
	}
	if dataset.Spec.ModelClassRunName != nil {
		dataset.ObjectMeta.Labels[catalog.ModelClassRunLabelKey] = *dataset.Spec.ModelClassRunName
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
	var allErrs field.ErrorList
	allErrs = append(allErrs, dataset.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "data.modela.ai", Kind: "Dataset"},
		dataset.Name, allErrs)
}

func (dataset Dataset) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, dataset.validateLocation(fldPath.Child("location"))...)
	return allErrs
}

func (dataset Dataset) validateLocation(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	if dataset.Spec.Location.Type != nil && *dataset.Spec.Location.Type != DataLocationObjectStorage {
		err := errors.Errorf("Dataset location must be object storage")
		allErrs = append(allErrs, field.Invalid(
			fldPath,
			*dataset.Spec.Location.Type,
			err.Error()))
	}
	return allErrs
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
