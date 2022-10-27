/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modelaapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (token *ApiToken) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(token).
		Complete()
}

//==============================================================================
// Finalizer
//==============================================================================

func (token ApiToken) HasFinalizer() bool {
	return util.HasFin(&token.ObjectMeta, metav1.GroupName)
}
func (token *ApiToken) AddFinalizer()    { util.AddFin(&token.ObjectMeta, metav1.GroupName) }
func (token *ApiToken) RemoveFinalizer() { util.RemoveFin(&token.ObjectMeta, metav1.GroupName) }

// Merge or update condition
func (token *ApiToken) CreateOrUpdateCond(cond ApiTokenCondition) {
	i := token.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		token.Status.Conditions = append(token.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := token.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	token.Status.Conditions[i] = current
}

func (token ApiToken) GetCondIdx(t ApiTokenConditionType) int {
	for i, v := range token.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (token ApiToken) GetCond(t ApiTokenConditionType) ApiTokenCondition {
	for _, v := range token.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ApiTokenCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (token ApiToken) IsReady() bool {
	return token.GetCond(ApiTokenReady).Status == v1.ConditionTrue
}

func (token ApiToken) RootUri() string {
	return fmt.Sprintf("tenant/%s/apitokens/%s", token.Namespace, token.Name)
}

func (token ApiToken) ManifestUri() string {
	return fmt.Sprintf("%s/%s-apitoken.yaml", token.RootUri(), token.Name)
}

func ParseApiTokenYaml(content []byte) (*ApiToken, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ApiToken)
	return r, nil
}

func (token *ApiToken) MarkArchived() {
	token.CreateOrUpdateCond(ApiTokenCondition{
		Type:   ApiTokenSaved,
		Status: v1.ConditionTrue,
	})
}
