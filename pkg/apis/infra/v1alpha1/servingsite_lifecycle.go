/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/dustin/go-humanize"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	nwv1 "k8s.io/api/networking/v1"
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

// Create the ingress for GRPC traffic
func (r *ServingSite) ConstructGrpcIngress() *nwv1.Ingress {
	result := &nwv1.Ingress{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: r.Name,
			Name:      r.Name + "-grpc",
			Labels: map[string]string{
				"modela.ai/servingsite": r.Name,
				"modela.ai/tenant":      r.Spec.TenantRef.Name,
			},
			Annotations: map[string]string{
				"nginx.ingress.kubernetes.io/enable-cors":        "true",
				"ingress.kubernetes.io/proxy-body-size":          "8m",
				"nginx.org/proxy-connect-timeout":                "30s",
				"nginx.org/proxy-read-timeout":                   "20s",
				"nginx.org/client-max-body-size":                 "50m",
				"kubernetes.io/ingress.allow-http":               "false",
				"nginx.ingress.kubernetes.io/cors-allow-headers": "x-user-agent,x-grpc-web,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization",
				"nginx.ingress.kubernetes.io/add-base-url":       "false",
				"nginx.ingress.kubernetes.io/backend-protocol":   "GRPC",
				"nginx.ingress.kubernetes.io/grpc-backend":       "true",
				"nginx.ingress.kubernetes.io/ssl-redirect":       "true",
			},
		},
		Spec: nwv1.IngressSpec{
			IngressClassName: r.Spec.Ingress.IngressClassName,
			TLS:              nil,
			Rules:            []nwv1.IngressRule{},
		},
	}

	if r.Spec.Ingress.ClusterIssuerName != nil && *r.Spec.Ingress.ClusterIssuerName != "" {
		result.ObjectMeta.Annotations["cert-manager.io/cluster-issuer"] = *r.Spec.Ingress.ClusterIssuerName
	}

	return result

}

// Create the ingress for REST traffic
func (r *ServingSite) ConstructRestIngress() *nwv1.Ingress {
	result := &nwv1.Ingress{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: r.Name,
			Name:      r.Name + "-rest",
			Labels: map[string]string{
				"modela.ai/servingsite": r.Name,
				"modela.ai/tenant":      r.Spec.TenantRef.Name,
			},
			Annotations: map[string]string{
				"nginx.ingress.kubernetes.io/enable-cors":        "true",
				"ingress.kubernetes.io/proxy-body-size":          "8m",
				"nginx.org/proxy-connect-timeout":                "30s",
				"nginx.org/proxy-read-timeout":                   "20s",
				"nginx.org/client-max-body-size":                 "50m",
				"kubernetes.io/ingress.allow-http":               "true",
				"nginx.ingress.kubernetes.io/cors-allow-headers": "x-user-agent,x-grpc-web,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization",
			},
		},
		Spec: nwv1.IngressSpec{
			IngressClassName: r.Spec.Ingress.IngressClassName,
			TLS:              nil,
			Rules:            []nwv1.IngressRule{},
		},
	}
	if r.Spec.Ingress.ClusterIssuerName != nil && *r.Spec.Ingress.ClusterIssuerName != "" {
		result.ObjectMeta.Annotations["cert-manager.io/cluster-issuer"] = *r.Spec.Ingress.ClusterIssuerName

	}
	return result
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

func (servingsite *ServingSite) JobRole() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.ServingSiteJobRunnerRole,
			Namespace: servingsite.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{"*"},
				APIGroups:       []string{""},
				Resources:       []string{"pods", "pods/log"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"*"},
				APIGroups:       []string{"batch"},
				Resources:       []string{"jobs"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// Create a role binding for a job
func (servingsite *ServingSite) JobRoleBinding() *rbacv1.RoleBinding {
	return &rbacv1.RoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.ServingSiteJobRunnerRoleBinding,
			Namespace: servingsite.Name,
		},
		Subjects: []rbacv1.Subject{
			{
				Kind:      "ServiceAccount",
				APIGroup:  "",
				Name:      catalog.ServingSiteJobRunnerSa,
				Namespace: servingsite.Name,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "Role",
			Name:     catalog.ServingSiteJobRunnerRole,
		},
	}
}

func (servingsite *ServingSite) ServiceAccount() *corev1.ServiceAccount {
	return &corev1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.ServingSiteJobRunnerSa,
			Namespace: servingsite.Name,
		},
	}
}

///////////////////////////////////////////////////////////
// Predictor role
//////////////////////////////////////////////////////////

func (servingsite *ServingSite) PredictorRole() *rbacv1.ClusterRole {
	return &rbacv1.ClusterRole{
		ObjectMeta: metav1.ObjectMeta{
			Name: catalog.ServingSitePredictorRole,
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
				Resources:       []string{"predictors,predictors/status"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// Create a role binding for a job
func (servingsite *ServingSite) PredictorRoleBinding() *rbacv1.ClusterRoleBinding {
	return &rbacv1.ClusterRoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name: catalog.ServingSitePredictorRoleBinding,
		},
		Subjects: []rbacv1.Subject{
			{
				Kind:      "ServiceAccount",
				APIGroup:  "",
				Name:      catalog.ServingSitePredictorSa,
				Namespace: servingsite.Name,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "ClusterRole",
			Name:     catalog.ServingSitePredictorRole,
		},
	}
}

func (servingsite *ServingSite) PredictorServiceAccount() *corev1.ServiceAccount {
	return &corev1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.ServingSitePredictorSa,
			Namespace: servingsite.Name,
		},
	}
}
