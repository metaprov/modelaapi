package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

////////////////////////////////////////////////////////////////////////////////
// Monitoring Rules
///////////////////////////////////////////////////////////////////////////////

// ModelTestName defines a model monitoring validation rule
type ModelTestName string

const (
	ColumnGE            ModelTestName = "column_metric_should_be_greater_equal_than"
	ColumnMetricInRange ModelTestName = "column_metric_should_be_in_range"
	ColumnLE            ModelTestName = "column_metric_should_be_less_equal_than"
	ModelMetricGE       ModelTestName = "model_metric_should_be_less_equal_than"
	ModelMetricInRange  ModelTestName = "column_metric_should_be_in_range"
	ModelMetricLE       ModelTestName = "model_metric_should_be_in_range"
)

// ModelValidation defines a single validation to be run against a model
type ModelTest struct {
	// The type of model validation
	// +kubebuilder:validation:Optional
	Name ModelTestName `json:"name" protobuf:"bytes,1,opt,name=name,casttype=ModelTestName"`
	// PrevModel specifies a previous model to compare against
	// +kubebuilder:validation:Optional
	PrevModel *string `json:"prevModel,omitempty" protobuf:"bytes,2,opt,name=prevModel"`
	// The name of a labeled dataset used to test the model, when measuring a performance metric
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
	// Define the column name for the validation role
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,4,opt,name=column"`
	// Define the measurement metric.
	// +kubebuilder:validation:Optional
	Metric *catalog.Metric `json:"metric,omitempty" protobuf:"bytes,5,opt,name=metric"`
	// The lower range of the metric
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,6,opt,name=min"`
	// The lower upper range of the metric
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,7,opt,name=max"`
	// Agg specifies the type of aggregate when measuring aggregate performance (e.g. median, average)
	// +kubebuilder:validation:Optional
	Agg *catalog.Aggregate `json:"agg,omitempty" protobuf:"bytes,8,opt,name=agg"`
}

type ModelTestResult struct {
	Type string `json:"type" protobuf:"bytes,1,opt,name=type"`
	// DatasetName is the name of the dataset used to perform the validation
	DatasetName string `json:"datasetName" protobuf:"bytes,2,opt,name=datasetName"`
	// ModelName is the name of the model under test
	ModelName string `json:"modelName" protobuf:"bytes,3,opt,name=modelName"`
	// Column is the name of the feature.
	Column string `json:"column" protobuf:"bytes,4,opt,name=column"`
	// Error is a string.
	Error string `json:"error" protobuf:"bytes,5,opt,name=error"`
	// Metric is the measurement
	Metric *catalog.Metric `json:"metric" protobuf:"bytes,6,opt,name=metric"`
	// Actual value is the actual value
	ActualValue *float64 `json:"actualValue" protobuf:"bytes,7,opt,name=actualValue"`
	// Passed indicate if the result passed.
	Passed bool `json:"passed" protobuf:"bytes,8,opt,name=passed"`
	// At is the time the validation was performed.
	At *metav1.Time `json:"at" protobuf:"bytes,9,opt,name=at"`
	// The amount of time it took to compute this result
	DurationInSec int32 `json:"durationInSec" protobuf:"varint,10,opt,name=durationInSec"`
}
