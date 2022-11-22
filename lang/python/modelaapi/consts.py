# ml.consts
# The module contain the different enums in the domain.
#
#
# Author:   Tomer Sagi <tomer.sagi@metaprov.edu>
#
# Copyright (C) 2019 metaprov.com
# For license information, see LICENSE.txt
from typing import List

DF_PR = "df"
TARGET_DF_PR = "target_df"
ATTRIBUTES_DF_PR = "attributes_df"
TRAINING_DATA_DF_PR = "train_data_df"
TESTING_DATA_DF_PR = "test_data_df"
TRAINING_LABLES_DF_PR = "train_lables_df"
TESTING_LABLES_DF_PR = "test_lables_df"
PREDICTED_LABELS_DF_PR = "predict_labels_df"
METRIC_DF_PR = "metric_df"
NUMERIC_DF_PR = "numeric df"
TEXT_DF_PR = "text_df"
CAT_DF_PR = "cat_df"
SETTINGS_PR = "settings"
CROSS_VALUE_SCORE_PR = "cross_value_score"
STUDY_PR = "study"
SLOTSET_PR = "slotset"

# Other parameters
CATALOG_PR = "catalog"
MODEL_PR = "model"
RESULT_PR = "result"

DATA_FILE_NAME = "fin"
INPUT_FOLDER = "input_folder"
OUTPUT_FOLDER = "output_folder"

JOB_TIMED_OUT = "Job exceeded deadline"
JOB_OOM = "Job exceeded memory limit"

_ONE_DAY_IN_SECONDS = 60 * 60 * 24

PLOT_H = 1000
PLOT_W = 1000

# The well known port for the other microservices

STUDY_PORT = 50909
MODEL_PORT = 50910

PLANNER_PORT = 50901
TRAINER_PORT = 50902
ANALYZER_PORT = 50903
PREDICTOR_PORT = 50904
REPORTER_PORT = 50906
DATASET_PORT = 50906
OS_PORT = 50906

LOCALHOST_ENV = "localhost"

EVAL_DF_PR = "eval_df"  # represent a dataframe with scores
CV_SCORE_PR = "cross_value_score"
CV_OBJECTIVE_PR = "cross value objective"
CONFUSION_MATRIX_DF_PR = "confusion_matrix_df"
ROC_IMG_PR = "roc_img"
ROC_FPR_PR = "roc_fpr"
ROC_TPR_PR = "roc_tpr"
STAGES_DF_PR = "stages_df"
# for testing
VALUE = "value"

#############################################################################################
# ML Tasks
#############################################################################################

MLTask_BinaryClassification = "binary-classification"
MLTask_MultiClassification = "multi-classification"
MLTask_MultiLabelClassification = "multi-label-classification"
MLTask_TextClassification = "text_feature_extractor-classification"
MLTask_Regression = "regression"
MLTask_Forecasting = "forecasting"
MLTask_GroupForecasting = "partition-forecasting"
MLTask_Clustering = "clustering"
MLTask_Recommendation = "recommendation"
MLTask_OutlierDetection = "outlier-detection"
MLTask_NoveltyDetection = "novelty-detection"
MLTask_TopicModeling = "topic-modeling"
MLTask_DeepMultiClassification = "deep-multi-classification"
MLTask_DeepBinaryClassification = "deep-binary-classification"
MLTask_DeepMultiLabelClassification = "deep-multi-label-classification"
MLTask_DeepRegression = "deep-regression"
MLTask_DeepForecast = "deep-forecast"
MLTask_DeepOutlierDetection = "deep-outlier-detection"


def is_classification(task) -> bool:
    return (
            task == MLTask_BinaryClassification
            or task == MLTask_MultiClassification
            or task == MLTask_MultiLabelClassification
            or task == MLTask_TextClassification
    )


def is_regression(task) -> bool:
    return task == MLTask_Regression


def is_forecasting(task) -> bool:
    return task == MLTask_Forecasting


#############################################################################
# Database sever type
#############################################################################
DatabaseServerType_MsSqlServer = "sqlserver"
DatabaseServerType_MySql = "mysql"
DatabaseServerType_Postgress = "postgress"
DatabaseServerType_SqlLite = "sqlite"

#############################################################################
# Delimiters
#############################################################################

Delimiter_CRLF = "crlf"
Delimiter_CR = "cr"
Delimiter_LF = "lf"
Delimiter_Semicolon = "semicolon"
Delimiter_Colon = "colon"
Delimiter_Comma = "comma"
Delimiter_Tab = "tab"
Delimiter_Space = " "
Delimiter_Pipe = "|"

#############################################################################
# Record delimiter
#############################################################################

FlatFileContentFormat_Delimited = "delimited"
FlatFileContentFormat_FixedLength = "fixed"

#############################################################################
# File types
#############################################################################

FlatFileTypeCsv = "csv"
FlatFileTypeTable = "tsv"
FlatFileTypeExcel = "excel"
FlatFileTypeFwf = "fwf"
FlatFileTypeHdf5 = "hdf"
FlatFileTypeHtml = "html"
FlatFileTypeJson = "json"
FlatFileTypePickle = "pickle"
FlatFileTypeSas = "sas"
FlatFileTypeStata = "stata"
FlatFileTypeFeather = "feather"
FlatFileTypeParquet = "parquet"

FlatFileType_Csv = "csv"
FlatFileType_Json = "json"
FlatFileType_Parquet = "parquet"
FlatFileType_Dsv = "dsv"
FlatFileType_Excel = "excel"
FlatFileType_Sas = "sas"
FlatFileType_Bz2 = "bz2"
FlatFileType_Gz = "gz"
FlatFileType_Zip = "zip"
FlatFileType_Tar = "tar"
FlatFileType_Tgz = "tgz"

#############################################################################
# Media types
#############################################################################
CorpusMediaType_Text = "text_feature_extractor"
CorpusMediaType_Image = "image"
CorpusMediaType_Video = "video"
CorpusMediaType_Audio = "audio"

#############################################################################
# Dataset Roles
#############################################################################
DatasetRole_Unlabeled = "unlabeled"
DatasetRole_FeatureGroup = "featuregroup"
DatasetRole_Serving = "serving"
DatasetRole_Feedback = "feedback"
DatasetRole_Training = "training"
DatasetRole_Prediction = "prediction"

#############################################################################
# Providers
#############################################################################
ProviderName_AmazonAthena = "athena"
ProviderName_GcpBigQuery = "bigquery"
ProviderName_ApacheCassandra = "cassandra"
ProviderName_AzureSqlDatabase = "azuresqldatabase"
ProviderName_MongoDb = "mongodb"
ProviderName_MySql = "mysql"
ProviderName_Odbc = "odbc"
ProviderName_Oracle = "oracle"
ProviderName_Postgres = "postgres"
ProviderName_Presto = "presto"
ProviderName_AmazonRedshift = "redshift"
ProviderName_ApacheHive = "hive"
ProviderName_Snowflake = "snowflake"
ProviderName_Sybase = "sybase"
ProviderName_Vertica = "vertica"
ProviderName_CockrouchDB = "cockrouchdb"
ProviderName_ElasticSearch = "elasticsearch"
ProviderName_Informix = "informix"
ProviderName_SAPHana = "hana"
ProviderName_Teradata = "teradata"
ProviderName_GcpSpanner = "spanner"
ProviderName_ApacheSpark = "spark"
ProviderName_MSSqlServer = "mssqlserver"
ProviderName_Clickhouse = "clickhouse"
ProviderName_Greenplum = "greenplum"
ProviderName_Couchbase = "couchbase"
ProviderName_Exasol = "exasol"
ProviderName_Sqlite = "sqlite"
ProviderName_DB2 = "db2"
ProviderName_Dermio = "dermio"
ProviderName_Drill = "drill"
ProviderName_Druid = "druid"
ProviderName_Hive = "hive"
ProviderName_Impala = "impala"
ProviderName_Kylin = "kylin"
ProviderName_Pinot = "pinot"
ProviderName_GoogleSheets = "googlesheets"
ProviderName_RabbitMQ = "rabbitmq"
ProviderName_Kafka = "kafka"
ProviderName_AliCloud = "alicloud"
ProviderName_Azure = "azure"
ProviderName_DigitalOcean = "digitalocean"
ProviderName_Hetzner = "hetzner"
ProviderName_Linode = "linode"
ProviderName_Gcp = "gcp"
ProviderName_Minio = "minio"
ProviderName_Ovh = "ovh"
ProviderName_Aws = "aws"
ProviderName_Openstack = "openstack"
ProviderName_Dockerhub = "dockerhub"
ProviderName_ImageRegistry = "image-registry"
ProviderName_GitHub = "github"
ProviderName_Bitbucket = "bitbucket"
ProviderName_Gitlab = "gitlab"
ProviderName_SmtpProvider = "smtp"
ProviderName_Slack = "slack"
ProviderName_Hipchat = "hipchat"
ProviderName_Discord = "discord"
ProviderName_PageDuty = "pagerduty"
ProviderName_PushOver = "pushover"
ProviderName_OpsGenie = "opsgenie"
ProviderName_Webhook = "webook"
ProviderName_VictorOps = "victorops"
ProviderName_Flock = "flock"
ProviderName_MSTeam = "msteam"
ProviderName_MatterMost = "mattermost"

