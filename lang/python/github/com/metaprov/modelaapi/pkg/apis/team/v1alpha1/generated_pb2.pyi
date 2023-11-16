from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CheckListItem(_message.Message):
    __slots__ = ["id", "instruction", "enabled", "condition", "command", "precondition", "postcondition"]
    ID_FIELD_NUMBER: _ClassVar[int]
    INSTRUCTION_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    CONDITION_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    PRECONDITION_FIELD_NUMBER: _ClassVar[int]
    POSTCONDITION_FIELD_NUMBER: _ClassVar[int]
    id: str
    instruction: str
    enabled: bool
    condition: str
    command: str
    precondition: str
    postcondition: str
    def __init__(self, id: _Optional[str] = ..., instruction: _Optional[str] = ..., enabled: bool = ..., condition: _Optional[str] = ..., command: _Optional[str] = ..., precondition: _Optional[str] = ..., postcondition: _Optional[str] = ...) -> None: ...

class Comment(_message.Message):
    __slots__ = ["id", "authorRef", "replyTo", "content", "postedAt", "sent", "pinned", "replyIndicationID", "imageURL", "accountMentionID"]
    ID_FIELD_NUMBER: _ClassVar[int]
    AUTHORREF_FIELD_NUMBER: _ClassVar[int]
    REPLYTO_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    POSTEDAT_FIELD_NUMBER: _ClassVar[int]
    SENT_FIELD_NUMBER: _ClassVar[int]
    PINNED_FIELD_NUMBER: _ClassVar[int]
    REPLYINDICATIONID_FIELD_NUMBER: _ClassVar[int]
    IMAGEURL_FIELD_NUMBER: _ClassVar[int]
    ACCOUNTMENTIONID_FIELD_NUMBER: _ClassVar[int]
    id: str
    authorRef: _generated_pb2.ObjectReference
    replyTo: str
    content: str
    postedAt: _generated_pb2_1.Time
    sent: bool
    pinned: bool
    replyIndicationID: str
    imageURL: str
    accountMentionID: str
    def __init__(self, id: _Optional[str] = ..., authorRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., replyTo: _Optional[str] = ..., content: _Optional[str] = ..., postedAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., sent: bool = ..., pinned: bool = ..., replyIndicationID: _Optional[str] = ..., imageURL: _Optional[str] = ..., accountMentionID: _Optional[str] = ...) -> None: ...

class PostMortem(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: PostMortemSpec
    status: PostMortemStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PostMortemSpec, _Mapping]] = ..., status: _Optional[_Union[PostMortemStatus, _Mapping]] = ...) -> None: ...

class PostMortemCondition(_message.Message):
    __slots__ = ["type", "status", "lastTransitionTime", "reason", "message"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: str
    status: str
    lastTransitionTime: _generated_pb2_1.Time
    reason: str
    message: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class PostMortemList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[PostMortem]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PostMortem, _Mapping]]] = ...) -> None: ...

