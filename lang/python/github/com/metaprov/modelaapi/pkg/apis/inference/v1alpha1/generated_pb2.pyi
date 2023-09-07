from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1_1_1_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1_1_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AutoScalingSpec(_message.Message):
    __slots__ = ["cpuAvgUtilization", "enabled", "maxReplicas", "memAvgUtilization", "minReplicas"]
    CPUAVGUTILIZATION_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    MAXREPLICAS_FIELD_NUMBER: _ClassVar[int]
    MEMAVGUTILIZATION_FIELD_NUMBER: _ClassVar[int]
    MINREPLICAS_FIELD_NUMBER: _ClassVar[int]
    cpuAvgUtilization: int
    enabled: bool
    maxReplicas: int
    memAvgUtilization: int
    minReplicas: int
    def __init__(self, enabled: bool = ..., minReplicas: _Optional[int] = ..., maxReplicas: _Optional[int] = ..., cpuAvgUtilization: _Optional[int] = ..., memAvgUtilization: _Optional[int] = ...) -> None: ...

class BackwardCurtainSpec(_message.Message):
    __slots__ = ["accountRef", "confidenceHigh", "confidenceLow", "enabled"]
    ACCOUNTREF_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCEHIGH_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCELOW_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    accountRef: _generated_pb2_1_1_1.ObjectReference
    confidenceHigh: float
    confidenceLow: float
    enabled: bool
    def __init__(self, enabled: bool = ..., accountRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., confidenceLow: _Optional[float] = ..., confidenceHigh: _Optional[float] = ...) -> None: ...

class CustomAppSpec(_message.Message):
    __slots__ = ["owner", "pages", "title"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PAGES_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    owner: bool
    pages: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.PageSpec]
    title: str
    def __init__(self, owner: bool = ..., title: _Optional[str] = ..., pages: _Optional[_Iterable[_Union[_generated_pb2_1.PageSpec, _Mapping]]] = ...) -> None: ...

class DataApp(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ObjectMeta
    spec: DataAppSpec
    status: DataAppStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DataAppSpec, _Mapping]] = ..., status: _Optional[_Union[DataAppStatus, _Mapping]] = ...) -> None: ...

class DataAppList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DataApp]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataApp, _Mapping]]] = ...) -> None: ...

class DataAppSpec(_message.Message):
    __slots__ = ["access", "custom", "description", "modelClassName", "modelName", "owner", "replicas", "resources", "servingsiteRef", "versionName"]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    access: _generated_pb2.AccessSpec
    custom: CustomAppSpec
    description: str
    modelClassName: str
    modelName: str
    owner: str
    replicas: int
    resources: _generated_pb2.ResourceSpec
    servingsiteRef: _generated_pb2_1_1_1.ObjectReference
    versionName: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., description: _Optional[str] = ..., modelName: _Optional[str] = ..., access: _Optional[_Union[_generated_pb2.AccessSpec, _Mapping]] = ..., replicas: _Optional[int] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., servingsiteRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., custom: _Optional[_Union[CustomAppSpec, _Mapping]] = ...) -> None: ...

