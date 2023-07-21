from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PackageModelRequest(_message.Message):
    __slots__ = ["bucket", "cloudConn", "cloudSecret", "dataproduct", "dataproductversion", "dataset", "datasource", "model", "study"]
    class CloudSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CLOUDCONN_FIELD_NUMBER: _ClassVar[int]
    CLOUDSECRET_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTVERSION_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2_1_1.VirtualBucket
    cloudConn: _generated_pb2_1_1.Connection
    cloudSecret: _containers.ScalarMap[str, bytes]
    dataproduct: _generated_pb2_1.DataProduct
    dataproductversion: _generated_pb2_1.DataProductVersion
    dataset: _generated_pb2_1.Dataset
    datasource: _generated_pb2_1.DataSource
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., dataproductversion: _Optional[_Union[_generated_pb2_1.DataProductVersion, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., cloudConn: _Optional[_Union[_generated_pb2_1_1.Connection, _Mapping]] = ..., cloudSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class PackageModelResponse(_message.Message):
    __slots__ = ["hash", "tarUri"]
    HASH_FIELD_NUMBER: _ClassVar[int]
    TARURI_FIELD_NUMBER: _ClassVar[int]
    hash: str
    tarUri: str
    def __init__(self, tarUri: _Optional[str] = ..., hash: _Optional[str] = ...) -> None: ...

class PublishModelRequest(_message.Message):
    __slots__ = ["bucket", "cloudConn", "cloudSecret", "dataproduct", "dataproductversion", "dataset", "datasource", "dockerConnection", "dockerRegistrySecret", "imagename", "imagenameWithVersion", "kaniko", "model", "provider", "push", "study"]
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
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CLOUDCONN_FIELD_NUMBER: _ClassVar[int]
    CLOUDSECRET_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCTVERSION_FIELD_NUMBER: _ClassVar[int]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DOCKERCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DOCKERREGISTRYSECRET_FIELD_NUMBER: _ClassVar[int]
    IMAGENAMEWITHVERSION_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    KANIKO_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    PROVIDER_FIELD_NUMBER: _ClassVar[int]
    PUSH_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2_1_1.VirtualBucket
    cloudConn: _generated_pb2_1_1.Connection
    cloudSecret: _containers.ScalarMap[str, bytes]
    dataproduct: _generated_pb2_1.DataProduct
    dataproductversion: _generated_pb2_1.DataProductVersion
    dataset: _generated_pb2_1.Dataset
    datasource: _generated_pb2_1.DataSource
    dockerConnection: _generated_pb2_1_1.Connection
    dockerRegistrySecret: _containers.ScalarMap[str, bytes]
    imagename: str
    imagenameWithVersion: str
    kaniko: bool
    model: _generated_pb2.Model
    provider: str
    push: bool
    study: _generated_pb2.Study
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., dataproductversion: _Optional[_Union[_generated_pb2_1.DataProductVersion, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., provider: _Optional[str] = ..., imagename: _Optional[str] = ..., imagenameWithVersion: _Optional[str] = ..., push: bool = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., cloudConn: _Optional[_Union[_generated_pb2_1_1.Connection, _Mapping]] = ..., cloudSecret: _Optional[_Mapping[str, bytes]] = ..., dockerConnection: _Optional[_Union[_generated_pb2_1_1.Connection, _Mapping]] = ..., dockerRegistrySecret: _Optional[_Mapping[str, bytes]] = ..., kaniko: bool = ...) -> None: ...

class PublishModelResponse(_message.Message):
    __slots__ = ["ImageName", "hash"]
    HASH_FIELD_NUMBER: _ClassVar[int]
    IMAGENAME_FIELD_NUMBER: _ClassVar[int]
    ImageName: str
    hash: str
    def __init__(self, ImageName: _Optional[str] = ..., hash: _Optional[str] = ...) -> None: ...

class ShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
