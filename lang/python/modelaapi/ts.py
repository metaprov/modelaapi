
##############################################################
# Imports
##############################################################
from typing import Dict

import numpy as np
import pandas as pd
import sklearn
from typing import Tuple
from statsmodels.tsa.stattools import kpss, adfuller
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.generated_pb2 import DataSource
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.generated_pb2 import Study, Model

from modelaapi import consts

class MTimeSeries:
    """
    Representation of the pastime series.
    """

    def __init__(
            self,
            data_source:DataSource,
            study:Study = None,
            model:Model = None,
            data: pd.DataFrame = None,
    ):
        self.__df: pd.DataFrame = data
        self.__study = study # Note that the study can be null,for example when we analyze the dataset.
        self.__datasource = data_source
        self.__model = model
        # Future data frams
        self.__y_point_forecast = None # Hold the point forecast
        self.__y_quantile_forecast = None  # Hold the quantile forecast
        self.__y_range_forecast = None  # Hold the range forecast
        self.__y_train = None  # Hold the forecast on this data frame
        self.__y_test = None  # Hold the forecast on this data frame
        self.__y_test_forecast = None  # Hold the forecast model only on the training data.
        self.__scores = []

    ###########################################################################
    # Data Source Fields
    ###########################################################################

    @property
    def interval(self):
        """
        Answer the time series interval.
        :return:
        """
        return self.__datasource.spec.schema.timeSeriesSchema.interval

    @property
    def freq(self):
        """
        Answer the time series interval.
        :return:
        """
        # convert
        if self.__datasource.spec.schema.timeSeriesSchema.freq == "day":
            return "D"
        if self.__datasource.spec.schema.timeSeriesSchema.freq == "month":
            return "M"
        if self.__datasource.spec.schema.timeSeriesSchema.freq == "week":
            return "W"
        if self.__datasource.spec.schema.timeSeriesSchema.freq == "year":
            return "Y"

    @property
    def is_regular(self):
        """
        Answer the time series interval.
        :return:
        """
        return self.__datasource.spec.schema.timeSeriesSchema.type == "series"



    @property
    def is_hierarchical(self):
        """
        Answer the time series interval.
        :return:
        """
        return self.__datasource.spec.schema.timeSeriesSchema.type == "hierarchical"

    @property
    def time_series_columns(self):
        """
        Compute the time series columns
        :return: the time series columns
        """
        result = []
        for x in self.__datasource.spec.schema.columns:
            if x.timeseries:
                result.append(x.name)
        return result

    @property
    def value_column_name(self):
        """
        Compute the time series columns
        :return: the time series columns
        """
        result = []
        for x in self.__datasource.spec.schema.columns:
            if x.target:
                return x.name

        raise ValueError("no value column defined, please set the target attribute to True on the target column")

    @property
    def time_column_name(self):
        """
        return the time series index column name
        :return: the time series columns
        """
        for x in self.__datasource.spec.schema.columns:
            if x.timeIndex:
                return x.name

        raise ValueError("no time index found")

    @property
    def datatime_column_names(self):
        """
        return the list of data time column
        :return: the time series columns
        """
        return [x.name for x in self.__datasource.spec.schema.columns if x.datatype == consts.DataType_DateTime]

    @property
    def column_names(self):
        """
        return the list all the column names
        :return: the time series columns
        """
        all = [x.name for x in self.__datasource.spec.schema.columns]
        return all

    @property
    def numeric_column_names(self):
        """
        return the list of numerical column names
        :return: the time series columns
        """
        return [x.name for x in self.__datasource.spec.schema.columns if x.datatype == consts.DataType_Number]

    @property
    def categorical_column_names(self):
        """
        return the list of data time column
        :return: the time series columns
        """
        return [x.name for x in self.__datasource.spec.schema.columns if x.datatype == consts.DataType_Categorical]

    @property
    def boolean_column_names(self):
        """
        return the list of data time column
        :return: the time series columns
        """
        return [x.name for x in self.__datasource.spec.schema.columns if x.datatype == consts.DataType_Boolean]

    @property
    def datetime_format(self):
        #
        # Find the timeIndex column and return the datatime format
        #
        for x in self.__datasource.spec.schema.columns:
            if x.timeIndex:
                return x.datetimeFormat

        raise ValueError("no time index found")

    @property
    def regressors_columns(self):
        result = []
        for x in self.__datasource.spec.schema.columns:
            if x.regressor:
                result.append(x)
        return result


    #####################################################
    # Access to the data in the data source.
    #####################################################


    @property
    def y(self) :
        return self.__df[self.time_series_columns]


    @property
    def df(self) -> pd.DataFrame:
        return self.__df


    @df.setter
    def df(self, df):
        self.__df = df

    @property
    def point_forecast(self):
        return self.__y_point_forecast

    @point_forecast.setter
    def point_forecast(self,df):
        self.__y_point_forecast = df

    @property
    def interval_forecast(self):
        return self.__y_interval_forecast

    @interval_forecast.setter
    def interval_forecast(self, df):
        self.__y_interval_forecast = df

    @property
    def quantile_forecast(self):
        return self.__y_quantile_forecast

    @quantile_forecast.setter
    def quantile_forecast(self, df):
        self.__y_quantile_forecast = df

    @property
    def y_train(self):
        return self.__y_train

    @y_train.setter
    def y_train(self, y_train):
        self.__y_train = y_train

    @property
    def y_test(self):
        return self.__y_test

    @y_test.setter
    def y_test(self, y_test):
        self.__y_test = y_test


    ###################
    # Past
    ###################

    @property
    def past_interval(self):
        return self.__model.spec.forecasting.past.interval

    @property
    def past_start(self):
        return self.__model.spec.forecasting.past.start

    @property
    def past_length(self):
        return self.__model.spec.forecasting.past.length


    ###################
    # Future
    ###################
    @property
    def future_interval(self):
        return self.__model.spec.forecasting.future.interval

    @property
    def future_start(self):
        return self.__model.spec.forecasting.future.start

    @property
    def future_length(self):
        return self.__model.spec.forecasting.future.length

    @property
    def forecast_horizon(self):
        """
        Return a future horizon
        :return:
        """
        return np.arange(self.future_start,self.future_length) + 1

    ######################
    # Time series features
    ######################
    @property
    def features(self):
        """
        return the time series features.
        :return:
        """
        result = []
        for x in self.__model.spec.forecasting.features:
            result.append(x.name)
        return result

    ######################
    # forecaster pipeline
    ######################
    @property
    def pipeline_ensemble(self):
        """
        Return true if this pipeline is ensemble
        :return:
        """
        return self.__model.spec.forecasting.pipeline.ensembe

    @property
    def pipeline_imputation(self):
        """
        Return true if this pipeline is ensemble
        :return:
        """
        return self.__model.spec.forecasting.pipeline.imputation

    @property
    def pipeline_encoding(self):
        return self.__model.spec.forecasting.pipeline.encoding

    @property
    def pipeline_scaling(self):
        return self.__model.spec.forecasting.pipeline.scaling

    @property
    def pipeline_encode_date(self):
        return self.__model.spec.forecasting.pipeline.date

    @property
    def pipeline_windows(self):
        return self.__model.spec.forecasting.pipeline.windows

    @property
    def pipeline_lags(self):
        return self.__model.spec.forecasting.pipeline.lags

    @property
    def pipeline_windows_functions(self):
        return self.__model.spec.forecasting.pipeline.functions

    @property
    def pipeline_ema(self):
        return self.__model.spec.forecasting.pipeline.ema

    @property
    def pipeline_log(self):
        return self.__model.spec.forecasting.pipeline.log

    @property
    def pipeline_reduction(self):
        return self.__model.spec.forecasting.pipeline.reduction

    @property
    def pipeline_reduction_strategy(self):
        return self.__model.spec.forecasting.pipeline.strategy

    def read_csv(self,fname,keep_time=False,reindex_on_time=True):
         """read the history from a csv file"""
         df = pd.read_csv(fname,parse_dates=self.time_series_columns,squeeze=True,infer_datetime_format=True)
         df = df[self.column_names]
         # convert the types
         for x in self.numeric_column_names:
             df[x] = pd.to_numeric(df[x])
         for x in self.boolean_column_names:
             df[x] = df[x].as_type("bool")
         for x in self.categorical_column_names:
             df[x] = pd.Categorical(df[x])
         for x in self.datatime_column_names:
             df[x] = pd.to_datetime(df[x])

         values = df[self.time_column_name]
         if reindex_on_time:
             index = pd.PeriodIndex(values,freq=self.freq)
             df = df.set_index(index)
         if not keep_time:
            del df[self.time_column_name]
         self.__df = df

    def read_parque(self, fname: str):
        """read the history from a parqye file"""
        self.__df = pd.read_parquet(fname)


    ######################################################
    # Methods based on the lecture
    ######################################################


    def seasonal_decomposition_additive(self):
        # residual - component that we cannot account for.
        # The behivor of the residual series, is different across time series.
        # T * S - multpective - level of the seasonality is bigger.

        from statsmodels.tsa.seasonal import seasonal_decompose
        decomp = seasonal_decompose(self.df,period =12)
        figure = decomp.plot()
        return figure

    def seasonal_decomposition_mulitpecative(self):
        # montly data - only period make sense if montly.
        # daily - is call.
        # in sale ,annual + seasonality.
        # tempretature - anaually.
        # test which seasonality by computing both.
        # state based model.

        #https: // www.youtube.com / watch?v = kAI67Sz92 - s
        pass

    def extract_features(self) ->Dict[str,float]:
        result = {}

        result["abs_energy"] =  abs_energy(self)

        result["absolute_maximum"] =  absolute_maximum(self)

        result["absolute_sum_of_changes"] = absolute_sum_of_changes(self)

        #result["agg_autocorrelation"] =  agg_autocorrelation(self, param)

        #result["agg_linear_trend"] =   agg_linear_trend(self, param)

        #result["approximate_entropy"] = approximate_entropy(self, m, r)

        #result["ar_coefficient"]  = ar_coefficient(self, param)

        #result["autocorrelation"] = autocorrelation(self, lag)

        result["benford_correlation"] = benford_correlation(self)

        #result["binned_entropy"] = binned_entropy(self, max_bins)

        #result["c3"] = c3(self, lag)

        #result["change_quantiles"] = change_quantiles(self, ql, qh, isabs, f_agg)

        #result["cid_ce"] = cid_ce(self, normalize)

        #result["count_above"] = count_above(self, t)

        result["count_above_mean"] = count_above_mean(self)

        #result["count_below"] = count_below(self, t)

        result["count_below_mean"] = count_below_mean(self)

        #result["cwt_coefficients"] = cwt_coefficients(self, param)

        #result["energy_ratio_by_chunks"] = energy_ratio_by_chunks(self, param)

        #result["fft_aggregated"] = fft_aggregated(self, param)

        #result["fft_coefficient"] = fft_coefficient(self, param)

        result["first_location_of_maximum"] = first_location_of_maximum(self)

        result["first_location_of_minimum"] = first_location_of_minimum(self)

        #result["fourier_entropy"] = fourier_entropy(self, bins)

        #result["friedrich_coefficients"] = friedrich_coefficients(self, param)

        result["has_duplicate"] = has_duplicate(self)

        result["has_duplicate_max"] = has_duplicate_max(self)

        result["has_duplicate_min"] = has_duplicate_min(self)

        #result["index_mass_quantile"] = index_mass_quantile(self, param)

        result["kurtosis"] = kurtosis(self)

        #result["large_standard_deviation"] = large_standard_deviation(self, r)

        result["last_location_of_maximum"] = last_location_of_maximum(self)

        result["last_location_of_minimum"] = last_location_of_minimum(self)

