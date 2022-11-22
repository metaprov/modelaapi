# Author:   Tomer Sagi
#
# Copyright (C) 2020
# For license information, see LICENSE.txt

################################################################
# Imports
################################################################



import warnings
from collections import defaultdict

from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.generated_pb2 import Measurement
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.generated_pb2 import Model
from greykite.algo.changepoint.adalasso.changepoint_detector import ChangepointDetector
from greykite.framework.input.univariate_time_series import UnivariateTimeSeries


from modelaapi.ts import MTimeSeries

warnings.filterwarnings("ignore")

import numpy as np
import pandas as pd

from greykite.common.data_loader import DataLoader
from greykite.framework.templates.autogen.forecast_config import ForecastConfig, EvaluationMetricParam
from greykite.framework.templates.autogen.forecast_config import MetadataParam
from greykite.framework.templates.forecaster import Forecaster
from greykite.framework.templates.model_templates import ModelTemplateEnum
from greykite.framework.utils.result_summary import summarize_grid_search_results


"""
Class to encapsulate the greykite algorithm    
"""


class GreyKiteModel():

    def __init__(self,model:Model):
        self.__model:Model = model
        self.__metadata:MetadataParam = None
        self.__forecaster = None
        self.__forecast_result = None
        self.__ts:UnivariateTimeSeries = None
        self.__m_time_series:MTimeSeries = None
        self.__forecaster_model = None # stand alone model


 #   def load_manning(self) -> pd.DataFrame:
 #       dl = DataLoader()
 #       df = dl.load_peyton_manning()
 #       return df

    ###########################################################
    # Queries
    # EDA quries.
    ###########################################################

    @property
    def time_stats(self):
        # Stat on the time series metadata.
        return self.__ts.time_stats

    @property
    def value_stats(self):
        # Stat on the value
        return self.__ts.value_stats

    @property
    def freq(self):
        return self.__ts.freq

    @property
    def regressor_cols(self):
        return self.__ts.regressor_cols

    @property
    def postfit_ts(self) -> UnivariateTimeSeries:
        return self.__ts

    #######################################################
    # Plot queries
    #######################################################
    @property
    def time_series_plot(self):
        """
        Plot the time series.
        :return:
        """
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        return self.__ts.plot()

    @property
    def forecast_plot(self):
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        return self.__forecast_result.forecast.plot()

    @property
    def component_plots(self):
        return self.__forecast_result.forecast.plot_components()

    @property
    def daily_seasonality_plot(self):
        return self.__ts.plot_grouping_evaluation(
            aggregation_func=np.mean,
            aggregation_func_name="mean",
            groupby_time_feature="hour",  # hour of day
            groupby_sliding_window_size=None,
            groupby_custom_column=None,
            title=f"daily seasonality: mean of {self.__m_time_series.value_column_name}")

    @property
    def weekly_seasonality_plot(self):
        return self.__ts.plot_grouping_evaluation(
            aggregation_func=np.mean,
            aggregation_func_name="mean",
            groupby_time_feature="str_dow",  # day of week
            groupby_sliding_window_size=None,
            groupby_custom_column=None,
            title=f"weekly seasonality: mean of {self.__m_time_series.value_column_name}")

    @property
    def yearly_seasonality_plot(self):
        return self.__ts.plot_grouping_evaluation(
            aggregation_func=np.mean,
            aggregation_func_name="mean",
            groupby_time_feature="woy",  # week of year
            groupby_sliding_window_size=None,
            groupby_custom_column=None,
            title=f"yearly seasonality: mean of {self.__m_time_series.value_column_name}")

    @property
    def backtest_plot(self):
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        return self.__forecast_result.backtest.plot()


    ############################################################
    # Attribute based on the model forecast spec.
    ############################################################
    def forecaster_spec(self):
        return self.__model.spec.forecaster

    @property
    def cv_result(self):
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        grid_search = self.__forecast_result.grid_search
        cv_results = summarize_grid_search_results(
            grid_search=grid_search,
            decimals=2,
            # The below saves space in the printed output. Remove to show all available metrics and columns.
            cv_report_metrics=None,
            column_order=["rank", "mean_test", "split_test", "mean_train", "split_train", "mean_fit_time",
                          "mean_score_time", "params"])
        # Transposes to save space in the printed output
        cv_results["params"] = cv_results["params"].astype(str)
        cv_results.set_index("params", drop=True, inplace=True)
        return cv_results.transpose()

    @property
    def forecast_result(self) -> pd.DataFrame:
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        return self.__forecast_result.forecast.df

    @property
    def model_summary(self):
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        return self.__forecast_result.model[-1].summary

    @property
    def alg_name(self):
        return self.__model.spec.forecasting.predefinedTemplate

    @property
    def model_pipeline(self):
        if self.__forecast_result == None:
            raise ValueError(" invalid forecast result, please call fit")
        return self.__forecast_result.model

    @property
    def metrics(self):
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        backtest = self.__forecast_result.backtest
        backtest_eval = defaultdict(list)
        for metric, value in backtest.train_evaluation.items():
            backtest_eval[metric].append(value)
            backtest_eval[metric].append(backtest.test_evaluation[metric])
        return pd.DataFrame(backtest_eval, index=["train", "test"]).T


   #######################################################################
   # Forecast results query. You must run the forecast to get the results.
   #######################################################################
    def load(self,time_series:MTimeSeries):
        self.__m_time_series = time_series
        self.__ts = UnivariateTimeSeries()
        self.__ts.load_data(
            df=time_series.df,
            time_col=time_series.time_column_name,
            value_col=time_series.value_column_name,
            freq=time_series.freq)  # optional, but recommended if you have missing data points
        # W for weekly, D for daily, H for hourly, etc. See ``pd.date_range``

    def fit(self,coverage=0.95):
        self.__forecaster = Forecaster()  # Creates forecasts and stores the result
        template = self.__template_name_from_pbuf()
        horizon  = len(self.__m_time_series.forecast_horizon)
        metadata_param = MetadataParam(time_col=self.__m_time_series.time_column_name,
                      value_col=self.__m_time_series.value_column_name,
                      date_format=self.__m_time_series.datetime_format
                      )
        metric_param = EvaluationMetricParam(
            cv_report_metrics = "ALL"
        )

        self.__forecast_result = self.__forecaster.run_forecast_config(  # result is also stored as `forecaster.forecast_result`.
            df= self.__m_time_series.df,
            config=ForecastConfig(
                model_template=template,
                forecast_horizon=horizon,  # forecasts 365 steps ahead
                coverage=coverage,  # 95% prediction intervals
                metadata_param=metadata_param,
                evaluation_metric_param = metric_param,
            )
        )
        self.__ts = self.__forecast_result.timeseries



    def predict(self,periods):
        if self.__forecast_result == None:
            raise ValueError("invalid forecast result, please call fit")
        future_df = self.__forecast_result.timeseries.make_future_dataframe(
            periods=periods,
            include_history=False)
        return self.__forecast_result.model.predict(future_df)

    def change_points(self):
        model = ChangepointDetector()
        res = model.find_trend_changepoints(
            df=self.__m_time_series.df,  # data df
            time_col=self.__m_time_series.time_column_name,  # time column name
            value_col=self.__m_time_series.value_column_name)  # value column name
        change_point_plot =  model.plot(plot=False)
        return pd.DataFrame({"trend_changepoints": res["trend_changepoints"]}),change_point_plot  # prints a dataframe showing the result

    def detect_seasonality(self) :
        model = ChangepointDetector()
        res = model.find_seasonality_changepoints(
            df=self.__m_time_series.df,  # data df
            time_col=self.__m_time_series.time_column_name,  # time column name
            value_col=self.__m_time_series.value_column_name)  # value column name
        df = pd.DataFrame(dict([(k, pd.Series(v)) for k, v in res["seasonality_changepoints"].items()]))  # view result
        fig = model.plot(
            seasonality_change=True,  # detected seasonality change points, discussed in next section
            seasonality_change_by_component=True,
            # plot seasonality by component (daily, weekly, etc.), discussed in next section
            seasonality_estimate=True,  # plot estimated trend+seasonality, discussed in next section
            plot=False)
        return df,fig
        # one could also print res["seasonality_changepoints"] directly to view the result

    #################################################################
    # Save and load the model
    #################################################################

    def save_model(self,dirname):
        self.__forecaster.dump_forecast_result(
            dirname,
            object_name="forecaster",
            dump_design_info=True,
            overwrite_exist_dir=True)

    def load_model(self, dirname):
        self.__forecaster = Forecaster()
        self.__forecaster.load_forecast_result(dirname,load_design_info=True)
        self.__forecast_result = self.__forecaster.forecast_result


    def evaluate(self,y_test):
        """
        Test the forecaster
        :param ts:
        :param forecaster:
        :return: the result of testing the forecaster
        """

        pred_df = self.predict(len(y_test))
        y_pred = pred_df["forecast"]
        result = []
        mape_score = mape(y_test, y_pred)
        each = Measurement()
        each.metric = "mape"
        each.value = mape_score
        result.append(each)

        rmse_score = rmse(y_test, y_pred)
        each = Measurement()
        each.metric = "rmse"
        each.value = rmse_score
        result.append(each)

        mse_score = mse(y_test, y_pred)
        each = Measurement()
        each.metric = "mse"
        each.value = mse_score
        result.append(each)

        return result

    def __template_name_from_pbuf(self):
        # By default return serving site.
        if self.__model == None:
            return ModelTemplateEnum.SILVERKITE.name
        template_name = self.__model.spec.forecasting.predefinedTemplate
        if template_name == "silverkite":
            return ModelTemplateEnum.SILVERKITE.name
        if template_name == "prophet":
            return ModelTemplateEnum.PROPHET.name
        if template_name == "auto-arima":
            return ModelTemplateEnum.AUTO_ARIMA.name
        if template_name == "lag-based":
            return ModelTemplateEnum.LAG_BASED.name
        if template_name == "sk":
            return ModelTemplateEnum.SK.name
        if template_name == "two-stage":
            return ModelTemplateEnum.SILVERKITE_TWO_STAGE.name
        if template_name == "wow":
            return ModelTemplateEnum.SILVERKITE_WOW.name
        if template_name == "daily-1-config-1":
            return ModelTemplateEnum.SILVERKITE_DAILY_1_CONFIG_1.name
        if template_name == "daily-1-config-2":
            return ModelTemplateEnum.SILVERKITE_DAILY_1_CONFIG_2.name
        if template_name == "daily-1-config-3":
            return ModelTemplateEnum.SILVERKITE_DAILY_1_CONFIG_3.name
        if template_name == "daily-1":
            return ModelTemplateEnum.SILVERKITE_DAILY_1.name
        if template_name == "daily-90":
            return ModelTemplateEnum.SILVERKITE_DAILY_90.name
        if template_name == "weekly":
            return ModelTemplateEnum.SILVERKITE_WEEKLY.name
        if template_name == "monthly":
            return ModelTemplateEnum.SILVERKITE_MONTHLY.name
        if template_name == "hourly-1":
            return ModelTemplateEnum.SILVERKITE_HOURLY_1.name
        if template_name == "hourly-24":
            return ModelTemplateEnum.SILVERKITE_HOURLY_24.name
        if template_name == "hourly-168":
            return ModelTemplateEnum.SILVERKITE_HOURLY_168.name
        if template_name == "hourly-336":
            return ModelTemplateEnum.SILVERKITE_HOURLY_336.name

        raise ValueError(f"invalid template name {template_name}")
