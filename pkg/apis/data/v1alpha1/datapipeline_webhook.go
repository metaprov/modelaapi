/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	ctrl "sigs.k8s.io/controller-runtime"
)

func (wr *DataPipeline) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(wr).
		Complete()
}
