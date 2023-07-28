from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListDatasetsRequest(_message.Message):
    __slots__ = ["namespace", "labels", "page_size", "page_token", "order_by"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    labels: _containers.ScalarMap[str, str]
    page_size: int
    page_token: str
    order_by: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListDatasetsResponse(_message.Message):
    __slots__ = ["datasets", "next_page_token"]
    DATASETS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    datasets: _generated_pb2.DatasetList
    next_page_token: str
    def __init__(self, datasets: _Optional[_Union[_generated_pb2.DatasetList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetDatasetRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetDatasetResponse(_message.Message):
    __slots__ = ["dataset", "yaml"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    dataset: _generated_pb2.Dataset
    yaml: str
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class CreateDatasetRequest(_message.Message):
    __slots__ = ["dataset"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    dataset: _generated_pb2.Dataset
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class CreateDatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateDatasetRequest(_message.Message):
    __slots__ = ["dataset", "field_mask"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    dataset: _generated_pb2.Dataset
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteDatasetRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UploadChunkRequest(_message.Message):
    __slots__ = ["fname", "content", "index", "last"]
    FNAME_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    LAST_FIELD_NUMBER: _ClassVar[int]
    fname: str
    content: bytes
    index: int
    last: bool
    def __init__(self, fname: _Optional[str] = ..., content: _Optional[bytes] = ..., index: _Optional[int] = ..., last: bool = ...) -> None: ...

class UploadChunkResponse(_message.Message):
    __slots__ = ["fname", "ok"]
    FNAME_FIELD_NUMBER: _ClassVar[int]
    OK_FIELD_NUMBER: _ClassVar[int]
    fname: str
    ok: bool
    def __init__(self, fname: _Optional[str] = ..., ok: bool = ...) -> None: ...

class CreateDatasetProfileRequest(_message.Message):
    __slots__ = ["namespace", "name", "dataset"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    dataset: _generated_pb2.Dataset
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class CreateDatasetProfileResponse(_message.Message):
    __slots__ = ["uri", "profile"]
    URI_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    uri: str
    profile: _common_pb2.DatasetProfile
    def __init__(self, uri: _Optional[str] = ..., profile: _Optional[_Union[_common_pb2.DatasetProfile, _Mapping]] = ...) -> None: ...

class CreateColumnProfileRequest(_message.Message):
    __slots__ = ["namespace", "name", "col", "dataset"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    COL_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    col: str
    dataset: _generated_pb2.Dataset
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., col: _Optional[str] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class CreateColumnProfileResponse(_message.Message):
    __slots__ = ["name", "plot"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PLOT_FIELD_NUMBER: _ClassVar[int]
    name: str
    plot: _common_pb2.Plot
    def __init__(self, name: _Optional[str] = ..., plot: _Optional[_Union[_common_pb2.Plot, _Mapping]] = ...) -> None: ...

class GetDatasetProfileRequest(_message.Message):
    __slots__ = ["namespace", "name", "uri", "group"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    uri: str
    group: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., uri: _Optional[str] = ..., group: _Optional[str] = ...) -> None: ...

class GetDatasetProfileResponse(_message.Message):
    __slots__ = ["namespace", "name", "profile"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    profile: _common_pb2.DatasetProfile
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., profile: _Optional[_Union[_common_pb2.DatasetProfile, _Mapping]] = ...) -> None: ...

class CompareDatasetsRequest(_message.Message):
    __slots__ = ["namespace", "names"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    names: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ...) -> None: ...

class CompareDatasetsResponse(_message.Message):
    __slots__ = ["namespace", "names", "profiles"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    names: _containers.RepeatedScalarFieldContainer[str]
    profiles: _containers.RepeatedCompositeFieldContainer[_common_pb2.DatasetProfile]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ..., profiles: _Optional[_Iterable[_Union[_common_pb2.DatasetProfile, _Mapping]]] = ...) -> None: ...

class GenerateDatasetRequest(_message.Message):
    __slots__ = ["namespace", "names"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    names: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ...) -> None: ...

class GenerateDatasetResponse(_message.Message):
    __slots__ = ["namespace", "names", "profiles"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    names: _containers.RepeatedScalarFieldContainer[str]
    profiles: _containers.RepeatedCompositeFieldContainer[_common_pb2.DatasetProfile]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ..., profiles: _Optional[_Iterable[_Union[_common_pb2.DatasetProfile, _Mapping]]] = ...) -> None: ...

class ValidateDatasetRequest(_message.Message):
    __slots__ = ["namespace", "names"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    names: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ...) -> None: ...

class ValidateDatasetResponse(_message.Message):
    __slots__ = ["namespace", "names", "profiles"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    names: _containers.RepeatedScalarFieldContainer[str]
    profiles: _containers.RepeatedCompositeFieldContainer[_common_pb2.DatasetProfile]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ..., profiles: _Optional[_Iterable[_Union[_common_pb2.DatasetProfile, _Mapping]]] = ...) -> None: ...

class DownloadDatasetRequest(_message.Message):
    __slots__ = ["namespace", "name", "group"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    group: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., group: _Optional[str] = ...) -> None: ...

class DownloadDatasetResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class GetDatabasesRequest(_message.Message):
    __slots__ = ["connectionNamespace", "connectionName"]
    CONNECTIONNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    connectionNamespace: str
    connectionName: str
    def __init__(self, connectionNamespace: _Optional[str] = ..., connectionName: _Optional[str] = ...) -> None: ...

class GetDatabasesResponse(_message.Message):
    __slots__ = ["databases"]
    DATABASES_FIELD_NUMBER: _ClassVar[int]
    databases: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, databases: _Optional[_Iterable[str]] = ...) -> None: ...

class GetTablesRequest(_message.Message):
    __slots__ = ["connectionNamespace", "connectionName"]
    CONNECTIONNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    connectionNamespace: str
    connectionName: str
    def __init__(self, connectionNamespace: _Optional[str] = ..., connectionName: _Optional[str] = ...) -> None: ...

class GetTablesResponse(_message.Message):
    __slots__ = ["tables"]
    TABLES_FIELD_NUMBER: _ClassVar[int]
    tables: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, tables: _Optional[_Iterable[str]] = ...) -> None: ...

class ExecuteSqlRequest(_message.Message):
    __slots__ = ["connectionNamespace", "connectionName", "sql"]
    CONNECTIONNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    connectionNamespace: str
    connectionName: str
    sql: str
    def __init__(self, connectionNamespace: _Optional[str] = ..., connectionName: _Optional[str] = ..., sql: _Optional[str] = ...) -> None: ...

class ExecuteSqlResponse(_message.Message):
    __slots__ = ["tableview"]
    TABLEVIEW_FIELD_NUMBER: _ClassVar[int]
    tableview: _common_pb2.TableView
    def __init__(self, tableview: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class SnapshotRequest(_message.Message):
    __slots__ = ["connectionNamespace", "connectionName", "databaseName", "sql"]
    CONNECTIONNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DATABASENAME_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    connectionNamespace: str
    connectionName: str
    databaseName: str
    sql: str
    def __init__(self, connectionNamespace: _Optional[str] = ..., connectionName: _Optional[str] = ..., databaseName: _Optional[str] = ..., sql: _Optional[str] = ...) -> None: ...

class SnapshotResponse(_message.Message):
    __slots__ = ["bucket", "path"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    bucket: str
    path: str
    def __init__(self, bucket: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...

class GetAnomaliesRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAnomaliesResponse(_message.Message):
    __slots__ = ["table"]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    table: _common_pb2.TableView
    def __init__(self, table: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...
