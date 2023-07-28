from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListNotifiersRequest(_message.Message):
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

class ListNotifiersResponse(_message.Message):
    __slots__ = ["notifiers", "next_page_token"]
    NOTIFIERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    notifiers: _generated_pb2.NotifierList
    next_page_token: str
    def __init__(self, notifiers: _Optional[_Union[_generated_pb2.NotifierList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class NotifierResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateNotifierRequest(_message.Message):
    __slots__ = ["notifier"]
    NOTIFIER_FIELD_NUMBER: _ClassVar[int]
    notifier: _generated_pb2.Notifier
    def __init__(self, notifier: _Optional[_Union[_generated_pb2.Notifier, _Mapping]] = ...) -> None: ...

class CreateNotifierResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateNotifierRequest(_message.Message):
    __slots__ = ["notifier", "field_mask"]
    NOTIFIER_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    notifier: _generated_pb2.Notifier
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, notifier: _Optional[_Union[_generated_pb2.Notifier, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateNotifierResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetNotifierRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetNotifierResponse(_message.Message):
    __slots__ = ["notifier", "yaml"]
    NOTIFIER_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    notifier: _generated_pb2.Notifier
    yaml: str
    def __init__(self, notifier: _Optional[_Union[_generated_pb2.Notifier, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteNotifierRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteNotifierResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
