from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class IntOrString(_message.Message):
    __slots__ = ["intVal", "strVal", "type"]
    INTVAL_FIELD_NUMBER: _ClassVar[int]
    STRVAL_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    intVal: int
    strVal: str
    type: int
    def __init__(self, type: _Optional[int] = ..., intVal: _Optional[int] = ..., strVal: _Optional[str] = ...) -> None: ...