class DataAppStatus(_message.Message):
    __slots__ = ["conditions", "deploymentStatus", "failureMessage", "failureReason", "observedGeneration", "servicetStatus", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTSTATUS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    SERVICETSTATUS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    deploymentStatus: _generated_pb2_1_1_1.ObjectReference
    failureMessage: str
    failureReason: str
    observedGeneration: int
    servicetStatus: _generated_pb2_1_1_1.ServiceStatus
    updatedAt: _generated_pb2_1_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., deploymentStatus: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., servicetStatus: _Optional[_Union[_generated_pb2_1_1_1.ServiceStatus, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DriftDetectionSpec(_message.Message):
    __slots__ = ["columns", "driftThresholds", "enabled", "genDriftTests", "maxHistograms", "minPredictions", "outlierDetectionModelRef", "periodSeconds", "schedule"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    DRIFTTHRESHOLDS_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    GENDRIFTTESTS_FIELD_NUMBER: _ClassVar[int]
    MAXHISTOGRAMS_FIELD_NUMBER: _ClassVar[int]
    MINPREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    OUTLIERDETECTIONMODELREF_FIELD_NUMBER: _ClassVar[int]
    PERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedScalarFieldContainer[str]
    driftThresholds: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DriftThreshold]
    enabled: bool
    genDriftTests: bool
    maxHistograms: int
    minPredictions: int
    outlierDetectionModelRef: _generated_pb2_1_1_1.ObjectReference
    periodSeconds: int
    schedule: _generated_pb2.RunSchedule
    def __init__(self, enabled: bool = ..., genDriftTests: bool = ..., minPredictions: _Optional[int] = ..., columns: _Optional[_Iterable[str]] = ..., driftThresholds: _Optional[_Iterable[_Union[_generated_pb2_1.DriftThreshold, _Mapping]]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., outlierDetectionModelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., maxHistograms: _Optional[int] = ..., periodSeconds: _Optional[int] = ...) -> None: ...

class FastSlowModelSpec(_message.Message):
    __slots__ = ["enabled", "fastModelRef", "probaHighPct", "probaLowPct", "slowModelRef"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    FASTMODELREF_FIELD_NUMBER: _ClassVar[int]
    PROBAHIGHPCT_FIELD_NUMBER: _ClassVar[int]
    PROBALOWPCT_FIELD_NUMBER: _ClassVar[int]
    SLOWMODELREF_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    fastModelRef: _generated_pb2_1_1_1.ObjectReference
    probaHighPct: int
    probaLowPct: int
    slowModelRef: _generated_pb2_1_1_1.ObjectReference
    def __init__(self, enabled: bool = ..., fastModelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., slowModelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., probaLowPct: _Optional[int] = ..., probaHighPct: _Optional[int] = ...) -> None: ...

class FeedbackTestSpec(_message.Message):
    __slots__ = ["enabled", "schedule", "tests"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    schedule: _generated_pb2.RunSchedule
    tests: _generated_pb2.TestSuite
    def __init__(self, enabled: bool = ..., tests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ...) -> None: ...

class ForecastPredictionSpec(_message.Message):
    __slots__ = ["hierarchyValues", "horizon"]
    class HierarchyValuesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    HIERARCHYVALUES_FIELD_NUMBER: _ClassVar[int]
    HORIZON_FIELD_NUMBER: _ClassVar[int]
    hierarchyValues: _containers.ScalarMap[str, str]
    horizon: _generated_pb2_1_1.WindowSpec
    def __init__(self, hierarchyValues: _Optional[_Mapping[str, str]] = ..., horizon: _Optional[_Union[_generated_pb2_1_1.WindowSpec, _Mapping]] = ...) -> None: ...

class ForecastRun(_message.Message):
    __slots__ = ["horizon", "key", "modelLocation"]
    HORIZON_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    MODELLOCATION_FIELD_NUMBER: _ClassVar[int]
    horizon: _generated_pb2_1_1.WindowSpec
    key: str
    modelLocation: str
    def __init__(self, key: _Optional[str] = ..., modelLocation: _Optional[str] = ..., horizon: _Optional[_Union[_generated_pb2_1_1.WindowSpec, _Mapping]] = ...) -> None: ...

class ForecastSpec(_message.Message):
    __slots__ = ["runs"]
    class RunsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ForecastRun
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ForecastRun, _Mapping]] = ...) -> None: ...
    RUNS_FIELD_NUMBER: _ClassVar[int]
    runs: _containers.MessageMap[str, ForecastRun]
    def __init__(self, runs: _Optional[_Mapping[str, ForecastRun]] = ...) -> None: ...

class ForecastStatus(_message.Message):
    __slots__ = ["forecastLocation", "profileURI", "reportURI", "workerResults"]
    FORECASTLOCATION_FIELD_NUMBER: _ClassVar[int]
    PROFILEURI_FIELD_NUMBER: _ClassVar[int]
    REPORTURI_FIELD_NUMBER: _ClassVar[int]
    WORKERRESULTS_FIELD_NUMBER: _ClassVar[int]
    forecastLocation: _generated_pb2.FileLocation
    profileURI: str
    reportURI: str
    workerResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.WorkerRunResult]
    def __init__(self, profileURI: _Optional[str] = ..., reportURI: _Optional[str] = ..., forecastLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., workerResults: _Optional[_Iterable[_Union[_generated_pb2.WorkerRunResult, _Mapping]]] = ...) -> None: ...

class ForwardCurtainSpec(_message.Message):
    __slots__ = ["accountRef", "enabled", "percent"]
    ACCOUNTREF_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    PERCENT_FIELD_NUMBER: _ClassVar[int]
    accountRef: _generated_pb2_1_1_1.ObjectReference
    enabled: bool
    percent: int
    def __init__(self, enabled: bool = ..., accountRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., percent: _Optional[int] = ...) -> None: ...

class MetricHistory(_message.Message):
    __slots__ = ["history", "metric"]
    HISTORY_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    history: _containers.RepeatedScalarFieldContainer[float]
    metric: str
    def __init__(self, metric: _Optional[str] = ..., history: _Optional[_Iterable[float]] = ...) -> None: ...

class ModelDeploymentRecord(_message.Message):
    __slots__ = ["avgDailyPrediction", "avgLatency", "deployedAt", "failureMessage", "imageName", "modelName", "modelRole", "modelVersion", "retiredAt"]
    AVGDAILYPREDICTION_FIELD_NUMBER: _ClassVar[int]
    AVGLATENCY_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    MODELROLE_FIELD_NUMBER: _ClassVar[int]
    MODELVERSION_FIELD_NUMBER: _ClassVar[int]
    RETIREDAT_FIELD_NUMBER: _ClassVar[int]
    avgDailyPrediction: int
    avgLatency: float
    deployedAt: _generated_pb2_1_1_1_1.Time
    failureMessage: str
    imageName: str
    modelName: str
    modelRole: str
    modelVersion: str
    retiredAt: _generated_pb2_1_1_1_1.Time
    def __init__(self, modelName: _Optional[str] = ..., modelVersion: _Optional[str] = ..., modelRole: _Optional[str] = ..., imageName: _Optional[str] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., retiredAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., avgDailyPrediction: _Optional[int] = ..., avgLatency: _Optional[float] = ...) -> None: ...

class ModelDeploymentStatus(_message.Message):
    __slots__ = ["avgDailyPrediction", "avgLatency", "deployedAt", "deploymentRef", "endpoint", "failureMessage", "hpaRef", "imageName", "lastFeedbackDatasetRef", "lastFeedbackTestAt", "lastFeedbackTestResults", "metricsHistory", "modelName", "modelRole", "modelVersion", "serviceRef"]
    class MetricsHistoryEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: MetricHistory
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[MetricHistory, _Mapping]] = ...) -> None: ...
    AVGDAILYPREDICTION_FIELD_NUMBER: _ClassVar[int]
    AVGLATENCY_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTREF_FIELD_NUMBER: _ClassVar[int]
    ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    HPAREF_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    LASTFEEDBACKDATASETREF_FIELD_NUMBER: _ClassVar[int]
    LASTFEEDBACKTESTAT_FIELD_NUMBER: _ClassVar[int]
    LASTFEEDBACKTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    METRICSHISTORY_FIELD_NUMBER: _ClassVar[int]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    MODELROLE_FIELD_NUMBER: _ClassVar[int]
    MODELVERSION_FIELD_NUMBER: _ClassVar[int]
    SERVICEREF_FIELD_NUMBER: _ClassVar[int]
    avgDailyPrediction: int
    avgLatency: float
    deployedAt: _generated_pb2_1_1_1_1.Time
    deploymentRef: _generated_pb2_1_1_1.ObjectReference
    endpoint: str
    failureMessage: str
    hpaRef: _generated_pb2_1_1_1.ObjectReference
    imageName: str
    lastFeedbackDatasetRef: _generated_pb2_1_1_1.ObjectReference
    lastFeedbackTestAt: _generated_pb2_1_1_1_1.Time
    lastFeedbackTestResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    metricsHistory: _containers.MessageMap[str, MetricHistory]
    modelName: str
    modelRole: str
    modelVersion: str
    serviceRef: _generated_pb2_1_1_1.ObjectReference
    def __init__(self, modelName: _Optional[str] = ..., modelVersion: _Optional[str] = ..., modelRole: _Optional[str] = ..., imageName: _Optional[str] = ..., deploymentRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., serviceRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., hpaRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., failureMessage: _Optional[str] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., lastFeedbackDatasetRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., lastFeedbackTestAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., lastFeedbackTestResults: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., metricsHistory: _Optional[_Mapping[str, MetricHistory]] = ..., avgDailyPrediction: _Optional[int] = ..., avgLatency: _Optional[float] = ..., endpoint: _Optional[str] = ...) -> None: ...

