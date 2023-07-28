from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as _generated_pb2_1
from github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1 import generated_pb2 as _generated_pb2_1_1
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2_1_1_1_1
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as _common_pb2
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DsReadFileRequest(_message.Message):
    __slots__ = ["product", "version", "connection", "bucket", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    connection: _generated_pb2_1_1_1.Connection
    bucket: _generated_pb2_1_1_1.VirtualBucket
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsReadFeatureRequest(_message.Message):
    __slots__ = ["product", "version", "bucket", "connection", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    bucket: _generated_pb2_1_1_1.VirtualBucket
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsWriteFileRequest(_message.Message):
    __slots__ = ["product", "version", "content", "bucket", "connection", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    content: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., content: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsReadAudioRequest(_message.Message):
    __slots__ = ["bucket", "connection", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    bucket: _generated_pb2_1_1_1.VirtualBucket
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsReadTextCorpusRequest(_message.Message):
    __slots__ = ["product", "version", "bucket", "connection", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    bucket: _generated_pb2_1_1_1.VirtualBucket
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsReadFromStoreResponse(_message.Message):
    __slots__ = ["product", "version", "result", "bucket", "connection", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    result: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., result: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsRunDataPipelineRequest(_message.Message):
    __slots__ = ["pipeline"]
    PIPELINE_FIELD_NUMBER: _ClassVar[int]
    pipeline: _generated_pb2.DataPipeline
    def __init__(self, pipeline: _Optional[_Union[_generated_pb2.DataPipeline, _Mapping]] = ...) -> None: ...

class DsRunDataPipelineResponse(_message.Message):
    __slots__ = ["result"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    result: _generated_pb2.Dataset
    def __init__(self, result: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class DsRunRecipeRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "bucket", "storageConnection", "storageSecret", "dbConnection", "dbSecret", "recipe", "reciperun"]
    class StorageSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    STORAGECONNECTION_FIELD_NUMBER: _ClassVar[int]
    STORAGESECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    RECIPE_FIELD_NUMBER: _ClassVar[int]
    RECIPERUN_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    storageConnection: _generated_pb2_1_1_1.Connection
    storageSecret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    recipe: _generated_pb2.Recipe
    reciperun: _generated_pb2.RecipeRun
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., storageConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., storageSecret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., recipe: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ..., reciperun: _Optional[_Union[_generated_pb2.RecipeRun, _Mapping]] = ...) -> None: ...

class DsRunRecipeResponse(_message.Message):
    __slots__ = ["result"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    result: _generated_pb2.Recipe
    def __init__(self, result: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ...) -> None: ...

class DsCreateRecipeProfileRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "bucket", "storageConnection", "storageSecret", "dbConnection", "dbSecret", "recipe"]
    class StorageSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    STORAGECONNECTION_FIELD_NUMBER: _ClassVar[int]
    STORAGESECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    RECIPE_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    storageConnection: _generated_pb2_1_1_1.Connection
    storageSecret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    recipe: _generated_pb2.Recipe
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., storageConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., storageSecret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., recipe: _Optional[_Union[_generated_pb2.Recipe, _Mapping]] = ...) -> None: ...

class DsCreateRecipeProfileResponse(_message.Message):
    __slots__ = ["result"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    result: _common_pb2.TableView
    def __init__(self, result: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class DataSourceResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DatasetResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DsCreateDatasetProfileRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "bucket"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ...) -> None: ...

class DsCreateDatasetProfileResponse(_message.Message):
    __slots__ = ["profile", "profileLocation", "anomalyLocation"]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    ANOMALYLOCATION_FIELD_NUMBER: _ClassVar[int]
    profile: _common_pb2.DatasetProfile
    profileLocation: _generated_pb2_1_1_1_1.FileLocation
    anomalyLocation: _generated_pb2_1_1_1_1.FileLocation
    def __init__(self, profile: _Optional[_Union[_common_pb2.DatasetProfile, _Mapping]] = ..., profileLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ..., anomalyLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...

class DsCreateModelProfileRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "study", "model", "bucket"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    study: _generated_pb2_1.Study
    model: _generated_pb2_1.Model
    bucket: _generated_pb2_1_1_1.VirtualBucket
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ...) -> None: ...

class DsCreateModelProfileResponse(_message.Message):
    __slots__ = ["profileLocation"]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    profileLocation: _generated_pb2_1_1_1_1.FileLocation
    def __init__(self, profileLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...

class DsMergeForecastFileRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "study", "model", "connection", "bucket", "secret", "forecasts", "dbConnection", "dbSecret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    FORECASTS_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    study: _generated_pb2_1.Study
    model: _generated_pb2_1.Model
    connection: _generated_pb2_1_1_1.Connection
    bucket: _generated_pb2_1_1_1.VirtualBucket
    secret: _containers.ScalarMap[str, bytes]
    forecasts: _containers.RepeatedScalarFieldContainer[str]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., forecasts: _Optional[_Iterable[str]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsMergeForecastFileResponse(_message.Message):
    __slots__ = ["uri"]
    URI_FIELD_NUMBER: _ClassVar[int]
    uri: str
    def __init__(self, uri: _Optional[str] = ...) -> None: ...

class DsCreateStudyProfileRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "study", "bucket", "models"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    study: _generated_pb2_1.Study
    bucket: _generated_pb2_1_1_1.VirtualBucket
    models: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Model]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., models: _Optional[_Iterable[_Union[_generated_pb2_1.Model, _Mapping]]] = ...) -> None: ...

class DsCreateStudyProfileResponse(_message.Message):
    __slots__ = ["profileLocation"]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    profileLocation: _generated_pb2_1_1_1_1.FileLocation
    def __init__(self, profileLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...

class RunTestSuiteRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "study", "model", "connection", "bucket", "histogram", "refHistogram", "suite"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    HISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    REFHISTOGRAM_FIELD_NUMBER: _ClassVar[int]
    SUITE_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    study: _generated_pb2_1.Study
    model: _generated_pb2_1.Model
    connection: _generated_pb2_1_1_1.Connection
    bucket: _generated_pb2_1_1_1.VirtualBucket
    histogram: _generated_pb2.FeatureHistogram
    refHistogram: _generated_pb2.FeatureHistogram
    suite: _generated_pb2_1_1_1_1.TestSuite
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., histogram: _Optional[_Union[_generated_pb2.FeatureHistogram, _Mapping]] = ..., refHistogram: _Optional[_Union[_generated_pb2.FeatureHistogram, _Mapping]] = ..., suite: _Optional[_Union[_generated_pb2_1_1_1_1.TestSuite, _Mapping]] = ...) -> None: ...

class RunTestSuiteResponse(_message.Message):
    __slots__ = ["result"]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    result: _generated_pb2_1_1_1_1.TestSuiteResult
    def __init__(self, result: _Optional[_Union[_generated_pb2_1_1_1_1.TestSuiteResult, _Mapping]] = ...) -> None: ...

class DsGenerateDatasetRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "connection", "bucket", "secret", "rows", "dbConnection", "dbSecret", "target"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    connection: _generated_pb2_1_1_1.Connection
    bucket: _generated_pb2_1_1_1.VirtualBucket
    secret: _containers.ScalarMap[str, bytes]
    rows: int
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    target: _generated_pb2_1_1_1_1.DataLocation
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., rows: _Optional[int] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., target: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class DsGenerateDatasetResponse(_message.Message):
    __slots__ = ["target"]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    target: _generated_pb2_1_1_1_1.DataLocation
    def __init__(self, target: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class DsSplitDatasetRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "study", "bucket", "trainingDataset", "testingDataset"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    TRAININGDATASET_FIELD_NUMBER: _ClassVar[int]
    TESTINGDATASET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    study: _generated_pb2_1.Study
    bucket: _generated_pb2_1_1_1.VirtualBucket
    trainingDataset: _generated_pb2.Dataset
    testingDataset: _generated_pb2.Dataset
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., trainingDataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., testingDataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class DsSplitDatasetResponse(_message.Message):
    __slots__ = ["training", "testing", "validation", "trainingHash", "testingHash", "validationHash", "indexFile", "trainLocation", "testLocation", "validationLocation"]
    TRAINING_FIELD_NUMBER: _ClassVar[int]
    TESTING_FIELD_NUMBER: _ClassVar[int]
    VALIDATION_FIELD_NUMBER: _ClassVar[int]
    TRAININGHASH_FIELD_NUMBER: _ClassVar[int]
    TESTINGHASH_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONHASH_FIELD_NUMBER: _ClassVar[int]
    INDEXFILE_FIELD_NUMBER: _ClassVar[int]
    TRAINLOCATION_FIELD_NUMBER: _ClassVar[int]
    TESTLOCATION_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONLOCATION_FIELD_NUMBER: _ClassVar[int]
    training: int
    testing: int
    validation: int
    trainingHash: str
    testingHash: str
    validationHash: str
    indexFile: str
    trainLocation: _generated_pb2_1_1_1_1.FileLocation
    testLocation: _generated_pb2_1_1_1_1.FileLocation
    validationLocation: _generated_pb2_1_1_1_1.FileLocation
    def __init__(self, training: _Optional[int] = ..., testing: _Optional[int] = ..., validation: _Optional[int] = ..., trainingHash: _Optional[str] = ..., testingHash: _Optional[str] = ..., validationHash: _Optional[str] = ..., indexFile: _Optional[str] = ..., trainLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ..., testLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ..., validationLocation: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...

class DsSplitDatasetToRungsRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "bucket", "rungs"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    RUNGS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    rungs: int
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., rungs: _Optional[int] = ...) -> None: ...

class DsSplitDatasetToRungsResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DsTransformRequest(_message.Message):
    __slots__ = ["product", "version", "bucket", "datasource", "dataset", "study", "connection", "secret", "trainingDataset", "testingDataset"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    TRAININGDATASET_FIELD_NUMBER: _ClassVar[int]
    TESTINGDATASET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    bucket: _generated_pb2_1_1_1.VirtualBucket
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    study: _generated_pb2_1.Study
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    trainingDataset: _generated_pb2.Dataset
    testingDataset: _generated_pb2.Dataset
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., trainingDataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., testingDataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class DsTransformResponse(_message.Message):
    __slots__ = ["training_hash", "testing_hash", "validation_hash"]
    TRAINING_HASH_FIELD_NUMBER: _ClassVar[int]
    TESTING_HASH_FIELD_NUMBER: _ClassVar[int]
    VALIDATION_HASH_FIELD_NUMBER: _ClassVar[int]
    training_hash: str
    testing_hash: str
    validation_hash: str
    def __init__(self, training_hash: _Optional[str] = ..., testing_hash: _Optional[str] = ..., validation_hash: _Optional[str] = ...) -> None: ...

class DsCreateColumnProfileRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "bucket", "connection", "secret", "columnType", "columnName", "dbConnection", "dbSecret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    COLUMNTYPE_FIELD_NUMBER: _ClassVar[int]
    COLUMNNAME_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    bucket: _generated_pb2_1_1_1.VirtualBucket
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    columnType: str
    columnName: str
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., columnType: _Optional[str] = ..., columnName: _Optional[str] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsCreateColumnProfileResponse(_message.Message):
    __slots__ = ["name", "plot"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PLOT_FIELD_NUMBER: _ClassVar[int]
    name: str
    plot: _common_pb2.Plot
    def __init__(self, name: _Optional[str] = ..., plot: _Optional[_Union[_common_pb2.Plot, _Mapping]] = ...) -> None: ...

class GroupByDatasetRequest(_message.Message):
    __slots__ = ["product", "version", "datasource", "dataset", "connection", "bucket", "secret", "dbConnection", "dbSecret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    connection: _generated_pb2_1_1_1.Connection
    bucket: _generated_pb2_1_1_1.VirtualBucket
    secret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class GroupByDatasetResponse(_message.Message):
    __slots__ = ["uri"]
    URI_FIELD_NUMBER: _ClassVar[int]
    uri: str
    def __init__(self, uri: _Optional[str] = ...) -> None: ...

class DsInferSchemaRequest(_message.Message):
    __slots__ = ["location", "datasource", "tenant"]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    location: _generated_pb2_1_1_1_1.DataLocation
    datasource: _generated_pb2.DataSource
    tenant: str
    def __init__(self, location: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., tenant: _Optional[str] = ...) -> None: ...

class DsInferSchemaResponse(_message.Message):
    __slots__ = ["profile"]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    profile: _common_pb2.DatasetProfile
    def __init__(self, profile: _Optional[_Union[_common_pb2.DatasetProfile, _Mapping]] = ...) -> None: ...

class DsGetTableViewRequest(_message.Message):
    __slots__ = ["flatfile", "location", "tenant"]
    FLATFILE_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    flatfile: _generated_pb2.FlatFileFormatSpec
    location: _generated_pb2_1_1_1_1.DataLocation
    tenant: str
    def __init__(self, flatfile: _Optional[_Union[_generated_pb2.FlatFileFormatSpec, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ..., tenant: _Optional[str] = ...) -> None: ...

class DsGetTableViewResponse(_message.Message):
    __slots__ = ["tableview"]
    TABLEVIEW_FIELD_NUMBER: _ClassVar[int]
    tableview: _common_pb2.TableView
    def __init__(self, tableview: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class CreateModelReportRequest(_message.Message):
    __slots__ = ["product", "study", "dataset", "datasource", "model", "report"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    dataset: _generated_pb2.Dataset
    datasource: _generated_pb2.DataSource
    model: _generated_pb2_1.Model
    report: _generated_pb2_1.Report
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., report: _Optional[_Union[_generated_pb2_1.Report, _Mapping]] = ...) -> None: ...

class CreateForecastReportRequest(_message.Message):
    __slots__ = ["product", "version", "study", "dataset", "datasource", "forecast", "connection", "secret", "bucket", "report", "group", "dbConnection", "dbSecret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    study: _generated_pb2_1.Study
    dataset: _generated_pb2.Dataset
    datasource: _generated_pb2.DataSource
    forecast: _generated_pb2_1.Model
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    bucket: _generated_pb2_1_1_1.VirtualBucket
    report: _generated_pb2_1.Report
    group: bool
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., forecast: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., report: _Optional[_Union[_generated_pb2_1.Report, _Mapping]] = ..., group: bool = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class CreateSummaryReportRequest(_message.Message):
    __slots__ = ["product", "version", "connection", "secret", "bucket", "report", "dbConnection", "dbSecret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    connection: _generated_pb2_1_1_1.Connection
    secret: _containers.ScalarMap[str, bytes]
    bucket: _generated_pb2_1_1_1.VirtualBucket
    report: _generated_pb2_1.Report
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., report: _Optional[_Union[_generated_pb2_1.Report, _Mapping]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class CreateReportResponse(_message.Message):
    __slots__ = ["pdf"]
    PDF_FIELD_NUMBER: _ClassVar[int]
    pdf: bytes
    def __init__(self, pdf: _Optional[bytes] = ...) -> None: ...

class CreateDatasetReportRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset", "report"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    report: _generated_pb2_1.Report
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., report: _Optional[_Union[_generated_pb2_1.Report, _Mapping]] = ...) -> None: ...

class CreateStudyReportRequest(_message.Message):
    __slots__ = ["product", "study", "dataset", "datasource", "models", "report"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    dataset: _generated_pb2.Dataset
    datasource: _generated_pb2.DataSource
    models: _generated_pb2_1.ModelList
    report: _generated_pb2_1.Report
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., models: _Optional[_Union[_generated_pb2_1.ModelList, _Mapping]] = ..., report: _Optional[_Union[_generated_pb2_1.Report, _Mapping]] = ...) -> None: ...

class AskModelRequest(_message.Message):
    __slots__ = ["product", "study", "datasource", "dataset", "budget", "defaultHP", "algorithm", "algorithms"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUDGET_FIELD_NUMBER: _ClassVar[int]
    DEFAULTHP_FIELD_NUMBER: _ClassVar[int]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    ALGORITHMS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    budget: int
    defaultHP: bool
    algorithm: str
    algorithms: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Algorithm]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., budget: _Optional[int] = ..., defaultHP: bool = ..., algorithm: _Optional[str] = ..., algorithms: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Algorithm, _Mapping]]] = ...) -> None: ...

class GetTimeSeriesDatasetKeysRequest(_message.Message):
    __slots__ = ["product", "version", "study", "datasource", "dataset"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class GetTimeSeriesDatasetKeysResponse(_message.Message):
    __slots__ = ["keys"]
    KEYS_FIELD_NUMBER: _ClassVar[int]
    keys: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, keys: _Optional[_Iterable[str]] = ...) -> None: ...

class AskForecastModelRequest(_message.Message):
    __slots__ = ["product", "study", "datasource", "dataset", "keys", "algorithms"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    KEYS_FIELD_NUMBER: _ClassVar[int]
    ALGORITHMS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    keys: _containers.RepeatedScalarFieldContainer[str]
    algorithms: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Algorithm]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., keys: _Optional[_Iterable[str]] = ..., algorithms: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Algorithm, _Mapping]]] = ...) -> None: ...

class AskForecastModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Model]
    def __init__(self, model: _Optional[_Iterable[_Union[_generated_pb2_1.Model, _Mapping]]] = ...) -> None: ...

class AskEnsembleRequest(_message.Message):
    __slots__ = ["product", "study", "datasource", "dataset", "models", "algorithms"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    ALGORITHMS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    models: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Model]
    algorithms: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Algorithm]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., models: _Optional[_Iterable[_Union[_generated_pb2_1.Model, _Mapping]]] = ..., algorithms: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Algorithm, _Mapping]]] = ...) -> None: ...

class AskEnsembleResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Model]
    def __init__(self, model: _Optional[_Iterable[_Union[_generated_pb2_1.Model, _Mapping]]] = ...) -> None: ...

