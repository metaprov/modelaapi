import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AlgorithmParameterRange extends jspb.Message {
  getName(): string;
  setName(value: string): AlgorithmParameterRange;

  getRangesList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange>;
  setRangesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange>): AlgorithmParameterRange;
  clearRangesList(): AlgorithmParameterRange;
  addRanges(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmParameterRange.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmParameterRange): AlgorithmParameterRange.AsObject;
  static serializeBinaryToWriter(message: AlgorithmParameterRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmParameterRange;
  static deserializeBinaryFromReader(message: AlgorithmParameterRange, reader: jspb.BinaryReader): AlgorithmParameterRange;
}

export namespace AlgorithmParameterRange {
  export type AsObject = {
    name: string,
    rangesList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange.AsObject>,
  }
}

export class AlgorithmSearchSpaceSpec extends jspb.Message {
  getIncludeList(): Array<string>;
  setIncludeList(value: Array<string>): AlgorithmSearchSpaceSpec;
  clearIncludeList(): AlgorithmSearchSpaceSpec;
  addInclude(value: string, index?: number): AlgorithmSearchSpaceSpec;

  getExcludeList(): Array<string>;
  setExcludeList(value: Array<string>): AlgorithmSearchSpaceSpec;
  clearExcludeList(): AlgorithmSearchSpaceSpec;
  addExclude(value: string, index?: number): AlgorithmSearchSpaceSpec;

  getCustomList(): Array<AlgorithmParameterRange>;
  setCustomList(value: Array<AlgorithmParameterRange>): AlgorithmSearchSpaceSpec;
  clearCustomList(): AlgorithmSearchSpaceSpec;
  addCustom(value?: AlgorithmParameterRange, index?: number): AlgorithmParameterRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmSearchSpaceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmSearchSpaceSpec): AlgorithmSearchSpaceSpec.AsObject;
  static serializeBinaryToWriter(message: AlgorithmSearchSpaceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmSearchSpaceSpec;
  static deserializeBinaryFromReader(message: AlgorithmSearchSpaceSpec, reader: jspb.BinaryReader): AlgorithmSearchSpaceSpec;
}

export namespace AlgorithmSearchSpaceSpec {
  export type AsObject = {
    includeList: Array<string>,
    excludeList: Array<string>,
    customList: Array<AlgorithmParameterRange.AsObject>,
  }
}

export class Anomaly extends jspb.Message {
  getName(): string;
  setName(value: string): Anomaly;

  getValuecolumn(): string;
  setValuecolumn(value: string): Anomaly;

  getAdjdeltacolumn(): string;
  setAdjdeltacolumn(value: string): Anomaly;

  getStart(): string;
  setStart(value: string): Anomaly;

  getEnd(): string;
  setEnd(value: string): Anomaly;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Anomaly.AsObject;
  static toObject(includeInstance: boolean, msg: Anomaly): Anomaly.AsObject;
  static serializeBinaryToWriter(message: Anomaly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Anomaly;
  static deserializeBinaryFromReader(message: Anomaly, reader: jspb.BinaryReader): Anomaly;
}

export namespace Anomaly {
  export type AsObject = {
    name: string,
    valuecolumn: string,
    adjdeltacolumn: string,
    start: string,
    end: string,
  }
}

export class AudioPipelineSpec extends jspb.Message {
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
    featurizer: string,
  }
}

export class BacktestSpec extends jspb.Message {
  getSliding(): boolean;
  setSliding(value: boolean): BacktestSpec;

  getSplits(): number;
  setSplits(value: number): BacktestSpec;

  getInitial(): number;
  setInitial(value: number): BacktestSpec;

  getGap(): number;
  setGap(value: number): BacktestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestSpec): BacktestSpec.AsObject;
  static serializeBinaryToWriter(message: BacktestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestSpec;
  static deserializeBinaryFromReader(message: BacktestSpec, reader: jspb.BinaryReader): BacktestSpec;
}

export namespace BacktestSpec {
  export type AsObject = {
    sliding: boolean,
    splits: number,
    initial: number,
    gap: number,
  }
}

export class BaselineSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): BaselineSpec;

  getBaselinesList(): Array<string>;
  setBaselinesList(value: Array<string>): BaselineSpec;
  clearBaselinesList(): BaselineSpec;
  addBaselines(value: string, index?: number): BaselineSpec;

  getAll(): boolean;
  setAll(value: boolean): BaselineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaselineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BaselineSpec): BaselineSpec.AsObject;
  static serializeBinaryToWriter(message: BaselineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaselineSpec;
  static deserializeBinaryFromReader(message: BaselineSpec, reader: jspb.BinaryReader): BaselineSpec;
}

export namespace BaselineSpec {
  export type AsObject = {
    enabled: boolean,
    baselinesList: Array<string>,
    all: boolean,
  }
}

export class ChangePoint extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePoint.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePoint): ChangePoint.AsObject;
  static serializeBinaryToWriter(message: ChangePoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePoint;
  static deserializeBinaryFromReader(message: ChangePoint, reader: jspb.BinaryReader): ChangePoint;
}

export namespace ChangePoint {
  export type AsObject = {
  }
}

export class ChatbotEstimatorSpec extends jspb.Message {
  getBase(): string;
  setBase(value: string): ChatbotEstimatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatbotEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ChatbotEstimatorSpec): ChatbotEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: ChatbotEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatbotEstimatorSpec;
  static deserializeBinaryFromReader(message: ChatbotEstimatorSpec, reader: jspb.BinaryReader): ChatbotEstimatorSpec;
}

export namespace ChatbotEstimatorSpec {
  export type AsObject = {
    base: string,
  }
}

export class CheckpointSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): CheckpointSpec;

  getCheckpointinterval(): number;
  setCheckpointinterval(value: number): CheckpointSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): CheckpointSpec;
  hasLocation(): boolean;
  clearLocation(): CheckpointSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointSpec): CheckpointSpec.AsObject;
  static serializeBinaryToWriter(message: CheckpointSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointSpec;
  static deserializeBinaryFromReader(message: CheckpointSpec, reader: jspb.BinaryReader): CheckpointSpec;
}

export namespace CheckpointSpec {
  export type AsObject = {
    enabled: boolean,
    checkpointinterval: number,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
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

export class CustomReportSpec extends jspb.Message {
  getPagesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>;
  setPagesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>): CustomReportSpec;
  clearPagesList(): CustomReportSpec;
  addPages(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportSpec): CustomReportSpec.AsObject;
  static serializeBinaryToWriter(message: CustomReportSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportSpec;
  static deserializeBinaryFromReader(message: CustomReportSpec, reader: jspb.BinaryReader): CustomReportSpec;
}

export namespace CustomReportSpec {
  export type AsObject = {
    pagesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.AsObject>,
  }
}

export class DataHashes extends jspb.Message {
  getTrainhash(): string;
  setTrainhash(value: string): DataHashes;

  getTestinghash(): string;
  setTestinghash(value: string): DataHashes;

  getValidationhash(): string;
  setValidationhash(value: string): DataHashes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataHashes.AsObject;
  static toObject(includeInstance: boolean, msg: DataHashes): DataHashes.AsObject;
  static serializeBinaryToWriter(message: DataHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataHashes;
  static deserializeBinaryFromReader(message: DataHashes, reader: jspb.BinaryReader): DataHashes;
}

export namespace DataHashes {
  export type AsObject = {
    trainhash: string,
    testinghash: string,
    validationhash: string,
  }
}

export class DataSplitSpec extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): DataSplitSpec;

  getTrain(): number;
  setTrain(value: number): DataSplitSpec;

  getValidation(): number;
  setValidation(value: number): DataSplitSpec;

  getTest(): number;
  setTest(value: number): DataSplitSpec;

  getSplitcolumn(): string;
  setSplitcolumn(value: string): DataSplitSpec;

  getSegmentsList(): Array<SegmentSpec>;
  setSegmentsList(value: Array<SegmentSpec>): DataSplitSpec;
  clearSegmentsList(): DataSplitSpec;
  addSegments(value?: SegmentSpec, index?: number): SegmentSpec;

  getTraindataset(): string;
  setTraindataset(value: string): DataSplitSpec;

  getTestdataset(): string;
  setTestdataset(value: string): DataSplitSpec;

  getValidationdataset(): string;
  setValidationdataset(value: string): DataSplitSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSplitSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataSplitSpec): DataSplitSpec.AsObject;
  static serializeBinaryToWriter(message: DataSplitSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSplitSpec;
  static deserializeBinaryFromReader(message: DataSplitSpec, reader: jspb.BinaryReader): DataSplitSpec;
}

export namespace DataSplitSpec {
  export type AsObject = {
    method: string,
    train: number,
    validation: number,
    test: number,
    splitcolumn: string,
    segmentsList: Array<SegmentSpec.AsObject>,
    traindataset: string,
    testdataset: string,
    validationdataset: string,
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

export class DriftDetectorStatus extends jspb.Message {
  getOutliermodeluri(): string;
  setOutliermodeluri(value: string): DriftDetectorStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriftDetectorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DriftDetectorStatus): DriftDetectorStatus.AsObject;
  static serializeBinaryToWriter(message: DriftDetectorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriftDetectorStatus;
  static deserializeBinaryFromReader(message: DriftDetectorStatus, reader: jspb.BinaryReader): DriftDetectorStatus;
}

export namespace DriftDetectorStatus {
  export type AsObject = {
    outliermodeluri: string,
  }
}

export class DriftModelSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DriftModelSpec;

  getOutlieralgorithm(): string;
  setOutlieralgorithm(value: string): DriftModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriftModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DriftModelSpec): DriftModelSpec.AsObject;
  static serializeBinaryToWriter(message: DriftModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriftModelSpec;
  static deserializeBinaryFromReader(message: DriftModelSpec, reader: jspb.BinaryReader): DriftModelSpec;
}

export namespace DriftModelSpec {
  export type AsObject = {
    enabled: boolean,
    outlieralgorithm: string,
  }
}

export class EarlyStopSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): EarlyStopSpec;

  getInitial(): number;
  setInitial(value: number): EarlyStopSpec;

  getMinmodelswithnoprogress(): number;
  setMinmodelswithnoprogress(value: number): EarlyStopSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarlyStopSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EarlyStopSpec): EarlyStopSpec.AsObject;
  static serializeBinaryToWriter(message: EarlyStopSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarlyStopSpec;
  static deserializeBinaryFromReader(message: EarlyStopSpec, reader: jspb.BinaryReader): EarlyStopSpec;
}

export namespace EarlyStopSpec {
  export type AsObject = {
    enabled: boolean,
    initial: number,
    minmodelswithnoprogress: number,
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
  getModelsList(): Array<string>;
  setModelsList(value: Array<string>): EnsembleSpec;
  clearModelsList(): EnsembleSpec;
  addModels(value: string, index?: number): EnsembleSpec;

  getEstimatorsList(): Array<ClassicalEstimatorSpec>;
  setEstimatorsList(value: Array<ClassicalEstimatorSpec>): EnsembleSpec;
  clearEstimatorsList(): EnsembleSpec;
  addEstimators(value?: ClassicalEstimatorSpec, index?: number): ClassicalEstimatorSpec;

  getFinal(): ClassicalEstimatorSpec | undefined;
  setFinal(value?: ClassicalEstimatorSpec): EnsembleSpec;
  hasFinal(): boolean;
  clearFinal(): EnsembleSpec;

  getType(): string;
  setType(value: string): EnsembleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsembleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EnsembleSpec): EnsembleSpec.AsObject;
  static serializeBinaryToWriter(message: EnsembleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsembleSpec;
  static deserializeBinaryFromReader(message: EnsembleSpec, reader: jspb.BinaryReader): EnsembleSpec;
}

export namespace EnsembleSpec {
  export type AsObject = {
    modelsList: Array<string>,
    estimatorsList: Array<ClassicalEstimatorSpec.AsObject>,
    pb_final?: ClassicalEstimatorSpec.AsObject,
    type: string,
  }
}

export class EnsemblesSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): EnsemblesSpec;

  getVotingensemble(): boolean;
  setVotingensemble(value: boolean): EnsemblesSpec;

  getStackingensemble(): boolean;
  setStackingensemble(value: boolean): EnsemblesSpec;

  getTop(): number;
  setTop(value: number): EnsemblesSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsemblesSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EnsemblesSpec): EnsemblesSpec.AsObject;
  static serializeBinaryToWriter(message: EnsemblesSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsemblesSpec;
  static deserializeBinaryFromReader(message: EnsemblesSpec, reader: jspb.BinaryReader): EnsemblesSpec;
}

export namespace EnsemblesSpec {
  export type AsObject = {
    enabled: boolean,
    votingensemble: boolean,
    stackingensemble: boolean,
    top: number,
  }
}

export class EntityRef extends jspb.Message {
  getName(): string;
  setName(value: string): EntityRef;

  getExcludeList(): Array<string>;
  setExcludeList(value: Array<string>): EntityRef;
  clearExcludeList(): EntityRef;
  addExclude(value: string, index?: number): EntityRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRef.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRef): EntityRef.AsObject;
  static serializeBinaryToWriter(message: EntityRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRef;
  static deserializeBinaryFromReader(message: EntityRef, reader: jspb.BinaryReader): EntityRef;
}

export namespace EntityRef {
  export type AsObject = {
    name: string,
    excludeList: Array<string>,
  }
}

export class EvalMetrics extends jspb.Message {
  getSelection(): string;
  setSelection(value: string): EvalMetrics;

  getReportingList(): Array<string>;
  setReportingList(value: Array<string>): EvalMetrics;
  clearReportingList(): EvalMetrics;
  addReporting(value: string, index?: number): EvalMetrics;

  getAggfunc(): string;
  setAggfunc(value: string): EvalMetrics;

  getAggperiod(): number;
  setAggperiod(value: number): EvalMetrics;

  getNullmodelparams(): string;
  setNullmodelparams(value: string): EvalMetrics;

  getRelerrtolerance(): number;
  setRelerrtolerance(value: number): EvalMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: EvalMetrics): EvalMetrics.AsObject;
  static serializeBinaryToWriter(message: EvalMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalMetrics;
  static deserializeBinaryFromReader(message: EvalMetrics, reader: jspb.BinaryReader): EvalMetrics;
}

export namespace EvalMetrics {
  export type AsObject = {
    selection: string,
    reportingList: Array<string>,
    aggfunc: string,
    aggperiod: number,
    nullmodelparams: string,
    relerrtolerance: number,
  }
}

export class EvalPeriod extends jspb.Message {
  getTesthorizon(): number;
  setTesthorizon(value: number): EvalPeriod;

  getPeriodsbetweentraintest(): number;
  setPeriodsbetweentraintest(value: number): EvalPeriod;

  getCvperiodsbetweensplits(): number;
  setCvperiodsbetweensplits(value: number): EvalPeriod;

  getCvexpandingwindows(): boolean;
  setCvexpandingwindows(value: boolean): EvalPeriod;

