/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Connection{}

// No defaults for the current configuration
func (connection *Connection) Default() {
	if connection.Spec.TenantRef == nil {
		connection.Spec.TenantRef = &corev1.ObjectReference{
			Namespace: "modeld-system",
			Name:      "default-tenant",
		}
	}
	if connection.Spec.Category == nil {
		general := catalog.General
		connection.Spec.Category = &general
	}

}
