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

class APIKeyGroup(_message.Message):
    __slots__ = ("metadata", "spec", "status")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: APIKeyGroupSpec
    status: APIKeyGroupStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[APIKeyGroupSpec, _Mapping]] = ..., status: _Optional[_Union[APIKeyGroupStatus, _Mapping]] = ...) -> None: ...

class APIKeyGroupList(_message.Message):
    __slots__ = ("metadata", "items")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[APIKeyGroup]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[APIKeyGroup, _Mapping]]] = ...) -> None: ...

class APIKeyGroupSpec(_message.Message):
    __slots__ = ("owner", "description", "storage", "allowedServerNames", "allowedEndpointNames", "apiKeys")
    OWNER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDSERVERNAMES_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDENDPOINTNAMES_FIELD_NUMBER: _ClassVar[int]
    APIKEYS_FIELD_NUMBER: _ClassVar[int]
    owner: str
    description: str
    storage: APIKeyGroupStorageSpec
    allowedServerNames: _containers.RepeatedScalarFieldContainer[str]
    allowedEndpointNames: _containers.RepeatedScalarFieldContainer[str]
    apiKeys: _containers.RepeatedCompositeFieldContainer[APIKeySpec]
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., storage: _Optional[_Union[APIKeyGroupStorageSpec, _Mapping]] = ..., allowedServerNames: _Optional[_Iterable[str]] = ..., allowedEndpointNames: _Optional[_Iterable[str]] = ..., apiKeys: _Optional[_Iterable[_Union[APIKeySpec, _Mapping]]] = ...) -> None: ...

class APIKeyGroupStatus(_message.Message):
    __slots__ = ("observedGeneration", "storageConnectionName", "totalTokens", "totalRequests", "totalCost", "apiKeys", "updatedAt", "conditions")
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    STORAGECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    TOTALTOKENS_FIELD_NUMBER: _ClassVar[int]
    TOTALREQUESTS_FIELD_NUMBER: _ClassVar[int]
    TOTALCOST_FIELD_NUMBER: _ClassVar[int]
    APIKEYS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    storageConnectionName: str
    totalTokens: int
    totalRequests: int
    totalCost: int
    apiKeys: _containers.RepeatedCompositeFieldContainer[APIKeyStatus]
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., storageConnectionName: _Optional[str] = ..., totalTokens: _Optional[int] = ..., totalRequests: _Optional[int] = ..., totalCost: _Optional[int] = ..., apiKeys: _Optional[_Iterable[_Union[APIKeyStatus, _Mapping]]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class APIKeyGroupStorageSpec(_message.Message):
    __slots__ = ("type", "connectionName")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    type: str
    connectionName: str
    def __init__(self, type: _Optional[str] = ..., connectionName: _Optional[str] = ...) -> None: ...

class APIKeyMetrics(_message.Message):
    __slots__ = ("usage", "totalTokens", "totalRequests", "totalCost")
    USAGE_FIELD_NUMBER: _ClassVar[int]
    TOTALTOKENS_FIELD_NUMBER: _ClassVar[int]
    TOTALREQUESTS_FIELD_NUMBER: _ClassVar[int]
    TOTALCOST_FIELD_NUMBER: _ClassVar[int]
    usage: Quota
    totalTokens: int
    totalRequests: int
    totalCost: float
    def __init__(self, usage: _Optional[_Union[Quota, _Mapping]] = ..., totalTokens: _Optional[int] = ..., totalRequests: _Optional[int] = ..., totalCost: _Optional[float] = ...) -> None: ...

class APIKeyQuota(_message.Message):
    __slots__ = ("quota", "resetSchedule")
    QUOTA_FIELD_NUMBER: _ClassVar[int]
    RESETSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    quota: Quota
    resetSchedule: _generated_pb2.RunSchedule
    def __init__(self, quota: _Optional[_Union[Quota, _Mapping]] = ..., resetSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ...) -> None: ...

class APIKeySpec(_message.Message):
    __slots__ = ("name", "allowedServerNames", "allowedEndpointNames", "quota")
    NAME_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDSERVERNAMES_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDENDPOINTNAMES_FIELD_NUMBER: _ClassVar[int]
    QUOTA_FIELD_NUMBER: _ClassVar[int]
    name: str
    allowedServerNames: _containers.RepeatedScalarFieldContainer[str]
    allowedEndpointNames: _containers.RepeatedScalarFieldContainer[str]
    quota: APIKeyQuota
    def __init__(self, name: _Optional[str] = ..., allowedServerNames: _Optional[_Iterable[str]] = ..., allowedEndpointNames: _Optional[_Iterable[str]] = ..., quota: _Optional[_Union[APIKeyQuota, _Mapping]] = ...) -> None: ...

class APIKeyStatus(_message.Message):
    __slots__ = ("name", "creationDate", "lastUsedDate", "generatedDate", "quotaExceededDate", "quotaResetDate", "metrics")
    NAME_FIELD_NUMBER: _ClassVar[int]
    CREATIONDATE_FIELD_NUMBER: _ClassVar[int]
    LASTUSEDDATE_FIELD_NUMBER: _ClassVar[int]
    GENERATEDDATE_FIELD_NUMBER: _ClassVar[int]
    QUOTAEXCEEDEDDATE_FIELD_NUMBER: _ClassVar[int]
    QUOTARESETDATE_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    name: str
    creationDate: _generated_pb2_1_1.Time
    lastUsedDate: _generated_pb2_1_1.Time
    generatedDate: _generated_pb2_1_1.Time
    quotaExceededDate: _generated_pb2_1_1.Time
    quotaResetDate: _generated_pb2_1_1.Time
    metrics: APIKeyMetrics
    def __init__(self, name: _Optional[str] = ..., creationDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastUsedDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., generatedDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., quotaExceededDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., quotaResetDate: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., metrics: _Optional[_Union[APIKeyMetrics, _Mapping]] = ...) -> None: ...

class AutoVectorRetrieverSpec(_message.Message):
    __slots__ = ("enabled", "model", "maxTopK", "metadataInfo")
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    MAXTOPK_FIELD_NUMBER: _ClassVar[int]
    METADATAINFO_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    model: ModelSpec
    maxTopK: int
    metadataInfo: _containers.RepeatedCompositeFieldContainer[MetadataKeyInfo]
    def __init__(self, enabled: bool = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., maxTopK: _Optional[int] = ..., metadataInfo: _Optional[_Iterable[_Union[MetadataKeyInfo, _Mapping]]] = ...) -> None: ...

class BooleanSpec(_message.Message):
    __slots__ = ("extractionMode", "default")
    EXTRACTIONMODE_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    extractionMode: str
    default: bool
    def __init__(self, extractionMode: _Optional[str] = ..., default: bool = ...) -> None: ...

class CodeSplitterSpec(_message.Message):
    __slots__ = ("language", "chunkLines", "chunkLinesOverlap", "maxChars")
    LANGUAGE_FIELD_NUMBER: _ClassVar[int]
    CHUNKLINES_FIELD_NUMBER: _ClassVar[int]
    CHUNKLINESOVERLAP_FIELD_NUMBER: _ClassVar[int]
    MAXCHARS_FIELD_NUMBER: _ClassVar[int]
    language: str
    chunkLines: int
    chunkLinesOverlap: int
    maxChars: int
    def __init__(self, language: _Optional[str] = ..., chunkLines: _Optional[int] = ..., chunkLinesOverlap: _Optional[int] = ..., maxChars: _Optional[int] = ...) -> None: ...

class CohereRerankSpec(_message.Message):
    __slots__ = ("connectionName", "topN")
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    TOPN_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    topN: int
    def __init__(self, connectionName: _Optional[str] = ..., topN: _Optional[int] = ...) -> None: ...

class Column(_message.Message):
    __slots__ = ("name", "type", "integer", "float", "text", "boolean", "description", "metadataKey")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    INTEGER_FIELD_NUMBER: _ClassVar[int]
    FLOAT_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    BOOLEAN_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    METADATAKEY_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    integer: IntegerSpec
    float: FloatSpec
    text: TextSpec
    boolean: BooleanSpec
    description: str
    metadataKey: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., integer: _Optional[_Union[IntegerSpec, _Mapping]] = ..., float: _Optional[_Union[FloatSpec, _Mapping]] = ..., text: _Optional[_Union[TextSpec, _Mapping]] = ..., boolean: _Optional[_Union[BooleanSpec, _Mapping]] = ..., description: _Optional[str] = ..., metadataKey: _Optional[str] = ...) -> None: ...

