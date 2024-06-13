from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListAPIKeyGroupsRequest(_message.Message):
    __slots__ = ("namespace", "labels")
    class LabelsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListAPIKeyGroupsResponse(_message.Message):
    __slots__ = ("apiKeyGroups", "next_page_token")
    APIKEYGROUPS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    apiKeyGroups: _generated_pb2.APIKeyGroupList
    next_page_token: str
    def __init__(self, apiKeyGroups: _Optional[_Union[_generated_pb2.APIKeyGroupList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class CreateAPIKeyGroupRequest(_message.Message):
    __slots__ = ("apiKeyGroup",)
    APIKEYGROUP_FIELD_NUMBER: _ClassVar[int]
    apiKeyGroup: _generated_pb2.APIKeyGroup
    def __init__(self, apiKeyGroup: _Optional[_Union[_generated_pb2.APIKeyGroup, _Mapping]] = ...) -> None: ...

class CreateAPIKeyGroupResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateAPIKeyGroupRequest(_message.Message):
    __slots__ = ("apiKeyGroup", "field_mask")
    APIKEYGROUP_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    apiKeyGroup: _generated_pb2.APIKeyGroup
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, apiKeyGroup: _Optional[_Union[_generated_pb2.APIKeyGroup, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateAPIKeyGroupResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetAPIKeyGroupRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAPIKeyGroupResponse(_message.Message):
    __slots__ = ("apiKeyGroup", "yaml")
    APIKEYGROUP_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    apiKeyGroup: _generated_pb2.APIKeyGroup
    yaml: str
    def __init__(self, apiKeyGroup: _Optional[_Union[_generated_pb2.APIKeyGroup, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class DeleteAPIKeyGroupRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteAPIKeyGroupResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GenerateAPIKeyRequest(_message.Message):
    __slots__ = ("namespace", "name", "keyName")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    KEYNAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    keyName: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., keyName: _Optional[str] = ...) -> None: ...

class GenerateAPIKeyResponse(_message.Message):
    __slots__ = ("apiKey",)
    APIKEY_FIELD_NUMBER: _ClassVar[int]
    apiKey: str
    def __init__(self, apiKey: _Optional[str] = ...) -> None: ...
