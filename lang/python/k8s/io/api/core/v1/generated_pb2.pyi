from k8s.io.apimachinery.pkg.api.resource import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.util.intstr import generated_pb2 as _generated_pb2_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AWSElasticBlockStoreVolumeSource(_message.Message):
    __slots__ = ["fsType", "partition", "readOnly", "volumeID"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    VOLUMEID_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    partition: int
    readOnly: bool
    volumeID: str
    def __init__(self, volumeID: _Optional[str] = ..., fsType: _Optional[str] = ..., partition: _Optional[int] = ..., readOnly: bool = ...) -> None: ...

class Affinity(_message.Message):
    __slots__ = ["nodeAffinity", "podAffinity", "podAntiAffinity"]
    NODEAFFINITY_FIELD_NUMBER: _ClassVar[int]
    PODAFFINITY_FIELD_NUMBER: _ClassVar[int]
    PODANTIAFFINITY_FIELD_NUMBER: _ClassVar[int]
    nodeAffinity: NodeAffinity
    podAffinity: PodAffinity
    podAntiAffinity: PodAntiAffinity
    def __init__(self, nodeAffinity: _Optional[_Union[NodeAffinity, _Mapping]] = ..., podAffinity: _Optional[_Union[PodAffinity, _Mapping]] = ..., podAntiAffinity: _Optional[_Union[PodAntiAffinity, _Mapping]] = ...) -> None: ...

class AttachedVolume(_message.Message):
    __slots__ = ["devicePath", "name"]
    DEVICEPATH_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    devicePath: str
    name: str
    def __init__(self, name: _Optional[str] = ..., devicePath: _Optional[str] = ...) -> None: ...

class AvoidPods(_message.Message):
    __slots__ = ["preferAvoidPods"]
    PREFERAVOIDPODS_FIELD_NUMBER: _ClassVar[int]
    preferAvoidPods: _containers.RepeatedCompositeFieldContainer[PreferAvoidPodsEntry]
    def __init__(self, preferAvoidPods: _Optional[_Iterable[_Union[PreferAvoidPodsEntry, _Mapping]]] = ...) -> None: ...

class AzureDiskVolumeSource(_message.Message):
    __slots__ = ["cachingMode", "diskName", "diskURI", "fsType", "kind", "readOnly"]
    CACHINGMODE_FIELD_NUMBER: _ClassVar[int]
    DISKNAME_FIELD_NUMBER: _ClassVar[int]
    DISKURI_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    cachingMode: str
    diskName: str
    diskURI: str
    fsType: str
    kind: str
    readOnly: bool
    def __init__(self, diskName: _Optional[str] = ..., diskURI: _Optional[str] = ..., cachingMode: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., kind: _Optional[str] = ...) -> None: ...

class AzureFilePersistentVolumeSource(_message.Message):
    __slots__ = ["readOnly", "secretName", "secretNamespace", "shareName"]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    SECRETNAME_FIELD_NUMBER: _ClassVar[int]
    SHARENAME_FIELD_NUMBER: _ClassVar[int]
    readOnly: bool
    secretName: str
    secretNamespace: str
    shareName: str
    def __init__(self, secretName: _Optional[str] = ..., shareName: _Optional[str] = ..., readOnly: bool = ..., secretNamespace: _Optional[str] = ...) -> None: ...

class AzureFileVolumeSource(_message.Message):
    __slots__ = ["readOnly", "secretName", "shareName"]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETNAME_FIELD_NUMBER: _ClassVar[int]
    SHARENAME_FIELD_NUMBER: _ClassVar[int]
    readOnly: bool
    secretName: str
    shareName: str
    def __init__(self, secretName: _Optional[str] = ..., shareName: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class Binding(_message.Message):
    __slots__ = ["metadata", "target"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    target: ObjectReference
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., target: _Optional[_Union[ObjectReference, _Mapping]] = ...) -> None: ...

class CSIPersistentVolumeSource(_message.Message):
    __slots__ = ["controllerExpandSecretRef", "controllerPublishSecretRef", "driver", "fsType", "nodePublishSecretRef", "nodeStageSecretRef", "readOnly", "volumeAttributes", "volumeHandle"]
    class VolumeAttributesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    CONTROLLEREXPANDSECRETREF_FIELD_NUMBER: _ClassVar[int]
    CONTROLLERPUBLISHSECRETREF_FIELD_NUMBER: _ClassVar[int]
    DRIVER_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    NODEPUBLISHSECRETREF_FIELD_NUMBER: _ClassVar[int]
    NODESTAGESECRETREF_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    VOLUMEATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    VOLUMEHANDLE_FIELD_NUMBER: _ClassVar[int]
    controllerExpandSecretRef: SecretReference
    controllerPublishSecretRef: SecretReference
    driver: str
    fsType: str
    nodePublishSecretRef: SecretReference
    nodeStageSecretRef: SecretReference
    readOnly: bool
    volumeAttributes: _containers.ScalarMap[str, str]
    volumeHandle: str
    def __init__(self, driver: _Optional[str] = ..., volumeHandle: _Optional[str] = ..., readOnly: bool = ..., fsType: _Optional[str] = ..., volumeAttributes: _Optional[_Mapping[str, str]] = ..., controllerPublishSecretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., nodeStageSecretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., nodePublishSecretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., controllerExpandSecretRef: _Optional[_Union[SecretReference, _Mapping]] = ...) -> None: ...

class CSIVolumeSource(_message.Message):
    __slots__ = ["driver", "fsType", "nodePublishSecretRef", "readOnly", "volumeAttributes"]
    class VolumeAttributesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    DRIVER_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    NODEPUBLISHSECRETREF_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    VOLUMEATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    driver: str
    fsType: str
    nodePublishSecretRef: LocalObjectReference
    readOnly: bool
    volumeAttributes: _containers.ScalarMap[str, str]
    def __init__(self, driver: _Optional[str] = ..., readOnly: bool = ..., fsType: _Optional[str] = ..., volumeAttributes: _Optional[_Mapping[str, str]] = ..., nodePublishSecretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ...) -> None: ...

class Capabilities(_message.Message):
    __slots__ = ["add", "drop"]
    ADD_FIELD_NUMBER: _ClassVar[int]
    DROP_FIELD_NUMBER: _ClassVar[int]
    add: _containers.RepeatedScalarFieldContainer[str]
    drop: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, add: _Optional[_Iterable[str]] = ..., drop: _Optional[_Iterable[str]] = ...) -> None: ...

class CephFSPersistentVolumeSource(_message.Message):
    __slots__ = ["monitors", "path", "readOnly", "secretFile", "secretRef", "user"]
    MONITORS_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETFILE_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    monitors: _containers.RepeatedScalarFieldContainer[str]
    path: str
    readOnly: bool
    secretFile: str
    secretRef: SecretReference
    user: str
    def __init__(self, monitors: _Optional[_Iterable[str]] = ..., path: _Optional[str] = ..., user: _Optional[str] = ..., secretFile: _Optional[str] = ..., secretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., readOnly: bool = ...) -> None: ...

class CephFSVolumeSource(_message.Message):
    __slots__ = ["monitors", "path", "readOnly", "secretFile", "secretRef", "user"]
    MONITORS_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETFILE_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    monitors: _containers.RepeatedScalarFieldContainer[str]
    path: str
    readOnly: bool
    secretFile: str
    secretRef: LocalObjectReference
    user: str
    def __init__(self, monitors: _Optional[_Iterable[str]] = ..., path: _Optional[str] = ..., user: _Optional[str] = ..., secretFile: _Optional[str] = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., readOnly: bool = ...) -> None: ...

class CinderPersistentVolumeSource(_message.Message):
    __slots__ = ["fsType", "readOnly", "secretRef", "volumeID"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    VOLUMEID_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    readOnly: bool
    secretRef: SecretReference
    volumeID: str
    def __init__(self, volumeID: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., secretRef: _Optional[_Union[SecretReference, _Mapping]] = ...) -> None: ...

class CinderVolumeSource(_message.Message):
    __slots__ = ["fsType", "readOnly", "secretRef", "volumeID"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    VOLUMEID_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    readOnly: bool
    secretRef: LocalObjectReference
    volumeID: str
    def __init__(self, volumeID: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ...) -> None: ...

class ClientIPConfig(_message.Message):
    __slots__ = ["timeoutSeconds"]
    TIMEOUTSECONDS_FIELD_NUMBER: _ClassVar[int]
    timeoutSeconds: int
    def __init__(self, timeoutSeconds: _Optional[int] = ...) -> None: ...

class ComponentCondition(_message.Message):
    __slots__ = ["error", "message", "status", "type"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    error: str
    message: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., message: _Optional[str] = ..., error: _Optional[str] = ...) -> None: ...

class ComponentStatus(_message.Message):
    __slots__ = ["conditions", "metadata"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[ComponentCondition]
    metadata: _generated_pb2_1.ObjectMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[ComponentCondition, _Mapping]]] = ...) -> None: ...

class ComponentStatusList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ComponentStatus]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ComponentStatus, _Mapping]]] = ...) -> None: ...

class ConfigMap(_message.Message):
    __slots__ = ["binaryData", "data", "immutable", "metadata"]
    class BinaryDataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    BINARYDATA_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    IMMUTABLE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    binaryData: _containers.ScalarMap[str, bytes]
    data: _containers.ScalarMap[str, str]
    immutable: bool
    metadata: _generated_pb2_1.ObjectMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., immutable: bool = ..., data: _Optional[_Mapping[str, str]] = ..., binaryData: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class ConfigMapEnvSource(_message.Message):
    __slots__ = ["localObjectReference", "optional"]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., optional: bool = ...) -> None: ...

class ConfigMapKeySelector(_message.Message):
    __slots__ = ["key", "localObjectReference", "optional"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    key: str
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., key: _Optional[str] = ..., optional: bool = ...) -> None: ...

class ConfigMapList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ConfigMap]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ConfigMap, _Mapping]]] = ...) -> None: ...

class ConfigMapNodeConfigSource(_message.Message):
    __slots__ = ["kubeletConfigKey", "name", "namespace", "resourceVersion", "uid"]
    KUBELETCONFIGKEY_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    kubeletConfigKey: str
    name: str
    namespace: str
    resourceVersion: str
    uid: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., uid: _Optional[str] = ..., resourceVersion: _Optional[str] = ..., kubeletConfigKey: _Optional[str] = ...) -> None: ...

class ConfigMapProjection(_message.Message):
    __slots__ = ["items", "localObjectReference", "optional"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[KeyToPath]
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., items: _Optional[_Iterable[_Union[KeyToPath, _Mapping]]] = ..., optional: bool = ...) -> None: ...

class ConfigMapVolumeSource(_message.Message):
    __slots__ = ["defaultMode", "items", "localObjectReference", "optional"]
    DEFAULTMODE_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    defaultMode: int
    items: _containers.RepeatedCompositeFieldContainer[KeyToPath]
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., items: _Optional[_Iterable[_Union[KeyToPath, _Mapping]]] = ..., defaultMode: _Optional[int] = ..., optional: bool = ...) -> None: ...

class Container(_message.Message):
    __slots__ = ["args", "command", "env", "envFrom", "image", "imagePullPolicy", "lifecycle", "livenessProbe", "name", "ports", "readinessProbe", "resources", "securityContext", "startupProbe", "stdin", "stdinOnce", "terminationMessagePath", "terminationMessagePolicy", "tty", "volumeDevices", "volumeMounts", "workingDir"]
    ARGS_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    ENVFROM_FIELD_NUMBER: _ClassVar[int]
    ENV_FIELD_NUMBER: _ClassVar[int]
    IMAGEPULLPOLICY_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    LIFECYCLE_FIELD_NUMBER: _ClassVar[int]
    LIVENESSPROBE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PORTS_FIELD_NUMBER: _ClassVar[int]
    READINESSPROBE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SECURITYCONTEXT_FIELD_NUMBER: _ClassVar[int]
    STARTUPPROBE_FIELD_NUMBER: _ClassVar[int]
    STDINONCE_FIELD_NUMBER: _ClassVar[int]
    STDIN_FIELD_NUMBER: _ClassVar[int]
    TERMINATIONMESSAGEPATH_FIELD_NUMBER: _ClassVar[int]
    TERMINATIONMESSAGEPOLICY_FIELD_NUMBER: _ClassVar[int]
    TTY_FIELD_NUMBER: _ClassVar[int]
    VOLUMEDEVICES_FIELD_NUMBER: _ClassVar[int]
    VOLUMEMOUNTS_FIELD_NUMBER: _ClassVar[int]
    WORKINGDIR_FIELD_NUMBER: _ClassVar[int]
    args: _containers.RepeatedScalarFieldContainer[str]
    command: _containers.RepeatedScalarFieldContainer[str]
    env: _containers.RepeatedCompositeFieldContainer[EnvVar]
    envFrom: _containers.RepeatedCompositeFieldContainer[EnvFromSource]
    image: str
    imagePullPolicy: str
    lifecycle: Lifecycle
    livenessProbe: Probe
    name: str
    ports: _containers.RepeatedCompositeFieldContainer[ContainerPort]
    readinessProbe: Probe
    resources: ResourceRequirements
    securityContext: SecurityContext
    startupProbe: Probe
    stdin: bool
    stdinOnce: bool
    terminationMessagePath: str
    terminationMessagePolicy: str
    tty: bool
    volumeDevices: _containers.RepeatedCompositeFieldContainer[VolumeDevice]
    volumeMounts: _containers.RepeatedCompositeFieldContainer[VolumeMount]
    workingDir: str
    def __init__(self, name: _Optional[str] = ..., image: _Optional[str] = ..., command: _Optional[_Iterable[str]] = ..., args: _Optional[_Iterable[str]] = ..., workingDir: _Optional[str] = ..., ports: _Optional[_Iterable[_Union[ContainerPort, _Mapping]]] = ..., envFrom: _Optional[_Iterable[_Union[EnvFromSource, _Mapping]]] = ..., env: _Optional[_Iterable[_Union[EnvVar, _Mapping]]] = ..., resources: _Optional[_Union[ResourceRequirements, _Mapping]] = ..., volumeMounts: _Optional[_Iterable[_Union[VolumeMount, _Mapping]]] = ..., volumeDevices: _Optional[_Iterable[_Union[VolumeDevice, _Mapping]]] = ..., livenessProbe: _Optional[_Union[Probe, _Mapping]] = ..., readinessProbe: _Optional[_Union[Probe, _Mapping]] = ..., startupProbe: _Optional[_Union[Probe, _Mapping]] = ..., lifecycle: _Optional[_Union[Lifecycle, _Mapping]] = ..., terminationMessagePath: _Optional[str] = ..., terminationMessagePolicy: _Optional[str] = ..., imagePullPolicy: _Optional[str] = ..., securityContext: _Optional[_Union[SecurityContext, _Mapping]] = ..., stdin: bool = ..., stdinOnce: bool = ..., tty: bool = ...) -> None: ...

class ContainerImage(_message.Message):
    __slots__ = ["names", "sizeBytes"]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    SIZEBYTES_FIELD_NUMBER: _ClassVar[int]
    names: _containers.RepeatedScalarFieldContainer[str]
    sizeBytes: int
    def __init__(self, names: _Optional[_Iterable[str]] = ..., sizeBytes: _Optional[int] = ...) -> None: ...

class ContainerPort(_message.Message):
    __slots__ = ["containerPort", "hostIP", "hostPort", "name", "protocol"]
    CONTAINERPORT_FIELD_NUMBER: _ClassVar[int]
    HOSTIP_FIELD_NUMBER: _ClassVar[int]
    HOSTPORT_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PROTOCOL_FIELD_NUMBER: _ClassVar[int]
    containerPort: int
    hostIP: str
    hostPort: int
    name: str
    protocol: str
    def __init__(self, name: _Optional[str] = ..., hostPort: _Optional[int] = ..., containerPort: _Optional[int] = ..., protocol: _Optional[str] = ..., hostIP: _Optional[str] = ...) -> None: ...

class ContainerState(_message.Message):
    __slots__ = ["running", "terminated", "waiting"]
    RUNNING_FIELD_NUMBER: _ClassVar[int]
    TERMINATED_FIELD_NUMBER: _ClassVar[int]
    WAITING_FIELD_NUMBER: _ClassVar[int]
    running: ContainerStateRunning
    terminated: ContainerStateTerminated
    waiting: ContainerStateWaiting
    def __init__(self, waiting: _Optional[_Union[ContainerStateWaiting, _Mapping]] = ..., running: _Optional[_Union[ContainerStateRunning, _Mapping]] = ..., terminated: _Optional[_Union[ContainerStateTerminated, _Mapping]] = ...) -> None: ...

