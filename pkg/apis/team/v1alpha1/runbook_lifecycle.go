/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

//==============================================================================
//  Core api objects
//==============================================================================

//==============================================================================
//  Finalizer
//==============================================================================

func (runbook *RunBook) HasFinalizer() bool {
	return util.HasFin(&runbook.ObjectMeta, infra.GroupName)
}
func (runbook *RunBook) AddFinalizer() { util.AddFin(&runbook.ObjectMeta, infra.GroupName) }
func (runbook *RunBook) RemoveFinalizer() {
	util.RemoveFin(&runbook.ObjectMeta, infra.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (runbook *RunBook) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/runbooks/%s-runbook.yaml", root, runbook.ObjectMeta.Name), nil
}

func (runbook *RunBook) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(runbook)
}

func (runbook *RunBook) RootUri() string {
	return fmt.Sprintf("tenants/%s/runbooks/%s", runbook.Namespace, runbook.Name)
}

func (runbook *RunBook) ManifestUri() string {
	return fmt.Sprintf("%s/%s-runbook.yaml", runbook.RootUri(), runbook.Name)
}

// Merge or update condition
func (runbook *RunBook) CreateOrUpdateCond(cond RunBookCondition) {
	i := runbook.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		runbook.Status.Conditions = append(runbook.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := runbook.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastUpdateTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	runbook.Status.Conditions[i] = current
}

func (runbook *RunBook) GetCondIdx(t RunBookConditionType) int {
	for i, v := range runbook.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (runbook *RunBook) GetCond(t RunBookConditionType) RunBookCondition {
	for _, v := range runbook.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return RunBookCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (runbook *RunBook) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", runbook.Namespace, runbook.Name)
}

func ParseRunBookYaml(content []byte) (*RunBook, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(v1alpha1.SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*RunBook)
	return r, nil
}
