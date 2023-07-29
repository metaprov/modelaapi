from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateVirtualBucketRequest(_message.Message):
    __slots__ = ["virtualbucket"]
    VIRTUALBUCKET_FIELD_NUMBER: _ClassVar[int]
    virtualbucket: _generated_pb2.VirtualBucket
    def __init__(self, virtualbucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ...) -> None: ...

class CreateVirtualBucketResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteVirtualBucketRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteVirtualBucketResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetVirtualBucketRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetVirtualBucketResponse(_message.Message):
    __slots__ = ["virtualbucket", "yaml"]
    VIRTUALBUCKET_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    virtualbucket: _generated_pb2.VirtualBucket
    yaml: str
    def __init__(self, virtualbucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListVirtualBucketsRequest(_message.Message):
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

class ListVirtualBucketsResponse(_message.Message):
    __slots__ = ["next_page_token", "virtualbuckets"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    VIRTUALBUCKETS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    virtualbuckets: _generated_pb2.VirtualBucketList
    def __init__(self, virtualbuckets: _Optional[_Union[_generated_pb2.VirtualBucketList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateVirtualBucketRequest(_message.Message):
    __slots__ = ["field_mask", "virtualbucket"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    VIRTUALBUCKET_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    virtualbucket: _generated_pb2.VirtualBucket
    def __init__(self, virtualbucket: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateVirtualBucketResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