class ContainerStateRunning(_message.Message):
    __slots__ = ["startedAt"]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    startedAt: _generated_pb2_1.Time
    def __init__(self, startedAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ...) -> None: ...

class ContainerStateTerminated(_message.Message):
    __slots__ = ["containerID", "exitCode", "finishedAt", "message", "reason", "signal", "startedAt"]
    CONTAINERID_FIELD_NUMBER: _ClassVar[int]
    EXITCODE_FIELD_NUMBER: _ClassVar[int]
    FINISHEDAT_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_FIELD_NUMBER: _ClassVar[int]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    containerID: str
    exitCode: int
    finishedAt: _generated_pb2_1.Time
    message: str
    reason: str
    signal: int
    startedAt: _generated_pb2_1.Time
    def __init__(self, exitCode: _Optional[int] = ..., signal: _Optional[int] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ..., startedAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., finishedAt: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., containerID: _Optional[str] = ...) -> None: ...

class ContainerStateWaiting(_message.Message):
    __slots__ = ["message", "reason"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    message: str
    reason: str
    def __init__(self, reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class ContainerStatus(_message.Message):
    __slots__ = ["containerID", "image", "imageID", "lastState", "name", "ready", "restartCount", "started", "state"]
    CONTAINERID_FIELD_NUMBER: _ClassVar[int]
    IMAGEID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    LASTSTATE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    READY_FIELD_NUMBER: _ClassVar[int]
    RESTARTCOUNT_FIELD_NUMBER: _ClassVar[int]
    STARTED_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    containerID: str
    image: str
    imageID: str
    lastState: ContainerState
    name: str
    ready: bool
    restartCount: int
    started: bool
    state: ContainerState
    def __init__(self, name: _Optional[str] = ..., state: _Optional[_Union[ContainerState, _Mapping]] = ..., lastState: _Optional[_Union[ContainerState, _Mapping]] = ..., ready: bool = ..., restartCount: _Optional[int] = ..., image: _Optional[str] = ..., imageID: _Optional[str] = ..., containerID: _Optional[str] = ..., started: bool = ...) -> None: ...

class DaemonEndpoint(_message.Message):
    __slots__ = ["Port"]
    PORT_FIELD_NUMBER: _ClassVar[int]
    Port: int
    def __init__(self, Port: _Optional[int] = ...) -> None: ...

class DownwardAPIProjection(_message.Message):
    __slots__ = ["items"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[DownwardAPIVolumeFile]
    def __init__(self, items: _Optional[_Iterable[_Union[DownwardAPIVolumeFile, _Mapping]]] = ...) -> None: ...

class DownwardAPIVolumeFile(_message.Message):
    __slots__ = ["fieldRef", "mode", "path", "resourceFieldRef"]
    FIELDREF_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    RESOURCEFIELDREF_FIELD_NUMBER: _ClassVar[int]
    fieldRef: ObjectFieldSelector
    mode: int
    path: str
    resourceFieldRef: ResourceFieldSelector
    def __init__(self, path: _Optional[str] = ..., fieldRef: _Optional[_Union[ObjectFieldSelector, _Mapping]] = ..., resourceFieldRef: _Optional[_Union[ResourceFieldSelector, _Mapping]] = ..., mode: _Optional[int] = ...) -> None: ...

class DownwardAPIVolumeSource(_message.Message):
    __slots__ = ["defaultMode", "items"]
    DEFAULTMODE_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    defaultMode: int
    items: _containers.RepeatedCompositeFieldContainer[DownwardAPIVolumeFile]
    def __init__(self, items: _Optional[_Iterable[_Union[DownwardAPIVolumeFile, _Mapping]]] = ..., defaultMode: _Optional[int] = ...) -> None: ...

class EmptyDirVolumeSource(_message.Message):
    __slots__ = ["medium", "sizeLimit"]
    MEDIUM_FIELD_NUMBER: _ClassVar[int]
    SIZELIMIT_FIELD_NUMBER: _ClassVar[int]
    medium: str
    sizeLimit: _generated_pb2.Quantity
    def __init__(self, medium: _Optional[str] = ..., sizeLimit: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...

class EndpointAddress(_message.Message):
    __slots__ = ["hostname", "ip", "nodeName", "targetRef"]
    HOSTNAME_FIELD_NUMBER: _ClassVar[int]
    IP_FIELD_NUMBER: _ClassVar[int]
    NODENAME_FIELD_NUMBER: _ClassVar[int]
    TARGETREF_FIELD_NUMBER: _ClassVar[int]
    hostname: str
    ip: str
    nodeName: str
    targetRef: ObjectReference
    def __init__(self, ip: _Optional[str] = ..., hostname: _Optional[str] = ..., nodeName: _Optional[str] = ..., targetRef: _Optional[_Union[ObjectReference, _Mapping]] = ...) -> None: ...

class EndpointPort(_message.Message):
    __slots__ = ["appProtocol", "name", "port", "protocol"]
    APPPROTOCOL_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    PROTOCOL_FIELD_NUMBER: _ClassVar[int]
    appProtocol: str
    name: str
    port: int
    protocol: str
    def __init__(self, name: _Optional[str] = ..., port: _Optional[int] = ..., protocol: _Optional[str] = ..., appProtocol: _Optional[str] = ...) -> None: ...

class EndpointSubset(_message.Message):
    __slots__ = ["addresses", "notReadyAddresses", "ports"]
    ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    NOTREADYADDRESSES_FIELD_NUMBER: _ClassVar[int]
    PORTS_FIELD_NUMBER: _ClassVar[int]
    addresses: _containers.RepeatedCompositeFieldContainer[EndpointAddress]
    notReadyAddresses: _containers.RepeatedCompositeFieldContainer[EndpointAddress]
    ports: _containers.RepeatedCompositeFieldContainer[EndpointPort]
    def __init__(self, addresses: _Optional[_Iterable[_Union[EndpointAddress, _Mapping]]] = ..., notReadyAddresses: _Optional[_Iterable[_Union[EndpointAddress, _Mapping]]] = ..., ports: _Optional[_Iterable[_Union[EndpointPort, _Mapping]]] = ...) -> None: ...

class Endpoints(_message.Message):
    __slots__ = ["metadata", "subsets"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SUBSETS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    subsets: _containers.RepeatedCompositeFieldContainer[EndpointSubset]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., subsets: _Optional[_Iterable[_Union[EndpointSubset, _Mapping]]] = ...) -> None: ...

class EndpointsList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Endpoints]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Endpoints, _Mapping]]] = ...) -> None: ...

class EnvFromSource(_message.Message):
    __slots__ = ["configMapRef", "prefix", "secretRef"]
    CONFIGMAPREF_FIELD_NUMBER: _ClassVar[int]
    PREFIX_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    configMapRef: ConfigMapEnvSource
    prefix: str
    secretRef: SecretEnvSource
    def __init__(self, prefix: _Optional[str] = ..., configMapRef: _Optional[_Union[ConfigMapEnvSource, _Mapping]] = ..., secretRef: _Optional[_Union[SecretEnvSource, _Mapping]] = ...) -> None: ...

class EnvVar(_message.Message):
    __slots__ = ["name", "value", "valueFrom"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUEFROM_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    valueFrom: EnvVarSource
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ..., valueFrom: _Optional[_Union[EnvVarSource, _Mapping]] = ...) -> None: ...

class EnvVarSource(_message.Message):
    __slots__ = ["configMapKeyRef", "fieldRef", "resourceFieldRef", "secretKeyRef"]
    CONFIGMAPKEYREF_FIELD_NUMBER: _ClassVar[int]
    FIELDREF_FIELD_NUMBER: _ClassVar[int]
    RESOURCEFIELDREF_FIELD_NUMBER: _ClassVar[int]
    SECRETKEYREF_FIELD_NUMBER: _ClassVar[int]
    configMapKeyRef: ConfigMapKeySelector
    fieldRef: ObjectFieldSelector
    resourceFieldRef: ResourceFieldSelector
    secretKeyRef: SecretKeySelector
    def __init__(self, fieldRef: _Optional[_Union[ObjectFieldSelector, _Mapping]] = ..., resourceFieldRef: _Optional[_Union[ResourceFieldSelector, _Mapping]] = ..., configMapKeyRef: _Optional[_Union[ConfigMapKeySelector, _Mapping]] = ..., secretKeyRef: _Optional[_Union[SecretKeySelector, _Mapping]] = ...) -> None: ...

class EphemeralContainer(_message.Message):
    __slots__ = ["ephemeralContainerCommon", "targetContainerName"]
    EPHEMERALCONTAINERCOMMON_FIELD_NUMBER: _ClassVar[int]
    TARGETCONTAINERNAME_FIELD_NUMBER: _ClassVar[int]
    ephemeralContainerCommon: EphemeralContainerCommon
    targetContainerName: str
    def __init__(self, ephemeralContainerCommon: _Optional[_Union[EphemeralContainerCommon, _Mapping]] = ..., targetContainerName: _Optional[str] = ...) -> None: ...

class EphemeralContainerCommon(_message.Message):
    __slots__ = ["args", "command", "env", "envFrom", "image", "imagePullPolicy", "lifecycle", "livenessProbe", "name", "ports", "readinessProbe", "resources", "securityContext", "startupProbe", "stdin", "stdinOnce", "terminationMessagePath", "terminationMessagePolicy", "tty", "volumeDevices", "volumeMounts", "workingDir"]
    ARGS_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    ENVFROM_FIELD_NUMBER: _ClassVar[int]
    ENV_FIELD_NUMBER: _ClassVar[int]
    IMAGEPULLPOLICY_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    LIFECYCLE_FIELD_NUMBER: _ClassVar[int]
    LIVENESSPROBE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PORTS_FIELD_NUMBER: _ClassVar[int]
    READINESSPROBE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SECURITYCONTEXT_FIELD_NUMBER: _ClassVar[int]
    STARTUPPROBE_FIELD_NUMBER: _ClassVar[int]
    STDINONCE_FIELD_NUMBER: _ClassVar[int]
    STDIN_FIELD_NUMBER: _ClassVar[int]
    TERMINATIONMESSAGEPATH_FIELD_NUMBER: _ClassVar[int]
    TERMINATIONMESSAGEPOLICY_FIELD_NUMBER: _ClassVar[int]
    TTY_FIELD_NUMBER: _ClassVar[int]
    VOLUMEDEVICES_FIELD_NUMBER: _ClassVar[int]
    VOLUMEMOUNTS_FIELD_NUMBER: _ClassVar[int]
    WORKINGDIR_FIELD_NUMBER: _ClassVar[int]
    args: _containers.RepeatedScalarFieldContainer[str]
    command: _containers.RepeatedScalarFieldContainer[str]
    env: _containers.RepeatedCompositeFieldContainer[EnvVar]
    envFrom: _containers.RepeatedCompositeFieldContainer[EnvFromSource]
    image: str
    imagePullPolicy: str
    lifecycle: Lifecycle
    livenessProbe: Probe
    name: str
    ports: _containers.RepeatedCompositeFieldContainer[ContainerPort]
    readinessProbe: Probe
    resources: ResourceRequirements
    securityContext: SecurityContext
    startupProbe: Probe
    stdin: bool
    stdinOnce: bool
    terminationMessagePath: str
    terminationMessagePolicy: str
    tty: bool
    volumeDevices: _containers.RepeatedCompositeFieldContainer[VolumeDevice]
    volumeMounts: _containers.RepeatedCompositeFieldContainer[VolumeMount]
    workingDir: str
    def __init__(self, name: _Optional[str] = ..., image: _Optional[str] = ..., command: _Optional[_Iterable[str]] = ..., args: _Optional[_Iterable[str]] = ..., workingDir: _Optional[str] = ..., ports: _Optional[_Iterable[_Union[ContainerPort, _Mapping]]] = ..., envFrom: _Optional[_Iterable[_Union[EnvFromSource, _Mapping]]] = ..., env: _Optional[_Iterable[_Union[EnvVar, _Mapping]]] = ..., resources: _Optional[_Union[ResourceRequirements, _Mapping]] = ..., volumeMounts: _Optional[_Iterable[_Union[VolumeMount, _Mapping]]] = ..., volumeDevices: _Optional[_Iterable[_Union[VolumeDevice, _Mapping]]] = ..., livenessProbe: _Optional[_Union[Probe, _Mapping]] = ..., readinessProbe: _Optional[_Union[Probe, _Mapping]] = ..., startupProbe: _Optional[_Union[Probe, _Mapping]] = ..., lifecycle: _Optional[_Union[Lifecycle, _Mapping]] = ..., terminationMessagePath: _Optional[str] = ..., terminationMessagePolicy: _Optional[str] = ..., imagePullPolicy: _Optional[str] = ..., securityContext: _Optional[_Union[SecurityContext, _Mapping]] = ..., stdin: bool = ..., stdinOnce: bool = ..., tty: bool = ...) -> None: ...

class EphemeralVolumeSource(_message.Message):
    __slots__ = ["volumeClaimTemplate"]
    VOLUMECLAIMTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    volumeClaimTemplate: PersistentVolumeClaimTemplate
    def __init__(self, volumeClaimTemplate: _Optional[_Union[PersistentVolumeClaimTemplate, _Mapping]] = ...) -> None: ...

class Event(_message.Message):
    __slots__ = ["action", "count", "eventTime", "firstTimestamp", "involvedObject", "lastTimestamp", "message", "metadata", "reason", "related", "reportingComponent", "reportingInstance", "series", "source", "type"]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    EVENTTIME_FIELD_NUMBER: _ClassVar[int]
    FIRSTTIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    INVOLVEDOBJECT_FIELD_NUMBER: _ClassVar[int]
    LASTTIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    RELATED_FIELD_NUMBER: _ClassVar[int]
    REPORTINGCOMPONENT_FIELD_NUMBER: _ClassVar[int]
    REPORTINGINSTANCE_FIELD_NUMBER: _ClassVar[int]
    SERIES_FIELD_NUMBER: _ClassVar[int]
    SOURCE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    action: str
    count: int
    eventTime: _generated_pb2_1.MicroTime
    firstTimestamp: _generated_pb2_1.Time
    involvedObject: ObjectReference
    lastTimestamp: _generated_pb2_1.Time
    message: str
    metadata: _generated_pb2_1.ObjectMeta
    reason: str
    related: ObjectReference
    reportingComponent: str
    reportingInstance: str
    series: EventSeries
    source: EventSource
    type: str
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., involvedObject: _Optional[_Union[ObjectReference, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ..., source: _Optional[_Union[EventSource, _Mapping]] = ..., firstTimestamp: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., lastTimestamp: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., count: _Optional[int] = ..., type: _Optional[str] = ..., eventTime: _Optional[_Union[_generated_pb2_1.MicroTime, _Mapping]] = ..., series: _Optional[_Union[EventSeries, _Mapping]] = ..., action: _Optional[str] = ..., related: _Optional[_Union[ObjectReference, _Mapping]] = ..., reportingComponent: _Optional[str] = ..., reportingInstance: _Optional[str] = ...) -> None: ...

class EventList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Event]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Event, _Mapping]]] = ...) -> None: ...

class EventSeries(_message.Message):
    __slots__ = ["count", "lastObservedTime"]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    LASTOBSERVEDTIME_FIELD_NUMBER: _ClassVar[int]
    count: int
    lastObservedTime: _generated_pb2_1.MicroTime
    def __init__(self, count: _Optional[int] = ..., lastObservedTime: _Optional[_Union[_generated_pb2_1.MicroTime, _Mapping]] = ...) -> None: ...

class EventSource(_message.Message):
    __slots__ = ["component", "host"]
    COMPONENT_FIELD_NUMBER: _ClassVar[int]
    HOST_FIELD_NUMBER: _ClassVar[int]
    component: str
    host: str
    def __init__(self, component: _Optional[str] = ..., host: _Optional[str] = ...) -> None: ...

class ExecAction(_message.Message):
    __slots__ = ["command"]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    command: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, command: _Optional[_Iterable[str]] = ...) -> None: ...

class FCVolumeSource(_message.Message):
    __slots__ = ["fsType", "lun", "readOnly", "targetWWNs", "wwids"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    LUN_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    TARGETWWNS_FIELD_NUMBER: _ClassVar[int]
    WWIDS_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    lun: int
    readOnly: bool
    targetWWNs: _containers.RepeatedScalarFieldContainer[str]
    wwids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, targetWWNs: _Optional[_Iterable[str]] = ..., lun: _Optional[int] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., wwids: _Optional[_Iterable[str]] = ...) -> None: ...

