# custom transformer
#
#
# Author:   Tomer Sagi <tomer.sagi@metaprov.edu>
#
# Copyright (C) 2019 metaprov.com
# For license information, see LICENSE.txt


##########################################################################
# Imports
##########################################################################

from sklearn.base import BaseEstimator, TransformerMixin
import pandas as pd
import numpy as np


##########################################################################
# Remove outliers
##########################################################################


class RemoveOutliers(BaseEstimator, TransformerMixin):
    def fit(self, X, y=None):
        df = pd.DataFrame(X)
        self.mask = df.quantile(q=np.array([0.05, 0.95]), axis=0)
        return self

    def transform(self, X, y=None):
        df = pd.DataFrame(X)
        df = df[(df > self.mask.iloc[0, :]) & (df < self.mask.iloc[1, :])]
        return df


#############################################################################
# Feature filter
#############################################################################


class FeatureFilters(BaseEstimator, TransformerMixin):
    def __init__(self, features_to_drop=None):
        self.features = features_to_drop

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        # encode labels
        X = X.copy()
        X = X.drop(self.features, axis=1)

        return X


################################################################################
# Drop Correlated Features
################################################################################


class DropCorrelated(BaseEstimator, TransformerMixin):
    """drops correlated values above a threshold provided"""

    def __init__(self, threshold=0.95):
        self.threshold = threshold
        self.columns_to_drop = None

    def fit(self, X, y=None):
        data = pd.concat([X, y], axis=1)
        correlation_matrix = data.corr().abs()
        corr_selection = correlation_matrix.where(
            np.triu(np.ones(correlation_matrix.shape), k=1).astype(np.bool)
        )
        self.columns_to_drop = [
            column
            for column in corr_selection.columns
            if any(corr_selection[column] > self.threshold)
        ]
        return self

    def transform(self, X):
        # encode labels
        X = X.copy()
        X = X.drop(self.columns_to_drop, axis=1)
        return X


##################################################################
# Identity transformer
##################################################################


class IdentityTransformer(BaseEstimator, TransformerMixin):
    def __init__(self):
        pass

    def fit(self, input_array, y=None):
        return self

    def transform(self, input_array, y=None):
        return input_array * 1