ProviderName_UnknownProvider = "unknown"


# convert a metric from modelacore domain name to the scikit learn name
def convert_metric_from_domain_to_sklearn(name):
    metric_map = {
        Metric_Accuracy: Metric_Accuracy_SKLearn,
        Metric_BalancedAccuracy: Metric_BalancedAccuracy_SKLearn,
        Metric_AveragePrecision: Metric_AveragePrecision_SKLearn,
        Metric_BrierScoreLoss: Metric_BrierScoreLoss_SKLearn,
        Metric_LogLoss: Metric_LogLoss_SKLearn,
        # F1
        Metric_F1: Metric_F1_SKLearn,
        Metric_F1Weighted: Metric_F1Weighted_SKLearn,
        Metric_F1Micro: Metric_F1Micro_SKLearn,
        Metric_F1Macro: Metric_F1Macro_SKLearn,
        Metric_F1Samples: Metric_F1Samples_SKLearn,
        # Precision
        Metric_Precision: Metric_Precision_SKLearn,
        Metric_PrecisionWeighted: Metric_PrecisionWeighted_SKLearn,
        Metric_PrecisionMicro: Metric_PrecisionMicro_SKLearn,
        Metric_PrecisionMacro: Metric_PrecisionMacro_SKLearn,
        Metric_PrecisionSamples: Metric_PrecisionSamples_SKLearn,
        # Recall
        Metric_Recall: Metric_Recall_SKLearn,
        Metric_RecallWeighted: Metric_RecallWeighted_SKLearn,
        Metric_RecallMicro: Metric_RecallMicro_SKLearn,
        Metric_RecallMacro: Metric_RecallMacro_SKLearn,
        Metric_RecallSamples: Metric_RecallSamples_SKLearn,
        Metric_ZeroOne: Metric_ZeroOne_SKLearn,
        Metric_HammingLoss: Metric_HammingLoss_SKLearn,
        Metric_HingeLoss: Metric_HingeLoss_SKLearn,
        Metric_JaccardScore: Metric_JaccardScore_SKLearn,
        Metric_MatthewsCorrCoef: Metric_MatthewsCorrCoef_SKLearn,
        Metric_RocAuc: Metric_RocAuc_SKLearn,
        Metric_PrAuc: Metric_PR_RocAuc_SKLearn,
        Metric_Fp: Metric_Fp_SKLearn,
        Metric_Fn: Metric_Fn_SKLearn,
        Metric_Tn: Metric_Tn_SKLearn,
        Metric_Tp: Metric_Tp_SKLearn,
        # Regression
        Metric_ExplainedVariance: Metric_ExplainedVariance_SKLearn,
        Metric_MaxError: Metric_MaxError_SKLearn,
        Metric_MAE: Metric_MAE_SKLearn,
        Metric_MSE: Metric_MSE_SKLearn,
        Metric_MSLE: Metric_MeanSquaredLogError_SKLearn,
        Metric_RMSE: Metric_RMSE_SKLearn,
        Metric_MedianAbsoluteError: Metric_MedianAbsoluteError_SKLearn,
        Metric_R2: Metric_R2_SKLearn,
    }
    return metric_map[name]


def convert_metric_from_sklearn_to_domain(name):
    metric_map = {
        Metric_Accuracy_SKLearn: Metric_Accuracy,
        Metric_BalancedAccuracy_SKLearn: Metric_BalancedAccuracy,
        Metric_AveragePrecision_SKLearn: Metric_AveragePrecision,
        Metric_BrierScoreLoss_SKLearn: Metric_BrierScoreLoss,
        Metric_LogLoss_SKLearn: Metric_LogLoss,
        # F1
        Metric_F1_SKLearn: Metric_F1,
        Metric_F1Weighted_SKLearn: Metric_F1Weighted,
        Metric_F1Micro_SKLearn: Metric_F1Micro,
        Metric_F1Macro_SKLearn: Metric_F1Macro,
        Metric_F1Samples_SKLearn: Metric_F1Samples,
        # Precision
        Metric_Precision_SKLearn: Metric_Precision,
        Metric_PrecisionWeighted_SKLearn: Metric_PrecisionWeighted,
        Metric_PrecisionMacro_SKLearn: Metric_PrecisionMacro,
        Metric_PrecisionMicro_SKLearn: Metric_PrecisionMicro,
        Metric_PrecisionSamples_SKLearn: Metric_PrecisionSamples,
        # Recall
        Metric_Recall_SKLearn: Metric_Recall,
        Metric_RecallWeighted_SKLearn: Metric_RecallWeighted,
        Metric_RecallMacro_SKLearn: Metric_RecallMacro,
        Metric_RecallMicro_SKLearn: Metric_RecallMicro,
        Metric_RecallSamples_SKLearn: Metric_RecallSamples,
        # AUC
        Metric_RocAuc_SKLearn: Metric_RocAuc,
        Metric_PR_RocAuc_SKLearn: Metric_PrAuc,
        # Confusion Matrix
        Metric_Fp_SKLearn: Metric_Fp,
        Metric_Fn_SKLearn: Metric_Fn,
        Metric_Tn_SKLearn: Metric_Tn,
        Metric_Tp_SKLearn: Metric_Tp,
        Metric_ZeroOne_SKLearn: Metric_ZeroOne,
        Metric_HammingLoss_SKLearn: Metric_HammingLoss,
        Metric_HingeLoss_SKLearn: Metric_HingeLoss,
        Metric_JaccardScore_SKLearn: Metric_JaccardScore,
        Metric_MatthewsCorrCoef_SKLearn: Metric_MatthewsCorrCoef,
        # Regression
        Metric_ExplainedVariance_SKLearn: Metric_ExplainedVariance,
        Metric_MaxError_SKLearn: Metric_MaxError,
        Metric_MAE_SKLearn: Metric_MAE,
        Metric_MSE_SKLearn: Metric_MSE,
        Metric_MeanSquaredLogError_SKLearn: Metric_MSLE,
        Metric_MedianAbsoluteError_SKLearn: Metric_MedianAbsoluteError,
        Metric_R2_SKLearn: Metric_R2,
    }
    return metric_map[name]


##################################################################
# classification metrics
##################################################################
Metric_Accuracy = "accuracy"
Metric_BalancedAccuracy = "balance"
Metric_AveragePrecision = "average_precision"
Metric_BrierScoreLoss = "brier_score_loss"

# roc auc
Metric_RocAuc = "auc"
Metric_RocAucWeighted = "auc-weighted"
Metric_RocAucMacro = "auc-macro"
Metric_RocAucMicro = "auc-micro"

# pr auc
Metric_PrAuc = "pr-auc"

# f1
Metric_F1 = "f1"
Metric_F1Weighted = "f1-weighted"
Metric_F1Micro = "f1-micro"
Metric_F1Macro = "f1-macro"
Metric_F1Samples = "f1-samples"
Metric_LogLoss = "log-loss"
Metric_Precision = "precision"
Metric_PrecisionWeighted = "precision-weighted"
Metric_PrecisionMicro = "precision-micro"
Metric_PrecisionMacro = "precision-macro"
Metric_PrecisionSamples = "precision-samples"
Metric_Recall = "recall"
Metric_RecallWeighted = "recall-weighted"
Metric_RecallMicro = "recall-micro"
Metric_RecallMacro = "recall-macro"
Metric_RecallSamples = "recall-samples"
Metric_Fp = "fp"
Metric_Fn = "fn"
Metric_Tn = "tn"
Metric_Tp = "tp"
Metric_Tnr = "tnr"
Metric_Fpr = "fpr"
Metric_Tpr = "tpr"
Metric_ZeroOne = "zero-one"
Metric_HammingLoss = "hamming-loss"
Metric_HingeLoss = "hinge-loss"
Metric_JaccardScore = "jaccard-loss"
Metric_MatthewsCorrCoef = "matthews-corr-coef"

###############################################################################
# Classification scikit learn
###############################################################################

