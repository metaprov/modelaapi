from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

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

class ConcreteNodeParserSpec(_message.Message):
    __slots__ = ("includeOrderRelationship", "includeMetadata", "type", "text", "sentence")
    INCLUDEORDERRELATIONSHIP_FIELD_NUMBER: _ClassVar[int]
    INCLUDEMETADATA_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    SENTENCE_FIELD_NUMBER: _ClassVar[int]
    includeOrderRelationship: bool
    includeMetadata: bool
    type: str
    text: TextSplitterSpec
    sentence: SentenceWindowNodeParserSpec
    def __init__(self, includeOrderRelationship: bool = ..., includeMetadata: bool = ..., type: _Optional[str] = ..., text: _Optional[_Union[TextSplitterSpec, _Mapping]] = ..., sentence: _Optional[_Union[SentenceWindowNodeParserSpec, _Mapping]] = ...) -> None: ...

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
    __slots__ = ("name", "description", "metadata", "refreshPeriod", "nodeParser", "embeddingModel", "file", "database", "web", "repository")
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
    nodeParser: NodeParserSpec
    embeddingModel: ModelSpec
    file: FileLocationReaderSpec
    database: DatabaseReaderSpec
    web: WebReaderSpec
    repository: RepositoryReaderSpec
    def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ..., refreshPeriod: _Optional[int] = ..., nodeParser: _Optional[_Union[NodeParserSpec, _Mapping]] = ..., embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ..., file: _Optional[_Union[FileLocationReaderSpec, _Mapping]] = ..., database: _Optional[_Union[DatabaseReaderSpec, _Mapping]] = ..., web: _Optional[_Union[WebReaderSpec, _Mapping]] = ..., repository: _Optional[_Union[RepositoryReaderSpec, _Mapping]] = ...) -> None: ...

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
    lastRefreshAt: _generated_pb2_1.Time
    def __init__(self, name: _Optional[str] = ..., nodes: _Optional[int] = ..., lastError: _Optional[str] = ..., flagged: bool = ..., lastRefreshAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ...) -> None: ...

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
    __slots__ = ("extension", "length", "name", "metadata", "parser")
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
    PARSER_FIELD_NUMBER: _ClassVar[int]
    extension: ExtensionFilter
    length: LengthFilter
    name: NameFilter
    metadata: _containers.ScalarMap[str, str]
    parser: ConcreteNodeParserSpec
    def __init__(self, extension: _Optional[_Union[ExtensionFilter, _Mapping]] = ..., length: _Optional[_Union[LengthFilter, _Mapping]] = ..., name: _Optional[_Union[NameFilter, _Mapping]] = ..., metadata: _Optional[_Mapping[str, str]] = ..., parser: _Optional[_Union[ConcreteNodeParserSpec, _Mapping]] = ...) -> None: ...

class KnowledgeBase(_message.Message):
    __slots__ = ("metadata", "spec", "status")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: KnowledgeBaseSpec
    status: KnowledgeBaseStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[KnowledgeBaseSpec, _Mapping]] = ..., status: _Optional[_Union[KnowledgeBaseStatus, _Mapping]] = ...) -> None: ...

class KnowledgeBaseList(_message.Message):
    __slots__ = ("metadata", "items")
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[KnowledgeBase]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[KnowledgeBase, _Mapping]]] = ...) -> None: ...

class KnowledgeBaseSpec(_message.Message):
    __slots__ = ("owner", "description", "refreshSchedule", "artifactBucketName", "labName", "resources", "metadataDatabaseConnectionName", "vectorStoreConnectionName", "documentStoreConnectionName", "embeddingModel", "documents", "nodeParser")
    OWNER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    REFRESHSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    LABNAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    METADATADATABASECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    VECTORSTORECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTSTORECONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    EMBEDDINGMODEL_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    NODEPARSER_FIELD_NUMBER: _ClassVar[int]
    owner: str
    description: str
    refreshSchedule: _generated_pb2.RunSchedule
    artifactBucketName: str
    labName: str
    resources: _generated_pb2.ResourceSpec
    metadataDatabaseConnectionName: str
    vectorStoreConnectionName: str
    documentStoreConnectionName: str
    embeddingModel: ModelSpec
    documents: _containers.RepeatedCompositeFieldContainer[DocumentSpec]
    nodeParser: NodeParserSpec
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., refreshSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., artifactBucketName: _Optional[str] = ..., labName: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., metadataDatabaseConnectionName: _Optional[str] = ..., vectorStoreConnectionName: _Optional[str] = ..., documentStoreConnectionName: _Optional[str] = ..., embeddingModel: _Optional[_Union[ModelSpec, _Mapping]] = ..., documents: _Optional[_Iterable[_Union[DocumentSpec, _Mapping]]] = ..., nodeParser: _Optional[_Union[NodeParserSpec, _Mapping]] = ...) -> None: ...

