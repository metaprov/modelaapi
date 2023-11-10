from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AbortModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class AbortModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CompareModelsRequest(_message.Message):
    __slots__ = ["names", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    names: _containers.RepeatedScalarFieldContainer[str]
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ...) -> None: ...

class CompareModelsResponse(_message.Message):
    __slots__ = ["names", "namespace", "profiles"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    names: _containers.RepeatedScalarFieldContainer[str]
    namespace: str
    profiles: _containers.RepeatedCompositeFieldContainer[_common_pb2.ModelProfile]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ..., profiles: _Optional[_Iterable[_Union[_common_pb2.ModelProfile, _Mapping]]] = ...) -> None: ...

class CompileModelRequest(_message.Message):
    __slots__ = ["compiler", "name", "namespace", "target"]
    COMPILER_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    compiler: str
    name: str
    namespace: str
    target: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., target: _Optional[str] = ..., compiler: _Optional[str] = ...) -> None: ...

class CompileModelResponse(_message.Message):
    __slots__ = ["names", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    names: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[str] = ...) -> None: ...

class CreateModelProfileRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class CreateModelProfileResponse(_message.Message):
    __slots__ = ["uri"]
    URI_FIELD_NUMBER: _ClassVar[int]
    uri: str
    def __init__(self, uri: _Optional[str] = ...) -> None: ...

class CreateModelRequest(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _generated_pb2.Model
    def __init__(self, model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ...) -> None: ...

class CreateModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeployModelRequest(_message.Message):
    __slots__ = ["name", "namespace", "predictor", "replicas", "role", "servingsite", "traffic"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITE_FIELD_NUMBER: _ClassVar[int]
    TRAFFIC_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    predictor: str
    replicas: int
    role: str
    servingsite: str
    traffic: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., predictor: _Optional[str] = ..., replicas: _Optional[int] = ..., traffic: _Optional[int] = ..., role: _Optional[str] = ..., servingsite: _Optional[str] = ...) -> None: ...

class DeployModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DownloadModelRequest(_message.Message):
    __slots__ = ["group", "name", "namespace"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    group: str
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., group: _Optional[str] = ...) -> None: ...

class DownloadModelResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class GetMisclassRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetMisclassResponse(_message.Message):
    __slots__ = ["table"]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    table: _common_pb2.TableView
    def __init__(self, table: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class GetModelLogsRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelLogsResponse(_message.Message):
    __slots__ = ["logs"]
    class LogsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LOGS_FIELD_NUMBER: _ClassVar[int]
    logs: _containers.ScalarMap[str, str]
    def __init__(self, logs: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetModelProfileRequest(_message.Message):
    __slots__ = ["group", "name", "namespace", "uri"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    group: str
    name: str
    namespace: str
    uri: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., uri: _Optional[str] = ..., group: _Optional[str] = ...) -> None: ...

class GetModelProfileResponse(_message.Message):
    __slots__ = ["profile"]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: _common_pb2.ModelProfile
    def __init__(self, profile: _Optional[_Union[_common_pb2.ModelProfile, _Mapping]] = ...) -> None: ...

class GetModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelResponse(_message.Message):
    __slots__ = ["model", "yaml"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    model: _generated_pb2.Model
    yaml: str
    def __init__(self, model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListModelProfileRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ListModelsRequest(_message.Message):
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

class ListModelsResponse(_message.Message):
    __slots__ = ["models"]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    models: _generated_pb2.ModelList
    def __init__(self, models: _Optional[_Union[_generated_pb2.ModelList, _Mapping]] = ...) -> None: ...

class PauseModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class PauseModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PreviewScoreRequest(_message.Message):
    __slots__ = ["client", "estimator", "metric", "pipelines", "rows", "snapshot"]
    CLIENT_FIELD_NUMBER: _ClassVar[int]
    ESTIMATOR_FIELD_NUMBER: _ClassVar[int]
    METRIC_FIELD_NUMBER: _ClassVar[int]
    PIPELINES_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    client: str
    estimator: str
    metric: str
    pipelines: _containers.RepeatedCompositeFieldContainer[_generated_pb2.FeatureEngineeringPipeline]
    rows: int
    snapshot: _generated_pb2_1.DatasetSnapshot
    def __init__(self, snapshot: _Optional[_Union[_generated_pb2_1.DatasetSnapshot, _Mapping]] = ..., pipelines: _Optional[_Iterable[_Union[_generated_pb2.FeatureEngineeringPipeline, _Mapping]]] = ..., estimator: _Optional[str] = ..., metric: _Optional[str] = ..., rows: _Optional[int] = ..., client: _Optional[str] = ...) -> None: ...

class PreviewScoreResponse(_message.Message):
    __slots__ = ["score"]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    score: float
    def __init__(self, score: _Optional[float] = ...) -> None: ...

class PromoteModelRequest(_message.Message):
    __slots__ = ["name", "namespace", "predictor", "servingsite", "shadow", "tenant"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITE_FIELD_NUMBER: _ClassVar[int]
    SHADOW_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    predictor: str
    servingsite: str
    shadow: bool
    tenant: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., tenant: _Optional[str] = ..., servingsite: _Optional[str] = ..., predictor: _Optional[str] = ..., shadow: bool = ...) -> None: ...

class PromoteModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PublishModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class PublishModelResponse(_message.Message):
    __slots__ = ["modelTarHash"]
    MODELTARHASH_FIELD_NUMBER: _ClassVar[int]
    modelTarHash: str
    def __init__(self, modelTarHash: _Optional[str] = ...) -> None: ...

class ResumeModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ResumeModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class TestModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class TestModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateModelRequest(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _generated_pb2.Model
    def __init__(self, model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ...) -> None: ...

class UpdateModelResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateModelResult(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