  getCvhorizon(): number;
  setCvhorizon(value: number): EvalPeriod;

  getCvmintrainperiods(): number;
  setCvmintrainperiods(value: number): EvalPeriod;

  getCvmaxsplits(): number;
  setCvmaxsplits(value: number): EvalPeriod;

  getCvusemostrecentsplits(): boolean;
  setCvusemostrecentsplits(value: boolean): EvalPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: EvalPeriod): EvalPeriod.AsObject;
  static serializeBinaryToWriter(message: EvalPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalPeriod;
  static deserializeBinaryFromReader(message: EvalPeriod, reader: jspb.BinaryReader): EvalPeriod;
}

export namespace EvalPeriod {
  export type AsObject = {
    testhorizon: number,
    periodsbetweentraintest: number,
    cvperiodsbetweensplits: number,
    cvexpandingwindows: boolean,
    cvhorizon: number,
    cvmintrainperiods: number,
    cvmaxsplits: number,
    cvusemostrecentsplits: boolean,
  }
}

export class FeatureEngineeringPipeline extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureEngineeringPipeline;

  getDatatype(): string;
  setDatatype(value: string): FeatureEngineeringPipeline;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): FeatureEngineeringPipeline;
  clearColumnsList(): FeatureEngineeringPipeline;
  addColumns(value: string, index?: number): FeatureEngineeringPipeline;

  getImputation(): string;
  setImputation(value: string): FeatureEngineeringPipeline;

  getEncoding(): string;
  setEncoding(value: string): FeatureEngineeringPipeline;

  getScaling(): string;
  setScaling(value: string): FeatureEngineeringPipeline;

  getDiscretisation(): string;
  setDiscretisation(value: string): FeatureEngineeringPipeline;

  getVariabletransformation(): string;
  setVariabletransformation(value: string): FeatureEngineeringPipeline;

  getOutlierhandling(): string;
  setOutlierhandling(value: string): FeatureEngineeringPipeline;

  getDatetimetransformation(): string;
  setDatetimetransformation(value: string): FeatureEngineeringPipeline;

  getText(): TextPipelineSpec | undefined;
  setText(value?: TextPipelineSpec): FeatureEngineeringPipeline;
  hasText(): boolean;
  clearText(): FeatureEngineeringPipeline;

  getImage(): ImagePipelineSpec | undefined;
  setImage(value?: ImagePipelineSpec): FeatureEngineeringPipeline;
  hasImage(): boolean;
  clearImage(): FeatureEngineeringPipeline;

  getAudio(): AudioPipelineSpec | undefined;
  setAudio(value?: AudioPipelineSpec): FeatureEngineeringPipeline;
  hasAudio(): boolean;
  clearAudio(): FeatureEngineeringPipeline;

  getVideo(): VideoPipelineSpec | undefined;
  setVideo(value?: VideoPipelineSpec): FeatureEngineeringPipeline;
  hasVideo(): boolean;
  clearVideo(): FeatureEngineeringPipeline;

  getGeneratedList(): Array<GeneratedColumnSpec>;
  setGeneratedList(value: Array<GeneratedColumnSpec>): FeatureEngineeringPipeline;
  clearGeneratedList(): FeatureEngineeringPipeline;
  addGenerated(value?: GeneratedColumnSpec, index?: number): GeneratedColumnSpec;

  getCustomList(): Array<GeneratedColumnSpec>;
  setCustomList(value: Array<GeneratedColumnSpec>): FeatureEngineeringPipeline;
  clearCustomList(): FeatureEngineeringPipeline;
  addCustom(value?: GeneratedColumnSpec, index?: number): GeneratedColumnSpec;

  getDrop(): boolean;
  setDrop(value: boolean): FeatureEngineeringPipeline;

  getPassthrough(): boolean;
  setPassthrough(value: boolean): FeatureEngineeringPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringPipeline): FeatureEngineeringPipeline.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringPipeline;
  static deserializeBinaryFromReader(message: FeatureEngineeringPipeline, reader: jspb.BinaryReader): FeatureEngineeringPipeline;
}

export namespace FeatureEngineeringPipeline {
  export type AsObject = {
    name: string,
    datatype: string,
    columnsList: Array<string>,
    imputation: string,
    encoding: string,
    scaling: string,
    discretisation: string,
    variabletransformation: string,
    outlierhandling: string,
    datetimetransformation: string,
    text?: TextPipelineSpec.AsObject,
    image?: ImagePipelineSpec.AsObject,
    audio?: AudioPipelineSpec.AsObject,
    video?: VideoPipelineSpec.AsObject,
    generatedList: Array<GeneratedColumnSpec.AsObject>,
    customList: Array<GeneratedColumnSpec.AsObject>,
    drop: boolean,
    passthrough: boolean,
  }
}

export class FeatureEngineeringSearchSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeatureEngineeringSearchSpec;

  getImbalancedhandler(): string;
  setImbalancedhandler(value: string): FeatureEngineeringSearchSpec;

  getEstimator(): string;
  setEstimator(value: string): FeatureEngineeringSearchSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): FeatureEngineeringSearchSpec;

  getMaxtime(): number;
  setMaxtime(value: number): FeatureEngineeringSearchSpec;

  getMaxtrainers(): number;
  setMaxtrainers(value: number): FeatureEngineeringSearchSpec;

  getSamplepct(): number;
  setSamplepct(value: number): FeatureEngineeringSearchSpec;

  getAutoremove(): boolean;
  setAutoremove(value: boolean): FeatureEngineeringSearchSpec;

  getReuse(): boolean;
  setReuse(value: boolean): FeatureEngineeringSearchSpec;

  getFeselection(): FeatureSelectionSpec | undefined;
  setFeselection(value?: FeatureSelectionSpec): FeatureEngineeringSearchSpec;
  hasFeselection(): boolean;
  clearFeselection(): FeatureEngineeringSearchSpec;

  getEarlystop(): EarlyStopSpec | undefined;
  setEarlystop(value?: EarlyStopSpec): FeatureEngineeringSearchSpec;
  hasEarlystop(): boolean;
  clearEarlystop(): FeatureEngineeringSearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringSearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringSearchSpec): FeatureEngineeringSearchSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringSearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringSearchSpec;
  static deserializeBinaryFromReader(message: FeatureEngineeringSearchSpec, reader: jspb.BinaryReader): FeatureEngineeringSearchSpec;
}

export namespace FeatureEngineeringSearchSpec {
  export type AsObject = {
    enabled: boolean,
    imbalancedhandler: string,
    estimator: string,
    maxmodels: number,
    maxtime: number,
    maxtrainers: number,
    samplepct: number,
    autoremove: boolean,
    reuse: boolean,
    feselection?: FeatureSelectionSpec.AsObject,
    earlystop?: EarlyStopSpec.AsObject,
  }
}

export class FeatureEngineeringSearchStatus extends jspb.Message {
  getBest(): FeatureEngineeringSpec | undefined;
  setBest(value?: FeatureEngineeringSpec): FeatureEngineeringSearchStatus;
  hasBest(): boolean;
  clearBest(): FeatureEngineeringSearchStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringSearchStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringSearchStatus): FeatureEngineeringSearchStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringSearchStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringSearchStatus;
  static deserializeBinaryFromReader(message: FeatureEngineeringSearchStatus, reader: jspb.BinaryReader): FeatureEngineeringSearchStatus;
}

export namespace FeatureEngineeringSearchStatus {
  export type AsObject = {
    best?: FeatureEngineeringSpec.AsObject,
  }
}

export class FeatureEngineeringSpec extends jspb.Message {
  getPipelinesList(): Array<FeatureEngineeringPipeline>;
  setPipelinesList(value: Array<FeatureEngineeringPipeline>): FeatureEngineeringSpec;
  clearPipelinesList(): FeatureEngineeringSpec;
  addPipelines(value?: FeatureEngineeringPipeline, index?: number): FeatureEngineeringPipeline;

  getImbalance(): string;
  setImbalance(value: string): FeatureEngineeringSpec;

  getSelection(): FeatureSelectionSpec | undefined;
  setSelection(value?: FeatureSelectionSpec): FeatureEngineeringSpec;
  hasSelection(): boolean;
  clearSelection(): FeatureEngineeringSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringSpec): FeatureEngineeringSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringSpec;
  static deserializeBinaryFromReader(message: FeatureEngineeringSpec, reader: jspb.BinaryReader): FeatureEngineeringSpec;
}

export namespace FeatureEngineeringSpec {
  export type AsObject = {
    pipelinesList: Array<FeatureEngineeringPipeline.AsObject>,
    imbalance: string,
    selection?: FeatureSelectionSpec.AsObject,
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

export class FeatureInfo extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureInfo;

  getReason(): string;
  setReason(value: string): FeatureInfo;

  getValue(): number;
  setValue(value: number): FeatureInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureInfo): FeatureInfo.AsObject;
  static serializeBinaryToWriter(message: FeatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureInfo;
  static deserializeBinaryFromReader(message: FeatureInfo, reader: jspb.BinaryReader): FeatureInfo;
}

export namespace FeatureInfo {
  export type AsObject = {
    name: string,
    reason: string,
    value: number,
  }
}

export class FeaturePair extends jspb.Message {
  getX(): string;
  setX(value: string): FeaturePair;

  getY(): string;
  setY(value: string): FeaturePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePair.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePair): FeaturePair.AsObject;
  static serializeBinaryToWriter(message: FeaturePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePair;
  static deserializeBinaryFromReader(message: FeaturePair, reader: jspb.BinaryReader): FeaturePair;
}

export namespace FeaturePair {
  export type AsObject = {
    x: string,
    y: string,
  }
}

export class FeatureSelectionSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeatureSelectionSpec;

  getEmbedding(): boolean;
  setEmbedding(value: boolean): FeatureSelectionSpec;

  getFilter(): boolean;
  setFilter(value: boolean): FeatureSelectionSpec;

  getWrapper(): boolean;
  setWrapper(value: boolean): FeatureSelectionSpec;

  getPipelineList(): Array<string>;
  setPipelineList(value: Array<string>): FeatureSelectionSpec;
  clearPipelineList(): FeatureSelectionSpec;
  addPipeline(value: string, index?: number): FeatureSelectionSpec;

  getVarthreshold(): number;
  setVarthreshold(value: number): FeatureSelectionSpec;

  getCorrthreshold(): number;
  setCorrthreshold(value: number): FeatureSelectionSpec;

  getMaxfeatures(): number;
  setMaxfeatures(value: number): FeatureSelectionSpec;

  getPercentile(): number;
  setPercentile(value: number): FeatureSelectionSpec;

  getReservedList(): Array<string>;
  setReservedList(value: Array<string>): FeatureSelectionSpec;
  clearReservedList(): FeatureSelectionSpec;
  addReserved(value: string, index?: number): FeatureSelectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureSelectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureSelectionSpec): FeatureSelectionSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureSelectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureSelectionSpec;
  static deserializeBinaryFromReader(message: FeatureSelectionSpec, reader: jspb.BinaryReader): FeatureSelectionSpec;
}

export namespace FeatureSelectionSpec {
  export type AsObject = {
    enabled: boolean,
    embedding: boolean,
    filter: boolean,
    wrapper: boolean,
    pipelineList: Array<string>,
    varthreshold: number,
    corrthreshold: number,
    maxfeatures: number,
    percentile: number,
    reservedList: Array<string>,
  }
}

export class ForecasterSpec extends jspb.Message {
  getEventsList(): Array<TimeSeriesEvent>;
  setEventsList(value: Array<TimeSeriesEvent>): ForecasterSpec;
  clearEventsList(): ForecasterSpec;
  addEvents(value?: TimeSeriesEvent, index?: number): TimeSeriesEvent;

  getPast(): WindowSpec | undefined;
  setPast(value?: WindowSpec): ForecasterSpec;
  hasPast(): boolean;
  clearPast(): ForecasterSpec;

  getFuture(): WindowSpec | undefined;
  setFuture(value?: WindowSpec): ForecasterSpec;
  hasFuture(): boolean;
  clearFuture(): ForecasterSpec;

  getForecast(): boolean;
  setForecast(value: boolean): ForecasterSpec;

  getCoverage(): number;
  setCoverage(value: number): ForecasterSpec;

  getOutputlocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setOutputlocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ForecasterSpec;
  hasOutputlocation(): boolean;
  clearOutputlocation(): ForecasterSpec;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): ForecasterSpec;
  clearFeaturesList(): ForecasterSpec;
  addFeatures(value: string, index?: number): ForecasterSpec;

  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): ForecasterSpec;
  clearGroupsList(): ForecasterSpec;
  addGroups(value: string, index?: number): ForecasterSpec;

  getPredefinedtemplate(): string;
  setPredefinedtemplate(value: string): ForecasterSpec;

  getAnomaliesList(): Array<Anomaly>;
  setAnomaliesList(value: Array<Anomaly>): ForecasterSpec;
  clearAnomaliesList(): ForecasterSpec;
  addAnomalies(value?: Anomaly, index?: number): Anomaly;

  getTrainenddata(): string;
  setTrainenddata(value: string): ForecasterSpec;

  getValuecolumn(): string;
  setValuecolumn(value: string): ForecasterSpec;

  getHpobudget(): number;
  setHpobudget(value: number): ForecasterSpec;

  getEvaluationmetrics(): EvalMetrics | undefined;
  setEvaluationmetrics(value?: EvalMetrics): ForecasterSpec;
  hasEvaluationmetrics(): boolean;
  clearEvaluationmetrics(): ForecasterSpec;

  getEvaluationperiod(): EvalPeriod | undefined;
  setEvaluationperiod(value?: EvalPeriod): ForecasterSpec;
  hasEvaluationperiod(): boolean;
  clearEvaluationperiod(): ForecasterSpec;

  getSeasonality(): SeasonalitySpec | undefined;
  setSeasonality(value?: SeasonalitySpec): ForecasterSpec;
  hasSeasonality(): boolean;
  clearSeasonality(): ForecasterSpec;

  getRegressorsList(): Array<string>;
  setRegressorsList(value: Array<string>): ForecasterSpec;
  clearRegressorsList(): ForecasterSpec;
  addRegressors(value: string, index?: number): ForecasterSpec;

  getLaggedregressorsList(): Array<string>;
  setLaggedregressorsList(value: Array<string>): ForecasterSpec;
  clearLaggedregressorsList(): ForecasterSpec;
  addLaggedregressors(value: string, index?: number): ForecasterSpec;

  getGrowth(): string;
  setGrowth(value: string): ForecasterSpec;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): ForecasterSpec;
  clearKeyList(): ForecasterSpec;
  addKey(value: string, index?: number): ForecasterSpec;

  getEstimatorsList(): Array<string>;
  setEstimatorsList(value: Array<string>): ForecasterSpec;
  clearEstimatorsList(): ForecasterSpec;
  addEstimators(value: string, index?: number): ForecasterSpec;

  getHts(): string;
  setHts(value: string): ForecasterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecasterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecasterSpec): ForecasterSpec.AsObject;
  static serializeBinaryToWriter(message: ForecasterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecasterSpec;
  static deserializeBinaryFromReader(message: ForecasterSpec, reader: jspb.BinaryReader): ForecasterSpec;
}

