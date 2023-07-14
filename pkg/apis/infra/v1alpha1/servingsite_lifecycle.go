/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
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
	"k8s.io/utils/pointer"
)

func (servingsite ServingSite) IsMarkedForDeletion() bool {
	return servingsite.DeletionTimestamp != nil
}

func (servingsite ServingSite) FullName() string {
	return servingsite.ObjectMeta.Namespace + "/" + servingsite.ObjectMeta.Name
}

func (servingsite ServingSite) RootURI() string {
	return fmt.Sprintf("tenant/%s/servingsites/%s", servingsite.Namespace, servingsite.Name)
}

func (servingsite ServingSite) ManifestURI() string {
	return fmt.Sprintf("%s/%s-servingsite.yaml", servingsite.RootURI(), servingsite.Name)
}

func (servingsite ServingSite) Payload() string {
	return "name=" + servingsite.Name
}

func (servingsite ServingSite) Prefix() string {
	return servingsite.Name
}

func (servingsite ServingSite) CreateNamespace() *v1.Namespace {
	namespace := &v1.Namespace{}
	namespace.ObjectMeta.Name = servingsite.ObjectMeta.Name
	return namespace
}

//==============================================================================
// Finializer
//==============================================================================

func (servingsite ServingSite) HasFinalizer() bool {
	return util.HasFin(&servingsite.ObjectMeta, infra.GroupName)
}
func (servingsite *ServingSite) AddFinalizer() { util.AddFin(&servingsite.ObjectMeta, infra.GroupName) }
func (servingsite *ServingSite) RemoveFinalizer() {
	util.RemoveFin(&servingsite.ObjectMeta, infra.GroupName)
}

