from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2_1
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1_1
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PredictionIngestResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PredictionsIngestRequest(_message.Message):
    __slots__ = ["connection", "dataset", "key", "secret"]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2_1.Connection
    dataset: _generated_pb2.Dataset
    key: str
    secret: _generated_pb2_1_1.Secret
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., key: _Optional[str] = ..., connection: _Optional[_Union[_generated_pb2_1.Connection, _Mapping]] = ..., secret: _Optional[_Union[_generated_pb2_1_1.Secret, _Mapping]] = ...) -> None: ...
