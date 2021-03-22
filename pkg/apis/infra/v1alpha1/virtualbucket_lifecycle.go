/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//Set up the webhook with the manager.
func (r *VirtualBucket) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (bucket *VirtualBucket) HasFinalizer() bool {
	return util.HasFin(&bucket.ObjectMeta, infra.GroupName)
}
func (bucket *VirtualBucket) AddFinalizer()    { util.AddFin(&bucket.ObjectMeta, infra.GroupName) }
func (bucket *VirtualBucket) RemoveFinalizer() { util.RemoveFin(&bucket.ObjectMeta, infra.GroupName) }

// Merge or update condition
func (bucket *VirtualBucket) CreateOrUpdateCond(cond VirtualBucketCondition) {
	i := bucket.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		bucket.Status.Conditions = append(bucket.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := bucket.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	bucket.Status.Conditions[i] = current
}

func (bucket *VirtualBucket) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(bucket)
}

func (bucket *VirtualBucket) GetCondIdx(t VirtualBucketConditionType) int {
	for i, v := range bucket.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (bucket *VirtualBucket) IsReady() bool {
	return bucket.GetCond(VirtualBucketReady).Status == v1.ConditionTrue
}

func (bucket *VirtualBucket) GetCond(t VirtualBucketConditionType) VirtualBucketCondition {
	for _, v := range bucket.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return VirtualBucketCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (bucket *VirtualBucket) RootUri() string {
	return fmt.Sprintf("tenants/%s/virtualbuckets/%s", bucket.Namespace, bucket.Name)
}

func (bucket *VirtualBucket) ManifestUri() string {
	return fmt.Sprintf("%s/%s-virtualbucket.yaml", bucket.RootUri(), bucket.Name)
}

func ParseVirtualBucketYaml(content []byte) (*VirtualBucket, error) {

	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*VirtualBucket)
	return r, nil
}

func (bucket *VirtualBucket) MarkReady() {
	bucket.CreateOrUpdateCond(VirtualBucketCondition{
		Type:   VirtualBucketReady,
		Status: v1.ConditionTrue,
	})
}

func (bucket *VirtualBucket) MarkArchived() {
	bucket.CreateOrUpdateCond(VirtualBucketCondition{
		Type:   VirtualBucketArchived,
		Status: v1.ConditionTrue,
	})
}

func (bucket *VirtualBucket) Archived() bool {
	return bucket.GetCond(VirtualBucketArchived).Status == v1.ConditionTrue
}
