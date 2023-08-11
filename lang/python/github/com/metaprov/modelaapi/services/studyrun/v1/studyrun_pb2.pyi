from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AbortStudyRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class AbortStudyRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CompleteStudyRunSearchRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class CompleteStudyRunSearchResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CreateStudyRunRequest(_message.Message):
    __slots__ = ["studyRun"]
    STUDYRUN_FIELD_NUMBER: _ClassVar[int]
    studyRun: _generated_pb2.StudyRun
    def __init__(self, studyRun: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ...) -> None: ...

class CreateStudyRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DeleteStudyRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteStudyRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetStudyRunProfileRequest(_message.Message):
    __slots__ = ["models", "name", "namespace"]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    models: int
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., models: _Optional[int] = ...) -> None: ...

class GetStudyRunProfileResponse(_message.Message):
    __slots__ = ["modelsProfile", "profile"]
    MODELSPROFILE_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    modelsProfile: _containers.RepeatedCompositeFieldContainer[_common_pb2.ModelProfile]
    profile: _common_pb2.StudyProfile
    def __init__(self, profile: _Optional[_Union[_common_pb2.StudyProfile, _Mapping]] = ..., modelsProfile: _Optional[_Iterable[_Union[_common_pb2.ModelProfile, _Mapping]]] = ...) -> None: ...

class GetStudyRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetStudyRunResponse(_message.Message):
    __slots__ = ["studyRun", "yaml"]
    STUDYRUN_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    studyRun: _generated_pb2.StudyRun
    yaml: str
    def __init__(self, studyRun: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class ListStudyRunRequest(_message.Message):
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

class ListStudyRunResponse(_message.Message):
    __slots__ = ["next_page_token", "studyRuns"]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    STUDYRUNS_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    studyRuns: _generated_pb2.StudyRunList
    def __init__(self, studyRuns: _Optional[_Union[_generated_pb2.StudyRunList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class PauseStudyRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class PauseStudyRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ResumeStudyRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ResumeStudyRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class UpdateStudyRunRequest(_message.Message):
    __slots__ = ["field_mask", "studyRun"]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    STUDYRUN_FIELD_NUMBER: _ClassVar[int]
    field_mask: _field_mask_pb2.FieldMask
    studyRun: _generated_pb2.StudyRun
    def __init__(self, studyRun: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateStudyRunResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
