from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1
from k8s.io.apimachinery.pkg.api.resource import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Account(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: AccountSpec
    status: AccountStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[AccountSpec, _Mapping]] = ..., status: _Optional[_Union[AccountStatus, _Mapping]] = ...) -> None: ...

class AccountList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Account]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Account, _Mapping]]] = ...) -> None: ...

class AccountSpec(_message.Message):
    __slots__ = ["admin", "avatar", "email", "favoriteProducts", "firstName", "lastName", "memberOf", "phone", "resetPassword", "tenantRef", "type", "username"]
    ADMIN_FIELD_NUMBER: _ClassVar[int]
    AVATAR_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    FAVORITEPRODUCTS_FIELD_NUMBER: _ClassVar[int]
    FIRSTNAME_FIELD_NUMBER: _ClassVar[int]
    LASTNAME_FIELD_NUMBER: _ClassVar[int]
    MEMBEROF_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    RESETPASSWORD_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    admin: bool
    avatar: _generated_pb2.FileLocation
    email: str
    favoriteProducts: _containers.RepeatedScalarFieldContainer[str]
    firstName: str
    lastName: str
    memberOf: str
    phone: str
    resetPassword: bool
    tenantRef: _generated_pb2_1.ObjectReference
    type: str
    username: str
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., type: _Optional[str] = ..., username: _Optional[str] = ..., firstName: _Optional[str] = ..., lastName: _Optional[str] = ..., email: _Optional[str] = ..., phone: _Optional[str] = ..., admin: bool = ..., memberOf: _Optional[str] = ..., resetPassword: bool = ..., avatar: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., favoriteProducts: _Optional[_Iterable[str]] = ...) -> None: ...

class AccountStatus(_message.Message):
    __slots__ = ["conditions", "datasetsCount", "failureMessage", "failureReason", "featureGroupsCount", "membersCount", "modelClassesCount", "modelsCount", "observedGeneration", "predictorsCount", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    DATASETSCOUNT_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FEATUREGROUPSCOUNT_FIELD_NUMBER: _ClassVar[int]
    MEMBERSCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSESCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    PREDICTORSCOUNT_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    datasetsCount: int
    failureMessage: str
    failureReason: str
    featureGroupsCount: int
    membersCount: int
    modelClassesCount: int
    modelsCount: int
    observedGeneration: int
    predictorsCount: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., modelsCount: _Optional[int] = ..., modelClassesCount: _Optional[int] = ..., predictorsCount: _Optional[int] = ..., featureGroupsCount: _Optional[int] = ..., datasetsCount: _Optional[int] = ..., membersCount: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class Alert(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: AlertSpec
    status: AlertStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[AlertSpec, _Mapping]] = ..., status: _Optional[_Union[AlertStatus, _Mapping]] = ...) -> None: ...

class AlertList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Alert]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Alert, _Mapping]]] = ...) -> None: ...

class AlertSpec(_message.Message):
    __slots__ = ["entityRef", "fields", "image", "level", "notification", "owner", "subject", "url"]
    class FieldsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    FIELDS_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    entityRef: _generated_pb2_1.ObjectReference
    fields: _containers.ScalarMap[str, str]
    image: str
    level: str
    notification: _generated_pb2.NotificationSpec
    owner: str
    subject: str
    url: str
    def __init__(self, subject: _Optional[str] = ..., level: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., owner: _Optional[str] = ..., fields: _Optional[_Mapping[str, str]] = ..., url: _Optional[str] = ..., image: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ...) -> None: ...

class AlertStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "firedAt", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FIREDAT_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    failureMessage: str
    firedAt: _generated_pb2_1_1_1.Time
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, firedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class Attachment(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: AttachmentSpec
    status: AttachmentStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[AttachmentSpec, _Mapping]] = ..., status: _Optional[_Union[AttachmentStatus, _Mapping]] = ...) -> None: ...

class AttachmentList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Attachment]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Attachment, _Mapping]]] = ...) -> None: ...

