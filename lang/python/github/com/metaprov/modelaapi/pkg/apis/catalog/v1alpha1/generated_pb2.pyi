from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.api.resource import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AccessSpec(_message.Message):
    __slots__ = ["accessType", "apikeySecretRef", "authMethod", "http", "nodePort", "path", "port"]
    ACCESSTYPE_FIELD_NUMBER: _ClassVar[int]
    APIKEYSECRETREF_FIELD_NUMBER: _ClassVar[int]
    AUTHMETHOD_FIELD_NUMBER: _ClassVar[int]
    HTTP_FIELD_NUMBER: _ClassVar[int]
    NODEPORT_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    accessType: str
    apikeySecretRef: _generated_pb2.SecretReference
    authMethod: str
    http: bool
    nodePort: int
    path: str
    port: int
    def __init__(self, port: _Optional[int] = ..., nodePort: _Optional[int] = ..., path: _Optional[str] = ..., accessType: _Optional[str] = ..., http: bool = ..., authMethod: _Optional[str] = ..., apikeySecretRef: _Optional[_Union[_generated_pb2.SecretReference, _Mapping]] = ...) -> None: ...

class AccountPermissions(_message.Message):
    __slots__ = ["accountName", "roles"]
    ACCOUNTNAME_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    accountName: str
    roles: _containers.RepeatedCompositeFieldContainer[_generated_pb2.LocalObjectReference]
    def __init__(self, accountName: _Optional[str] = ..., roles: _Optional[_Iterable[_Union[_generated_pb2.LocalObjectReference, _Mapping]]] = ...) -> None: ...

class Algorithm(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: AlgorithmSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[AlgorithmSpec, _Mapping]] = ...) -> None: ...

class AlgorithmList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Algorithm]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Algorithm, _Mapping]]] = ...) -> None: ...

class AlgorithmSpec(_message.Message):
    __slots__ = ["description", "frameworkName", "ranges", "sparse", "tasks", "url"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    FRAMEWORKNAME_FIELD_NUMBER: _ClassVar[int]
    RANGES_FIELD_NUMBER: _ClassVar[int]
    SPARSE_FIELD_NUMBER: _ClassVar[int]
    TASKS_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    description: str
    frameworkName: str
    ranges: _containers.RepeatedCompositeFieldContainer[ParameterRange]
    sparse: bool
    tasks: _containers.RepeatedScalarFieldContainer[str]
    url: str
    def __init__(self, frameworkName: _Optional[str] = ..., description: _Optional[str] = ..., url: _Optional[str] = ..., tasks: _Optional[_Iterable[str]] = ..., sparse: bool = ..., ranges: _Optional[_Iterable[_Union[ParameterRange, _Mapping]]] = ...) -> None: ...

class Cloud(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: CloudSpec
    status: CloudStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[CloudSpec, _Mapping]] = ..., status: _Optional[_Union[CloudStatus, _Mapping]] = ...) -> None: ...

class CloudList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Cloud]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Cloud, _Mapping]]] = ...) -> None: ...

class CloudSpec(_message.Message):
    __slots__ = ["defaultGpuClassName", "defaultMachineClassName", "defaultRegionName", "gpuClasses", "machineClasses", "regions"]
    DEFAULTGPUCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTMACHINECLASSNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTREGIONNAME_FIELD_NUMBER: _ClassVar[int]
    GPUCLASSES_FIELD_NUMBER: _ClassVar[int]
    MACHINECLASSES_FIELD_NUMBER: _ClassVar[int]
    REGIONS_FIELD_NUMBER: _ClassVar[int]
    defaultGpuClassName: str
    defaultMachineClassName: str
    defaultRegionName: str
    gpuClasses: _containers.RepeatedCompositeFieldContainer[GpuClass]
    machineClasses: _containers.RepeatedCompositeFieldContainer[MachineClass]
    regions: _containers.RepeatedCompositeFieldContainer[Region]
    def __init__(self, defaultRegionName: _Optional[str] = ..., defaultMachineClassName: _Optional[str] = ..., defaultGpuClassName: _Optional[str] = ..., machineClasses: _Optional[_Iterable[_Union[MachineClass, _Mapping]]] = ..., gpuClasses: _Optional[_Iterable[_Union[GpuClass, _Mapping]]] = ..., regions: _Optional[_Iterable[_Union[Region, _Mapping]]] = ...) -> None: ...