class ModelServingSpec(_message.Message):
    __slots__ = ["serverless", "servingTests"]
    SERVERLESS_FIELD_NUMBER: _ClassVar[int]
    SERVINGTESTS_FIELD_NUMBER: _ClassVar[int]
    serverless: bool
    servingTests: _generated_pb2.TestSuite
    def __init__(self, serverless: bool = ..., servingTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ...) -> None: ...

class OnlineFeatureStoreSpec(_message.Message):
    __slots__ = ["enabled", "hostname"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    HOSTNAME_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    hostname: str
    def __init__(self, enabled: bool = ..., hostname: _Optional[str] = ...) -> None: ...

class OnlineStoreStatus(_message.Message):
    __slots__ = ["lastAccessed"]
    LASTACCESSED_FIELD_NUMBER: _ClassVar[int]
    lastAccessed: _generated_pb2_1_1_1_1.Time
    def __init__(self, lastAccessed: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ...) -> None: ...

class Prediction(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ObjectMeta
    spec: PredictionSpec
    status: PredictionStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PredictionSpec, _Mapping]] = ..., status: _Optional[_Union[PredictionStatus, _Mapping]] = ...) -> None: ...

class PredictionCacheSpec(_message.Message):
    __slots__ = ["connectionRef", "enabled", "inMemory", "redis"]
    CONNECTIONREF_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    INMEMORY_FIELD_NUMBER: _ClassVar[int]
    REDIS_FIELD_NUMBER: _ClassVar[int]
    connectionRef: _generated_pb2_1_1_1.ObjectReference
    enabled: bool
    inMemory: bool
    redis: bool
    def __init__(self, enabled: bool = ..., inMemory: bool = ..., redis: bool = ..., connectionRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ...) -> None: ...

