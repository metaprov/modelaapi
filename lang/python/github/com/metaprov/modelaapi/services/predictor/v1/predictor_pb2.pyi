from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreatePredictorRequest(_message.Message):
    __slots__ = ["predictor"]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    predictor: _generated_pb2.Predictor
    def __init__(self, predictor: _Optional[_Union[_generated_pb2.Predictor, _Mapping]] = ...) -> None: ...

class CreatePredictorResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeletePredictorRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeletePredictorResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetPredictorRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPredictorResponse(_message.Message):
    __slots__ = ["predictor", "yaml"]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    predictor: _generated_pb2.Predictor
    yaml: str
    def __init__(self, predictor: _Optional[_Union[_generated_pb2.Predictor, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListPredictorsRequest(_message.Message):
    __slots__ = ["labels", "namespace", "order_by", "page_size", "page_token"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    namespace: str
    order_by: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListPredictorsResponse(_message.Message):
    __slots__ = ["next_page_token", "predictors"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    PREDICTORS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    predictors: _generated_pb2.PredictorList
    def __init__(self, predictors: _Optional[_Union[_generated_pb2.PredictorList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class PredictOneRequest(_message.Message):
    __slots__ = ["fields", "name", "namespace", "values"]
    FIELDS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    fields: str
    name: str
    namespace: str
    values: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., fields: _Optional[str] = ..., values: _Optional[str] = ...) -> None: ...

class PredictOneResponse(_message.Message):
    __slots__ = ["label", "name", "namespace", "proba", "score"]
    class ProbaEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    LABEL_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROBA_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    label: str
    name: str
    namespace: str
    proba: _containers.ScalarMap[str, float]
    score: float
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., label: _Optional[str] = ..., score: _Optional[float] = ..., proba: _Optional[_Mapping[str, float]] = ...) -> None: ...

class RollbackRequest(_message.Message):
    __slots__ = ["modelName", "name", "namespace"]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    modelName: str
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., modelName: _Optional[str] = ...) -> None: ...

class RollbackResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdatePredictorRequest(_message.Message):
    __slots__ = ["field_mask", "predictor"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    predictor: _generated_pb2.Predictor
    def __init__(self, predictor: _Optional[_Union[_generated_pb2.Predictor, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdatePredictorResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
