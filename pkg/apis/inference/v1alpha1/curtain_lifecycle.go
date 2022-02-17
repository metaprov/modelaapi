package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/inference"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func NewCurtain(ns string, name string, image string, replicas int32, port int32) *Curtain {
	result := &Curtain{}
	result.ObjectMeta.Name = name
	result.ObjectMeta.Namespace = ns
	result.Default()

	return result
}

//==============================================================================
// Validate
//==============================================================================

func (cur *Curtain) Validate() (bool, []metav1.StatusCause) {
	var causes []metav1.StatusCause

	return len(causes) == 0, causes

}

func (cur *Curtain) Selector() *metav1.LabelSelector {
	result := &metav1.LabelSelector{
		MatchLabels: map[string]string{},
	}
	result.MatchLabels["predictor"] = cur.ObjectMeta.Name
	return result
}

//==============================================================================
// Finalizer
//==============================================================================

func (cur *Curtain) HasFinalizer() bool {
	return util.HasFin(&cur.ObjectMeta, inference.GroupName)
}
func (cur *Curtain) AddFinalizer()    { util.AddFin(&cur.ObjectMeta, inference.GroupName) }
func (cur *Curtain) RemoveFinalizer() { util.RemoveFin(&cur.ObjectMeta, inference.GroupName) }

//==============================================================================
// Staging object
//==============================================================================

func TestCurtain() *Curtain {
	return NewCurtain("dev", "wizard", "modela/x1", 1, 2000)
}

//==============================================================================
// predictor state
//==============================================================================

func (cur *Curtain) DeploymentName() string {
	return cur.Name + "-deployment"
}

func (cur *Curtain) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/curtains/%s", cur.Namespace, *cur.Spec.VersionName, cur.Name)
}

func (cur *Curtain) ManifestUri() string {
	return fmt.Sprintf("%s/%s-curtain.yaml", cur.RootUri(), cur.Name)
}

func ParseCurtainYaml(content []byte) (*Curtain, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Curtain)
	return r, nil
}

func (cur *Curtain) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(cur)
}

// Merge or update condition
// Merge or update condition
func (cur *Curtain) CreateOrUpdateCond(cond CurtainCondition) {
	i := cur.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		cur.Status.Conditions = append(cur.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := cur.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	cur.Status.Conditions[i] = current
}

func (cur *Curtain) GetCondIdx(t CurtainConditionType) int {
	for i, v := range cur.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (cur *Curtain) GetCond(t CurtainConditionType) CurtainCondition {
	for _, v := range cur.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return CurtainCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (cur *Curtain) MarkSaved() {
	cur.CreateOrUpdateCond(CurtainCondition{
		Type:   CurtainSaved,
		Status: corev1.ConditionTrue,
	})
}