export namespace ForecasterSpec {
  export type AsObject = {
    eventsList: Array<TimeSeriesEvent.AsObject>,
    past?: WindowSpec.AsObject,
    future?: WindowSpec.AsObject,
    forecast: boolean,
    coverage: number,
    outputlocation?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    featuresList: Array<string>,
    groupsList: Array<string>,
    predefinedtemplate: string,
    anomaliesList: Array<Anomaly.AsObject>,
    trainenddata: string,
    valuecolumn: string,
    hpobudget: number,
    evaluationmetrics?: EvalMetrics.AsObject,
    evaluationperiod?: EvalPeriod.AsObject,
    seasonality?: SeasonalitySpec.AsObject,
    regressorsList: Array<string>,
    laggedregressorsList: Array<string>,
    growth: string,
    keyList: Array<string>,
    estimatorsList: Array<string>,
    hts: string,
  }
}

export class GarbageCollectionSpec extends jspb.Message {
  getCollectatmodelclassend(): boolean;
  setCollectatmodelclassend(value: boolean): GarbageCollectionSpec;

  getKeeponlybestmodelperalgorithm(): boolean;
  setKeeponlybestmodelperalgorithm(value: boolean): GarbageCollectionSpec;

  getKeepprunedmodels(): boolean;
  setKeepprunedmodels(value: boolean): GarbageCollectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GarbageCollectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GarbageCollectionSpec): GarbageCollectionSpec.AsObject;
  static serializeBinaryToWriter(message: GarbageCollectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GarbageCollectionSpec;
  static deserializeBinaryFromReader(message: GarbageCollectionSpec, reader: jspb.BinaryReader): GarbageCollectionSpec;
}

export namespace GarbageCollectionSpec {
  export type AsObject = {
    collectatmodelclassend: boolean,
    keeponlybestmodelperalgorithm: boolean,
    keepprunedmodels: boolean,
  }
}

export class GarbageCollectionStatus extends jspb.Message {
  getCollectedmodelscount(): number;
  setCollectedmodelscount(value: number): GarbageCollectionStatus;

  getModelsList(): Array<ModelResult>;
  setModelsList(value: Array<ModelResult>): GarbageCollectionStatus;
  clearModelsList(): GarbageCollectionStatus;
  addModels(value?: ModelResult, index?: number): ModelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GarbageCollectionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: GarbageCollectionStatus): GarbageCollectionStatus.AsObject;
  static serializeBinaryToWriter(message: GarbageCollectionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GarbageCollectionStatus;
  static deserializeBinaryFromReader(message: GarbageCollectionStatus, reader: jspb.BinaryReader): GarbageCollectionStatus;
}

export namespace GarbageCollectionStatus {
  export type AsObject = {
    collectedmodelscount: number,
    modelsList: Array<ModelResult.AsObject>,
  }
}

export class GeneratedColumnSpec extends jspb.Message {
  getName(): string;
  setName(value: string): GeneratedColumnSpec;

  getDatatype(): string;
  setDatatype(value: string): GeneratedColumnSpec;

  getFirst(): string;
  setFirst(value: string): GeneratedColumnSpec;

  getSecond(): string;
  setSecond(value: string): GeneratedColumnSpec;

  getOriginal(): string;
  setOriginal(value: string): GeneratedColumnSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedColumnSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedColumnSpec): GeneratedColumnSpec.AsObject;
  static serializeBinaryToWriter(message: GeneratedColumnSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedColumnSpec;
  static deserializeBinaryFromReader(message: GeneratedColumnSpec, reader: jspb.BinaryReader): GeneratedColumnSpec;
}

export namespace GeneratedColumnSpec {
  export type AsObject = {
    name: string,
    datatype: string,
    first: string,
    second: string,
    original: string,
  }
}

export class GroupSplitLocationsSpec extends jspb.Message {
  getGrouptrainingdatafile(): string;
  setGrouptrainingdatafile(value: string): GroupSplitLocationsSpec;

  getGrouptestingdatafile(): string;
  setGrouptestingdatafile(value: string): GroupSplitLocationsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupSplitLocationsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GroupSplitLocationsSpec): GroupSplitLocationsSpec.AsObject;
  static serializeBinaryToWriter(message: GroupSplitLocationsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupSplitLocationsSpec;
  static deserializeBinaryFromReader(message: GroupSplitLocationsSpec, reader: jspb.BinaryReader): GroupSplitLocationsSpec;
}

export namespace GroupSplitLocationsSpec {
  export type AsObject = {
    grouptrainingdatafile: string,
    grouptestingdatafile: string,
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

export class HyperbandOptions extends jspb.Message {
  getMinresources(): number;
  setMinresources(value: number): HyperbandOptions;

  getMaxresources(): number;
  setMaxresources(value: number): HyperbandOptions;

  getReductionfactor(): number;
  setReductionfactor(value: number): HyperbandOptions;

  getBootstrapcount(): number;
  setBootstrapcount(value: number): HyperbandOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperbandOptions.AsObject;
  static toObject(includeInstance: boolean, msg: HyperbandOptions): HyperbandOptions.AsObject;
  static serializeBinaryToWriter(message: HyperbandOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperbandOptions;
  static deserializeBinaryFromReader(message: HyperbandOptions, reader: jspb.BinaryReader): HyperbandOptions;
}

export namespace HyperbandOptions {
  export type AsObject = {
    minresources: number,
    maxresources: number,
    reductionfactor: number,
    bootstrapcount: number,
  }
}

export class ImagePipelineSpec extends jspb.Message {
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
    featurizer: string,
  }
}

export class ImbalanceHandlingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ImbalanceHandlingSpec;

  getImbalance(): string;
  setImbalance(value: string): ImbalanceHandlingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImbalanceHandlingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImbalanceHandlingSpec): ImbalanceHandlingSpec.AsObject;
  static serializeBinaryToWriter(message: ImbalanceHandlingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImbalanceHandlingSpec;
  static deserializeBinaryFromReader(message: ImbalanceHandlingSpec, reader: jspb.BinaryReader): ImbalanceHandlingSpec;
}

export namespace ImbalanceHandlingSpec {
  export type AsObject = {
    enabled: boolean,
    imbalance: string,
  }
}

export class InterpretabilitySpec extends jspb.Message {
  getIce(): boolean;
  setIce(value: boolean): InterpretabilitySpec;

  getIcepairsList(): Array<FeaturePair>;
  setIcepairsList(value: Array<FeaturePair>): InterpretabilitySpec;
  clearIcepairsList(): InterpretabilitySpec;
  addIcepairs(value?: FeaturePair, index?: number): FeaturePair;

  getLime(): boolean;
  setLime(value: boolean): InterpretabilitySpec;

  getShap(): string;
  setShap(value: string): InterpretabilitySpec;

  getShappairsList(): Array<FeaturePair>;
  setShappairsList(value: Array<FeaturePair>): InterpretabilitySpec;
  clearShappairsList(): InterpretabilitySpec;
  addShappairs(value?: FeaturePair, index?: number): FeaturePair;

  getCounterfactual(): boolean;
  setCounterfactual(value: boolean): InterpretabilitySpec;

  getAnchor(): boolean;
  setAnchor(value: boolean): InterpretabilitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterpretabilitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: InterpretabilitySpec): InterpretabilitySpec.AsObject;
  static serializeBinaryToWriter(message: InterpretabilitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterpretabilitySpec;
  static deserializeBinaryFromReader(message: InterpretabilitySpec, reader: jspb.BinaryReader): InterpretabilitySpec;
}

export namespace InterpretabilitySpec {
  export type AsObject = {
    ice: boolean,
    icepairsList: Array<FeaturePair.AsObject>,
    lime: boolean,
    shap: string,
    shappairsList: Array<FeaturePair.AsObject>,
    counterfactual: boolean,
    anchor: boolean,
  }
}

export class InterpretabilityStatus extends jspb.Message {
  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): InterpretabilityStatus;
  hasStartedat(): boolean;
  clearStartedat(): InterpretabilityStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): InterpretabilityStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): InterpretabilityStatus;

  getExplaineruri(): string;
  setExplaineruri(value: string): InterpretabilityStatus;

  getTrainshapvaluesuri(): string;
  setTrainshapvaluesuri(value: string): InterpretabilityStatus;

  getTestshapvaluesuri(): string;
  setTestshapvaluesuri(value: string): InterpretabilityStatus;

  getImportanceList(): Array<FeatureImportance>;
  setImportanceList(value: Array<FeatureImportance>): InterpretabilityStatus;
  clearImportanceList(): InterpretabilityStatus;
  addImportance(value?: FeatureImportance, index?: number): FeatureImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterpretabilityStatus.AsObject;
  static toObject(includeInstance: boolean, msg: InterpretabilityStatus): InterpretabilityStatus.AsObject;
  static serializeBinaryToWriter(message: InterpretabilityStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterpretabilityStatus;
  static deserializeBinaryFromReader(message: InterpretabilityStatus, reader: jspb.BinaryReader): InterpretabilityStatus;
}

export namespace InterpretabilityStatus {
  export type AsObject = {
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    explaineruri: string,
    trainshapvaluesuri: string,
    testshapvaluesuri: string,
    importanceList: Array<FeatureImportance.AsObject>,
  }
}

export class Level extends jspb.Message {
  getName(): string;
  setName(value: string): Level;

  getIndexList(): Array<string>;
  setIndexList(value: Array<string>): Level;
  clearIndexList(): Level;
  addIndex(value: string, index?: number): Level;

  getHorizon(): number;
  setHorizon(value: number): Level;

  getFreq(): string;
  setFreq(value: string): Level;

  getAggregate(): string;
  setAggregate(value: string): Level;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Level.AsObject;
  static toObject(includeInstance: boolean, msg: Level): Level.AsObject;
  static serializeBinaryToWriter(message: Level, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Level;
  static deserializeBinaryFromReader(message: Level, reader: jspb.BinaryReader): Level;
}

export namespace Level {
  export type AsObject = {
    name: string,
    indexList: Array<string>,
    horizon: number,
    freq: string,
    aggregate: string,
  }
}

export class MedianPrunerOptions extends jspb.Message {
  getStartuptrials(): number;
  setStartuptrials(value: number): MedianPrunerOptions;

  getWarmupsteps(): number;
  setWarmupsteps(value: number): MedianPrunerOptions;

  getIntervalsteps(): number;
  setIntervalsteps(value: number): MedianPrunerOptions;

  getMintrials(): number;
  setMintrials(value: number): MedianPrunerOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedianPrunerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MedianPrunerOptions): MedianPrunerOptions.AsObject;
  static serializeBinaryToWriter(message: MedianPrunerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedianPrunerOptions;
  static deserializeBinaryFromReader(message: MedianPrunerOptions, reader: jspb.BinaryReader): MedianPrunerOptions;
}

export namespace MedianPrunerOptions {
  export type AsObject = {
    startuptrials: number,
    warmupsteps: number,
    intervalsteps: number,
    mintrials: number,
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

export class ModelClass extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelClass;
  hasMetadata(): boolean;
  clearMetadata(): ModelClass;

  getSpec(): ModelClassSpec | undefined;
  setSpec(value?: ModelClassSpec): ModelClass;
  hasSpec(): boolean;
  clearSpec(): ModelClass;

  getStatus(): ModelClassStatus | undefined;
  setStatus(value?: ModelClassStatus): ModelClass;
  hasStatus(): boolean;
  clearStatus(): ModelClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClass.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClass): ModelClass.AsObject;
  static serializeBinaryToWriter(message: ModelClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClass;
  static deserializeBinaryFromReader(message: ModelClass, reader: jspb.BinaryReader): ModelClass;
}

export namespace ModelClass {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelClassSpec.AsObject,
    status?: ModelClassStatus.AsObject,
  }
}

export class ModelClassDataSpec extends jspb.Message {
  getObservations(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setObservations(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelClassDataSpec;
  hasObservations(): boolean;
  clearObservations(): ModelClassDataSpec;

  getPredictions(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setPredictions(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelClassDataSpec;
  hasPredictions(): boolean;
  clearPredictions(): ModelClassDataSpec;

  getSchema(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Schema | undefined;
  setSchema(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Schema): ModelClassDataSpec;
  hasSchema(): boolean;
  clearSchema(): ModelClassDataSpec;

  getFlatfile(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec | undefined;
  setFlatfile(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec): ModelClassDataSpec;
  hasFlatfile(): boolean;
  clearFlatfile(): ModelClassDataSpec;

  getPrimarykeyList(): Array<string>;
  setPrimarykeyList(value: Array<string>): ModelClassDataSpec;
  clearPrimarykeyList(): ModelClassDataSpec;
  addPrimarykey(value: string, index?: number): ModelClassDataSpec;

  getPredictiontimecolumn(): string;
  setPredictiontimecolumn(value: string): ModelClassDataSpec;

  getTarget(): string;
  setTarget(value: string): ModelClassDataSpec;

  getTests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setTests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelClassDataSpec;
  hasTests(): boolean;
  clearTests(): ModelClassDataSpec;

  getOnlinefeaturestorename(): string;
  setOnlinefeaturestorename(value: string): ModelClassDataSpec;

  getOfflinefeaturestorename(): string;
  setOfflinefeaturestorename(value: string): ModelClassDataSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassDataSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassDataSpec): ModelClassDataSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassDataSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassDataSpec;
  static deserializeBinaryFromReader(message: ModelClassDataSpec, reader: jspb.BinaryReader): ModelClassDataSpec;
}

export namespace ModelClassDataSpec {
  export type AsObject = {
    observations?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    predictions?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    schema?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Schema.AsObject,
    flatfile?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.AsObject,
    primarykeyList: Array<string>,
    predictiontimecolumn: string,
    target: string,
    tests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    onlinefeaturestorename: string,
    offlinefeaturestorename: string,
  }
}

export class ModelClassList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelClassList;
  hasMetadata(): boolean;
  clearMetadata(): ModelClassList;

  getItemsList(): Array<ModelClass>;
  setItemsList(value: Array<ModelClass>): ModelClassList;
  clearItemsList(): ModelClassList;
  addItems(value?: ModelClass, index?: number): ModelClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassList): ModelClassList.AsObject;
  static serializeBinaryToWriter(message: ModelClassList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassList;
  static deserializeBinaryFromReader(message: ModelClassList, reader: jspb.BinaryReader): ModelClassList;
}

export namespace ModelClassList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelClass.AsObject>,
  }
}

export class ModelClassRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelClassRun;
  hasMetadata(): boolean;
  clearMetadata(): ModelClassRun;

  getSpec(): ModelClassRunSpec | undefined;
  setSpec(value?: ModelClassRunSpec): ModelClassRun;
  hasSpec(): boolean;
  clearSpec(): ModelClassRun;

  getStatus(): ModelClassRunStatus | undefined;
  setStatus(value?: ModelClassRunStatus): ModelClassRun;
  hasStatus(): boolean;
  clearStatus(): ModelClassRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRun.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRun): ModelClassRun.AsObject;
  static serializeBinaryToWriter(message: ModelClassRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRun;
  static deserializeBinaryFromReader(message: ModelClassRun, reader: jspb.BinaryReader): ModelClassRun;
}

export namespace ModelClassRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelClassRunSpec.AsObject,
    status?: ModelClassRunStatus.AsObject,
  }
}

