from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateDataPipelineRequest(_message.Message):
    __slots__ = ["datapipeline"]
    DATAPIPELINE_FIELD_NUMBER: _ClassVar[int]
    datapipeline: _generated_pb2.DataPipeline
    def __init__(self, datapipeline: _Optional[_Union[_generated_pb2.DataPipeline, _Mapping]] = ...) -> None: ...

class CreateDataPipelineResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteDataPipelineRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataPipelineResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetDataPipelineRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataPipelineResponse(_message.Message):
    __slots__ = ["datapipeline", "yaml"]
    DATAPIPELINE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    datapipeline: _generated_pb2.DataPipeline
    yaml: str
    def __init__(self, datapipeline: _Optional[_Union[_generated_pb2.DataPipeline, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListDataPipelinesRequest(_message.Message):
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

class ListDataPipelinesResponse(_message.Message):
    __slots__ = ["datapipelines", "next_page_token"]
    DATAPIPELINES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    datapipelines: _generated_pb2.DataPipelineList
    next_page_token: str
    def __init__(self, datapipelines: _Optional[_Union[_generated_pb2.DataPipelineList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class RunDataPipelineRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class RunDataPipelineResponse(_message.Message):
    __slots__ = ["pipeline", "yaml"]
    PIPELINE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    pipeline: _generated_pb2.DataPipeline
    yaml: str
    def __init__(self, pipeline: _Optional[_Union[_generated_pb2.DataPipeline, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class UpdateDataPipelineRequest(_message.Message):
    __slots__ = ["datapipeline", "field_mask"]
    DATAPIPELINE_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    datapipeline: _generated_pb2.DataPipeline
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, datapipeline: _Optional[_Union[_generated_pb2.DataPipeline, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDataPipelineResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
