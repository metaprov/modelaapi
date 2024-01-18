from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListAccountsRequest(_message.Message):
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

class ListAccountsResponse(_message.Message):
    __slots__ = ("accounts", "next_page_token")
    ACCOUNTS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    accounts: _generated_pb2.AccountList
    next_page_token: str
    def __init__(self, accounts: _Optional[_Union[_generated_pb2.AccountList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class AccountResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CreateAccountRequest(_message.Message):
    __slots__ = ("account", "password")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    account: _generated_pb2.Account
    password: str
    def __init__(self, account: _Optional[_Union[_generated_pb2.Account, _Mapping]] = ..., password: _Optional[str] = ...) -> None: ...

class CreateAccountResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateAccountRequest(_message.Message):
    __slots__ = ("account", "update_mask")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    account: _generated_pb2.Account
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, account: _Optional[_Union[_generated_pb2.Account, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateAccountResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetAccountRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAccountResponse(_message.Message):
    __slots__ = ("account", "yaml")
    ACCOUNT_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    account: _generated_pb2.Account
    yaml: str
    def __init__(self, account: _Optional[_Union[_generated_pb2.Account, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class GetAccountNamespacesRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAccountNamespacesResponse(_message.Message):
    __slots__ = ("namespaces",)
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    namespaces: _containers.RepeatedCompositeFieldContainer[_common_pb2.NamespaceInfo]
    def __init__(self, namespaces: _Optional[_Iterable[_Union[_common_pb2.NamespaceInfo, _Mapping]]] = ...) -> None: ...

class DeleteAccountRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteAccountResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AccountCreateResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ResetPasswordResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class AccountLoginRequest(_message.Message):
    __slots__ = ("namespace", "name", "password")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    password: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class AccountLoginResponse(_message.Message):
    __slots__ = ("token",)
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: str
    def __init__(self, token: _Optional[str] = ...) -> None: ...

class AccountGetByNameRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ChangePasswordRequest(_message.Message):
    __slots__ = ("namespace", "name", "old", "new", "confirmedNew")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    OLD_FIELD_NUMBER: _ClassVar[int]
    NEW_FIELD_NUMBER: _ClassVar[int]
    CONFIRMEDNEW_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    old: str
    new: str
    confirmedNew: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., old: _Optional[str] = ..., new: _Optional[str] = ..., confirmedNew: _Optional[str] = ...) -> None: ...

class ChangePasswordResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ResetPasswordRequest(_message.Message):
    __slots__ = ("namespace", "name", "new", "confirmedNew")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NEW_FIELD_NUMBER: _ClassVar[int]
    CONFIRMEDNEW_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    new: str
    confirmedNew: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., new: _Optional[str] = ..., confirmedNew: _Optional[str] = ...) -> None: ...

class UploadAvatarRequest(_message.Message):
    __slots__ = ("namespace", "name", "bucketName", "avatar")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    BUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    AVATAR_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    bucketName: str
    avatar: bytes
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., bucketName: _Optional[str] = ..., avatar: _Optional[bytes] = ...) -> None: ...

class UploadAvatarResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DownloadAvatarRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DownloadAvatarReponse(_message.Message):
    __slots__ = ("avatar",)
    AVATAR_FIELD_NUMBER: _ClassVar[int]
    avatar: bytes
    def __init__(self, avatar: _Optional[bytes] = ...) -> None: ...