class DatabaseReaderSpec(_message.Message):
    __slots__ = ("type", "connectionName", "query", "options")
    class OptionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    QUERY_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    type: str
    connectionName: str
    query: str
    options: _containers.ScalarMap[str, str]
    def __init__(self, type: _Optional[str] = ..., connectionName: _Optional[str] = ..., query: _Optional[str] = ..., options: _Optional[_Mapping[str, str]] = ...) -> None: ...

class DocumentSpec(_message.Message):
    __slots__ = ("name", "description", "metadata", "refreshPeriod", "indexes", "nodeParser", "embeddingModel", "file", "database", "web", "repository")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    REFRESHPERIOD_FIELD_NUMBER: _ClassVar[int]
    INDEXES_FIELD_NUMBER: _ClassVar[int]
    NODEPARSER_FIELD_NUMBER: _ClassVar[int]
    EMBEDDINGMODEL_FIELD_NUMBER: _ClassVar[int]
    FILE_FIELD_NUMBER: _ClassVar[int]
    DATABASE_FIELD_NUMBER: _ClassVar[int]
    WEB_FIELD_NUMBER: _ClassVar[int]
    REPOSITORY_FIELD_NUMBER: _ClassVar[int]
    name: str
    description: str
    metadata: _containers.ScalarMap[str, str]
    refreshPeriod: int
    indexes: _containers.RepeatedScalarFieldContainer[str]
    nodeParser: str
    embeddingModel: ModelSpec
    file: FileLocationReaderSpec
    database: DatabaseReaderSpec
    web: WebReaderSpec
    repository: RepositoryReaderSpec
    def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ..., refreshPeriod: _Optional[int] = ..., indexes: _Optional[_Iterable[str]] = ..., nodeParser: _Optional[str] = ..., embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ..., file: _Optional[_Union[FileLocationReaderSpec, _Mapping]] = ..., database: _Optional[_Union[DatabaseReaderSpec, _Mapping]] = ..., web: _Optional[_Union[WebReaderSpec, _Mapping]] = ..., repository: _Optional[_Union[RepositoryReaderSpec, _Mapping]] = ...) -> None: ...

class DocumentStatus(_message.Message):
    __slots__ = ("name", "nodes", "lastError", "flagged", "lastRefreshAt")
    NAME_FIELD_NUMBER: _ClassVar[int]
    NODES_FIELD_NUMBER: _ClassVar[int]
    LASTERROR_FIELD_NUMBER: _ClassVar[int]
    FLAGGED_FIELD_NUMBER: _ClassVar[int]
    LASTREFRESHAT_FIELD_NUMBER: _ClassVar[int]
    name: str
    nodes: int
    lastError: str
    flagged: bool
    lastRefreshAt: _generated_pb2_1_1.Time
    def __init__(self, name: _Optional[str] = ..., nodes: _Optional[int] = ..., lastError: _Optional[str] = ..., flagged: bool = ..., lastRefreshAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ...) -> None: ...

class DocumentSummaryIndexSpec(_message.Message):
    __slots__ = ("responseSynthesizer", "embedding")
    RESPONSESYNTHESIZER_FIELD_NUMBER: _ClassVar[int]
    EMBEDDING_FIELD_NUMBER: _ClassVar[int]
    responseSynthesizer: ResponseSynthesizerSpec
    embedding: VectorIndexSpec
    def __init__(self, responseSynthesizer: _Optional[_Union[ResponseSynthesizerSpec, _Mapping]] = ..., embedding: _Optional[_Union[VectorIndexSpec, _Mapping]] = ...) -> None: ...

