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
    __slots__ = ["port", "nodePort", "path", "accessType", "http", "authMethod", "apikeySecretRef"]
    PORT_FIELD_NUMBER: _ClassVar[int]
    NODEPORT_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    ACCESSTYPE_FIELD_NUMBER: _ClassVar[int]
    HTTP_FIELD_NUMBER: _ClassVar[int]
    AUTHMETHOD_FIELD_NUMBER: _ClassVar[int]
    APIKEYSECRETREF_FIELD_NUMBER: _ClassVar[int]
    port: int
    nodePort: int
    path: str
    accessType: str
    http: bool
    authMethod: str
    apikeySecretRef: _generated_pb2.SecretReference
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
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Algorithm]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Algorithm, _Mapping]]] = ...) -> None: ...

class AlgorithmSpec(_message.Message):
    __slots__ = ["frameworkName", "description", "url", "tasks", "sparse", "ranges"]
    FRAMEWORKNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    TASKS_FIELD_NUMBER: _ClassVar[int]
    SPARSE_FIELD_NUMBER: _ClassVar[int]
    RANGES_FIELD_NUMBER: _ClassVar[int]
    frameworkName: str
    description: str
    url: str
    tasks: _containers.RepeatedScalarFieldContainer[str]
    sparse: bool
    ranges: _containers.RepeatedCompositeFieldContainer[ParameterRange]
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
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Cloud]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Cloud, _Mapping]]] = ...) -> None: ...

class CloudSpec(_message.Message):
    __slots__ = ["defaultRegionName", "defaultMachineClassName", "defaultGpuClassName", "machineClasses", "gpuClasses", "regions"]
    DEFAULTREGIONNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTMACHINECLASSNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTGPUCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MACHINECLASSES_FIELD_NUMBER: _ClassVar[int]
    GPUCLASSES_FIELD_NUMBER: _ClassVar[int]
    REGIONS_FIELD_NUMBER: _ClassVar[int]
    defaultRegionName: str
    defaultMachineClassName: str
    defaultGpuClassName: str
    machineClasses: _containers.RepeatedCompositeFieldContainer[MachineClass]
    gpuClasses: _containers.RepeatedCompositeFieldContainer[GpuClass]
    regions: _containers.RepeatedCompositeFieldContainer[Region]
    def __init__(self, defaultRegionName: _Optional[str] = ..., defaultMachineClassName: _Optional[str] = ..., defaultGpuClassName: _Optional[str] = ..., machineClasses: _Optional[_Iterable[_Union[MachineClass, _Mapping]]] = ..., gpuClasses: _Optional[_Iterable[_Union[GpuClass, _Mapping]]] = ..., regions: _Optional[_Iterable[_Union[Region, _Mapping]]] = ...) -> None: ...

class CloudStatus(_message.Message):
    __slots__ = ["machineCosts", "gpuCosts"]
    MACHINECOSTS_FIELD_NUMBER: _ClassVar[int]
    GPUCOSTS_FIELD_NUMBER: _ClassVar[int]
    machineCosts: _containers.RepeatedCompositeFieldContainer[MachineClassCost]
    gpuCosts: _containers.RepeatedCompositeFieldContainer[GpuClassCost]
    def __init__(self, machineCosts: _Optional[_Iterable[_Union[MachineClassCost, _Mapping]]] = ..., gpuCosts: _Optional[_Iterable[_Union[GpuClassCost, _Mapping]]] = ...) -> None: ...

class CompilerSpec(_message.Message):
    __slots__ = ["enable", "compiler", "targets"]
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    COMPILER_FIELD_NUMBER: _ClassVar[int]
    TARGETS_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    compiler: str
    targets: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, enable: bool = ..., compiler: _Optional[str] = ..., targets: _Optional[_Iterable[str]] = ...) -> None: ...

class ConfusionMatrix(_message.Message):
    __slots__ = ["rows"]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    rows: _containers.RepeatedCompositeFieldContainer[ConfusionMatrixRow]
    def __init__(self, rows: _Optional[_Iterable[_Union[ConfusionMatrixRow, _Mapping]]] = ...) -> None: ...

class ConfusionMatrixRow(_message.Message):
    __slots__ = ["t", "p", "count", "pct"]
    T_FIELD_NUMBER: _ClassVar[int]
    P_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    PCT_FIELD_NUMBER: _ClassVar[int]
    t: str
    p: str
    count: int
    pct: float
    def __init__(self, t: _Optional[str] = ..., p: _Optional[str] = ..., count: _Optional[int] = ..., pct: _Optional[float] = ...) -> None: ...

