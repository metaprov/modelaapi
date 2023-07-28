from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.api.apps.v1 import generated_pb2 as _generated_pb2_1_1
from k8s.io.api.rbac.v1 import generated_pb2 as _generated_pb2_1_1_1
from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetSecretRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetSecretResponse(_message.Message):
    __slots__ = ["secret"]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    secret: SecretInfo
    def __init__(self, secret: _Optional[_Union[SecretInfo, _Mapping]] = ...) -> None: ...

class ListSecretsRequest(_message.Message):
    __slots__ = ["namespace", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
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

class ListSecretResponse(_message.Message):
    __slots__ = ["secrets"]
    SECRETS_FIELD_NUMBER: _ClassVar[int]
    secrets: _containers.RepeatedCompositeFieldContainer[SecretInfo]
    def __init__(self, secrets: _Optional[_Iterable[_Union[SecretInfo, _Mapping]]] = ...) -> None: ...

class GetDeploymentRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetDeploymentResponse(_message.Message):
    __slots__ = ["deployment"]
    DEPLOYMENT_FIELD_NUMBER: _ClassVar[int]
    deployment: DeploymentInfo
    def __init__(self, deployment: _Optional[_Union[DeploymentInfo, _Mapping]] = ...) -> None: ...

class ListDeploymentsRequest(_message.Message):
    __slots__ = ["namespace", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
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

class ListDeploymentsResponse(_message.Message):
    __slots__ = ["deployments"]
    DEPLOYMENTS_FIELD_NUMBER: _ClassVar[int]
    deployments: _containers.RepeatedCompositeFieldContainer[DeploymentInfo]
    def __init__(self, deployments: _Optional[_Iterable[_Union[DeploymentInfo, _Mapping]]] = ...) -> None: ...

class GetServiceRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetServiceResponse(_message.Message):
    __slots__ = ["service"]
    SERVICE_FIELD_NUMBER: _ClassVar[int]
    service: ServiceInfo
    def __init__(self, service: _Optional[_Union[ServiceInfo, _Mapping]] = ...) -> None: ...

class ListServicesRequest(_message.Message):
    __slots__ = ["namespace", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
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

class ListServicesResponse(_message.Message):
    __slots__ = ["services"]
    SERVICES_FIELD_NUMBER: _ClassVar[int]
    services: _containers.RepeatedCompositeFieldContainer[ServiceInfo]
    def __init__(self, services: _Optional[_Iterable[_Union[ServiceInfo, _Mapping]]] = ...) -> None: ...

class GetPodRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetPodResponse(_message.Message):
    __slots__ = ["pod"]
    POD_FIELD_NUMBER: _ClassVar[int]
    pod: PodInfo
    def __init__(self, pod: _Optional[_Union[PodInfo, _Mapping]] = ...) -> None: ...

class ListPodsRequest(_message.Message):
    __slots__ = ["namespace", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
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

class ListPodsResponse(_message.Message):
    __slots__ = ["pods"]
    PODS_FIELD_NUMBER: _ClassVar[int]
    pods: _containers.RepeatedCompositeFieldContainer[PodInfo]
    def __init__(self, pods: _Optional[_Iterable[_Union[PodInfo, _Mapping]]] = ...) -> None: ...

class GetJobRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetJobResponse(_message.Message):
    __slots__ = ["job"]
    JOB_FIELD_NUMBER: _ClassVar[int]
    job: JobInfo
    def __init__(self, job: _Optional[_Union[JobInfo, _Mapping]] = ...) -> None: ...

class ListJobsRequest(_message.Message):
    __slots__ = ["tenant", "namespace", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TENANT_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    namespace: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, tenant: _Optional[str] = ..., namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListJobsResponse(_message.Message):
    __slots__ = ["jobs"]
    JOBS_FIELD_NUMBER: _ClassVar[int]
    jobs: _containers.RepeatedCompositeFieldContainer[JobInfo]
    def __init__(self, jobs: _Optional[_Iterable[_Union[JobInfo, _Mapping]]] = ...) -> None: ...

class GetContainerLogRequest(_message.Message):
    __slots__ = ["namespace", "name", "containername"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CONTAINERNAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    containername: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., containername: _Optional[str] = ...) -> None: ...

class GetContainerLogResponse(_message.Message):
    __slots__ = ["log"]
    LOG_FIELD_NUMBER: _ClassVar[int]
    log: bytes
    def __init__(self, log: _Optional[bytes] = ...) -> None: ...

class ListEventsRequest(_message.Message):
    __slots__ = ["namespace", "name", "labels"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    labels: _containers.ScalarMap[str, str]
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListEventsResponse(_message.Message):
    __slots__ = ["items"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _generated_pb2_1.EventList
    def __init__(self, items: _Optional[_Union[_generated_pb2_1.EventList, _Mapping]] = ...) -> None: ...

class SecretInfo(_message.Message):
    __slots__ = ["name", "namespace"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class ServiceInfo(_message.Message):
    __slots__ = ["name", "namespace", "labels", "ip", "port", "createdAt", "status"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    IP_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    CREATEDAT_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    labels: _containers.ScalarMap[str, str]
    ip: str
    port: str
    createdAt: _generated_pb2.Time
    status: _generated_pb2_1.ServiceStatus
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., ip: _Optional[str] = ..., port: _Optional[str] = ..., createdAt: _Optional[_Union[_generated_pb2.Time, _Mapping]] = ..., status: _Optional[_Union[_generated_pb2_1.ServiceStatus, _Mapping]] = ...) -> None: ...

class ContainerInfo(_message.Message):
    __slots__ = ["image", "name", "log"]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LOG_FIELD_NUMBER: _ClassVar[int]
    image: str
    name: str
    log: bytes
    def __init__(self, image: _Optional[str] = ..., name: _Optional[str] = ..., log: _Optional[bytes] = ...) -> None: ...

class DeploymentInfo(_message.Message):
    __slots__ = ["name", "namespace", "labels", "createdAt", "status", "pods"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    CREATEDAT_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PODS_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    labels: _containers.ScalarMap[str, str]
    createdAt: _generated_pb2.Time
    status: _generated_pb2_1_1.DeploymentStatus
    pods: _containers.RepeatedCompositeFieldContainer[PodInfo]
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., createdAt: _Optional[_Union[_generated_pb2.Time, _Mapping]] = ..., status: _Optional[_Union[_generated_pb2_1_1.DeploymentStatus, _Mapping]] = ..., pods: _Optional[_Iterable[_Union[PodInfo, _Mapping]]] = ...) -> None: ...

class PodInfo(_message.Message):
    __slots__ = ["name", "namespace", "labels", "createdAt", "status", "contrainers"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    CREATEDAT_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CONTRAINERS_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    labels: _containers.ScalarMap[str, str]
    createdAt: _generated_pb2.Time
    status: _generated_pb2_1.PodStatus
    contrainers: _containers.RepeatedCompositeFieldContainer[ContainerInfo]
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., createdAt: _Optional[_Union[_generated_pb2.Time, _Mapping]] = ..., status: _Optional[_Union[_generated_pb2_1.PodStatus, _Mapping]] = ..., contrainers: _Optional[_Iterable[_Union[ContainerInfo, _Mapping]]] = ...) -> None: ...

class JobInfo(_message.Message):
    __slots__ = ["name", "namespace", "labels", "startedAt", "completedAt", "failed", "succeeded", "active", "ready", "pods", "model", "study", "dataset"]
    class LabelsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    LABELS_FIELD_NUMBER: _ClassVar[int]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    FAILED_FIELD_NUMBER: _ClassVar[int]
    SUCCEEDED_FIELD_NUMBER: _ClassVar[int]
    ACTIVE_FIELD_NUMBER: _ClassVar[int]
    READY_FIELD_NUMBER: _ClassVar[int]
    PODS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    labels: _containers.ScalarMap[str, str]
    startedAt: _generated_pb2.Time
    completedAt: _generated_pb2.Time
    failed: int
    succeeded: int
    active: int
    ready: int
    pods: _containers.RepeatedCompositeFieldContainer[PodInfo]
    model: str
    study: str
    dataset: str
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ..., labels: _Optional[_Mapping[str, str]] = ..., startedAt: _Optional[_Union[_generated_pb2.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2.Time, _Mapping]] = ..., failed: _Optional[int] = ..., succeeded: _Optional[int] = ..., active: _Optional[int] = ..., ready: _Optional[int] = ..., pods: _Optional[_Iterable[_Union[PodInfo, _Mapping]]] = ..., model: _Optional[str] = ..., study: _Optional[str] = ..., dataset: _Optional[str] = ...) -> None: ...