Metric_Accuracy_SKLearn = "accuracy"
Metric_BalancedAccuracy_SKLearn = "balance"
Metric_AveragePrecision_SKLearn = "average_precision"
Metric_BrierScoreLoss_SKLearn = "brier_score_loss"
# f1
Metric_F1_SKLearn = "f1"
Metric_F1Weighted_SKLearn = "f1_weighted"
Metric_F1Micro_SKLearn = "f1_micro"
Metric_F1Macro_SKLearn = "f1_macro"
Metric_F1Samples_SKLearn = "f1_samples"
# recall
Metric_Recall_SKLearn = "recall"
Metric_RecallWeighted_SKLearn = "recall_weighted"
Metric_RecallMicro_SKLearn = "recall_micro"
Metric_RecallMacro_SKLearn = "recall_macro"
Metric_RecallSamples_SKLearn = "recall_samples"
# precision
Metric_Precision_SKLearn = "precision"
Metric_PrecisionWeighted_SKLearn = "precision_weighted"
Metric_PrecisionMacro_SKLearn = "precision_macro"
Metric_PrecisionMicro_SKLearn = "precision_micro"
Metric_PrecisionSamples_SKLearn = "precision_samples"
# rocauc
Metric_RocAuc_SKLearn = "roc_auc"
Metric_RocAucWeighted_SKLearn = "rocauc_weighted"
Metric_RocAucMacro_SKLearn = "rocauc_macro"
Metric_RocAucMicro_SKLearn = "rocauc_micro"
Metric_RocAucSamples_SKLearn = "rocauc_samples"

# pr rocauc
Metric_PR_RocAuc_SKLearn = "average_precision"

Metric_PrAuc_Micro = "prauc-micro"
Metric_PrAuc_Macro = "prauc-macro"
Metric_PrAuc_Weighted = "prauc-weighted"

Metric_LogLoss_SKLearn = "neg_log_loss"
Metric_Fp_SKLearn = "fp"
Metric_Fn_SKLearn = "fn"
Metric_Tn_SKLearn = "tn"
Metric_Tp_SKLearn = "tp"
Metric_ZeroOne_SKLearn = "zero_one"
Metric_HammingLoss_SKLearn = "hamming_loss"
Metric_HingeLoss_SKLearn = "hinge_loss"
Metric_JaccardScore_SKLearn = "jaccard_loss"
Metric_MatthewsCorrCoef_SKLearn = "matthews_corrcoef"

##########################################################################
# Regression
##########################################################################

Metric_ExplainedVariance = "explained-variance"
Metric_MaxError = "max-error"
Metric_MAE = "mae"
Metric_MSE = "mse"
Metric_RMSE = "rmse"
Metric_MSLE = "msle"
Metric_RMSLE = "rmsle"
Metric_MedianAbsoluteError = "neg_median_absolute_error"
Metric_R2 = "r2"
Metric_ADJ_R2 = "adj-r2"

###########################################################################
# Forecasting error
###########################################################################

Metric_MedianAbsolutePercentError = "mean_absolute_percentage_error",
Metric_Mean_Pinball_Loss = "mean_pinball_loss",
Metric_Mean_Tweedia_Deviance = "mean_tweedie_deviance",
Metric_Mean_Poission_Deviance = "mean_possion_deviance"
Metric_Mean_Gamma_Deviance = "mean_gamma_deviance"
Metric_D2_Tweedie_Score = "d2_tweedie_score"
Metric_D2_Pinball_Score = "d2_pinball_score"
Metric_D2_absolute_error_score = "d2_absolute_error_score"

# SK learn Regression

Metric_ExplainedVariance_SKLearn = "explained_variance"
Metric_MaxError_SKLearn = "max_error"
Metric_MAE_SKLearn = "neg_mean_absolute_error"
Metric_MSE_SKLearn = "neg_mean_squared_error"
Metric_RMSE_SKLearn = "rmse"
Metric_RMSLE_SKLearn = "rmsle"
Metric_MeanSquaredLogError_SKLearn = "neg_mean_squared_log_error"
Metric_MedianAbsoluteError_SKLearn = "neg_median_absolute_error"
Metric_R2_SKLearn = "r2"

Metric_MeanPoissonDeviance = "mean-poisson-deviance"
Metric_MeanGammaDeviance = "mean-gamma-deviance"
Metric_MeanTweedieDeviance = "mean-tweedie-deviance"

#########################################################################
# Forecasting metrics
#########################################################################
Metric_MAPE = "mape"
Metric_SMAPE = "smape"
Metric_DAPE = "dape"
Metric_MAZE = "maze"
Metric_MDAPE = "mdape"

#########################################################################
# Clustering metrics
#########################################################################

Metric_AdjustedMutualInfoScore_SKLearn = "adjusted_mutual_info_score"
Metric_AdjustedRandScore_SKLearn = "adjusted_rand_score"
Metric_CompletenessScore_SKLearn = "completeness_score"
Metric_FowlkesMallowsScore_SKLearn = "fowlkes_mallows_score"
Metric_HomogeneityScore_SKLearn = "homogeneity_score"
Metric_MutualInfoScore_SKLearn = "mutual_info_score"
Metric_NormalizedMutualInfoScore_SKLearn = "normalized_mutual_info_score"
Metric_VMeasureScore_SKLearn = "v_measure_score"

#########################################################################
# Latency metrics
#########################################################################
Metric_P50_Latency = "p50-latency"
Metric_P95_Latency = "p95-latency"
Metric_P99_Latency = "p99-latency"
Metric_Req_Per_Sec = "req-per-sec"

#########################################################################
# Drift Detection metrics
#########################################################################

Metric_KSTest = "two-sample-ks-test"
Metric_ChiSqrTest = "chi-squared-test"
Metric_ProportionDifferenceTest = "proportion-difference-test"
Metric_WassersteinDistanceTest = "wasserstein-distance-test"
Metric_PSI = "psi"
Metric_KLDivergence = "kl-divergenece"
Metric_JSDistance = "jensen-shannon-distance"

#########################################################################
# System Metrics
#########################################################################

Metric_Cpu = "cpu"
Metric_Gpu = "gpu"
Metric_Mem = "mem"
Metric_GpuMem = "gpumem"


#########################################################################
# Time Series Feature Metrics
#########################################################################

Metric_TS_AbsEnergy                               = "abs-enegry"
Metric_TS_AbsoluteMaximum                         = "abs-maximum"
Metric_TS_AbsoluteSumOfChanges                    = "abs-sum-of-change"
Metric_TS_CountAboveMean                          = "count_above_mean"
Metric_TS_CountBelowMean                          = "count_below_mean"
Metric_TS_FirstLocationOfMaximum                  = "first_location_of_maximum"
Metric_TS_FirstLocationOfMinimum                  = "first_location_of_minimum"
Metric_TS_BenfordCorrelation                      = "benford_correlation"
Metric_TS_HasDuplicate                            = "has_duplicate"
Metric_TS_HasDuplicateMax                         = "has_duplicate_max"
Metric_TS_HasDuplicateMean                        = "has_duplicate_min"
Metric_TS_Kurtosis                                = "kurtosis"
Metric_TS_LastLocationOfMaximum                   = "last_location_of_maximum"
Metric_TS_LastLocationOfMinimum                   = "last_location_of_minimum"
Metric_TS_Maximum                                 = "maximum"
Metric_TS_Mean                                    = "mean"
Metric_TS_MeanAbsChange                           = "mean_abs_change"
Metric_TS_MeanChange                              = "mean_change"
Metric_TS_Median                                  = "median"
Metric_TS_Minimum                                 = "minimum"
Metric_TS_Root_mean_square                        = "root_mean_square"
Metric_TS_Sample_entropy                          = "sample_entropy"
Metric_TS_Standard_deviation                      = "standard_deviation"
Metric_TS_Sum_of_reoccurring_data_points          = "sum_of_reoccurring_data_points"
Metric_TS_Sum_of_reoccurring_values               = "sum_of_reoccurring_values"
Metric_TS_Sum_values                              = "sum_values"
Metric_TS_Longest_strike_above_mean               = "longest_strike_above_mean"
Metric_TS_Longest_strike_below_mean               = "longest_strike_below_mean"
Metric_TS_Variance                                = "variance"
Metric_TS_Variance_larger_than_standard_deviation = "variance_larger_than_standard_deviation"
Metric_TS_Variation_coefficient                   = "variation_coefficient"
Metric_TS_Skewness                                = "skewness"

#########################################################################
# Regressor Estimator names
#########################################################################


