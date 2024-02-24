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

class ListDataProductsRequest(_message.Message):
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

class ListDataProductsResponse(_message.Message):
    __slots__ = ("dataproducts", "next_page_token")
    DATAPRODUCTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    dataproducts: _generated_pb2_1.DataProductList
    next_page_token: str
    def __init__(self, dataproducts: _Optional[_Union[_generated_pb2_1.DataProductList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateDataProductRequest(_message.Message):
    __slots__ = ("dataproduct",)
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2_1.DataProduct
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ...) -> None: ...

class CreateDataProductResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateDataProductRequest(_message.Message):
    __slots__ = ("dataproduct", "field_mask")
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2_1.DataProduct
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateDataProductResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetDataProductRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataProductResponse(_message.Message):
    __slots__ = ("dataproduct", "alerts", "datasets", "studies", "models", "predictors", "yaml")
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    ALERTS_FIELD_NUMBER: _ClassVar[int]
    DATASETS_FIELD_NUMBER: _ClassVar[int]
    STUDIES_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    PREDICTORS_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2_1.DataProduct
    alerts: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Alert]
    datasets: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Dataset]
    studies: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Study]
    models: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Model]
    predictors: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Predictor]
    yaml: str
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., alerts: _Optional[_Iterable[_Union[_generated_pb2.Alert, _Mapping]]] = ..., datasets: _Optional[_Iterable[_Union[_generated_pb2_1.Dataset, _Mapping]]] = ..., studies: _Optional[_Iterable[_Union[_generated_pb2_1_1.Study, _Mapping]]] = ..., models: _Optional[_Iterable[_Union[_generated_pb2_1_1.Model, _Mapping]]] = ..., predictors: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Predictor, _Mapping]]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteDataProductRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataProductResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
