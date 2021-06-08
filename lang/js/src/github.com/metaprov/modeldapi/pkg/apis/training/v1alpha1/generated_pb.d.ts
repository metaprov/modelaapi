import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AudioPipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): AudioPipelineSpec;
  clearColumnsList(): AudioPipelineSpec;
  addColumns(value: string, index?: number): AudioPipelineSpec;

  getFeaturizer(): string;
  setFeaturizer(value: string): AudioPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AudioPipelineSpec): AudioPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: AudioPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioPipelineSpec;
  static deserializeBinaryFromReader(message: AudioPipelineSpec, reader: jspb.BinaryReader): AudioPipelineSpec;
}

export namespace AudioPipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    featurizer: string,
  }
}

export class BacktestSpec extends jspb.Message {
  getInitial(): number;
  setInitial(value: number): BacktestSpec;

  getWindows(): number;
  setWindows(value: number): BacktestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestSpec): BacktestSpec.AsObject;
  static serializeBinaryToWriter(message: BacktestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestSpec;
  static deserializeBinaryFromReader(message: BacktestSpec, reader: jspb.BinaryReader): BacktestSpec;
}

export namespace BacktestSpec {
  export type AsObject = {
    initial: number,
    windows: number,
  }
}

export class CapacityStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): CapacityStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): CapacityStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): CapacityStageSpec;
  clearValidationsList(): CapacityStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): CapacityStageSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): CapacityStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapacityStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CapacityStageSpec): CapacityStageSpec.AsObject;
  static serializeBinaryToWriter(message: CapacityStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapacityStageSpec;
  static deserializeBinaryFromReader(message: CapacityStageSpec, reader: jspb.BinaryReader): CapacityStageSpec;
}

export namespace CapacityStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    validationsList: Array<ModelValidation.AsObject>,
    manualapproval: boolean,
    workloadclassname: string,
  }
}

export class CategoricalPipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): CategoricalPipelineSpec;
  clearColumnsList(): CategoricalPipelineSpec;
  addColumns(value: string, index?: number): CategoricalPipelineSpec;

  getImputer(): string;
  setImputer(value: string): CategoricalPipelineSpec;

  getEncoder(): string;
  setEncoder(value: string): CategoricalPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoricalPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CategoricalPipelineSpec): CategoricalPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: CategoricalPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoricalPipelineSpec;
  static deserializeBinaryFromReader(message: CategoricalPipelineSpec, reader: jspb.BinaryReader): CategoricalPipelineSpec;
}

export namespace CategoricalPipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    imputer: string,
    encoder: string,
  }
}

export class ChatbotEstimatorSpec extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatbotEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ChatbotEstimatorSpec): ChatbotEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: ChatbotEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatbotEstimatorSpec;
  static deserializeBinaryFromReader(message: ChatbotEstimatorSpec, reader: jspb.BinaryReader): ChatbotEstimatorSpec;
}

export namespace ChatbotEstimatorSpec {
  export type AsObject = {
  }
}

export class ClassicalEstimatorSpec extends jspb.Message {
  getAlgorithmname(): string;
  setAlgorithmname(value: string): ClassicalEstimatorSpec;

  getParametersList(): Array<HyperParameterValue>;
  setParametersList(value: Array<HyperParameterValue>): ClassicalEstimatorSpec;
  clearParametersList(): ClassicalEstimatorSpec;
  addParameters(value?: HyperParameterValue, index?: number): HyperParameterValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassicalEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ClassicalEstimatorSpec): ClassicalEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: ClassicalEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassicalEstimatorSpec;
  static deserializeBinaryFromReader(message: ClassicalEstimatorSpec, reader: jspb.BinaryReader): ClassicalEstimatorSpec;
}

export namespace ClassicalEstimatorSpec {
  export type AsObject = {
    algorithmname: string,
    parametersList: Array<HyperParameterValue.AsObject>,
  }
}

export class DataSplit extends jspb.Message {
  getAuto(): boolean;
  setAuto(value: boolean): DataSplit;

  getTrain(): number;
  setTrain(value: number): DataSplit;

  getValidation(): number;
  setValidation(value: number): DataSplit;

  getTest(): number;
  setTest(value: number): DataSplit;

  getSplitpolicy(): string;
  setSplitpolicy(value: string): DataSplit;

  getSplitcolumn(): string;
  setSplitcolumn(value: string): DataSplit;

  getSeed(): number;
  setSeed(value: number): DataSplit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSplit.AsObject;
  static toObject(includeInstance: boolean, msg: DataSplit): DataSplit.AsObject;
  static serializeBinaryToWriter(message: DataSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSplit;
  static deserializeBinaryFromReader(message: DataSplit, reader: jspb.BinaryReader): DataSplit;
}

export namespace DataSplit {
  export type AsObject = {
    auto: boolean,
    train: number,
    validation: number,
    test: number,
    splitpolicy: string,
    splitcolumn: string,
    seed: number,
  }
}

export class DataStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DataStageSpec;

  getLabname(): string;
  setLabname(value: string): DataStageSpec;

  getDatapipelinename(): string;
  setDatapipelinename(value: string): DataStageSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): DataStageSpec;

  getDockerimage(): string;
  setDockerimage(value: string): DataStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataStageSpec): DataStageSpec.AsObject;
  static serializeBinaryToWriter(message: DataStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataStageSpec;
  static deserializeBinaryFromReader(message: DataStageSpec, reader: jspb.BinaryReader): DataStageSpec;
}

export namespace DataStageSpec {
  export type AsObject = {
    enabled: boolean,
    labname: string,
    datapipelinename: string,
    datasourcename: string,
    dockerimage: string,
  }
}

export class DateTimePipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): DateTimePipelineSpec;
  clearColumnsList(): DateTimePipelineSpec;
  addColumns(value: string, index?: number): DateTimePipelineSpec;

  getImputer(): string;
  setImputer(value: string): DateTimePipelineSpec;

  getExpand(): boolean;
  setExpand(value: boolean): DateTimePipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTimePipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DateTimePipelineSpec): DateTimePipelineSpec.AsObject;
  static serializeBinaryToWriter(message: DateTimePipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTimePipelineSpec;
  static deserializeBinaryFromReader(message: DateTimePipelineSpec, reader: jspb.BinaryReader): DateTimePipelineSpec;
}

export namespace DateTimePipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    imputer: string,
    expand: boolean,
  }
}

export class DeepEstimatorLayer extends jspb.Message {
  getName(): string;
  setName(value: string): DeepEstimatorLayer;

  getType(): string;
  setType(value: string): DeepEstimatorLayer;

  getParametersList(): Array<NNLayerParameter>;
  setParametersList(value: Array<NNLayerParameter>): DeepEstimatorLayer;
  clearParametersList(): DeepEstimatorLayer;
  addParameters(value?: NNLayerParameter, index?: number): NNLayerParameter;

  getInputlayersList(): Array<string>;
  setInputlayersList(value: Array<string>): DeepEstimatorLayer;
  clearInputlayersList(): DeepEstimatorLayer;
  addInputlayers(value: string, index?: number): DeepEstimatorLayer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeepEstimatorLayer.AsObject;
  static toObject(includeInstance: boolean, msg: DeepEstimatorLayer): DeepEstimatorLayer.AsObject;
  static serializeBinaryToWriter(message: DeepEstimatorLayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeepEstimatorLayer;
  static deserializeBinaryFromReader(message: DeepEstimatorLayer, reader: jspb.BinaryReader): DeepEstimatorLayer;
}

export namespace DeepEstimatorLayer {
  export type AsObject = {
    name: string,
    type: string,
    parametersList: Array<NNLayerParameter.AsObject>,
    inputlayersList: Array<string>,
  }
}

export class DeepEstimatorSpec extends jspb.Message {
  getLayersList(): Array<DeepEstimatorLayer>;
  setLayersList(value: Array<DeepEstimatorLayer>): DeepEstimatorSpec;
  clearLayersList(): DeepEstimatorSpec;
  addLayers(value?: DeepEstimatorLayer, index?: number): DeepEstimatorLayer;

  getType(): string;
  setType(value: string): DeepEstimatorSpec;

  getBatchsize(): number;
  setBatchsize(value: number): DeepEstimatorSpec;

  getEpochs(): number;
  setEpochs(value: number): DeepEstimatorSpec;

  getValidationsplit(): number;
  setValidationsplit(value: number): DeepEstimatorSpec;

  getIsseq(): boolean;
  setIsseq(value: boolean): DeepEstimatorSpec;

  getGpus(): number;
  setGpus(value: number): DeepEstimatorSpec;

  getLoss(): string;
  setLoss(value: string): DeepEstimatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeepEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DeepEstimatorSpec): DeepEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: DeepEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeepEstimatorSpec;
  static deserializeBinaryFromReader(message: DeepEstimatorSpec, reader: jspb.BinaryReader): DeepEstimatorSpec;
}

export namespace DeepEstimatorSpec {
  export type AsObject = {
    layersList: Array<DeepEstimatorLayer.AsObject>,
    type: string,
    batchsize: number,
    epochs: number,
    validationsplit: number,
    isseq: boolean,
    gpus: number,
    loss: string,
  }
}

export class DeploymentStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DeploymentStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): DeploymentStageSpec;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): DeploymentStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): DeploymentStageSpec;
  clearValidationsList(): DeploymentStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): DeploymentStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentStageSpec): DeploymentStageSpec.AsObject;
  static serializeBinaryToWriter(message: DeploymentStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentStageSpec;
  static deserializeBinaryFromReader(message: DeploymentStageSpec, reader: jspb.BinaryReader): DeploymentStageSpec;
}

export namespace DeploymentStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    manualapproval: boolean,
    validationsList: Array<ModelValidation.AsObject>,
    workloadclassname: string,
  }
}

export class DimensionValue extends jspb.Message {
  getKey(): string;
  setKey(value: string): DimensionValue;

  getValue(): string;
  setValue(value: string): DimensionValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DimensionValue.AsObject;
  static toObject(includeInstance: boolean, msg: DimensionValue): DimensionValue.AsObject;
  static serializeBinaryToWriter(message: DimensionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DimensionValue;
  static deserializeBinaryFromReader(message: DimensionValue, reader: jspb.BinaryReader): DimensionValue;
}

export namespace DimensionValue {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class EnsembleRules extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsembleRules.AsObject;
  static toObject(includeInstance: boolean, msg: EnsembleRules): EnsembleRules.AsObject;
  static serializeBinaryToWriter(message: EnsembleRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsembleRules;
  static deserializeBinaryFromReader(message: EnsembleRules, reader: jspb.BinaryReader): EnsembleRules;
}

export namespace EnsembleRules {
  export type AsObject = {
  }
}

export class EnsembleSpec extends jspb.Message {
  getBaseList(): Array<string>;
  setBaseList(value: Array<string>): EnsembleSpec;
  clearBaseList(): EnsembleSpec;
  addBase(value: string, index?: number): EnsembleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsembleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EnsembleSpec): EnsembleSpec.AsObject;
  static serializeBinaryToWriter(message: EnsembleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsembleSpec;
  static deserializeBinaryFromReader(message: EnsembleSpec, reader: jspb.BinaryReader): EnsembleSpec;
}

export namespace EnsembleSpec {
  export type AsObject = {
    baseList: Array<string>,
  }
}

export class FeatureImportance extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): FeatureImportance;

