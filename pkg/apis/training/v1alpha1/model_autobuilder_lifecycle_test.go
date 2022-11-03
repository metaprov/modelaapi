/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"

	"testing"

	"github.com/metaprov/modelaapi/pkg/util"
	"gotest.tools/assert"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func autoBuilder() *ModelAutobuilder {
	task := catalog.BinaryClassification
	return &ModelAutobuilder{
		ObjectMeta: metav1.ObjectMeta{Namespace: "default-tenant", Name: "iris"},
		Spec: ModelAutobuilderSpec{
			DataProductName:        util.StrPtr("iris-product"),
			DataProductVersionName: util.StrPtr("v0.0.1"),
			Location: data.DataLocation{
				Path:       util.StrPtr("modela/depot/iris.csv"),
				BucketName: util.StrPtr("default-digitalocean-bucket"),
			},
			Task:         &task,
			Objective:    nil,
			TargetColumn: nil,
			MaxTime:      util.Int32Ptr(4),
			MaxModels:    nil,
			AccessMethod: nil,
			AutoScale:    nil,
			Trainers:     util.Int32Ptr(1),
		},
	}
}

func TestProduct(t *testing.T) {
	obj := autoBuilder()
	assert.Equal(t, obj.DataProductName(), "iris-product")

	product := obj.CreateDataProduct()
	assert.Equal(t, product.Name, "iris-product")
	assert.Equal(t, product.Namespace, "default-tenant")
	assert.Equal(t, product.Spec.Location.BucketName, "default-digitalocean-bucket")
	assert.Equal(t, product.Spec.TenantRef.Name, "default-tenant")
	assert.Equal(t, product.Spec.TenantRef.Namespace, "modela-system")
	assert.Equal(t, *product.Spec.ServingSiteName, "default-serving-site")
	assert.Equal(t, product.Spec.Location.Path, "modela/live/tenants/default-tenant/dataproducts/iris-product")
}

func TestProductVersion(t *testing.T) {
	obj := autoBuilder()
	assert.Equal(t, obj.DataProductName(), "iris-product")

	version := obj.CreateDataProductVersion()
	assert.Equal(t, version.Name, "v0.0.1")
	assert.Equal(t, version.Namespace, "iris-product")
	assert.Equal(t, *version.Spec.Baseline, true)
	assert.Equal(t, version.Spec.ProductRef.Name, "iris-product")
	assert.Equal(t, version.Spec.ProductRef.Namespace, "default-tenant")

}

func TestDataSource(t *testing.T) {
	obj := autoBuilder()
	assert.Equal(t, obj.DatasourceName(), "iris")

	file := obj.CreateDataSource([]data.Column{})
	assert.Equal(t, file.Name, "iris")
	assert.Equal(t, file.Spec.VersionName, "v0.0.1")
}
