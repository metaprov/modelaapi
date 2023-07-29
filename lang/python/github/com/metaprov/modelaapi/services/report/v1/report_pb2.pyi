from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateReportRequest(_message.Message):
    __slots__ = ["report"]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    report: _generated_pb2.Report
    def __init__(self, report: _Optional[_Union[_generated_pb2.Report, _Mapping]] = ...) -> None: ...

class CreateReportResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteReportRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteReportResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DownloadReportRequest(_message.Message):
    __slots__ = ["group", "name", "namespace"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    group: str
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., group: _Optional[str] = ...) -> None: ...

class DownloadReportResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class GetReportRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetReportResponse(_message.Message):
    __slots__ = ["report", "yaml"]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    report: _generated_pb2.Report
    yaml: str
    def __init__(self, report: _Optional[_Union[_generated_pb2.Report, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListReportsRequest(_message.Message):
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

class ListReportsResponse(_message.Message):
    __slots__ = ["next_page_token", "reports"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    REPORTS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    reports: _generated_pb2.ReportList
    def __init__(self, reports: _Optional[_Union[_generated_pb2.ReportList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateReportRequest(_message.Message):
    __slots__ = ["field_mask", "report"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    report: _generated_pb2.Report
    def __init__(self, report: _Optional[_Union[_generated_pb2.Report, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateReportResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
