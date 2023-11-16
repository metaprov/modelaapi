from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.util.intstr import generated_pb2 as _generated_pb2_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ControllerRevision(_message.Message):
    __slots__ = ["metadata", "data", "revision"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    REVISION_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    data: _generated_pb2_1_1.RawExtension
    revision: int
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., data: _Optional[_Union[_generated_pb2_1_1.RawExtension, _Mapping]] = ..., revision: _Optional[int] = ...) -> None: ...

class ControllerRevisionList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[ControllerRevision]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ControllerRevision, _Mapping]]] = ...) -> None: ...

class DaemonSet(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: DaemonSetSpec
    status: DaemonSetStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DaemonSetSpec, _Mapping]] = ..., status: _Optional[_Union[DaemonSetStatus, _Mapping]] = ...) -> None: ...

class DaemonSetCondition(_message.Message):
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

class DaemonSetList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[DaemonSet]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[DaemonSet, _Mapping]]] = ...) -> None: ...

class DaemonSetSpec(_message.Message):
    __slots__ = ["selector", "template", "updateStrategy", "minReadySeconds", "revisionHistoryLimit"]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    UPDATESTRATEGY_FIELD_NUMBER: _ClassVar[int]
    MINREADYSECONDS_FIELD_NUMBER: _ClassVar[int]
    REVISIONHISTORYLIMIT_FIELD_NUMBER: _ClassVar[int]
    selector: _generated_pb2_1.LabelSelector
    template: _generated_pb2.PodTemplateSpec
    updateStrategy: DaemonSetUpdateStrategy
    minReadySeconds: int
    revisionHistoryLimit: int
    def __init__(self, selector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., template: _Optional[_Union[_generated_pb2.PodTemplateSpec, _Mapping]] = ..., updateStrategy: _Optional[_Union[DaemonSetUpdateStrategy, _Mapping]] = ..., minReadySeconds: _Optional[int] = ..., revisionHistoryLimit: _Optional[int] = ...) -> None: ...

class DaemonSetStatus(_message.Message):
    __slots__ = ["currentNumberScheduled", "numberMisscheduled", "desiredNumberScheduled", "numberReady", "observedGeneration", "updatedNumberScheduled", "numberAvailable", "numberUnavailable", "collisionCount", "conditions"]
    CURRENTNUMBERSCHEDULED_FIELD_NUMBER: _ClassVar[int]
    NUMBERMISSCHEDULED_FIELD_NUMBER: _ClassVar[int]
    DESIREDNUMBERSCHEDULED_FIELD_NUMBER: _ClassVar[int]
    NUMBERREADY_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDNUMBERSCHEDULED_FIELD_NUMBER: _ClassVar[int]
    NUMBERAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    NUMBERUNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    COLLISIONCOUNT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    currentNumberScheduled: int
    numberMisscheduled: int
    desiredNumberScheduled: int
    numberReady: int
    observedGeneration: int
    updatedNumberScheduled: int
    numberAvailable: int
    numberUnavailable: int
    collisionCount: int
    conditions: _containers.RepeatedCompositeFieldContainer[DaemonSetCondition]
    def __init__(self, currentNumberScheduled: _Optional[int] = ..., numberMisscheduled: _Optional[int] = ..., desiredNumberScheduled: _Optional[int] = ..., numberReady: _Optional[int] = ..., observedGeneration: _Optional[int] = ..., updatedNumberScheduled: _Optional[int] = ..., numberAvailable: _Optional[int] = ..., numberUnavailable: _Optional[int] = ..., collisionCount: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[DaemonSetCondition, _Mapping]]] = ...) -> None: ...

class DaemonSetUpdateStrategy(_message.Message):
    __slots__ = ["type", "rollingUpdate"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ROLLINGUPDATE_FIELD_NUMBER: _ClassVar[int]
    type: str
    rollingUpdate: RollingUpdateDaemonSet
    def __init__(self, type: _Optional[str] = ..., rollingUpdate: _Optional[_Union[RollingUpdateDaemonSet, _Mapping]] = ...) -> None: ...

class Deployment(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: DeploymentSpec
    status: DeploymentStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[DeploymentSpec, _Mapping]] = ..., status: _Optional[_Union[DeploymentStatus, _Mapping]] = ...) -> None: ...

class DeploymentCondition(_message.Message):
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

class DeploymentList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Deployment]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Deployment, _Mapping]]] = ...) -> None: ...

class DeploymentSpec(_message.Message):
    __slots__ = ["replicas", "selector", "template", "strategy", "minReadySeconds", "revisionHistoryLimit", "paused", "progressDeadlineSeconds"]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    STRATEGY_FIELD_NUMBER: _ClassVar[int]
    MINREADYSECONDS_FIELD_NUMBER: _ClassVar[int]
    REVISIONHISTORYLIMIT_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    PROGRESSDEADLINESECONDS_FIELD_NUMBER: _ClassVar[int]
    replicas: int
    selector: _generated_pb2_1.LabelSelector
    template: _generated_pb2.PodTemplateSpec
    strategy: DeploymentStrategy
    minReadySeconds: int
    revisionHistoryLimit: int
    paused: bool
    progressDeadlineSeconds: int
    def __init__(self, replicas: _Optional[int] = ..., selector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., template: _Optional[_Union[_generated_pb2.PodTemplateSpec, _Mapping]] = ..., strategy: _Optional[_Union[DeploymentStrategy, _Mapping]] = ..., minReadySeconds: _Optional[int] = ..., revisionHistoryLimit: _Optional[int] = ..., paused: bool = ..., progressDeadlineSeconds: _Optional[int] = ...) -> None: ...

