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
    __slots__ = ["enabled", "minReplicas", "maxReplicas", "cpuAvgUtilization", "memAvgUtilization"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    MINREPLICAS_FIELD_NUMBER: _ClassVar[int]
    MAXREPLICAS_FIELD_NUMBER: _ClassVar[int]
    CPUAVGUTILIZATION_FIELD_NUMBER: _ClassVar[int]
    MEMAVGUTILIZATION_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    minReplicas: int
    maxReplicas: int
    cpuAvgUtilization: int
    memAvgUtilization: int
    def __init__(self, enabled: bool = ..., minReplicas: _Optional[int] = ..., maxReplicas: _Optional[int] = ..., cpuAvgUtilization: _Optional[int] = ..., memAvgUtilization: _Optional[int] = ...) -> None: ...

class BackwardCurtainSpec(_message.Message):
    __slots__ = ["enabled", "accountRef", "confidenceLow", "confidenceHigh"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ACCOUNTREF_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCELOW_FIELD_NUMBER: _ClassVar[int]
    CONFIDENCEHIGH_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    accountRef: _generated_pb2_1_1_1.ObjectReference
    confidenceLow: float
    confidenceHigh: float
    def __init__(self, enabled: bool = ..., accountRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., confidenceLow: _Optional[float] = ..., confidenceHigh: _Optional[float] = ...) -> None: ...

class CustomAppSpec(_message.Message):
    __slots__ = ["owner", "title", "pages"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    PAGES_FIELD_NUMBER: _ClassVar[int]
    owner: bool
    title: str
    pages: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.PageSpec]
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
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DataApp]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DataApp, _Mapping]]] = ...) -> None: ...

class DataAppSpec(_message.Message):
    __slots__ = ["owner", "versionName", "modelClassName", "description", "modelName", "access", "replicas", "resources", "servingsiteRef", "custom"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    owner: str
    versionName: str
    modelClassName: str
    description: str
    modelName: str
    access: _generated_pb2.AccessSpec
    replicas: int
    resources: _generated_pb2.ResourceSpec
    servingsiteRef: _generated_pb2_1_1_1.ObjectReference
    custom: CustomAppSpec
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., description: _Optional[str] = ..., modelName: _Optional[str] = ..., access: _Optional[_Union[_generated_pb2.AccessSpec, _Mapping]] = ..., replicas: _Optional[int] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., servingsiteRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., custom: _Optional[_Union[CustomAppSpec, _Mapping]] = ...) -> None: ...