class DocumentSummaryRetrieverSpec(_message.Message):
    __slots__ = ("index", "model", "topK", "mode")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    TOPK_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    index: IndexReference
    model: ModelSpec
    topK: int
    mode: str
    def __init__(self, index: _Optional[_Union[IndexReference, _Mapping]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., topK: _Optional[int] = ..., mode: _Optional[str] = ...) -> None: ...

class EmbeddingRecencyPostProcessorSpec(_message.Message):
    __slots__ = ("embeddingModel", "similarityCutoff")
    EMBEDDINGMODEL_FIELD_NUMBER: _ClassVar[int]
    SIMILARITYCUTOFF_FIELD_NUMBER: _ClassVar[int]
    embeddingModel: ModelSpec
    similarityCutoff: float
    def __init__(self, embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ..., similarityCutoff: _Optional[float] = ...) -> None: ...

class EmbeddingSpec(_message.Message):
    __slots__ = ("columns", "model")
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedScalarFieldContainer[str]
    model: ModelSpec
    def __init__(self, columns: _Optional[_Iterable[str]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ...) -> None: ...

class EndpointMetrics(_message.Message):
    __slots__ = ("p50", "p95", "p99", "totalRequests", "totalTokens", "totalCost")
    P50_FIELD_NUMBER: _ClassVar[int]
    P95_FIELD_NUMBER: _ClassVar[int]
    P99_FIELD_NUMBER: _ClassVar[int]
    TOTALREQUESTS_FIELD_NUMBER: _ClassVar[int]
    TOTALTOKENS_FIELD_NUMBER: _ClassVar[int]
    TOTALCOST_FIELD_NUMBER: _ClassVar[int]
    p50: float
    p95: float
    p99: float
    totalRequests: int
    totalTokens: int
    totalCost: float
    def __init__(self, p50: _Optional[float] = ..., p95: _Optional[float] = ..., p99: _Optional[float] = ..., totalRequests: _Optional[int] = ..., totalTokens: _Optional[int] = ..., totalCost: _Optional[float] = ...) -> None: ...

class EndpointSpec(_message.Message):
    __slots__ = ("name", "queryEngine", "path", "paths", "format", "model")
    NAME_FIELD_NUMBER: _ClassVar[int]
    QUERYENGINE_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    PATHS_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    name: str
    queryEngine: str
    path: str
    paths: _containers.RepeatedScalarFieldContainer[str]
    format: str
    model: ModelSpec
    def __init__(self, name: _Optional[str] = ..., queryEngine: _Optional[str] = ..., path: _Optional[str] = ..., paths: _Optional[_Iterable[str]] = ..., format: _Optional[str] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ...) -> None: ...

class EndpointStatus(_message.Message):
    __slots__ = ("name", "failureMessage", "metrics")
    NAME_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    name: str
    failureMessage: str
    metrics: EndpointMetrics
    def __init__(self, name: _Optional[str] = ..., failureMessage: _Optional[str] = ..., metrics: _Optional[_Union[EndpointMetrics, _Mapping]] = ...) -> None: ...

class ExtensionFilter(_message.Message):
    __slots__ = ("include", "exclude")
    INCLUDE_FIELD_NUMBER: _ClassVar[int]
    EXCLUDE_FIELD_NUMBER: _ClassVar[int]
    include: _containers.RepeatedScalarFieldContainer[str]
    exclude: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, include: _Optional[_Iterable[str]] = ..., exclude: _Optional[_Iterable[str]] = ...) -> None: ...

class FileLocationReaderSpec(_message.Message):
    __slots__ = ("fileReaderSpec", "location", "url")
    FILEREADERSPEC_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    fileReaderSpec: FileReaderSpec
    location: _generated_pb2.FileLocation
    url: str
    def __init__(self, fileReaderSpec: _Optional[_Union[FileReaderSpec, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., url: _Optional[str] = ...) -> None: ...

class FileReaderSpec(_message.Message):
    __slots__ = ("type", "options")
    class OptionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    type: str
    options: _containers.ScalarMap[str, str]
    def __init__(self, type: _Optional[str] = ..., options: _Optional[_Mapping[str, str]] = ...) -> None: ...

class FilteredNodeParser(_message.Message):
    __slots__ = ("extension", "length", "name", "metadata", "nodeParser")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    EXTENSION_FIELD_NUMBER: _ClassVar[int]
    LENGTH_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    NODEPARSER_FIELD_NUMBER: _ClassVar[int]
    extension: ExtensionFilter
    length: LengthFilter
    name: NameFilter
    metadata: _containers.ScalarMap[str, str]
    nodeParser: str
    def __init__(self, extension: _Optional[_Union[ExtensionFilter, _Mapping]] = ..., length: _Optional[_Union[LengthFilter, _Mapping]] = ..., name: _Optional[_Union[NameFilter, _Mapping]] = ..., metadata: _Optional[_Mapping[str, str]] = ..., nodeParser: _Optional[str] = ...) -> None: ...

class FixedRecencyPostProcessorSpec(_message.Message):
    __slots__ = ("topK",)
    TOPK_FIELD_NUMBER: _ClassVar[int]
    topK: int
    def __init__(self, topK: _Optional[int] = ...) -> None: ...

class FloatSpec(_message.Message):
    __slots__ = ("extractionMode", "roundingMode", "precision", "default")
    EXTRACTIONMODE_FIELD_NUMBER: _ClassVar[int]
    ROUNDINGMODE_FIELD_NUMBER: _ClassVar[int]
    PRECISION_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    extractionMode: str
    roundingMode: str
    precision: int
    default: int
    def __init__(self, extractionMode: _Optional[str] = ..., roundingMode: _Optional[str] = ..., precision: _Optional[int] = ..., default: _Optional[int] = ...) -> None: ...

class FusionRetrieverSpec(_message.Message):
    __slots__ = ("retrievers", "model", "queries", "topK", "mode", "defaultScore")
    RETRIEVERS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    QUERIES_FIELD_NUMBER: _ClassVar[int]
    TOPK_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    DEFAULTSCORE_FIELD_NUMBER: _ClassVar[int]
    retrievers: _containers.RepeatedScalarFieldContainer[str]
    model: ModelSpec
    queries: int
    topK: int
    mode: str
    defaultScore: float
    def __init__(self, retrievers: _Optional[_Iterable[str]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., queries: _Optional[int] = ..., topK: _Optional[int] = ..., mode: _Optional[str] = ..., defaultScore: _Optional[float] = ...) -> None: ...

class HierarchicalSplitterSpec(_message.Message):
    __slots__ = ("enabled", "chunkSizes")
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    CHUNKSIZES_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    chunkSizes: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, enabled: bool = ..., chunkSizes: _Optional[_Iterable[int]] = ...) -> None: ...

class IndexReference(_message.Message):
    __slots__ = ("knowledgeBaseName", "index")
    KNOWLEDGEBASENAME_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    knowledgeBaseName: str
    index: str
    def __init__(self, knowledgeBaseName: _Optional[str] = ..., index: _Optional[str] = ...) -> None: ...

class IndexSpec(_message.Message):
    __slots__ = ("name", "vector", "documentSummary", "tree", "keywordTable", "sql", "list")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VECTOR_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTSUMMARY_FIELD_NUMBER: _ClassVar[int]
    TREE_FIELD_NUMBER: _ClassVar[int]
    KEYWORDTABLE_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    LIST_FIELD_NUMBER: _ClassVar[int]
    name: str
    vector: VectorIndexSpec
    documentSummary: DocumentSummaryIndexSpec
    tree: TreeIndexSpec
    keywordTable: KeywordTableIndexSpec
    sql: SQLIndexSpec
    list: ListIndexSpec
    def __init__(self, name: _Optional[str] = ..., vector: _Optional[_Union[VectorIndexSpec, _Mapping]] = ..., documentSummary: _Optional[_Union[DocumentSummaryIndexSpec, _Mapping]] = ..., tree: _Optional[_Union[TreeIndexSpec, _Mapping]] = ..., keywordTable: _Optional[_Union[KeywordTableIndexSpec, _Mapping]] = ..., sql: _Optional[_Union[SQLIndexSpec, _Mapping]] = ..., list: _Optional[_Union[ListIndexSpec, _Mapping]] = ...) -> None: ...

class IndexStatus(_message.Message):
    __slots__ = ("name", "documents")
    NAME_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    name: str
    documents: int
    def __init__(self, name: _Optional[str] = ..., documents: _Optional[int] = ...) -> None: ...

class IntegerSpec(_message.Message):
    __slots__ = ("extractionMode", "roundingMode", "default")
    EXTRACTIONMODE_FIELD_NUMBER: _ClassVar[int]
    ROUNDINGMODE_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    extractionMode: str
    roundingMode: str
    default: int
    def __init__(self, extractionMode: _Optional[str] = ..., roundingMode: _Optional[str] = ..., default: _Optional[int] = ...) -> None: ...

class KeywordPostProcessorSpec(_message.Message):
    __slots__ = ("include", "exclude")
    INCLUDE_FIELD_NUMBER: _ClassVar[int]
    EXCLUDE_FIELD_NUMBER: _ClassVar[int]
    include: _containers.RepeatedScalarFieldContainer[str]
    exclude: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, include: _Optional[_Iterable[str]] = ..., exclude: _Optional[_Iterable[str]] = ...) -> None: ...

class KeywordTableIndexSpec(_message.Message):
    __slots__ = ("mode", "model", "maxKeywordsPerNode")
    MODE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    MAXKEYWORDSPERNODE_FIELD_NUMBER: _ClassVar[int]
    mode: str
    model: ModelSpec
    maxKeywordsPerNode: int
    def __init__(self, mode: _Optional[str] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., maxKeywordsPerNode: _Optional[int] = ...) -> None: ...

class KeywordTableRetrieverSpec(_message.Message):
    __slots__ = ("index", "model", "mode", "keywordsPerQuery", "chunksPerQuery")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    KEYWORDSPERQUERY_FIELD_NUMBER: _ClassVar[int]
    CHUNKSPERQUERY_FIELD_NUMBER: _ClassVar[int]
    index: IndexReference
    model: ModelSpec
    mode: str
    keywordsPerQuery: int
    chunksPerQuery: int
    def __init__(self, index: _Optional[_Union[IndexReference, _Mapping]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., mode: _Optional[str] = ..., keywordsPerQuery: _Optional[int] = ..., chunksPerQuery: _Optional[int] = ...) -> None: ...

class KnowledgeBase(_message.Message):
    __slots__ = ("metadata", "spec", "status")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: KnowledgeBaseSpec
    status: KnowledgeBaseStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[KnowledgeBaseSpec, _Mapping]] = ..., status: _Optional[_Union[KnowledgeBaseStatus, _Mapping]] = ...) -> None: ...

class KnowledgeBaseList(_message.Message):
    __slots__ = ("metadata", "items")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[KnowledgeBase]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[KnowledgeBase, _Mapping]]] = ...) -> None: ...