class CloudStatus(_message.Message):
    __slots__ = ["gpuCosts", "machineCosts"]
    GPUCOSTS_FIELD_NUMBER: _ClassVar[int]
    MACHINECOSTS_FIELD_NUMBER: _ClassVar[int]
    gpuCosts: _containers.RepeatedCompositeFieldContainer[GpuClassCost]
    machineCosts: _containers.RepeatedCompositeFieldContainer[MachineClassCost]
    def __init__(self, machineCosts: _Optional[_Iterable[_Union[MachineClassCost, _Mapping]]] = ..., gpuCosts: _Optional[_Iterable[_Union[GpuClassCost, _Mapping]]] = ...) -> None: ...

class CompilerSpec(_message.Message):
    __slots__ = ["compiler", "enable", "targets"]
    COMPILER_FIELD_NUMBER: _ClassVar[int]
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    TARGETS_FIELD_NUMBER: _ClassVar[int]
    compiler: str
    enable: bool
    targets: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, enable: bool = ..., compiler: _Optional[str] = ..., targets: _Optional[_Iterable[str]] = ...) -> None: ...

class ConfusionMatrix(_message.Message):
    __slots__ = ["rows"]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    rows: _containers.RepeatedCompositeFieldContainer[ConfusionMatrixRow]
    def __init__(self, rows: _Optional[_Iterable[_Union[ConfusionMatrixRow, _Mapping]]] = ...) -> None: ...

class ConfusionMatrixRow(_message.Message):
    __slots__ = ["count", "p", "pct", "t"]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    PCT_FIELD_NUMBER: _ClassVar[int]
    P_FIELD_NUMBER: _ClassVar[int]
    T_FIELD_NUMBER: _ClassVar[int]
    count: int
    p: str
    pct: float
    t: str
    def __init__(self, t: _Optional[str] = ..., p: _Optional[str] = ..., count: _Optional[int] = ..., pct: _Optional[float] = ...) -> None: ...

