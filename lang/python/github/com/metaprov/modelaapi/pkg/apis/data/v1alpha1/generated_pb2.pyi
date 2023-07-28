from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ApprovalReviewStatus(_message.Message):
    __slots__ = ["reviewer", "result", "approvedAt", "notes"]
    REVIEWER_FIELD_NUMBER: _ClassVar[int]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    APPROVEDAT_FIELD_NUMBER: _ClassVar[int]
    NOTES_FIELD_NUMBER: _ClassVar[int]
    reviewer: str
    result: str
    approvedAt: _generated_pb2_1_1.Time
    notes: str
    def __init__(self, reviewer: _Optional[str] = ..., result: _Optional[str] = ..., approvedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., notes: _Optional[str] = ...) -> None: ...

class ApprovalSpec(_message.Message):
    __slots__ = ["enabled", "decisionType", "members"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    DECISIONTYPE_FIELD_NUMBER: _ClassVar[int]
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    decisionType: str
    members: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, enabled: bool = ..., decisionType: _Optional[str] = ..., members: _Optional[_Iterable[str]] = ...) -> None: ...

class ApprovalStatus(_message.Message):
    __slots__ = ["status", "reviews"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    REVIEWS_FIELD_NUMBER: _ClassVar[int]
    status: str
    reviews: _containers.RepeatedCompositeFieldContainer[ApprovalReviewStatus]
    def __init__(self, status: _Optional[str] = ..., reviews: _Optional[_Iterable[_Union[ApprovalReviewStatus, _Mapping]]] = ...) -> None: ...

class BarChartSpec(_message.Message):
    __slots__ = ["datasetName", "x", "y", "legend", "sort"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    LEGEND_FIELD_NUMBER: _ClassVar[int]
    SORT_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    x: str
    y: str
    legend: bool
    sort: bool
    def __init__(self, datasetName: _Optional[str] = ..., x: _Optional[str] = ..., y: _Optional[str] = ..., legend: bool = ..., sort: bool = ...) -> None: ...

class Column(_message.Message):
    __slots__ = ["name", "displayName", "datatype", "format", "description", "ignore", "target", "nullable", "pk", "fk", "multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "required", "example", "externalDocs", "enum", "maxItems", "minItems", "uniqueItems", "pii", "phi", "protected", "defaultValueNum", "log", "mu", "sigma", "skewThreshold", "driftThreshold", "key", "fold", "weight", "reserved", "imputation", "scaling", "generated", "formula", "id", "step", "loc", "datetimeFormat", "timeseries", "regressor", "laggedRegressor", "timeIndex", "aggr", "window"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DISPLAYNAME_FIELD_NUMBER: _ClassVar[int]
    DATATYPE_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    IGNORE_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    NULLABLE_FIELD_NUMBER: _ClassVar[int]
    PK_FIELD_NUMBER: _ClassVar[int]
    FK_FIELD_NUMBER: _ClassVar[int]
    MULTIPLEOF_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    EXCLUSIVEMAXIMUM_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_FIELD_NUMBER: _ClassVar[int]
    EXCLUSIVEMINIMUM_FIELD_NUMBER: _ClassVar[int]
    MAXLENGTH_FIELD_NUMBER: _ClassVar[int]
    MINLENGTH_FIELD_NUMBER: _ClassVar[int]
    PATTERN_FIELD_NUMBER: _ClassVar[int]
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    EXAMPLE_FIELD_NUMBER: _ClassVar[int]
    EXTERNALDOCS_FIELD_NUMBER: _ClassVar[int]
    ENUM_FIELD_NUMBER: _ClassVar[int]
    MAXITEMS_FIELD_NUMBER: _ClassVar[int]
    MINITEMS_FIELD_NUMBER: _ClassVar[int]
    UNIQUEITEMS_FIELD_NUMBER: _ClassVar[int]
    PII_FIELD_NUMBER: _ClassVar[int]
    PHI_FIELD_NUMBER: _ClassVar[int]
    PROTECTED_FIELD_NUMBER: _ClassVar[int]
    DEFAULTVALUENUM_FIELD_NUMBER: _ClassVar[int]
    LOG_FIELD_NUMBER: _ClassVar[int]
    MU_FIELD_NUMBER: _ClassVar[int]
    SIGMA_FIELD_NUMBER: _ClassVar[int]
    SKEWTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    DRIFTTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    FOLD_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_FIELD_NUMBER: _ClassVar[int]
    RESERVED_FIELD_NUMBER: _ClassVar[int]
    IMPUTATION_FIELD_NUMBER: _ClassVar[int]
    SCALING_FIELD_NUMBER: _ClassVar[int]
    GENERATED_FIELD_NUMBER: _ClassVar[int]
    FORMULA_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    STEP_FIELD_NUMBER: _ClassVar[int]
    LOC_FIELD_NUMBER: _ClassVar[int]
    DATETIMEFORMAT_FIELD_NUMBER: _ClassVar[int]
    TIMESERIES_FIELD_NUMBER: _ClassVar[int]
    REGRESSOR_FIELD_NUMBER: _ClassVar[int]
    LAGGEDREGRESSOR_FIELD_NUMBER: _ClassVar[int]
    TIMEINDEX_FIELD_NUMBER: _ClassVar[int]
    AGGR_FIELD_NUMBER: _ClassVar[int]
    WINDOW_FIELD_NUMBER: _ClassVar[int]
    name: str
    displayName: str
    datatype: str
    format: str
    description: str
    ignore: bool
    target: bool
    nullable: bool
    pk: bool
    fk: bool
    multipleOf: int
    maximum: float
    exclusiveMaximum: bool
    minimum: float
    exclusiveMinimum: bool
    maxLength: int
    minLength: int
    pattern: str
    required: bool
    example: str
    externalDocs: str
    enum: _containers.RepeatedScalarFieldContainer[str]
    maxItems: int
    minItems: int
    uniqueItems: bool
    pii: bool
    phi: bool
    protected: bool
    defaultValueNum: float
    log: bool
    mu: float
    sigma: float
    skewThreshold: float
    driftThreshold: float
    key: bool
    fold: bool
    weight: bool
    reserved: bool
    imputation: str
    scaling: str
    generated: bool
    formula: str
    id: bool
    step: float
    loc: int
    datetimeFormat: str
    timeseries: bool
    regressor: bool
    laggedRegressor: bool
    timeIndex: bool
    aggr: str
    window: int
    def __init__(self, name: _Optional[str] = ..., displayName: _Optional[str] = ..., datatype: _Optional[str] = ..., format: _Optional[str] = ..., description: _Optional[str] = ..., ignore: bool = ..., target: bool = ..., nullable: bool = ..., pk: bool = ..., fk: bool = ..., multipleOf: _Optional[int] = ..., maximum: _Optional[float] = ..., exclusiveMaximum: bool = ..., minimum: _Optional[float] = ..., exclusiveMinimum: bool = ..., maxLength: _Optional[int] = ..., minLength: _Optional[int] = ..., pattern: _Optional[str] = ..., required: bool = ..., example: _Optional[str] = ..., externalDocs: _Optional[str] = ..., enum: _Optional[_Iterable[str]] = ..., maxItems: _Optional[int] = ..., minItems: _Optional[int] = ..., uniqueItems: bool = ..., pii: bool = ..., phi: bool = ..., protected: bool = ..., defaultValueNum: _Optional[float] = ..., log: bool = ..., mu: _Optional[float] = ..., sigma: _Optional[float] = ..., skewThreshold: _Optional[float] = ..., driftThreshold: _Optional[float] = ..., key: bool = ..., fold: bool = ..., weight: bool = ..., reserved: bool = ..., imputation: _Optional[str] = ..., scaling: _Optional[str] = ..., generated: bool = ..., formula: _Optional[str] = ..., id: bool = ..., step: _Optional[float] = ..., loc: _Optional[int] = ..., datetimeFormat: _Optional[str] = ..., timeseries: bool = ..., regressor: bool = ..., laggedRegressor: bool = ..., timeIndex: bool = ..., aggr: _Optional[str] = ..., window: _Optional[int] = ...) -> None: ...

class ColumnHistogram(_message.Message):
    __slots__ = ["name", "histogram", "metrics", "drift"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    DRIFT_FIELD_NUMBER: _ClassVar[int]
    name: str
    histogram: _generated_pb2.HistogramData
    metrics: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    drift: bool
    def __init__(self, name: _Optional[str] = ..., histogram: _Optional[_Union[_generated_pb2.HistogramData, _Mapping]] = ..., metrics: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., drift: bool = ...) -> None: ...

class ColumnSpec(_message.Message):
    __slots__ = ["spacer", "width", "content"]
    SPACER_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    spacer: bool
    width: int
    content: ComponentSpec
    def __init__(self, spacer: bool = ..., width: _Optional[int] = ..., content: _Optional[_Union[ComponentSpec, _Mapping]] = ...) -> None: ...

class ColumnStatistics(_message.Message):
    __slots__ = ["name", "datatype", "count", "distinct", "missing", "percentMissing", "mean", "stddev", "variance", "min", "max", "kurtosis", "skewness", "sum", "mad", "p25", "p50", "p75", "iqr", "mode", "zeros", "invalid", "importance", "target", "ignore", "nullable", "highCardinality", "highCorrWithOtherFeatures", "lowCorrWithTarget", "highMissingPct", "skewed", "id", "constant", "duplicate", "reserved", "completeness", "distinctValueCount", "mostFreqValuesRatio", "histogram", "corrToTarget", "index", "outliers"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DATATYPE_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    DISTINCT_FIELD_NUMBER: _ClassVar[int]
    MISSING_FIELD_NUMBER: _ClassVar[int]
    PERCENTMISSING_FIELD_NUMBER: _ClassVar[int]
    MEAN_FIELD_NUMBER: _ClassVar[int]
    STDDEV_FIELD_NUMBER: _ClassVar[int]
    VARIANCE_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    KURTOSIS_FIELD_NUMBER: _ClassVar[int]
    SKEWNESS_FIELD_NUMBER: _ClassVar[int]
    SUM_FIELD_NUMBER: _ClassVar[int]
    MAD_FIELD_NUMBER: _ClassVar[int]
    P25_FIELD_NUMBER: _ClassVar[int]
    P50_FIELD_NUMBER: _ClassVar[int]
    P75_FIELD_NUMBER: _ClassVar[int]
    IQR_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    ZEROS_FIELD_NUMBER: _ClassVar[int]
    INVALID_FIELD_NUMBER: _ClassVar[int]
    IMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    IGNORE_FIELD_NUMBER: _ClassVar[int]
    NULLABLE_FIELD_NUMBER: _ClassVar[int]
    HIGHCARDINALITY_FIELD_NUMBER: _ClassVar[int]
    HIGHCORRWITHOTHERFEATURES_FIELD_NUMBER: _ClassVar[int]
    LOWCORRWITHTARGET_FIELD_NUMBER: _ClassVar[int]
    HIGHMISSINGPCT_FIELD_NUMBER: _ClassVar[int]
    SKEWED_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    CONSTANT_FIELD_NUMBER: _ClassVar[int]
    DUPLICATE_FIELD_NUMBER: _ClassVar[int]
    RESERVED_FIELD_NUMBER: _ClassVar[int]
    COMPLETENESS_FIELD_NUMBER: _ClassVar[int]
    DISTINCTVALUECOUNT_FIELD_NUMBER: _ClassVar[int]
    MOSTFREQVALUESRATIO_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    CORRTOTARGET_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    OUTLIERS_FIELD_NUMBER: _ClassVar[int]
    name: str
    datatype: str
    count: float
    distinct: int
    missing: int
    percentMissing: float
    mean: float
    stddev: float
    variance: float
    min: float
    max: float
    kurtosis: float
    skewness: float
    sum: float
    mad: float
    p25: float
    p50: float
    p75: float
    iqr: float
    mode: str
    zeros: float
    invalid: int
    importance: float
    target: bool
    ignore: bool
    nullable: bool
    highCardinality: bool
    highCorrWithOtherFeatures: bool
    lowCorrWithTarget: bool
    highMissingPct: bool
    skewed: bool
    id: bool
    constant: bool
    duplicate: bool
    reserved: bool
    completeness: float
    distinctValueCount: float
    mostFreqValuesRatio: float
    histogram: _generated_pb2.HistogramData
    corrToTarget: float
    index: int
    outliers: OutlierStat
    def __init__(self, name: _Optional[str] = ..., datatype: _Optional[str] = ..., count: _Optional[float] = ..., distinct: _Optional[int] = ..., missing: _Optional[int] = ..., percentMissing: _Optional[float] = ..., mean: _Optional[float] = ..., stddev: _Optional[float] = ..., variance: _Optional[float] = ..., min: _Optional[float] = ..., max: _Optional[float] = ..., kurtosis: _Optional[float] = ..., skewness: _Optional[float] = ..., sum: _Optional[float] = ..., mad: _Optional[float] = ..., p25: _Optional[float] = ..., p50: _Optional[float] = ..., p75: _Optional[float] = ..., iqr: _Optional[float] = ..., mode: _Optional[str] = ..., zeros: _Optional[float] = ..., invalid: _Optional[int] = ..., importance: _Optional[float] = ..., target: bool = ..., ignore: bool = ..., nullable: bool = ..., highCardinality: bool = ..., highCorrWithOtherFeatures: bool = ..., lowCorrWithTarget: bool = ..., highMissingPct: bool = ..., skewed: bool = ..., id: bool = ..., constant: bool = ..., duplicate: bool = ..., reserved: bool = ..., completeness: _Optional[float] = ..., distinctValueCount: _Optional[float] = ..., mostFreqValuesRatio: _Optional[float] = ..., histogram: _Optional[_Union[_generated_pb2.HistogramData, _Mapping]] = ..., corrToTarget: _Optional[float] = ..., index: _Optional[int] = ..., outliers: _Optional[_Union[OutlierStat, _Mapping]] = ...) -> None: ...

class ComponentSpec(_message.Message):
    __slots__ = ["title", "subtitle", "footer", "content"]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    SUBTITLE_FIELD_NUMBER: _ClassVar[int]
    FOOTER_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    title: str
    subtitle: str
    footer: str
    content: ComponentView
    def __init__(self, title: _Optional[str] = ..., subtitle: _Optional[str] = ..., footer: _Optional[str] = ..., content: _Optional[_Union[ComponentView, _Mapping]] = ...) -> None: ...

class ComponentView(_message.Message):
    __slots__ = ["metric", "gauge", "histogram", "table", "lineChart", "barChart", "scatterPlot"]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    GAUGE_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    LINECHART_FIELD_NUMBER: _ClassVar[int]
    BARCHART_FIELD_NUMBER: _ClassVar[int]
    SCATTERPLOT_FIELD_NUMBER: _ClassVar[int]
    metric: MetricSpec
    gauge: GaugeSpec
    histogram: HistogramSpec
    table: TableSpec
    lineChart: LineChartSpec
    barChart: BarChartSpec
    scatterPlot: ScatterPlotSpec
    def __init__(self, metric: _Optional[_Union[MetricSpec, _Mapping]] = ..., gauge: _Optional[_Union[GaugeSpec, _Mapping]] = ..., histogram: _Optional[_Union[HistogramSpec, _Mapping]] = ..., table: _Optional[_Union[TableSpec, _Mapping]] = ..., lineChart: _Optional[_Union[LineChartSpec, _Mapping]] = ..., barChart: _Optional[_Union[BarChartSpec, _Mapping]] = ..., scatterPlot: _Optional[_Union[ScatterPlotSpec, _Mapping]] = ...) -> None: ...

class Correlation(_message.Message):
    __slots__ = ["feature1", "feature2", "value", "method"]
    FEATURE1_FIELD_NUMBER: _ClassVar[int]
    FEATURE2_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    feature1: str
    feature2: str
    value: float
    method: str
    def __init__(self, feature1: _Optional[str] = ..., feature2: _Optional[str] = ..., value: _Optional[float] = ..., method: _Optional[str] = ...) -> None: ...

class CorrelationSpec(_message.Message):
    __slots__ = ["cutoff", "method", "top"]
    CUTOFF_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    TOP_FIELD_NUMBER: _ClassVar[int]
    cutoff: float
    method: str
    top: int
    def __init__(self, cutoff: _Optional[float] = ..., method: _Optional[str] = ..., top: _Optional[int] = ...) -> None: ...

class CsvFileSpec(_message.Message):
    __slots__ = ["delimiter", "quote", "escapeChar", "commentChars", "header", "skipRows", "nullValues", "encoding", "maxRows", "strict", "compression", "hasIndexColumn"]
    DELIMITER_FIELD_NUMBER: _ClassVar[int]
    QUOTE_FIELD_NUMBER: _ClassVar[int]
    ESCAPECHAR_FIELD_NUMBER: _ClassVar[int]
    COMMENTCHARS_FIELD_NUMBER: _ClassVar[int]
    HEADER_FIELD_NUMBER: _ClassVar[int]
    SKIPROWS_FIELD_NUMBER: _ClassVar[int]
    NULLVALUES_FIELD_NUMBER: _ClassVar[int]
    ENCODING_FIELD_NUMBER: _ClassVar[int]
    MAXROWS_FIELD_NUMBER: _ClassVar[int]
    STRICT_FIELD_NUMBER: _ClassVar[int]
    COMPRESSION_FIELD_NUMBER: _ClassVar[int]
    HASINDEXCOLUMN_FIELD_NUMBER: _ClassVar[int]
    delimiter: str
    quote: str
    escapeChar: str
    commentChars: str
    header: bool
    skipRows: int
    nullValues: str
    encoding: str
    maxRows: int
    strict: bool
    compression: str
    hasIndexColumn: bool
    def __init__(self, delimiter: _Optional[str] = ..., quote: _Optional[str] = ..., escapeChar: _Optional[str] = ..., commentChars: _Optional[str] = ..., header: bool = ..., skipRows: _Optional[int] = ..., nullValues: _Optional[str] = ..., encoding: _Optional[str] = ..., maxRows: _Optional[int] = ..., strict: bool = ..., compression: _Optional[str] = ..., hasIndexColumn: bool = ...) -> None: ...

class DataInputSpec(_message.Message):
    __slots__ = ["location", "format"]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    location: _generated_pb2.DataLocation
    format: FlatFileFormatSpec
    def __init__(self, location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., format: _Optional[_Union[FlatFileFormatSpec, _Mapping]] = ...) -> None: ...

class DataOutputSpec(_message.Message):
    __slots__ = ["datasetName", "location", "format", "action", "createTableIfNotExist", "includeFeatures", "includeShapValues", "detectOutliers"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    CREATETABLEIFNOTEXIST_FIELD_NUMBER: _ClassVar[int]
    INCLUDEFEATURES_FIELD_NUMBER: _ClassVar[int]
    INCLUDESHAPVALUES_FIELD_NUMBER: _ClassVar[int]
    DETECTOUTLIERS_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    location: _generated_pb2.DataLocation
    format: str
    action: str
    createTableIfNotExist: bool
    includeFeatures: bool
    includeShapValues: bool
    detectOutliers: bool
    def __init__(self, datasetName: _Optional[str] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., format: _Optional[str] = ..., action: _Optional[str] = ..., createTableIfNotExist: bool = ..., includeFeatures: bool = ..., includeShapValues: bool = ..., detectOutliers: bool = ...) -> None: ...

class DataPipeline(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DataPipelineSpec
    status: DataPipelineStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DataPipelineSpec, _Mapping]] = ..., status: _Optional[_Union[DataPipelineStatus, _Mapping]] = ...) -> None: ...

class DataPipelineList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DataPipeline]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataPipeline, _Mapping]]] = ...) -> None: ...

