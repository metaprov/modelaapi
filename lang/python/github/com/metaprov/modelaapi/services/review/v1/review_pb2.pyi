from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1 import generated_pb2 as _generated_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateReviewRequest(_message.Message):
    __slots__ = ["review"]
    REVIEW_FIELD_NUMBER: _ClassVar[int]
    review: _generated_pb2.Review
    def __init__(self, review: _Optional[_Union[_generated_pb2.Review, _Mapping]] = ...) -> None: ...

class CreateReviewResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteReviewRequest(_message.Message):
    __slots__ = ["labels", "name", "namespace"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class DeleteReviewResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetReviewRequest(_message.Message):
    __slots__ = ["labels", "name", "namespace"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetReviewResponse(_message.Message):
    __slots__ = ["review", "yaml"]
    REVIEW_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    review: _generated_pb2.Review
    yaml: str
    def __init__(self, review: _Optional[_Union[_generated_pb2.Review, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListReviewRequest(_message.Message):
    __slots__ = ["labels", "namespace", "page_size", "page_token"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListReviewResponse(_message.Message):
    __slots__ = ["next_page_token", "reviewes"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    REVIEWES_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    reviewes: _generated_pb2.ReviewList
    def __init__(self, reviewes: _Optional[_Union[_generated_pb2.ReviewList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateReviewRequest(_message.Message):
    __slots__ = ["field_mask", "review"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    REVIEW_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    review: _generated_pb2.Review
    def __init__(self, review: _Optional[_Union[_generated_pb2.Review, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateReviewResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
