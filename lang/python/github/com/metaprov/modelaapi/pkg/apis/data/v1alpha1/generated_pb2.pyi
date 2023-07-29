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
    __slots__ = ["approvedAt", "notes", "result", "reviewer"]
    APPROVEDAT_FIELD_NUMBER: _ClassVar[int]
    NOTES_FIELD_NUMBER: _ClassVar[int]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    REVIEWER_FIELD_NUMBER: _ClassVar[int]
    approvedAt: _generated_pb2_1_1.Time
    notes: str
    result: str
    reviewer: str
    def __init__(self, reviewer: _Optional[str] = ..., result: _Optional[str] = ..., approvedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., notes: _Optional[str] = ...) -> None: ...

class ApprovalSpec(_message.Message):
    __slots__ = ["decisionType", "enabled", "members"]
    DECISIONTYPE_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    decisionType: str
    enabled: bool
    members: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, enabled: bool = ..., decisionType: _Optional[str] = ..., members: _Optional[_Iterable[str]] = ...) -> None: ...

class ApprovalStatus(_message.Message):
    __slots__ = ["reviews", "status"]
    REVIEWS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    reviews: _containers.RepeatedCompositeFieldContainer[ApprovalReviewStatus]
    status: str
    def __init__(self, status: _Optional[str] = ..., reviews: _Optional[_Iterable[_Union[ApprovalReviewStatus, _Mapping]]] = ...) -> None: ...

