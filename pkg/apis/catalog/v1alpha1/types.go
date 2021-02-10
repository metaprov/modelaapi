/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import v1 "k8s.io/apimachinery/pkg/apis/meta/v1"

// Update the error that occured during the operator reconcile process.
type CustomResourceError struct {
	// time of error
	OccurredAt *v1.Time `json:"occurredAt,omitempty" protobuf:"bytes,1,opt,name=occurredAt"`
	// error message
	Message *string `json:"message,omitempty" protobuf:"bytes,2,opt,name=message"`
}
