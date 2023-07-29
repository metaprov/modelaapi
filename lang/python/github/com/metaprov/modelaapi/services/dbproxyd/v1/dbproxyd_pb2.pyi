from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1
from github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1_1
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateAccountRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Account
    def __init__(self, item: _Optional[_Union[_generated_pb2.Account, _Mapping]] = ...) -> None: ...

class CreateAlertRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Alert
    def __init__(self, item: _Optional[_Union[_generated_pb2.Alert, _Mapping]] = ...) -> None: ...

class CreateAttachmentRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Attachment
    def __init__(self, item: _Optional[_Union[_generated_pb2.Attachment, _Mapping]] = ...) -> None: ...

class CreateConnectionRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Connection
    def __init__(self, item: _Optional[_Union[_generated_pb2.Connection, _Mapping]] = ...) -> None: ...

class CreateDataAppRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1.DataApp
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1.DataApp, _Mapping]] = ...) -> None: ...

class CreateDataPipelineRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataPipeline
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataPipeline, _Mapping]] = ...) -> None: ...

class CreateDataPipelineRunRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataPipelineRun
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataPipelineRun, _Mapping]] = ...) -> None: ...

class CreateDataProductRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataProduct
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ...) -> None: ...

class CreateDataProductVersionRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataProductVersion
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataProductVersion, _Mapping]] = ...) -> None: ...

class CreateDatasetRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.Dataset
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ...) -> None: ...

class CreateDatasourceRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataSource
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ...) -> None: ...

class CreateEntityRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.Entity
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.Entity, _Mapping]] = ...) -> None: ...

class CreateFeatureGroupRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.FeatureGroup
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.FeatureGroup, _Mapping]] = ...) -> None: ...

class CreateFeatureHistogramRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.FeatureHistogram
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.FeatureHistogram, _Mapping]] = ...) -> None: ...

class CreateLabRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Lab
    def __init__(self, item: _Optional[_Union[_generated_pb2.Lab, _Mapping]] = ...) -> None: ...

class CreateLicenseRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.License
    def __init__(self, item: _Optional[_Union[_generated_pb2.License, _Mapping]] = ...) -> None: ...

class CreateModelClassRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.ModelClass
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.ModelClass, _Mapping]] = ...) -> None: ...

class CreateModelClassRunRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.ModelClassRun
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.ModelClassRun, _Mapping]] = ...) -> None: ...

class CreateModelRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.Model
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.Model, _Mapping]] = ...) -> None: ...

class CreateNotifierRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Notifier
    def __init__(self, item: _Optional[_Union[_generated_pb2.Notifier, _Mapping]] = ...) -> None: ...

class CreatePostMortemRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.PostMortem
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.PostMortem, _Mapping]] = ...) -> None: ...

class CreatePredictionRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1.Prediction
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1.Prediction, _Mapping]] = ...) -> None: ...

class CreatePredictorRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1.Predictor
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1.Predictor, _Mapping]] = ...) -> None: ...

class CreateRecipeRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.Recipe
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.Recipe, _Mapping]] = ...) -> None: ...

class CreateRecipeRunRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.RecipeRun
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.RecipeRun, _Mapping]] = ...) -> None: ...

class CreateReportRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.Report
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.Report, _Mapping]] = ...) -> None: ...

class CreateReviewRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.Review
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.Review, _Mapping]] = ...) -> None: ...

class CreateRunbookRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.RunBook
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.RunBook, _Mapping]] = ...) -> None: ...

class CreateServingsiteRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.ServingSite
    def __init__(self, item: _Optional[_Union[_generated_pb2.ServingSite, _Mapping]] = ...) -> None: ...

class CreateStudyRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.Study
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.Study, _Mapping]] = ...) -> None: ...

class CreateTenantRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Tenant
    def __init__(self, item: _Optional[_Union[_generated_pb2.Tenant, _Mapping]] = ...) -> None: ...

class CreateTodoRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.Todo
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.Todo, _Mapping]] = ...) -> None: ...

class CreateVirtualBucketRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.VirtualBucket
    def __init__(self, item: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ...) -> None: ...

class DeleteAccountRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteAlertRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteAttachmentRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteConnectionRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataAppRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataPipelineRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataProductRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDataProductVersionRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDatasetRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteDatasourceRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteEntityRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteFeatureGroupRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteFeatureHistogramRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteLabRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteLicenseRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteModelClassRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteModelClassRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteNotifierRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeletePostMortemRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeletePredictionRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeletePredictorRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteRecipeRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteRecipeRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteReportRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteReviewRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteRunbookRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteServingsiteRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteStudyRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteTenantRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteTodoRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DeleteVirtualBucketRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAccountRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAlertRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAttachmentRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetConnectionRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataAppRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataPipelineRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataPipelineRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataProductRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDataProductVersionRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDatasetRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetDatasourceRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetEntityRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetFeatureGroupRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetFeatureHistogramRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLabRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetLicenseRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelClassRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelClassRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetModelRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetNotifierRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPostMortemRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPredictionRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPredictorRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetRecipeRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetRecipeRunRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetReportRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetReviewRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetRunbookRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetServingsiteRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetStudyRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetTenantRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetTodoRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetVirtualBucketRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class ListAccountsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListAccountsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Account]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Account, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListAlertsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListAlertsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Alert]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Alert, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListAttachmentsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListAttachmentsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Attachment]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Attachment, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListConnectionsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListConnectionsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Connection]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Connection, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDataAppRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDataAppResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.DataApp]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1.DataApp, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDataPipelineRunsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDataPipelineRunsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DataPipelineRun]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.DataPipelineRun, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDataPipelinesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDataPipelinesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DataPipeline]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.DataPipeline, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDataProductVersionsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDataProductVersionsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DataProductVersion]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.DataProductVersion, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDataProductsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDataProductsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DataProduct]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.DataProduct, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDatasetsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDatasetsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Dataset]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.Dataset, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListDatasourcesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListDatasourcesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.DataSource]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.DataSource, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListEntitiesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListEntitiesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Entity]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.Entity, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListFeatureGroupRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListFeatureGroupResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.FeatureGroup]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.FeatureGroup, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListFeatureHistogramsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListFeatureHistogramsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.FeatureHistogram]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.FeatureHistogram, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListLabsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListLabsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Lab]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Lab, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListLicensesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListLicensesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.License]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.License, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListModelClasseRunsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.ModelClassRun]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.ModelClassRun, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListModelClassesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListModelClassesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.ModelClass]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.ModelClass, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListModelClassesRunRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListModelsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListModelsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Model]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Model, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListNotifiersRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListNotifiersResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Notifier]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Notifier, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListPostMortemsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListPostMortemsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.PostMortem]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.PostMortem, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListPredictionsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListPredictionsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Prediction]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1.Prediction, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListPredictorsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListPredictorsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1.Predictor]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1.Predictor, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListRecipeRunsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListRecipeRunsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.RecipeRun]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.RecipeRun, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListRecipesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListRecipesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Recipe]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1.Recipe, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListReportsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListReportsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Report]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Report, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListReviewsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListReviewsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Review]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Review, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListRunbooksRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListRunbooksResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.RunBook]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.RunBook, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListServingsitesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListServingsitesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ServingSite]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.ServingSite, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListStudiesRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListStudiesResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Study]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Study, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListTenantsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListTenantsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Tenant]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.Tenant, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListTodosRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListTodosResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Todo]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Todo, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class ListVirtualBucketsRequest(_message.Message):
    __slots__ = ["namespace", "page_size", "page_token"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    page_size: int
    page_token: str
    def __init__(self, namespace: _Optional[str] = ..., page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class ListVirtualBucketsResponse(_message.Message):
    __slots__ = ["items", "next_page_token"]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_generated_pb2.VirtualBucket]
    next_page_token: str
    def __init__(self, items: _Optional[_Iterable[_Union[_generated_pb2.VirtualBucket, _Mapping]]] = ..., next_page_token: _Optional[str] = ...) -> None: ...

class UpdateAccountRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Account
    def __init__(self, item: _Optional[_Union[_generated_pb2.Account, _Mapping]] = ...) -> None: ...

class UpdateAlertRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Alert
    def __init__(self, item: _Optional[_Union[_generated_pb2.Alert, _Mapping]] = ...) -> None: ...

class UpdateAttachmentRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Attachment
    def __init__(self, item: _Optional[_Union[_generated_pb2.Attachment, _Mapping]] = ...) -> None: ...

class UpdateConnectionRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Connection
    def __init__(self, item: _Optional[_Union[_generated_pb2.Connection, _Mapping]] = ...) -> None: ...

class UpdateDataAppRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1.DataApp
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1.DataApp, _Mapping]] = ...) -> None: ...

class UpdateDataPipelineRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataPipeline
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataPipeline, _Mapping]] = ...) -> None: ...

class UpdateDataPipelineRunRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataPipelineRun
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataPipelineRun, _Mapping]] = ...) -> None: ...

class UpdateDataProductRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataProduct
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ...) -> None: ...

class UpdateDataProductVersionRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataProductVersion
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataProductVersion, _Mapping]] = ...) -> None: ...

class UpdateDatasetRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.Dataset
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ...) -> None: ...

class UpdateDatasourceRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.DataSource
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ...) -> None: ...

class UpdateEntityRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.Entity
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.Entity, _Mapping]] = ...) -> None: ...

class UpdateFeatureGroupRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.FeatureGroup
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.FeatureGroup, _Mapping]] = ...) -> None: ...

class UpdateFeatureHistogramRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.FeatureHistogram
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.FeatureHistogram, _Mapping]] = ...) -> None: ...

class UpdateLabRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Lab
    def __init__(self, item: _Optional[_Union[_generated_pb2.Lab, _Mapping]] = ...) -> None: ...

class UpdateLicenseRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.License
    def __init__(self, item: _Optional[_Union[_generated_pb2.License, _Mapping]] = ...) -> None: ...

class UpdateModelClassRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.ModelClass
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.ModelClass, _Mapping]] = ...) -> None: ...

class UpdateModelClassRunRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.ModelClassRun
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.ModelClassRun, _Mapping]] = ...) -> None: ...

class UpdateModelRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.Model
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.Model, _Mapping]] = ...) -> None: ...

class UpdateNotifierRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Notifier
    def __init__(self, item: _Optional[_Union[_generated_pb2.Notifier, _Mapping]] = ...) -> None: ...

class UpdatePostMortemRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.PostMortem
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.PostMortem, _Mapping]] = ...) -> None: ...

class UpdatePredictionRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1.Prediction
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1.Prediction, _Mapping]] = ...) -> None: ...

class UpdatePredictorRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1.Predictor
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1.Predictor, _Mapping]] = ...) -> None: ...

class UpdateRecipeRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.Recipe
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.Recipe, _Mapping]] = ...) -> None: ...

class UpdateRecipeRunRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1.RecipeRun
    def __init__(self, item: _Optional[_Union[_generated_pb2_1.RecipeRun, _Mapping]] = ...) -> None: ...

class UpdateReportRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.Report
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.Report, _Mapping]] = ...) -> None: ...

class UpdateReviewRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.Review
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.Review, _Mapping]] = ...) -> None: ...

class UpdateRunbookRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.RunBook
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.RunBook, _Mapping]] = ...) -> None: ...

class UpdateServingsiteRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.ServingSite
    def __init__(self, item: _Optional[_Union[_generated_pb2.ServingSite, _Mapping]] = ...) -> None: ...

class UpdateStudyRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1.Study
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1.Study, _Mapping]] = ...) -> None: ...

class UpdateTenantRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.Tenant
    def __init__(self, item: _Optional[_Union[_generated_pb2.Tenant, _Mapping]] = ...) -> None: ...

class UpdateTodoRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2_1_1_1_1.Todo
    def __init__(self, item: _Optional[_Union[_generated_pb2_1_1_1_1.Todo, _Mapping]] = ...) -> None: ...

class UpdateVirtualBucketRequest(_message.Message):
    __slots__ = ["item"]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _generated_pb2.VirtualBucket
    def __init__(self, item: _Optional[_Union[_generated_pb2.VirtualBucket, _Mapping]] = ...) -> None: ...