#        result["lempel_ziv_complexity"] = lempel_ziv_complexity(self, bins)

        result["length"] = length(self)

        #result["linear_trend"] = linear_trend(self, param)

        #result["linear_trend_timewise"] = linear_trend_timewise(self, param)

        result["longest_strike_above_mean"] = longest_strike_above_mean(self)

        result["longest_strike_below_mean"] = longest_strike_below_mean(self)

        #result["matrix_profile"] = matrix_profile(self, param)

        #result["max_langevin_fixed_point"] = max_langevin_fixed_point(self, r, m)

        result["maximum"] = maximum(self)

        result["mean"] = mean(self)

        result["mean_abs_change"] = mean_abs_change(self)

        result["mean_change"] = mean_change(self)

        #result["mean_n_absolute_max"] = mean_n_absolute_max(self, number_of_maxima)

        result["mean_second_derivative_central"] = mean_second_derivative_central(self)

        result["median"] = median(self)

        result["minimum"] = minimum(self)

        #result["number_crossing_m"] = number_crossing_m(self, m)

        #result["number_cwt_peaks"] = number_cwt_peaks(self, n)

        #result["number_peaks"] = number_peaks(self, n)

        #result["partial_autocorrelation"] = partial_autocorrelation(self, param)

        result["percentage_of_reoccurring_datapoints_to_all_datapoints"] = percentage_of_reoccurring_datapoints_to_all_datapoints(self)

        result["percentage_of_reoccurring_values_to_all_values"] = percentage_of_reoccurring_values_to_all_values(self)

        #result["permutation_entropy"] = permutation_entropy(self, tau, dimension)

        #result["quantile"] = quantile(self, q)

        #result["query_similarity_count"] = query_similarity_count(self, param)

        result["range_count"] = range_count(self, min, max)

        # result["ratio_beyond_r_sigma"] = ratio_beyond_r_sigma(self, r)

        result["ratio_value_number_to_time_series_length"] = ratio_value_number_to_time_series_length(self)

        result["root_mean_square"] = root_mean_square(self)

        result["sample_entropy"] = sample_entropy(self)

        result["skewness"] = skewness(self)

        #result["spkt_welch_density"] = spkt_welch_density(self, param)

        result["standard_deviation"] = standard_deviation(self)

        result["sum_of_reoccurring_data_points"] = sum_of_reoccurring_data_points(self)

        result["sum_of_reoccurring_values"] = sum_of_reoccurring_values(self)

        result["sum_values"] = sum_values(self)

        #result["symmetry_looking"] = symmetry_looking(self, param)

        #result["time_reversal_asymmetry_statistic"] = time_reversal_asymmetry_statistic(self, lag)

        #result["value_count"] = value_count(self, value)

        result["variance"] = variance(self)

        result["variance_larger_than_standard_deviation"] = variance_larger_than_standard_deviation(self)

        result["variation_coefficient"] = variation_coefficient(self)

        return result