class ContainerLog(_message.Message):
    __slots__ = ["bucket", "container", "job", "key"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONTAINER_FIELD_NUMBER: _ClassVar[int]
    JOB_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    bucket: str
    container: str
    job: str
    key: str
    def __init__(self, job: _Optional[str] = ..., container: _Optional[str] = ..., key: _Optional[str] = ..., bucket: _Optional[str] = ...) -> None: ...

class CronSchedule(_message.Message):
    __slots__ = ["cron", "enabled", "maxRecords", "type"]
    CRON_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    MAXRECORDS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    cron: str
    enabled: bool
    maxRecords: int
    type: str
    def __init__(self, enabled: bool = ..., cron: _Optional[str] = ..., type: _Optional[str] = ..., maxRecords: _Optional[int] = ...) -> None: ...

class CurvePoint(_message.Message):
    __slots__ = ["x", "y"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...

class DataCenter(_message.Message):
    __slots__ = ["code", "name"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    code: str
    name: str
    def __init__(self, name: _Optional[str] = ..., code: _Optional[str] = ...) -> None: ...

class DataLocation(_message.Message):
    __slots__ = ["bucketName", "connectionName", "database", "path", "resourceRef", "sql", "table", "topic", "type", "url"]
    BUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DATABASE_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    RESOURCEREF_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    TOPIC_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    bucketName: str
    connectionName: str
    database: str
    path: str
    resourceRef: _generated_pb2.ObjectReference
    sql: str
    table: str
    topic: str
    type: str
    url: str
    def __init__(self, type: _Optional[str] = ..., connectionName: _Optional[str] = ..., bucketName: _Optional[str] = ..., path: _Optional[str] = ..., table: _Optional[str] = ..., database: _Optional[str] = ..., sql: _Optional[str] = ..., topic: _Optional[str] = ..., url: _Optional[str] = ..., resourceRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ...) -> None: ...

class DataTestCase(_message.Message):
    __slots__ = ["assertThat", "column", "column2", "columns", "compareToRef", "dataFilter", "enabled", "entityRef", "entityRef2", "expectedCategory", "expectedSet", "expectedValue", "featureFilter", "generated", "lower", "lowerInclusive", "metric", "name", "periods", "referenceType", "tags", "type", "upper", "upperInclusive"]
    ASSERTTHAT_FIELD_NUMBER: _ClassVar[int]
    COLUMN2_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    COMPARETOREF_FIELD_NUMBER: _ClassVar[int]
    DATAFILTER_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF2_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    EXPECTEDCATEGORY_FIELD_NUMBER: _ClassVar[int]
    EXPECTEDSET_FIELD_NUMBER: _ClassVar[int]
    EXPECTEDVALUE_FIELD_NUMBER: _ClassVar[int]
    FEATUREFILTER_FIELD_NUMBER: _ClassVar[int]
    GENERATED_FIELD_NUMBER: _ClassVar[int]
    LOWERINCLUSIVE_FIELD_NUMBER: _ClassVar[int]
    LOWER_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PERIODS_FIELD_NUMBER: _ClassVar[int]
    REFERENCETYPE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    UPPERINCLUSIVE_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    assertThat: str
    column: str
    column2: str
    columns: _containers.RepeatedScalarFieldContainer[str]
    compareToRef: _generated_pb2.ObjectReference
    dataFilter: str
    enabled: bool
    entityRef: _generated_pb2.ObjectReference
    entityRef2: _generated_pb2.ObjectReference
    expectedCategory: str
    expectedSet: _containers.RepeatedScalarFieldContainer[str]
    expectedValue: float
    featureFilter: str
    generated: bool
    lower: float
    lowerInclusive: bool
    metric: str
    name: str
    periods: int
    referenceType: str
    tags: _containers.RepeatedScalarFieldContainer[str]
    type: str
    upper: float
    upperInclusive: bool
    def __init__(self, enabled: bool = ..., name: _Optional[str] = ..., assertThat: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., compareToRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., column: _Optional[str] = ..., type: _Optional[str] = ..., metric: _Optional[str] = ..., expectedValue: _Optional[float] = ..., expectedCategory: _Optional[str] = ..., lower: _Optional[float] = ..., upper: _Optional[float] = ..., expectedSet: _Optional[_Iterable[str]] = ..., lowerInclusive: bool = ..., upperInclusive: bool = ..., generated: bool = ..., tags: _Optional[_Iterable[str]] = ..., column2: _Optional[str] = ..., entityRef2: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., columns: _Optional[_Iterable[str]] = ..., featureFilter: _Optional[str] = ..., dataFilter: _Optional[str] = ..., referenceType: _Optional[str] = ..., periods: _Optional[int] = ...) -> None: ...

class DataTestCaseResult(_message.Message):
    __slots__ = ["actual", "error", "failure", "failureMsg", "name"]
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    FAILUREMSG_FIELD_NUMBER: _ClassVar[int]
    FAILURE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    actual: Measurement
    error: bool
    failure: bool
    failureMsg: str
    name: str
    def __init__(self, name: _Optional[str] = ..., actual: _Optional[_Union[Measurement, _Mapping]] = ..., failure: bool = ..., error: bool = ..., failureMsg: _Optional[str] = ...) -> None: ...

class FileLocation(_message.Message):
    __slots__ = ["bucketName", "path"]
    BUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    bucketName: str
    path: str
    def __init__(self, bucketName: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...

class GithubEvents(_message.Message):
    __slots__ = ["blobNameRegex", "branch", "events", "gitConnectionName", "repository"]
    BLOBNAMEREGEX_FIELD_NUMBER: _ClassVar[int]
    BRANCH_FIELD_NUMBER: _ClassVar[int]
    EVENTS_FIELD_NUMBER: _ClassVar[int]
    GITCONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    REPOSITORY_FIELD_NUMBER: _ClassVar[int]
    blobNameRegex: str
    branch: str
    events: _containers.RepeatedScalarFieldContainer[str]
    gitConnectionName: str
    repository: str
    def __init__(self, gitConnectionName: _Optional[str] = ..., repository: _Optional[str] = ..., branch: _Optional[str] = ..., blobNameRegex: _Optional[str] = ..., events: _Optional[_Iterable[str]] = ...) -> None: ...

class GpuClass(_message.Message):
    __slots__ = ["code", "gpumem", "regionName", "vcpu"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    GPUMEM_FIELD_NUMBER: _ClassVar[int]
    REGIONNAME_FIELD_NUMBER: _ClassVar[int]
    VCPU_FIELD_NUMBER: _ClassVar[int]
    code: str
    gpumem: _generated_pb2_1.Quantity
    regionName: str
    vcpu: int
    def __init__(self, code: _Optional[str] = ..., regionName: _Optional[str] = ..., vcpu: _Optional[int] = ..., gpumem: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ...) -> None: ...

class GpuClassCost(_message.Message):
    __slots__ = ["code", "costPerMinute", "costSpot", "region"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    COSTPERMINUTE_FIELD_NUMBER: _ClassVar[int]
    COSTSPOT_FIELD_NUMBER: _ClassVar[int]
    REGION_FIELD_NUMBER: _ClassVar[int]
    code: str
    costPerMinute: _generated_pb2_1.Quantity
    costSpot: _generated_pb2_1.Quantity
    region: str
    def __init__(self, code: _Optional[str] = ..., region: _Optional[str] = ..., costPerMinute: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ..., costSpot: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ...) -> None: ...

class HistogramData(_message.Message):
    __slots__ = ["bins", "categories", "counts", "invalid", "missing"]
    BINS_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    COUNTS_FIELD_NUMBER: _ClassVar[int]
    INVALID_FIELD_NUMBER: _ClassVar[int]
    MISSING_FIELD_NUMBER: _ClassVar[int]
    bins: _containers.RepeatedScalarFieldContainer[float]
    categories: _containers.RepeatedScalarFieldContainer[str]
    counts: _containers.RepeatedScalarFieldContainer[float]
    invalid: int
    missing: int
    def __init__(self, bins: _Optional[_Iterable[float]] = ..., categories: _Optional[_Iterable[str]] = ..., counts: _Optional[_Iterable[float]] = ..., missing: _Optional[int] = ..., invalid: _Optional[int] = ...) -> None: ...

class Images(_message.Message):
    __slots__ = ["dataImage", "publisherImage", "trainerImage"]
    DATAIMAGE_FIELD_NUMBER: _ClassVar[int]
    PUBLISHERIMAGE_FIELD_NUMBER: _ClassVar[int]
    TRAINERIMAGE_FIELD_NUMBER: _ClassVar[int]
    dataImage: str
    publisherImage: str
    trainerImage: str
    def __init__(self, trainerImage: _Optional[str] = ..., dataImage: _Optional[str] = ..., publisherImage: _Optional[str] = ...) -> None: ...

class LastRunStatus(_message.Message):
    __slots__ = ["completedAt", "duration", "failureMessage", "failureReason", "name", "status"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1.Time
    duration: int
    failureMessage: str
    failureReason: str
    name: str
    status: str
    def __init__(self, name: _Optional[str] = ..., status: _Optional[str] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., duration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ...) -> None: ...

class Lib(_message.Message):
    __slots__ = ["frameworks", "version"]
    FRAMEWORKS_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    frameworks: str
    version: str
    def __init__(self, frameworks: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class Logs(_message.Message):
    __slots__ = ["bucket", "containers"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONTAINERS_FIELD_NUMBER: _ClassVar[int]
    bucket: str
    containers: _containers.RepeatedCompositeFieldContainer[ContainerLog]
    def __init__(self, bucket: _Optional[str] = ..., containers: _Optional[_Iterable[_Union[ContainerLog, _Mapping]]] = ...) -> None: ...

class MLFramework(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: MLFrameworkSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[MLFrameworkSpec, _Mapping]] = ...) -> None: ...

class MLFrameworkList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[MLFramework]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[MLFramework, _Mapping]]] = ...) -> None: ...

class MLFrameworkSpec(_message.Message):
    __slots__ = ["description", "lang", "url", "version"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    LANG_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    description: str
    lang: str
    url: str
    version: str
    def __init__(self, url: _Optional[str] = ..., description: _Optional[str] = ..., version: _Optional[str] = ..., lang: _Optional[str] = ...) -> None: ...

class MachineClass(_message.Message):
    __slots__ = ["code", "mem", "regionName", "storage", "vcpu"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    MEM_FIELD_NUMBER: _ClassVar[int]
    REGIONNAME_FIELD_NUMBER: _ClassVar[int]
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    VCPU_FIELD_NUMBER: _ClassVar[int]
    code: str
    mem: _generated_pb2_1.Quantity
    regionName: str
    storage: str
    vcpu: int
    def __init__(self, code: _Optional[str] = ..., regionName: _Optional[str] = ..., mem: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ..., vcpu: _Optional[int] = ..., storage: _Optional[str] = ...) -> None: ...

class MachineClassCost(_message.Message):
    __slots__ = ["code", "costPerMinute", "costSpot", "region"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    COSTPERMINUTE_FIELD_NUMBER: _ClassVar[int]
    COSTSPOT_FIELD_NUMBER: _ClassVar[int]
    REGION_FIELD_NUMBER: _ClassVar[int]
    code: str
    costPerMinute: _generated_pb2_1.Quantity
    costSpot: _generated_pb2_1.Quantity
    region: str
    def __init__(self, code: _Optional[str] = ..., region: _Optional[str] = ..., costPerMinute: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ..., costSpot: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ...) -> None: ...

class ManagedImage(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: ManagedImageSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ManagedImageSpec, _Mapping]] = ...) -> None: ...

class ManagedImageList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ManagedImage]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ManagedImage, _Mapping]]] = ...) -> None: ...

class ManagedImageSpec(_message.Message):
    __slots__ = ["active", "base", "connectionRef", "description", "env", "frameworks", "gpu", "libs", "mantainedBy", "os", "osVersion", "preload", "private", "registry", "repository", "role", "tag", "uri"]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    BASE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONREF_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENV_FIELD_NUMBER: _ClassVar[int]
    FRAMEWORKS_FIELD_NUMBER: _ClassVar[int]
    GPU_FIELD_NUMBER: _ClassVar[int]
    LIBS_FIELD_NUMBER: _ClassVar[int]
    MANTAINEDBY_FIELD_NUMBER: _ClassVar[int]
    OSVERSION_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    PRELOAD_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_FIELD_NUMBER: _ClassVar[int]
    REGISTRY_FIELD_NUMBER: _ClassVar[int]
    REPOSITORY_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    active: bool
    base: str
    connectionRef: _generated_pb2.ObjectReference
    description: str
    env: _containers.RepeatedCompositeFieldContainer[_generated_pb2.EnvVar]
    frameworks: _containers.RepeatedScalarFieldContainer[str]
    gpu: bool
    libs: _containers.RepeatedCompositeFieldContainer[Lib]
    mantainedBy: str
    os: str
    osVersion: str
    preload: bool
    private: bool
    registry: str
    repository: str
    role: str
    tag: str
    uri: str
    def __init__(self, description: _Optional[str] = ..., registry: _Optional[str] = ..., repository: _Optional[str] = ..., tag: _Optional[str] = ..., env: _Optional[_Iterable[_Union[_generated_pb2.EnvVar, _Mapping]]] = ..., gpu: bool = ..., active: bool = ..., preload: bool = ..., connectionRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., base: _Optional[str] = ..., role: _Optional[str] = ..., mantainedBy: _Optional[str] = ..., uri: _Optional[str] = ..., frameworks: _Optional[_Iterable[str]] = ..., libs: _Optional[_Iterable[_Union[Lib, _Mapping]]] = ..., os: _Optional[str] = ..., osVersion: _Optional[str] = ..., private: bool = ...) -> None: ...

class Measurement(_message.Message):
    __slots__ = ["algorithm", "boolQty", "category", "column", "entity", "metric", "stddev", "taskType", "timePoint", "value", "valueSet"]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    BOOLQTY_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    ENTITY_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    STDDEV_FIELD_NUMBER: _ClassVar[int]
    TASKTYPE_FIELD_NUMBER: _ClassVar[int]
    TIMEPOINT_FIELD_NUMBER: _ClassVar[int]
    VALUESET_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    algorithm: str
    boolQty: bool
    category: str
    column: str
    entity: _generated_pb2.ObjectReference
    metric: str
    stddev: float
    taskType: str
    timePoint: _generated_pb2_1_1.Time
    value: float
    valueSet: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, entity: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., column: _Optional[str] = ..., metric: _Optional[str] = ..., value: _Optional[float] = ..., stddev: _Optional[float] = ..., boolQty: bool = ..., category: _Optional[str] = ..., valueSet: _Optional[_Iterable[str]] = ..., timePoint: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., taskType: _Optional[str] = ..., algorithm: _Optional[str] = ...) -> None: ...

