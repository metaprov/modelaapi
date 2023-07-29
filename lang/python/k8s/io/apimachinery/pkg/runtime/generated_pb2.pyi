from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RawExtension(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class TypeMeta(_message.Message):
    __slots__ = ["apiVersion", "kind"]
    APIVERSION_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    apiVersion: str
    kind: str
    def __init__(self, apiVersion: _Optional[str] = ..., kind: _Optional[str] = ...) -> None: ...

class Unknown(_message.Message):
    __slots__ = ["contentEncoding", "contentType", "raw", "typeMeta"]
    CONTENTENCODING_FIELD_NUMBER: _ClassVar[int]
    CONTENTTYPE_FIELD_NUMBER: _ClassVar[int]
    RAW_FIELD_NUMBER: _ClassVar[int]
    TYPEMETA_FIELD_NUMBER: _ClassVar[int]
    contentEncoding: str
    contentType: str
    raw: bytes
    typeMeta: TypeMeta
    def __init__(self, typeMeta: _Optional[_Union[TypeMeta, _Mapping]] = ..., raw: _Optional[bytes] = ..., contentEncoding: _Optional[str] = ..., contentType: _Optional[str] = ...) -> None: ...