def abs_energy(ts:MTimeSeries):
    return abs_energy(ts.y)


def absolute_maximum(ts:MTimeSeries):
    return absolute_maximum(ts.y.values)


def absolute_sum_of_changes(ts:MTimeSeries):
    return absolute_sum_of_changes(ts.y)


def agg_autocorrelation(ts:MTimeSeries, param):
    return agg_autocorrelation(ts.y, param)


def agg_linear_trend(ts:MTimeSeries, param):
    return agg_linear_trend(ts.y, param)


def approximate_entropy(ts:MTimeSeries, m, r):
    return approximate_entropy(ts.y, m, r)


def ar_coefficient(ts:MTimeSeries, param):
    return ar_coefficient(ts.y, param)


def autocorrelation(ts:MTimeSeries, lag):
    return autocorrelation(ts.y, lag)


def benford_correlation(ts:MTimeSeries):
    return benford_correlation(ts.y)


def binned_entropy(ts:MTimeSeries, max_bins):
    return binned_entropy(ts.y, max_bins)


def c3(ts:MTimeSeries, lag):
    return c3(ts.y, lag)


def change_quantiles(ts:MTimeSeries, ql, qh, isabs, f_agg):
    return change_quantiles(ts.y, ql, qh, isabs, f_agg)


def cid_ce(ts:MTimeSeries, normalize):
    return cid_ce(ts.y, normalize)