export class ModelClassRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelClassRunList;
  hasMetadata(): boolean;
  clearMetadata(): ModelClassRunList;

  getItemsList(): Array<ModelClassRun>;
  setItemsList(value: Array<ModelClassRun>): ModelClassRunList;
  clearItemsList(): ModelClassRunList;
  addItems(value?: ModelClassRun, index?: number): ModelClassRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunList): ModelClassRunList.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunList;
  static deserializeBinaryFromReader(message: ModelClassRunList, reader: jspb.BinaryReader): ModelClassRunList;
}

export namespace ModelClassRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelClassRun.AsObject>,
  }
}

export class ModelClassRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelClassRunSpec;

  getDescription(): string;
  setDescription(value: string): ModelClassRunSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelClassRunSpec;

  getModelclassname(): string;
  setModelclassname(value: string): ModelClassRunSpec;

  getOwner(): string;
  setOwner(value: string): ModelClassRunSpec;

  getPriority(): string;
  setPriority(value: string): ModelClassRunSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelClassRunSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelClassRunSpec;

  getTtl(): number;
  setTtl(value: number): ModelClassRunSpec;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelClassRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunSpec): ModelClassRunSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunSpec;
  static deserializeBinaryFromReader(message: ModelClassRunSpec, reader: jspb.BinaryReader): ModelClassRunSpec;
}

export namespace ModelClassRunSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetname: string,
    modelclassname: string,
    owner: string,
    priority: string,
    paused: boolean,
    aborted: boolean,
    ttl: number,
    triggeredby: string,
  }
}

export class ModelClassRunStatus extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): ModelClassRunStatus;

  getStudyname(): string;
  setStudyname(value: string): ModelClassRunStatus;

  getModelname(): string;
  setModelname(value: string): ModelClassRunStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ModelClassRunStatus;

  getPhase(): string;
  setPhase(value: string): ModelClassRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelClassRunStatus;

  getEvalmetrics(): string;
  setEvalmetrics(value: string): ModelClassRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelClassRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelClassRunStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassRunStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ModelClassRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ModelClassRunStatus;
  hasLogs(): boolean;
  clearLogs(): ModelClassRunStatus;

  getPromotedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setPromotedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassRunStatus;
  hasPromotedat(): boolean;
  clearPromotedat(): ModelClassRunStatus;

  getAuto(): boolean;
  setAuto(value: boolean): ModelClassRunStatus;

  getApprovedby(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setApprovedby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelClassRunStatus;
  hasApprovedby(): boolean;
  clearApprovedby(): ModelClassRunStatus;

  getModelscount(): number;
  setModelscount(value: number): ModelClassRunStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelClassRunStatus;
  clearConditionsList(): ModelClassRunStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunStatus): ModelClassRunStatus.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunStatus;
  static deserializeBinaryFromReader(message: ModelClassRunStatus, reader: jspb.BinaryReader): ModelClassRunStatus;
}

export namespace ModelClassRunStatus {
  export type AsObject = {
    datasetname: string,
    studyname: string,
    modelname: string,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
    evalmetrics: string,
    failurereason: string,
    failuremessage: string,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    promotedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    auto: boolean,
    approvedby?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    modelscount: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelClassServingSpec extends jspb.Message {
  getTemplate(): ServingSpec | undefined;
  setTemplate(value?: ServingSpec): ModelClassServingSpec;
  hasTemplate(): boolean;
  clearTemplate(): ModelClassServingSpec;

  getMonitoringschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setMonitoringschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassServingSpec;
  hasMonitoringschedule(): boolean;
  clearMonitoringschedule(): ModelClassServingSpec;

  getPredictionschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setPredictionschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassServingSpec;
  hasPredictionschedule(): boolean;
  clearPredictionschedule(): ModelClassServingSpec;

  getPresqlList(): Array<string>;
  setPresqlList(value: Array<string>): ModelClassServingSpec;
  clearPresqlList(): ModelClassServingSpec;
  addPresql(value: string, index?: number): ModelClassServingSpec;

  getPostsqlList(): Array<string>;
  setPostsqlList(value: Array<string>): ModelClassServingSpec;
  clearPostsqlList(): ModelClassServingSpec;
  addPostsql(value: string, index?: number): ModelClassServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassServingSpec): ModelClassServingSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassServingSpec;
  static deserializeBinaryFromReader(message: ModelClassServingSpec, reader: jspb.BinaryReader): ModelClassServingSpec;
}

export namespace ModelClassServingSpec {
  export type AsObject = {
    template?: ServingSpec.AsObject,
    monitoringschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    predictionschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    presqlList: Array<string>,
    postsqlList: Array<string>,
  }
}

export class ModelClassSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ModelClassSpec;

  getDataproductversionname(): string;
  setDataproductversionname(value: string): ModelClassSpec;

  getVersion(): string;
  setVersion(value: string): ModelClassSpec;

  getDescription(): string;
  setDescription(value: string): ModelClassSpec;

  getTask(): string;
  setTask(value: string): ModelClassSpec;

  getSubtask(): string;
  setSubtask(value: string): ModelClassSpec;

  getObjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): ModelClassSpec;
  hasObjective(): boolean;
  clearObjective(): ModelClassSpec;

  getEntitiesList(): Array<EntityRef>;
  setEntitiesList(value: Array<EntityRef>): ModelClassSpec;
  clearEntitiesList(): ModelClassSpec;
  addEntities(value?: EntityRef, index?: number): EntityRef;

  getData(): ModelClassDataSpec | undefined;
  setData(value?: ModelClassDataSpec): ModelClassSpec;
  hasData(): boolean;
  clearData(): ModelClassSpec;

  getTraining(): ModelClassTrainingSpec | undefined;
  setTraining(value?: ModelClassTrainingSpec): ModelClassSpec;
  hasTraining(): boolean;
  clearTraining(): ModelClassSpec;

  getServing(): ModelClassServingSpec | undefined;
  setServing(value?: ModelClassServingSpec): ModelClassSpec;
  hasServing(): boolean;
  clearServing(): ModelClassSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): ModelClassSpec;
  hasNotification(): boolean;
  clearNotification(): ModelClassSpec;

  getReportschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setReportschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassSpec;
  hasReportschedule(): boolean;
  clearReportschedule(): ModelClassSpec;

  getFast(): boolean;
  setFast(value: boolean): ModelClassSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelClassSpec;

  getRegistered(): boolean;
  setRegistered(value: boolean): ModelClassSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassSpec): ModelClassSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassSpec;
  static deserializeBinaryFromReader(message: ModelClassSpec, reader: jspb.BinaryReader): ModelClassSpec;
}

export namespace ModelClassSpec {
  export type AsObject = {
    owner: string,
    dataproductversionname: string,
    version: string,
    description: string,
    task: string,
    subtask: string,
    objective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    entitiesList: Array<EntityRef.AsObject>,
    data?: ModelClassDataSpec.AsObject,
    training?: ModelClassTrainingSpec.AsObject,
    serving?: ModelClassServingSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    reportschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    fast: boolean,
    paused: boolean,
    registered: boolean,
  }
}

export class ModelClassStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelClassStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ModelClassStatus;

  getBestfe(): FeatureEngineeringSpec | undefined;
  setBestfe(value?: FeatureEngineeringSpec): ModelClassStatus;
  hasBestfe(): boolean;
  clearBestfe(): ModelClassStatus;

  getTrainingschedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setTrainingschedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasTrainingschedulestatus(): boolean;
  clearTrainingschedulestatus(): ModelClassStatus;

  getPredictionscedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setPredictionscedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasPredictionscedulestatus(): boolean;
  clearPredictionscedulestatus(): ModelClassStatus;

  getMonitoringscedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setMonitoringscedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasMonitoringscedulestatus(): boolean;
  clearMonitoringscedulestatus(): ModelClassStatus;

  getReportscedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setReportscedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasReportscedulestatus(): boolean;
  clearReportscedulestatus(): ModelClassStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): ModelClassStatus;

  getRetiredList(): Array<string>;
  setRetiredList(value: Array<string>): ModelClassStatus;
  clearRetiredList(): ModelClassStatus;
  addRetired(value: string, index?: number): ModelClassStatus;

  getPredictorname(): string;
  setPredictorname(value: string): ModelClassStatus;

  getDataappname(): string;
  setDataappname(value: string): ModelClassStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelClassStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelClassStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelClassStatus;

  getLastrunat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrunat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassStatus;
  hasLastrunat(): boolean;
  clearLastrunat(): ModelClassStatus;

  getLastrunname(): string;
  setLastrunname(value: string): ModelClassStatus;

  getLastpredictionat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastpredictionat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassStatus;
  hasLastpredictionat(): boolean;
  clearLastpredictionat(): ModelClassStatus;

  getLastpredictionname(): string;
  setLastpredictionname(value: string): ModelClassStatus;

  getPredictionscount(): number;
  setPredictionscount(value: number): ModelClassStatus;

  getRunscount(): number;
  setRunscount(value: number): ModelClassStatus;

  getModelscount(): number;
  setModelscount(value: number): ModelClassStatus;

  getLive(): boolean;
  setLive(value: boolean): ModelClassStatus;

  getPredictorscount(): number;
  setPredictorscount(value: number): ModelClassStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelClassStatus;
  clearConditionsList(): ModelClassStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassStatus): ModelClassStatus.AsObject;
  static serializeBinaryToWriter(message: ModelClassStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassStatus;
  static deserializeBinaryFromReader(message: ModelClassStatus, reader: jspb.BinaryReader): ModelClassStatus;
}

export namespace ModelClassStatus {
  export type AsObject = {
    observedgeneration: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestfe?: FeatureEngineeringSpec.AsObject,
    trainingschedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    predictionscedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    monitoringscedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    reportscedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    bestmodelscore: number,
    retiredList: Array<string>,
    predictorname: string,
    dataappname: string,
    triggeredby: string,
    failurereason: string,
    failuremessage: string,
    lastrunat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastrunname: string,
    lastpredictionat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastpredictionname: string,
    predictionscount: number,
    runscount: number,
    modelscount: number,
    live: boolean,
    predictorscount: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelClassTrainingSpec extends jspb.Message {
  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelClassTrainingSpec;
  hasLabref(): boolean;
  clearLabref(): ModelClassTrainingSpec;

  getStudytemplatename(): string;
  setStudytemplatename(value: string): ModelClassTrainingSpec;

  getModelunittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setModelunittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelClassTrainingSpec;
  hasModelunittests(): boolean;
  clearModelunittests(): ModelClassTrainingSpec;

  getTrainingschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setTrainingschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassTrainingSpec;
  hasTrainingschedule(): boolean;
  clearTrainingschedule(): ModelClassTrainingSpec;

  getModelimage(): ModelImageSpec | undefined;
  setModelimage(value?: ModelImageSpec): ModelClassTrainingSpec;
  hasModelimage(): boolean;
  clearModelimage(): ModelClassTrainingSpec;

  getSearchspace(): AlgorithmSearchSpaceSpec | undefined;
  setSearchspace(value?: AlgorithmSearchSpaceSpec): ModelClassTrainingSpec;
  hasSearchspace(): boolean;
  clearSearchspace(): ModelClassTrainingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ModelClassTrainingSpec;
  hasResources(): boolean;
  clearResources(): ModelClassTrainingSpec;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelClassTrainingSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelClassTrainingSpec;

  getMaxtime(): number;
  setMaxtime(value: number): ModelClassTrainingSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): ModelClassTrainingSpec;

  getTrainers(): number;
  setTrainers(value: number): ModelClassTrainingSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelClassTrainingSpec;

  getExplained(): boolean;
  setExplained(value: boolean): ModelClassTrainingSpec;

  getPresqlList(): Array<string>;
  setPresqlList(value: Array<string>): ModelClassTrainingSpec;
  clearPresqlList(): ModelClassTrainingSpec;
  addPresql(value: string, index?: number): ModelClassTrainingSpec;

  getPostsqlList(): Array<string>;
  setPostsqlList(value: Array<string>): ModelClassTrainingSpec;
  clearPostsqlList(): ModelClassTrainingSpec;
  addPostsql(value: string, index?: number): ModelClassTrainingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassTrainingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassTrainingSpec): ModelClassTrainingSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassTrainingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassTrainingSpec;
  static deserializeBinaryFromReader(message: ModelClassTrainingSpec, reader: jspb.BinaryReader): ModelClassTrainingSpec;
}

export namespace ModelClassTrainingSpec {
  export type AsObject = {
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    studytemplatename: string,
    modelunittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    trainingschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    modelimage?: ModelImageSpec.AsObject,
    searchspace?: AlgorithmSearchSpaceSpec.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    triggeredby: string,
    paused: boolean,
    maxtime: number,
    maxmodels: number,
    trainers: number,
    aborted: boolean,
    explained: boolean,
    presqlList: Array<string>,
    postsqlList: Array<string>,
  }
}

export class ModelGroupByStatus extends jspb.Message {
  getModelsuri(): string;
  setModelsuri(value: string): ModelGroupByStatus;

  getProfilesuri(): string;
  setProfilesuri(value: string): ModelGroupByStatus;

  getForecastsuri(): string;
  setForecastsuri(value: string): ModelGroupByStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): ModelGroupByStatus;
  clearWorkerresultsList(): ModelGroupByStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelGroupByStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelGroupByStatus): ModelGroupByStatus.AsObject;
  static serializeBinaryToWriter(message: ModelGroupByStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelGroupByStatus;
  static deserializeBinaryFromReader(message: ModelGroupByStatus, reader: jspb.BinaryReader): ModelGroupByStatus;
}

export namespace ModelGroupByStatus {
  export type AsObject = {
    modelsuri: string,
    profilesuri: string,
    forecastsuri: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
  }
}

export class ModelImageSpec extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): ModelImageSpec;

  getImagename(): string;
  setImagename(value: string): ModelImageSpec;

  getRegistryconnectionname(): string;
  setRegistryconnectionname(value: string): ModelImageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelImageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelImageSpec): ModelImageSpec.AsObject;
  static serializeBinaryToWriter(message: ModelImageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelImageSpec;
  static deserializeBinaryFromReader(message: ModelImageSpec, reader: jspb.BinaryReader): ModelImageSpec;
}

