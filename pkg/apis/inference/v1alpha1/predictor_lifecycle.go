package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	training "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	"github.com/pkg/errors"
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
func (predictor *Predictor) CreateOrUpdateCond(cond metav1.Condition) {
	i := predictor.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		predictor.Status.Conditions = append(predictor.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := predictor.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	predictor.Status.Conditions[i] = current
}

func (predictor *Predictor) GetCondIdx(t string) int {
	for i, v := range predictor.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (predictor *Predictor) GetCond(t string) metav1.Condition {
	for _, v := range predictor.Status.Conditions {
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

func (predictor Predictor) IsReady() bool {
	return predictor.GetCond(PredictorReady).Status == metav1.ConditionTrue
}

func (predictor Predictor) IsFailed() bool {
	return predictor.GetCond(PredictorReady).Status == metav1.ConditionFalse &&
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

// dataproducts/*/predictor/*/manifests/deployment-<name>.yaml
func (predictor Predictor) DeploymentURI() string {
	return fmt.Sprintf("%s/%s-deployment.yaml", predictor.RootURI(), predictor.Name)
}

// dataproducts/*/predictor/*/manifests/service-<name>.yaml
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

func (predictor *Predictor) MarkReady() {
	predictor.CreateOrUpdateCond(metav1.Condition{
		Type:   PredictorReady,
		Status: metav1.ConditionTrue,
		Reason: PredictorReady,
	})
}

func (predictor *Predictor) MarkFailed(reason string, err string) {
	predictor.CreateOrUpdateCond(metav1.Condition{
		Type:    PredictorReady,
		Status:  metav1.ConditionFalse,
		Reason:  reason,
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

// Return the live model name.
func (predictor *Predictor) GetLiveModelName() string {
	for _, v := range predictor.Spec.Models {
		if v.Role == catalog.LiveModelRole {
			return v.ModelRef.Name
		}
	}
	return ""
}

// Set the live model to the new model, if the new model is already a shadow model, return an error
func (predictor *Predictor) SetLiveModel(model *training.Model) error {
	role := catalog.LiveModelRole
	if len(predictor.Spec.Models) == 0 {
		predictor.Spec.Models = append(predictor.Spec.Models, catalog.ModelDeploymentSpec{
			ModelRef: v1.ObjectReference{Name: model.Name, Namespace: model.Namespace},
			Port:     util.Int32Ptr(8080),
			Traffic:  util.Int32Ptr(100),
			Role:     role,
		})
	}
	for _, v := range predictor.Spec.Models {
		if v.Role == catalog.ShadowModelRole {
			if v.ModelRef.Name == model.Name && v.ModelRef.Namespace == model.Namespace {
				return errors.New("model is already shadow")
			}
		}
	}

	for i, v := range predictor.Spec.Models {
		if v.Role == catalog.LiveModelRole {
			predictor.Spec.Models[i].ModelRef = v1.ObjectReference{
				Name:      model.Name,
				Namespace: model.Namespace,
			}
		}
	}
	return nil
}

// Get the first live model or none if none exist
func (predictor Predictor) GetLiveModel() *catalog.ModelDeploymentSpec {
	for _, v := range predictor.Spec.Models {
		if v.Role == catalog.LiveModelRole {
			return &v
		}
	}
	return nil
}

func (predictor Predictor) GetShadowModels() []catalog.ModelDeploymentSpec {
	result := make([]catalog.ModelDeploymentSpec, 0)
	for _, v := range predictor.Spec.Models {
		if v.Role == catalog.LiveModelRole {
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
				Namespace: predictor.Spec.ServingSiteRef.Name,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "ClusterRole",
			Name:     catalog.PredictorRole,
		},
	}
}

func (predictor Predictor) GetDeploymentStatus(name, image string, role catalog.ModelRole) *ModelDeploymentStatus {
	for _, liveStatus := range predictor.Status.ModelStatus {
		if liveStatus.ModelName == name && liveStatus.ImageName == image && liveStatus.ModelRole == role {
			return &liveStatus
		}
	}
	return &ModelDeploymentStatus{
		ModelName: name,
		ModelRole: role,
		ImageName: image,
	}
}

func (predictor Predictor) ActiveModels() map[string]string {
	activeModels := make(map[string]string)
	for _, v := range predictor.Spec.Models {
		activeModels[v.ModelRef.Name] = v.ModelRef.Name
	}
	return activeModels
}

func (predictor Predictor) GetStatus() proto.Message {
	return &predictor.Status
}

func (predictor Predictor) GetObservedGeneration() int64 {
	return predictor.Status.ObservedGeneration
}

func (predictor *Predictor) SetObservedGeneration(generation int64) {
	predictor.Status.ObservedGeneration = generation
}

func (predictor *Predictor) SetUpdatedAt(time *metav1.Time) {
	predictor.Status.UpdatedAt = time
}

func (predictor *Predictor) SetStatus(status interface{}) {
	predictor.Status = *status.(*PredictorStatus)
}
