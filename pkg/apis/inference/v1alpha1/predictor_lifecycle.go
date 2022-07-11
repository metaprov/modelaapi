package v1alpha1

import (
	"fmt"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	kapps "k8s.io/api/apps/v1"
	v1 "k8s.io/api/core/v1"
	nwv1 "k8s.io/api/networking/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (predictor *Predictor) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(predictor).
		Complete()
}

func AddOrUpdateK8sStatuses(current []KubernetesObjectStatus, status KubernetesObjectStatus) []KubernetesObjectStatus {
	// check
	for i := 0; i < len(current); i++ {
		if current[i].Ref.Name == status.Ref.Name && current[i].Ref.Namespace == status.Ref.Namespace && current[i].Ref.Kind == status.Ref.Kind {
			current[i].Status = status.Status
			return current
		}
	}
	// this point we add the status
	current = append(current, status)
	return current

}

func (predictor *Predictor) Selector() *metav1.LabelSelector {
	result := &metav1.LabelSelector{
		MatchLabels: map[string]string{},
	}
	result.MatchLabels["predictor"] = predictor.ObjectMeta.Name
	return result
}

//==============================================================================
// Finalizer
//==============================================================================

func (predictor *Predictor) HasFinalizer() bool {
	return util.HasFin(&predictor.ObjectMeta, inference.GroupName)
}
func (predictor *Predictor) AddFinalizer() { util.AddFin(&predictor.ObjectMeta, inference.GroupName) }
func (predictor *Predictor) RemoveFinalizer() {
	util.RemoveFin(&predictor.ObjectMeta, inference.GroupName)
}

//==============================================================================
// predictor state
//==============================================================================

// Merge or update condition
// Merge or update condition
func (predictor *Predictor) CreateOrUpdateCond(cond PredictorCondition) {
	i := predictor.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		predictor.Status.Conditions = append(predictor.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := predictor.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	predictor.Status.Conditions[i] = current
}

func (predictor *Predictor) GetCondIdx(t PredictorConditionType) int {
	for i, v := range predictor.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (predictor *Predictor) GetCond(t PredictorConditionType) PredictorCondition {
	for _, v := range predictor.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return PredictorCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (predictor *Predictor) IsReady() bool {
	return predictor.GetCond(PredictorReady).Status == v1.ConditionTrue
}

func (predictor *Predictor) IsFailed() bool {
	return predictor.GetCond(PredictorReady).Status == v1.ConditionFalse &&
		predictor.GetCond(PredictorReady).Reason == "Failed"
}

func ParsePredictorYaml(content []byte) (*Predictor, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Predictor)
	return r, nil
}

func (predictor *Predictor) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictors/%s", predictor.Namespace, predictor.Name)
}

func (predictor *Predictor) ManifestUri() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", predictor.RootUri(), predictor.Name)
}

//    dataproducts/*/predictor/*/predictor-<name>.yaml

//    dataproducts/*/predictor/*/manifests/deployment-<name>.yaml
func (predictor *Predictor) DeploymentUri() string {
	return fmt.Sprintf("%s/%s-deployment.yaml", predictor.RootUri(), predictor.Name)
}

//    dataproducts/*/predictor/*/manifests/service-<name>.yaml
func (predictor *Predictor) ServiceUri() string {
	return fmt.Sprintf("%s/%s-service.yaml", predictor.RootUri(), predictor.Name)
}

func (r *Predictor) ServiceName() string {
	return r.Name
}

func (r *Predictor) FullServiceName() string {
	return r.Name + "." + r.Spec.ServingSiteRef.Name + ".svc.cluster.local"
}

func (r *Predictor) DeploymentName() string {
	return r.Name
}

func (r *Predictor) GreenName() string {
	return "green-" + r.Name
}

func (r *Predictor) MirrorName() string {
	return "mirror-" + r.Name
}

func (predictor *Predictor) MarkSaved() {
	predictor.CreateOrUpdateCond(PredictorCondition{
		Type:   PredictorSaved,
		Status: v1.ConditionTrue,
	})
}

func (predictor *Predictor) IsSaved() bool {
	return predictor.GetCond(PredictorSaved).Status == v1.ConditionTrue
}

func (predictor *Predictor) MarkReady() {
	predictor.CreateOrUpdateCond(PredictorCondition{
		Type:   PredictorReady,
		Status: v1.ConditionTrue,
	})
}

func (predictor *Predictor) MarkFailed(err string) {
	predictor.CreateOrUpdateCond(PredictorCondition{
		Type:    PredictorReady,
		Status:  v1.ConditionFalse,
		Reason:  "Failed",
		Message: err,
	})
	predictor.Status.FailureMessage = util.StrPtr(err)
}

func (predictor *Predictor) ConstructGrpcRule(fqdn string, serviceName string) *nwv1.IngressRule {
	prefix := nwv1.PathTypePrefix
	return &nwv1.IngressRule{
		Host: predictor.Name + "." + fqdn,
		IngressRuleValue: nwv1.IngressRuleValue{
			HTTP: &nwv1.HTTPIngressRuleValue{
				Paths: []nwv1.HTTPIngressPath{
					{
						Path:     "/",
						PathType: &prefix,
						Backend: nwv1.IngressBackend{
							Service: &nwv1.IngressServiceBackend{
								Name: serviceName,
								Port: nwv1.ServiceBackendPort{
									Number: *predictor.Spec.Access.Port,
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

func (predictor *Predictor) ConstructRESTRule(fqdn string, serviceName string) *nwv1.IngressRule {
	prefix := nwv1.PathTypePrefix
	return &nwv1.IngressRule{
		Host: "predictors." + fqdn,
		IngressRuleValue: nwv1.IngressRuleValue{
			HTTP: &nwv1.HTTPIngressRuleValue{
				Paths: []nwv1.HTTPIngressPath{
					{
						PathType: &prefix,
						Path:     "/v1/predictors/" + predictor.Name,
						Backend: nwv1.IngressBackend{
							Service: &nwv1.IngressServiceBackend{
								Name: serviceName,
								Port: nwv1.ServiceBackendPort{
									Number: *predictor.Spec.Access.Port + 1,
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

func (p *Predictor) UpdateK8sStatus(model training.Model, deployment kapps.Deployment, k8sStatus KubernetesObjectStatus) {
	// update live model
	if p.Spec.Live.ModelRef.Name == model.Name {
		status := p.Status.Live
		status.ObjectStatuses = AddOrUpdateK8sStatuses(status.ObjectStatuses, k8sStatus)
		p.Status.Live = status
	} else {
		found := false
		// else update shddow model k8sStatus
		for i, v := range p.Spec.Shadows {
			if v.ModelRef.Name == model.Name {
				found = true
				shadowModelStatus := p.Status.Shadows[i]
				shadowModelStatus.ObjectStatuses = AddOrUpdateK8sStatuses(shadowModelStatus.ObjectStatuses, k8sStatus)
				p.Status.Shadows[i] = shadowModelStatus
			}
		}
		if !found {
			status := ModelDeploymentStatus{
				DeploymentRef: v1.ObjectReference{
					Name:      deployment.Name,
					Namespace: deployment.Namespace,
					Kind:      "Deployment",
				},
				ModelName:    model.Name,
				ModelVersion: *model.Spec.ModelVersion,
			}
			status.ObjectStatuses = AddOrUpdateK8sStatuses(status.ObjectStatuses, k8sStatus)
			p.Status.Shadows = append(p.Status.Shadows, status)
			klog.InfoS("added model deployment k8sStatus to predictor", "controller", "predictor", "model", model.Name)
		}
	}

}
