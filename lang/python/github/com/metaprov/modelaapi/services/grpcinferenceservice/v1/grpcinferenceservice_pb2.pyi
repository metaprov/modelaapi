from protoc_gen_swagger.options import annotations_pb2 as _annotations_pb2
from google.api import annotations_pb2 as _annotations_pb2_1
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ServerShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ServerShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ServerLiveRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ServerLiveResponse(_message.Message):
    __slots__ = ["live"]
    LIVE_FIELD_NUMBER: _ClassVar[int]
    live: bool
    def __init__(self, live: bool = ...) -> None: ...

class ServerReadyRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ServerReadyResponse(_message.Message):
    __slots__ = ["ready"]
    READY_FIELD_NUMBER: _ClassVar[int]
    ready: bool
    def __init__(self, ready: bool = ...) -> None: ...

class ModelReadyRequest(_message.Message):
    __slots__ = ["name", "version"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    version: str
    def __init__(self, name: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class ModelReadyResponse(_message.Message):
    __slots__ = ["ready"]
    READY_FIELD_NUMBER: _ClassVar[int]
    ready: bool
    def __init__(self, ready: bool = ...) -> None: ...

class ServerMetadataRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ServerMetadataResponse(_message.Message):
    __slots__ = ["name", "version", "extensions"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    name: str
    version: str
    extensions: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, name: _Optional[str] = ..., version: _Optional[str] = ..., extensions: _Optional[_Iterable[str]] = ...) -> None: ...

class ModelMetadataRequest(_message.Message):
    __slots__ = ["name", "version"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    version: str
    def __init__(self, name: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class ModelMetadataResponse(_message.Message):
    __slots__ = ["name", "versions", "platform", "inputs", "outputs"]
    class TensorMetadata(_message.Message):
        __slots__ = ["name", "datatype", "shape"]
        NAME_FIELD_NUMBER: _ClassVar[int]
        DATATYPE_FIELD_NUMBER: _ClassVar[int]
        SHAPE_FIELD_NUMBER: _ClassVar[int]
        name: str
        datatype: str
        shape: _containers.RepeatedScalarFieldContainer[int]
        def __init__(self, name: _Optional[str] = ..., datatype: _Optional[str] = ..., shape: _Optional[_Iterable[int]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSIONS_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    INPUTS_FIELD_NUMBER: _ClassVar[int]
    OUTPUTS_FIELD_NUMBER: _ClassVar[int]
    name: str
    versions: _containers.RepeatedScalarFieldContainer[str]
    platform: str
    inputs: _containers.RepeatedCompositeFieldContainer[ModelMetadataResponse.TensorMetadata]
    outputs: _containers.RepeatedCompositeFieldContainer[ModelMetadataResponse.TensorMetadata]
    def __init__(self, name: _Optional[str] = ..., versions: _Optional[_Iterable[str]] = ..., platform: _Optional[str] = ..., inputs: _Optional[_Iterable[_Union[ModelMetadataResponse.TensorMetadata, _Mapping]]] = ..., outputs: _Optional[_Iterable[_Union[ModelMetadataResponse.TensorMetadata, _Mapping]]] = ...) -> None: ...

class ModelInferRequest(_message.Message):
    __slots__ = ["model_name", "model_version", "id", "parameters", "inputs", "outputs", "raw_input_contents"]
    class InferInputTensor(_message.Message):
        __slots__ = ["name", "datatype", "shape", "parameters", "contents"]
        class ParametersEntry(_message.Message):
            __slots__ = ["key", "value"]
            KEY_FIELD_NUMBER: _ClassVar[int]
            VALUE_FIELD_NUMBER: _ClassVar[int]
            key: str
            value: InferParameter
            def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[InferParameter, _Mapping]] = ...) -> None: ...
        NAME_FIELD_NUMBER: _ClassVar[int]
        DATATYPE_FIELD_NUMBER: _ClassVar[int]
        SHAPE_FIELD_NUMBER: _ClassVar[int]
        PARAMETERS_FIELD_NUMBER: _ClassVar[int]
        CONTENTS_FIELD_NUMBER: _ClassVar[int]
        name: str
        datatype: str
        shape: _containers.RepeatedScalarFieldContainer[int]
        parameters: _containers.MessageMap[str, InferParameter]
        contents: InferTensorContents
        def __init__(self, name: _Optional[str] = ..., datatype: _Optional[str] = ..., shape: _Optional[_Iterable[int]] = ..., parameters: _Optional[_Mapping[str, InferParameter]] = ..., contents: _Optional[_Union[InferTensorContents, _Mapping]] = ...) -> None: ...
    class InferRequestedOutputTensor(_message.Message):
        __slots__ = ["name", "parameters"]
        class ParametersEntry(_message.Message):
            __slots__ = ["key", "value"]
            KEY_FIELD_NUMBER: _ClassVar[int]
            VALUE_FIELD_NUMBER: _ClassVar[int]
            key: str
            value: InferParameter
            def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[InferParameter, _Mapping]] = ...) -> None: ...
        NAME_FIELD_NUMBER: _ClassVar[int]
        PARAMETERS_FIELD_NUMBER: _ClassVar[int]
        name: str
        parameters: _containers.MessageMap[str, InferParameter]
        def __init__(self, name: _Optional[str] = ..., parameters: _Optional[_Mapping[str, InferParameter]] = ...) -> None: ...
    class ParametersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: InferParameter
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[InferParameter, _Mapping]] = ...) -> None: ...
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    MODEL_VERSION_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    INPUTS_FIELD_NUMBER: _ClassVar[int]
    OUTPUTS_FIELD_NUMBER: _ClassVar[int]
    RAW_INPUT_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    model_name: str
    model_version: str
    id: str
    parameters: _containers.MessageMap[str, InferParameter]
    inputs: _containers.RepeatedCompositeFieldContainer[ModelInferRequest.InferInputTensor]
    outputs: _containers.RepeatedCompositeFieldContainer[ModelInferRequest.InferRequestedOutputTensor]
    raw_input_contents: _containers.RepeatedScalarFieldContainer[bytes]
    def __init__(self, model_name: _Optional[str] = ..., model_version: _Optional[str] = ..., id: _Optional[str] = ..., parameters: _Optional[_Mapping[str, InferParameter]] = ..., inputs: _Optional[_Iterable[_Union[ModelInferRequest.InferInputTensor, _Mapping]]] = ..., outputs: _Optional[_Iterable[_Union[ModelInferRequest.InferRequestedOutputTensor, _Mapping]]] = ..., raw_input_contents: _Optional[_Iterable[bytes]] = ...) -> None: ...

