from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetModelClassRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelClassResponse(_message.Message):
    __slots__ = ("modelclass", "yaml")
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    modelclass: _generated_pb2.ModelClass
    yaml: str
    def __init__(self, modelclass: _Optional[_Union[_generated_pb2.ModelClass, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListModelClassRequest(_message.Message):
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

class ListModelClassResponse(_message.Message):
    __slots__ = ("modelclasses", "next_page_token")
    MODELCLASSES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    modelclasses: _generated_pb2.ModelClassList
    next_page_token: str
    def __init__(self, modelclasses: _Optional[_Union[_generated_pb2.ModelClassList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateModelClassRequest(_message.Message):
    __slots__ = ("modelclass",)
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    modelclass: _generated_pb2.ModelClass
    def __init__(self, modelclass: _Optional[_Union[_generated_pb2.ModelClass, _Mapping]] = ...) -> None: ...

class CreateModelClassResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateModelClassRequest(_message.Message):
    __slots__ = ("modelclass", "field_mask")
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    modelclass: _generated_pb2.ModelClass
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, modelclass: _Optional[_Union[_generated_pb2.ModelClass, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class CreateModelClassProfileRequest(_message.Message):
    __slots__ = ("namespace", "name", "modelclasses")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSES_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    modelclasses: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Model]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., modelclasses: _Optional[_Iterable[_Union[_generated_pb2.Model, _Mapping]]] = ...) -> None: ...

class CreateModelClassProfileResponse(_message.Message):
    __slots__ = ("namespace", "name", "uri")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    uri: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., uri: _Optional[str] = ...) -> None: ...

class GetModelClassProfileRequest(_message.Message):
    __slots__ = ("namespace", "name", "models")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    models: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., models: _Optional[int] = ...) -> None: ...

class DeleteModelClassRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteModelClassResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateModelClassResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ModelClassTrainNowRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ModelClassTrainNowResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ModelClassPredictNowRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ModelClassPredictNowResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
