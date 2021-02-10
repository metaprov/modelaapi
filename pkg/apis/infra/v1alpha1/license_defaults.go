/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &License{}

func (license *License) Default() {
	if license.Spec.TrialStart == nil {
		t := metav1.Now()
		license.Spec.TrialStart = &t
	}
	if license.Spec.TrialEnd == nil {
		t := license.Spec.TrialStart.AddDate(0, 0, 21)
		license.Spec.TrialEnd = &metav1.Time{Time: t}
	}

}