EstimatorName_CatboostRegressor = "catboost-regressor"
EstimatorName_ElasticNetRegressor = "elasticnet-regressor"
EstimatorName_LightGbmRegressor = "lightgbm-regressor"
EstimatorName_GradientBoostingRegressor = "gradient-boosting-regressor"
EstimatorName_DecisionTreeRegressor = "decision-tree-regressor"
EstimatorName_KNeighborsRegressor = "knn-regressor"
EstimatorName_Ridge = "ridge-regressor"
EstimatorName_Lasso = "lasso-regressor"
EstimatorName_LassoLars = "lassp-lars"
EstimatorName_LinearRegression = "linear-regression"
EstimatorName_RansacRegressor = "ransac-regressor"
EstimatorName_SGDRegressor = "sgd-regressor"
EstimatorName_RandomForestRegressor = "random-forest-regressor"
EstimatorName_ExtraTreeRegressor = "extra-tree-regressor"
EstimatorName_XGBRegressor = "xgb-regressor"
EstimatorName_DNNRegressor = "dnn-regressor"
EstimatorName_ElasticNet = "elasticnet-regressor"
EstimatorName_Lars = "lars"
EstimatorName_HistGradientBoostingRegressor = "hist-regressor"
EstimatorName_LinearSVR = "linear-svr"
EstimatorName_AdaBoostRegressor = "ada-boost-regressor"
EstimatorName_SVR = "svr"
EstimatorName_PassiveAggressiveRegressor = "passive-aggressive-regressor"

#########################################################################
# Outliers Estimator names
#########################################################################

EstimatorName_EllipticEnvelope = "elliptic-envelope"
EstimatorName_OneClassSVM = "one-class-svm"
EstimatorName_IsolationForest = "isolation-forest"
EstimatorName_LocalOutlierFactor = "local-outlier-factor"

#########################################################################
# Forecast Estimator names
#########################################################################

EstimatorName_Prophet = "prophet"
EstimatorName_NaiveSeasonal = "naive-seasonal"
EstimatorName_NaiveDrift = "naive-drift"
EstimatorName_ExponentialSmoothing = "ExponentialSmoothing"
EstimatorName_ARIMA = "arima"
EstimatorName_AutoARIMA = "auto-arima"
EstimatorName_RegressionEnsembleModel = "regression-ensemble-model"
EstimatorName_RegressionModel = "regression-model"
EstimatorName_Theta = "theta"
EstimatorName_FFT = "fft"

#########################################################################
# Clustering Names
#########################################################################
EstimatorName_KMean = "kmeans"
EstimatorName_Spectral = "spectral"
EstimatorName_DBScan = "dbscan"
EstimatorName_Optics = "optics"
EstimatorName_Birch = "birch"
EstimatorName_MeanShift = "mean-shift"

##########################################################################
# Recommendation
##########################################################################

#########################################################################
# Classifier Estimator names
#########################################################################

EstimatorName_KNeighborsClassifier = "knn-classifier"
EstimatorName_AdaBoostClassifier = "ada-boost-classifier"
EstimatorName_BernoulliNB = "bernoulli-nb"
EstimatorName_GaussianNB = "gaussian-nb"
EstimatorName_MultinomialNB = "multinomial-nb"
EstimatorName_DecisionTreeClassifier = "decision-tree-classifier"
EstimatorName_ExtraTreeClassifier = "extra-tree-classifier"
EstimatorName_LinearSVC = "linear-svc"
EstimatorName_SVC = "svc"
EstimatorName_PassiveAggressiveClassifier = "passive-aggressive-classifier"
EstimatorName_SGDClassifier = "sgd-classifier"
EstimatorName_LogisticRegression = "logistic-regression"
EstimatorName_GradientBoostingClassifier = "gradient-boosting-classifier"
EstimatorName_RandomForestClassifier = "random-forest-classifier"
EstimatorName_XGBClassifier = "xgboost-classifier"
EstimatorName_RidgeClassifier = "ridge-classifier"
EstimatorName_QuadraticDiscriminant = "quadratic-discriminant"
EstimatorName_LinearDiscriminant = "linear-discriminant"
EstimatorName_LightGbmClassifier = "lightgbm-classifier"
EstimatorName_CatboostClassifier = "catboost-classifier"
EstimatorName_HistGradientBoostingClassifier = "hist-gradient-boosting"

#########################################################################
# Meta estimators
#########################################################################

EstimatorName_VotingClassifier = "voting-classifier"
EstimatorName_VotingRegressor = "voting-regressor"
EstimatorName_StackingClassifier = "stacking-classifier"
EstimatorName_StackingRegressor = "stacking-regressor"

##########################################################################
# Type of classifier
##########################################################################


EnsembleType_VotingEnsembleType = "voting"
EnsembleType_StackEnsembleType = "stacking"

# Data source

DatastoreType_Csv = "csv"
DatastoreType_Sql = "sql"
DatastoreType_Table = "table"
DatastoreType_Fwf = "fwf"
DatastoreType_Excel = "excel"
DatastoreType_Unown = "unknown"

##############################################################################
# Cross Validation Types
##############################################################################

CvTypeNone = "none"
CvTypeGroupKFold = "group-kfold"
CvTypeGroupShuffleSplit = "group-shuffle-split"
CVTypeKFold = "kfold"
CVTypeLeaveOneGroupOut = "leave-one-group-out"
CvTypeLeavePGroupsOut = "leave-p-groups-out"
CvTypeLeaveOneOut = "leave-one-out"
CvTypeLeavePOut = "leave-p-out"
CvTypePredefinedSplit = "predefined-split"
CvTypeRepeatedKFold = "repeated-kfold"
CvTypeRepeatedStratifiedKFold = "repeated-stratified-k-fold"
CvTypeShuffleSplit = "shuffle-split"
CvTypeStratifiedKFold = "stratified-k-fold"
CvTypeStratifiedShuffleSplit = "stratified-shuffle-split"
CvTypeStratifiedGroupKFold = "stratified-group-k-fold"
CvTypeTimeSeriesSplit = "time-series-split"

##############################################################################
# Data type
##############################################################################
DataType_Boolean = "boolean"
DataType_Color = "color"
DataType_Currency = "currency"
DataType_Date = "date"
DataType_DateTime = "datetime"
DataType_Guid = "guid"
DataType_Hyperlink = "hyperlink"
DataType_Image = "image"
DataType_Media = "media"
DataType_Categorical = "categorical"
DataType_Number = "number"
DataType_Text = "text"
DataType_Json = "json"
DataType_Path = "path"
DataType_File = "file"
DataType_Time = "time"
DataType_Record = "record"
DataType_Url = "url"
DataType_NumberList = "number-list"
DataType_CategoricalList = "categorical-list"
DataType_StringList = "string-list"
DataType_Useless = "useless"
DataType_Any = "any"

############################################################################
# Data format
############################################################################
DataFormat_Text = "text_feature_extractor"
DataFormat_Binary = "binary"
DataFormat_Date = "date"
DataFormat_Ordinal = "ordinal"
DataFormat_Count = "count"
DataFormat_Interval = "interval"
DataFormat_Nominal = "nominal"
DataFormat_Datetime = "datatime"
DataFormat_Passowrd = "password"
DataFormat_Time = "time"
DataFormat_Image = "image"
DataFormat_Sound = "sound"
DataFormat_Email = "email"
DataFormat_CreditCard = "creditCard"
DataFormat_Uuid3 = "uuid"
DataFormat_Uuid5 = "uuid5"
DataFormat_Uuid = "uuid"
DataFormat_Base64 = "base64"
DataFormat_Latitude = "latitude"
DataFormat_Longtitude = "longtitude"
DataFormat_DnsName = "dns"
DataFormat_Ip = "ip"
DataFormat_Url = "url"
DataFormat_Ssn = "ssn"
DataFormat_Alpha = "alpha"
DataFormat_AlphaNumeric = "alphanumeric"
DataFormat_NoneDataFormat = "none"
DataFormat_UnknownDataFormat = "unknown"

#########################################################################
# Report
#########################################################################
ReportType_BinaryClassificationModelReport = "binary-classification-model"
ReportType_ForecastModelReport = "forecast-model"
ReportType_RegressionModelReport = "regression-model"
ReportType_MultiClassificationModelReport = "multi-classification-model"
ReportType_TextClassificationModelReport = "text_feature_extractor-classification-model"
ReportType_ClassificationDatasetReport = "classification-schema"
ReportType_ForecastDatasetReport = "forecast-schema"
ReportType_TextClassificationDatasetReport = (
    "text_feature_extractor-classification-schema"
)
ReportType_RegressionDatasetReport = "regression-schema"
ReportType_StudyReport = "studies-report"
ReportType_FeatureReport = "feature-report"
ReportType_InvalidReport = "invalid-report"

# Report Image

