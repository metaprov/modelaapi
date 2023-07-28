from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as _generated_pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as _generated_pb2_1
from k8s.io.api.core.v1 import generated_pb2 as _generated_pb2_1_1
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as _generated_pb2_1_1_1
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as _generated_pb2_1_1_1_1
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as _generated_pb2_1_1_1_1_1
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AlgorithmParameterRange(_message.Message):
    __slots__ = ["name", "ranges"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    RANGES_FIELD_NUMBER: _ClassVar[int]
    name: str
    ranges: _containers.RepeatedCompositeFieldContainer[_generated_pb2.ParameterRange]
    def __init__(self, name: _Optional[str] = ..., ranges: _Optional[_Iterable[_Union[_generated_pb2.ParameterRange, _Mapping]]] = ...) -> None: ...

class AlgorithmSearchSpaceSpec(_message.Message):
    __slots__ = ["include", "exclude", "custom"]
    INCLUDE_FIELD_NUMBER: _ClassVar[int]
    EXCLUDE_FIELD_NUMBER: _ClassVar[int]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    include: _containers.RepeatedScalarFieldContainer[str]
    exclude: _containers.RepeatedScalarFieldContainer[str]
    custom: _containers.RepeatedCompositeFieldContainer[AlgorithmParameterRange]
    def __init__(self, include: _Optional[_Iterable[str]] = ..., exclude: _Optional[_Iterable[str]] = ..., custom: _Optional[_Iterable[_Union[AlgorithmParameterRange, _Mapping]]] = ...) -> None: ...

class Anomaly(_message.Message):
    __slots__ = ["name", "valueColumn", "adjDeltaColumn", "start", "end"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUECOLUMN_FIELD_NUMBER: _ClassVar[int]
    ADJDELTACOLUMN_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    name: str
    valueColumn: str
    adjDeltaColumn: str
    start: str
    end: str
    def __init__(self, name: _Optional[str] = ..., valueColumn: _Optional[str] = ..., adjDeltaColumn: _Optional[str] = ..., start: _Optional[str] = ..., end: _Optional[str] = ...) -> None: ...

class AudioPipelineSpec(_message.Message):
    __slots__ = ["featurizer"]
    FEATURIZER_FIELD_NUMBER: _ClassVar[int]
    featurizer: str
    def __init__(self, featurizer: _Optional[str] = ...) -> None: ...

class BacktestSpec(_message.Message):
    __slots__ = ["sliding", "splits", "Initial", "gap"]
    SLIDING_FIELD_NUMBER: _ClassVar[int]
    SPLITS_FIELD_NUMBER: _ClassVar[int]
    INITIAL_FIELD_NUMBER: _ClassVar[int]
    GAP_FIELD_NUMBER: _ClassVar[int]
    sliding: bool
    splits: int
    Initial: int
    gap: int
    def __init__(self, sliding: bool = ..., splits: _Optional[int] = ..., Initial: _Optional[int] = ..., gap: _Optional[int] = ...) -> None: ...

class BaselineSpec(_message.Message):
    __slots__ = ["enabled", "baselines", "all"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    BASELINES_FIELD_NUMBER: _ClassVar[int]
    ALL_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    baselines: _containers.RepeatedScalarFieldContainer[str]
    all: bool
    def __init__(self, enabled: bool = ..., baselines: _Optional[_Iterable[str]] = ..., all: bool = ...) -> None: ...

class ChangePoint(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class CheckpointSpec(_message.Message):
    __slots__ = ["enabled", "checkpointInterval", "location"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    CHECKPOINTINTERVAL_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    checkpointInterval: int
    location: _generated_pb2.DataLocation
    def __init__(self, enabled: bool = ..., checkpointInterval: _Optional[int] = ..., location: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ...) -> None: ...

class ClassicalEstimatorSpec(_message.Message):
    __slots__ = ["algorithmName", "parameters"]
    ALGORITHMNAME_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    algorithmName: str
    parameters: _containers.RepeatedCompositeFieldContainer[HyperParameterValue]
    def __init__(self, algorithmName: _Optional[str] = ..., parameters: _Optional[_Iterable[_Union[HyperParameterValue, _Mapping]]] = ...) -> None: ...

class CustomReportSpec(_message.Message):
    __slots__ = ["pages"]
    PAGES_FIELD_NUMBER: _ClassVar[int]
    pages: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.PageSpec]
    def __init__(self, pages: _Optional[_Iterable[_Union[_generated_pb2_1.PageSpec, _Mapping]]] = ...) -> None: ...

class DataHashes(_message.Message):
    __slots__ = ["trainHash", "testingHash", "validationHash"]
    TRAINHASH_FIELD_NUMBER: _ClassVar[int]
    TESTINGHASH_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONHASH_FIELD_NUMBER: _ClassVar[int]
    trainHash: str
    testingHash: str
    validationHash: str
    def __init__(self, trainHash: _Optional[str] = ..., testingHash: _Optional[str] = ..., validationHash: _Optional[str] = ...) -> None: ...

class DataSplitSpec(_message.Message):
    __slots__ = ["method", "train", "validation", "test", "splitColumn", "trainDataset", "testDataset", "validationDataset"]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    TRAIN_FIELD_NUMBER: _ClassVar[int]
    VALIDATION_FIELD_NUMBER: _ClassVar[int]
    TEST_FIELD_NUMBER: _ClassVar[int]
    SPLITCOLUMN_FIELD_NUMBER: _ClassVar[int]
    TRAINDATASET_FIELD_NUMBER: _ClassVar[int]
    TESTDATASET_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONDATASET_FIELD_NUMBER: _ClassVar[int]
    method: str
    train: int
    validation: int
    test: int
    splitColumn: str
    trainDataset: str
    testDataset: str
    validationDataset: str
    def __init__(self, method: _Optional[str] = ..., train: _Optional[int] = ..., validation: _Optional[int] = ..., test: _Optional[int] = ..., splitColumn: _Optional[str] = ..., trainDataset: _Optional[str] = ..., testDataset: _Optional[str] = ..., validationDataset: _Optional[str] = ...) -> None: ...

class DeepEstimatorLayer(_message.Message):
    __slots__ = ["name", "type", "parameters", "inputLayers"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    INPUTLAYERS_FIELD_NUMBER: _ClassVar[int]
    name: str
    type: str
    parameters: _containers.RepeatedCompositeFieldContainer[NNLayerParameter]
    inputLayers: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, name: _Optional[str] = ..., type: _Optional[str] = ..., parameters: _Optional[_Iterable[_Union[NNLayerParameter, _Mapping]]] = ..., inputLayers: _Optional[_Iterable[str]] = ...) -> None: ...

class DeepEstimatorSpec(_message.Message):
    __slots__ = ["layers", "type", "batchSize", "epochs", "validationSplit", "isSeq", "gpus", "loss"]
    LAYERS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    BATCHSIZE_FIELD_NUMBER: _ClassVar[int]
    EPOCHS_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONSPLIT_FIELD_NUMBER: _ClassVar[int]
    ISSEQ_FIELD_NUMBER: _ClassVar[int]
    GPUS_FIELD_NUMBER: _ClassVar[int]
    LOSS_FIELD_NUMBER: _ClassVar[int]
    layers: _containers.RepeatedCompositeFieldContainer[DeepEstimatorLayer]
    type: str
    batchSize: int
    epochs: int
    validationSplit: int
    isSeq: bool
    gpus: int
    loss: str
    def __init__(self, layers: _Optional[_Iterable[_Union[DeepEstimatorLayer, _Mapping]]] = ..., type: _Optional[str] = ..., batchSize: _Optional[int] = ..., epochs: _Optional[int] = ..., validationSplit: _Optional[int] = ..., isSeq: bool = ..., gpus: _Optional[int] = ..., loss: _Optional[str] = ...) -> None: ...

class DriftDetectorStatus(_message.Message):
    __slots__ = ["outlierModelURI"]
    OUTLIERMODELURI_FIELD_NUMBER: _ClassVar[int]
    outlierModelURI: str
    def __init__(self, outlierModelURI: _Optional[str] = ...) -> None: ...

class EarlyStopSpec(_message.Message):
    __slots__ = ["enabled", "initial", "modelsWithNoProgress"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    INITIAL_FIELD_NUMBER: _ClassVar[int]
    MODELSWITHNOPROGRESS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    initial: int
    modelsWithNoProgress: int
    def __init__(self, enabled: bool = ..., initial: _Optional[int] = ..., modelsWithNoProgress: _Optional[int] = ...) -> None: ...

class EnsembleSpec(_message.Message):
    __slots__ = ["models", "estimators", "baseEstimator", "type"]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    ESTIMATORS_FIELD_NUMBER: _ClassVar[int]
    BASEESTIMATOR_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    models: _containers.RepeatedScalarFieldContainer[str]
    estimators: _containers.RepeatedCompositeFieldContainer[ClassicalEstimatorSpec]
    baseEstimator: ClassicalEstimatorSpec
    type: str
    def __init__(self, models: _Optional[_Iterable[str]] = ..., estimators: _Optional[_Iterable[_Union[ClassicalEstimatorSpec, _Mapping]]] = ..., baseEstimator: _Optional[_Union[ClassicalEstimatorSpec, _Mapping]] = ..., type: _Optional[str] = ...) -> None: ...

class EnsemblesSpec(_message.Message):
    __slots__ = ["enabled", "votingEnsemble", "stackingEnsemble", "top"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    VOTINGENSEMBLE_FIELD_NUMBER: _ClassVar[int]
    STACKINGENSEMBLE_FIELD_NUMBER: _ClassVar[int]
    TOP_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    votingEnsemble: bool
    stackingEnsemble: bool
    top: int
    def __init__(self, enabled: bool = ..., votingEnsemble: bool = ..., stackingEnsemble: bool = ..., top: _Optional[int] = ...) -> None: ...

class EntityRef(_message.Message):
    __slots__ = ["name", "exclude"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    EXCLUDE_FIELD_NUMBER: _ClassVar[int]
    name: str
    exclude: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, name: _Optional[str] = ..., exclude: _Optional[_Iterable[str]] = ...) -> None: ...

class EvalMetrics(_message.Message):
    __slots__ = ["selection", "reporting", "aggFunc", "aggPeriod", "nullModelParams", "relErrTolerance"]
    SELECTION_FIELD_NUMBER: _ClassVar[int]
    REPORTING_FIELD_NUMBER: _ClassVar[int]
    AGGFUNC_FIELD_NUMBER: _ClassVar[int]
    AGGPERIOD_FIELD_NUMBER: _ClassVar[int]
    NULLMODELPARAMS_FIELD_NUMBER: _ClassVar[int]
    RELERRTOLERANCE_FIELD_NUMBER: _ClassVar[int]
    selection: str
    reporting: _containers.RepeatedScalarFieldContainer[str]
    aggFunc: str
    aggPeriod: int
    nullModelParams: str
    relErrTolerance: float
    def __init__(self, selection: _Optional[str] = ..., reporting: _Optional[_Iterable[str]] = ..., aggFunc: _Optional[str] = ..., aggPeriod: _Optional[int] = ..., nullModelParams: _Optional[str] = ..., relErrTolerance: _Optional[float] = ...) -> None: ...

class EvalPeriod(_message.Message):
    __slots__ = ["testHorizon", "periodsBetweenTrainTest", "cvPeriodsBetweenSplits", "cvExpandingWindows", "cvHorizon", "cvMinTrainPeriods", "cvMaxSplits", "cvUseMostRecentSplits"]
    TESTHORIZON_FIELD_NUMBER: _ClassVar[int]
    PERIODSBETWEENTRAINTEST_FIELD_NUMBER: _ClassVar[int]
    CVPERIODSBETWEENSPLITS_FIELD_NUMBER: _ClassVar[int]
    CVEXPANDINGWINDOWS_FIELD_NUMBER: _ClassVar[int]
    CVHORIZON_FIELD_NUMBER: _ClassVar[int]
    CVMINTRAINPERIODS_FIELD_NUMBER: _ClassVar[int]
    CVMAXSPLITS_FIELD_NUMBER: _ClassVar[int]
    CVUSEMOSTRECENTSPLITS_FIELD_NUMBER: _ClassVar[int]
    testHorizon: int
    periodsBetweenTrainTest: int
    cvPeriodsBetweenSplits: int
    cvExpandingWindows: bool
    cvHorizon: int
    cvMinTrainPeriods: int
    cvMaxSplits: int
    cvUseMostRecentSplits: bool
    def __init__(self, testHorizon: _Optional[int] = ..., periodsBetweenTrainTest: _Optional[int] = ..., cvPeriodsBetweenSplits: _Optional[int] = ..., cvExpandingWindows: bool = ..., cvHorizon: _Optional[int] = ..., cvMinTrainPeriods: _Optional[int] = ..., cvMaxSplits: _Optional[int] = ..., cvUseMostRecentSplits: bool = ...) -> None: ...

class FeatureEngineeringPipeline(_message.Message):
    __slots__ = ["name", "features", "imputation", "encoding", "scaling", "discretisation", "variableTransformation", "outlierHandling", "datetimeTransformation", "text", "drop"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    IMPUTATION_FIELD_NUMBER: _ClassVar[int]
    ENCODING_FIELD_NUMBER: _ClassVar[int]
    SCALING_FIELD_NUMBER: _ClassVar[int]
    DISCRETISATION_FIELD_NUMBER: _ClassVar[int]
    VARIABLETRANSFORMATION_FIELD_NUMBER: _ClassVar[int]
    OUTLIERHANDLING_FIELD_NUMBER: _ClassVar[int]
    DATETIMETRANSFORMATION_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    DROP_FIELD_NUMBER: _ClassVar[int]
    name: str
    features: _containers.RepeatedScalarFieldContainer[str]
    imputation: str
    encoding: str
    scaling: str
    discretisation: str
    variableTransformation: str
    outlierHandling: str
    datetimeTransformation: str
    text: TextPipelineSpec
    drop: bool
    def __init__(self, name: _Optional[str] = ..., features: _Optional[_Iterable[str]] = ..., imputation: _Optional[str] = ..., encoding: _Optional[str] = ..., scaling: _Optional[str] = ..., discretisation: _Optional[str] = ..., variableTransformation: _Optional[str] = ..., outlierHandling: _Optional[str] = ..., datetimeTransformation: _Optional[str] = ..., text: _Optional[_Union[TextPipelineSpec, _Mapping]] = ..., drop: bool = ...) -> None: ...

class FeatureEngineeringSpec(_message.Message):
    __slots__ = ["pipelines", "imbalance"]
    PIPELINES_FIELD_NUMBER: _ClassVar[int]
    IMBALANCE_FIELD_NUMBER: _ClassVar[int]
    pipelines: _containers.RepeatedCompositeFieldContainer[FeatureEngineeringPipeline]
    imbalance: str
    def __init__(self, pipelines: _Optional[_Iterable[_Union[FeatureEngineeringPipeline, _Mapping]]] = ..., imbalance: _Optional[str] = ...) -> None: ...

class FeatureImportance(_message.Message):
    __slots__ = ["feature", "importance"]
    FEATURE_FIELD_NUMBER: _ClassVar[int]
    IMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    feature: str
    importance: float
    def __init__(self, feature: _Optional[str] = ..., importance: _Optional[float] = ...) -> None: ...

class FeatureInfo(_message.Message):
    __slots__ = ["name", "reason", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    reason: str
    value: float
    def __init__(self, name: _Optional[str] = ..., reason: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...

class FeaturePair(_message.Message):
    __slots__ = ["x", "y"]
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: str
    y: str
    def __init__(self, x: _Optional[str] = ..., y: _Optional[str] = ...) -> None: ...

class FeatureSelectionSpec(_message.Message):
    __slots__ = ["enabled", "embedding", "filter", "wrapper", "pipeline", "varThreshold", "corrThreshold", "maxFeatures", "percentile", "reserved"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    EMBEDDING_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    WRAPPER_FIELD_NUMBER: _ClassVar[int]
    PIPELINE_FIELD_NUMBER: _ClassVar[int]
    VARTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    CORRTHRESHOLD_FIELD_NUMBER: _ClassVar[int]
    MAXFEATURES_FIELD_NUMBER: _ClassVar[int]
    PERCENTILE_FIELD_NUMBER: _ClassVar[int]
    RESERVED_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    embedding: bool
    filter: bool
    wrapper: bool
    pipeline: _containers.RepeatedScalarFieldContainer[str]
    varThreshold: int
    corrThreshold: int
    maxFeatures: int
    percentile: int
    reserved: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, enabled: bool = ..., embedding: bool = ..., filter: bool = ..., wrapper: bool = ..., pipeline: _Optional[_Iterable[str]] = ..., varThreshold: _Optional[int] = ..., corrThreshold: _Optional[int] = ..., maxFeatures: _Optional[int] = ..., percentile: _Optional[int] = ..., reserved: _Optional[_Iterable[str]] = ...) -> None: ...

class ForecasterSpec(_message.Message):
    __slots__ = ["events", "past", "future", "forecast", "coverage", "outputLocation", "features", "groups", "predefinedTemplate", "anomalies", "trainEndData", "valueColumn", "hpoBudget", "evaluationMetrics", "evaluationPeriod", "seasonality", "regressors", "laggedRegressors", "growth", "key", "estimators", "hts"]
    EVENTS_FIELD_NUMBER: _ClassVar[int]
    PAST_FIELD_NUMBER: _ClassVar[int]
    FUTURE_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    COVERAGE_FIELD_NUMBER: _ClassVar[int]
    OUTPUTLOCATION_FIELD_NUMBER: _ClassVar[int]
    FEATURES_FIELD_NUMBER: _ClassVar[int]
    GROUPS_FIELD_NUMBER: _ClassVar[int]
    PREDEFINEDTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    ANOMALIES_FIELD_NUMBER: _ClassVar[int]
    TRAINENDDATA_FIELD_NUMBER: _ClassVar[int]
    VALUECOLUMN_FIELD_NUMBER: _ClassVar[int]
    HPOBUDGET_FIELD_NUMBER: _ClassVar[int]
    EVALUATIONMETRICS_FIELD_NUMBER: _ClassVar[int]
    EVALUATIONPERIOD_FIELD_NUMBER: _ClassVar[int]
    SEASONALITY_FIELD_NUMBER: _ClassVar[int]
    REGRESSORS_FIELD_NUMBER: _ClassVar[int]
    LAGGEDREGRESSORS_FIELD_NUMBER: _ClassVar[int]
    GROWTH_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    ESTIMATORS_FIELD_NUMBER: _ClassVar[int]
    HTS_FIELD_NUMBER: _ClassVar[int]
    events: _containers.RepeatedCompositeFieldContainer[TimeSeriesEvent]
    past: WindowSpec
    future: WindowSpec
    forecast: bool
    coverage: float
    outputLocation: _generated_pb2.DataLocation
    features: _containers.RepeatedScalarFieldContainer[str]
    groups: _containers.RepeatedScalarFieldContainer[str]
    predefinedTemplate: str
    anomalies: _containers.RepeatedCompositeFieldContainer[Anomaly]
    trainEndData: str
    valueColumn: str
    hpoBudget: int
    evaluationMetrics: EvalMetrics
    evaluationPeriod: EvalPeriod
    seasonality: SeasonalitySpec
    regressors: _containers.RepeatedScalarFieldContainer[str]
    laggedRegressors: _containers.RepeatedScalarFieldContainer[str]
    growth: str
    key: _containers.RepeatedScalarFieldContainer[str]
    estimators: _containers.RepeatedScalarFieldContainer[str]
    hts: str
    def __init__(self, events: _Optional[_Iterable[_Union[TimeSeriesEvent, _Mapping]]] = ..., past: _Optional[_Union[WindowSpec, _Mapping]] = ..., future: _Optional[_Union[WindowSpec, _Mapping]] = ..., forecast: bool = ..., coverage: _Optional[float] = ..., outputLocation: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., features: _Optional[_Iterable[str]] = ..., groups: _Optional[_Iterable[str]] = ..., predefinedTemplate: _Optional[str] = ..., anomalies: _Optional[_Iterable[_Union[Anomaly, _Mapping]]] = ..., trainEndData: _Optional[str] = ..., valueColumn: _Optional[str] = ..., hpoBudget: _Optional[int] = ..., evaluationMetrics: _Optional[_Union[EvalMetrics, _Mapping]] = ..., evaluationPeriod: _Optional[_Union[EvalPeriod, _Mapping]] = ..., seasonality: _Optional[_Union[SeasonalitySpec, _Mapping]] = ..., regressors: _Optional[_Iterable[str]] = ..., laggedRegressors: _Optional[_Iterable[str]] = ..., growth: _Optional[str] = ..., key: _Optional[_Iterable[str]] = ..., estimators: _Optional[_Iterable[str]] = ..., hts: _Optional[str] = ...) -> None: ...

class GarbageCollectionSpec(_message.Message):
    __slots__ = ["enabled", "keepBestModelPerAlgorithm", "keepPrunedModels"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    KEEPBESTMODELPERALGORITHM_FIELD_NUMBER: _ClassVar[int]
    KEEPPRUNEDMODELS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    keepBestModelPerAlgorithm: bool
    keepPrunedModels: bool
    def __init__(self, enabled: bool = ..., keepBestModelPerAlgorithm: bool = ..., keepPrunedModels: bool = ...) -> None: ...

class GarbageCollectionStatus(_message.Message):
    __slots__ = ["collectedModelsCount", "models"]
    COLLECTEDMODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    collectedModelsCount: int
    models: _containers.RepeatedCompositeFieldContainer[ModelResult]
    def __init__(self, collectedModelsCount: _Optional[int] = ..., models: _Optional[_Iterable[_Union[ModelResult, _Mapping]]] = ...) -> None: ...

class GeneratedColumnSpec(_message.Message):
    __slots__ = ["name", "datatype", "first", "second", "original"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DATATYPE_FIELD_NUMBER: _ClassVar[int]
    FIRST_FIELD_NUMBER: _ClassVar[int]
    SECOND_FIELD_NUMBER: _ClassVar[int]
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    name: str
    datatype: str
    first: str
    second: str
    original: str
    def __init__(self, name: _Optional[str] = ..., datatype: _Optional[str] = ..., first: _Optional[str] = ..., second: _Optional[str] = ..., original: _Optional[str] = ...) -> None: ...

class GroupSplitLocationsSpec(_message.Message):
    __slots__ = ["groupTrainingDataFile", "groupTestingDataFile"]
    GROUPTRAININGDATAFILE_FIELD_NUMBER: _ClassVar[int]
    GROUPTESTINGDATAFILE_FIELD_NUMBER: _ClassVar[int]
    groupTrainingDataFile: str
    groupTestingDataFile: str
    def __init__(self, groupTrainingDataFile: _Optional[str] = ..., groupTestingDataFile: _Optional[str] = ...) -> None: ...

class HyperParameterValue(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class HyperbandOptions(_message.Message):
    __slots__ = ["minResources", "maxResources", "reductionFactor", "bootstrapCount"]
    MINRESOURCES_FIELD_NUMBER: _ClassVar[int]
    MAXRESOURCES_FIELD_NUMBER: _ClassVar[int]
    REDUCTIONFACTOR_FIELD_NUMBER: _ClassVar[int]
    BOOTSTRAPCOUNT_FIELD_NUMBER: _ClassVar[int]
    minResources: int
    maxResources: int
    reductionFactor: int
    bootstrapCount: int
    def __init__(self, minResources: _Optional[int] = ..., maxResources: _Optional[int] = ..., reductionFactor: _Optional[int] = ..., bootstrapCount: _Optional[int] = ...) -> None: ...

class ImagePipelineSpec(_message.Message):
    __slots__ = ["featurizer"]
    FEATURIZER_FIELD_NUMBER: _ClassVar[int]
    featurizer: str
    def __init__(self, featurizer: _Optional[str] = ...) -> None: ...

class ImbalanceHandlingSpec(_message.Message):
    __slots__ = ["enabled", "imbalance"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    IMBALANCE_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    imbalance: str
    def __init__(self, enabled: bool = ..., imbalance: _Optional[str] = ...) -> None: ...

class InterpretabilitySpec(_message.Message):
    __slots__ = ["ice", "icepairs", "lime", "shap", "shappairs", "counterfactual", "anchor"]
    ICE_FIELD_NUMBER: _ClassVar[int]
    ICEPAIRS_FIELD_NUMBER: _ClassVar[int]
    LIME_FIELD_NUMBER: _ClassVar[int]
    SHAP_FIELD_NUMBER: _ClassVar[int]
    SHAPPAIRS_FIELD_NUMBER: _ClassVar[int]
    COUNTERFACTUAL_FIELD_NUMBER: _ClassVar[int]
    ANCHOR_FIELD_NUMBER: _ClassVar[int]
    ice: bool
    icepairs: _containers.RepeatedCompositeFieldContainer[FeaturePair]
    lime: bool
    shap: str
    shappairs: _containers.RepeatedCompositeFieldContainer[FeaturePair]
    counterfactual: bool
    anchor: bool
    def __init__(self, ice: bool = ..., icepairs: _Optional[_Iterable[_Union[FeaturePair, _Mapping]]] = ..., lime: bool = ..., shap: _Optional[str] = ..., shappairs: _Optional[_Iterable[_Union[FeaturePair, _Mapping]]] = ..., counterfactual: bool = ..., anchor: bool = ...) -> None: ...

class InterpretabilityStatus(_message.Message):
    __slots__ = ["startedAt", "completedAt", "explainerLocation", "trainShapValuesLocation", "testShapValuesLocation", "importance"]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    EXPLAINERLOCATION_FIELD_NUMBER: _ClassVar[int]
    TRAINSHAPVALUESLOCATION_FIELD_NUMBER: _ClassVar[int]
    TESTSHAPVALUESLOCATION_FIELD_NUMBER: _ClassVar[int]
    IMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    startedAt: _generated_pb2_1_1_1.Time
    completedAt: _generated_pb2_1_1_1.Time
    explainerLocation: _generated_pb2.FileLocation
    trainShapValuesLocation: _generated_pb2.FileLocation
    testShapValuesLocation: _generated_pb2.FileLocation
    importance: _containers.RepeatedCompositeFieldContainer[FeatureImportance]
    def __init__(self, startedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., explainerLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., trainShapValuesLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., testShapValuesLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., importance: _Optional[_Iterable[_Union[FeatureImportance, _Mapping]]] = ...) -> None: ...

class MedianPrunerOptions(_message.Message):
    __slots__ = ["startupTrials", "warmupSteps", "intervalSteps", "minTrials"]
    STARTUPTRIALS_FIELD_NUMBER: _ClassVar[int]
    WARMUPSTEPS_FIELD_NUMBER: _ClassVar[int]
    INTERVALSTEPS_FIELD_NUMBER: _ClassVar[int]
    MINTRIALS_FIELD_NUMBER: _ClassVar[int]
    startupTrials: int
    warmupSteps: int
    intervalSteps: int
    minTrials: int
    def __init__(self, startupTrials: _Optional[int] = ..., warmupSteps: _Optional[int] = ..., intervalSteps: _Optional[int] = ..., minTrials: _Optional[int] = ...) -> None: ...

class Model(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: ModelSpec
    status: ModelStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ModelSpec, _Mapping]] = ..., status: _Optional[_Union[ModelStatus, _Mapping]] = ...) -> None: ...

class ModelClass(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: ModelClassSpec
    status: ModelClassStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ModelClassSpec, _Mapping]] = ..., status: _Optional[_Union[ModelClassStatus, _Mapping]] = ...) -> None: ...

class ModelClassDataSpec(_message.Message):
    __slots__ = ["observations", "predictions", "schema", "flatFile", "primaryKey", "predictionTimeColumn", "target", "tests", "onlineFeatureStoreName", "offlineFeatureStoreName"]
    OBSERVATIONS_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    FLATFILE_FIELD_NUMBER: _ClassVar[int]
    PRIMARYKEY_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONTIMECOLUMN_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    ONLINEFEATURESTORENAME_FIELD_NUMBER: _ClassVar[int]
    OFFLINEFEATURESTORENAME_FIELD_NUMBER: _ClassVar[int]
    observations: _generated_pb2.DataLocation
    predictions: _generated_pb2.DataLocation
    schema: _generated_pb2_1.Schema
    flatFile: _generated_pb2_1.FlatFileFormatSpec
    primaryKey: _containers.RepeatedScalarFieldContainer[str]
    predictionTimeColumn: str
    target: str
    tests: _generated_pb2.TestSuite
    onlineFeatureStoreName: str
    offlineFeatureStoreName: str
    def __init__(self, observations: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., predictions: _Optional[_Union[_generated_pb2.DataLocation, _Mapping]] = ..., schema: _Optional[_Union[_generated_pb2_1.Schema, _Mapping]] = ..., flatFile: _Optional[_Union[_generated_pb2_1.FlatFileFormatSpec, _Mapping]] = ..., primaryKey: _Optional[_Iterable[str]] = ..., predictionTimeColumn: _Optional[str] = ..., target: _Optional[str] = ..., tests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., onlineFeatureStoreName: _Optional[str] = ..., offlineFeatureStoreName: _Optional[str] = ...) -> None: ...

class ModelClassList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[ModelClass]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ModelClass, _Mapping]]] = ...) -> None: ...

class ModelClassRun(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: ModelClassRunSpec
    status: ModelClassRunStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ModelClassRunSpec, _Mapping]] = ..., status: _Optional[_Union[ModelClassRunStatus, _Mapping]] = ...) -> None: ...

class ModelClassRunList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[ModelClassRun]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[ModelClassRun, _Mapping]]] = ...) -> None: ...

