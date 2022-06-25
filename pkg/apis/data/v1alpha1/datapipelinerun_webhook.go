/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
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
	//	run.Spec.DataLocation.Path = "modela/live/tenants/default-tenant/dataproducts/" + run.Namespace +
	//		"/dataproductversions/" +
	//		*run.Spec.VersionName +
	//		"/datapipelines/" + *run.Spec.DataPipelineName + "/runs/" + run.Name
	//}
	if run.ObjectMeta.Labels == nil {
		run.ObjectMeta.Labels = make(map[string]string)
	}
	if run.Spec.DataPipelineName != nil {
		run.ObjectMeta.Labels[catalog.DataPipelineLabelKey] = *run.Spec.DataPipelineName
	}
	if run.Spec.VersionName != nil {
		run.ObjectMeta.Labels[catalog.DataProductVersionLabelKey] = *run.Spec.VersionName
	}
	if run.Spec.Owner != nil {
		run.ObjectMeta.Labels["modela.ai/owner"] = *run.Spec.Owner
	}
	run.ObjectMeta.Labels[catalog.TenantLabelKey] = run.Spec.LabRef.Namespace
	run.ObjectMeta.Labels[catalog.LabLabelKey] = run.Spec.LabRef.Name

}