class BarChartSpec(_message.Message):
    __slots__ = ["datasetName", "legend", "sort", "x", "y"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    LEGEND_FIELD_NUMBER: _ClassVar[int]
    SORT_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    legend: bool
    sort: bool
    x: str
    y: str
    def __init__(self, datasetName: _Optional[str] = ..., x: _Optional[str] = ..., y: _Optional[str] = ..., legend: bool = ..., sort: bool = ...) -> None: ...

class Column(_message.Message):
    __slots__ = ["aggr", "datatype", "datetimeFormat", "defaultValueNum", "description", "displayName", "driftThreshold", "enum", "example", "exclusiveMaximum", "exclusiveMinimum", "externalDocs", "fk", "fold", "format", "formula", "generated", "id", "ignore", "imputation", "key", "laggedRegressor", "loc", "log", "maxItems", "maxLength", "maximum", "minItems", "minLength", "minimum", "mu", "multipleOf", "name", "nullable", "pattern", "phi", "pii", "pk", "protected", "regressor", "required", "reserved", "scaling", "sigma", "skewThreshold", "step", "target", "timeIndex", "timeseries", "uniqueItems", "weight", "window"]
    AGGR_FIELD_NUMBER: _ClassVar[int]
    DATATYPE_FIELD_NUMBER: _ClassVar[int]
    DATETIMEFORMAT_FIELD_NUMBER: _ClassVar[int]
    DEFAULTVALUENUM_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DISPLAYNAME_FIELD_NUMBER: _ClassVar[int]
    DRIFTTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    ENUM_FIELD_NUMBER: _ClassVar[int]
    EXAMPLE_FIELD_NUMBER: _ClassVar[int]
    EXCLUSIVEMAXIMUM_FIELD_NUMBER: _ClassVar[int]
    EXCLUSIVEMINIMUM_FIELD_NUMBER: _ClassVar[int]
    EXTERNALDOCS_FIELD_NUMBER: _ClassVar[int]
    FK_FIELD_NUMBER: _ClassVar[int]
    FOLD_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    FORMULA_FIELD_NUMBER: _ClassVar[int]
    GENERATED_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    IGNORE_FIELD_NUMBER: _ClassVar[int]
    IMPUTATION_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    LAGGEDREGRESSOR_FIELD_NUMBER: _ClassVar[int]
    LOC_FIELD_NUMBER: _ClassVar[int]
    LOG_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    MAXITEMS_FIELD_NUMBER: _ClassVar[int]
    MAXLENGTH_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_FIELD_NUMBER: _ClassVar[int]
    MINITEMS_FIELD_NUMBER: _ClassVar[int]
    MINLENGTH_FIELD_NUMBER: _ClassVar[int]
    MULTIPLEOF_FIELD_NUMBER: _ClassVar[int]
    MU_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NULLABLE_FIELD_NUMBER: _ClassVar[int]
    PATTERN_FIELD_NUMBER: _ClassVar[int]
    PHI_FIELD_NUMBER: _ClassVar[int]
    PII_FIELD_NUMBER: _ClassVar[int]
    PK_FIELD_NUMBER: _ClassVar[int]
    PROTECTED_FIELD_NUMBER: _ClassVar[int]
    REGRESSOR_FIELD_NUMBER: _ClassVar[int]
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    RESERVED_FIELD_NUMBER: _ClassVar[int]
    SCALING_FIELD_NUMBER: _ClassVar[int]
    SIGMA_FIELD_NUMBER: _ClassVar[int]
    SKEWTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    STEP_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    TIMEINDEX_FIELD_NUMBER: _ClassVar[int]
    TIMESERIES_FIELD_NUMBER: _ClassVar[int]
    UNIQUEITEMS_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_FIELD_NUMBER: _ClassVar[int]
    WINDOW_FIELD_NUMBER: _ClassVar[int]
    aggr: str
    datatype: str
    datetimeFormat: str
    defaultValueNum: float
    description: str
    displayName: str
    driftThreshold: float
    enum: _containers.RepeatedScalarFieldContainer[str]
    example: str
    exclusiveMaximum: bool
    exclusiveMinimum: bool
    externalDocs: str
    fk: bool
    fold: bool
    format: str
    formula: str
    generated: bool
    id: bool
    ignore: bool
    imputation: str
    key: bool
    laggedRegressor: bool
    loc: int
    log: bool
    maxItems: int
    maxLength: int
    maximum: float
    minItems: int
    minLength: int
    minimum: float
    mu: float
    multipleOf: int
    name: str
    nullable: bool
    pattern: str
    phi: bool
    pii: bool
    pk: bool
    protected: bool
    regressor: bool
    required: bool
    reserved: bool
    scaling: str
    sigma: float
    skewThreshold: float
    step: float
    target: bool
    timeIndex: bool
    timeseries: bool
    uniqueItems: bool
    weight: bool
    window: int
    def __init__(self, name: _Optional[str] = ..., displayName: _Optional[str] = ..., datatype: _Optional[str] = ..., format: _Optional[str] = ..., description: _Optional[str] = ..., ignore: bool = ..., target: bool = ..., nullable: bool = ..., pk: bool = ..., fk: bool = ..., multipleOf: _Optional[int] = ..., maximum: _Optional[float] = ..., exclusiveMaximum: bool = ..., minimum: _Optional[float] = ..., exclusiveMinimum: bool = ..., maxLength: _Optional[int] = ..., minLength: _Optional[int] = ..., pattern: _Optional[str] = ..., required: bool = ..., example: _Optional[str] = ..., externalDocs: _Optional[str] = ..., enum: _Optional[_Iterable[str]] = ..., maxItems: _Optional[int] = ..., minItems: _Optional[int] = ..., uniqueItems: bool = ..., pii: bool = ..., phi: bool = ..., protected: bool = ..., defaultValueNum: _Optional[float] = ..., log: bool = ..., mu: _Optional[float] = ..., sigma: _Optional[float] = ..., skewThreshold: _Optional[float] = ..., driftThreshold: _Optional[float] = ..., key: bool = ..., fold: bool = ..., weight: bool = ..., reserved: bool = ..., imputation: _Optional[str] = ..., scaling: _Optional[str] = ..., generated: bool = ..., formula: _Optional[str] = ..., id: bool = ..., step: _Optional[float] = ..., loc: _Optional[int] = ..., datetimeFormat: _Optional[str] = ..., timeseries: bool = ..., regressor: bool = ..., laggedRegressor: bool = ..., timeIndex: bool = ..., aggr: _Optional[str] = ..., window: _Optional[int] = ...) -> None: ...

class ColumnHistogram(_message.Message):
    __slots__ = ["drift", "histogram", "metrics", "name"]
    DRIFT_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    drift: bool
    histogram: _generated_pb2.HistogramData
    metrics: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    name: str
    def __init__(self, name: _Optional[str] = ..., histogram: _Optional[_Union[_generated_pb2.HistogramData, _Mapping]] = ..., metrics: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., drift: bool = ...) -> None: ...

class ColumnSpec(_message.Message):
    __slots__ = ["content", "spacer", "width"]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    SPACER_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    content: ComponentSpec
    spacer: bool
    width: int
    def __init__(self, spacer: bool = ..., width: _Optional[int] = ..., content: _Optional[_Union[ComponentSpec, _Mapping]] = ...) -> None: ...

class ComponentSpec(_message.Message):
    __slots__ = ["content", "footer", "subtitle", "title"]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    FOOTER_FIELD_NUMBER: _ClassVar[int]
    SUBTITLE_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    content: ComponentView
    footer: str
    subtitle: str
    title: str
    def __init__(self, title: _Optional[str] = ..., subtitle: _Optional[str] = ..., footer: _Optional[str] = ..., content: _Optional[_Union[ComponentView, _Mapping]] = ...) -> None: ...

class ComponentView(_message.Message):
    __slots__ = ["barChart", "gauge", "histogram", "lineChart", "metric", "scatterPlot", "table"]
    BARCHART_FIELD_NUMBER: _ClassVar[int]
    GAUGE_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    LINECHART_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    SCATTERPLOT_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    barChart: BarChartSpec
    gauge: GaugeSpec
    histogram: HistogramSpec
    lineChart: LineChartSpec
    metric: MetricSpec
    scatterPlot: ScatterPlotSpec
    table: TableSpec
    def __init__(self, metric: _Optional[_Union[MetricSpec, _Mapping]] = ..., gauge: _Optional[_Union[GaugeSpec, _Mapping]] = ..., histogram: _Optional[_Union[HistogramSpec, _Mapping]] = ..., table: _Optional[_Union[TableSpec, _Mapping]] = ..., lineChart: _Optional[_Union[LineChartSpec, _Mapping]] = ..., barChart: _Optional[_Union[BarChartSpec, _Mapping]] = ..., scatterPlot: _Optional[_Union[ScatterPlotSpec, _Mapping]] = ...) -> None: ...

class Correlation(_message.Message):
    __slots__ = ["method", "value", "x", "y"]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    method: str
    value: float
    x: str
    y: str
    def __init__(self, x: _Optional[str] = ..., y: _Optional[str] = ..., value: _Optional[float] = ..., method: _Optional[str] = ...) -> None: ...

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
    __slots__ = ["commentChars", "compression", "delimiter", "encoding", "escapeChar", "hasIndexColumn", "header", "maxRows", "nullValues", "quote", "skipRows", "strict"]
    COMMENTCHARS_FIELD_NUMBER: _ClassVar[int]
    COMPRESSION_FIELD_NUMBER: _ClassVar[int]
    DELIMITER_FIELD_NUMBER: _ClassVar[int]
    ENCODING_FIELD_NUMBER: _ClassVar[int]
    ESCAPECHAR_FIELD_NUMBER: _ClassVar[int]
    HASINDEXCOLUMN_FIELD_NUMBER: _ClassVar[int]
    HEADER_FIELD_NUMBER: _ClassVar[int]
    MAXROWS_FIELD_NUMBER: _ClassVar[int]
    NULLVALUES_FIELD_NUMBER: _ClassVar[int]
    QUOTE_FIELD_NUMBER: _ClassVar[int]
    SKIPROWS_FIELD_NUMBER: _ClassVar[int]
    STRICT_FIELD_NUMBER: _ClassVar[int]
    commentChars: str
    compression: str
    delimiter: str
    encoding: str
    escapeChar: str
    hasIndexColumn: bool
    header: bool
    maxRows: int
    nullValues: str
    quote: str
    skipRows: int
    strict: bool
    def __init__(self, delimiter: _Optional[str] = ..., quote: _Optional[str] = ..., escapeChar: _Optional[str] = ..., commentChars: _Optional[str] = ..., header: bool = ..., skipRows: _Optional[int] = ..., nullValues: _Optional[str] = ..., encoding: _Optional[str] = ..., maxRows: _Optional[int] = ..., strict: bool = ..., compression: _Optional[str] = ..., hasIndexColumn: bool = ...) -> None: ...

class DataInputSpec(_message.Message):
    __slots__ = ["format", "location"]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    format: FlatFileFormatSpec
    location: _generated_pb2.DataLocation
    def __init__(self, location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., format: _Optional[_Union[FlatFileFormatSpec, _Mapping]] = ...) -> None: ...

class DataOutputSpec(_message.Message):
    __slots__ = ["action", "createTableIfNotExist", "datasetName", "detectOutliers", "format", "includeFeatures", "includeShapValues", "location"]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    CREATETABLEIFNOTEXIST_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    DETECTOUTLIERS_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    INCLUDEFEATURES_FIELD_NUMBER: _ClassVar[int]
    INCLUDESHAPVALUES_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    action: str
    createTableIfNotExist: bool
    datasetName: str
    detectOutliers: bool
    format: str
    includeFeatures: bool
    includeShapValues: bool
    location: _generated_pb2.DataLocation
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DataPipeline]
    metadata: _generated_pb2_1_1.ListMeta
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
    __slots__ = ["lastTransitionTime", "message", "reason", "status", "type"]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastTransitionTime: _generated_pb2_1_1.Time
    message: str
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class DataPipelineRunList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DataPipelineRun]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataPipelineRun, _Mapping]]] = ...) -> None: ...

class DataPipelineRunSpec(_message.Message):
    __slots__ = ["aborted", "datapipelineName", "labRef", "modelClassName", "modelClassRunName", "owner", "paused", "priority", "resources", "versionName"]
    ABORTED_FIELD_NUMBER: _ClassVar[int]
    DATAPIPELINENAME_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    aborted: bool
    datapipelineName: str
    labRef: _generated_pb2_1.ObjectReference
    modelClassName: str
    modelClassRunName: str
    owner: str
    paused: bool
    priority: str
    resources: _generated_pb2.ResourceSpec
    versionName: str
    def __init__(self, versionName: _Optional[str] = ..., datapipelineName: _Optional[str] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., priority: _Optional[str] = ..., paused: bool = ..., aborted: bool = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ...) -> None: ...