class AttachmentSpec(_message.Message):
    __slots__ = ["bucketName", "description", "entityRef", "owner", "path", "tenantRef"]
    BUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    bucketName: str
    description: str
    entityRef: _generated_pb2_1.ObjectReference
    owner: str
    path: str
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, owner: _Optional[str] = ..., description: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., bucketName: _Optional[str] = ..., path: _Optional[str] = ..., tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ...) -> None: ...

class AttachmentStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "failureReason", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    failureMessage: str
    failureReason: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class Connection(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: ConnectionSpec
    status: ConnectionStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ConnectionSpec, _Mapping]] = ..., status: _Optional[_Union[ConnectionStatus, _Mapping]] = ...) -> None: ...

class ConnectionList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Connection]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Connection, _Mapping]]] = ...) -> None: ...

class ConnectionSpec(_message.Message):
    __slots__ = ["category", "options", "owner", "provider", "secretData", "secretRef", "tenantRef"]
    class OptionsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class SecretDataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PROVIDER_FIELD_NUMBER: _ClassVar[int]
    SECRETDATA_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    category: str
    options: _containers.ScalarMap[str, str]
    owner: str
    provider: str
    secretData: _containers.ScalarMap[str, str]
    secretRef: _generated_pb2_1.SecretReference
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., category: _Optional[str] = ..., provider: _Optional[str] = ..., secretData: _Optional[_Mapping[str, str]] = ..., options: _Optional[_Mapping[str, str]] = ..., owner: _Optional[str] = ..., secretRef: _Optional[_Union[_generated_pb2_1.SecretReference, _Mapping]] = ...) -> None: ...

class ConnectionStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "failureReason", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    failureMessage: str
    failureReason: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class IngressSpec(_message.Message):
    __slots__ = ["clusterIssuerName", "fqdn", "grpc", "http", "ingressClassName", "issuerName", "tlsSecretName"]
    CLUSTERISSUERNAME_FIELD_NUMBER: _ClassVar[int]
    FQDN_FIELD_NUMBER: _ClassVar[int]
    GRPC_FIELD_NUMBER: _ClassVar[int]
    HTTP_FIELD_NUMBER: _ClassVar[int]
    INGRESSCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    ISSUERNAME_FIELD_NUMBER: _ClassVar[int]
    TLSSECRETNAME_FIELD_NUMBER: _ClassVar[int]
    clusterIssuerName: str
    fqdn: str
    grpc: bool
    http: bool
    ingressClassName: str
    issuerName: str
    tlsSecretName: str
    def __init__(self, fqdn: _Optional[str] = ..., grpc: bool = ..., http: bool = ..., ingressClassName: _Optional[str] = ..., issuerName: _Optional[str] = ..., clusterIssuerName: _Optional[str] = ..., tlsSecretName: _Optional[str] = ...) -> None: ...

class Lab(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: LabSpec
    status: LabStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[LabSpec, _Mapping]] = ..., status: _Optional[_Union[LabStatus, _Mapping]] = ...) -> None: ...

class LabList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Lab]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Lab, _Mapping]]] = ...) -> None: ...

class LabSpec(_message.Message):
    __slots__ = ["description", "externalCluster", "limits", "owner", "tenantRef"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    EXTERNALCLUSTER_FIELD_NUMBER: _ClassVar[int]
    LIMITS_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    description: str
    externalCluster: VirtualClusterSpec
    limits: ResourceLimitSpec
    owner: str
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, description: _Optional[str] = ..., tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., limits: _Optional[_Union[ResourceLimitSpec, _Mapping]] = ..., externalCluster: _Optional[_Union[VirtualClusterSpec, _Mapping]] = ..., owner: _Optional[str] = ...) -> None: ...

class LabStatus(_message.Message):
    __slots__ = ["conditions", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class License(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: LicenseSpec
    status: LicenseStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[LicenseSpec, _Mapping]] = ..., status: _Optional[_Union[LicenseStatus, _Mapping]] = ...) -> None: ...

