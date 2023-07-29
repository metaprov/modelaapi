from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateDataSourceRequest(_message.Message):
    __slots__ = ["datasource"]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    datasource: _generated_pb2.DataSource
    def __init__(self, datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ...) -> None: ...

class CreateDataSourceResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteDataSourceRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataSourceResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetDataSourceRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataSourceResponse(_message.Message):
    __slots__ = ["datasource", "yaml"]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    datasource: _generated_pb2.DataSource
    yaml: str
    def __init__(self, datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class GetTableViewRequest(_message.Message):
    __slots__ = ["format", "location", "tenant"]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    format: _generated_pb2.FlatFileFormatSpec
    location: _generated_pb2_1_1.DataLocation
    tenant: str
    def __init__(self, tenant: _Optional[str] = ..., format: _Optional[_Union[_generated_pb2.FlatFileFormatSpec, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class GetTableViewResponse(_message.Message):
    __slots__ = ["table"]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    table: _common_pb2.TableView
    def __init__(self, table: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class InferSchemaRequest(_message.Message):
    __slots__ = ["datasource", "location", "tenant"]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    datasource: _generated_pb2.DataSource
    location: _generated_pb2_1_1.DataLocation
    tenant: str
    def __init__(self, tenant: _Optional[str] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class InferSchemaResponse(_message.Message):
    __slots__ = ["columns"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[_common_pb2.ColumnProfile]
    def __init__(self, columns: _Optional[_Iterable[_Union[_common_pb2.ColumnProfile, _Mapping]]] = ...) -> None: ...

class ListDataSourceRequest(_message.Message):
    __slots__ = ["labels", "namespace", "order_by", "page_size", "page_token"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    namespace: str
    order_by: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListDataSourceResponse(_message.Message):
    __slots__ = ["datasources", "next_page_token"]
    DATASOURCES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    datasources: _generated_pb2.DataSourceList
    next_page_token: str
    def __init__(self, datasources: _Optional[_Union[_generated_pb2.DataSourceList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateDataSourceRequest(_message.Message):
    __slots__ = ["datasource", "field_mask"]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    datasource: _generated_pb2.DataSource
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDataSourceResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