class DataPipelineRun(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DataPipelineRunSpec
    status: DataPipelineRunStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DataPipelineRunSpec, _Mapping]] = ..., status: _Optional[_Union[DataPipelineRunStatus, _Mapping]] = ...) -> None: ...

class DataPipelineRunCondition(_message.Message):
    __slots__ = ["type", "status", "lastTransitionTime", "reason", "message"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: str
    status: str
    lastTransitionTime: _generated_pb2_1_1.Time
    reason: str
    message: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class DataPipelineRunList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DataPipelineRun]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataPipelineRun, _Mapping]]] = ...) -> None: ...

class DataPipelineRunSpec(_message.Message):
    __slots__ = ["versionName", "datapipelineName", "owner", "resources", "priority", "paused", "aborted", "labRef", "modelClassName", "modelClassRunName"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DATAPIPELINENAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    ABORTED_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    datapipelineName: str
    owner: str
    resources: _generated_pb2.ResourceSpec
    priority: str
    paused: bool
    aborted: bool
    labRef: _generated_pb2_1.ObjectReference
    modelClassName: str
    modelClassRunName: str
    def __init__(self, versionName: _Optional[str] = ..., datapipelineName: _Optional[str] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., priority: _Optional[str] = ..., paused: bool = ..., aborted: bool = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ...) -> None: ...

class DataPipelineRunStatus(_message.Message):
    __slots__ = ["recipeRuns", "output", "phase", "completedAt", "observedGeneration", "failureReason", "failureMessage", "progress", "logs", "updatedAt", "conditions"]
    RECIPERUNS_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    recipeRuns: _containers.RepeatedScalarFieldContainer[str]
    output: _generated_pb2.DataLocation
    phase: str
    completedAt: _generated_pb2_1_1.Time
    observedGeneration: int
    failureReason: str
    failureMessage: str
    progress: int
    logs: _generated_pb2.Logs
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, recipeRuns: _Optional[_Iterable[str]] = ..., output: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., phase: _Optional[str] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., progress: _Optional[int] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DataPipelineSpec(_message.Message):
    __slots__ = ["versionName", "modelClassName", "description", "datasetSelector", "recipes", "output", "schedule", "notification", "owner", "resources", "priority", "paused", "ttl"]
    class DatasetSelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DATASETSELECTOR_FIELD_NUMBER: _ClassVar[int]
    RECIPES_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    modelClassName: str
    description: str
    datasetSelector: _containers.ScalarMap[str, str]
    recipes: _containers.RepeatedCompositeFieldContainer[RecipePartSpec]
    output: DataOutputSpec
    schedule: _generated_pb2.RunSchedule
    notification: _generated_pb2.NotificationSpec
    owner: str
    resources: _generated_pb2.ResourceSpec
    priority: str
    paused: bool
    ttl: int
    def __init__(self, versionName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., description: _Optional[str] = ..., datasetSelector: _Optional[_Mapping[str, str]] = ..., recipes: _Optional[_Iterable[_Union[RecipePartSpec, _Mapping]]] = ..., output: _Optional[_Union[DataOutputSpec, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., priority: _Optional[str] = ..., paused: bool = ..., ttl: _Optional[int] = ...) -> None: ...

class DataPipelineStatus(_message.Message):
    __slots__ = ["observedGeneration", "updatedAt", "schedule", "lastRunName", "runsCount", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    LASTRUNNAME_FIELD_NUMBER: _ClassVar[int]
    RUNSCOUNT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
    schedule: _generated_pb2.RunScheduleStatus
    lastRunName: str
    runsCount: int
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., lastRunName: _Optional[str] = ..., runsCount: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DataProduct(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DataProductSpec
    status: DataProductStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DataProductSpec, _Mapping]] = ..., status: _Optional[_Union[DataProductStatus, _Mapping]] = ...) -> None: ...

class DataProductList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DataProduct]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataProduct, _Mapping]]] = ...) -> None: ...

