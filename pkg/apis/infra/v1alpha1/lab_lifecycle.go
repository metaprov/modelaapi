/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"k8s.io/utils/pointer"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	rbacv1 "k8s.io/api/rbac/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (lab *Lab) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(lab).
		Complete()
}

//==============================================================================
// Keys
//==============================================================================

func (lab *Lab) RootURI() string {
	return fmt.Sprintf("tenants/%s/labs/%s", lab.Namespace, lab.Name)
}

func (lab *Lab) ManifestURI() string {
	return fmt.Sprintf("%s/%s-lab.yaml", lab.RootURI(), lab.Name)
}

func (lab *Lab) CreateNamespace() *corev1.Namespace {
	namespace := &corev1.Namespace{}
	namespace.ObjectMeta.Name = lab.ObjectMeta.Name
	return namespace
}

func (lab *Lab) Selector() *metav1.LabelSelector {
	result := &metav1.LabelSelector{
		MatchLabels: map[string]string{},
	}
	result.MatchLabels["lab"] = lab.ObjectMeta.Name
	return result
}

//==============================================================================
// Finalizer
//==============================================================================

func (lab *Lab) HasFinalizer() bool { return util.HasFin(&lab.ObjectMeta, infra.GroupName) }
func (lab *Lab) AddFinalizer()      { util.AddFin(&lab.ObjectMeta, infra.GroupName) }
func (lab *Lab) RemoveFinalizer()   { util.RemoveFin(&lab.ObjectMeta, infra.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

func (lab *Lab) CreateOrUpdateCond(cond metav1.Condition) {
	i := lab.GetCondIdx(LabConditionType(cond.Type))
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		lab.Status.Conditions = append(lab.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := lab.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	lab.Status.Conditions[i] = current
}

func (lab *Lab) GetCondIdx(t LabConditionType) int {
	for i, v := range lab.Status.Conditions {
		if v.Type == string(t) {
			return i
		}
	}
	return -1
}

func (lab *Lab) GetCond(t LabConditionType) metav1.Condition {
	for _, v := range lab.Status.Conditions {
		if v.Type == string(t) {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    string(t),
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (lab *Lab) Key() string {
	return fmt.Sprintf("tenanets/%s/labs/%s", lab.Namespace, lab.Name)
}

func ParseLabYaml(content []byte) (*Lab, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Lab)
	return r, nil
}

func (lab *Lab) Deleted() bool {
	return !lab.ObjectMeta.DeletionTimestamp.IsZero()
}

func (lab *Lab) ResourceQuotaEnabled() bool {
	return lab.Spec.Limits.QuotaSpec != nil
}

func (lab *Lab) LimitRangeEnabled() bool {
	return lab.Spec.Limits.LimitRangeSpec != nil
}

func (lab *Lab) LimitsEnabled() bool {
	return pointer.BoolDeref(lab.Spec.Limits.Enabled, false)
}

func (lab *Lab) LimitRange() *corev1.LimitRange {
	limitRange := &corev1.LimitRange{
		ObjectMeta: metav1.ObjectMeta{
			Name:      fmt.Sprintf("%s-limitrange", lab.Name),
			Namespace: lab.Name,
		},
	}
	if lab.Spec.Limits.LimitRangeSpec != nil {
		limitRange.Spec = *lab.Spec.Limits.LimitRangeSpec
	}
	return limitRange
}

func (lab *Lab) ResourceQuota() *corev1.ResourceQuota {
	resourceQuota := &corev1.ResourceQuota{
		ObjectMeta: metav1.ObjectMeta{
			Name:      fmt.Sprintf("%s-resourcequota", lab.Name),
			Namespace: lab.Name,
		},
	}
	if lab.Spec.Limits.QuotaSpec != nil {
		resourceQuota.Spec = *lab.Spec.Limits.QuotaSpec
	}
	return resourceQuota
}

func (lab *Lab) MarkRbacNotReady(reason string, message string) {
	lab.CreateOrUpdateCond(metav1.Condition{
		Type:    string(LabRbacReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (lab *Lab) MarkVolumeNotReady(reason string, message string) {
	lab.CreateOrUpdateCond(metav1.Condition{
		Type:    string(LabVolumeReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (lab *Lab) MarkNamespaceNotReady(reason string, message string) {
	lab.CreateOrUpdateCond(metav1.Condition{
		Type:    string(LabNamespaceReady),
		Status:  metav1.ConditionFalse,
		Reason:  reason,
		Message: message,
	})
}

func (lab *Lab) MarkRbacReady() {
	lab.CreateOrUpdateCond(metav1.Condition{
		Type:   string(LabRbacReady),
		Status: metav1.ConditionTrue,
		Reason: string(LabRbacReady),
	})
}

func (lab *Lab) MarkVolumeReady() {
	lab.CreateOrUpdateCond(metav1.Condition{
		Type:   string(LabVolumeReady),
		Status: metav1.ConditionTrue,
		Reason: string(LabVolumeReady),
	})
}

func (lab *Lab) MarkNamespaceReady() {
	lab.CreateOrUpdateCond(metav1.Condition{
		Type:   string(LabNamespaceReady),
		Status: metav1.ConditionTrue,
		Reason: string(LabNamespaceReady),
	})
}

//////////////////////////////////////////
/// Roles
/////////////////////////////////////////

func (lab *Lab) LabRole() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.LabJobRunnerRole,
			Namespace: lab.Name,
		},
		Rules: []rbacv1.PolicyRule{
			{
				Verbs:           []string{"create"},
				APIGroups:       []string{"data.modela.ai", "training.modela.ai"},
				Resources:       []string{"*"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
			{
				Verbs:           []string{"get"},
				APIGroups:       []string{"data.modela.ai"},
				Resources:       []string{"datasets"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
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

func (lab *Lab) LabRoleBinding() *rbacv1.RoleBinding {
	return &rbacv1.RoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.LabJobRunnerRoleBinding,
			Namespace: lab.Name,
		},
		Subjects: []rbacv1.Subject{
			{
				Kind:      "ServiceAccount",
				APIGroup:  "",
				Name:      catalog.LabJobRunnerSa,
				Namespace: lab.Name,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "Role",
			Name:     catalog.LabJobRunnerRole,
		},
	}
}

func (lab *Lab) LabClusterRole() *rbacv1.ClusterRole {
	return &rbacv1.ClusterRole{
		ObjectMeta: metav1.ObjectMeta{
			Name: catalog.LabJobRunnerRole,
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
				APIGroups:       []string{"catalog.modela.ai"},
				Resources:       []string{"publicdatasets"},
				ResourceNames:   []string{},
				NonResourceURLs: []string{},
			},
		},
	}
}

func (lab *Lab) LabClusterRoleBinding() *rbacv1.ClusterRoleBinding {
	return &rbacv1.ClusterRoleBinding{
		ObjectMeta: metav1.ObjectMeta{
			Name: fmt.Sprintf("%s-%s", lab.Name, catalog.LabJobRunnerRoleBinding),
		},
		Subjects: []rbacv1.Subject{
			{
				Kind:      "ServiceAccount",
				APIGroup:  "",
				Name:      catalog.LabJobRunnerSa,
				Namespace: lab.Name,
			},
		},
		RoleRef: rbacv1.RoleRef{
			APIGroup: "rbac.authorization.k8s.io",
			Kind:     "ClusterRole",
			Name:     catalog.LabJobRunnerRole,
		},
	}
}

func (lab *Lab) LabServiceAccount() *corev1.ServiceAccount {
	return &corev1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.LabJobRunnerSa,
			Namespace: lab.Name,
		},
	}
}

func (lab *Lab) GetStatus() proto.Message {
	return &lab.Status
}

func (lab *Lab) GetObservedGeneration() int64 {
	return lab.Status.ObservedGeneration
}

func (lab *Lab) SetObservedGeneration(generation int64) {
	lab.Status.ObservedGeneration = generation
}

func (lab *Lab) SetUpdatedAt(time *metav1.Time) {
	lab.Status.UpdatedAt = time
}

func (lab *Lab) SetStatus(status interface{}) {
	lab.Status = *status.(*LabStatus)
}
