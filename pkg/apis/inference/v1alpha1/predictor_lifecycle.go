package v1alpha1

import (
	"fmt"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	kapps "k8s.io/api/apps/v1"
	v1 "k8s.io/api/core/v1"
	nwv1 "k8s.io/api/networking/v1"
	rbacv1 "k8s.io/api/rbac/v1"
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

func (predictor Predictor) Selector() *metav1.LabelSelector {
	result := &metav1.LabelSelector{
		MatchLabels: map[string]string{},
	}
	result.MatchLabels["predictor"] = predictor.ObjectMeta.Name
	return result
}

//==============================================================================
// Finalizer
//==============================================================================

func (predictor Predictor) HasFinalizer() bool {
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

func (predictor Predictor) IsReady() bool {
	return predictor.GetCond(PredictorReady).Status == v1.ConditionTrue
}

func (predictor Predictor) IsFailed() bool {
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

func (predictor Predictor) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/predictors/%s", predictor.Namespace, predictor.Name)
}

func (predictor Predictor) ManifestURI() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", predictor.RootURI(), predictor.Name)
}

//    dataproducts/*/predictor/*/predictor-<name>.yaml

//    dataproducts/*/predictor/*/manifests/deployment-<name>.yaml
func (predictor Predictor) DeploymentURI() string {
	return fmt.Sprintf("%s/%s-deployment.yaml", predictor.RootURI(), predictor.Name)
}

//    dataproducts/*/predictor/*/manifests/service-<name>.yaml
func (predictor Predictor) ServiceURI() string {
	return fmt.Sprintf("%s/%s-service.yaml", predictor.RootURI(), predictor.Name)
}

func (predictor Predictor) ServiceName() string {
	return predictor.Name
}

func (predictor Predictor) FullServiceName() string {
	return predictor.Name + "." + predictor.Spec.ServingSiteRef.Name + ".svc.cluster.local"
}

func (predictor Predictor) DeploymentName() string {
	return predictor.Name
}

func (predictor Predictor) GreenName() string {
	return "green-" + predictor.Name
}

func (predictor Predictor) MirrorName() string {
	return "mirror-" + predictor.Name
}

func (predictor *Predictor) MarkSaved() {
	predictor.CreateOrUpdateCond(PredictorCondition{
		Type:   PredictorSaved,
		Status: v1.ConditionTrue,
	})
}

func (predictor Predictor) IsSaved() bool {
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

func (predictor Predictor) ConstructGrpcRule(fqdn string, serviceName string) *nwv1.IngressRule {
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

func (predictor Predictor) ConstructRESTRule(serviceName string) *nwv1.HTTPIngressPath {
	prefix := nwv1.PathTypePrefix
	return &nwv1.HTTPIngressPath{
		PathType: &prefix,
		Path:     "/v1/predictors/" + predictor.Name,
		Backend: nwv1.IngressBackend{
			Service: &nwv1.IngressServiceBackend{
				Name: serviceName,
				Port: nwv1.ServiceBackendPort{
					Number: *predictor.Spec.Access.Port + 1,
				},
			},
		},
	}
}

func (predictor *Predictor) UpdateK8sDeploymentStatus(model training.Model, deployment kapps.Deployment, k8sStatus KubernetesObjectStatus) {
	// update live model
	found := false
	// else update shddow model k8sStatus
	for i, v := range predictor.Status.ModelStatus {
		if v.ModelName == model.Name {
			found = true
			shadowModelStatus := predictor.Status.ModelStatus[i]
			shadowModelStatus.ObjectStatuses = AddOrUpdateK8sStatuses(shadowModelStatus.ObjectStatuses, k8sStatus)
			predictor.Status.ModelStatus[i] = shadowModelStatus
		}
	}
	if !found {
		status := ModelDeploymentStatus{
			DeploymentRef: v1.ObjectReference{
				Name:      deployment.Name,
				Namespace: deployment.Namespace,
				Kind:      "Serving",
			},
			ModelName:    model.Name,
			ModelVersion: *model.Spec.ModelVersion,
		}
		status.ObjectStatuses = AddOrUpdateK8sStatuses(status.ObjectStatuses, k8sStatus)
		predictor.Status.ModelStatus = append(predictor.Status.ModelStatus, status)
	}
}

func (predictor *Predictor) UpdateK8sServiceStatus(model training.Model, service v1.Service, k8sStatus KubernetesObjectStatus) {
	// update live model
	found := false
	// else update shddow model k8sStatus
	for i, v := range predictor.Status.ModelStatus {
		if v.ModelName == model.Name {
			found = true
			shadowModelStatus := predictor.Status.ModelStatus[i]
			shadowModelStatus.ObjectStatuses = AddOrUpdateK8sStatuses(shadowModelStatus.ObjectStatuses, k8sStatus)
			predictor.Status.ModelStatus[i] = shadowModelStatus
		}
	}
	if !found {
		status := ModelDeploymentStatus{
			DeploymentRef: v1.ObjectReference{
				Name:      service.Name,
				Namespace: service.Namespace,
				Kind:      "Service",
			},
			ModelName:    model.Name,
			ModelVersion: *model.Spec.ModelVersion,
		}
		status.ObjectStatuses = AddOrUpdateK8sStatuses(status.ObjectStatuses, k8sStatus)
		predictor.Status.ModelStatus = append(predictor.Status.ModelStatus, status)
	}
}

// Return the live model name.
func (predictor *Predictor) GetLiveModelName() string {
	for _, v := range predictor.Spec.Models {
		if *v.Role == catalog.LiveModelRole {
			return v.ModelRef.Name
		}
	}
	return ""
}

// Get the first live model or none if none exist
func (predictor Predictor) GetLiveModel() *catalog.ModelDeploymentSpec {
	for _, v := range predictor.Spec.Models {
		if *v.Role == catalog.LiveModelRole {
			return &v
		}
	}
	return nil
}

func (predictor Predictor) GetShadowModels() []catalog.ModelDeploymentSpec {
	result := make([]catalog.ModelDeploymentSpec, 0)
	for _, v := range predictor.Spec.Models {
		if *v.Role == catalog.LiveModelRole {
			continue
		}
		result = append(result, v)
	}
	return result
}

func (predictor Predictor) ClusterRole() *rbacv1.ClusterRole {
	return &rbacv1.ClusterRole{
		ObjectMeta: metav1.ObjectMeta{
			Name: catalog.PredictorRole,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{"get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"},
				APIGroups:       []string{"data.modela.ai"},
				Resources:       []string{"datasets", "datasets/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"},
				APIGroups:       []string{"data.modela.ai"},
				Resources:       []string{"featurehistograms", "featurehistograms/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"},
				APIGroups:       []string{"data.modela.ai"},
				Resources:       []string{"datasources", "datasources/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"},
				APIGroups:       []string{"training.modela.ai"},
				Resources:       []string{"models", "models/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"},
				APIGroups:       []string{"training.modela.ai"},
				Resources:       []string{"studies", "studies/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"},
				APIGroups:       []string{"inference.modela.ai"},
				Resources:       []string{"predictors", "predictors/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// Create a role binding for a job
func (predictor Predictor) RoleBinding(ns string) *rbacv1.RoleBinding {
	return &rbacv1.RoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name:      predictor.Name,
			Namespace: ns,
		},
		Subjects: []rbacv1.Subject{
			{
				Kind:      "ServiceAccount",
				APIGroup:  "",
				Name:      predictor.Name,
				Namespace: ns,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "ClusterRole",
			Name:     catalog.PredictorRole,
		},
	}
}

func (predictor Predictor) ServiceAccount(ns string) *v1.ServiceAccount {
	return &v1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      predictor.Name,
			Namespace: ns,
		},
	}
}