class DataPipelineRunStatus(_message.Message):
    __slots__ = ["completedAt", "conditions", "failureMessage", "failureReason", "logs", "observedGeneration", "output", "phase", "progress", "recipeRuns", "updatedAt"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    RECIPERUNS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    failureReason: str
    logs: _generated_pb2.Logs
    observedGeneration: int
    output: _generated_pb2.DataLocation
    phase: str
    progress: int
    recipeRuns: _containers.RepeatedScalarFieldContainer[str]
    updatedAt: _generated_pb2_1_1.Time
    def __init__(self, recipeRuns: _Optional[_Iterable[str]] = ..., output: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., phase: _Optional[str] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., progress: _Optional[int] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DataPipelineSpec(_message.Message):
    __slots__ = ["datasetSelector", "description", "modelClassName", "notification", "output", "owner", "paused", "priority", "recipes", "resources", "schedule", "ttl", "versionName"]
    class DatasetSelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    DATASETSELECTOR_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    RECIPES_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    datasetSelector: _containers.ScalarMap[str, str]
    description: str
    modelClassName: str
    notification: _generated_pb2.NotificationSpec
    output: DataOutputSpec
    owner: str
    paused: bool
    priority: str
    recipes: _containers.RepeatedCompositeFieldContainer[RecipePartSpec]
    resources: _generated_pb2.ResourceSpec
    schedule: _generated_pb2.RunSchedule
    ttl: int
    versionName: str
    def __init__(self, versionName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., description: _Optional[str] = ..., datasetSelector: _Optional[_Mapping[str, str]] = ..., recipes: _Optional[_Iterable[_Union[RecipePartSpec, _Mapping]]] = ..., output: _Optional[_Union[DataOutputSpec, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., priority: _Optional[str] = ..., paused: bool = ..., ttl: _Optional[int] = ...) -> None: ...

class DataPipelineStatus(_message.Message):
    __slots__ = ["conditions", "lastRunName", "observedGeneration", "runsCount", "schedule", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    LASTRUNNAME_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    RUNSCOUNT_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    lastRunName: str
    observedGeneration: int
    runsCount: int
    schedule: _generated_pb2.RunScheduleStatus
    updatedAt: _generated_pb2_1_1.Time
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DataProduct]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataProduct, _Mapping]]] = ...) -> None: ...

class DataProductSpec(_message.Message):
    __slots__ = ["approval", "cacheBucketName", "color", "defaultBucketName", "defaultLabName", "defaultServingSiteName", "description", "gitLocation", "notification", "owner", "permissions", "priority", "public", "servingResources", "subtask", "tags", "task", "tenantRef", "trainingResources"]
    APPROVAL_FIELD_NUMBER: _ClassVar[int]
    CACHEBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    COLOR_FIELD_NUMBER: _ClassVar[int]
    DEFAULTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTLABNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTSERVINGSITENAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    GITLOCATION_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    PUBLIC_FIELD_NUMBER: _ClassVar[int]
    SERVINGRESOURCES_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    TRAININGRESOURCES_FIELD_NUMBER: _ClassVar[int]
    approval: ApprovalSpec
    cacheBucketName: str
    color: str
    defaultBucketName: str
    defaultLabName: str
    defaultServingSiteName: str
    description: str
    gitLocation: GitLocation
    notification: _generated_pb2.NotificationSpec
    owner: str
    permissions: _generated_pb2.PermissionsSpec
    priority: str
    public: bool
    servingResources: _generated_pb2.ResourceSpec
    subtask: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    task: str
    tenantRef: _generated_pb2_1.ObjectReference
    trainingResources: _generated_pb2.ResourceSpec
    def __init__(self, owner: _Optional[str] = ..., public: bool = ..., tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., gitLocation: _Optional[_Union[GitLocation, _Mapping]] = ..., cacheBucketName: _Optional[str] = ..., defaultLabName: _Optional[str] = ..., defaultServingSiteName: _Optional[str] = ..., defaultBucketName: _Optional[str] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., description: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., trainingResources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., servingResources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., priority: _Optional[str] = ..., color: _Optional[str] = ..., approval: _Optional[_Union[ApprovalSpec, _Mapping]] = ..., permissions: _Optional[_Union[_generated_pb2.PermissionsSpec, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class DataProductStatus(_message.Message):
    __slots__ = ["baselineVersion", "conditions", "dataAppsCount", "dataPipelineCount", "datasetsCount", "datasourcesCount", "errorAlertsCount", "failureMessage", "failureReason", "infoAlertsCount", "modelClassesCount", "modelsCount", "observedGeneration", "predictionsCount", "predictorsCount", "studiesCount", "totalDataPipelineRuns", "updatedAt"]
    BASELINEVERSION_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    DATAAPPSCOUNT_FIELD_NUMBER: _ClassVar[int]
    DATAPIPELINECOUNT_FIELD_NUMBER: _ClassVar[int]
    DATASETSCOUNT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCESCOUNT_FIELD_NUMBER: _ClassVar[int]
    ERRORALERTSCOUNT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    INFOALERTSCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSESCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONSCOUNT_FIELD_NUMBER: _ClassVar[int]
    PREDICTORSCOUNT_FIELD_NUMBER: _ClassVar[int]
    STUDIESCOUNT_FIELD_NUMBER: _ClassVar[int]
    TOTALDATAPIPELINERUNS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    baselineVersion: str
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    dataAppsCount: int
    dataPipelineCount: int
    datasetsCount: int
    datasourcesCount: int
    errorAlertsCount: int
    failureMessage: str
    failureReason: str
    infoAlertsCount: int
    modelClassesCount: int
    modelsCount: int
    observedGeneration: int
    predictionsCount: int
    predictorsCount: int
    studiesCount: int
    totalDataPipelineRuns: int
    updatedAt: _generated_pb2_1_1.Time
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DataProductVersion]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataProductVersion, _Mapping]]] = ...) -> None: ...

class DataProductVersionSpec(_message.Message):
    __slots__ = ["baseline", "description", "owner", "prevVersionName", "productRef"]
    BASELINE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PREVVERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    PRODUCTREF_FIELD_NUMBER: _ClassVar[int]
    baseline: bool
    description: str
    owner: str
    prevVersionName: str
    productRef: _generated_pb2_1.ObjectReference
    def __init__(self, productRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., description: _Optional[str] = ..., prevVersionName: _Optional[str] = ..., baseline: bool = ..., owner: _Optional[str] = ...) -> None: ...

class DataProductVersionStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "failureReason", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    failureReason: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DataSource]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataSource, _Mapping]]] = ...) -> None: ...

class DataSourceSpec(_message.Message):
    __slots__ = ["datasetType", "description", "flatfile", "inferredFrom", "ingestMethod", "labeled", "labeling", "owner", "relationships", "sample", "schema", "subtask", "task", "unitTestsTemplate", "versionName"]
    DATASETTYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    FLATFILE_FIELD_NUMBER: _ClassVar[int]
    INFERREDFROM_FIELD_NUMBER: _ClassVar[int]
    INGESTMETHOD_FIELD_NUMBER: _ClassVar[int]
    LABELED_FIELD_NUMBER: _ClassVar[int]
    LABELING_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RELATIONSHIPS_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    datasetType: str
    description: str
    flatfile: FlatFileFormatSpec
    inferredFrom: _generated_pb2.DataLocation
    ingestMethod: str
    labeled: bool
    labeling: LabelingSpec
    owner: str
    relationships: _containers.RepeatedCompositeFieldContainer[RelationshipSpec]
    sample: SampleSpec
    schema: Schema
    subtask: str
    task: str
    unitTestsTemplate: _generated_pb2.TestSuite
    versionName: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., datasetType: _Optional[str] = ..., schema: _Optional[_Union[Schema, _Mapping]] = ..., flatfile: _Optional[_Union[FlatFileFormatSpec, _Mapping]] = ..., labeled: bool = ..., sample: _Optional[_Union[SampleSpec, _Mapping]] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., relationships: _Optional[_Iterable[_Union[RelationshipSpec, _Mapping]]] = ..., labeling: _Optional[_Union[LabelingSpec, _Mapping]] = ..., inferredFrom: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., unitTestsTemplate: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., ingestMethod: _Optional[str] = ...) -> None: ...