class PredictionList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Prediction]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Prediction, _Mapping]]] = ...) -> None: ...

class PredictionLoggingSpec(_message.Message):
    __slots__ = ["backupConnectionRef", "backupFreqSeconds", "enabled", "location", "rows", "samplePercent"]
    BACKUPCONNECTIONREF_FIELD_NUMBER: _ClassVar[int]
    BACKUPFREQSECONDS_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    SAMPLEPERCENT_FIELD_NUMBER: _ClassVar[int]
    backupConnectionRef: _generated_pb2_1_1_1.ObjectReference
    backupFreqSeconds: int
    enabled: bool
    location: _generated_pb2.DataLocation
    rows: int
    samplePercent: int
    def __init__(self, enabled: bool = ..., samplePercent: _Optional[int] = ..., rows: _Optional[int] = ..., backupFreqSeconds: _Optional[int] = ..., backupConnectionRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ...) -> None: ...

class PredictionRun(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ObjectMeta
    spec: PredictionRunSpec
    status: PredictionRunStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PredictionRunSpec, _Mapping]] = ..., status: _Optional[_Union[PredictionRunStatus, _Mapping]] = ...) -> None: ...

class PredictionRunList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PredictionRun]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PredictionRun, _Mapping]]] = ...) -> None: ...

class PredictionRunSpec(_message.Message):
    __slots__ = ["abort", "datasetName", "modelRef", "owner", "pause", "timeout"]
    ABORT_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    MODELREF_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PAUSE_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    abort: bool
    datasetName: str
    modelRef: _generated_pb2_1_1_1.ObjectReference
    owner: str
    pause: bool
    timeout: int
    def __init__(self, owner: _Optional[str] = ..., datasetName: _Optional[str] = ..., modelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., timeout: _Optional[int] = ..., pause: bool = ..., abort: bool = ...) -> None: ...

