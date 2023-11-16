from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PublishModelRequest(_message.Message):
    __slots__ = ["dataproduct", "model", "study", "datasource", "dataset", "provider", "imagename", "imagenameWithVersion", "push", "bucket", "cloudConn", "cloudSecret", "dockerConnection", "dockerRegistrySecret", "kaniko"]
    class CloudSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DockerRegistrySecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    PROVIDER_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    IMAGENAMEWITHVERSION_FIELD_NUMBER: _ClassVar[int]
    PUSH_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CLOUDCONN_FIELD_NUMBER: _ClassVar[int]
    CLOUDSECRET_FIELD_NUMBER: _ClassVar[int]
    DOCKERCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DOCKERREGISTRYSECRET_FIELD_NUMBER: _ClassVar[int]
    KANIKO_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2_1.DataProduct
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    provider: str
    imagename: str
    imagenameWithVersion: str
    push: bool
    bucket: _generated_pb2_1_1.VirtualBucket
    cloudConn: _generated_pb2_1_1.Connection
    cloudSecret: _containers.ScalarMap[str, bytes]
    dockerConnection: _generated_pb2_1_1.Connection
    dockerRegistrySecret: _containers.ScalarMap[str, bytes]
    kaniko: bool
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., provider: _Optional[str] = ..., imagename: _Optional[str] = ..., imagenameWithVersion: _Optional[str] = ..., push: bool = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., cloudConn: _Optional[_Union[_generated_pb2_1_1.Connection, _Mapping]] = ..., cloudSecret: _Optional[_Mapping[str, bytes]] = ..., dockerConnection: _Optional[_Union[_generated_pb2_1_1.Connection, _Mapping]] = ..., dockerRegistrySecret: _Optional[_Mapping[str, bytes]] = ..., kaniko: bool = ...) -> None: ...

class PublishModelResponse(_message.Message):
    __slots__ = ["ImageName", "hash"]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    HASH_FIELD_NUMBER: _ClassVar[int]
    ImageName: str
    hash: str
    def __init__(self, ImageName: _Optional[str] = ..., hash: _Optional[str] = ...) -> None: ...

class PackageModelRequest(_message.Message):
    __slots__ = ["dataproduct", "model", "study", "datasource", "dataset", "bucket", "cloudConn", "cloudSecret"]
    class CloudSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CLOUDCONN_FIELD_NUMBER: _ClassVar[int]
    CLOUDSECRET_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2_1.DataProduct
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    bucket: _generated_pb2_1_1.VirtualBucket
    cloudConn: _generated_pb2_1_1.Connection
    cloudSecret: _containers.ScalarMap[str, bytes]
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., cloudConn: _Optional[_Union[_generated_pb2_1_1.Connection, _Mapping]] = ..., cloudSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class PackageModelResponse(_message.Message):
    __slots__ = ["tarUri", "hash"]
    TARURI_FIELD_NUMBER: _ClassVar[int]
    HASH_FIELD_NUMBER: _ClassVar[int]
    tarUri: str
    hash: str
    def __init__(self, tarUri: _Optional[str] = ..., hash: _Optional[str] = ...) -> None: ...

class ShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