class DataProductSpec(_message.Message):
    __slots__ = ["owner", "public", "tenantRef", "gitLocation", "cacheBucketName", "defaultLabName", "defaultServingSiteName", "defaultBucketName", "task", "subtask", "description", "notification", "trainingResources", "servingResources", "priority", "color", "approval", "permissions", "tags"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PUBLIC_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    GITLOCATION_FIELD_NUMBER: _ClassVar[int]
    CACHEBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTLABNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTSERVINGSITENAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    TRAININGRESOURCES_FIELD_NUMBER: _ClassVar[int]
    SERVINGRESOURCES_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    COLOR_FIELD_NUMBER: _ClassVar[int]
    APPROVAL_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    owner: str
    public: bool
    tenantRef: _generated_pb2_1.ObjectReference
    gitLocation: GitLocation
    cacheBucketName: str
    defaultLabName: str
    defaultServingSiteName: str
    defaultBucketName: str
    task: str
    subtask: str
    description: str
    notification: _generated_pb2.NotificationSpec
    trainingResources: _generated_pb2.ResourceSpec
    servingResources: _generated_pb2.ResourceSpec
    priority: str
    color: str
    approval: ApprovalSpec
    permissions: _generated_pb2.PermissionsSpec
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, owner: _Optional[str] = ..., public: bool = ..., tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., gitLocation: _Optional[_Union[GitLocation, _Mapping]] = ..., cacheBucketName: _Optional[str] = ..., defaultLabName: _Optional[str] = ..., defaultServingSiteName: _Optional[str] = ..., defaultBucketName: _Optional[str] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., description: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., trainingResources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., servingResources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., priority: _Optional[str] = ..., color: _Optional[str] = ..., approval: _Optional[_Union[ApprovalSpec, _Mapping]] = ..., permissions: _Optional[_Union[_generated_pb2.PermissionsSpec, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class DataProductStatus(_message.Message):
    __slots__ = ["observedGeneration", "updatedAt", "datasourcesCount", "datasetsCount", "dataPipelineCount", "totalDataPipelineRuns", "studiesCount", "modelsCount", "predictorsCount", "dataAppsCount", "predictionsCount", "infoAlertsCount", "errorAlertsCount", "modelClassesCount", "failureReason", "failureMessage", "baselineVersion", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCESCOUNT_FIELD_NUMBER: _ClassVar[int]
    DATASETSCOUNT_FIELD_NUMBER: _ClassVar[int]
    DATAPIPELINECOUNT_FIELD_NUMBER: _ClassVar[int]
    TOTALDATAPIPELINERUNS_FIELD_NUMBER: _ClassVar[int]
    STUDIESCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    PREDICTORSCOUNT_FIELD_NUMBER: _ClassVar[int]
    DATAAPPSCOUNT_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONSCOUNT_FIELD_NUMBER: _ClassVar[int]
    INFOALERTSCOUNT_FIELD_NUMBER: _ClassVar[int]
    ERRORALERTSCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSESCOUNT_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    BASELINEVERSION_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
    datasourcesCount: int
    datasetsCount: int
    dataPipelineCount: int
    totalDataPipelineRuns: int
    studiesCount: int
    modelsCount: int
    predictorsCount: int
    dataAppsCount: int
    predictionsCount: int
    infoAlertsCount: int
    errorAlertsCount: int
    modelClassesCount: int
    failureReason: str
    failureMessage: str
    baselineVersion: str
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., datasourcesCount: _Optional[int] = ..., datasetsCount: _Optional[int] = ..., dataPipelineCount: _Optional[int] = ..., totalDataPipelineRuns: _Optional[int] = ..., studiesCount: _Optional[int] = ..., modelsCount: _Optional[int] = ..., predictorsCount: _Optional[int] = ..., dataAppsCount: _Optional[int] = ..., predictionsCount: _Optional[int] = ..., infoAlertsCount: _Optional[int] = ..., errorAlertsCount: _Optional[int] = ..., modelClassesCount: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., baselineVersion: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DataProductVersion(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DataProductVersionSpec
    status: DataProductVersionStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DataProductVersionSpec, _Mapping]] = ..., status: _Optional[_Union[DataProductVersionStatus, _Mapping]] = ...) -> None: ...

class DataProductVersionList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DataProductVersion]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataProductVersion, _Mapping]]] = ...) -> None: ...

