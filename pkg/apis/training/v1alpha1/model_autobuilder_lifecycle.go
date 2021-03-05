/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"path/filepath"

	"github.com/dustin/go-humanize"
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/training"
	"github.com/metaprov/modeldapi/pkg/util"
	v1 "k8s.io/api/core/v1"
	ctrl "sigs.k8s.io/controller-runtime"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"

	"github.com/ghodss/yaml"
)

//Set up the webhook with the manager.
func (b *ModelAutobuilder) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(b).
		Complete()
}

func (b *ModelAutobuilder) Age() string {
	return humanize.Time(b.CreationTimestamp.Time)
}

//==============================================================================
// Finalizer
//==============================================================================

func (b *ModelAutobuilder) HasFinalizer() bool {
	return util.HasFin(&b.ObjectMeta, training.GroupName)
}
func (b *ModelAutobuilder) AddFinalizer() { util.AddFin(&b.ObjectMeta, training.GroupName) }
func (b *ModelAutobuilder) RemoveFinalizer() {
	util.RemoveFin(&b.ObjectMeta, training.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

func (b *ModelAutobuilder) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(b)
}

func (b *ModelAutobuilder) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/quickpipelines/%s", b.Namespace, b.Name)
}

func (b *ModelAutobuilder) ManifestUri() string {
	return fmt.Sprintf("%s/%s-quickpipeline.yaml", b.RootUri(), b.Name)
}

//    dataproducts/*/featuresets/*/data/<file>.features.train
func (b *ModelAutobuilder) TrainUri() string {
	return fmt.Sprintf("%s/data/%s.b.train", b.RootUri(), b.Name)
}

func (b *ModelAutobuilder) TestUri() string {
	return fmt.Sprintf("%s/data/%s.b.test", b.RootUri(), b.Name)
}

//    dataproducts/*/models/*/bin/model.joblib
func (b *ModelAutobuilder) WeightsUri() string {
	return fmt.Sprintf("%s/bin/model.joblib", b.RootUri())
}

//==============================================================================
// Staging object
//==============================================================================

// Merge or update condition
func (b *ModelAutobuilder) CreateOrUpdateCond(cond ModelAutobuilderCondition) {
	i := b.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		b.Status.Conditions = append(b.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := b.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	b.Status.Conditions[i] = current
}

func (b *ModelAutobuilder) GetCondIdx(t ModelAutobuilderConditionType) int {
	for i, v := range b.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (b *ModelAutobuilder) GetCond(t ModelAutobuilderConditionType) ModelAutobuilderCondition {
	for _, v := range b.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ModelAutobuilderCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (b *ModelAutobuilder) Ready() bool {
	return b.GetCond(ModelAutobuilderReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) DataProductReady() bool {
	return b.GetCond(ModelAutobuilderDataProductReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) MarkDataProductReady() {
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderDataProductReady,
		Status: v1.ConditionTrue,
	})
}

func (b *ModelAutobuilder) DataProductVersionReady() bool {
	return b.GetCond(ModelAutobuilderDataProductVersionReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) MarkDataProductVersionReady() {
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderDataProductVersionReady,
		Status: v1.ConditionTrue,
	})
}

func (b *ModelAutobuilder) DataSourceReady() bool {
	return b.GetCond(ModelAutobuilderDataSourceReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) MarkDatasourceReady() {
	b.Status.Phase = ModelAutobuilderPhaseDataSource
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderDataSourceReady,
		Status: v1.ConditionTrue,
	})
}

func (b *ModelAutobuilder) DatasetReady() bool {
	return b.GetCond(ModelAutobuilderDatasetReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) MarkDatasetReady() {

	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderDatasetReady,
		Status: v1.ConditionTrue,
	})
}

func (b *ModelAutobuilder) StudyReady() bool {
	return b.GetCond(ModelAutobuilderStudyReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) MarkStudyReady() {
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderStudyReady,
		Status: v1.ConditionTrue,
	})
}

//////////////// Predictor

func (b *ModelAutobuilder) MarkPredictorStarted() {
	b.Status.Phase = ModelAutobuilderPhasePredictor
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:    ModelAutobuilderPredictorReady,
		Status:  v1.ConditionFalse,
		Message: "Running",
	})
}

func (b *ModelAutobuilder) PredictorReady() bool {
	return b.GetCond(ModelAutobuilderPredictorReady).Status == v1.ConditionTrue
}