class FlexPersistentVolumeSource(_message.Message):
    __slots__ = ["driver", "fsType", "options", "readOnly", "secretRef"]
    class OptionsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    DRIVER_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    driver: str
    fsType: str
    options: _containers.ScalarMap[str, str]
    readOnly: bool
    secretRef: SecretReference
    def __init__(self, driver: _Optional[str] = ..., fsType: _Optional[str] = ..., secretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., readOnly: bool = ..., options: _Optional[_Mapping[str, str]] = ...) -> None: ...

class FlexVolumeSource(_message.Message):
    __slots__ = ["driver", "fsType", "options", "readOnly", "secretRef"]
    class OptionsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    DRIVER_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    driver: str
    fsType: str
    options: _containers.ScalarMap[str, str]
    readOnly: bool
    secretRef: LocalObjectReference
    def __init__(self, driver: _Optional[str] = ..., fsType: _Optional[str] = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., readOnly: bool = ..., options: _Optional[_Mapping[str, str]] = ...) -> None: ...

class FlockerVolumeSource(_message.Message):
    __slots__ = ["datasetName", "datasetUUID"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    DATASETUUID_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    datasetUUID: str
    def __init__(self, datasetName: _Optional[str] = ..., datasetUUID: _Optional[str] = ...) -> None: ...

class GCEPersistentDiskVolumeSource(_message.Message):
    __slots__ = ["fsType", "partition", "pdName", "readOnly"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    PDNAME_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    partition: int
    pdName: str
    readOnly: bool
    def __init__(self, pdName: _Optional[str] = ..., fsType: _Optional[str] = ..., partition: _Optional[int] = ..., readOnly: bool = ...) -> None: ...

class GRPCAction(_message.Message):
    __slots__ = ["port", "service"]
    PORT_FIELD_NUMBER: _ClassVar[int]
    SERVICE_FIELD_NUMBER: _ClassVar[int]
    port: int
    service: str
    def __init__(self, port: _Optional[int] = ..., service: _Optional[str] = ...) -> None: ...

class GitRepoVolumeSource(_message.Message):
    __slots__ = ["directory", "repository", "revision"]
    DIRECTORY_FIELD_NUMBER: _ClassVar[int]
    REPOSITORY_FIELD_NUMBER: _ClassVar[int]
    REVISION_FIELD_NUMBER: _ClassVar[int]
    directory: str
    repository: str
    revision: str
    def __init__(self, repository: _Optional[str] = ..., revision: _Optional[str] = ..., directory: _Optional[str] = ...) -> None: ...

class GlusterfsPersistentVolumeSource(_message.Message):
    __slots__ = ["endpoints", "endpointsNamespace", "path", "readOnly"]
    ENDPOINTSNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    endpoints: str
    endpointsNamespace: str
    path: str
    readOnly: bool
    def __init__(self, endpoints: _Optional[str] = ..., path: _Optional[str] = ..., readOnly: bool = ..., endpointsNamespace: _Optional[str] = ...) -> None: ...

class GlusterfsVolumeSource(_message.Message):
    __slots__ = ["endpoints", "path", "readOnly"]
    ENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    endpoints: str
    path: str
    readOnly: bool
    def __init__(self, endpoints: _Optional[str] = ..., path: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class HTTPGetAction(_message.Message):
    __slots__ = ["host", "httpHeaders", "path", "port", "scheme"]
    HOST_FIELD_NUMBER: _ClassVar[int]
    HTTPHEADERS_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    SCHEME_FIELD_NUMBER: _ClassVar[int]
    host: str
    httpHeaders: _containers.RepeatedCompositeFieldContainer[HTTPHeader]
    path: str
    port: _generated_pb2_1_1_1_1.IntOrString
    scheme: str
    def __init__(self, path: _Optional[str] = ..., port: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ..., host: _Optional[str] = ..., scheme: _Optional[str] = ..., httpHeaders: _Optional[_Iterable[_Union[HTTPHeader, _Mapping]]] = ...) -> None: ...

class HTTPHeader(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class HostAlias(_message.Message):
    __slots__ = ["hostnames", "ip"]
    HOSTNAMES_FIELD_NUMBER: _ClassVar[int]
    IP_FIELD_NUMBER: _ClassVar[int]
    hostnames: _containers.RepeatedScalarFieldContainer[str]
    ip: str
    def __init__(self, ip: _Optional[str] = ..., hostnames: _Optional[_Iterable[str]] = ...) -> None: ...

class HostPathVolumeSource(_message.Message):
    __slots__ = ["path", "type"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    path: str
    type: str
    def __init__(self, path: _Optional[str] = ..., type: _Optional[str] = ...) -> None: ...

class ISCSIPersistentVolumeSource(_message.Message):
    __slots__ = ["chapAuthDiscovery", "chapAuthSession", "fsType", "initiatorName", "iqn", "iscsiInterface", "lun", "portals", "readOnly", "secretRef", "targetPortal"]
    CHAPAUTHDISCOVERY_FIELD_NUMBER: _ClassVar[int]
    CHAPAUTHSESSION_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    INITIATORNAME_FIELD_NUMBER: _ClassVar[int]
    IQN_FIELD_NUMBER: _ClassVar[int]
    ISCSIINTERFACE_FIELD_NUMBER: _ClassVar[int]
    LUN_FIELD_NUMBER: _ClassVar[int]
    PORTALS_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    TARGETPORTAL_FIELD_NUMBER: _ClassVar[int]
    chapAuthDiscovery: bool
    chapAuthSession: bool
    fsType: str
    initiatorName: str
    iqn: str
    iscsiInterface: str
    lun: int
    portals: _containers.RepeatedScalarFieldContainer[str]
    readOnly: bool
    secretRef: SecretReference
    targetPortal: str
    def __init__(self, targetPortal: _Optional[str] = ..., iqn: _Optional[str] = ..., lun: _Optional[int] = ..., iscsiInterface: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., portals: _Optional[_Iterable[str]] = ..., chapAuthDiscovery: bool = ..., chapAuthSession: bool = ..., secretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., initiatorName: _Optional[str] = ...) -> None: ...

class ISCSIVolumeSource(_message.Message):
    __slots__ = ["chapAuthDiscovery", "chapAuthSession", "fsType", "initiatorName", "iqn", "iscsiInterface", "lun", "portals", "readOnly", "secretRef", "targetPortal"]
    CHAPAUTHDISCOVERY_FIELD_NUMBER: _ClassVar[int]
    CHAPAUTHSESSION_FIELD_NUMBER: _ClassVar[int]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    INITIATORNAME_FIELD_NUMBER: _ClassVar[int]
    IQN_FIELD_NUMBER: _ClassVar[int]
    ISCSIINTERFACE_FIELD_NUMBER: _ClassVar[int]
    LUN_FIELD_NUMBER: _ClassVar[int]
    PORTALS_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    TARGETPORTAL_FIELD_NUMBER: _ClassVar[int]
    chapAuthDiscovery: bool
    chapAuthSession: bool
    fsType: str
    initiatorName: str
    iqn: str
    iscsiInterface: str
    lun: int
    portals: _containers.RepeatedScalarFieldContainer[str]
    readOnly: bool
    secretRef: LocalObjectReference
    targetPortal: str
    def __init__(self, targetPortal: _Optional[str] = ..., iqn: _Optional[str] = ..., lun: _Optional[int] = ..., iscsiInterface: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., portals: _Optional[_Iterable[str]] = ..., chapAuthDiscovery: bool = ..., chapAuthSession: bool = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., initiatorName: _Optional[str] = ...) -> None: ...

class KeyToPath(_message.Message):
    __slots__ = ["key", "mode", "path"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    key: str
    mode: int
    path: str
    def __init__(self, key: _Optional[str] = ..., path: _Optional[str] = ..., mode: _Optional[int] = ...) -> None: ...

class Lifecycle(_message.Message):
    __slots__ = ["postStart", "preStop"]
    POSTSTART_FIELD_NUMBER: _ClassVar[int]
    PRESTOP_FIELD_NUMBER: _ClassVar[int]
    postStart: LifecycleHandler
    preStop: LifecycleHandler
    def __init__(self, postStart: _Optional[_Union[LifecycleHandler, _Mapping]] = ..., preStop: _Optional[_Union[LifecycleHandler, _Mapping]] = ...) -> None: ...

class LifecycleHandler(_message.Message):
    __slots__ = ["exec", "httpGet", "tcpSocket"]
    EXEC_FIELD_NUMBER: _ClassVar[int]
    HTTPGET_FIELD_NUMBER: _ClassVar[int]
    TCPSOCKET_FIELD_NUMBER: _ClassVar[int]
    exec: ExecAction
    httpGet: HTTPGetAction
    tcpSocket: TCPSocketAction
    def __init__(self, exec: _Optional[_Union[ExecAction, _Mapping]] = ..., httpGet: _Optional[_Union[HTTPGetAction, _Mapping]] = ..., tcpSocket: _Optional[_Union[TCPSocketAction, _Mapping]] = ...) -> None: ...

class LimitRange(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: LimitRangeSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[LimitRangeSpec, _Mapping]] = ...) -> None: ...

class LimitRangeItem(_message.Message):
    __slots__ = ["default", "defaultRequest", "max", "maxLimitRequestRatio", "min", "type"]
    class DefaultEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class DefaultRequestEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class MaxEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class MaxLimitRequestRatioEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class MinEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    DEFAULTREQUEST_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    MAXLIMITREQUESTRATIO_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    default: _containers.MessageMap[str, _generated_pb2.Quantity]
    defaultRequest: _containers.MessageMap[str, _generated_pb2.Quantity]
    max: _containers.MessageMap[str, _generated_pb2.Quantity]
    maxLimitRequestRatio: _containers.MessageMap[str, _generated_pb2.Quantity]
    min: _containers.MessageMap[str, _generated_pb2.Quantity]
    type: str
    def __init__(self, type: _Optional[str] = ..., max: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., min: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., default: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., defaultRequest: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., maxLimitRequestRatio: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ...) -> None: ...

class LimitRangeList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[LimitRange]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[LimitRange, _Mapping]]] = ...) -> None: ...

class LimitRangeSpec(_message.Message):
    __slots__ = ["limits"]
    LIMITS_FIELD_NUMBER: _ClassVar[int]
    limits: _containers.RepeatedCompositeFieldContainer[LimitRangeItem]
    def __init__(self, limits: _Optional[_Iterable[_Union[LimitRangeItem, _Mapping]]] = ...) -> None: ...

class List(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.RawExtension]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[_generated_pb2_1_1.RawExtension, _Mapping]]] = ...) -> None: ...

class LoadBalancerIngress(_message.Message):
    __slots__ = ["hostname", "ip", "ports"]
    HOSTNAME_FIELD_NUMBER: _ClassVar[int]
    IP_FIELD_NUMBER: _ClassVar[int]
    PORTS_FIELD_NUMBER: _ClassVar[int]
    hostname: str
    ip: str
    ports: _containers.RepeatedCompositeFieldContainer[PortStatus]
    def __init__(self, ip: _Optional[str] = ..., hostname: _Optional[str] = ..., ports: _Optional[_Iterable[_Union[PortStatus, _Mapping]]] = ...) -> None: ...

class LoadBalancerStatus(_message.Message):
    __slots__ = ["ingress"]
    INGRESS_FIELD_NUMBER: _ClassVar[int]
    ingress: _containers.RepeatedCompositeFieldContainer[LoadBalancerIngress]
    def __init__(self, ingress: _Optional[_Iterable[_Union[LoadBalancerIngress, _Mapping]]] = ...) -> None: ...

class LocalObjectReference(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class LocalVolumeSource(_message.Message):
    __slots__ = ["fsType", "path"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    path: str
    def __init__(self, path: _Optional[str] = ..., fsType: _Optional[str] = ...) -> None: ...

class NFSVolumeSource(_message.Message):
    __slots__ = ["path", "readOnly", "server"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SERVER_FIELD_NUMBER: _ClassVar[int]
    path: str
    readOnly: bool
    server: str
    def __init__(self, server: _Optional[str] = ..., path: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class Namespace(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: NamespaceSpec
    status: NamespaceStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[NamespaceSpec, _Mapping]] = ..., status: _Optional[_Union[NamespaceStatus, _Mapping]] = ...) -> None: ...

class NamespaceCondition(_message.Message):
    __slots__ = ["lastTransitionTime", "message", "reason", "status", "type"]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastTransitionTime: _generated_pb2_1.Time
    message: str
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class NamespaceList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Namespace]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Namespace, _Mapping]]] = ...) -> None: ...

class NamespaceSpec(_message.Message):
    __slots__ = ["finalizers"]
    FINALIZERS_FIELD_NUMBER: _ClassVar[int]
    finalizers: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, finalizers: _Optional[_Iterable[str]] = ...) -> None: ...

class NamespaceStatus(_message.Message):
    __slots__ = ["conditions", "phase"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[NamespaceCondition]
    phase: str
    def __init__(self, phase: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[NamespaceCondition, _Mapping]]] = ...) -> None: ...

class Node(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: NodeSpec
    status: NodeStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[NodeSpec, _Mapping]] = ..., status: _Optional[_Union[NodeStatus, _Mapping]] = ...) -> None: ...

class NodeAddress(_message.Message):
    __slots__ = ["address", "type"]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    address: str
    type: str
    def __init__(self, type: _Optional[str] = ..., address: _Optional[str] = ...) -> None: ...

class NodeAffinity(_message.Message):
    __slots__ = ["preferredDuringSchedulingIgnoredDuringExecution", "requiredDuringSchedulingIgnoredDuringExecution"]
    PREFERREDDURINGSCHEDULINGIGNOREDDURINGEXECUTION_FIELD_NUMBER: _ClassVar[int]
    REQUIREDDURINGSCHEDULINGIGNOREDDURINGEXECUTION_FIELD_NUMBER: _ClassVar[int]
    preferredDuringSchedulingIgnoredDuringExecution: _containers.RepeatedCompositeFieldContainer[PreferredSchedulingTerm]
    requiredDuringSchedulingIgnoredDuringExecution: NodeSelector
    def __init__(self, requiredDuringSchedulingIgnoredDuringExecution: _Optional[_Union[NodeSelector, _Mapping]] = ..., preferredDuringSchedulingIgnoredDuringExecution: _Optional[_Iterable[_Union[PreferredSchedulingTerm, _Mapping]]] = ...) -> None: ...

class NodeCondition(_message.Message):
    __slots__ = ["lastHeartbeatTime", "lastTransitionTime", "message", "reason", "status", "type"]
    LASTHEARTBEATTIME_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastHeartbeatTime: _generated_pb2_1.Time
    lastTransitionTime: _generated_pb2_1.Time
    message: str
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastHeartbeatTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class NodeConfigSource(_message.Message):
    __slots__ = ["configMap"]
    CONFIGMAP_FIELD_NUMBER: _ClassVar[int]
    configMap: ConfigMapNodeConfigSource
    def __init__(self, configMap: _Optional[_Union[ConfigMapNodeConfigSource, _Mapping]] = ...) -> None: ...

class NodeConfigStatus(_message.Message):
    __slots__ = ["active", "assigned", "error", "lastKnownGood"]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    ASSIGNED_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    LASTKNOWNGOOD_FIELD_NUMBER: _ClassVar[int]
    active: NodeConfigSource
    assigned: NodeConfigSource
    error: str
    lastKnownGood: NodeConfigSource
    def __init__(self, assigned: _Optional[_Union[NodeConfigSource, _Mapping]] = ..., active: _Optional[_Union[NodeConfigSource, _Mapping]] = ..., lastKnownGood: _Optional[_Union[NodeConfigSource, _Mapping]] = ..., error: _Optional[str] = ...) -> None: ...

class NodeDaemonEndpoints(_message.Message):
    __slots__ = ["kubeletEndpoint"]
    KUBELETENDPOINT_FIELD_NUMBER: _ClassVar[int]
    kubeletEndpoint: DaemonEndpoint
    def __init__(self, kubeletEndpoint: _Optional[_Union[DaemonEndpoint, _Mapping]] = ...) -> None: ...

class NodeList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Node]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Node, _Mapping]]] = ...) -> None: ...

