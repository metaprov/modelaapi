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
var _ webhook.Defaulter = &CronSqlQuery{}

func (r *CronSqlQuery) Default() {

	if r.Spec.Owner == nil {
		r.Spec.Owner = util.StrPtr("")
	}

	if r.Spec.Description == nil {
		r.Spec.Description = util.StrPtr("")
	}

}

// validation
var _ webhook.Validator = &CronSqlQuery{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (recipe *CronSqlQuery) ValidateCreate() error {
	return recipe.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (recipe *CronSqlQuery) ValidateUpdate(old runtime.Object) error {
	return recipe.validate()
}

func (recipe *CronSqlQuery) validate() error {
	return nil
}

func (recipe *CronSqlQuery) ValidateDelete() error {
	return nil
}