ReportImageName_RocImage = "roc.png"
ReportImageName_FreqForCategoricalAttributeImage = (
    "freq_for_categorical_attribute_image.png"
)
ReportImageName_DistForNumericalAttributeImage = (
    "dist_for_numerical_attribute_image.png"
)
ReportImageName_ConfusionMatrixImage = "confusion_matrix.png"
ReportImageName_CorrelationImage = "correlation.png"
ReportImageName_FeatureImportanceImage = "feature_importance.png"

# Report table name
ReportTableName_SampleTableName = "sample_table"
ReportTableName_ShapeTableName = "shape_table"
ReportTableName_OverviewTableName = "overview_table"
ReportTableName_ColumnTableName = "columns_table"
ReportTableName_MissingValuesTableName = "missing_values_table"
ReportTableName_RFETableName = "rfe_table"
ReportTableName_ClassificationReportTableName = "classification_report_table"
ReportTableName_AlgorithmTableName = "algorithm_table"
ReportTableName_EvaluationTableName = "evaluation_table"
ReportTableName_BootstrapTableName = "bootstrap_table"
ReportTableName_TrainingTableName = "training_table"

# https://scikit-learn.org/stable/modules/model_evaluation.html#scoring-parameter

#################################################################################################
# Imputation
#################################################################################################
Imputation_RemoveRowsWithMissingValues = "remove-rows-with-missing-values"
Imputation_MeanImputation = "replace-with-mean"
Imputation_MedianImputation = "replace-with-median"
Imputation_ArbitraryValueImputation = "replace-with-arbitrary-value"
Imputation_FreqCategoryImputation = "freq-category-imputation"
Imputation_MissingIndicatorImputation = "add-missing-value-indicator"
Imputation_KnnImputation = "knn"
Imputation_IterativeImputation = "iterative"
Imputation_MICEImputation = "mice"
Imputation_NoImputation = "no-imputation"
Imputation_AutoImputer = "auto"

#################################################################################################
# Categorical Encoding
#################################################################################################

CategoricalEncoding_OneHotEncoding = "one-hot-encoding"
CategoricalEncoding_OrdinalEncoding = "ordinal-encoding"
CategoricalEncoding_CountEncoding = "count-encoding"
CategoricalEncoding_TargetEncoding = "target-encoding"
CategoricalEncoding_ProbabilityRatioEncoding = "probability-ratio-encoding"
CategoricalEncoding_WoERatioEncoding = "weight-of-evidence-encoding"
CategoricalEncoding_LabelEncoding = "label-encoding"
CategoricalEncoding_HashEncoding = "hash-encoding"
CategoricalEncoding_CatboostEncoding = "catboost-encoding"
CategoricalEncoding_LeaveOneOutEncoding = "loo-encoding"
CategoricalEncoding_NoEncoding = "no-encoding"
CategoricalEncoding_AutoEncoding = "auto"

#################################################################################################
# Scaling
#################################################################################################

Scaling_StandardScaling = "standard-scaling"
Scaling_MaxAbsScaling = "max-abs-scaling"
Scaling_MinMaxScaling = "min-max-scaling"
Scaling_Normalization = "normalization-scaling"
Scaling_RobustScaling = "robust-scaling"
Scaling_ScaleToUnitNorm = "scale-to-unit-norm"
Scaling_NoneScaling = "none"
Scaling_AutoScaling = "auto"

#####################################################################################################
# Variable Transformation
#####################################################################################################

VariableTransformation_LogTransformation = "log-transformation"
VariableTransformation_ReciprocalTransformation = "reciprocal-transformation"
VariableTransformation_SqrtTransformation = "sqrt-transformation"
VariableTransformation_PowerTransformation = "power-transformation"
VariableTransformation_BoxCoxTransformation = "box-cox-transformation"
VariableTransformation_YeoJohnsonTransformation = "yj-transformation"
VariableTransformation_NoneTransform = "none"
VariableTransformation_AutoTransform = "auto"

#####################################################################################################
# Datatime Transformation
#####################################################################################################
DatetimeTransformation_ExtractDatetimeInformation = "extract-datetime-information"
DatetimeTransformation_NoneTransform = "none"
DatetimeTransformation_AutoTransform = "auto"

##############################################################################################
# Discretisation
##############################################################################################

Discretisation_EqualWidthDiscretisation = "equal-width-discretisation"
Discretisation_EqualFreqDiscretisation = "equal-freq-discretisation"
Discretisation_KBinsDiscretisation = "kbin-discretisation"
Discretisation_DecisionTreeDiscretisation = "decision-tree-discretisation"
Discretisation_KernelCentererDiscretisation = "kernel-centerer-discretisation"
Discretisation_LabelBinarizerDiscretisation = "label-binarizer-discretisation"
Discretisation_MultiLabelBinarizerDiscretisation = (
    "multi-label-binarizer-discretisation"
)
Discretisation_NoneDiscretisation = "none"
Discretisation_AutoDiscretisation = "auto"

##############################################################################################
# OutlierHandling
##############################################################################################

OutlierHandling_TrimOutlierHandling = "trim-outliers"
OutlierHandling_WinsorizerOutlierHandling = "winsorizer-outliers"
OutlierHandling_CapOutlierHandling = "cap-outliers"
OutlierHandling_ZeroCodeOutlierHandling = "zero-code-outliers"
OutlierHandling_NoneOutlier = "none"
OutlierHandling_AutoOutlier = "auto"

####################################################################################
# ImbalanceHandling
####################################################################################

ImbalanceHandling_ADASYN = "adasyn"
ImbalanceHandling_BorderlineSMOTE = "baseline-smote"
ImbalanceHandling_KMeansSMOTE = "kmean-smote"
ImbalanceHandling_RandomOverSampler = "random-over-sampler"
ImbalanceHandling_SMOTE = "smote"
ImbalanceHandling_SMOTENC = "smotenc"
ImbalanceHandling_SVMSMOTE = "svmsmote"
ImbalanceHandling_ImbalanceNone = "none"
ImbalanceHandling_ImbalanceAuto = "auto"

####################################################################################
# TextEncoding
####################################################################################

TextEncoding_TfIdf = "tfidf"
TextEncoding_CountVectorizer = "count-vec"
TextEncoding_HashingVectorizer = "hashing-vec"
TextEncoding_Bert = "bert"
TextEncoding_NoneTextTransform = "none"
TextEncoding_AutoTextTransform = "auto"

####################################################################################
# Feature Selection
####################################################################################

FeatureSelection_RemoveConstantsFeatureSelection = "drop-constant-features"
FeatureSelection_RemoveDuplicateFeatureSelection = "drop-duplicated-features"
FeatureSelection_RemoveCorrelatedFeatureSelection = "drop-correlated-features"
FeatureSelection_MutalInformationFeatureSelection = "mutual-information"
FeatureSelection_ChiSquareFeatureSelection = "chisquare"
FeatureSelection_AnovaFeatureSelection = "anova"
FeatureSelection_StepForwardFeatureSelection = "step-forward"
FeatureSelection_StepBackwardFeatureSelection = "step-backward"
FeatureSelection_LassoRegressionFeatureSelection = "lasso-regression"
FeatureSelection_TreeImportanceFeatureSelection = "tree-importance"
FeatureSelection_RFE = "recursive-feature-elimination"
FeatureSelection_SelectPercentile = "select-percentile"
FeatureSelection_SelectKBest = "select-kbest"
FeatureSelection_SelectFpr = "select-fpr"
FeatureSelection_SelectFdr = "select-fdr"
FeatureSelection_VarianceThreshold = "variance-threshold"
FeatureSelection_NoneFeatureSelection = "none"
FeatureSelection_AutoFeatureSelection = "auto"

###################################################################################
# DimensionReduction string
###################################################################################


DimensionReduction_PCA = "pca"
DimensionReduction_PolynomialFeatures = "polynomial-features"
DimensionReduction_RBFSampler = "rbf-sampler"
DimensionReduction_FastIca = "fast-ica"
DimensionReduction_Nystroem = "nystroem"
DimensionReduction_None = "none"
DimensionReduction_Auto = "auto"

####################################################################################
# Stages
####################################################################################

Stage_Imputation = "imputation"
Stage_Encoding = "encoding"
Stage_Scaling = "scaling"
Stage_Discretisation = "discretisation"
Stage_VariableTransformation = "variable-transformation"
Stage_OutlierHandling = "outlier-handling"
Stage_DateTimeTransformation = "datetime-transoformation"
Stage_Dimension_Reduction = "dimension-reduction"
Stage_ImbalanceHandling = "imbalance-handling"
Stage_FeatureSelection = "feature-selection"
Stage_TimeSeriesTargetTransformation = "time-series-target"
Stage_Drop = "drop"

##################################################################################
# Pruner
##################################################################################