class AskBaselineRequest(_message.Message):
    __slots__ = ["product", "study", "datasource", "dataset", "algnames", "all", "algorithms"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    ALGNAMES_FIELD_NUMBER: _ClassVar[int]
    ALL_FIELD_NUMBER: _ClassVar[int]
    ALGORITHMS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    algnames: _containers.RepeatedScalarFieldContainer[str]
    all: bool
    algorithms: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Algorithm]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., algnames: _Optional[_Iterable[str]] = ..., all: bool = ..., algorithms: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Algorithm, _Mapping]]] = ...) -> None: ...

class AskBaselineResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Model]
    def __init__(self, model: _Optional[_Iterable[_Union[_generated_pb2_1.Model, _Mapping]]] = ...) -> None: ...

class AskAllModelsForTaskRequest(_message.Message):
    __slots__ = ["product", "study", "datasource", "dataset", "budget", "task", "algorithms"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    BUDGET_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    ALGORITHMS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    budget: int
    task: str
    algorithms: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1_1.Algorithm]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., budget: _Optional[int] = ..., task: _Optional[str] = ..., algorithms: _Optional[_Iterable[_Union[_generated_pb2_1_1_1_1.Algorithm, _Mapping]]] = ...) -> None: ...

class AskAllModelsForTaskResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Model]
    def __init__(self, model: _Optional[_Iterable[_Union[_generated_pb2_1.Model, _Mapping]]] = ...) -> None: ...

