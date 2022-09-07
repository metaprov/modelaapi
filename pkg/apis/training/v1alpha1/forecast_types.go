package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
)

// +kubebuilder:validation:Enum="silverkite";"prophet";"auto-arima";"lag-based";"sk";"two-stage";"wow";"daily-1-config-1";"daily-1-config-2";"daily-1-config-3";"daily-1";"daily-90";"weekly";"monthly";"hourly-1";"hourly-24";"hourly-168";"hourly-336"
type ModelTemplate string

const (
	ModelTemplateSilverKite    ModelTemplate = "silverkite"
	ModelTemplateProphet       ModelTemplate = "prophet"
	ModelTemplateAutoArima     ModelTemplate = "auto-arima"
	ModelTemplateLagBased      ModelTemplate = "lag-based"
	ModelTemplateSK            ModelTemplate = "sk"
	ModelTemplateTwoStage      ModelTemplate = "two-stage"
	ModelTemplateWow           ModelTemplate = "wow"
	ModelTemplateDaily1Config1 ModelTemplate = "daily-1-config-1"
	ModelTemplateDaily1Config2 ModelTemplate = "daily-1-config-2"
	ModelTemplateDaily1Config3 ModelTemplate = "daily-1-config-3"
	ModelTemplateDaily1        ModelTemplate = "daily-1"
	ModelTemplateDaily90       ModelTemplate = "daily-90"
	ModelTemplateWeekly        ModelTemplate = "weekly"
	ModelTemplateMonthly       ModelTemplate = "monthly"
	ModelTemplateHourly1       ModelTemplate = "hourly-1"
	ModelTemplateHourly24      ModelTemplate = "hourly-24"
	ModelTemplateHourly168     ModelTemplate = "hourly-168"
	ModelTemplateHourly336     ModelTemplate = "hourly-336"
)

type SeasonalityType string

const (
	SeasonalityTypeHourly  SeasonalityType = "hourly"
	SeasonalityTypeDaily   SeasonalityType = "daily"
	SeasonalityTypeWeekly  SeasonalityType = "weekly"
	SeasonalityTypeMonthly SeasonalityType = "monthly"
	SeasonalityTypeYearly  SeasonalityType = "yearly"
)

// +kubebuilder:validation:Enum="recursive";"direct";"none"
type ForecastStrategy string

const (
	ForecastStrategyRecursive ForecastStrategy = "recursive"
	ForecastStrategyDirect    ForecastStrategy = "direct"
	ForecastStrategyNone      ForecastStrategy = "none"
)

// +kubebuilder:validation:Enum="linear";"logistic";"flat"
type GrowthMode string

const (
	Linear    GrowthMode = "linear"
	Logistic  GrowthMode = "logistic"
	Quadratic GrowthMode = "quadratic"
	Sqr2      GrowthMode = "sqrt"
	Flat      GrowthMode = "flat"
)

// Represent a time series feature

