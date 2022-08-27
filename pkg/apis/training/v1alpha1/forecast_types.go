package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
)

// +kubebuilder:validation:Enum="recursive";"direct";
type ForecastStrategy string

const (
	Recursive ForecastStrategy = "recursive"
	Direct    ForecastStrategy = "direct"
)

// +kubebuilder:validation:Enum="linear";"logistic";"flat"
type GrowthMode string

const (
	Linear   GrowthMode = "linear"
	Logistic GrowthMode = "logistic"
	Flat     GrowthMode = "flat"
)

// Represent a time series feature

const (
	AbsEnergy                               catalog.Metric = "ts-abs-enegry"                           // 	Returns the absolute energy of the time series which is the sum over the squared values
	AbsoluteMaximum                         catalog.Metric = "ts-abs-maximum"                          //  Calculates the highest absolute value of the time series x.
	AbsoluteSumOfChanges                    catalog.Metric = "abs-sum-of-change"                       ///Returns the sum over the absolute value of consecutive changes in the series x
	CountAboveMean                          catalog.Metric = "count_above_mean"                        // Returns the number of values in x that are higher than the mean of x
	CountBelowMean                          catalog.Metric = "count_below_mean"                        //Returns the number of values in x that are lower than the mean of x
	FirstLocationOfMaximum                  catalog.Metric = "first_location_of_maximum"               //Returns the first location of the maximum value of x.
	FirstLocationOfMinimum                  catalog.Metric = "first_location_of_minimum"               // Returns the first location of the minimal value of x.
	BenfordCorrelation                      catalog.Metric = "benford_correlation"                     //Useful for anomaly detection applications [1][2].
	HasDuplicate                            catalog.Metric = "has_duplicate"                           // has_duplicate(x)	Checks if any value in x occurs more than once
	HasDuplicateMax                         catalog.Metric = "has_duplicate_max"                       // has_duplicate_max(x)	Checks if the maximum value of x is observed more than once
	HasDuplicateMean                        catalog.Metric = "has_duplicate_min"                       // has_duplicate_min(x)	Checks if the minimal value of x is observed more than once
	Kurtosis                                catalog.Metric = "kurtosis"                                // kurtosis(x)	Returns the kurtosis of x (calculated with the adjusted Fisher-Pearson standardized moment coefficient G2).
	LastLocationOfMaximum                   catalog.Metric = "last_location_of_maximum"                //(x)	Returns the relative last location of the maximum value of x.
	LastLocationOfMinimum                   catalog.Metric = "last_location_of_minimum"                // last_location_of_minimum(x)	Returns the last location of the minimal value of x.
	Maximum                                 catalog.Metric = "maximum"                                 // maximum(x)	Calculates the highest value of the time series x.
	Mean                                    catalog.Metric = "mean"                                    // mean(x)	Returns the mean of x
	MeanAbsChange                           catalog.Metric = "mean_abs_change"                         // mean_abs_change(x)	Average over first differences.
	MeanChange                              catalog.Metric = "mean_change"                             // mean_change(x)	Average over time series differences.
	Median                                  catalog.Metric = "median"                                  // median(x)	Returns the median of x
	Minimum                                 catalog.Metric = "minimum"                                 // minimum(x)	Calculates the lowest value of the time series x.
	Root_mean_square                        catalog.Metric = "root_mean_square"                        // root_mean_square(x)	Returns the root mean square (rms) of the time series.
	Sample_entropy                          catalog.Metric = "sample_entropy"                          // sample_entropy(x)	Calculate and return sample entropy of x.
	Standard_deviation                      catalog.Metric = "standard_deviation"                      // standard_deviation(x)	Returns the standard deviation of x
	Sum_of_reoccurring_data_points          catalog.Metric = "sum_of_reoccurring_data_points"          // sum_of_reoccurring_data_points(x)	Returns the sum of all data points, that are present in the time series more than once.
	Sum_of_reoccurring_values               catalog.Metric = "sum_of_reoccurring_values"               // sum_of_reoccurring_values(x)	Returns the sum of all values, that are present in the time series more than once.
	Sum_values                              catalog.Metric = "sum_values"                              // sum_values(x)	Calculates the sum over the time series values
	Longest_strike_above_mean               catalog.Metric = "longest_strike_above_mean"               // longest_strike_above_mean(x)	Returns the length of the longest consecutive subsequence in x that is bigger than the mean of x
	Longest_strike_below_mean               catalog.Metric = "longest_strike_below_mean"               // longest_strike_below_mean(x)	Returns the length of the longest consecutive subsequence in x that is smaller than the mean of x
	Variance                                catalog.Metric = "variance"                                // variance(x)	Returns the variance of x
	Variance_larger_than_standard_deviation catalog.Metric = "variance_larger_than_standard_deviation" // variance_larger_than_standard_deviation(x)	Is variance higher than the standard deviation?
	Variation_coefficient                   catalog.Metric = "variation_coefficient"                   // variation_coefficient(x)
	Skewness                                catalog.Metric = "skewness"                                // skewness(x)	Returns the sample skewness of x (calculated with the adjusted Fisher-Pearson standardized moment coefficient G1).
)

