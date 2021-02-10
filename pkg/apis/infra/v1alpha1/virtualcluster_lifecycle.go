/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/apis/common"
	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (virtualcluster *VirtualCluster) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(virtualcluster).
		Complete()
}

//==============================================================================
// Finializer
//==============================================================================

func (vcluster *VirtualCluster) HasFinalizer() bool {
	return util.HasFin(&vcluster.ObjectMeta, infra.GroupName)
}
func (vcluster *VirtualCluster) AddFinalizer() { util.AddFin(&vcluster.ObjectMeta, infra.GroupName) }
func (vcluster *VirtualCluster) RemoveFinalizer() {
	util.RemoveFin(&vcluster.ObjectMeta, infra.GroupName)
}

//==============================================================================
// Assign commit and id
//==============================================================================

func (vcluster *VirtualCluster) LabelWithCommit(commit string, uname string, branch string) {
	vcluster.ObjectMeta.Labels[common.CommitLabelKey] = commit
	vcluster.ObjectMeta.Labels[common.UnameLabelKey] = uname
	vcluster.ObjectMeta.Labels[common.BranchLabelKey] = branch
}

func (vcluster *VirtualCluster) IsGitObj() bool {
	label, ok := vcluster.ObjectMeta.Labels[common.CommitLabelKey]
	if !ok {
		return false
	}
	return label != ""
}

// Merge or update condition
func (vcluster *VirtualCluster) CreateOrUpdateCond(cond VirtualClusterCondition) {
	i := vcluster.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		vcluster.Status.Conditions = append(vcluster.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := vcluster.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	vcluster.Status.Conditions[i] = current
}

func (vcluster *VirtualCluster) GetCondIdx(t VirtualClusterConditionType) int {
	for i, v := range vcluster.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (vcluster *VirtualCluster) GetCond(t VirtualClusterConditionType) VirtualClusterCondition {
	for _, v := range vcluster.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return VirtualClusterCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (vcluster *VirtualCluster) IsReady() bool {
	return vcluster.GetCond(VirtualClusterReady).Status == v1.ConditionTrue
}

func (vcluster *VirtualCluster) RootUri() string {
	return fmt.Sprintf("tenant/%s/virtualclusters/%s", vcluster.Namespace, vcluster.Name)
}

func (vcluster *VirtualCluster) ManifestUri() string {
	return fmt.Sprintf("%s/%s-virtualcluster.yaml", vcluster.RootUri(), vcluster.Name)
}

func ParseVirtualClusterYaml(content []byte) (*VirtualCluster, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*VirtualCluster)
	return r, nil
}

func (vcluster *VirtualCluster) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(vcluster)
}
