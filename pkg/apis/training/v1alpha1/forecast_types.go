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

// +kubebuilder:validation:Enum="linear";"logistic";"flat";"quadratic";"none"
type GrowthMode string

const (
	Linear    GrowthMode = "linear"
	Logistic  GrowthMode = "logistic"
	Quadratic GrowthMode = "quadratic"
	Sqr2      GrowthMode = "sqrt"
	Flat      GrowthMode = "flat"
	None      GrowthMode = "none"
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

type SeasonalitySpec struct {
	// If true infer the seasonality
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"varint,1,opt,name=auto"`
	// +kubebuilder:validation:Optional
	Yearly *SeasonalityPeriodSpec `json:"yearly,omitempty" protobuf:"bytes,2,opt,name=yearly"`
	// +kubebuilder:validation:Optional
	Quarterly *SeasonalityPeriodSpec `json:"quarterly,omitempty" protobuf:"bytes,3,opt,name="`
	// +kubebuilder:validation:Optional
	Monthly *SeasonalityPeriodSpec `json:"monthly,omitempty" protobuf:"bytes,4,opt,name=monthly"`
	// +kubebuilder:validation:Optional
	Weekly *SeasonalityPeriodSpec `json:"weekly,omitempty" protobuf:"bytes,5,opt,name=weekly"`
	// +kubebuilder:validation:Optional
	Daily *SeasonalityPeriodSpec `json:"daily,omitempty" protobuf:"bytes,6,opt,name=daily"`
}

// Define the seasonality for a period (yearly / monthly / daily)
type SeasonalityPeriodSpec struct {
	// Is the seasonality exist
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Infer the seasonality
	// +kubebuilder:validation:Optional
	Auto *bool `json:"auto,omitempty" protobuf:"varint,2,opt,name=auto"`
	// If enabled, the number of data points in the interval
	// +kubebuilder:default:=0
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
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,5,opt,name=forecast"`
	// Make a forecast post training
	// +kubebuilder:validation:Optional
	Coverage *float64 `json:"coverage,omitempty" protobuf:"bytes,6,opt,name=coverage"`
	// The data location that would store the forecast result.
	// +kubebuilder:validation:Optional
	OutputLocation data.DataLocation `json:"outputLocation,omitempty" protobuf:"bytes,7,opt,name=outputLocation"`
	// List of time series features to compute on each time series.
	// +kubebuilder:validation:Optional
	Features []catalog.Metric `json:"features,omitempty" protobuf:"bytes,8,rep,name=features"`
	// Filter the groups to forecast for. If none forecast only to the leaf group
	// +kubebuilder:validation:Optional
	Groups []string `json:"groups,omitempty" protobuf:"bytes,9,rep,name=groups"`
	// +kubebuilder:validation:Optional
	PredefinedTemplate ModelTemplate `json:"predefinedTemplate,omitempty" protobuf:"bytes,10,opt,name=predefinedTemplate"`
	// +kubebuilder:validation:Optional
	Anomalies []Anomaly `json:"anomalies,omitempty" protobuf:"bytes,11,rep,name=anomalies"`
	// +kubebuilder:validation:Optional
	TrainEndDate string `json:"trainEndData,omitempty" protobuf:"bytes,12,opt,name=trainEndData"`
	// The value column. this is the name of the column to forecast, this will be based on the data source.
	// +kubebuilder:validation:Optional
	ValueColumn string `json:"valueColumn,omitempty" protobuf:"bytes,13,opt,name=valueColumn"`
	// +kubebuilder:validation:Optional
	HPOBudget *int32 `json:"hpoBudget,omitempty" protobuf:"varint,14,opt,name=hpoBudget"`
	// Spec for evaluation metric
	// +kubebuilder:validation:Optional
	EvalMetrics EvalMetrics `json:"evaluationMetrics,omitempty" protobuf:"bytes,15,opt,name=evaluationMetrics"`
	// Spec for time series cross validation
	// +kubebuilder:validation:Optional
	EvalPeriod EvalPeriod `json:"evaluationPeriod,omitempty" protobuf:"bytes,16,opt,name=evaluationPeriod"`
	// +kubebuilder:validation:Optional
	Seasonality SeasonalitySpec `json:"seasonality,omitempty" protobuf:"bytes,17,opt,name=seasonality"`
	// The regressor. Initially those are set from the data source schema
	// +kubebuilder:validation:Optional
	Regressors []string `json:"regressors,omitempty" protobuf:"bytes,18,rep,name=regressors"`
	// Lagged Regressors
	// +kubebuilder:validation:Optional
	LaggedRegressors []string `json:"laggedRegressors,omitempty" protobuf:"bytes,19,rep,name=laggedRegressors"`
	// Set the growth of the series
	// +kubebuilder:validation:Optional
	Growth GrowthMode `json:"growth,omitempty" protobuf:"bytes,20,opt,name=growth"`
	// In case of group forecast
	// +kubebuilder:validation:Optional
	Key []string `json:"key,omitempty" protobuf:"bytes,21,rep,name=key"`
	// The estimators to try. By default, we try graykit / auto arima and prophet.
	// +kubebuilder:validation:Optional
	Estimators []catalog.ClassicEstimatorName `json:"estimators,omitempty" protobuf:"bytes,22,rep,name=estimators"`
	// Group recocile.
	// By default this is the bottom-up
	// +kubebuilder:default:="bottom-up"
	// +kubebuilder:validation:Optional
	HTS *catalog.HTS `json:"hts,omitempty" protobuf:"bytes,23,opt,name=hts"`
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
	Ensemble *bool `json:"ensemble,omitempty" protobuf:"varint,1,opt,name=ensemble"`
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
	Date *bool `json:"date,omitempty" protobuf:"varint,5,opt,name=date"`
	// The list of windows to use when generating features.
	// +kubebuilder:validation:Optional
	Windows []int32 `json:"windows,omitempty" protobuf:"bytes,6,rep,name=windows"`
	// The list of lags to use when generating features
	// +kubebuilder:validation:Optional
	Lags []int32 `json:"lags,omitempty" protobuf:"bytes,7,rep,name=lags"`
	// The list of metrics to generate for each combination of lag and windows.
	// The default list is min,max,median,stddev
	// +kubebuilder:validation:Optional
	Functions []catalog.Metric `json:"functions,omitempty" protobuf:"bytes,8,rep,name=functions"`
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

type Anomaly struct {
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// +kubebuilder:validation:Optional
	ValueColumn string `json:"valueColumn,omitempty" protobuf:"bytes,2,opt,name=valueColumn"`
	// +kubebuilder:validation:Optional
	AdjDeltaColumn string `json:"adjDeltaColumn,omitempty" protobuf:"bytes,3,opt,name=adjDeltaColumn"`
	// The start of the anomaly
	// +kubebuilder:validation:Optional
	Start string `json:"start,omitempty" protobuf:"bytes,4,opt,name=start"`
	// The end of the anomaly
	// +kubebuilder:validation:Optional
	End string `json:"end,omitempty" protobuf:"bytes,5,opt,name=end"`
}

type TimeSeriesEvent struct {
	// Set to true if this event is an holiday
	// +kubebuilder:validation:Optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Set to true if this event is an holiday
	// +kubebuilder:validation:Optional
	Method string `json:"method,omitempty" protobuf:"bytes,2,opt,name=method"`
	// Set to true if this event is an holiday
	// +kubebuilder:validation:Optional
	Holiday *bool `json:"holiday,omitempty" protobuf:"varint,3,opt,name=holiday"`
	// If this event is an holiday, this is the holiday country
	// +kubebuilder:validation:Optional
	Country catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,4,opt,name=country"`
	// Pre event window, that might have event effects
	// +kubebuilder:validation:Optional
	PreEvent *int32 `json:"preEvent,omitempty" protobuf:"varint,5,opt,name=preEvent"`
	// Post event windows the might have event effects.
	// +kubebuilder:validation:Optional
	PostEvent *int32 `json:"postEvent,omitempty" protobuf:"varint,6,opt,name=postEvent"`
	// The time points to mark the events
	// +kubebuilder:validation:Optional
	TimePoints []string `json:"timePoints,omitempty" protobuf:"bytes,7,rep,name=timePoints"`
}

type ChangePoint struct {
}

// What metric to evaluate
type EvalMetrics struct {
	// From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	// Used to select the optimal model during cross-validation.
	// +kubebuilder:validation:Optional
	Selection catalog.Metric `json:"selection,omitempty" protobuf:"bytes,1,opt,name=selection"`
	// From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	// Additional metrics to compute during CV, besides the one specified by ``cv_selection_metric``
	// +kubebuilder:validation:Optional
	Reporting []catalog.Metric `json:"reporting,omitempty" protobuf:"bytes,2,rep,name=reporting"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//  Defines how to aggregate rolling windows of actual and predicted values
	//  before evaluation.
	// +kubebuilder:validation:Optional
	AggFunc *string `json:"aggFunc,omitempty" protobuf:"bytes,3,opt,name=aggFunc"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//  Number of periods to aggregate before evaluation.
	// +kubebuilder:validation:Optional
	AggPeriod *int32 `json:"aggPeriod,omitempty" protobuf:"varint,4,opt,name=aggPeriod"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	// Defines baseline model to compute ``R2_null_model_score`` evaluation metric.
	// R2_null_model_score is the improvement in the loss function relative
	//to a null model. It can be used to evaluate model quality with respect to
	//a simple baseline
	// +kubebuilder:validation:Optional
	NullModelParams *string `json:"nullModelParams,omitempty" protobuf:"bytes,5,opt,name=nullModelParams"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//Threshold to compute the ``Outside Tolerance`` metric,
	//defined as the fraction of forecasted values whose relative
	//error is strictly greater than ``relative_error_tolerance``.
	//If `NoneSeasonalityMode`, the metric is not computed.
	// +kubebuilder:validation:Optional
	RelErrTolerance *float64 `json:"relErrTolerance,omitempty" protobuf:"bytes,6,opt,name=relErrTolerance"`
}

// The cross validation spec, used to evaluate the forecaster during training.
type EvalPeriod struct {
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//Numbers of periods held back from end of df for test.
	//The rest is used for cross validation.
	//If None, default is forecast_horizon. Set to 0 to skip backtest.
	// +kubebuilder:validation:Optional
	TestHorizon *int32 `json:"testHorizon,omitempty" protobuf:"varint,1,opt,name=testHorizon"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//Number of periods for the gap between train and test data.
	//Applies to both backtest and forecast, however the behaviour is slightly different.
	//Check the illustration of test parameters for a visual explanation.
	//If NoneSeasonalityMode, default is 0.

	// +kubebuilder:validation:Optional
	PeriodsBetweenTrainTest *int32 `json:"periodsBetweenTrainTest,omitempty" protobuf:"varint,2,opt,name=periodsBetweenTrainTest"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//Number of periods to slide the test window between CV splits. Has to be greater than or equal to 1.
	//If None, default is cv_horizon.
	// +kubebuilder:validation:Optional
	CvPeriodsBetweenSplits *int32 `json:"cvPeriodsBetweenSplits,omitempty" protobuf:"varint,3,opt,name=cvPeriodsBetweenSplits"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//If True, training window for each CV split is fixed to the first available date.
	//Otherwise, train start date is sliding, determined by cv_min_train_periods

	// +kubebuilder:validation:Optional
	CvExpandingWindows *bool `json:"cvExpandingWindows,omitempty" protobuf:"varint,4,opt,name=cvExpandingWindows"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//Number of periods in each CV test set
	//If None, default is forecast_horizon. Set to 0 to skip CV.
	// +kubebuilder:validation:Optional
	CvHorizon *int32 `json:"cvHorizon,omitempty" protobuf:"varint,5,opt,name=cvHorizon"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	// Minimum number of periods for training each CV fold.
	//If cv_expanding_window is False, every training period is this size
	//If None, default is 2 * cv_horizon
	// +kubebuilder:validation:Optional
	CvMinTrainPeriods *int32 `json:"cvMinTrainPeriods,omitempty" protobuf:"varint,6,opt,name=cvMinTrainPeriods"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	// Maximum number of CV splits.
	// Given the above configuration, samples up to max_splits train/test splits,
	// preferring splits toward the end of available data. If None, uses all splits.
	// +kubebuilder:validation:Optional
	CvMaxSplits *int32 `json:"cvMaxSplits,omitempty" protobuf:"varint,7,opt,name=cvMaxSplits"`
	//  From: https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0400_configuration.html
	//If True, splits from the end of the dataset are used.
	//Else a sampling strategy is applied. Check
	// +kubebuilder:validation:Optional
	CvUseMostRecentSplits *bool `json:"cvUseMostRecentSplits,omitempty" protobuf:"varint,8,opt,name=cvUseMostRecentSplits"`
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