  getImportance(): number;
  setImportance(value: number): FeatureImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureImportance.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureImportance): FeatureImportance.AsObject;
  static serializeBinaryToWriter(message: FeatureImportance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureImportance;
  static deserializeBinaryFromReader(message: FeatureImportance, reader: jspb.BinaryReader): FeatureImportance;
}

export namespace FeatureImportance {
  export type AsObject = {
    feature: string,
    importance: number,
  }
}

export class ForecastObj extends jspb.Message {
  getKey(): string;
  setKey(value: string): ForecastObj;

  getLevelindex(): number;
  setLevelindex(value: number): ForecastObj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastObj.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastObj): ForecastObj.AsObject;
  static serializeBinaryToWriter(message: ForecastObj, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastObj;
  static deserializeBinaryFromReader(message: ForecastObj, reader: jspb.BinaryReader): ForecastObj;
}

export namespace ForecastObj {
  export type AsObject = {
    key: string,
    levelindex: number,
  }
}

export class ForecastingSpec extends jspb.Message {
  getTimecolumn(): string;
  setTimecolumn(value: string): ForecastingSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): ForecastingSpec;

  getDatetimeformat(): string;
  setDatetimeformat(value: string): ForecastingSpec;

  getDimensionsList(): Array<string>;
  setDimensionsList(value: Array<string>): ForecastingSpec;
  clearDimensionsList(): ForecastingSpec;
  addDimensions(value: string, index?: number): ForecastingSpec;

  getRepressorsList(): Array<string>;
  setRepressorsList(value: Array<string>): ForecastingSpec;
  clearRepressorsList(): ForecastingSpec;
  addRepressors(value: string, index?: number): ForecastingSpec;

  getFreqspec(): FreqSpec | undefined;
  setFreqspec(value?: FreqSpec): ForecastingSpec;
  hasFreqspec(): boolean;
  clearFreqspec(): ForecastingSpec;

  getHorizon(): number;
  setHorizon(value: number): ForecastingSpec;

  getConfidenceinterval(): number;
  setConfidenceinterval(value: number): ForecastingSpec;

  getCountryforholiday(): string;
  setCountryforholiday(value: string): ForecastingSpec;

  getDimensionvaluesList(): Array<DimensionValue>;
  setDimensionvaluesList(value: Array<DimensionValue>): ForecastingSpec;
  clearDimensionvaluesList(): ForecastingSpec;
  addDimensionvalues(value?: DimensionValue, index?: number): DimensionValue;

  getBacktest(): BacktestSpec | undefined;
  setBacktest(value?: BacktestSpec): ForecastingSpec;
  hasBacktest(): boolean;
  clearBacktest(): ForecastingSpec;

  getForecastconnectionname(): string;
  setForecastconnectionname(value: string): ForecastingSpec;

  getForecast(): boolean;
  setForecast(value: boolean): ForecastingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastingSpec): ForecastingSpec.AsObject;
  static serializeBinaryToWriter(message: ForecastingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastingSpec;
  static deserializeBinaryFromReader(message: ForecastingSpec, reader: jspb.BinaryReader): ForecastingSpec;
}

export namespace ForecastingSpec {
  export type AsObject = {
    timecolumn: string,
    targetcolumn: string,
    datetimeformat: string,
    dimensionsList: Array<string>,
    repressorsList: Array<string>,
    freqspec?: FreqSpec.AsObject,
    horizon: number,
    confidenceinterval: number,
    countryforholiday: string,
    dimensionvaluesList: Array<DimensionValue.AsObject>,
    backtest?: BacktestSpec.AsObject,
    forecastconnectionname: string,
    forecast: boolean,
  }
}

export class FreqSpec extends jspb.Message {
  getInterval(): number;
  setInterval(value: number): FreqSpec;

  getUnit(): string;
  setUnit(value: string): FreqSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FreqSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FreqSpec): FreqSpec.AsObject;
  static serializeBinaryToWriter(message: FreqSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FreqSpec;
  static deserializeBinaryFromReader(message: FreqSpec, reader: jspb.BinaryReader): FreqSpec;
}

export namespace FreqSpec {
  export type AsObject = {
    interval: number,
    unit: string,
  }
}

export class Hierarchy extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): Hierarchy;
  clearColumnsList(): Hierarchy;
  addColumns(value: string, index?: number): Hierarchy;

  getGrouplevelsList(): Array<Level>;
  setGrouplevelsList(value: Array<Level>): Hierarchy;
  clearGrouplevelsList(): Hierarchy;
  addGrouplevels(value?: Level, index?: number): Level;

  getItemlevel(): Level | undefined;
  setItemlevel(value?: Level): Hierarchy;
  hasItemlevel(): boolean;
  clearItemlevel(): Hierarchy;

  getNotifiername(): string;
  setNotifiername(value: string): Hierarchy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hierarchy.AsObject;
  static toObject(includeInstance: boolean, msg: Hierarchy): Hierarchy.AsObject;
  static serializeBinaryToWriter(message: Hierarchy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hierarchy;
  static deserializeBinaryFromReader(message: Hierarchy, reader: jspb.BinaryReader): Hierarchy;
}

export namespace Hierarchy {
  export type AsObject = {
    columnsList: Array<string>,
    grouplevelsList: Array<Level.AsObject>,
    itemlevel?: Level.AsObject,
    notifiername: string,
  }
}

export class HyperParameterValue extends jspb.Message {
  getName(): string;
  setName(value: string): HyperParameterValue;

  getValue(): string;
  setValue(value: string): HyperParameterValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperParameterValue.AsObject;
  static toObject(includeInstance: boolean, msg: HyperParameterValue): HyperParameterValue.AsObject;
  static serializeBinaryToWriter(message: HyperParameterValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperParameterValue;
  static deserializeBinaryFromReader(message: HyperParameterValue, reader: jspb.BinaryReader): HyperParameterValue;
}

export namespace HyperParameterValue {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class ImagePipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): ImagePipelineSpec;
  clearColumnsList(): ImagePipelineSpec;
  addColumns(value: string, index?: number): ImagePipelineSpec;

  getFeaturizer(): string;
  setFeaturizer(value: string): ImagePipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagePipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImagePipelineSpec): ImagePipelineSpec.AsObject;
  static serializeBinaryToWriter(message: ImagePipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagePipelineSpec;
  static deserializeBinaryFromReader(message: ImagePipelineSpec, reader: jspb.BinaryReader): ImagePipelineSpec;
}

export namespace ImagePipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    featurizer: string,
  }
}

export class Level extends jspb.Message {
  getString(): string;
  setString(value: string): Level;

  getHorizon(): number;
  setHorizon(value: number): Level;

  getFreq(): string;
  setFreq(value: string): Level;

  getAggregate(): string;
  setAggregate(value: string): Level;

  getDistincList(): Array<string>;
  setDistincList(value: Array<string>): Level;
  clearDistincList(): Level;
  addDistinc(value: string, index?: number): Level;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Level.AsObject;
  static toObject(includeInstance: boolean, msg: Level): Level.AsObject;
  static serializeBinaryToWriter(message: Level, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Level;
  static deserializeBinaryFromReader(message: Level, reader: jspb.BinaryReader): Level;
}

export namespace Level {
  export type AsObject = {
    string: string,
    horizon: number,
    freq: string,
    aggregate: string,
    distincList: Array<string>,
  }
}

export class Model extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Model;
  hasMetadata(): boolean;
  clearMetadata(): Model;

  getSpec(): ModelSpec | undefined;
  setSpec(value?: ModelSpec): Model;
  hasSpec(): boolean;
  clearSpec(): Model;

  getStatus(): ModelStatus | undefined;
  setStatus(value?: ModelStatus): Model;
  hasStatus(): boolean;
  clearStatus(): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelSpec.AsObject,
    status?: ModelStatus.AsObject,
  }
}

export class ModelAutobuilder extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelAutobuilder;
  hasMetadata(): boolean;
  clearMetadata(): ModelAutobuilder;

  getSpec(): ModelAutobuilderSpec | undefined;
  setSpec(value?: ModelAutobuilderSpec): ModelAutobuilder;
  hasSpec(): boolean;
  clearSpec(): ModelAutobuilder;

  getStatus(): ModelAutobuilderStatus | undefined;
  setStatus(value?: ModelAutobuilderStatus): ModelAutobuilder;
  hasStatus(): boolean;
  clearStatus(): ModelAutobuilder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilder.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilder): ModelAutobuilder.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilder;
  static deserializeBinaryFromReader(message: ModelAutobuilder, reader: jspb.BinaryReader): ModelAutobuilder;
}

export namespace ModelAutobuilder {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelAutobuilderSpec.AsObject,
    status?: ModelAutobuilderStatus.AsObject,
  }
}

export class ModelAutobuilderCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelAutobuilderCondition;

  getStatus(): string;
  setStatus(value: string): ModelAutobuilderCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelAutobuilderCondition;

  getReason(): string;
  setReason(value: string): ModelAutobuilderCondition;

  getMessage(): string;
  setMessage(value: string): ModelAutobuilderCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderCondition): ModelAutobuilderCondition.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderCondition;
  static deserializeBinaryFromReader(message: ModelAutobuilderCondition, reader: jspb.BinaryReader): ModelAutobuilderCondition;
}

export namespace ModelAutobuilderCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelAutobuilderList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelAutobuilderList;
  hasMetadata(): boolean;
  clearMetadata(): ModelAutobuilderList;

  getItemsList(): Array<ModelAutobuilder>;
  setItemsList(value: Array<ModelAutobuilder>): ModelAutobuilderList;
  clearItemsList(): ModelAutobuilderList;
  addItems(value?: ModelAutobuilder, index?: number): ModelAutobuilder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderList): ModelAutobuilderList.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderList;
  static deserializeBinaryFromReader(message: ModelAutobuilderList, reader: jspb.BinaryReader): ModelAutobuilderList;
}

export namespace ModelAutobuilderList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelAutobuilder.AsObject>,
  }
}

export class ModelAutobuilderSpec extends jspb.Message {
  getDataproductname(): string;
  setDataproductname(value: string): ModelAutobuilderSpec;

