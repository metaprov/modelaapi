/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"gopkg.in/yaml.v2"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"k8s.io/client-go/kubernetes/scheme"
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

func (alg *Algorithm) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(alg)
}

func (alg *Algorithm) RepEntry() (string, error) {
	return fmt.Sprintf("algs/%s", alg.ObjectMeta.Name), nil
}

func (alg *Algorithm) ValidateDelete() error {
	panic("implement me")
}

func ParseAlgorithmServingYaml(content []byte) (*Algorithm, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Algorithm)
	return r, nil
}
