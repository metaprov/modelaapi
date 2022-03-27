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
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//Set up the webhook with the manager.
func (r *Account) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

//==============================================================================
// Finilizer
//==============================================================================

func (account *Account) HasFinalizer() bool { return util.HasFin(&account.ObjectMeta, infra.GroupName) }
func (account *Account) AddFinalizer()      { util.AddFin(&account.ObjectMeta, infra.GroupName) }
func (account *Account) RemoveFinalizer()   { util.RemoveFin(&account.ObjectMeta, infra.GroupName) }

//==============================================================================
// Trackable
//==============================================================================

func (account *Account) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(account)
}

func (account *Account) RootUri() string {
	return fmt.Sprintf("tenants/%s/accounts/%s", account.Namespace, account.Name)
}

func (account *Account) ManifestUri() string {
	return fmt.Sprintf("%s/%s-account.yaml", account.RootUri(), account.Name)
}

// Merge or update condition
func (account *Account) CreateOrUpdateCond(cond AccountCondition) {
	i := account.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		account.Status.Conditions = append(account.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := account.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	account.Status.Conditions[i] = current
}

func (account *Account) GetCondIdx(t AccountConditionType) int {
	for i, v := range account.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (account *Account) GetCond(t AccountConditionType) AccountCondition {
	for _, v := range account.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return AccountCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (account *Account) IsReady() bool {
	return account.GetCond(AccountReady).Status == v1.ConditionTrue
}

func (account *Account) Key() string {
	return fmt.Sprintf("%s/%s/%s", "accounts", account.Namespace, account.Name)
}

func ParseAccountYaml(content []byte) (*Account, error) {

	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Account)
	return r, nil
}

// populate an empty account
func (account *Account) Populate(name string) {
	account.TypeMeta = metav1.TypeMeta{
		Kind:       "Account",
		APIVersion: "v1alpha1",
	}
	account.ObjectMeta = metav1.ObjectMeta{
		Name:      name,
		Namespace: "default-tenant",
	}
	ut := User
	account.Spec = AccountSpec{
		MemberOf:  util.StrPtr("team"),
		Type:      &ut,
		Username:  util.StrPtr(name),
		FirstName: &name,
		LastName:  &name,
		Email:     &name,
		Phone:     &name,
	}
	account.Default()
}

func (account *Account) MarkArchived() {
	account.CreateOrUpdateCond(AccountCondition{
		Type:   AccountSaved,
		Status: v1.ConditionTrue,
	})
}

func (account *Account) Archived() bool {
	return account.GetCond(AccountSaved).Status == v1.ConditionTrue
}

func (account *Account) MarkReady() {
	account.CreateOrUpdateCond(AccountCondition{
		Type:   AccountReady,
		Status: v1.ConditionTrue,
	})
}

func (account *Account) MarkFailed(err string) {
	account.CreateOrUpdateCond(AccountCondition{
		Type:    AccountReady,
		Status:  v1.ConditionFalse,
		Reason:  "Failed",
		Message: err,
	})
	account.Status.FailureMessage = util.StrPtr(err)
}