class DeploymentStatus(_message.Message):
    __slots__ = ["observedGeneration", "replicas", "updatedReplicas", "readyReplicas", "availableReplicas", "unavailableReplicas", "conditions", "collisionCount"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDREPLICAS_FIELD_NUMBER: _ClassVar[int]
    READYREPLICAS_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEREPLICAS_FIELD_NUMBER: _ClassVar[int]
    UNAVAILABLEREPLICAS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    COLLISIONCOUNT_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    replicas: int
    updatedReplicas: int
    readyReplicas: int
    availableReplicas: int
    unavailableReplicas: int
    conditions: _containers.RepeatedCompositeFieldContainer[DeploymentCondition]
    collisionCount: int
    def __init__(self, observedGeneration: _Optional[int] = ..., replicas: _Optional[int] = ..., updatedReplicas: _Optional[int] = ..., readyReplicas: _Optional[int] = ..., availableReplicas: _Optional[int] = ..., unavailableReplicas: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[DeploymentCondition, _Mapping]]] = ..., collisionCount: _Optional[int] = ...) -> None: ...

class DeploymentStrategy(_message.Message):
    __slots__ = ["type", "rollingUpdate"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ROLLINGUPDATE_FIELD_NUMBER: _ClassVar[int]
    type: str
    rollingUpdate: RollingUpdateDeployment
    def __init__(self, type: _Optional[str] = ..., rollingUpdate: _Optional[_Union[RollingUpdateDeployment, _Mapping]] = ...) -> None: ...

class ReplicaSet(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: ReplicaSetSpec
    status: ReplicaSetStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ReplicaSetSpec, _Mapping]] = ..., status: _Optional[_Union[ReplicaSetStatus, _Mapping]] = ...) -> None: ...

class ReplicaSetCondition(_message.Message):
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

class ReplicaSetList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[ReplicaSet]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ReplicaSet, _Mapping]]] = ...) -> None: ...

class ReplicaSetSpec(_message.Message):
    __slots__ = ["replicas", "minReadySeconds", "selector", "template"]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    MINREADYSECONDS_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    replicas: int
    minReadySeconds: int
    selector: _generated_pb2_1.LabelSelector
    template: _generated_pb2.PodTemplateSpec
    def __init__(self, replicas: _Optional[int] = ..., minReadySeconds: _Optional[int] = ..., selector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., template: _Optional[_Union[_generated_pb2.PodTemplateSpec, _Mapping]] = ...) -> None: ...

class ReplicaSetStatus(_message.Message):
    __slots__ = ["replicas", "fullyLabeledReplicas", "readyReplicas", "availableReplicas", "observedGeneration", "conditions"]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    FULLYLABELEDREPLICAS_FIELD_NUMBER: _ClassVar[int]
    READYREPLICAS_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEREPLICAS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    replicas: int
    fullyLabeledReplicas: int
    readyReplicas: int
    availableReplicas: int
    observedGeneration: int
    conditions: _containers.RepeatedCompositeFieldContainer[ReplicaSetCondition]
    def __init__(self, replicas: _Optional[int] = ..., fullyLabeledReplicas: _Optional[int] = ..., readyReplicas: _Optional[int] = ..., availableReplicas: _Optional[int] = ..., observedGeneration: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[ReplicaSetCondition, _Mapping]]] = ...) -> None: ...

class RollingUpdateDaemonSet(_message.Message):
    __slots__ = ["maxUnavailable", "maxSurge"]
    MAXUNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    MAXSURGE_FIELD_NUMBER: _ClassVar[int]
    maxUnavailable: _generated_pb2_1_1_1_1.IntOrString
    maxSurge: _generated_pb2_1_1_1_1.IntOrString
    def __init__(self, maxUnavailable: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ..., maxSurge: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ...) -> None: ...

class RollingUpdateDeployment(_message.Message):
    __slots__ = ["maxUnavailable", "maxSurge"]
    MAXUNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    MAXSURGE_FIELD_NUMBER: _ClassVar[int]
    maxUnavailable: _generated_pb2_1_1_1_1.IntOrString
    maxSurge: _generated_pb2_1_1_1_1.IntOrString
    def __init__(self, maxUnavailable: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ..., maxSurge: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ...) -> None: ...

class RollingUpdateStatefulSetStrategy(_message.Message):
    __slots__ = ["partition", "maxUnavailable"]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    MAXUNAVAILABLE_FIELD_NUMBER: _ClassVar[int]
    partition: int
    maxUnavailable: _generated_pb2_1_1_1_1.IntOrString
    def __init__(self, partition: _Optional[int] = ..., maxUnavailable: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ...) -> None: ...