class ModelInferResponse(_message.Message):
    __slots__ = ["model_name", "model_version", "id", "parameters", "outputs", "raw_output_contents"]
    class InferOutputTensor(_message.Message):
        __slots__ = ["name", "datatype", "shape", "parameters", "contents"]
        class ParametersEntry(_message.Message):
            __slots__ = ["key", "value"]
            KEY_FIELD_NUMBER: _ClassVar[int]
            VALUE_FIELD_NUMBER: _ClassVar[int]
            key: str
            value: InferParameter
            def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[InferParameter, _Mapping]] = ...) -> None: ...
        NAME_FIELD_NUMBER: _ClassVar[int]
        DATATYPE_FIELD_NUMBER: _ClassVar[int]
        SHAPE_FIELD_NUMBER: _ClassVar[int]
        PARAMETERS_FIELD_NUMBER: _ClassVar[int]
        CONTENTS_FIELD_NUMBER: _ClassVar[int]
        name: str
        datatype: str
        shape: _containers.RepeatedScalarFieldContainer[int]
        parameters: _containers.MessageMap[str, InferParameter]
        contents: InferTensorContents
        def __init__(self, name: _Optional[str] = ..., datatype: _Optional[str] = ..., shape: _Optional[_Iterable[int]] = ..., parameters: _Optional[_Mapping[str, InferParameter]] = ..., contents: _Optional[_Union[InferTensorContents, _Mapping]] = ...) -> None: ...
    class ParametersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: InferParameter
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[InferParameter, _Mapping]] = ...) -> None: ...
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    MODEL_VERSION_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    OUTPUTS_FIELD_NUMBER: _ClassVar[int]
    RAW_OUTPUT_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    model_name: str
    model_version: str
    id: str
    parameters: _containers.MessageMap[str, InferParameter]
    outputs: _containers.RepeatedCompositeFieldContainer[ModelInferResponse.InferOutputTensor]
    raw_output_contents: _containers.RepeatedScalarFieldContainer[bytes]
    def __init__(self, model_name: _Optional[str] = ..., model_version: _Optional[str] = ..., id: _Optional[str] = ..., parameters: _Optional[_Mapping[str, InferParameter]] = ..., outputs: _Optional[_Iterable[_Union[ModelInferResponse.InferOutputTensor, _Mapping]]] = ..., raw_output_contents: _Optional[_Iterable[bytes]] = ...) -> None: ...

