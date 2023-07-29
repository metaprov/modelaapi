from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class APIGroup(_message.Message):
    __slots__ = ["name", "preferredVersion", "serverAddressByClientCIDRs", "versions"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PREFERREDVERSION_FIELD_NUMBER: _ClassVar[int]
    SERVERADDRESSBYCLIENTCIDRS_FIELD_NUMBER: _ClassVar[int]
    VERSIONS_FIELD_NUMBER: _ClassVar[int]
    name: str
    preferredVersion: GroupVersionForDiscovery
    serverAddressByClientCIDRs: _containers.RepeatedCompositeFieldContainer[ServerAddressByClientCIDR]
    versions: _containers.RepeatedCompositeFieldContainer[GroupVersionForDiscovery]
    def __init__(self, name: _Optional[str] = ..., versions: _Optional[_Iterable[_Union[GroupVersionForDiscovery, _Mapping]]] = ..., preferredVersion: _Optional[_Union[GroupVersionForDiscovery, _Mapping]] = ..., serverAddressByClientCIDRs: _Optional[_Iterable[_Union[ServerAddressByClientCIDR, _Mapping]]] = ...) -> None: ...

class APIGroupList(_message.Message):
    __slots__ = ["groups"]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    groups: _containers.RepeatedCompositeFieldContainer[APIGroup]
    def __init__(self, groups: _Optional[_Iterable[_Union[APIGroup, _Mapping]]] = ...) -> None: ...

class APIResource(_message.Message):
    __slots__ = ["categories", "group", "kind", "name", "namespaced", "shortNames", "singularName", "storageVersionHash", "verbs", "version"]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAMESPACED_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SHORTNAMES_FIELD_NUMBER: _ClassVar[int]
    SINGULARNAME_FIELD_NUMBER: _ClassVar[int]
    STORAGEVERSIONHASH_FIELD_NUMBER: _ClassVar[int]
    VERBS_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    categories: _containers.RepeatedScalarFieldContainer[str]
    group: str
    kind: str
    name: str
    namespaced: bool
    shortNames: _containers.RepeatedScalarFieldContainer[str]
    singularName: str
    storageVersionHash: str
    verbs: Verbs
    version: str
    def __init__(self, name: _Optional[str] = ..., singularName: _Optional[str] = ..., namespaced: bool = ..., group: _Optional[str] = ..., version: _Optional[str] = ..., kind: _Optional[str] = ..., verbs: _Optional[_Union[Verbs, _Mapping]] = ..., shortNames: _Optional[_Iterable[str]] = ..., categories: _Optional[_Iterable[str]] = ..., storageVersionHash: _Optional[str] = ...) -> None: ...

class APIResourceList(_message.Message):
    __slots__ = ["groupVersion", "resources"]
    GROUPVERSION_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    groupVersion: str
    resources: _containers.RepeatedCompositeFieldContainer[APIResource]
    def __init__(self, groupVersion: _Optional[str] = ..., resources: _Optional[_Iterable[_Union[APIResource, _Mapping]]] = ...) -> None: ...

class APIVersions(_message.Message):
    __slots__ = ["serverAddressByClientCIDRs", "versions"]
    SERVERADDRESSBYCLIENTCIDRS_FIELD_NUMBER: _ClassVar[int]
    VERSIONS_FIELD_NUMBER: _ClassVar[int]
    serverAddressByClientCIDRs: _containers.RepeatedCompositeFieldContainer[ServerAddressByClientCIDR]
    versions: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, versions: _Optional[_Iterable[str]] = ..., serverAddressByClientCIDRs: _Optional[_Iterable[_Union[ServerAddressByClientCIDR, _Mapping]]] = ...) -> None: ...

class ApplyOptions(_message.Message):
    __slots__ = ["dryRun", "fieldManager", "force"]
    DRYRUN_FIELD_NUMBER: _ClassVar[int]
    FIELDMANAGER_FIELD_NUMBER: _ClassVar[int]
    FORCE_FIELD_NUMBER: _ClassVar[int]
    dryRun: _containers.RepeatedScalarFieldContainer[str]
    fieldManager: str
    force: bool
    def __init__(self, dryRun: _Optional[_Iterable[str]] = ..., force: bool = ..., fieldManager: _Optional[str] = ...) -> None: ...

