/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"time"

	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (license *License) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(license).
		Complete()
}

// Check if the license has expired.
func (license *License) HasExpired() bool {
	now := metav1.Now()
	return license.Spec.ExpireAt.Before(&now)
}

// Check if we are still in free trial
func (license *License) IsFreeTrial() bool {
	return time.Now().Unix() < license.Spec.TrialEnd.Time.Unix()
}

//==============================================================================
// Finalizer
//==============================================================================

func (license *License) HasFinalizer() bool { return util.HasFin(&license.ObjectMeta, infra.GroupName) }
func (license *License) AddFinalizer()      { util.AddFin(&license.ObjectMeta, infra.GroupName) }
func (license *License) RemoveFinalizer()   { util.RemoveFin(&license.ObjectMeta, infra.GroupName) }

// Merge or update condition
func (license *License) CreateOrUpdateCond(cond LicenseCondition) {
	i := license.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		license.Status.Conditions = append(license.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := license.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	license.Status.Conditions[i] = current
}

func (license *License) GetCondIdx(t LicenseConditionType) int {
	for i, v := range license.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (license *License) GetCond(t LicenseConditionType) LicenseCondition {
	for _, v := range license.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return LicenseCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (license *License) IsReady() bool {
	return license.GetCond(LicenseReady).Status == v1.ConditionTrue
}

func (license *License) RootUri() string {
	return fmt.Sprintf("tenant/%s/licenses/%s", license.Namespace, license.Name)
}

func (license *License) ManifestUri() string {
	return fmt.Sprintf("%s/%s-license.yaml", license.RootUri(), license.Name)
}

func ParseLicenseYaml(content []byte) (*License, error) {

	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*License)
	return r, nil
}

func (license *License) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(license)
}

func (license *License) MarkReady() {
	license.CreateOrUpdateCond(LicenseCondition{
		Type:   LicenseReady,
		Status: v1.ConditionTrue,
	})
}
