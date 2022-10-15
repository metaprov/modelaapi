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
	v1 "k8s.io/api/core/v1"
	nwv1 "k8s.io/api/networking/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (r *DataApp) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (r *DataApp) HasFinalizer() bool { return util.HasFin(&r.ObjectMeta, data.GroupName) }
func (r *DataApp) AddFinalizer()      { util.AddFin(&r.ObjectMeta, data.GroupName) }
func (r *DataApp) RemoveFinalizer()   { util.RemoveFin(&r.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (r *DataApp) CreateOrUpdateCond(cond DataAppCondition) {
	i := r.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		r.Status.Conditions = append(r.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := r.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	r.Status.Conditions[i] = current
}

func (r *DataApp) GetCondIdx(t DataAppConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *DataApp) GetCond(t DataAppConditionType) DataAppCondition {
	for _, v := range r.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DataAppCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *DataApp) IsReady() bool {
	return r.GetCond(DataAppReady).Status == v1.ConditionTrue
}

func (dataapp *DataApp) IsFailed() bool {
	return dataapp.GetCond(DataAppReady).Status == v1.ConditionFalse &&
		dataapp.GetCond(DataAppReady).Reason == "Failed"
}

func (r *DataApp) Populate(name string) {

	r.ObjectMeta = metav1.ObjectMeta{
		Name:      "iris",
		Namespace: "modela-data",
	}

	r.Spec = DataAppSpec{
		VersionName: util.StrPtr("iris-0.0.1"),
	}
}

func (r *DataApp) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

func (r *DataApp) IsInCond(ct DataAppConditionType) bool {
	current := r.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (r *DataApp) PrintConditions() {
	for _, v := range r.Status.Conditions {
		fmt.Println(v)
	}
}

func (r *DataApp) MarkReady() {
	r.CreateOrUpdateCond(DataAppCondition{
		Type:   DataAppReady,
		Status: v1.ConditionTrue,
	})
}

func (r *DataApp) Deleted() bool {
	return !r.ObjectMeta.DeletionTimestamp.IsZero()
}

func (r *DataApp) MarkSaved() {
	r.CreateOrUpdateCond(DataAppCondition{
		Type:   DataAppSaved,
		Status: v1.ConditionTrue,
	})
}

func (r *DataApp) IsSaved() bool {
	return r.GetCond(DataAppSaved).Status == v1.ConditionTrue
}

func (dataapp *DataApp) ConstructGrpcRule(fqdn string, serviceName string) *nwv1.IngressRule {
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

func (dataapp *DataApp) ConstructRESTRule(fqdn string, serviceName string) *nwv1.IngressRule {
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