class ModelClassRunSpec(_message.Message):
    __slots__ = ["versionName", "description", "datasetName", "modelClassName", "owner", "priority", "paused", "aborted", "ttl", "triggeredBy"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    ABORTED_FIELD_NUMBER: _ClassVar[int]
    TTL_FIELD_NUMBER: _ClassVar[int]
    TRIGGEREDBY_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    description: str
    datasetName: str
    modelClassName: str
    owner: str
    priority: str
    paused: bool
    aborted: bool
    ttl: int
    triggeredBy: str
    def __init__(self, versionName: _Optional[str] = ..., description: _Optional[str] = ..., datasetName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., owner: _Optional[str] = ..., priority: _Optional[str] = ..., paused: bool = ..., aborted: bool = ..., ttl: _Optional[int] = ..., triggeredBy: _Optional[str] = ...) -> None: ...

class ModelClassRunStatus(_message.Message):
    __slots__ = ["datasetName", "studyName", "modelName", "completedAt", "phase", "observedGeneration", "evalMetrics", "failureMessage", "updatedAt", "logs", "promotedAt", "auto", "approvedBy", "modelsCount", "conditions"]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    STUDYNAME_FIELD_NUMBER: _ClassVar[int]
    MODELNAME_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    EVALMETRICS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    PROMOTEDAT_FIELD_NUMBER: _ClassVar[int]
    AUTO_FIELD_NUMBER: _ClassVar[int]
    APPROVEDBY_FIELD_NUMBER: _ClassVar[int]
    MODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    datasetName: str
    studyName: str
    modelName: str
    completedAt: _generated_pb2_1_1_1.Time
    phase: str
    observedGeneration: int
    evalMetrics: str
    failureMessage: str
    updatedAt: _generated_pb2_1_1_1.Time
    logs: _generated_pb2.Logs
    promotedAt: _generated_pb2_1_1_1.Time
    auto: bool
    approvedBy: _generated_pb2_1_1.ObjectReference
    modelsCount: int
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    def __init__(self, datasetName: _Optional[str] = ..., studyName: _Optional[str] = ..., modelName: _Optional[str] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., phase: _Optional[str] = ..., observedGeneration: _Optional[int] = ..., evalMetrics: _Optional[str] = ..., failureMessage: _Optional[str] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., promotedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., auto: bool = ..., approvedBy: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., modelsCount: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class ModelClassServingSpec(_message.Message):
    __slots__ = ["template", "monitoringSchedule", "predictionSchedule", "preSQL", "postSQL"]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    MONITORINGSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    PRESQL_FIELD_NUMBER: _ClassVar[int]
    POSTSQL_FIELD_NUMBER: _ClassVar[int]
    template: ServingSpec
    monitoringSchedule: _generated_pb2.RunSchedule
    predictionSchedule: _generated_pb2.RunSchedule
    preSQL: _containers.RepeatedScalarFieldContainer[str]
    postSQL: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, template: _Optional[_Union[ServingSpec, _Mapping]] = ..., monitoringSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., predictionSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., preSQL: _Optional[_Iterable[str]] = ..., postSQL: _Optional[_Iterable[str]] = ...) -> None: ...

class ModelClassSpec(_message.Message):
    __slots__ = ["owner", "versionName", "description", "task", "subtask", "objective", "entities", "data", "training", "serving", "notification", "reportSchedule", "fast", "paused", "registered", "artifactBucketName"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    ENTITIES_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    TRAINING_FIELD_NUMBER: _ClassVar[int]
    SERVING_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    REPORTSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    FAST_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    REGISTERED_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    owner: str
    versionName: str
    description: str
    task: str
    subtask: str
    objective: _generated_pb2.ObjectiveSpec
    entities: _containers.RepeatedCompositeFieldContainer[EntityRef]
    data: ModelClassDataSpec
    training: ModelClassTrainingSpec
    serving: ModelClassServingSpec
    notification: _generated_pb2.NotificationSpec
    reportSchedule: _generated_pb2.RunSchedule
    fast: bool
    paused: bool
    registered: bool
    artifactBucketName: str
    def __init__(self, owner: _Optional[str] = ..., versionName: _Optional[str] = ..., description: _Optional[str] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., objective: _Optional[_Union[_generated_pb2.ObjectiveSpec, _Mapping]] = ..., entities: _Optional[_Iterable[_Union[EntityRef, _Mapping]]] = ..., data: _Optional[_Union[ModelClassDataSpec, _Mapping]] = ..., training: _Optional[_Union[ModelClassTrainingSpec, _Mapping]] = ..., serving: _Optional[_Union[ModelClassServingSpec, _Mapping]] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., reportSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., fast: bool = ..., paused: bool = ..., registered: bool = ..., artifactBucketName: _Optional[str] = ...) -> None: ...

class ModelClassStatus(_message.Message):
    __slots__ = ["observedGeneration", "updatedAt", "bestFE", "trainingScheduleStatus", "predictionScheduleStatus", "monitoringScheduleStatus", "reportScheduleStatus", "bestModelScore", "retired", "predictorName", "dataAppName", "triggeredBy", "failureMessage", "lastRunAt", "lastRunName", "lastPredictionAt", "lastPredictionName", "predictionsCount", "runsCount", "modelsCount", "live", "predictorsCount", "conditions"]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    BESTFE_FIELD_NUMBER: _ClassVar[int]
    TRAININGSCHEDULESTATUS_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONSCHEDULESTATUS_FIELD_NUMBER: _ClassVar[int]
    MONITORINGSCHEDULESTATUS_FIELD_NUMBER: _ClassVar[int]
    REPORTSCHEDULESTATUS_FIELD_NUMBER: _ClassVar[int]
    BESTMODELSCORE_FIELD_NUMBER: _ClassVar[int]
    RETIRED_FIELD_NUMBER: _ClassVar[int]
    PREDICTORNAME_FIELD_NUMBER: _ClassVar[int]
    DATAAPPNAME_FIELD_NUMBER: _ClassVar[int]
    TRIGGEREDBY_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LASTRUNAT_FIELD_NUMBER: _ClassVar[int]
    LASTRUNNAME_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTIONAT_FIELD_NUMBER: _ClassVar[int]
    LASTPREDICTIONNAME_FIELD_NUMBER: _ClassVar[int]
    PREDICTIONSCOUNT_FIELD_NUMBER: _ClassVar[int]
    RUNSCOUNT_FIELD_NUMBER: _ClassVar[int]
    MODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    LIVE_FIELD_NUMBER: _ClassVar[int]
    PREDICTORSCOUNT_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    observedGeneration: int
    updatedAt: _generated_pb2_1_1_1.Time
    bestFE: FeatureEngineeringSpec
    trainingScheduleStatus: _generated_pb2.RunScheduleStatus
    predictionScheduleStatus: _generated_pb2.RunScheduleStatus
    monitoringScheduleStatus: _generated_pb2.RunScheduleStatus
    reportScheduleStatus: _generated_pb2.RunScheduleStatus
    bestModelScore: float
    retired: _containers.RepeatedScalarFieldContainer[str]
    predictorName: str
    dataAppName: str
    triggeredBy: str
    failureMessage: str
    lastRunAt: _generated_pb2_1_1_1.Time
    lastRunName: str
    lastPredictionAt: _generated_pb2_1_1_1.Time
    lastPredictionName: str
    predictionsCount: int
    runsCount: int
    modelsCount: int
    live: bool
    predictorsCount: int
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    def __init__(self, observedGeneration: _Optional[int] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., bestFE: _Optional[_Union[FeatureEngineeringSpec, _Mapping]] = ..., trainingScheduleStatus: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., predictionScheduleStatus: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., monitoringScheduleStatus: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., reportScheduleStatus: _Optional[_Union[_generated_pb2.RunScheduleStatus, _Mapping]] = ..., bestModelScore: _Optional[float] = ..., retired: _Optional[_Iterable[str]] = ..., predictorName: _Optional[str] = ..., dataAppName: _Optional[str] = ..., triggeredBy: _Optional[str] = ..., failureMessage: _Optional[str] = ..., lastRunAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., lastRunName: _Optional[str] = ..., lastPredictionAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., lastPredictionName: _Optional[str] = ..., predictionsCount: _Optional[int] = ..., runsCount: _Optional[int] = ..., modelsCount: _Optional[int] = ..., live: bool = ..., predictorsCount: _Optional[int] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class ModelClassTrainingSpec(_message.Message):
    __slots__ = ["labRef", "studyTemplateName", "modelUnitTests", "trainingSchedule", "searchSpace", "resources", "triggeredBy", "paused", "maxTime", "maxModels", "trainers", "aborted", "explained", "preSQL", "postSQL"]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    STUDYTEMPLATENAME_FIELD_NUMBER: _ClassVar[int]
    MODELUNITTESTS_FIELD_NUMBER: _ClassVar[int]
    TRAININGSCHEDULE_FIELD_NUMBER: _ClassVar[int]
    SEARCHSPACE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    TRIGGEREDBY_FIELD_NUMBER: _ClassVar[int]
    PAUSED_FIELD_NUMBER: _ClassVar[int]
    MAXTIME_FIELD_NUMBER: _ClassVar[int]
    MAXMODELS_FIELD_NUMBER: _ClassVar[int]
    TRAINERS_FIELD_NUMBER: _ClassVar[int]
    ABORTED_FIELD_NUMBER: _ClassVar[int]
    EXPLAINED_FIELD_NUMBER: _ClassVar[int]
    PRESQL_FIELD_NUMBER: _ClassVar[int]
    POSTSQL_FIELD_NUMBER: _ClassVar[int]
    labRef: _generated_pb2_1_1.ObjectReference
    studyTemplateName: str
    modelUnitTests: _generated_pb2.TestSuite
    trainingSchedule: _generated_pb2.RunSchedule
    searchSpace: AlgorithmSearchSpaceSpec
    resources: _generated_pb2.ResourceSpec
    triggeredBy: str
    paused: bool
    maxTime: int
    maxModels: int
    trainers: int
    aborted: bool
    explained: bool
    preSQL: _containers.RepeatedScalarFieldContainer[str]
    postSQL: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, labRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., studyTemplateName: _Optional[str] = ..., modelUnitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., trainingSchedule: _Optional[_Union[_generated_pb2.RunSchedule, _Mapping]] = ..., searchSpace: _Optional[_Union[AlgorithmSearchSpaceSpec, _Mapping]] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., triggeredBy: _Optional[str] = ..., paused: bool = ..., maxTime: _Optional[int] = ..., maxModels: _Optional[int] = ..., trainers: _Optional[int] = ..., aborted: bool = ..., explained: bool = ..., preSQL: _Optional[_Iterable[str]] = ..., postSQL: _Optional[_Iterable[str]] = ...) -> None: ...

class ModelGroupByStatus(_message.Message):
    __slots__ = ["modelsURI", "profilesURI", "forecastsURI", "workerResults"]
    MODELSURI_FIELD_NUMBER: _ClassVar[int]
    PROFILESURI_FIELD_NUMBER: _ClassVar[int]
    FORECASTSURI_FIELD_NUMBER: _ClassVar[int]
    WORKERRESULTS_FIELD_NUMBER: _ClassVar[int]
    modelsURI: str
    profilesURI: str
    forecastsURI: str
    workerResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.WorkerRunResult]
    def __init__(self, modelsURI: _Optional[str] = ..., profilesURI: _Optional[str] = ..., forecastsURI: _Optional[str] = ..., workerResults: _Optional[_Iterable[_Union[_generated_pb2.WorkerRunResult, _Mapping]]] = ...) -> None: ...

class ModelList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Model]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Model, _Mapping]]] = ...) -> None: ...

