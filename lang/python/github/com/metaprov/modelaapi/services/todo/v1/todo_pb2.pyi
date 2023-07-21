from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateTodoRequest(_message.Message):
    __slots__ = ["password", "todo"]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    TODO_FIELD_NUMBER: _ClassVar[int]
    password: str
    todo: _generated_pb2.Todo
    def __init__(self, todo: _Optional[_Union[_generated_pb2.Todo, _Mapping]] = ..., password: _Optional[str] = ...) -> None: ...

class CreateTodoResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteTodoRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteTodoResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetTodoRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetTodoResponse(_message.Message):
    __slots__ = ["todo", "yaml"]
    TODO_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    todo: _generated_pb2.Todo
    yaml: str
    def __init__(self, todo: _Optional[_Union[_generated_pb2.Todo, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListTodosRequest(_message.Message):
    __slots__ = ["labels", "namespace"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListTodosResponse(_message.Message):
    __slots__ = ["next_page_token", "todos"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    TODOS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    todos: _generated_pb2.TodoList
    def __init__(self, todos: _Optional[_Union[_generated_pb2.TodoList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateTodoRequest(_message.Message):
    __slots__ = ["field_mask", "todo"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    TODO_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    todo: _generated_pb2.Todo
    def __init__(self, todo: _Optional[_Union[_generated_pb2.Todo, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateTodoResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