  getDataproductversionname(): string;
  setDataproductversionname(value: string): ModelAutobuilderSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): ModelAutobuilderSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelAutobuilderSpec;

  getLocation(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelAutobuilderSpec;
  hasLocation(): boolean;
  clearLocation(): ModelAutobuilderSpec;

  getTask(): string;
  setTask(value: string): ModelAutobuilderSpec;

  getObjective(): string;
  setObjective(value: string): ModelAutobuilderSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): ModelAutobuilderSpec;

  getMaxtime(): number;
  setMaxtime(value: number): ModelAutobuilderSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): ModelAutobuilderSpec;

  getAccessmethod(): string;
  setAccessmethod(value: string): ModelAutobuilderSpec;

  getAutoscale(): boolean;
  setAutoscale(value: boolean): ModelAutobuilderSpec;

  getDatasourcespec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec | undefined;
  setDatasourcespec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec): ModelAutobuilderSpec;
  hasDatasourcespec(): boolean;
  clearDatasourcespec(): ModelAutobuilderSpec;

  getTrainers(): number;
  setTrainers(value: number): ModelAutobuilderSpec;

  getSearchmethod(): string;
  setSearchmethod(value: string): ModelAutobuilderSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelAutobuilderSpec;

  getOwner(): string;
  setOwner(value: string): ModelAutobuilderSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): ModelAutobuilderSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelAutobuilderSpec;
  hasLabref(): boolean;
  clearLabref(): ModelAutobuilderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderSpec): ModelAutobuilderSpec.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderSpec;
  static deserializeBinaryFromReader(message: ModelAutobuilderSpec, reader: jspb.BinaryReader): ModelAutobuilderSpec;
}

export namespace ModelAutobuilderSpec {
  export type AsObject = {
    dataproductname: string,
    dataproductversionname: string,
    datasourcename: string,
    datasetname: string,
    location?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    task: string,
    objective: string,
    targetcolumn: string,
    maxtime: number,
    maxmodels: number,
    accessmethod: string,
    autoscale: boolean,
    datasourcespec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.AsObject,
    trainers: number,
    searchmethod: string,
    aborted: boolean,
    owner: string,
    workloadclassname: string,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class ModelAutobuilderStatus extends jspb.Message {
  getFlatfilename(): string;
  setFlatfilename(value: string): ModelAutobuilderStatus;

  getDatasourcename(): string;
  setDatasourcename(value: string): ModelAutobuilderStatus;

  getDatasetname(): string;
  setDatasetname(value: string): ModelAutobuilderStatus;

  getStudyname(): string;
  setStudyname(value: string): ModelAutobuilderStatus;

  getBestmodelname(): string;
  setBestmodelname(value: string): ModelAutobuilderStatus;

  getPredictorname(): string;
  setPredictorname(value: string): ModelAutobuilderStatus;

  getImagereponame(): string;
  setImagereponame(value: string): ModelAutobuilderStatus;

  getPhase(): string;
  setPhase(value: string): ModelAutobuilderStatus;

  getRows(): number;
  setRows(value: number): ModelAutobuilderStatus;

  getCols(): number;
  setCols(value: number): ModelAutobuilderStatus;

  getFilesize(): number;
  setFilesize(value: number): ModelAutobuilderStatus;

  getModels(): number;
  setModels(value: number): ModelAutobuilderStatus;

  getTrainedmodels(): number;
  setTrainedmodels(value: number): ModelAutobuilderStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): ModelAutobuilderStatus;

  getEstimator(): ClassicalEstimatorSpec | undefined;
  setEstimator(value?: ClassicalEstimatorSpec): ModelAutobuilderStatus;
  hasEstimator(): boolean;
  clearEstimator(): ModelAutobuilderStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelAutobuilderStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): ModelAutobuilderStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelAutobuilderStatus;

  getConditionsList(): Array<ModelAutobuilderCondition>;
  setConditionsList(value: Array<ModelAutobuilderCondition>): ModelAutobuilderStatus;
  clearConditionsList(): ModelAutobuilderStatus;
  addConditions(value?: ModelAutobuilderCondition, index?: number): ModelAutobuilderCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderStatus): ModelAutobuilderStatus.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderStatus;
  static deserializeBinaryFromReader(message: ModelAutobuilderStatus, reader: jspb.BinaryReader): ModelAutobuilderStatus;
}

export namespace ModelAutobuilderStatus {
  export type AsObject = {
    flatfilename: string,
    datasourcename: string,
    datasetname: string,
    studyname: string,
    bestmodelname: string,
    predictorname: string,
    imagereponame: string,
    phase: string,
    rows: number,
    cols: number,
    filesize: number,
    models: number,
    trainedmodels: number,
    bestmodelscore: number,
    estimator?: ClassicalEstimatorSpec.AsObject,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    conditionsList: Array<ModelAutobuilderCondition.AsObject>,
  }
}

export class ModelCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelCondition;

  getStatus(): string;
  setStatus(value: string): ModelCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelCondition;

  getReason(): string;
  setReason(value: string): ModelCondition;

  getMessage(): string;
  setMessage(value: string): ModelCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCondition): ModelCondition.AsObject;
  static serializeBinaryToWriter(message: ModelCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCondition;
  static deserializeBinaryFromReader(message: ModelCondition, reader: jspb.BinaryReader): ModelCondition;
}

export namespace ModelCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelList;
  hasMetadata(): boolean;
  clearMetadata(): ModelList;

  getItemsList(): Array<Model>;
  setItemsList(value: Array<Model>): ModelList;
  clearItemsList(): ModelList;
  addItems(value?: Model, index?: number): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelList): ModelList.AsObject;
  static serializeBinaryToWriter(message: ModelList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelList;
  static deserializeBinaryFromReader(message: ModelList, reader: jspb.BinaryReader): ModelList;
}

export namespace ModelList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Model.AsObject>,
  }
}

export class ModelPipeline extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelPipeline;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipeline;

  getSpec(): ModelPipelineSpec | undefined;
  setSpec(value?: ModelPipelineSpec): ModelPipeline;
  hasSpec(): boolean;
  clearSpec(): ModelPipeline;

  getStatus(): ModelPipelineStatus | undefined;
  setStatus(value?: ModelPipelineStatus): ModelPipeline;
  hasStatus(): boolean;
  clearStatus(): ModelPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipeline): ModelPipeline.AsObject;
  static serializeBinaryToWriter(message: ModelPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipeline;
  static deserializeBinaryFromReader(message: ModelPipeline, reader: jspb.BinaryReader): ModelPipeline;
}

export namespace ModelPipeline {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelPipelineSpec.AsObject,
    status?: ModelPipelineStatus.AsObject,
  }
}

export class ModelPipelineCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelPipelineCondition;

  getStatus(): string;
  setStatus(value: string): ModelPipelineCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelPipelineCondition;

  getReason(): string;
  setReason(value: string): ModelPipelineCondition;

  getMessage(): string;
  setMessage(value: string): ModelPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineCondition): ModelPipelineCondition.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineCondition;
  static deserializeBinaryFromReader(message: ModelPipelineCondition, reader: jspb.BinaryReader): ModelPipelineCondition;
}

export namespace ModelPipelineCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelPipelineList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelPipelineList;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipelineList;

  getItemsList(): Array<ModelPipeline>;
  setItemsList(value: Array<ModelPipeline>): ModelPipelineList;
  clearItemsList(): ModelPipelineList;
  addItems(value?: ModelPipeline, index?: number): ModelPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineList): ModelPipelineList.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineList;
  static deserializeBinaryFromReader(message: ModelPipelineList, reader: jspb.BinaryReader): ModelPipelineList;
}

export namespace ModelPipelineList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelPipeline.AsObject>,
  }
}

export class ModelPipelineRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelPipelineRun;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipelineRun;

  getSpec(): ModelPipelineRunSpec | undefined;
  setSpec(value?: ModelPipelineRunSpec): ModelPipelineRun;
  hasSpec(): boolean;
  clearSpec(): ModelPipelineRun;

  getStatus(): ModelPipelineRunStatus | undefined;
  setStatus(value?: ModelPipelineRunStatus): ModelPipelineRun;
  hasStatus(): boolean;
  clearStatus(): ModelPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRun): ModelPipelineRun.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRun;
  static deserializeBinaryFromReader(message: ModelPipelineRun, reader: jspb.BinaryReader): ModelPipelineRun;
}

export namespace ModelPipelineRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelPipelineRunSpec.AsObject,
    status?: ModelPipelineRunStatus.AsObject,
  }
}

export class ModelPipelineRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelPipelineRunCondition;

  getStatus(): string;
  setStatus(value: string): ModelPipelineRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelPipelineRunCondition;

  getReason(): string;
  setReason(value: string): ModelPipelineRunCondition;

  getMessage(): string;
  setMessage(value: string): ModelPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunCondition): ModelPipelineRunCondition.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunCondition;
  static deserializeBinaryFromReader(message: ModelPipelineRunCondition, reader: jspb.BinaryReader): ModelPipelineRunCondition;
}

export namespace ModelPipelineRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelPipelineRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelPipelineRunList;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipelineRunList;

  getItemsList(): Array<ModelPipelineRun>;
  setItemsList(value: Array<ModelPipelineRun>): ModelPipelineRunList;
  clearItemsList(): ModelPipelineRunList;
  addItems(value?: ModelPipelineRun, index?: number): ModelPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunList): ModelPipelineRunList.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunList;
  static deserializeBinaryFromReader(message: ModelPipelineRunList, reader: jspb.BinaryReader): ModelPipelineRunList;
}

export namespace ModelPipelineRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelPipelineRun.AsObject>,
  }
}

export class ModelPipelineRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelPipelineRunSpec;

  getDescription(): string;
  setDescription(value: string): ModelPipelineRunSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelPipelineRunSpec;

  getPipelinename(): string;
  setPipelinename(value: string): ModelPipelineRunSpec;

  getOwner(): string;
  setOwner(value: string): ModelPipelineRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunSpec): ModelPipelineRunSpec.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunSpec;
  static deserializeBinaryFromReader(message: ModelPipelineRunSpec, reader: jspb.BinaryReader): ModelPipelineRunSpec;
}

export namespace ModelPipelineRunSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetname: string,
    pipelinename: string,
    owner: string,
  }
}

export class ModelPipelineRunStageStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): ModelPipelineRunStageStatus;

  getApproved(): boolean;
  setApproved(value: boolean): ModelPipelineRunStageStatus;

  getApprovedby(): string;
  setApprovedby(value: string): ModelPipelineRunStageStatus;

  getApprovedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setApprovedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStageStatus;
  hasApprovedat(): boolean;
  clearApprovedat(): ModelPipelineRunStageStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStageStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelPipelineRunStageStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStageStatus;
  hasEndtime(): boolean;
  clearEndtime(): ModelPipelineRunStageStatus;

  getResultsList(): Array<ModelValidationResult>;
  setResultsList(value: Array<ModelValidationResult>): ModelPipelineRunStageStatus;
  clearResultsList(): ModelPipelineRunStageStatus;
  addResults(value?: ModelValidationResult, index?: number): ModelValidationResult;

  getError(): string;
  setError(value: string): ModelPipelineRunStageStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunStageStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunStageStatus): ModelPipelineRunStageStatus.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunStageStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunStageStatus;
  static deserializeBinaryFromReader(message: ModelPipelineRunStageStatus, reader: jspb.BinaryReader): ModelPipelineRunStageStatus;
}

export namespace ModelPipelineRunStageStatus {
  export type AsObject = {
    phase: string,
    approved: boolean,
    approvedby: string,
    approvedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    resultsList: Array<ModelValidationResult.AsObject>,
    error: string,
  }
}

