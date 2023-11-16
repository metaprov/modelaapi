from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListConnectionsRequest(_message.Message):
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

class ListConnectionsResponse(_message.Message):
    __slots__ = ["connections", "next_page_token"]
    CONNECTIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    connections: _generated_pb2.ConnectionList
    next_page_token: str
    def __init__(self, connections: _Optional[_Union[_generated_pb2.ConnectionList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateConnectionRequest(_message.Message):
    __slots__ = ["connection", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2.Connection
    secret: _containers.ScalarMap[str, str]
    def __init__(self, connection: _Optional[_Union[_generated_pb2.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, str]] = ...) -> None: ...

class CreateConnectionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateConnectionRequest(_message.Message):
    __slots__ = ["connection", "field_mask"]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2.Connection
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, connection: _Optional[_Union[_generated_pb2.Connection, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateConnectionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetConnectionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetConnectionResponse(_message.Message):
    __slots__ = ["connection", "secret", "isAdmin", "yaml"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    ISADMIN_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2.Connection
    secret: _containers.ScalarMap[str, str]
    isAdmin: bool
    yaml: str
    def __init__(self, connection: _Optional[_Union[_generated_pb2.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, str]] = ..., isAdmin: bool = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteConnectionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteConnectionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class TestConnectionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class TestConnectionResponse(_message.Message):
    __slots__ = ["status", "msg"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MSG_FIELD_NUMBER: _ClassVar[int]
    status: bool
    msg: str
    def __init__(self, status: bool = ..., msg: _Optional[str] = ...) -> None: ...

class GetDatabasesRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDatabasesResponse(_message.Message):
    __slots__ = ["databases"]
    DATABASES_FIELD_NUMBER: _ClassVar[int]
    databases: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, databases: _Optional[_Iterable[str]] = ...) -> None: ...

class GetTablesRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetTablesResponse(_message.Message):
    __slots__ = ["tables"]
    TABLES_FIELD_NUMBER: _ClassVar[int]
    tables: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, tables: _Optional[_Iterable[str]] = ...) -> None: ...

class ExecuteSqlRequest(_message.Message):
    __slots__ = ["namespace", "name", "sql"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    sql: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., sql: _Optional[str] = ...) -> None: ...

class ExecuteSqlResponse(_message.Message):
    __slots__ = ["tableview"]
    TABLEVIEW_FIELD_NUMBER: _ClassVar[int]
    tableview: _common_pb2.TableView
    def __init__(self, tableview: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...
