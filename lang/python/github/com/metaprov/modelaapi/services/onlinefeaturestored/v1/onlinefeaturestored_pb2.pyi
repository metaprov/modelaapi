from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Value(_message.Message):
    __slots__ = ("int64", "double", "string", "bool", "unix_milli", "bytes")
    INT64_FIELD_NUMBER: _ClassVar[int]
    DOUBLE_FIELD_NUMBER: _ClassVar[int]
    STRING_FIELD_NUMBER: _ClassVar[int]
    BOOL_FIELD_NUMBER: _ClassVar[int]
    UNIX_MILLI_FIELD_NUMBER: _ClassVar[int]
    BYTES_FIELD_NUMBER: _ClassVar[int]
    int64: int
    double: float
    string: str
    bool: bool
    unix_milli: int
    bytes: bytes
    def __init__(self, int64: _Optional[int] = ..., double: _Optional[float] = ..., string: _Optional[str] = ..., bool: bool = ..., unix_milli: _Optional[int] = ..., bytes: _Optional[bytes] = ...) -> None: ...

class OnlineGetRequest(_message.Message):
    __slots__ = ("namespace", "rows")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    rows: _containers.RepeatedCompositeFieldContainer[GetRow]
    def __init__(self, namespace: _Optional[str] = ..., rows: _Optional[_Iterable[_Union[GetRow, _Mapping]]] = ...) -> None: ...

class FGFields(_message.Message):
    __slots__ = ("key", "keyvalue", "features")
    KEY_FIELD_NUMBER: _ClassVar[int]
    KEYVALUE_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    key: str
    keyvalue: str
    features: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, key: _Optional[str] = ..., keyvalue: _Optional[str] = ..., features: _Optional[_Iterable[str]] = ...) -> None: ...

class GetRow(_message.Message):
    __slots__ = ("groups",)
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    groups: _containers.RepeatedCompositeFieldContainer[FGFields]
    def __init__(self, groups: _Optional[_Iterable[_Union[FGFields, _Mapping]]] = ...) -> None: ...

class GetRowResult(_message.Message):
    __slots__ = ("keyname", "key", "values")
    class ValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Value, _Mapping]] = ...) -> None: ...
    KEYNAME_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    keyname: str
    key: str
    values: _containers.MessageMap[str, Value]
    def __init__(self, keyname: _Optional[str] = ..., key: _Optional[str] = ..., values: _Optional[_Mapping[str, Value]] = ...) -> None: ...

class OnlineGetResponse(_message.Message):
    __slots__ = ("rows",)
    ROWS_FIELD_NUMBER: _ClassVar[int]
    rows: _containers.RepeatedCompositeFieldContainer[GetRowResult]
    def __init__(self, rows: _Optional[_Iterable[_Union[GetRowResult, _Mapping]]] = ...) -> None: ...

class Row(_message.Message):
    __slots__ = ("keyname", "key", "field", "value")
    KEYNAME_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    FIELD_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    keyname: str
    key: str
    field: str
    value: str
    def __init__(self, keyname: _Optional[str] = ..., key: _Optional[str] = ..., field: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class PushRequest(_message.Message):
    __slots__ = ("namespace", "rows")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    rows: _containers.RepeatedCompositeFieldContainer[Row]
    def __init__(self, namespace: _Optional[str] = ..., rows: _Optional[_Iterable[_Union[Row, _Mapping]]] = ...) -> None: ...

class PushResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