class ModelDeploymentSpec(_message.Message):
    __slots__ = ["approvedBy", "imageName", "modelRef", "port", "role", "traffic"]
    APPROVEDBY_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    MODELREF_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    TRAFFIC_FIELD_NUMBER: _ClassVar[int]
    approvedBy: _generated_pb2.ObjectReference
    imageName: str
    modelRef: _generated_pb2.ObjectReference
    port: int
    role: str
    traffic: int
    def __init__(self, modelRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., port: _Optional[int] = ..., traffic: _Optional[int] = ..., role: _Optional[str] = ..., imageName: _Optional[str] = ..., approvedBy: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ...) -> None: ...

class NotificationSpec(_message.Message):
    __slots__ = ["notifierName", "selector", "ttl"]
    class SelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NOTIFIERNAME_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    notifierName: str
    selector: _containers.ScalarMap[str, str]
    ttl: int
    def __init__(self, ttl: _Optional[int] = ..., notifierName: _Optional[str] = ..., selector: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ObjectiveSpec(_message.Message):
    __slots__ = ["goal", "metric"]
    GOAL_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    goal: str
    metric: str
    def __init__(self, metric: _Optional[str] = ..., goal: _Optional[str] = ...) -> None: ...

class PRCurve(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[CurvePoint]
    def __init__(self, values: _Optional[_Iterable[_Union[CurvePoint, _Mapping]]] = ...) -> None: ...

class ParameterRange(_message.Message):
    __slots__ = ["choices", "conditional", "defaultChoice", "defaultValue", "high", "log", "low", "name", "parent", "parentValueCat", "parentValueFloat", "parentValueInteger", "step", "type"]
    CHOICES_FIELD_NUMBER: _ClassVar[int]
    CONDITIONAL_FIELD_NUMBER: _ClassVar[int]
    DEFAULTCHOICE_FIELD_NUMBER: _ClassVar[int]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    LOG_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PARENTVALUECAT_FIELD_NUMBER: _ClassVar[int]
    PARENTVALUEFLOAT_FIELD_NUMBER: _ClassVar[int]
    PARENTVALUEINTEGER_FIELD_NUMBER: _ClassVar[int]
    PARENT_FIELD_NUMBER: _ClassVar[int]
    STEP_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    choices: _containers.RepeatedScalarFieldContainer[str]
    conditional: bool
    defaultChoice: str
    defaultValue: float
    high: float
    log: bool
    low: float
    name: str
    parent: str
    parentValueCat: str
    parentValueFloat: float
    parentValueInteger: int
    step: int
    type: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., low: _Optional[float] = ..., high: _Optional[float] = ..., step: _Optional[int] = ..., log: bool = ..., choices: _Optional[_Iterable[str]] = ..., defaultValue: _Optional[float] = ..., defaultChoice: _Optional[str] = ..., conditional: bool = ..., parent: _Optional[str] = ..., parentValueCat: _Optional[str] = ..., parentValueInteger: _Optional[int] = ..., parentValueFloat: _Optional[float] = ...) -> None: ...

class PermissionsSpec(_message.Message):
    __slots__ = ["accounts"]
    ACCOUNTS_FIELD_NUMBER: _ClassVar[int]
    accounts: _containers.RepeatedCompositeFieldContainer[AccountPermissions]
    def __init__(self, accounts: _Optional[_Iterable[_Union[AccountPermissions, _Mapping]]] = ...) -> None: ...

class PretrainedModel(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: PretrainedModelSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PretrainedModelSpec, _Mapping]] = ...) -> None: ...