class PostMortemSpec(_message.Message):
    __slots__ = ["description", "entityRef", "locationRef", "handledBy", "alerts", "timeline", "rootCause", "summary", "owner", "tenantRef", "startTime", "detectionTime", "endTime", "imageURL"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    LOCATIONREF_FIELD_NUMBER: _ClassVar[int]
    HANDLEDBY_FIELD_NUMBER: _ClassVar[int]
    ALERTS_FIELD_NUMBER: _ClassVar[int]
    TIMELINE_FIELD_NUMBER: _ClassVar[int]
    ROOTCAUSE_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    STARTTIME_FIELD_NUMBER: _ClassVar[int]
    DETECTIONTIME_FIELD_NUMBER: _ClassVar[int]
    ENDTIME_FIELD_NUMBER: _ClassVar[int]
    IMAGEURL_FIELD_NUMBER: _ClassVar[int]
    description: str
    entityRef: _generated_pb2.ObjectReference
    locationRef: _generated_pb2.ObjectReference
    handledBy: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ObjectReference]
    alerts: _containers.RepeatedCompositeFieldContainer[RaisedAlert]
    timeline: _containers.RepeatedCompositeFieldContainer[TimeLineEvent]
    rootCause: str
    summary: str
    owner: str
    tenantRef: _generated_pb2.ObjectReference
    startTime: _generated_pb2_1.Time
    detectionTime: _generated_pb2_1.Time
    endTime: _generated_pb2_1.Time
    imageURL: str
    def __init__(self, description: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., locationRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., handledBy: _Optional[_Iterable[_Union[_generated_pb2.ObjectReference, _Mapping]]] = ..., alerts: _Optional[_Iterable[_Union[RaisedAlert, _Mapping]]] = ..., timeline: _Optional[_Iterable[_Union[TimeLineEvent, _Mapping]]] = ..., rootCause: _Optional[str] = ..., summary: _Optional[str] = ..., owner: _Optional[str] = ..., tenantRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., startTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., detectionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., endTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., imageURL: _Optional[str] = ...) -> None: ...

class PostMortemStatus(_message.Message):
    __slots__ = ["observedGeneration", "lastUpdated", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTUPDATED_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    lastUpdated: _generated_pb2_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[PostMortemCondition]
    def __init__(self, observedGeneration: _Optional[int] = ..., lastUpdated: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[PostMortemCondition, _Mapping]]] = ...) -> None: ...

class RaisedAlert(_message.Message):
    __slots__ = ["name", "at"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    AT_FIELD_NUMBER: _ClassVar[int]
    name: str
    at: _generated_pb2_1.Time
    def __init__(self, name: _Optional[str] = ..., at: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ...) -> None: ...

class Review(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: ReviewSpec
    status: ReviewStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ReviewSpec, _Mapping]] = ..., status: _Optional[_Union[ReviewStatus, _Mapping]] = ...) -> None: ...

class ReviewCondition(_message.Message):
    __slots__ = ["type", "status", "lastTransitionTime", "reason", "message"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: str
    status: str
    lastTransitionTime: _generated_pb2_1.Time
    reason: str
    message: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class ReviewList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Review]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Review, _Mapping]]] = ...) -> None: ...

class ReviewSpec(_message.Message):
    __slots__ = ["entityRef", "messages", "owner", "notifierName", "tenantRef"]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    MESSAGES_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    NOTIFIERNAME_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    entityRef: _generated_pb2.ObjectReference
    messages: _containers.RepeatedCompositeFieldContainer[Comment]
    owner: str
    notifierName: str
    tenantRef: _generated_pb2.ObjectReference
    def __init__(self, entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., messages: _Optional[_Iterable[_Union[Comment, _Mapping]]] = ..., owner: _Optional[str] = ..., notifierName: _Optional[str] = ..., tenantRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ...) -> None: ...

class ReviewStatus(_message.Message):
    __slots__ = ["lastUpdated", "observedGeneration", "conditions"]
    LASTUPDATED_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    lastUpdated: _generated_pb2_1.Time
    observedGeneration: int
    conditions: _containers.RepeatedCompositeFieldContainer[ReviewCondition]
    def __init__(self, lastUpdated: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[ReviewCondition, _Mapping]]] = ...) -> None: ...

class RunBook(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: RunBookSpec
    status: RunBookStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[RunBookSpec, _Mapping]] = ..., status: _Optional[_Union[RunBookStatus, _Mapping]] = ...) -> None: ...

class RunBookCondition(_message.Message):
    __slots__ = ["type", "status", "lastUpdateTime", "lastTransitionTime", "reason", "message"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LASTUPDATETIME_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: str
    status: str
    lastUpdateTime: _generated_pb2_1.Time
    lastTransitionTime: _generated_pb2_1.Time
    reason: str
    message: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastUpdateTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class RunBookList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[RunBook]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[RunBook, _Mapping]]] = ...) -> None: ...

