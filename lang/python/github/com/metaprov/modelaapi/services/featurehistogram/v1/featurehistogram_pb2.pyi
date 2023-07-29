from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateFeatureHistogramRequest(_message.Message):
    __slots__ = ["histogram", "next_page_token"]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    histogram: _generated_pb2.FeatureHistogram
    next_page_token: str
    def __init__(self, histogram: _Optional[_Union[_generated_pb2.FeatureHistogram, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateFeatureHistogramResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteFeatureHistogramRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteFeatureHistogramResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetFeatureHistogramRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetFeatureHistogramResponse(_message.Message):
    __slots__ = ["histogram", "yaml"]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    histogram: _generated_pb2.FeatureHistogram
    yaml: str
    def __init__(self, histogram: _Optional[_Union[_generated_pb2.FeatureHistogram, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListFeatureHistogramsRequest(_message.Message):
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

class ListFeatureHistogramsResponse(_message.Message):
    __slots__ = ["histograms", "next_page_token"]
    HISTOGRAMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    histograms: _generated_pb2.FeatureHistogramList
    next_page_token: str
    def __init__(self, histograms: _Optional[_Union[_generated_pb2.FeatureHistogramList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateFeatureHistogramRequest(_message.Message):
    __slots__ = ["field_mask", "histogram"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    histogram: _generated_pb2.FeatureHistogram
    def __init__(self, histogram: _Optional[_Union[_generated_pb2.FeatureHistogram, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateFeatureHistogramResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
