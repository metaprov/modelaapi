from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AttachmentCreateResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class AttachmentResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateAttachmentRequest(_message.Message):
    __slots__ = ["attachment"]
    ATTACHMENT_FIELD_NUMBER: _ClassVar[int]
    attachment: _generated_pb2.Attachment
    def __init__(self, attachment: _Optional[_Union[_generated_pb2.Attachment, _Mapping]] = ...) -> None: ...

class CreateAttachmentResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteAttachmentRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteAttachmentResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetAttachmentNamespacesRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAttachmentNamespacesResponse(_message.Message):
    __slots__ = ["namespaces"]
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    namespaces: _containers.RepeatedCompositeFieldContainer[_common_pb2.NamespaceInfo]
    def __init__(self, namespaces: _Optional[_Iterable[_Union[_common_pb2.NamespaceInfo, _Mapping]]] = ...) -> None: ...

class GetAttachmentRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAttachmentResponse(_message.Message):
    __slots__ = ["attachment", "yaml"]
    ATTACHMENT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    attachment: _generated_pb2.Attachment
    yaml: str
    def __init__(self, attachment: _Optional[_Union[_generated_pb2.Attachment, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListAttachmentsRequest(_message.Message):
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

class ListAttachmentsResponse(_message.Message):
    __slots__ = ["attachments", "next_page_token"]
    ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    attachments: _generated_pb2.AttachmentList
    next_page_token: str
    def __init__(self, attachments: _Optional[_Union[_generated_pb2.AttachmentList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateAttachmentRequest(_message.Message):
    __slots__ = ["attachment", "field_mask"]
    ATTACHMENT_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    attachment: _generated_pb2.Attachment
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, attachment: _Optional[_Union[_generated_pb2.Attachment, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateAttachmentResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
