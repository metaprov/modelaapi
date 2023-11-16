from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListLicensesRequest(_message.Message):
    __slots__ = ["namespace", "labels", "page_size", "page_token", "order_by"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
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

class ListLicensesResponse(_message.Message):
    __slots__ = ["licences", "next_page_token"]
    LICENCES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    licences: _generated_pb2.LicenseList
    next_page_token: str
    def __init__(self, licences: _Optional[_Union[_generated_pb2.LicenseList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class LicenseResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateLicenseRequest(_message.Message):
    __slots__ = ["license"]
    LICENSE_FIELD_NUMBER: _ClassVar[int]
    license: _generated_pb2.License
    def __init__(self, license: _Optional[_Union[_generated_pb2.License, _Mapping]] = ...) -> None: ...

class CreateLicenseFromKeyRequest(_message.Message):
    __slots__ = ["key", "tenant"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    key: str
    tenant: str
    def __init__(self, key: _Optional[str] = ..., tenant: _Optional[str] = ...) -> None: ...

class CreateLicenseResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateLicenseRequest(_message.Message):
    __slots__ = ["license", "field_mask"]
    LICENSE_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    license: _generated_pb2.License
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, license: _Optional[_Union[_generated_pb2.License, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateLicenseResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetLicenseRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLicenseResponse(_message.Message):
    __slots__ = ["license", "yaml"]
    LICENSE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    license: _generated_pb2.License
    yaml: str
    def __init__(self, license: _Optional[_Union[_generated_pb2.License, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class GetLicenseNamespacesRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLicenseNamespacesResponse(_message.Message):
    __slots__ = ["namespaces"]
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    namespaces: _containers.RepeatedCompositeFieldContainer[_common_pb2.NamespaceInfo]
    def __init__(self, namespaces: _Optional[_Iterable[_Union[_common_pb2.NamespaceInfo, _Mapping]]] = ...) -> None: ...

class DeleteLicenseRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteLicenseResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