class KnowledgeBaseStatus(_message.Message):
    __slots__ = ("observedGeneration", "lastRefreshAt", "lastCompletionAt", "logs", "documents", "updatedAt", "conditions")
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTREFRESHAT_FIELD_NUMBER: _ClassVar[int]
    LASTCOMPLETIONAT_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    DOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    lastRefreshAt: _generated_pb2_1.Time
    lastCompletionAt: _generated_pb2_1.Time
    logs: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ContainerLog]
    documents: _containers.RepeatedCompositeFieldContainer[DocumentStatus]
    updatedAt: _generated_pb2_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., lastRefreshAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., lastCompletionAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., logs: _Optional[_Iterable[_Union[_generated_pb2.ContainerLog, _Mapping]]] = ..., documents: _Optional[_Iterable[_Union[DocumentStatus, _Mapping]]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1.Condition, _Mapping]]] = ...) -> None: ...

class LengthFilter(_message.Message):
    __slots__ = ("greaterThan", "lessThan")
    GREATERTHAN_FIELD_NUMBER: _ClassVar[int]
    LESSTHAN_FIELD_NUMBER: _ClassVar[int]
    greaterThan: int
    lessThan: int
    def __init__(self, greaterThan: _Optional[int] = ..., lessThan: _Optional[int] = ...) -> None: ...

class MixedNodeParserSpec(_message.Message):
    __slots__ = ("parsers", "fallback")
    PARSERS_FIELD_NUMBER: _ClassVar[int]
    FALLBACK_FIELD_NUMBER: _ClassVar[int]
    parsers: _containers.RepeatedCompositeFieldContainer[FilteredNodeParser]
    fallback: ConcreteNodeParserSpec
    def __init__(self, parsers: _Optional[_Iterable[_Union[FilteredNodeParser, _Mapping]]] = ..., fallback: _Optional[_Union[ConcreteNodeParserSpec, _Mapping]] = ...) -> None: ...

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
    __slots__ = ("concreteNodeParserSpec", "mixed")
    CONCRETENODEPARSERSPEC_FIELD_NUMBER: _ClassVar[int]
    MIXED_FIELD_NUMBER: _ClassVar[int]
    concreteNodeParserSpec: ConcreteNodeParserSpec
    mixed: MixedNodeParserSpec
    def __init__(self, concreteNodeParserSpec: _Optional[_Union[ConcreteNodeParserSpec, _Mapping]] = ..., mixed: _Optional[_Union[MixedNodeParserSpec, _Mapping]] = ...) -> None: ...

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

class SentenceSplitterSpec(_message.Message):
    __slots__ = ("chunkSize", "chunkOverlap", "wordSeparator", "paragraphSeparator", "splitter")
    CHUNKSIZE_FIELD_NUMBER: _ClassVar[int]
    CHUNKOVERLAP_FIELD_NUMBER: _ClassVar[int]
    WORDSEPARATOR_FIELD_NUMBER: _ClassVar[int]
    PARAGRAPHSEPARATOR_FIELD_NUMBER: _ClassVar[int]
    SPLITTER_FIELD_NUMBER: _ClassVar[int]
    chunkSize: int
    chunkOverlap: int
    wordSeparator: str
    paragraphSeparator: str
    splitter: SentenceTokenizerSpec
    def __init__(self, chunkSize: _Optional[int] = ..., chunkOverlap: _Optional[int] = ..., wordSeparator: _Optional[str] = ..., paragraphSeparator: _Optional[str] = ..., splitter: _Optional[_Union[SentenceTokenizerSpec, _Mapping]] = ...) -> None: ...

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

class TokenSplitterSpec(_message.Message):
    __slots__ = ("chunkSize", "chunkOverlap", "wordSeparator")
    CHUNKSIZE_FIELD_NUMBER: _ClassVar[int]
    CHUNKOVERLAP_FIELD_NUMBER: _ClassVar[int]
    WORDSEPARATOR_FIELD_NUMBER: _ClassVar[int]
    chunkSize: int
    chunkOverlap: int
    wordSeparator: str
    def __init__(self, chunkSize: _Optional[int] = ..., chunkOverlap: _Optional[int] = ..., wordSeparator: _Optional[str] = ...) -> None: ...

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