Pruner_None = "none"
Pruner_Percentile = "percentile-pruner"
Pruner_SH = "successive-halving-pruner"
Pruner_Hyperband = "hyperband-pruner"
Pruner_Threshold = "threshold-pruner"
Pruner_Patient = "patient-pruner"
Pruner_Median = "median-pruner"

###############################################
# Dataset Plots
###############################################

# Dataset All feature plots
Plt_Feature_Importance = "feature-importance"
Plt_Random_Feature_Importance = "random-feature-importance"
Plt_Features_Rank_1D = "features-rank-1d"
Plt_Features_Rank_2D_Pearson = "features-rank-2d-pearson"
Plt_Features_Rank_2D_Covariance = "features-rank-2d-covariance"
Plt_Features_Parallel_Coordinates = "features-parallel-coordinates"
Plt_Features_Rad_Viz = "features-radviz"
Plt_Features_Pca = "features-pca"
Plt_Features_Corr_Heatmap = "feature-corr-heatmap"
Plt_PearsonCorr = "pearson-corr"
Plt_Feature_Corr_Grid = "feature-corr-grid"
Plt_Feature_Pair_Grid = "feature-pair-grid"

Plt_Feature_Missing_Values = "features-missing-values"
Plt_Features_Missing_Values_Msno = "features-missing-values-msno"
Plt_Missing_Values_Dispression = "missing-values-dispersion"
Plt_Missing_Values_Heat_Map = "missing-values-heatmap"

# Scatter plot with target
Plt_DirectPlotWithTarget = "direct-plot-with-target"
Plt_Join_Plot_With_Target = "join-plot-with-target"
Plt_Join_Plot_With_Features = "join-plot-two-features"
Plt_Join_Plot_Hex_Bin = "join-plot-hex-bin"

# Dataset Categorical feature plots
Plt_Categorical_Features_Histograms = "categorical-features-histograms"

# Dataset Categorical target plot
Plt_Target_Balanced_Binning = "target-balanced-binning"
Plt_Target_Class_Balance = "target-class-balance"

# Dataset Clustering plots


# Dataset Forecast plots
Plt_Time_Series_Plot = "timeseries-plot"
Plt_Timeseries_AutoCorrlation = "timeseries-autocorrelation"
Plt_Timeseries_Seasonal_Decompose = "timeseries-decompose"
Plt_TimeSeries_Prophet_ForecastPlt = "timeseries-prophet-forecast"
Plt_Prophet_Components_Plt = "timeseries-prophet-components"

# Dataset numerical features plots
Plt_Numeric_Features_Box_Plot = "numeric-features-box-plot"
Plt_Numeric_Features_Histogram = "numeric-features-histogram"

# Dataset numerical target plot
Plt_Numeric_Target_KDE = "numeric-target-kde"

# Dataset text plots
Plt_Text_Token_Feature_Distribution = "text-token-feature-distribution"
Plt_Text_Tsne = "text-tsne"
Plt_Text_Dispersion = "text-dispersion"
Plt_Text_WordCloud = "text-wordcloud"
Plt_Text_DocumentLengthDistribution = "text-document-length-distribution"
Plt_Text_SentenceLengthDistribution = "text-sentence-length-distribution"

###############################################
# Model Plots
###############################################

# Binary Classification Model Plots
Plt_Classification_Report = "classification-report"
Plt_Classification_Confusion_Matrix_Numbers = "classification-confusion-matrix-numbers"
Plt_Classification_Confusion_Matrix_Percent = "classification-confusion-matrix-percent"
Plt_Binary_Classification_Roc = "binary-classification-roc"
Plt_Binary_Classification_Precision_Recall = "binary-classification-precision-recall"
Plt_Classification_Prediction_Error = "classification-prediction-error"
Plt_Classifier_Discrimination_Threshold = "classification-discrimination-threshold"
Plt_Classification_Gain_Curve = "classification-gain-curve"
Plt_Classification_Lift_Curve = "classification-lift-curve"
Plt_Classification_Mutual_Information = "mutual-info-classification"
Plt_Classification_Decision_Boundary = "classification-decision-boundary"
Plt_Decision_Tree = "decision-tree"

# XAI
Plt_XGBoost_Feature_Importance = "xgboost-feature-importance"
Plt_XGBoost_Tree = "xgboost-tree"
Plt_LightGbm_Feature_Importance = "lightgbm-feature-importance"
Plt_LightGbm_Tree = "lightgbm-tree"
Plt_XAI_Permutation_Importance = "xai-permutation-importance"
Plt_XAI_Shap_Summary = "xai-shap-summary"
Plt_XAI_Shap_Beeswarm = "xai-shap-beeswarm"
Plt_XAI_Shap_Bar_Plot = "xai-bar-plot"
Plt_XAI_Pair_Plot = "xai-pair-plot"
Plt_XAI_Corr_Plot = "xai-corr-plot"
Plt_XAI_Cat_Strip_Plot = "xai-cat-strip-plot"
Plt_XAI_XGB_Importance = "xai-xgb-importance"
Plt_Feature_Histogram_Plot = "feature-histogram-plot"

# Multi Classification Model Plots
Plt_MultiClassificationRoc = "multi-classification-roc"

# Classification Model Selection Plots
Plt_FeatureImportance = "feature-importance"
Plt_ValidationCurve = "validation-curve"
Plt_Classification_Learning_Curve = "classification-learning-curve"
Plt_Classification_Cv_Score = "classification-cv-score"
Plt_StackedFeatureImportance = "stacked-feature-importance"

# Clustering Model Selection Plots
Plt_Clustering_Silhouette_Score = "clustering-silhouette-score"
Plt_Agglomerative_Clustering = "agglomerative-clustering"
Plt_Clustering_Intercluster_Distance_Map = "clustering-intercluster-distance-map"
Plt_Elbow_Method = "elbow-method"

# Regression Model Plots
Plt_Regression_Residual = "regression-residual"
Plt_Regression_Prediction_Error = "regression-prediction-error"
Plt_Regression_Cook_Distance = "regression-cook-distance"
Plt_Regression_Mutual_Information = "regression-mutual-information"

# Regression Model Selection Plots
Plt_Regression_Cv_Score = "regression-cv-score"
Plt_Feature_Selection_RFE = "feature-selection-rfe"
Plt_Regression_Learning_Curve = "regression-learning-curve"

Plt_Features_TSNE = "features-tsne"
Plt_Shap_Summary = "shap-summary"
Plt_Scatter_Plot = "scatter-plot"

#############################
# Optuna plots
#############################

Plt_Optuna_Contour_Plt = "optuna-contour"
Plt_Optuna_Intermediate_Value = "optuna-intermediate-values"
Plt_Optuna_Optimization_History_Plt = "optuna-optimization-history"
Plt_Optuna_Parallel_Coordinates_Plt = "optuna-parallel-coordinates"
Plt_ParameterImportance = "optuna-parameter-importance"