class ContainerLog(_message.Message):
    __slots__ = ["job", "container", "key", "bucket"]
    JOB_FIELD_NUMBER: _ClassVar[int]
    CONTAINER_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    job: str
    container: str
    key: str
    bucket: str
    def __init__(self, job: _Optional[str] = ..., container: _Optional[str] = ..., key: _Optional[str] = ..., bucket: _Optional[str] = ...) -> None: ...

class CurvePoint(_message.Message):
    __slots__ = ["x", "y"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...

class DataCenter(_message.Message):
    __slots__ = ["name", "code"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    name: str
    code: str
    def __init__(self, name: _Optional[str] = ..., code: _Optional[str] = ...) -> None: ...

class DataLocation(_message.Message):
    __slots__ = ["file", "database", "web", "resource"]
    FILE_FIELD_NUMBER: _ClassVar[int]
    DATABASE_FIELD_NUMBER: _ClassVar[int]
    WEB_FIELD_NUMBER: _ClassVar[int]
    RESOURCE_FIELD_NUMBER: _ClassVar[int]
    file: FileLocation
    database: DatabaseLocation
    web: WebLocation
    resource: ResourceLocation
    def __init__(self, file: _Optional[_Union[FileLocation, _Mapping]] = ..., database: _Optional[_Union[DatabaseLocation, _Mapping]] = ..., web: _Optional[_Union[WebLocation, _Mapping]] = ..., resource: _Optional[_Union[ResourceLocation, _Mapping]] = ...) -> None: ...

class DataTestCase(_message.Message):
    __slots__ = ["enabled", "name", "assertThat", "entityRef", "compareToRef", "column", "type", "metric", "expectedValue", "expectedCategory", "lower", "upper", "expectedSet", "lowerInclusive", "upperInclusive", "generated", "tags", "column2", "entityRef2", "columns", "featureFilter", "dataFilter", "referenceType", "periods"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ASSERTTHAT_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    COMPARETOREF_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    EXPECTEDVALUE_FIELD_NUMBER: _ClassVar[int]
    EXPECTEDCATEGORY_FIELD_NUMBER: _ClassVar[int]
    LOWER_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    EXPECTEDSET_FIELD_NUMBER: _ClassVar[int]
    LOWERINCLUSIVE_FIELD_NUMBER: _ClassVar[int]
    UPPERINCLUSIVE_FIELD_NUMBER: _ClassVar[int]
    GENERATED_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    COLUMN2_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF2_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    FEATUREFILTER_FIELD_NUMBER: _ClassVar[int]
    DATAFILTER_FIELD_NUMBER: _ClassVar[int]
    REFERENCETYPE_FIELD_NUMBER: _ClassVar[int]
    PERIODS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    name: str
    assertThat: str
    entityRef: _generated_pb2.ObjectReference
    compareToRef: _generated_pb2.ObjectReference
    column: str
    type: str
    metric: str
    expectedValue: float
    expectedCategory: str
    lower: float
    upper: float
    expectedSet: _containers.RepeatedScalarFieldContainer[str]
    lowerInclusive: bool
    upperInclusive: bool
    generated: bool
    tags: _containers.RepeatedScalarFieldContainer[str]
    column2: str
    entityRef2: _generated_pb2.ObjectReference
    columns: _containers.RepeatedScalarFieldContainer[str]
    featureFilter: str
    dataFilter: str
    referenceType: str
    periods: int
    def __init__(self, enabled: bool = ..., name: _Optional[str] = ..., assertThat: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., compareToRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., column: _Optional[str] = ..., type: _Optional[str] = ..., metric: _Optional[str] = ..., expectedValue: _Optional[float] = ..., expectedCategory: _Optional[str] = ..., lower: _Optional[float] = ..., upper: _Optional[float] = ..., expectedSet: _Optional[_Iterable[str]] = ..., lowerInclusive: bool = ..., upperInclusive: bool = ..., generated: bool = ..., tags: _Optional[_Iterable[str]] = ..., column2: _Optional[str] = ..., entityRef2: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., columns: _Optional[_Iterable[str]] = ..., featureFilter: _Optional[str] = ..., dataFilter: _Optional[str] = ..., referenceType: _Optional[str] = ..., periods: _Optional[int] = ...) -> None: ...

class DataTestCaseResult(_message.Message):
    __slots__ = ["name", "actual", "failure", "error", "failureMsg"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    FAILURE_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    FAILUREMSG_FIELD_NUMBER: _ClassVar[int]
    name: str
    actual: Measurement
    failure: bool
    error: bool
    failureMsg: str
    def __init__(self, name: _Optional[str] = ..., actual: _Optional[_Union[Measurement, _Mapping]] = ..., failure: bool = ..., error: bool = ..., failureMsg: _Optional[str] = ...) -> None: ...

class DatabaseLocation(_message.Message):
    __slots__ = ["connectionName", "table", "sql"]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    table: str
    sql: str
    def __init__(self, connectionName: _Optional[str] = ..., table: _Optional[str] = ..., sql: _Optional[str] = ...) -> None: ...

class FileLocation(_message.Message):
    __slots__ = ["bucketName", "path"]
    BUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    bucketName: str
    path: str
    def __init__(self, bucketName: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...

class GpuClass(_message.Message):
    __slots__ = ["code", "regionName", "vcpu", "gpumem"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    REGIONNAME_FIELD_NUMBER: _ClassVar[int]
    VCPU_FIELD_NUMBER: _ClassVar[int]
    GPUMEM_FIELD_NUMBER: _ClassVar[int]
    code: str
    regionName: str
    vcpu: int
    gpumem: _generated_pb2_1.Quantity
    def __init__(self, code: _Optional[str] = ..., regionName: _Optional[str] = ..., vcpu: _Optional[int] = ..., gpumem: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ...) -> None: ...

class GpuClassCost(_message.Message):
    __slots__ = ["code", "region", "costPerMinute", "costSpot"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    REGION_FIELD_NUMBER: _ClassVar[int]
    COSTPERMINUTE_FIELD_NUMBER: _ClassVar[int]
    COSTSPOT_FIELD_NUMBER: _ClassVar[int]
    code: str
    region: str
    costPerMinute: _generated_pb2_1.Quantity
    costSpot: _generated_pb2_1.Quantity
    def __init__(self, code: _Optional[str] = ..., region: _Optional[str] = ..., costPerMinute: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ..., costSpot: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ...) -> None: ...

class HistogramData(_message.Message):
    __slots__ = ["bins", "categories", "counts", "missing", "invalid"]
    BINS_FIELD_NUMBER: _ClassVar[int]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    COUNTS_FIELD_NUMBER: _ClassVar[int]
    MISSING_FIELD_NUMBER: _ClassVar[int]
    INVALID_FIELD_NUMBER: _ClassVar[int]
    bins: _containers.RepeatedScalarFieldContainer[float]
    categories: _containers.RepeatedScalarFieldContainer[str]
    counts: _containers.RepeatedScalarFieldContainer[float]
    missing: int
    invalid: int
    def __init__(self, bins: _Optional[_Iterable[float]] = ..., categories: _Optional[_Iterable[str]] = ..., counts: _Optional[_Iterable[float]] = ..., missing: _Optional[int] = ..., invalid: _Optional[int] = ...) -> None: ...

class Images(_message.Message):
    __slots__ = ["dataImage"]
    DATAIMAGE_FIELD_NUMBER: _ClassVar[int]
    dataImage: str
    def __init__(self, dataImage: _Optional[str] = ...) -> None: ...

class LastRunStatus(_message.Message):
    __slots__ = ["name", "status", "completedAt", "duration", "failureReason", "failureMessage"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    name: str
    status: str
    completedAt: _generated_pb2_1_1.Time
    duration: int
    failureReason: str
    failureMessage: str
    def __init__(self, name: _Optional[str] = ..., status: _Optional[str] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., duration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ...) -> None: ...

class Lib(_message.Message):
    __slots__ = ["frameworks", "version"]
    FRAMEWORKS_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    frameworks: str
    version: str
    def __init__(self, frameworks: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class MLFramework(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: MLFrameworkSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[MLFrameworkSpec, _Mapping]] = ...) -> None: ...

class MLFrameworkList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[MLFramework]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[MLFramework, _Mapping]]] = ...) -> None: ...

class MLFrameworkSpec(_message.Message):
    __slots__ = ["url", "description", "version", "lang"]
    URL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    LANG_FIELD_NUMBER: _ClassVar[int]
    url: str
    description: str
    version: str
    lang: str
    def __init__(self, url: _Optional[str] = ..., description: _Optional[str] = ..., version: _Optional[str] = ..., lang: _Optional[str] = ...) -> None: ...

class MachineClass(_message.Message):
    __slots__ = ["code", "regionName", "mem", "vcpu", "storage"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    REGIONNAME_FIELD_NUMBER: _ClassVar[int]
    MEM_FIELD_NUMBER: _ClassVar[int]
    VCPU_FIELD_NUMBER: _ClassVar[int]
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    code: str
    regionName: str
    mem: _generated_pb2_1.Quantity
    vcpu: int
    storage: str
    def __init__(self, code: _Optional[str] = ..., regionName: _Optional[str] = ..., mem: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ..., vcpu: _Optional[int] = ..., storage: _Optional[str] = ...) -> None: ...

class MachineClassCost(_message.Message):
    __slots__ = ["code", "region", "costPerMinute", "costSpot"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    REGION_FIELD_NUMBER: _ClassVar[int]
    COSTPERMINUTE_FIELD_NUMBER: _ClassVar[int]
    COSTSPOT_FIELD_NUMBER: _ClassVar[int]
    code: str
    region: str
    costPerMinute: _generated_pb2_1.Quantity
    costSpot: _generated_pb2_1.Quantity
    def __init__(self, code: _Optional[str] = ..., region: _Optional[str] = ..., costPerMinute: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ..., costSpot: _Optional[_Union[_generated_pb2_1.Quantity, _Mapping]] = ...) -> None: ...

class ManagedImage(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: ManagedImageSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ManagedImageSpec, _Mapping]] = ...) -> None: ...

class ManagedImageList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[ManagedImage]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ManagedImage, _Mapping]]] = ...) -> None: ...

class ManagedImageSpec(_message.Message):
    __slots__ = ["description", "registry", "repository", "tag", "env", "gpu", "active", "preload", "connectionRef", "base", "role", "mantainedBy", "uri", "frameworks", "libs", "os", "osVersion", "private"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    REGISTRY_FIELD_NUMBER: _ClassVar[int]
    REPOSITORY_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    ENV_FIELD_NUMBER: _ClassVar[int]
    GPU_FIELD_NUMBER: _ClassVar[int]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    PRELOAD_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONREF_FIELD_NUMBER: _ClassVar[int]
    BASE_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    MANTAINEDBY_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    FRAMEWORKS_FIELD_NUMBER: _ClassVar[int]
    LIBS_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    OSVERSION_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_FIELD_NUMBER: _ClassVar[int]
    description: str
    registry: str
    repository: str
    tag: str
    env: _containers.RepeatedCompositeFieldContainer[_generated_pb2.EnvVar]
    gpu: bool
    active: bool
    preload: bool
    connectionRef: _generated_pb2.ObjectReference
    base: str
    role: str
    mantainedBy: str
    uri: str
    frameworks: _containers.RepeatedScalarFieldContainer[str]
    libs: _containers.RepeatedCompositeFieldContainer[Lib]
    os: str
    osVersion: str
    private: bool
    def __init__(self, description: _Optional[str] = ..., registry: _Optional[str] = ..., repository: _Optional[str] = ..., tag: _Optional[str] = ..., env: _Optional[_Iterable[_Union[_generated_pb2.EnvVar, _Mapping]]] = ..., gpu: bool = ..., active: bool = ..., preload: bool = ..., connectionRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., base: _Optional[str] = ..., role: _Optional[str] = ..., mantainedBy: _Optional[str] = ..., uri: _Optional[str] = ..., frameworks: _Optional[_Iterable[str]] = ..., libs: _Optional[_Iterable[_Union[Lib, _Mapping]]] = ..., os: _Optional[str] = ..., osVersion: _Optional[str] = ..., private: bool = ...) -> None: ...

class ManifestLocation(_message.Message):
    __slots__ = ["bucketName", "path", "generation"]
    BUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    GENERATION_FIELD_NUMBER: _ClassVar[int]
    bucketName: str
    path: str
    generation: int
    def __init__(self, bucketName: _Optional[str] = ..., path: _Optional[str] = ..., generation: _Optional[int] = ...) -> None: ...

class Measurement(_message.Message):
    __slots__ = ["entity", "column", "metric", "value", "stddev", "boolQty", "category", "valueSet", "timePoint", "taskType", "algorithm"]
    ENTITY_FIELD_NUMBER: _ClassVar[int]
    COLUMN_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    STDDEV_FIELD_NUMBER: _ClassVar[int]
    BOOLQTY_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    VALUESET_FIELD_NUMBER: _ClassVar[int]
    TIMEPOINT_FIELD_NUMBER: _ClassVar[int]
    TASKTYPE_FIELD_NUMBER: _ClassVar[int]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    entity: _generated_pb2.ObjectReference
    column: str
    metric: str
    value: float
    stddev: float
    boolQty: bool
    category: str
    valueSet: _containers.RepeatedScalarFieldContainer[str]
    timePoint: _generated_pb2_1_1.Time
    taskType: str
    algorithm: str
    def __init__(self, entity: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., column: _Optional[str] = ..., metric: _Optional[str] = ..., value: _Optional[float] = ..., stddev: _Optional[float] = ..., boolQty: bool = ..., category: _Optional[str] = ..., valueSet: _Optional[_Iterable[str]] = ..., timePoint: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., taskType: _Optional[str] = ..., algorithm: _Optional[str] = ...) -> None: ...

class ModelDeploymentSpec(_message.Message):
    __slots__ = ["modelRef", "port", "traffic", "role", "imageName", "approvedBy"]
    MODELREF_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    TRAFFIC_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    APPROVEDBY_FIELD_NUMBER: _ClassVar[int]
    modelRef: _generated_pb2.ObjectReference
    port: int
    traffic: int
    role: str
    imageName: str
    approvedBy: _generated_pb2.ObjectReference
    def __init__(self, modelRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., port: _Optional[int] = ..., traffic: _Optional[int] = ..., role: _Optional[str] = ..., imageName: _Optional[str] = ..., approvedBy: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ...) -> None: ...

class NotificationSpec(_message.Message):
    __slots__ = ["ttl", "notifierName", "selector"]
    class SelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TTL_FIELD_NUMBER: _ClassVar[int]
    NOTIFIERNAME_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    ttl: int
    notifierName: str
    selector: _containers.ScalarMap[str, str]
    def __init__(self, ttl: _Optional[int] = ..., notifierName: _Optional[str] = ..., selector: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ObjectiveSpec(_message.Message):
    __slots__ = ["metric", "goal"]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    GOAL_FIELD_NUMBER: _ClassVar[int]
    metric: str
    goal: str
    def __init__(self, metric: _Optional[str] = ..., goal: _Optional[str] = ...) -> None: ...

class PRCurve(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[CurvePoint]
    def __init__(self, values: _Optional[_Iterable[_Union[CurvePoint, _Mapping]]] = ...) -> None: ...

class ParameterRange(_message.Message):
    __slots__ = ["name", "type", "low", "high", "step", "log", "choices", "defaultValue", "defaultChoice", "conditional", "parent", "parentValueCat", "parentValueInteger", "parentValueFloat"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    STEP_FIELD_NUMBER: _ClassVar[int]
    LOG_FIELD_NUMBER: _ClassVar[int]
    CHOICES_FIELD_NUMBER: _ClassVar[int]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    DEFAULTCHOICE_FIELD_NUMBER: _ClassVar[int]
    CONDITIONAL_FIELD_NUMBER: _ClassVar[int]
    PARENT_FIELD_NUMBER: _ClassVar[int]
    PARENTVALUECAT_FIELD_NUMBER: _ClassVar[int]
    PARENTVALUEINTEGER_FIELD_NUMBER: _ClassVar[int]
    PARENTVALUEFLOAT_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    low: float
    high: float
    step: int
    log: bool
    choices: _containers.RepeatedScalarFieldContainer[str]
    defaultValue: float
    defaultChoice: str
    conditional: bool
    parent: str
    parentValueCat: str
    parentValueInteger: int
    parentValueFloat: float
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., low: _Optional[float] = ..., high: _Optional[float] = ..., step: _Optional[int] = ..., log: bool = ..., choices: _Optional[_Iterable[str]] = ..., defaultValue: _Optional[float] = ..., defaultChoice: _Optional[str] = ..., conditional: bool = ..., parent: _Optional[str] = ..., parentValueCat: _Optional[str] = ..., parentValueInteger: _Optional[int] = ..., parentValueFloat: _Optional[float] = ...) -> None: ...

class PermissionsSpec(_message.Message):
    __slots__ = ["accounts"]
    ACCOUNTS_FIELD_NUMBER: _ClassVar[int]
    accounts: _containers.RepeatedCompositeFieldContainer[AccountPermissions]
    def __init__(self, accounts: _Optional[_Iterable[_Union[AccountPermissions, _Mapping]]] = ...) -> None: ...

class PredictionRunReference(_message.Message):
    __slots__ = ["prediction", "version", "name"]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    prediction: str
    version: int
    name: str
    def __init__(self, prediction: _Optional[str] = ..., version: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class PretrainedModel(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: PretrainedModelSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PretrainedModelSpec, _Mapping]] = ...) -> None: ...

class PretrainedModelList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[PretrainedModel]
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
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[PublicDataset]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PublicDataset, _Mapping]]] = ...) -> None: ...