// Merge or update condition
func (servingsite *ServingSite) CreateOrUpdateCond(cond metav1.Condition) {
	i := servingsite.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		servingsite.Status.Conditions = append(servingsite.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := servingsite.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	servingsite.Status.Conditions[i] = current

}

func (servingsite ServingSite) GetCondIdx(t string) int {
	for i, v := range servingsite.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (servingsite ServingSite) GetCond(t string) metav1.Condition {
	for _, v := range servingsite.Status.Conditions {
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

func (servingsite ServingSite) IsNamespaceReady() bool {
	return servingsite.GetCond(string(ServingSiteNamespaceReady)).Status == metav1.ConditionTrue
}

func (servingsite ServingSite) IsRbacReady() bool {
	return servingsite.GetCond(string(ServingSiteRbacReady)).Status == metav1.ConditionTrue
}

func (servingsite ServingSite) Key() string {
	return fmt.Sprintf("tenanets/%s/servingsites/%s", servingsite.Namespace, servingsite.Name)
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
func (servingsite ServingSite) ConstructGrpcIngress() *nwv1.Ingress {
	result := &nwv1.Ingress{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: servingsite.Name,
			Name:      servingsite.Name + "-grpc",
			Labels: map[string]string{
				"modela.ai/servingsite": servingsite.Name,
				"modela.ai/tenant":      servingsite.Spec.TenantRef.Name,
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
			IngressClassName: servingsite.Spec.Ingress.IngressClassName,
			TLS:              nil,
			Rules:            []nwv1.IngressRule{},
		},
	}

	if servingsite.Spec.Ingress.ClusterIssuerName != nil && *servingsite.Spec.Ingress.ClusterIssuerName != "" {
		result.ObjectMeta.Annotations["cert-manager.io/cluster-issuer"] = *servingsite.Spec.Ingress.ClusterIssuerName
	} else if servingsite.Spec.Ingress.IssuerName != nil && *servingsite.Spec.Ingress.IssuerName != "" {
		result.ObjectMeta.Annotations["cert-manager.io/issuer"] = *servingsite.Spec.Ingress.IssuerName
	}

	return result

}

// Create the ingress for REST traffic
func (servingsite ServingSite) ConstructRestIngress() *nwv1.Ingress {
	result := &nwv1.Ingress{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: servingsite.Name,
			Name:      servingsite.Name + "-rest",
			Labels: map[string]string{
				"modela.ai/servingsite": servingsite.Name,
				"modela.ai/tenant":      servingsite.Spec.TenantRef.Name,
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
			IngressClassName: servingsite.Spec.Ingress.IngressClassName,
			TLS:              nil,
			Rules:            []nwv1.IngressRule{},
		},
	}
	if servingsite.Spec.Ingress.ClusterIssuerName != nil && *servingsite.Spec.Ingress.ClusterIssuerName != "" {
		result.ObjectMeta.Annotations["cert-manager.io/cluster-issuer"] = *servingsite.Spec.Ingress.ClusterIssuerName
	} else if servingsite.Spec.Ingress.IssuerName != nil && *servingsite.Spec.Ingress.IssuerName != "" {
		result.ObjectMeta.Annotations["cert-manager.io/issuer"] = *servingsite.Spec.Ingress.IssuerName
	}

	return result
}

//////////////////////////////////////////
/// Roles
/////////////////////////////////////////

func (servingsite ServingSite) ServingSiteAdmin() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "servingsite-admin",
			Namespace: servingsite.Name,
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

func (servingsite ServingSite) ServingSiteDev() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "servingsite-dev",
			Namespace: servingsite.Name,
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

func (servingsite ServingSite) ServingSiteOps() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "servingsite-dev",
			Namespace: servingsite.Name,
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

func (servingsite *ServingSite) MarkRbacNotReady(reason string, message string) {
	servingsite.CreateOrUpdateCond(metav1.Condition{
		Type:    string(ServingSiteRbacReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (servingsite *ServingSite) MarkNamespaceNotReady(reason string, message string) {
	servingsite.CreateOrUpdateCond(metav1.Condition{
		Type:    string(ServingSiteNamespaceReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (servingsite *ServingSite) MarkIngressNotReady(reason string, message string) {
	servingsite.CreateOrUpdateCond(metav1.Condition{
		Type:    string(ServingSiteIngressReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (servingsite *ServingSite) MarkRbacReady() {
	servingsite.CreateOrUpdateCond(metav1.Condition{
		Type:   string(ServingSiteRbacReady),
		Status: metav1.ConditionTrue,
		Reason: string(ServingSiteRbacReady),
	})
}

func (servingsite *ServingSite) MarkNamespaceReady() {
	servingsite.CreateOrUpdateCond(metav1.Condition{
		Type:   string(ServingSiteNamespaceReady),
		Status: metav1.ConditionTrue,
		Reason: string(ServingSiteNamespaceReady),
	})
}

func (servingsite *ServingSite) MarkIngressReady() {
	servingsite.CreateOrUpdateCond(metav1.Condition{
		Type:   string(ServingSiteIngressReady),
		Status: metav1.ConditionTrue,
		Reason: string(ServingSiteIngressReady),
	})
}

func (servingsite ServingSite) HttpIngressEnabled() bool {
	return pointer.BoolDeref(servingsite.Spec.Ingress.HTTP, false)
}

func (servingsite ServingSite) GrpcIngressEnabled() bool {
	return pointer.BoolDeref(servingsite.Spec.Ingress.GRPC, false)
}

func (servingsite ServingSite) ResourceQuotaEnabled() bool {
	return servingsite.Spec.Limits.QuotaSpec != nil
}

func (servingsite ServingSite) LimitRangeEnabled() bool {
	return servingsite.Spec.Limits.LimitRangeSpec != nil
}

func (servingsite ServingSite) LimitsEnabled() bool {
	return pointer.BoolDeref(servingsite.Spec.Limits.Enabled, false)
}

func (servingsite ServingSite) LimitRange() *v1.LimitRange {
	limitRange := &v1.LimitRange{
		ObjectMeta: metav1.ObjectMeta{
			Name:      fmt.Sprintf("%s-limitrange", servingsite.Name),
			Namespace: servingsite.Name,
		},
	}
	if servingsite.Spec.Limits.LimitRangeSpec != nil {
		limitRange.Spec = *servingsite.Spec.Limits.LimitRangeSpec
	}
	return limitRange
}

func (servingsite ServingSite) ResourceQuota() *v1.ResourceQuota {
	resourceQuota := &v1.ResourceQuota{
		ObjectMeta: metav1.ObjectMeta{
			Name:      fmt.Sprintf("%s-resourcequota", servingsite.Name),
			Namespace: servingsite.Name,
		},
	}
	if servingsite.Spec.Limits.QuotaSpec != nil {
		resourceQuota.Spec = *servingsite.Spec.Limits.QuotaSpec
	}
	return resourceQuota
}

func (servingsite ServingSite) ServingSiteRole() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.ServingSiteJobRunnerRole,
			Namespace: servingsite.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{"*"},
				APIGroups:       []string{""},
				Resources:       []string{"pods", "pods/log", "configmaps"},
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
			{
				Verbs:           []string{"*"},
				APIGroups:       []string{"metrics.k8s.io"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

// Create a role binding for a job
func (servingsite ServingSite) ServingSiteRoleBinding() *rbacv1.RoleBinding {
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

func (servingsite ServingSite) ServingSiteClusterRole() *rbacv1.ClusterRole {
	return &rbacv1.ClusterRole{
		ObjectMeta: metav1.ObjectMeta{
			Name: catalog.ServingSiteJobRunnerRole,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{"get"},
				APIGroups:       []string{""},
				Resources:       []string{"configmaps"},
				ResourceNames:   []string{"modela-config"},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get"},
				APIGroups:       []string{"infra.modela.ai"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get"},
				APIGroups:       []string{"inference.modela.ai"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get"},
				APIGroups:       []string{"data.modela.ai"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get"},
				APIGroups:       []string{"inference.modela.ai"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (servingsite ServingSite) ServingSiteClusterRoleBinding() *rbacv1.ClusterRoleBinding {
	return &rbacv1.ClusterRoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name: fmt.Sprintf("%s-%s", servingsite.Name, catalog.ServingSiteJobRunnerRoleBinding),
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
			Kind:     "ClusterRole",
			Name:     catalog.ServingSiteJobRunnerRole,
		},
	}
}

func (servingsite ServingSite) ServingSiteServiceAccount() *corev1.ServiceAccount {
	return &corev1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.ServingSiteJobRunnerSa,
			Namespace: servingsite.Name,
		},
	}
}

func (servingsite ServingSite) GetStatus() proto.Message {
	return &servingsite.Status
}

func (servingsite ServingSite) GetObservedGeneration() int64 {
	return servingsite.Status.ObservedGeneration
}

func (servingsite *ServingSite) SetObservedGeneration(generation int64) {
	servingsite.Status.ObservedGeneration = generation
}

func (servingsite *ServingSite) SetUpdatedAt(time *metav1.Time) {
	servingsite.Status.UpdatedAt = time
}

func (servingsite *ServingSite) SetStatus(status interface{}) {
	servingsite.Status = *status.(*ServingSiteStatus)
}