class PredictionRunStatus(_message.Message):
    __slots__ = ["completedAt", "conditions", "failureMessage", "forecast", "logs", "observedGeneration", "phase", "predictionManifestLocation", "rows", "runVersion", "unitTestResults", "updatedAt", "usage"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONMANIFESTLOCATION_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    UNITTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    USAGE_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    failureMessage: str
    forecast: ForecastStatus
    logs: _generated_pb2.Logs
    observedGeneration: int
    phase: str
    predictionManifestLocation: _generated_pb2.ManifestLocation
    rows: int
    runVersion: int
    unitTestResults: _generated_pb2.TestSuiteResult
    updatedAt: _generated_pb2_1_1_1_1.Time
    usage: _generated_pb2.ResourceConsumption
    def __init__(self, observedGeneration: _Optional[int] = ..., predictionManifestLocation: _Optional[_Union[_generated_pb2.ManifestLocation, _Mapping]] = ..., runVersion: _Optional[int] = ..., rows: _Optional[int] = ..., phase: _Optional[str] = ..., unitTestResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., failureMessage: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., forecast: _Optional[_Union[ForecastStatus, _Mapping]] = ..., usage: _Optional[_Union[_generated_pb2.ResourceConsumption, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class PredictionSpec(_message.Message):
    __slots__ = ["description", "forecast", "input", "labeled", "modelClassName", "modelRef", "output", "owner", "resources", "run", "schedule", "servingSiteRef", "studyRunRef", "unitTests"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    LABELED_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELREF_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    STUDYRUNREF_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    description: str
    forecast: ForecastPredictionSpec
    input: _generated_pb2_1.DataInputSpec
    labeled: bool
    modelClassName: str
    modelRef: _generated_pb2_1_1_1.ObjectReference
    output: _generated_pb2_1.DataOutputSpec
    owner: str
    resources: _generated_pb2.ResourceSpec
    run: _generated_pb2.RunSpec
    schedule: _generated_pb2.RunSchedule
    servingSiteRef: _generated_pb2_1_1_1.ObjectReference
    studyRunRef: _generated_pb2.StudyRunReference
    unitTests: _generated_pb2_1_1.ModelTestSuite
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2.RunSpec, _Mapping]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., servingSiteRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., modelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., studyRunRef: _Optional[_Union[_generated_pb2.StudyRunReference, _Mapping]] = ..., input: _Optional[_Union[_generated_pb2_1.DataInputSpec, _Mapping]] = ..., output: _Optional[_Union[_generated_pb2_1.DataOutputSpec, _Mapping]] = ..., labeled: bool = ..., unitTests: _Optional[_Union[_generated_pb2_1_1.ModelTestSuite, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., forecast: _Optional[_Union[ForecastPredictionSpec, _Mapping]] = ..., modelClassName: _Optional[str] = ...) -> None: ...

class PredictionStatus(_message.Message):
    __slots__ = ["active", "availableRunVersions", "conditions", "failureMessage", "lastRunAt", "lastRunVersion", "observedGeneration", "schedule", "updatedAt", "version"]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    AVAILABLERUNVERSIONS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LASTRUNAT_FIELD_NUMBER: _ClassVar[int]
    LASTRUNVERSION_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    active: _containers.RepeatedCompositeFieldContainer[_generated_pb2.RunReference]
    availableRunVersions: _containers.RepeatedScalarFieldContainer[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    failureMessage: str
    lastRunAt: _generated_pb2_1_1_1_1.Time
    lastRunVersion: int
    observedGeneration: int
    schedule: _generated_pb2.RunScheduleStatus
    updatedAt: _generated_pb2_1_1_1_1.Time
    version: int
    def __init__(self, observedGeneration: _Optional[int] = ..., active: _Optional[_Iterable[_Union[_generated_pb2.RunReference, _Mapping]]] = ..., version: _Optional[int] = ..., lastRunVersion: _Optional[int] = ..., availableRunVersions: _Optional[_Iterable[int]] = ..., lastRunAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., schedule: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class Predictor(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ObjectMeta
    spec: PredictorSpec
    status: PredictorStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PredictorSpec, _Mapping]] = ..., status: _Optional[_Union[PredictorStatus, _Mapping]] = ...) -> None: ...

class PredictorList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Predictor]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Predictor, _Mapping]]] = ...) -> None: ...