#################################################################
# Assertion Name
#################################################################
Assertion_MultiDatasetSameNumberOfRows = "multi-dataset-same-number-of-rows"
Assertion_MultiDatasetOuterJoinEmpty = "multi-dataset-outer-join-empty"
Assertion_MultiDatasetOuterJoinNotEmpty = "multi-dataset-outer-join-not-empty"
Assertion_MultiDatasetInnerJoinEmpty = "multi-dataset-inner-join-empty"
Assertion_MultiDatasetInnerJoinNotEmpty = "multi-dataset-inner-join-not-empty"
Assertion_MultiDatasetLeftJoinEmpty = "multi-dataset-left-join-empty"
Assertion_MultiDatasetLeftJoinNotEmpty = "multi-dataset-left-join-not-empty"
Assertion_MultiDatasetRightJoinEmpty = "multi-dataset-right-join-empty"
Assertion_MultiDatasetRightJoinNotEmpty = "multi-dataset-right-join-not-empty"
Assertion_DatasetColumnsCountEqual = "dataset-columns-count-equal"
Assertion_DatasetColumnsNameInSet = "dataset-columns-in-set"
Assertion_DatasetColumnsInOrderedList = "dataset-columns-in-ordered-list"
Assertion_DatasetRowCountBetween = "dataset-row-count-between"
Assertion_DatasetNotEmpty = "dataset-dataset-not-empty"
Assertion_DatasetEmpty = "dataset-empty"
Assertion_MultiColumnCorr = "multi-column-corr"
Assertion_MultiColumnUnique = "multi-column-unique"
Assertion_MultiColumnLessThan = "multi-column-less-than"
Assertion_MultiColumnLessThanOrEqualTo = "multi-column-less-than-or-equal-to"
Assertion_MultiColumnUniqueValueRatio = "multi-column-unique-value-ratio"
Assertion_ColumnColumnExist = "column-exist"
Assertion_ColumnHaveValues = "column-have-values"
Assertion_ColumnHasNoValue = "column-has-no-values"
Assertion_ColumnHaveNulls = "column-value-have-nulls"
Assertion_ColumnHasNoNull = "column-value-has-no-nulls"
Assertion_ColumnOfType = "column-of-type"
Assertion_ColumnValuesInSet = "column-values-in-set"
Assertion_ColumnValuesIncreasing = "column-values-increasing"
Assertion_ColumnsValuesDecreasing = "column-values-decreasing"
Assertion_ColumnValueLengthBetween = "column-value-length-between"
Assertion_ColumnValueNameMatchPattern = "column-value-match-pattern"
Assertion_ColumnValueIsDate = "column-value-is-date"
Assertion_ColumnValueIsJson = "column-value-is-json"
Assertion_ColumnValueInDomain = "column-value-in-domain"
Assertion_ColumnUniqueValueCountBetween = "column-unique-value-count-between"
Assertion_ColumnOutlierValueUniqueBetween = "column-outlier-value-count-between"
Assertion_ColumnValidValueUniqueBetween = "column-valid-values-count-between"
Assertion_ColumnMismatchValueBetween = "column-mismatch-values-between"
Assertion_ColumnValueMinBetween = "column-value-min-between"
Assertion_ColumnValueLowerQuartileBetween = "column-value-lower-quartile-between"
Assertion_ColumnValueMedianBetween = "column-value-median-between"
Assertion_ColumnValueAvgBetween = "column-value-average-between"
Assertion_ColumnValueUpperQuartileBetween = "column-value-upper-quartile-between"
Assertion_ColumnValueMaxBetween = "column-value-max-between"
Assertion_ColumnValueStddevBetween = "column-value-stddev-between"
Assertion_ColumnValueChiSquarePValueBetween = "column-value-chi-square-p-value-between"
Assertion_ColumnValuePairCramersBetween = "column-value-pair-cramers-between"
Assertion_ColumnValueHasEntropy = "column-value-has-entropy"
Assertion_ColumnValueMinLength = "column-value-min-length"
Assertion_ColumnValueMaxLength = "column-value-max-length"
Assertion_ColumnValueNonNegative = "column-value-non-negative"
Assertion_ColumnValuePositive = "column-value-positive"
Assertion_FileSizeBetween = "file-size-between"
Assertion_FileExist = "file-exist"
Assertion_FileRegexMatchCountBetween = "file-regex-match-count-between"
Assertion_FileValidJson = "file-valid-json"
Assertion_FileValidCsv = "file-valid-csv"
# Pre defined type
Assertion_ColumnValuePhoneNumber = "column-value-phone-number"
Assertion_ColumnValueEmail = "column-value-email"
Assertion_ColumnValueCreditCard = "column-value-credit-card"
Assertion_ColumnValueBase64 = "column-value-base64"
Assertion_ColumnValueIsbn10 = "column-value-isbn10"
Assertion_ColumnValueIsbn13 = "column-value-isbn13"
Assertion_ColumnValueUUID3 = "column-value-uuid3"
Assertion_ColumnValueUUID4 = "column-value-uuid4"
Assertion_ColumnValueUUID5 = "column-value-uuid5"
Assertion_ColumnValueAscii = "column-value-ascii"
Assertion_ColumnValueLatitude = "column-value-latitude"
Assertion_ColumnValueLongitude = "column-value-longitude"
Assertion_ColumnValueSSN = "column-value-ssn"
Assertion_ColumnValueHostName = "column-value-hostname"

###########################################################
# Assertions on the model
###########################################################
Assertion_ModelAccuracyGreaterThan = "accuracy-greater-than"
Assertion_ModelAveragePrecisionGreaterThan = "model-average-precision-greater-than"
Assertion_ModelBalancedAccuracyGreaterThan = "model-balanced-accuracy-greater-than"
Assertion_ModelF1BinaryGreaterThan = "model-f1-greater-than"
Assertion_ModelF1MicroGreaterThan = "model-f1-micro-greater-than"
Assertion_ModelF1MacroGreaterThan = "model-f1-macro-greater-than"
Assertion_ModelF1WeightedGreaterThan = "model-f1-weighted-greater-than"
Assertion_ModelF1SamplesGreaterThan = "model-f1-samples-greater-than"
Assertion_ModelPrecisionBinaryGreaterThan = "model-precision-greater-than"
Assertion_ModelPrecisionMicroGreaterThan = "model-precision-micro-greater-than"
Assertion_ModelPrecisionMacroGreaterThan = "model-precision-macro-greater-than"
Assertion_ModelPrecisionWeightedGreaterThan = "model-precision-weighted-greater-than"
Assertion_ModelPrecisionSamplesGreaterThan = "model-precision-samples-greater-than"
Assertion_ModelRecallBinaryGreaterThan = "model-recall-greater-than"
Assertion_ModelRecallMacroGreaterThan = "model-recall-macro-greater-than"
Assertion_ModelRecallMicroGreaterThan = "model-recall-micro-greater-than"
Assertion_ModelRecallWeightedGreaterThan = "model-recall-weighted-greater-than"
Assertion_ModelRecallSamplesGreaterThan = "model-recall-samples-greater-than"
Assertion_ModelLogLossLessThan = "model-log-loss-less-than"
Assertion_ModelRocAucGreaterThan = "model-auc-greater-than"
Assertion_ModelRocAucMicroGreaterThan = "model-auc-micro-greater-than"
Assertion_ModelRocAucMacroGreaterThan = "model-auc-macro-greater-than"
Assertion_ModelRocAucWeightedGreaterThan = "model-auc-weighted-greater-than"
Assertion_ModelPRRocAucGreaterThan = "model-pr-auc-greater-than"
Assertion_ModelPRRocAucMicroGreaterThan = "model-pr-auc-micro-greater-than"
Assertion_ModelPRRocAucMacroGreaterThan = "model-pr-auc-macro-greater-than"
Assertion_ModelPRRocAucWeightedGreaterThan = "model-pr-auc-weighted-greater-than"
Assertion_ModelZeroOneGreaterThan = "model-zero-one-greater-than"
Assertion_ModelHammingLossLessThan = "model-hamming-loss-less-than"
Assertion_ModelHingeLossLessThan = "model-hinge-loss-less-than"
Assertion_ModelJacquardScoreLessThan = "model-jacquard-loss-less-than"
Assertion_ModelMatthewsCorrCoefGreaterThan = "model-mcc-greater-than"
Assertion_ModelFpGreaterThan = "model-fp-"
Assertion_ModelFnGreaterThan = "model-fn"
Assertion_ModelTnGreaterThan = "model-tn-greater-than"
Assertion_ModelTpGreaterThan = "model-tp-greater-than"
Assertion_ModelTprGreaterThan = "model-tpr-greater-than"
Assertion_ModelFprGreaterThan = "model-fpr-greater-than"
Assertion_ModelTnrGreaterThan = "model-tnr-greater-than"
Assertion_ModelMCCGreaterThan = "model-matthews-corr-coef-greater-than"

Assertion_ModelExplainedVarianceLessThan = "model-explained-variance-less-than"
Assertion_ModelMaxErrorLessThan = "model-max-error-less-than"
Assertion_ModelMAELessThan = "model-mae-less-than"
Assertion_ModelMSELessThan = "model-mse-less-than"
Assertion_ModelMSLELessThan = "model-msle-less-than"
Assertion_ModelRMSELessThan = "model-rmse-less-than"
Assertion_ModelRMSLELessThan = "model-rmsle-less-than"
Assertion_ModelMedianAbsoluteErrorLessThan = "model-median-absolute-error-less-than"
Assertion_ModelR2LessThan = "model-r2-less-than"
Assertion_ModelAdjR2LessThan = "model-adj-r2-less-than"
Assertion_ModelMeanPoissonDevianceLessThan = "model-mean_poisson_deviance-less-than"
Assertion_ModelMeanGammaDevianceLessThan = "model-mean-gamma-deviance-less-than"
Assertion_ModelMeanTweedieDevianceLessThan = "model-mean-tweedie-deviance-less-than"

Assertion_ModelMAPELessThan = "model-mape-less-than"
Assertion_ModelMAZELessThan = "model-maze-less-than"
Assertion_ModelMDAPELessThan = "model-mdape-less-than"
Assertion_ModelSMAPELessThan = "model-smape-less-than"

