from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.llm.v1alpha1 import generated_pb2 as _generated_pb2_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RefreshRequest(_message.Message):
    __slots__ = ("tenant", "product", "knowledgeBase")
    TENANT_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    KNOWLEDGEBASE_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    product: _generated_pb2.DataProduct
    knowledgeBase: _generated_pb2_1.KnowledgeBase
    def __init__(self, tenant: _Optional[str] = ..., product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., knowledgeBase: _Optional[_Union[_generated_pb2_1.KnowledgeBase, _Mapping]] = ...) -> None: ...

class DocumentStatusUpdate(_message.Message):
    __slots__ = ("delete", "name", "error", "status")
    DELETE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    delete: bool
    name: str
    error: str
    status: _generated_pb2_1.DocumentStatus
    def __init__(self, delete: bool = ..., name: _Optional[str] = ..., error: _Optional[str] = ..., status: _Optional[_Union[_generated_pb2_1.DocumentStatus, _Mapping]] = ...) -> None: ...

class RefreshResponse(_message.Message):
    __slots__ = ("statuses",)
    STATUSES_FIELD_NUMBER: _ClassVar[int]
    statuses: _containers.RepeatedCompositeFieldContainer[DocumentStatusUpdate]
    def __init__(self, statuses: _Optional[_Iterable[_Union[DocumentStatusUpdate, _Mapping]]] = ...) -> None: ...

class DeleteRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ShutdownRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