export class ModelPipelineRunStatus extends jspb.Message {
  getStage(): string;
  setStage(value: string): ModelPipelineRunStatus;

  getDatasetname(): string;
  setDatasetname(value: string): ModelPipelineRunStatus;

  getStudyname(): string;
  setStudyname(value: string): ModelPipelineRunStatus;

  getModelname(): string;
  setModelname(value: string): ModelPipelineRunStatus;

  getDatastatus(): ModelPipelineRunStageStatus | undefined;
  setDatastatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasDatastatus(): boolean;
  clearDatastatus(): ModelPipelineRunStatus;

  getTrainingstatus(): ModelPipelineRunStageStatus | undefined;
  setTrainingstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasTrainingstatus(): boolean;
  clearTrainingstatus(): ModelPipelineRunStatus;

  getUatstatus(): ModelPipelineRunStageStatus | undefined;
  setUatstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasUatstatus(): boolean;
  clearUatstatus(): ModelPipelineRunStatus;

  getCapacitystatus(): ModelPipelineRunStageStatus | undefined;
  setCapacitystatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasCapacitystatus(): boolean;
  clearCapacitystatus(): ModelPipelineRunStatus;

  getDeploymentstatus(): ModelPipelineRunStageStatus | undefined;
  setDeploymentstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasDeploymentstatus(): boolean;
  clearDeploymentstatus(): ModelPipelineRunStatus;

  getReleasestatus(): ModelPipelineRunStageStatus | undefined;
  setReleasestatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasReleasestatus(): boolean;
  clearReleasestatus(): ModelPipelineRunStatus;

  getMonitoringstatus(): ModelPipelineRunStageStatus | undefined;
  setMonitoringstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasMonitoringstatus(): boolean;
  clearMonitoringstatus(): ModelPipelineRunStatus;

  getLabelingstatus(): ModelPipelineRunStageStatus | undefined;
  setLabelingstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasLabelingstatus(): boolean;
  clearLabelingstatus(): ModelPipelineRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelPipelineRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): ModelPipelineRunStatus;

  getPhase(): string;
  setPhase(value: string): ModelPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelPipelineRunStatus;

  getConditionsList(): Array<ModelPipelineRunCondition>;
  setConditionsList(value: Array<ModelPipelineRunCondition>): ModelPipelineRunStatus;
  clearConditionsList(): ModelPipelineRunStatus;
  addConditions(value?: ModelPipelineRunCondition, index?: number): ModelPipelineRunCondition;

  getEvalmetrics(): string;
  setEvalmetrics(value: string): ModelPipelineRunStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunStatus): ModelPipelineRunStatus.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunStatus;
  static deserializeBinaryFromReader(message: ModelPipelineRunStatus, reader: jspb.BinaryReader): ModelPipelineRunStatus;
}

export namespace ModelPipelineRunStatus {
  export type AsObject = {
    stage: string,
    datasetname: string,
    studyname: string,
    modelname: string,
    datastatus?: ModelPipelineRunStageStatus.AsObject,
    trainingstatus?: ModelPipelineRunStageStatus.AsObject,
    uatstatus?: ModelPipelineRunStageStatus.AsObject,
    capacitystatus?: ModelPipelineRunStageStatus.AsObject,
    deploymentstatus?: ModelPipelineRunStageStatus.AsObject,
    releasestatus?: ModelPipelineRunStageStatus.AsObject,
    monitoringstatus?: ModelPipelineRunStageStatus.AsObject,
    labelingstatus?: ModelPipelineRunStageStatus.AsObject,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
    conditionsList: Array<ModelPipelineRunCondition.AsObject>,
    evalmetrics: string,
  }
}

export class ModelPipelineSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelPipelineSpec;

  getDescription(): string;
  setDescription(value: string): ModelPipelineSpec;

  getDatasetselectorMap(): jspb.Map<string, string>;
  clearDatasetselectorMap(): ModelPipelineSpec;

  getData(): DataStageSpec | undefined;
  setData(value?: DataStageSpec): ModelPipelineSpec;
  hasData(): boolean;
  clearData(): ModelPipelineSpec;

  getTraining(): TrainingStageSpec | undefined;
  setTraining(value?: TrainingStageSpec): ModelPipelineSpec;
  hasTraining(): boolean;
  clearTraining(): ModelPipelineSpec;

  getUat(): UATStageSpec | undefined;
  setUat(value?: UATStageSpec): ModelPipelineSpec;
  hasUat(): boolean;
  clearUat(): ModelPipelineSpec;

  getCapacity(): CapacityStageSpec | undefined;
  setCapacity(value?: CapacityStageSpec): ModelPipelineSpec;
  hasCapacity(): boolean;
  clearCapacity(): ModelPipelineSpec;

  getDeployment(): DeploymentStageSpec | undefined;
  setDeployment(value?: DeploymentStageSpec): ModelPipelineSpec;
  hasDeployment(): boolean;
  clearDeployment(): ModelPipelineSpec;

  getRelease(): ReleaseStageSpec | undefined;
  setRelease(value?: ReleaseStageSpec): ModelPipelineSpec;
  hasRelease(): boolean;
  clearRelease(): ModelPipelineSpec;

  getLocation(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelPipelineSpec;
  hasLocation(): boolean;
  clearLocation(): ModelPipelineSpec;

  getSchedule(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): ModelPipelineSpec;

  getOwner(): string;
  setOwner(value: string): ModelPipelineSpec;

  getApproveraccountname(): string;
  setApproveraccountname(value: string): ModelPipelineSpec;

  getNotifiername(): string;
  setNotifiername(value: string): ModelPipelineSpec;

  getBaselinemodelname(): string;
  setBaselinemodelname(value: string): ModelPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineSpec): ModelPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineSpec;
  static deserializeBinaryFromReader(message: ModelPipelineSpec, reader: jspb.BinaryReader): ModelPipelineSpec;
}

export namespace ModelPipelineSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetselectorMap: Array<[string, string]>,
    data?: DataStageSpec.AsObject,
    training?: TrainingStageSpec.AsObject,
    uat?: UATStageSpec.AsObject,
    capacity?: CapacityStageSpec.AsObject,
    deployment?: DeploymentStageSpec.AsObject,
    release?: ReleaseStageSpec.AsObject,
    location?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    schedule?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    owner: string,
    approveraccountname: string,
    notifiername: string,
    baselinemodelname: string,
  }
}

export class ModelPipelineStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelPipelineStatus;

  getConditionsList(): Array<ModelPipelineCondition>;
  setConditionsList(value: Array<ModelPipelineCondition>): ModelPipelineStatus;
  clearConditionsList(): ModelPipelineStatus;
  addConditions(value?: ModelPipelineCondition, index?: number): ModelPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineStatus): ModelPipelineStatus.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineStatus;
  static deserializeBinaryFromReader(message: ModelPipelineStatus, reader: jspb.BinaryReader): ModelPipelineStatus;
}

export namespace ModelPipelineStatus {
  export type AsObject = {
    observedgeneration: number,
    conditionsList: Array<ModelPipelineCondition.AsObject>,
  }
}

export class ModelResult extends jspb.Message {
  getName(): string;
  setName(value: string): ModelResult;

  getAlg(): string;
  setAlg(value: string): ModelResult;

  getScore(): number;
  setScore(value: number): ModelResult;

  getError(): boolean;
  setError(value: boolean): ModelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelResult.AsObject;
  static toObject(includeInstance: boolean, msg: ModelResult): ModelResult.AsObject;
  static serializeBinaryToWriter(message: ModelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelResult;
  static deserializeBinaryFromReader(message: ModelResult, reader: jspb.BinaryReader): ModelResult;
}

export namespace ModelResult {
  export type AsObject = {
    name: string,
    alg: string,
    score: number,
    error: boolean,
  }
}

export class ModelSearchSpec extends jspb.Message {
  getType(): string;
  setType(value: string): ModelSearchSpec;

  getMaxcost(): number;
  setMaxcost(value: number): ModelSearchSpec;

  getMaxtime(): number;
  setMaxtime(value: number): ModelSearchSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): ModelSearchSpec;

  getMinscore(): number;
  setMinscore(value: number): ModelSearchSpec;

  getTrainers(): number;
  setTrainers(value: number): ModelSearchSpec;

  getShoptions(): SuccessiveHalvingOptions | undefined;
  setShoptions(value?: SuccessiveHalvingOptions): ModelSearchSpec;
  hasShoptions(): boolean;
  clearShoptions(): ModelSearchSpec;

  getTest(): number;
  setTest(value: number): ModelSearchSpec;

  getRetaintop(): number;
  setRetaintop(value: number): ModelSearchSpec;

  getRetainedfor(): number;
  setRetainedfor(value: number): ModelSearchSpec;

  getResources(): TrainingResourceRequest | undefined;
  setResources(value?: TrainingResourceRequest): ModelSearchSpec;
  hasResources(): boolean;
  clearResources(): ModelSearchSpec;

  getAllowlistList(): Array<string>;
  setAllowlistList(value: Array<string>): ModelSearchSpec;
  clearAllowlistList(): ModelSearchSpec;
  addAllowlist(value: string, index?: number): ModelSearchSpec;

  getVotingensemble(): boolean;
  setVotingensemble(value: boolean): ModelSearchSpec;

  getStackingensemble(): boolean;
  setStackingensemble(value: boolean): ModelSearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSearchSpec): ModelSearchSpec.AsObject;
  static serializeBinaryToWriter(message: ModelSearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSearchSpec;
  static deserializeBinaryFromReader(message: ModelSearchSpec, reader: jspb.BinaryReader): ModelSearchSpec;
}

export namespace ModelSearchSpec {
  export type AsObject = {
    type: string,
    maxcost: number,
    maxtime: number,
    maxmodels: number,
    minscore: number,
    trainers: number,
    shoptions?: SuccessiveHalvingOptions.AsObject,
    test: number,
    retaintop: number,
    retainedfor: number,
    resources?: TrainingResourceRequest.AsObject,
    allowlistList: Array<string>,
    votingensemble: boolean,
    stackingensemble: boolean,
  }
}

