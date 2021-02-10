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

func (framework *MLFramework) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// defaulting
var _ webhook.Defaulter = &MLFramework{}

func (framework *MLFramework) Default() {

}

// validation
var _ webhook.Validator = &MLFramework{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (framework *MLFramework) ValidateCreate() error {
	_, e := framework.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (framework *MLFramework) ValidateUpdate(old runtime.Object) error {
	_, e := framework.Validate()
	return e.ToAggregate()
}

func (framework *MLFramework) PodName() string {
	return "trainer-pod-" + framework.Name
}

// Return the on disk rep location
func (framework *MLFramework) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/algs/%s", root, framework.ObjectMeta.Name), nil
}

func (framework *MLFramework) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(framework)
}

func (framework *MLFramework) RepEntry() (string, error) {
	return fmt.Sprintf("algs/%s", framework.ObjectMeta.Name), nil
}

func (framework *MLFramework) ValidateDelete() error {
	return nil
}

func ParseMLFrameworkServingYaml(content []byte) (*MLFramework, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*MLFramework)
	return r, nil
}
