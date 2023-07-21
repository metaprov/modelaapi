from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AbortDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class AbortDataPipelineRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateDataPipelineRunRequest(_message.Message):
    __slots__ = ["datapipelinerun"]
    DATAPIPELINERUN_FIELD_NUMBER: _ClassVar[int]
    datapipelinerun: _generated_pb2.DataPipelineRun
    def __init__(self, datapipelinerun: _Optional[_Union[_generated_pb2.DataPipelineRun, _Mapping]] = ...) -> None: ...

class CreateDataPipelineRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataPipelineRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataPipelineRunResponse(_message.Message):
    __slots__ = ["datapipelinerun", "yaml"]
    DATAPIPELINERUN_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    datapipelinerun: _generated_pb2.DataPipelineRun
    yaml: str
    def __init__(self, datapipelinerun: _Optional[_Union[_generated_pb2.DataPipelineRun, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListDataPipelineRunRequest(_message.Message):
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

class ListDataPipelineRunResponse(_message.Message):
    __slots__ = ["datapipelineruns", "next_page_token"]
    DATAPIPELINERUNS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    datapipelineruns: _generated_pb2.DataPipelineRunList
    next_page_token: str
    def __init__(self, datapipelineruns: _Optional[_Union[_generated_pb2.DataPipelineRunList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class PauseDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class PauseDataPipelineRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ResumeDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ResumeDataPipelineRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateDataPipelineRunRequest(_message.Message):
    __slots__ = ["datapipelinerun", "field_mask"]
    DATAPIPELINERUN_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    datapipelinerun: _generated_pb2.DataPipelineRun
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, datapipelinerun: _Optional[_Union[_generated_pb2.DataPipelineRun, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDataPipelineRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
