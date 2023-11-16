from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.api import annotations_pb2 as _annotations_pb2
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListAlgorithmsRequest(_message.Message):
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

class ListAlgorithmsResponse(_message.Message):
    __slots__ = ["algorithms"]
    ALGORITHMS_FIELD_NUMBER: _ClassVar[int]
    algorithms: _generated_pb2.AlgorithmList
    def __init__(self, algorithms: _Optional[_Union[_generated_pb2.AlgorithmList, _Mapping]] = ...) -> None: ...

class GetAlgorithmRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetAlgorithmResponse(_message.Message):
    __slots__ = ["algorithm"]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    algorithm: _generated_pb2.Algorithm
    def __init__(self, algorithm: _Optional[_Union[_generated_pb2.Algorithm, _Mapping]] = ...) -> None: ...

class ListManagedimagesRequest(_message.Message):
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

class ListManagedimagesResponse(_message.Message):
    __slots__ = ["managedImages"]
    MANAGEDIMAGES_FIELD_NUMBER: _ClassVar[int]
    managedImages: _generated_pb2.ManagedImageList
    def __init__(self, managedImages: _Optional[_Union[_generated_pb2.ManagedImageList, _Mapping]] = ...) -> None: ...

class GetManagedimageRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetManagedimageResponse(_message.Message):
    __slots__ = ["managedItem"]
    MANAGEDITEM_FIELD_NUMBER: _ClassVar[int]
    managedItem: _generated_pb2.ManagedImage
    def __init__(self, managedItem: _Optional[_Union[_generated_pb2.ManagedImage, _Mapping]] = ...) -> None: ...

class ListMLFrameworksRequest(_message.Message):
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

class ListMLFrameworksResponse(_message.Message):
    __slots__ = ["mlframeworks"]
    MLFRAMEWORKS_FIELD_NUMBER: _ClassVar[int]
    mlframeworks: _generated_pb2.MLFrameworkList
    def __init__(self, mlframeworks: _Optional[_Union[_generated_pb2.MLFrameworkList, _Mapping]] = ...) -> None: ...

class GetMLFrameworkRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetMLFrameworkResponse(_message.Message):
    __slots__ = ["mlframework"]
    MLFRAMEWORK_FIELD_NUMBER: _ClassVar[int]
    mlframework: _generated_pb2.MLFramework
    def __init__(self, mlframework: _Optional[_Union[_generated_pb2.MLFramework, _Mapping]] = ...) -> None: ...

class ListCloudsRequest(_message.Message):
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

class ListCloudsResponse(_message.Message):
    __slots__ = ["clouds"]
    CLOUDS_FIELD_NUMBER: _ClassVar[int]
    clouds: _generated_pb2.CloudList
    def __init__(self, clouds: _Optional[_Union[_generated_pb2.CloudList, _Mapping]] = ...) -> None: ...

class GetCloudRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetCloudResponse(_message.Message):
    __slots__ = ["cloud"]
    CLOUD_FIELD_NUMBER: _ClassVar[int]
    cloud: _generated_pb2.Cloud
    def __init__(self, cloud: _Optional[_Union[_generated_pb2.Cloud, _Mapping]] = ...) -> None: ...

class ListPublicDatasetsRequest(_message.Message):
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

class ListPublicDatasetsResponse(_message.Message):
    __slots__ = ["publicDatasets"]
    PUBLICDATASETS_FIELD_NUMBER: _ClassVar[int]
    publicDatasets: _generated_pb2.PublicDatasetList
    def __init__(self, publicDatasets: _Optional[_Union[_generated_pb2.PublicDatasetList, _Mapping]] = ...) -> None: ...

class GetPublicDatasetRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPublicDatasetResponse(_message.Message):
    __slots__ = ["publicDataset"]
    PUBLICDATASET_FIELD_NUMBER: _ClassVar[int]
    publicDataset: _generated_pb2.PublicDataset
    def __init__(self, publicDataset: _Optional[_Union[_generated_pb2.PublicDataset, _Mapping]] = ...) -> None: ...

class DownloadPublicDatasetRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class DownloadPublicDatasetResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class PreviewPublicDatasetRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class PreviewPublicDatasetResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class ApplyPublicDatasetCRRequest(_message.Message):
    __slots__ = ["namespace", "name", "crname"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CRNAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    crname: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ..., crname: _Optional[str] = ...) -> None: ...

class ApplyPublicDatasetCRResponse(_message.Message):
    __slots__ = ["raw"]
    RAW_FIELD_NUMBER: _ClassVar[int]
    raw: bytes
    def __init__(self, raw: _Optional[bytes] = ...) -> None: ...

class ListPretrainedModelsRequest(_message.Message):
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

class ListPretrainedModelsResponse(_message.Message):
    __slots__ = ["pretrainedModels"]
    PRETRAINEDMODELS_FIELD_NUMBER: _ClassVar[int]
    pretrainedModels: _generated_pb2.PretrainedModelList
    def __init__(self, pretrainedModels: _Optional[_Union[_generated_pb2.PretrainedModelList, _Mapping]] = ...) -> None: ...

class GetPretrainedModelRequest(_message.Message):
    __slots__ = ["namespace", "name"]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    namespace: str
    name: str
    def __init__(self, namespace: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class GetPretrainedModelResponse(_message.Message):
    __slots__ = ["pretrainedModel"]
    PRETRAINEDMODEL_FIELD_NUMBER: _ClassVar[int]
    pretrainedModel: _generated_pb2.PretrainedModel
    def __init__(self, pretrainedModel: _Optional[_Union[_generated_pb2.PretrainedModel, _Mapping]] = ...) -> None: ...

class ListWorkloadClassesRequest(_message.Message):
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

class ListWorkloadClassesResponse(_message.Message):
    __slots__ = ["workloads"]
    WORKLOADS_FIELD_NUMBER: _ClassVar[int]
    workloads: _generated_pb2.WorkloadClassList
    def __init__(self, workloads: _Optional[_Union[_generated_pb2.WorkloadClassList, _Mapping]] = ...) -> None: ...

class GetWorkloadClassRequest(_message.Message):
    __slots__ = ["name", "namespace"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMESPACE_FIELD_NUMBER: _ClassVar[int]
    name: str
    namespace: str
    def __init__(self, name: _Optional[str] = ..., namespace: _Optional[str] = ...) -> None: ...

class GetWorkloadClassResponse(_message.Message):
    __slots__ = ["workload"]
    WORKLOAD_FIELD_NUMBER: _ClassVar[int]
    workload: _generated_pb2.WorkloadClass
    def __init__(self, workload: _Optional[_Union[_generated_pb2.WorkloadClass, _Mapping]] = ...) -> None: ...