func (b *ModelAutobuilder) MarkPredictorReady() {
	b.Status.Phase = ModelAutobuilderPhaseReady
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderDataProductReady,
		Status: v1.ConditionTrue,
	})
}

func (b *ModelAutobuilder) Deleted() bool {
	return !b.DeletionTimestamp.IsZero()
}

func (b *ModelAutobuilder) MarkFailed(err error) {
	b.Status.Phase = ModelAutobuilderPhaseFailed
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:    ModelAutobuilderReady,
		Status:  v1.ConditionFalse,
		Message: err.Error(),
	})
}

func (b *ModelAutobuilder) MarkComplete() {
	b.Status.Phase = ModelAutobuilderPhaseReady
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:   ModelAutobuilderReady,
		Status: v1.ConditionTrue,
	})
}

func (b *ModelAutobuilder) MarkStudyStarted() {
	b.Status.Phase = ModelAutobuilderPhaseStudy
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:    ModelAutobuilderStudyReady,
		Status:  v1.ConditionFalse,
		Message: "Running",
	})
}

func (b *ModelAutobuilder) MarkDatasetStarted() {
	b.Status.Phase = ModelAutobuilderPhaseDataset
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:    ModelAutobuilderDatasetReady,
		Status:  v1.ConditionFalse,
		Message: "Running",
	})

}

func (b *ModelAutobuilder) MarkDataSourceStarted() {
	b.Status.Phase = ModelAutobuilderPhaseDataSource
	b.CreateOrUpdateCond(ModelAutobuilderCondition{
		Type:    ModelAutobuilderDataSourceReady,
		Status:  v1.ConditionFalse,
		Message: "Running",
	})
}

/// PublishedModelAutobuilderRef state

func ParseModelAutobuilderYaml(content []byte) (*ModelAutobuilder, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*ModelAutobuilder)
	return r, nil
}

//////////////////////////////////// Factory methods for the different components

func (b *ModelAutobuilder) CreateDataProduct() *data.DataProduct {
	res := &data.DataProduct{
		ObjectMeta: metav1.ObjectMeta{
			Name:      b.DataProductName(),
			Namespace: "default-tenant",
			Labels: map[string]string{
				"modelautobuilder": b.Name,
			},
		},
		Spec: data.DataProductSpec{
			TenantRef: &v1.ObjectReference{
				Namespace: "modeld-system",
				Name:      "default-tenant",
			},
			StakeHolders: nil,
			DataLocation: data.DataLocation{
				BucketName: "default-digitalocean-bucket",
				Path:       "modeld/live/tenants/default-tenant/dataproducts/" + b.DataProductName(),
			},
			ImageLocation: &data.ImageLocation{
				Name:                   util.StrPtr(b.Name),
				RegistryConnectionName: util.StrPtr("default-docker-registry"),
			},
			//StakeHolders: make([]data.StakeHolder,0) ,
			//BucketName:       *b.Spec.BucketName,
			LabName:         util.StrPtr("default-lab"),
			ServingSiteName: util.StrPtr("default-serving-site"),
			Task:            b.Spec.Task,
			Description:     util.StrPtr(""),
		},
		Status: data.DataProductStatus{
			Conditions: make([]data.DataProductCondition, 0),
		},
	}
	res.Default()
	return res

}

func (b *ModelAutobuilder) DataProductName() string {
	return *b.Spec.DataProductName
}

func (b *ModelAutobuilder) CreateDataProductVersion() *data.DataProductVersion {
	return &data.DataProductVersion{
		ObjectMeta: metav1.ObjectMeta{
			Name:      b.DataProductVersionName(),
			Namespace: b.DataProductName(),
			Labels: map[string]string{
				"modelautobuilder": b.Name,
			},
		},
		Spec: data.DataProductVersionSpec{
			ProductRef: v1.ObjectReference{
				Namespace: "default-tenant",
				Name:      b.DataProductName(),
			},
			Description:     util.StrPtr(""),
			PrevVersionName: util.StrPtr(""),
			Baseline:        util.BoolPtr(true),
		},
	}
}

func (b *ModelAutobuilder) DataProductVersionName() string {
	return *b.Spec.DataProductVersionName
}

func (b *ModelAutobuilder) DatasourceName() string {
	return b.Name
}