class DataProductVersionSpec(_message.Message):
    __slots__ = ["productRef", "description", "prevVersionName", "baseline", "owner"]
    PRODUCTREF_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PREVVERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    BASELINE_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    productRef: _generated_pb2_1.ObjectReference
    description: str
    prevVersionName: str
    baseline: bool
    owner: str
    def __init__(self, productRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., description: _Optional[str] = ..., prevVersionName: _Optional[str] = ..., baseline: bool = ..., owner: _Optional[str] = ...) -> None: ...

class DataProductVersionStatus(_message.Message):
    __slots__ = ["observedGeneration", "updatedAt", "failureReason", "failureMessage", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
    failureReason: str
    failureMessage: str
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DataSource(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DataSourceSpec
    status: DataSourceStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DataSourceSpec, _Mapping]] = ..., status: _Optional[_Union[DataSourceStatus, _Mapping]] = ...) -> None: ...

class DataSourceList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DataSource]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataSource, _Mapping]]] = ...) -> None: ...

class DataSourceSpec(_message.Message):
    __slots__ = ["owner", "versionName", "description", "datasetType", "schema", "flatfile", "labeled", "sample", "task", "subtask", "relationships", "labeling", "inferredFrom", "unitTestsTemplate", "ingestMethod"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DATASETTYPE_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    FLATFILE_FIELD_NUMBER: _ClassVar[int]
    LABELED_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    RELATIONSHIPS_FIELD_NUMBER: _ClassVar[int]
    LABELING_FIELD_NUMBER: _ClassVar[int]
    INFERREDFROM_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    INGESTMETHOD_FIELD_NUMBER: _ClassVar[int]
    owner: str
    versionName: str
    description: str
    datasetType: str
    schema: Schema
    flatfile: FlatFileFormatSpec
    labeled: bool
    sample: SampleSpec
    task: str
    subtask: str
    relationships: _containers.RepeatedCompositeFieldContainer[RelationshipSpec]
    labeling: LabelingSpec
    inferredFrom: _generated_pb2.DataLocation
    unitTestsTemplate: _generated_pb2.TestSuite
    ingestMethod: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., datasetType: _Optional[str] = ..., schema: _Optional[_Union[Schema, _Mapping]] = ..., flatfile: _Optional[_Union[FlatFileFormatSpec, _Mapping]] = ..., labeled: bool = ..., sample: _Optional[_Union[SampleSpec, _Mapping]] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., relationships: _Optional[_Iterable[_Union[RelationshipSpec, _Mapping]]] = ..., labeling: _Optional[_Union[LabelingSpec, _Mapping]] = ..., inferredFrom: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., unitTestsTemplate: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., ingestMethod: _Optional[str] = ...) -> None: ...

class DataSourceStatus(_message.Message):
    __slots__ = ["cols", "observedGeneration", "lastDatasetCreatedAt", "lastDatasetName", "updatedAt", "failureReason", "failureMessage", "conditions"]
    COLS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTDATASETCREATEDAT_FIELD_NUMBER: _ClassVar[int]
    LASTDATASETNAME_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    cols: int
    observedGeneration: int
    lastDatasetCreatedAt: _generated_pb2_1_1.Time
    lastDatasetName: str
    updatedAt: _generated_pb2_1_1.Time
    failureReason: str
    failureMessage: str
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, cols: _Optional[int] = ..., observedGeneration: _Optional[int] = ..., lastDatasetCreatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastDatasetName: _Optional[str] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class Dataset(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DatasetSpec
    status: DatasetStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DatasetSpec, _Mapping]] = ..., status: _Optional[_Union[DatasetStatus, _Mapping]] = ...) -> None: ...

class DatasetGroupByStatus(_message.Message):
    __slots__ = ["datasetsURI", "profilesURI", "reportsURI", "unitTestsURI", "featuresURI", "workerResults"]
    DATASETSURI_FIELD_NUMBER: _ClassVar[int]
    PROFILESURI_FIELD_NUMBER: _ClassVar[int]
    REPORTSURI_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSURI_FIELD_NUMBER: _ClassVar[int]
    FEATURESURI_FIELD_NUMBER: _ClassVar[int]
    WORKERRESULTS_FIELD_NUMBER: _ClassVar[int]
    datasetsURI: str
    profilesURI: str
    reportsURI: str
    unitTestsURI: str
    featuresURI: str
    workerResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.WorkerRunResult]
    def __init__(self, datasetsURI: _Optional[str] = ..., profilesURI: _Optional[str] = ..., reportsURI: _Optional[str] = ..., unitTestsURI: _Optional[str] = ..., featuresURI: _Optional[str] = ..., workerResults: _Optional[_Iterable[_Union[_generated_pb2.WorkerRunResult, _Mapping]]] = ...) -> None: ...

