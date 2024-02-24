from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DatasetProfile(_message.Message):
    __slots__ = ("cols", "rows", "filesize", "imbalance", "plots", "columns", "table", "hash", "groups", "ts")
    COLS_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    FILESIZE_FIELD_NUMBER: _ClassVar[int]
    IMBALANCE_FIELD_NUMBER: _ClassVar[int]
    PLOTS_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    HASH_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    TS_FIELD_NUMBER: _ClassVar[int]
    cols: int
    rows: int
    filesize: int
    imbalance: bool
    plots: _containers.RepeatedCompositeFieldContainer[Plot]
    columns: _containers.RepeatedCompositeFieldContainer[_generated_pb2.FeatureStatistics]
    table: TableView
    hash: str
    groups: TableView
    ts: TimeSeriesProfile
    def __init__(self, cols: _Optional[int] = ..., rows: _Optional[int] = ..., filesize: _Optional[int] = ..., imbalance: bool = ..., plots: _Optional[_Iterable[_Union[Plot, _Mapping]]] = ..., columns: _Optional[_Iterable[_Union[_generated_pb2.FeatureStatistics, _Mapping]]] = ..., table: _Optional[_Union[TableView, _Mapping]] = ..., hash: _Optional[str] = ..., groups: _Optional[_Union[TableView, _Mapping]] = ..., ts: _Optional[_Union[TimeSeriesProfile, _Mapping]] = ...) -> None: ...

class ModelProfile(_message.Message):
    __slots__ = ("name", "plots", "importance", "rocauc", "pr", "multiclassRocAuc", "multiclassPR", "algs", "features", "groups")
    class ImportanceEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    PLOTS_FIELD_NUMBER: _ClassVar[int]
    IMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    ROCAUC_FIELD_NUMBER: _ClassVar[int]
    PR_FIELD_NUMBER: _ClassVar[int]
    MULTICLASSROCAUC_FIELD_NUMBER: _ClassVar[int]
    MULTICLASSPR_FIELD_NUMBER: _ClassVar[int]
    ALGS_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    name: str
    plots: _containers.RepeatedCompositeFieldContainer[Plot]
    importance: _containers.ScalarMap[str, float]
    rocauc: ROCCurve
    pr: PrecisionRecallCurve
    multiclassRocAuc: _containers.RepeatedCompositeFieldContainer[ROCCurve]
    multiclassPR: _containers.RepeatedCompositeFieldContainer[PrecisionRecallCurve]
    algs: _containers.RepeatedCompositeFieldContainer[ForecastingAlgProfile]
    features: TableView
    groups: TableView
    def __init__(self, name: _Optional[str] = ..., plots: _Optional[_Iterable[_Union[Plot, _Mapping]]] = ..., importance: _Optional[_Mapping[str, float]] = ..., rocauc: _Optional[_Union[ROCCurve, _Mapping]] = ..., pr: _Optional[_Union[PrecisionRecallCurve, _Mapping]] = ..., multiclassRocAuc: _Optional[_Iterable[_Union[ROCCurve, _Mapping]]] = ..., multiclassPR: _Optional[_Iterable[_Union[PrecisionRecallCurve, _Mapping]]] = ..., algs: _Optional[_Iterable[_Union[ForecastingAlgProfile, _Mapping]]] = ..., features: _Optional[_Union[TableView, _Mapping]] = ..., groups: _Optional[_Union[TableView, _Mapping]] = ...) -> None: ...

class ForecastingAlgProfile(_message.Message):
    __slots__ = ("algorithm", "series", "timeStat", "valueStat", "cv", "forecast", "metrics", "changePoints", "plots")
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    SERIES_FIELD_NUMBER: _ClassVar[int]
    TIMESTAT_FIELD_NUMBER: _ClassVar[int]
    VALUESTAT_FIELD_NUMBER: _ClassVar[int]
    CV_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    CHANGEPOINTS_FIELD_NUMBER: _ClassVar[int]
    PLOTS_FIELD_NUMBER: _ClassVar[int]
    algorithm: str
    series: TableView
    timeStat: TimeStat
    valueStat: TableView
    cv: TableView
    forecast: TableView
    metrics: TableView
    changePoints: TableView
    plots: _containers.RepeatedCompositeFieldContainer[Plot]
    def __init__(self, algorithm: _Optional[str] = ..., series: _Optional[_Union[TableView, _Mapping]] = ..., timeStat: _Optional[_Union[TimeStat, _Mapping]] = ..., valueStat: _Optional[_Union[TableView, _Mapping]] = ..., cv: _Optional[_Union[TableView, _Mapping]] = ..., forecast: _Optional[_Union[TableView, _Mapping]] = ..., metrics: _Optional[_Union[TableView, _Mapping]] = ..., changePoints: _Optional[_Union[TableView, _Mapping]] = ..., plots: _Optional[_Iterable[_Union[Plot, _Mapping]]] = ...) -> None: ...