class LicenseList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[License]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[License, _Mapping]]] = ...) -> None: ...

class LicenseSpec(_message.Message):
    __slots__ = ["chatbot", "email", "expireAt", "forecast", "maxDataPlanes", "maxProducts", "maxServers", "maxTrainers", "maxUsers", "nlp", "notifierName", "priceName", "productName", "secretRef", "trialEndAt", "trialStartAt", "vision"]
    CHATBOT_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    EXPIREAT_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    MAXDATAPLANES_FIELD_NUMBER: _ClassVar[int]
    MAXPRODUCTS_FIELD_NUMBER: _ClassVar[int]
    MAXSERVERS_FIELD_NUMBER: _ClassVar[int]
    MAXTRAINERS_FIELD_NUMBER: _ClassVar[int]
    MAXUSERS_FIELD_NUMBER: _ClassVar[int]
    NLP_FIELD_NUMBER: _ClassVar[int]
    NOTIFIERNAME_FIELD_NUMBER: _ClassVar[int]
    PRICENAME_FIELD_NUMBER: _ClassVar[int]
    PRODUCTNAME_FIELD_NUMBER: _ClassVar[int]
    SECRETREF_FIELD_NUMBER: _ClassVar[int]
    TRIALENDAT_FIELD_NUMBER: _ClassVar[int]
    TRIALSTARTAT_FIELD_NUMBER: _ClassVar[int]
    VISION_FIELD_NUMBER: _ClassVar[int]
    chatbot: bool
    email: str
    expireAt: _generated_pb2_1_1_1.Time
    forecast: bool
    maxDataPlanes: int
    maxProducts: int
    maxServers: int
    maxTrainers: int
    maxUsers: int
    nlp: bool
    notifierName: str
    priceName: str
    productName: str
    secretRef: _generated_pb2_1.SecretReference
    trialEndAt: _generated_pb2_1_1_1.Time
    trialStartAt: _generated_pb2_1_1_1.Time
    vision: bool
    def __init__(self, secretRef: _Optional[_Union[_generated_pb2_1.SecretReference, _Mapping]] = ..., email: _Optional[str] = ..., trialStartAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., trialEndAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., maxProducts: _Optional[int] = ..., maxTrainers: _Optional[int] = ..., maxServers: _Optional[int] = ..., maxUsers: _Optional[int] = ..., maxDataPlanes: _Optional[int] = ..., forecast: bool = ..., nlp: bool = ..., vision: bool = ..., chatbot: bool = ..., productName: _Optional[str] = ..., priceName: _Optional[str] = ..., expireAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., notifierName: _Optional[str] = ...) -> None: ...

class LicenseStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "failureReason", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    failureMessage: str
    failureReason: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class NotificationChannelSpec(_message.Message):
    __slots__ = ["connectionName", "destination", "enabled", "error", "info"]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESTINATION_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    destination: str
    enabled: bool
    error: bool
    info: bool
    def __init__(self, enabled: bool = ..., connectionName: _Optional[str] = ..., info: bool = ..., error: bool = ..., destination: _Optional[str] = ...) -> None: ...

class NotificationChannelStatus(_message.Message):
    __slots__ = ["connectionName", "failureMessage", "lastMessageAt"]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LASTMESSAGEAT_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    failureMessage: str
    lastMessageAt: _generated_pb2_1_1_1.Time
    def __init__(self, connectionName: _Optional[str] = ..., lastMessageAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., failureMessage: _Optional[str] = ...) -> None: ...

class Notifier(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: NotifierSpec
    status: NotifierStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[NotifierSpec, _Mapping]] = ..., status: _Optional[_Union[NotifierStatus, _Mapping]] = ...) -> None: ...

class NotifierList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Notifier]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Notifier, _Mapping]]] = ...) -> None: ...

