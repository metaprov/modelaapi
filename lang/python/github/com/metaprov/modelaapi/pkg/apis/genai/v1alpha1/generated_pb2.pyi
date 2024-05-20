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

class FusionRetrieverSpec(_message.Message):
    __slots__ = ("retrievers", "model", "queries", "topK", "mode")
    RETRIEVERS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    QUERIES_FIELD_NUMBER: _ClassVar[int]
    TOPK_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    retrievers: _containers.RepeatedScalarFieldContainer[str]
    model: ModelSpec
    queries: int
    topK: int
    mode: str
    def __init__(self, retrievers: _Optional[_Iterable[str]] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., queries: _Optional[int] = ..., topK: _Optional[int] = ..., mode: _Optional[str] = ...) -> None: ...

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
    __slots__ = ("name", "vector", "documentSummary", "treeIndex")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VECTOR_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTSUMMARY_FIELD_NUMBER: _ClassVar[int]
    TREEINDEX_FIELD_NUMBER: _ClassVar[int]
    name: str
    vector: VectorIndexSpec
    documentSummary: DocumentSummaryIndexSpec
    treeIndex: TreeIndexSpec
    def __init__(self, name: _Optional[str] = ..., vector: _Optional[_Union[VectorIndexSpec, _Mapping]] = ..., documentSummary: _Optional[_Union[DocumentSummaryIndexSpec, _Mapping]] = ..., treeIndex: _Optional[_Union[TreeIndexSpec, _Mapping]] = ...) -> None: ...

class IndexStatus(_message.Message):
    __slots__ = ("name", "documents")
    NAME_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    name: str
    documents: int
    def __init__(self, name: _Optional[str] = ..., documents: _Optional[int] = ...) -> None: ...

class KeywordPostProcessorSpec(_message.Message):
    __slots__ = ("include", "exclude")
    INCLUDE_FIELD_NUMBER: _ClassVar[int]
    EXCLUDE_FIELD_NUMBER: _ClassVar[int]
    include: _containers.RepeatedScalarFieldContainer[str]
    exclude: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, include: _Optional[_Iterable[str]] = ..., exclude: _Optional[_Iterable[str]] = ...) -> None: ...

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

class LLM(_message.Message):
    __slots__ = ("metadata", "spec", "status")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ObjectMeta
    spec: LLMSpec
    status: LLMStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[LLMSpec, _Mapping]] = ..., status: _Optional[_Union[LLMStatus, _Mapping]] = ...) -> None: ...

class LLMAccessSpec(_message.Message):
    __slots__ = ("port", "nodePort", "accessType")
    PORT_FIELD_NUMBER: _ClassVar[int]
    NODEPORT_FIELD_NUMBER: _ClassVar[int]
    ACCESSTYPE_FIELD_NUMBER: _ClassVar[int]
    port: int
    nodePort: int
    accessType: str
    def __init__(self, port: _Optional[int] = ..., nodePort: _Optional[int] = ..., accessType: _Optional[str] = ...) -> None: ...

class LLMList(_message.Message):
    __slots__ = ("metadata", "items")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[LLM]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[LLM, _Mapping]]] = ...) -> None: ...

class LLMRerankSpec(_message.Message):
    __slots__ = ("topN", "model", "rankGPT")
    TOPN_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    RANKGPT_FIELD_NUMBER: _ClassVar[int]
    topN: int
    model: ModelSpec
    rankGPT: bool
    def __init__(self, topN: _Optional[int] = ..., model: _Optional[_Union[ModelSpec, _Mapping]] = ..., rankGPT: bool = ...) -> None: ...

class LLMSpec(_message.Message):
    __slots__ = ("owner", "description", "servingSiteName", "resources", "models", "queryEngines", "retrievers", "notification")
    OWNER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITENAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    QUERYENGINES_FIELD_NUMBER: _ClassVar[int]
    RETRIEVERS_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    owner: str
    description: str
    servingSiteName: str
    resources: _generated_pb2.ResourceSpec
    models: _containers.RepeatedCompositeFieldContainer[ModelServingSpec]
    queryEngines: _containers.RepeatedCompositeFieldContainer[QueryEngineSpec]
    retrievers: _containers.RepeatedCompositeFieldContainer[RetrieverSpec]
    notification: _generated_pb2.NotificationSpec
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., servingSiteName: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., models: _Optional[_Iterable[_Union[ModelServingSpec, _Mapping]]] = ..., queryEngines: _Optional[_Iterable[_Union[QueryEngineSpec, _Mapping]]] = ..., retrievers: _Optional[_Iterable[_Union[RetrieverSpec, _Mapping]]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ...) -> None: ...