class PretrainedModelList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PretrainedModel]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PretrainedModel, _Mapping]]] = ...) -> None: ...

class PretrainedModelSpec(_message.Message):
    __slots__ = ["image"]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    image: str
    def __init__(self, image: _Optional[str] = ...) -> None: ...

class PublicDataset(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: PublicDatasetSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PublicDatasetSpec, _Mapping]] = ...) -> None: ...

class PublicDatasetList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PublicDataset]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PublicDataset, _Mapping]]] = ...) -> None: ...

class PublicDatasetSpec(_message.Message):
    __slots__ = ["citation", "columns", "dataProductCR", "dataUrl", "datasetCR", "datasourceCR", "description", "fileSize", "imbalanced", "industry", "openMLID", "rows", "studyCR", "targetColumn", "task", "url"]
    CITATION_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTCR_FIELD_NUMBER: _ClassVar[int]
    DATASETCR_FIELD_NUMBER: _ClassVar[int]
    DATASOURCECR_FIELD_NUMBER: _ClassVar[int]
    DATAURL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    FILESIZE_FIELD_NUMBER: _ClassVar[int]
    IMBALANCED_FIELD_NUMBER: _ClassVar[int]
    INDUSTRY_FIELD_NUMBER: _ClassVar[int]
    OPENMLID_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    STUDYCR_FIELD_NUMBER: _ClassVar[int]
    TARGETCOLUMN_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    citation: str
    columns: int
    dataProductCR: str
    dataUrl: str
    datasetCR: str
    datasourceCR: str
    description: str
    fileSize: int
    imbalanced: bool
    industry: str
    openMLID: str
    rows: int
    studyCR: str
    targetColumn: str
    task: str
    url: str
    def __init__(self, url: _Optional[str] = ..., description: _Optional[str] = ..., task: _Optional[str] = ..., openMLID: _Optional[str] = ..., dataUrl: _Optional[str] = ..., citation: _Optional[str] = ..., rows: _Optional[int] = ..., columns: _Optional[int] = ..., fileSize: _Optional[int] = ..., targetColumn: _Optional[str] = ..., industry: _Optional[str] = ..., imbalanced: bool = ..., datasourceCR: _Optional[str] = ..., datasetCR: _Optional[str] = ..., studyCR: _Optional[str] = ..., dataProductCR: _Optional[str] = ...) -> None: ...