export namespace ModelImageSpec {
  export type AsObject = {
    exist: boolean,
    imagename: string,
    registryconnectionname: string,
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

export class ModelResult extends jspb.Message {
  getName(): string;
  setName(value: string): ModelResult;

  getAlg(): string;
  setAlg(value: string): ModelResult;

  getScore(): number;
  setScore(value: number): ModelResult;

  getError(): boolean;
  setError(value: boolean): ModelResult;

  getTrialid(): number;
  setTrialid(value: number): ModelResult;

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
    trialid: number,
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

  getSubtask(): string;
  setSubtask(value: string): ModelSpec;

  getObjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): ModelSpec;
  hasObjective(): boolean;
  clearObjective(): ModelSpec;

  getFeatureengineering(): FeatureEngineeringSpec | undefined;
  setFeatureengineering(value?: FeatureEngineeringSpec): ModelSpec;
  hasFeatureengineering(): boolean;
  clearFeatureengineering(): ModelSpec;

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

  getNlpestimator(): NLPEstimatorSpec | undefined;
  setNlpestimator(value?: NLPEstimatorSpec): ModelSpec;
  hasNlpestimator(): boolean;
  clearNlpestimator(): ModelSpec;

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

  getPackaged(): boolean;
  setPackaged(value: boolean): ModelSpec;

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

  getPredict(): boolean;
  setPredict(value: boolean): ModelSpec;

  getTuned(): boolean;
  setTuned(value: boolean): ModelSpec;

  getExplained(): boolean;
  setExplained(value: boolean): ModelSpec;

  getCodegenerated(): boolean;
  setCodegenerated(value: boolean): ModelSpec;

  getBaseline(): boolean;
  setBaseline(value: boolean): ModelSpec;

  getGendriftdetector(): boolean;
  setGendriftdetector(value: boolean): ModelSpec;

  getFast(): boolean;
  setFast(value: boolean): ModelSpec;

  getUnittested(): boolean;
  setUnittested(value: boolean): ModelSpec;

  getFeedbackdatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setFeedbackdatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelSpec;
  hasFeedbackdatasetref(): boolean;
  clearFeedbackdatasetref(): ModelSpec;

  getFlagged(): boolean;
  setFlagged(value: boolean): ModelSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelSpec;
  hasLocation(): boolean;
  clearLocation(): ModelSpec;

  getForecasting(): ForecasterSpec | undefined;
  setForecasting(value?: ForecasterSpec): ModelSpec;
  hasForecasting(): boolean;
  clearForecasting(): ModelSpec;

  getCompilation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): ModelSpec;
  hasCompilation(): boolean;
  clearCompilation(): ModelSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): ModelSpec;

  getEstimatortype(): string;
  setEstimatortype(value: string): ModelSpec;

  getTtl(): number;
  setTtl(value: number): ModelSpec;

  getModelclass(): string;
  setModelclass(value: string): ModelSpec;

  getTrialid(): number;
  setTrialid(value: number): ModelSpec;

  getGovernance(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceSpec | undefined;
  setGovernance(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceSpec): ModelSpec;
  hasGovernance(): boolean;
  clearGovernance(): ModelSpec;

  getInterpretability(): InterpretabilitySpec | undefined;
  setInterpretability(value?: InterpretabilitySpec): ModelSpec;
  hasInterpretability(): boolean;
  clearInterpretability(): ModelSpec;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelSpec;
  hasUnittests(): boolean;
  clearUnittests(): ModelSpec;

  getFeedbacktests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setFeedbacktests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelSpec;
  hasFeedbacktests(): boolean;
  clearFeedbacktests(): ModelSpec;

  getPartitionlocations(): PartitionModelLocationsSpec | undefined;
  setPartitionlocations(value?: PartitionModelLocationsSpec): ModelSpec;
  hasPartitionlocations(): boolean;
  clearPartitionlocations(): ModelSpec;

  getModelclassname(): string;
  setModelclassname(value: string): ModelSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): ModelSpec;

  getRole(): string;
  setRole(value: string): ModelSpec;

  getReleased(): boolean;
  setReleased(value: boolean): ModelSpec;

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
    subtask: string,
    objective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    featureengineering?: FeatureEngineeringSpec.AsObject,
    estimator?: ClassicalEstimatorSpec.AsObject,
    dnn?: DeepEstimatorSpec.AsObject,
    chatbot?: ChatbotEstimatorSpec.AsObject,
    nlpestimator?: NLPEstimatorSpec.AsObject,
    ensemble?: EnsembleSpec.AsObject,
    training?: TrainingSpec.AsObject,
    tested: boolean,
    aborted: boolean,
    packaged: boolean,
    published: boolean,
    pushed: boolean,
    reported: boolean,
    paused: boolean,
    profiled: boolean,
    archived: boolean,
    forecasted: boolean,
    predict: boolean,
    tuned: boolean,
    explained: boolean,
    codegenerated: boolean,
    baseline: boolean,
    gendriftdetector: boolean,
    fast: boolean,
    unittested: boolean,
    feedbackdatasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    flagged: boolean,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    forecasting?: ForecasterSpec.AsObject,
    compilation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    activedeadlineseconds: number,
    estimatortype: string,
    ttl: number,
    modelclass: string,
    trialid: number,
    governance?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceSpec.AsObject,
    interpretability?: InterpretabilitySpec.AsObject,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    feedbacktests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    partitionlocations?: PartitionModelLocationsSpec.AsObject,
    modelclassname: string,
    modelclassrunname: string,
    role: string,
    released: boolean,
  }
}

export class ModelStageStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): ModelStageStatus;

  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStageStatus;
  hasStartedat(): boolean;
  clearStartedat(): ModelStageStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStageStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ModelStageStatus;

  getUnittestsresult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestsresult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): ModelStageStatus;
  hasUnittestsresult(): boolean;
  clearUnittestsresult(): ModelStageStatus;

  getError(): string;
  setError(value: string): ModelStageStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStageStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStageStatus): ModelStageStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStageStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStageStatus;
  static deserializeBinaryFromReader(message: ModelStageStatus, reader: jspb.BinaryReader): ModelStageStatus;
}

export namespace ModelStageStatus {
  export type AsObject = {
    phase: string,
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    unittestsresult?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    error: string,
  }
}

export class ModelStatus extends jspb.Message {
  getTrainingstartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingstartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainingstartedat(): boolean;
  clearTrainingstartedat(): ModelStatus;

  getTrainingcompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingcompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainingcompletedat(): boolean;
  clearTrainingcompletedat(): ModelStatus;

  getTestingstartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingstartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestingstartedat(): boolean;
  clearTestingstartedat(): ModelStatus;

  getTestingcompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingcompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestingcompletedat(): boolean;
  clearTestingcompletedat(): ModelStatus;

  getTuningstartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTuningstartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTuningstartedat(): boolean;
  clearTuningstartedat(): ModelStatus;

  getTuningcompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTuningcompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTuningcompletedat(): boolean;
  clearTuningcompletedat(): ModelStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ModelStatus;

  getCvscore(): number;
  setCvscore(value: number): ModelStatus;

  getTrainingscore(): number;
  setTrainingscore(value: number): ModelStatus;

  getTestscore(): number;
  setTestscore(value: number): ModelStatus;

  getCost(): number;
  setCost(value: number): ModelStatus;

  getBest(): boolean;
  setBest(value: boolean): ModelStatus;

