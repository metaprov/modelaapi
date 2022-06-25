/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	"k8s.io/apimachinery/pkg/runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &WebRequestRun{}

func (run *WebRequestRun) Default() {

	if run.Spec.Owner == nil {
		run.Spec.Owner = util.StrPtr("")
	}

	if run.Spec.Description == nil {
		run.Spec.Description = util.StrPtr("")
	}

	if run.ObjectMeta.Labels == nil {
		run.ObjectMeta.Labels = make(map[string]string)
	}
	if run.Spec.WebRequestName != nil {
		run.ObjectMeta.Labels[catalog.WebRequestLabelKey] = *run.Spec.WebRequestName
	}
	if run.Spec.VersionName != nil {
		run.ObjectMeta.Labels[catalog.DataProductVersionLabelKey] = *run.Spec.VersionName
	}
	run.ObjectMeta.Labels[catalog.TenantLabelKey] = run.Spec.LabRef.Namespace
	run.ObjectMeta.Labels[catalog.LabLabelKey] = run.Spec.LabRef.Name

}

// validation
var _ webhook.Validator = &WebRequestRun{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (recipe *WebRequestRun) ValidateCreate() error {
	return recipe.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (recipe *WebRequestRun) ValidateUpdate(old runtime.Object) error {
	return recipe.validate()
}

func (recipe *WebRequestRun) validate() error {
	return nil
}

func (recipe *WebRequestRun) ValidateDelete() error {
	return nil
}