class Region(_message.Message):
    __slots__ = ["billingCode", "code", "datacenters", "defaultDatacenterName", "location"]
    BILLINGCODE_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    DATACENTERS_FIELD_NUMBER: _ClassVar[int]
    DEFAULTDATACENTERNAME_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    billingCode: str
    code: str
    datacenters: _containers.RepeatedCompositeFieldContainer[DataCenter]
    defaultDatacenterName: str
    location: str
    def __init__(self, code: _Optional[str] = ..., defaultDatacenterName: _Optional[str] = ..., location: _Optional[str] = ..., billingCode: _Optional[str] = ..., datacenters: _Optional[_Iterable[_Union[DataCenter, _Mapping]]] = ...) -> None: ...

class ResourceConsumption(_message.Message):
    __slots__ = ["cpu", "gpu", "memory"]
    CPU_FIELD_NUMBER: _ClassVar[int]
    GPU_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    cpu: int
    gpu: int
    memory: int
    def __init__(self, cpu: _Optional[int] = ..., memory: _Optional[int] = ..., gpu: _Optional[int] = ...) -> None: ...

class ResourceSpec(_message.Message):
    __slots__ = ["custom", "requirements", "workloadName"]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    REQUIREMENTS_FIELD_NUMBER: _ClassVar[int]
    WORKLOADNAME_FIELD_NUMBER: _ClassVar[int]
    custom: bool
    requirements: _generated_pb2.ResourceRequirements
    workloadName: str
    def __init__(self, workloadName: _Optional[str] = ..., custom: bool = ..., requirements: _Optional[_Union[_generated_pb2.ResourceRequirements, _Mapping]] = ...) -> None: ...