class TellModelRequest(_message.Message):
    __slots__ = ["product", "study", "datasource", "dataset", "model", "failed"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    FAILED_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    model: _generated_pb2_1.Model
    failed: bool
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., failed: bool = ...) -> None: ...

class TellModelResponse(_message.Message):
    __slots__ = ["pruned"]
    PRUNED_FIELD_NUMBER: _ClassVar[int]
    pruned: bool
    def __init__(self, pruned: bool = ...) -> None: ...

class DsShutdownRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DsShutdownResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class DsTestConnectionRequest(_message.Message):
    __slots__ = ["connection", "bucket", "secret"]
    class SecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2_1_1_1.Connection
    bucket: _generated_pb2_1_1_1.VirtualBucket
    secret: _containers.ScalarMap[str, bytes]
    def __init__(self, connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., secret: _Optional[_Mapping[str, bytes]] = ...) -> None: ...

class DsTestConnectionResponse(_message.Message):
    __slots__ = ["status", "msg"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MSG_FIELD_NUMBER: _ClassVar[int]
    status: bool
    msg: str
    def __init__(self, status: bool = ..., msg: _Optional[str] = ...) -> None: ...

class DsStudyEndedRequest(_message.Message):
    __slots__ = ["product", "study"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ...) -> None: ...

class DsStudyEndedResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class SaveOptimizerDBRequest(_message.Message):
    __slots__ = ["product", "study", "bucket"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    BUCKET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    bucket: _generated_pb2_1_1_1.VirtualBucket
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., bucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ...) -> None: ...

class SaveOptimizerDBResponse(_message.Message):
    __slots__ = ["location"]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    location: _generated_pb2_1_1_1_1.FileLocation
    def __init__(self, location: _Optional[_Union[_generated_pb2_1_1_1_1.FileLocation, _Mapping]] = ...) -> None: ...

class DsGetDatabasesRequest(_message.Message):
    __slots__ = ["connection"]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2_1_1_1.Connection
    def __init__(self, connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class DsGetDatabasesResponse(_message.Message):
    __slots__ = ["databases"]
    DATABASES_FIELD_NUMBER: _ClassVar[int]
    databases: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, databases: _Optional[_Iterable[str]] = ...) -> None: ...

class DsGetTablesRequest(_message.Message):
    __slots__ = ["connection"]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2_1_1_1.Connection
    def __init__(self, connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class DsGetTablesResponse(_message.Message):
    __slots__ = ["tables"]
    TABLES_FIELD_NUMBER: _ClassVar[int]
    tables: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, tables: _Optional[_Iterable[str]] = ...) -> None: ...

class DsExecuteSqlRequest(_message.Message):
    __slots__ = ["connection", "sql"]
    CONNECTION_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    connection: _generated_pb2_1_1_1.Connection
    sql: str
    def __init__(self, connection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., sql: _Optional[str] = ...) -> None: ...

class DsExecuteSqlResponse(_message.Message):
    __slots__ = ["tableview"]
    TABLEVIEW_FIELD_NUMBER: _ClassVar[int]
    tableview: _common_pb2.TableView
    def __init__(self, tableview: _Optional[_Union[_common_pb2.TableView, _Mapping]] = ...) -> None: ...

class DsSnapshotRequest(_message.Message):
    __slots__ = ["product", "datasource", "dataset"]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ...) -> None: ...

class DsSnapshotResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class AskModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: _generated_pb2_1.Model
    def __init__(self, model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ...) -> None: ...

class GenTrainingDataRequest(_message.Message):
    __slots__ = ["product", "version", "storageConnection", "storageBucket", "storageSecret", "dbConnection", "dbSecret", "model", "entities", "groups"]
    class StorageSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    STORAGECONNECTION_FIELD_NUMBER: _ClassVar[int]
    STORAGEBUCKET_FIELD_NUMBER: _ClassVar[int]
    STORAGESECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    ENTITIES_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    product: _generated_pb2.DataProduct
    version: _generated_pb2.DataProductVersion
    storageConnection: _generated_pb2_1_1_1.Connection
    storageBucket: _generated_pb2_1_1_1.VirtualBucket
    storageSecret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    model: _generated_pb2_1.ModelClass
    entities: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Entity]
    groups: _containers.RepeatedCompositeFieldContainer[_generated_pb2.FeatureGroup]
    def __init__(self, product: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., version: _Optional[_Union[_generated_pb2.DataProductVersion, _Mapping]] = ..., storageConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., storageBucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., storageSecret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., model: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., entities: _Optional[_Iterable[_Union[_generated_pb2.Entity, _Mapping]]] = ..., groups: _Optional[_Iterable[_Union[_generated_pb2.FeatureGroup, _Mapping]]] = ...) -> None: ...