export class ModelSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ModelSpec;

  getVersionname(): string;
  setVersionname(value: string): ModelSpec;

  getModelversion(): string;
  setModelversion(value: string): ModelSpec;

  getStudyname(): string;
  setStudyname(value: string): ModelSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelSpec;

  getTask(): string;
  setTask(value: string): ModelSpec;

  getObjective(): string;
  setObjective(value: string): ModelSpec;

  getPreprocessing(): PreprocessingSpec | undefined;
  setPreprocessing(value?: PreprocessingSpec): ModelSpec;
  hasPreprocessing(): boolean;
  clearPreprocessing(): ModelSpec;

  getEstimator(): ClassicalEstimatorSpec | undefined;
  setEstimator(value?: ClassicalEstimatorSpec): ModelSpec;
  hasEstimator(): boolean;
  clearEstimator(): ModelSpec;

  getDnn(): DeepEstimatorSpec | undefined;
  setDnn(value?: DeepEstimatorSpec): ModelSpec;
  hasDnn(): boolean;
  clearDnn(): ModelSpec;

  getChatbot(): ChatbotEstimatorSpec | undefined;
  setChatbot(value?: ChatbotEstimatorSpec): ModelSpec;
  hasChatbot(): boolean;
  clearChatbot(): ModelSpec;

  getTransformer(): TransformerEstimatorSpec | undefined;
  setTransformer(value?: TransformerEstimatorSpec): ModelSpec;
  hasTransformer(): boolean;
  clearTransformer(): ModelSpec;

  getEnsemble(): EnsembleSpec | undefined;
  setEnsemble(value?: EnsembleSpec): ModelSpec;
  hasEnsemble(): boolean;
  clearEnsemble(): ModelSpec;

  getTraining(): TrainingSpec | undefined;
  setTraining(value?: TrainingSpec): ModelSpec;
  hasTraining(): boolean;
  clearTraining(): ModelSpec;

  getTested(): boolean;
  setTested(value: boolean): ModelSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelSpec;

  getPublished(): boolean;
  setPublished(value: boolean): ModelSpec;

  getPushed(): boolean;
  setPushed(value: boolean): ModelSpec;

  getReported(): boolean;
  setReported(value: boolean): ModelSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelSpec;

  getProfiled(): boolean;
  setProfiled(value: boolean): ModelSpec;

  getArchived(): boolean;
  setArchived(value: boolean): ModelSpec;

  getForecasted(): boolean;
  setForecasted(value: boolean): ModelSpec;

  getLocation(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelSpec;
  hasLocation(): boolean;
  clearLocation(): ModelSpec;

  getForecastingspec(): ForecastingSpec | undefined;
  setForecastingspec(value?: ForecastingSpec): ModelSpec;
  hasForecastingspec(): boolean;
  clearForecastingspec(): ModelSpec;

  getCompilation(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): ModelSpec;
  hasCompilation(): boolean;
  clearCompilation(): ModelSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): ModelSpec;

  getEstimatortype(): string;
  setEstimatortype(value: string): ModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
  static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSpec;
  static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    modelversion: string,
    studyname: string,
    datasetname: string,
    task: string,
    objective: string,
    preprocessing?: PreprocessingSpec.AsObject,
    estimator?: ClassicalEstimatorSpec.AsObject,
    dnn?: DeepEstimatorSpec.AsObject,
    chatbot?: ChatbotEstimatorSpec.AsObject,
    transformer?: TransformerEstimatorSpec.AsObject,
    ensemble?: EnsembleSpec.AsObject,
    training?: TrainingSpec.AsObject,
    tested: boolean,
    aborted: boolean,
    published: boolean,
    pushed: boolean,
    reported: boolean,
    paused: boolean,
    profiled: boolean,
    archived: boolean,
    forecasted: boolean,
    location?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    forecastingspec?: ForecastingSpec.AsObject,
    compilation?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    activedeadlineseconds: number,
    estimatortype: string,
  }
}

export class ModelStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelStatus;

  getTrainstarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainstarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainstarttime(): boolean;
  clearTrainstarttime(): ModelStatus;

  getTraincompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTraincompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTraincompletiontime(): boolean;
  clearTraincompletiontime(): ModelStatus;

  getTeststarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTeststarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTeststarttime(): boolean;
  clearTeststarttime(): ModelStatus;

  getTestcompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestcompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestcompletiontime(): boolean;
  clearTestcompletiontime(): ModelStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): ModelStatus;

  getCvscore(): number;
  setCvscore(value: number): ModelStatus;

  getTrainscore(): number;
  setTrainscore(value: number): ModelStatus;

  getTestscore(): number;
  setTestscore(value: number): ModelStatus;

  getCost(): number;
  setCost(value: number): ModelStatus;

  getBest(): boolean;
  setBest(value: boolean): ModelStatus;

  getTrainresultList(): Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTrainresultList(value: Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTrainresultList(): ModelStatus;
  addTrainresult(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestresultList(): Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTestresultList(value: Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTestresultList(): ModelStatus;
  addTestresult(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getPhase(): string;
  setPhase(value: string): ModelStatus;

  getReportname(): string;
  setReportname(value: string): ModelStatus;

  getManifesturi(): string;
  setManifesturi(value: string): ModelStatus;

  getWeightsuri(): string;
  setWeightsuri(value: string): ModelStatus;

  getLabelsencoderuri(): string;
  setLabelsencoderuri(value: string): ModelStatus;

  getLogsuri(): string;
  setLogsuri(value: string): ModelStatus;

  getProfileuri(): string;
  setProfileuri(value: string): ModelStatus;

  getMisclassuri(): string;
  setMisclassuri(value: string): ModelStatus;

  getImagename(): string;
  setImagename(value: string): ModelStatus;

  getImportanceList(): Array<FeatureImportance>;
  setImportanceList(value: Array<FeatureImportance>): ModelStatus;
  clearImportanceList(): ModelStatus;
  addImportance(value?: FeatureImportance, index?: number): FeatureImportance;

  getForecasturi(): string;
  setForecasturi(value: string): ModelStatus;

  getPythonversion(): string;
  setPythonversion(value: string): ModelStatus;

  getPythonpackagesMap(): jspb.Map<string, string>;
  clearPythonpackagesMap(): ModelStatus;

  getTraindataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTraindataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasTraindataset(): boolean;
  clearTraindataset(): ModelStatus;

  getTestdataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTestdataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasTestdataset(): boolean;
  clearTestdataset(): ModelStatus;

  getValidationdataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setValidationdataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasValidationdataset(): boolean;
  clearValidationdataset(): ModelStatus;

  getResourceconsumed(): ResourceConsumption | undefined;
  setResourceconsumed(value?: ResourceConsumption): ModelStatus;
  hasResourceconsumed(): boolean;
  clearResourceconsumed(): ModelStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelStatus;

  getConditionsList(): Array<ModelCondition>;
  setConditionsList(value: Array<ModelCondition>): ModelStatus;
  clearConditionsList(): ModelStatus;
  addConditions(value?: ModelCondition, index?: number): ModelCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatus): ModelStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatus;
  static deserializeBinaryFromReader(message: ModelStatus, reader: jspb.BinaryReader): ModelStatus;
}

export namespace ModelStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainstarttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    traincompletiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    teststarttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testcompletiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    cvscore: number,
    trainscore: number,
    testscore: number,
    cost: number,
    best: boolean,
    trainresultList: Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testresultList: Array<github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    phase: string,
    reportname: string,
    manifesturi: string,
    weightsuri: string,
    labelsencoderuri: string,
    logsuri: string,
    profileuri: string,
    misclassuri: string,
    imagename: string,
    importanceList: Array<FeatureImportance.AsObject>,
    forecasturi: string,
    pythonversion: string,
    pythonpackagesMap: Array<[string, string]>,
    traindataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    testdataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    validationdataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    resourceconsumed?: ResourceConsumption.AsObject,
    observedgeneration: number,
    conditionsList: Array<ModelCondition.AsObject>,
  }
}

export class ModelValidation extends jspb.Message {
  getType(): string;
  setType(value: string): ModelValidation;

  getPrevmodel(): string;
  setPrevmodel(value: string): ModelValidation;

  getTrainingdataset(): string;
  setTrainingdataset(value: string): ModelValidation;

  getTestprediction(): string;
  setTestprediction(value: string): ModelValidation;

  getCurrentpredictionset(): string;
  setCurrentpredictionset(value: string): ModelValidation;

  getPrevpredictionset(): string;
  setPrevpredictionset(value: string): ModelValidation;

  getDriftfreq(): string;
  setDriftfreq(value: string): ModelValidation;

  getDriftinterval(): number;
  setDriftinterval(value: number): ModelValidation;

  getColumn(): string;
  setColumn(value: string): ModelValidation;

  getMetric(): string;
  setMetric(value: string): ModelValidation;

  getMin(): number;
  setMin(value: number): ModelValidation;

  getMax(): number;
  setMax(value: number): ModelValidation;

  getMinprecent(): number;
  setMinprecent(value: number): ModelValidation;

  getMaxprecent(): number;
  setMaxprecent(value: number): ModelValidation;

  getAgg(): string;
  setAgg(value: string): ModelValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ModelValidation): ModelValidation.AsObject;
  static serializeBinaryToWriter(message: ModelValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelValidation;
  static deserializeBinaryFromReader(message: ModelValidation, reader: jspb.BinaryReader): ModelValidation;
}

export namespace ModelValidation {
  export type AsObject = {
    type: string,
    prevmodel: string,
    trainingdataset: string,
    testprediction: string,
    currentpredictionset: string,
    prevpredictionset: string,
    driftfreq: string,
    driftinterval: number,
    column: string,
    metric: string,
    min: number,
    max: number,
    minprecent: number,
    maxprecent: number,
    agg: string,
  }
}

export class ModelValidationResult extends jspb.Message {
  getType(): string;
  setType(value: string): ModelValidationResult;

  getDataset(): string;
  setDataset(value: string): ModelValidationResult;

  getModel(): string;
  setModel(value: string): ModelValidationResult;

  getColumn(): string;
  setColumn(value: string): ModelValidationResult;

  getError(): string;
  setError(value: string): ModelValidationResult;

  getPassed(): boolean;
  setPassed(value: boolean): ModelValidationResult;

