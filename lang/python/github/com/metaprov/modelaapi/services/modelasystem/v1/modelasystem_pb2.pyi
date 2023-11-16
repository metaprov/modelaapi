from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class DownloadLogFileRequest(_message.Message):
    __slots__ = ["tenant", "namespace", "bucket", "path"]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    namespace: str
    bucket: str
    path: str
    def __init__(self, tenant: _Optional[str] = ..., namespace: _Optional[str] = ..., bucket: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...

class DownloadLogFileResponse(_message.Message):
    __slots__ = ["result"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    result: bytes
    def __init__(self, result: _Optional[bytes] = ...) -> None: ...

class BackupDatabaseRequest(_message.Message):
    __slots__ = ["namespace", "bucket", "path"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    bucket: str
    path: str
    def __init__(self, namespace: _Optional[str] = ..., bucket: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...

class BackupDatabaseResponse(_message.Message):
    __slots__ = ["path"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...

class BackupEtcdRequest(_message.Message):
    __slots__ = ["namespace", "bucket", "path"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    bucket: str
    path: str
    def __init__(self, namespace: _Optional[str] = ..., bucket: _Optional[str] = ..., path: _Optional[str] = ...) -> None: ...

class BackupEtcdResponse(_message.Message):
    __slots__ = ["path"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...