class DataAppStatus(_message.Message):
    __slots__ = ["observedGeneration", "updatedAt", "deploymentStatus", "servicetStatus", "failureReason", "failureMessage", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTSTATUS_FIELD_NUMBER: _ClassVar[int]
    SERVICETSTATUS_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1_1.Time
    deploymentStatus: _generated_pb2_1_1_1.ObjectReference
    servicetStatus: _generated_pb2_1_1_1.ServiceStatus
    failureReason: str
    failureMessage: str
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., deploymentStatus: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., servicetStatus: _Optional[_Union[_generated_pb2_1_1_1.ServiceStatus, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class DriftDetectionSpec(_message.Message):
    __slots__ = ["enabled", "genDriftTests", "minPredictions", "columns", "driftThresholds", "schedule", "outlierDetectionModelRef", "maxHistograms", "periodSeconds"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    GENDRIFTTESTS_FIELD_NUMBER: _ClassVar[int]
    MINPREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    DRIFTTHRESHOLDS_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    OUTLIERDETECTIONMODELREF_FIELD_NUMBER: _ClassVar[int]
    MAXHISTOGRAMS_FIELD_NUMBER: _ClassVar[int]
    PERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    genDriftTests: bool
    minPredictions: int
    columns: _containers.RepeatedScalarFieldContainer[str]
    driftThresholds: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DriftThreshold]
    schedule: _generated_pb2.RunSchedule
    outlierDetectionModelRef: _generated_pb2_1_1_1.ObjectReference
    maxHistograms: int
    periodSeconds: int
    def __init__(self, enabled: bool = ..., genDriftTests: bool = ..., minPredictions: _Optional[int] = ..., columns: _Optional[_Iterable[str]] = ..., driftThresholds: _Optional[_Iterable[_Union[_generated_pb2_1.DriftThreshold, _Mapping]]] = ..., schedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., outlierDetectionModelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., maxHistograms: _Optional[int] = ..., periodSeconds: _Optional[int] = ...) -> None: ...

class FastSlowModelSpec(_message.Message):
    __slots__ = ["enabled", "fastModelRef", "slowModelRef", "probaLowPct", "probaHighPct"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    FASTMODELREF_FIELD_NUMBER: _ClassVar[int]
    SLOWMODELREF_FIELD_NUMBER: _ClassVar[int]
    PROBALOWPCT_FIELD_NUMBER: _ClassVar[int]
    PROBAHIGHPCT_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    fastModelRef: _generated_pb2_1_1_1.ObjectReference
    slowModelRef: _generated_pb2_1_1_1.ObjectReference
    probaLowPct: int
    probaHighPct: int
    def __init__(self, enabled: bool = ..., fastModelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., slowModelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., probaLowPct: _Optional[int] = ..., probaHighPct: _Optional[int] = ...) -> None: ...

class FeedbackTestSpec(_message.Message):
    __slots__ = ["enabled", "tests", "schedule"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    tests: _generated_pb2.TestSuite
    schedule: _generated_pb2.RunSchedule
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
    __slots__ = ["key", "modelLocation", "horizon"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    MODELLOCATION_FIELD_NUMBER: _ClassVar[int]
    HORIZON_FIELD_NUMBER: _ClassVar[int]
    key: str
    modelLocation: str
    horizon: _generated_pb2_1_1.WindowSpec
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
    __slots__ = ["profileURI", "reportURI", "forecastURI", "failed", "failureMsg", "workerResults"]
    PROFILEURI_FIELD_NUMBER: _ClassVar[int]
    REPORTURI_FIELD_NUMBER: _ClassVar[int]
    FORECASTURI_FIELD_NUMBER: _ClassVar[int]
    FAILED_FIELD_NUMBER: _ClassVar[int]
    FAILUREMSG_FIELD_NUMBER: _ClassVar[int]
    WORKERRESULTS_FIELD_NUMBER: _ClassVar[int]
    profileURI: str
    reportURI: str
    forecastURI: str
    failed: bool
    failureMsg: str
    workerResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.WorkerRunResult]
    def __init__(self, profileURI: _Optional[str] = ..., reportURI: _Optional[str] = ..., forecastURI: _Optional[str] = ..., failed: bool = ..., failureMsg: _Optional[str] = ..., workerResults: _Optional[_Iterable[_Union[_generated_pb2.WorkerRunResult, _Mapping]]] = ...) -> None: ...

class ForwardCurtainSpec(_message.Message):
    __slots__ = ["enabled", "accountRef", "percent"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ACCOUNTREF_FIELD_NUMBER: _ClassVar[int]
    PERCENT_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    accountRef: _generated_pb2_1_1_1.ObjectReference
    percent: int
    def __init__(self, enabled: bool = ..., accountRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., percent: _Optional[int] = ...) -> None: ...

class MetricHistory(_message.Message):
    __slots__ = ["metric", "history"]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    HISTORY_FIELD_NUMBER: _ClassVar[int]
    metric: str
    history: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, metric: _Optional[str] = ..., history: _Optional[_Iterable[float]] = ...) -> None: ...

class ModelDeploymentRecord(_message.Message):
    __slots__ = ["modelName", "modelVersion", "modelRole", "imageName", "deployedAt", "retiredAt", "failureMessage", "avgDailyPrediction", "avgLatency"]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    MODELVERSION_FIELD_NUMBER: _ClassVar[int]
    MODELROLE_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    RETIREDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    AVGDAILYPREDICTION_FIELD_NUMBER: _ClassVar[int]
    AVGLATENCY_FIELD_NUMBER: _ClassVar[int]
    modelName: str
    modelVersion: str
    modelRole: str
    imageName: str
    deployedAt: _generated_pb2_1_1_1_1.Time
    retiredAt: _generated_pb2_1_1_1_1.Time
    failureMessage: str
    avgDailyPrediction: int
    avgLatency: float
    def __init__(self, modelName: _Optional[str] = ..., modelVersion: _Optional[str] = ..., modelRole: _Optional[str] = ..., imageName: _Optional[str] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., retiredAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., avgDailyPrediction: _Optional[int] = ..., avgLatency: _Optional[float] = ...) -> None: ...

class ModelDeploymentStatus(_message.Message):
    __slots__ = ["modelName", "modelVersion", "modelRole", "imageName", "deploymentRef", "serviceRef", "hpaRef", "failureMessage", "deployedAt", "lastFeedbackDatasetRef", "lastFeedbackTestAt", "lastFeedbackTestResults", "metricsHistory", "avgDailyPrediction", "avgLatency", "endpoint"]
    class MetricsHistoryEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: MetricHistory
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[MetricHistory, _Mapping]] = ...) -> None: ...
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    MODELVERSION_FIELD_NUMBER: _ClassVar[int]
    MODELROLE_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTREF_FIELD_NUMBER: _ClassVar[int]
    SERVICEREF_FIELD_NUMBER: _ClassVar[int]
    HPAREF_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    LASTFEEDBACKDATASETREF_FIELD_NUMBER: _ClassVar[int]
    LASTFEEDBACKTESTAT_FIELD_NUMBER: _ClassVar[int]
    LASTFEEDBACKTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    METRICSHISTORY_FIELD_NUMBER: _ClassVar[int]
    AVGDAILYPREDICTION_FIELD_NUMBER: _ClassVar[int]
    AVGLATENCY_FIELD_NUMBER: _ClassVar[int]
    ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    modelName: str
    modelVersion: str
    modelRole: str
    imageName: str
    deploymentRef: _generated_pb2_1_1_1.ObjectReference
    serviceRef: _generated_pb2_1_1_1.ObjectReference
    hpaRef: _generated_pb2_1_1_1.ObjectReference
    failureMessage: str
    deployedAt: _generated_pb2_1_1_1_1.Time
    lastFeedbackDatasetRef: _generated_pb2_1_1_1.ObjectReference
    lastFeedbackTestAt: _generated_pb2_1_1_1_1.Time
    lastFeedbackTestResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    metricsHistory: _containers.MessageMap[str, MetricHistory]
    avgDailyPrediction: int
    avgLatency: float
    endpoint: str
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

class PartitionPredictionLocationsSpec(_message.Message):
    __slots__ = ["groupForecastFile"]
    GROUPFORECASTFILE_FIELD_NUMBER: _ClassVar[int]
    groupForecastFile: str
    def __init__(self, groupForecastFile: _Optional[str] = ...) -> None: ...

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
    __slots__ = ["enabled", "inMemory", "redis", "connectionRef"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    INMEMORY_FIELD_NUMBER: _ClassVar[int]
    REDIS_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONREF_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    inMemory: bool
    redis: bool
    connectionRef: _generated_pb2_1_1_1.ObjectReference
    def __init__(self, enabled: bool = ..., inMemory: bool = ..., redis: bool = ..., connectionRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ...) -> None: ...

class PredictionList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Prediction]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Prediction, _Mapping]]] = ...) -> None: ...