class TimeStat(_message.Message):
    __slots__ = ("gaps", "added_timepoints", "dropped_timepoints", "data_points", "mean_increments_secs", "min_timestamp", "max_timestamp")
    GAPS_FIELD_NUMBER: _ClassVar[int]
    ADDED_TIMEPOINTS_FIELD_NUMBER: _ClassVar[int]
    DROPPED_TIMEPOINTS_FIELD_NUMBER: _ClassVar[int]
    DATA_POINTS_FIELD_NUMBER: _ClassVar[int]
    MEAN_INCREMENTS_SECS_FIELD_NUMBER: _ClassVar[int]
    MIN_TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    MAX_TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    gaps: TableView
    added_timepoints: int
    dropped_timepoints: int
    data_points: int
    mean_increments_secs: float
    min_timestamp: _timestamp_pb2.Timestamp
    max_timestamp: _timestamp_pb2.Timestamp
    def __init__(self, gaps: _Optional[_Union[TableView, _Mapping]] = ..., added_timepoints: _Optional[int] = ..., dropped_timepoints: _Optional[int] = ..., data_points: _Optional[int] = ..., mean_increments_secs: _Optional[float] = ..., min_timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., max_timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class ROCCurve(_message.Message):
    __slots__ = ("classname", "classid", "fpr", "tpr", "thresholds")
    CLASSNAME_FIELD_NUMBER: _ClassVar[int]
    CLASSID_FIELD_NUMBER: _ClassVar[int]
    FPR_FIELD_NUMBER: _ClassVar[int]
    TPR_FIELD_NUMBER: _ClassVar[int]
    THRESHOLDS_FIELD_NUMBER: _ClassVar[int]
    classname: str
    classid: int
    fpr: _containers.RepeatedScalarFieldContainer[float]
    tpr: _containers.RepeatedScalarFieldContainer[float]
    thresholds: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, classname: _Optional[str] = ..., classid: _Optional[int] = ..., fpr: _Optional[_Iterable[float]] = ..., tpr: _Optional[_Iterable[float]] = ..., thresholds: _Optional[_Iterable[float]] = ...) -> None: ...

class PrecisionRecallCurve(_message.Message):
    __slots__ = ("classname", "classid", "precision", "recall", "thresholds")
    CLASSNAME_FIELD_NUMBER: _ClassVar[int]
    CLASSID_FIELD_NUMBER: _ClassVar[int]
    PRECISION_FIELD_NUMBER: _ClassVar[int]
    RECALL_FIELD_NUMBER: _ClassVar[int]
    THRESHOLDS_FIELD_NUMBER: _ClassVar[int]
    classname: str
    classid: int
    precision: _containers.RepeatedScalarFieldContainer[float]
    recall: _containers.RepeatedScalarFieldContainer[float]
    thresholds: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, classname: _Optional[str] = ..., classid: _Optional[int] = ..., precision: _Optional[_Iterable[float]] = ..., recall: _Optional[_Iterable[float]] = ..., thresholds: _Optional[_Iterable[float]] = ...) -> None: ...

class TimeSeriesProfile(_message.Message):
    __slots__ = ("kpss", "adf", "zivot", "kendall", "dw", "key", "series", "valueStat", "featuresView", "features")
    class FeaturesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    KPSS_FIELD_NUMBER: _ClassVar[int]
    ADF_FIELD_NUMBER: _ClassVar[int]
    ZIVOT_FIELD_NUMBER: _ClassVar[int]
    KENDALL_FIELD_NUMBER: _ClassVar[int]
    DW_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    SERIES_FIELD_NUMBER: _ClassVar[int]
    VALUESTAT_FIELD_NUMBER: _ClassVar[int]
    FEATURESVIEW_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    kpss: KPSS
    adf: ADF
    zivot: ZivotAndrew
    kendall: MannKendall
    dw: DurbinWatson
    key: str
    series: TableView
    valueStat: TableView
    featuresView: TableView
    features: _containers.ScalarMap[str, float]
    def __init__(self, kpss: _Optional[_Union[KPSS, _Mapping]] = ..., adf: _Optional[_Union[ADF, _Mapping]] = ..., zivot: _Optional[_Union[ZivotAndrew, _Mapping]] = ..., kendall: _Optional[_Union[MannKendall, _Mapping]] = ..., dw: _Optional[_Union[DurbinWatson, _Mapping]] = ..., key: _Optional[str] = ..., series: _Optional[_Union[TableView, _Mapping]] = ..., valueStat: _Optional[_Union[TableView, _Mapping]] = ..., featuresView: _Optional[_Union[TableView, _Mapping]] = ..., features: _Optional[_Mapping[str, float]] = ...) -> None: ...

