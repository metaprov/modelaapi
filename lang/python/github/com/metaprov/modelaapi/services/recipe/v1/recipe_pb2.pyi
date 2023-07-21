from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateRecipeRequest(_message.Message):
    __slots__ = ["recipe"]
    RECIPE_FIELD_NUMBER: _ClassVar[int]
    recipe: _generated_pb2.Recipe
    def __init__(self, recipe: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ...) -> None: ...

class CreateRecipeResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteRecipeRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteRecipeResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetRecipeRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetRecipeResponse(_message.Message):
    __slots__ = ["recipe", "yaml"]
    RECIPE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    recipe: _generated_pb2.Recipe
    yaml: str
    def __init__(self, recipe: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListRecipesRequest(_message.Message):
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

class ListRecipesResponse(_message.Message):
    __slots__ = ["next_page_token", "recipes"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    RECIPES_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    recipes: _generated_pb2.RecipeList
    def __init__(self, recipes: _Optional[_Union[_generated_pb2.RecipeList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ProfileRecipeRequest(_message.Message):
    __slots__ = ["name", "namespace", "spec"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    spec: _generated_pb2.RecipeSpec
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., spec: _Optional[_Union[_generated_pb2.RecipeSpec, _Mapping]] = ...) -> None: ...

class ProfileRecipeResponse(_message.Message):
    __slots__ = ["table"]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    table: _common_pb2.TableView
    def __init__(self, table: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class RunRecipeRequest(_message.Message):
    __slots__ = ["name", "namespace", "spec"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    spec: _generated_pb2.RecipeSpec
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., spec: _Optional[_Union[_generated_pb2.RecipeSpec, _Mapping]] = ...) -> None: ...

class RunRecipeResponse(_message.Message):
    __slots__ = ["recipe", "yaml"]
    RECIPE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    recipe: _generated_pb2.Recipe
    yaml: str
    def __init__(self, recipe: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class UpdateRecipeRequest(_message.Message):
    __slots__ = ["field_mask", "recipe"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    RECIPE_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    recipe: _generated_pb2.Recipe
    def __init__(self, recipe: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateRecipeResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
