from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CompareDatasetSnapshotsRequest(_message.Message):
    __slots__ = ["names", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    names: _containers.RepeatedScalarFieldContainer[str]
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ...) -> None: ...

class CompareDatasetSnapshotsResponse(_message.Message):
    __slots__ = ["names", "namespace", "profiles"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    PROFILES_FIELD_NUMBER: _ClassVar[int]
    names: _containers.RepeatedScalarFieldContainer[str]
    namespace: str
    profiles: _containers.RepeatedCompositeFieldContainer[_common_pb2.DatasetProfile]
    def __init__(self, namespace: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ..., profiles: _Optional[_Iterable[_Union[_common_pb2.DatasetProfile, _Mapping]]] = ...) -> None: ...

class CreateDatasetSnapshotRequest(_message.Message):
    __slots__ = ["datasetSnapshot"]
    DATASETSNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    datasetSnapshot: _generated_pb2.DatasetSnapshot
    def __init__(self, datasetSnapshot: _Optional[_Union[_generated_pb2.DatasetSnapshot, _Mapping]] = ...) -> None: ...

class CreateDatasetSnapshotResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteDatasetSnapshotRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDatasetSnapshotResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DownloadDatasetSnapshotRequest(_message.Message):
    __slots__ = ["convert", "groups", "name", "namespace"]
    CONVERT_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    convert: bool
    groups: _containers.RepeatedScalarFieldContainer[str]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., groups: _Optional[_Iterable[str]] = ..., convert: bool = ...) -> None: ...

class DownloadDatasetSnapshotResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class GetDatasetSnapshotAnomaliesRequest(_message.Message):
    __slots__ = ["groups", "name", "namespace"]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    groups: _containers.RepeatedScalarFieldContainer[str]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., groups: _Optional[_Iterable[str]] = ...) -> None: ...

class GetDatasetSnapshotAnomaliesResponse(_message.Message):
    __slots__ = ["table"]
    TABLE_FIELD_NUMBER: _ClassVar[int]
    table: _common_pb2.TableView
    def __init__(self, table: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class GetDatasetSnapshotProfileRequest(_message.Message):
    __slots__ = ["groups", "name", "namespace"]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    groups: _containers.RepeatedScalarFieldContainer[str]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., groups: _Optional[_Iterable[str]] = ...) -> None: ...

class GetDatasetSnapshotProfileResponse(_message.Message):
    __slots__ = ["profile"]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: _common_pb2.DatasetProfile
    def __init__(self, profile: _Optional[_Union[_common_pb2.DatasetProfile, _Mapping]] = ...) -> None: ...

class GetDatasetSnapshotRequest(_message.Message):
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

class GetDatasetSnapshotResponse(_message.Message):
    __slots__ = ["datasetSnapshot", "yaml"]
    DATASETSNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    datasetSnapshot: _generated_pb2.DatasetSnapshot
    yaml: str
    def __init__(self, datasetSnapshot: _Optional[_Union[_generated_pb2.DatasetSnapshot, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListDatasetSnapshotsRequest(_message.Message):
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

class ListDatasetSnapshotsResponse(_message.Message):
    __slots__ = ["datasetSnapshots", "next_page_token"]
    DATASETSNAPSHOTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    datasetSnapshots: _generated_pb2.DatasetSnapshotList
    next_page_token: str
    def __init__(self, datasetSnapshots: _Optional[_Union[_generated_pb2.DatasetSnapshotList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateDatasetSnapshotRequest(_message.Message):
    __slots__ = ["datasetSnapshot", "field_mask"]
    DATASETSNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    datasetSnapshot: _generated_pb2.DatasetSnapshot
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, datasetSnapshot: _Optional[_Union[_generated_pb2.DatasetSnapshot, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDatasetSnapshotResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
