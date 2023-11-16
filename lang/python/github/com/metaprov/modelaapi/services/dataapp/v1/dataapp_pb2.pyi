from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListDataAppsRequest(_message.Message):
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

class ListDataAppsResponse(_message.Message):
    __slots__ = ["dataapps", "next_page_token"]
    DATAAPPS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    dataapps: _generated_pb2.DataAppList
    next_page_token: str
    def __init__(self, dataapps: _Optional[_Union[_generated_pb2.DataAppList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateDataAppResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateDataAppRequest(_message.Message):
    __slots__ = ["dataapp"]
    DATAAPP_FIELD_NUMBER: _ClassVar[int]
    dataapp: _generated_pb2.DataApp
    def __init__(self, dataapp: _Optional[_Union[_generated_pb2.DataApp, _Mapping]] = ...) -> None: ...

class UpdateDataAppRequest(_message.Message):
    __slots__ = ["dataapp", "field_mask"]
    DATAAPP_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    dataapp: _generated_pb2.DataApp
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, dataapp: _Optional[_Union[_generated_pb2.DataApp, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDataAppResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetDataAppRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataAppResponse(_message.Message):
    __slots__ = ["dataapp", "yaml"]
    DATAAPP_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    dataapp: _generated_pb2.DataApp
    yaml: str
    def __init__(self, dataapp: _Optional[_Union[_generated_pb2.DataApp, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteDataAppRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataAppResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PauseDataAppRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class PauseDataAppResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ResumeDataAppRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ResumeDataAppResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class RunDataAppRequest(_message.Message):
    __slots__ = ["dataapp"]
    DATAAPP_FIELD_NUMBER: _ClassVar[int]
    dataapp: _generated_pb2.DataApp
    def __init__(self, dataapp: _Optional[_Union[_generated_pb2.DataApp, _Mapping]] = ...) -> None: ...

class RunDataAppResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