Assertion_ModelAdjustedMutualInfoScoreBetween = "model-adjusted-mutual-info-score-between"
Assertion_ModelAdjustedRandScoreBetween = "model-adjusted-rand-score-between"
Assertion_ModelCompletenessScoreBetween = "model-completeness-score-between"
Assertion_ModelFowlkesMallowsScoreBetween = "model-fowlkes-mallows-score-between"
Assertion_ModelHomogeneityScoreBetween = "model-homogeneity-score-between"
Assertion_ModelMutualInfoScoreBetween = "model-mutual-info-score-between"
Assertion_ModelNormalizedMutualInfoScoreBetween = "model-normalized-mutual-info-score-between"
Assertion_ModelVMeasureScoreBetween = "model-v-measure-score-between"

Assertion_ServingP50LatencyLowerThan = "serving-p50-latency-lower-than"
Assertion_ServingP95LatencyLowerThan = "serving-p95-latency-lower-than"
Assertion_ServingP99LatencyLowerThan = "serving-p99-latency-lower-than"
Assertion_ServingReqSecBetween = "req-per-sec-between"
Assertion_CpuBetween = "cpu-between"
Assertion_GpuBetween = "gpu-between"
Assertion_MemBetween = "mem-between"
Assertion_GpuMemBetween = "gpu-mem-between"

Assertion_PredictorUncertainPredictionPercent = "uncertain-prediction-percent-between"

Assertion_ModelDrift_Two_Sample_KSTest_LessThan = "model-two-sample-ks-test-less-than"
Assertion_ModelDrift_Chi_Squared_LessThan = "model-chi-squared-test-less-than"
Assertion_ModelDrift_Proportion_Diff_Test_LessThan = "model-proportion-difference-test-less-than"
Assertion_ModelDrift_WassersteinDistance_LessThan = "model-wasserstein-distance-less-than"
Assertion_ModelDrift_JS_Distance_LessThan = "model-js-distance-less"
Assertion_ModelDrift_PSI_LessThan = "model-psi-less-than"
Assertion_ModelDrift_KLDivergence_LessThan = "model-kl-divergence-less-than"

################################################################
# Shap
################################################################
ShapType_Permutation = "permutation"
ShapType_Partition = "partition"
ShapType_Tree = "tree"
ShapType_Kernel = "kernel"
ShapType_Sampling = "sampling"
ShapType_Linear = "linear"
ShapType_Deep = "deep"
ShapType_Gradient = "gradient"
ShapType_Auto = "auto"
ShapType_None = "none"

#################################################################
# Known domain
#################################################################

Regex_Phonenumber = "(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})"
Regex_Email = "^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$"
Regex_AlphaRegexString = "^[a-zA-Z]+$"
Regex_AphaNumericRegexString = "^[a-zA-Z0-9]+$"
Regex_AlphaUnicodeRegexString = "^[\\p{L}]+$"
Regex_AlphaUnicodeNumericRegexString = "^[\\p{L}\\p{N}]+$"
Regex_NumericRegexString = "^[-+]?[0-9]+(?:\\.[0-9]+)?$"
Regex_NumberRegexString = "^[0-9]+$"
Regex_HexadecimalRegexString = "^[0-9a-fA-F]+$"
Regex_HexcolorRegexString = "^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
Regex_RgbRegexString = "^rgb\\(\\s*(?:(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])|(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%)\\s*\\)$"
Regex_RgbaRegexString = "^rgba\\(\\s*(?:(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])|(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%)\\s*,\\s*(?:(?:0.[1-9]*)|[01])\\s*\\)$"
Regex_HslRegexString = "^hsl\\(\\s*(?:0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d|360)\\s*,\\s*(?:(?:0|[1-9]\\d?|100)%)\\s*,\\s*(?:(?:0|[1-9]\\d?|100)%)\\s*\\)$"
Regex_HslaRegexString = "^hsla\\(\\s*(?:0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d|360)\\s*,\\s*(?:(?:0|[1-9]\\d?|100)%)\\s*,\\s*(?:(?:0|[1-9]\\d?|100)%)\\s*,\\s*(?:(?:0.[1-9]*)|[01])\\s*\\)$"
Regex_EmailRegexString = "^(?:(?:(?:(?:[a-zA-Z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])+(?:\\.([a-zA-Z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])+)*)|(?:(?:\\x22)(?:(?:(?:(?:\\x20|\\x09)*(?:\\x0d\\x0a))?(?:\\x20|\\x09)+)?(?:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])|(?:(?:[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}]))))*(?:(?:(?:\\x20|\\x09)*(?:\\x0d\\x0a))?(\\x20|\\x09)+)?(?:\\x22))))@(?:(?:(?:[a-zA-Z]|\\d|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])|(?:(?:[a-zA-Z]|\\d|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])(?:[a-zA-Z]|\\d|-|\\.|~|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])*(?:[a-zA-Z]|\\d|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])))\\.)+(?:(?:[a-zA-Z]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])|(?:(?:[a-zA-Z]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])(?:[a-zA-Z]|\\d|-|\\.|~|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])*(?:[a-zA-Z]|[\\x{00A0}-\\x{D7FF}\\x{F900}-\\x{FDCF}\\x{FDF0}-\\x{FFEF}])))\\.?$"
Regex_E164RegexString = "^\\+[1-9]?[0-9]{7,14}$"
Regex_Base64RegexString = "^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=|[A-Za-z0-9+\\/]{4})$"
Regex_Base64URLRegexString = (
    "^(?:[A-Za-z0-9-_]{4})*(?:[A-Za-z0-9-_]{2}==|[A-Za-z0-9-_]{3}=|[A-Za-z0-9-_]{4})$"
)
Regex_ISBN10RegexString = "^(?:[0-9]{9}X|[0-9]{10})$"
Regex_ISBN13RegexString = "^(?:(?:97(?:8|9))[0-9]{10})$"
Regex_UUID3RegexString = (
    "^[0-9a-f]{8}-[0-9a-f]{4}-3[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$"
)
Regex_UUID4RegexString = (
    "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
)
Regex_UUID5RegexString = (
    "^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
)
Regex_UUIDRegexString = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"
Regex_UUID3RFC4122RegexString = (
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-3[0-9a-fA-F]{3}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
)
Regex_UUID4RFC4122RegexString = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
Regex_UUID5RFC4122RegexString = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-5[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
Regex_UUIDRFC4122RegexString = (
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
)
Regex_ASCIIRegexString = "^[\x00-\x7F]*$"
Regex_PrintableASCIIRegexString = "^[\x20-\x7E]*$"
Regex_MultibyteRegexString = "[^\x00-\x7F]"
Regex_DataURIRegexString = "^data:.+\\/(.+);base64$"
Regex_LatitudeRegexString = "^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?)$"
Regex_LongitudeRegexString = "^[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$"
Regex_SSNRegexString = "^[0-9]{3}[ -]?(0[1-9]|[1-9][0-9])[ -]?([1-9][0-9]{3}|[0-9][1-9][0-9]{2}|[0-9]{2}[1-9][0-9]|[0-9]{3}[1-9])$"
Regex_HostnameRegexStringRFC952 = "^[a-zA-Z][a-zA-Z0-9\-\.]+[a-zA-Z0-9]$"
Regex_HostnameRegexStringRFC1123 = "^[a-zA-Z0-9][a-zA-Z0-9\-\.]+[a-zA-Z0-9]$"
Regex_BtcAddressRegexString = "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$"
Regex_BtcAddressUpperRegexStringBech32 = "^BC1[02-9AC-HJ-NP-Z]{7,76}$"
Regex_BtcAddressLowerRegexStringBech32 = "^bc1[02-9ac-hj-np-z]{7,76}$"
Regex_EthAddressRegexString = "^0x[0-9a-fA-F]{40}$"
Regex_EthAddressUpperRegexString = "^0x[0-9A-F]{40}$"
Regex_EthAddressLowerRegexString = "^0x[0-9a-f]{40}$"
Regex_URLEncodedRegexString = "(%[A-Fa-f0-9]{2})"
Regex_HTMLEncodedRegexString = "&#[x]?([0-9a-fA-F]{2})|(&gt)|(&lt)|(&quot)|(&amp)+[;]?"
Regex_HTMLRegexString = "<[/]?([a-zA-Z]+).*?>"

# Sampler
Sampler_Random = "random"
Sampler_Grid = "grid"
Sampler_TPE = "tpe"
Sampler_Auto = "auto"

# Feature importance
MAX_FEATURE_IMPORTANCE = 5

##########################################################################
# Type of classifier
##########################################################################
DataSplitMethod_RandomStratified = "random-stratified"
DataSplitMethod_Random = "random"
DataSplitMethod_Column = "split-column"
DataSplitMethod_Time = "time"

###########################################################################
# Header
###########################################################################

SamplingType_Header = "header"
SamplingType_Random = "random"
SamplingType_Filter = "filter"
SamplingType_Anomaly = "anomaly"
SamplingType_Stratified = "stratified"