  getCvList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setCvList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearCvList(): ModelStatus;
  addCv(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTrainList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTrainList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTrainList(): ModelStatus;
  addTrain(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTestList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTestList(): ModelStatus;
  addTest(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTuneList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTuneList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTuneList(): ModelStatus;
  addTune(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getFeedbackList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setFeedbackList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearFeedbackList(): ModelStatus;
  addFeedback(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getLastfeedbackdatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLastfeedbackdatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelStatus;
  hasLastfeedbackdatasetref(): boolean;
  clearLastfeedbackdatasetref(): ModelStatus;

  getPhase(): string;
  setPhase(value: string): ModelStatus;

  getReportname(): string;
  setReportname(value: string): ModelStatus;

  getReporturi(): string;
  setReporturi(value: string): ModelStatus;

  getManifesturi(): string;
  setManifesturi(value: string): ModelStatus;

  getTrainweightsuri(): string;
  setTrainweightsuri(value: string): ModelStatus;

  getTestweightsuri(): string;
  setTestweightsuri(value: string): ModelStatus;

  getFullweightsuri(): string;
  setFullweightsuri(value: string): ModelStatus;

  getDriftdetectoruri(): string;
  setDriftdetectoruri(value: string): ModelStatus;

  getTrainlabelencoderuri(): string;
  setTrainlabelencoderuri(value: string): ModelStatus;

  getTestlabelencoderuri(): string;
  setTestlabelencoderuri(value: string): ModelStatus;

  getFulllabelencoderuri(): string;
  setFulllabelencoderuri(value: string): ModelStatus;

  getLogsuri(): string;
  setLogsuri(value: string): ModelStatus;

  getProfileuri(): string;
  setProfileuri(value: string): ModelStatus;

  getMisclassificationuri(): string;
  setMisclassificationuri(value: string): ModelStatus;

  getTaruri(): string;
  setTaruri(value: string): ModelStatus;

  getAppuri(): string;
  setAppuri(value: string): ModelStatus;

  getImagename(): string;
  setImagename(value: string): ModelStatus;

  getImpurityimportanceList(): Array<FeatureImportance>;
  setImpurityimportanceList(value: Array<FeatureImportance>): ModelStatus;
  clearImpurityimportanceList(): ModelStatus;
  addImpurityimportance(value?: FeatureImportance, index?: number): FeatureImportance;

  getPermutationimportanceList(): Array<FeatureImportance>;
  setPermutationimportanceList(value: Array<FeatureImportance>): ModelStatus;
  clearPermutationimportanceList(): ModelStatus;
  addPermutationimportance(value?: FeatureImportance, index?: number): FeatureImportance;

  getForecasturi(): string;
  setForecasturi(value: string): ModelStatus;

  getRuntime(): RuntimeStatus | undefined;
  setRuntime(value?: RuntimeStatus): ModelStatus;
  hasRuntime(): boolean;
  clearRuntime(): ModelStatus;

  getTraindataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTraindataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasTraindataset(): boolean;
  clearTraindataset(): ModelStatus;

  getTestdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTestdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasTestdataset(): boolean;
  clearTestdataset(): ModelStatus;

  getValidationdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setValidationdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasValidationdataset(): boolean;
  clearValidationdataset(): ModelStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelStatus;

  getTrainingrows(): number;
  setTrainingrows(value: number): ModelStatus;

  getTestingrows(): number;
  setTestingrows(value: number): ModelStatus;

  getValidationrows(): number;
  setValidationrows(value: number): ModelStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelStatus;

  getProgress(): number;
  setProgress(value: number): ModelStatus;

  getSizeinbytes(): number;
  setSizeinbytes(value: number): ModelStatus;

  getLatency(): number;
  setLatency(value: number): ModelStatus;

  getUrl(): string;
  setUrl(value: string): ModelStatus;

  getServing(): ServingStatus | undefined;
  setServing(value?: ServingStatus): ModelStatus;
  hasServing(): boolean;
  clearServing(): ModelStatus;

  getReleasedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setReleasedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasReleasedat(): boolean;
  clearReleasedat(): ModelStatus;

  getPredictedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setPredictedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasPredictedat(): boolean;
  clearPredictedat(): ModelStatus;

  getTarfilehash(): string;
  setTarfilehash(value: string): ModelStatus;

  getImagehash(): string;
  setImagehash(value: string): ModelStatus;

  getTrainingdatahash(): DataHashes | undefined;
  setTrainingdatahash(value?: DataHashes): ModelStatus;
  hasTrainingdatahash(): boolean;
  clearTrainingdatahash(): ModelStatus;

  getTrainingresources(): ResourceConsumption | undefined;
  setTrainingresources(value?: ResourceConsumption): ModelStatus;
  hasTrainingresources(): boolean;
  clearTrainingresources(): ModelStatus;

  getTestingresources(): ResourceConsumption | undefined;
  setTestingresources(value?: ResourceConsumption): ModelStatus;
  hasTestingresources(): boolean;
  clearTestingresources(): ModelStatus;

  getTrainedby(): string;
  setTrainedby(value: string): ModelStatus;

  getTeam(): string;
  setTeam(value: string): ModelStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ModelStatus;
  hasLogs(): boolean;
  clearLogs(): ModelStatus;

  getRoccurve(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve | undefined;
  setRoccurve(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve): ModelStatus;
  hasRoccurve(): boolean;
  clearRoccurve(): ModelStatus;

  getPrcurve(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve | undefined;
  setPrcurve(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve): ModelStatus;
  hasPrcurve(): boolean;
  clearPrcurve(): ModelStatus;

  getTrainconfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTrainconfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): ModelStatus;
  hasTrainconfusionmatrix(): boolean;
  clearTrainconfusionmatrix(): ModelStatus;

  getTestconfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTestconfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): ModelStatus;
  hasTestconfusionmatrix(): boolean;
  clearTestconfusionmatrix(): ModelStatus;

  getCorrelationswithtargetList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>;
  setCorrelationswithtargetList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>): ModelStatus;
  clearCorrelationswithtargetList(): ModelStatus;
  addCorrelationswithtarget(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation;

  getTopcorrelationsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>;
  setTopcorrelationsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>): ModelStatus;
  clearTopcorrelationsList(): ModelStatus;
  addTopcorrelations(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ModelStatus;

  getGovernance(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceStatus | undefined;
  setGovernance(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceStatus): ModelStatus;
  hasGovernance(): boolean;
  clearGovernance(): ModelStatus;

  getInterpretability(): InterpretabilityStatus | undefined;
  setInterpretability(value?: InterpretabilityStatus): ModelStatus;
  hasInterpretability(): boolean;
  clearInterpretability(): ModelStatus;

  getImages(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images | undefined;
  setImages(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images): ModelStatus;
  hasImages(): boolean;
  clearImages(): ModelStatus;

  getUnittestsresult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestsresult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): ModelStatus;
  hasUnittestsresult(): boolean;
  clearUnittestsresult(): ModelStatus;

  getFeedbacktestsresult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setFeedbacktestsresult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): ModelStatus;
  hasFeedbacktestsresult(): boolean;
  clearFeedbacktestsresult(): ModelStatus;

  getGroupby(): ModelGroupByStatus | undefined;
  setGroupby(value?: ModelGroupByStatus): ModelStatus;
  hasGroupby(): boolean;
  clearGroupby(): ModelStatus;

  getStagesList(): Array<ModelStageStatus>;
  setStagesList(value: Array<ModelStageStatus>): ModelStatus;
  clearStagesList(): ModelStatus;
  addStages(value?: ModelStageStatus, index?: number): ModelStageStatus;

  getUsage(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption | undefined;
  setUsage(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption): ModelStatus;
  hasUsage(): boolean;
  clearUsage(): ModelStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelStatus;
  clearConditionsList(): ModelStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatus): ModelStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatus;
  static deserializeBinaryFromReader(message: ModelStatus, reader: jspb.BinaryReader): ModelStatus;
}

export namespace ModelStatus {
  export type AsObject = {
    trainingstartedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingcompletedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingstartedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingcompletedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    tuningstartedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    tuningcompletedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    cvscore: number,
    trainingscore: number,
    testscore: number,
    cost: number,
    best: boolean,
    cvList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    trainList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    tuneList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    feedbackList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    lastfeedbackdatasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    phase: string,
    reportname: string,
    reporturi: string,
    manifesturi: string,
    trainweightsuri: string,
    testweightsuri: string,
    fullweightsuri: string,
    driftdetectoruri: string,
    trainlabelencoderuri: string,
    testlabelencoderuri: string,
    fulllabelencoderuri: string,
    logsuri: string,
    profileuri: string,
    misclassificationuri: string,
    taruri: string,
    appuri: string,
    imagename: string,
    impurityimportanceList: Array<FeatureImportance.AsObject>,
    permutationimportanceList: Array<FeatureImportance.AsObject>,
    forecasturi: string,
    runtime?: RuntimeStatus.AsObject,
    traindataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    testdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    validationdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    observedgeneration: number,
    trainingrows: number,
    testingrows: number,
    validationrows: number,
    failurereason: string,
    failuremessage: string,
    progress: number,
    sizeinbytes: number,
    latency: number,
    url: string,
    serving?: ServingStatus.AsObject,
    releasedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    predictedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    tarfilehash: string,
    imagehash: string,
    trainingdatahash?: DataHashes.AsObject,
    trainingresources?: ResourceConsumption.AsObject,
    testingresources?: ResourceConsumption.AsObject,
    trainedby: string,
    team: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    roccurve?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve.AsObject,
    prcurve?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve.AsObject,
    trainconfusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    testconfusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    correlationswithtargetList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation.AsObject>,
    topcorrelationsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation.AsObject>,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    governance?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceStatus.AsObject,
    interpretability?: InterpretabilityStatus.AsObject,
    images?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images.AsObject,
    unittestsresult?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    feedbacktestsresult?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    groupby?: ModelGroupByStatus.AsObject,
    stagesList: Array<ModelStageStatus.AsObject>,
    usage?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelTestSuite extends jspb.Message {
  getBaselinemodelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setBaselinemodelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelTestSuite;
  hasBaselinemodelref(): boolean;
  clearBaselinemodelref(): ModelTestSuite;

  getDatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelTestSuite;
  hasDatasetref(): boolean;
  clearDatasetref(): ModelTestSuite;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelTestSuite;
  hasUnittests(): boolean;
  clearUnittests(): ModelTestSuite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTestSuite.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTestSuite): ModelTestSuite.AsObject;
  static serializeBinaryToWriter(message: ModelTestSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTestSuite;
  static deserializeBinaryFromReader(message: ModelTestSuite, reader: jspb.BinaryReader): ModelTestSuite;
}

export namespace ModelTestSuite {
  export type AsObject = {
    baselinemodelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    datasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
  }
}

export class NLPEstimatorSpec extends jspb.Message {
  getBase(): string;
  setBase(value: string): NLPEstimatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NLPEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NLPEstimatorSpec): NLPEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: NLPEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NLPEstimatorSpec;
  static deserializeBinaryFromReader(message: NLPEstimatorSpec, reader: jspb.BinaryReader): NLPEstimatorSpec;
}

export namespace NLPEstimatorSpec {
  export type AsObject = {
    base: string,
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

export class PartitionModelLocationsSpec extends jspb.Message {
  getPartitionfolder(): string;
  setPartitionfolder(value: string): PartitionModelLocationsSpec;

  getPartitionprofilefolder(): string;
  setPartitionprofilefolder(value: string): PartitionModelLocationsSpec;

  getPartitionreportfile(): string;
  setPartitionreportfile(value: string): PartitionModelLocationsSpec;

  getPartitionmodelfolder(): string;
  setPartitionmodelfolder(value: string): PartitionModelLocationsSpec;

  getPartitionmodelfile(): string;
  setPartitionmodelfile(value: string): PartitionModelLocationsSpec;

  getPartitionforecastfile(): string;
  setPartitionforecastfile(value: string): PartitionModelLocationsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionModelLocationsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionModelLocationsSpec): PartitionModelLocationsSpec.AsObject;
  static serializeBinaryToWriter(message: PartitionModelLocationsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionModelLocationsSpec;
  static deserializeBinaryFromReader(message: PartitionModelLocationsSpec, reader: jspb.BinaryReader): PartitionModelLocationsSpec;
}

export namespace PartitionModelLocationsSpec {
  export type AsObject = {
    partitionfolder: string,
    partitionprofilefolder: string,
    partitionreportfile: string,
    partitionmodelfolder: string,
    partitionmodelfile: string,
    partitionforecastfile: string,
  }
}

export class PercentilePrunerOptions extends jspb.Message {
  getPercentile(): number;
  setPercentile(value: number): PercentilePrunerOptions;

  getStartuptrials(): number;
  setStartuptrials(value: number): PercentilePrunerOptions;

  getWarmupsteps(): number;
  setWarmupsteps(value: number): PercentilePrunerOptions;

  getIntervaltrials(): number;
  setIntervaltrials(value: number): PercentilePrunerOptions;

  getMintrials(): number;
  setMintrials(value: number): PercentilePrunerOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentilePrunerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PercentilePrunerOptions): PercentilePrunerOptions.AsObject;
  static serializeBinaryToWriter(message: PercentilePrunerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentilePrunerOptions;
  static deserializeBinaryFromReader(message: PercentilePrunerOptions, reader: jspb.BinaryReader): PercentilePrunerOptions;
}

export namespace PercentilePrunerOptions {
  export type AsObject = {
    percentile: number,
    startuptrials: number,
    warmupsteps: number,
    intervaltrials: number,
    mintrials: number,
  }
}

export class PrunerSpec extends jspb.Message {
  getType(): string;
  setType(value: string): PrunerSpec;

  getMedian(): MedianPrunerOptions | undefined;
  setMedian(value?: MedianPrunerOptions): PrunerSpec;
  hasMedian(): boolean;
  clearMedian(): PrunerSpec;

  getPercentile(): PercentilePrunerOptions | undefined;
  setPercentile(value?: PercentilePrunerOptions): PrunerSpec;
  hasPercentile(): boolean;
  clearPercentile(): PrunerSpec;

  getSuccessivehalving(): SuccessiveHalvingOptions | undefined;
  setSuccessivehalving(value?: SuccessiveHalvingOptions): PrunerSpec;
  hasSuccessivehalving(): boolean;
  clearSuccessivehalving(): PrunerSpec;

  getHyperband(): HyperbandOptions | undefined;
  setHyperband(value?: HyperbandOptions): PrunerSpec;
  hasHyperband(): boolean;
  clearHyperband(): PrunerSpec;

  getThreshold(): ThresholdPrunerOptions | undefined;
  setThreshold(value?: ThresholdPrunerOptions): PrunerSpec;
  hasThreshold(): boolean;
  clearThreshold(): PrunerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrunerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PrunerSpec): PrunerSpec.AsObject;
  static serializeBinaryToWriter(message: PrunerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrunerSpec;
  static deserializeBinaryFromReader(message: PrunerSpec, reader: jspb.BinaryReader): PrunerSpec;
}

export namespace PrunerSpec {
  export type AsObject = {
    type: string,
    median?: MedianPrunerOptions.AsObject,
    percentile?: PercentilePrunerOptions.AsObject,
    successivehalving?: SuccessiveHalvingOptions.AsObject,
    hyperband?: HyperbandOptions.AsObject,
    threshold?: ThresholdPrunerOptions.AsObject,
  }
}

export class RegressionForecasterSpec extends jspb.Message {
  getEnsemble(): boolean;
  setEnsemble(value: boolean): RegressionForecasterSpec;

  getImputation(): string;
  setImputation(value: string): RegressionForecasterSpec;

  getEncoding(): string;
  setEncoding(value: string): RegressionForecasterSpec;

  getScaling(): string;
  setScaling(value: string): RegressionForecasterSpec;

  getDate(): boolean;
  setDate(value: boolean): RegressionForecasterSpec;

  getWindowsList(): Array<number>;
  setWindowsList(value: Array<number>): RegressionForecasterSpec;
  clearWindowsList(): RegressionForecasterSpec;
  addWindows(value: number, index?: number): RegressionForecasterSpec;

  getLagsList(): Array<number>;
  setLagsList(value: Array<number>): RegressionForecasterSpec;
  clearLagsList(): RegressionForecasterSpec;
  addLags(value: number, index?: number): RegressionForecasterSpec;

  getFunctionsList(): Array<string>;
  setFunctionsList(value: Array<string>): RegressionForecasterSpec;
  clearFunctionsList(): RegressionForecasterSpec;
  addFunctions(value: string, index?: number): RegressionForecasterSpec;

  getEma(): boolean;
  setEma(value: boolean): RegressionForecasterSpec;

  getLog(): boolean;
  setLog(value: boolean): RegressionForecasterSpec;

  getReduction(): string;
  setReduction(value: string): RegressionForecasterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegressionForecasterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RegressionForecasterSpec): RegressionForecasterSpec.AsObject;
  static serializeBinaryToWriter(message: RegressionForecasterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegressionForecasterSpec;
  static deserializeBinaryFromReader(message: RegressionForecasterSpec, reader: jspb.BinaryReader): RegressionForecasterSpec;
}

export namespace RegressionForecasterSpec {
  export type AsObject = {
    ensemble: boolean,
    imputation: string,
    encoding: string,
    scaling: string,
    date: boolean,
    windowsList: Array<number>,
    lagsList: Array<number>,
    functionsList: Array<string>,
    ema: boolean,
    log: boolean,
    reduction: string,
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

export class ReportGroupByStatus extends jspb.Message {
  getReportsuri(): string;
  setReportsuri(value: string): ReportGroupByStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): ReportGroupByStatus;
  clearWorkerresultsList(): ReportGroupByStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportGroupByStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReportGroupByStatus): ReportGroupByStatus.AsObject;
  static serializeBinaryToWriter(message: ReportGroupByStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportGroupByStatus;
  static deserializeBinaryFromReader(message: ReportGroupByStatus, reader: jspb.BinaryReader): ReportGroupByStatus;
}

export namespace ReportGroupByStatus {
  export type AsObject = {
    reportsuri: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
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

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ReportSpec;
  hasLocation(): boolean;
  clearLocation(): ReportSpec;

  getReporttype(): string;
  setReporttype(value: string): ReportSpec;

  getFormat(): string;
  setFormat(value: string): ReportSpec;

  getNotifiername(): string;
  setNotifiername(value: string): ReportSpec;

  getOwner(): string;
  setOwner(value: string): ReportSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ReportSpec;
  hasResources(): boolean;
  clearResources(): ReportSpec;

  getTimeout(): number;
  setTimeout(value: number): ReportSpec;

  getCustom(): CustomReportSpec | undefined;
  setCustom(value?: CustomReportSpec): ReportSpec;
  hasCustom(): boolean;
  clearCustom(): ReportSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReportSpec;
  hasLabref(): boolean;
  clearLabref(): ReportSpec;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): ReportSpec;
  clearKeyList(): ReportSpec;
  addKey(value: string, index?: number): ReportSpec;

  getModelclassname(): string;
  setModelclassname(value: string): ReportSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): ReportSpec;

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
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    reporttype: string,
    format: string,
    notifiername: string,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    timeout: number,
    custom?: CustomReportSpec.AsObject,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    keyList: Array<string>,
    modelclassname: string,
    modelclassrunname: string,
  }
}

export class ReportStatus extends jspb.Message {
  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ReportStatus;

  getPhase(): string;
  setPhase(value: string): ReportStatus;

  getUri(): string;
  setUri(value: string): ReportStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReportStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ReportStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ReportStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ReportStatus;
  hasLogs(): boolean;
  clearLogs(): ReportStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ReportStatus;

  getGroupby(): ReportGroupByStatus | undefined;
  setGroupby(value?: ReportGroupByStatus): ReportStatus;
  hasGroupby(): boolean;
  clearGroupby(): ReportStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ReportStatus;
  clearConditionsList(): ReportStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStatus): ReportStatus.AsObject;
  static serializeBinaryToWriter(message: ReportStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStatus;
  static deserializeBinaryFromReader(message: ReportStatus, reader: jspb.BinaryReader): ReportStatus;
}

export namespace ReportStatus {
  export type AsObject = {
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    uri: string,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    groupby?: ReportGroupByStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
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

export class RuntimeStatus extends jspb.Message {
  getPythonversion(): string;
  setPythonversion(value: string): RuntimeStatus;

  getPythoncmd(): string;
  setPythoncmd(value: string): RuntimeStatus;

  getOs(): string;
  setOs(value: string): RuntimeStatus;

  getPythonpackagesMap(): jspb.Map<string, string>;
  clearPythonpackagesMap(): RuntimeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeStatus): RuntimeStatus.AsObject;
  static serializeBinaryToWriter(message: RuntimeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeStatus;
  static deserializeBinaryFromReader(message: RuntimeStatus, reader: jspb.BinaryReader): RuntimeStatus;
}

export namespace RuntimeStatus {
  export type AsObject = {
    pythonversion: string,
    pythoncmd: string,
    os: string,
    pythonpackagesMap: Array<[string, string]>,
  }
}

export class SearchSpec extends jspb.Message {
  getSampler(): string;
  setSampler(value: string): SearchSpec;

  getPruner(): PrunerSpec | undefined;
  setPruner(value?: PrunerSpec): SearchSpec;
  hasPruner(): boolean;
  clearPruner(): SearchSpec;

  getMaxcost(): number;
  setMaxcost(value: number): SearchSpec;

  getMaxtime(): number;
  setMaxtime(value: number): SearchSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): SearchSpec;

  getMinbestscore(): number;
  setMinbestscore(value: number): SearchSpec;

  getTrainers(): number;
  setTrainers(value: number): SearchSpec;

  getTest(): number;
  setTest(value: number): SearchSpec;

  getRetaintop(): number;
  setRetaintop(value: number): SearchSpec;

  getRetainedfor(): number;
  setRetainedfor(value: number): SearchSpec;

  getSearchspace(): AlgorithmSearchSpaceSpec | undefined;
  setSearchspace(value?: AlgorithmSearchSpaceSpec): SearchSpec;
  hasSearchspace(): boolean;
  clearSearchspace(): SearchSpec;

  getEarlystop(): EarlyStopSpec | undefined;
  setEarlystop(value?: EarlyStopSpec): SearchSpec;
  hasEarlystop(): boolean;
  clearEarlystop(): SearchSpec;

  getObjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): SearchSpec;
  hasObjective(): boolean;
  clearObjective(): SearchSpec;

  getObjective2(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective2(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): SearchSpec;
  hasObjective2(): boolean;
  clearObjective2(): SearchSpec;

  getTune(): boolean;
  setTune(value: boolean): SearchSpec;

  getGoal(): string;
  setGoal(value: string): SearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSpec): SearchSpec.AsObject;
  static serializeBinaryToWriter(message: SearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSpec;
  static deserializeBinaryFromReader(message: SearchSpec, reader: jspb.BinaryReader): SearchSpec;
}

export namespace SearchSpec {
  export type AsObject = {
    sampler: string,
    pruner?: PrunerSpec.AsObject,
    maxcost: number,
    maxtime: number,
    maxmodels: number,
    minbestscore: number,
    trainers: number,
    test: number,
    retaintop: number,
    retainedfor: number,
    searchspace?: AlgorithmSearchSpaceSpec.AsObject,
    earlystop?: EarlyStopSpec.AsObject,
    objective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    objective2?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    tune: boolean,
    goal: string,
  }
}

export class SeasonalityPeriodSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): SeasonalityPeriodSpec;

  getAuto(): boolean;
  setAuto(value: boolean): SeasonalityPeriodSpec;

  getFourierorder(): number;
  setFourierorder(value: number): SeasonalityPeriodSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonalityPeriodSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonalityPeriodSpec): SeasonalityPeriodSpec.AsObject;
  static serializeBinaryToWriter(message: SeasonalityPeriodSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonalityPeriodSpec;
  static deserializeBinaryFromReader(message: SeasonalityPeriodSpec, reader: jspb.BinaryReader): SeasonalityPeriodSpec;
}

export namespace SeasonalityPeriodSpec {
  export type AsObject = {
    enabled: boolean,
    auto: boolean,
    fourierorder: number,
  }
}

export class SeasonalitySpec extends jspb.Message {
  getAuto(): boolean;
  setAuto(value: boolean): SeasonalitySpec;

  getYearly(): SeasonalityPeriodSpec | undefined;
  setYearly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasYearly(): boolean;
  clearYearly(): SeasonalitySpec;

  getQuarterly(): SeasonalityPeriodSpec | undefined;
  setQuarterly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasQuarterly(): boolean;
  clearQuarterly(): SeasonalitySpec;

  getMonthly(): SeasonalityPeriodSpec | undefined;
  setMonthly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasMonthly(): boolean;
  clearMonthly(): SeasonalitySpec;

  getWeekly(): SeasonalityPeriodSpec | undefined;
  setWeekly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasWeekly(): boolean;
  clearWeekly(): SeasonalitySpec;

  getDaily(): SeasonalityPeriodSpec | undefined;
  setDaily(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasDaily(): boolean;
  clearDaily(): SeasonalitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonalitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonalitySpec): SeasonalitySpec.AsObject;
  static serializeBinaryToWriter(message: SeasonalitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonalitySpec;
  static deserializeBinaryFromReader(message: SeasonalitySpec, reader: jspb.BinaryReader): SeasonalitySpec;
}

export namespace SeasonalitySpec {
  export type AsObject = {
    auto: boolean,
    yearly?: SeasonalityPeriodSpec.AsObject,
    quarterly?: SeasonalityPeriodSpec.AsObject,
    monthly?: SeasonalityPeriodSpec.AsObject,
    weekly?: SeasonalityPeriodSpec.AsObject,
    daily?: SeasonalityPeriodSpec.AsObject,
  }
}

export class SegmentSpec extends jspb.Message {
  getColumnname(): string;
  setColumnname(value: string): SegmentSpec;

  getOp(): string;
  setOp(value: string): SegmentSpec;

  getValue(): string;
  setValue(value: string): SegmentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SegmentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SegmentSpec): SegmentSpec.AsObject;
  static serializeBinaryToWriter(message: SegmentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SegmentSpec;
  static deserializeBinaryFromReader(message: SegmentSpec, reader: jspb.BinaryReader): SegmentSpec;
}

export namespace SegmentSpec {
  export type AsObject = {
    columnname: string,
    op: string,
    value: string,
  }
}

export class ServingEnvironment extends jspb.Message {
  getName(): string;
  setName(value: string): ServingEnvironment;

  getTests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setTests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ServingEnvironment;
  hasTests(): boolean;
  clearTests(): ServingEnvironment;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingEnvironment;
  hasServingsiteref(): boolean;
  clearServingsiteref(): ServingEnvironment;

  getAccess(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec | undefined;
  setAccess(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec): ServingEnvironment;
  hasAccess(): boolean;
  clearAccess(): ServingEnvironment;

  getReplicas(): number;
  setReplicas(value: number): ServingEnvironment;

  getOnline(): boolean;
  setOnline(value: boolean): ServingEnvironment;

  getDashboard(): boolean;
  setDashboard(value: boolean): ServingEnvironment;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ServingEnvironment;
  hasResources(): boolean;
  clearResources(): ServingEnvironment;

  getPresqlList(): Array<string>;
  setPresqlList(value: Array<string>): ServingEnvironment;
  clearPresqlList(): ServingEnvironment;
  addPresql(value: string, index?: number): ServingEnvironment;

  getPostsqlList(): Array<string>;
  setPostsqlList(value: Array<string>): ServingEnvironment;
  clearPostsqlList(): ServingEnvironment;
  addPostsql(value: string, index?: number): ServingEnvironment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingEnvironment.AsObject;
  static toObject(includeInstance: boolean, msg: ServingEnvironment): ServingEnvironment.AsObject;
  static serializeBinaryToWriter(message: ServingEnvironment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingEnvironment;
  static deserializeBinaryFromReader(message: ServingEnvironment, reader: jspb.BinaryReader): ServingEnvironment;
}

export namespace ServingEnvironment {
  export type AsObject = {
    name: string,
    tests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    access?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.AsObject,
    replicas: number,
    online: boolean,
    dashboard: boolean,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    presqlList: Array<string>,
    postsqlList: Array<string>,
  }
}

export class ServingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ServingSpec;

  getPredictorname(): string;
  setPredictorname(value: string): ServingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ServingSpec;
  hasResources(): boolean;
  clearResources(): ServingSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): ServingSpec;

  getOnline(): boolean;
  setOnline(value: boolean): ServingSpec;

  getDashboard(): boolean;
  setDashboard(value: boolean): ServingSpec;

  getAccess(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec | undefined;
  setAccess(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec): ServingSpec;
  hasAccess(): boolean;
  clearAccess(): ServingSpec;

  getReplicas(): number;
  setReplicas(value: number): ServingSpec;

  getPromotion(): string;
  setPromotion(value: string): ServingSpec;

  getApprovedby(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setApprovedby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingSpec;
  hasApprovedby(): boolean;
  clearApprovedby(): ServingSpec;

  getApprovedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setApprovedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ServingSpec;
  hasApprovedat(): boolean;
  clearApprovedat(): ServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSpec): ServingSpec.AsObject;
  static serializeBinaryToWriter(message: ServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSpec;
  static deserializeBinaryFromReader(message: ServingSpec, reader: jspb.BinaryReader): ServingSpec;
}

export namespace ServingSpec {
  export type AsObject = {
    enabled: boolean,
    predictorname: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    online: boolean,
    dashboard: boolean,
    access?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.AsObject,
    replicas: number,
    promotion: string,
    approvedby?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    approvedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class ServingStatus extends jspb.Message {
  getPredictorname(): string;
  setPredictorname(value: string): ServingStatus;

  getDataappname(): string;
  setDataappname(value: string): ServingStatus;

  getPredictoruri(): string;
  setPredictoruri(value: string): ServingStatus;

  getDashboarduri(): string;
  setDashboarduri(value: string): ServingStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServingStatus): ServingStatus.AsObject;
  static serializeBinaryToWriter(message: ServingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingStatus;
  static deserializeBinaryFromReader(message: ServingStatus, reader: jspb.BinaryReader): ServingStatus;
}

export namespace ServingStatus {
  export type AsObject = {
    predictorname: string,
    dataappname: string,
    predictoruri: string,
    dashboarduri: string,
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

export class StudyGroupByStatus extends jspb.Message {
  getStudiesuri(): string;
  setStudiesuri(value: string): StudyGroupByStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): StudyGroupByStatus;
  clearWorkerresultsList(): StudyGroupByStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyGroupByStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyGroupByStatus): StudyGroupByStatus.AsObject;
  static serializeBinaryToWriter(message: StudyGroupByStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyGroupByStatus;
  static deserializeBinaryFromReader(message: StudyGroupByStatus, reader: jspb.BinaryReader): StudyGroupByStatus;
}

export namespace StudyGroupByStatus {
  export type AsObject = {
    studiesuri: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
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

export class StudyPhaseStatus extends jspb.Message {
  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyPhaseStatus;
  hasStartedat(): boolean;
  clearStartedat(): StudyPhaseStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyPhaseStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): StudyPhaseStatus;

  getWaitingmodelscount(): number;
  setWaitingmodelscount(value: number): StudyPhaseStatus;

  getRunningmodelscount(): number;
  setRunningmodelscount(value: number): StudyPhaseStatus;

  getFailedmodelscount(): number;
  setFailedmodelscount(value: number): StudyPhaseStatus;

  getCompletedmodelscount(): number;
  setCompletedmodelscount(value: number): StudyPhaseStatus;

  getBestscore(): number;
  setBestscore(value: number): StudyPhaseStatus;

  getModelswithnoprogress(): number;
  setModelswithnoprogress(value: number): StudyPhaseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyPhaseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyPhaseStatus): StudyPhaseStatus.AsObject;
  static serializeBinaryToWriter(message: StudyPhaseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyPhaseStatus;
  static deserializeBinaryFromReader(message: StudyPhaseStatus, reader: jspb.BinaryReader): StudyPhaseStatus;
}

export namespace StudyPhaseStatus {
  export type AsObject = {
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    waitingmodelscount: number,
    runningmodelscount: number,
    failedmodelscount: number,
    completedmodelscount: number,
    bestscore: number,
    modelswithnoprogress: number,
  }
}

export class StudyScheduleSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): StudyScheduleSpec;

  getStartat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyScheduleSpec;
  hasStartat(): boolean;
  clearStartat(): StudyScheduleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyScheduleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudyScheduleSpec): StudyScheduleSpec.AsObject;
  static serializeBinaryToWriter(message: StudyScheduleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyScheduleSpec;
  static deserializeBinaryFromReader(message: StudyScheduleSpec, reader: jspb.BinaryReader): StudyScheduleSpec;
}

export namespace StudyScheduleSpec {
  export type AsObject = {
    enabled: boolean,
    startat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class StudySpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): StudySpec;

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

  getSubtask(): string;
  setSubtask(value: string): StudySpec;

  getFesearch(): FeatureEngineeringSearchSpec | undefined;
  setFesearch(value?: FeatureEngineeringSearchSpec): StudySpec;
  hasFesearch(): boolean;
  clearFesearch(): StudySpec;

  getImbalancehandler(): ImbalanceHandlingSpec | undefined;
  setImbalancehandler(value?: ImbalanceHandlingSpec): StudySpec;
  hasImbalancehandler(): boolean;
  clearImbalancehandler(): StudySpec;

  getBaseline(): BaselineSpec | undefined;
  setBaseline(value?: BaselineSpec): StudySpec;
  hasBaseline(): boolean;
  clearBaseline(): StudySpec;

  getSearch(): SearchSpec | undefined;
  setSearch(value?: SearchSpec): StudySpec;
  hasSearch(): boolean;
  clearSearch(): StudySpec;

  getEnsembles(): EnsemblesSpec | undefined;
  setEnsembles(value?: EnsemblesSpec): StudySpec;
  hasEnsembles(): boolean;
  clearEnsembles(): StudySpec;

  getTrainingtemplate(): TrainingSpec | undefined;
  setTrainingtemplate(value?: TrainingSpec): StudySpec;
  hasTrainingtemplate(): boolean;
  clearTrainingtemplate(): StudySpec;

  getFcttemplate(): ForecasterSpec | undefined;
  setFcttemplate(value?: ForecasterSpec): StudySpec;
  hasFcttemplate(): boolean;
  clearFcttemplate(): StudySpec;

  getSchedule(): StudyScheduleSpec | undefined;
  setSchedule(value?: StudyScheduleSpec): StudySpec;
  hasSchedule(): boolean;
  clearSchedule(): StudySpec;

  getInterpretability(): InterpretabilitySpec | undefined;
  setInterpretability(value?: InterpretabilitySpec): StudySpec;
  hasInterpretability(): boolean;
  clearInterpretability(): StudySpec;

  getDriftdetection(): DriftModelSpec | undefined;
  setDriftdetection(value?: DriftModelSpec): StudySpec;
  hasDriftdetection(): boolean;
  clearDriftdetection(): StudySpec;

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

  getModelexplained(): boolean;
  setModelexplained(value: boolean): StudySpec;

  getFast(): boolean;
  setFast(value: boolean): StudySpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudySpec;
  hasLocation(): boolean;
  clearLocation(): StudySpec;

  getOwner(): string;
  setOwner(value: string): StudySpec;

  getCompilation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): StudySpec;
  hasCompilation(): boolean;
  clearCompilation(): StudySpec;

  getTemplate(): boolean;
  setTemplate(value: boolean): StudySpec;

  getFlagged(): boolean;
  setFlagged(value: boolean): StudySpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): StudySpec;
  hasNotification(): boolean;
  clearNotification(): StudySpec;

  getModelimage(): ModelImageSpec | undefined;
  setModelimage(value?: ModelImageSpec): StudySpec;
  hasModelimage(): boolean;
  clearModelimage(): StudySpec;

  getGc(): GarbageCollectionSpec | undefined;
  setGc(value?: GarbageCollectionSpec): StudySpec;
  hasGc(): boolean;
  clearGc(): StudySpec;

  getTtl(): number;
  setTtl(value: number): StudySpec;

  getModelversion(): string;
  setModelversion(value: string): StudySpec;

  getTimeout(): number;
  setTimeout(value: number): StudySpec;

  getCodegenerated(): boolean;
  setCodegenerated(value: boolean): StudySpec;

  getUnitteststemplate(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnitteststemplate(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): StudySpec;
  hasUnitteststemplate(): boolean;
  clearUnitteststemplate(): StudySpec;

  getGrouplocations(): GroupSplitLocationsSpec | undefined;
  setGrouplocations(value?: GroupSplitLocationsSpec): StudySpec;
  hasGrouplocations(): boolean;
  clearGrouplocations(): StudySpec;

  getModelclassname(): string;
  setModelclassname(value: string): StudySpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): StudySpec;

  getServing(): ServingSpec | undefined;
  setServing(value?: ServingSpec): StudySpec;
  hasServing(): boolean;
  clearServing(): StudySpec;

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
    description: string,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    datasetname: string,
    task: string,
    subtask: string,
    fesearch?: FeatureEngineeringSearchSpec.AsObject,
    imbalancehandler?: ImbalanceHandlingSpec.AsObject,
    baseline?: BaselineSpec.AsObject,
    search?: SearchSpec.AsObject,
    ensembles?: EnsemblesSpec.AsObject,
    trainingtemplate?: TrainingSpec.AsObject,
    fcttemplate?: ForecasterSpec.AsObject,
    schedule?: StudyScheduleSpec.AsObject,
    interpretability?: InterpretabilitySpec.AsObject,
    driftdetection?: DriftModelSpec.AsObject,
    aborted: boolean,
    reported: boolean,
    paused: boolean,
    profiled: boolean,
    modelpublished: boolean,
    modelimagepushed: boolean,
    modelexplained: boolean,
    fast: boolean,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    owner: string,
    compilation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    template: boolean,
    flagged: boolean,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    modelimage?: ModelImageSpec.AsObject,
    gc?: GarbageCollectionSpec.AsObject,
    ttl: number,
    modelversion: string,
    timeout: number,
    codegenerated: boolean,
    unitteststemplate?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    grouplocations?: GroupSplitLocationsSpec.AsObject,
    modelclassname: string,
    modelclassrunname: string,
    serving?: ServingSpec.AsObject,
  }
}

export class StudyStatus extends jspb.Message {
  getModelscount(): number;
  setModelscount(value: number): StudyStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): StudyStatus;

  getBestmodel(): string;
  setBestmodel(value: string): StudyStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): StudyStatus;

  getProfileuri(): string;
  setProfileuri(value: string): StudyStatus;

  getReporturi(): string;
  setReporturi(value: string): StudyStatus;

  getReportname(): string;
  setReportname(value: string): StudyStatus;

  getPhase(): string;
  setPhase(value: string): StudyStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): StudyStatus;

  getTraindataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTraindataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasTraindataset(): boolean;
  clearTraindataset(): StudyStatus;

  getTestdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTestdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasTestdataset(): boolean;
  clearTestdataset(): StudyStatus;

  getValidationdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setValidationdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasValidationdataset(): boolean;
  clearValidationdataset(): StudyStatus;

  getLastmodelid(): number;
  setLastmodelid(value: number): StudyStatus;

  getFailurereason(): string;
  setFailurereason(value: string): StudyStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): StudyStatus;

  getTrainingrowscount(): number;
  setTrainingrowscount(value: number): StudyStatus;

  getTestingrowscount(): number;
  setTestingrowscount(value: number): StudyStatus;

  getValidationrowscount(): number;
  setValidationrowscount(value: number): StudyStatus;

  getProgress(): number;
  setProgress(value: number): StudyStatus;

  getTrainingdatahash(): DataHashes | undefined;
  setTrainingdatahash(value?: DataHashes): StudyStatus;
  hasTrainingdatahash(): boolean;
  clearTrainingdatahash(): StudyStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): StudyStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): StudyStatus;
  hasLogs(): boolean;
  clearLogs(): StudyStatus;

  getFeatureengineering(): StudyPhaseStatus | undefined;
  setFeatureengineering(value?: StudyPhaseStatus): StudyStatus;
  hasFeatureengineering(): boolean;
  clearFeatureengineering(): StudyStatus;

  getBaseline(): StudyPhaseStatus | undefined;
  setBaseline(value?: StudyPhaseStatus): StudyStatus;
  hasBaseline(): boolean;
  clearBaseline(): StudyStatus;

  getSearch(): StudyPhaseStatus | undefined;
  setSearch(value?: StudyPhaseStatus): StudyStatus;
  hasSearch(): boolean;
  clearSearch(): StudyStatus;

  getEnsemble(): StudyPhaseStatus | undefined;
  setEnsemble(value?: StudyPhaseStatus): StudyStatus;
  hasEnsemble(): boolean;
  clearEnsemble(): StudyStatus;

  getTest(): StudyPhaseStatus | undefined;
  setTest(value?: StudyPhaseStatus): StudyStatus;
  hasTest(): boolean;
  clearTest(): StudyStatus;

  getExplain(): StudyPhaseStatus | undefined;
  setExplain(value?: StudyPhaseStatus): StudyStatus;
  hasExplain(): boolean;
  clearExplain(): StudyStatus;

  getDriftdetection(): DriftDetectorStatus | undefined;
  setDriftdetection(value?: DriftDetectorStatus): StudyStatus;
  hasDriftdetection(): boolean;
  clearDriftdetection(): StudyStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): StudyStatus;

  getBestfe(): FeatureEngineeringSpec | undefined;
  setBestfe(value?: FeatureEngineeringSpec): StudyStatus;
  hasBestfe(): boolean;
  clearBestfe(): StudyStatus;

  getGc(): GarbageCollectionStatus | undefined;
  setGc(value?: GarbageCollectionStatus): StudyStatus;
  hasGc(): boolean;
  clearGc(): StudyStatus;

  getGroupby(): StudyGroupByStatus | undefined;
  setGroupby(value?: StudyGroupByStatus): StudyStatus;
  hasGroupby(): boolean;
  clearGroupby(): StudyStatus;

  getUsage(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption | undefined;
  setUsage(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption): StudyStatus;
  hasUsage(): boolean;
  clearUsage(): StudyStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): StudyStatus;
  clearConditionsList(): StudyStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyStatus): StudyStatus.AsObject;
  static serializeBinaryToWriter(message: StudyStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyStatus;
  static deserializeBinaryFromReader(message: StudyStatus, reader: jspb.BinaryReader): StudyStatus;
}

export namespace StudyStatus {
  export type AsObject = {
    modelscount: number,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestmodel: string,
    bestmodelscore: number,
    profileuri: string,
    reporturi: string,
    reportname: string,
    phase: string,
    observedgeneration: number,
    traindataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    testdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    validationdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    lastmodelid: number,
    failurereason: string,
    failuremessage: string,
    trainingrowscount: number,
    testingrowscount: number,
    validationrowscount: number,
    progress: number,
    trainingdatahash?: DataHashes.AsObject,
    triggeredby: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    featureengineering?: StudyPhaseStatus.AsObject,
    baseline?: StudyPhaseStatus.AsObject,
    search?: StudyPhaseStatus.AsObject,
    ensemble?: StudyPhaseStatus.AsObject,
    test?: StudyPhaseStatus.AsObject,
    explain?: StudyPhaseStatus.AsObject,
    driftdetection?: DriftDetectorStatus.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestfe?: FeatureEngineeringSpec.AsObject,
    gc?: GarbageCollectionStatus.AsObject,
    groupby?: StudyGroupByStatus.AsObject,
    usage?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class SuccessiveHalvingOptions extends jspb.Message {
  getMinresources(): number;
  setMinresources(value: number): SuccessiveHalvingOptions;

  getReductionfactor(): number;
  setReductionfactor(value: number): SuccessiveHalvingOptions;

  getMinearlystoppingrate(): number;
  setMinearlystoppingrate(value: number): SuccessiveHalvingOptions;

  getBootstrapcount(): number;
  setBootstrapcount(value: number): SuccessiveHalvingOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingOptions): SuccessiveHalvingOptions.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingOptions;
  static deserializeBinaryFromReader(message: SuccessiveHalvingOptions, reader: jspb.BinaryReader): SuccessiveHalvingOptions;
}

export namespace SuccessiveHalvingOptions {
  export type AsObject = {
    minresources: number,
    reductionfactor: number,
    minearlystoppingrate: number,
    bootstrapcount: number,
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

  getSvd(): boolean;
  setSvd(value: boolean): TextPipelineSpec;

  getMaxsvdcomponents(): number;
  setMaxsvdcomponents(value: number): TextPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TextPipelineSpec): TextPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: TextPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPipelineSpec;
  static deserializeBinaryFromReader(message: TextPipelineSpec, reader: jspb.BinaryReader): TextPipelineSpec;
}

export namespace TextPipelineSpec {
  export type AsObject = {
    encoder: string,
    tokenizer: string,
    stopwords: boolean,
    pos: boolean,
    lemma: boolean,
    stem: boolean,
    embedding: string,
    svd: boolean,
    maxsvdcomponents: number,
  }
}

export class ThresholdPrunerOptions extends jspb.Message {
  getLower(): number;
  setLower(value: number): ThresholdPrunerOptions;