class PredictionLoggingSpec(_message.Message):
    __slots__ = ["enabled", "samplePercent", "rows", "backupFreqSeconds", "backupConnectionRef", "location"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    SAMPLEPERCENT_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    BACKUPFREQSECONDS_FIELD_NUMBER: _ClassVar[int]
    BACKUPCONNECTIONREF_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    samplePercent: int
    rows: int
    backupFreqSeconds: int
    backupConnectionRef: _generated_pb2_1_1_1.ObjectReference
    location: _generated_pb2.DataLocation
    def __init__(self, enabled: bool = ..., samplePercent: _Optional[int] = ..., rows: _Optional[int] = ..., backupFreqSeconds: _Optional[int] = ..., backupConnectionRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ...) -> None: ...

class PredictionSpec(_message.Message):
    __slots__ = ["versionName", "owner", "input", "output", "servingSiteRef", "modelRef", "createDataset", "labeled", "unitTests", "resources", "activeDeadlineSeconds", "schedule", "abort", "forecastSpec", "partitionLocation", "modelClassName"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    INPUT_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    MODELREF_FIELD_NUMBER: _ClassVar[int]
    CREATEDATASET_FIELD_NUMBER: _ClassVar[int]
    LABELED_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    ACTIVEDEADLINESECONDS_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    ABORT_FIELD_NUMBER: _ClassVar[int]
    FORECASTSPEC_FIELD_NUMBER: _ClassVar[int]
    PARTITIONLOCATION_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    owner: str
    input: _generated_pb2_1.DataInputSpec
    output: _generated_pb2_1.DataOutputSpec
    servingSiteRef: _generated_pb2_1_1_1.ObjectReference
    modelRef: _generated_pb2_1_1_1.ObjectReference
    createDataset: bool
    labeled: bool
    unitTests: _generated_pb2_1_1.ModelTestSuite
    resources: _generated_pb2.ResourceSpec
    activeDeadlineSeconds: int
    schedule: _generated_pb2.CronSchedule
    abort: bool
    forecastSpec: ForecastPredictionSpec
    partitionLocation: PartitionPredictionLocationsSpec
    modelClassName: str
    def __init__(self, versionName: _Optional[str] = ..., owner: _Optional[str] = ..., input: _Optional[_Union[_generated_pb2_1.DataInputSpec, _Mapping]] = ..., output: _Optional[_Union[_generated_pb2_1.DataOutputSpec, _Mapping]] = ..., servingSiteRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., modelRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., createDataset: bool = ..., labeled: bool = ..., unitTests: _Optional[_Union[_generated_pb2_1_1.ModelTestSuite, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., activeDeadlineSeconds: _Optional[int] = ..., schedule: _Optional[_Union[_generated_pb2.CronSchedule, _Mapping]] = ..., abort: bool = ..., forecastSpec: _Optional[_Union[ForecastPredictionSpec, _Mapping]] = ..., partitionLocation: _Optional[_Union[PartitionPredictionLocationsSpec, _Mapping]] = ..., modelClassName: _Optional[str] = ...) -> None: ...

class PredictionStatus(_message.Message):
    __slots__ = ["completedAt", "phase", "unitTestsResult", "observedGeneration", "rows", "logs", "updatedAt", "failureMessage", "datasetRef", "forecast", "usage", "runs", "conditions"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSRESULT_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    DATASETREF_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    USAGE_FIELD_NUMBER: _ClassVar[int]
    RUNS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1_1_1.Time
    phase: str
    unitTestsResult: _generated_pb2.TestSuiteResult
    observedGeneration: int
    rows: int
    logs: _generated_pb2.Logs
    updatedAt: _generated_pb2_1_1_1_1.Time
    failureMessage: str
    datasetRef: _generated_pb2_1_1_1.ObjectReference
    forecast: ForecastStatus
    usage: _generated_pb2.ResourceConsumption
    runs: _generated_pb2.RunStatus
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    def __init__(self, completedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., phase: _Optional[str] = ..., unitTestsResult: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., rows: _Optional[int] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., datasetRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., forecast: _Optional[_Union[ForecastStatus, _Mapping]] = ..., usage: _Optional[_Union[_generated_pb2.ResourceConsumption, _Mapping]] = ..., runs: _Optional[_Union[_generated_pb2.RunStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

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
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Predictor]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Predictor, _Mapping]]] = ...) -> None: ...

class PredictorSpec(_message.Message):
    __slots__ = ["versionName", "modelClassName", "description", "productRef", "template", "servingSiteRef", "models", "progressive", "access", "replicas", "autoScaling", "owner", "resources", "cache", "store", "serving", "task", "drift", "feedback", "notification", "predictionLogging", "forwardCurtain", "backwardCurtain", "fastSlow"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PRODUCTREF_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    PROGRESSIVE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    AUTOSCALING_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    CACHE_FIELD_NUMBER: _ClassVar[int]
    STORE_FIELD_NUMBER: _ClassVar[int]
    SERVING_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    DRIFT_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONLOGGING_FIELD_NUMBER: _ClassVar[int]
    FORWARDCURTAIN_FIELD_NUMBER: _ClassVar[int]
    BACKWARDCURTAIN_FIELD_NUMBER: _ClassVar[int]
    FASTSLOW_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    modelClassName: str
    description: str
    productRef: _generated_pb2_1_1_1.ObjectReference
    template: bool
    servingSiteRef: _generated_pb2_1_1_1.ObjectReference
    models: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ModelDeploymentSpec]
    progressive: ProgressiveSpec
    access: _generated_pb2.AccessSpec
    replicas: int
    autoScaling: AutoScalingSpec
    owner: str
    resources: _generated_pb2.ResourceSpec
    cache: PredictionCacheSpec
    store: OnlineFeatureStoreSpec
    serving: ModelServingSpec
    task: str
    drift: DriftDetectionSpec
    feedback: FeedbackTestSpec
    notification: _generated_pb2.NotificationSpec
    predictionLogging: PredictionLoggingSpec
    forwardCurtain: ForwardCurtainSpec
    backwardCurtain: BackwardCurtainSpec
    fastSlow: FastSlowModelSpec
    def __init__(self, versionName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., description: _Optional[str] = ..., productRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., template: bool = ..., servingSiteRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., models: _Optional[_Iterable[_Union[_generated_pb2.ModelDeploymentSpec, _Mapping]]] = ..., progressive: _Optional[_Union[ProgressiveSpec, _Mapping]] = ..., access: _Optional[_Union[_generated_pb2.AccessSpec, _Mapping]] = ..., replicas: _Optional[int] = ..., autoScaling: _Optional[_Union[AutoScalingSpec, _Mapping]] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., cache: _Optional[_Union[PredictionCacheSpec, _Mapping]] = ..., store: _Optional[_Union[OnlineFeatureStoreSpec, _Mapping]] = ..., serving: _Optional[_Union[ModelServingSpec, _Mapping]] = ..., task: _Optional[str] = ..., drift: _Optional[_Union[DriftDetectionSpec, _Mapping]] = ..., feedback: _Optional[_Union[FeedbackTestSpec, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., predictionLogging: _Optional[_Union[PredictionLoggingSpec, _Mapping]] = ..., forwardCurtain: _Optional[_Union[ForwardCurtainSpec, _Mapping]] = ..., backwardCurtain: _Optional[_Union[BackwardCurtainSpec, _Mapping]] = ..., fastSlow: _Optional[_Union[FastSlowModelSpec, _Mapping]] = ...) -> None: ...

class PredictorStatus(_message.Message):
    __slots__ = ["observedGeneration", "history", "modelStatus", "predictorletStatus", "onlineStoreStatus", "updatedAt", "failureMessage", "loadBalancerStatus", "lastPredictionDataset", "servingTestsResults", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    HISTORY_FIELD_NUMBER: _ClassVar[int]
    MODELSTATUS_FIELD_NUMBER: _ClassVar[int]
    PREDICTORLETSTATUS_FIELD_NUMBER: _ClassVar[int]
    ONLINESTORESTATUS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LOADBALANCERSTATUS_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTIONDATASET_FIELD_NUMBER: _ClassVar[int]
    SERVINGTESTSRESULTS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    history: _containers.RepeatedCompositeFieldContainer[ModelDeploymentRecord]
    modelStatus: _containers.RepeatedCompositeFieldContainer[ModelDeploymentStatus]
    predictorletStatus: PredictorletStatus
    onlineStoreStatus: OnlineStoreStatus
    updatedAt: _generated_pb2_1_1_1_1.Time
    failureMessage: str
    loadBalancerStatus: _generated_pb2_1_1_1.LoadBalancerStatus
    lastPredictionDataset: _generated_pb2_1_1_1.ObjectReference
    servingTestsResults: _generated_pb2.TestSuiteResult
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., history: _Optional[_Iterable[_Union[ModelDeploymentRecord, _Mapping]]] = ..., modelStatus: _Optional[_Iterable[_Union[ModelDeploymentStatus, _Mapping]]] = ..., predictorletStatus: _Optional[_Union[PredictorletStatus, _Mapping]] = ..., onlineStoreStatus: _Optional[_Union[OnlineStoreStatus, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., loadBalancerStatus: _Optional[_Union[_generated_pb2_1_1_1.LoadBalancerStatus, _Mapping]] = ..., lastPredictionDataset: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., servingTestsResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class PredictorletStatus(_message.Message):
    __slots__ = ["deploymentRef", "serviceRef", "deployedAt", "p50", "p95", "p99", "avgDailyPrediction", "totalPredictions", "lastPredictionTime", "failureMessage"]
    DEPLOYMENTREF_FIELD_NUMBER: _ClassVar[int]
    SERVICEREF_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    P50_FIELD_NUMBER: _ClassVar[int]
    P95_FIELD_NUMBER: _ClassVar[int]
    P99_FIELD_NUMBER: _ClassVar[int]
    AVGDAILYPREDICTION_FIELD_NUMBER: _ClassVar[int]
    TOTALPREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTIONTIME_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    deploymentRef: _generated_pb2_1_1_1.ObjectReference
    serviceRef: _generated_pb2_1_1_1.ObjectReference
    deployedAt: _generated_pb2_1_1_1_1.Time
    p50: float
    p95: float
    p99: float
    avgDailyPrediction: int
    totalPredictions: int
    lastPredictionTime: _generated_pb2_1_1_1_1.Time
    failureMessage: str
    def __init__(self, deploymentRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., serviceRef: _Optional[_Union[_generated_pb2_1_1_1.ObjectReference, _Mapping]] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., p50: _Optional[float] = ..., p95: _Optional[float] = ..., p99: _Optional[float] = ..., avgDailyPrediction: _Optional[int] = ..., totalPredictions: _Optional[int] = ..., lastPredictionTime: _Optional[_Union[_generated_pb2_1_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ...) -> None: ...

class ProgressiveSpec(_message.Message):
    __slots__ = ["warmup", "trafficIncrement", "canaryMetrics"]
    WARMUP_FIELD_NUMBER: _ClassVar[int]
    TRAFFICINCREMENT_FIELD_NUMBER: _ClassVar[int]
    CANARYMETRICS_FIELD_NUMBER: _ClassVar[int]
    warmup: int
    trafficIncrement: int
    canaryMetrics: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, warmup: _Optional[int] = ..., trafficIncrement: _Optional[int] = ..., canaryMetrics: _Optional[_Iterable[str]] = ...) -> None: ...

class ValidationError(_message.Message):
    __slots__ = ["column", "metric", "min", "max", "actual"]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    column: str
    metric: str
    min: float
    max: float
    actual: float
    def __init__(self, column: _Optional[str] = ..., metric: _Optional[str] = ..., min: _Optional[float] = ..., max: _Optional[float] = ..., actual: _Optional[float] = ...) -> None: ...