class RollingGenerator(BaseEstimator, TransformerMixin):

    # p stants for the number of step
    def __init__(self,
                 lags: List[int],
                 windows: List[int],
                 ema: bool,
                 all: bool,
                 feature_list: List[str],
                 use_log_target=True):
        """

        :param lags: set of commons lags based on auto corrolation.
        :param windows: set of windows
        :param ema: if true use exponential moving avg
        :param all: in this mode, we generate all the transforms. Other
        :param feature_list: in this mode, we generate specific feature list. This is typicaly done after
        :param use_log_target: if true use the log of the target
        """
        self.lags = lags
        self.windows = windows
        self.ema = ema
        self.all = all
        self.feature_list = feature_list
        self.use_log_target = use_log_target

    def fit(self, X, y):
        return self

    def transform(self, X):  # This X is in reality going to be the "y"
        if self.all:
            gen = []
            target = X
            if self.use_log_target:
                target = np.log(X)

            # first add the lags

            # mean
            for each_lag in self.lags:
                for w in self.windows:
                    shifted = target.shift(each_lag)
                    # mean
                    if self.ema:
                        s = pd.Series(shifted.ewm(span=w, adjust=False).mean(), name=f"l-{each_lag}-w-{w}-ema-mean")
                    else:
                        s = pd.Series(shifted.rolling(w).mean(), name=f"l-{each_lag}-w-{w}-ma-mean")
                    gen.append(s)
                    # max
                    if self.ema:
                        # not implement for emw
                        pass
                        # s = pd.Series(shifted.ewm(span=w,adjust=False).max(), name=f"l-{each_lag}-w-{w}-ema-max")
                        # gen.append(s)

                    else:
                        s = pd.Series(shifted.rolling(w).max(), name=f"l-{each_lag}-w-{w}-ma-max")
                        gen.append(s)
                    # min
                    if self.ema:
                        # s = pd.Series(shifted.ewm(span=w,adjust=False).min(), name=f"l-{each_lag}-w-{w}-ema-min")
                        # gen.append(s)
                        pass
                    else:
                        s = pd.Series(shifted.rolling(w).min(), name=f"l-{each_lag}-w-{w}-ma-min")
                        gen.append(s)
                    # median
                    if self.ema:
                        # not implement for emw
                        pass
                        # s = pd.Series(shifted.ewm(span=w,adjust=False).median(), name=f"l-{each_lag}-w-{w}-ema-median")
                        # gen.append(s)
                    else:
                        s = pd.Series(shifted.rolling(w).median(), name=f"l-{each_lag}-w-{w}-ma-median")
                        gen.append(s)
                    # stddev
                    if self.ema:
                        s = pd.Series(shifted.ewm(span=w, adjust=False).std(), name=f"l-{each_lag}-w-{w}-ema-std")
                        gen.append(s)
                    else:
                        s = pd.Series(shifted.rolling(w).std(), name=f"l-{each_lag}-w-{w}-ma-std")
                        gen.append(s)
                    # skew
                    if self.ema:
                        # not implement for emw
                        pass
                        # s = pd.Series(shifted.ewm(span=w,adjust=False).skew(), name=f"l-{each_lag}-w-{w}-ema-skew")
                        # gen.append(s)
                    else:
                        s = pd.Series(shifted.rolling(w).skew(), name=f"l-{each_lag}-w-{w}-ma-skew")
                        gen.append(s)

            X1 = pd.concat(gen, axis=1)
            return X1.fillna(0)
        else:
            target = X
            gen = []
            if self.use_log_target:
                target = np.log(X)
            for feature in self.feature_list:
                parts = feature.split("-")
                lag = int(parts[0])
                w = int(parts[3])
                em_method = parts[4]
                method = parts[5]
                s = self._compute_series(feature, target, lag, w, em_method, method)
                gen.append(s)
            X1 = pd.concat(gen, axis=1)
            return X1.fillna(0)

    def _compute_series(self, name: str, target: pd.Series, lag: int, w: int, em_method: str, method: str):
        shifted = target.shift(lag)
        if em_method == "ma" and method == "mean":
            return pd.Series(shifted.rolling(w).mean(), name=name)
        if em_method == "ema" and method == "mean":
            return pd.Series(shifted.ewm(span=w, adjust=False).mean(), name=name)
        if em_method == "ma" and method == "min":
            return pd.Series(shifted.rolling(w).min(), name=name)
        if em_method == "ema" and method == "min":
            return pd.Series(shifted.ewm(span=w, adjust=False).min(), name=name)
        if em_method == "ma" and method == "max":
            return pd.Series(shifted.rolling(w).max(), name=name)
        if em_method == "ema" and method == "max":
            return pd.Series(shifted.ewm(span=w, adjust=False).max(), name=name)
        if em_method == "ma" and method == "median":
            return pd.Series(shifted.rolling(w).median(), name=name)
        if em_method == "ema" and method == "median":
            return pd.Series(shifted.ewm(span=w, adjust=False).median(), name=name)
        if em_method == "ma" and method == "std":
            return pd.Series(shifted.rolling(w).std(), name=name)
        if em_method == "ema" and method == "std":
            return pd.Series(shifted.ewm(span=w, adjust=False).std(), name=name)
        if em_method == "ma" and method == "skew":
            return pd.Series(shifted.rolling(w).skew(), name=name)
        if em_method == "ema" and method == "skew":
            return pd.Series(shifted.ewm(span=w, adjust=False).skew(), name=name)


################################################
# Custom day time transformer
################################################

class DayTimeTransformer(BaseEstimator, TransformerMixin):
    def __init__(self, time_columns):
        self.time_columns = time_columns

    def fit(self, X, y):
        return self

    def transform(self, X):
        for tc in self.time_columns:
            X[tc + "_dayofweek"] = X[tc].dt.dayofweek
            X[tc + "_year"] = X[tc].dt.year
            X[tc + "_month"] = X[tc].dt.month
            X[tc + "_day"] = X[tc].dt.day
            X[tc + "_hour"] = X[tc].dt.hour
            X[tc + "_minute"] = X[tc].dt.minute
            X[tc + "_weekofyear"] = X[tc].dt.weekofyear
            X[tc + "_week"] = X[tc].dt.week
            X[tc + "_quarter"] = X[tc].dt.quarter
            X[tc + "_is_month_start"] = X[tc].dt.is_month_start
            X[tc + "_is_month_end"] = X[tc].dt.is_month_end
            X[tc + "_is_qtr_start"] = X[tc].dt.is_quarter_start
            X[tc + "_is_qtr_end"] = X[tc].dt.is_quarter_end
            X[tc + "_is_year_start"] = X[tc].dt.is_year_start
            X[tc + "_is_year_end"] = X[tc].dt.is_year_end
            X.drop(tc,inplace=True,axis=1)
        return X