class LLMStatus(_message.Message):
    __slots__ = ("observedGeneration", "documents", "endpoint", "deployedAt", "deploymentRef", "serviceRef", "failureMessage", "updatedAt", "conditions")
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYEDAT_FIELD_NUMBER: _ClassVar[int]
    DEPLOYMENTREF_FIELD_NUMBER: _ClassVar[int]
    SERVICEREF_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    documents: _containers.RepeatedCompositeFieldContainer[ModelStatus]
    endpoint: str
    deployedAt: _generated_pb2_1_1.Time
    deploymentRef: _generated_pb2_1.ObjectReference
    serviceRef: _generated_pb2_1.ObjectReference
    failureMessage: str
    updatedAt: _generated_pb2_1_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., documents: _Optional[_Iterable[_Union[ModelStatus, _Mapping]]] = ..., endpoint: _Optional[str] = ..., deployedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., deploymentRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., serviceRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., failureMessage: _Optional[str] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1.Condition, _Mapping]]] = ...) -> None: ...

class LengthFilter(_message.Message):
    __slots__ = ("greaterThan", "lessThan")
    GREATERTHAN_FIELD_NUMBER: _ClassVar[int]
    LESSTHAN_FIELD_NUMBER: _ClassVar[int]
    greaterThan: int
    lessThan: int
    def __init__(self, greaterThan: _Optional[int] = ..., lessThan: _Optional[int] = ...) -> None: ...

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

class ModelMetrics(_message.Message):
    __slots__ = ("p50", "p95", "p99", "totalPredictions")
    P50_FIELD_NUMBER: _ClassVar[int]
    P95_FIELD_NUMBER: _ClassVar[int]
    P99_FIELD_NUMBER: _ClassVar[int]
    TOTALPREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    p50: float
    p95: float
    p99: float
    totalPredictions: int
    def __init__(self, p50: _Optional[float] = ..., p95: _Optional[float] = ..., p99: _Optional[float] = ..., totalPredictions: _Optional[int] = ...) -> None: ...

class ModelServingSpec(_message.Message):
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

class ModelSpec(_message.Message):
    __slots__ = ("connectionName", "model")
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    model: str
    def __init__(self, connectionName: _Optional[str] = ..., model: _Optional[str] = ...) -> None: ...

class ModelStatus(_message.Message):
    __slots__ = ("name", "failureMessage", "modelMetrics")
    NAME_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    MODELMETRICS_FIELD_NUMBER: _ClassVar[int]
    name: str
    failureMessage: str
    modelMetrics: ModelMetrics
    def __init__(self, name: _Optional[str] = ..., failureMessage: _Optional[str] = ..., modelMetrics: _Optional[_Union[ModelMetrics, _Mapping]] = ...) -> None: ...

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
    __slots__ = ("name", "vector", "documentSummary", "router", "fusion")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VECTOR_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTSUMMARY_FIELD_NUMBER: _ClassVar[int]
    ROUTER_FIELD_NUMBER: _ClassVar[int]
    FUSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    vector: VectorRetrieverSpec
    documentSummary: DocumentSummaryRetrieverSpec
    router: RouterRetrieverSpec
    fusion: FusionRetrieverSpec
    def __init__(self, name: _Optional[str] = ..., vector: _Optional[_Union[VectorRetrieverSpec, _Mapping]] = ..., documentSummary: _Optional[_Union[DocumentSummaryRetrieverSpec, _Mapping]] = ..., router: _Optional[_Union[RouterRetrieverSpec, _Mapping]] = ..., fusion: _Optional[_Union[FusionRetrieverSpec, _Mapping]] = ...) -> None: ...

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
