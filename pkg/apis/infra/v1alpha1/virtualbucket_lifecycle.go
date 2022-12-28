/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

// Set up the webhook with the manager.
func (r *VirtualBucket) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (bucket VirtualBucket) HasFinalizer() bool {
	return util.HasFin(&bucket.ObjectMeta, infra.GroupName)
}
func (bucket *VirtualBucket) AddFinalizer()    { util.AddFin(&bucket.ObjectMeta, infra.GroupName) }
func (bucket *VirtualBucket) RemoveFinalizer() { util.RemoveFin(&bucket.ObjectMeta, infra.GroupName) }

// Merge or update condition
func (bucket *VirtualBucket) CreateOrUpdateCond(cond metav1.Condition) {
	i := bucket.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		bucket.Status.Conditions = append(bucket.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := bucket.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	bucket.Status.Conditions[i] = current
}

func (bucket VirtualBucket) GetCondIdx(t string) int {
	for i, v := range bucket.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (bucket VirtualBucket) IsReady() bool {
	return bucket.GetCond(VirtualBucketReady).Status == metav1.ConditionTrue
}

func (bucket VirtualBucket) GetCond(t string) metav1.Condition {
	for _, v := range bucket.Status.Conditions {
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

func (bucket VirtualBucket) RootURI() string {
	return fmt.Sprintf("tenants/%s/virtualbuckets/%s", bucket.Namespace, bucket.Name)
}

func (bucket VirtualBucket) ManifestURI() string {
	return fmt.Sprintf("%s/%s-virtualbucket.yaml", bucket.RootURI(), bucket.Name)
}

func (bucket *VirtualBucket) MarkReady() {
	bucket.CreateOrUpdateCond(metav1.Condition{
		Type:   VirtualBucketReady,
		Status: metav1.ConditionTrue,
		Reason: VirtualBucketReady,
	})
}

func (bucket *VirtualBucket) MarkFailed(err string) {
	bucket.CreateOrUpdateCond(metav1.Condition{
		Type:    VirtualBucketReady,
		Status:  metav1.ConditionFalse,
		Reason:  VirtualBucketReady,
		Message: err,
	})
	bucket.Status.FailureMessage = util.StrPtr(err)
}