  getUpper(): number;
  setUpper(value: number): ThresholdPrunerOptions;

  getWarmupsteps(): number;
  setWarmupsteps(value: number): ThresholdPrunerOptions;

  getIntervalsteps(): number;
  setIntervalsteps(value: number): ThresholdPrunerOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdPrunerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdPrunerOptions): ThresholdPrunerOptions.AsObject;
  static serializeBinaryToWriter(message: ThresholdPrunerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdPrunerOptions;
  static deserializeBinaryFromReader(message: ThresholdPrunerOptions, reader: jspb.BinaryReader): ThresholdPrunerOptions;
}

export namespace ThresholdPrunerOptions {
  export type AsObject = {
    lower: number,
    upper: number,
    warmupsteps: number,
    intervalsteps: number,
  }
}

export class TimeSeriesEvent extends jspb.Message {
  getName(): string;
  setName(value: string): TimeSeriesEvent;

  getMethod(): string;
  setMethod(value: string): TimeSeriesEvent;

  getHoliday(): boolean;
  setHoliday(value: boolean): TimeSeriesEvent;

  getCountry(): string;
  setCountry(value: string): TimeSeriesEvent;

  getPreevent(): number;
  setPreevent(value: number): TimeSeriesEvent;

  getPostevent(): number;
  setPostevent(value: number): TimeSeriesEvent;