class KPSS(_message.Message):
    __slots__ = ("kpss_stat", "pvalue", "lags", "crit")
    class CritEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    KPSS_STAT_FIELD_NUMBER: _ClassVar[int]
    PVALUE_FIELD_NUMBER: _ClassVar[int]
    LAGS_FIELD_NUMBER: _ClassVar[int]
    CRIT_FIELD_NUMBER: _ClassVar[int]
    kpss_stat: float
    pvalue: float
    lags: float
    crit: _containers.ScalarMap[str, float]
    def __init__(self, kpss_stat: _Optional[float] = ..., pvalue: _Optional[float] = ..., lags: _Optional[float] = ..., crit: _Optional[_Mapping[str, float]] = ...) -> None: ...

class ADF(_message.Message):
    __slots__ = ("adf", "pvalue", "usedlag", "nobs", "crit")
    class CritEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    ADF_FIELD_NUMBER: _ClassVar[int]
    PVALUE_FIELD_NUMBER: _ClassVar[int]
    USEDLAG_FIELD_NUMBER: _ClassVar[int]
    NOBS_FIELD_NUMBER: _ClassVar[int]
    CRIT_FIELD_NUMBER: _ClassVar[int]
    adf: float
    pvalue: float
    usedlag: int
    nobs: int
    crit: _containers.ScalarMap[str, float]
    def __init__(self, adf: _Optional[float] = ..., pvalue: _Optional[float] = ..., usedlag: _Optional[int] = ..., nobs: _Optional[int] = ..., crit: _Optional[_Mapping[str, float]] = ...) -> None: ...

class ZivotAndrew(_message.Message):
    __slots__ = ("zastat", "pvalue", "crit", "baselag", "bpidx")
    class CritEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    ZASTAT_FIELD_NUMBER: _ClassVar[int]
    PVALUE_FIELD_NUMBER: _ClassVar[int]
    CRIT_FIELD_NUMBER: _ClassVar[int]
    BASELAG_FIELD_NUMBER: _ClassVar[int]
    BPIDX_FIELD_NUMBER: _ClassVar[int]
    zastat: float
    pvalue: float
    crit: _containers.ScalarMap[str, float]
    baselag: int
    bpidx: int
    def __init__(self, zastat: _Optional[float] = ..., pvalue: _Optional[float] = ..., crit: _Optional[_Mapping[str, float]] = ..., baselag: _Optional[int] = ..., bpidx: _Optional[int] = ...) -> None: ...

class MannKendall(_message.Message):
    __slots__ = ("trend", "h", "p", "z", "tau", "s", "var_s", "slope", "intercept")
    TREND_FIELD_NUMBER: _ClassVar[int]
    H_FIELD_NUMBER: _ClassVar[int]
    P_FIELD_NUMBER: _ClassVar[int]
    Z_FIELD_NUMBER: _ClassVar[int]
    TAU_FIELD_NUMBER: _ClassVar[int]
    S_FIELD_NUMBER: _ClassVar[int]
    VAR_S_FIELD_NUMBER: _ClassVar[int]
    SLOPE_FIELD_NUMBER: _ClassVar[int]
    INTERCEPT_FIELD_NUMBER: _ClassVar[int]
    trend: str
    h: float
    p: float
    z: float
    tau: float
    s: float
    var_s: float
    slope: float
    intercept: float
    def __init__(self, trend: _Optional[str] = ..., h: _Optional[float] = ..., p: _Optional[float] = ..., z: _Optional[float] = ..., tau: _Optional[float] = ..., s: _Optional[float] = ..., var_s: _Optional[float] = ..., slope: _Optional[float] = ..., intercept: _Optional[float] = ...) -> None: ...

class DurbinWatson(_message.Message):
    __slots__ = ("dw",)
    DW_FIELD_NUMBER: _ClassVar[int]
    dw: float
    def __init__(self, dw: _Optional[float] = ...) -> None: ...

class ForecastProfile(_message.Message):
    __slots__ = ("name", "plots")
    NAME_FIELD_NUMBER: _ClassVar[int]
    PLOTS_FIELD_NUMBER: _ClassVar[int]
    name: str
    plots: _containers.RepeatedCompositeFieldContainer[Plot]
    def __init__(self, name: _Optional[str] = ..., plots: _Optional[_Iterable[_Union[Plot, _Mapping]]] = ...) -> None: ...