def count_above(ts:MTimeSeries, t):
    return count_above(ts.y, t)


def count_above_mean(ts:MTimeSeries):
    return count_above_mean(ts.y)


def count_below(ts:MTimeSeries, t):
    return count_below(ts.y, t)


def count_below_mean(ts:MTimeSeries):
    return count_below_mean(ts.y)


def cwt_coefficients(ts:MTimeSeries, param):
    return cwt_coefficients(ts.y,param)


def energy_ratio_by_chunks(ts:MTimeSeries, param):
    return energy_ratio_by_chunks(ts.y, param)


def fft_aggregated(ts:MTimeSeries, param):
    return fft_aggregated(ts.y, param)


def fft_coefficient(ts:MTimeSeries, param):
    return fft_coefficient(ts.y, param)


def first_location_of_maximum(ts:MTimeSeries):
    return first_location_of_maximum(ts.y)


def first_location_of_minimum(ts:MTimeSeries):
    return first_location_of_minimum(ts.y)


def fourier_entropy(ts:MTimeSeries, bins):
    return fourier_entropy(ts.y,bins)


def friedrich_coefficients(ts:MTimeSeries, param):
    return friedrich_coefficients(ts.y, param)


def has_duplicate(ts:MTimeSeries):
    return has_duplicate(ts.y)


