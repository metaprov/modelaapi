/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"

	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &DataPipelineRun{}

func (wr *DataPipelineRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(wr).
		Complete()
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (run *DataPipelineRun) ValidateCreate() error {
	return run.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (run *DataPipelineRun) ValidateUpdate(old runtime.Object) error {
	return run.validate()
}

func (run *DataPipelineRun) ValidateDelete() error {
	return nil
}

func (ffile *DataPipelineRun) validate() error {
	return nil
}

func (ffile *DataPipelineRun) validateMeta(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

// defaulting
var _ webhook.Defaulter = &DataPipelineRun{}

func (run *DataPipelineRun) Default() {
	//if run.Spec.DataLocation
	//if run.Spec.DataLocation.Path == "" {
	//	run.Spec.DataLocation.Path = "modeld/live/tenants/default-tenant/dataproducts/" + run.Namespace +
	//		"/dataproductversions/" +
	//		*run.Spec.VersionName +
	//		"/datapipelines/" + *run.Spec.DataPipelineName + "/runs/" + run.Name
	//}

}
