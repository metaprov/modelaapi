/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeld-api/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeld-api/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func (image *MachineImage) Default() {

}

func NewMachineImage(
	ns string,
	name string,
	receiverType catalog.NotificationReceiver,
	apiCred string) *MachineImage {
	result := &MachineImage{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Kind = "MachineImage"
	result.Default()
	return result
}

//==============================================================================
// Finalizer
//==============================================================================

func (image *MachineImage) HasFinalizer() bool {
	return util.HasFin(&image.ObjectMeta, metav1.GroupName)
}
func (image *MachineImage) AddFinalizer() { util.AddFin(&image.ObjectMeta, metav1.GroupName) }
func (image *MachineImage) RemoveFinalizer() {
	util.RemoveFin(&image.ObjectMeta, metav1.GroupName)
}

// Merge or update condition
func (image *MachineImage) CreateOrUpdateCond(cond MachineImageCondition) {
	i := image.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		image.Status.Conditions = append(image.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := image.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	image.Status.Conditions[i] = current
}

func (image *MachineImage) GetCondIdx(t MachineImageConditionType) int {
	for i, v := range image.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (image *MachineImage) GetCond(t MachineImageConditionType) MachineImageCondition {
	for _, v := range image.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return MachineImageCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}