  getAt(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAt(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelValidationResult;
  hasAt(): boolean;
  clearAt(): ModelValidationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelValidationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ModelValidationResult): ModelValidationResult.AsObject;
  static serializeBinaryToWriter(message: ModelValidationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelValidationResult;
  static deserializeBinaryFromReader(message: ModelValidationResult, reader: jspb.BinaryReader): ModelValidationResult;
}

export namespace ModelValidationResult {
  export type AsObject = {
    type: string,
    dataset: string,
    model: string,
    column: string,
    error: string,
    passed: boolean,
    at?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class NNLayerParameter extends jspb.Message {
  getName(): string;
  setName(value: string): NNLayerParameter;

  getValue(): string;
  setValue(value: string): NNLayerParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NNLayerParameter.AsObject;
  static toObject(includeInstance: boolean, msg: NNLayerParameter): NNLayerParameter.AsObject;
  static serializeBinaryToWriter(message: NNLayerParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NNLayerParameter;
  static deserializeBinaryFromReader(message: NNLayerParameter, reader: jspb.BinaryReader): NNLayerParameter;
}

export namespace NNLayerParameter {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class Notebook extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Notebook;
  hasMetadata(): boolean;
  clearMetadata(): Notebook;

  getSpec(): NotebookSpec | undefined;
  setSpec(value?: NotebookSpec): Notebook;
  hasSpec(): boolean;
  clearSpec(): Notebook;

  getStatus(): NotebookStatus | undefined;
  setStatus(value?: NotebookStatus): Notebook;
  hasStatus(): boolean;
  clearStatus(): Notebook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notebook.AsObject;
  static toObject(includeInstance: boolean, msg: Notebook): Notebook.AsObject;
  static serializeBinaryToWriter(message: Notebook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notebook;
  static deserializeBinaryFromReader(message: Notebook, reader: jspb.BinaryReader): Notebook;
}

export namespace Notebook {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NotebookSpec.AsObject,
    status?: NotebookStatus.AsObject,
  }
}

export class NotebookCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NotebookCondition;

  getStatus(): string;
  setStatus(value: string): NotebookCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NotebookCondition;

  getReason(): string;
  setReason(value: string): NotebookCondition;

  getMessage(): string;
  setMessage(value: string): NotebookCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookCondition): NotebookCondition.AsObject;
  static serializeBinaryToWriter(message: NotebookCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookCondition;
  static deserializeBinaryFromReader(message: NotebookCondition, reader: jspb.BinaryReader): NotebookCondition;
}

export namespace NotebookCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class NotebookList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NotebookList;
  hasMetadata(): boolean;
  clearMetadata(): NotebookList;

  getItemsList(): Array<Notebook>;
  setItemsList(value: Array<Notebook>): NotebookList;
  clearItemsList(): NotebookList;
  addItems(value?: Notebook, index?: number): Notebook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookList.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookList): NotebookList.AsObject;
  static serializeBinaryToWriter(message: NotebookList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookList;
  static deserializeBinaryFromReader(message: NotebookList, reader: jspb.BinaryReader): NotebookList;
}

export namespace NotebookList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Notebook.AsObject>,
  }
}

export class NotebookRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): NotebookRun;
  hasMetadata(): boolean;
  clearMetadata(): NotebookRun;

  getSpec(): NotebookRunSpec | undefined;
  setSpec(value?: NotebookRunSpec): NotebookRun;
  hasSpec(): boolean;
  clearSpec(): NotebookRun;

  getStatus(): NotebookRunStatus | undefined;
  setStatus(value?: NotebookRunStatus): NotebookRun;
  hasStatus(): boolean;
  clearStatus(): NotebookRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRun.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRun): NotebookRun.AsObject;
  static serializeBinaryToWriter(message: NotebookRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRun;
  static deserializeBinaryFromReader(message: NotebookRun, reader: jspb.BinaryReader): NotebookRun;
}

export namespace NotebookRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NotebookRunSpec.AsObject,
    status?: NotebookRunStatus.AsObject,
  }
}

export class NotebookRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NotebookRunCondition;

  getStatus(): string;
  setStatus(value: string): NotebookRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NotebookRunCondition;

  getReason(): string;
  setReason(value: string): NotebookRunCondition;

  getMessage(): string;
  setMessage(value: string): NotebookRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunCondition): NotebookRunCondition.AsObject;
  static serializeBinaryToWriter(message: NotebookRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunCondition;
  static deserializeBinaryFromReader(message: NotebookRunCondition, reader: jspb.BinaryReader): NotebookRunCondition;
}

export namespace NotebookRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class NotebookRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NotebookRunList;
  hasMetadata(): boolean;
  clearMetadata(): NotebookRunList;

  getItemsList(): Array<NotebookRun>;
  setItemsList(value: Array<NotebookRun>): NotebookRunList;
  clearItemsList(): NotebookRunList;
  addItems(value?: NotebookRun, index?: number): NotebookRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunList.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunList): NotebookRunList.AsObject;
  static serializeBinaryToWriter(message: NotebookRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunList;
  static deserializeBinaryFromReader(message: NotebookRunList, reader: jspb.BinaryReader): NotebookRunList;
}

export namespace NotebookRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<NotebookRun.AsObject>,
  }
}

export class NotebookRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): NotebookRunSpec;

  getNotebookname(): string;
  setNotebookname(value: string): NotebookRunSpec;

  getValuesList(): Array<NotebookVarValue>;
  setValuesList(value: Array<NotebookVarValue>): NotebookRunSpec;
  clearValuesList(): NotebookRunSpec;
  addValues(value?: NotebookVarValue, index?: number): NotebookVarValue;

  getOwner(): string;
  setOwner(value: string): NotebookRunSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): NotebookRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunSpec): NotebookRunSpec.AsObject;
  static serializeBinaryToWriter(message: NotebookRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunSpec;
  static deserializeBinaryFromReader(message: NotebookRunSpec, reader: jspb.BinaryReader): NotebookRunSpec;
}

export namespace NotebookRunSpec {
  export type AsObject = {
    versionname: string,
    notebookname: string,
    valuesList: Array<NotebookVarValue.AsObject>,
    owner: string,
    workloadclassname: string,
  }
}

export class NotebookRunStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): NotebookRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): NotebookRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): NotebookRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): NotebookRunStatus;

  getConditionsList(): Array<NotebookRunCondition>;
  setConditionsList(value: Array<NotebookRunCondition>): NotebookRunStatus;
  clearConditionsList(): NotebookRunStatus;
  addConditions(value?: NotebookRunCondition, index?: number): NotebookRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunStatus): NotebookRunStatus.AsObject;
  static serializeBinaryToWriter(message: NotebookRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunStatus;
  static deserializeBinaryFromReader(message: NotebookRunStatus, reader: jspb.BinaryReader): NotebookRunStatus;
}

export namespace NotebookRunStatus {
  export type AsObject = {
    phase: string,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    conditionsList: Array<NotebookRunCondition.AsObject>,
  }
}

export class NotebookSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): NotebookSpec;

  getDescription(): string;
  setDescription(value: string): NotebookSpec;

  getSchemaref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setSchemaref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): NotebookSpec;
  hasSchemaref(): boolean;
  clearSchemaref(): NotebookSpec;

  getImagename(): string;
  setImagename(value: string): NotebookSpec;

  getRequirements(): string;
  setRequirements(value: string): NotebookSpec;

  getDebpackages(): string;
  setDebpackages(value: string): NotebookSpec;

  getVarsList(): Array<string>;
  setVarsList(value: Array<string>): NotebookSpec;
  clearVarsList(): NotebookSpec;
  addVars(value: string, index?: number): NotebookSpec;

  getLocation(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): NotebookSpec;
  hasLocation(): boolean;
  clearLocation(): NotebookSpec;

  getOwner(): string;
  setOwner(value: string): NotebookSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): NotebookSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): NotebookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookSpec): NotebookSpec.AsObject;
  static serializeBinaryToWriter(message: NotebookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookSpec;
  static deserializeBinaryFromReader(message: NotebookSpec, reader: jspb.BinaryReader): NotebookSpec;
}

export namespace NotebookSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    schemaref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    imagename: string,
    requirements: string,
    debpackages: string,
    varsList: Array<string>,
    location?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    owner: string,
    workloadclassname: string,
    activedeadlineseconds: number,
  }
}

export class NotebookStatus extends jspb.Message {
  getImage(): string;
  setImage(value: string): NotebookStatus;

  getUri(): string;
  setUri(value: string): NotebookStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): NotebookStatus;

  getConditionsList(): Array<NotebookCondition>;
  setConditionsList(value: Array<NotebookCondition>): NotebookStatus;
  clearConditionsList(): NotebookStatus;
  addConditions(value?: NotebookCondition, index?: number): NotebookCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookStatus): NotebookStatus.AsObject;
  static serializeBinaryToWriter(message: NotebookStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookStatus;
  static deserializeBinaryFromReader(message: NotebookStatus, reader: jspb.BinaryReader): NotebookStatus;
}

export namespace NotebookStatus {
  export type AsObject = {
    image: string,
    uri: string,
    observedgeneration: number,
    conditionsList: Array<NotebookCondition.AsObject>,
  }
}

export class NotebookVarValue extends jspb.Message {
  getName(): string;
  setName(value: string): NotebookVarValue;

  getValue(): string;
  setValue(value: string): NotebookVarValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookVarValue.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookVarValue): NotebookVarValue.AsObject;
  static serializeBinaryToWriter(message: NotebookVarValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookVarValue;
  static deserializeBinaryFromReader(message: NotebookVarValue, reader: jspb.BinaryReader): NotebookVarValue;
}

export namespace NotebookVarValue {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class NumericPipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): NumericPipelineSpec;
  clearColumnsList(): NumericPipelineSpec;
  addColumns(value: string, index?: number): NumericPipelineSpec;

  getImputer(): string;
  setImputer(value: string): NumericPipelineSpec;

  getScaler(): string;
  setScaler(value: string): NumericPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NumericPipelineSpec): NumericPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: NumericPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericPipelineSpec;
  static deserializeBinaryFromReader(message: NumericPipelineSpec, reader: jspb.BinaryReader): NumericPipelineSpec;
}

export namespace NumericPipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    imputer: string,
    scaler: string,
  }
}

export class PreprocessingSpec extends jspb.Message {
  getCategorical(): CategoricalPipelineSpec | undefined;
  setCategorical(value?: CategoricalPipelineSpec): PreprocessingSpec;
  hasCategorical(): boolean;
  clearCategorical(): PreprocessingSpec;

  getNumeric(): NumericPipelineSpec | undefined;
  setNumeric(value?: NumericPipelineSpec): PreprocessingSpec;
  hasNumeric(): boolean;
  clearNumeric(): PreprocessingSpec;

  getText(): TextPipelineSpec | undefined;
  setText(value?: TextPipelineSpec): PreprocessingSpec;
  hasText(): boolean;
  clearText(): PreprocessingSpec;

  getImage(): ImagePipelineSpec | undefined;
  setImage(value?: ImagePipelineSpec): PreprocessingSpec;
  hasImage(): boolean;
  clearImage(): PreprocessingSpec;

  getAudio(): AudioPipelineSpec | undefined;
  setAudio(value?: AudioPipelineSpec): PreprocessingSpec;
  hasAudio(): boolean;
  clearAudio(): PreprocessingSpec;

  getVideo(): VideoPipelineSpec | undefined;
  setVideo(value?: VideoPipelineSpec): PreprocessingSpec;
  hasVideo(): boolean;
  clearVideo(): PreprocessingSpec;

  getDatetime(): DateTimePipelineSpec | undefined;
  setDatetime(value?: DateTimePipelineSpec): PreprocessingSpec;
  hasDatetime(): boolean;
  clearDatetime(): PreprocessingSpec;

  getFeatureselector(): string;
  setFeatureselector(value: string): PreprocessingSpec;

  getReducer(): string;
  setReducer(value: string): PreprocessingSpec;

  getImbalanced(): boolean;
  setImbalanced(value: boolean): PreprocessingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreprocessingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PreprocessingSpec): PreprocessingSpec.AsObject;
  static serializeBinaryToWriter(message: PreprocessingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreprocessingSpec;
  static deserializeBinaryFromReader(message: PreprocessingSpec, reader: jspb.BinaryReader): PreprocessingSpec;
}

export namespace PreprocessingSpec {
  export type AsObject = {
    categorical?: CategoricalPipelineSpec.AsObject,
    numeric?: NumericPipelineSpec.AsObject,
    text?: TextPipelineSpec.AsObject,
    image?: ImagePipelineSpec.AsObject,
    audio?: AudioPipelineSpec.AsObject,
    video?: VideoPipelineSpec.AsObject,
    datetime?: DateTimePipelineSpec.AsObject,
    featureselector: string,
    reducer: string,
    imbalanced: boolean,
  }
}