class DataSourceStatus(_message.Message):
    __slots__ = ["cols", "conditions", "failureMessage", "failureReason", "lastDatasetCreatedAt", "lastDatasetName", "observedGeneration", "updatedAt"]
    COLS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    LASTDATASETCREATEDAT_FIELD_NUMBER: _ClassVar[int]
    LASTDATASETNAME_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    cols: int
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    failureReason: str
    lastDatasetCreatedAt: _generated_pb2_1_1.Time
    lastDatasetName: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
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
    __slots__ = ["datasetsURI", "featuresURI", "profilesURI", "reportsURI", "unitTestsURI", "workerResults"]
    DATASETSURI_FIELD_NUMBER: _ClassVar[int]
    FEATURESURI_FIELD_NUMBER: _ClassVar[int]
    PROFILESURI_FIELD_NUMBER: _ClassVar[int]
    REPORTSURI_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSURI_FIELD_NUMBER: _ClassVar[int]
    WORKERRESULTS_FIELD_NUMBER: _ClassVar[int]
    datasetsURI: str
    featuresURI: str
    profilesURI: str
    reportsURI: str
    unitTestsURI: str
    workerResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.WorkerRunResult]
    def __init__(self, datasetsURI: _Optional[str] = ..., profilesURI: _Optional[str] = ..., reportsURI: _Optional[str] = ..., unitTestsURI: _Optional[str] = ..., featuresURI: _Optional[str] = ..., workerResults: _Optional[_Iterable[_Union[_generated_pb2.WorkerRunResult, _Mapping]]] = ...) -> None: ...

class DatasetList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Dataset]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Dataset, _Mapping]]] = ...) -> None: ...

class DatasetRun(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: DatasetRunSpec
    status: DatasetRunStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DatasetRunSpec, _Mapping]] = ..., status: _Optional[_Union[DatasetRunStatus, _Mapping]] = ...) -> None: ...

class DatasetRunList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DatasetRun]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DatasetRun, _Mapping]]] = ...) -> None: ...

class DatasetRunSpec(_message.Message):
    __slots__ = ["abort", "datasetName", "datasetVersion", "modelClassRunName", "owner", "pause", "runVersion", "timeout"]
    ABORT_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    DATASETVERSION_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PAUSE_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    abort: bool
    datasetName: str
    datasetVersion: int
    modelClassRunName: str
    owner: str
    pause: bool
    runVersion: int
    timeout: int
    def __init__(self, owner: _Optional[str] = ..., runVersion: _Optional[int] = ..., datasetName: _Optional[str] = ..., datasetVersion: _Optional[int] = ..., timeout: _Optional[int] = ..., pause: bool = ..., abort: bool = ..., modelClassRunName: _Optional[str] = ...) -> None: ...

class DatasetRunStatus(_message.Message):
    __slots__ = ["anomaliesLocation", "completedAt", "conditions", "failureMessage", "featureHistogramRef", "groupby", "hash", "images", "imbalanced", "lastStudyAt", "logs", "manifestLocation", "observedGeneration", "phase", "profileLocation", "progress", "reportLocation", "reportName", "statistics", "unitTestResults", "updatedAt"]
    ANOMALIESLOCATION_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FEATUREHISTOGRAMREF_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    HASH_FIELD_NUMBER: _ClassVar[int]
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    IMBALANCED_FIELD_NUMBER: _ClassVar[int]
    LASTSTUDYAT_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    MANIFESTLOCATION_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    REPORTLOCATION_FIELD_NUMBER: _ClassVar[int]
    REPORTNAME_FIELD_NUMBER: _ClassVar[int]
    STATISTICS_FIELD_NUMBER: _ClassVar[int]
    UNITTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    anomaliesLocation: _generated_pb2.FileLocation
    completedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    featureHistogramRef: _generated_pb2_1.ObjectReference
    groupby: DatasetGroupByStatus
    hash: str
    images: _generated_pb2.Images
    imbalanced: bool
    lastStudyAt: _generated_pb2_1_1.Time
    logs: _generated_pb2.Logs
    manifestLocation: _generated_pb2.FileLocation
    observedGeneration: int
    phase: str
    profileLocation: _generated_pb2.FileLocation
    progress: int
    reportLocation: _generated_pb2.FileLocation
    reportName: str
    statistics: DatasetStatistics
    unitTestResults: _generated_pb2.TestSuiteResult
    updatedAt: _generated_pb2_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., manifestLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., statistics: _Optional[_Union[DatasetStatistics, _Mapping]] = ..., phase: _Optional[str] = ..., reportName: _Optional[str] = ..., reportLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., profileLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., anomaliesLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., imbalanced: bool = ..., unitTestResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., failureMessage: _Optional[str] = ..., progress: _Optional[int] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., hash: _Optional[str] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastStudyAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., images: _Optional[_Union[_generated_pb2.Images, _Mapping]] = ..., featureHistogramRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., groupby: _Optional[_Union[DatasetGroupByStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DatasetSpec(_message.Message):
    __slots__ = ["artifactBucketName", "correlation", "dataSourceName", "description", "fast", "featureGroupName", "featureGroups", "generateFeatureHistogram", "groupBy", "groupLocations", "key", "labRef", "modelClassName", "modelClassRunName", "notification", "origin", "owner", "predictorRef", "report", "resources", "role", "run", "sample", "schedule", "servingDatasetRef", "subtask", "synthetic", "tags", "task", "type", "unitTest", "unitTests"]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    CORRELATION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCENAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    FAST_FIELD_NUMBER: _ClassVar[int]
    FEATUREGROUPNAME_FIELD_NUMBER: _ClassVar[int]
    FEATUREGROUPS_FIELD_NUMBER: _ClassVar[int]
    GENERATEFEATUREHISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    GROUPLOCATIONS_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    ORIGIN_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PREDICTORREF_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    SERVINGDATASETREF_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    SYNTHETIC_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    UNITTEST_FIELD_NUMBER: _ClassVar[int]
    artifactBucketName: str
    correlation: CorrelationSpec
    dataSourceName: str
    description: str
    fast: bool
    featureGroupName: str
    featureGroups: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.ObjectReference]
    generateFeatureHistogram: bool
    groupBy: GroupBySpec
    groupLocations: GroupDatasetLocationSpec
    key: _containers.RepeatedScalarFieldContainer[str]
    labRef: _generated_pb2_1.ObjectReference
    modelClassName: str
    modelClassRunName: str
    notification: _generated_pb2.NotificationSpec
    origin: _generated_pb2.DataLocation
    owner: str
    predictorRef: _generated_pb2_1.ObjectReference
    report: bool
    resources: _generated_pb2.ResourceSpec
    role: str
    run: _generated_pb2.RunSpec
    sample: SampleSpec
    schedule: _generated_pb2.RunSchedule
    servingDatasetRef: _generated_pb2_1.ObjectReference
    subtask: str
    synthetic: SyntheticSpec
    tags: _containers.RepeatedScalarFieldContainer[str]
    task: str
    type: str
    unitTest: bool
    unitTests: _generated_pb2.TestSuite
    def __init__(self, owner: _Optional[str] = ..., dataSourceName: _Optional[str] = ..., description: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2.RunSpec, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., role: _Optional[str] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., type: _Optional[str] = ..., origin: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., unitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., report: bool = ..., unitTest: bool = ..., generateFeatureHistogram: bool = ..., fast: bool = ..., artifactBucketName: _Optional[str] = ..., sample: _Optional[_Union[SampleSpec, _Mapping]] = ..., synthetic: _Optional[_Union[SyntheticSpec, _Mapping]] = ..., correlation: _Optional[_Union[CorrelationSpec, _Mapping]] = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., servingDatasetRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., predictorRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., groupBy: _Optional[_Union[GroupBySpec, _Mapping]] = ..., groupLocations: _Optional[_Union[GroupDatasetLocationSpec, _Mapping]] = ..., key: _Optional[_Iterable[str]] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ..., featureGroups: _Optional[_Iterable[_Union[_generated_pb2_1.ObjectReference, _Mapping]]] = ..., featureGroupName: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class DatasetStatistics(_message.Message):
    __slots__ = ["columns", "correlationsWithTarget", "features", "rows", "sizeInBytes", "topCorrelations"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    CORRELATIONSWITHTARGET_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    SIZEINBYTES_FIELD_NUMBER: _ClassVar[int]
    TOPCORRELATIONS_FIELD_NUMBER: _ClassVar[int]
    columns: int
    correlationsWithTarget: _containers.RepeatedCompositeFieldContainer[Correlation]
    features: _containers.RepeatedCompositeFieldContainer[FeatureStatistics]
    rows: int
    sizeInBytes: int
    topCorrelations: _containers.RepeatedCompositeFieldContainer[Correlation]
    def __init__(self, features: _Optional[_Iterable[_Union[FeatureStatistics, _Mapping]]] = ..., rows: _Optional[int] = ..., columns: _Optional[int] = ..., sizeInBytes: _Optional[int] = ..., correlationsWithTarget: _Optional[_Iterable[_Union[Correlation, _Mapping]]] = ..., topCorrelations: _Optional[_Iterable[_Union[Correlation, _Mapping]]] = ...) -> None: ...

class DatasetStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "lastRunAt", "observedGeneration", "runVersion", "schedule", "updatedAt", "version"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LASTRUNAT_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    lastRunAt: _generated_pb2_1_1.Time
    observedGeneration: int
    runVersion: int
    schedule: _generated_pb2.RunScheduleStatus
    updatedAt: _generated_pb2_1_1.Time
    version: int
    def __init__(self, observedGeneration: _Optional[int] = ..., version: _Optional[int] = ..., runVersion: _Optional[int] = ..., lastRunAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Entity]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Entity, _Mapping]]] = ...) -> None: ...

