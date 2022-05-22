// The API for prediction proxy filters.

package predictionproxy

import (
	datav1 "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	inferencev1 "github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1"
	trainingv1 "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	grpcinferencev1 "github.com/metaprov/modelaapi/services/grpcinferenceservice/v1"
)

type FilterContext struct {
	Datasource datav1.DataSource
	Study      trainingv1.Study
	Dataset    datav1.Dataset
	Predictor  inferencev1.Predictor
}

type Filter interface {
	Init(context FilterContext) error
	Filter(req grpcinferencev1.PredictRequest, res *grpcinferencev1.PredictResponse, chain FilterChain) error
	Shutdown(context FilterContext) error
}

type FilterChain interface {
	Filter(req grpcinferencev1.PredictRequest, res *grpcinferencev1.PredictResponse) error
}