class DatasetList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Dataset]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Dataset, _Mapping]]] = ...) -> None: ...

class DatasetSpec(_message.Message):
    __slots__ = ["owner", "versionName", "dataSourceName", "description", "displayName", "role", "tags", "report", "unitTest", "origin", "location", "artifactBucketName", "resources", "timeout", "type", "sample", "synthetic", "task", "subtask", "correlation", "fast", "featurize", "labRef", "servingDatasetRef", "predictorRef", "generateFeatureHistogram", "unitTests", "groupBy", "groupLocations", "key", "modelClassName", "modelClassRunName", "featureGroups", "featureGroupName", "notification"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DATASOURCENAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DISPLAYNAME_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    UNITTEST_FIELD_NUMBER: _ClassVar[int]
    ORIGIN_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_FIELD_NUMBER: _ClassVar[int]
    SYNTHETIC_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    CORRELATION_FIELD_NUMBER: _ClassVar[int]
    FAST_FIELD_NUMBER: _ClassVar[int]
    FEATURIZE_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    SERVINGDATASETREF_FIELD_NUMBER: _ClassVar[int]
    PREDICTORREF_FIELD_NUMBER: _ClassVar[int]
    GENERATEFEATUREHISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    GROUPLOCATIONS_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    FEATUREGROUPS_FIELD_NUMBER: _ClassVar[int]
    FEATUREGROUPNAME_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    owner: str
    versionName: str
    dataSourceName: str
    description: str
    displayName: str
    role: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    report: bool
    unitTest: bool
    origin: _generated_pb2.DataLocation
    location: _generated_pb2.FileLocation
    artifactBucketName: str
    resources: _generated_pb2.ResourceSpec
    timeout: int
    type: str
    sample: SampleSpec
    synthetic: SyntheticSpec
    task: str
    subtask: str
    correlation: CorrelationSpec
    fast: bool
    featurize: bool
    labRef: _generated_pb2_1.ObjectReference
    servingDatasetRef: _generated_pb2_1.ObjectReference
    predictorRef: _generated_pb2_1.ObjectReference
    generateFeatureHistogram: bool
    unitTests: _generated_pb2.TestSuite
    groupBy: GroupBySpec
    groupLocations: GroupDatasetLocationsSpec
    key: _containers.RepeatedScalarFieldContainer[str]
    modelClassName: str
    modelClassRunName: str
    featureGroups: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.ObjectReference]
    featureGroupName: str
    notification: _generated_pb2.NotificationSpec
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., dataSourceName: _Optional[str] = ..., description: _Optional[str] = ..., displayName: _Optional[str] = ..., role: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., report: bool = ..., unitTest: bool = ..., origin: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., artifactBucketName: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., timeout: _Optional[int] = ..., type: _Optional[str] = ..., sample: _Optional[_Union[SampleSpec, _Mapping]] = ..., synthetic: _Optional[_Union[SyntheticSpec, _Mapping]] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., correlation: _Optional[_Union[CorrelationSpec, _Mapping]] = ..., fast: bool = ..., featurize: bool = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., servingDatasetRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., predictorRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., generateFeatureHistogram: bool = ..., unitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., groupBy: _Optional[_Union[GroupBySpec, _Mapping]] = ..., groupLocations: _Optional[_Union[GroupDatasetLocationsSpec, _Mapping]] = ..., key: _Optional[_Iterable[str]] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ..., featureGroups: _Optional[_Iterable[_Union[_generated_pb2_1.ObjectReference, _Mapping]]] = ..., featureGroupName: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ...) -> None: ...

class DatasetStatistics(_message.Message):
    __slots__ = ["columns", "rows", "cols", "fileSize", "correlationsWithTarget", "topCorrelations"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    COLS_FIELD_NUMBER: _ClassVar[int]
    FILESIZE_FIELD_NUMBER: _ClassVar[int]
    CORRELATIONSWITHTARGET_FIELD_NUMBER: _ClassVar[int]
    TOPCORRELATIONS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[ColumnStatistics]
    rows: int
    cols: int
    fileSize: int
    correlationsWithTarget: _containers.RepeatedCompositeFieldContainer[Correlation]
    topCorrelations: _containers.RepeatedCompositeFieldContainer[Correlation]
    def __init__(self, columns: _Optional[_Iterable[_Union[ColumnStatistics, _Mapping]]] = ..., rows: _Optional[int] = ..., cols: _Optional[int] = ..., fileSize: _Optional[int] = ..., correlationsWithTarget: _Optional[_Iterable[_Union[Correlation, _Mapping]]] = ..., topCorrelations: _Optional[_Iterable[_Union[Correlation, _Mapping]]] = ...) -> None: ...

class DatasetStatus(_message.Message):
    __slots__ = ["statistics", "phase", "reportName", "reportLocation", "profileLocation", "anomaliesLocation", "imbalanced", "observedGeneration", "unitTestResults", "lastStudyAt", "failureMessage", "progress", "hash", "logs", "updatedAt", "images", "completedAt", "featureHistogramRef", "groupby", "conditions"]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    REPORTNAME_FIELD_NUMBER: _ClassVar[int]
    REPORTLOCATION_FIELD_NUMBER: _ClassVar[int]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    ANOMALIESLOCATION_FIELD_NUMBER: _ClassVar[int]
    IMBALANCED_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UNITTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    LASTSTUDYAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    HASH_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    FEATUREHISTOGRAMREF_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    statistics: DatasetStatistics
    phase: str
    reportName: str
    reportLocation: _generated_pb2.FileLocation
    profileLocation: _generated_pb2.FileLocation
    anomaliesLocation: _generated_pb2.FileLocation
    imbalanced: bool
    observedGeneration: int
    unitTestResults: _generated_pb2.TestSuiteResult
    lastStudyAt: _generated_pb2_1_1.Time
    failureMessage: str
    progress: int
    hash: str
    logs: _generated_pb2.Logs
    updatedAt: _generated_pb2_1_1.Time
    images: _generated_pb2.Images
    completedAt: _generated_pb2_1_1.Time
    featureHistogramRef: _generated_pb2_1.ObjectReference
    groupby: DatasetGroupByStatus
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, statistics: _Optional[_Union[DatasetStatistics, _Mapping]] = ..., phase: _Optional[str] = ..., reportName: _Optional[str] = ..., reportLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., profileLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., anomaliesLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., imbalanced: bool = ..., observedGeneration: _Optional[int] = ..., unitTestResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., lastStudyAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., progress: _Optional[int] = ..., hash: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., images: _Optional[_Union[_generated_pb2.Images, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., featureHistogramRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., groupby: _Optional[_Union[DatasetGroupByStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DatasetTemplate(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DatasetSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DatasetSpec, _Mapping]] = ...) -> None: ...

class DriftThreshold(_message.Message):
    __slots__ = ["metric", "value"]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    metric: str
    value: float
    def __init__(self, metric: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...

class Entity(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: EntitySpec
    status: EntityStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[EntitySpec, _Mapping]] = ..., status: _Optional[_Union[EntityStatus, _Mapping]] = ...) -> None: ...

class EntityList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Entity]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Entity, _Mapping]]] = ...) -> None: ...

