/*
 * Copyright (c) 2020.
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

func (pd *PublicDataset) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// validation
var _ webhook.Validator = &PublicDataset{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (pd *PublicDataset) ValidateCreate() error {
	_, e := pd.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (pd *PublicDataset) ValidateUpdate(old runtime.Object) error {
	_, e := pd.Validate()
	return e.ToAggregate()
}

func (pd *PublicDataset) PodName() string {
	return "trainer-pod-" + pd.Name
}

// Return the on disk rep location
func (pd *PublicDataset) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/algs/%s", root, pd.ObjectMeta.Name), nil
}

func (pd *PublicDataset) RepEntry() (string, error) {
	return fmt.Sprintf("algs/%s", pd.ObjectMeta.Name), nil
}

func (pd *PublicDataset) ValidateDelete() error {
	return nil
}