class NotifierSpec(_message.Message):
    __slots__ = ["channels", "description", "enabled", "owner", "tenantRef"]
    CHANNELS_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    channels: _containers.RepeatedCompositeFieldContainer[NotificationChannelSpec]
    description: str
    enabled: bool
    owner: str
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, enabled: bool = ..., tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., description: _Optional[str] = ..., owner: _Optional[str] = ..., channels: _Optional[_Iterable[_Union[NotificationChannelSpec, _Mapping]]] = ...) -> None: ...

class NotifierStatus(_message.Message):
    __slots__ = ["channelsStatus", "conditions", "observedGeneration", "updatedAt"]
    CHANNELSSTATUS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    channelsStatus: _containers.RepeatedCompositeFieldContainer[NotificationChannelStatus]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., channelsStatus: _Optional[_Iterable[_Union[NotificationChannelStatus, _Mapping]]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class ResourceLimitSpec(_message.Message):
    __slots__ = ["enabled", "limitRange", "maxCpu", "maxMem", "maxPods", "maxPvc", "quota"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    LIMITRANGE_FIELD_NUMBER: _ClassVar[int]
    MAXCPU_FIELD_NUMBER: _ClassVar[int]
    MAXMEM_FIELD_NUMBER: _ClassVar[int]
    MAXPODS_FIELD_NUMBER: _ClassVar[int]
    MAXPVC_FIELD_NUMBER: _ClassVar[int]
    QUOTA_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    limitRange: _generated_pb2_1.LimitRangeSpec
    maxCpu: _generated_pb2_1_1.Quantity
    maxMem: _generated_pb2_1_1.Quantity
    maxPods: int
    maxPvc: int
    quota: _generated_pb2_1.ResourceQuotaSpec
    def __init__(self, enabled: bool = ..., maxMem: _Optional[_Union[_generated_pb2_1_1.Quantity, _Mapping]] = ..., maxCpu: _Optional[_Union[_generated_pb2_1_1.Quantity, _Mapping]] = ..., maxPods: _Optional[int] = ..., maxPvc: _Optional[int] = ..., quota: _Optional[_Union[_generated_pb2_1.ResourceQuotaSpec, _Mapping]] = ..., limitRange: _Optional[_Union[_generated_pb2_1.LimitRangeSpec, _Mapping]] = ...) -> None: ...

class RuleSpec(_message.Message):
    __slots__ = ["resource", "verbs"]
    RESOURCE_FIELD_NUMBER: _ClassVar[int]
    VERBS_FIELD_NUMBER: _ClassVar[int]
    resource: str
    verbs: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, resource: _Optional[str] = ..., verbs: _Optional[_Iterable[str]] = ...) -> None: ...

class ServingSite(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: ServingSiteSpec
    status: ServingSiteStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ServingSiteSpec, _Mapping]] = ..., status: _Optional[_Union[ServingSiteStatus, _Mapping]] = ...) -> None: ...

class ServingSiteList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[ServingSite]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ServingSite, _Mapping]]] = ...) -> None: ...

class ServingSiteSpec(_message.Message):
    __slots__ = ["description", "externalCluster", "ingress", "limits", "owner", "stage", "tenantRef"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    EXTERNALCLUSTER_FIELD_NUMBER: _ClassVar[int]
    INGRESS_FIELD_NUMBER: _ClassVar[int]
    LIMITS_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    STAGE_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    description: str
    externalCluster: VirtualClusterSpec
    ingress: IngressSpec
    limits: ResourceLimitSpec
    owner: str
    stage: str
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, description: _Optional[str] = ..., tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., limits: _Optional[_Union[ResourceLimitSpec, _Mapping]] = ..., ingress: _Optional[_Union[IngressSpec, _Mapping]] = ..., externalCluster: _Optional[_Union[VirtualClusterSpec, _Mapping]] = ..., owner: _Optional[str] = ..., stage: _Optional[str] = ...) -> None: ...