class NodeProxyOptions(_message.Message):
    __slots__ = ["path"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...

class NodeResources(_message.Message):
    __slots__ = ["capacity"]
    class CapacityEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    capacity: _containers.MessageMap[str, _generated_pb2.Quantity]
    def __init__(self, capacity: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ...) -> None: ...

class NodeSelector(_message.Message):
    __slots__ = ["nodeSelectorTerms"]
    NODESELECTORTERMS_FIELD_NUMBER: _ClassVar[int]
    nodeSelectorTerms: _containers.RepeatedCompositeFieldContainer[NodeSelectorTerm]
    def __init__(self, nodeSelectorTerms: _Optional[_Iterable[_Union[NodeSelectorTerm, _Mapping]]] = ...) -> None: ...

class NodeSelectorRequirement(_message.Message):
    __slots__ = ["key", "operator", "values"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    key: str
    operator: str
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, key: _Optional[str] = ..., operator: _Optional[str] = ..., values: _Optional[_Iterable[str]] = ...) -> None: ...

class NodeSelectorTerm(_message.Message):
    __slots__ = ["matchExpressions", "matchFields"]
    MATCHEXPRESSIONS_FIELD_NUMBER: _ClassVar[int]
    MATCHFIELDS_FIELD_NUMBER: _ClassVar[int]
    matchExpressions: _containers.RepeatedCompositeFieldContainer[NodeSelectorRequirement]
    matchFields: _containers.RepeatedCompositeFieldContainer[NodeSelectorRequirement]
    def __init__(self, matchExpressions: _Optional[_Iterable[_Union[NodeSelectorRequirement, _Mapping]]] = ..., matchFields: _Optional[_Iterable[_Union[NodeSelectorRequirement, _Mapping]]] = ...) -> None: ...

class NodeSpec(_message.Message):
    __slots__ = ["configSource", "externalID", "podCIDR", "podCIDRs", "providerID", "taints", "unschedulable"]
    CONFIGSOURCE_FIELD_NUMBER: _ClassVar[int]
    EXTERNALID_FIELD_NUMBER: _ClassVar[int]
    PODCIDRS_FIELD_NUMBER: _ClassVar[int]
    PODCIDR_FIELD_NUMBER: _ClassVar[int]
    PROVIDERID_FIELD_NUMBER: _ClassVar[int]
    TAINTS_FIELD_NUMBER: _ClassVar[int]
    UNSCHEDULABLE_FIELD_NUMBER: _ClassVar[int]
    configSource: NodeConfigSource
    externalID: str
    podCIDR: str
    podCIDRs: _containers.RepeatedScalarFieldContainer[str]
    providerID: str
    taints: _containers.RepeatedCompositeFieldContainer[Taint]
    unschedulable: bool
    def __init__(self, podCIDR: _Optional[str] = ..., podCIDRs: _Optional[_Iterable[str]] = ..., providerID: _Optional[str] = ..., unschedulable: bool = ..., taints: _Optional[_Iterable[_Union[Taint, _Mapping]]] = ..., configSource: _Optional[_Union[NodeConfigSource, _Mapping]] = ..., externalID: _Optional[str] = ...) -> None: ...

class NodeStatus(_message.Message):
    __slots__ = ["addresses", "allocatable", "capacity", "conditions", "config", "daemonEndpoints", "images", "nodeInfo", "phase", "volumesAttached", "volumesInUse"]
    class AllocatableEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class CapacityEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    ADDRESSES_FIELD_NUMBER: _ClassVar[int]
    ALLOCATABLE_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    DAEMONENDPOINTS_FIELD_NUMBER: _ClassVar[int]
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    NODEINFO_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    VOLUMESATTACHED_FIELD_NUMBER: _ClassVar[int]
    VOLUMESINUSE_FIELD_NUMBER: _ClassVar[int]
    addresses: _containers.RepeatedCompositeFieldContainer[NodeAddress]
    allocatable: _containers.MessageMap[str, _generated_pb2.Quantity]
    capacity: _containers.MessageMap[str, _generated_pb2.Quantity]
    conditions: _containers.RepeatedCompositeFieldContainer[NodeCondition]
    config: NodeConfigStatus
    daemonEndpoints: NodeDaemonEndpoints
    images: _containers.RepeatedCompositeFieldContainer[ContainerImage]
    nodeInfo: NodeSystemInfo
    phase: str
    volumesAttached: _containers.RepeatedCompositeFieldContainer[AttachedVolume]
    volumesInUse: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, capacity: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., allocatable: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., phase: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[NodeCondition, _Mapping]]] = ..., addresses: _Optional[_Iterable[_Union[NodeAddress, _Mapping]]] = ..., daemonEndpoints: _Optional[_Union[NodeDaemonEndpoints, _Mapping]] = ..., nodeInfo: _Optional[_Union[NodeSystemInfo, _Mapping]] = ..., images: _Optional[_Iterable[_Union[ContainerImage, _Mapping]]] = ..., volumesInUse: _Optional[_Iterable[str]] = ..., volumesAttached: _Optional[_Iterable[_Union[AttachedVolume, _Mapping]]] = ..., config: _Optional[_Union[NodeConfigStatus, _Mapping]] = ...) -> None: ...

class NodeSystemInfo(_message.Message):
    __slots__ = ["architecture", "bootID", "containerRuntimeVersion", "kernelVersion", "kubeProxyVersion", "kubeletVersion", "machineID", "operatingSystem", "osImage", "systemUUID"]
    ARCHITECTURE_FIELD_NUMBER: _ClassVar[int]
    BOOTID_FIELD_NUMBER: _ClassVar[int]
    CONTAINERRUNTIMEVERSION_FIELD_NUMBER: _ClassVar[int]
    KERNELVERSION_FIELD_NUMBER: _ClassVar[int]
    KUBELETVERSION_FIELD_NUMBER: _ClassVar[int]
    KUBEPROXYVERSION_FIELD_NUMBER: _ClassVar[int]
    MACHINEID_FIELD_NUMBER: _ClassVar[int]
    OPERATINGSYSTEM_FIELD_NUMBER: _ClassVar[int]
    OSIMAGE_FIELD_NUMBER: _ClassVar[int]
    SYSTEMUUID_FIELD_NUMBER: _ClassVar[int]
    architecture: str
    bootID: str
    containerRuntimeVersion: str
    kernelVersion: str
    kubeProxyVersion: str
    kubeletVersion: str
    machineID: str
    operatingSystem: str
    osImage: str
    systemUUID: str
    def __init__(self, machineID: _Optional[str] = ..., systemUUID: _Optional[str] = ..., bootID: _Optional[str] = ..., kernelVersion: _Optional[str] = ..., osImage: _Optional[str] = ..., containerRuntimeVersion: _Optional[str] = ..., kubeletVersion: _Optional[str] = ..., kubeProxyVersion: _Optional[str] = ..., operatingSystem: _Optional[str] = ..., architecture: _Optional[str] = ...) -> None: ...

class ObjectFieldSelector(_message.Message):
    __slots__ = ["apiVersion", "fieldPath"]
    APIVERSION_FIELD_NUMBER: _ClassVar[int]
    FIELDPATH_FIELD_NUMBER: _ClassVar[int]
    apiVersion: str
    fieldPath: str
    def __init__(self, apiVersion: _Optional[str] = ..., fieldPath: _Optional[str] = ...) -> None: ...

class ObjectReference(_message.Message):
    __slots__ = ["apiVersion", "fieldPath", "kind", "name", "namespace", "resourceVersion", "uid"]
    APIVERSION_FIELD_NUMBER: _ClassVar[int]
    FIELDPATH_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCEVERSION_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    apiVersion: str
    fieldPath: str
    kind: str
    name: str
    namespace: str
    resourceVersion: str
    uid: str
    def __init__(self, kind: _Optional[str] = ..., namespace: _Optional[str] = ..., name: _Optional[str] = ..., uid: _Optional[str] = ..., apiVersion: _Optional[str] = ..., resourceVersion: _Optional[str] = ..., fieldPath: _Optional[str] = ...) -> None: ...

class PersistentVolume(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: PersistentVolumeSpec
    status: PersistentVolumeStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PersistentVolumeSpec, _Mapping]] = ..., status: _Optional[_Union[PersistentVolumeStatus, _Mapping]] = ...) -> None: ...

class PersistentVolumeClaim(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: PersistentVolumeClaimSpec
    status: PersistentVolumeClaimStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PersistentVolumeClaimSpec, _Mapping]] = ..., status: _Optional[_Union[PersistentVolumeClaimStatus, _Mapping]] = ...) -> None: ...

class PersistentVolumeClaimCondition(_message.Message):
    __slots__ = ["lastProbeTime", "lastTransitionTime", "message", "reason", "status", "type"]
    LASTPROBETIME_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastProbeTime: _generated_pb2_1.Time
    lastTransitionTime: _generated_pb2_1.Time
    message: str
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastProbeTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class PersistentVolumeClaimList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PersistentVolumeClaim]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PersistentVolumeClaim, _Mapping]]] = ...) -> None: ...

class PersistentVolumeClaimSpec(_message.Message):
    __slots__ = ["accessModes", "dataSource", "dataSourceRef", "resources", "selector", "storageClassName", "volumeMode", "volumeName"]
    ACCESSMODES_FIELD_NUMBER: _ClassVar[int]
    DATASOURCEREF_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    STORAGECLASSNAME_FIELD_NUMBER: _ClassVar[int]
    VOLUMEMODE_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAME_FIELD_NUMBER: _ClassVar[int]
    accessModes: _containers.RepeatedScalarFieldContainer[str]
    dataSource: TypedLocalObjectReference
    dataSourceRef: TypedLocalObjectReference
    resources: ResourceRequirements
    selector: _generated_pb2_1.LabelSelector
    storageClassName: str
    volumeMode: str
    volumeName: str
    def __init__(self, accessModes: _Optional[_Iterable[str]] = ..., selector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., resources: _Optional[_Union[ResourceRequirements, _Mapping]] = ..., volumeName: _Optional[str] = ..., storageClassName: _Optional[str] = ..., volumeMode: _Optional[str] = ..., dataSource: _Optional[_Union[TypedLocalObjectReference, _Mapping]] = ..., dataSourceRef: _Optional[_Union[TypedLocalObjectReference, _Mapping]] = ...) -> None: ...

class PersistentVolumeClaimStatus(_message.Message):
    __slots__ = ["accessModes", "allocatedResources", "capacity", "conditions", "phase", "resizeStatus"]
    class AllocatedResourcesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class CapacityEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    ACCESSMODES_FIELD_NUMBER: _ClassVar[int]
    ALLOCATEDRESOURCES_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    RESIZESTATUS_FIELD_NUMBER: _ClassVar[int]
    accessModes: _containers.RepeatedScalarFieldContainer[str]
    allocatedResources: _containers.MessageMap[str, _generated_pb2.Quantity]
    capacity: _containers.MessageMap[str, _generated_pb2.Quantity]
    conditions: _containers.RepeatedCompositeFieldContainer[PersistentVolumeClaimCondition]
    phase: str
    resizeStatus: str
    def __init__(self, phase: _Optional[str] = ..., accessModes: _Optional[_Iterable[str]] = ..., capacity: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., conditions: _Optional[_Iterable[_Union[PersistentVolumeClaimCondition, _Mapping]]] = ..., allocatedResources: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., resizeStatus: _Optional[str] = ...) -> None: ...

class PersistentVolumeClaimTemplate(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: PersistentVolumeClaimSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PersistentVolumeClaimSpec, _Mapping]] = ...) -> None: ...

class PersistentVolumeClaimVolumeSource(_message.Message):
    __slots__ = ["claimName", "readOnly"]
    CLAIMNAME_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    claimName: str
    readOnly: bool
    def __init__(self, claimName: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class PersistentVolumeList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PersistentVolume]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PersistentVolume, _Mapping]]] = ...) -> None: ...

class PersistentVolumeSource(_message.Message):
    __slots__ = ["awsElasticBlockStore", "azureDisk", "azureFile", "cephfs", "cinder", "csi", "fc", "flexVolume", "flocker", "gcePersistentDisk", "glusterfs", "hostPath", "iscsi", "local", "nfs", "photonPersistentDisk", "portworxVolume", "quobyte", "rbd", "scaleIO", "storageos", "vsphereVolume"]
    AWSELASTICBLOCKSTORE_FIELD_NUMBER: _ClassVar[int]
    AZUREDISK_FIELD_NUMBER: _ClassVar[int]
    AZUREFILE_FIELD_NUMBER: _ClassVar[int]
    CEPHFS_FIELD_NUMBER: _ClassVar[int]
    CINDER_FIELD_NUMBER: _ClassVar[int]
    CSI_FIELD_NUMBER: _ClassVar[int]
    FC_FIELD_NUMBER: _ClassVar[int]
    FLEXVOLUME_FIELD_NUMBER: _ClassVar[int]
    FLOCKER_FIELD_NUMBER: _ClassVar[int]
    GCEPERSISTENTDISK_FIELD_NUMBER: _ClassVar[int]
    GLUSTERFS_FIELD_NUMBER: _ClassVar[int]
    HOSTPATH_FIELD_NUMBER: _ClassVar[int]
    ISCSI_FIELD_NUMBER: _ClassVar[int]
    LOCAL_FIELD_NUMBER: _ClassVar[int]
    NFS_FIELD_NUMBER: _ClassVar[int]
    PHOTONPERSISTENTDISK_FIELD_NUMBER: _ClassVar[int]
    PORTWORXVOLUME_FIELD_NUMBER: _ClassVar[int]
    QUOBYTE_FIELD_NUMBER: _ClassVar[int]
    RBD_FIELD_NUMBER: _ClassVar[int]
    SCALEIO_FIELD_NUMBER: _ClassVar[int]
    STORAGEOS_FIELD_NUMBER: _ClassVar[int]
    VSPHEREVOLUME_FIELD_NUMBER: _ClassVar[int]
    awsElasticBlockStore: AWSElasticBlockStoreVolumeSource
    azureDisk: AzureDiskVolumeSource
    azureFile: AzureFilePersistentVolumeSource
    cephfs: CephFSPersistentVolumeSource
    cinder: CinderPersistentVolumeSource
    csi: CSIPersistentVolumeSource
    fc: FCVolumeSource
    flexVolume: FlexPersistentVolumeSource
    flocker: FlockerVolumeSource
    gcePersistentDisk: GCEPersistentDiskVolumeSource
    glusterfs: GlusterfsPersistentVolumeSource
    hostPath: HostPathVolumeSource
    iscsi: ISCSIPersistentVolumeSource
    local: LocalVolumeSource
    nfs: NFSVolumeSource
    photonPersistentDisk: PhotonPersistentDiskVolumeSource
    portworxVolume: PortworxVolumeSource
    quobyte: QuobyteVolumeSource
    rbd: RBDPersistentVolumeSource
    scaleIO: ScaleIOPersistentVolumeSource
    storageos: StorageOSPersistentVolumeSource
    vsphereVolume: VsphereVirtualDiskVolumeSource
    def __init__(self, gcePersistentDisk: _Optional[_Union[GCEPersistentDiskVolumeSource, _Mapping]] = ..., awsElasticBlockStore: _Optional[_Union[AWSElasticBlockStoreVolumeSource, _Mapping]] = ..., hostPath: _Optional[_Union[HostPathVolumeSource, _Mapping]] = ..., glusterfs: _Optional[_Union[GlusterfsPersistentVolumeSource, _Mapping]] = ..., nfs: _Optional[_Union[NFSVolumeSource, _Mapping]] = ..., rbd: _Optional[_Union[RBDPersistentVolumeSource, _Mapping]] = ..., iscsi: _Optional[_Union[ISCSIPersistentVolumeSource, _Mapping]] = ..., cinder: _Optional[_Union[CinderPersistentVolumeSource, _Mapping]] = ..., cephfs: _Optional[_Union[CephFSPersistentVolumeSource, _Mapping]] = ..., fc: _Optional[_Union[FCVolumeSource, _Mapping]] = ..., flocker: _Optional[_Union[FlockerVolumeSource, _Mapping]] = ..., flexVolume: _Optional[_Union[FlexPersistentVolumeSource, _Mapping]] = ..., azureFile: _Optional[_Union[AzureFilePersistentVolumeSource, _Mapping]] = ..., vsphereVolume: _Optional[_Union[VsphereVirtualDiskVolumeSource, _Mapping]] = ..., quobyte: _Optional[_Union[QuobyteVolumeSource, _Mapping]] = ..., azureDisk: _Optional[_Union[AzureDiskVolumeSource, _Mapping]] = ..., photonPersistentDisk: _Optional[_Union[PhotonPersistentDiskVolumeSource, _Mapping]] = ..., portworxVolume: _Optional[_Union[PortworxVolumeSource, _Mapping]] = ..., scaleIO: _Optional[_Union[ScaleIOPersistentVolumeSource, _Mapping]] = ..., local: _Optional[_Union[LocalVolumeSource, _Mapping]] = ..., storageos: _Optional[_Union[StorageOSPersistentVolumeSource, _Mapping]] = ..., csi: _Optional[_Union[CSIPersistentVolumeSource, _Mapping]] = ...) -> None: ...

