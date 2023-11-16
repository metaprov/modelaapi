from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TrainRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "snapshot", "bucket", "model", "study", "run", "baseModels"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    BASEMODELS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2_1.DataProduct
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    snapshot: _generated_pb2_1.DatasetSnapshot
    bucket: _generated_pb2_1_1.VirtualBucket
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    run: _generated_pb2.StudyRun
    baseModels: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Model]
    def __init__(self, product: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., snapshot: _Optional[_Union[_generated_pb2_1.DatasetSnapshot, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., run: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., baseModels: _Optional[_Iterable[_Union[_generated_pb2.Model, _Mapping]]] = ...) -> None: ...

class TrainResponse(_message.Message):
    __slots__ = ["results", "weightsLocation", "labelEncoderLocation", "forecastLocation", "profileLocation", "confusionMatrix", "pythonVersionInfo", "OS", "pipFreeze", "impurityFeatureImportance"]
    class PipFreezeEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class ImpurityFeatureImportanceEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    RESULTS_FIELD_NUMBER: _ClassVar[int]
    WEIGHTSLOCATION_FIELD_NUMBER: _ClassVar[int]
    LABELENCODERLOCATION_FIELD_NUMBER: _ClassVar[int]
    FORECASTLOCATION_FIELD_NUMBER: _ClassVar[int]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    CONFUSIONMATRIX_FIELD_NUMBER: _ClassVar[int]
    PYTHONVERSIONINFO_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    PIPFREEZE_FIELD_NUMBER: _ClassVar[int]
    IMPURITYFEATUREIMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    results: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Measurement]
    weightsLocation: _generated_pb2_1_1_1.FileLocation
    labelEncoderLocation: _generated_pb2_1_1_1.FileLocation
    forecastLocation: _generated_pb2_1_1_1.FileLocation
    profileLocation: _generated_pb2_1_1_1.FileLocation
    confusionMatrix: _generated_pb2_1_1_1.ConfusionMatrix
    pythonVersionInfo: str
    OS: str
    pipFreeze: _containers.ScalarMap[str, str]
    impurityFeatureImportance: _containers.ScalarMap[str, float]
    def __init__(self, results: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Measurement, _Mapping]]] = ..., weightsLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., labelEncoderLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., forecastLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., profileLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., confusionMatrix: _Optional[_Union[_generated_pb2_1_1_1.ConfusionMatrix, _Mapping]] = ..., pythonVersionInfo: _Optional[str] = ..., OS: _Optional[str] = ..., pipFreeze: _Optional[_Mapping[str, str]] = ..., impurityFeatureImportance: _Optional[_Mapping[str, float]] = ...) -> None: ...

class TestRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "snapshot", "model", "study", "run", "bucket", "baseModels"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    BASEMODELS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2_1.DataProduct
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    snapshot: _generated_pb2_1.DatasetSnapshot
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    run: _generated_pb2.StudyRun
    bucket: _generated_pb2_1_1.VirtualBucket
    baseModels: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Model]
    def __init__(self, product: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., snapshot: _Optional[_Union[_generated_pb2_1.DatasetSnapshot, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., run: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., baseModels: _Optional[_Iterable[_Union[_generated_pb2.Model, _Mapping]]] = ...) -> None: ...

class TestResponse(_message.Message):
    __slots__ = ["trainResults", "testResults", "testWeightsLocation", "fullWeightsLocation", "misclassLocation", "permutationFeatureImportance", "trainConfusionMatrix", "testConfusionMatrix"]
    class PermutationFeatureImportanceEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TRAINRESULTS_FIELD_NUMBER: _ClassVar[int]
    TESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    TESTWEIGHTSLOCATION_FIELD_NUMBER: _ClassVar[int]
    FULLWEIGHTSLOCATION_FIELD_NUMBER: _ClassVar[int]
    MISCLASSLOCATION_FIELD_NUMBER: _ClassVar[int]
    PERMUTATIONFEATUREIMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    TRAINCONFUSIONMATRIX_FIELD_NUMBER: _ClassVar[int]
    TESTCONFUSIONMATRIX_FIELD_NUMBER: _ClassVar[int]
    trainResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Measurement]
    testResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Measurement]
    testWeightsLocation: _generated_pb2_1_1_1.FileLocation
    fullWeightsLocation: _generated_pb2_1_1_1.FileLocation
    misclassLocation: _generated_pb2_1_1_1.FileLocation
    permutationFeatureImportance: _containers.ScalarMap[str, float]
    trainConfusionMatrix: _generated_pb2_1_1_1.ConfusionMatrix
    testConfusionMatrix: _generated_pb2_1_1_1.ConfusionMatrix
    def __init__(self, trainResults: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Measurement, _Mapping]]] = ..., testResults: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Measurement, _Mapping]]] = ..., testWeightsLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., fullWeightsLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., misclassLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., permutationFeatureImportance: _Optional[_Mapping[str, float]] = ..., trainConfusionMatrix: _Optional[_Union[_generated_pb2_1_1_1.ConfusionMatrix, _Mapping]] = ..., testConfusionMatrix: _Optional[_Union[_generated_pb2_1_1_1.ConfusionMatrix, _Mapping]] = ...) -> None: ...

class TrainDriftDetectorRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "snapshot", "model", "study", "run", "bucket", "baseModels"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    BASEMODELS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2_1.DataProduct
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    snapshot: _generated_pb2_1.DatasetSnapshot
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    run: _generated_pb2.StudyRun
    bucket: _generated_pb2_1_1.VirtualBucket
    baseModels: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Model]
    def __init__(self, product: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., snapshot: _Optional[_Union[_generated_pb2_1.DatasetSnapshot, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., run: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., baseModels: _Optional[_Iterable[_Union[_generated_pb2.Model, _Mapping]]] = ...) -> None: ...

class ForecastRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "snapshot", "model", "study", "run", "bucket"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2_1.DataProduct
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    snapshot: _generated_pb2_1.DatasetSnapshot
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    run: _generated_pb2.StudyRun
    bucket: _generated_pb2_1_1.VirtualBucket
    def __init__(self, product: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., snapshot: _Optional[_Union[_generated_pb2_1.DatasetSnapshot, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., run: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ...) -> None: ...

class ForecastResponse(_message.Message):
    __slots__ = ["forecastLocation"]
    FORECASTLOCATION_FIELD_NUMBER: _ClassVar[int]
    forecastLocation: _generated_pb2_1_1_1.FileLocation
    def __init__(self, forecastLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...

class ShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ExplainRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "snapshot", "model", "study", "run", "bucket", "baseModels"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    RUN_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    BASEMODELS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2_1.DataProduct
    datasource: _generated_pb2_1.DataSource
    dataset: _generated_pb2_1.Dataset
    snapshot: _generated_pb2_1.DatasetSnapshot
    model: _generated_pb2.Model
    study: _generated_pb2.Study
    run: _generated_pb2.StudyRun
    bucket: _generated_pb2_1_1.VirtualBucket
    baseModels: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Model]
    def __init__(self, product: _Optional[_Union[_generated_pb2_1.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2_1.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2_1.Dataset, _Mapping]] = ..., snapshot: _Optional[_Union[_generated_pb2_1.DatasetSnapshot, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2.Model, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2.Study, _Mapping]] = ..., run: _Optional[_Union[_generated_pb2.StudyRun, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1.VirtualBucket, _Mapping]] = ..., baseModels: _Optional[_Iterable[_Union[_generated_pb2.Model, _Mapping]]] = ...) -> None: ...

class ExplainResponse(_message.Message):
    __slots__ = ["explainerLocation", "trainShapValuesLocation", "testShapValuesLocation"]
    EXPLAINERLOCATION_FIELD_NUMBER: _ClassVar[int]
    TRAINSHAPVALUESLOCATION_FIELD_NUMBER: _ClassVar[int]
    TESTSHAPVALUESLOCATION_FIELD_NUMBER: _ClassVar[int]
    explainerLocation: _generated_pb2_1_1_1.FileLocation
    trainShapValuesLocation: _generated_pb2_1_1_1.FileLocation
    testShapValuesLocation: _generated_pb2_1_1_1.FileLocation
    def __init__(self, explainerLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., trainShapValuesLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ..., testShapValuesLocation: _Optional[_Union[_generated_pb2_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...
