from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class IngestResponse(_message.Message):
    __slots__ = ("liveKey",)
    LIVEKEY_FIELD_NUMBER: _ClassVar[int]
    liveKey: str
    def __init__(self, liveKey: _Optional[str] = ...) -> None: ...

class ObjectResponse(_message.Message):
    __slots__ = ("archivePath",)
    ARCHIVEPATH_FIELD_NUMBER: _ClassVar[int]
    archivePath: str
    def __init__(self, archivePath: _Optional[str] = ...) -> None: ...

class ObjectRequest(_message.Message):
    __slots__ = ("bucket", "connection", "secret", "key")
    class SecretEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2.VirtualBucket
    connection: _generated_pb2.Connection
    secret: _containers.ScalarMap[str, bytes]
    key: str
    def __init__(self, bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., key: _Optional[str] = ...) -> None: ...

class ExistInVirtualBucketResponse(_message.Message):
    __slots__ = ("exist",)
    EXIST_FIELD_NUMBER: _ClassVar[int]
    exist: bool
    def __init__(self, exist: bool = ...) -> None: ...
