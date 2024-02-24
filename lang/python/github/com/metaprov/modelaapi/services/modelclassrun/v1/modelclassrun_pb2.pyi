from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListModelClassRunsRequest(_message.Message):
    __slots__ = ("namespace", "labels", "page_size", "page_token", "order_by")
    class LabelsEntry(_message.Message):
        __slots__ = ("key", "value")
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

class ListModelClassRunsResponse(_message.Message):
    __slots__ = ("modelclassruns", "next_page_token")
    MODELCLASSRUNS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    modelclassruns: _generated_pb2.ModelClassRunList
    next_page_token: str
    def __init__(self, modelclassruns: _Optional[_Union[_generated_pb2.ModelClassRunList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CreateModelClassRunRequest(_message.Message):
    __slots__ = ("modelclassrun",)
    MODELCLASSRUN_FIELD_NUMBER: _ClassVar[int]
    modelclassrun: _generated_pb2.ModelClassRun
    def __init__(self, modelclassrun: _Optional[_Union[_generated_pb2.ModelClassRun, _Mapping]] = ...) -> None: ...

class CreateModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateModelClassRunRequest(_message.Message):
    __slots__ = ("modelclassrun", "field_mask")
    MODELCLASSRUN_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    modelclassrun: _generated_pb2.ModelClassRun
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, modelclassrun: _Optional[_Union[_generated_pb2.ModelClassRun, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelClassRunResponse(_message.Message):
    __slots__ = ("modelclassrun", "yaml")
    MODELCLASSRUN_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    modelclassrun: _generated_pb2.ModelClassRun
    yaml: str
    def __init__(self, modelclassrun: _Optional[_Union[_generated_pb2.ModelClassRun, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ApproveModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name", "stage", "account")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    STAGE_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    stage: str
    account: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., stage: _Optional[str] = ..., account: _Optional[str] = ...) -> None: ...

class ApproveModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DenyModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name", "stage", "account")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    STAGE_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    stage: str
    account: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., stage: _Optional[str] = ..., account: _Optional[str] = ...) -> None: ...

class DenyModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PauseModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PauseModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ResumeModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ResumeModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class AbortModelClassRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AbortModelClassRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...
