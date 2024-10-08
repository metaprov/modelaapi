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

class ListStudyRequest(_message.Message):
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

class ListStudyResponse(_message.Message):
    __slots__ = ("studies", "next_page_token")
    STUDIES_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    studies: _generated_pb2.StudyList
    next_page_token: str
    def __init__(self, studies: _Optional[_Union[_generated_pb2.StudyList, _Mapping]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class GetStudyRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetStudyResponse(_message.Message):
    __slots__ = ("study", "yaml")
    STUDY_FIELD_NUMBER: _ClassVar[int]
    YAML_FIELD_NUMBER: _ClassVar[int]
    study: _generated_pb2.Study
    yaml: str
    def __init__(self, study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., yaml: _Optional[str] = ...) -> None: ...

class GetStudyRunReferenceRequest(_message.Message):
    __slots__ = ("namespace", "run")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    run: _generated_pb2_1.StudyRunReference
    def __init__(self, namespace: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2_1.StudyRunReference, _Mapping]] = ...) -> None: ...

class GetStudyRunReferenceResponse(_message.Message):
    __slots__ = ("run",)
    RUN_FIELD_NUMBER: _ClassVar[int]
    run: _generated_pb2.StudyRun
    def __init__(self, run: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ...) -> None: ...

class DeleteStudyRequest(_message.Message):
    __slots__ = ("namespace", "name")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteStudyResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CreateStudyRequest(_message.Message):
    __slots__ = ("study",)
    STUDY_FIELD_NUMBER: _ClassVar[int]
    study: _generated_pb2.Study
    def __init__(self, study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ...) -> None: ...

class CreateStudyResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UpdateStudyRequest(_message.Message):
    __slots__ = ("study", "field_mask")
    STUDY_FIELD_NUMBER: _ClassVar[int]
    FIELD_MASK_FIELD_NUMBER: _ClassVar[int]
    study: _generated_pb2.Study
    field_mask: _field_mask_pb2.FieldMask
    def __init__(self, study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., field_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UpdateStudyResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetStudyProfileRequest(_message.Message):
    __slots__ = ("namespace", "run", "models")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    run: _generated_pb2_1.StudyRunReference
    models: int
    def __init__(self, namespace: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2_1.StudyRunReference, _Mapping]] = ..., models: _Optional[int] = ...) -> None: ...

class GetStudyProfileResponse(_message.Message):
    __slots__ = ("profile", "modelsProfile")
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    MODELSPROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: _common_pb2.StudyProfile
    modelsProfile: _containers.RepeatedCompositeFieldContainer[_common_pb2.ModelProfile]
    def __init__(self, profile: _Optional[_Union[_common_pb2.StudyProfile, _Mapping]] = ..., modelsProfile: _Optional[_Iterable[_Union[_common_pb2.ModelProfile, _Mapping]]] = ...) -> None: ...

class AbortStudyRequest(_message.Message):
    __slots__ = ("namespace", "run")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    run: _generated_pb2_1.StudyRunReference
    def __init__(self, namespace: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2_1.StudyRunReference, _Mapping]] = ...) -> None: ...

class AbortStudyResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PauseStudyRequest(_message.Message):
    __slots__ = ("namespace", "run")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    run: _generated_pb2_1.StudyRunReference
    def __init__(self, namespace: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2_1.StudyRunReference, _Mapping]] = ...) -> None: ...

class PauseStudyResponse(_message.Message):
    __slots__ = ("version",)
    VERSION_FIELD_NUMBER: _ClassVar[int]
    version: int
    def __init__(self, version: _Optional[int] = ...) -> None: ...

class ResumeStudyRequest(_message.Message):
    __slots__ = ("namespace", "run")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    run: _generated_pb2_1.StudyRunReference
    def __init__(self, namespace: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2_1.StudyRunReference, _Mapping]] = ...) -> None: ...

class ResumeStudyResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CompleteStudySearchRequest(_message.Message):
    __slots__ = ("namespace", "run")
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    run: _generated_pb2_1.StudyRunReference
    def __init__(self, namespace: _Optional[str] = ..., run: _Optional[_Union[_generated_pb2_1.StudyRunReference, _Mapping]] = ...) -> None: ...

class CompleteStudySearchResponse(_message.Message):
    __slots__ = ("version",)
    VERSION_FIELD_NUMBER: _ClassVar[int]
    version: int
    def __init__(self, version: _Optional[int] = ...) -> None: ...