export class ReleaseStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ReleaseStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): ReleaseStageSpec;

  getPredictorname(): string;
  setPredictorname(value: string): ReleaseStageSpec;

  getTemplate(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec | undefined;
  setTemplate(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec): ReleaseStageSpec;
  hasTemplate(): boolean;
  clearTemplate(): ReleaseStageSpec;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): ReleaseStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): ReleaseStageSpec;
  clearValidationsList(): ReleaseStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): ReleaseStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseStageSpec): ReleaseStageSpec.AsObject;
  static serializeBinaryToWriter(message: ReleaseStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseStageSpec;
  static deserializeBinaryFromReader(message: ReleaseStageSpec, reader: jspb.BinaryReader): ReleaseStageSpec;
}

export namespace ReleaseStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    predictorname: string,
    template?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.AsObject,
    manualapproval: boolean,
    validationsList: Array<ModelValidation.AsObject>,
    workloadclassname: string,
  }
}

export class Report extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Report;
  hasMetadata(): boolean;
  clearMetadata(): Report;

  getSpec(): ReportSpec | undefined;
  setSpec(value?: ReportSpec): Report;
  hasSpec(): boolean;
  clearSpec(): Report;

  getStatus(): ReportStatus | undefined;
  setStatus(value?: ReportStatus): Report;
  hasStatus(): boolean;
  clearStatus(): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ReportSpec.AsObject,
    status?: ReportStatus.AsObject,
  }
}

export class ReportCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ReportCondition;

  getStatus(): string;
  setStatus(value: string): ReportCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ReportCondition;

  getReason(): string;
  setReason(value: string): ReportCondition;

  getMessage(): string;
  setMessage(value: string): ReportCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ReportCondition): ReportCondition.AsObject;
  static serializeBinaryToWriter(message: ReportCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportCondition;
  static deserializeBinaryFromReader(message: ReportCondition, reader: jspb.BinaryReader): ReportCondition;
}

export namespace ReportCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ReportList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ReportList;
  hasMetadata(): boolean;
  clearMetadata(): ReportList;

  getItemsList(): Array<Report>;
  setItemsList(value: Array<Report>): ReportList;
  clearItemsList(): ReportList;
  addItems(value?: Report, index?: number): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportList.AsObject;
  static toObject(includeInstance: boolean, msg: ReportList): ReportList.AsObject;
  static serializeBinaryToWriter(message: ReportList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportList;
  static deserializeBinaryFromReader(message: ReportList, reader: jspb.BinaryReader): ReportList;
}

export namespace ReportList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Report.AsObject>,
  }
}

export class ReportSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ReportSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReportSpec;
  hasEntityref(): boolean;
  clearEntityref(): ReportSpec;

  getLocation(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ReportSpec;
  hasLocation(): boolean;
  clearLocation(): ReportSpec;

  getReporttype(): string;
  setReporttype(value: string): ReportSpec;

  getFormat(): string;
  setFormat(value: string): ReportSpec;

  getDescription(): string;
  setDescription(value: string): ReportSpec;

  getOwner(): string;
  setOwner(value: string): ReportSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): ReportSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): ReportSpec;

  getFrom(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setFrom(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportSpec;
  hasFrom(): boolean;
  clearFrom(): ReportSpec;

  getTo(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTo(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportSpec;
  hasTo(): boolean;
  clearTo(): ReportSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReportSpec): ReportSpec.AsObject;
  static serializeBinaryToWriter(message: ReportSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportSpec;
  static deserializeBinaryFromReader(message: ReportSpec, reader: jspb.BinaryReader): ReportSpec;
}

export namespace ReportSpec {
  export type AsObject = {
    versionname: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    location?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    reporttype: string,
    format: string,
    description: string,
    owner: string,
    workloadclassname: string,
    activedeadlineseconds: number,
    from?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    to?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class ReportStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasStarttime(): boolean;
  clearStarttime(): ReportStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): ReportStatus;

  getPhase(): string;
  setPhase(value: string): ReportStatus;

  getUri(): string;
  setUri(value: string): ReportStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReportStatus;

  getConditionsList(): Array<ReportCondition>;
  setConditionsList(value: Array<ReportCondition>): ReportStatus;
  clearConditionsList(): ReportStatus;
  addConditions(value?: ReportCondition, index?: number): ReportCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStatus): ReportStatus.AsObject;
  static serializeBinaryToWriter(message: ReportStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStatus;
  static deserializeBinaryFromReader(message: ReportStatus, reader: jspb.BinaryReader): ReportStatus;
}

export namespace ReportStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    uri: string,
    observedgeneration: number,
    conditionsList: Array<ReportCondition.AsObject>,
  }
}

export class ResourceConsumption extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): ResourceConsumption;

  getMem(): number;
  setMem(value: number): ResourceConsumption;

  getGpu(): number;
  setGpu(value: number): ResourceConsumption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConsumption.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConsumption): ResourceConsumption.AsObject;
  static serializeBinaryToWriter(message: ResourceConsumption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConsumption;
  static deserializeBinaryFromReader(message: ResourceConsumption, reader: jspb.BinaryReader): ResourceConsumption;
}

export namespace ResourceConsumption {
  export type AsObject = {
    cpu: number,
    mem: number,
    gpu: number,
  }
}

export class Study extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Study;
  hasMetadata(): boolean;
  clearMetadata(): Study;

  getSpec(): StudySpec | undefined;
  setSpec(value?: StudySpec): Study;
  hasSpec(): boolean;
  clearSpec(): Study;

  getStatus(): StudyStatus | undefined;
  setStatus(value?: StudyStatus): Study;
  hasStatus(): boolean;
  clearStatus(): Study;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Study.AsObject;
  static toObject(includeInstance: boolean, msg: Study): Study.AsObject;
  static serializeBinaryToWriter(message: Study, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Study;
  static deserializeBinaryFromReader(message: Study, reader: jspb.BinaryReader): Study;
}

export namespace Study {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: StudySpec.AsObject,
    status?: StudyStatus.AsObject,
  }
}

export class StudyCondition extends jspb.Message {
  getType(): string;
  setType(value: string): StudyCondition;

  getStatus(): string;
  setStatus(value: string): StudyCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): StudyCondition;

  getReason(): string;
  setReason(value: string): StudyCondition;

  getMessage(): string;
  setMessage(value: string): StudyCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyCondition.AsObject;
  static toObject(includeInstance: boolean, msg: StudyCondition): StudyCondition.AsObject;
  static serializeBinaryToWriter(message: StudyCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyCondition;
  static deserializeBinaryFromReader(message: StudyCondition, reader: jspb.BinaryReader): StudyCondition;
}

export namespace StudyCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class StudyList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): StudyList;
  hasMetadata(): boolean;
  clearMetadata(): StudyList;

  getItemsList(): Array<Study>;
  setItemsList(value: Array<Study>): StudyList;
  clearItemsList(): StudyList;
  addItems(value?: Study, index?: number): Study;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyList.AsObject;
  static toObject(includeInstance: boolean, msg: StudyList): StudyList.AsObject;
  static serializeBinaryToWriter(message: StudyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyList;
  static deserializeBinaryFromReader(message: StudyList, reader: jspb.BinaryReader): StudyList;
}

export namespace StudyList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Study.AsObject>,
  }
}

export class StudySpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): StudySpec;

  getModelversion(): string;
  setModelversion(value: string): StudySpec;

  getDescription(): string;
  setDescription(value: string): StudySpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): StudySpec;
  hasLabref(): boolean;
  clearLabref(): StudySpec;

  getDatasetname(): string;
  setDatasetname(value: string): StudySpec;

  getTask(): string;
  setTask(value: string): StudySpec;

  getObjective(): string;
  setObjective(value: string): StudySpec;

  getSearch(): ModelSearchSpec | undefined;
  setSearch(value?: ModelSearchSpec): StudySpec;
  hasSearch(): boolean;
  clearSearch(): StudySpec;

  getPreprocessing(): PreprocessingSpec | undefined;
  setPreprocessing(value?: PreprocessingSpec): StudySpec;
  hasPreprocessing(): boolean;
  clearPreprocessing(): StudySpec;

  getTraining(): TrainingSpec | undefined;
  setTraining(value?: TrainingSpec): StudySpec;
  hasTraining(): boolean;
  clearTraining(): StudySpec;

  getSplit(): DataSplit | undefined;
  setSplit(value?: DataSplit): StudySpec;
  hasSplit(): boolean;
  clearSplit(): StudySpec;

  getAborted(): boolean;
  setAborted(value: boolean): StudySpec;

  getReported(): boolean;
  setReported(value: boolean): StudySpec;

  getPaused(): boolean;
  setPaused(value: boolean): StudySpec;

  getProfiled(): boolean;
  setProfiled(value: boolean): StudySpec;

  getModelpublished(): boolean;
  setModelpublished(value: boolean): StudySpec;

  getModelimagepushed(): boolean;
  setModelimagepushed(value: boolean): StudySpec;

  getLocation(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudySpec;
  hasLocation(): boolean;
  clearLocation(): StudySpec;

  getHierarchy(): Hierarchy | undefined;
  setHierarchy(value?: Hierarchy): StudySpec;
  hasHierarchy(): boolean;
  clearHierarchy(): StudySpec;

  getOwner(): string;
  setOwner(value: string): StudySpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): StudySpec;

  getCompilation(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): StudySpec;
  hasCompilation(): boolean;
  clearCompilation(): StudySpec;

  getTemplate(): boolean;
  setTemplate(value: boolean): StudySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudySpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudySpec): StudySpec.AsObject;
  static serializeBinaryToWriter(message: StudySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudySpec;
  static deserializeBinaryFromReader(message: StudySpec, reader: jspb.BinaryReader): StudySpec;
}

export namespace StudySpec {
  export type AsObject = {
    versionname: string,
    modelversion: string,
    description: string,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    datasetname: string,
    task: string,
    objective: string,
    search?: ModelSearchSpec.AsObject,
    preprocessing?: PreprocessingSpec.AsObject,
    training?: TrainingSpec.AsObject,
    split?: DataSplit.AsObject,
    aborted: boolean,
    reported: boolean,
    paused: boolean,
    profiled: boolean,
    modelpublished: boolean,
    modelimagepushed: boolean,
    location?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    hierarchy?: Hierarchy.AsObject,
    owner: string,
    activedeadlineseconds: number,
    compilation?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    template: boolean,
  }
}

export class StudyStatus extends jspb.Message {
  getModels(): number;
  setModels(value: number): StudyStatus;

  getWaitingtotrain(): number;
  setWaitingtotrain(value: number): StudyStatus;

  getTrainingmodels(): number;
  setTrainingmodels(value: number): StudyStatus;

  getFailedtrainingmodels(): number;
  setFailedtrainingmodels(value: number): StudyStatus;