class PersistentVolumeSpec(_message.Message):
    __slots__ = ["accessModes", "capacity", "claimRef", "mountOptions", "nodeAffinity", "persistentVolumeReclaimPolicy", "persistentVolumeSource", "storageClassName", "volumeMode"]
    class CapacityEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    ACCESSMODES_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    CLAIMREF_FIELD_NUMBER: _ClassVar[int]
    MOUNTOPTIONS_FIELD_NUMBER: _ClassVar[int]
    NODEAFFINITY_FIELD_NUMBER: _ClassVar[int]
    PERSISTENTVOLUMERECLAIMPOLICY_FIELD_NUMBER: _ClassVar[int]
    PERSISTENTVOLUMESOURCE_FIELD_NUMBER: _ClassVar[int]
    STORAGECLASSNAME_FIELD_NUMBER: _ClassVar[int]
    VOLUMEMODE_FIELD_NUMBER: _ClassVar[int]
    accessModes: _containers.RepeatedScalarFieldContainer[str]
    capacity: _containers.MessageMap[str, _generated_pb2.Quantity]
    claimRef: ObjectReference
    mountOptions: _containers.RepeatedScalarFieldContainer[str]
    nodeAffinity: VolumeNodeAffinity
    persistentVolumeReclaimPolicy: str
    persistentVolumeSource: PersistentVolumeSource
    storageClassName: str
    volumeMode: str
    def __init__(self, capacity: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., persistentVolumeSource: _Optional[_Union[PersistentVolumeSource, _Mapping]] = ..., accessModes: _Optional[_Iterable[str]] = ..., claimRef: _Optional[_Union[ObjectReference, _Mapping]] = ..., persistentVolumeReclaimPolicy: _Optional[str] = ..., storageClassName: _Optional[str] = ..., mountOptions: _Optional[_Iterable[str]] = ..., volumeMode: _Optional[str] = ..., nodeAffinity: _Optional[_Union[VolumeNodeAffinity, _Mapping]] = ...) -> None: ...

class PersistentVolumeStatus(_message.Message):
    __slots__ = ["message", "phase", "reason"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    message: str
    phase: str
    reason: str
    def __init__(self, phase: _Optional[str] = ..., message: _Optional[str] = ..., reason: _Optional[str] = ...) -> None: ...

class PhotonPersistentDiskVolumeSource(_message.Message):
    __slots__ = ["fsType", "pdID"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    PDID_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    pdID: str
    def __init__(self, pdID: _Optional[str] = ..., fsType: _Optional[str] = ...) -> None: ...

class Pod(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: PodSpec
    status: PodStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PodSpec, _Mapping]] = ..., status: _Optional[_Union[PodStatus, _Mapping]] = ...) -> None: ...

class PodAffinity(_message.Message):
    __slots__ = ["preferredDuringSchedulingIgnoredDuringExecution", "requiredDuringSchedulingIgnoredDuringExecution"]
    PREFERREDDURINGSCHEDULINGIGNOREDDURINGEXECUTION_FIELD_NUMBER: _ClassVar[int]
    REQUIREDDURINGSCHEDULINGIGNOREDDURINGEXECUTION_FIELD_NUMBER: _ClassVar[int]
    preferredDuringSchedulingIgnoredDuringExecution: _containers.RepeatedCompositeFieldContainer[WeightedPodAffinityTerm]
    requiredDuringSchedulingIgnoredDuringExecution: _containers.RepeatedCompositeFieldContainer[PodAffinityTerm]
    def __init__(self, requiredDuringSchedulingIgnoredDuringExecution: _Optional[_Iterable[_Union[PodAffinityTerm, _Mapping]]] = ..., preferredDuringSchedulingIgnoredDuringExecution: _Optional[_Iterable[_Union[WeightedPodAffinityTerm, _Mapping]]] = ...) -> None: ...

class PodAffinityTerm(_message.Message):
    __slots__ = ["labelSelector", "namespaceSelector", "namespaces", "topologyKey"]
    LABELSELECTOR_FIELD_NUMBER: _ClassVar[int]
    NAMESPACESELECTOR_FIELD_NUMBER: _ClassVar[int]
    NAMESPACES_FIELD_NUMBER: _ClassVar[int]
    TOPOLOGYKEY_FIELD_NUMBER: _ClassVar[int]
    labelSelector: _generated_pb2_1.LabelSelector
    namespaceSelector: _generated_pb2_1.LabelSelector
    namespaces: _containers.RepeatedScalarFieldContainer[str]
    topologyKey: str
    def __init__(self, labelSelector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., namespaces: _Optional[_Iterable[str]] = ..., topologyKey: _Optional[str] = ..., namespaceSelector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ...) -> None: ...

class PodAntiAffinity(_message.Message):
    __slots__ = ["preferredDuringSchedulingIgnoredDuringExecution", "requiredDuringSchedulingIgnoredDuringExecution"]
    PREFERREDDURINGSCHEDULINGIGNOREDDURINGEXECUTION_FIELD_NUMBER: _ClassVar[int]
    REQUIREDDURINGSCHEDULINGIGNOREDDURINGEXECUTION_FIELD_NUMBER: _ClassVar[int]
    preferredDuringSchedulingIgnoredDuringExecution: _containers.RepeatedCompositeFieldContainer[WeightedPodAffinityTerm]
    requiredDuringSchedulingIgnoredDuringExecution: _containers.RepeatedCompositeFieldContainer[PodAffinityTerm]
    def __init__(self, requiredDuringSchedulingIgnoredDuringExecution: _Optional[_Iterable[_Union[PodAffinityTerm, _Mapping]]] = ..., preferredDuringSchedulingIgnoredDuringExecution: _Optional[_Iterable[_Union[WeightedPodAffinityTerm, _Mapping]]] = ...) -> None: ...

class PodAttachOptions(_message.Message):
    __slots__ = ["container", "stderr", "stdin", "stdout", "tty"]
    CONTAINER_FIELD_NUMBER: _ClassVar[int]
    STDERR_FIELD_NUMBER: _ClassVar[int]
    STDIN_FIELD_NUMBER: _ClassVar[int]
    STDOUT_FIELD_NUMBER: _ClassVar[int]
    TTY_FIELD_NUMBER: _ClassVar[int]
    container: str
    stderr: bool
    stdin: bool
    stdout: bool
    tty: bool
    def __init__(self, stdin: bool = ..., stdout: bool = ..., stderr: bool = ..., tty: bool = ..., container: _Optional[str] = ...) -> None: ...

class PodCondition(_message.Message):
    __slots__ = ["lastProbeTime", "lastTransitionTime", "message", "reason", "status", "type"]
    LASTPROBETIME_FIELD_NUMBER: _ClassVar[int]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastProbeTime: _generated_pb2_1.Time
    lastTransitionTime: _generated_pb2_1.Time
    message: str
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastProbeTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class PodDNSConfig(_message.Message):
    __slots__ = ["nameservers", "options", "searches"]
    NAMESERVERS_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    SEARCHES_FIELD_NUMBER: _ClassVar[int]
    nameservers: _containers.RepeatedScalarFieldContainer[str]
    options: _containers.RepeatedCompositeFieldContainer[PodDNSConfigOption]
    searches: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, nameservers: _Optional[_Iterable[str]] = ..., searches: _Optional[_Iterable[str]] = ..., options: _Optional[_Iterable[_Union[PodDNSConfigOption, _Mapping]]] = ...) -> None: ...

class PodDNSConfigOption(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class PodExecOptions(_message.Message):
    __slots__ = ["command", "container", "stderr", "stdin", "stdout", "tty"]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    CONTAINER_FIELD_NUMBER: _ClassVar[int]
    STDERR_FIELD_NUMBER: _ClassVar[int]
    STDIN_FIELD_NUMBER: _ClassVar[int]
    STDOUT_FIELD_NUMBER: _ClassVar[int]
    TTY_FIELD_NUMBER: _ClassVar[int]
    command: _containers.RepeatedScalarFieldContainer[str]
    container: str
    stderr: bool
    stdin: bool
    stdout: bool
    tty: bool
    def __init__(self, stdin: bool = ..., stdout: bool = ..., stderr: bool = ..., tty: bool = ..., container: _Optional[str] = ..., command: _Optional[_Iterable[str]] = ...) -> None: ...

class PodIP(_message.Message):
    __slots__ = ["ip"]
    IP_FIELD_NUMBER: _ClassVar[int]
    ip: str
    def __init__(self, ip: _Optional[str] = ...) -> None: ...

class PodList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Pod]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Pod, _Mapping]]] = ...) -> None: ...

class PodLogOptions(_message.Message):
    __slots__ = ["container", "follow", "insecureSkipTLSVerifyBackend", "limitBytes", "previous", "sinceSeconds", "sinceTime", "tailLines", "timestamps"]
    CONTAINER_FIELD_NUMBER: _ClassVar[int]
    FOLLOW_FIELD_NUMBER: _ClassVar[int]
    INSECURESKIPTLSVERIFYBACKEND_FIELD_NUMBER: _ClassVar[int]
    LIMITBYTES_FIELD_NUMBER: _ClassVar[int]
    PREVIOUS_FIELD_NUMBER: _ClassVar[int]
    SINCESECONDS_FIELD_NUMBER: _ClassVar[int]
    SINCETIME_FIELD_NUMBER: _ClassVar[int]
    TAILLINES_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMPS_FIELD_NUMBER: _ClassVar[int]
    container: str
    follow: bool
    insecureSkipTLSVerifyBackend: bool
    limitBytes: int
    previous: bool
    sinceSeconds: int
    sinceTime: _generated_pb2_1.Time
    tailLines: int
    timestamps: bool
    def __init__(self, container: _Optional[str] = ..., follow: bool = ..., previous: bool = ..., sinceSeconds: _Optional[int] = ..., sinceTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., timestamps: bool = ..., tailLines: _Optional[int] = ..., limitBytes: _Optional[int] = ..., insecureSkipTLSVerifyBackend: bool = ...) -> None: ...

class PodOS(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class PodPortForwardOptions(_message.Message):
    __slots__ = ["ports"]
    PORTS_FIELD_NUMBER: _ClassVar[int]
    ports: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, ports: _Optional[_Iterable[int]] = ...) -> None: ...

