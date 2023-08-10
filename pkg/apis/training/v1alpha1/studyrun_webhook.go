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

var _ webhook.Defaulter = &StudyRun{}

func (studyrun *StudyRun) Default() {
	if studyrun.ObjectMeta.Labels == nil {
		studyrun.ObjectMeta.Labels = make(map[string]string)
	}

	studyrun.ObjectMeta.Labels[catalog.StudyLabelKey] = studyrun.Spec.StudyName

	if studyrun.Spec.Owner != nil {
		studyrun.ObjectMeta.Labels[catalog.OwnerLabelKey] = *studyrun.Spec.Owner
	}

	if studyrun.Spec.ModelClassRunName != nil {
		studyrun.ObjectMeta.Labels[catalog.ModelClassRunLabelKey] = *studyrun.Spec.ModelClassRunName
	}
}

// validation
var _ webhook.Validator = &Study{}

func (studyrun *StudyRun) ValidateDelete() error {
	return nil
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (studyrun *StudyRun) ValidateCreate() error {
	return studyrun.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (studyrun *StudyRun) ValidateUpdate(old runtime.Object) error {
	return studyrun.validate()
}

func (studyrun *StudyRun) validate() error {
	return nil
}
