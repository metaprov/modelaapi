package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
)

////////////////////////////////////////////////////////////////////////////////
// Monitoring Rules
///////////////////////////////////////////////////////////////////////////////

const (
	ModelAccuracy  catalog.AssertionType = "model-accuracy-greater-than"
	ModelRocAuc    catalog.AssertionType = "model-roc-auc-greater-than"
	ModelF1        catalog.AssertionType = "model-f1-greater-than"
	ModelPrecision catalog.AssertionType = "model-precision-greater-than"
	ModelRecall    catalog.AssertionType = "model-recall-less-than"
	ModelMSE       catalog.AssertionType = "model-mse-less-than"
	ModelRMSE      catalog.AssertionType = "model-rmse-less-than"
	ModelMAPE      catalog.AssertionType = "model-mape-less-than"

	ModelAccuracyGreaterThanBaseline  catalog.AssertionType = "model-accuracy-greater-than-baseline"
	ModelRocAucGreaterThanBaseline    catalog.AssertionType = "model-roc-auc-greater-than-baseline"
	ModelF1GreaterThanBaseline        catalog.AssertionType = "model-f1-greater-than-baseline"
	ModelPrecisionGreaterThanBaseline catalog.AssertionType = "model-precision-greater-than-baseline"
	ModelRecallGreaterThanBaseline    catalog.AssertionType = "model-recall-less-than-baseline"
	ModelMSELessThanBaseline          catalog.AssertionType = "model-mse-less-than-baseline"
	ModelRMSELessThanBaseline         catalog.AssertionType = "model-rmse-less-than-baseline"
	ModelMAPELessThanBaseline         catalog.AssertionType = "model-mape-less-than-baseline"
)

// ModelValidation defines a single validation to be run against a model
type ModelTestSuite struct {
	// Baseline Model Ref specifies a previous model to compare against
	// +kubebuilder:validation:Optional
	BaselineModelRef v1.ObjectReference `json:"baselineModelRef,omitempty" protobuf:"bytes,1,opt,name=baselineModelRef"`
	// The name of a labeled dataset used to test the model, when measuring a performance metric
	// +kubebuilder:validation:Optional
	DatasetRef v1.ObjectReference `json:"datasetRef,omitempty" protobuf:"bytes,2,opt,name=datasetRef"`
	// Define the column name for the validation role
	// +kubebuilder:validation:Optional
	Suite catalog.TestSuite `json:"suite,omitempty" protobuf:"bytes,3,opt,name=suite"`
}

type ModelTestSuiteResult struct {
	// +kubebuilder:validation:Optional
	SuiteResult catalog.TestSuiteResult `json:"suiteResult,omitempty" protobuf:"bytes,1,opt,name=suiteResult"`
}