class EntitySpec(_message.Message):
    __slots__ = ["description", "joinKey", "owner", "tags", "tenantRef"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    JOINKEY_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    description: str
    joinKey: str
    owner: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., description: _Optional[str] = ..., joinKey: _Optional[str] = ..., owner: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ...) -> None: ...

class EntityStatus(_message.Message):
    __slots__ = ["conditions", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class ExcelNotebookSpec(_message.Message):
    __slots__ = ["columnNameRow", "data", "firstSheetWithData", "sheetIndex", "sheetName"]
    COLUMNNAMEROW_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    FIRSTSHEETWITHDATA_FIELD_NUMBER: _ClassVar[int]
    SHEETINDEX_FIELD_NUMBER: _ClassVar[int]
    SHEETNAME_FIELD_NUMBER: _ClassVar[int]
    columnNameRow: int
    data: ExcelSheetArea
    firstSheetWithData: bool
    sheetIndex: int
    sheetName: str
    def __init__(self, firstSheetWithData: bool = ..., sheetName: _Optional[str] = ..., sheetIndex: _Optional[int] = ..., columnNameRow: _Optional[int] = ..., data: _Optional[_Union[ExcelSheetArea, _Mapping]] = ...) -> None: ...

class ExcelSheetArea(_message.Message):
    __slots__ = ["entireSheet", "fromColumn", "fromRow", "toColumn", "toRow"]
    ENTIRESHEET_FIELD_NUMBER: _ClassVar[int]
    FROMCOLUMN_FIELD_NUMBER: _ClassVar[int]
    FROMROW_FIELD_NUMBER: _ClassVar[int]
    TOCOLUMN_FIELD_NUMBER: _ClassVar[int]
    TOROW_FIELD_NUMBER: _ClassVar[int]
    entireSheet: bool
    fromColumn: int
    fromRow: int
    toColumn: int
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[FeatureGroup]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[FeatureGroup, _Mapping]]] = ...) -> None: ...

class FeatureGroupSpec(_message.Message):
    __slots__ = ["artifactBucketName", "description", "entityName", "flatfile", "ingestSchedule", "ingestType", "keyColumn", "labRef", "location", "materialization", "owner", "resources", "schema", "syncSchedule", "tags", "tenantRef", "tests", "timeColumn", "timeColumnFormat"]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENTITYNAME_FIELD_NUMBER: _ClassVar[int]
    FLATFILE_FIELD_NUMBER: _ClassVar[int]
    INGESTSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    INGESTTYPE_FIELD_NUMBER: _ClassVar[int]
    KEYCOLUMN_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    MATERIALIZATION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    SYNCSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    TIMECOLUMNFORMAT_FIELD_NUMBER: _ClassVar[int]
    TIMECOLUMN_FIELD_NUMBER: _ClassVar[int]
    artifactBucketName: str
    description: str
    entityName: str
    flatfile: FlatFileFormatSpec
    ingestSchedule: _generated_pb2.RunSchedule
    ingestType: str
    keyColumn: str
    labRef: _generated_pb2_1.ObjectReference
    location: _generated_pb2.DataLocation
    materialization: MaterializationSpec
    owner: str
    resources: _generated_pb2.ResourceSpec
    schema: Schema
    syncSchedule: _generated_pb2.RunSchedule
    tags: _containers.RepeatedScalarFieldContainer[str]
    tenantRef: _generated_pb2_1.ObjectReference
    tests: _generated_pb2.TestSuite
    timeColumn: str
    timeColumnFormat: str
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., owner: _Optional[str] = ..., description: _Optional[str] = ..., artifactBucketName: _Optional[str] = ..., ingestType: _Optional[str] = ..., entityName: _Optional[str] = ..., tags: _Optional[_Iterable[str]] = ..., ingestSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., syncSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., flatfile: _Optional[_Union[FlatFileFormatSpec, _Mapping]] = ..., schema: _Optional[_Union[Schema, _Mapping]] = ..., tests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., timeColumn: _Optional[str] = ..., timeColumnFormat: _Optional[str] = ..., keyColumn: _Optional[str] = ..., materialization: _Optional[_Union[MaterializationSpec, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ...) -> None: ...

class FeatureGroupStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "failureReason", "ingestDatasetName", "ingestSchedule", "observedGeneration", "onlineTable", "onlineTableCreated", "phase", "rows", "syncSchedule", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    INGESTDATASETNAME_FIELD_NUMBER: _ClassVar[int]
    INGESTSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    ONLINETABLECREATED_FIELD_NUMBER: _ClassVar[int]
    ONLINETABLE_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    SYNCSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    failureReason: str
    ingestDatasetName: str
    ingestSchedule: _generated_pb2.RunScheduleStatus
    observedGeneration: int
    onlineTable: _generated_pb2.DataLocation
    onlineTableCreated: _generated_pb2_1_1.Time
    phase: str
    rows: int
    syncSchedule: _generated_pb2.RunScheduleStatus
    updatedAt: _generated_pb2_1_1.Time
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[FeatureHistogram]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[FeatureHistogram, _Mapping]]] = ...) -> None: ...

