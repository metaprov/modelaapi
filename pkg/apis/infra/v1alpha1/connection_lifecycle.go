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

func (connection *Connection) Secret(content map[string]string) (*corev1.Secret, error) {
	secret := &corev1.Secret{
		ObjectMeta: metav1.ObjectMeta{
			Name:      connection.Name,
			Namespace: connection.Namespace,
		},
		StringData: content,
	}
	return secret, nil
}

//==============================================================================
//  Finalizer
//==============================================================================

func (connection *Connection) HasFinalizer() bool {
	return util.HasFin(&connection.ObjectMeta, infra.GroupName)
}
func (connection *Connection) AddFinalizer() { util.AddFin(&connection.ObjectMeta, infra.GroupName) }
func (connection *Connection) RemoveFinalizer() {
	util.RemoveFin(&connection.ObjectMeta, infra.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

func (connection *Connection) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(connection)
}

func (connection *Connection) RootUri() string {
	return fmt.Sprintf("tenants/%s/connections/%s", connection.Namespace, connection.Name)
}

func (connection *Connection) ManifestUri() string {
	return fmt.Sprintf("%s/%s-connection.yaml", connection.RootUri(), connection.Name)
}

// Merge or update condition
func (connection *Connection) CreateOrUpdateCond(cond ConnectionCondition) {
	i := connection.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		connection.Status.Conditions = append(connection.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := connection.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	connection.Status.Conditions[i] = current
}

func (connection *Connection) GetCondIdx(t ConnectionConditionType) int {
	for i, v := range connection.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (connection *Connection) GetCond(t ConnectionConditionType) ConnectionCondition {
	for _, v := range connection.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ConnectionCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (connection *Connection) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", connection.Namespace, connection.Name)
}

func ParseConnectionYaml(content []byte) (*Connection, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Connection)
	return r, nil
}

func (connection *Connection) IsReady() bool {
	return connection.GetCond(ConnectionReady).Status == corev1.ConditionTrue
}
