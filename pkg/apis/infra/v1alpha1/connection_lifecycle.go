/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"strconv"
	"strings"
)

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

func (connection *Connection) RootURI() string {
	return fmt.Sprintf("tenants/%s/connections/%s", connection.Namespace, connection.Name)
}

func (connection *Connection) ManifestURI() string {
	return fmt.Sprintf("%s/%s-connection.yaml", connection.RootURI(), connection.Name)
}

// Merge or update condition
func (connection *Connection) CreateOrUpdateCond(cond metav1.Condition) {
	i := connection.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		connection.Status.Conditions = append(connection.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := connection.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	connection.Status.Conditions[i] = current
}

func (connection *Connection) GetCondIdx(t string) int {
	for i, v := range connection.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (connection *Connection) GetCond(t string) metav1.Condition {
	for _, v := range connection.Status.Conditions {
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

func (connection *Connection) GetBoolOption(key string, defaultValue bool) bool {
	if value, ok := connection.Spec.Options[key]; ok {
		value = strings.ToLower(value)
		switch value {
		case "true":
			return true
		case "false":
			return false
		default:
			return defaultValue
		}
	}

	return defaultValue
}

func (connection *Connection) GetStringOption(key string, defaultValue string) string {
	if value, ok := connection.Spec.Options[key]; ok {
		return value
	}

	return defaultValue
}

func (connection *Connection) GetIntOption(key string, defaultValue int) int {
	if value, ok := connection.Spec.Options[key]; ok {
		intValue, err := strconv.Atoi(value)
		if err != nil {
			return defaultValue
		} else {
			return intValue
		}
	}

	return defaultValue
}

func (connection Connection) GetStatus() proto.Message {
	return &connection.Status
}

func (connection Connection) GetObservedGeneration() int64 {
	return connection.Status.ObservedGeneration
}

func (connection *Connection) SetObservedGeneration(generation int64) {
	connection.Status.ObservedGeneration = generation
}

func (connection *Connection) SetUpdatedAt(time *metav1.Time) {
	connection.Status.UpdatedAt = time
}

func (connection *Connection) SetStatus(status interface{}) {
	connection.Status = *status.(*ConnectionStatus)
}
