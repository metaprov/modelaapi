from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateServingSiteRequest(_message.Message):
    __slots__ = ["servingsite"]
    SERVINGSITE_FIELD_NUMBER: _ClassVar[int]
    servingsite: _generated_pb2.ServingSite
    def __init__(self, servingsite: _Optional[_Union[_generated_pb2.ServingSite, _Mapping]] = ...) -> None: ...

class CreateServingSiteResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteServingSiteRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteServingSiteResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetPublicKeyRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPublicKeyResponse(_message.Message):
    __slots__ = ["publickey"]
    PUBLICKEY_FIELD_NUMBER: _ClassVar[int]
    publickey: bytes
    def __init__(self, publickey: _Optional[bytes] = ...) -> None: ...

class GetServingSiteRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetServingSiteResponse(_message.Message):
    __slots__ = ["servingsite", "yaml"]
    SERVINGSITE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    servingsite: _generated_pb2.ServingSite
    yaml: str
    def __init__(self, servingsite: _Optional[_Union[_generated_pb2.ServingSite, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListServingSitesRequest(_message.Message):
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

class ListServingSitesResponse(_message.Message):
    __slots__ = ["next_page_token", "servingsites"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITES_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    servingsites: _generated_pb2.ServingSiteList
    def __init__(self, servingsites: _Optional[_Union[_generated_pb2.ServingSiteList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateServingSiteRequest(_message.Message):
    __slots__ = ["field_mask", "servingsite"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITE_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    servingsite: _generated_pb2.ServingSite
    def __init__(self, servingsite: _Optional[_Union[_generated_pb2.ServingSite, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateServingSiteResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
