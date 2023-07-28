from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListPredictionsRequest(_message.Message):
    __slots__ = ["namespace", "labels", "page_size", "page_token", "order_by"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ORDER_BY_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    labels: _containers.ScalarMap[str, str]
    page_size: int
    page_token: str
    order_by: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ..., order_by: _Optional[str] = ...) -> None: ...

class ListPredictionsResponse(_message.Message):
    __slots__ = ["predictions", "next_page_token"]
    PREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    predictions: _generated_pb2.PredictionList
    next_page_token: str
    def __init__(self, predictions: _Optional[_Union[_generated_pb2.PredictionList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreatePredictionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreatePredictionRequest(_message.Message):
    __slots__ = ["prediction"]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    prediction: _generated_pb2.Prediction
    def __init__(self, prediction: _Optional[_Union[_generated_pb2.Prediction, _Mapping]] = ...) -> None: ...

class UpdatePredictionRequest(_message.Message):
    __slots__ = ["prediction", "field_mask"]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    prediction: _generated_pb2.Prediction
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, prediction: _Optional[_Union[_generated_pb2.Prediction, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdatePredictionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetPredictionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPredictionResponse(_message.Message):
    __slots__ = ["prediction", "yaml"]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    prediction: _generated_pb2.Prediction
    yaml: str
    def __init__(self, prediction: _Optional[_Union[_generated_pb2.Prediction, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeletePredictionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeletePredictionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DownloadPredictionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DownloadPredictionResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class AbortPredictionRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class AbortPredictionResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