class InferParameter(_message.Message):
    __slots__ = ["bool_param", "int64_param", "string_param"]
    BOOL_PARAM_FIELD_NUMBER: _ClassVar[int]
    INT64_PARAM_FIELD_NUMBER: _ClassVar[int]
    STRING_PARAM_FIELD_NUMBER: _ClassVar[int]
    bool_param: bool
    int64_param: int
    string_param: str
    def __init__(self, bool_param: bool = ..., int64_param: _Optional[int] = ..., string_param: _Optional[str] = ...) -> None: ...

class InferTensorContents(_message.Message):
    __slots__ = ["bool_contents", "int_contents", "int64_contents", "uint_contents", "uint64_contents", "fp32_contents", "fp64_contents", "bytes_contents"]
    BOOL_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    INT_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    INT64_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    UINT_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    UINT64_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    FP32_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    FP64_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    BYTES_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    bool_contents: _containers.RepeatedScalarFieldContainer[bool]
    int_contents: _containers.RepeatedScalarFieldContainer[int]
    int64_contents: _containers.RepeatedScalarFieldContainer[int]
    uint_contents: _containers.RepeatedScalarFieldContainer[int]
    uint64_contents: _containers.RepeatedScalarFieldContainer[int]
    fp32_contents: _containers.RepeatedScalarFieldContainer[float]
    fp64_contents: _containers.RepeatedScalarFieldContainer[float]
    bytes_contents: _containers.RepeatedScalarFieldContainer[bytes]
    def __init__(self, bool_contents: _Optional[_Iterable[bool]] = ..., int_contents: _Optional[_Iterable[int]] = ..., int64_contents: _Optional[_Iterable[int]] = ..., uint_contents: _Optional[_Iterable[int]] = ..., uint64_contents: _Optional[_Iterable[int]] = ..., fp32_contents: _Optional[_Iterable[float]] = ..., fp64_contents: _Optional[_Iterable[float]] = ..., bytes_contents: _Optional[_Iterable[bytes]] = ...) -> None: ...

class PredictorInfo(_message.Message):
    __slots__ = ["namespace", "name", "task", "models", "schema"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    task: str
    models: _containers.RepeatedCompositeFieldContainer[ModelInfo]
    schema: SchemaInfo
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., task: _Optional[str] = ..., models: _Optional[_Iterable[_Union[ModelInfo, _Mapping]]] = ..., schema: _Optional[_Union[SchemaInfo, _Mapping]] = ...) -> None: ...

class ModelInfo(_message.Message):
    __slots__ = ["namespace", "name", "version", "product", "trainingMetric", "trainingScore", "status", "canary", "shadow", "traffic", "filter", "rank", "logPath", "p95", "p99", "lastPrediction", "dailyPredictionAvg"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    TRAININGMETRIC_FIELD_NUMBER: _ClassVar[int]
    TRAININGSCORE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CANARY_FIELD_NUMBER: _ClassVar[int]
    SHADOW_FIELD_NUMBER: _ClassVar[int]
    TRAFFIC_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    RANK_FIELD_NUMBER: _ClassVar[int]
    LOGPATH_FIELD_NUMBER: _ClassVar[int]
    P95_FIELD_NUMBER: _ClassVar[int]
    P99_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTION_FIELD_NUMBER: _ClassVar[int]
    DAILYPREDICTIONAVG_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    version: str
    product: str
    trainingMetric: str
    trainingScore: float
    status: str
    canary: bool
    shadow: bool
    traffic: float
    filter: str
    rank: int
    logPath: str
    p95: float
    p99: float
    lastPrediction: int
    dailyPredictionAvg: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., version: _Optional[str] = ..., product: _Optional[str] = ..., trainingMetric: _Optional[str] = ..., trainingScore: _Optional[float] = ..., status: _Optional[str] = ..., canary: bool = ..., shadow: bool = ..., traffic: _Optional[float] = ..., filter: _Optional[str] = ..., rank: _Optional[int] = ..., logPath: _Optional[str] = ..., p95: _Optional[float] = ..., p99: _Optional[float] = ..., lastPrediction: _Optional[int] = ..., dailyPredictionAvg: _Optional[int] = ...) -> None: ...

