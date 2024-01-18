from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListRecipeRunsRequest(_message.Message):
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

class ListRecipeRunsResponse(_message.Message):
    __slots__ = ("reciperuns", "next_page_token")
    RECIPERUNS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    reciperuns: _generated_pb2.RecipeRunList
    next_page_token: str
    def __init__(self, reciperuns: _Optional[_Union[_generated_pb2.RecipeRunList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateRecipeRunRequest(_message.Message):
    __slots__ = ("reciperun",)
    RECIPERUN_FIELD_NUMBER: _ClassVar[int]
    reciperun: _generated_pb2.RecipeRun
    def __init__(self, reciperun: _Optional[_Union[_generated_pb2.RecipeRun, _Mapping]] = ...) -> None: ...

class CreateRecipeRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateRecipeRunRequest(_message.Message):
    __slots__ = ("reciperun", "field_mask")
    RECIPERUN_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    reciperun: _generated_pb2.RecipeRun
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, reciperun: _Optional[_Union[_generated_pb2.RecipeRun, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateRecipeRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetRecipeRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetRecipeRunResponse(_message.Message):
    __slots__ = ("reciperun", "yaml")
    RECIPERUN_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    reciperun: _generated_pb2.RecipeRun
    yaml: str
    def __init__(self, reciperun: _Optional[_Union[_generated_pb2.RecipeRun, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteRecipeRunRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteRecipeRunResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