class PodProxyOptions(_message.Message):
    __slots__ = ["path"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...

class PodReadinessGate(_message.Message):
    __slots__ = ["conditionType"]
    CONDITIONTYPE_FIELD_NUMBER: _ClassVar[int]
    conditionType: str
    def __init__(self, conditionType: _Optional[str] = ...) -> None: ...

class PodSecurityContext(_message.Message):
    __slots__ = ["fsGroup", "fsGroupChangePolicy", "runAsGroup", "runAsNonRoot", "runAsUser", "seLinuxOptions", "seccompProfile", "supplementalGroups", "sysctls", "windowsOptions"]
    FSGROUPCHANGEPOLICY_FIELD_NUMBER: _ClassVar[int]
    FSGROUP_FIELD_NUMBER: _ClassVar[int]
    RUNASGROUP_FIELD_NUMBER: _ClassVar[int]
    RUNASNONROOT_FIELD_NUMBER: _ClassVar[int]
    RUNASUSER_FIELD_NUMBER: _ClassVar[int]
    SECCOMPPROFILE_FIELD_NUMBER: _ClassVar[int]
    SELINUXOPTIONS_FIELD_NUMBER: _ClassVar[int]
    SUPPLEMENTALGROUPS_FIELD_NUMBER: _ClassVar[int]
    SYSCTLS_FIELD_NUMBER: _ClassVar[int]
    WINDOWSOPTIONS_FIELD_NUMBER: _ClassVar[int]
    fsGroup: int
    fsGroupChangePolicy: str
    runAsGroup: int
    runAsNonRoot: bool
    runAsUser: int
    seLinuxOptions: SELinuxOptions
    seccompProfile: SeccompProfile
    supplementalGroups: _containers.RepeatedScalarFieldContainer[int]
    sysctls: _containers.RepeatedCompositeFieldContainer[Sysctl]
    windowsOptions: WindowsSecurityContextOptions
    def __init__(self, seLinuxOptions: _Optional[_Union[SELinuxOptions, _Mapping]] = ..., windowsOptions: _Optional[_Union[WindowsSecurityContextOptions, _Mapping]] = ..., runAsUser: _Optional[int] = ..., runAsGroup: _Optional[int] = ..., runAsNonRoot: bool = ..., supplementalGroups: _Optional[_Iterable[int]] = ..., fsGroup: _Optional[int] = ..., sysctls: _Optional[_Iterable[_Union[Sysctl, _Mapping]]] = ..., fsGroupChangePolicy: _Optional[str] = ..., seccompProfile: _Optional[_Union[SeccompProfile, _Mapping]] = ...) -> None: ...

class PodSignature(_message.Message):
    __slots__ = ["podController"]
    PODCONTROLLER_FIELD_NUMBER: _ClassVar[int]
    podController: _generated_pb2_1.OwnerReference
    def __init__(self, podController: _Optional[_Union[_generated_pb2_1.OwnerReference, _Mapping]] = ...) -> None: ...

class PodSpec(_message.Message):
    __slots__ = ["activeDeadlineSeconds", "affinity", "automountServiceAccountToken", "containers", "dnsConfig", "dnsPolicy", "enableServiceLinks", "ephemeralContainers", "hostAliases", "hostIPC", "hostNetwork", "hostPID", "hostname", "imagePullSecrets", "initContainers", "nodeName", "nodeSelector", "os", "overhead", "preemptionPolicy", "priority", "priorityClassName", "readinessGates", "restartPolicy", "runtimeClassName", "schedulerName", "securityContext", "serviceAccount", "serviceAccountName", "setHostnameAsFQDN", "shareProcessNamespace", "subdomain", "terminationGracePeriodSeconds", "tolerations", "topologySpreadConstraints", "volumes"]
    class NodeSelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class OverheadEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    ACTIVEDEADLINESECONDS_FIELD_NUMBER: _ClassVar[int]
    AFFINITY_FIELD_NUMBER: _ClassVar[int]
    AUTOMOUNTSERVICEACCOUNTTOKEN_FIELD_NUMBER: _ClassVar[int]
    CONTAINERS_FIELD_NUMBER: _ClassVar[int]
    DNSCONFIG_FIELD_NUMBER: _ClassVar[int]
    DNSPOLICY_FIELD_NUMBER: _ClassVar[int]
    ENABLESERVICELINKS_FIELD_NUMBER: _ClassVar[int]
    EPHEMERALCONTAINERS_FIELD_NUMBER: _ClassVar[int]
    HOSTALIASES_FIELD_NUMBER: _ClassVar[int]
    HOSTIPC_FIELD_NUMBER: _ClassVar[int]
    HOSTNAME_FIELD_NUMBER: _ClassVar[int]
    HOSTNETWORK_FIELD_NUMBER: _ClassVar[int]
    HOSTPID_FIELD_NUMBER: _ClassVar[int]
    IMAGEPULLSECRETS_FIELD_NUMBER: _ClassVar[int]
    INITCONTAINERS_FIELD_NUMBER: _ClassVar[int]
    NODENAME_FIELD_NUMBER: _ClassVar[int]
    NODESELECTOR_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    OVERHEAD_FIELD_NUMBER: _ClassVar[int]
    PREEMPTIONPOLICY_FIELD_NUMBER: _ClassVar[int]
    PRIORITYCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    READINESSGATES_FIELD_NUMBER: _ClassVar[int]
    RESTARTPOLICY_FIELD_NUMBER: _ClassVar[int]
    RUNTIMECLASSNAME_FIELD_NUMBER: _ClassVar[int]
    SCHEDULERNAME_FIELD_NUMBER: _ClassVar[int]
    SECURITYCONTEXT_FIELD_NUMBER: _ClassVar[int]
    SERVICEACCOUNTNAME_FIELD_NUMBER: _ClassVar[int]
    SERVICEACCOUNT_FIELD_NUMBER: _ClassVar[int]
    SETHOSTNAMEASFQDN_FIELD_NUMBER: _ClassVar[int]
    SHAREPROCESSNAMESPACE_FIELD_NUMBER: _ClassVar[int]
    SUBDOMAIN_FIELD_NUMBER: _ClassVar[int]
    TERMINATIONGRACEPERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    TOLERATIONS_FIELD_NUMBER: _ClassVar[int]
    TOPOLOGYSPREADCONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    VOLUMES_FIELD_NUMBER: _ClassVar[int]
    activeDeadlineSeconds: int
    affinity: Affinity
    automountServiceAccountToken: bool
    containers: _containers.RepeatedCompositeFieldContainer[Container]
    dnsConfig: PodDNSConfig
    dnsPolicy: str
    enableServiceLinks: bool
    ephemeralContainers: _containers.RepeatedCompositeFieldContainer[EphemeralContainer]
    hostAliases: _containers.RepeatedCompositeFieldContainer[HostAlias]
    hostIPC: bool
    hostNetwork: bool
    hostPID: bool
    hostname: str
    imagePullSecrets: _containers.RepeatedCompositeFieldContainer[LocalObjectReference]
    initContainers: _containers.RepeatedCompositeFieldContainer[Container]
    nodeName: str
    nodeSelector: _containers.ScalarMap[str, str]
    os: PodOS
    overhead: _containers.MessageMap[str, _generated_pb2.Quantity]
    preemptionPolicy: str
    priority: int
    priorityClassName: str
    readinessGates: _containers.RepeatedCompositeFieldContainer[PodReadinessGate]
    restartPolicy: str
    runtimeClassName: str
    schedulerName: str
    securityContext: PodSecurityContext
    serviceAccount: str
    serviceAccountName: str
    setHostnameAsFQDN: bool
    shareProcessNamespace: bool
    subdomain: str
    terminationGracePeriodSeconds: int
    tolerations: _containers.RepeatedCompositeFieldContainer[Toleration]
    topologySpreadConstraints: _containers.RepeatedCompositeFieldContainer[TopologySpreadConstraint]
    volumes: _containers.RepeatedCompositeFieldContainer[Volume]
    def __init__(self, volumes: _Optional[_Iterable[_Union[Volume, _Mapping]]] = ..., initContainers: _Optional[_Iterable[_Union[Container, _Mapping]]] = ..., containers: _Optional[_Iterable[_Union[Container, _Mapping]]] = ..., ephemeralContainers: _Optional[_Iterable[_Union[EphemeralContainer, _Mapping]]] = ..., restartPolicy: _Optional[str] = ..., terminationGracePeriodSeconds: _Optional[int] = ..., activeDeadlineSeconds: _Optional[int] = ..., dnsPolicy: _Optional[str] = ..., nodeSelector: _Optional[_Mapping[str, str]] = ..., serviceAccountName: _Optional[str] = ..., serviceAccount: _Optional[str] = ..., automountServiceAccountToken: bool = ..., nodeName: _Optional[str] = ..., hostNetwork: bool = ..., hostPID: bool = ..., hostIPC: bool = ..., shareProcessNamespace: bool = ..., securityContext: _Optional[_Union[PodSecurityContext, _Mapping]] = ..., imagePullSecrets: _Optional[_Iterable[_Union[LocalObjectReference, _Mapping]]] = ..., hostname: _Optional[str] = ..., subdomain: _Optional[str] = ..., affinity: _Optional[_Union[Affinity, _Mapping]] = ..., schedulerName: _Optional[str] = ..., tolerations: _Optional[_Iterable[_Union[Toleration, _Mapping]]] = ..., hostAliases: _Optional[_Iterable[_Union[HostAlias, _Mapping]]] = ..., priorityClassName: _Optional[str] = ..., priority: _Optional[int] = ..., dnsConfig: _Optional[_Union[PodDNSConfig, _Mapping]] = ..., readinessGates: _Optional[_Iterable[_Union[PodReadinessGate, _Mapping]]] = ..., runtimeClassName: _Optional[str] = ..., enableServiceLinks: bool = ..., preemptionPolicy: _Optional[str] = ..., overhead: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., topologySpreadConstraints: _Optional[_Iterable[_Union[TopologySpreadConstraint, _Mapping]]] = ..., setHostnameAsFQDN: bool = ..., os: _Optional[_Union[PodOS, _Mapping]] = ...) -> None: ...

class PodStatus(_message.Message):
    __slots__ = ["conditions", "containerStatuses", "ephemeralContainerStatuses", "hostIP", "initContainerStatuses", "message", "nominatedNodeName", "phase", "podIP", "podIPs", "qosClass", "reason", "startTime"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    CONTAINERSTATUSES_FIELD_NUMBER: _ClassVar[int]
    EPHEMERALCONTAINERSTATUSES_FIELD_NUMBER: _ClassVar[int]
    HOSTIP_FIELD_NUMBER: _ClassVar[int]
    INITCONTAINERSTATUSES_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    NOMINATEDNODENAME_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    PODIPS_FIELD_NUMBER: _ClassVar[int]
    PODIP_FIELD_NUMBER: _ClassVar[int]
    QOSCLASS_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STARTTIME_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[PodCondition]
    containerStatuses: _containers.RepeatedCompositeFieldContainer[ContainerStatus]
    ephemeralContainerStatuses: _containers.RepeatedCompositeFieldContainer[ContainerStatus]
    hostIP: str
    initContainerStatuses: _containers.RepeatedCompositeFieldContainer[ContainerStatus]
    message: str
    nominatedNodeName: str
    phase: str
    podIP: str
    podIPs: _containers.RepeatedCompositeFieldContainer[PodIP]
    qosClass: str
    reason: str
    startTime: _generated_pb2_1.Time
    def __init__(self, phase: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[PodCondition, _Mapping]]] = ..., message: _Optional[str] = ..., reason: _Optional[str] = ..., nominatedNodeName: _Optional[str] = ..., hostIP: _Optional[str] = ..., podIP: _Optional[str] = ..., podIPs: _Optional[_Iterable[_Union[PodIP, _Mapping]]] = ..., startTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., initContainerStatuses: _Optional[_Iterable[_Union[ContainerStatus, _Mapping]]] = ..., containerStatuses: _Optional[_Iterable[_Union[ContainerStatus, _Mapping]]] = ..., qosClass: _Optional[str] = ..., ephemeralContainerStatuses: _Optional[_Iterable[_Union[ContainerStatus, _Mapping]]] = ...) -> None: ...

class PodStatusResult(_message.Message):
    __slots__ = ["metadata", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    status: PodStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., status: _Optional[_Union[PodStatus, _Mapping]] = ...) -> None: ...

class PodTemplate(_message.Message):
    __slots__ = ["metadata", "template"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    template: PodTemplateSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., template: _Optional[_Union[PodTemplateSpec, _Mapping]] = ...) -> None: ...

class PodTemplateList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[PodTemplate]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[PodTemplate, _Mapping]]] = ...) -> None: ...

class PodTemplateSpec(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: PodSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[PodSpec, _Mapping]] = ...) -> None: ...

class PortStatus(_message.Message):
    __slots__ = ["error", "port", "protocol"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    PROTOCOL_FIELD_NUMBER: _ClassVar[int]
    error: str
    port: int
    protocol: str
    def __init__(self, port: _Optional[int] = ..., protocol: _Optional[str] = ..., error: _Optional[str] = ...) -> None: ...

class PortworxVolumeSource(_message.Message):
    __slots__ = ["fsType", "readOnly", "volumeID"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    VOLUMEID_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    readOnly: bool
    volumeID: str
    def __init__(self, volumeID: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class Preconditions(_message.Message):
    __slots__ = ["uid"]
    UID_FIELD_NUMBER: _ClassVar[int]
    uid: str
    def __init__(self, uid: _Optional[str] = ...) -> None: ...

class PreferAvoidPodsEntry(_message.Message):
    __slots__ = ["evictionTime", "message", "podSignature", "reason"]
    EVICTIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    PODSIGNATURE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    evictionTime: _generated_pb2_1.Time
    message: str
    podSignature: PodSignature
    reason: str
    def __init__(self, podSignature: _Optional[_Union[PodSignature, _Mapping]] = ..., evictionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class PreferredSchedulingTerm(_message.Message):
    __slots__ = ["preference", "weight"]
    PREFERENCE_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_FIELD_NUMBER: _ClassVar[int]
    preference: NodeSelectorTerm
    weight: int
    def __init__(self, weight: _Optional[int] = ..., preference: _Optional[_Union[NodeSelectorTerm, _Mapping]] = ...) -> None: ...

class Probe(_message.Message):
    __slots__ = ["failureThreshold", "handler", "initialDelaySeconds", "periodSeconds", "successThreshold", "terminationGracePeriodSeconds", "timeoutSeconds"]
    FAILURETHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    HANDLER_FIELD_NUMBER: _ClassVar[int]
    INITIALDELAYSECONDS_FIELD_NUMBER: _ClassVar[int]
    PERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    SUCCESSTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    TERMINATIONGRACEPERIODSECONDS_FIELD_NUMBER: _ClassVar[int]
    TIMEOUTSECONDS_FIELD_NUMBER: _ClassVar[int]
    failureThreshold: int
    handler: ProbeHandler
    initialDelaySeconds: int
    periodSeconds: int
    successThreshold: int
    terminationGracePeriodSeconds: int
    timeoutSeconds: int
    def __init__(self, handler: _Optional[_Union[ProbeHandler, _Mapping]] = ..., initialDelaySeconds: _Optional[int] = ..., timeoutSeconds: _Optional[int] = ..., periodSeconds: _Optional[int] = ..., successThreshold: _Optional[int] = ..., failureThreshold: _Optional[int] = ..., terminationGracePeriodSeconds: _Optional[int] = ...) -> None: ...

class ProbeHandler(_message.Message):
    __slots__ = ["exec", "grpc", "httpGet", "tcpSocket"]
    EXEC_FIELD_NUMBER: _ClassVar[int]
    GRPC_FIELD_NUMBER: _ClassVar[int]
    HTTPGET_FIELD_NUMBER: _ClassVar[int]
    TCPSOCKET_FIELD_NUMBER: _ClassVar[int]
    exec: ExecAction
    grpc: GRPCAction
    httpGet: HTTPGetAction
    tcpSocket: TCPSocketAction
    def __init__(self, exec: _Optional[_Union[ExecAction, _Mapping]] = ..., httpGet: _Optional[_Union[HTTPGetAction, _Mapping]] = ..., tcpSocket: _Optional[_Union[TCPSocketAction, _Mapping]] = ..., grpc: _Optional[_Union[GRPCAction, _Mapping]] = ...) -> None: ...

class ProjectedVolumeSource(_message.Message):
    __slots__ = ["defaultMode", "sources"]
    DEFAULTMODE_FIELD_NUMBER: _ClassVar[int]
    SOURCES_FIELD_NUMBER: _ClassVar[int]
    defaultMode: int
    sources: _containers.RepeatedCompositeFieldContainer[VolumeProjection]
    def __init__(self, sources: _Optional[_Iterable[_Union[VolumeProjection, _Mapping]]] = ..., defaultMode: _Optional[int] = ...) -> None: ...

class QuobyteVolumeSource(_message.Message):
    __slots__ = ["group", "readOnly", "registry", "tenant", "user", "volume"]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    REGISTRY_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    group: str
    readOnly: bool
    registry: str
    tenant: str
    user: str
    volume: str
    def __init__(self, registry: _Optional[str] = ..., volume: _Optional[str] = ..., readOnly: bool = ..., user: _Optional[str] = ..., group: _Optional[str] = ..., tenant: _Optional[str] = ...) -> None: ...

class RBDPersistentVolumeSource(_message.Message):
    __slots__ = ["fsType", "image", "keyring", "monitors", "pool", "readOnly", "secretRef", "user"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    KEYRING_FIELD_NUMBER: _ClassVar[int]
    MONITORS_FIELD_NUMBER: _ClassVar[int]
    POOL_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    image: str
    keyring: str
    monitors: _containers.RepeatedScalarFieldContainer[str]
    pool: str
    readOnly: bool
    secretRef: SecretReference
    user: str
    def __init__(self, monitors: _Optional[_Iterable[str]] = ..., image: _Optional[str] = ..., fsType: _Optional[str] = ..., pool: _Optional[str] = ..., user: _Optional[str] = ..., keyring: _Optional[str] = ..., secretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., readOnly: bool = ...) -> None: ...

class RBDVolumeSource(_message.Message):
    __slots__ = ["fsType", "image", "keyring", "monitors", "pool", "readOnly", "secretRef", "user"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    KEYRING_FIELD_NUMBER: _ClassVar[int]
    MONITORS_FIELD_NUMBER: _ClassVar[int]
    POOL_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    image: str
    keyring: str
    monitors: _containers.RepeatedScalarFieldContainer[str]
    pool: str
    readOnly: bool
    secretRef: LocalObjectReference
    user: str
    def __init__(self, monitors: _Optional[_Iterable[str]] = ..., image: _Optional[str] = ..., fsType: _Optional[str] = ..., pool: _Optional[str] = ..., user: _Optional[str] = ..., keyring: _Optional[str] = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., readOnly: bool = ...) -> None: ...

class RangeAllocation(_message.Message):
    __slots__ = ["data", "metadata", "range"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    RANGE_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    metadata: _generated_pb2_1.ObjectMeta
    range: str
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., range: _Optional[str] = ..., data: _Optional[bytes] = ...) -> None: ...

class ReplicationController(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: ReplicationControllerSpec
    status: ReplicationControllerStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ReplicationControllerSpec, _Mapping]] = ..., status: _Optional[_Union[ReplicationControllerStatus, _Mapping]] = ...) -> None: ...

class ReplicationControllerCondition(_message.Message):
    __slots__ = ["lastTransitionTime", "message", "reason", "status", "type"]
    LASTTRANSITIONTIME_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    lastTransitionTime: _generated_pb2_1.Time
    message: str
    reason: str
    status: str
    type: str
    def __init__(self, type: _Optional[str] = ..., status: _Optional[str] = ..., lastTransitionTime: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ..., reason: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class ReplicationControllerList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ReplicationController]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ReplicationController, _Mapping]]] = ...) -> None: ...

class ReplicationControllerSpec(_message.Message):
    __slots__ = ["minReadySeconds", "replicas", "selector", "template"]
    class SelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    MINREADYSECONDS_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    minReadySeconds: int
    replicas: int
    selector: _containers.ScalarMap[str, str]
    template: PodTemplateSpec
    def __init__(self, replicas: _Optional[int] = ..., minReadySeconds: _Optional[int] = ..., selector: _Optional[_Mapping[str, str]] = ..., template: _Optional[_Union[PodTemplateSpec, _Mapping]] = ...) -> None: ...

class ReplicationControllerStatus(_message.Message):
    __slots__ = ["availableReplicas", "conditions", "fullyLabeledReplicas", "observedGeneration", "readyReplicas", "replicas"]
    AVAILABLEREPLICAS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FULLYLABELEDREPLICAS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    READYREPLICAS_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    availableReplicas: int
    conditions: _containers.RepeatedCompositeFieldContainer[ReplicationControllerCondition]
    fullyLabeledReplicas: int
    observedGeneration: int
    readyReplicas: int
    replicas: int
    def __init__(self, replicas: _Optional[int] = ..., fullyLabeledReplicas: _Optional[int] = ..., readyReplicas: _Optional[int] = ..., availableReplicas: _Optional[int] = ..., observedGeneration: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[ReplicationControllerCondition, _Mapping]]] = ...) -> None: ...

class ResourceFieldSelector(_message.Message):
    __slots__ = ["containerName", "divisor", "resource"]
    CONTAINERNAME_FIELD_NUMBER: _ClassVar[int]
    DIVISOR_FIELD_NUMBER: _ClassVar[int]
    RESOURCE_FIELD_NUMBER: _ClassVar[int]
    containerName: str
    divisor: _generated_pb2.Quantity
    resource: str
    def __init__(self, containerName: _Optional[str] = ..., resource: _Optional[str] = ..., divisor: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...

class ResourceQuota(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: ResourceQuotaSpec
    status: ResourceQuotaStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ResourceQuotaSpec, _Mapping]] = ..., status: _Optional[_Union[ResourceQuotaStatus, _Mapping]] = ...) -> None: ...

class ResourceQuotaList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ResourceQuota]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ResourceQuota, _Mapping]]] = ...) -> None: ...

