from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListAlertsRequest(_message.Message):
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

class ListAlertsResponse(_message.Message):
    __slots__ = ("alerts", "next_page_token")
    ALERTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    alerts: _generated_pb2.AlertList
    next_page_token: str
    def __init__(self, alerts: _Optional[_Union[_generated_pb2.AlertList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class AlertResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CreateAlertRequest(_message.Message):
    __slots__ = ("alert",)
    ALERT_FIELD_NUMBER: _ClassVar[int]
    alert: _generated_pb2.Alert
    def __init__(self, alert: _Optional[_Union[_generated_pb2.Alert, _Mapping]] = ...) -> None: ...

class CreateAlertResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateAlertRequest(_message.Message):
    __slots__ = ("alert", "update_mask")
    ALERT_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    alert: _generated_pb2.Alert
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, alert: _Optional[_Union[_generated_pb2.Alert, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateAlertResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetAlertRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAlertResponse(_message.Message):
    __slots__ = ("alert", "yaml")
    ALERT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    alert: _generated_pb2.Alert
    yaml: str
    def __init__(self, alert: _Optional[_Union[_generated_pb2.Alert, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class GetAlertNamespacesRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAlertNamespacesResponse(_message.Message):
    __slots__ = ("namespaces",)
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    namespaces: _containers.RepeatedCompositeFieldContainer[_common_pb2.NamespaceInfo]
    def __init__(self, namespaces: _Optional[_Iterable[_Union[_common_pb2.NamespaceInfo, _Mapping]]] = ...) -> None: ...

class DeleteAlertRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteAlertResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