class EntitySpec(_message.Message):
    __slots__ = ["tenantRef", "description", "joinKey", "owner", "tags"]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    JOINKEY_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    tenantRef: _generated_pb2_1.ObjectReference
    description: str
    joinKey: str
    owner: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., description: _Optional[str] = ..., joinKey: _Optional[str] = ..., owner: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class EntityStatus(_message.Message):
    __slots__ = ["observedGeneration", "updatedAt", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class ExcelNotebookSpec(_message.Message):
    __slots__ = ["firstSheetWithData", "sheetName", "sheetIndex", "columnNameRow", "data"]
    FIRSTSHEETWITHDATA_FIELD_NUMBER: _ClassVar[int]
    SHEETNAME_FIELD_NUMBER: _ClassVar[int]
    SHEETINDEX_FIELD_NUMBER: _ClassVar[int]
    COLUMNNAMEROW_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    firstSheetWithData: bool
    sheetName: str
    sheetIndex: int
    columnNameRow: int
    data: ExcelSheetArea
    def __init__(self, firstSheetWithData: bool = ..., sheetName: _Optional[str] = ..., sheetIndex: _Optional[int] = ..., columnNameRow: _Optional[int] = ..., data: _Optional[_Union[ExcelSheetArea, _Mapping]] = ...) -> None: ...

class ExcelSheetArea(_message.Message):
    __slots__ = ["entireSheet", "fromColumn", "toColumn", "fromRow", "toRow"]
    ENTIRESHEET_FIELD_NUMBER: _ClassVar[int]
    FROMCOLUMN_FIELD_NUMBER: _ClassVar[int]
    TOCOLUMN_FIELD_NUMBER: _ClassVar[int]
    FROMROW_FIELD_NUMBER: _ClassVar[int]
    TOROW_FIELD_NUMBER: _ClassVar[int]
    entireSheet: bool
    fromColumn: int
    toColumn: int
    fromRow: int
    toRow: int
    def __init__(self, entireSheet: bool = ..., fromColumn: _Optional[int] = ..., toColumn: _Optional[int] = ..., fromRow: _Optional[int] = ..., toRow: _Optional[int] = ...) -> None: ...

class FeatureGroup(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: FeatureGroupSpec
    status: FeatureGroupStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[FeatureGroupSpec, _Mapping]] = ..., status: _Optional[_Union[FeatureGroupStatus, _Mapping]] = ...) -> None: ...

class FeatureGroupList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[FeatureGroup]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[FeatureGroup, _Mapping]]] = ...) -> None: ...

class FeatureGroupSpec(_message.Message):
    __slots__ = ["tenantRef", "owner", "description", "artifactBucketName", "ingestType", "entityName", "tags", "ingestSchedule", "syncSchedule", "flatfile", "schema", "tests", "location", "timeColumn", "timeColumnFormat", "keyColumn", "materialization", "resources", "labRef"]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    INGESTTYPE_FIELD_NUMBER: _ClassVar[int]
    ENTITYNAME_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    INGESTSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    SYNCSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    FLATFILE_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    TIMECOLUMN_FIELD_NUMBER: _ClassVar[int]
    TIMECOLUMNFORMAT_FIELD_NUMBER: _ClassVar[int]
    KEYCOLUMN_FIELD_NUMBER: _ClassVar[int]
    MATERIALIZATION_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    tenantRef: _generated_pb2_1.ObjectReference
    owner: str
    description: str
    artifactBucketName: str
    ingestType: str
    entityName: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    ingestSchedule: _generated_pb2.RunSchedule
    syncSchedule: _generated_pb2.RunSchedule
    flatfile: FlatFileFormatSpec
    schema: Schema
    tests: _generated_pb2.TestSuite
    location: _generated_pb2.DataLocation
    timeColumn: str
    timeColumnFormat: str
    keyColumn: str
    materialization: MaterializationSpec
    resources: _generated_pb2.ResourceSpec
    labRef: _generated_pb2_1.ObjectReference
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., owner: _Optional[str] = ..., description: _Optional[str] = ..., artifactBucketName: _Optional[str] = ..., ingestType: _Optional[str] = ..., entityName: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., ingestSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., syncSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., flatfile: _Optional[_Union[FlatFileFormatSpec, _Mapping]] = ..., schema: _Optional[_Union[Schema, _Mapping]] = ..., tests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., timeColumn: _Optional[str] = ..., timeColumnFormat: _Optional[str] = ..., keyColumn: _Optional[str] = ..., materialization: _Optional[_Union[MaterializationSpec, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ...) -> None: ...

class FeatureGroupStatus(_message.Message):
    __slots__ = ["phase", "observedGeneration", "updatedAt", "rows", "ingestSchedule", "syncSchedule", "onlineTable", "onlineTableCreated", "ingestDatasetName", "failureReason", "failureMessage", "conditions"]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    INGESTSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    SYNCSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    ONLINETABLE_FIELD_NUMBER: _ClassVar[int]
    ONLINETABLECREATED_FIELD_NUMBER: _ClassVar[int]
    INGESTDATASETNAME_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    phase: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
    rows: int
    ingestSchedule: _generated_pb2.RunScheduleStatus
    syncSchedule: _generated_pb2.RunScheduleStatus
    onlineTable: _generated_pb2.DataLocation
    onlineTableCreated: _generated_pb2_1_1.Time
    ingestDatasetName: str
    failureReason: str
    failureMessage: str
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, phase: _Optional[str] = ..., observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., rows: _Optional[int] = ..., ingestSchedule: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., syncSchedule: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., onlineTable: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., onlineTableCreated: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., ingestDatasetName: _Optional[str] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class FeatureHistogram(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: FeatureHistogramSpec
    status: FeatureHistogramStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[FeatureHistogramSpec, _Mapping]] = ..., status: _Optional[_Union[FeatureHistogramStatus, _Mapping]] = ...) -> None: ...

class FeatureHistogramList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[FeatureHistogram]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[FeatureHistogram, _Mapping]]] = ...) -> None: ...

class FeatureHistogramSpec(_message.Message):
    __slots__ = ["owner", "versionName", "description", "columns", "sourceRef", "training", "live", "start", "end", "baseRef", "driftThresholds", "syncIntervalSec", "unitTests", "genUnitTests", "featureFilter", "referenceType"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    SOURCEREF_FIELD_NUMBER: _ClassVar[int]
    TRAINING_FIELD_NUMBER: _ClassVar[int]
    LIVE_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    BASEREF_FIELD_NUMBER: _ClassVar[int]
    DRIFTTHRESHOLDS_FIELD_NUMBER: _ClassVar[int]
    SYNCINTERVALSEC_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    GENUNITTESTS_FIELD_NUMBER: _ClassVar[int]
    FEATUREFILTER_FIELD_NUMBER: _ClassVar[int]
    REFERENCETYPE_FIELD_NUMBER: _ClassVar[int]
    owner: str
    versionName: str
    description: str
    columns: _containers.RepeatedScalarFieldContainer[str]
    sourceRef: _generated_pb2_1.ObjectReference
    training: bool
    live: bool
    start: _generated_pb2_1_1.Time
    end: _generated_pb2_1_1.Time
    baseRef: _generated_pb2_1.ObjectReference
    driftThresholds: _containers.RepeatedCompositeFieldContainer[DriftThreshold]
    syncIntervalSec: int
    unitTests: _generated_pb2.TestSuite
    genUnitTests: bool
    featureFilter: str
    referenceType: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., columns: _Optional[_Iterable[str]] = ..., sourceRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., training: bool = ..., live: bool = ..., start: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., end: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., baseRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., driftThresholds: _Optional[_Iterable[_Union[DriftThreshold, _Mapping]]] = ..., syncIntervalSec: _Optional[int] = ..., unitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., genUnitTests: bool = ..., featureFilter: _Optional[str] = ..., referenceType: _Optional[str] = ...) -> None: ...

