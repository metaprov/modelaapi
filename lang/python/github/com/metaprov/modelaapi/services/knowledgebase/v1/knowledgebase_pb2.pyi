from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListKnowledgeBasesRequest(_message.Message):
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

class ListKnowledgeBasesResponse(_message.Message):
    __slots__ = ("knowledgeBases", "next_page_token")
    KNOWLEDGEBASES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    knowledgeBases: _generated_pb2.KnowledgeBaseList
    next_page_token: str
    def __init__(self, knowledgeBases: _Optional[_Union[_generated_pb2.KnowledgeBaseList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateKnowledgeBaseRequest(_message.Message):
    __slots__ = ("knowledgeBase",)
    KNOWLEDGEBASE_FIELD_NUMBER: _ClassVar[int]
    knowledgeBase: _generated_pb2.KnowledgeBase
    def __init__(self, knowledgeBase: _Optional[_Union[_generated_pb2.KnowledgeBase, _Mapping]] = ...) -> None: ...

class CreateKnowledgeBaseResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateKnowledgeBaseRequest(_message.Message):
    __slots__ = ("knowledgeBase", "field_mask", "flaggedDocuments")
    KNOWLEDGEBASE_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    FLAGGEDDOCUMENTS_FIELD_NUMBER: _ClassVar[int]
    knowledgeBase: _generated_pb2.KnowledgeBase
    field_mask: _field_mask_pb2.FieldMask
    flaggedDocuments: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, knowledgeBase: _Optional[_Union[_generated_pb2.KnowledgeBase, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ..., flaggedDocuments: _Optional[_Iterable[str]] = ...) -> None: ...

class UpdateKnowledgeBaseResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetKnowledgeBaseRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetKnowledgeBaseResponse(_message.Message):
    __slots__ = ("knowledgeBase", "yaml")
    KNOWLEDGEBASE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    knowledgeBase: _generated_pb2.KnowledgeBase
    yaml: str
    def __init__(self, knowledgeBase: _Optional[_Union[_generated_pb2.KnowledgeBase, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteKnowledgeBaseRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteKnowledgeBaseResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class RefreshKnowledgeBaseRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class RefreshKnowledgeBaseResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