class FeatureHistogramSpec(_message.Message):
    __slots__ = ["baseRef", "columns", "description", "driftThresholds", "end", "featureFilter", "genUnitTests", "live", "owner", "referenceType", "sourceRef", "start", "syncIntervalSec", "training", "unitTests", "versionName"]
    BASEREF_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DRIFTTHRESHOLDS_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    FEATUREFILTER_FIELD_NUMBER: _ClassVar[int]
    GENUNITTESTS_FIELD_NUMBER: _ClassVar[int]
    LIVE_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    REFERENCETYPE_FIELD_NUMBER: _ClassVar[int]
    SOURCEREF_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    SYNCINTERVALSEC_FIELD_NUMBER: _ClassVar[int]
    TRAINING_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    baseRef: _generated_pb2_1.ObjectReference
    columns: _containers.RepeatedScalarFieldContainer[str]
    description: str
    driftThresholds: _containers.RepeatedCompositeFieldContainer[DriftThreshold]
    end: _generated_pb2_1_1.Time
    featureFilter: str
    genUnitTests: bool
    live: bool
    owner: str
    referenceType: str
    sourceRef: _generated_pb2_1.ObjectReference
    start: _generated_pb2_1_1.Time
    syncIntervalSec: int
    training: bool
    unitTests: _generated_pb2.TestSuite
    versionName: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., columns: _Optional[_Iterable[str]] = ..., sourceRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., training: bool = ..., live: bool = ..., start: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., end: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., baseRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., driftThresholds: _Optional[_Iterable[_Union[DriftThreshold, _Mapping]]] = ..., syncIntervalSec: _Optional[int] = ..., unitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., genUnitTests: bool = ..., featureFilter: _Optional[str] = ..., referenceType: _Optional[str] = ...) -> None: ...

