/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
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

func (lab *Lab) RootUri() string {
	return fmt.Sprintf("tenants/%s/labs/%s", lab.Namespace, lab.Name)
}

func (lab *Lab) ManifestUri() string {
	return fmt.Sprintf("%s/%s-lab.yaml", lab.RootUri(), lab.Name)
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

// Return the on disk rep location
func (lab *Lab) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/labs/%s.yaml", root, lab.ObjectMeta.Name), nil
}

func (lab *Lab) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(lab)
}

func (lab *Lab) RepEntry() (string, error) {
	return fmt.Sprintf("labs/%s.yaml", lab.ObjectMeta.Name), nil
}

// Merge or update condition
func (lab *Lab) CreateOrUpdateCond(cond LabCondition) {
	i := lab.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		lab.Status.Conditions = append(lab.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := lab.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	lab.Status.Conditions[i] = current
}

func (lab *Lab) GetCondIdx(t LabConditionType) int {
	for i, v := range lab.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (lab *Lab) GetCond(t LabConditionType) LabCondition {
	for _, v := range lab.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return LabCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (lab *Lab) IsReady() bool {
	return lab.GetCond(LabReady).Status == corev1.ConditionTrue
}

func (lab *Lab) IsArchived() bool {
	return lab.GetCond(LabArchived).Status == corev1.ConditionTrue
}

func (lab *Lab) MarkArchived() {
	lab.CreateOrUpdateCond(LabCondition{
		Type:   LabArchived,
		Status: corev1.ConditionTrue,
	})
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

//////////////////////////////////////////
/// Roles
/////////////////////////////////////////

func (lab *Lab) LabAdmin() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "lab-admin",
			Namespace: lab.Name,
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

func (lab *Lab) LabDev() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "lab-dev",
			Namespace: lab.Name,
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

func (lab *Lab) LabOps() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      "lab-ops",
			Namespace: lab.Name,
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

func (lab *Lab) LabJobRole() *rbacv1.Role {
	return &rbacv1.Role{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.LabJobRunnerRole,
			Namespace: lab.Name,
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
func (lab *Lab) LabJobRoleBinding() *rbacv1.RoleBinding {
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

func (lab *Lab) LabServiceAccount() *corev1.ServiceAccount {
	return &corev1.ServiceAccount{
		ObjectMeta: metav1.ObjectMeta{
			Name:      catalog.LabJobRunnerSa,
			Namespace: lab.Name,
		},
	}
}