class KnowledgeBaseSpec(_message.Message):
    __slots__ = ("owner", "description", "refreshSchedule", "artifactBucketName", "labName", "resources", "metadataDatabaseConnectionName", "documentStoreConnectionName", "indexes", "documents", "nodeParsers", "defaultNodeParser")
    OWNER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    REFRESHSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    LABNAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    METADATADATABASECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTSTORECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    INDEXES_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    NODEPARSERS_FIELD_NUMBER: _ClassVar[int]
    DEFAULTNODEPARSER_FIELD_NUMBER: _ClassVar[int]
    owner: str
    description: str
    refreshSchedule: _generated_pb2.RunSchedule
    artifactBucketName: str
    labName: str
    resources: _generated_pb2.ResourceSpec
    metadataDatabaseConnectionName: str
    documentStoreConnectionName: str
    indexes: _containers.RepeatedCompositeFieldContainer[IndexSpec]
    documents: _containers.RepeatedCompositeFieldContainer[DocumentSpec]
    nodeParsers: _containers.RepeatedCompositeFieldContainer[NodeParserSpec]
    defaultNodeParser: str
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., refreshSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., artifactBucketName: _Optional[str] = ..., labName: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., metadataDatabaseConnectionName: _Optional[str] = ..., documentStoreConnectionName: _Optional[str] = ..., indexes: _Optional[_Iterable[_Union[IndexSpec, _Mapping]]] = ..., documents: _Optional[_Iterable[_Union[DocumentSpec, _Mapping]]] = ..., nodeParsers: _Optional[_Iterable[_Union[NodeParserSpec, _Mapping]]] = ..., defaultNodeParser: _Optional[str] = ...) -> None: ...

class KnowledgeBaseStatus(_message.Message):
    __slots__ = ("observedGeneration", "lastRefreshAt", "lastCompletionAt", "logs", "documents", "indexes", "updatedAt", "conditions")
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTREFRESHAT_FIELD_NUMBER: _ClassVar[int]
    LASTCOMPLETIONAT_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    INDEXES_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    lastRefreshAt: _generated_pb2_1_1.Time
    lastCompletionAt: _generated_pb2_1_1.Time
    logs: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ContainerLog]
    documents: _containers.RepeatedCompositeFieldContainer[DocumentStatus]
    indexes: _containers.RepeatedCompositeFieldContainer[IndexStatus]
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., lastRefreshAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., lastCompletionAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., logs: _Optional[_Iterable[_Union[_generated_pb2.ContainerLog, _Mapping]]] = ..., documents: _Optional[_Iterable[_Union[DocumentStatus, _Mapping]]] = ..., indexes: _Optional[_Iterable[_Union[IndexStatus, _Mapping]]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class KnowledgeGraphQueryEngine(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class LLMRerankSpec(_message.Message):
    __slots__ = ("topN", "model", "rankGPT")
    TOPN_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    RANKGPT_FIELD_NUMBER: _ClassVar[int]
    topN: int
    model: ModelSpec
    rankGPT: bool
    def __init__(self, topN: _Optional[int] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., rankGPT: bool = ...) -> None: ...

class LLMServer(_message.Message):
    __slots__ = ("metadata", "spec", "status")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: LLMServerSpec
    status: LLMStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[LLMServerSpec, _Mapping]] = ..., status: _Optional[_Union[LLMStatus, _Mapping]] = ...) -> None: ...