class RunBookSpec(_message.Message):
    __slots__ = ["description", "entityRef", "authorRef", "checklist", "owner", "tenantRef"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    AUTHORREF_FIELD_NUMBER: _ClassVar[int]
    CHECKLIST_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    description: str
    entityRef: _generated_pb2.ObjectReference
    authorRef: _generated_pb2.ObjectReference
    checklist: _containers.RepeatedCompositeFieldContainer[CheckListItem]
    owner: str
    tenantRef: _generated_pb2.ObjectReference
    def __init__(self, description: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., authorRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., checklist: _Optional[_Iterable[_Union[CheckListItem, _Mapping]]] = ..., owner: _Optional[str] = ..., tenantRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ...) -> None: ...

class RunBookStatus(_message.Message):
    __slots__ = ["observedGeneration", "lastUpdated", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTUPDATED_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    lastUpdated: _generated_pb2_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[RunBookCondition]
    def __init__(self, observedGeneration: _Optional[int] = ..., lastUpdated: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[RunBookCondition, _Mapping]]] = ...) -> None: ...

class TaskSpec(_message.Message):
    __slots__ = ["id", "description", "assignedTo", "dueDate", "reminder", "parentTask"]
    ID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ASSIGNEDTO_FIELD_NUMBER: _ClassVar[int]
    DUEDATE_FIELD_NUMBER: _ClassVar[int]
    REMINDER_FIELD_NUMBER: _ClassVar[int]
    PARENTTASK_FIELD_NUMBER: _ClassVar[int]
    id: str
    description: str
    assignedTo: str
    dueDate: _generated_pb2_1.Time
    reminder: _generated_pb2_1.Time
    parentTask: str
    def __init__(self, id: _Optional[str] = ..., description: _Optional[str] = ..., assignedTo: _Optional[str] = ..., dueDate: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reminder: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., parentTask: _Optional[str] = ...) -> None: ...

class TimeLineEvent(_message.Message):
    __slots__ = ["content", "at"]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    AT_FIELD_NUMBER: _ClassVar[int]
    content: str
    at: _generated_pb2_1.Time
    def __init__(self, content: _Optional[str] = ..., at: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ...) -> None: ...

class Todo(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: TodoSpec
    status: TodoStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[TodoSpec, _Mapping]] = ..., status: _Optional[_Union[TodoStatus, _Mapping]] = ...) -> None: ...

class TodoCondition(_message.Message):
    __slots__ = ["type", "status", "lastTransitionTime", "reason", "message"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    type: str
    status: str
    lastTransitionTime: _generated_pb2_1.Time
    reason: str
    message: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class TodoList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Todo]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Todo, _Mapping]]] = ...) -> None: ...

class TodoSpec(_message.Message):
    __slots__ = ["description", "tasks", "entityRef", "notifierName", "flagged", "tenantRef"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TASKS_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    NOTIFIERNAME_FIELD_NUMBER: _ClassVar[int]
    FLAGGED_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    description: str
    tasks: _containers.RepeatedCompositeFieldContainer[TaskSpec]
    entityRef: _generated_pb2.ObjectReference
    notifierName: str
    flagged: bool
    tenantRef: _generated_pb2.ObjectReference
    def __init__(self, description: _Optional[str] = ..., tasks: _Optional[_Iterable[_Union[TaskSpec, _Mapping]]] = ..., entityRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ..., notifierName: _Optional[str] = ..., flagged: bool = ..., tenantRef: _Optional[_Union[_generated_pb2.ObjectReference, _Mapping]] = ...) -> None: ...

class TodoStatus(_message.Message):
    __slots__ = ["observedGeneration", "lastUpdated", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    LASTUPDATED_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    lastUpdated: _generated_pb2_1.Time
    conditions: _containers.RepeatedCompositeFieldContainer[TodoCondition]
    def __init__(self, observedGeneration: _Optional[int] = ..., lastUpdated: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[TodoCondition, _Mapping]]] = ...) -> None: ...