class ServingSiteStatus(_message.Message):
    __slots__ = ["activePredictors", "conditions", "dailyPredictionsCounts", "failureMessage", "grpcIngressName", "inactivePredictors", "observedGeneration", "restIngressName", "totalPredictorAccuracyFailed", "totalPredictorDataDriftFailed", "totalPredictorServiceFailed", "updatedAt"]
    ACTIVEPREDICTORS_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    DAILYPREDICTIONSCOUNTS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    GRPCINGRESSNAME_FIELD_NUMBER: _ClassVar[int]
    INACTIVEPREDICTORS_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    RESTINGRESSNAME_FIELD_NUMBER: _ClassVar[int]
    TOTALPREDICTORACCURACYFAILED_FIELD_NUMBER: _ClassVar[int]
    TOTALPREDICTORDATADRIFTFAILED_FIELD_NUMBER: _ClassVar[int]
    TOTALPREDICTORSERVICEFAILED_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    activePredictors: int
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    dailyPredictionsCounts: _containers.RepeatedScalarFieldContainer[int]
    failureMessage: str
    grpcIngressName: str
    inactivePredictors: int
    observedGeneration: int
    restIngressName: str
    totalPredictorAccuracyFailed: int
    totalPredictorDataDriftFailed: int
    totalPredictorServiceFailed: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., activePredictors: _Optional[int] = ..., inactivePredictors: _Optional[int] = ..., totalPredictorServiceFailed: _Optional[int] = ..., totalPredictorDataDriftFailed: _Optional[int] = ..., totalPredictorAccuracyFailed: _Optional[int] = ..., dailyPredictionsCounts: _Optional[_Iterable[int]] = ..., failureMessage: _Optional[str] = ..., grpcIngressName: _Optional[str] = ..., restIngressName: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class Tenant(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: TenantSpec
    status: TenantStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[TenantSpec, _Mapping]] = ..., status: _Optional[_Union[TenantStatus, _Mapping]] = ...) -> None: ...

class TenantList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Tenant]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Tenant, _Mapping]]] = ...) -> None: ...

class TenantSpec(_message.Message):
    __slots__ = ["cacheBucketName", "defaultBucketName", "defaultLabName", "defaultServingSiteName", "metricStoreConnection", "notification", "onlineStoreConnection", "permissions"]
    CACHEBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTLABNAME_FIELD_NUMBER: _ClassVar[int]
    DEFAULTSERVINGSITENAME_FIELD_NUMBER: _ClassVar[int]
    METRICSTORECONNECTION_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    ONLINESTORECONNECTION_FIELD_NUMBER: _ClassVar[int]
    PERMISSIONS_FIELD_NUMBER: _ClassVar[int]
    cacheBucketName: str
    defaultBucketName: str
    defaultLabName: str
    defaultServingSiteName: str
    metricStoreConnection: _generated_pb2_1.ObjectReference
    notification: _generated_pb2.NotificationSpec
    onlineStoreConnection: _generated_pb2_1.ObjectReference
    permissions: _generated_pb2.PermissionsSpec
    def __init__(self, defaultLabName: _Optional[str] = ..., defaultServingSiteName: _Optional[str] = ..., defaultBucketName: _Optional[str] = ..., cacheBucketName: _Optional[str] = ..., permissions: _Optional[_Union[_generated_pb2.PermissionsSpec, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., onlineStoreConnection: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., metricStoreConnection: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ...) -> None: ...

class TenantStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "failureReason", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    failureMessage: str
    failureReason: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class UserRoleClass(_message.Message):
    __slots__ = ["metadata", "spec"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: UserRoleClassSpec
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[UserRoleClassSpec, _Mapping]] = ...) -> None: ...

class UserRoleClassList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[UserRoleClass]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[UserRoleClass, _Mapping]]] = ...) -> None: ...

class UserRoleClassSpec(_message.Message):
    __slots__ = ["description", "owner", "rules", "tenantRef"]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RULES_FIELD_NUMBER: _ClassVar[int]
    TENANTREF_FIELD_NUMBER: _ClassVar[int]
    description: str
    owner: str
    rules: _containers.RepeatedCompositeFieldContainer[RuleSpec]
    tenantRef: _generated_pb2_1.ObjectReference
    def __init__(self, tenantRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., description: _Optional[str] = ..., owner: _Optional[str] = ..., rules: _Optional[_Iterable[_Union[RuleSpec, _Mapping]]] = ...) -> None: ...

