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
var _ webhook.Defaulter = &DataApp{}

func (dataapp *DataApp) Default() {

	if dataapp.Spec.Owner == nil {
		dataapp.Spec.Owner = util.StrPtr("")
	}

	if dataapp.Spec.Description == nil {
		dataapp.Spec.Description = util.StrPtr("")
	}

	if dataapp.ObjectMeta.Labels == nil {
		dataapp.ObjectMeta.Labels = make(map[string]string)
	}
	dataapp.ObjectMeta.Labels["modela.ai/tenant"] = dataapp.Spec.ServingSiteRef.Namespace
	dataapp.ObjectMeta.Labels["modela.ai/servingsite"] = dataapp.Spec.ServingSiteRef.Name

}

// validation
var _ webhook.Validator = &DataApp{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (recipe *DataApp) ValidateCreate() error {
	return recipe.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (recipe *DataApp) ValidateUpdate(old runtime.Object) error {
	return recipe.validate()
}

func (recipe *DataApp) validate() error {
	return nil
}

func (recipe *DataApp) ValidateDelete() error {
	return nil
}
