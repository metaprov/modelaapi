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

func (tclass *WorkloadClass) Validate() (bool, field.ErrorList) {
	var errors field.ErrorList
	return len(errors) == 0, errors
}

// validation
var _ webhook.Validator = &WorkloadClass{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (tclass *WorkloadClass) ValidateCreate() error {
	_, e := tclass.Validate()
	return e.ToAggregate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (tclass *WorkloadClass) ValidateUpdate(old runtime.Object) error {
	_, e := tclass.Validate()
	return e.ToAggregate()
}

func (tclass *WorkloadClass) PodName() string {
	return "trainer-pod-" + tclass.Name
}

// Return the on disk rep location
func (tclass *WorkloadClass) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/algs/%s", root, tclass.ObjectMeta.Name), nil
}

func (tclass *WorkloadClass) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(tclass)
}

func (tclass *WorkloadClass) RepEntry() (string, error) {
	return fmt.Sprintf("algs/%s", tclass.ObjectMeta.Name), nil
}

func (tclass *WorkloadClass) ValidateDelete() error {
	return nil
}

func ParseWorkloadClassYaml(content []byte) (*WorkloadClass, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*WorkloadClass)
	return r, nil
}
