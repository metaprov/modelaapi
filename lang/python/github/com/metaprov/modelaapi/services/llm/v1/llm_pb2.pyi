from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListLLMsRequest(_message.Message):
    __slots__ = ("namespace", "labels")
    class LabelsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListLLMsResponse(_message.Message):
    __slots__ = ("llms", "next_page_token")
    LLMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    llms: _generated_pb2.LLMList
    next_page_token: str
    def __init__(self, llms: _Optional[_Union[_generated_pb2.LLMList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateLLMRequest(_message.Message):
    __slots__ = ("llm",)
    LLM_FIELD_NUMBER: _ClassVar[int]
    llm: _generated_pb2.LLM
    def __init__(self, llm: _Optional[_Union[_generated_pb2.LLM, _Mapping]] = ...) -> None: ...

class CreateLLMResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateLLMRequest(_message.Message):
    __slots__ = ("llm", "field_mask")
    LLM_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    llm: _generated_pb2.LLM
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, llm: _Optional[_Union[_generated_pb2.LLM, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateLLMResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetLLMRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLLMResponse(_message.Message):
    __slots__ = ("llm", "yaml")
    LLM_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    llm: _generated_pb2.LLM
    yaml: str
    def __init__(self, llm: _Optional[_Union[_generated_pb2.LLM, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteLLMRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteLLMResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
