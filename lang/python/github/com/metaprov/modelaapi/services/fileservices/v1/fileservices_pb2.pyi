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
    __slots__ = ["name", "data", "md5_hash", "tenant", "dataProductName", "dataProductVersion", "bucket", "resourceType", "resourceName"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    MD5_HASH_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTNAME_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTVERSION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    RESOURCETYPE_FIELD_NUMBER: _ClassVar[int]
    RESOURCENAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    data: bytes
    md5_hash: str
    tenant: str
    dataProductName: str
    dataProductVersion: str
    bucket: str
    resourceType: str
    resourceName: str
    def __init__(self, name: _Optional[str] = ..., data: _Optional[bytes] = ..., md5_hash: _Optional[str] = ..., tenant: _Optional[str] = ..., dataProductName: _Optional[str] = ..., dataProductVersion: _Optional[str] = ..., bucket: _Optional[str] = ..., resourceType: _Optional[str] = ..., resourceName: _Optional[str] = ...) -> None: ...

class UploadResult(_message.Message):
    __slots__ = ["key", "size", "duration"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    key: str
    size: int
    duration: int
    def __init__(self, key: _Optional[str] = ..., size: _Optional[int] = ..., duration: _Optional[int] = ...) -> None: ...
