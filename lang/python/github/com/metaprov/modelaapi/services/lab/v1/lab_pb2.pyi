from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateLabRequest(_message.Message):
    __slots__ = ["lab"]
    LAB_FIELD_NUMBER: _ClassVar[int]
    lab: _generated_pb2.Lab
    def __init__(self, lab: _Optional[_Union[_generated_pb2.Lab, _Mapping]] = ...) -> None: ...

class CreateLabResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteLabRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteLabResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetLabNamespacesRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLabNamespacesResponse(_message.Message):
    __slots__ = ["namespaces"]
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    namespaces: _containers.RepeatedCompositeFieldContainer[_common_pb2.NamespaceInfo]
    def __init__(self, namespaces: _Optional[_Iterable[_Union[_common_pb2.NamespaceInfo, _Mapping]]] = ...) -> None: ...

class GetLabRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLabResponse(_message.Message):
    __slots__ = ["lab", "yaml"]
    LAB_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    lab: _generated_pb2.Lab
    yaml: str
    def __init__(self, lab: _Optional[_Union[_generated_pb2.Lab, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class LabResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListLabsRequest(_message.Message):
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

class ListLabsResponse(_message.Message):
    __slots__ = ["labs", "next_page_token"]
    LABS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    labs: _generated_pb2.LabList
    next_page_token: str
    def __init__(self, labs: _Optional[_Union[_generated_pb2.LabList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateLabRequest(_message.Message):
    __slots__ = ["field_mask", "lab"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    LAB_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    lab: _generated_pb2.Lab
    def __init__(self, lab: _Optional[_Union[_generated_pb2.Lab, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateLabResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
