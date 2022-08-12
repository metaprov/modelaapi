package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
)

// +kubebuilder:validation:Enum="linear";"logistic";"flat"
type GrowthMode string

const (
	Linear   GrowthMode = "linear"
	Logistic GrowthMode = "logistic"
	Flat     GrowthMode = "flat"
)

// Represent a time series feature
type TSFeature string

const (
	TSFeatureAbsEnergy            TSFeature = "abs-enegry"        // 	Returns the absolute energy of the time series which is the sum over the squared values
	TSFeatureAbsoluteMaximum      TSFeature = "abs-maximum"       //  Calculates the highest absolute value of the time series x.
	TSFeatureAbsoluteSumOfChanges TSFeature = "abs-sum-of-change" ///Returns the sum over the absolute value of consecutive changes in the series x
	/*
	   agg_autocorrelation(x, param)	Descriptive statistics on the autocorrelation of the time series.
	   agg_linear_trend(x, param)	Calculates a linear least-squares regression for values of the time series that were aggregated over chunks versus the sequence from 0 up to the number of chunks minus one.
	   approximate_entropy(x, m, r)	Implements a vectorized Approximate entropy algorithm.
	   ar_coefficient(x, param)	This feature calculator fits the unconditional maximum likelihood of an autoregressive AR(k) process.
	   augmented_dickey_fuller(x, param)	Does the time series have a unit root?
	   autocorrelation(x, lag)	Calculates the autocorrelation of the specified lag, according to the formula [1]
	   benford_correlation(x)	Useful for anomaly detection applications [1][2].
	   binned_entropy(x, max_bins)	First bins the values of x into max_bins equidistant bins.
	   c3(x, lag)	Uses c3 statistics to measure non linearity in the time series
	   change_quantiles(x, ql, qh, isabs, f_agg)	First fixes a corridor given by the quantiles ql and qh of the distribution of x.
	   cid_ce(x, normalize)	This function calculator is an estimate for a time series complexity [1] (A more complex time series has more peaks, valleys etc.).
	   count_above(x, t)	Returns the percentage of values in x that are higher than t
	   count_above_mean(x)	Returns the number of values in x that are higher than the mean of x
	   count_below(x, t)	Returns the percentage of values in x that are lower than t
	   count_below_mean(x)	Returns the number of values in x that are lower than the mean of x
	   cwt_coefficients(x, param)	Calculates a Continuous wavelet transform for the Ricker wavelet, also known as the “Mexican hat wavelet” which is
	   energy_ratio_by_chunks(x, param)	Calculates the sum of squares of chunk i out of N chunks expressed as a ratio with the sum of squares over the whole series.
	   fft_aggregated(x, param)	Returns the spectral centroid (mean), variance, skew, and kurtosis of the absolute fourier transform spectrum.
	   fft_coefficient(x, param)	Calculates the fourier coefficients of the one-dimensional discrete Fourier Transform for real input by fast
	   first_location_of_maximum(x)	Returns the first location of the maximum value of x.
	   first_location_of_minimum(x)	Returns the first location of the minimal value of x.
	   fourier_entropy(x, bins)	Calculate the binned entropy of the power spectral density of the time series (using the welch method).
	   friedrich_coefficients(x, param)	Coefficients of polynomial h(x), which has been fitted to
	   has_duplicate(x)	Checks if any value in x occurs more than once
	   has_duplicate_max(x)	Checks if the maximum value of x is observed more than once
	   has_duplicate_min(x)	Checks if the minimal value of x is observed more than once
	   index_mass_quantile(x, param)	Calculates the relative index i of time series x where q% of the mass of x lies left of i.
	   kurtosis(x)	Returns the kurtosis of x (calculated with the adjusted Fisher-Pearson standardized moment coefficient G2).
	   large_standard_deviation(x, r)	Does time series have large standard deviation?
	   last_location_of_maximum(x)	Returns the relative last location of the maximum value of x.
	   last_location_of_minimum(x)	Returns the last location of the minimal value of x.
	   lempel_ziv_complexity(x, bins)	Calculate a complexity estimate based on the Lempel-Ziv compression algorithm.
	   length(x)	Returns the length of x
	   linear_trend(x, param)	Calculate a linear least-squares regression for the values of the time series versus the sequence from 0 to length of the time series minus one.
	   linear_trend_timewise(x, param)	Calculate a linear least-squares regression for the values of the time series versus the sequence from 0 to length of the time series minus one.
	   longest_strike_above_mean(x)	Returns the length of the longest consecutive subsequence in x that is bigger than the mean of x
	   longest_strike_below_mean(x)	Returns the length of the longest consecutive subsequence in x that is smaller than the mean of x
	   matrix_profile(x, param)	Calculates the 1-D Matrix Profile[1] and returns Tukey’s Five Number Set plus the mean of that Matrix Profile.
	   max_langevin_fixed_point(x, r, m)	Largest fixed point of dynamics :math:argmax_x {h(x)=0}` estimated from polynomial h(x),
	   maximum(x)	Calculates the highest value of the time series x.
	   mean(x)	Returns the mean of x
	   mean_abs_change(x)	Average over first differences.
	   mean_change(x)	Average over time series differences.
	   mean_n_absolute_max(x, number_of_maxima)	Calculates the arithmetic mean of the n absolute maximum values of the time series.
	   mean_second_derivative_central(x)	Returns the mean value of a central approximation of the second derivative
	   median(x)	Returns the median of x
	   minimum(x)	Calculates the lowest value of the time series x.
	   number_crossing_m(x, m)	Calculates the number of crossings of x on m.
	   number_cwt_peaks(x, n)	Number of different peaks in x.
	   number_peaks(x, n)	Calculates the number of peaks of at least support n in the time series x.
	   partial_autocorrelation(x, param)	Calculates the value of the partial autocorrelation function at the given lag.
	   percentage_of_reoccurring_datapoints_to_all_datapoints(x)	Returns the percentage of non-unique data points.
	   percentage_of_reoccurring_values_to_all_values(x)	Returns the percentage of values that are present in the time series more than once.
	   permutation_entropy(x, tau, dimension)	Calculate the permutation entropy.
	   quantile(x, q)	Calculates the q quantile of x.
	   query_similarity_count(x, param)	This feature calculator accepts an input query subsequence parameter, compares the query (under z-normalized Euclidean distance) to all subsequences within the time series, and returns a count of the number of times the query was found in the time series (within some predefined maximum distance threshold).
	   range_count(x, min, max)	Count observed values within the interval [min, max).
	   ratio_beyond_r_sigma(x, r)	Ratio of values that are more than r * std(x) (so r times sigma) away from the mean of x.
	   ratio_value_number_to_time_series_length(x)	Returns a factor which is 1 if all values in the time series occur only once, and below one if this is not the case.
	   root_mean_square(x)	Returns the root mean square (rms) of the time series.
	   sample_entropy(x)	Calculate and return sample entropy of x.
	   set_property(key, value)	This method returns a decorator that sets the property key of the function to value
	   skewness(x)	Returns the sample skewness of x (calculated with the adjusted Fisher-Pearson standardized moment coefficient G1).
	   spkt_welch_density(x, param)	This feature calculator estimates the cross power spectral density of the time series x at different frequencies.
	   standard_deviation(x)	Returns the standard deviation of x
	   sum_of_reoccurring_data_points(x)	Returns the sum of all data points, that are present in the time series more than once.
	   sum_of_reoccurring_values(x)	Returns the sum of all values, that are present in the time series more than once.
	   sum_values(x)	Calculates the sum over the time series values
	   symmetry_looking(x, param)	Boolean variable denoting if the distribution of x looks symmetric.
	   time_reversal_asymmetry_statistic(x, lag)	Returns the time reversal asymmetry statistic.
	   value_count(x, value)	Count occurrences of value in time series x.
	   variance(x)	Returns the variance of x
	   variance_larger_than_standard_deviation(x)	Is variance higher than the standard deviation?
	   variation_coefficient(x)

	*/

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

type ChangePointSpec struct {
	// number of change points
	// +kubebuilder:default = 25
	// +kubebuilder:validation:Optional
	N *int32 `json:"N,omitempty" protobuf:"varint,1,opt,name=N"`
	// Change point range
	// +kubebuilder:default = 0.8
	// +kubebuilder:validation:Optional
	Range *float64 `json:"range,omitempty" protobuf:"bytes,2,opt,name=range"`
}

// Define a range of time series data points
type PeriodSpec struct {
	// The period interval
	// +kubebuilder:validation:Optional
	Interval *catalog.Freq `json:"interval,omitempty" protobuf:"bytes,1,opt,name=interval"`
	// The number of intervals to start
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Start *int32 `json:"start,omitempty" protobuf:"varint,2,opt,name=start"`
	// The windows end day
	// +kubebuilder:validation:Optional
	Length *int32 `json:"length,omitempty" protobuf:"varint,3,opt,name=length"`
}

type RegressorSpec struct {
	// The Name of the regressor
	// +kubebuilder:validation:Optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The Name of the regressor
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	PriorScale *float64 `json:"priorScale,omitempty" protobuf:"bytes,2,opt,name=priorScale"`
	// The Name of the regressor
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Standardize *bool `json:"standardize,omitempty" protobuf:"varint,3,opt,name=standardize"`
}

type HolidaySpec struct {
	// If true enable holidays
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The name of the holiday column. If the column is empty, no holiday
	// Column name of the first level of grouping
	// +kubebuilder:validation:Optional
	HolidayColumn *string `json:"holidayColumn,omitempty" protobuf:"bytes,2,opt,name=holidayColumn"`
	// +kubebuilder:validation:Optional
	Country *catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,3,opt,name=country"`
	// For custom holiday use external dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
}

// the time series forecast spec define the desired parameters

type TimeSeriesDataSpec struct {
	// General Forecast attributes:
	// The name of the time column
	// +kubebuilder:validation:Required
	// +required
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,1,opt,name=timeColumn"`
	// The name of the column holding the value.
	// By default this is the target column from the dataset.
	// +kubebuilder:validation:Required
	// +required
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,2,opt,name=targetColumn"`
	// The format of the datetime column. Used default
	// +kubebuilder:validation:Optional
	DateTimeFormat *string `json:"datetimeFormat,omitempty" protobuf:"bytes,3,opt,name=datetimeFormat"`
	// +kubebuilder:validation:Optional
	// Column names for the time series key
	// +kubebuilder:validation:Optional
	KeyColumns []string `json:"keyColumns,omitempty" protobuf:"bytes,4,opt,name=keyColumn"`
	// +kubebuilder:validation:Optional
	YearlySeasonality PeriodSeasonalitySpec `json:"yearlySeasonality,omitempty" protobuf:"bytes,5,opt,name=yearlySeasonality"`
	// +kubebuilder:validation:Optional
	WeeklySeasonality PeriodSeasonalitySpec `json:"weeklySeasonality,omitempty" protobuf:"bytes,6,opt,name=weeklySeasonality"`
	// +kubebuilder:validation:Optional
	DailySeasonality PeriodSeasonalitySpec `json:"dailySeasonality,omitempty" protobuf:"bytes,7,opt,name=dailySeasonality"`
	// +kubebuilder:default = "linear"
	// +kubebuilder:validation:Optional
	Growth *GrowthMode `json:"growth,omitempty" protobuf:"bytes,8,opt,name=growth"`
	// The list of additional regressors. The regresors are part of the time series data
	// +kubebuilder:validation:Optional
	Regressors []RegressorSpec `json:"regressors,omitempty" protobuf:"bytes,9,rep,name=regressors"`
}

// The Forecast storage spec specify where to store the forecast after prediction.
type ForecastPostProcessingSpec struct {
	// The name of the connection for a database the result of the forecast
	// If null, the system will insert the forecast in the database.
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Specify if we should generate a forecast using the model
	// If true, the system will perform a forecast and update the forecast connection.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,2,opt,name=forecast"`
}

// ForecastingSpec
type ForecasterTrainingSpec struct {
	// Specification of the forecast data.
	// +kubebuilder:validation:Optional
	Data TimeSeriesDataSpec `json:"data,omitempty" protobuf:"bytes,1,opt,name=data"`
	// The spec for the holiday
	// +kubebuilder:validation:Optional
	Holiday HolidaySpec `json:"holiday,omitempty" protobuf:"bytes,2,opt,name=holiday"`
	// The historical periods
	// +kubebuilder:validation:Optional
	History PeriodSpec `json:"history,omitempty" protobuf:"bytes,3,opt,name=history"`
	// The forecast periods
	// +kubebuilder:validation:Optional
	Forecast PeriodSpec `json:"forecast,omitempty" protobuf:"bytes,4,opt,name=forecast"`
	// The list of additional regressors. The regresors are part of the time series data
	// +kubebuilder:validation:Optional
	CustomSeasonalities []CustomSeasonalitySpec `json:"customSeasonalities,omitempty" protobuf:"bytes,5,rep,name=customSeasonalities"`
	// Set an holiday schedule for a country.
	// Change point specification
	// +kubebuilder:validation:Optional
	ChangePoints ChangePointSpec `json:"changepoints,omitempty" protobuf:"bytes,6,opt,name=changepoints"`
	// +kubebuilder:default = 0.8
	// +kubebuilder:validation:Optional
	IntervalWidth *float64 `json:"intevalWidth,omitempty" protobuf:"bytes,7,opt,name=intevalWidth"`
	// +kubebuilder:default = 1000
	// +kubebuilder:validation:Optional
	UncertaintySamples *int32 `json:"uncertaintySamples,omitempty" protobuf:"varint,8,opt,name=uncertaintySamples"`
	// The generate seasonality mode
	// +kubebuilder:default = "additive"
	// +kubebuilder:validation:Optional
	SeasonalityMode *catalog.SeasonalityMode `json:"seasonality,omitempty" protobuf:"bytes,9,opt,name=seasonality"`
	// The confidence levels for the forecast, each level must be between 1-100.
	// +kubebuilder:default = 95
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	ConfidenceInterval *int32 `json:"confidenceIntervals,omitempty" protobuf:"varint,10,opt,name=confidenceInterval"`
	// The backtest specification, the system supports back testing with expanding windows.
	// +kubebuilder:validation:Optional
	Backtest BacktestSpec `json:"backtest,omitempty" protobuf:"bytes,11,opt,name=backtest"`
	// Post processing
	// +kubebuilder:validation:Optional
	PostPrecessing ForecastPostProcessingSpec `json:"postProcessing,omitempty" protobuf:"bytes,12,opt,name=postProcessing"`
	// If true generate the plots
	// +kubebuilder:default = true
	// +kubebuilder:validation:Optional
	Plot *bool `json:"plot,omitempty" protobuf:"varint,13,opt,name=plot"`
	// +kubebuilder:default = true
	// +kubebuilder:validation:Optional
	PlotChangePoints *bool `json:"plotChangePoints,omitempty" protobuf:"varint,14,opt,name=plotChangePoints"`
	// The data location that would store the forecast result.
	// +kubebuilder:validation:Optional
	OutputLocation data.DataLocation `json:"outputLocation,omitempty" protobuf:"bytes,15,opt,name=outputLocation"`
	// List of time series features to compute on each time series.
	// +kubebuilder:validation:Optional
	Features []TSFeature `json:"features,omitempty" protobuf:"bytes,16,opt,name=features"`
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
	MaxTrainSize *int32 `json:"maxTrainSize,omitempty" protobuf:"varint,3,opt,name=maxTrainSize"`
	// The number of data points to forecast on.
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	TestSize *int32 `json:"Horizon,omitempty" protobuf:"varint,4,opt,name=Horizon"`
	// The number of data points between each windows
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Gap *int32 `json:"gap,omitempty" protobuf:"varint,5,opt,name=gap"`
}

// The list of forecasters
type ForecasterList struct {
	// +kubebuilder:validation:Optional
	Items []Forecaster `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// A forecaster contains the metadata for one forecast model
type Forecaster struct {
	// Key is the uniqe key of a time series
	// +kubebuilder:validation:Optional
	Key []string `json:"key,omitempty" protobuf:"bytes,1,rep,name=key"`
	// AlgorithmName is a reference to the algorithm in the catalog
	AlgorithmName string `json:"algorithmName,omitempty" protobuf:"bytes,2,opt,name=algorithmName"`
	// Parameters is a list of the algorithm hyper parameters
	Parameters []HyperParameterValue `json:"parameters,omitempty" protobuf:"bytes,3,rep,name=parameters,casttype=HyperParameterValue"`
	// The scores
	// +kubebuilder:validation:Optional
	Scores map[catalog.Metric]float64 `json:"scores,omitempty" protobuf:"bytes,4,rep,name=scores"`
	// The result of feature computation for this time series.
	// +kubebuilder:validation:Optional
	FeaturesValue map[TSFeature]float64 `json:"featureValues,omitempty" protobuf:"bytes,5,rep,name=featureValues"`
}
