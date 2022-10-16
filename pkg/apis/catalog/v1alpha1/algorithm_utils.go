/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

//==============================================================================
// Validate
//==============================================================================

func (alg Algorithm) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// defaulting
var _ webhook.Defaulter = &Algorithm{}

func (alg *Algorithm) Default() {

}

// validation
var _ webhook.Validator = &Algorithm{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (alg *Algorithm) ValidateCreate() error {
	_, e := alg.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (alg *Algorithm) ValidateUpdate(old runtime.Object) error {
	_, e := alg.Validate()
	return e.ToAggregate()
}

// Return the on disk rep location
func (alg *Algorithm) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/algs/%s", root, alg.ObjectMeta.Name), nil
}

func (alg *Algorithm) RepEntry() (string, error) {
	return fmt.Sprintf("algs/%s", alg.ObjectMeta.Name), nil
}

func (alg *Algorithm) ValidateDelete() error {
	panic("implement me")
}
