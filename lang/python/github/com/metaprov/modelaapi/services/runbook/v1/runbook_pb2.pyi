from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateRunBookRequest(_message.Message):
    __slots__ = ["runbook"]
    RUNBOOK_FIELD_NUMBER: _ClassVar[int]
    runbook: _generated_pb2.RunBook
    def __init__(self, runbook: _Optional[_Union[_generated_pb2.RunBook, _Mapping]] = ...) -> None: ...

class CreateRunBookResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteRunBookRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteRunBookResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetRunBookRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetRunBookResponse(_message.Message):
    __slots__ = ["runbook", "yaml"]
    RUNBOOK_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    runbook: _generated_pb2.RunBook
    yaml: str
    def __init__(self, runbook: _Optional[_Union[_generated_pb2.RunBook, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListRunBooksRequest(_message.Message):
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

class ListRunBooksResponse(_message.Message):
    __slots__ = ["next_page_token", "runbooks"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    RUNBOOKS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    runbooks: _generated_pb2.RunBookList
    def __init__(self, runbooks: _Optional[_Union[_generated_pb2.RunBookList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateRunBookRequest(_message.Message):
    __slots__ = ["field_mask", "runbook"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    RUNBOOK_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    runbook: _generated_pb2.RunBook
    def __init__(self, runbook: _Optional[_Union[_generated_pb2.RunBook, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateRunBookResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