func (b *ModelAutobuilder) PredictorName() string {
	return b.Name
}

func (b *ModelAutobuilder) CreateDataSource(columns []data.Column) *data.DataSource {
	csv := data.FlatFileTypeCsv
	del := data.DelimiterComma
	enc := catalog.FileEncodingUtf8
	tp := data.FlatFileDataSource
	ds := &data.DataSource{
		ObjectMeta: metav1.ObjectMeta{
			Name:      b.DatasourceName(),
			Namespace: b.Namespace,
		},
		Spec: data.DataSourceSpec{
			OwnerName:   nil,
			VersionName: util.StrPtr(b.DataProductVersionName()),
			Description: util.StrPtr(""),
			Schema:      &data.Schema{Columns: columns},
			Type:        &tp,
			FlatFile: &data.FlatFileSpec{
				FileType:     &csv,
				Delimiter:    &del,
				QuoteChar:    "",
				EscapeChar:   "",
				CommentChars: "",
				Header:       util.BoolPtr(true),
				SkipRows:     nil,
				NullValues:   nil,
				Encoding:     &enc,
				MaxRows:      nil,
				Strict:       nil,
			},
			Table: nil,
		},
	}
	return ds

}

func (b *ModelAutobuilder) SchemaName() string {
	return b.Name
}

// Answer the last component in the path
func (b *ModelAutobuilder) FileName() string {
	return *b.Spec.Path
}

func (b *ModelAutobuilder) CreateDataset() *data.Dataset {
	fname := filepath.Base(b.FileName())
	rawPath := fmt.Sprintf("modeld/live/tenants/default-tenant/dataproducts/%s/versions/%s/datasets/%s/data/raw/%s",
		b.DataProductName(),
		b.DataProductVersionName(),
		b.DatasetName(),
		fname)

	dataset := &data.Dataset{
		ObjectMeta: metav1.ObjectMeta{
			Name:      b.DatasetName(),
			Namespace: b.Namespace,
			Labels: map[string]string{
				"modelautobuilder": b.Name,
			},
		},
		Spec: data.DatasetSpec{
			VersionName:    util.StrPtr(b.DataProductVersionName()),
			DataSourceName: util.StrPtr(b.DatasourceName()),
			Description:    util.StrPtr(""),
			Reported:       util.BoolPtr(true),
			Validated:      util.BoolPtr(true),
			Labeled:        util.BoolPtr(true),
			Origin: &data.DataLocation{
				Path: *b.Spec.Path,
			},
			Location: &data.DataLocation{
				Path: rawPath,
			},
		},
	}

	dataset.Default()
	return dataset
}

func (b *ModelAutobuilder) DatasetName() string {
	return b.Name
}

func (b *ModelAutobuilder) PrintConditions() {
	for _, v := range b.Status.Conditions {
		fmt.Println(v)
	}
}

func (b *ModelAutobuilder) CreateStudy() *Study {
	//random := RandomSearch
	res := &Study{
		ObjectMeta: metav1.ObjectMeta{
			Name:      b.StudyName(),
			Namespace: b.Namespace,
			Labels: map[string]string{
				"modelautobuilder": b.Name,
			},
		},
		Spec: StudySpec{
			VersionName: util.StrPtr(b.DataProductVersionName()),
			Description: util.StrPtr(""),
			LabRef: &v1.ObjectReference{
				Namespace: "default-tenant",
				Name:      "default-lab",
			},
			DatasetName: util.StrPtr(b.DatasetName()),
			Task:        b.Spec.Task,
			Objective:   b.Spec.Objective,
			Search: &ModelSearchSpec{
				Type:      b.Spec.SearchMethod,
				MaxTime:   b.Spec.MaxTime,
				MaxModels: b.Spec.MaxModels,
				Trainers:  b.Spec.Trainers,
			},
			Preprocessing: nil,
			Training: &TrainingSpec{
				Priority:    nil,
				CvType:      nil,
				CV:          nil,
				Folds:       nil,
				Retry:       nil,
				EvalMetrics: nil,
			},
			Aborted:  util.BoolPtr(false),
			Reported: util.BoolPtr(true),
			Paused:   util.BoolPtr(false),
			Profiled: util.BoolPtr(true),
		},
	}
	res.Default()
	return res
}

func (b *ModelAutobuilder) StudyName() string {
	return b.Name
}

// create study
//