class ResourceQuotaSpec(_message.Message):
    __slots__ = ["hard", "scopeSelector", "scopes"]
    class HardEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    HARD_FIELD_NUMBER: _ClassVar[int]
    SCOPESELECTOR_FIELD_NUMBER: _ClassVar[int]
    SCOPES_FIELD_NUMBER: _ClassVar[int]
    hard: _containers.MessageMap[str, _generated_pb2.Quantity]
    scopeSelector: ScopeSelector
    scopes: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, hard: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., scopes: _Optional[_Iterable[str]] = ..., scopeSelector: _Optional[_Union[ScopeSelector, _Mapping]] = ...) -> None: ...

class ResourceQuotaStatus(_message.Message):
    __slots__ = ["hard", "used"]
    class HardEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class UsedEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    HARD_FIELD_NUMBER: _ClassVar[int]
    USED_FIELD_NUMBER: _ClassVar[int]
    hard: _containers.MessageMap[str, _generated_pb2.Quantity]
    used: _containers.MessageMap[str, _generated_pb2.Quantity]
    def __init__(self, hard: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., used: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ...) -> None: ...

class ResourceRequirements(_message.Message):
    __slots__ = ["limits", "requests"]
    class LimitsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    class RequestsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _generated_pb2.Quantity
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_generated_pb2.Quantity, _Mapping]] = ...) -> None: ...
    LIMITS_FIELD_NUMBER: _ClassVar[int]
    REQUESTS_FIELD_NUMBER: _ClassVar[int]
    limits: _containers.MessageMap[str, _generated_pb2.Quantity]
    requests: _containers.MessageMap[str, _generated_pb2.Quantity]
    def __init__(self, limits: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ..., requests: _Optional[_Mapping[str, _generated_pb2.Quantity]] = ...) -> None: ...

class SELinuxOptions(_message.Message):
    __slots__ = ["level", "role", "type", "user"]
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    level: str
    role: str
    type: str
    user: str
    def __init__(self, user: _Optional[str] = ..., role: _Optional[str] = ..., type: _Optional[str] = ..., level: _Optional[str] = ...) -> None: ...

class ScaleIOPersistentVolumeSource(_message.Message):
    __slots__ = ["fsType", "gateway", "protectionDomain", "readOnly", "secretRef", "sslEnabled", "storageMode", "storagePool", "system", "volumeName"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    GATEWAY_FIELD_NUMBER: _ClassVar[int]
    PROTECTIONDOMAIN_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    SSLENABLED_FIELD_NUMBER: _ClassVar[int]
    STORAGEMODE_FIELD_NUMBER: _ClassVar[int]
    STORAGEPOOL_FIELD_NUMBER: _ClassVar[int]
    SYSTEM_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAME_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    gateway: str
    protectionDomain: str
    readOnly: bool
    secretRef: SecretReference
    sslEnabled: bool
    storageMode: str
    storagePool: str
    system: str
    volumeName: str
    def __init__(self, gateway: _Optional[str] = ..., system: _Optional[str] = ..., secretRef: _Optional[_Union[SecretReference, _Mapping]] = ..., sslEnabled: bool = ..., protectionDomain: _Optional[str] = ..., storagePool: _Optional[str] = ..., storageMode: _Optional[str] = ..., volumeName: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class ScaleIOVolumeSource(_message.Message):
    __slots__ = ["fsType", "gateway", "protectionDomain", "readOnly", "secretRef", "sslEnabled", "storageMode", "storagePool", "system", "volumeName"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    GATEWAY_FIELD_NUMBER: _ClassVar[int]
    PROTECTIONDOMAIN_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    SSLENABLED_FIELD_NUMBER: _ClassVar[int]
    STORAGEMODE_FIELD_NUMBER: _ClassVar[int]
    STORAGEPOOL_FIELD_NUMBER: _ClassVar[int]
    SYSTEM_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAME_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    gateway: str
    protectionDomain: str
    readOnly: bool
    secretRef: LocalObjectReference
    sslEnabled: bool
    storageMode: str
    storagePool: str
    system: str
    volumeName: str
    def __init__(self, gateway: _Optional[str] = ..., system: _Optional[str] = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., sslEnabled: bool = ..., protectionDomain: _Optional[str] = ..., storagePool: _Optional[str] = ..., storageMode: _Optional[str] = ..., volumeName: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ...) -> None: ...

class ScopeSelector(_message.Message):
    __slots__ = ["matchExpressions"]
    MATCHEXPRESSIONS_FIELD_NUMBER: _ClassVar[int]
    matchExpressions: _containers.RepeatedCompositeFieldContainer[ScopedResourceSelectorRequirement]
    def __init__(self, matchExpressions: _Optional[_Iterable[_Union[ScopedResourceSelectorRequirement, _Mapping]]] = ...) -> None: ...

class ScopedResourceSelectorRequirement(_message.Message):
    __slots__ = ["operator", "scopeName", "values"]
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    SCOPENAME_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    operator: str
    scopeName: str
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, scopeName: _Optional[str] = ..., operator: _Optional[str] = ..., values: _Optional[_Iterable[str]] = ...) -> None: ...

class SeccompProfile(_message.Message):
    __slots__ = ["localhostProfile", "type"]
    LOCALHOSTPROFILE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    localhostProfile: str
    type: str
    def __init__(self, type: _Optional[str] = ..., localhostProfile: _Optional[str] = ...) -> None: ...

class Secret(_message.Message):
    __slots__ = ["data", "immutable", "metadata", "stringData", "type"]
    class DataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class StringDataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    DATA_FIELD_NUMBER: _ClassVar[int]
    IMMUTABLE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    STRINGDATA_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    data: _containers.ScalarMap[str, bytes]
    immutable: bool
    metadata: _generated_pb2_1.ObjectMeta
    stringData: _containers.ScalarMap[str, str]
    type: str
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., immutable: bool = ..., data: _Optional[_Mapping[str, bytes]] = ..., stringData: _Optional[_Mapping[str, str]] = ..., type: _Optional[str] = ...) -> None: ...

class SecretEnvSource(_message.Message):
    __slots__ = ["localObjectReference", "optional"]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., optional: bool = ...) -> None: ...

class SecretKeySelector(_message.Message):
    __slots__ = ["key", "localObjectReference", "optional"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    key: str
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., key: _Optional[str] = ..., optional: bool = ...) -> None: ...

class SecretList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Secret]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Secret, _Mapping]]] = ...) -> None: ...

class SecretProjection(_message.Message):
    __slots__ = ["items", "localObjectReference", "optional"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    LOCALOBJECTREFERENCE_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[KeyToPath]
    localObjectReference: LocalObjectReference
    optional: bool
    def __init__(self, localObjectReference: _Optional[_Union[LocalObjectReference, _Mapping]] = ..., items: _Optional[_Iterable[_Union[KeyToPath, _Mapping]]] = ..., optional: bool = ...) -> None: ...

class SecretReference(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class SecretVolumeSource(_message.Message):
    __slots__ = ["defaultMode", "items", "optional", "secretName"]
    DEFAULTMODE_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    OPTIONAL_FIELD_NUMBER: _ClassVar[int]
    SECRETNAME_FIELD_NUMBER: _ClassVar[int]
    defaultMode: int
    items: _containers.RepeatedCompositeFieldContainer[KeyToPath]
    optional: bool
    secretName: str
    def __init__(self, secretName: _Optional[str] = ..., items: _Optional[_Iterable[_Union[KeyToPath, _Mapping]]] = ..., defaultMode: _Optional[int] = ..., optional: bool = ...) -> None: ...

class SecurityContext(_message.Message):
    __slots__ = ["allowPrivilegeEscalation", "capabilities", "privileged", "procMount", "readOnlyRootFilesystem", "runAsGroup", "runAsNonRoot", "runAsUser", "seLinuxOptions", "seccompProfile", "windowsOptions"]
    ALLOWPRIVILEGEESCALATION_FIELD_NUMBER: _ClassVar[int]
    CAPABILITIES_FIELD_NUMBER: _ClassVar[int]
    PRIVILEGED_FIELD_NUMBER: _ClassVar[int]
    PROCMOUNT_FIELD_NUMBER: _ClassVar[int]
    READONLYROOTFILESYSTEM_FIELD_NUMBER: _ClassVar[int]
    RUNASGROUP_FIELD_NUMBER: _ClassVar[int]
    RUNASNONROOT_FIELD_NUMBER: _ClassVar[int]
    RUNASUSER_FIELD_NUMBER: _ClassVar[int]
    SECCOMPPROFILE_FIELD_NUMBER: _ClassVar[int]
    SELINUXOPTIONS_FIELD_NUMBER: _ClassVar[int]
    WINDOWSOPTIONS_FIELD_NUMBER: _ClassVar[int]
    allowPrivilegeEscalation: bool
    capabilities: Capabilities
    privileged: bool
    procMount: str
    readOnlyRootFilesystem: bool
    runAsGroup: int
    runAsNonRoot: bool
    runAsUser: int
    seLinuxOptions: SELinuxOptions
    seccompProfile: SeccompProfile
    windowsOptions: WindowsSecurityContextOptions
    def __init__(self, capabilities: _Optional[_Union[Capabilities, _Mapping]] = ..., privileged: bool = ..., seLinuxOptions: _Optional[_Union[SELinuxOptions, _Mapping]] = ..., windowsOptions: _Optional[_Union[WindowsSecurityContextOptions, _Mapping]] = ..., runAsUser: _Optional[int] = ..., runAsGroup: _Optional[int] = ..., runAsNonRoot: bool = ..., readOnlyRootFilesystem: bool = ..., allowPrivilegeEscalation: bool = ..., procMount: _Optional[str] = ..., seccompProfile: _Optional[_Union[SeccompProfile, _Mapping]] = ...) -> None: ...

class SerializedReference(_message.Message):
    __slots__ = ["reference"]
    REFERENCE_FIELD_NUMBER: _ClassVar[int]
    reference: ObjectReference
    def __init__(self, reference: _Optional[_Union[ObjectReference, _Mapping]] = ...) -> None: ...

class Service(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1.ObjectMeta
    spec: ServiceSpec
    status: ServiceStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ServiceSpec, _Mapping]] = ..., status: _Optional[_Union[ServiceStatus, _Mapping]] = ...) -> None: ...

class ServiceAccount(_message.Message):
    __slots__ = ["automountServiceAccountToken", "imagePullSecrets", "metadata", "secrets"]
    AUTOMOUNTSERVICEACCOUNTTOKEN_FIELD_NUMBER: _ClassVar[int]
    IMAGEPULLSECRETS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SECRETS_FIELD_NUMBER: _ClassVar[int]
    automountServiceAccountToken: bool
    imagePullSecrets: _containers.RepeatedCompositeFieldContainer[LocalObjectReference]
    metadata: _generated_pb2_1.ObjectMeta
    secrets: _containers.RepeatedCompositeFieldContainer[ObjectReference]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ObjectMeta, _Mapping]] = ..., secrets: _Optional[_Iterable[_Union[ObjectReference, _Mapping]]] = ..., imagePullSecrets: _Optional[_Iterable[_Union[LocalObjectReference, _Mapping]]] = ..., automountServiceAccountToken: bool = ...) -> None: ...

class ServiceAccountList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ServiceAccount]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ServiceAccount, _Mapping]]] = ...) -> None: ...

class ServiceAccountTokenProjection(_message.Message):
    __slots__ = ["audience", "expirationSeconds", "path"]
    AUDIENCE_FIELD_NUMBER: _ClassVar[int]
    EXPIRATIONSECONDS_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    audience: str
    expirationSeconds: int
    path: str
    def __init__(self, audience: _Optional[str] = ..., expirationSeconds: _Optional[int] = ..., path: _Optional[str] = ...) -> None: ...

class ServiceList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Service]
    metadata: _generated_pb2_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Service, _Mapping]]] = ...) -> None: ...

class ServicePort(_message.Message):
    __slots__ = ["appProtocol", "name", "nodePort", "port", "protocol", "targetPort"]
    APPPROTOCOL_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NODEPORT_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    PROTOCOL_FIELD_NUMBER: _ClassVar[int]
    TARGETPORT_FIELD_NUMBER: _ClassVar[int]
    appProtocol: str
    name: str
    nodePort: int
    port: int
    protocol: str
    targetPort: _generated_pb2_1_1_1_1.IntOrString
    def __init__(self, name: _Optional[str] = ..., protocol: _Optional[str] = ..., appProtocol: _Optional[str] = ..., port: _Optional[int] = ..., targetPort: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ..., nodePort: _Optional[int] = ...) -> None: ...

class ServiceProxyOptions(_message.Message):
    __slots__ = ["path"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...

class ServiceSpec(_message.Message):
    __slots__ = ["allocateLoadBalancerNodePorts", "clusterIP", "clusterIPs", "externalIPs", "externalName", "externalTrafficPolicy", "healthCheckNodePort", "internalTrafficPolicy", "ipFamilies", "ipFamilyPolicy", "loadBalancerClass", "loadBalancerIP", "loadBalancerSourceRanges", "ports", "publishNotReadyAddresses", "selector", "sessionAffinity", "sessionAffinityConfig", "type"]
    class SelectorEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ALLOCATELOADBALANCERNODEPORTS_FIELD_NUMBER: _ClassVar[int]
    CLUSTERIPS_FIELD_NUMBER: _ClassVar[int]
    CLUSTERIP_FIELD_NUMBER: _ClassVar[int]
    EXTERNALIPS_FIELD_NUMBER: _ClassVar[int]
    EXTERNALNAME_FIELD_NUMBER: _ClassVar[int]
    EXTERNALTRAFFICPOLICY_FIELD_NUMBER: _ClassVar[int]
    HEALTHCHECKNODEPORT_FIELD_NUMBER: _ClassVar[int]
    INTERNALTRAFFICPOLICY_FIELD_NUMBER: _ClassVar[int]
    IPFAMILIES_FIELD_NUMBER: _ClassVar[int]
    IPFAMILYPOLICY_FIELD_NUMBER: _ClassVar[int]
    LOADBALANCERCLASS_FIELD_NUMBER: _ClassVar[int]
    LOADBALANCERIP_FIELD_NUMBER: _ClassVar[int]
    LOADBALANCERSOURCERANGES_FIELD_NUMBER: _ClassVar[int]
    PORTS_FIELD_NUMBER: _ClassVar[int]
    PUBLISHNOTREADYADDRESSES_FIELD_NUMBER: _ClassVar[int]
    SELECTOR_FIELD_NUMBER: _ClassVar[int]
    SESSIONAFFINITYCONFIG_FIELD_NUMBER: _ClassVar[int]
    SESSIONAFFINITY_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    allocateLoadBalancerNodePorts: bool
    clusterIP: str
    clusterIPs: _containers.RepeatedScalarFieldContainer[str]
    externalIPs: _containers.RepeatedScalarFieldContainer[str]
    externalName: str
    externalTrafficPolicy: str
    healthCheckNodePort: int
    internalTrafficPolicy: str
    ipFamilies: _containers.RepeatedScalarFieldContainer[str]
    ipFamilyPolicy: str
    loadBalancerClass: str
    loadBalancerIP: str
    loadBalancerSourceRanges: _containers.RepeatedScalarFieldContainer[str]
    ports: _containers.RepeatedCompositeFieldContainer[ServicePort]
    publishNotReadyAddresses: bool
    selector: _containers.ScalarMap[str, str]
    sessionAffinity: str
    sessionAffinityConfig: SessionAffinityConfig
    type: str
    def __init__(self, ports: _Optional[_Iterable[_Union[ServicePort, _Mapping]]] = ..., selector: _Optional[_Mapping[str, str]] = ..., clusterIP: _Optional[str] = ..., clusterIPs: _Optional[_Iterable[str]] = ..., type: _Optional[str] = ..., externalIPs: _Optional[_Iterable[str]] = ..., sessionAffinity: _Optional[str] = ..., loadBalancerIP: _Optional[str] = ..., loadBalancerSourceRanges: _Optional[_Iterable[str]] = ..., externalName: _Optional[str] = ..., externalTrafficPolicy: _Optional[str] = ..., healthCheckNodePort: _Optional[int] = ..., publishNotReadyAddresses: bool = ..., sessionAffinityConfig: _Optional[_Union[SessionAffinityConfig, _Mapping]] = ..., ipFamilies: _Optional[_Iterable[str]] = ..., ipFamilyPolicy: _Optional[str] = ..., allocateLoadBalancerNodePorts: bool = ..., loadBalancerClass: _Optional[str] = ..., internalTrafficPolicy: _Optional[str] = ...) -> None: ...

class ServiceStatus(_message.Message):
    __slots__ = ["conditions", "loadBalancer"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    LOADBALANCER_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Condition]
    loadBalancer: LoadBalancerStatus
    def __init__(self, loadBalancer: _Optional[_Union[LoadBalancerStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1.Condition, _Mapping]]] = ...) -> None: ...

