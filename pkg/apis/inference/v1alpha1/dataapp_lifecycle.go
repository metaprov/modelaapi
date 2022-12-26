/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	nwv1 "k8s.io/api/networking/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (dataapp *DataApp) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(dataapp).
		Complete()
}

func (dataapp DataApp) HasFinalizer() bool { return util.HasFin(&dataapp.ObjectMeta, data.GroupName) }
func (dataapp *DataApp) AddFinalizer()     { util.AddFin(&dataapp.ObjectMeta, data.GroupName) }
func (dataapp *DataApp) RemoveFinalizer()  { util.RemoveFin(&dataapp.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (dataapp *DataApp) CreateOrUpdateCond(cond metav1.Condition) {
	i := dataapp.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		dataapp.Status.Conditions = append(dataapp.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := dataapp.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	dataapp.Status.Conditions[i] = current
}

func (dataapp *DataApp) GetCondIdx(t string) int {
	for i, v := range dataapp.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (dataapp DataApp) GetCond(t string) metav1.Condition {
	for _, v := range dataapp.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (dataapp DataApp) IsReady() bool {
	return dataapp.GetCond(DataAppReady).Status == metav1.ConditionTrue
}

func (dataapp DataApp) IsFailed() bool {
	return dataapp.GetCond(DataAppReady).Status == metav1.ConditionFalse &&
		dataapp.GetCond(DataAppReady).Reason == "Failed"
}

func (dataapp *DataApp) Populate(name string) {

	dataapp.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modela-data",
	}

	dataapp.Spec = DataAppSpec{
		VersionName: util.StrPtr("iris-0.0.1"),
	}
}

func (dataapp *DataApp) IsInCond(ct string) bool {
	current := dataapp.GetCond(ct)
	return current.Status == metav1.ConditionTrue
}

func (dataapp *DataApp) PrintConditions() {
	for _, v := range dataapp.Status.Conditions {
		fmt.Println(v)
	}
}

func (dataapp *DataApp) MarkReady() {
	dataapp.CreateOrUpdateCond(metav1.Condition{
		Type:   DataAppReady,
		Status: metav1.ConditionTrue,
	})
}

func (dataapp DataApp) Deleted() bool {
	return !dataapp.ObjectMeta.DeletionTimestamp.IsZero()
}

func (dataapp *DataApp) MarkSaved() {
	dataapp.CreateOrUpdateCond(metav1.Condition{
		Type:   DataAppSaved,
		Status: metav1.ConditionTrue,
	})
}

func (dataapp DataApp) IsSaved() bool {
	return dataapp.GetCond(DataAppSaved).Status == metav1.ConditionTrue
}

func (dataapp DataApp) ConstructGrpcRule(fqdn string, serviceName string) *nwv1.IngressRule {
	prefix := nwv1.PathTypePrefix
	return &nwv1.IngressRule{
		Host: dataapp.Name + "." + fqdn,
		IngressRuleValue: nwv1.IngressRuleValue{
			HTTP: &nwv1.HTTPIngressRuleValue{
				Paths: []nwv1.HTTPIngressPath{
					{
						PathType: &prefix,
						Path:     "/",
						Backend: nwv1.IngressBackend{
							Service: &nwv1.IngressServiceBackend{
								Name: serviceName,
								Port: nwv1.ServiceBackendPort{
									Number: *dataapp.Spec.Access.Port,
								},
							},
							Resource: nil,
						},
					},
				},
			},
		},
	}
}

func (dataapp DataApp) ConstructRESTRule(fqdn string, serviceName string) *nwv1.IngressRule {
	prefix := nwv1.PathTypePrefix
	return &nwv1.IngressRule{
		Host: "dataapps." + fqdn,
		IngressRuleValue: nwv1.IngressRuleValue{
			HTTP: &nwv1.HTTPIngressRuleValue{
				Paths: []nwv1.HTTPIngressPath{
					{
						PathType: &prefix,
						Path:     "/v1/dataapps/" + dataapp.Name,
						Backend: nwv1.IngressBackend{
							Service: &nwv1.IngressServiceBackend{
								Name: serviceName,
								Port: nwv1.ServiceBackendPort{
									Number: *dataapp.Spec.Access.Port + 1,
								},
							},
							Resource: nil,
						},
					},
				},
			},
		},
	}
}