class PredictorSpec(_message.Message):
    __slots__ = ["access", "autoScaling", "backwardCurtain", "cache", "description", "drift", "fastSlow", "feedback", "forwardCurtain", "modelClassName", "models", "notification", "owner", "predictionLogging", "productRef", "progressive", "replicas", "resources", "serving", "servingSiteRef", "store", "task", "template", "versionName"]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    AUTOSCALING_FIELD_NUMBER: _ClassVar[int]
    BACKWARDCURTAIN_FIELD_NUMBER: _ClassVar[int]
    CACHE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DRIFT_FIELD_NUMBER: _ClassVar[int]
    FASTSLOW_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_FIELD_NUMBER: _ClassVar[int]
    FORWARDCURTAIN_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONLOGGING_FIELD_NUMBER: _ClassVar[int]
    PRODUCTREF_FIELD_NUMBER: _ClassVar[int]
    PROGRESSIVE_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    SERVING_FIELD_NUMBER: _ClassVar[int]
    STORE_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    access: _generated_pb2.AccessSpec
    autoScaling: AutoScalingSpec
    backwardCurtain: BackwardCurtainSpec
    cache: PredictionCacheSpec
    description: str
    drift: DriftDetectionSpec
    fastSlow: FastSlowModelSpec
    feedback: FeedbackTestSpec
    forwardCurtain: ForwardCurtainSpec
    modelClassName: str
    models: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ModelDeploymentSpec]
    notification: _generated_pb2.NotificationSpec
    owner: str
    predictionLogging: PredictionLoggingSpec
    productRef: _generated_pb2_1_1_1.ObjectReference
    progressive: ProgressiveSpec
    replicas: int
    resources: _generated_pb2.ResourceSpec
    serving: ModelServingSpec
    servingSiteRef: _generated_pb2_1_1_1.ObjectReference
    store: OnlineFeatureStoreSpec
    task: str
    template: bool
    versionName: str
    def __init__(self, versionName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., description: _Optional[str] = ..., productRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., template: bool = ..., servingSiteRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., models: _Optional[_Iterable[_Union[_generated_pb2.ModelDeploymentSpec, _Mapping]]] = ..., progressive: _Optional[_Union[ProgressiveSpec, _Mapping]] = ..., access: _Optional[_Union[_generated_pb2.AccessSpec, _Mapping]] = ..., replicas: _Optional[int] = ..., autoScaling: _Optional[_Union[AutoScalingSpec, _Mapping]] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., cache: _Optional[_Union[PredictionCacheSpec, _Mapping]] = ..., store: _Optional[_Union[OnlineFeatureStoreSpec, _Mapping]] = ..., serving: _Optional[_Union[ModelServingSpec, _Mapping]] = ..., task: _Optional[str] = ..., drift: _Optional[_Union[DriftDetectionSpec, _Mapping]] = ..., feedback: _Optional[_Union[FeedbackTestSpec, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., predictionLogging: _Optional[_Union[PredictionLoggingSpec, _Mapping]] = ..., forwardCurtain: _Optional[_Union[ForwardCurtainSpec, _Mapping]] = ..., backwardCurtain: _Optional[_Union[BackwardCurtainSpec, _Mapping]] = ..., fastSlow: _Optional[_Union[FastSlowModelSpec, _Mapping]] = ...) -> None: ...

class PredictorStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "history", "lastPredictionDataset", "loadBalancerStatus", "modelStatus", "observedGeneration", "onlineStoreStatus", "predictorletStatus", "servingTestsResults", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    HISTORY_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTIONDATASET_FIELD_NUMBER: _ClassVar[int]
    LOADBALANCERSTATUS_FIELD_NUMBER: _ClassVar[int]
    MODELSTATUS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    ONLINESTORESTATUS_FIELD_NUMBER: _ClassVar[int]
    PREDICTORLETSTATUS_FIELD_NUMBER: _ClassVar[int]
    SERVINGTESTSRESULTS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    failureMessage: str
    history: _containers.RepeatedCompositeFieldContainer[ModelDeploymentRecord]
    lastPredictionDataset: _generated_pb2_1_1_1.ObjectReference
    loadBalancerStatus: _generated_pb2_1_1_1.LoadBalancerStatus
    modelStatus: _containers.RepeatedCompositeFieldContainer[ModelDeploymentStatus]
    observedGeneration: int
    onlineStoreStatus: OnlineStoreStatus
    predictorletStatus: PredictorletStatus
    servingTestsResults: _generated_pb2.TestSuiteResult
    updatedAt: _generated_pb2_1_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., history: _Optional[_Iterable[_Union[ModelDeploymentRecord, _Mapping]]] = ..., modelStatus: _Optional[_Iterable[_Union[ModelDeploymentStatus, _Mapping]]] = ..., predictorletStatus: _Optional[_Union[PredictorletStatus, _Mapping]] = ..., onlineStoreStatus: _Optional[_Union[OnlineStoreStatus, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., loadBalancerStatus: _Optional[_Union[_generated_pb2_1_1_1.LoadBalancerStatus, _Mapping]] = ..., lastPredictionDataset: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., servingTestsResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class PredictorletStatus(_message.Message):
    __slots__ = ["avgDailyPrediction", "deployedAt", "deploymentRef", "failureMessage", "lastPredictionTime", "p50", "p95", "p99", "serviceRef", "totalPredictions"]
    AVGDAILYPREDICTION_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTREF_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTIONTIME_FIELD_NUMBER: _ClassVar[int]
    P50_FIELD_NUMBER: _ClassVar[int]
    P95_FIELD_NUMBER: _ClassVar[int]
    P99_FIELD_NUMBER: _ClassVar[int]
    SERVICEREF_FIELD_NUMBER: _ClassVar[int]
    TOTALPREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    avgDailyPrediction: int
    deployedAt: _generated_pb2_1_1_1_1.Time
    deploymentRef: _generated_pb2_1_1_1.ObjectReference
    failureMessage: str
    lastPredictionTime: _generated_pb2_1_1_1_1.Time
    p50: float
    p95: float
    p99: float
    serviceRef: _generated_pb2_1_1_1.ObjectReference
    totalPredictions: int
    def __init__(self, deploymentRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., serviceRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., p50: _Optional[float] = ..., p95: _Optional[float] = ..., p99: _Optional[float] = ..., avgDailyPrediction: _Optional[int] = ..., totalPredictions: _Optional[int] = ..., lastPredictionTime: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ...) -> None: ...

class ProgressiveSpec(_message.Message):
    __slots__ = ["canaryMetrics", "trafficIncrement", "warmup"]
    CANARYMETRICS_FIELD_NUMBER: _ClassVar[int]
    TRAFFICINCREMENT_FIELD_NUMBER: _ClassVar[int]
    WARMUP_FIELD_NUMBER: _ClassVar[int]
    canaryMetrics: _containers.RepeatedScalarFieldContainer[str]
    trafficIncrement: int
    warmup: int
    def __init__(self, warmup: _Optional[int] = ..., trafficIncrement: _Optional[int] = ..., canaryMetrics: _Optional[_Iterable[str]] = ...) -> None: ...

class ValidationError(_message.Message):
    __slots__ = ["actual", "column", "max", "metric", "min"]
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    actual: float
    column: str
    max: float
    metric: str
    min: float
    def __init__(self, column: _Optional[str] = ..., metric: _Optional[str] = ..., min: _Optional[float] = ..., max: _Optional[float] = ..., actual: _Optional[float] = ...) -> None: ...