class LLMServerAccessSpec(_message.Message):
    __slots__ = ("port", "nodePort", "accessType")
    PORT_FIELD_NUMBER: _ClassVar[int]
    NODEPORT_FIELD_NUMBER: _ClassVar[int]
    ACCESSTYPE_FIELD_NUMBER: _ClassVar[int]
    port: int
    nodePort: int
    accessType: str
    def __init__(self, port: _Optional[int] = ..., nodePort: _Optional[int] = ..., accessType: _Optional[str] = ...) -> None: ...

class LLMServerAuthorizationSpec(_message.Message):
    __slots__ = ("insecure", "allowedKeyGroups", "allowedKeyNames")
    INSECURE_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDKEYGROUPS_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDKEYNAMES_FIELD_NUMBER: _ClassVar[int]
    insecure: bool
    allowedKeyGroups: _containers.RepeatedScalarFieldContainer[str]
    allowedKeyNames: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, insecure: bool = ..., allowedKeyGroups: _Optional[_Iterable[str]] = ..., allowedKeyNames: _Optional[_Iterable[str]] = ...) -> None: ...

class LLMServerList(_message.Message):
    __slots__ = ("metadata", "items")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[LLMServer]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[LLMServer, _Mapping]]] = ...) -> None: ...

class LLMServerSpec(_message.Message):
    __slots__ = ("owner", "description", "servingSiteName", "resources", "endpoints", "queryEngines", "retrievers", "access", "authorization", "notification")
    OWNER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITENAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    QUERYENGINES_FIELD_NUMBER: _ClassVar[int]
    RETRIEVERS_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    AUTHORIZATION_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    owner: str
    description: str
    servingSiteName: str
    resources: _generated_pb2.ResourceSpec
    endpoints: _containers.RepeatedCompositeFieldContainer[EndpointSpec]
    queryEngines: _containers.RepeatedCompositeFieldContainer[QueryEngineSpec]
    retrievers: _containers.RepeatedCompositeFieldContainer[RetrieverSpec]
    access: LLMServerAccessSpec
    authorization: LLMServerAuthorizationSpec
    notification: _generated_pb2.NotificationSpec
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., servingSiteName: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., endpoints: _Optional[_Iterable[_Union[EndpointSpec, _Mapping]]] = ..., queryEngines: _Optional[_Iterable[_Union[QueryEngineSpec, _Mapping]]] = ..., retrievers: _Optional[_Iterable[_Union[RetrieverSpec, _Mapping]]] = ..., access: _Optional[_Union[LLMServerAccessSpec, _Mapping]] = ..., authorization: _Optional[_Union[LLMServerAuthorizationSpec, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ...) -> None: ...

class LLMStatus(_message.Message):
    __slots__ = ("observedGeneration", "endpoints", "endpoint", "deployedAt", "deploymentRef", "serviceRef", "failureMessage", "updatedAt", "conditions")
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTREF_FIELD_NUMBER: _ClassVar[int]
    SERVICEREF_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    endpoints: _containers.RepeatedCompositeFieldContainer[EndpointStatus]
    endpoint: str
    deployedAt: _generated_pb2_1_1.Time
    deploymentRef: _generated_pb2_1.ObjectReference
    serviceRef: _generated_pb2_1.ObjectReference
    failureMessage: str
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., endpoints: _Optional[_Iterable[_Union[EndpointStatus, _Mapping]]] = ..., endpoint: _Optional[str] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., deploymentRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., serviceRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., failureMessage: _Optional[str] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class LengthFilter(_message.Message):
    __slots__ = ("greaterThan", "lessThan")
    GREATERTHAN_FIELD_NUMBER: _ClassVar[int]
    LESSTHAN_FIELD_NUMBER: _ClassVar[int]
    greaterThan: int
    lessThan: int
    def __init__(self, greaterThan: _Optional[int] = ..., lessThan: _Optional[int] = ...) -> None: ...

class ListIndexSpec(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ListRetrieverSpec(_message.Message):
    __slots__ = ("index", "model", "topK", "mode")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    TOPK_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    index: IndexReference
    model: ModelSpec
    topK: int
    mode: str
    def __init__(self, index: _Optional[_Union[IndexReference, _Mapping]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., topK: _Optional[int] = ..., mode: _Optional[str] = ...) -> None: ...

class LongContextReorderSpec(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MetadataKeyInfo(_message.Message):
    __slots__ = ("name", "type", "description")
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    description: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class MixedNodeParserSpec(_message.Message):
    __slots__ = ("parsers", "fallbackNodeParser")
    PARSERS_FIELD_NUMBER: _ClassVar[int]
    FALLBACKNODEPARSER_FIELD_NUMBER: _ClassVar[int]
    parsers: _containers.RepeatedCompositeFieldContainer[FilteredNodeParser]
    fallbackNodeParser: str
    def __init__(self, parsers: _Optional[_Iterable[_Union[FilteredNodeParser, _Mapping]]] = ..., fallbackNodeParser: _Optional[str] = ...) -> None: ...

class ModelSpec(_message.Message):
    __slots__ = ("connectionName", "model")
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    model: str
    def __init__(self, connectionName: _Optional[str] = ..., model: _Optional[str] = ...) -> None: ...

class NameFilter(_message.Message):
    __slots__ = ("contains", "equals")
    CONTAINS_FIELD_NUMBER: _ClassVar[int]
    EQUALS_FIELD_NUMBER: _ClassVar[int]
    contains: str
    equals: str
    def __init__(self, contains: _Optional[str] = ..., equals: _Optional[str] = ...) -> None: ...

class NodeParserSpec(_message.Message):
    __slots__ = ("name", "includeOrderRelationship", "includeMetadata", "type", "text", "sentence", "mixed")
    NAME_FIELD_NUMBER: _ClassVar[int]
    INCLUDEORDERRELATIONSHIP_FIELD_NUMBER: _ClassVar[int]
    INCLUDEMETADATA_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    SENTENCE_FIELD_NUMBER: _ClassVar[int]
    MIXED_FIELD_NUMBER: _ClassVar[int]
    name: str
    includeOrderRelationship: bool
    includeMetadata: bool
    type: str
    text: TextSplitterSpec
    sentence: SentenceWindowNodeParserSpec
    mixed: MixedNodeParserSpec
    def __init__(self, name: _Optional[str] = ..., includeOrderRelationship: bool = ..., includeMetadata: bool = ..., type: _Optional[str] = ..., text: _Optional[_Union[TextSplitterSpec, _Mapping]] = ..., sentence: _Optional[_Union[SentenceWindowNodeParserSpec, _Mapping]] = ..., mixed: _Optional[_Union[MixedNodeParserSpec, _Mapping]] = ...) -> None: ...

class NodePostProcessor(_message.Message):
    __slots__ = ("similarity", "keyword", "reorder", "embeddingOptimizer", "llmRerank", "cohereRerank", "fixedRecency", "embeddingRecency", "timeWeightedRecency")
    SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    KEYWORD_FIELD_NUMBER: _ClassVar[int]
    REORDER_FIELD_NUMBER: _ClassVar[int]
    EMBEDDINGOPTIMIZER_FIELD_NUMBER: _ClassVar[int]
    LLMRERANK_FIELD_NUMBER: _ClassVar[int]
    COHERERERANK_FIELD_NUMBER: _ClassVar[int]
    FIXEDRECENCY_FIELD_NUMBER: _ClassVar[int]
    EMBEDDINGRECENCY_FIELD_NUMBER: _ClassVar[int]
    TIMEWEIGHTEDRECENCY_FIELD_NUMBER: _ClassVar[int]
    similarity: SimilarityPostProcessorSpec
    keyword: KeywordPostProcessorSpec
    reorder: LongContextReorderSpec
    embeddingOptimizer: SentenceEmbeddingOptimizerSpec
    llmRerank: LLMRerankSpec
    cohereRerank: CohereRerankSpec
    fixedRecency: FixedRecencyPostProcessorSpec
    embeddingRecency: EmbeddingRecencyPostProcessorSpec
    timeWeightedRecency: TimeWeightedRecencyPostProcessorSpec
    def __init__(self, similarity: _Optional[_Union[SimilarityPostProcessorSpec, _Mapping]] = ..., keyword: _Optional[_Union[KeywordPostProcessorSpec, _Mapping]] = ..., reorder: _Optional[_Union[LongContextReorderSpec, _Mapping]] = ..., embeddingOptimizer: _Optional[_Union[SentenceEmbeddingOptimizerSpec, _Mapping]] = ..., llmRerank: _Optional[_Union[LLMRerankSpec, _Mapping]] = ..., cohereRerank: _Optional[_Union[CohereRerankSpec, _Mapping]] = ..., fixedRecency: _Optional[_Union[FixedRecencyPostProcessorSpec, _Mapping]] = ..., embeddingRecency: _Optional[_Union[EmbeddingRecencyPostProcessorSpec, _Mapping]] = ..., timeWeightedRecency: _Optional[_Union[TimeWeightedRecencyPostProcessorSpec, _Mapping]] = ...) -> None: ...

class QueryEngineSpec(_message.Message):
    __slots__ = ("name", "retriever", "router", "subQuestion")
    NAME_FIELD_NUMBER: _ClassVar[int]
    RETRIEVER_FIELD_NUMBER: _ClassVar[int]
    ROUTER_FIELD_NUMBER: _ClassVar[int]
    SUBQUESTION_FIELD_NUMBER: _ClassVar[int]
    name: str
    retriever: RetrieverQueryEngineSpec
    router: RouterQueryEngineSpec
    subQuestion: SubQuestionQueryEngineSpec
    def __init__(self, name: _Optional[str] = ..., retriever: _Optional[_Union[RetrieverQueryEngineSpec, _Mapping]] = ..., router: _Optional[_Union[RouterQueryEngineSpec, _Mapping]] = ..., subQuestion: _Optional[_Union[SubQuestionQueryEngineSpec, _Mapping]] = ...) -> None: ...

class QueryEngineToolSpec(_message.Message):
    __slots__ = ("queryEngine", "name", "description")
    QUERYENGINE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    queryEngine: str
    name: str
    description: str
    def __init__(self, queryEngine: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class Quota(_message.Message):
    __slots__ = ("tokens", "requests", "cost")
    TOKENS_FIELD_NUMBER: _ClassVar[int]
    REQUESTS_FIELD_NUMBER: _ClassVar[int]
    COST_FIELD_NUMBER: _ClassVar[int]
    tokens: int
    requests: int
    cost: float
    def __init__(self, tokens: _Optional[int] = ..., requests: _Optional[int] = ..., cost: _Optional[float] = ...) -> None: ...

class RepositoryFileReader(_message.Message):
    __slots__ = ("extension", "extensions", "reader")
    EXTENSION_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    READER_FIELD_NUMBER: _ClassVar[int]
    extension: str
    extensions: _containers.RepeatedScalarFieldContainer[str]
    reader: FileReaderSpec
    def __init__(self, extension: _Optional[str] = ..., extensions: _Optional[_Iterable[str]] = ..., reader: _Optional[_Union[FileReaderSpec, _Mapping]] = ...) -> None: ...

class RepositoryReaderSpec(_message.Message):
    __slots__ = ("type", "connectionName", "extensions", "readers", "options")
    class OptionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    READERS_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    type: str
    connectionName: str
    extensions: _containers.RepeatedScalarFieldContainer[str]
    readers: _containers.RepeatedCompositeFieldContainer[RepositoryFileReader]
    options: _containers.ScalarMap[str, str]
    def __init__(self, type: _Optional[str] = ..., connectionName: _Optional[str] = ..., extensions: _Optional[_Iterable[str]] = ..., readers: _Optional[_Iterable[_Union[RepositoryFileReader, _Mapping]]] = ..., options: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ResponseSynthesizerSpec(_message.Message):
    __slots__ = ("mode", "model", "answerFiltering")
    MODE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    ANSWERFILTERING_FIELD_NUMBER: _ClassVar[int]
    mode: str
    model: ModelSpec
    answerFiltering: bool
    def __init__(self, mode: _Optional[str] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., answerFiltering: bool = ...) -> None: ...

class RetrieverQueryEngineSpec(_message.Message):
    __slots__ = ("responseSynthesizer", "retriever", "nodePostProcessors")
    RESPONSESYNTHESIZER_FIELD_NUMBER: _ClassVar[int]
    RETRIEVER_FIELD_NUMBER: _ClassVar[int]
    NODEPOSTPROCESSORS_FIELD_NUMBER: _ClassVar[int]
    responseSynthesizer: ResponseSynthesizerSpec
    retriever: str
    nodePostProcessors: _containers.RepeatedCompositeFieldContainer[NodePostProcessor]
    def __init__(self, responseSynthesizer: _Optional[_Union[ResponseSynthesizerSpec, _Mapping]] = ..., retriever: _Optional[str] = ..., nodePostProcessors: _Optional[_Iterable[_Union[NodePostProcessor, _Mapping]]] = ...) -> None: ...

class RetrieverSpec(_message.Message):
    __slots__ = ("name", "vector", "documentSummary", "tree", "keywordTable", "list", "router", "fusion")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VECTOR_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTSUMMARY_FIELD_NUMBER: _ClassVar[int]
    TREE_FIELD_NUMBER: _ClassVar[int]
    KEYWORDTABLE_FIELD_NUMBER: _ClassVar[int]
    LIST_FIELD_NUMBER: _ClassVar[int]
    ROUTER_FIELD_NUMBER: _ClassVar[int]
    FUSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    vector: VectorRetrieverSpec
    documentSummary: DocumentSummaryRetrieverSpec
    tree: TreeRetrieverSpec
    keywordTable: KeywordTableRetrieverSpec
    list: ListRetrieverSpec
    router: RouterRetrieverSpec
    fusion: FusionRetrieverSpec
    def __init__(self, name: _Optional[str] = ..., vector: _Optional[_Union[VectorRetrieverSpec, _Mapping]] = ..., documentSummary: _Optional[_Union[DocumentSummaryRetrieverSpec, _Mapping]] = ..., tree: _Optional[_Union[TreeRetrieverSpec, _Mapping]] = ..., keywordTable: _Optional[_Union[KeywordTableRetrieverSpec, _Mapping]] = ..., list: _Optional[_Union[ListRetrieverSpec, _Mapping]] = ..., router: _Optional[_Union[RouterRetrieverSpec, _Mapping]] = ..., fusion: _Optional[_Union[FusionRetrieverSpec, _Mapping]] = ...) -> None: ...

class RetrieverToolSpec(_message.Message):
    __slots__ = ("retriever", "name", "description")
    RETRIEVER_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    retriever: str
    name: str
    description: str
    def __init__(self, retriever: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class RouterQueryEngineSpec(_message.Message):
    __slots__ = ("tools", "selector")
    TOOLS_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    tools: _containers.RepeatedCompositeFieldContainer[QueryEngineToolSpec]
    selector: SelectorSpec
    def __init__(self, tools: _Optional[_Iterable[_Union[QueryEngineToolSpec, _Mapping]]] = ..., selector: _Optional[_Union[SelectorSpec, _Mapping]] = ...) -> None: ...

class RouterRetrieverSpec(_message.Message):
    __slots__ = ("tools", "selector")
    TOOLS_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    tools: _containers.RepeatedCompositeFieldContainer[RetrieverToolSpec]
    selector: SelectorSpec
    def __init__(self, tools: _Optional[_Iterable[_Union[RetrieverToolSpec, _Mapping]]] = ..., selector: _Optional[_Union[SelectorSpec, _Mapping]] = ...) -> None: ...

class SQLIndexSpec(_message.Message):
    __slots__ = ("model", "databaseConnectionName", "tableName", "refDocColumn", "schema", "granularity")
    MODEL_FIELD_NUMBER: _ClassVar[int]
    DATABASECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    TABLENAME_FIELD_NUMBER: _ClassVar[int]
    REFDOCCOLUMN_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    GRANULARITY_FIELD_NUMBER: _ClassVar[int]
    model: ModelSpec
    databaseConnectionName: str
    tableName: str
    refDocColumn: str
    schema: Schema
    granularity: str
    def __init__(self, model: _Optional[_Union[ModelSpec, _Mapping]] = ..., databaseConnectionName: _Optional[str] = ..., tableName: _Optional[str] = ..., refDocColumn: _Optional[str] = ..., schema: _Optional[_Union[Schema, _Mapping]] = ..., granularity: _Optional[str] = ...) -> None: ...

class Schema(_message.Message):
    __slots__ = ("description", "columns")
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    description: str
    columns: _containers.RepeatedCompositeFieldContainer[Column]
    def __init__(self, description: _Optional[str] = ..., columns: _Optional[_Iterable[_Union[Column, _Mapping]]] = ...) -> None: ...

class SelectorSpec(_message.Message):
    __slots__ = ("mode", "model", "multi")
    MODE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    MULTI_FIELD_NUMBER: _ClassVar[int]
    mode: str
    model: ModelSpec
    multi: bool
    def __init__(self, mode: _Optional[str] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., multi: bool = ...) -> None: ...

class SentenceEmbeddingOptimizerSpec(_message.Message):
    __slots__ = ("embeddingModel", "similarityCutoff", "thresholdCutoff")
    EMBEDDINGMODEL_FIELD_NUMBER: _ClassVar[int]
    SIMILARITYCUTOFF_FIELD_NUMBER: _ClassVar[int]
    THRESHOLDCUTOFF_FIELD_NUMBER: _ClassVar[int]
    embeddingModel: ModelSpec
    similarityCutoff: float
    thresholdCutoff: float
    def __init__(self, embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ..., similarityCutoff: _Optional[float] = ..., thresholdCutoff: _Optional[float] = ...) -> None: ...

class SentenceSplitterSpec(_message.Message):
    __slots__ = ("chunkSize", "chunkOverlap", "wordSeparator", "paragraphSeparator", "splitter", "hierarchical")
    CHUNKSIZE_FIELD_NUMBER: _ClassVar[int]
    CHUNKOVERLAP_FIELD_NUMBER: _ClassVar[int]
    WORDSEPARATOR_FIELD_NUMBER: _ClassVar[int]
    PARAGRAPHSEPARATOR_FIELD_NUMBER: _ClassVar[int]
    SPLITTER_FIELD_NUMBER: _ClassVar[int]
    HIERARCHICAL_FIELD_NUMBER: _ClassVar[int]
    chunkSize: int
    chunkOverlap: int
    wordSeparator: str
    paragraphSeparator: str
    splitter: SentenceTokenizerSpec
    hierarchical: HierarchicalSplitterSpec
    def __init__(self, chunkSize: _Optional[int] = ..., chunkOverlap: _Optional[int] = ..., wordSeparator: _Optional[str] = ..., paragraphSeparator: _Optional[str] = ..., splitter: _Optional[_Union[SentenceTokenizerSpec, _Mapping]] = ..., hierarchical: _Optional[_Union[HierarchicalSplitterSpec, _Mapping]] = ...) -> None: ...

class SentenceTokenizerSpec(_message.Message):
    __slots__ = ("type", "separator")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    SEPARATOR_FIELD_NUMBER: _ClassVar[int]
    type: str
    separator: str
    def __init__(self, type: _Optional[str] = ..., separator: _Optional[str] = ...) -> None: ...

class SentenceWindowNodeParserSpec(_message.Message):
    __slots__ = ("splitter", "windowSize")
    SPLITTER_FIELD_NUMBER: _ClassVar[int]
    WINDOWSIZE_FIELD_NUMBER: _ClassVar[int]
    splitter: SentenceTokenizerSpec
    windowSize: int
    def __init__(self, splitter: _Optional[_Union[SentenceTokenizerSpec, _Mapping]] = ..., windowSize: _Optional[int] = ...) -> None: ...

class SimilarityPostProcessorSpec(_message.Message):
    __slots__ = ("cutoff",)
    CUTOFF_FIELD_NUMBER: _ClassVar[int]
    cutoff: float
    def __init__(self, cutoff: _Optional[float] = ...) -> None: ...

class SubQuestionQueryEngineSpec(_message.Message):
    __slots__ = ("tools", "responseSynthesizer", "model")
    TOOLS_FIELD_NUMBER: _ClassVar[int]
    RESPONSESYNTHESIZER_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    tools: _containers.RepeatedCompositeFieldContainer[QueryEngineToolSpec]
    responseSynthesizer: ResponseSynthesizerSpec
    model: ModelSpec
    def __init__(self, tools: _Optional[_Iterable[_Union[QueryEngineToolSpec, _Mapping]]] = ..., responseSynthesizer: _Optional[_Union[ResponseSynthesizerSpec, _Mapping]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ...) -> None: ...

class TextSpec(_message.Message):
    __slots__ = ("extractionMode", "summarizationPrompt", "concatenationString", "default")
    EXTRACTIONMODE_FIELD_NUMBER: _ClassVar[int]
    SUMMARIZATIONPROMPT_FIELD_NUMBER: _ClassVar[int]
    CONCATENATIONSTRING_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    extractionMode: str
    summarizationPrompt: str
    concatenationString: str
    default: str
    def __init__(self, extractionMode: _Optional[str] = ..., summarizationPrompt: _Optional[str] = ..., concatenationString: _Optional[str] = ..., default: _Optional[str] = ...) -> None: ...

class TextSplitterSpec(_message.Message):
    __slots__ = ("type", "sentence", "token", "code")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    SENTENCE_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    type: str
    sentence: SentenceSplitterSpec
    token: TokenSplitterSpec
    code: CodeSplitterSpec
    def __init__(self, type: _Optional[str] = ..., sentence: _Optional[_Union[SentenceSplitterSpec, _Mapping]] = ..., token: _Optional[_Union[TokenSplitterSpec, _Mapping]] = ..., code: _Optional[_Union[CodeSplitterSpec, _Mapping]] = ...) -> None: ...

class TimeWeightedRecencyPostProcessorSpec(_message.Message):
    __slots__ = ("topN", "timeDecay", "lastAccess")
    TOPN_FIELD_NUMBER: _ClassVar[int]
    TIMEDECAY_FIELD_NUMBER: _ClassVar[int]
    LASTACCESS_FIELD_NUMBER: _ClassVar[int]
    topN: int
    timeDecay: float
    lastAccess: bool
    def __init__(self, topN: _Optional[int] = ..., timeDecay: _Optional[float] = ..., lastAccess: bool = ...) -> None: ...

class TokenSplitterSpec(_message.Message):
    __slots__ = ("chunkSize", "chunkOverlap", "wordSeparator", "hierarchical")
    CHUNKSIZE_FIELD_NUMBER: _ClassVar[int]
    CHUNKOVERLAP_FIELD_NUMBER: _ClassVar[int]
    WORDSEPARATOR_FIELD_NUMBER: _ClassVar[int]
    HIERARCHICAL_FIELD_NUMBER: _ClassVar[int]
    chunkSize: int
    chunkOverlap: int
    wordSeparator: str
    hierarchical: HierarchicalSplitterSpec
    def __init__(self, chunkSize: _Optional[int] = ..., chunkOverlap: _Optional[int] = ..., wordSeparator: _Optional[str] = ..., hierarchical: _Optional[_Union[HierarchicalSplitterSpec, _Mapping]] = ...) -> None: ...

class TreeIndexSpec(_message.Message):
    __slots__ = ("model", "children")
    MODEL_FIELD_NUMBER: _ClassVar[int]
    CHILDREN_FIELD_NUMBER: _ClassVar[int]
    model: ModelSpec
    children: int
    def __init__(self, model: _Optional[_Union[ModelSpec, _Mapping]] = ..., children: _Optional[int] = ...) -> None: ...

class TreeRetrieverSpec(_message.Message):
    __slots__ = ("index", "model", "mode", "childBranchFactor")
    INDEX_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    CHILDBRANCHFACTOR_FIELD_NUMBER: _ClassVar[int]
    index: IndexReference
    model: ModelSpec
    mode: str
    childBranchFactor: int
    def __init__(self, index: _Optional[_Union[IndexReference, _Mapping]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., mode: _Optional[str] = ..., childBranchFactor: _Optional[int] = ...) -> None: ...

class VectorIndexSpec(_message.Message):
    __slots__ = ("databaseConnectionName", "embeddingModel")
    DATABASECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    EMBEDDINGMODEL_FIELD_NUMBER: _ClassVar[int]
    databaseConnectionName: str
    embeddingModel: ModelSpec
    def __init__(self, databaseConnectionName: _Optional[str] = ..., embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ...) -> None: ...

class VectorRetrieverSpec(_message.Message):
    __slots__ = ("index", "embeddingModel", "topK", "matchMetadata", "autoMerging", "auto")
    class MatchMetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    INDEX_FIELD_NUMBER: _ClassVar[int]
    EMBEDDINGMODEL_FIELD_NUMBER: _ClassVar[int]
    TOPK_FIELD_NUMBER: _ClassVar[int]
    MATCHMETADATA_FIELD_NUMBER: _ClassVar[int]
    AUTOMERGING_FIELD_NUMBER: _ClassVar[int]
    AUTO_FIELD_NUMBER: _ClassVar[int]
    index: IndexReference
    embeddingModel: ModelSpec
    topK: int
    matchMetadata: _containers.ScalarMap[str, str]
    autoMerging: bool
    auto: AutoVectorRetrieverSpec
    def __init__(self, index: _Optional[_Union[IndexReference, _Mapping]] = ..., embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ..., topK: _Optional[int] = ..., matchMetadata: _Optional[_Mapping[str, str]] = ..., autoMerging: bool = ..., auto: _Optional[_Union[AutoVectorRetrieverSpec, _Mapping]] = ...) -> None: ...

class WebReaderSpec(_message.Message):
    __slots__ = ("type", "connectionName", "options")
    class OptionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    type: str
    connectionName: str
    options: _containers.ScalarMap[str, str]
    def __init__(self, type: _Optional[str] = ..., connectionName: _Optional[str] = ..., options: _Optional[_Mapping[str, str]] = ...) -> None: ...