class RocAucCurve(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[CurvePoint]
    def __init__(self, values: _Optional[_Iterable[_Union[CurvePoint, _Mapping]]] = ...) -> None: ...

class RunRecord(_message.Message):
    __slots__ = ["completedAt", "failureMessage", "id", "logs", "resourceVersion", "startedAt"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1.Time
    failureMessage: str
    id: str
    logs: _containers.RepeatedCompositeFieldContainer[ContainerLog]
    resourceVersion: int
    startedAt: _generated_pb2_1_1.Time
    def __init__(self, id: _Optional[str] = ..., failureMessage: _Optional[str] = ..., resourceVersion: _Optional[int] = ..., startedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., logs: _Optional[_Iterable[_Union[ContainerLog, _Mapping]]] = ...) -> None: ...

class RunSchedule(_message.Message):
    __slots__ = ["cron", "enabled", "type"]
    CRON_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    cron: str
    enabled: bool
    type: str
    def __init__(self, enabled: bool = ..., cron: _Optional[str] = ..., type: _Optional[str] = ...) -> None: ...

class RunScheduleStatus(_message.Message):
    __slots__ = ["failureMessage", "lastRunCompletionAt", "lastRunCreationAt", "lastRunLogs", "lastRunName"]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LASTRUNCOMPLETIONAT_FIELD_NUMBER: _ClassVar[int]
    LASTRUNCREATIONAT_FIELD_NUMBER: _ClassVar[int]
    LASTRUNLOGS_FIELD_NUMBER: _ClassVar[int]
    LASTRUNNAME_FIELD_NUMBER: _ClassVar[int]
    failureMessage: str
    lastRunCompletionAt: _generated_pb2_1_1.Time
    lastRunCreationAt: _generated_pb2_1_1.Time
    lastRunLogs: _containers.RepeatedCompositeFieldContainer[ContainerLog]
    lastRunName: int
    def __init__(self, lastRunCreationAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastRunCompletionAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., lastRunName: _Optional[int] = ..., lastRunLogs: _Optional[_Iterable[_Union[ContainerLog, _Mapping]]] = ...) -> None: ...

class RunSpec(_message.Message):
    __slots__ = ["maxPreviousRuns", "timeout"]
    MAXPREVIOUSRUNS_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    maxPreviousRuns: int
    timeout: int
    def __init__(self, timeout: _Optional[int] = ..., maxPreviousRuns: _Optional[int] = ...) -> None: ...

class RunStatus(_message.Message):
    __slots__ = ["activeRunId", "activeRunLogs", "lastRunAt", "lastRunId", "runRecords"]
    ACTIVERUNID_FIELD_NUMBER: _ClassVar[int]
    ACTIVERUNLOGS_FIELD_NUMBER: _ClassVar[int]
    LASTRUNAT_FIELD_NUMBER: _ClassVar[int]
    LASTRUNID_FIELD_NUMBER: _ClassVar[int]
    RUNRECORDS_FIELD_NUMBER: _ClassVar[int]
    activeRunId: str
    activeRunLogs: _containers.RepeatedCompositeFieldContainer[ContainerLog]
    lastRunAt: _generated_pb2_1_1.Time
    lastRunId: str
    runRecords: _containers.RepeatedCompositeFieldContainer[RunRecord]
    def __init__(self, lastRunAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastRunId: _Optional[str] = ..., activeRunId: _Optional[str] = ..., activeRunLogs: _Optional[_Iterable[_Union[ContainerLog, _Mapping]]] = ..., runRecords: _Optional[_Iterable[_Union[RunRecord, _Mapping]]] = ...) -> None: ...

class SnapshotReference(_message.Message):
    __slots__ = ["owner", "version"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    owner: str
    version: int
    def __init__(self, owner: _Optional[str] = ..., version: _Optional[int] = ...) -> None: ...

class TestSuite(_message.Message):
    __slots__ = ["enabled", "tests"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    tests: _containers.RepeatedCompositeFieldContainer[DataTestCase]
    def __init__(self, enabled: bool = ..., tests: _Optional[_Iterable[_Union[DataTestCase, _Mapping]]] = ...) -> None: ...

class TestSuiteResult(_message.Message):
    __slots__ = ["completedAt", "entityRef", "errors", "failures", "startedAt", "tests"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    FAILURES_FIELD_NUMBER: _ClassVar[int]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1.Time
    entityRef: _generated_pb2.ObjectReference
    errors: int
    failures: int
    startedAt: _generated_pb2_1_1.Time
    tests: _containers.RepeatedCompositeFieldContainer[DataTestCaseResult]
    def __init__(self, entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., failures: _Optional[int] = ..., errors: _Optional[int] = ..., startedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., tests: _Optional[_Iterable[_Union[DataTestCaseResult, _Mapping]]] = ...) -> None: ...

class WorkerRunResult(_message.Message):
    __slots__ = ["error", "id", "task", "uri"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    error: str
    id: int
    task: str
    uri: str
    def __init__(self, id: _Optional[int] = ..., uri: _Optional[str] = ..., task: _Optional[str] = ..., error: _Optional[str] = ...) -> None: ...

class WorkloadClass(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: WorkloadClassSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[WorkloadClassSpec, _Mapping]] = ...) -> None: ...

class WorkloadClassList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[WorkloadClass]
    metadata: _generated_pb2_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[WorkloadClass, _Mapping]]] = ...) -> None: ...

class WorkloadClassSpec(_message.Message):
    __slots__ = ["resourcesTemplate"]
    RESOURCESTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    resourcesTemplate: ResourceSpec
    def __init__(self, resourcesTemplate: _Optional[_Union[ResourceSpec, _Mapping]] = ...) -> None: ...
