from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.llm.v1alpha1 import generated_pb2 as _generated_pb2_1
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RefreshRequest(_message.Message):
    __slots__ = ["product", "knowledgeBase"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    KNOWLEDGEBASE_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    knowledgeBase: _generated_pb2_1.KnowledgeBase
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., knowledgeBase: _Optional[_Union[_generated_pb2_1.KnowledgeBase, _Mapping]] = ...) -> None: ...

class RefreshResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
