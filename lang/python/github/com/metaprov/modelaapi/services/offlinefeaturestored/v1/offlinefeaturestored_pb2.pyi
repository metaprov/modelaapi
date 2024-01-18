from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GenerateTrainingDatasetRequest(_message.Message):
    __slots__ = ("model",)
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _generated_pb2_1_1.ModelClass
    def __init__(self, model: _Optional[_Union[_generated_pb2_1_1.ModelClass, _Mapping]] = ...) -> None: ...

class GenerateTrainingDatasetResponse(_message.Message):
    __slots__ = ("path",)
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...

class SyncRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SyncResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
