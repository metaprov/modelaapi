/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	nwv1beta1 "k8s.io/api/networking/v1beta1"
	rbacv1 "k8s.io/api/rbac/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

func (r *ServingSite) IsMarkedForDeletion() bool {
	return r.DeletionTimestamp != nil
}

func (r *ServingSite) FullName() string {
	return r.ObjectMeta.Namespace + "/" + r.ObjectMeta.Name
}

func (r *ServingSite) RootUri() string {
	return fmt.Sprintf("tenant/%s/servingsites/%s", r.Namespace, r.Name)
}

func (r *ServingSite) ManifestUri() string {
	return fmt.Sprintf("%s/%s-servingsite.yaml", r.RootUri(), r.Name)
}

func (r *ServingSite) Payload() string {
	return "name=" + r.Name
}

func (r *ServingSite) Prefix() string {
	return r.Name
}

func (r *ServingSite) Age() string {
	return humanize.Time(r.CreationTimestamp.Time)
}

func (r *ServingSite) CreateNamespace() *v1.Namespace {
	namespace := &v1.Namespace{}
	namespace.ObjectMeta.Name = r.ObjectMeta.Name
	return namespace
}

//==============================================================================
// Finializer
//==============================================================================

func (r *ServingSite) HasFinalizer() bool {
	return util.HasFin(&r.ObjectMeta, infra.GroupName)
}
func (r *ServingSite) AddFinalizer()    { util.AddFin(&r.ObjectMeta, infra.GroupName) }
func (r *ServingSite) RemoveFinalizer() { util.RemoveFin(&r.ObjectMeta, infra.GroupName) }

// Merge or update condition
func (r *ServingSite) CreateOrUpdateCond(cond ServingSiteCondition) {
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

func (r *ServingSite) GetCondIdx(t ServingSiteConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *ServingSite) GetCond(t ServingSiteConditionType) ServingSiteCondition {
	for _, v := range r.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ServingSiteCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *ServingSite) IsReady() bool {
	return r.GetCond(ServingSiteReady).Status == v1.ConditionTrue
}

func (r *ServingSite) Key() string {
	return fmt.Sprintf("tenanets/%s/servingsites/%s", r.Namespace, r.Name)
}

func ParseServingSiteServingYaml(content []byte) (*ServingSite, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ServingSite)
	return r, nil
}

func (r *ServingSite) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

func (r *ServingSite) ContructIngress() *nwv1beta1.Ingress {
	return &nwv1beta1.Ingress{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: r.Namespace,
			Name:      *r.Spec.IngressName,
			Labels: map[string]string{
				"kubernetes.io/ingress.class":                  "nginx",
				"nginx.ingress.kubernetes.io/backend-protocol": "GRPC",
				"nginx.ingress.kubernetes.io/grpc-backend":     "true",
				"nginx.ingress.kubernetes.io/ssl-redirect":     "true",
			},
		},
		Spec: nwv1beta1.IngressSpec{
			Backend: nil,
			TLS:     nil,
			Rules:   []nwv1beta1.IngressRule{},
		},
	}
}

//////////////////////////////////////////
/// Roles
/////////////////////////////////////////

func (r *ServingSite) ServingSiteAdmin() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "r-admin",
			Namespace: r.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (r *ServingSite) ServingSiteDev() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "r-dev",
			Namespace: r.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (r *ServingSite) ServingSiteOps() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "r-dev",
			Namespace: r.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{},
				APIGroups:       []string{},
				Resources:       []string{},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (r *ServingSite) MarkReady() {
	r.CreateOrUpdateCond(ServingSiteCondition{
		Type:   ServingSiteReady,
		Status: v1.ConditionTrue,
	})
}

func (r *ServingSite) MarkArchived() {
	r.CreateOrUpdateCond(ServingSiteCondition{
		Type:   ServingSiteSaved,
		Status: v1.ConditionTrue,
	})
}

func (r *ServingSite) Archived() bool {
	return r.GetCond(ServingSiteSaved).Status == v1.ConditionTrue
}
