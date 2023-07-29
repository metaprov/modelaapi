from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class DataBlock(_message.Message):
    __slots__ = ["bucket", "data", "dataProductName", "dataProductVersion", "md5_hash", "name", "resourceName", "resourceType", "tenant"]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTNAME_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTVERSION_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    MD5_HASH_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCENAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCETYPE_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    bucket: str
    data: bytes
    dataProductName: str
    dataProductVersion: str
    md5_hash: str
    name: str
    resourceName: str
    resourceType: str
    tenant: str
    def __init__(self, name: _Optional[str] = ..., data: _Optional[bytes] = ..., md5_hash: _Optional[str] = ..., tenant: _Optional[str] = ..., dataProductName: _Optional[str] = ..., dataProductVersion: _Optional[str] = ..., bucket: _Optional[str] = ..., resourceType: _Optional[str] = ..., resourceName: _Optional[str] = ...) -> None: ...

class UploadResult(_message.Message):
    __slots__ = ["duration", "key", "size"]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    duration: int
    key: str
    size: int
    def __init__(self, key: _Optional[str] = ..., size: _Optional[int] = ..., duration: _Optional[int] = ...) -> None: ...