class ModelResult(_message.Message):
    __slots__ = ["name", "algorithm", "score", "error", "trialID"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    TRIALID_FIELD_NUMBER: _ClassVar[int]
    name: str
    algorithm: str
    score: float
    error: bool
    trialID: int
    def __init__(self, name: _Optional[str] = ..., algorithm: _Optional[str] = ..., score: _Optional[float] = ..., error: bool = ..., trialID: _Optional[int] = ...) -> None: ...

class ModelSpec(_message.Message):
    __slots__ = ["owner", "version", "studyName", "task", "subtask", "objective", "featureEngineering", "estimator", "ensemble", "training", "test", "abort", "package", "report", "pause", "profile", "forecast", "explain", "unitTest", "baseline", "fast", "artifactBucketName", "forecasting", "activeDeadlineSeconds", "estimatorType", "modelClass", "trialID", "approval", "interpretability", "unitTests", "partitionLocations", "modelClassName", "modelClassRunName", "notification"]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    STUDYNAME_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    FEATUREENGINEERING_FIELD_NUMBER: _ClassVar[int]
    ESTIMATOR_FIELD_NUMBER: _ClassVar[int]
    ENSEMBLE_FIELD_NUMBER: _ClassVar[int]
    TRAINING_FIELD_NUMBER: _ClassVar[int]
    TEST_FIELD_NUMBER: _ClassVar[int]
    ABORT_FIELD_NUMBER: _ClassVar[int]
    PACKAGE_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    PAUSE_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    FORECAST_FIELD_NUMBER: _ClassVar[int]
    EXPLAIN_FIELD_NUMBER: _ClassVar[int]
    UNITTEST_FIELD_NUMBER: _ClassVar[int]
    BASELINE_FIELD_NUMBER: _ClassVar[int]
    FAST_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    FORECASTING_FIELD_NUMBER: _ClassVar[int]
    ACTIVEDEADLINESECONDS_FIELD_NUMBER: _ClassVar[int]
    ESTIMATORTYPE_FIELD_NUMBER: _ClassVar[int]
    MODELCLASS_FIELD_NUMBER: _ClassVar[int]
    TRIALID_FIELD_NUMBER: _ClassVar[int]
    APPROVAL_FIELD_NUMBER: _ClassVar[int]
    INTERPRETABILITY_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    PARTITIONLOCATIONS_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    owner: str
    version: str
    studyName: str
    task: str
    subtask: str
    objective: _generated_pb2.ObjectiveSpec
    featureEngineering: FeatureEngineeringSpec
    estimator: ClassicalEstimatorSpec
    ensemble: EnsembleSpec
    training: TrainingSpec
    test: bool
    abort: bool
    package: bool
    report: bool
    pause: bool
    profile: bool
    forecast: bool
    explain: bool
    unitTest: bool
    baseline: bool
    fast: bool
    artifactBucketName: str
    forecasting: ForecasterSpec
    activeDeadlineSeconds: int
    estimatorType: str
    modelClass: str
    trialID: int
    approval: _generated_pb2_1.ApprovalSpec
    interpretability: InterpretabilitySpec
    unitTests: _generated_pb2.TestSuite
    partitionLocations: PartitionModelLocationsSpec
    modelClassName: str
    modelClassRunName: str
    notification: _generated_pb2.NotificationSpec
    def __init__(self, owner: _Optional[str] = ..., version: _Optional[str] = ..., studyName: _Optional[str] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., objective: _Optional[_Union[_generated_pb2.ObjectiveSpec, _Mapping]] = ..., featureEngineering: _Optional[_Union[FeatureEngineeringSpec, _Mapping]] = ..., estimator: _Optional[_Union[ClassicalEstimatorSpec, _Mapping]] = ..., ensemble: _Optional[_Union[EnsembleSpec, _Mapping]] = ..., training: _Optional[_Union[TrainingSpec, _Mapping]] = ..., test: bool = ..., abort: bool = ..., package: bool = ..., report: bool = ..., pause: bool = ..., profile: bool = ..., forecast: bool = ..., explain: bool = ..., unitTest: bool = ..., baseline: bool = ..., fast: bool = ..., artifactBucketName: _Optional[str] = ..., forecasting: _Optional[_Union[ForecasterSpec, _Mapping]] = ..., activeDeadlineSeconds: _Optional[int] = ..., estimatorType: _Optional[str] = ..., modelClass: _Optional[str] = ..., trialID: _Optional[int] = ..., approval: _Optional[_Union[_generated_pb2_1.ApprovalSpec, _Mapping]] = ..., interpretability: _Optional[_Union[InterpretabilitySpec, _Mapping]] = ..., unitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., partitionLocations: _Optional[_Union[PartitionModelLocationsSpec, _Mapping]] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ...) -> None: ...

class ModelStageStatus(_message.Message):
    __slots__ = ["phase", "startedAt", "completedAt", "unitTestsResult", "error"]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSRESULT_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    phase: str
    startedAt: _generated_pb2_1_1_1.Time
    completedAt: _generated_pb2_1_1_1.Time
    unitTestsResult: _generated_pb2.TestSuiteResult
    error: str
    def __init__(self, phase: _Optional[str] = ..., startedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., unitTestsResult: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., error: _Optional[str] = ...) -> None: ...

class ModelStatus(_message.Message):
    __slots__ = ["trainingStartedAt", "trainingCompletedAt", "testingStartedAt", "testingCompletedAt", "completedAt", "validationScore", "trainingScore", "testScore", "validation", "train", "test", "tune", "feedback", "phase", "reportName", "reportLocation", "trainWeightsLocation", "testWeightsLocation", "fullWeightsLocation", "trainLabelEncoderLocation", "profileLocation", "misclassificationLocation", "forecastLocation", "packageLocation", "impurityImportance", "permutationImportance", "runtime", "trainDatasetLocation", "testDatasetLocation", "validationDatasetLocation", "observedGeneration", "trainingRows", "testingRows", "validationRows", "failureMessage", "progress", "datasetName", "dataSourceName", "serving", "tarFileHash", "trainingDataHash", "trainingResources", "testingResources", "trainedBy", "logs", "rocCurve", "prCurve", "trainConfusionMatrix", "testConfusionMatrix", "correlationsWithTarget", "topCorrelations", "updatedAt", "approval", "interpretability", "images", "unitTestResults", "feedbackTestResults", "groupby", "usage", "conditions"]
    TRAININGSTARTEDAT_FIELD_NUMBER: _ClassVar[int]
    TRAININGCOMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    TESTINGSTARTEDAT_FIELD_NUMBER: _ClassVar[int]
    TESTINGCOMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONSCORE_FIELD_NUMBER: _ClassVar[int]
    TRAININGSCORE_FIELD_NUMBER: _ClassVar[int]
    TESTSCORE_FIELD_NUMBER: _ClassVar[int]
    VALIDATION_FIELD_NUMBER: _ClassVar[int]
    TRAIN_FIELD_NUMBER: _ClassVar[int]
    TEST_FIELD_NUMBER: _ClassVar[int]
    TUNE_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    REPORTNAME_FIELD_NUMBER: _ClassVar[int]
    REPORTLOCATION_FIELD_NUMBER: _ClassVar[int]
    TRAINWEIGHTSLOCATION_FIELD_NUMBER: _ClassVar[int]
    TESTWEIGHTSLOCATION_FIELD_NUMBER: _ClassVar[int]
    FULLWEIGHTSLOCATION_FIELD_NUMBER: _ClassVar[int]
    TRAINLABELENCODERLOCATION_FIELD_NUMBER: _ClassVar[int]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    MISCLASSIFICATIONLOCATION_FIELD_NUMBER: _ClassVar[int]
    FORECASTLOCATION_FIELD_NUMBER: _ClassVar[int]
    PACKAGELOCATION_FIELD_NUMBER: _ClassVar[int]
    IMPURITYIMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    PERMUTATIONIMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    RUNTIME_FIELD_NUMBER: _ClassVar[int]
    TRAINDATASETLOCATION_FIELD_NUMBER: _ClassVar[int]
    TESTDATASETLOCATION_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONDATASETLOCATION_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    TRAININGROWS_FIELD_NUMBER: _ClassVar[int]
    TESTINGROWS_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONROWS_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    DATASOURCENAME_FIELD_NUMBER: _ClassVar[int]
    SERVING_FIELD_NUMBER: _ClassVar[int]
    TARFILEHASH_FIELD_NUMBER: _ClassVar[int]
    TRAININGDATAHASH_FIELD_NUMBER: _ClassVar[int]
    TRAININGRESOURCES_FIELD_NUMBER: _ClassVar[int]
    TESTINGRESOURCES_FIELD_NUMBER: _ClassVar[int]
    TRAINEDBY_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    ROCCURVE_FIELD_NUMBER: _ClassVar[int]
    PRCURVE_FIELD_NUMBER: _ClassVar[int]
    TRAINCONFUSIONMATRIX_FIELD_NUMBER: _ClassVar[int]
    TESTCONFUSIONMATRIX_FIELD_NUMBER: _ClassVar[int]
    CORRELATIONSWITHTARGET_FIELD_NUMBER: _ClassVar[int]
    TOPCORRELATIONS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    APPROVAL_FIELD_NUMBER: _ClassVar[int]
    INTERPRETABILITY_FIELD_NUMBER: _ClassVar[int]
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    UNITTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    FEEDBACKTESTRESULTS_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    USAGE_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    trainingStartedAt: _generated_pb2_1_1_1.Time
    trainingCompletedAt: _generated_pb2_1_1_1.Time
    testingStartedAt: _generated_pb2_1_1_1.Time
    testingCompletedAt: _generated_pb2_1_1_1.Time
    completedAt: _generated_pb2_1_1_1.Time
    validationScore: float
    trainingScore: float
    testScore: float
    validation: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    train: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    test: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    tune: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    feedback: _containers.RepeatedCompositeFieldContainer[_generated_pb2.Measurement]
    phase: str
    reportName: str
    reportLocation: _generated_pb2.FileLocation
    trainWeightsLocation: _generated_pb2.FileLocation
    testWeightsLocation: _generated_pb2.FileLocation
    fullWeightsLocation: _generated_pb2.FileLocation
    trainLabelEncoderLocation: _generated_pb2.FileLocation
    profileLocation: _generated_pb2.FileLocation
    misclassificationLocation: _generated_pb2.FileLocation
    forecastLocation: _generated_pb2.FileLocation
    packageLocation: _generated_pb2.FileLocation
    impurityImportance: _containers.RepeatedCompositeFieldContainer[FeatureImportance]
    permutationImportance: _containers.RepeatedCompositeFieldContainer[FeatureImportance]
    runtime: RuntimeStatus
    trainDatasetLocation: _generated_pb2.FileLocation
    testDatasetLocation: _generated_pb2.FileLocation
    validationDatasetLocation: _generated_pb2.FileLocation
    observedGeneration: int
    trainingRows: int
    testingRows: int
    validationRows: int
    failureMessage: str
    progress: int
    datasetName: str
    dataSourceName: str
    serving: ServingStatus
    tarFileHash: str
    trainingDataHash: DataHashes
    trainingResources: _generated_pb2.ResourceConsumption
    testingResources: _generated_pb2.ResourceConsumption
    trainedBy: str
    logs: _generated_pb2.Logs
    rocCurve: _generated_pb2.RocAucCurve
    prCurve: _generated_pb2.PRCurve
    trainConfusionMatrix: _generated_pb2.ConfusionMatrix
    testConfusionMatrix: _generated_pb2.ConfusionMatrix
    correlationsWithTarget: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Correlation]
    topCorrelations: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1.Correlation]
    updatedAt: _generated_pb2_1_1_1.Time
    approval: _generated_pb2_1.ApprovalStatus
    interpretability: InterpretabilityStatus
    images: _generated_pb2.Images
    unitTestResults: _generated_pb2.TestSuiteResult
    feedbackTestResults: _generated_pb2.TestSuiteResult
    groupby: ModelGroupByStatus
    usage: _generated_pb2.ResourceConsumption
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    def __init__(self, trainingStartedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., trainingCompletedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., testingStartedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., testingCompletedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., validationScore: _Optional[float] = ..., trainingScore: _Optional[float] = ..., testScore: _Optional[float] = ..., validation: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., train: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., test: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., tune: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., feedback: _Optional[_Iterable[_Union[_generated_pb2.Measurement, _Mapping]]] = ..., phase: _Optional[str] = ..., reportName: _Optional[str] = ..., reportLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., trainWeightsLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., testWeightsLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., fullWeightsLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., trainLabelEncoderLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., profileLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., misclassificationLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., forecastLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., packageLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., impurityImportance: _Optional[_Iterable[_Union[FeatureImportance, _Mapping]]] = ..., permutationImportance: _Optional[_Iterable[_Union[FeatureImportance, _Mapping]]] = ..., runtime: _Optional[_Union[RuntimeStatus, _Mapping]] = ..., trainDatasetLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., testDatasetLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., validationDatasetLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., trainingRows: _Optional[int] = ..., testingRows: _Optional[int] = ..., validationRows: _Optional[int] = ..., failureMessage: _Optional[str] = ..., progress: _Optional[int] = ..., datasetName: _Optional[str] = ..., dataSourceName: _Optional[str] = ..., serving: _Optional[_Union[ServingStatus, _Mapping]] = ..., tarFileHash: _Optional[str] = ..., trainingDataHash: _Optional[_Union[DataHashes, _Mapping]] = ..., trainingResources: _Optional[_Union[_generated_pb2.ResourceConsumption, _Mapping]] = ..., testingResources: _Optional[_Union[_generated_pb2.ResourceConsumption, _Mapping]] = ..., trainedBy: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., rocCurve: _Optional[_Union[_generated_pb2.RocAucCurve, _Mapping]] = ..., prCurve: _Optional[_Union[_generated_pb2.PRCurve, _Mapping]] = ..., trainConfusionMatrix: _Optional[_Union[_generated_pb2.ConfusionMatrix, _Mapping]] = ..., testConfusionMatrix: _Optional[_Union[_generated_pb2.ConfusionMatrix, _Mapping]] = ..., correlationsWithTarget: _Optional[_Iterable[_Union[_generated_pb2_1.Correlation, _Mapping]]] = ..., topCorrelations: _Optional[_Iterable[_Union[_generated_pb2_1.Correlation, _Mapping]]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., approval: _Optional[_Union[_generated_pb2_1.ApprovalStatus, _Mapping]] = ..., interpretability: _Optional[_Union[InterpretabilityStatus, _Mapping]] = ..., images: _Optional[_Union[_generated_pb2.Images, _Mapping]] = ..., unitTestResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., feedbackTestResults: _Optional[_Union[_generated_pb2.TestSuiteResult, _Mapping]] = ..., groupby: _Optional[_Union[ModelGroupByStatus, _Mapping]] = ..., usage: _Optional[_Union[_generated_pb2.ResourceConsumption, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class ModelTestSuite(_message.Message):
    __slots__ = ["baselineModelRef", "datasetRef", "unitTests"]
    BASELINEMODELREF_FIELD_NUMBER: _ClassVar[int]
    DATASETREF_FIELD_NUMBER: _ClassVar[int]
    UNITTESTS_FIELD_NUMBER: _ClassVar[int]
    baselineModelRef: _generated_pb2_1_1.ObjectReference
    datasetRef: _generated_pb2_1_1.ObjectReference
    unitTests: _generated_pb2.TestSuite
    def __init__(self, baselineModelRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., datasetRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., unitTests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ...) -> None: ...

class NNLayerParameter(_message.Message):
    __slots__ = ["name", "value"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class OutlierModelSpec(_message.Message):
    __slots__ = ["enabled", "outlierAlgorithm"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    OUTLIERALGORITHM_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    outlierAlgorithm: str
    def __init__(self, enabled: bool = ..., outlierAlgorithm: _Optional[str] = ...) -> None: ...

class PartitionModelLocationsSpec(_message.Message):
    __slots__ = ["partitionFolder", "partitionProfileFolder", "partitionReportFile", "partitionModelFolder", "partitionModelFile", "partitionForecastFile"]
    PARTITIONFOLDER_FIELD_NUMBER: _ClassVar[int]
    PARTITIONPROFILEFOLDER_FIELD_NUMBER: _ClassVar[int]
    PARTITIONREPORTFILE_FIELD_NUMBER: _ClassVar[int]
    PARTITIONMODELFOLDER_FIELD_NUMBER: _ClassVar[int]
    PARTITIONMODELFILE_FIELD_NUMBER: _ClassVar[int]
    PARTITIONFORECASTFILE_FIELD_NUMBER: _ClassVar[int]
    partitionFolder: str
    partitionProfileFolder: str
    partitionReportFile: str
    partitionModelFolder: str
    partitionModelFile: str
    partitionForecastFile: str
    def __init__(self, partitionFolder: _Optional[str] = ..., partitionProfileFolder: _Optional[str] = ..., partitionReportFile: _Optional[str] = ..., partitionModelFolder: _Optional[str] = ..., partitionModelFile: _Optional[str] = ..., partitionForecastFile: _Optional[str] = ...) -> None: ...

class PercentilePrunerOptions(_message.Message):
    __slots__ = ["percentile", "startupTrials", "warmupSteps", "intervalTrials", "minTrials"]
    PERCENTILE_FIELD_NUMBER: _ClassVar[int]
    STARTUPTRIALS_FIELD_NUMBER: _ClassVar[int]
    WARMUPSTEPS_FIELD_NUMBER: _ClassVar[int]
    INTERVALTRIALS_FIELD_NUMBER: _ClassVar[int]
    MINTRIALS_FIELD_NUMBER: _ClassVar[int]
    percentile: int
    startupTrials: int
    warmupSteps: int
    intervalTrials: int
    minTrials: int
    def __init__(self, percentile: _Optional[int] = ..., startupTrials: _Optional[int] = ..., warmupSteps: _Optional[int] = ..., intervalTrials: _Optional[int] = ..., minTrials: _Optional[int] = ...) -> None: ...

class PrunerSpec(_message.Message):
    __slots__ = ["type", "median", "percentile", "successiveHalving", "hyperband", "threshold"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MEDIAN_FIELD_NUMBER: _ClassVar[int]
    PERCENTILE_FIELD_NUMBER: _ClassVar[int]
    SUCCESSIVEHALVING_FIELD_NUMBER: _ClassVar[int]
    HYPERBAND_FIELD_NUMBER: _ClassVar[int]
    THRESHOLD_FIELD_NUMBER: _ClassVar[int]
    type: str
    median: MedianPrunerOptions
    percentile: PercentilePrunerOptions
    successiveHalving: SuccessiveHalvingOptions
    hyperband: HyperbandOptions
    threshold: ThresholdPrunerOptions
    def __init__(self, type: _Optional[str] = ..., median: _Optional[_Union[MedianPrunerOptions, _Mapping]] = ..., percentile: _Optional[_Union[PercentilePrunerOptions, _Mapping]] = ..., successiveHalving: _Optional[_Union[SuccessiveHalvingOptions, _Mapping]] = ..., hyperband: _Optional[_Union[HyperbandOptions, _Mapping]] = ..., threshold: _Optional[_Union[ThresholdPrunerOptions, _Mapping]] = ...) -> None: ...

class RegressionForecasterSpec(_message.Message):
    __slots__ = ["ensemble", "imputation", "encoding", "scaling", "date", "windows", "lags", "functions", "ema", "log", "reduction"]
    ENSEMBLE_FIELD_NUMBER: _ClassVar[int]
    IMPUTATION_FIELD_NUMBER: _ClassVar[int]
    ENCODING_FIELD_NUMBER: _ClassVar[int]
    SCALING_FIELD_NUMBER: _ClassVar[int]
    DATE_FIELD_NUMBER: _ClassVar[int]
    WINDOWS_FIELD_NUMBER: _ClassVar[int]
    LAGS_FIELD_NUMBER: _ClassVar[int]
    FUNCTIONS_FIELD_NUMBER: _ClassVar[int]
    EMA_FIELD_NUMBER: _ClassVar[int]
    LOG_FIELD_NUMBER: _ClassVar[int]
    REDUCTION_FIELD_NUMBER: _ClassVar[int]
    ensemble: bool
    imputation: str
    encoding: str
    scaling: str
    date: bool
    windows: _containers.RepeatedScalarFieldContainer[int]
    lags: _containers.RepeatedScalarFieldContainer[int]
    functions: _containers.RepeatedScalarFieldContainer[str]
    ema: bool
    log: bool
    reduction: str
    def __init__(self, ensemble: bool = ..., imputation: _Optional[str] = ..., encoding: _Optional[str] = ..., scaling: _Optional[str] = ..., date: bool = ..., windows: _Optional[_Iterable[int]] = ..., lags: _Optional[_Iterable[int]] = ..., functions: _Optional[_Iterable[str]] = ..., ema: bool = ..., log: bool = ..., reduction: _Optional[str] = ...) -> None: ...

class Report(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: ReportSpec
    status: ReportStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[ReportSpec, _Mapping]] = ..., status: _Optional[_Union[ReportStatus, _Mapping]] = ...) -> None: ...

class ReportGroupByStatus(_message.Message):
    __slots__ = ["reportsURI", "workerResults"]
    REPORTSURI_FIELD_NUMBER: _ClassVar[int]
    WORKERRESULTS_FIELD_NUMBER: _ClassVar[int]
    reportsURI: str
    workerResults: _containers.RepeatedCompositeFieldContainer[_generated_pb2.WorkerRunResult]
    def __init__(self, reportsURI: _Optional[str] = ..., workerResults: _Optional[_Iterable[_Union[_generated_pb2.WorkerRunResult, _Mapping]]] = ...) -> None: ...

class ReportList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Report]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Report, _Mapping]]] = ...) -> None: ...

class ReportSpec(_message.Message):
    __slots__ = ["versionName", "entityRef", "reportType", "format", "notification", "owner", "resources", "timeout", "labRef", "key", "artifactBucketName", "modelClassName", "modelClassRunName"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    ENTITYREF_FIELD_NUMBER: _ClassVar[int]
    REPORTTYPE_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    entityRef: _generated_pb2_1_1.ObjectReference
    reportType: str
    format: str
    notification: _generated_pb2.NotificationSpec
    owner: str
    resources: _generated_pb2.ResourceSpec
    timeout: int
    labRef: _generated_pb2_1_1.ObjectReference
    key: _containers.RepeatedScalarFieldContainer[str]
    artifactBucketName: str
    modelClassName: str
    modelClassRunName: str
    def __init__(self, versionName: _Optional[str] = ..., entityRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., reportType: _Optional[str] = ..., format: _Optional[str] = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., owner: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., timeout: _Optional[int] = ..., labRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., key: _Optional[_Iterable[str]] = ..., artifactBucketName: _Optional[str] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ...) -> None: ...

class ReportStatus(_message.Message):
    __slots__ = ["completedAt", "phase", "location", "observedGeneration", "failureReason", "failureMessage", "logs", "updatedAt", "groupby", "conditions"]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    GROUPBY_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    completedAt: _generated_pb2_1_1_1.Time
    phase: str
    location: _generated_pb2.FileLocation
    observedGeneration: int
    failureReason: str
    failureMessage: str
    logs: _generated_pb2.Logs
    updatedAt: _generated_pb2_1_1_1.Time
    groupby: ReportGroupByStatus
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    def __init__(self, completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., phase: _Optional[str] = ..., location: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., observedGeneration: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., groupby: _Optional[_Union[ReportGroupByStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class RuntimeStatus(_message.Message):
    __slots__ = ["pythonVersion", "os", "pythonPackages"]
    class PythonPackagesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    PYTHONVERSION_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    PYTHONPACKAGES_FIELD_NUMBER: _ClassVar[int]
    pythonVersion: str
    os: str
    pythonPackages: _containers.ScalarMap[str, str]
    def __init__(self, pythonVersion: _Optional[str] = ..., os: _Optional[str] = ..., pythonPackages: _Optional[_Mapping[str, str]] = ...) -> None: ...

class SearchSpec(_message.Message):
    __slots__ = ["sampler", "pruner", "maxTime", "maxModels", "maxScore", "trainers", "test", "retainTop", "retainedFor", "searchSpace", "earlyStop", "objective", "secondaryObjective", "goal"]
    SAMPLER_FIELD_NUMBER: _ClassVar[int]
    PRUNER_FIELD_NUMBER: _ClassVar[int]
    MAXTIME_FIELD_NUMBER: _ClassVar[int]
    MAXMODELS_FIELD_NUMBER: _ClassVar[int]
    MAXSCORE_FIELD_NUMBER: _ClassVar[int]
    TRAINERS_FIELD_NUMBER: _ClassVar[int]
    TEST_FIELD_NUMBER: _ClassVar[int]
    RETAINTOP_FIELD_NUMBER: _ClassVar[int]
    RETAINEDFOR_FIELD_NUMBER: _ClassVar[int]
    SEARCHSPACE_FIELD_NUMBER: _ClassVar[int]
    EARLYSTOP_FIELD_NUMBER: _ClassVar[int]
    OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    SECONDARYOBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    GOAL_FIELD_NUMBER: _ClassVar[int]
    sampler: str
    pruner: PrunerSpec
    maxTime: int
    maxModels: int
    maxScore: float
    trainers: int
    test: int
    retainTop: int
    retainedFor: int
    searchSpace: AlgorithmSearchSpaceSpec
    earlyStop: EarlyStopSpec
    objective: _generated_pb2.ObjectiveSpec
    secondaryObjective: _generated_pb2.ObjectiveSpec
    goal: str
    def __init__(self, sampler: _Optional[str] = ..., pruner: _Optional[_Union[PrunerSpec, _Mapping]] = ..., maxTime: _Optional[int] = ..., maxModels: _Optional[int] = ..., maxScore: _Optional[float] = ..., trainers: _Optional[int] = ..., test: _Optional[int] = ..., retainTop: _Optional[int] = ..., retainedFor: _Optional[int] = ..., searchSpace: _Optional[_Union[AlgorithmSearchSpaceSpec, _Mapping]] = ..., earlyStop: _Optional[_Union[EarlyStopSpec, _Mapping]] = ..., objective: _Optional[_Union[_generated_pb2.ObjectiveSpec, _Mapping]] = ..., secondaryObjective: _Optional[_Union[_generated_pb2.ObjectiveSpec, _Mapping]] = ..., goal: _Optional[str] = ...) -> None: ...

class SeasonalityPeriodSpec(_message.Message):
    __slots__ = ["enabled", "auto", "fourierOrder"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    AUTO_FIELD_NUMBER: _ClassVar[int]
    FOURIERORDER_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    auto: bool
    fourierOrder: int
    def __init__(self, enabled: bool = ..., auto: bool = ..., fourierOrder: _Optional[int] = ...) -> None: ...

class SeasonalitySpec(_message.Message):
    __slots__ = ["auto", "yearly", "quarterly", "monthly", "weekly", "daily"]
    AUTO_FIELD_NUMBER: _ClassVar[int]
    YEARLY_FIELD_NUMBER: _ClassVar[int]
    QUARTERLY_FIELD_NUMBER: _ClassVar[int]
    MONTHLY_FIELD_NUMBER: _ClassVar[int]
    WEEKLY_FIELD_NUMBER: _ClassVar[int]
    DAILY_FIELD_NUMBER: _ClassVar[int]
    auto: bool
    yearly: SeasonalityPeriodSpec
    quarterly: SeasonalityPeriodSpec
    monthly: SeasonalityPeriodSpec
    weekly: SeasonalityPeriodSpec
    daily: SeasonalityPeriodSpec
    def __init__(self, auto: bool = ..., yearly: _Optional[_Union[SeasonalityPeriodSpec, _Mapping]] = ..., quarterly: _Optional[_Union[SeasonalityPeriodSpec, _Mapping]] = ..., monthly: _Optional[_Union[SeasonalityPeriodSpec, _Mapping]] = ..., weekly: _Optional[_Union[SeasonalityPeriodSpec, _Mapping]] = ..., daily: _Optional[_Union[SeasonalityPeriodSpec, _Mapping]] = ...) -> None: ...

class ServingEnvironment(_message.Message):
    __slots__ = ["name", "tests", "servingSiteRef", "access", "replicas", "online", "dashboard", "resources", "preSQL", "postSQL"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TESTS_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    ONLINE_FIELD_NUMBER: _ClassVar[int]
    DASHBOARD_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    PRESQL_FIELD_NUMBER: _ClassVar[int]
    POSTSQL_FIELD_NUMBER: _ClassVar[int]
    name: str
    tests: _generated_pb2.TestSuite
    servingSiteRef: _generated_pb2_1_1.ObjectReference
    access: _generated_pb2.AccessSpec
    replicas: int
    online: bool
    dashboard: bool
    resources: _generated_pb2.ResourceSpec
    preSQL: _containers.RepeatedScalarFieldContainer[str]
    postSQL: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, name: _Optional[str] = ..., tests: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., servingSiteRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., access: _Optional[_Union[_generated_pb2.AccessSpec, _Mapping]] = ..., replicas: _Optional[int] = ..., online: bool = ..., dashboard: bool = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., preSQL: _Optional[_Iterable[str]] = ..., postSQL: _Optional[_Iterable[str]] = ...) -> None: ...

class ServingSpec(_message.Message):
    __slots__ = ["enabled", "predictorName", "resources", "servingSiteRef", "dashboard", "access", "replicas", "promotion", "approvedBy", "approvedAt"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    PREDICTORNAME_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    SERVINGSITEREF_FIELD_NUMBER: _ClassVar[int]
    DASHBOARD_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    PROMOTION_FIELD_NUMBER: _ClassVar[int]
    APPROVEDBY_FIELD_NUMBER: _ClassVar[int]
    APPROVEDAT_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    predictorName: str
    resources: _generated_pb2.ResourceSpec
    servingSiteRef: _generated_pb2_1_1.ObjectReference
    dashboard: bool
    access: _generated_pb2.AccessSpec
    replicas: int
    promotion: str
    approvedBy: _generated_pb2_1_1.ObjectReference
    approvedAt: _generated_pb2_1_1_1.Time
    def __init__(self, enabled: bool = ..., predictorName: _Optional[str] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., servingSiteRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., dashboard: bool = ..., access: _Optional[_Union[_generated_pb2.AccessSpec, _Mapping]] = ..., replicas: _Optional[int] = ..., promotion: _Optional[str] = ..., approvedBy: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., approvedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ...) -> None: ...

class ServingStatus(_message.Message):
    __slots__ = ["predictorName", "dataAppName", "predictorEndpoint", "dashboardEndpoint", "role"]
    PREDICTORNAME_FIELD_NUMBER: _ClassVar[int]
    DATAAPPNAME_FIELD_NUMBER: _ClassVar[int]
    PREDICTORENDPOINT_FIELD_NUMBER: _ClassVar[int]
    DASHBOARDENDPOINT_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    predictorName: str
    dataAppName: str
    predictorEndpoint: str
    dashboardEndpoint: str
    role: str
    def __init__(self, predictorName: _Optional[str] = ..., dataAppName: _Optional[str] = ..., predictorEndpoint: _Optional[str] = ..., dashboardEndpoint: _Optional[str] = ..., role: _Optional[str] = ...) -> None: ...

class Study(_message.Message):
    __slots__ = ["metadata", "spec", "status"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ObjectMeta
    spec: StudySpec
    status: StudyStatus
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ObjectMeta, _Mapping]] = ..., spec: _Optional[_Union[StudySpec, _Mapping]] = ..., status: _Optional[_Union[StudyStatus, _Mapping]] = ...) -> None: ...

class StudyList(_message.Message):
    __slots__ = ["metadata", "items"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    metadata: _generated_pb2_1_1_1.ListMeta
    items: _containers.RepeatedCompositeFieldContainer[Study]
    def __init__(self, metadata: _Optional[_Union[_generated_pb2_1_1_1.ListMeta, _Mapping]] = ..., items: _Optional[_Iterable[_Union[Study, _Mapping]]] = ...) -> None: ...

class StudyPhaseStatus(_message.Message):
    __slots__ = ["startedAt", "completedAt", "waitingModelsCount", "runningModelsCount", "failedModelsCount", "completedModelsCount", "bestScore", "modelsWithNoProgress"]
    STARTEDAT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    WAITINGMODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    RUNNINGMODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    FAILEDMODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDMODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    BESTSCORE_FIELD_NUMBER: _ClassVar[int]
    MODELSWITHNOPROGRESS_FIELD_NUMBER: _ClassVar[int]
    startedAt: _generated_pb2_1_1_1.Time
    completedAt: _generated_pb2_1_1_1.Time
    waitingModelsCount: int
    runningModelsCount: int
    failedModelsCount: int
    completedModelsCount: int
    bestScore: float
    modelsWithNoProgress: int
    def __init__(self, startedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., waitingModelsCount: _Optional[int] = ..., runningModelsCount: _Optional[int] = ..., failedModelsCount: _Optional[int] = ..., completedModelsCount: _Optional[int] = ..., bestScore: _Optional[float] = ..., modelsWithNoProgress: _Optional[int] = ...) -> None: ...

class StudyScheduleSpec(_message.Message):
    __slots__ = ["enabled", "startAt"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    STARTAT_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    startAt: _generated_pb2_1_1_1.Time
    def __init__(self, enabled: bool = ..., startAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ...) -> None: ...

class StudySpec(_message.Message):
    __slots__ = ["versionName", "description", "labRef", "datasetName", "task", "subtask", "featureEngineering", "imbalanceHandler", "baseline", "search", "ensembles", "trainingTemplate", "forecastTemplate", "schedule", "interpretability", "outlierModel", "abort", "report", "pause", "profile", "explain", "fast", "artifactBucketName", "owner", "template", "notification", "gc", "modelVersion", "timeout", "unitTestsTemplate", "groupLocations", "modelClassName", "modelClassRunName", "serving"]
    VERSIONNAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    DATASETNAME_FIELD_NUMBER: _ClassVar[int]
    TASK_FIELD_NUMBER: _ClassVar[int]
    SUBTASK_FIELD_NUMBER: _ClassVar[int]
    FEATUREENGINEERING_FIELD_NUMBER: _ClassVar[int]
    IMBALANCEHANDLER_FIELD_NUMBER: _ClassVar[int]
    BASELINE_FIELD_NUMBER: _ClassVar[int]
    SEARCH_FIELD_NUMBER: _ClassVar[int]
    ENSEMBLES_FIELD_NUMBER: _ClassVar[int]
    TRAININGTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    FORECASTTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    INTERPRETABILITY_FIELD_NUMBER: _ClassVar[int]
    OUTLIERMODEL_FIELD_NUMBER: _ClassVar[int]
    ABORT_FIELD_NUMBER: _ClassVar[int]
    REPORT_FIELD_NUMBER: _ClassVar[int]
    PAUSE_FIELD_NUMBER: _ClassVar[int]
    PROFILE_FIELD_NUMBER: _ClassVar[int]
    EXPLAIN_FIELD_NUMBER: _ClassVar[int]
    FAST_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTBUCKETNAME_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_FIELD_NUMBER: _ClassVar[int]
    GC_FIELD_NUMBER: _ClassVar[int]
    MODELVERSION_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    UNITTESTSTEMPLATE_FIELD_NUMBER: _ClassVar[int]
    GROUPLOCATIONS_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSNAME_FIELD_NUMBER: _ClassVar[int]
    MODELCLASSRUNNAME_FIELD_NUMBER: _ClassVar[int]
    SERVING_FIELD_NUMBER: _ClassVar[int]
    versionName: str
    description: str
    labRef: _generated_pb2_1_1.ObjectReference
    datasetName: str
    task: str
    subtask: str
    featureEngineering: FeatureEngineeringSpec
    imbalanceHandler: ImbalanceHandlingSpec
    baseline: BaselineSpec
    search: SearchSpec
    ensembles: EnsemblesSpec
    trainingTemplate: TrainingSpec
    forecastTemplate: ForecasterSpec
    schedule: StudyScheduleSpec
    interpretability: InterpretabilitySpec
    outlierModel: OutlierModelSpec
    abort: bool
    report: bool
    pause: bool
    profile: bool
    explain: bool
    fast: bool
    artifactBucketName: str
    owner: str
    template: bool
    notification: _generated_pb2.NotificationSpec
    gc: GarbageCollectionSpec
    modelVersion: str
    timeout: int
    unitTestsTemplate: _generated_pb2.TestSuite
    groupLocations: GroupSplitLocationsSpec
    modelClassName: str
    modelClassRunName: str
    serving: ServingSpec
    def __init__(self, versionName: _Optional[str] = ..., description: _Optional[str] = ..., labRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., datasetName: _Optional[str] = ..., task: _Optional[str] = ..., subtask: _Optional[str] = ..., featureEngineering: _Optional[_Union[FeatureEngineeringSpec, _Mapping]] = ..., imbalanceHandler: _Optional[_Union[ImbalanceHandlingSpec, _Mapping]] = ..., baseline: _Optional[_Union[BaselineSpec, _Mapping]] = ..., search: _Optional[_Union[SearchSpec, _Mapping]] = ..., ensembles: _Optional[_Union[EnsemblesSpec, _Mapping]] = ..., trainingTemplate: _Optional[_Union[TrainingSpec, _Mapping]] = ..., forecastTemplate: _Optional[_Union[ForecasterSpec, _Mapping]] = ..., schedule: _Optional[_Union[StudyScheduleSpec, _Mapping]] = ..., interpretability: _Optional[_Union[InterpretabilitySpec, _Mapping]] = ..., outlierModel: _Optional[_Union[OutlierModelSpec, _Mapping]] = ..., abort: bool = ..., report: bool = ..., pause: bool = ..., profile: bool = ..., explain: bool = ..., fast: bool = ..., artifactBucketName: _Optional[str] = ..., owner: _Optional[str] = ..., template: bool = ..., notification: _Optional[_Union[_generated_pb2.NotificationSpec, _Mapping]] = ..., gc: _Optional[_Union[GarbageCollectionSpec, _Mapping]] = ..., modelVersion: _Optional[str] = ..., timeout: _Optional[int] = ..., unitTestsTemplate: _Optional[_Union[_generated_pb2.TestSuite, _Mapping]] = ..., groupLocations: _Optional[_Union[GroupSplitLocationsSpec, _Mapping]] = ..., modelClassName: _Optional[str] = ..., modelClassRunName: _Optional[str] = ..., serving: _Optional[_Union[ServingSpec, _Mapping]] = ...) -> None: ...

class StudyStatus(_message.Message):
    __slots__ = ["modelsCount", "completedAt", "bestModel", "bestModelScore", "profileLocation", "reportLocation", "reportName", "phase", "observedGeneration", "trainDatasetLocation", "testDatasetLocation", "validationDatasetLocation", "optimizerLocation", "lastModelID", "failureReason", "failureMessage", "trainingRowsCount", "testingRowsCount", "validationRowsCount", "progress", "trainingDataHash", "triggeredBy", "logs", "baseline", "search", "ensemble", "test", "explain", "driftDetection", "updatedAt", "gc", "conditions"]
    MODELSCOUNT_FIELD_NUMBER: _ClassVar[int]
    COMPLETEDAT_FIELD_NUMBER: _ClassVar[int]
    BESTMODEL_FIELD_NUMBER: _ClassVar[int]
    BESTMODELSCORE_FIELD_NUMBER: _ClassVar[int]
    PROFILELOCATION_FIELD_NUMBER: _ClassVar[int]
    REPORTLOCATION_FIELD_NUMBER: _ClassVar[int]
    REPORTNAME_FIELD_NUMBER: _ClassVar[int]
    PHASE_FIELD_NUMBER: _ClassVar[int]
    OBSERVEDGENERATION_FIELD_NUMBER: _ClassVar[int]
    TRAINDATASETLOCATION_FIELD_NUMBER: _ClassVar[int]
    TESTDATASETLOCATION_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONDATASETLOCATION_FIELD_NUMBER: _ClassVar[int]
    OPTIMIZERLOCATION_FIELD_NUMBER: _ClassVar[int]
    LASTMODELID_FIELD_NUMBER: _ClassVar[int]
    FAILUREREASON_FIELD_NUMBER: _ClassVar[int]
    FAILUREMESSAGE_FIELD_NUMBER: _ClassVar[int]
    TRAININGROWSCOUNT_FIELD_NUMBER: _ClassVar[int]
    TESTINGROWSCOUNT_FIELD_NUMBER: _ClassVar[int]
    VALIDATIONROWSCOUNT_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    TRAININGDATAHASH_FIELD_NUMBER: _ClassVar[int]
    TRIGGEREDBY_FIELD_NUMBER: _ClassVar[int]
    LOGS_FIELD_NUMBER: _ClassVar[int]
    BASELINE_FIELD_NUMBER: _ClassVar[int]
    SEARCH_FIELD_NUMBER: _ClassVar[int]
    ENSEMBLE_FIELD_NUMBER: _ClassVar[int]
    TEST_FIELD_NUMBER: _ClassVar[int]
    EXPLAIN_FIELD_NUMBER: _ClassVar[int]
    DRIFTDETECTION_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    GC_FIELD_NUMBER: _ClassVar[int]
    CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    modelsCount: int
    completedAt: _generated_pb2_1_1_1.Time
    bestModel: str
    bestModelScore: float
    profileLocation: _generated_pb2.FileLocation
    reportLocation: _generated_pb2.FileLocation
    reportName: str
    phase: str
    observedGeneration: int
    trainDatasetLocation: _generated_pb2.FileLocation
    testDatasetLocation: _generated_pb2.FileLocation
    validationDatasetLocation: _generated_pb2.FileLocation
    optimizerLocation: _generated_pb2.FileLocation
    lastModelID: int
    failureReason: str
    failureMessage: str
    trainingRowsCount: int
    testingRowsCount: int
    validationRowsCount: int
    progress: int
    trainingDataHash: DataHashes
    triggeredBy: str
    logs: _generated_pb2.Logs
    baseline: StudyPhaseStatus
    search: StudyPhaseStatus
    ensemble: StudyPhaseStatus
    test: StudyPhaseStatus
    explain: StudyPhaseStatus
    driftDetection: DriftDetectorStatus
    updatedAt: _generated_pb2_1_1_1.Time
    gc: GarbageCollectionStatus
    conditions: _containers.RepeatedCompositeFieldContainer[_generated_pb2_1_1_1.Condition]
    def __init__(self, modelsCount: _Optional[int] = ..., completedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., bestModel: _Optional[str] = ..., bestModelScore: _Optional[float] = ..., profileLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., reportLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., reportName: _Optional[str] = ..., phase: _Optional[str] = ..., observedGeneration: _Optional[int] = ..., trainDatasetLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., testDatasetLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., validationDatasetLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., optimizerLocation: _Optional[_Union[_generated_pb2.FileLocation, _Mapping]] = ..., lastModelID: _Optional[int] = ..., failureReason: _Optional[str] = ..., failureMessage: _Optional[str] = ..., trainingRowsCount: _Optional[int] = ..., testingRowsCount: _Optional[int] = ..., validationRowsCount: _Optional[int] = ..., progress: _Optional[int] = ..., trainingDataHash: _Optional[_Union[DataHashes, _Mapping]] = ..., triggeredBy: _Optional[str] = ..., logs: _Optional[_Union[_generated_pb2.Logs, _Mapping]] = ..., baseline: _Optional[_Union[StudyPhaseStatus, _Mapping]] = ..., search: _Optional[_Union[StudyPhaseStatus, _Mapping]] = ..., ensemble: _Optional[_Union[StudyPhaseStatus, _Mapping]] = ..., test: _Optional[_Union[StudyPhaseStatus, _Mapping]] = ..., explain: _Optional[_Union[StudyPhaseStatus, _Mapping]] = ..., driftDetection: _Optional[_Union[DriftDetectorStatus, _Mapping]] = ..., updatedAt: _Optional[_Union[_generated_pb2_1_1_1.Time, _Mapping]] = ..., gc: _Optional[_Union[GarbageCollectionStatus, _Mapping]] = ..., conditions: _Optional[_Iterable[_Union[_generated_pb2_1_1_1.Condition, _Mapping]]] = ...) -> None: ...

class SuccessiveHalvingOptions(_message.Message):
    __slots__ = ["minResources", "reductionFactor", "minEarlyStoppingRate", "bootstrapCount"]
    MINRESOURCES_FIELD_NUMBER: _ClassVar[int]
    REDUCTIONFACTOR_FIELD_NUMBER: _ClassVar[int]
    MINEARLYSTOPPINGRATE_FIELD_NUMBER: _ClassVar[int]
    BOOTSTRAPCOUNT_FIELD_NUMBER: _ClassVar[int]
    minResources: int
    reductionFactor: int
    minEarlyStoppingRate: int
    bootstrapCount: int
    def __init__(self, minResources: _Optional[int] = ..., reductionFactor: _Optional[int] = ..., minEarlyStoppingRate: _Optional[int] = ..., bootstrapCount: _Optional[int] = ...) -> None: ...

class SuccessiveHalvingSpec(_message.Message):
    __slots__ = ["budget", "bracket", "rung", "confID", "modality"]
    BUDGET_FIELD_NUMBER: _ClassVar[int]
    BRACKET_FIELD_NUMBER: _ClassVar[int]
    RUNG_FIELD_NUMBER: _ClassVar[int]
    CONFID_FIELD_NUMBER: _ClassVar[int]
    MODALITY_FIELD_NUMBER: _ClassVar[int]
    budget: int
    bracket: int
    rung: int
    confID: int
    modality: str
    def __init__(self, budget: _Optional[int] = ..., bracket: _Optional[int] = ..., rung: _Optional[int] = ..., confID: _Optional[int] = ..., modality: _Optional[str] = ...) -> None: ...

class TextPipelineSpec(_message.Message):
    __slots__ = ["encoder", "tokenizer", "stopwords", "pos", "lemma", "stem", "embedding", "svd", "maxSvdComponents"]
    ENCODER_FIELD_NUMBER: _ClassVar[int]
    TOKENIZER_FIELD_NUMBER: _ClassVar[int]
    STOPWORDS_FIELD_NUMBER: _ClassVar[int]
    POS_FIELD_NUMBER: _ClassVar[int]
    LEMMA_FIELD_NUMBER: _ClassVar[int]
    STEM_FIELD_NUMBER: _ClassVar[int]
    EMBEDDING_FIELD_NUMBER: _ClassVar[int]
    SVD_FIELD_NUMBER: _ClassVar[int]
    MAXSVDCOMPONENTS_FIELD_NUMBER: _ClassVar[int]
    encoder: str
    tokenizer: str
    stopwords: bool
    pos: bool
    lemma: bool
    stem: bool
    embedding: str
    svd: bool
    maxSvdComponents: int
    def __init__(self, encoder: _Optional[str] = ..., tokenizer: _Optional[str] = ..., stopwords: bool = ..., pos: bool = ..., lemma: bool = ..., stem: bool = ..., embedding: _Optional[str] = ..., svd: bool = ..., maxSvdComponents: _Optional[int] = ...) -> None: ...

class ThresholdPrunerOptions(_message.Message):
    __slots__ = ["lower", "upper", "warmupSteps", "intervalSteps"]
    LOWER_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    WARMUPSTEPS_FIELD_NUMBER: _ClassVar[int]
    INTERVALSTEPS_FIELD_NUMBER: _ClassVar[int]
    lower: float
    upper: float
    warmupSteps: int
    intervalSteps: int
    def __init__(self, lower: _Optional[float] = ..., upper: _Optional[float] = ..., warmupSteps: _Optional[int] = ..., intervalSteps: _Optional[int] = ...) -> None: ...

class TimeSeriesEvent(_message.Message):
    __slots__ = ["name", "method", "holiday", "country", "preEvent", "postEvent", "timePoints"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    HOLIDAY_FIELD_NUMBER: _ClassVar[int]
    COUNTRY_FIELD_NUMBER: _ClassVar[int]
    PREEVENT_FIELD_NUMBER: _ClassVar[int]
    POSTEVENT_FIELD_NUMBER: _ClassVar[int]
    TIMEPOINTS_FIELD_NUMBER: _ClassVar[int]
    name: str
    method: str
    holiday: bool
    country: str
    preEvent: int
    postEvent: int
    timePoints: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, name: _Optional[str] = ..., method: _Optional[str] = ..., holiday: bool = ..., country: _Optional[str] = ..., preEvent: _Optional[int] = ..., postEvent: _Optional[int] = ..., timePoints: _Optional[_Iterable[str]] = ...) -> None: ...

class TrainingSpec(_message.Message):
    __slots__ = ["labRef", "priority", "cvtype", "folds", "split", "evalMetrics", "sh", "seed", "resources", "gpu", "featureImportance", "samplePct", "checkpoint", "logLevel", "timeout"]
    LABREF_FIELD_NUMBER: _ClassVar[int]
    PRIORITY_FIELD_NUMBER: _ClassVar[int]
    CVTYPE_FIELD_NUMBER: _ClassVar[int]
    FOLDS_FIELD_NUMBER: _ClassVar[int]
    SPLIT_FIELD_NUMBER: _ClassVar[int]
    EVALMETRICS_FIELD_NUMBER: _ClassVar[int]
    SH_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    GPU_FIELD_NUMBER: _ClassVar[int]
    FEATUREIMPORTANCE_FIELD_NUMBER: _ClassVar[int]
    SAMPLEPCT_FIELD_NUMBER: _ClassVar[int]
    CHECKPOINT_FIELD_NUMBER: _ClassVar[int]
    LOGLEVEL_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    labRef: _generated_pb2_1_1.ObjectReference
    priority: str
    cvtype: str
    folds: int
    split: DataSplitSpec
    evalMetrics: _containers.RepeatedScalarFieldContainer[str]
    sh: SuccessiveHalvingSpec
    seed: float
    resources: _generated_pb2.ResourceSpec
    gpu: bool
    featureImportance: bool
    samplePct: int
    checkpoint: CheckpointSpec
    logLevel: str
    timeout: int
    def __init__(self, labRef: _Optional[_Union[_generated_pb2_1_1.ObjectReference, _Mapping]] = ..., priority: _Optional[str] = ..., cvtype: _Optional[str] = ..., folds: _Optional[int] = ..., split: _Optional[_Union[DataSplitSpec, _Mapping]] = ..., evalMetrics: _Optional[_Iterable[str]] = ..., sh: _Optional[_Union[SuccessiveHalvingSpec, _Mapping]] = ..., seed: _Optional[float] = ..., resources: _Optional[_Union[_generated_pb2.ResourceSpec, _Mapping]] = ..., gpu: bool = ..., featureImportance: bool = ..., samplePct: _Optional[int] = ..., checkpoint: _Optional[_Union[CheckpointSpec, _Mapping]] = ..., logLevel: _Optional[str] = ..., timeout: _Optional[int] = ...) -> None: ...

class UnivariateForecastStatus(_message.Message):
    __slots__ = ["gridSearchResultURI", "baseEstimator", "modelURI", "cvResultURI", "forecastURI"]
    GRIDSEARCHRESULTURI_FIELD_NUMBER: _ClassVar[int]
    BASEESTIMATOR_FIELD_NUMBER: _ClassVar[int]
    MODELURI_FIELD_NUMBER: _ClassVar[int]
    CVRESULTURI_FIELD_NUMBER: _ClassVar[int]
    FORECASTURI_FIELD_NUMBER: _ClassVar[int]
    gridSearchResultURI: str
    baseEstimator: ClassicalEstimatorSpec
    modelURI: str
    cvResultURI: str
    forecastURI: str
    def __init__(self, gridSearchResultURI: _Optional[str] = ..., baseEstimator: _Optional[_Union[ClassicalEstimatorSpec, _Mapping]] = ..., modelURI: _Optional[str] = ..., cvResultURI: _Optional[str] = ..., forecastURI: _Optional[str] = ...) -> None: ...

class VideoPipelineSpec(_message.Message):
    __slots__ = ["featurizer"]
    FEATURIZER_FIELD_NUMBER: _ClassVar[int]
    featurizer: str
    def __init__(self, featurizer: _Optional[str] = ...) -> None: ...

class WindowSpec(_message.Message):
    __slots__ = ["interval", "start", "length"]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    START_FIELD_NUMBER: _ClassVar[int]
    LENGTH_FIELD_NUMBER: _ClassVar[int]
    interval: str
    start: int
    length: int
    def __init__(self, interval: _Optional[str] = ..., start: _Optional[int] = ..., length: _Optional[int] = ...) -> None: ...
