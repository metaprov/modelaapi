from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class BucketExistRequest(_message.Message):
    __slots__ = ["bucket"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2.VirtualBucket
    def __init__(self, bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ...) -> None: ...

class BucketExistResponse(_message.Message):
    __slots__ = ["exist"]
    EXIST_FIELD_NUMBER: _ClassVar[int]
    exist: bool
    def __init__(self, exist: bool = ...) -> None: ...

class ExistsInBucketRequest(_message.Message):
    __slots__ = ["bucket", "key"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2.VirtualBucket
    key: str
    def __init__(self, bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., key: _Optional[str] = ...) -> None: ...

class ExistsInBucketResponse(_message.Message):
    __slots__ = ["exist"]
    EXIST_FIELD_NUMBER: _ClassVar[int]
    exist: bool
    def __init__(self, exist: bool = ...) -> None: ...

class DeleteRequest(_message.Message):
    __slots__ = ["bucket", "key"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2.VirtualBucket
    key: str
    def __init__(self, bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., key: _Optional[str] = ...) -> None: ...

class DeleteResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class FileDownloadRequest(_message.Message):
    __slots__ = ["key", "path", "bucket", "tenant"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    key: str
    path: str
    bucket: _generated_pb2.VirtualBucket
    tenant: str
    def __init__(self, key: _Optional[str] = ..., path: _Optional[str] = ..., bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., tenant: _Optional[str] = ...) -> None: ...

class FileDownloadResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListObjectsRequest(_message.Message):
    __slots__ = ["prefix", "bucket", "tenant"]
    PREFIX_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    prefix: str
    bucket: _generated_pb2.VirtualBucket
    tenant: str
    def __init__(self, prefix: _Optional[str] = ..., bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., tenant: _Optional[str] = ...) -> None: ...

class ListObjectsResponse(_message.Message):
    __slots__ = ["keys"]
    KEYS_FIELD_NUMBER: _ClassVar[int]
    keys: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, keys: _Optional[_Iterable[str]] = ...) -> None: ...

class FileUploadRequest(_message.Message):
    __slots__ = ["key", "path", "bucket"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    key: str
    path: str
    bucket: _generated_pb2.VirtualBucket
    def __init__(self, key: _Optional[str] = ..., path: _Optional[str] = ..., bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ...) -> None: ...

class FileUploadResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateBucketRequest(_message.Message):
    __slots__ = ["bucket"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2.VirtualBucket
    def __init__(self, bucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ...) -> None: ...

class CreateBucketResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