class StudyProfile(_message.Message):
    __slots__ = ("plots", "models", "trainingHash", "testingHash", "validationHash")
    PLOTS_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    TRAININGHASH_FIELD_NUMBER: _ClassVar[int]
    TESTINGHASH_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONHASH_FIELD_NUMBER: _ClassVar[int]
    plots: _containers.RepeatedCompositeFieldContainer[Plot]
    models: _containers.RepeatedCompositeFieldContainer[ModelProfile]
    trainingHash: str
    testingHash: str
    validationHash: str
    def __init__(self, plots: _Optional[_Iterable[_Union[Plot, _Mapping]]] = ..., models: _Optional[_Iterable[_Union[ModelProfile, _Mapping]]] = ..., trainingHash: _Optional[str] = ..., testingHash: _Optional[str] = ..., validationHash: _Optional[str] = ...) -> None: ...

class Plot(_message.Message):
    __slots__ = ("name", "title", "img", "fname", "url")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMG_FIELD_NUMBER: _ClassVar[int]
    FNAME_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    name: str
    title: str
    img: bytes
    fname: str
    url: str
    def __init__(self, name: _Optional[str] = ..., title: _Optional[str] = ..., img: _Optional[bytes] = ..., fname: _Optional[str] = ..., url: _Optional[str] = ...) -> None: ...

class Histogram(_message.Message):
    __slots__ = ("values", "bins", "categories")
    VALUES_FIELD_NUMBER: _ClassVar[int]
    BINS_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    bins: _containers.RepeatedScalarFieldContainer[float]
    categories: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[float]] = ..., bins: _Optional[_Iterable[float]] = ..., categories: _Optional[_Iterable[str]] = ...) -> None: ...

class NamespaceInfo(_message.Message):
    __slots__ = ("type", "Name", "accounts", "buckets", "labs", "servingsites", "datasets", "datasources", "studies", "models")
    class NamespaceType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        TENANT: _ClassVar[NamespaceInfo.NamespaceType]
        DATAPRODUCT: _ClassVar[NamespaceInfo.NamespaceType]
        LAB: _ClassVar[NamespaceInfo.NamespaceType]
        SERVINGSITE: _ClassVar[NamespaceInfo.NamespaceType]
        MODELASYSTEM: _ClassVar[NamespaceInfo.NamespaceType]
        MODELACATALOG: _ClassVar[NamespaceInfo.NamespaceType]
    TENANT: NamespaceInfo.NamespaceType
    DATAPRODUCT: NamespaceInfo.NamespaceType
    LAB: NamespaceInfo.NamespaceType
    SERVINGSITE: NamespaceInfo.NamespaceType
    MODELASYSTEM: NamespaceInfo.NamespaceType
    MODELACATALOG: NamespaceInfo.NamespaceType
    TYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ACCOUNTS_FIELD_NUMBER: _ClassVar[int]
    BUCKETS_FIELD_NUMBER: _ClassVar[int]
    LABS_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITES_FIELD_NUMBER: _ClassVar[int]
    DATASETS_FIELD_NUMBER: _ClassVar[int]
    DATASOURCES_FIELD_NUMBER: _ClassVar[int]
    STUDIES_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    type: NamespaceInfo.NamespaceType
    Name: str
    accounts: int
    buckets: int
    labs: int
    servingsites: int
    datasets: int
    datasources: int
    studies: int
    models: int
    def __init__(self, type: _Optional[_Union[NamespaceInfo.NamespaceType, str]] = ..., Name: _Optional[str] = ..., accounts: _Optional[int] = ..., buckets: _Optional[int] = ..., labs: _Optional[int] = ..., servingsites: _Optional[int] = ..., datasets: _Optional[int] = ..., datasources: _Optional[int] = ..., studies: _Optional[int] = ..., models: _Optional[int] = ...) -> None: ...

class TableView(_message.Message):
    __slots__ = ("cols", "rows", "profiles")
    COLS_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    cols: _containers.RepeatedScalarFieldContainer[str]
    rows: _containers.RepeatedCompositeFieldContainer[TableViewRow]
    profiles: _containers.RepeatedCompositeFieldContainer[_generated_pb2.FeatureStatistics]
    def __init__(self, cols: _Optional[_Iterable[str]] = ..., rows: _Optional[_Iterable[_Union[TableViewRow, _Mapping]]] = ..., profiles: _Optional[_Iterable[_Union[_generated_pb2.FeatureStatistics, _Mapping]]] = ...) -> None: ...

class TableViewRow(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[str]] = ...) -> None: ...
