/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
	"strconv"
)

// defaulting
var _ webhook.Defaulter = &Dataset{}

func (dataset *DatasetRun) Default() {
	if dataset.ObjectMeta.Labels == nil {
		dataset.ObjectMeta.Labels = make(map[string]string)
	}

	dataset.ObjectMeta.Labels[catalog.DatasetLabelKey] = dataset.Spec.DatasetName
	dataset.ObjectMeta.Labels[catalog.RunVersionLabelKey] = strconv.Itoa(int(dataset.Spec.RunVersion))

	if dataset.Spec.Owner != nil {
		dataset.ObjectMeta.Labels[catalog.OwnerKindLabelKey] = *dataset.Spec.Owner
	}

	if dataset.Spec.ModelClassRunName != nil {
		dataset.ObjectMeta.Labels[catalog.ModelClassRunLabelKey] = *dataset.Spec.ModelClassRunName
	}

	dataset.Status.Statistics.Features = make([]FeatureStatistics, 0)
}

// validation
var _ webhook.Validator = &Dataset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (dataset *DatasetRun) ValidateCreate() error {
	return dataset.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (dataset *DatasetRun) ValidateUpdate(old runtime.Object) error {
	return dataset.validate()
}

func (dataset *DatasetRun) validate() error {
	return nil
}