class FeatureHistogramStatus(_message.Message):
    __slots__ = ["columns", "conditions", "errors", "failureMessage", "failureReason", "logs", "observedGeneration", "phase", "total", "unitTestsResult", "updatedAt"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSRESULT_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[ColumnHistogram]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    errors: int
    failureMessage: str
    failureReason: str
    logs: _generated_pb2.Logs
    observedGeneration: int
    phase: str
    total: int
    unitTestsResult: _generated_pb2.TestSuiteResult
    updatedAt: _generated_pb2_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., columns: _Optional[_Iterable[_Union[ColumnHistogram, _Mapping]]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., phase: _Optional[str] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., unitTestsResult: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., total: _Optional[int] = ..., errors: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class FeatureStatistics(_message.Message):
    __slots__ = ["completeness", "constant", "corrToTarget", "count", "datatype", "distinct", "distinctValueCount", "duplicate", "highCardinality", "highCorrWithOtherFeatures", "highMissingPct", "histogram", "ignore", "importance", "index", "invalid", "iqr", "kurtosis", "lowCorrWithTarget", "mad", "max", "mean", "min", "missing", "mode", "mostFreqValuesRatio", "name", "nullable", "outliers", "p25", "p50", "p75", "percentMissing", "reserved", "skewed", "skewness", "stddev", "sum", "target", "variance", "zeros"]
    COMPLETENESS_FIELD_NUMBER: _ClassVar[int]
    CONSTANT_FIELD_NUMBER: _ClassVar[int]
    CORRTOTARGET_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    DATATYPE_FIELD_NUMBER: _ClassVar[int]
    DISTINCTVALUECOUNT_FIELD_NUMBER: _ClassVar[int]
    DISTINCT_FIELD_NUMBER: _ClassVar[int]
    DUPLICATE_FIELD_NUMBER: _ClassVar[int]
    HIGHCARDINALITY_FIELD_NUMBER: _ClassVar[int]
    HIGHCORRWITHOTHERFEATURES_FIELD_NUMBER: _ClassVar[int]
    HIGHMISSINGPCT_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    IGNORE_FIELD_NUMBER: _ClassVar[int]
    IMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    INVALID_FIELD_NUMBER: _ClassVar[int]
    IQR_FIELD_NUMBER: _ClassVar[int]
    KURTOSIS_FIELD_NUMBER: _ClassVar[int]
    LOWCORRWITHTARGET_FIELD_NUMBER: _ClassVar[int]
    MAD_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    MEAN_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    MISSING_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    MOSTFREQVALUESRATIO_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NULLABLE_FIELD_NUMBER: _ClassVar[int]
    OUTLIERS_FIELD_NUMBER: _ClassVar[int]
    P25_FIELD_NUMBER: _ClassVar[int]
    P50_FIELD_NUMBER: _ClassVar[int]
    P75_FIELD_NUMBER: _ClassVar[int]
    PERCENTMISSING_FIELD_NUMBER: _ClassVar[int]
    RESERVED_FIELD_NUMBER: _ClassVar[int]
    SKEWED_FIELD_NUMBER: _ClassVar[int]
    SKEWNESS_FIELD_NUMBER: _ClassVar[int]
    STDDEV_FIELD_NUMBER: _ClassVar[int]
    SUM_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    VARIANCE_FIELD_NUMBER: _ClassVar[int]
    ZEROS_FIELD_NUMBER: _ClassVar[int]
    completeness: float
    constant: bool
    corrToTarget: float
    count: float
    datatype: str
    distinct: int
    distinctValueCount: float
    duplicate: bool
    highCardinality: bool
    highCorrWithOtherFeatures: bool
    highMissingPct: bool
    histogram: _generated_pb2.HistogramData
    ignore: bool
    importance: float
    index: int
    invalid: int
    iqr: float
    kurtosis: float
    lowCorrWithTarget: bool
    mad: float
    max: float
    mean: float
    min: float
    missing: int
    mode: str
    mostFreqValuesRatio: float
    name: str
    nullable: bool
    outliers: OutlierStatistics
    p25: float
    p50: float
    p75: float
    percentMissing: float
    reserved: bool
    skewed: bool
    skewness: float
    stddev: float
    sum: int
    target: bool
    variance: float
    zeros: float
    def __init__(self, name: _Optional[str] = ..., datatype: _Optional[str] = ..., count: _Optional[float] = ..., distinct: _Optional[int] = ..., missing: _Optional[int] = ..., percentMissing: _Optional[float] = ..., mean: _Optional[float] = ..., stddev: _Optional[float] = ..., variance: _Optional[float] = ..., min: _Optional[float] = ..., max: _Optional[float] = ..., kurtosis: _Optional[float] = ..., skewness: _Optional[float] = ..., sum: _Optional[int] = ..., mad: _Optional[float] = ..., p25: _Optional[float] = ..., p50: _Optional[float] = ..., p75: _Optional[float] = ..., iqr: _Optional[float] = ..., mode: _Optional[str] = ..., zeros: _Optional[float] = ..., invalid: _Optional[int] = ..., importance: _Optional[float] = ..., target: bool = ..., ignore: bool = ..., nullable: bool = ..., highCardinality: bool = ..., highCorrWithOtherFeatures: bool = ..., lowCorrWithTarget: bool = ..., highMissingPct: bool = ..., skewed: bool = ..., constant: bool = ..., duplicate: bool = ..., reserved: bool = ..., completeness: _Optional[float] = ..., distinctValueCount: _Optional[float] = ..., mostFreqValuesRatio: _Optional[float] = ..., histogram: _Optional[_Union[_generated_pb2.HistogramData, _Mapping]] = ..., corrToTarget: _Optional[float] = ..., index: _Optional[int] = ..., outliers: _Optional[_Union[OutlierStatistics, _Mapping]] = ...) -> None: ...

class FlatFileFormatSpec(_message.Message):
    __slots__ = ["csv", "excel", "fileType", "parquet"]
    CSV_FIELD_NUMBER: _ClassVar[int]
    EXCEL_FIELD_NUMBER: _ClassVar[int]
    FILETYPE_FIELD_NUMBER: _ClassVar[int]
    PARQUET_FIELD_NUMBER: _ClassVar[int]
    csv: CsvFileSpec
    excel: ExcelNotebookSpec
    fileType: str
    parquet: ParquetFileSpec
    def __init__(self, fileType: _Optional[str] = ..., csv: _Optional[_Union[CsvFileSpec, _Mapping]] = ..., excel: _Optional[_Union[ExcelNotebookSpec, _Mapping]] = ..., parquet: _Optional[_Union[ParquetFileSpec, _Mapping]] = ...) -> None: ...

class GaugeSpec(_message.Message):
    __slots__ = ["column", "datasetName", "row", "scalar"]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    ROW_FIELD_NUMBER: _ClassVar[int]
    SCALAR_FIELD_NUMBER: _ClassVar[int]
    column: str
    datasetName: str
    row: int
    scalar: str
    def __init__(self, datasetName: _Optional[str] = ..., column: _Optional[str] = ..., row: _Optional[int] = ..., scalar: _Optional[str] = ...) -> None: ...

class GitLocation(_message.Message):
    __slots__ = ["branch", "gitConnectionName", "private", "url"]
    BRANCH_FIELD_NUMBER: _ClassVar[int]
    GITCONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    branch: str
    gitConnectionName: str
    private: bool
    url: str
    def __init__(self, gitConnectionName: _Optional[str] = ..., url: _Optional[str] = ..., branch: _Optional[str] = ..., private: bool = ...) -> None: ...

class GroupBySpec(_message.Message):
    __slots__ = ["aggregate", "enabled", "frequency", "groupBy", "interval"]
    AGGREGATE_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    FREQUENCY_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    aggregate: str
    enabled: bool
    frequency: str
    groupBy: _containers.RepeatedScalarFieldContainer[str]
    interval: int
    def __init__(self, enabled: bool = ..., groupBy: _Optional[_Iterable[str]] = ..., frequency: _Optional[str] = ..., interval: _Optional[int] = ..., aggregate: _Optional[str] = ...) -> None: ...

class GroupDatasetLocationSpec(_message.Message):
    __slots__ = ["groupDataFile", "groupDataFolder", "groupFeaturesFile", "groupProfileFolder", "groupReportFile", "groupRoot", "groupsRoot"]
    GROUPDATAFILE_FIELD_NUMBER: _ClassVar[int]
    GROUPDATAFOLDER_FIELD_NUMBER: _ClassVar[int]
    GROUPFEATURESFILE_FIELD_NUMBER: _ClassVar[int]
    GROUPPROFILEFOLDER_FIELD_NUMBER: _ClassVar[int]
    GROUPREPORTFILE_FIELD_NUMBER: _ClassVar[int]
    GROUPROOT_FIELD_NUMBER: _ClassVar[int]
    GROUPSROOT_FIELD_NUMBER: _ClassVar[int]
    groupDataFile: str
    groupDataFolder: str
    groupFeaturesFile: str
    groupProfileFolder: str
    groupReportFile: str
    groupRoot: str
    groupsRoot: str
    def __init__(self, groupsRoot: _Optional[str] = ..., groupRoot: _Optional[str] = ..., groupDataFolder: _Optional[str] = ..., groupDataFile: _Optional[str] = ..., groupProfileFolder: _Optional[str] = ..., groupReportFile: _Optional[str] = ..., groupFeaturesFile: _Optional[str] = ...) -> None: ...

class HistogramSpec(_message.Message):
    __slots__ = ["bins", "datasetName", "x"]
    BINS_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    bins: int
    datasetName: str
    x: str
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
    __slots__ = ["enabled", "negative", "positive", "resultColumn"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    NEGATIVE_FIELD_NUMBER: _ClassVar[int]
    POSITIVE_FIELD_NUMBER: _ClassVar[int]
    RESULTCOLUMN_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    negative: _containers.RepeatedCompositeFieldContainer[LabelingRule]
    positive: _containers.RepeatedCompositeFieldContainer[LabelingRule]
    resultColumn: str
    def __init__(self, enabled: bool = ..., resultColumn: _Optional[str] = ..., positive: _Optional[_Iterable[_Union[LabelingRule, _Mapping]]] = ..., negative: _Optional[_Iterable[_Union[LabelingRule, _Mapping]]] = ...) -> None: ...

class LineChartSpec(_message.Message):
    __slots__ = ["datasetName", "legend", "x", "y"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    LEGEND_FIELD_NUMBER: _ClassVar[int]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    legend: bool
    x: str
    y: str
    def __init__(self, datasetName: _Optional[str] = ..., x: _Optional[str] = ..., y: _Optional[str] = ..., legend: bool = ...) -> None: ...

class MaterializationSpec(_message.Message):
    __slots__ = ["backfill", "offline", "offlineTTL", "online", "onlineTTL", "schedule", "startDate"]
    BACKFILL_FIELD_NUMBER: _ClassVar[int]
    OFFLINETTL_FIELD_NUMBER: _ClassVar[int]
    OFFLINE_FIELD_NUMBER: _ClassVar[int]
    ONLINETTL_FIELD_NUMBER: _ClassVar[int]
    ONLINE_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    STARTDATE_FIELD_NUMBER: _ClassVar[int]
    backfill: int
    offline: bool
    offlineTTL: int
    online: bool
    onlineTTL: int
    schedule: _generated_pb2.RunSchedule
    startDate: _generated_pb2_1_1.Time
    def __init__(self, online: bool = ..., offline: bool = ..., startDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., offlineTTL: _Optional[int] = ..., onlineTTL: _Optional[int] = ..., backfill: _Optional[int] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ...) -> None: ...

class MetricSpec(_message.Message):
    __slots__ = ["column", "datasetName", "row", "scalar"]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    ROW_FIELD_NUMBER: _ClassVar[int]
    SCALAR_FIELD_NUMBER: _ClassVar[int]
    column: str
    datasetName: str
    row: int
    scalar: str
    def __init__(self, datasetName: _Optional[str] = ..., column: _Optional[str] = ..., row: _Optional[int] = ..., scalar: _Optional[str] = ...) -> None: ...

class OutlierStatistics(_message.Message):
    __slots__ = ["lower", "percent", "upper"]
    LOWER_FIELD_NUMBER: _ClassVar[int]
    PERCENT_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    lower: int
    percent: float
    upper: int
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
    __slots__ = ["datasetName", "format", "location"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    format: str
    location: _generated_pb2.DataLocation
    def __init__(self, datasetName: _Optional[str] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., format: _Optional[str] = ...) -> None: ...

class RecipeList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Recipe]
    metadata: _generated_pb2_1_1.ListMeta
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
    __slots__ = ["dependents", "recipeName"]
    DEPENDENTS_FIELD_NUMBER: _ClassVar[int]
    RECIPENAME_FIELD_NUMBER: _ClassVar[int]
    dependents: _containers.RepeatedScalarFieldContainer[str]
    recipeName: str
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
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[RecipeRun]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[RecipeRun, _Mapping]]] = ...) -> None: ...

class RecipeRunSpec(_message.Message):
    __slots__ = ["labRef", "location", "modelClassName", "modelClassRunName", "recipeName", "resources", "ttl", "versionName"]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    RECIPENAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    labRef: _generated_pb2_1.ObjectReference
    location: _generated_pb2.DataLocation
    modelClassName: str
    modelClassRunName: str
    recipeName: str
    resources: _generated_pb2.ResourceSpec
    ttl: int
    versionName: str
    def __init__(self, versionName: _Optional[str] = ..., recipeName: _Optional[str] = ..., labRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., ttl: _Optional[int] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ...) -> None: ...

class RecipeRunStatus(_message.Message):
    __slots__ = ["completedAt", "conditions", "failureMessage", "failureReason", "logs", "observedGeneration", "phase", "triggeredBy", "updatedAt"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    TRIGGEREDBY_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    failureMessage: str
    failureReason: str
    logs: _generated_pb2.Logs
    observedGeneration: int
    phase: str
    triggeredBy: str
    updatedAt: _generated_pb2_1_1.Time
    def __init__(self, completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., phase: _Optional[str] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., triggeredBy: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class RecipeSpec(_message.Message):
    __slots__ = ["description", "input", "output", "owner", "resources", "sample", "steps", "timeout", "ttl", "unitTestsTemplate", "versionName"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_FIELD_NUMBER: _ClassVar[int]
    STEPS_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    description: str
    input: RecipeInputSpec
    output: RecipeOutputSpec
    owner: str
    resources: _generated_pb2.ResourceSpec
    sample: SampleSpec
    steps: _containers.RepeatedCompositeFieldContainer[RecipeStep]
    timeout: int
    ttl: int
    unitTestsTemplate: _generated_pb2.TestSuite
    versionName: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., input: _Optional[_Union[RecipeInputSpec, _Mapping]] = ..., steps: _Optional[_Iterable[_Union[RecipeStep, _Mapping]]] = ..., output: _Optional[_Union[RecipeOutputSpec, _Mapping]] = ..., sample: _Optional[_Union[SampleSpec, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., timeout: _Optional[int] = ..., ttl: _Optional[int] = ..., unitTestsTemplate: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ...) -> None: ...

class RecipeStatus(_message.Message):
    __slots__ = ["conditions", "lastRun", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    LASTRUN_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    lastRun: _generated_pb2.LastRunStatus
    observedGeneration: int
    updatedAt: _generated_pb2_1_1.Time
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
    __slots__ = ["itemIDColumn", "ratingColumn", "userIDColumn"]
    ITEMIDCOLUMN_FIELD_NUMBER: _ClassVar[int]
    RATINGCOLUMN_FIELD_NUMBER: _ClassVar[int]
    USERIDCOLUMN_FIELD_NUMBER: _ClassVar[int]
    itemIDColumn: str
    ratingColumn: str
    userIDColumn: str
    def __init__(self, userIDColumn: _Optional[str] = ..., itemIDColumn: _Optional[str] = ..., ratingColumn: _Optional[str] = ...) -> None: ...

class RelationshipSpec(_message.Message):
    __slots__ = ["arity", "column", "relatesTo", "type"]
    ARITY_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    RELATESTO_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    arity: str
    column: str
    relatesTo: str
    type: str
    def __init__(self, type: _Optional[str] = ..., column: _Optional[str] = ..., arity: _Optional[str] = ..., relatesTo: _Optional[str] = ...) -> None: ...

class RowSpec(_message.Message):
    __slots__ = ["cols"]
    COLS_FIELD_NUMBER: _ClassVar[int]
    cols: _containers.RepeatedCompositeFieldContainer[ColumnSpec]
    def __init__(self, cols: _Optional[_Iterable[_Union[ColumnSpec, _Mapping]]] = ...) -> None: ...

class SampleSpec(_message.Message):
    __slots__ = ["column", "enabled", "filter", "percent", "rows", "type"]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    PERCENT_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    column: str
    enabled: bool
    filter: str
    percent: int
    rows: int
    type: str
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
    __slots__ = ["columns", "key", "recommendationSchema", "timeSeriesSchema"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    RECOMMENDATIONSCHEMA_FIELD_NUMBER: _ClassVar[int]
    TIMESERIESSCHEMA_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[Column]
    key: _containers.RepeatedScalarFieldContainer[str]
    recommendationSchema: RecommendationSchema
    timeSeriesSchema: TimeSeriesSchema
    def __init__(self, timeSeriesSchema: _Optional[_Union[TimeSeriesSchema, _Mapping]] = ..., recommendationSchema: _Optional[_Union[RecommendationSchema, _Mapping]] = ..., columns: _Optional[_Iterable[_Union[Column, _Mapping]]] = ..., key: _Optional[_Iterable[str]] = ...) -> None: ...

class SyntheticSpec(_message.Message):
    __slots__ = ["enabled", "rows"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    rows: int
    def __init__(self, enabled: bool = ..., rows: _Optional[int] = ...) -> None: ...

class TableSpec(_message.Message):
    __slots__ = ["border", "columns", "datasetName", "filters", "groupby", "rows", "showIndex"]
    BORDER_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    FILTERS_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    SHOWINDEX_FIELD_NUMBER: _ClassVar[int]
    border: bool
    columns: _containers.RepeatedScalarFieldContainer[str]
    datasetName: str
    filters: _containers.RepeatedScalarFieldContainer[str]
    groupby: _containers.RepeatedScalarFieldContainer[str]
    rows: int
    showIndex: bool
    def __init__(self, datasetName: _Optional[str] = ..., columns: _Optional[_Iterable[str]] = ..., filters: _Optional[_Iterable[str]] = ..., groupby: _Optional[_Iterable[str]] = ..., rows: _Optional[int] = ..., showIndex: bool = ..., border: bool = ...) -> None: ...

class TimeSeriesSchema(_message.Message):
    __slots__ = ["freq", "interval", "type"]
    FREQ_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    freq: str
    interval: int
    type: str
    def __init__(self, type: _Optional[str] = ..., freq: _Optional[str] = ..., interval: _Optional[int] = ...) -> None: ...
