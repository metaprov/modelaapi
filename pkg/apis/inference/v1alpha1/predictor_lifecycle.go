package v1alpha1

import (
	"fmt"
	"github.com/metaprov/modeld-api/pkg/apis/inference"
	"github.com/metaprov/modeld-api/pkg/util"
	"gopkg.in/yaml.v2"
	kapps "k8s.io/api/apps/v1"
	v1 "k8s.io/api/core/v1"
	nwv1beta1 "k8s.io/api/networking/v1beta1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/intstr"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (predictor *Predictor) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(predictor).
		Complete()
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

func (predictor *Predictor) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(predictor)
}

func (r *Predictor) GreenName() string {
	return "green-" + r.Name
}

func (r *Predictor) MirrorName() string {
	return "mirror-" + r.Name
}

func (r *Predictor) ConstructService(name string) *v1.Service {
	result := &v1.Service{
		ObjectMeta: metav1.ObjectMeta{Name: name, Namespace: r.Spec.ServingSiteRef.Name},
		Spec: v1.ServiceSpec{
			Selector: map[string]string{"predictor": r.Name},
			Ports: []v1.ServicePort{
				{
					Name: "grpc",
					Port: *r.Spec.Port,
					TargetPort: intstr.IntOrString{
						Type:   0,
						IntVal: 8080,
					},
					NodePort: 0,
				},
			},
		},
	}

	if *r.Spec.AccessType == ClusterPortAccessType {
		result.Spec.Type = v1.ServiceTypeClusterIP
	}

	if *r.Spec.AccessType == NodePortAccessType {
		result.Spec.Type = v1.ServiceTypeNodePort

	}

	if *r.Spec.AccessType == LoadBalancerAccessType {
		result.Spec.Type = v1.ServiceTypeLoadBalancer
	}

	if *r.Spec.AccessType == IngressAccessType {
		result.Spec.Type = v1.ServiceTypeClusterIP
	}

	// For mesh we still use cluster ip. Since we would access it from the mesh.
	if *r.Spec.AccessType == MeshAccessType {
		result.Spec.Type = v1.ServiceTypeClusterIP
	}

	if *r.Spec.AccessType == NoneAccessType {

	}

	return result

}

func (r *Predictor) ConstructIngressRule(fdqn string, serviceName string) *nwv1beta1.IngressRule {
	return &nwv1beta1.IngressRule{
		Host: fdqn,
		IngressRuleValue: nwv1beta1.IngressRuleValue{
			HTTP: &nwv1beta1.HTTPIngressRuleValue{
				Paths: []nwv1beta1.HTTPIngressPath{
					{
						Path: *r.Spec.Path,
						Backend: nwv1beta1.IngressBackend{
							ServiceName: serviceName,
							ServicePort: intstr.IntOrString{
								IntVal: *r.Spec.Port,
							},
						},
					},
				},
			},
		},
	}
}

func (r *Predictor) ConstructDeployment(image string, name string, cachePath string) *kapps.Deployment {

	ns := r.Spec.ServingSiteRef.Name

	return &kapps.Deployment{
		ObjectMeta: metav1.ObjectMeta{Name: name, Namespace: ns},
		Spec: kapps.DeploymentSpec{
			Replicas: util.Int32Ptr(1),
			Selector: &metav1.LabelSelector{
				MatchLabels: map[string]string{"predictor": r.Name},
			},
			Template: v1.PodTemplateSpec{
				ObjectMeta: metav1.ObjectMeta{
					Labels: map[string]string{"predictor": r.Name},
				},
				Spec: v1.PodSpec{
					Volumes: []v1.Volume{
						{
							Name:         "data",
							VolumeSource: v1.VolumeSource{EmptyDir: &v1.EmptyDirVolumeSource{}},
						},
					},
					Containers: []v1.Container{
						{
							Name:  "main",
							Image: image,
							Ports: []v1.ContainerPort{{ContainerPort: 8080}},
							VolumeMounts: []v1.VolumeMount{
								{
									Name:      "data",
									MountPath: cachePath,
								},
							},
							ImagePullPolicy: v1.PullIfNotPresent,
						},
						{
							Name:  "clouds",
							Image: "quay.io/metaprov/modeld-clouds",
							Ports: []v1.ContainerPort{{ContainerPort: 8090}},
							VolumeMounts: []v1.VolumeMount{
								{
									Name:      "data",
									MountPath: cachePath,
								},
							},
							ImagePullPolicy: v1.PullIfNotPresent,
						},
					},
				},
			},
		},
	}

}

func (predictor *Predictor) MarkArchived() {
	predictor.CreateOrUpdateCond(PredictorCondition{
		Type:   PredictorArchived,
		Status: v1.ConditionTrue,
	})
}

func (predictor *Predictor) Archived() bool {
	return predictor.GetCond(PredictorArchived).Status == v1.ConditionTrue
}
