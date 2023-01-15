/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//==============================================================================
// EntityRef
//==============================================================================

import (
	"fmt"
	"github.com/metaprov/modelaapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"

	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// validation
var _ webhook.Validator = &FeatureGroup{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (fg FeatureGroup) ValidateCreate() error {
	return fg.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (fg FeatureGroup) ValidateUpdate(old runtime.Object) error {
	return fg.validate()
}

func (fg FeatureGroup) validate() error {
	return nil
}

func (fg FeatureGroup) ValidateDelete() error {
	return nil
}

func (fg *FeatureGroup) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(fg).
		Complete()
}

// No defaults in this current release
func (fg *FeatureGroup) Default() {
	if fg.Spec.TenantRef == nil {
		fg.Spec.TenantRef = &corev1.ObjectReference{}
	}
	fg.Spec.TenantRef.Namespace = "modela-system"
	fg.Spec.TenantRef.Name = fg.Namespace

	if *fg.Spec.Location.Type == DataLocationSQLView || *fg.Spec.Location.Type == DataLocationSQLTable {
		// set the path
		path := fmt.Sprintf("modela/live/tenants/%s/featuregroups/%s/data/raw/data.parquet", fg.Namespace, fg.Name)
		parquet := FlatFileTypeParquet
		fg.Spec.FlatFile.FileType = &parquet
		fg.Spec.Location.Path = util.StrPtr(path)
	}

}
