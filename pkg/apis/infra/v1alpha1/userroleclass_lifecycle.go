package v1alpha1

import ctrl "sigs.k8s.io/controller-runtime"

func (class *UserRoleClass) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(class).
		Complete()
}
