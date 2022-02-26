/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	corev1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

const (
	secureEmailPort = 587
)

// validation
var _ webhook.Defaulter = &Notifier{}

func (notifier *Notifier) Default() {

}

// validation
var _ webhook.Validator = &Notifier{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (notifier *Notifier) ValidateCreate() error {
	return notifier.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (notifier *Notifier) ValidateUpdate(old runtime.Object) error {
	return notifier.validate()
}

func (notifier *Notifier) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(schema.GroupKind{Group: "infra.modela.ai", Kind: "Notifier"}, notifier.Name, allErrs)
}

func (notifier *Notifier) ValidateDelete() error {
	return nil
}

func (notifier *Notifier) MarkReady() {
	notifier.CreateOrUpdateCond(NotifierCondition{
		Type:   NotifierReady,
		Status: corev1.ConditionTrue,
	})
}
