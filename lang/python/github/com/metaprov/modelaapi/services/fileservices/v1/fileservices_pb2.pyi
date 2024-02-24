from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Location(_message.Message):
    __slots__ = ("tenant", "dataProduct", "resourceKind", "resourceName", "fileName", "bucket")
    TENANT_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    RESOURCEKIND_FIELD_NUMBER: _ClassVar[int]
    RESOURCENAME_FIELD_NUMBER: _ClassVar[int]
    FILENAME_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    dataProduct: str
    resourceKind: str
    resourceName: str
    fileName: str
    bucket: str
    def __init__(self, tenant: _Optional[str] = ..., dataProduct: _Optional[str] = ..., resourceKind: _Optional[str] = ..., resourceName: _Optional[str] = ..., fileName: _Optional[str] = ..., bucket: _Optional[str] = ...) -> None: ...

class InitiateUploadRequest(_message.Message):
    __slots__ = ("size", "location")
    SIZE_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    size: int
    location: Location
    def __init__(self, size: _Optional[int] = ..., location: _Optional[_Union[Location, _Mapping]] = ...) -> None: ...

class InitiateUploadResponse(_message.Message):
    __slots__ = ("token", "chunkSize")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    CHUNKSIZE_FIELD_NUMBER: _ClassVar[int]
    token: str
    chunkSize: int
    def __init__(self, token: _Optional[str] = ..., chunkSize: _Optional[int] = ...) -> None: ...

class UploadRequest(_message.Message):
    __slots__ = ("token", "data")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    token: str
    data: bytes
    def __init__(self, token: _Optional[str] = ..., data: _Optional[bytes] = ...) -> None: ...

class UploadResponse(_message.Message):
    __slots__ = ("complete",)
    COMPLETE_FIELD_NUMBER: _ClassVar[int]
    complete: bool
    def __init__(self, complete: bool = ...) -> None: ...
