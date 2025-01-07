from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListLLMServersRequest(_message.Message):
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

class ListLLMServersResponse(_message.Message):
    __slots__ = ("llmServers", "next_page_token")
    LLMSERVERS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    llmServers: _generated_pb2.LLMServerList
    next_page_token: str
    def __init__(self, llmServers: _Optional[_Union[_generated_pb2.LLMServerList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateLLMServerRequest(_message.Message):
    __slots__ = ("llmServer",)
    LLMSERVER_FIELD_NUMBER: _ClassVar[int]
    llmServer: _generated_pb2.LLMServer
    def __init__(self, llmServer: _Optional[_Union[_generated_pb2.LLMServer, _Mapping]] = ...) -> None: ...

class CreateLLMServerResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateLLMServerRequest(_message.Message):
    __slots__ = ("llmServer", "field_mask")
    LLMSERVER_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    llmServer: _generated_pb2.LLMServer
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, llmServer: _Optional[_Union[_generated_pb2.LLMServer, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateLLMServerResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetLLMServerRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLLMServerResponse(_message.Message):
    __slots__ = ("llmServer", "yaml")
    LLMSERVER_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    llmServer: _generated_pb2.LLMServer
    yaml: str
    def __init__(self, llmServer: _Optional[_Union[_generated_pb2.LLMServer, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteLLMServerRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteLLMServerResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class RefreshLLMServerRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class RefreshLLMServerResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
