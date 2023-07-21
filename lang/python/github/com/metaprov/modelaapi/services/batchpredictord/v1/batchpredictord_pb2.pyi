from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class BatchPredictModelClassRequest(_message.Message):
    __slots__ = ["datasource", "entities", "groups", "model", "modelClass", "prediction"]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    ENTITIES_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    datasource: _generated_pb2_1.DataSource
    entities: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Entity]
    groups: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.FeatureGroup]
    model: _generated_pb2_1_1.Model
    modelClass: _generated_pb2_1_1.ModelClass
    prediction: _generated_pb2_1_1_1.Prediction
    def __init__(self, prediction: _Optional[_Union[_generated_pb2_1_1_1.Prediction, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1_1.Model, _Mapping]] = ..., modelClass: _Optional[_Union[_generated_pb2_1_1.ModelClass, _Mapping]] = ..., entities: _Optional[_Iterable[_Union[_generated_pb2_1.Entity, _Mapping]]] = ..., groups: _Optional[_Iterable[_Union[_generated_pb2_1.FeatureGroup, _Mapping]]] = ...) -> None: ...

class BatchPredictRequest(_message.Message):
    __slots__ = ["datasource", "model", "prediction", "tenant"]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    datasource: _generated_pb2_1.DataSource
    model: _generated_pb2_1_1.Model
    prediction: _generated_pb2_1_1_1.Prediction
    tenant: str
    def __init__(self, prediction: _Optional[_Union[_generated_pb2_1_1_1.Prediction, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1_1.Model, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., tenant: _Optional[str] = ...) -> None: ...

class BatchPredictResponse(_message.Message):
    __slots__ = ["rows"]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    rows: int
    def __init__(self, rows: _Optional[int] = ...) -> None: ...

class ShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