class SessionAffinityConfig(_message.Message):
    __slots__ = ["clientIP"]
    CLIENTIP_FIELD_NUMBER: _ClassVar[int]
    clientIP: ClientIPConfig
    def __init__(self, clientIP: _Optional[_Union[ClientIPConfig, _Mapping]] = ...) -> None: ...

class StorageOSPersistentVolumeSource(_message.Message):
    __slots__ = ["fsType", "readOnly", "secretRef", "volumeName", "volumeNamespace"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAMESPACE_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAME_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    readOnly: bool
    secretRef: ObjectReference
    volumeName: str
    volumeNamespace: str
    def __init__(self, volumeName: _Optional[str] = ..., volumeNamespace: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., secretRef: _Optional[_Union[ObjectReference, _Mapping]] = ...) -> None: ...

class StorageOSVolumeSource(_message.Message):
    __slots__ = ["fsType", "readOnly", "secretRef", "volumeName", "volumeNamespace"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAMESPACE_FIELD_NUMBER: _ClassVar[int]
    VOLUMENAME_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    readOnly: bool
    secretRef: LocalObjectReference
    volumeName: str
    volumeNamespace: str
    def __init__(self, volumeName: _Optional[str] = ..., volumeNamespace: _Optional[str] = ..., fsType: _Optional[str] = ..., readOnly: bool = ..., secretRef: _Optional[_Union[LocalObjectReference, _Mapping]] = ...) -> None: ...

class Sysctl(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class TCPSocketAction(_message.Message):
    __slots__ = ["host", "port"]
    HOST_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    host: str
    port: _generated_pb2_1_1_1_1.IntOrString
    def __init__(self, port: _Optional[_Union[_generated_pb2_1_1_1_1.IntOrString, _Mapping]] = ..., host: _Optional[str] = ...) -> None: ...

class Taint(_message.Message):
    __slots__ = ["effect", "key", "timeAdded", "value"]
    EFFECT_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    TIMEADDED_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    effect: str
    key: str
    timeAdded: _generated_pb2_1.Time
    value: str
    def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ..., effect: _Optional[str] = ..., timeAdded: _Optional[_Union[_generated_pb2_1.Time, _Mapping]] = ...) -> None: ...

class Toleration(_message.Message):
    __slots__ = ["effect", "key", "operator", "tolerationSeconds", "value"]
    EFFECT_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    TOLERATIONSECONDS_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    effect: str
    key: str
    operator: str
    tolerationSeconds: int
    value: str
    def __init__(self, key: _Optional[str] = ..., operator: _Optional[str] = ..., value: _Optional[str] = ..., effect: _Optional[str] = ..., tolerationSeconds: _Optional[int] = ...) -> None: ...

class TopologySelectorLabelRequirement(_message.Message):
    __slots__ = ["key", "values"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    key: str
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, key: _Optional[str] = ..., values: _Optional[_Iterable[str]] = ...) -> None: ...

class TopologySelectorTerm(_message.Message):
    __slots__ = ["matchLabelExpressions"]
    MATCHLABELEXPRESSIONS_FIELD_NUMBER: _ClassVar[int]
    matchLabelExpressions: _containers.RepeatedCompositeFieldContainer[TopologySelectorLabelRequirement]
    def __init__(self, matchLabelExpressions: _Optional[_Iterable[_Union[TopologySelectorLabelRequirement, _Mapping]]] = ...) -> None: ...

class TopologySpreadConstraint(_message.Message):
    __slots__ = ["labelSelector", "maxSkew", "minDomains", "topologyKey", "whenUnsatisfiable"]
    LABELSELECTOR_FIELD_NUMBER: _ClassVar[int]
    MAXSKEW_FIELD_NUMBER: _ClassVar[int]
    MINDOMAINS_FIELD_NUMBER: _ClassVar[int]
    TOPOLOGYKEY_FIELD_NUMBER: _ClassVar[int]
    WHENUNSATISFIABLE_FIELD_NUMBER: _ClassVar[int]
    labelSelector: _generated_pb2_1.LabelSelector
    maxSkew: int
    minDomains: int
    topologyKey: str
    whenUnsatisfiable: str
    def __init__(self, maxSkew: _Optional[int] = ..., topologyKey: _Optional[str] = ..., whenUnsatisfiable: _Optional[str] = ..., labelSelector: _Optional[_Union[_generated_pb2_1.LabelSelector, _Mapping]] = ..., minDomains: _Optional[int] = ...) -> None: ...

class TypedLocalObjectReference(_message.Message):
    __slots__ = ["apiGroup", "kind", "name"]
    APIGROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    apiGroup: str
    kind: str
    name: str
    def __init__(self, apiGroup: _Optional[str] = ..., kind: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class Volume(_message.Message):
    __slots__ = ["name", "volumeSource"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VOLUMESOURCE_FIELD_NUMBER: _ClassVar[int]
    name: str
    volumeSource: VolumeSource
    def __init__(self, name: _Optional[str] = ..., volumeSource: _Optional[_Union[VolumeSource, _Mapping]] = ...) -> None: ...

class VolumeDevice(_message.Message):
    __slots__ = ["devicePath", "name"]
    DEVICEPATH_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    devicePath: str
    name: str
    def __init__(self, name: _Optional[str] = ..., devicePath: _Optional[str] = ...) -> None: ...

class VolumeMount(_message.Message):
    __slots__ = ["mountPath", "mountPropagation", "name", "readOnly", "subPath", "subPathExpr"]
    MOUNTPATH_FIELD_NUMBER: _ClassVar[int]
    MOUNTPROPAGATION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    READONLY_FIELD_NUMBER: _ClassVar[int]
    SUBPATHEXPR_FIELD_NUMBER: _ClassVar[int]
    SUBPATH_FIELD_NUMBER: _ClassVar[int]
    mountPath: str
    mountPropagation: str
    name: str
    readOnly: bool
    subPath: str
    subPathExpr: str
    def __init__(self, name: _Optional[str] = ..., readOnly: bool = ..., mountPath: _Optional[str] = ..., subPath: _Optional[str] = ..., mountPropagation: _Optional[str] = ..., subPathExpr: _Optional[str] = ...) -> None: ...

class VolumeNodeAffinity(_message.Message):
    __slots__ = ["required"]
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    required: NodeSelector
    def __init__(self, required: _Optional[_Union[NodeSelector, _Mapping]] = ...) -> None: ...

class VolumeProjection(_message.Message):
    __slots__ = ["configMap", "downwardAPI", "secret", "serviceAccountToken"]
    CONFIGMAP_FIELD_NUMBER: _ClassVar[int]
    DOWNWARDAPI_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    SERVICEACCOUNTTOKEN_FIELD_NUMBER: _ClassVar[int]
    configMap: ConfigMapProjection
    downwardAPI: DownwardAPIProjection
    secret: SecretProjection
    serviceAccountToken: ServiceAccountTokenProjection
    def __init__(self, secret: _Optional[_Union[SecretProjection, _Mapping]] = ..., downwardAPI: _Optional[_Union[DownwardAPIProjection, _Mapping]] = ..., configMap: _Optional[_Union[ConfigMapProjection, _Mapping]] = ..., serviceAccountToken: _Optional[_Union[ServiceAccountTokenProjection, _Mapping]] = ...) -> None: ...

class VolumeSource(_message.Message):
    __slots__ = ["awsElasticBlockStore", "azureDisk", "azureFile", "cephfs", "cinder", "configMap", "csi", "downwardAPI", "emptyDir", "ephemeral", "fc", "flexVolume", "flocker", "gcePersistentDisk", "gitRepo", "glusterfs", "hostPath", "iscsi", "nfs", "persistentVolumeClaim", "photonPersistentDisk", "portworxVolume", "projected", "quobyte", "rbd", "scaleIO", "secret", "storageos", "vsphereVolume"]
    AWSELASTICBLOCKSTORE_FIELD_NUMBER: _ClassVar[int]
    AZUREDISK_FIELD_NUMBER: _ClassVar[int]
    AZUREFILE_FIELD_NUMBER: _ClassVar[int]
    CEPHFS_FIELD_NUMBER: _ClassVar[int]
    CINDER_FIELD_NUMBER: _ClassVar[int]
    CONFIGMAP_FIELD_NUMBER: _ClassVar[int]
    CSI_FIELD_NUMBER: _ClassVar[int]
    DOWNWARDAPI_FIELD_NUMBER: _ClassVar[int]
    EMPTYDIR_FIELD_NUMBER: _ClassVar[int]
    EPHEMERAL_FIELD_NUMBER: _ClassVar[int]
    FC_FIELD_NUMBER: _ClassVar[int]
    FLEXVOLUME_FIELD_NUMBER: _ClassVar[int]
    FLOCKER_FIELD_NUMBER: _ClassVar[int]
    GCEPERSISTENTDISK_FIELD_NUMBER: _ClassVar[int]
    GITREPO_FIELD_NUMBER: _ClassVar[int]
    GLUSTERFS_FIELD_NUMBER: _ClassVar[int]
    HOSTPATH_FIELD_NUMBER: _ClassVar[int]
    ISCSI_FIELD_NUMBER: _ClassVar[int]
    NFS_FIELD_NUMBER: _ClassVar[int]
    PERSISTENTVOLUMECLAIM_FIELD_NUMBER: _ClassVar[int]
    PHOTONPERSISTENTDISK_FIELD_NUMBER: _ClassVar[int]
    PORTWORXVOLUME_FIELD_NUMBER: _ClassVar[int]
    PROJECTED_FIELD_NUMBER: _ClassVar[int]
    QUOBYTE_FIELD_NUMBER: _ClassVar[int]
    RBD_FIELD_NUMBER: _ClassVar[int]
    SCALEIO_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    STORAGEOS_FIELD_NUMBER: _ClassVar[int]
    VSPHEREVOLUME_FIELD_NUMBER: _ClassVar[int]
    awsElasticBlockStore: AWSElasticBlockStoreVolumeSource
    azureDisk: AzureDiskVolumeSource
    azureFile: AzureFileVolumeSource
    cephfs: CephFSVolumeSource
    cinder: CinderVolumeSource
    configMap: ConfigMapVolumeSource
    csi: CSIVolumeSource
    downwardAPI: DownwardAPIVolumeSource
    emptyDir: EmptyDirVolumeSource
    ephemeral: EphemeralVolumeSource
    fc: FCVolumeSource
    flexVolume: FlexVolumeSource
    flocker: FlockerVolumeSource
    gcePersistentDisk: GCEPersistentDiskVolumeSource
    gitRepo: GitRepoVolumeSource
    glusterfs: GlusterfsVolumeSource
    hostPath: HostPathVolumeSource
    iscsi: ISCSIVolumeSource
    nfs: NFSVolumeSource
    persistentVolumeClaim: PersistentVolumeClaimVolumeSource
    photonPersistentDisk: PhotonPersistentDiskVolumeSource
    portworxVolume: PortworxVolumeSource
    projected: ProjectedVolumeSource
    quobyte: QuobyteVolumeSource
    rbd: RBDVolumeSource
    scaleIO: ScaleIOVolumeSource
    secret: SecretVolumeSource
    storageos: StorageOSVolumeSource
    vsphereVolume: VsphereVirtualDiskVolumeSource
    def __init__(self, hostPath: _Optional[_Union[HostPathVolumeSource, _Mapping]] = ..., emptyDir: _Optional[_Union[EmptyDirVolumeSource, _Mapping]] = ..., gcePersistentDisk: _Optional[_Union[GCEPersistentDiskVolumeSource, _Mapping]] = ..., awsElasticBlockStore: _Optional[_Union[AWSElasticBlockStoreVolumeSource, _Mapping]] = ..., gitRepo: _Optional[_Union[GitRepoVolumeSource, _Mapping]] = ..., secret: _Optional[_Union[SecretVolumeSource, _Mapping]] = ..., nfs: _Optional[_Union[NFSVolumeSource, _Mapping]] = ..., iscsi: _Optional[_Union[ISCSIVolumeSource, _Mapping]] = ..., glusterfs: _Optional[_Union[GlusterfsVolumeSource, _Mapping]] = ..., persistentVolumeClaim: _Optional[_Union[PersistentVolumeClaimVolumeSource, _Mapping]] = ..., rbd: _Optional[_Union[RBDVolumeSource, _Mapping]] = ..., flexVolume: _Optional[_Union[FlexVolumeSource, _Mapping]] = ..., cinder: _Optional[_Union[CinderVolumeSource, _Mapping]] = ..., cephfs: _Optional[_Union[CephFSVolumeSource, _Mapping]] = ..., flocker: _Optional[_Union[FlockerVolumeSource, _Mapping]] = ..., downwardAPI: _Optional[_Union[DownwardAPIVolumeSource, _Mapping]] = ..., fc: _Optional[_Union[FCVolumeSource, _Mapping]] = ..., azureFile: _Optional[_Union[AzureFileVolumeSource, _Mapping]] = ..., configMap: _Optional[_Union[ConfigMapVolumeSource, _Mapping]] = ..., vsphereVolume: _Optional[_Union[VsphereVirtualDiskVolumeSource, _Mapping]] = ..., quobyte: _Optional[_Union[QuobyteVolumeSource, _Mapping]] = ..., azureDisk: _Optional[_Union[AzureDiskVolumeSource, _Mapping]] = ..., photonPersistentDisk: _Optional[_Union[PhotonPersistentDiskVolumeSource, _Mapping]] = ..., projected: _Optional[_Union[ProjectedVolumeSource, _Mapping]] = ..., portworxVolume: _Optional[_Union[PortworxVolumeSource, _Mapping]] = ..., scaleIO: _Optional[_Union[ScaleIOVolumeSource, _Mapping]] = ..., storageos: _Optional[_Union[StorageOSVolumeSource, _Mapping]] = ..., csi: _Optional[_Union[CSIVolumeSource, _Mapping]] = ..., ephemeral: _Optional[_Union[EphemeralVolumeSource, _Mapping]] = ...) -> None: ...

class VsphereVirtualDiskVolumeSource(_message.Message):
    __slots__ = ["fsType", "storagePolicyID", "storagePolicyName", "volumePath"]
    FSTYPE_FIELD_NUMBER: _ClassVar[int]
    STORAGEPOLICYID_FIELD_NUMBER: _ClassVar[int]
    STORAGEPOLICYNAME_FIELD_NUMBER: _ClassVar[int]
    VOLUMEPATH_FIELD_NUMBER: _ClassVar[int]
    fsType: str
    storagePolicyID: str
    storagePolicyName: str
    volumePath: str
    def __init__(self, volumePath: _Optional[str] = ..., fsType: _Optional[str] = ..., storagePolicyName: _Optional[str] = ..., storagePolicyID: _Optional[str] = ...) -> None: ...

class WeightedPodAffinityTerm(_message.Message):
    __slots__ = ["podAffinityTerm", "weight"]
    PODAFFINITYTERM_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_FIELD_NUMBER: _ClassVar[int]
    podAffinityTerm: PodAffinityTerm
    weight: int
    def __init__(self, weight: _Optional[int] = ..., podAffinityTerm: _Optional[_Union[PodAffinityTerm, _Mapping]] = ...) -> None: ...

class WindowsSecurityContextOptions(_message.Message):
    __slots__ = ["gmsaCredentialSpec", "gmsaCredentialSpecName", "hostProcess", "runAsUserName"]
    GMSACREDENTIALSPECNAME_FIELD_NUMBER: _ClassVar[int]
    GMSACREDENTIALSPEC_FIELD_NUMBER: _ClassVar[int]
    HOSTPROCESS_FIELD_NUMBER: _ClassVar[int]
    RUNASUSERNAME_FIELD_NUMBER: _ClassVar[int]
    gmsaCredentialSpec: str
    gmsaCredentialSpecName: str
    hostProcess: bool
    runAsUserName: str
    def __init__(self, gmsaCredentialSpecName: _Optional[str] = ..., gmsaCredentialSpec: _Optional[str] = ..., runAsUserName: _Optional[str] = ..., hostProcess: bool = ...) -> None: ...