// Define the seasonality for a period (yearly / monthly / daily)
type PeriodSeasonalitySpec struct {
	// Is this seasonality enabled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// If enabled, the number of data points in the interval
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Periods *int32 `json:"periods,omitempty" protobuf:"varint,2,opt,name=periods"`
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Mode *catalog.SeasonalityMode `json:"mode,omitempty" protobuf:"bytes,3,opt,name=mode"`
}

// SeasonalitySpec defines the custom seasonality
type CustomSeasonalitySpec struct {
	// The name of the custom seasonality
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The name of the custom seasonality
	// +kubebuilder:validation:Required
	// +required
	Period float64 `json:"period,omitempty" protobuf:"bytes,2,opt,name=period"`
	// +kubebuilder:validation:Optional
	FourierOrder *int32 `json:"fourierOrder,omitempty" protobuf:"varint,3,opt,name=fourierOrder"`
}

// Define a window on the time series.
type WindowSpec struct {
	// The period interval
	// +kubebuilder:validation:Optional
	Interval *catalog.Freq `json:"interval,omitempty" protobuf:"bytes,1,opt,name=interval"`
	// The number of intervals to start. If the start is more than 0, there is a gap.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Start *int32 `json:"start,omitempty" protobuf:"varint,2,opt,name=start"`
	// The window length
	// +kubebuilder:validation:Optional
	Length *int32 `json:"length,omitempty" protobuf:"varint,3,opt,name=length"`
}

type RegressorSpec struct {
	// The Name of the regressor
	// +kubebuilder:validation:Optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// This is a regularization parameter, to adjust the affect of the regressor.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	PriorScale *float64 `json:"priorScale,omitempty" protobuf:"bytes,2,opt,name=priorScale"`
	// Set to true if the regressor is standardized
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Standardize *bool `json:"standardize,omitempty" protobuf:"varint,3,opt,name=standardize"`
}

type HolidaySpec struct {
	// The name of the holiday column. If the column is empty, no holiday
	// Column name of the first level of grouping
	// +kubebuilder:validation:Optional
	HolidayColumn *string `json:"holidayColumn,omitempty" protobuf:"bytes,1,opt,name=holidayColumn"`
	// +kubebuilder:validation:Optional
	Country *catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,2,opt,name=country"`
	// For custom holiday use external dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,3,opt,name=datasetName"`
}

type ProphetSpec struct {
	// +kubebuilder:default = 0.8
	// +kubebuilder:validation:Optional
	IntervalWidth *float64 `json:"intervalWidth,omitempty" protobuf:"bytes,1,opt,name=intervalWidth"`
	// +kubebuilder:default = 1000
	// +kubebuilder:validation:Optional
	UncertaintySamples *int32 `json:"uncertaintySamples,omitempty" protobuf:"varint,2,opt,name=uncertaintySamples"`
	// The generate seasonality mode
	// +kubebuilder:default = "additive"
	// +kubebuilder:validation:Optional
	SeasonalityMode *catalog.SeasonalityMode `json:"seasonality,omitempty" protobuf:"bytes,3,opt,name=seasonality"`
	// The confidence levels for the forecast, each level must be between 1-100.
	// +kubebuilder:default = 95
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	ConfidenceInterval *int32 `json:"confidenceIntervals,omitempty" protobuf:"varint,4,opt,name=confidenceInterval"`
	// +kubebuilder:validation:Optional
	YearlySeasonality PeriodSeasonalitySpec `json:"yearlySeasonality,omitempty" protobuf:"bytes,5,opt,name=yearlySeasonality"`
	// +kubebuilder:validation:Optional
	WeeklySeasonality PeriodSeasonalitySpec `json:"weeklySeasonality,omitempty" protobuf:"bytes,6,opt,name=weeklySeasonality"`
	// +kubebuilder:validation:Optional
	DailySeasonality PeriodSeasonalitySpec `json:"dailySeasonality,omitempty" protobuf:"bytes,7,opt,name=dailySeasonality"`
	// +kubebuilder:default = "linear"
	// +kubebuilder:validation:Optional
	Growth *GrowthMode `json:"growth,omitempty" protobuf:"bytes,8,opt,name=growth"`
	// number of change points
	// +kubebuilder:default = 25
	// +kubebuilder:validation:Optional
	ChangePoints *int32 `json:"changePoints,omitempty" protobuf:"varint,9,opt,name=changePoints"`
	// Change point range
	// +kubebuilder:default = 0.8
	// +kubebuilder:validation:Optional
	ChangePointRange *float64 `json:"changePointRange,omitempty" protobuf:"bytes,10,opt,name=changePointRange"`
	// Change point range
	// +kubebuilder:validation:Optional
	CustomSeasonalities []CustomSeasonalitySpec `json:"customSeasonalities,omitempty" protobuf:"bytes,11,rep,name=customSeasonalities"`
}

