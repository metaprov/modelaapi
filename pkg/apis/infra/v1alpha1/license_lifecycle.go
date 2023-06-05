/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"time"

	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
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
func (license License) HasExpired() bool {
	now := metav1.Now()
	return license.Spec.ExpireAt.Before(&now)
}

// Check if we are still in free trial
func (license License) IsFreeTrial() bool {
	return time.Now().Unix() < license.Spec.TrialEndAt.Time.Unix()
}

//==============================================================================
// Finalizer
//==============================================================================

func (license License) HasFinalizer() bool { return util.HasFin(&license.ObjectMeta, infra.GroupName) }
func (license *License) AddFinalizer()     { util.AddFin(&license.ObjectMeta, infra.GroupName) }
func (license *License) RemoveFinalizer()  { util.RemoveFin(&license.ObjectMeta, infra.GroupName) }

// Merge or update condition
func (license *License) CreateOrUpdateCond(cond metav1.Condition) {
	i := license.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		license.Status.Conditions = append(license.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := license.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	license.Status.Conditions[i] = current
}

func (license License) GetCondIdx(t string) int {
	for i, v := range license.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (license License) GetCond(t LicenseConditionType) metav1.Condition {
	for _, v := range license.Status.Conditions {
		if v.Type == string(t) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(t),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (license License) IsValid() bool {
	return license.GetCond(LicenseValid).Status == metav1.ConditionTrue
}

func (license License) RootURI() string {
	return fmt.Sprintf("tenant/%s/licenses/%s", license.Namespace, license.Name)
}

func (license License) ManifestURI() string {
	return fmt.Sprintf("%s/%s-license.yaml", license.RootURI(), license.Name)
}

func ParseLicenseYaml(content []byte) (*License, error) {

	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*License)
	return r, nil
}

func (license *License) MarkValid() {
	license.CreateOrUpdateCond(metav1.Condition{
		Type:   string(LicenseValid),
		Status: metav1.ConditionTrue,
		Reason: string(LicenseValid),
	})
}

func (license License) GetStatus() interface{} {
	return license.Status
}

func (license License) GetObservedGeneration() int64 {
	return license.Status.ObservedGeneration
}

func (license *License) SetObservedGeneration(generation int64) {
	license.Status.ObservedGeneration = generation
}

func (license *License) SetUpdatedAt(time *metav1.Time) {
	license.Status.UpdatedAt = time
}

func (license *License) SetStatus(status interface{}) {
	license.Status = status.(LicenseStatus)
}