  getTimepointsList(): Array<string>;
  setTimepointsList(value: Array<string>): TimeSeriesEvent;
  clearTimepointsList(): TimeSeriesEvent;
  addTimepoints(value: string, index?: number): TimeSeriesEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesEvent): TimeSeriesEvent.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesEvent;
  static deserializeBinaryFromReader(message: TimeSeriesEvent, reader: jspb.BinaryReader): TimeSeriesEvent;
}

export namespace TimeSeriesEvent {
  export type AsObject = {
    name: string,
    method: string,
    holiday: boolean,
    country: string,
    preevent: number,
    postevent: number,
    timepointsList: Array<string>,
  }
}

export class TrainingSpec extends jspb.Message {
  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TrainingSpec;
  hasLabref(): boolean;
  clearLabref(): TrainingSpec;

  getPriority(): string;
  setPriority(value: string): TrainingSpec;

  getCvtype(): string;
  setCvtype(value: string): TrainingSpec;

  getCv(): boolean;
  setCv(value: boolean): TrainingSpec;

  getFolds(): number;
  setFolds(value: number): TrainingSpec;

  getSplit(): DataSplitSpec | undefined;
  setSplit(value?: DataSplitSpec): TrainingSpec;
  hasSplit(): boolean;
  clearSplit(): TrainingSpec;

  getEvalmetricsList(): Array<string>;
  setEvalmetricsList(value: Array<string>): TrainingSpec;
  clearEvalmetricsList(): TrainingSpec;
  addEvalmetrics(value: string, index?: number): TrainingSpec;

  getSh(): SuccessiveHalvingSpec | undefined;
  setSh(value?: SuccessiveHalvingSpec): TrainingSpec;
  hasSh(): boolean;
  clearSh(): TrainingSpec;

  getSeed(): number;
  setSeed(value: number): TrainingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): TrainingSpec;
  hasResources(): boolean;
  clearResources(): TrainingSpec;

  getGpu(): boolean;
  setGpu(value: boolean): TrainingSpec;

  getDistributed(): boolean;
  setDistributed(value: boolean): TrainingSpec;

  getFeatureimportance(): boolean;
  setFeatureimportance(value: boolean): TrainingSpec;

  getNodecount(): number;
  setNodecount(value: number): TrainingSpec;

  getSamplepct(): number;
  setSamplepct(value: number): TrainingSpec;

  getCheckpoint(): CheckpointSpec | undefined;
  setCheckpoint(value?: CheckpointSpec): TrainingSpec;
  hasCheckpoint(): boolean;
  clearCheckpoint(): TrainingSpec;

  getLoglevel(): string;
  setLoglevel(value: string): TrainingSpec;

  getTimeoutinsecs(): number;
  setTimeoutinsecs(value: number): TrainingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingSpec): TrainingSpec.AsObject;
  static serializeBinaryToWriter(message: TrainingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingSpec;
  static deserializeBinaryFromReader(message: TrainingSpec, reader: jspb.BinaryReader): TrainingSpec;
}

export namespace TrainingSpec {
  export type AsObject = {
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    priority: string,
    cvtype: string,
    cv: boolean,
    folds: number,
    split?: DataSplitSpec.AsObject,
    evalmetricsList: Array<string>,
    sh?: SuccessiveHalvingSpec.AsObject,
    seed: number,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    gpu: boolean,
    distributed: boolean,
    featureimportance: boolean,
    nodecount: number,
    samplepct: number,
    checkpoint?: CheckpointSpec.AsObject,
    loglevel: string,
    timeoutinsecs: number,
  }
}

export class UnivariateForecastStatus extends jspb.Message {
  getGridsearchresulturi(): string;
  setGridsearchresulturi(value: string): UnivariateForecastStatus;

  getBaseestimator(): ClassicalEstimatorSpec | undefined;
  setBaseestimator(value?: ClassicalEstimatorSpec): UnivariateForecastStatus;
  hasBaseestimator(): boolean;
  clearBaseestimator(): UnivariateForecastStatus;

  getModeluri(): string;
  setModeluri(value: string): UnivariateForecastStatus;

  getCvresulturi(): string;
  setCvresulturi(value: string): UnivariateForecastStatus;

  getForecasturi(): string;
  setForecasturi(value: string): UnivariateForecastStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnivariateForecastStatus.AsObject;
  static toObject(includeInstance: boolean, msg: UnivariateForecastStatus): UnivariateForecastStatus.AsObject;
  static serializeBinaryToWriter(message: UnivariateForecastStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnivariateForecastStatus;
  static deserializeBinaryFromReader(message: UnivariateForecastStatus, reader: jspb.BinaryReader): UnivariateForecastStatus;
}

export namespace UnivariateForecastStatus {
  export type AsObject = {
    gridsearchresulturi: string,
    baseestimator?: ClassicalEstimatorSpec.AsObject,
    modeluri: string,
    cvresulturi: string,
    forecasturi: string,
  }
}

export class VideoPipelineSpec extends jspb.Message {
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
    featurizer: string,
  }
}

export class WindowSpec extends jspb.Message {
  getInterval(): string;
  setInterval(value: string): WindowSpec;

  getStart(): number;
  setStart(value: number): WindowSpec;

  getLength(): number;
  setLength(value: number): WindowSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WindowSpec): WindowSpec.AsObject;
  static serializeBinaryToWriter(message: WindowSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowSpec;
  static deserializeBinaryFromReader(message: WindowSpec, reader: jspb.BinaryReader): WindowSpec;
}

export namespace WindowSpec {
  export type AsObject = {
    interval: string,
    start: number,
    length: number,
  }
}

