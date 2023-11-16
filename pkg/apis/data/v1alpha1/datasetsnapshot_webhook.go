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
)

// defaulting
var _ webhook.Defaulter = &DatasetSnapshot{}

func (snapshot *DatasetSnapshot) Default() {
	if snapshot.ObjectMeta.Labels == nil {
		snapshot.ObjectMeta.Labels = make(map[string]string)
	}

	snapshot.ObjectMeta.Labels[catalog.DatasetLabelKey] = snapshot.Spec.DatasetName

	if snapshot.Spec.Owner != nil {
		snapshot.ObjectMeta.Labels[catalog.OwnerLabelKey] = *snapshot.Spec.Owner
	}

	if snapshot.Spec.ModelClassRunName != nil {
		snapshot.ObjectMeta.Labels[catalog.ModelClassRunLabelKey] = *snapshot.Spec.ModelClassRunName
	}

	snapshot.Status.Statistics.Features = make([]FeatureStatistics, 0)
}

// validation
var _ webhook.Validator = &DatasetSnapshot{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (snapshot *DatasetSnapshot) ValidateCreate() error {
	return snapshot.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (snapshot *DatasetSnapshot) ValidateUpdate(old runtime.Object) error {

	return snapshot.validate()
}

func (snapshot *DatasetSnapshot) ValidateDelete() error {
	return snapshot.validate()
}

func (snapshot *DatasetSnapshot) validate() error {
	return nil
}
