from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateTenantRequest(_message.Message):
    __slots__ = ["tenant"]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    tenant: _generated_pb2.Tenant
    def __init__(self, tenant: _Optional[_Union[_generated_pb2.Tenant, _Mapping]] = ...) -> None: ...

class CreateTenantResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteTenantRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteTenantResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetTenantRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetTenantResponse(_message.Message):
    __slots__ = ["alerts", "datasets", "models", "predictors", "studies", "tenant", "yaml"]
    ALERTS_FIELD_NUMBER: _ClassVar[int]
    DATASETS_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    PREDICTORS_FIELD_NUMBER: _ClassVar[int]
    STUDIES_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    alerts: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Alert]
    datasets: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Dataset]
    models: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Model]
    predictors: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Predictor]
    studies: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Study]
    tenant: _generated_pb2.Tenant
    yaml: str
    def __init__(self, tenant: _Optional[_Union[_generated_pb2.Tenant, _Mapping]] = ..., alerts: _Optional[_Iterable[_Union[_generated_pb2.Alert, _Mapping]]] = ..., datasets: _Optional[_Iterable[_Union[_generated_pb2_1.Dataset, _Mapping]]] = ..., studies: _Optional[_Iterable[_Union[_generated_pb2_1_1.Study, _Mapping]]] = ..., models: _Optional[_Iterable[_Union[_generated_pb2_1_1.Model, _Mapping]]] = ..., predictors: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Predictor, _Mapping]]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListTenantAlertsRequest(_message.Message):
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

class ListTenantAlertsResponse(_message.Message):
    __slots__ = ["alerts", "next_page_token"]
    ALERTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    alerts: _generated_pb2.AlertList
    next_page_token: str
    def __init__(self, alerts: _Optional[_Union[_generated_pb2.AlertList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListTenantNamesRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListTenantNamesResponse(_message.Message):
    __slots__ = ["names"]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    names: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, names: _Optional[_Iterable[str]] = ...) -> None: ...

class ListTenantsRequest(_message.Message):
    __slots__ = ["labels", "namespace"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    LABELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    labels: _containers.ScalarMap[str, str]
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListTenantsResponse(_message.Message):
    __slots__ = ["next_page_token", "tenants"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    TENANTS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    tenants: _generated_pb2.TenantList
    def __init__(self, tenants: _Optional[_Union[_generated_pb2.TenantList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateTenantRequest(_message.Message):
    __slots__ = ["field_mask", "tenant"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    tenant: _generated_pb2.Tenant
    def __init__(self, tenant: _Optional[_Union[_generated_pb2.Tenant, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateTenantResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
