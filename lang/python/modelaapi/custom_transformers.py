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


################################################################################
# Extract date time
################################################################################


class DatetimeFeatureExtractor(BaseEstimator, TransformerMixin):
    def __init__(self, variables):
        self.variables = variables

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        # encode labels
        for name in self.variables:
            # For each datetime var, extact the datetime parameters
            X[name + "_year"] = X.dt.year
            X[name + "_month"] = X.dt.month
            X[name + "_day"] = X.dt.day
            X[name + "_hour"] = X.dt.hour
            X[name + "_minute"] = X.dt.minute
            X[name + "_second"] = X.dt.second
            X[name + "_week"] = X.dt.week
            X[name + "_weekofyear"] = X.dt.weekofyear
            X[name + "_dayofweek"] = X.dt.dayofweek
            X[name + "_weekday"] = X.dt.weekday
            X[name + "_dayofyear"] = X.dt.dayofyear
            X[name + "_quarter"] = X.dt.quarter
            X[name + "_is_monthr_start"] = X.dt.is_month_start
            X[name + "_is_monthr_end"] = X.dt.is_month_end
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
