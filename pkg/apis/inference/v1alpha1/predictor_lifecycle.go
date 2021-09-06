package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/inference"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
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