const (
	AbsEnergy                               catalog.Metric = "abs-enegry"                              // 	Returns the absolute energy of the time series which is the sum over the squared values
	AbsoluteMaximum                         catalog.Metric = "abs-maximum"                             //  Calculates the highest absolute value of the time series x.
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
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Freq catalog.Freq `json:"freq,omitempty" protobuf:"varint,1,opt,name=freq"`
	// If enabled, the number of data points in the interval
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Periods *int32 `json:"periods,omitempty" protobuf:"varint,2,opt,name=periods"`
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Mode *catalog.SeasonalityMode `json:"mode,omitempty" protobuf:"bytes,3,opt,name=mode"`
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

// The forecaster search define a search for the forecaster
type ForecasterSpec struct {
	// The spec for the holiday
	// +kubebuilder:validation:Optional
	Events []TimeSeriesEvent `json:"events,omitempty" protobuf:"bytes,2,rep,name=events"`
	// Specification for the past windows
	// +kubebuilder:validation:Optional
	Past WindowSpec `json:"past,omitempty" protobuf:"bytes,3,opt,name=past"`
	// Specification for the future windows
	// +kubebuilder:validation:Optional
	Future WindowSpec `json:"future,omitempty" protobuf:"bytes,4,opt,name=future"`
	// Make a forecast post training
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"bytes,5,opt,name=forecast"`
	// The data location that would store the forecast result.
	// +kubebuilder:validation:Optional
	OutputLocation data.DataLocation `json:"outputLocation,omitempty" protobuf:"bytes,6,opt,name=outputLocation"`
	// List of time series features to compute on each time series.
	// +kubebuilder:validation:Optional
	Features []catalog.Metric `json:"features,omitempty" protobuf:"bytes,7,opt,name=features"`
	// +kubebuilder:validation:Optional
	Levels []Level `json:"levels,omitempty" protobuf:"bytes,8,rep,name=levels"`
	// +kubebuilder:validation:Optional
	PredefinedTemplate ModelTemplate `json:"predefinedTemplate,omitempty" protobuf:"bytes,9,opt,name=predefinedTemplate"`
	// +kubebuilder:validation:Optional
	AnomalyInfo []AnomalyItem `json:"anomalyInfo,omitempty" protobuf:"bytes,10,opt,name=anomalyInfo"`
	// +kubebuilder:validation:Optional
	TrainEndDate string `json:"trainEndData,omitempty" protobuf:"bytes,14,opt,name=trainEndData"`
	// The value column. this is the name of the column to forecast, this will be based on the data source.
	// +kubebuilder:validation:Optional
	ValueColumn string `json:"valueColumn,omitempty" protobuf:"bytes,15,opt,name=valueColumn"`
	// +kubebuilder:validation:Optional
	HPOBudget *int32 `json:"hpoBudget,omitempty" protobuf:"bytes,16,opt,name=hpoBudget"`
	// Spec for evaluation
	// +kubebuilder:validation:Optional
	Evaluation EvaluationMetricSpec `json:"evaluation,omitempty" protobuf:"bytes,17,opt,name=evaluation"`
	// Spec for time series cross validation
	// +kubebuilder:validation:Optional
	CV ForecasterCrossValidationSpec `json:"cv,omitempty" protobuf:"bytes,18,opt,name=cv"`
	// +kubebuilder:validation:Optional
	Seasonalities []PeriodSeasonalitySpec `json:"seasonalities,omitempty" protobuf:"bytes,19,opt,name=seasonalities"`
	// Lagged Regressors
	// +kubebuilder:validation:Optional
	LaggedRegressors []string `json:"laggedRegressors,omitempty" protobuf:"bytes,21,opt,name=laggedRegressors"`
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
	Initial *int32 `json:"Initial,omitempty" protobuf:"varint,3,opt,name=Initial"`
	// The number of data points between each windows
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Gap *int32 `json:"gap,omitempty" protobuf:"varint,5,opt,name=gap"`
}

// Define how to build a regression model for forecasting (including feature engineering)
// This is not implemented today
type RegressionForecasterSpec struct {
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
	// If we are using reduced model, this is the way the reduced model will make prediction
	// Default to none
	// +kubebuilder:validation:Optional
	Reduction ForecastStrategy `json:"reduction,omitempty" protobuf:"bytes,11,opt,name=reduction"`
}

type AnomalyItem struct {
	// +kubebuilder:validation:Optional
	ValueColumn string `json:"valueColumn,omitempty" protobuf:"bytes,1,opt,name=valueColumn"`
	// +kubebuilder:validation:Optional
	AdjDeltaColumn string `json:"adjDeltaColumn,omitempty" protobuf:"bytes,2,opt,name=adjDeltaColumn"`
	// +kubebuilder:validation:Optional
	Start []string `json:"start,omitempty" protobuf:"bytes,3,opt,name=start"`
	// +kubebuilder:validation:Optional
	End []string `json:"end,omitempty" protobuf:"bytes,4,opt,name=end"`
}

type TimeSeriesEvent struct {
	// Set to true if this event is an holiday
	// +kubebuilder:validation:Optional
	Method string `json:"method,omitempty" protobuf:"bytes,1,opt,name=method"`
	// Set to true if this event is an holiday
	// +kubebuilder:validation:Optional
	Holiday *bool `json:"holiday,omitempty" protobuf:"bytes,2,opt,name=holiday"`
	// If this event is an holiday, this is the holiday country
	// +kubebuilder:validation:Optional
	Country catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,3,opt,name=country"`
	// Pre event window, that might have event effects
	// +kubebuilder:validation:Optional
	PreEvent *int32 `json:"preEvent,omitempty" protobuf:"bytes,4,opt,name=preEvent"`
	// Post event windows the might have event effects.
	// +kubebuilder:validation:Optional
	PostEvent *int32 `json:"postEvent,omitempty" protobuf:"bytes,5,opt,name=postEvent"`
	// The time points to mark the events
	// +kubebuilder:validation:Optional
	TimePoints []string `json:"timePoints,omitempty" protobuf:"bytes,6,opt,name=timePoints"`
}

type ChangePoint struct {
}

// What metric to evaluate
type EvaluationMetricSpec struct {
	// +kubebuilder:validation:Optional
	AggregateFunction *string `json:"aggregateFunction,omitempty" protobuf:"bytes,1,opt,name=aggregateFunction"`
	// +kubebuilder:validation:Optional
	AggregatePeriod *int32 `json:"aggregatePeriod,omitempty" protobuf:"bytes,2,opt,name=aggregatePeriod"`
	// +kubebuilder:validation:Optional
	NullModelParams *string `json:"nullModelParams,omitempty" protobuf:"bytes,3,opt,name=nullModelParams"`
	// +kubebuilder:validation:Optional
	RelativeErrorTolerance *float64 `json:"relativeErrorTolerance,omitempty" protobuf:"bytes,4,opt,name=relativeErrorTolerance"`
}

// The cross validation spec, used to evaluate the forecaster during training.
type ForecasterCrossValidationSpec struct {
	// +kubebuilder:validation:Optional
	ReportMetrics []catalog.Metric `json:"reportMetrics,omitempty" protobuf:"bytes,1,opt,name=reportMetrics"`
	// +kubebuilder:validation:Optional
	SelectionMetrics catalog.Metric `json:"selectionMetrics,omitempty" protobuf:"bytes,2,opt,name=selectionMetrics"`
	// +kubebuilder:validation:Optional
	ExpandingWindows *bool `json:"expandingWindows,omitempty" protobuf:"bytes,3,opt,name=expandingWindows"`
	// +kubebuilder:validation:Optional
	Horizon int32 `json:"horizon,omitempty" protobuf:"bytes,4,opt,name=horizon"`
	// +kubebuilder:validation:Optional
	MaxSplits int32 `json:"maxSplits,omitempty" protobuf:"bytes,5,opt,name=maxSplits"`
	// +kubebuilder:validation:Optional
	MinTrainPeriods int32 `json:"minTrainPeriods,omitempty" protobuf:"bytes,6,opt,name=minTrainPeriods"`
	// +kubebuilder:validation:Optional
	PeriodsBetweenSplits int32 `json:"periodsBetweenSplits,omitempty" protobuf:"bytes,7,opt,name=periodsBetweenSplits"`
	// +kubebuilder:validation:Optional
	PeriodsBetweenTrainTest int32 `json:"periodsBetweenTrainTest,omitempty" protobuf:"bytes,8,opt,name=periodsBetweenTrainTest"`
	// +kubebuilder:validation:Optional
	UseMostRecentSplits bool `json:"useMostRecentSplits,omitempty" protobuf:"bytes,9,opt,name=useMostRecentSplits"`
	// +kubebuilder:validation:Optional
	TestHorizon int32 `json:"testHorizon,omitempty" protobuf:"bytes,10,opt,name=testHorizon"`
	// +kubebuilder:validation:Optional
	Growth GrowthMode `json:"growth,omitempty" protobuf:"bytes,11,opt,name=growth"`
}

type UnivariateForecastStatus struct {
	// URI for the grid search result
	// +kubebuilder:validation:Optional
	GridSearchResultURI string `json:"gridSearchResultURI,omitempty" protobuf:"bytes,1,opt,name=gridSearchResultURI"`
	// The best estimator
	// +kubebuilder:validation:Optional
	BestEstimator ClassicalEstimatorSpec `json:"baseEstimator,omitempty" protobuf:"bytes,2,opt,name=baseEstimator"`
	// URI of the model
	// +kubebuilder:validation:Optional
	ModelURI string `json:"modelURI,omitempty" protobuf:"bytes,3,opt,name=modelURI"`
	// URI of the backtest result
	// +kubebuilder:validation:Optional
	CVResultURI string `json:"cvResultURI,omitempty" protobuf:"bytes,4,opt,name=cvResultURI"`
	// URI to the actual forecast
	// +kubebuilder:validation:Optional
	ForecastURI string `json:"forecastURI,omitempty" protobuf:"bytes,5,opt,name=forecastURI"`
}
