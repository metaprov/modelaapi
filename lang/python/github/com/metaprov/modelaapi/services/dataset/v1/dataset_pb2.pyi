from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateDatasetRequest(_message.Message):
    __slots__ = ["dataset"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    dataset: _generated_pb2.Dataset
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class CreateDatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteDatasetRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DownloadDatasetRequest(_message.Message):
    __slots__ = ["name", "namespace", "runVersion"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    runVersion: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., runVersion: _Optional[int] = ...) -> None: ...

class DownloadDatasetResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class GetDatasetAnomaliesRequest(_message.Message):
    __slots__ = ["name", "namespace", "runVersion"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    runVersion: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., runVersion: _Optional[int] = ...) -> None: ...

class GetDatasetAnomaliesResponse(_message.Message):
    __slots__ = ["table"]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    table: _common_pb2.TableView
    def __init__(self, table: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class GetDatasetProfileRequest(_message.Message):
    __slots__ = ["name", "namespace", "runVersion"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    runVersion: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., runVersion: _Optional[int] = ...) -> None: ...

class GetDatasetProfileResponse(_message.Message):
    __slots__ = ["name", "namespace", "runVersion"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RUNVERSION_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    runVersion: int
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., runVersion: _Optional[int] = ...) -> None: ...

class GetDatasetRequest(_message.Message):
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

class GetDatasetResponse(_message.Message):
    __slots__ = ["dataset", "yaml"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    dataset: _generated_pb2.Dataset
    yaml: str
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListDatasetsRequest(_message.Message):
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

class ListDatasetsResponse(_message.Message):
    __slots__ = ["datasets", "next_page_token"]
    DATASETS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    datasets: _generated_pb2.DatasetList
    next_page_token: str
    def __init__(self, datasets: _Optional[_Union[_generated_pb2.DatasetList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateDatasetRequest(_message.Message):
    __slots__ = ["dataset", "field_mask"]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    dataset: _generated_pb2.Dataset
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