class Condition(_message.Message):
    __slots__ = ["lastTransitionTime", "message", "observedGeneration", "reason", "status", "type"]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastTransitionTime: Time
    message: str
    observedGeneration: int
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., observedGeneration: _Optional[int] = ..., lastTransitionTime: _Optional[_Union[Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class CreateOptions(_message.Message):
    __slots__ = ["dryRun", "fieldManager", "fieldValidation"]
    DRYRUN_FIELD_NUMBER: _ClassVar[int]
    FIELDMANAGER_FIELD_NUMBER: _ClassVar[int]
    FIELDVALIDATION_FIELD_NUMBER: _ClassVar[int]
    dryRun: _containers.RepeatedScalarFieldContainer[str]
    fieldManager: str
    fieldValidation: str
    def __init__(self, dryRun: _Optional[_Iterable[str]] = ..., fieldManager: _Optional[str] = ..., fieldValidation: _Optional[str] = ...) -> None: ...

class DeleteOptions(_message.Message):
    __slots__ = ["dryRun", "gracePeriodSeconds", "orphanDependents", "preconditions", "propagationPolicy"]
    DRYRUN_FIELD_NUMBER: _ClassVar[int]
    GRACEPERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    ORPHANDEPENDENTS_FIELD_NUMBER: _ClassVar[int]
    PRECONDITIONS_FIELD_NUMBER: _ClassVar[int]
    PROPAGATIONPOLICY_FIELD_NUMBER: _ClassVar[int]
    dryRun: _containers.RepeatedScalarFieldContainer[str]
    gracePeriodSeconds: int
    orphanDependents: bool
    preconditions: Preconditions
    propagationPolicy: str
    def __init__(self, gracePeriodSeconds: _Optional[int] = ..., preconditions: _Optional[_Union[Preconditions, _Mapping]] = ..., orphanDependents: bool = ..., propagationPolicy: _Optional[str] = ..., dryRun: _Optional[_Iterable[str]] = ...) -> None: ...

class Duration(_message.Message):
    __slots__ = ["duration"]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    duration: int
    def __init__(self, duration: _Optional[int] = ...) -> None: ...

class FieldsV1(_message.Message):
    __slots__ = ["Raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    Raw: bytes
    def __init__(self, Raw: _Optional[bytes] = ...) -> None: ...

class GetOptions(_message.Message):
    __slots__ = ["resourceVersion"]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    resourceVersion: str
    def __init__(self, resourceVersion: _Optional[str] = ...) -> None: ...

class GroupKind(_message.Message):
    __slots__ = ["group", "kind"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    group: str
    kind: str
    def __init__(self, group: _Optional[str] = ..., kind: _Optional[str] = ...) -> None: ...

class GroupResource(_message.Message):
    __slots__ = ["group", "resource"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    RESOURCE_FIELD_NUMBER: _ClassVar[int]
    group: str
    resource: str
    def __init__(self, group: _Optional[str] = ..., resource: _Optional[str] = ...) -> None: ...

class GroupVersion(_message.Message):
    __slots__ = ["group", "version"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    group: str
    version: str
    def __init__(self, group: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class GroupVersionForDiscovery(_message.Message):
    __slots__ = ["groupVersion", "version"]
    GROUPVERSION_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    groupVersion: str
    version: str
    def __init__(self, groupVersion: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class GroupVersionKind(_message.Message):
    __slots__ = ["group", "kind", "version"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    group: str
    kind: str
    version: str
    def __init__(self, group: _Optional[str] = ..., version: _Optional[str] = ..., kind: _Optional[str] = ...) -> None: ...

class GroupVersionResource(_message.Message):
    __slots__ = ["group", "resource", "version"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    RESOURCE_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    group: str
    resource: str
    version: str
    def __init__(self, group: _Optional[str] = ..., version: _Optional[str] = ..., resource: _Optional[str] = ...) -> None: ...

class LabelSelector(_message.Message):
    __slots__ = ["matchExpressions", "matchLabels"]
    class MatchLabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    MATCHEXPRESSIONS_FIELD_NUMBER: _ClassVar[int]
    MATCHLABELS_FIELD_NUMBER: _ClassVar[int]
    matchExpressions: _containers.RepeatedCompositeFieldContainer[LabelSelectorRequirement]
    matchLabels: _containers.ScalarMap[str, str]
    def __init__(self, matchLabels: _Optional[_Mapping[str, str]] = ..., matchExpressions: _Optional[_Iterable[_Union[LabelSelectorRequirement, _Mapping]]] = ...) -> None: ...

class LabelSelectorRequirement(_message.Message):
    __slots__ = ["key", "operator", "values"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    key: str
    operator: str
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, key: _Optional[str] = ..., operator: _Optional[str] = ..., values: _Optional[_Iterable[str]] = ...) -> None: ...

class List(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.RawExtension]
    metadata: ListMeta
    def __init__(self, metadata: _Optional[_Union[ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[_generated_pb2.RawExtension, _Mapping]]] = ...) -> None: ...

class ListMeta(_message.Message):
    __slots__ = ["remainingItemCount", "resourceVersion", "selfLink"]
    CONTINUE_FIELD_NUMBER: _ClassVar[int]
    REMAININGITEMCOUNT_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    SELFLINK_FIELD_NUMBER: _ClassVar[int]
    remainingItemCount: int
    resourceVersion: str
    selfLink: str
    def __init__(self, selfLink: _Optional[str] = ..., resourceVersion: _Optional[str] = ..., remainingItemCount: _Optional[int] = ..., **kwargs) -> None: ...

class ListOptions(_message.Message):
    __slots__ = ["allowWatchBookmarks", "fieldSelector", "labelSelector", "limit", "resourceVersion", "resourceVersionMatch", "timeoutSeconds", "watch"]
    ALLOWWATCHBOOKMARKS_FIELD_NUMBER: _ClassVar[int]
    CONTINUE_FIELD_NUMBER: _ClassVar[int]
    FIELDSELECTOR_FIELD_NUMBER: _ClassVar[int]
    LABELSELECTOR_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSIONMATCH_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    TIMEOUTSECONDS_FIELD_NUMBER: _ClassVar[int]
    WATCH_FIELD_NUMBER: _ClassVar[int]
    allowWatchBookmarks: bool
    fieldSelector: str
    labelSelector: str
    limit: int
    resourceVersion: str
    resourceVersionMatch: str
    timeoutSeconds: int
    watch: bool
    def __init__(self, labelSelector: _Optional[str] = ..., fieldSelector: _Optional[str] = ..., watch: bool = ..., allowWatchBookmarks: bool = ..., resourceVersion: _Optional[str] = ..., resourceVersionMatch: _Optional[str] = ..., timeoutSeconds: _Optional[int] = ..., limit: _Optional[int] = ..., **kwargs) -> None: ...

class ManagedFieldsEntry(_message.Message):
    __slots__ = ["apiVersion", "fieldsType", "fieldsV1", "manager", "operation", "subresource", "time"]
    APIVERSION_FIELD_NUMBER: _ClassVar[int]
    FIELDSTYPE_FIELD_NUMBER: _ClassVar[int]
    FIELDSV1_FIELD_NUMBER: _ClassVar[int]
    MANAGER_FIELD_NUMBER: _ClassVar[int]
    OPERATION_FIELD_NUMBER: _ClassVar[int]
    SUBRESOURCE_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    apiVersion: str
    fieldsType: str
    fieldsV1: FieldsV1
    manager: str
    operation: str
    subresource: str
    time: Time
    def __init__(self, manager: _Optional[str] = ..., operation: _Optional[str] = ..., apiVersion: _Optional[str] = ..., time: _Optional[_Union[Time, _Mapping]] = ..., fieldsType: _Optional[str] = ..., fieldsV1: _Optional[_Union[FieldsV1, _Mapping]] = ..., subresource: _Optional[str] = ...) -> None: ...

class MicroTime(_message.Message):
    __slots__ = ["nanos", "seconds"]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    nanos: int
    seconds: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class ObjectMeta(_message.Message):
    __slots__ = ["annotations", "clusterName", "creationTimestamp", "deletionGracePeriodSeconds", "deletionTimestamp", "finalizers", "generateName", "generation", "labels", "managedFields", "name", "namespace", "ownerReferences", "resourceVersion", "selfLink", "uid"]
    class AnnotationsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ANNOTATIONS_FIELD_NUMBER: _ClassVar[int]
    CLUSTERNAME_FIELD_NUMBER: _ClassVar[int]
    CREATIONTIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    DELETIONGRACEPERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    DELETIONTIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    FINALIZERS_FIELD_NUMBER: _ClassVar[int]
    GENERATENAME_FIELD_NUMBER: _ClassVar[int]
    GENERATION_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    MANAGEDFIELDS_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    OWNERREFERENCES_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    SELFLINK_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    annotations: _containers.ScalarMap[str, str]
    clusterName: str
    creationTimestamp: Time
    deletionGracePeriodSeconds: int
    deletionTimestamp: Time
    finalizers: _containers.RepeatedScalarFieldContainer[str]
    generateName: str
    generation: int
    labels: _containers.ScalarMap[str, str]
    managedFields: _containers.RepeatedCompositeFieldContainer[ManagedFieldsEntry]
    name: str
    namespace: str
    ownerReferences: _containers.RepeatedCompositeFieldContainer[OwnerReference]
    resourceVersion: str
    selfLink: str
    uid: str
    def __init__(self, name: _Optional[str] = ..., generateName: _Optional[str] = ..., namespace: _Optional[str] = ..., selfLink: _Optional[str] = ..., uid: _Optional[str] = ..., resourceVersion: _Optional[str] = ..., generation: _Optional[int] = ..., creationTimestamp: _Optional[_Union[Time, _Mapping]] = ..., deletionTimestamp: _Optional[_Union[Time, _Mapping]] = ..., deletionGracePeriodSeconds: _Optional[int] = ..., labels: _Optional[_Mapping[str, str]] = ..., annotations: _Optional[_Mapping[str, str]] = ..., ownerReferences: _Optional[_Iterable[_Union[OwnerReference, _Mapping]]] = ..., finalizers: _Optional[_Iterable[str]] = ..., clusterName: _Optional[str] = ..., managedFields: _Optional[_Iterable[_Union[ManagedFieldsEntry, _Mapping]]] = ...) -> None: ...

class OwnerReference(_message.Message):
    __slots__ = ["apiVersion", "blockOwnerDeletion", "controller", "kind", "name", "uid"]
    APIVERSION_FIELD_NUMBER: _ClassVar[int]
    BLOCKOWNERDELETION_FIELD_NUMBER: _ClassVar[int]
    CONTROLLER_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    apiVersion: str
    blockOwnerDeletion: bool
    controller: bool
    kind: str
    name: str
    uid: str
    def __init__(self, apiVersion: _Optional[str] = ..., kind: _Optional[str] = ..., name: _Optional[str] = ..., uid: _Optional[str] = ..., controller: bool = ..., blockOwnerDeletion: bool = ...) -> None: ...

class PartialObjectMetadata(_message.Message):
    __slots__ = ["metadata"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    metadata: ObjectMeta
    def __init__(self, metadata: _Optional[_Union[ObjectMeta, _Mapping]] = ...) -> None: ...

class PartialObjectMetadataList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PartialObjectMetadata]
    metadata: ListMeta
    def __init__(self, metadata: _Optional[_Union[ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PartialObjectMetadata, _Mapping]]] = ...) -> None: ...

class Patch(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PatchOptions(_message.Message):
    __slots__ = ["dryRun", "fieldManager", "fieldValidation", "force"]
    DRYRUN_FIELD_NUMBER: _ClassVar[int]
    FIELDMANAGER_FIELD_NUMBER: _ClassVar[int]
    FIELDVALIDATION_FIELD_NUMBER: _ClassVar[int]
    FORCE_FIELD_NUMBER: _ClassVar[int]
    dryRun: _containers.RepeatedScalarFieldContainer[str]
    fieldManager: str
    fieldValidation: str
    force: bool
    def __init__(self, dryRun: _Optional[_Iterable[str]] = ..., force: bool = ..., fieldManager: _Optional[str] = ..., fieldValidation: _Optional[str] = ...) -> None: ...

class Preconditions(_message.Message):
    __slots__ = ["resourceVersion", "uid"]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    resourceVersion: str
    uid: str
    def __init__(self, uid: _Optional[str] = ..., resourceVersion: _Optional[str] = ...) -> None: ...

class RootPaths(_message.Message):
    __slots__ = ["paths"]
    PATHS_FIELD_NUMBER: _ClassVar[int]
    paths: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, paths: _Optional[_Iterable[str]] = ...) -> None: ...

class ServerAddressByClientCIDR(_message.Message):
    __slots__ = ["clientCIDR", "serverAddress"]
    CLIENTCIDR_FIELD_NUMBER: _ClassVar[int]
    SERVERADDRESS_FIELD_NUMBER: _ClassVar[int]
    clientCIDR: str
    serverAddress: str
    def __init__(self, clientCIDR: _Optional[str] = ..., serverAddress: _Optional[str] = ...) -> None: ...

class Status(_message.Message):
    __slots__ = ["code", "details", "message", "metadata", "reason", "status"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    code: int
    details: StatusDetails
    message: str
    metadata: ListMeta
    reason: str
    status: str
    def __init__(self, metadata: _Optional[_Union[ListMeta, _Mapping]] = ..., status: _Optional[str] = ..., message: _Optional[str] = ..., reason: _Optional[str] = ..., details: _Optional[_Union[StatusDetails, _Mapping]] = ..., code: _Optional[int] = ...) -> None: ...

class StatusCause(_message.Message):
    __slots__ = ["field", "message", "reason"]
    FIELD_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    field: str
    message: str
    reason: str
    def __init__(self, reason: _Optional[str] = ..., message: _Optional[str] = ..., field: _Optional[str] = ...) -> None: ...

class StatusDetails(_message.Message):
    __slots__ = ["causes", "group", "kind", "name", "retryAfterSeconds", "uid"]
    CAUSES_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RETRYAFTERSECONDS_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    causes: _containers.RepeatedCompositeFieldContainer[StatusCause]
    group: str
    kind: str
    name: str
    retryAfterSeconds: int
    uid: str
    def __init__(self, name: _Optional[str] = ..., group: _Optional[str] = ..., kind: _Optional[str] = ..., uid: _Optional[str] = ..., causes: _Optional[_Iterable[_Union[StatusCause, _Mapping]]] = ..., retryAfterSeconds: _Optional[int] = ...) -> None: ...

class TableOptions(_message.Message):
    __slots__ = ["includeObject"]
    INCLUDEOBJECT_FIELD_NUMBER: _ClassVar[int]
    includeObject: str
    def __init__(self, includeObject: _Optional[str] = ...) -> None: ...

class Time(_message.Message):
    __slots__ = ["nanos", "seconds"]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    nanos: int
    seconds: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class Timestamp(_message.Message):
    __slots__ = ["nanos", "seconds"]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    nanos: int
    seconds: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class TypeMeta(_message.Message):
    __slots__ = ["apiVersion", "kind"]
    APIVERSION_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    apiVersion: str
    kind: str
    def __init__(self, kind: _Optional[str] = ..., apiVersion: _Optional[str] = ...) -> None: ...

class UpdateOptions(_message.Message):
    __slots__ = ["dryRun", "fieldManager", "fieldValidation"]
    DRYRUN_FIELD_NUMBER: _ClassVar[int]
    FIELDMANAGER_FIELD_NUMBER: _ClassVar[int]
    FIELDVALIDATION_FIELD_NUMBER: _ClassVar[int]
    dryRun: _containers.RepeatedScalarFieldContainer[str]
    fieldManager: str
    fieldValidation: str
    def __init__(self, dryRun: _Optional[_Iterable[str]] = ..., fieldManager: _Optional[str] = ..., fieldValidation: _Optional[str] = ...) -> None: ...

class Verbs(_message.Message):
    __slots__ = ["items"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, items: _Optional[_Iterable[str]] = ...) -> None: ...

class WatchEvent(_message.Message):
    __slots__ = ["object", "type"]
    OBJECT_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    object: _generated_pb2.RawExtension
    type: str
    def __init__(self, type: _Optional[str] = ..., object: _Optional[_Union[_generated_pb2.RawExtension, _Mapping]] = ...) -> None: ...
