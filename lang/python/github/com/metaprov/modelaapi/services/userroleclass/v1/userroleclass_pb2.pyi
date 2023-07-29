from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateUserRoleClassRequest(_message.Message):
    __slots__ = ["role"]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    role: _generated_pb2.UserRoleClass
    def __init__(self, role: _Optional[_Union[_generated_pb2.UserRoleClass, _Mapping]] = ...) -> None: ...

class CreateUserRoleClassResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteUserRoleClassRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteUserRoleClassResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetUserRoleClassRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetUserRoleClassResponse(_message.Message):
    __slots__ = ["role", "yaml"]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    role: _generated_pb2.UserRoleClass
    yaml: str
    def __init__(self, role: _Optional[_Union[_generated_pb2.UserRoleClass, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListUserRoleClassesRequest(_message.Message):
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

class ListUserRoleClassesResponse(_message.Message):
    __slots__ = ["next_page_token", "roles"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    roles: _generated_pb2.UserRoleClassList
    def __init__(self, roles: _Optional[_Union[_generated_pb2.UserRoleClassList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateUserRoleClassRequest(_message.Message):
    __slots__ = ["role", "update_mask"]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    role: _generated_pb2.UserRoleClass
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, role: _Optional[_Union[_generated_pb2.UserRoleClass, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateUserRoleClassResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UserRoleClassCreateResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UserRoleClassLoginRequest(_message.Message):
    __slots__ = ["name", "namespace", "password"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    password: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class UserRoleClassLoginResponse(_message.Message):
    __slots__ = ["token"]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: str
    def __init__(self, token: _Optional[str] = ...) -> None: ...

class UserRoleClassResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
