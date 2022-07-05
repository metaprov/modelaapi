package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
)

////////////////////////////////////////////////////////////////////////////////
// Monitoring Rules
///////////////////////////////////////////////////////////////////////////////

const (
	ModelAccuracy  catalog.TestCaseName = "model-accuracy-greater-than"
	ModelRocAuc    catalog.TestCaseName = "model-roc-auc-greater-than"
	ModelF1        catalog.TestCaseName = "model-f1-greater-than"
	ModelPrecision catalog.TestCaseName = "model-precision-greater-than"
	ModelRecall    catalog.TestCaseName = "model-recall-less-than"
	ModelMSE       catalog.TestCaseName = "model-mse-less-than"
	ModelRMSE      catalog.TestCaseName = "model-rmse-less-than"
	ModelMAPE      catalog.TestCaseName = "model-mape-less-than"
)

// ModelValidation defines a single validation to be run against a model
type ModelTestSuite struct {
	// PrevModel specifies a previous model to compare against
	// +kubebuilder:validation:Optional
	PrevModel *string `json:"prevModel,omitempty" protobuf:"bytes,2,opt,name=prevModel"`
	// The name of a labeled dataset used to test the model, when measuring a performance metric
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// Define the column name for the validation role
	// +kubebuilder:validation:Optional
	Suite catalog.TestSuite `json:"suite,omitempty" protobuf:"bytes,4,opt,name=suite"`
}

type ModelTestResult struct {
	// PrevModel specifies a previous model to compare against
	// +kubebuilder:validation:Optional
	PrevModel *string `json:"prevModel,omitempty" protobuf:"bytes,2,opt,name=prevModel"`
	// The name of a labeled dataset used to test the model, when measuring a performance metric
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// +kubebuilder:validation:Optional
	SuiteResult catalog.TestSuiteResult `json:"suiteResult,omitempty" protobuf:"bytes,4,opt,name=suiteResult"`
}