class PublicDatasetSpec(_message.Message):
    __slots__ = ["url", "description", "task", "openMLID", "dataUrl", "citation", "rows", "columns", "fileSize", "targetColumn", "industry", "imbalanced", "datasourceCR", "datasetCR", "studyCR", "dataProductCR"]
    URL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    OPENMLID_FIELD_NUMBER: _ClassVar[int]
    DATAURL_FIELD_NUMBER: _ClassVar[int]
    CITATION_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    FILESIZE_FIELD_NUMBER: _ClassVar[int]
    TARGETCOLUMN_FIELD_NUMBER: _ClassVar[int]
    INDUSTRY_FIELD_NUMBER: _ClassVar[int]
    IMBALANCED_FIELD_NUMBER: _ClassVar[int]
    DATASOURCECR_FIELD_NUMBER: _ClassVar[int]
    DATASETCR_FIELD_NUMBER: _ClassVar[int]
    STUDYCR_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTCR_FIELD_NUMBER: _ClassVar[int]
    url: str
    description: str
    task: str
    openMLID: str
    dataUrl: str
    citation: str
    rows: int
    columns: int
    fileSize: int
    targetColumn: str
    industry: str
    imbalanced: bool
    datasourceCR: str
    datasetCR: str
    studyCR: str
    dataProductCR: str
    def __init__(self, url: _Optional[str] = ..., description: _Optional[str] = ..., task: _Optional[str] = ..., openMLID: _Optional[str] = ..., dataUrl: _Optional[str] = ..., citation: _Optional[str] = ..., rows: _Optional[int] = ..., columns: _Optional[int] = ..., fileSize: _Optional[int] = ..., targetColumn: _Optional[str] = ..., industry: _Optional[str] = ..., imbalanced: bool = ..., datasourceCR: _Optional[str] = ..., datasetCR: _Optional[str] = ..., studyCR: _Optional[str] = ..., dataProductCR: _Optional[str] = ...) -> None: ...

