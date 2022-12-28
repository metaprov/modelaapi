/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (attachment *Attachment) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(attachment).
		Complete()
}

//==============================================================================
// Validation
//==============================================================================

//==============================================================================
// Finalizer
//==============================================================================

func (attachment *Attachment) HasFinalizer() bool {
	return util.HasFin(&attachment.ObjectMeta, metav1.GroupName)
}
func (attachment *Attachment) AddFinalizer() { util.AddFin(&attachment.ObjectMeta, metav1.GroupName) }
func (attachment *Attachment) RemoveFinalizer() {
	util.RemoveFin(&attachment.ObjectMeta, metav1.GroupName)
}

// Merge or update condition
func (attachment *Attachment) CreateOrUpdateCond(cond metav1.Condition) {
	i := attachment.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		attachment.Status.Conditions = append(attachment.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := attachment.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	attachment.Status.Conditions[i] = current
}

func (attachment Attachment) GetCondIdx(t string) int {
	for i, v := range attachment.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (attachment Attachment) GetCond(t AttachmentConditionType) metav1.Condition {
	for _, v := range attachment.Status.Conditions {
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

func (attachment Attachment) IsReady() bool {
	return attachment.GetCond(AttachmentSent).Status == metav1.ConditionTrue
}

func (attachment Attachment) RootURI() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", attachment.Namespace, attachment.Name)
}

func (attachment Attachment) ManifestURI() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", attachment.RootURI(), attachment.Name)
}

func ParseAttachmentYaml(content []byte) (*Attachment, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Attachment)
	return r, nil
}

func (attachment *Attachment) MarkFailed(err string) {
	attachment.CreateOrUpdateCond(metav1.Condition{
		Type:    string(AttachmentSent),
		Status:  metav1.ConditionFalse,
		Reason:  "Failed",
		Message: err,
	})
	attachment.Status.FailureMessage = util.StrPtr(err)

}
