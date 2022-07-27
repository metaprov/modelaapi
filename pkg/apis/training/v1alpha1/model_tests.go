package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
)

////////////////////////////////////////////////////////////////////////////////
// Model Assertions
///////////////////////////////////////////////////////////////////////////////
const (
	ModelAccuracyGreaterThan catalog.AssertionType = "accuracy-greater-than"
	// classification
	ModelAveragePrecisionGreaterThan  catalog.AssertionType = "model-average-precision-greater-than"
	ModelBalancedAccuracyGreaterThan  catalog.AssertionType = "model-balanced-accuracy-greater-than"
	ModelF1BinaryGreaterThan          catalog.AssertionType = "model-f1-greater-than"
	ModelF1MicroGreaterThan           catalog.AssertionType = "model-f1-micro-greater-than"
	ModelF1MacroGreaterThan           catalog.AssertionType = "model-f1-macro-greater-than"
	ModelF1WeightedGreaterThan        catalog.AssertionType = "model-f1-weighted-greater-than"
	ModelF1SamplesGreaterThan         catalog.AssertionType = "model-f1-samples-greater-than"
	ModelPrecisionBinaryGreaterThan   catalog.AssertionType = "model-precision-greater-than"
	ModelPrecisionMicroGreaterThan    catalog.AssertionType = "model-precision-micro-greater-than"
	ModelPrecisionMacroGreaterThan    catalog.AssertionType = "model-precision-macro-greater-than"
	ModelPrecisionWeightedGreaterThan catalog.AssertionType = "model-precision-weighted-greater-than"
	ModelPrecisionSamplesGreaterThan  catalog.AssertionType = "model-precision-samples-greater-than"
	ModelRecallBinaryGreaterThan      catalog.AssertionType = "model-recall-greater-than"
	ModelRecallMacroGreaterThan       catalog.AssertionType = "model-recall-macro-greater-than"
	ModelRecallMicroGreaterThan       catalog.AssertionType = "model-recall-micro-greater-than"
	ModelRecallWeightedGreaterThan    catalog.AssertionType = "model-recall-weighted-greater-than"
	ModelRecallSamplesGreaterThan     catalog.AssertionType = "model-recall-samples-greater-than"
	ModelLogLossLessThan              catalog.AssertionType = "model-log-loss-less-than"
	ModelRocAucGreaterThan            catalog.AssertionType = "model-auc-greater-than"
	ModelRocAucMicroGreaterThan       catalog.AssertionType = "model-auc-micro-greater-than"
	ModelRocAucMacroGreaterThan       catalog.AssertionType = "model-auc-macro-greater-than"
	ModelRocAucWeightedGreaterThan    catalog.AssertionType = "model-auc-weighted-greater-than"
	ModelPRRocAucGreaterThan          catalog.AssertionType = "model-pr-auc-greater-than"
	ModelPRRocAucMicroGreaterThan     catalog.AssertionType = "model-pr-auc-micro-greater-than"
	ModelPRRocAucMacroGreaterThan     catalog.AssertionType = "model-pr-auc-macro-greater-than"
	ModelPRRocAucWeightedGreaterThan  catalog.AssertionType = "model-pr-auc-weighted-greater-than"
	ModelZeroOneGreaterThan           catalog.AssertionType = "model-zero-one-greater-than"
	ModelHammingLossLessThan          catalog.AssertionType = "model-hamming-loss-less-than"
	ModelHingeLossLessThan            catalog.AssertionType = "model-hinge-loss-less-than"
	ModelJacquardScoreLessThan        catalog.AssertionType = "model-jacquard-loss-less-than"
	ModelMatthewsCorrCoefGreaterThan  catalog.AssertionType = "model-mcc-greater-than"
	ModelFpGreaterThan                catalog.AssertionType = "model-fp-"
	ModelFnGreaterThan                catalog.AssertionType = "model-fn"
	ModelTnGreaterThan                catalog.AssertionType = "model-tn-greater-than"
	ModelTpGreaterThan                catalog.AssertionType = "model-tp-greater-than"
	ModelTprGreaterThan               catalog.AssertionType = "model-tpr-greater-than"
	ModelFprGreaterThan               catalog.AssertionType = "model-fpr-greater-than"
	ModelTnrGreaterThan               catalog.AssertionType = "model-tnr-greater-than"
	ModelMCCGreaterThan               catalog.AssertionType = "model-matthews-corr-coef-greater-than"

	/// Regression
	ModelExplainedVarianceLessThan   catalog.AssertionType = "model-explained-variance-less-than"
	ModelMaxErrorLessThan            catalog.AssertionType = "model-max-error-less-than"
	ModelMAELessThan                 catalog.AssertionType = "model-mae-less-than"
	ModelMSELessThan                 catalog.AssertionType = "model-mse-less-than"
	ModelMSLELessThan                catalog.AssertionType = "model-msle-less-than"
	ModelRMSELessThan                catalog.AssertionType = "model-rmse-less-than"
	ModelRMSLELessThan               catalog.AssertionType = "model-rmsle-less-than"
	ModelMedianAbsoluteErrorLessThan catalog.AssertionType = "model-median-absolute-error-less-than"
	ModelR2LessThan                  catalog.AssertionType = "model-r2-less-than"
	ModelAdjR2LessThan               catalog.AssertionType = "model-adj-r2-less-than"
	ModelMeanPoissonDevianceLessThan catalog.AssertionType = "model-mean_poisson_deviance-less-than"
	ModelMeanGammaDevianceLessThan   catalog.AssertionType = "model-mean-gamma-deviance-less-than"
	ModelMeanTweedieDevianceLessThan catalog.AssertionType = "model-mean-tweedie-deviance-less-than"

	// Forecast specific
	ModelMAPELessThan  catalog.AssertionType = "model-mape-less-than"
	ModelMAZELessThan  catalog.AssertionType = "model-maze-less-than"
	ModelMDAPELessThan catalog.AssertionType = "model-mdape-less-than" // median absolute percentage error
	ModelSMAPELessThan catalog.AssertionType = "model-smape-less-than"

	//Clustering
	ModelAdjustedMutualInfoScoreBetween   catalog.AssertionType = "model-adjusted-mutual-info-score-between"
	ModelAdjustedRandScoreBetween         catalog.AssertionType = "model-adjusted-rand-score-between"
	ModelCompletenessScoreBetween         catalog.AssertionType = "model-completeness-score-between"
	ModelFowlkesMallowsScoreBetween       catalog.AssertionType = "model-fowlkes-mallows-score-between"
	ModelHomogeneityScoreBetween          catalog.AssertionType = "model-homogeneity-score-between"
	ModelMutualInfoScoreBetween           catalog.AssertionType = "model-mutual-info-score-between"
	ModelNormalizedMutualInfoScoreBetween catalog.AssertionType = "model-normalized-mutual-info-score-between"
	ModelVMeasureScoreBetween             catalog.AssertionType = "model-v-measure-score-between"

	// Infra metrics
	ServingP50LatencyLowerThan catalog.AssertionType = "serving-p50-latency-lower-than"
	ServingP95LatencyLowerThan catalog.AssertionType = "serving-p95-latency-lower-than"
	ServingP99LatencyLowerThan catalog.AssertionType = "serving-p99-latency-lower-than"
	ServingReqSecBetween       catalog.AssertionType = "req-per-sec-between"
	CpuBetween                 catalog.AssertionType = "cpu-between"
	GpuBetween                 catalog.AssertionType = "gpu-between"
	MemBetween                 catalog.AssertionType = "mem-between"
	GpuMemBetween              catalog.AssertionType = "gpu-mem-between"

	PredictorUncertainPredictionPercent catalog.AssertionType = "uncertain-prediction-percent-between"
)

// Assertion type compare to baseline
const (
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
	UnitTests catalog.TestSuite `json:"unitTests,omitempty" protobuf:"bytes,3,opt,name=unitTests"`
}