class GenTrainingDataResponse(_message.Message):
    __slots__ = ["path"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    path: str
    def __init__(self, path: _Optional[str] = ...) -> None: ...

class SyncOnlineStoreRequest(_message.Message):
    __slots__ = ["storageConnection", "storageBucket", "storageSecret", "dbConnection", "dbSecret", "model", "fg", "location"]
    class StorageSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    STORAGECONNECTION_FIELD_NUMBER: _ClassVar[int]
    STORAGEBUCKET_FIELD_NUMBER: _ClassVar[int]
    STORAGESECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    FG_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    storageConnection: _generated_pb2_1_1_1.Connection
    storageBucket: _generated_pb2_1_1_1.VirtualBucket
    storageSecret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    model: _generated_pb2_1.ModelClass
    fg: _generated_pb2.FeatureGroup
    location: _generated_pb2_1_1_1_1.DataLocation
    def __init__(self, storageConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., storageBucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., storageSecret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., model: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., fg: _Optional[_Union[_generated_pb2.FeatureGroup, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class SyncOnlineStoreResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GenOnlineStoreDatasetRequest(_message.Message):
    __slots__ = ["storageConnection", "storageBucket", "storageSecret", "dbConnection", "dbSecret", "model", "fg", "location"]
    class StorageSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    STORAGECONNECTION_FIELD_NUMBER: _ClassVar[int]
    STORAGEBUCKET_FIELD_NUMBER: _ClassVar[int]
    STORAGESECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    FG_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    storageConnection: _generated_pb2_1_1_1.Connection
    storageBucket: _generated_pb2_1_1_1.VirtualBucket
    storageSecret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    model: _generated_pb2_1.ModelClass
    fg: _generated_pb2.FeatureGroup
    location: _generated_pb2_1_1_1_1.DataLocation
    def __init__(self, storageConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., storageBucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., storageSecret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., model: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., fg: _Optional[_Union[_generated_pb2.FeatureGroup, _Mapping]] = ..., location: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class GenOnlineStoreDatasetResponse(_message.Message):
    __slots__ = ["location"]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    location: _generated_pb2_1_1_1_1.DataLocation
    def __init__(self, location: _Optional[_Union[_generated_pb2_1_1_1_1.DataLocation, _Mapping]] = ...) -> None: ...

class BatchPredictRequest(_message.Message):
    __slots__ = ["storageConnection", "storageBucket", "storageSecret", "dbConnection", "dbSecret", "modelclass", "model", "entities", "groups", "prediction"]
    class StorageSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    class DbSecretEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: bytes
        def __init__(self, key: _Optional[str] = ..., value: _Optional[bytes] = ...) -> None: ...
    STORAGECONNECTION_FIELD_NUMBER: _ClassVar[int]
    STORAGEBUCKET_FIELD_NUMBER: _ClassVar[int]
    STORAGESECRET_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    DBSECRET_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    ENTITIES_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    storageConnection: _generated_pb2_1_1_1.Connection
    storageBucket: _generated_pb2_1_1_1.VirtualBucket
    storageSecret: _containers.ScalarMap[str, bytes]
    dbConnection: _generated_pb2_1_1_1.Connection
    dbSecret: _containers.ScalarMap[str, bytes]
    modelclass: _generated_pb2_1.ModelClass
    model: _generated_pb2_1.Model
    entities: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Entity]
    groups: _containers.RepeatedCompositeFieldContainer[_generated_pb2.FeatureGroup]
    prediction: _generated_pb2_1_1.Prediction
    def __init__(self, storageConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., storageBucket: _Optional[_Union[_generated_pb2_1_1_1.VirtualBucket, _Mapping]] = ..., storageSecret: _Optional[_Mapping[str, bytes]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ..., dbSecret: _Optional[_Mapping[str, bytes]] = ..., modelclass: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., entities: _Optional[_Iterable[_Union[_generated_pb2.Entity, _Mapping]]] = ..., groups: _Optional[_Iterable[_Union[_generated_pb2.FeatureGroup, _Mapping]]] = ..., prediction: _Optional[_Union[_generated_pb2_1_1.Prediction, _Mapping]] = ...) -> None: ...

class BatchPredictResponse(_message.Message):
    __slots__ = ["rows"]
    ROWS_FIELD_NUMBER: _ClassVar[int]
    rows: int
    def __init__(self, rows: _Optional[int] = ...) -> None: ...

class SaveDatasetRequest(_message.Message):
    __slots__ = ["dataproduct", "datasource", "dataset", "modelclass", "modelclassrun", "dbConnection"]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    DATASOURCE_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUN_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2.DataProduct
    datasource: _generated_pb2.DataSource
    dataset: _generated_pb2.Dataset
    modelclass: _generated_pb2_1.ModelClass
    modelclassrun: _generated_pb2_1.ModelClassRun
    dbConnection: _generated_pb2_1_1_1.Connection
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., datasource: _Optional[_Union[_generated_pb2.DataSource, _Mapping]] = ..., dataset: _Optional[_Union[_generated_pb2.Dataset, _Mapping]] = ..., modelclass: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., modelclassrun: _Optional[_Union[_generated_pb2_1.ModelClassRun, _Mapping]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class SaveModelRequest(_message.Message):
    __slots__ = ["dataproduct", "study", "modelclass", "modelclassrun", "model", "groups", "dbConnection"]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUN_FIELD_NUMBER: _ClassVar[int]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2.DataProduct
    study: _generated_pb2_1.Study
    modelclass: _generated_pb2_1.ModelClass
    modelclassrun: _generated_pb2_1.ModelClassRun
    model: _generated_pb2_1.Model
    groups: _containers.RepeatedCompositeFieldContainer[_generated_pb2.FeatureGroup]
    dbConnection: _generated_pb2_1_1_1.Connection
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., study: _Optional[_Union[_generated_pb2_1.Study, _Mapping]] = ..., modelclass: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., modelclassrun: _Optional[_Union[_generated_pb2_1.ModelClassRun, _Mapping]] = ..., model: _Optional[_Union[_generated_pb2_1.Model, _Mapping]] = ..., groups: _Optional[_Iterable[_Union[_generated_pb2.FeatureGroup, _Mapping]]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class SavePredictionRequest(_message.Message):
    __slots__ = ["dataproduct", "modelclass", "modelclassrun", "predictor", "prediction", "dbConnection"]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUN_FIELD_NUMBER: _ClassVar[int]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2.DataProduct
    modelclass: _generated_pb2_1.ModelClass
    modelclassrun: _generated_pb2_1.ModelClassRun
    predictor: _generated_pb2_1_1.Predictor
    prediction: _generated_pb2_1_1.Prediction
    dbConnection: _generated_pb2_1_1_1.Connection
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., modelclass: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., modelclassrun: _Optional[_Union[_generated_pb2_1.ModelClassRun, _Mapping]] = ..., predictor: _Optional[_Union[_generated_pb2_1_1.Predictor, _Mapping]] = ..., prediction: _Optional[_Union[_generated_pb2_1_1.Prediction, _Mapping]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class SavePredictorRequest(_message.Message):
    __slots__ = ["dataproduct", "modelclass", "predictor", "dbConnection"]
    DATAPRODUCT_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    PREDICTOR_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    dataproduct: _generated_pb2.DataProduct
    modelclass: _generated_pb2_1.ModelClass
    predictor: _generated_pb2_1_1.Prediction
    dbConnection: _generated_pb2_1_1_1.Connection
    def __init__(self, dataproduct: _Optional[_Union[_generated_pb2.DataProduct, _Mapping]] = ..., modelclass: _Optional[_Union[_generated_pb2_1.ModelClass, _Mapping]] = ..., predictor: _Optional[_Union[_generated_pb2_1_1.Prediction, _Mapping]] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class CreateMetricsStoreRequest(_message.Message):
    __slots__ = ["tenant", "dbConnection"]
    TENANT_FIELD_NUMBER: _ClassVar[int]
    DBCONNECTION_FIELD_NUMBER: _ClassVar[int]
    tenant: str
    dbConnection: _generated_pb2_1_1_1.Connection
    def __init__(self, tenant: _Optional[str] = ..., dbConnection: _Optional[_Union[_generated_pb2_1_1_1.Connection, _Mapping]] = ...) -> None: ...

class CreateMetricsStoreResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class SaveResponse(_message.Message):
    __slots__ = ["dbid"]
    DBID_FIELD_NUMBER: _ClassVar[int]
    dbid: int
    def __init__(self, dbid: _Optional[int] = ...) -> None: ...
