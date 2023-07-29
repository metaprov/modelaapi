from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AggregationRule(_message.Message):
    __slots__ = ["clusterRoleSelectors"]
    CLUSTERROLESELECTORS_FIELD_NUMBER: _ClassVar[int]
    clusterRoleSelectors: _containers.RepeatedCompositeFieldContainer[_generated_pb2.LabelSelector]
    def __init__(self, clusterRoleSelectors: _Optional[_Iterable[_Union[_generated_pb2.LabelSelector, _Mapping]]] = ...) -> None: ...

class ClusterRole(_message.Message):
    __slots__ = ["aggregationRule", "metadata", "rules"]
    AGGREGATIONRULE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    RULES_FIELD_NUMBER: _ClassVar[int]
    aggregationRule: AggregationRule
    metadata: _generated_pb2.ObjectMeta
    rules: _containers.RepeatedCompositeFieldContainer[PolicyRule]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ObjectMeta, _Mapping]] = ..., rules: _Optional[_Iterable[_Union[PolicyRule, _Mapping]]] = ..., aggregationRule: _Optional[_Union[AggregationRule, _Mapping]] = ...) -> None: ...

class ClusterRoleBinding(_message.Message):
    __slots__ = ["metadata", "roleRef", "subjects"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ROLEREF_FIELD_NUMBER: _ClassVar[int]
    SUBJECTS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2.ObjectMeta
    roleRef: RoleRef
    subjects: _containers.RepeatedCompositeFieldContainer[Subject]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ObjectMeta, _Mapping]] = ..., subjects: _Optional[_Iterable[_Union[Subject, _Mapping]]] = ..., roleRef: _Optional[_Union[RoleRef, _Mapping]] = ...) -> None: ...

class ClusterRoleBindingList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ClusterRoleBinding]
    metadata: _generated_pb2.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ClusterRoleBinding, _Mapping]]] = ...) -> None: ...

class ClusterRoleList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ClusterRole]
    metadata: _generated_pb2.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ClusterRole, _Mapping]]] = ...) -> None: ...

class PolicyRule(_message.Message):
    __slots__ = ["apiGroups", "nonResourceURLs", "resourceNames", "resources", "verbs"]
    APIGROUPS_FIELD_NUMBER: _ClassVar[int]
    NONRESOURCEURLS_FIELD_NUMBER: _ClassVar[int]
    RESOURCENAMES_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    VERBS_FIELD_NUMBER: _ClassVar[int]
    apiGroups: _containers.RepeatedScalarFieldContainer[str]
    nonResourceURLs: _containers.RepeatedScalarFieldContainer[str]
    resourceNames: _containers.RepeatedScalarFieldContainer[str]
    resources: _containers.RepeatedScalarFieldContainer[str]
    verbs: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, verbs: _Optional[_Iterable[str]] = ..., apiGroups: _Optional[_Iterable[str]] = ..., resources: _Optional[_Iterable[str]] = ..., resourceNames: _Optional[_Iterable[str]] = ..., nonResourceURLs: _Optional[_Iterable[str]] = ...) -> None: ...

class Role(_message.Message):
    __slots__ = ["metadata", "rules"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    RULES_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2.ObjectMeta
    rules: _containers.RepeatedCompositeFieldContainer[PolicyRule]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ObjectMeta, _Mapping]] = ..., rules: _Optional[_Iterable[_Union[PolicyRule, _Mapping]]] = ...) -> None: ...

class RoleBinding(_message.Message):
    __slots__ = ["metadata", "roleRef", "subjects"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ROLEREF_FIELD_NUMBER: _ClassVar[int]
    SUBJECTS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2.ObjectMeta
    roleRef: RoleRef
    subjects: _containers.RepeatedCompositeFieldContainer[Subject]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ObjectMeta, _Mapping]] = ..., subjects: _Optional[_Iterable[_Union[Subject, _Mapping]]] = ..., roleRef: _Optional[_Union[RoleRef, _Mapping]] = ...) -> None: ...

class RoleBindingList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[RoleBinding]
    metadata: _generated_pb2.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[RoleBinding, _Mapping]]] = ...) -> None: ...

class RoleList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Role]
    metadata: _generated_pb2.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Role, _Mapping]]] = ...) -> None: ...

class RoleRef(_message.Message):
    __slots__ = ["apiGroup", "kind", "name"]
    APIGROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    apiGroup: str
    kind: str
    name: str
    def __init__(self, apiGroup: _Optional[str] = ..., kind: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class Subject(_message.Message):
    __slots__ = ["apiGroup", "kind", "name", "namespace"]
    APIGROUP_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    apiGroup: str
    kind: str
    name: str
    namespace: str
    def __init__(self, kind: _Optional[str] = ..., apiGroup: _Optional[str] = ..., name: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...
