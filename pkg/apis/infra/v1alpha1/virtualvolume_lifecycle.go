/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (volume *VirtualVolume) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(volume).
		Complete()
}

//==============================================================================
// Finilizer
//==============================================================================

func (volume *VirtualVolume) HasFinalizer() bool {
	return util.HasFin(&volume.ObjectMeta, infra.GroupName)
}
func (volume *VirtualVolume) AddFinalizer()    { util.AddFin(&volume.ObjectMeta, infra.GroupName) }
func (volume *VirtualVolume) RemoveFinalizer() { util.RemoveFin(&volume.ObjectMeta, infra.GroupName) }

// Merge or update condition
func (volume *VirtualVolume) CreateOrUpdateCond(cond VirtualVolumeCondition) {
	i := volume.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		volume.Status.Conditions = append(volume.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := volume.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	volume.Status.Conditions[i] = current
}

func (volume *VirtualVolume) GetCondIdx(t VirtualVolumeConditionType) int {
	for i, v := range volume.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (volume *VirtualVolume) GetCond(t VirtualVolumeConditionType) VirtualVolumeCondition {
	for _, v := range volume.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return VirtualVolumeCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (volume *VirtualVolume) IsReady() bool {
	return volume.GetCond(VirtualVolumeReady).Status == v1.ConditionTrue
}

func (volume *VirtualVolume) RootUri() string {
	return fmt.Sprintf("tenant/%s/virtualvolumes/%s", volume.Namespace, volume.Name)
}

func (volume *VirtualVolume) ManifestUri() string {
	return fmt.Sprintf("%s/%s-virtualvolume.yaml", volume.RootUri(), volume.Name)
}

func ParseVirtualVolumeYaml(content []byte) (*VirtualVolume, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*VirtualVolume)
	return r, nil
}

func (vv *VirtualVolume) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(vv)
}

func (vv *VirtualVolume) MarkReady() {
	vv.CreateOrUpdateCond(VirtualVolumeCondition{
		Type:   VirtualVolumeReady,
		Status: v1.ConditionTrue,
	})
}

func (vv *VirtualVolume) MarkArchived() {
	vv.CreateOrUpdateCond(VirtualVolumeCondition{
		Type:   VirtualVolumeSaved,
		Status: v1.ConditionTrue,
	})
}

func (vv *VirtualVolume) Archived() bool {
	return vv.GetCond(VirtualVolumeSaved).Status == v1.ConditionTrue
}