// ForecastingSpec
type ForecasterTrainingSpec struct {
	// The list of additional regressors. The regressors are part of the time series data
	// +kubebuilder:validation:Optional
	Regressors []RegressorSpec `json:"regressors,omitempty" protobuf:"bytes,1,rep,name=regressors"`
	// The spec for the holiday
	// +kubebuilder:validation:Optional
	Holidays []HolidaySpec `json:"holidays,omitempty" protobuf:"bytes,2,rep,name=holidays"`
	// Specification for the past windows
	// +kubebuilder:validation:Optional
	Past WindowSpec `json:"past,omitempty" protobuf:"bytes,3,opt,name=past"`
	// Specification for the future windows
	// +kubebuilder:validation:Optional
	Future WindowSpec `json:"future,omitempty" protobuf:"bytes,4,opt,name=future"`
	// The backtest specification, the system supports back testing with expanding windows.
	// +kubebuilder:validation:Optional
	Backtest BacktestSpec `json:"backtest,omitempty" protobuf:"bytes,5,opt,name=backtest"`
	// Make a forecast post training
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"bytes,6,opt,name=forecast"`
	// The data location that would store the forecast result.
	// +kubebuilder:validation:Optional
	OutputLocation data.DataLocation `json:"outputLocation,omitempty" protobuf:"bytes,7,opt,name=outputLocation"`
	// List of time series features to compute on each time series.
	// +kubebuilder:validation:Optional
	Features []catalog.Metric `json:"features,omitempty" protobuf:"bytes,8,opt,name=features"`
	// If using prophet, those are the prophet settings
	// +kubebuilder:validation:Optional
	Prophet ProphetSpec `json:"prophet,omitempty" protobuf:"bytes,9,opt,name=prophet"`
	// The forecasting pipeline
	// +kubebuilder:validation:Optional
	Pipeline ForecasterPipelineSpec `json:"pipeline,omitempty" protobuf:"bytes,10,opt,name=pipeline"`
	// Definitions of the many models
	// +kubebuilder:validation:Optional
	ManyModels ManyModelsSpec `json:"manyModels,omitempty" protobuf:"bytes,11,opt,name=manyModels"`
}

// A spec for many models definitions.
// If enabled, the study would generate models based on the levels of the keys
type ManyModelsSpec struct {
	// If true, use sliding windows, else use expanding windows
	// +kubebuilder:default = false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"sliding,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Define the grouping of the input file. A model will be generated for every group
	// +kubebuilder:validation:Optional
	GroupBy []string `json:"groupBy,omitempty" protobuf:"bytes,2,rep,name=groupBy"`
	// If true, generate a prophet model for each time series
	// +kubebuilder:default = true
	// +kubebuilder:validation:Optional
	Prophet *bool `json:"prophet,omitempty" protobuf:"varint,3,opt,name=prophet"`
	// If true, generate a arima model for each time series
	// +kubebuilder:default = false
	// +kubebuilder:validation:Optional
	Arima *bool `json:"arima,omitempty" protobuf:"varint,4,opt,name=arima"`
}

// BacktestSpec specify the back test
type BacktestSpec struct {
	// If true, use sliding windows, else use expanding windows
	// +kubebuilder:default = false
	// +kubebuilder:validation:Optional
	Sliding *bool `json:"sliding,omitempty" protobuf:"varint,1,opt,name=sliding"`
	// Number of splits. Default is 5
	// +kubebuilder:default = 5
	// +kubebuilder:validation:Optional
	Splits *int32 `json:"splits,omitempty" protobuf:"varint,2,opt,name=splits"`
	// ExpectedValueMax size for a single training set
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Optional
	InitialSize *int32 `json:"InitialSize,omitempty" protobuf:"varint,3,opt,name=InitialSize"`
	// The number of data points between each windows
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Gap *int32 `json:"gap,omitempty" protobuf:"varint,5,opt,name=gap"`
}

// A forecaster contains the metadata for one forecast model
type TimeSeriesModelSpec struct {
	// AlgorithmName is a reference to the algorithm in the catalog
	AlgorithmName string `json:"algorithmName,omitempty" protobuf:"bytes,2,opt,name=algorithmName"`
}

type TimeSeriesModelStatus struct {
	// +kubebuilder:validation:Optional
	ModelURI string `json:"modelURI,omitempty" protobuf:"bytes,1,rep,name=modelURI"`
	// Parameters is a list of the algorithm hyper parameters
	// +kubebuilder:validation:Optional
	Parameters []HyperParameterValue `json:"parameters,omitempty" protobuf:"bytes,2,rep,name=parameters,casttype=HyperParameterValue"`
	// The scores
	// +kubebuilder:validation:Optional
	Scores map[catalog.Metric]float64 `json:"scores,omitempty" protobuf:"bytes,3,rep,name=scores"`
}

///////////////////////////////////////////// Sktime based objects

type ForecasterSpec struct {
	// the Forecasting algorithm.
	// +kubebuilder:validation:Optional
	AlgorithmRef v1.ObjectReference `json:"algorithmRef,omitempty" protobuf:"bytes,1,rep,name=algorithmRef"`
	// Hyper Parameters for the classical algorithms.
	// +kubebuilder:validation:Optional
	HyperParameters []HyperParameterValue `json:"hyperParameters,omitempty" protobuf:"bytes,2,rep,name=hyperParameters"`
	// Reduction strategy
	// +kubebuilder:validation:Optional
	Reduction ReducedForecasterSpec `json:"reduction,omitempty" protobuf:"bytes,3,rep,name=reduction"`
}

// Reduced forecaster is used with a sklearn estimator (regression)
// Since we can only forecast one point in advance, we must specify the forecast strategy.
type ReducedForecasterSpec struct {
	// The est
	// +kubebuilder:validation:Optional
	Estimator ClassicalEstimatorSpec `json:"estimator,omitempty" protobuf:"bytes,1,opt,name=estimator"`
	// The forecast strategy. Since a regular regression can
	// +kubebuilder:validation:Optional
	Strategy ForecastStrategy `json:"strategy,omitempty" protobuf:"bytes,2,opt,name=strategy"`
}

type EnsembleForecasterSpec struct {
	Base map[string]ForecasterSpec `json:"base,omitempty" protobuf:"bytes,1,opt,name=base"`
}

type ForecasterPipelineSpec struct {
	// If true this is an ensemble pipeline
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ensemble *bool `json:"ensemble,omitempty" protobuf:"bytes,1,opt,name=ensemble"`
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Imputation *catalog.Imputation `json:"imputation,omitempty" protobuf:"bytes,2,opt,name=imputation"`
	// The encoding method to use for categorical data types
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Encoding *catalog.CategoricalEncoding `json:"encoding,omitempty" protobuf:"bytes,3,opt,name=encoding"`
	// The scaling method to use for numerical data types
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Scaling *catalog.Scaling `json:"scaling,omitempty" protobuf:"bytes,4,opt,name=scaling"`
	// If true apply the data transofmer to
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Date *bool `json:"date,omitempty" protobuf:"bytes,5,opt,name=date"`
	// The list of windows to use when generating features.
	// +kubebuilder:validation:Optional
	Windows []int32 `json:"windows,omitempty" protobuf:"bytes,6,opt,name=windows"`
	// The list of lags to use when generating features
	// +kubebuilder:validation:Optional
	Lags []int32 `json:"lags,omitempty" protobuf:"bytes,7,opt,name=lags"`
	// The list of metrics to generate for each combination of lag and windows.
	// The default list is min,max,median,stddev
	// +kubebuilder:validation:Optional
	Functions []catalog.Metric `json:"functions,omitempty" protobuf:"bytes,8,opt,name=functions"`
	// when computing moving avg, use exponential moving avg, other use regular moving avg
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	EMA *bool `json:"ema,omitempty" protobuf:"varint,9,opt,name=ema"` // should we use the target log.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Log *bool `json:"log,omitempty" protobuf:"varint,10,opt,name=log"` // should we use the target log.
	// The forecaster spec.
	// If this is a test of a single forecaster, this is the forecaster spec.
	// +kubebuilder:validation:Optional
	Forecaster *ForecasterSpec `json:"forecaster,omitempty" protobuf:"varint,11,opt,name=forecaster"` // should we use the target log.
	// If this is a test for an ensemble, this is the ensemble spec.
	// +kubebuilder:validation:Optional
	EnsembleForecaster *EnsembleForecasterSpec `json:"EnsembleForecaster,omitempty" protobuf:"varint,12,opt,name=ensembleForecaster"` // should we use the target log.
}
