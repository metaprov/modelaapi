from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListReportsRequest(_message.Message):
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

class ListReportsResponse(_message.Message):
    __slots__ = ("reports", "next_page_token")
    REPORTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    reports: _generated_pb2.ReportList
    next_page_token: str
    def __init__(self, reports: _Optional[_Union[_generated_pb2.ReportList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateReportRequest(_message.Message):
    __slots__ = ("report",)
    REPORT_FIELD_NUMBER: _ClassVar[int]
    report: _generated_pb2.Report
    def __init__(self, report: _Optional[_Union[_generated_pb2.Report, _Mapping]] = ...) -> None: ...

class CreateReportResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateReportRequest(_message.Message):
    __slots__ = ("report", "field_mask")
    REPORT_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    report: _generated_pb2.Report
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, report: _Optional[_Union[_generated_pb2.Report, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateReportResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetReportRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetReportResponse(_message.Message):
    __slots__ = ("report", "yaml")
    REPORT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    report: _generated_pb2.Report
    yaml: str
    def __init__(self, report: _Optional[_Union[_generated_pb2.Report, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteReportRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteReportResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DownloadReportRequest(_message.Message):
    __slots__ = ("namespace", "name", "group")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    group: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., group: _Optional[str] = ...) -> None: ...

class DownloadReportResponse(_message.Message):
    __slots__ = ("raw",)
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...