class Region(_message.Message):
    __slots__ = ["code", "defaultDatacenterName", "location", "billingCode", "datacenters"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    DEFAULTDATACENTERNAME_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    BILLINGCODE_FIELD_NUMBER: _ClassVar[int]
    DATACENTERS_FIELD_NUMBER: _ClassVar[int]
    code: str
    defaultDatacenterName: str
    location: str
    billingCode: str
    datacenters: _containers.RepeatedCompositeFieldContainer[DataCenter]
    def __init__(self, code: _Optional[str] = ..., defaultDatacenterName: _Optional[str] = ..., location: _Optional[str] = ..., billingCode: _Optional[str] = ..., datacenters: _Optional[_Iterable[_Union[DataCenter, _Mapping]]] = ...) -> None: ...

class ResourceConsumption(_message.Message):
    __slots__ = ["cpu", "memory", "gpu"]
    CPU_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    GPU_FIELD_NUMBER: _ClassVar[int]
    cpu: int
    memory: int
    gpu: int
    def __init__(self, cpu: _Optional[int] = ..., memory: _Optional[int] = ..., gpu: _Optional[int] = ...) -> None: ...

class ResourceLocation(_message.Message):
    __slots__ = ["kind", "name", "namespace"]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    kind: str
    name: str
    namespace: str
    def __init__(self, kind: _Optional[str] = ..., name: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class ResourceSpec(_message.Message):
    __slots__ = ["workloadName", "custom", "requirements"]
    WORKLOADNAME_FIELD_NUMBER: _ClassVar[int]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    REQUIREMENTS_FIELD_NUMBER: _ClassVar[int]
    workloadName: str
    custom: bool
    requirements: _generated_pb2.ResourceRequirements
    def __init__(self, workloadName: _Optional[str] = ..., custom: bool = ..., requirements: _Optional[_Union[_generated_pb2.ResourceRequirements, _Mapping]] = ...) -> None: ...

class RocAucCurve(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[CurvePoint]
    def __init__(self, values: _Optional[_Iterable[_Union[CurvePoint, _Mapping]]] = ...) -> None: ...

class RunReference(_message.Message):
    __slots__ = ["name", "version"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    version: int
    def __init__(self, name: _Optional[str] = ..., version: _Optional[int] = ...) -> None: ...

class RunSchedule(_message.Message):
    __slots__ = ["enabled", "cron", "type"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    CRON_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    cron: str
    type: str
    def __init__(self, enabled: bool = ..., cron: _Optional[str] = ..., type: _Optional[str] = ...) -> None: ...

class RunScheduleStatus(_message.Message):
    __slots__ = ["active", "lastScheduleTime", "lastSuccessfulTime"]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    LASTSCHEDULETIME_FIELD_NUMBER: _ClassVar[int]
    LASTSUCCESSFULTIME_FIELD_NUMBER: _ClassVar[int]
    active: _containers.RepeatedCompositeFieldContainer[RunReference]
    lastScheduleTime: _generated_pb2_1_1.Time
    lastSuccessfulTime: _generated_pb2_1_1.Time
    def __init__(self, active: _Optional[_Iterable[_Union[RunReference, _Mapping]]] = ..., lastScheduleTime: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastSuccessfulTime: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ...) -> None: ...

class RunSpec(_message.Message):
    __slots__ = ["timeout", "maxPreviousRuns", "schedule"]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    MAXPREVIOUSRUNS_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    timeout: int
    maxPreviousRuns: int
    schedule: RunSchedule
    def __init__(self, timeout: _Optional[int] = ..., maxPreviousRuns: _Optional[int] = ..., schedule: _Optional[_Union[RunSchedule, _Mapping]] = ...) -> None: ...

class SnapshotReference(_message.Message):
    __slots__ = ["dataset", "version", "name"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    dataset: str
    version: int
    name: str
    def __init__(self, dataset: _Optional[str] = ..., version: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class StudyRunReference(_message.Message):
    __slots__ = ["study", "version", "name"]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    study: str
    version: int
    name: str
    def __init__(self, study: _Optional[str] = ..., version: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class TestSuite(_message.Message):
    __slots__ = ["enabled", "tests"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    tests: _containers.RepeatedCompositeFieldContainer[DataTestCase]
    def __init__(self, enabled: bool = ..., tests: _Optional[_Iterable[_Union[DataTestCase, _Mapping]]] = ...) -> None: ...

class TestSuiteResult(_message.Message):
    __slots__ = ["entityRef", "failures", "errors", "startedAt", "completedAt", "tests"]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    FAILURES_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    entityRef: _generated_pb2.ObjectReference
    failures: int
    errors: int
    startedAt: _generated_pb2_1_1.Time
    completedAt: _generated_pb2_1_1.Time
    tests: _containers.RepeatedCompositeFieldContainer[DataTestCaseResult]
    def __init__(self, entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., failures: _Optional[int] = ..., errors: _Optional[int] = ..., startedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., tests: _Optional[_Iterable[_Union[DataTestCaseResult, _Mapping]]] = ...) -> None: ...

class WebLocation(_message.Message):
    __slots__ = ["url"]
    URL_FIELD_NUMBER: _ClassVar[int]
    url: str
    def __init__(self, url: _Optional[str] = ...) -> None: ...

class WorkerRunResult(_message.Message):
    __slots__ = ["id", "uri", "task", "error"]
    ID_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    id: int
    uri: str
    task: str
    error: str
    def __init__(self, id: _Optional[int] = ..., uri: _Optional[str] = ..., task: _Optional[str] = ..., error: _Optional[str] = ...) -> None: ...

class WorkloadClass(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: WorkloadClassSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[WorkloadClassSpec, _Mapping]] = ...) -> None: ...

class WorkloadClassList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[WorkloadClass]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[WorkloadClass, _Mapping]]] = ...) -> None: ...

class WorkloadClassSpec(_message.Message):
    __slots__ = ["resourcesTemplate"]
    RESOURCESTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    resourcesTemplate: ResourceSpec
    def __init__(self, resourcesTemplate: _Optional[_Union[ResourceSpec, _Mapping]] = ...) -> None: ...