  getTrainedmodels(): number;
  setTrainedmodels(value: number): StudyStatus;

  getWaitingtotestmodels(): number;
  setWaitingtotestmodels(value: number): StudyStatus;

  getTestingmodels(): number;
  setTestingmodels(value: number): StudyStatus;

  getFailedtestingmodels(): number;
  setFailedtestingmodels(value: number): StudyStatus;

  getTestedmodels(): number;
  setTestedmodels(value: number): StudyStatus;

  getTrainers(): number;
  setTrainers(value: number): StudyStatus;

  getFreetrainers(): number;
  setFreetrainers(value: number): StudyStatus;

  getBudytrainers(): number;
  setBudytrainers(value: number): StudyStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasStarttime(): boolean;
  clearStarttime(): StudyStatus;

  getTrainingstarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingstarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasTrainingstarttime(): boolean;
  clearTrainingstarttime(): StudyStatus;

  getTrainingcompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingcompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasTrainingcompletiontime(): boolean;
  clearTrainingcompletiontime(): StudyStatus;

  getTestingstarted(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingstarted(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasTestingstarted(): boolean;
  clearTestingstarted(): StudyStatus;

  getTestingcompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingcompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasTestingcompletiontime(): boolean;
  clearTestingcompletiontime(): StudyStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): StudyStatus;

  getBestmodel(): string;
  setBestmodel(value: string): StudyStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): StudyStatus;

  getProfileuri(): string;
  setProfileuri(value: string): StudyStatus;

  getReportname(): string;
  setReportname(value: string): StudyStatus;

  getPhase(): string;
  setPhase(value: string): StudyStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): StudyStatus;

  getTraindataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTraindataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasTraindataset(): boolean;
  clearTraindataset(): StudyStatus;

  getTestdataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTestdataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasTestdataset(): boolean;
  clearTestdataset(): StudyStatus;

  getValidationdataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setValidationdataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasValidationdataset(): boolean;
  clearValidationdataset(): StudyStatus;

  getConditionsList(): Array<StudyCondition>;
  setConditionsList(value: Array<StudyCondition>): StudyStatus;
  clearConditionsList(): StudyStatus;
  addConditions(value?: StudyCondition, index?: number): StudyCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyStatus): StudyStatus.AsObject;
  static serializeBinaryToWriter(message: StudyStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyStatus;
  static deserializeBinaryFromReader(message: StudyStatus, reader: jspb.BinaryReader): StudyStatus;
}

export namespace StudyStatus {
  export type AsObject = {
    models: number,
    waitingtotrain: number,
    trainingmodels: number,
    failedtrainingmodels: number,
    trainedmodels: number,
    waitingtotestmodels: number,
    testingmodels: number,
    failedtestingmodels: number,
    testedmodels: number,
    trainers: number,
    freetrainers: number,
    budytrainers: number,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingstarttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingcompletiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingstarted?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingcompletiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestmodel: string,
    bestmodelscore: number,
    profileuri: string,
    reportname: string,
    phase: string,
    observedgeneration: number,
    traindataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    testdataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    validationdataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    conditionsList: Array<StudyCondition.AsObject>,
  }
}

export class SuccessiveHalvingOptions extends jspb.Message {
  getMaxbudget(): number;
  setMaxbudget(value: number): SuccessiveHalvingOptions;

  getEliminationrate(): number;
  setEliminationrate(value: number): SuccessiveHalvingOptions;

  getModality(): string;
  setModality(value: string): SuccessiveHalvingOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingOptions): SuccessiveHalvingOptions.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingOptions;
  static deserializeBinaryFromReader(message: SuccessiveHalvingOptions, reader: jspb.BinaryReader): SuccessiveHalvingOptions;
}

export namespace SuccessiveHalvingOptions {
  export type AsObject = {
    maxbudget: number,
    eliminationrate: number,
    modality: string,
  }
}

export class SuccessiveHalvingSpec extends jspb.Message {
  getBudget(): number;
  setBudget(value: number): SuccessiveHalvingSpec;

  getBracket(): number;
  setBracket(value: number): SuccessiveHalvingSpec;

  getRung(): number;
  setRung(value: number): SuccessiveHalvingSpec;

  getConfid(): number;
  setConfid(value: number): SuccessiveHalvingSpec;

  getModality(): string;
  setModality(value: string): SuccessiveHalvingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingSpec): SuccessiveHalvingSpec.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingSpec;
  static deserializeBinaryFromReader(message: SuccessiveHalvingSpec, reader: jspb.BinaryReader): SuccessiveHalvingSpec;
}

export namespace SuccessiveHalvingSpec {
  export type AsObject = {
    budget: number,
    bracket: number,
    rung: number,
    confid: number,
    modality: string,
  }
}

export class TextPipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): TextPipelineSpec;
  clearColumnsList(): TextPipelineSpec;
  addColumns(value: string, index?: number): TextPipelineSpec;

  getEncoder(): string;
  setEncoder(value: string): TextPipelineSpec;

  getTokenizer(): string;
  setTokenizer(value: string): TextPipelineSpec;

  getStopwords(): boolean;
  setStopwords(value: boolean): TextPipelineSpec;

  getPos(): boolean;
  setPos(value: boolean): TextPipelineSpec;

  getLemma(): boolean;
  setLemma(value: boolean): TextPipelineSpec;

  getStem(): boolean;
  setStem(value: boolean): TextPipelineSpec;

  getEmbedding(): string;
  setEmbedding(value: string): TextPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TextPipelineSpec): TextPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: TextPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPipelineSpec;
  static deserializeBinaryFromReader(message: TextPipelineSpec, reader: jspb.BinaryReader): TextPipelineSpec;
}

export namespace TextPipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    encoder: string,
    tokenizer: string,
    stopwords: boolean,
    pos: boolean,
    lemma: boolean,
    stem: boolean,
    embedding: string,
  }
}

export class TrainingResourceRequest extends jspb.Message {
  getGpu(): string;
  setGpu(value: string): TrainingResourceRequest;

  getCpu(): string;
  setCpu(value: string): TrainingResourceRequest;

  getMem(): string;
  setMem(value: string): TrainingResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingResourceRequest): TrainingResourceRequest.AsObject;
  static serializeBinaryToWriter(message: TrainingResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingResourceRequest;
  static deserializeBinaryFromReader(message: TrainingResourceRequest, reader: jspb.BinaryReader): TrainingResourceRequest;
}

export namespace TrainingResourceRequest {
  export type AsObject = {
    gpu: string,
    cpu: string,
    mem: string,
  }
}

export class TrainingSpec extends jspb.Message {
  getPriority(): number;
  setPriority(value: number): TrainingSpec;

  getCvtype(): string;
  setCvtype(value: string): TrainingSpec;

  getCv(): boolean;
  setCv(value: boolean): TrainingSpec;

  getFolds(): number;
  setFolds(value: number): TrainingSpec;

  getRetry(): number;
  setRetry(value: number): TrainingSpec;

  getEvalmetricsList(): Array<string>;
  setEvalmetricsList(value: Array<string>): TrainingSpec;
  clearEvalmetricsList(): TrainingSpec;
  addEvalmetrics(value: string, index?: number): TrainingSpec;

  getEarlystop(): boolean;
  setEarlystop(value: boolean): TrainingSpec;

  getCheckpointinterval(): number;
  setCheckpointinterval(value: number): TrainingSpec;

  getForecast(): ForecastingSpec | undefined;
  setForecast(value?: ForecastingSpec): TrainingSpec;
  hasForecast(): boolean;
  clearForecast(): TrainingSpec;

  getSh(): SuccessiveHalvingSpec | undefined;
  setSh(value?: SuccessiveHalvingSpec): TrainingSpec;
  hasSh(): boolean;
  clearSh(): TrainingSpec;

  getSeed(): number;
  setSeed(value: number): TrainingSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): TrainingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingSpec): TrainingSpec.AsObject;
  static serializeBinaryToWriter(message: TrainingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingSpec;
  static deserializeBinaryFromReader(message: TrainingSpec, reader: jspb.BinaryReader): TrainingSpec;
}

export namespace TrainingSpec {
  export type AsObject = {
    priority: number,
    cvtype: string,
    cv: boolean,
    folds: number,
    retry: number,
    evalmetricsList: Array<string>,
    earlystop: boolean,
    checkpointinterval: number,
    forecast?: ForecastingSpec.AsObject,
    sh?: SuccessiveHalvingSpec.AsObject,
    seed: number,
    workloadclassname: string,
  }
}

export class TrainingStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): TrainingStageSpec;

  getNotebookname(): string;
  setNotebookname(value: string): TrainingStageSpec;

  getLabname(): string;
  setLabname(value: string): TrainingStageSpec;

  getStudytemplatename(): string;
  setStudytemplatename(value: string): TrainingStageSpec;

  getSmoke(): ModelValidation | undefined;
  setSmoke(value?: ModelValidation): TrainingStageSpec;
  hasSmoke(): boolean;
  clearSmoke(): TrainingStageSpec;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): TrainingStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingStageSpec): TrainingStageSpec.AsObject;
  static serializeBinaryToWriter(message: TrainingStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingStageSpec;
  static deserializeBinaryFromReader(message: TrainingStageSpec, reader: jspb.BinaryReader): TrainingStageSpec;
}

export namespace TrainingStageSpec {
  export type AsObject = {
    enabled: boolean,
    notebookname: string,
    labname: string,
    studytemplatename: string,
    smoke?: ModelValidation.AsObject,
    manualapproval: boolean,
  }
}

export class TransformerEstimatorSpec extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformerEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TransformerEstimatorSpec): TransformerEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: TransformerEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformerEstimatorSpec;
  static deserializeBinaryFromReader(message: TransformerEstimatorSpec, reader: jspb.BinaryReader): TransformerEstimatorSpec;
}

export namespace TransformerEstimatorSpec {
  export type AsObject = {
  }
}

export class UATStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): UATStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): UATStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): UATStageSpec;
  clearValidationsList(): UATStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): UATStageSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): UATStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UATStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: UATStageSpec): UATStageSpec.AsObject;
  static serializeBinaryToWriter(message: UATStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UATStageSpec;
  static deserializeBinaryFromReader(message: UATStageSpec, reader: jspb.BinaryReader): UATStageSpec;
}

export namespace UATStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    validationsList: Array<ModelValidation.AsObject>,
    manualapproval: boolean,
    workloadclassname: string,
  }
}

export class VideoPipelineSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): VideoPipelineSpec;
  clearColumnsList(): VideoPipelineSpec;
  addColumns(value: string, index?: number): VideoPipelineSpec;

  getFeaturizer(): string;
  setFeaturizer(value: string): VideoPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VideoPipelineSpec): VideoPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: VideoPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoPipelineSpec;
  static deserializeBinaryFromReader(message: VideoPipelineSpec, reader: jspb.BinaryReader): VideoPipelineSpec;
}

export namespace VideoPipelineSpec {
  export type AsObject = {
    columnsList: Array<string>,
    featurizer: string,
  }
}