class FeatureHistogramStatus(_message.Message):
    __slots__ = ["observedGeneration", "columns", "updatedAt", "logs", "phase", "failureReason", "failureMessage", "unitTestsResult", "total", "errors", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSRESULT_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    columns: _containers.RepeatedCompositeFieldContainer[ColumnHistogram]
    updatedAt: _generated_pb2_1_1.Time
    logs: _generated_pb2.Logs
    phase: str
    failureReason: str
    failureMessage: str
    unitTestsResult: _generated_pb2.TestSuiteResult
    total: int
    errors: int
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., columns: _Optional[_Iterable[_Union[ColumnHistogram, _Mapping]]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., phase: _Optional[str] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., unitTestsResult: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., total: _Optional[int] = ..., errors: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class FlatFileFormatSpec(_message.Message):
    __slots__ = ["fileType", "csv", "excel", "parquet"]
    FILETYPE_FIELD_NUMBER: _ClassVar[int]
    CSV_FIELD_NUMBER: _ClassVar[int]
    EXCEL_FIELD_NUMBER: _ClassVar[int]
    PARQUET_FIELD_NUMBER: _ClassVar[int]
    fileType: str
    csv: CsvFileSpec
    excel: ExcelNotebookSpec
    parquet: ParquetFileSpec
    def __init__(self, fileType: _Optional[str] = ..., csv: _Optional[_Union[CsvFileSpec, _Mapping]] = ..., excel: _Optional[_Union[ExcelNotebookSpec, _Mapping]] = ..., parquet: _Optional[_Union[ParquetFileSpec, _Mapping]] = ...) -> None: ...

class GaugeSpec(_message.Message):
    __slots__ = ["datasetName", "column", "row", "scalar"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    ROW_FIELD_NUMBER: _ClassVar[int]
    SCALAR_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    column: str
    row: int
    scalar: str
    def __init__(self, datasetName: _Optional[str] = ..., column: _Optional[str] = ..., row: _Optional[int] = ..., scalar: _Optional[str] = ...) -> None: ...

class GitLocation(_message.Message):
    __slots__ = ["gitConnectionName", "url", "branch", "private"]
    GITCONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    BRANCH_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_FIELD_NUMBER: _ClassVar[int]
    gitConnectionName: str
    url: str
    branch: str
    private: bool
    def __init__(self, gitConnectionName: _Optional[str] = ..., url: _Optional[str] = ..., branch: _Optional[str] = ..., private: bool = ...) -> None: ...

class GroupBySpec(_message.Message):
    __slots__ = ["enabled", "groupby", "freq", "interval", "aggr"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    FREQ_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    AGGR_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    groupby: _containers.RepeatedScalarFieldContainer[str]
    freq: str
    interval: int
    aggr: str
    def __init__(self, enabled: bool = ..., groupby: _Optional[_Iterable[str]] = ..., freq: _Optional[str] = ..., interval: _Optional[int] = ..., aggr: _Optional[str] = ...) -> None: ...

class GroupDatasetLocationsSpec(_message.Message):
    __slots__ = ["groupsRoot", "groupRoot", "groupDataFolder", "groupDataFile", "groupProfileFolder", "groupReportFile", "groupFeaturesFile"]
    GROUPSROOT_FIELD_NUMBER: _ClassVar[int]
    GROUPROOT_FIELD_NUMBER: _ClassVar[int]
    GROUPDATAFOLDER_FIELD_NUMBER: _ClassVar[int]
    GROUPDATAFILE_FIELD_NUMBER: _ClassVar[int]
    GROUPPROFILEFOLDER_FIELD_NUMBER: _ClassVar[int]
    GROUPREPORTFILE_FIELD_NUMBER: _ClassVar[int]
    GROUPFEATURESFILE_FIELD_NUMBER: _ClassVar[int]
    groupsRoot: str
    groupRoot: str
    groupDataFolder: str
    groupDataFile: str
    groupProfileFolder: str
    groupReportFile: str
    groupFeaturesFile: str
    def __init__(self, groupsRoot: _Optional[str] = ..., groupRoot: _Optional[str] = ..., groupDataFolder: _Optional[str] = ..., groupDataFile: _Optional[str] = ..., groupProfileFolder: _Optional[str] = ..., groupReportFile: _Optional[str] = ..., groupFeaturesFile: _Optional[str] = ...) -> None: ...

class HistogramSpec(_message.Message):
    __slots__ = ["datasetName", "x", "bins"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    BINS_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    x: str
    bins: int
    def __init__(self, datasetName: _Optional[str] = ..., x: _Optional[str] = ..., bins: _Optional[int] = ...) -> None: ...

class ImageLocation(_message.Message):
    __slots__ = ["name", "registryConnectionName"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    REGISTRYCONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    registryConnectionName: str
    def __init__(self, name: _Optional[str] = ..., registryConnectionName: _Optional[str] = ...) -> None: ...

class KPI(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: float
    def __init__(self, name: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...

class LabelingRule(_message.Message):
    __slots__ = ["column", "operator", "value"]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    column: str
    operator: str
    value: str
    def __init__(self, column: _Optional[str] = ..., operator: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class LabelingSpec(_message.Message):
    __slots__ = ["enabled", "resultColumn", "positive", "negative"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    RESULTCOLUMN_FIELD_NUMBER: _ClassVar[int]
    POSITIVE_FIELD_NUMBER: _ClassVar[int]
    NEGATIVE_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    resultColumn: str
    positive: _containers.RepeatedCompositeFieldContainer[LabelingRule]
    negative: _containers.RepeatedCompositeFieldContainer[LabelingRule]
    def __init__(self, enabled: bool = ..., resultColumn: _Optional[str] = ..., positive: _Optional[_Iterable[_Union[LabelingRule, _Mapping]]] = ..., negative: _Optional[_Iterable[_Union[LabelingRule, _Mapping]]] = ...) -> None: ...

class LineChartSpec(_message.Message):
    __slots__ = ["datasetName", "x", "y", "legend"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    LEGEND_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    x: str
    y: str
    legend: bool
    def __init__(self, datasetName: _Optional[str] = ..., x: _Optional[str] = ..., y: _Optional[str] = ..., legend: bool = ...) -> None: ...

class MaterializationSpec(_message.Message):
    __slots__ = ["online", "offline", "startDate", "offlineTTL", "onlineTTL", "backfill", "schedule"]
    ONLINE_FIELD_NUMBER: _ClassVar[int]
    OFFLINE_FIELD_NUMBER: _ClassVar[int]
    STARTDATE_FIELD_NUMBER: _ClassVar[int]
    OFFLINETTL_FIELD_NUMBER: _ClassVar[int]
    ONLINETTL_FIELD_NUMBER: _ClassVar[int]
    BACKFILL_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    online: bool
    offline: bool
    startDate: _generated_pb2_1_1.Time
    offlineTTL: int
    onlineTTL: int
    backfill: int
    schedule: _generated_pb2.RunSchedule
    def __init__(self, online: bool = ..., offline: bool = ..., startDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., offlineTTL: _Optional[int] = ..., onlineTTL: _Optional[int] = ..., backfill: _Optional[int] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ...) -> None: ...

class MetricSpec(_message.Message):
    __slots__ = ["datasetName", "column", "row", "scalar"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    ROW_FIELD_NUMBER: _ClassVar[int]
    SCALAR_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    column: str
    row: int
    scalar: str
    def __init__(self, datasetName: _Optional[str] = ..., column: _Optional[str] = ..., row: _Optional[int] = ..., scalar: _Optional[str] = ...) -> None: ...

class OutlierStat(_message.Message):
    __slots__ = ["lower", "upper", "percent"]
    LOWER_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    PERCENT_FIELD_NUMBER: _ClassVar[int]
    lower: int
    upper: int
    percent: float
    def __init__(self, lower: _Optional[int] = ..., upper: _Optional[int] = ..., percent: _Optional[float] = ...) -> None: ...

class PageSpec(_message.Message):
    __slots__ = ["rows"]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    rows: _containers.RepeatedCompositeFieldContainer[RowSpec]
    def __init__(self, rows: _Optional[_Iterable[_Union[RowSpec, _Mapping]]] = ...) -> None: ...

class ParquetFileSpec(_message.Message):
    __slots__ = ["engine"]
    ENGINE_FIELD_NUMBER: _ClassVar[int]
    engine: str
    def __init__(self, engine: _Optional[str] = ...) -> None: ...

class Recipe(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: RecipeSpec
    status: RecipeStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[RecipeSpec, _Mapping]] = ..., status: _Optional[_Union[RecipeStatus, _Mapping]] = ...) -> None: ...

class RecipeInputSpec(_message.Message):
    __slots__ = ["datasetName", "location", "format"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    location: _generated_pb2.DataLocation
    format: str
    def __init__(self, datasetName: _Optional[str] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., format: _Optional[str] = ...) -> None: ...

class RecipeList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Recipe]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Recipe, _Mapping]]] = ...) -> None: ...

class RecipeOutputSpec(_message.Message):
    __slots__ = ["createDataset", "datasetName", "location"]
    CREATEDATASET_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    createDataset: bool
    datasetName: str
    location: _generated_pb2.DataLocation
    def __init__(self, createDataset: bool = ..., datasetName: _Optional[str] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ...) -> None: ...

class RecipePartSpec(_message.Message):
    __slots__ = ["recipeName", "dependents"]
    RECIPENAME_FIELD_NUMBER: _ClassVar[int]
    DEPENDENTS_FIELD_NUMBER: _ClassVar[int]
    recipeName: str
    dependents: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, recipeName: _Optional[str] = ..., dependents: _Optional[_Iterable[str]] = ...) -> None: ...

class RecipeRun(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: RecipeRunSpec
    status: RecipeRunStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[RecipeRunSpec, _Mapping]] = ..., status: _Optional[_Union[RecipeRunStatus, _Mapping]] = ...) -> None: ...

class RecipeRunList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[RecipeRun]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[RecipeRun, _Mapping]]] = ...) -> None: ...

class RecipeRunSpec(_message.Message):
    __slots__ = ["versionName", "recipeName", "labRef", "location", "resources", "ttl", "modelClassName", "modelClassRunName"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    RECIPENAME_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    recipeName: str
    labRef: _generated_pb2_1.ObjectReference
    location: _generated_pb2.DataLocation
    resources: _generated_pb2.ResourceSpec
    ttl: int
    modelClassName: str
    modelClassRunName: str
    def __init__(self, versionName: _Optional[str] = ..., recipeName: _Optional[str] = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., ttl: _Optional[int] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ...) -> None: ...

class RecipeRunStatus(_message.Message):
    __slots__ = ["completedAt", "phase", "observedGeneration", "failureReason", "failureMessage", "triggeredBy", "logs", "updatedAt", "conditions"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    TRIGGEREDBY_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1.Time
    phase: str
    observedGeneration: int
    failureReason: str
    failureMessage: str
    triggeredBy: str
    logs: _generated_pb2.Logs
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., phase: _Optional[str] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., triggeredBy: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class RecipeSpec(_message.Message):
    __slots__ = ["owner", "versionName", "description", "input", "steps", "output", "sample", "resources", "timeout", "ttl", "unitTestsTemplate"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    STEPS_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    owner: str
    versionName: str
    description: str
    input: RecipeInputSpec
    steps: _containers.RepeatedCompositeFieldContainer[RecipeStep]
    output: RecipeOutputSpec
    sample: SampleSpec
    resources: _generated_pb2.ResourceSpec
    timeout: int
    ttl: int
    unitTestsTemplate: _generated_pb2.TestSuite
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., input: _Optional[_Union[RecipeInputSpec, _Mapping]] = ..., steps: _Optional[_Iterable[_Union[RecipeStep, _Mapping]]] = ..., output: _Optional[_Union[RecipeOutputSpec, _Mapping]] = ..., sample: _Optional[_Union[SampleSpec, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., timeout: _Optional[int] = ..., ttl: _Optional[int] = ..., unitTestsTemplate: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ...) -> None: ...

class RecipeStatus(_message.Message):
    __slots__ = ["observedGeneration", "lastRun", "updatedAt", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTRUN_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    lastRun: _generated_pb2.LastRunStatus
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., lastRun: _Optional[_Union[_generated_pb2.LastRunStatus, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class RecipeStep(_message.Message):
    __slots__ = ["op", "parameters"]
    OP_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    op: str
    parameters: _containers.RepeatedCompositeFieldContainer[RecipeStepParam]
    def __init__(self, op: _Optional[str] = ..., parameters: _Optional[_Iterable[_Union[RecipeStepParam, _Mapping]]] = ...) -> None: ...

class RecipeStepParam(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class RecommendationSchema(_message.Message):
    __slots__ = ["userIDColumn", "itemIDColumn", "ratingColumn"]
    USERIDCOLUMN_FIELD_NUMBER: _ClassVar[int]
    ITEMIDCOLUMN_FIELD_NUMBER: _ClassVar[int]
    RATINGCOLUMN_FIELD_NUMBER: _ClassVar[int]
    userIDColumn: str
    itemIDColumn: str
    ratingColumn: str
    def __init__(self, userIDColumn: _Optional[str] = ..., itemIDColumn: _Optional[str] = ..., ratingColumn: _Optional[str] = ...) -> None: ...

class RelationshipSpec(_message.Message):
    __slots__ = ["type", "column", "arity", "relatesTo"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    ARITY_FIELD_NUMBER: _ClassVar[int]
    RELATESTO_FIELD_NUMBER: _ClassVar[int]
    type: str
    column: str
    arity: str
    relatesTo: str
    def __init__(self, type: _Optional[str] = ..., column: _Optional[str] = ..., arity: _Optional[str] = ..., relatesTo: _Optional[str] = ...) -> None: ...

class RowSpec(_message.Message):
    __slots__ = ["cols"]
    COLS_FIELD_NUMBER: _ClassVar[int]
    cols: _containers.RepeatedCompositeFieldContainer[ColumnSpec]
    def __init__(self, cols: _Optional[_Iterable[_Union[ColumnSpec, _Mapping]]] = ...) -> None: ...

class SampleSpec(_message.Message):
    __slots__ = ["enabled", "type", "rows", "percent", "filter", "column"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    PERCENT_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    type: str
    rows: int
    percent: int
    filter: str
    column: str
    def __init__(self, enabled: bool = ..., type: _Optional[str] = ..., rows: _Optional[int] = ..., percent: _Optional[int] = ..., filter: _Optional[str] = ..., column: _Optional[str] = ...) -> None: ...

class ScatterPlotSpec(_message.Message):
    __slots__ = ["datasetName", "x", "y"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    x: str
    y: str
    def __init__(self, datasetName: _Optional[str] = ..., x: _Optional[str] = ..., y: _Optional[str] = ...) -> None: ...

class Schema(_message.Message):
    __slots__ = ["timeSeriesSchema", "recommendationSchema", "columns", "key"]
    TIMESERIESSCHEMA_FIELD_NUMBER: _ClassVar[int]
    RECOMMENDATIONSCHEMA_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    timeSeriesSchema: TimeSeriesSchema
    recommendationSchema: RecommendationSchema
    columns: _containers.RepeatedCompositeFieldContainer[Column]
    key: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, timeSeriesSchema: _Optional[_Union[TimeSeriesSchema, _Mapping]] = ..., recommendationSchema: _Optional[_Union[RecommendationSchema, _Mapping]] = ..., columns: _Optional[_Iterable[_Union[Column, _Mapping]]] = ..., key: _Optional[_Iterable[str]] = ...) -> None: ...

class SyntheticSpec(_message.Message):
    __slots__ = ["enabled", "rows"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    rows: int
    def __init__(self, enabled: bool = ..., rows: _Optional[int] = ...) -> None: ...

class TableSpec(_message.Message):
    __slots__ = ["datasetName", "columns", "filters", "groupby", "rows", "showIndex", "border"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    FILTERS_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    SHOWINDEX_FIELD_NUMBER: _ClassVar[int]
    BORDER_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    columns: _containers.RepeatedScalarFieldContainer[str]
    filters: _containers.RepeatedScalarFieldContainer[str]
    groupby: _containers.RepeatedScalarFieldContainer[str]
    rows: int
    showIndex: bool
    border: bool
    def __init__(self, datasetName: _Optional[str] = ..., columns: _Optional[_Iterable[str]] = ..., filters: _Optional[_Iterable[str]] = ..., groupby: _Optional[_Iterable[str]] = ..., rows: _Optional[int] = ..., showIndex: bool = ..., border: bool = ...) -> None: ...

class TimeSeriesSchema(_message.Message):
    __slots__ = ["type", "freq", "interval"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    FREQ_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    type: str
    freq: str
    interval: int
    def __init__(self, type: _Optional[str] = ..., freq: _Optional[str] = ..., interval: _Optional[int] = ...) -> None: ...