class SchemaInfo(_message.Message):
    __slots__ = ["columns"]
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[ColumnInfo]
    def __init__(self, columns: _Optional[_Iterable[_Union[ColumnInfo, _Mapping]]] = ...) -> None: ...

class ColumnInfo(_message.Message):
    __slots__ = ["name", "type"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ...) -> None: ...

class GetPredictorRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetPredictorResponse(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: PredictorInfo
    def __init__(self, item: _Optional[_Union[PredictorInfo, _Mapping]] = ...) -> None: ...

class GetModelRequest(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class GetModelResponse(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: ModelInfo
    def __init__(self, item: _Optional[_Union[ModelInfo, _Mapping]] = ...) -> None: ...

class PredictRequest(_message.Message):
    __slots__ = ["predictor", "validate", "explain", "format", "payload", "labeled", "metrics", "modelversion"]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    VALIDATE_FIELD_NUMBER: _ClassVar[int]
    EXPLAIN_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    LABELED_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    MODELVERSION_FIELD_NUMBER: _ClassVar[int]
    predictor: str
    validate: bool
    explain: bool
    format: str
    payload: str
    labeled: bool
    metrics: _containers.RepeatedScalarFieldContainer[str]
    modelversion: str
    def __init__(self, predictor: _Optional[str] = ..., validate: bool = ..., explain: bool = ..., format: _Optional[str] = ..., payload: _Optional[str] = ..., labeled: bool = ..., metrics: _Optional[_Iterable[str]] = ..., modelversion: _Optional[str] = ...) -> None: ...

class PredictResponse(_message.Message):
    __slots__ = ["items", "scores"]
    class ScoresEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    SCORES_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PredictResultLineItem]
    scores: _containers.ScalarMap[str, float]
    def __init__(self, items: _Optional[_Iterable[_Union[PredictResultLineItem, _Mapping]]] = ..., scores: _Optional[_Mapping[str, float]] = ...) -> None: ...

class PredictResultLineItem(_message.Message):
    __slots__ = ["success", "score", "label", "probabilities", "missingColumns", "outOfBound", "baseShapValue", "shapValues", "probability"]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    PROBABILITIES_FIELD_NUMBER: _ClassVar[int]
    MISSINGCOLUMNS_FIELD_NUMBER: _ClassVar[int]
    OUTOFBOUND_FIELD_NUMBER: _ClassVar[int]
    BASESHAPVALUE_FIELD_NUMBER: _ClassVar[int]
    SHAPVALUES_FIELD_NUMBER: _ClassVar[int]
    PROBABILITY_FIELD_NUMBER: _ClassVar[int]
    success: bool
    score: float
    label: str
    probabilities: _containers.RepeatedCompositeFieldContainer[ProbabilityValue]
    missingColumns: _containers.RepeatedScalarFieldContainer[str]
    outOfBound: _containers.RepeatedScalarFieldContainer[str]
    baseShapValue: float
    shapValues: _containers.RepeatedCompositeFieldContainer[ShapValue]
    probability: float
    def __init__(self, success: bool = ..., score: _Optional[float] = ..., label: _Optional[str] = ..., probabilities: _Optional[_Iterable[_Union[ProbabilityValue, _Mapping]]] = ..., missingColumns: _Optional[_Iterable[str]] = ..., outOfBound: _Optional[_Iterable[str]] = ..., baseShapValue: _Optional[float] = ..., shapValues: _Optional[_Iterable[_Union[ShapValue, _Mapping]]] = ..., probability: _Optional[float] = ...) -> None: ...

class ProbabilityValue(_message.Message):
    __slots__ = ["label", "probability"]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    PROBABILITY_FIELD_NUMBER: _ClassVar[int]
    label: str
    probability: float
    def __init__(self, label: _Optional[str] = ..., probability: _Optional[float] = ...) -> None: ...

class ShapValue(_message.Message):
    __slots__ = ["feature", "value"]
    FEATURE_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    feature: str
    value: float
    def __init__(self, feature: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