def has_duplicate_max(ts:MTimeSeries):
    return has_duplicate_max(ts.y)


def has_duplicate_min(ts:MTimeSeries):
    return has_duplicate_min(ts.y)


def index_mass_quantile(ts:MTimeSeries, param):
    return index_mass_quantile(ts.y, param)


def kurtosis(ts:MTimeSeries):
    return kurtosis(ts.y)


def large_standard_deviation(ts:MTimeSeries, r):
    return large_standard_deviation(ts.y, r)


def last_location_of_maximum(ts:MTimeSeries):
    return last_location_of_maximum(ts.y)


def last_location_of_minimum(ts:MTimeSeries):
    return last_location_of_minimum(ts.y)


def lempel_ziv_complexity(ts:MTimeSeries, bins):
    return lempel_ziv_complexity(ts.y, bins)


def length(ts:MTimeSeries):
    return length(ts.y)


def linear_trend(ts:MTimeSeries, param):
    return linear_trend(ts.y, param)


def linear_trend_timewise(ts:MTimeSeries, param):
    return linear_trend_timewise(ts.y, param)


def longest_strike_above_mean(ts:MTimeSeries):
    return longest_strike_above_mean(ts.y)


def longest_strike_below_mean(ts:MTimeSeries):
    return longest_strike_below_mean(ts.y)


def matrix_profile(ts:MTimeSeries, param):
    return matrix_profile(ts.y, param)


def max_langevin_fixed_point(ts:MTimeSeries, r, m):
    return max_langevin_fixed_point(ts.y, r, m)


def maximum(ts:MTimeSeries):
    return maximum(ts.y)


def mean(ts:MTimeSeries):
    return mean(ts.y)


def mean_abs_change(ts:MTimeSeries):
    return mean_abs_change(ts.y)


def mean_change(ts:MTimeSeries):
    return mean_change(ts.y)


def mean_n_absolute_max(ts:MTimeSeries, number_of_maxima):
    return mean_n_absolute_max(ts.y, number_of_maxima)


def mean_second_derivative_central(ts:MTimeSeries):
    return mean_second_derivative_central(ts.y)


def median(ts:MTimeSeries):
    return median(ts.y)


def minimum(ts:MTimeSeries):
    return minimum(ts.y)


def number_crossing_m(ts:MTimeSeries, m):
    return number_crossing_m(ts.y, m)


def number_cwt_peaks(ts:MTimeSeries, n):
    return number_cwt_peaks(ts.y, n)


def number_peaks(ts:MTimeSeries, n):
    return number_peaks(ts.y, n)


def partial_autocorrelation(ts:MTimeSeries, param):
    return partial_autocorrelation(ts.y, param)


def percentage_of_reoccurring_datapoints_to_all_datapoints(ts:MTimeSeries):
    return percentage_of_reoccurring_datapoints_to_all_datapoints(ts.y)