class StatefulSet(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: StatefulSetSpec
    status: StatefulSetStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[StatefulSetSpec, _Mapping]] = ..., status: _Optional[_Union[StatefulSetStatus, _Mapping]] = ...) -> None: ...

class StatefulSetCondition(_message.Message):
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

class StatefulSetList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[StatefulSet]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[StatefulSet, _Mapping]]] = ...) -> None: ...

class StatefulSetPersistentVolumeClaimRetentionPolicy(_message.Message):
    __slots__ = ["whenDeleted", "whenScaled"]
    WHENDELETED_FIELD_NUMBER: _ClassVar[int]
    WHENSCALED_FIELD_NUMBER: _ClassVar[int]
    whenDeleted: str
    whenScaled: str
    def __init__(self, whenDeleted: _Optional[str] = ..., whenScaled: _Optional[str] = ...) -> None: ...

class StatefulSetSpec(_message.Message):
    __slots__ = ["replicas", "selector", "template", "volumeClaimTemplates", "serviceName", "podManagementPolicy", "updateStrategy", "revisionHistoryLimit", "minReadySeconds", "persistentVolumeClaimRetentionPolicy"]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    VOLUMECLAIMTEMPLATES_FIELD_NUMBER: _ClassVar[int]
    SERVICENAME_FIELD_NUMBER: _ClassVar[int]
    PODMANAGEMENTPOLICY_FIELD_NUMBER: _ClassVar[int]
    UPDATESTRATEGY_FIELD_NUMBER: _ClassVar[int]
    REVISIONHISTORYLIMIT_FIELD_NUMBER: _ClassVar[int]
    MINREADYSECONDS_FIELD_NUMBER: _ClassVar[int]
    PERSISTENTVOLUMECLAIMRETENTIONPOLICY_FIELD_NUMBER: _ClassVar[int]
    replicas: int
    selector: _generated_pb2_1.LabelSelector
    template: _generated_pb2.PodTemplateSpec
    volumeClaimTemplates: _containers.RepeatedCompositeFieldContainer[_generated_pb2.PersistentVolumeClaim]
    serviceName: str
    podManagementPolicy: str
    updateStrategy: StatefulSetUpdateStrategy
    revisionHistoryLimit: int
    minReadySeconds: int
    persistentVolumeClaimRetentionPolicy: StatefulSetPersistentVolumeClaimRetentionPolicy
    def __init__(self, replicas: _Optional[int] = ..., selector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., template: _Optional[_Union[_generated_pb2.PodTemplateSpec, _Mapping]] = ..., volumeClaimTemplates: _Optional[_Iterable[_Union[_generated_pb2.PersistentVolumeClaim, _Mapping]]] = ..., serviceName: _Optional[str] = ..., podManagementPolicy: _Optional[str] = ..., updateStrategy: _Optional[_Union[StatefulSetUpdateStrategy, _Mapping]] = ..., revisionHistoryLimit: _Optional[int] = ..., minReadySeconds: _Optional[int] = ..., persistentVolumeClaimRetentionPolicy: _Optional[_Union[StatefulSetPersistentVolumeClaimRetentionPolicy, _Mapping]] = ...) -> None: ...

class StatefulSetStatus(_message.Message):
    __slots__ = ["observedGeneration", "replicas", "readyReplicas", "currentReplicas", "updatedReplicas", "currentRevision", "updateRevision", "collisionCount", "conditions", "availableReplicas"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    READYREPLICAS_FIELD_NUMBER: _ClassVar[int]
    CURRENTREPLICAS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDREPLICAS_FIELD_NUMBER: _ClassVar[int]
    CURRENTREVISION_FIELD_NUMBER: _ClassVar[int]
    UPDATEREVISION_FIELD_NUMBER: _ClassVar[int]
    COLLISIONCOUNT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEREPLICAS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    replicas: int
    readyReplicas: int
    currentReplicas: int
    updatedReplicas: int
    currentRevision: str
    updateRevision: str
    collisionCount: int
    conditions: _containers.RepeatedCompositeFieldContainer[StatefulSetCondition]
    availableReplicas: int
    def __init__(self, observedGeneration: _Optional[int] = ..., replicas: _Optional[int] = ..., readyReplicas: _Optional[int] = ..., currentReplicas: _Optional[int] = ..., updatedReplicas: _Optional[int] = ..., currentRevision: _Optional[str] = ..., updateRevision: _Optional[str] = ..., collisionCount: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[StatefulSetCondition, _Mapping]]] = ..., availableReplicas: _Optional[int] = ...) -> None: ...

class StatefulSetUpdateStrategy(_message.Message):
    __slots__ = ["type", "rollingUpdate"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ROLLINGUPDATE_FIELD_NUMBER: _ClassVar[int]
    type: str
    rollingUpdate: RollingUpdateStatefulSetStrategy
    def __init__(self, type: _Optional[str] = ..., rollingUpdate: _Optional[_Union[RollingUpdateStatefulSetStrategy, _Mapping]] = ...) -> None: ...
