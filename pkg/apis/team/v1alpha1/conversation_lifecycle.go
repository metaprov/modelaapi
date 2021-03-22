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
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

//==============================================================================
//  Core api objects
//==============================================================================

//==============================================================================
//  Finalizer
//==============================================================================

func (conv *Conversation) HasFinalizer() bool {
	return util.HasFin(&conv.ObjectMeta, infra.GroupName)
}
func (conv *Conversation) AddFinalizer() { util.AddFin(&conv.ObjectMeta, infra.GroupName) }
func (conv *Conversation) RemoveFinalizer() {
	util.RemoveFin(&conv.ObjectMeta, infra.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (conv *Conversation) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/connections/%s.yaml", root, conv.ObjectMeta.Name), nil
}

func (conv *Conversation) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(conv)
}

func (conv *Conversation) RootUri() string {
	return fmt.Sprintf("tenants/%s/connections/%s", conv.Namespace, conv.Name)
}

func (conv *Conversation) ManifestUri() string {
	return fmt.Sprintf("%s/%s-conversation.yaml", conv.RootUri(), conv.Name)
}

// Merge or update condition
func (conv *Conversation) CreateOrUpdateCond(cond ConversationCondition) {
	i := conv.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		conv.Status.Conditions = append(conv.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := conv.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	conv.Status.Conditions[i] = current
}

func (conv *Conversation) GetCondIdx(t ConversationConditionType) int {
	for i, v := range conv.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (conv *Conversation) GetCond(t ConversationConditionType) ConversationCondition {
	for _, v := range conv.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ConversationCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (conv *Conversation) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", conv.Namespace, conv.Name)
}

func ParseCommentYaml(content []byte) (*Conversation, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Conversation)
	return r, nil
}

func (conv *Conversation) MarkReady() {
	conv.CreateOrUpdateCond(ConversationCondition{
		Type:   ConversationReady,
		Status: corev1.ConditionTrue,
	})
}

func (conv *Conversation) MarkArchived() {
	conv.CreateOrUpdateCond(ConversationCondition{
		Type:   ConversationArchived,
		Status: corev1.ConditionTrue,
	})
}

func (conv *Conversation) Archived() bool {
	return conv.GetCond(ConversationArchived).Status == corev1.ConditionTrue
}