class VirtualBucket(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: VirtualBucketSpec
    status: VirtualBucketStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[VirtualBucketSpec, _Mapping]] = ..., status: _Optional[_Union[VirtualBucketStatus, _Mapping]] = ...) -> None: ...

class VirtualBucketList(_message.Message):
    __slots__ = ["items", "metadata"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[VirtualBucket]
    metadata: _generated_pb2_1_1_1.ListMeta
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[VirtualBucket, _Mapping]]] = ...) -> None: ...

class VirtualBucketSpec(_message.Message):
    __slots__ = ["connectionName", "description", "owner"]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    connectionName: str
    description: str
    owner: str
    def __init__(self, connectionName: _Optional[str] = ..., description: _Optional[str] = ..., owner: _Optional[str] = ...) -> None: ...

class VirtualBucketStatus(_message.Message):
    __slots__ = ["conditions", "failureMessage", "observedGeneration", "updatedAt"]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    failureMessage: str
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    def __init__(self, updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., failureMessage: _Optional[str] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class VirtualClusterSpec(_message.Message):
    __slots__ = ["autoscale", "az", "cloudRef", "connectionName", "description", "enabled", "gpuClassName", "gpus", "instanceType", "kubernetesVersion", "limits", "maxNodes", "minNodes", "nodes", "owner", "region", "spot", "sshKey", "volumeSize"]
    AUTOSCALE_FIELD_NUMBER: _ClassVar[int]
    AZ_FIELD_NUMBER: _ClassVar[int]
    CLOUDREF_FIELD_NUMBER: _ClassVar[int]
    CONNECTIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    GPUCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    GPUS_FIELD_NUMBER: _ClassVar[int]
    INSTANCETYPE_FIELD_NUMBER: _ClassVar[int]
    KUBERNETESVERSION_FIELD_NUMBER: _ClassVar[int]
    LIMITS_FIELD_NUMBER: _ClassVar[int]
    MAXNODES_FIELD_NUMBER: _ClassVar[int]
    MINNODES_FIELD_NUMBER: _ClassVar[int]
    NODES_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    REGION_FIELD_NUMBER: _ClassVar[int]
    SPOT_FIELD_NUMBER: _ClassVar[int]
    SSHKEY_FIELD_NUMBER: _ClassVar[int]
    VOLUMESIZE_FIELD_NUMBER: _ClassVar[int]
    autoscale: bool
    az: str
    cloudRef: _generated_pb2_1.ObjectReference
    connectionName: str
    description: str
    enabled: bool
    gpuClassName: str
    gpus: int
    instanceType: str
    kubernetesVersion: str
    limits: ResourceLimitSpec
    maxNodes: int
    minNodes: int
    nodes: int
    owner: str
    region: str
    spot: bool
    sshKey: str
    volumeSize: int
    def __init__(self, enabled: bool = ..., description: _Optional[str] = ..., nodes: _Optional[int] = ..., instanceType: _Optional[str] = ..., gpus: _Optional[int] = ..., gpuClassName: _Optional[str] = ..., volumeSize: _Optional[int] = ..., spot: bool = ..., connectionName: _Optional[str] = ..., owner: _Optional[str] = ..., limits: _Optional[_Union[ResourceLimitSpec, _Mapping]] = ..., region: _Optional[str] = ..., az: _Optional[str] = ..., kubernetesVersion: _Optional[str] = ..., autoscale: bool = ..., minNodes: _Optional[int] = ..., maxNodes: _Optional[int] = ..., cloudRef: _Optional[_Union[_generated_pb2_1.ObjectReference, _Mapping]] = ..., sshKey: _Optional[str] = ...) -> None: ...