def percentage_of_reoccurring_values_to_all_values(ts:MTimeSeries):
    return percentage_of_reoccurring_values_to_all_values(ts.y)


def permutation_entropy(ts:MTimeSeries, tau, dimension):
    return permutation_entropy(ts.y, tau, dimension)


def quantile(ts:MTimeSeries, q):
    return quantile(ts.y, q)


def query_similarity_count(ts:MTimeSeries, param):
    return query_similarity_count(ts.y, param)


def range_count(ts:MTimeSeries, min, max):
    return range_count(ts.y, min, max)


def ratio_beyond_r_sigma(ts:MTimeSeries, r):
    return ratio_beyond_r_sigma(ts.y, r)


def ratio_value_number_to_time_series_length(ts:MTimeSeries):
    return ratio_value_number_to_time_series_length(ts.y)


def root_mean_square(ts:MTimeSeries):
    return root_mean_square(ts.y)


def sample_entropy(ts:MTimeSeries):
    return sample_entropy(ts.y)


def skewness(ts:MTimeSeries):
    return skewness(ts.y)


def spkt_welch_density(ts:MTimeSeries, param):
    return spkt_welch_density(ts.y,param)


def standard_deviation(ts:MTimeSeries):
    return standard_deviation(ts.y)


def sum_of_reoccurring_data_points(ts:MTimeSeries):
    return sum_of_reoccurring_data_points(ts.y)


def sum_of_reoccurring_values(ts:MTimeSeries):
    return sum_of_reoccurring_values(ts.y)


def sum_values(ts:MTimeSeries):
    return sum_values(ts.y)


def symmetry_looking(ts:MTimeSeries, param):
    return symmetry_looking(ts.y, param)


def time_reversal_asymmetry_statistic(ts:MTimeSeries, lag):
    return time_reversal_asymmetry_statistic(ts.y, lag)


def value_count(ts:MTimeSeries, value):
    return value_count(ts.y, value)


def variance(ts:MTimeSeries):
    return variance(ts.y)


def variance_larger_than_standard_deviation(ts:MTimeSeries):
    return variance_larger_than_standard_deviation(ts.y)


def variation_coefficient(ts:MTimeSeries):
    return variation_coefficient(ts.y)


def adf_test(ts:MTimeSeries) -> Tuple[float, float]:
    """run adf test,
    :return Tuple of adf stat and p value
    """
    result,pvalue = adfuller(ts.y, autolag="AIC")
    return result, pvalue

def kpss_test(ts:MTimeSeries):
    """
    Run kpss test.
    :return: A tuple of kpss stat and p value
    """
    result = kpss(ts.y, regression="c")
    return result

def calc_validation_metric(ts:MTimeSeries, metric: str, other: pd.Series) -> float:
    if metric == consts.Metric_MSE:
        return mse(ts.y_test, other)
    if metric == consts.Metric_RMSE:
        return rmse(ts.y, other)
    if metric == consts.Metric_MAE:
        return mae(ts.y, other)
    if metric == consts.Metric_MAPE:
        return mape(ts.y, other)


def smape(y_actual: pd.Series, y_predicted: pd.Series) -> float:
        y_true, y_pred = np.array(y_actual), np.array(y_predicted)
        return np.mean(np.abs((y_true - y_pred) / y_true)) * 100

def mse(y_actual: pd.Series, y_predicted: pd.Series) -> float:
        return sklearn.metrics.mean_squared_error(y_actual, y_predicted)

def rmse(y_actual: pd.Series, y_predicted: pd.Series) -> float:
        return np.sqrt(sklearn.metrics.mean_squared_error(y_actual, y_predicted))

def mae(y_actual: pd.Series, y_predicted: pd.Series) -> float:
        return sklearn.metrics.mean_absolute_error(y_actual, y_predicted)

def mape( y_actual: pd.Series, y_predicted: pd.Series) -> float:
        actual, pred = np.array(y_actual), np.array(y_predicted)
        return np.mean(np.abs((actual - pred) / actual)) * 100

def wape(y_actual: pd.Series, y_predicted: pd.Series) -> float:
        return (y_actual - y_predicted).abs().sum() / y_actual.sum()
